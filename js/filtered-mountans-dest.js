

// Sample data for pages (replace this with actual data fetching)
const tourData = {
     1: `
<div class="col-md-4 page1">
<div class="project-wrap">
    <a href="Mount-kilimanjaro.html" class="img" style="background-image: url(images/Destinations/kilimanjaro-dest.jpg);">

    </a>
    <div class="text p-4">
        <h3><a href="Mount-kilimanjaro.html">Mount Kilimanjaro | Machame Route Trek</a></h3>
        <p class="location"><span class="fa fa-map-marker-alt"></span> Moshi (Starts and Ends)</p>
        <p>Conquer Africa's highest peak with an unforgettable trek up Mount Kilimanjaro. The Machame Route,
            known for its scenic beauty, challenges and rewards trekkers with spectacular views and a sense
            of accomplishment.</p>
        <ul>
            <li><span><i class="fas fa-hiking"></i></span>Trekking Available</li>
            <li><span><i class="fas fa-campground"></i></span>Camping Available</li>
        </ul>
        <a href="Mount-kilimanjaro.html" class="read-more">Read More</a>
    </div>
</div>
</div>


<div class="col-md-4 page1">
<div class="project-wrap">
    <a href="mount-meru.html" class="img" style="background-image: url(images/Destinations/mount-meru-dest.jpg);">

    </a>
    <div class="text p-4">
        <h3><a href="mount-meru.html">Mount Meru |Trekking & wildlife encounters</a></h3>
        <p class="location"><span class="fa fa-map-marker-alt"></span> Arusha Town (Starts) , Meru (Ends)</p>
        <p>Conquer The second-highest mountain in Tanzania standing at 4,562 metres (14,967 feet), Mount Meru offers a challenging climb with breathtaking views of Kilimanjaro and Arusha National Park’s landscapes..</p>
        <ul>
            <li><span><i class="fas fa-hiking"></i></span>Trekking Available</li>
            <li><span><i class="fas fa-campground"></i></span>Camping Available</li>
        </ul>
        <a href="mount-meru.html" class="read-more">Read More</a>
    </div>
</div>
</div>



<div class="col-md-4 page1">
<div class="project-wrap">
    <a href="ol-doinyo-lengai.html" class="img" style="background-image: url(images/Destinations/oldoinyo-lengai-dest.jpg);">
    </a>
    <div class="text p-4">
        <h3><a href="ol-doinyo-lengai.html">Ol Doinyo Lengai | Nighttime summit climbs</a></h3>
        <p class="location"><span class="fa fa-map-marker-alt"></span> Arusha (Starts), Ol Doinyo Lengai (End) </p>
        <p>Known as the “Mountain of God” by the Maasai, Ol Doinyo Lengai is an active volcano located near Lake Natron. It is famous for its unique carbonatite lava and challenging climb.
        </p>
        <ul>
            <li><span><i class="fas fa-hiking"></i></span>Trekking Available</li>
            <li><span><i class="fas fa-hotel"></i></span>Lodges Available</li>
        </ul>
        <a href="ol-doinyo-lengai.html" class="read-more">Read More</a>
    </div>
</div>
</div>

<div class="col-md-4 page3">
<div class="project-wrap">
    <a href="Usambara-Mountains.html" class="img" style="background-image: url(images/Destinations/usambala-dest.jpg);">

    </a>
    <div class="text p-4">
        <h3><a href="Usambara-Mountains.html">Usambara Mountains | Hiking & cultural tours</a></h3>
        <p class="location"><span class="fa fa-map-marker-alt"></span>Arusha (Starts),Tanga (Ends)</p>
        <p>The ranges of approximately 90 kilometres long and about half that wide, the Usambara Mountains are known for their lush green forests, cool climate, 
        and spectacular views over the plains below.</p>
        <ul>
            <li><span><i class="fas fa-hiking"></i></span>Trekking Available</li>
            <li><span><i class="fas fa-hotel"></i></span>Lodges Available</li>  
        </ul>
        <a href="Usambara-Mountains.html" class="read-more">Read More</a>
    </div>
</div>
</div>

<div class="col-md-4 page1">
<div class="project-wrap">
    <a href="livingstone.html" class="img" style="background-image: url(images/Destinations/Livingstone-dest.jpg);">

    </a>
    <div class="text p-4">
        <h3><a href="livingstone.html">Livingstone Mountains | tunning lake views</a></h3>
        <p class="location"><span class="fa fa-map-marker-alt"></span> Arusha (Starts), livingstone mountain(End)
        </p>
        <p>
         Overlooking Lake Nyasa (Lake Malawi), these remote mountains offer stunning views, 
         challenging hikes, and an off-the-beaten-path experience.
        </p>
        <ul>
            <li><span><i class="fas fa-hiking"></i></span>Trekking Available</li>
            <li><span><i class="fas fa-hotel"></i></span>Lodges Available</li>
        </ul>
        <a href="livingstone.html" class="read-more">Read More</a>
    </div>
</div>
</div>


<div class="col-md-4 page4">
    <div class="project-wrap">
        <a href="udzungwa.html" class="img" style="background-image: url(images/Destinations/udzungwa-mountains-dest.jpg);">
        </a>
        <div class="text p-4">
            <h3><a href="udzungwa.html">Udzungwa Mountains | Hiking and Waterfalls</a></h3>
            <p class="location"><span class="fa fa-map-marker-alt"></span> Mikumi (Starts), Udzungwa (End)</p>
            <p>Home of lush rainforeststo unique wildlife and stunning waterfalls. Hike through dense jungle trails to reach the breathtaking Sanje Waterfalls.</p>
            <ul>
                <li><span><i class="fas fa-hiking"></i></span>Guided Hikes Available</li>
                <li><span><i class="fas fa-water"></i></span>Waterfall Treks</li>
            </ul>
            <a href="udzungwa.html" class="read-more">Read More</a>
        </div>
    </div>
</div>


     `

 };


// Function to load and display the content for the selected page
function loadPageContent(pageNumber) {
     const contentArea = document.getElementById('mountains-container');
     contentArea.innerHTML = tourData[pageNumber] || '<p>No content available for this page.</p>';
 
    // Save the current page to localStorage
    localStorage.setItem('currentMountainPage', pageNumber);

    //update active class

    document.querySelectorAll('.page-btn').forEach(button =>{

    button.classList.remove('active');
});


document.querySelector(`.page-btn[data-page="${pageNumber}"]`).classList.add('active'); //set active class to clicked button

}


// Function to initialize the page on load
function initializePage() {

    // Get the last selected page from localStorage, default to 1 if not set
    const savedMountainPage = localStorage.getItem('currentMountainPage') || 1;
    loadPageContent(savedMountainPage);
}



 // Call initializePage on page load
 window.addEventListener('load', initializePage);

 // Event listener for pagination buttons
 document.querySelectorAll('.page-btn').forEach(button => {
     button.addEventListener('click', function () {
         const page = parseInt(this.getAttribute('data-page'));
         loadPageContent(page);
     });
 });


 //Event listeners for previous and next buttons
    document.getElementById('page-prev').addEventListener('click', function (e) {
      e.preventDefault();
      let currentPage = parseInt(document.querySelector('.page-btn.active').getAttribute('data-page'));
      if (currentPage > 1) {
        loadPageContent(currentPage - 1);
      }
    });

    document.querySelector('.page-next').addEventListener('click', function (e) {
      e.preventDefault();
      let currentPage = parseInt(document.querySelector('.page-btn.active').getAttribute('data-page'));
      if (currentPage < Object.keys(tourData).length) {
        loadPageContent(currentPage + 1);
      }
    });
 
 