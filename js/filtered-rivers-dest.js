

// Sample data for pages (replace this with actual data fetching)
const tourData = {
     1: `    

<div class="col-md-4 page3">
     <div class="project-wrap">
         <a href="Selous-Game-Reserve.html" class="img" style="background-image: url(images/Destinations/selous-dest.jpg);">

         </a>
         <div class="text p-4">
             <h3><a href="Selous-Game-Reserve.html">Selous Game Reserve | Boat Safari</a></h3>
             <p class="location"><span class="fa fa-map-marker-alt"></span> Dar es Salaam (Starts), Selous (End)
             </p>
             <p>Explore the vast wilderness of Selous Game Reserve, one of Africa's largest protected areas.
                 Enjoy unique boat safaris on the Rufiji River and witness an abundance of wildlife in their
                 natural habitat.</p>
             <ul>
                 <li><span><i class="fas fa-campground"></i></span>Camping Available</li>
                 <li><span><i class="fas fa-hotel"></i></span>Lodges Available</li>
             </ul>
             <a href="Selous-Game-Reserve.html" class="read-more">Read More</a>
         </div>
     </div>
</div>
     

<div class="col-md-4 page4">
    <div class="project-wrap">
        <a href="rufiji.html" class="img" style="background-image: url(images/Destinations/Rufiji-river-dest.jpg);">
        </a>
        <div class="text p-4">
            <h3><a href="rufiji.html">Rufiji River | Boat Safari</a></h3>
            <p class="location"><span class="fa fa-map-marker-alt"></span> Dar es Salaam (Starts), Selous (End)</p>
            <p>Cruise through the waters of Rufiji River, spotting hippos and crocodiles in the lush landscapes of Selous Game Reserve. It's Easy accessible from Dar es Salaam.</p>
            <ul>
                <li><span><i class="fas fa-ship"></i></span>Boat Safaris Available</li>
                <li><span><i class="fas fa-campground"></i></span>Camping Available</li>
            </ul>
            <a href="rufiji.html" class="read-more">Read More</a>
        </div>
    </div>
</div>

<div class="col-md-4 page3">
     <div class="project-wrap">
         <a href="pangani.html" class="img" style="background-image: url(images/Destinations/Pangani_River_dest.jpg);">
         </a>
         <div class="text p-4">
             <h3><a href="pangani.html">Pangani River | Cultural and Fishing Tour</a></h3>
             <p class="location"><span class="fa fa-map-marker-alt"></span> Tanga (Starts), Pangani District (End)</p>
             <p>Discover the historical town of Pangani and enjoy fishing excursions on the river, rich with cultural heritage and natural beauty.</p>
             <ul>
                 <li><span><i class="fas fa-fish"></i></span>Fishing Tours Available</li>
                 <li><span><i class="fas fa-hotel"></i></span>Lodges Available</li>
             </ul>
             <a href="pangani.html" class="read-more">Read More</a>
         </div>
     </div>
 </div>



<div class="col-md-4 page2">
    <div class="project-wrap">
        <a href="gombe.html" class="img" style="background-image: url(images/Destinations/gombe-dest.jpg);">
        </a>
        <div class="text p-4">
            <h3><a href="gombe.html">Gombe Stream | Chimpanzee Tracking</a></h3>
            <p class="location"><span class="fa fa-map-marker-alt"></span> Kigoma (Starts)  and Dar es Salaam (Ends)</p>
            <p>Venture into Gombe Stream National Park, famous for its chimpanzee population. Follow in the footsteps of Jane Goodall and enjoy close encounters with these incredible primates in their natural habitat.</p>
            <ul>
                <li><span><i class="fas fa-binoculars"></i></span>Chimpanzee Tracking</li>
                <li><span><i class="fas fa-hiking"></i></span>Forest Hiking</li>
            </ul>
            <a href="gombe.html" class="read-more">Read More</a>
        </div>
    </div>
</div>


<div class="col-md-4 page2">
    <div class="project-wrap">
        <a href="mara-river.html" class="img" style="background-image: url(images/Destinations/mara-river.jpg);">
        </a>
        <div class="text p-4">
            <h3><a href="mara-river.html">Mara River | The Great Migration</a></h3>
            <p class="location"><span class="fa fa-map-marker-alt"></span> Serengeti National Park</p>
            <p>Witness the spectacular Mara River crossing, a highlight of the Great Migration. This iconic river is known for its dramatic crossings, where millions of wildebeest and zebras brave the crocodile-infested waters.</p>
            <ul>
                <li><span><i class="fas fa-binoculars"></i></span>Migration Viewing</li>
                <li><span><i class="fas fa-camera"></i></span>Photography Opportunities</li>
            </ul>
            <a href="mara-river.html" class="read-more">Read More</a>
        </div>
    </div>
</div>


<div class="col-md-4 page2">
    <div class="project-wrap">
        <a href="kagera.html" class="img" style="background-image: url(images/Destinations/kagera-river.webp);">
        </a>
        <div class="text p-4">
            <h3><a href="kagera.html">Kagera River | Source of the Nile</a></h3>
            <p class="location"><span class="fa fa-map-marker-alt"></span> Kagera Region</p>
            <p>Visit the Kagera River, one of the remote tributaries of the Nile, and immerse yourself in the region’s rich cultural history. This peaceful river is surrounded by lush vegetation and vibrant local communities.</p>
            <ul>
                <li><span><i class="fas fa-binoculars"></i></span>Bird Watching</li>
                <li><span><i class="fas fa-hiking"></i></span>Cultural Hikes</li>
            </ul>
            <a href="kagera.html" class="read-more">Read More</a>
        </div>
    </div>
</div>


     `
 };


// Function to load and display the content for the selected page
function loadPageContent(pageNumber) {
     const contentArea = document.getElementById('rivers-container');
     contentArea.innerHTML = tourData[pageNumber] || '<p>No content available for this page.</p>';
 

      // Save the current page to localStorage
      localStorage.setItem('currentRiverPage', pageNumber);

    //update active class

    document.querySelectorAll('.page-btn').forEach(button =>{

    button.classList.remove('active');
});


document.querySelector(`.page-btn[data-page="${pageNumber}"]`).classList.add('active'); //set active class to clicked button

}



// Function to initialize the page on load
function initializePage() {

    // Get the last selected page from localStorage, default to 1 if not set
    const savedRiverPage = localStorage.getItem('currentRiverPage') || 1;
    loadPageContent(savedRiverPage);
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
 
 

