$(document).ready(function() {
    $('#bookingForm').submit(function(e) {
        
        // Validate the email field
        const email = $('#form-field-email').val();
        if (!email || !validateEmail(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Email',
                text: 'Please provide a valid email address.',
            });
            return;
        }
            const fullPhoneNumber = phoneInput.getNumber();

        // Validate phone number
        if (!phoneInput.isValidNumber()) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Phone Number',
                text: 'Please enter a valid phone number.',
            });
            return; // Stop further processing
        }

        // Show loading popup
        Swal.fire({
            title: 'Processing...',
            text: 'Please wait while we process your booking.',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading(); // Trigger loading spinner
            }
        });

        
e.preventDefault();

        // Submit the form using AJAX
        $.ajax({
            url: 'booking_process.php',
            type: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            
            success: function(response) {
                Swal.fire({
                    icon: response.status === 'error' ? 'error' : 'success',
                    title: response.status,
                    text: response.message,
                }).then(() => {
                    if (response.status === 'success') {
                        $('#bookingForm')[0].reset();
                    }
                });
            },
            error: function() {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Server Not Responding. Please try again later!',
                });
            }
        });
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
