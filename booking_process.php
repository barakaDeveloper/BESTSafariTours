<?php

header('Content-Type: application/json');

// Import PHPMailer classes
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Autoload dependencies

// Database connection details
$host = 'localhost';
$dbname = 'bm_safaris';
$username = 'root';
$password = '';

// Connect to the database
$conn = new mysqli($host, $username, $password, $dbname);

// Check database connection
if ($conn->connect_error) {
    echo json_encode([
        "status" => "error",
        "message" => "Database connection failed: " . $conn->connect_error
    ]);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sanitize and assign inputs
    $full_name = trim($conn->real_escape_string($_POST['name']));
    $email = trim($conn->real_escape_string($_POST['email']));
    $phone = trim($conn->real_escape_string($_POST['full_Phone']));
    $arrival_date = trim($conn->real_escape_string($_POST['arrival-date']));
    $departure_date = trim($conn->real_escape_string($_POST['departure-date']));
    $adults = isset($_POST['adults']) ? (int)$_POST['adults'] : 0;
    $children = isset($_POST['children']) ? (int)$_POST['children'] : 0;
    $destination = trim($conn->real_escape_string($_POST['destination']));
    $accommodation = trim($conn->real_escape_string($_POST['accommodation'])); // Adjusted spelling
    $budget_range = trim($conn->real_escape_string($_POST['my-budget']));
    $additional_info = trim($conn->real_escape_string($_POST['message']));

    // Dynamic required field validation
    $required_fields = [
        'full_name' => $full_name,
        'email' => $email,
        'phone' => $phone,
        'arrival_date' => $arrival_date,
        'departure_date' => $departure_date,
        'destination' => $destination,
        'accommodation' => $accommodation,
        'budget_range' => $budget_range,
    ];

    

    // Additional validations
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode([
            
            "status" => "error",
            "message" => "Invalid email format."
        ]);
        return;
    }

    if (!preg_match("/^\+\d{10,15}$/", $phone)) { // Check international phone number format
        echo json_encode([
            "status" => "Error",
            "message" => "Invalid phone number format."
        ]);
        return;
    }

    // Insert data into the database
    $sql = "INSERT INTO bookings (full_name, email, phone, arrival_date, departure_date, adults, children, destination, accommodation, budget_range, additional_info)
            VALUES ('$full_name', '$email', '$phone', '$arrival_date', '$departure_date', $adults, $children, '$destination', '$accommodation', '$budget_range', '$additional_info')";

    if ($conn->query($sql) === TRUE) {
        // Send email notifications using PHPMailer
        $mail = new PHPMailer(true);
        try {
            // Server settings
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'bmsafaristanzania@gmail.com'; // Sender email
            $mail->Password = 'nhbc awza jzhq rhze'; // Use Gmail App Password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;

            // Send confirmation email to the client
            $mail->setFrom('bmsafaristanzania@gmail.com', 'BM Safaris');
            $mail->addAddress($email, $full_name);
            $mail->isHTML(true);
            $mail->Subject = 'Booking Confirmation - BM Safaris Tanzania';
            $mail->Body = "
                <h1>Thank you for booking with BM Safaris!</h1>
                <p>Your booking to <strong>$destination</strong> has been received.</p>
                <p>Arrival Date: $arrival_date<br>Departure Date: $departure_date</p>
                <p>We will contact you soon with further details.</p>
                <p><strong>Contact Us:</strong><br>
                Phone: +255 623 171 089<br>
                Email: bmsafaristanzania@gmail.com</p>
            ";
            $mail->send();

            // Send notification email to BM Safari
            $mail->clearAddresses();
            $mail->addAddress('bmsafaristanzania@gmail.com');
            $mail->Subject = 'New Booking Received';
            $mail->Body = "
                <h1>New Booking Details</h1>
                <p><strong>Name:</strong> $full_name</p>
                <p><strong>Email:</strong> $email</p>
                <p><strong>Phone:</strong> $phone</p>
                <p><strong>Arrival Date:</strong> $arrival_date</p>
                <p><strong>Departure Date:</strong> $departure_date</p>
                <p><strong>Adults:</strong> $adults</p>
                <p><strong>Children:</strong> $children</p>
                <p><strong>Destination:</strong> $destination</p>
                <p><strong>Accommodation:</strong> $accommodation</p>
                <p><strong>Budget Range:</strong> $budget_range</p>
                <p><strong>Additional Information:</strong> $additional_info</p>
            ";
            $mail->send();

            echo json_encode([
                "status" => "success",
                "message" => "Booking confirmed and email sent successfully!"
            ]);
        } catch (Exception $e) {
            echo json_encode([
                "status" => "error",
                "message" => "Booking saved, but email could not be sent. Error: " . $mail->ErrorInfo
            ]);
        }
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Database error: " . $conn->error
        ]);
    }
}

$conn->close();
?>
