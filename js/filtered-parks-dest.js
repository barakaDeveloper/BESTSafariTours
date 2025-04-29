

// Sample data for pages (replace this with actual data fetching)
const tourData = {
     1: `
<div class="col-md-4 page1">
<div class="project-wrap">
    <a href="serengeti.html" class="img" style="background-image: url(images/Destinations/serengeti-dest.jpeg);">
        <span class="price">$2,500 to $5,000/person</span>
    </a>
    <div class="text p-4">
        <h3><a href="serengeti.html">Serengeti National Park | Great Migration Safari</a></h3>
        <p class="location"><span class="fa fa-map-marker-alt"></span> Arusha (Starts), Serengeti (End) </p>
        <p>Experience a millions of wildebeest, zebras, and gazelles
            migrate across the Serengeti plains, accompanied by breathtaking landscapes and diverse
            wildlife.</p>
        <ul>
            <li><span><i class="fas fa-campground"></i></span>Camping Available</li>
            <li><span><i class="fas fa-hotel"></i></span>Lodges Available</li>
        </ul>
        <a href="serengeti.html" class="read-more">Read More</a>
    </div>
</div>
</div>
<div class="col-md-4 page1">
<div class="project-wrap">
    <a href="crater.html" class="img" style="background-image: url(images/Destinations/Crater-dest.jpg);">
        <span class="price">$1,200 to $1,800/person</span>
    </a>
    <div class="text p-4">
        <h3><a href="crater.html">Ngorongoro Crater | Wildlife Safari</a></h3>
        <p class="location"><span class="fa fa-map-marker-alt"></span> Arusha (Starts), Ngorongoro (End)
        </p>
        <p>Home to an incredible diversity of wildlife, the Ngorongoro Crater offers stunning views and a
            unique ecosystem. See the Big Five in this UNESCO World Heritage site, where ancient landscapes
            meet vibrant fauna.</p>
        <ul>
            <li><span><i class="fas fa-campground"></i></span>Camping Available</li>
            <li><span><i class="fas fa-hotel"></i></span>Lodges Available</li>
        </ul>
        <a href="crater.html" class="read-more">Read More</a>
    </div>
</div>
</div>

<div class="col-md-4 page1">
<div class="project-wrap">
    <a href="tarangire.html" class="img" style="background-image: url(images/Destinations/Tara-dest.jpg);">
        <span class="price">$900 to $1,500/person</span>
    </a>
    <div class="text p-4">
        <h3><a href="tarangire.html">Tarangire National Park | Elephant Safari</a></h3>
        <p class="location"><span class="fa fa-map-marker-alt"></span> Arusha (Starts), Tarangire (End) </p>
        <p>Known for its large elephant herds and baobab trees, Tarangire National Park offers a serene
            safari experience. Enjoy close encounters with diverse wildlife in this lesser-visited gem of
            Tanzania.</p>
        <ul>
            <li><span><i class="fas fa-campground"></i></span>Camping Available</li>
            <li><span><i class="fas fa-hotel"></i></span>Lodges Available</li>
        </ul>
        <a href="tarangire.html" class="read-more">Read More</a>
    </div>
</div>
</div>

<div class="col-md-4 page1">
<div class="project-wrap">
    <a href="mikumi.html" class="img" style="background-image: url(images/Destinations/Mikumi-National-Park-dest.jpg);">
        <span class="price">$1,400 to $2,000/person</span>
    </a>
    <div class="text p-4">
        <h3><a href="mikumi.html">Mikumi National Park | Game drives & Hippo pools</a></h3>
        <p class="location"><span class="fa fa-map-marker-alt"></span> Dar es Salaam (Starts), Mikumi (End)
        </p>
        <p>Explore the vast wilderness of Mikumi National Park,
         Often referred to as a mini-Serengeti, Mikumi features an array of 
         wildlife including giraffes, elephants, and hippos.</p>
        <ul>
            <li><span><i class="fas fa-campground"></i></span>Camping Available</li>
            <li><span><i class="fas fa-hotel"></i></span>Lodges Available</li>
        </ul>
        <a href="mikumi.html" class="read-more">Read More</a>
    </div>
</div>
</div>


<div class="col-md-4 page1">
    <div class="project-wrap">
        <a href="arusha-park.html" class="img" style="background-image: url(images/Destinations/Arusha-park-dest.jpg);">
            <span class="price">$800 to $1,200/person</span>
        </a>
        <div class="text p-4">
            <h3><a href="arusha-park.html">Arusha National Park | Scenic Safari</a></h3>
            <p class="location"><span class="fa fa-map-marker-alt"></span> Arusha (Starts) and Arusha Town (Ends)</p>
            <p>Discover the beauty of Arusha National Park, home to the scenic Momella Lakes and Mount Meru. Enjoy game drives, Photographic,Riding safari , and walking safaris in this diverse landscape.</p>
            <ul>
                <li><span><i class="fas fa-hiking"></i></span>Walking Safaris Available</li>
                <li><span><i class="fa fa-bicycle"></i></span>Riding Tours</li>
            </ul>
            <a href="arusha-park.html" class="read-more">Read More</a>
        </div>
    </div>
</div>


<div class="col-md-4 page1">
<div class="project-wrap">
    <a href="ruaha.html" class="img" style="background-image: url(images/Destinations/Ruaha-dest.jpg);">
        <span class="price">$1,800 to $2,000/person</span>
    </a>
    <div class="text p-4">
        <h3><a href="ruaha.html">Ruaha National Park | Bird Watching</a></h3>
        <p class="location"><span class="fa fa-map-marker-alt"></span> Iringa (Starts), Ruaha (End) </p>
        <p>A birdwatcher's paradise, Ruaha National Park boasts over 500 bird species and stunning
            landscapes. From lions and elephants to rare bird sightings, this park offers a unique safari
            experience away from the crowds.</p>
        <ul>
            <li><span><i class="fas fa-campground"></i></span>Camping Available</li>
            <li><span><i class="fas fa-hotel"></i></span>Lodges Available</li>
        </ul>
        <a href="ruaha.html" class="read-more">Read More</a>
    </div>
</div>
</div>

     `,
     2: `
     <div class="col-md-4 page2">
    <div class="project-wrap">
        <a href="katavi.html" class="img" style="background-image: url(images/Destinations/katavi-national-park-dest.jpg);">
            <span class="price">$1,500 to $2,000/person</span>
        </a>
        <div class="text p-4">
            <h3><a href="katavi.html">Katavi National Park | Remote Wilderness Safari</a></h3>
            <p class="location"><span class="fa fa-map-marker-alt"></span> Mpanda (Starts and Ends)</p>
            <p>Katavi National park, one of Tanzania’s most remote parks. Encounter large herds of buffalo and elephants, and enjoy the solitude of this pristine landscape.</p>
            <ul>
                <li><span><i class="fas fa-binoculars"></i></span>Game Drives</li>
                <li><span><i class="fas fa-campground"></i></span>Camping Available</li>
            </ul>
            <a href="katavi.html" class="read-more">Read More</a>
        </div>
    </div>
</div>
     <div class="col-md-4 page2">
    <div class="project-wrap">
        <a href="mkomazi-national-park.html" target="_blank" class="img" style="background-image: url(./images/Destinations/An-adult-black-rhino-at-Mkomazi-National-Park-Tanzania.jpg);">
            <span class="price">$800 to $4,500/person</span>
        </a>
        <div class="text p-4">
            <h3><a href="mkomazi-national-park.html" target="_blank">Mkomazi National Park | Rare Wildlife Sanctuary</a></h3>
            <p class="location"><span class="fa fa-map-marker-alt"></span> Kilimanjaro & Tanga Regions</p>
            <p>Explore Tanzania’s hidden gem, home to endangered black rhinos, wild dogs, and the iconic gerenuk. A rugged, off-the-beaten-path safari experience bordering Kenya’s Tsavo West.</p>
            <ul>
                <li><span><i class="fas fa-paw"></i></span>Rhino Tracking</li>
                <li><span><i class="fas fa-hotel"></i></span>Luxury Tented Camps</li>
            </ul>
            <a href="mkomazi-national-park.html" target="_blank"  class="read-more">Read More</a>
        </div>
    </div>
</div>
        
`

 };


// Function to load and display the content for the selected page
function loadPageContent(pageNumber) {
     const contentArea = document.getElementById('parks-container');
     contentArea.innerHTML = tourData[pageNumber] || '<p>No content available for this page.</p>';
 

      // Save the current page to localStorage
      localStorage.setItem('currentParkPage', pageNumber);


    //update active class

    document.querySelectorAll('.page-btn').forEach(button =>{

    button.classList.remove('active');
});


document.querySelector(`.page-btn[data-page="${pageNumber}"]`).classList.add('active'); //set active class to clicked button

}


// Function to initialize the page on load
function initializePage() {

    // Get the last selected page from localStorage, default to 1 if not set
    const savedParkPage = localStorage.getItem('currentParkPage') || 1;
    loadPageContent(savedParkPage);
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
 
 