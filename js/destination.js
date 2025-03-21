

// Sample data for pages (replace this with actual data fetching)
const tourData = {
     1: `
<div class="col-md-4 page1">
<div class="project-wrap">
    <a href="serengeti.html" class="img" style="background-image: url(images/Destinations/serengeti-dest.jpeg);">
        <span class="price">$2,500 to 3,200/person</span>
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
        <span class="price">$1,200 to 3,450/person</span>
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
        <span class="price">$900 to 1,360/person</span>
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
    <a href="mt-kilimanjaro.html" class="img" style="background-image: url(images/Destinations/kilimanjaro-dest.jpg);">
        <span class="price">$2,000 to 2,121/person</span>
    </a>
    <div class="text p-4">
        <h3><a href="mt-kilimanjaro.html">Mount Kilimanjaro | Machame Route Trek</a></h3>
        <p class="location"><span class="fa fa-map-marker-alt"></span> Moshi (Starts and Ends)</p>
        <p>Conquer Africa's highest peak with an unforgettable trek up Mount Kilimanjaro. The Machame Route,
            known for its scenic beauty, challenges and rewards trekkers with spectacular views and a sense
            of accomplishment.</p>
        <ul>
            <li><span><i class="fas fa-hiking"></i></span>Trekking Available</li>
            <li><span><i class="fas fa-campground"></i></span>Camping Available</li>
        </ul>
        <a href="mt-kilimanjaro.html" class="read-more">Read More</a>
    </div>
</div>
</div>

<div class="col-md-4 page1">
<div class="project-wrap">
    <a href="zanzibar.html" class="img" style="background-image: url(images/Destinations/Zanzibar-dest.jpg);">
        <span class="price">$1,500 to 2,830/person</span>
    </a>
    <div class="text p-4">
        <h3><a href="zanzibar.html">Zanzibar Island | Beach and Culture Tour</a></h3>
        <p class="location"><span class="fa fa-map-marker-alt"></span> Zanzibar (Starts and Ends)</p>
        <p>Discover the exotic charm of Zanzibar, a tropical paradise with stunning beaches, historical
            spice plantations, and vibrant markets. Relax by the turquoise waters and immerse yourself in
            the island's rich cultural heritage.</p>
        <ul>
            <li><span><i class="fas fa-hotel"></i></span>Lodges Available</li>
            <li><span class="fas fa-umbrella-beach"></span>Near Beach</li>
        </ul>
        <a href="zanzibar.html" class="read-more">Read More</a>
    </div>
</div>
</div>

<div class="col-md-4 page1">
<div class="project-wrap">
    <a href="lake-manyara.html" class="img" style="background-image: url(images/Destinations/Lake-Manyara-dest.jpg);">
        <span class="price">$1,100 to 3,800/person</span>
    </a>
    <div class="text p-4">
        <h3><a href="lake-manyara.html">Lake Manyara | Tree-Climbing Lions Safari</a></h3>
        <p class="location"><span class="fa fa-map-marker-alt"></span> Arusha (Starts), Manyara (End) </p>
        <p>Famed for its tree-climbing lions and flamingo-filled lake, Lake Manyara offers a picturesque
            setting for an adventurous safari. Discover its diverse wildlife and stunning landscapes in just
            three days.</p>
        <ul>
            <li><span><i class="fas fa-campground"></i></span>Camping Available</li>
            <li><span><i class="fas fa-hotel"></i></span>Lodges Available</li>
        </ul>
        <a href="lake-manyara.html" class="read-more">Read More</a>
    </div>
</div>
</div>


     `,
     2: ` 
<div class="col-md-4 page2">
<div class="project-wrap">
    <a href="mikumi.html" class="img" style="background-image: url(images/Destinations/mikumi-national-park2.jpeg);">
        <span class="price">$1,000 to 4,325/person</span>
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

<div class="col-md-4 page2">
    <div class="project-wrap">
        <a href="arusha-park.html" class="img" style="background-image: url(images/Destinations/Arusha-park-dest.jpg);">
            <span class="price">$800 to 1,920/person</span>
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

<div class="col-md-4 page2">
    <div class="project-wrap">
        <a href="lake-natron.html" class="img" style="background-image: url(images/Destinations/natron-dest.jpg);">
            <span class="price">$3,350 to  4,460 /person</span>
        </a>
        <div class="text p-4">
            <h3><a href="lake-natron.html">Lake Natron | Flamingos and Volcanic Views</a></h3>
            <p class="location"><span class="fa fa-map-marker-alt"></span> Arusha (Starts), Lake Natron (End)</p>
            <p>Visit Lake Natron, known for its red-hued waters and large flocks of flamingos.
             Marvel at the stunning backdrop of Ol Doinyo Lengai, Tanzania’s active volcano.</p>
            <ul>
                <li><span><i class="fas fa-binoculars"></i></span>Bird Watching</li>
                <li><span><i class="fas fa-hiking"></i></span>Volcano Treks</li>
            </ul>
            <a href="lake-natron.html" class="read-more">Read More</a>
        </div>
    </div>
</div>

<div class="col-md-4 page2">
    <div class="project-wrap">
        <a href="pemba.html" class="img" style="background-image: url(images/Destinations/pemba-island-dest.jpg);">
            <span class="price">$1,200 to 3,237/person</span>
        </a>
        <div class="text p-4">
            <h3><a href="pemba.html">Pemba Island | Diving and Culture</a></h3>
            <p class="location"><span class="fa fa-map-marker-alt"></span> Zanzibar (Starts) Pemba Islands (Ends)</p>
            <p>Explore the unspoiled beauty of Pemba Island, known for its rich marine life and lush clove plantations. Enjoy world-class diving, pristine beaches, and a tranquil atmosphere.</p>
            <ul>
                <li><span><i class="fas fa-water"></i></span>Scuba Diving</li>
                <li><span><i class="fas fa-tree"></i></span>Clove Plantation Tours</li>
            </ul>
            <a href="pemba.html" class="read-more">Read More</a>
        </div>
    </div>
</div>

<div class="col-md-4 page2">
    <div class="project-wrap">
        <a href="lake-eyasi.html" class="img" style="background-image: url(images/Destinations/lake-eyas-dest.jpg);">
            <span class="price">$2,394 to 3,750/person</span>
        </a>
        <div class="text p-4">
            <h3><a href="lake-eyasi.html">Lake Eyasi | Cultural Experience</a></h3>
            <p class="location"><span class="fa fa-map-marker-alt"></span> Arusha (Starts and Ends)</p>
            <p>Visit Lake Eyasi, a picturesque salt lake home to the Hadzabe and Datoga tribes. Engage in cultural interactions, including hunting with the Hadzabe and blacksmithing with the Datoga people.</p>
            <ul>
                <li><span><i class="fas fa-users"></i></span>Cultural Tours</li>
                <li><span><i class="fas fa-map-signs"></i></span>Guided Walks</li>
            </ul>
            <a href="lake-eyasi.html" class="read-more">Read More</a>
        </div>
    </div>
</div>


<div class="col-md-4 page2">
    <div class="project-wrap">
        <a href="mafia-island.html" class="img" style="background-image: url(images/Destinations/mafia-island-dest.jpg);">
            <span class="price">$1,000 to 2,348/person</span>
        </a>
        <div class="text p-4">
            <h3><a href="mafia-island.html">Mafia Island | Marine Park Paradise</a></h3>
            <p class="location"><span class="fa fa-map-marker-alt"></span> Dar es Salaam (Starts), Mafia Island (End)</p>
            <p>Visit the serene Mafia Island, a haven for snorkelers and divers. Explore the rich coral reefs of Mafia Island Marine Park and swim with whale sharks in crystal-clear waters.</p>
            <ul>
                <li><span><i class="fas fa-water"></i></span>Snorkeling and Diving</li>
                <li><span><i class="fas fa-fish"></i></span>Whale Shark Tours</li>
            </ul>
            <a href="mafia-island.html" class="read-more">Read More</a>
        </div>
    </div>
</div>


`,
     3:`
     
<div class="col-md-4 page3">
<div class="project-wrap">
    <a href="mount-meru.html" class="img" style="background-image: url(images/Destinations/mount-meru-dest.jpg);">
        <span class="price">$2,000 to 2,346/person</span>
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

<div class="col-md-4 page3">
<div class="project-wrap">
    <a href="ol-doinyo-lengai.html" class="img" style="background-image: url(images/Destinations/oldoinyo-lengai-dest.jpg);">
        <span class="price">$1,950 to 3,734/person</span>
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
         <a href="selous.html" class="img" style="background-image: url(images/Destinations/selous-dest.jpg);">
             <span class="price">$1,990 to 3,789/person</span>
         </a>
         <div class="text p-4">
             <h3><a href="selous.html">Selous Game Reserve | Boat Safari</a></h3>
             <p class="location"><span class="fa fa-map-marker-alt"></span> Dar es Salaam (Starts), Selous (End)
             </p>
             <p>Explore the vast wilderness of Selous Game Reserve, one of Africa's largest protected areas.
                 Enjoy unique boat safaris on the Rufiji River and witness an abundance of wildlife in their
                 natural habitat.</p>
             <ul>
                 <li><span><i class="fas fa-campground"></i></span>Camping Available</li>
                 <li><span><i class="fas fa-hotel"></i></span>Lodges Available</li>
             </ul>
             <a href="selous.html" class="read-more">Read More</a>
         </div>
     </div>
</div>
     
     
<div class="col-md-4 page3">
<div class="project-wrap">
    <a href="ruaha.html" class="img" style="background-image: url(images/Destinations/Ruaha-dest.jpg);">
        <span class="price">$1,860 to 6,438/person</span>
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



<div class="col-md-4 page3">
    <div class="project-wrap">
        <a href="lake-victoria.html" class="img" style="background-image: url(images/Destinations/Lake-victoria-dest.jpg);">
            <span class="price">$1,200 to 4,434/person</span>
        </a>
        <div class="text p-4">
            <h3><a href="lake-victoria.html">Lake Victoria | Island Adventure</a></h3>
            <p class="location"><span class="fa fa-map-marker-alt"></span> Mwanza (Starts), Lake Victoria (End)</p>
            <p>Lake Victoria is one of the African Great Lakes. With a surface area of approximately 59,947 km2 Experience the tranquil beauty of Africa’s largest lake, with boat rides, fishing trips, and island explorations.</p>
            <ul>
                <li><span><i class="fas fa-ship"></i></span>Boat Tours Available</li>
                <li><span><i class="fas fa-hotel"></i></span>Lodges Available</li>
            </ul>
            <a href="lake-victoria.html" class="read-more">Read More</a>
        </div>
    </div>
</div>



<div class="col-md-4 page3">
<div class="project-wrap">
    <a href="usambara.html" class="img" style="background-image: url(images/Destinations/usambala-dest.jpg);">
        <span class="price">$1,500 to 6,223/person</span>
    </a>
    <div class="text p-4">
        <h3><a href="usambara.html">Usambara Mountains | Hiking & cultural tours</a></h3>
        <p class="location"><span class="fa fa-map-marker-alt"></span>Arusha (Starts),Tanga (Ends)</p>
        <p>The ranges of approximately 90 kilometres long and about half that wide, the Usambara Mountains are known for their lush green forests, cool climate, 
        and spectacular views over the plains below.</p>
        <ul>
            <li><span><i class="fas fa-hiking"></i></span>Trekking Available</li>
            <li><span><i class="fas fa-hotel"></i></span>Lodges Available</li>  
        </ul>
        <a href="usambara.html" class="read-more">Read More</a>
    </div>
</div>
</div>


     `,
     4:`

<div class="col-md-4 page4">
<div class="project-wrap">
    <a href="livingstone.html" class="img" style="background-image: url(images/Destinations/Livingstone-dest.jpg);">
        <span class="price">$1,399 to 2,378/person</span>
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

<div class="col-md-4 page2">
    <div class="project-wrap">
        <a href="katavi.html" class="img" style="background-image: url(images/Destinations/katavi-national-park-dest.jpg);">
            <span class="price">$1,580 to 2,221/person</span>
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


<div class="col-md-4 page4">
    <div class="project-wrap">
        <a href="rufiji.html" class="img" style="background-image: url(images/Destinations/Rufiji-river-dest.jpg);">
            <span class="price">$1,030 to 3,322/person</span>
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
             <span class="price">$1,100 to 3,432/person</span>
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


 
<div class="col-md-4 page4">
    <div class="project-wrap">
        <a href="udzungwa.html" class="img" style="background-image: url(images/Destinations/udzungwa-mountains-dest.jpg);">
            <span class="price">$6,300 to 3,213/person</span>
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



<div class="col-md-4 page3">
    <div class="project-wrap">
        <a href="lake-nyasa.html" class="img" style="background-image: url(images/Destinations/lake-nyasa-dest.jpg);">
            <span class="price">$800 to 3,000/person</span>
        </a>
        <div class="text p-4">
            <h3><a href="lake-nyasa.html">Lake Nyasa | Beach Relaxation</a></h3>
            <p class="location"><span class="fa fa-map-marker-alt"></span> Dar es Salaam (Starts), Matema (End)</p>
            <p>Lake Nyasa, also known as Lake Malawi, is the southernmost lake in the East African Rift System. It offers beautiful beaches and crystal-clear waters perfect for relaxation.</p>
            <ul>
                <li><span><i class="fas fa-umbrella-beach"></i></span>Beach Relaxation Available</li>
                <li><span><i class="fas fa-hotel"></i></span>Lodges Available</li>
            </ul>
            <a href="lake-nyasa.html" class="read-more">Read More</a>
        </div>
    </div>
</div>


     `
     ,
     5:`
   
<div class="col-md-4 page5">
<div class="project-wrap">
    <a href="mahale.html" class="img" style="background-image: url(images/Destinations/mahale-dest.jpg);">
        <span class="price">$1,500 to 3,322/person</span>
    </a>
    <div class="text p-4">
        <h3><a href="mahale.html">Mahale Mountains | Chimpanzee Trekking</a></h3>
        <p class="location"><span class="fa fa-map-marker-alt"></span> Kigoma (Starts), Mahale (End) </p>
        <p> Mahale Mountains contains a wild chimpanzees
            in their natural habitat. This off-the-beaten-path experience combines beautiful scenery with
            unforgettable wildlife encounters.</p>
        <ul>
            <li><span><i class="fas fa-campground"></i></span>Camping Available</li>
            <li><span><i class="fas fa-hotel"></i></span>Lodges Available</li>
        </ul>
        <a href="mahale.html" class="read-more">Read More</a>
    </div>
</div>
</div>

<div class="col-md-4 page5">
    <div class="project-wrap">
        <a href="saanane.html" class="img" style="background-image: url(images/Destinations/saanane-dest.jpg);">
            <span class="price">$934 to 1,211/person</span>
        </a>
        <div class="text p-4">
            <h3><a href="saanane.html">Saanane Island | Island Wildlife Experience</a></h3>
            <p class="location"><span class="fa fa-map-marker-alt"></span> Mwanza (Starts and Ends)</p>
            <p>Discover the tranquility of Saanane Island, the smallest national park in Tanzania. Enjoy guided walks, picnic spots, and sightings of impalas, zebras, and a variety of bird species.</p>
            <ul>
                <li><span><i class="fas fa-hiking"></i></span>Guided Nature Walks</li>
                <li><span><i class="fas fa-umbrella-beach"></i></span>Picnic Areas</li>
            </ul>
            <a href="saanane.html" class="read-more">Read More</a>
        </div>
    </div>
    </div>

<div class="col-md-4 page5">
    <div class="project-wrap">
        <a href="bagamoyo.html" class="img" style="background-image: url(images/Destinations/bagamoyo-dest.jpg);">
            <span class="price">$2,340 to 3,000/person</span>
        </a>
        <div class="text p-4">
            <h3><a href="bagamoyo.html">Bangoyo Island | Beach Day Escape</a></h3>
            <p class="location"><span class="fa fa-map-marker-alt"></span> Dar es Salaam (Starts and Ends)</p>
            <p>Escape to Bangoyo Island, a small uninhabited island just off the coast of Dar es Salaam. Enjoy a day of sunbathing, swimming, and snorkeling in this laid-back beach paradise.</p>
            <ul>
                <li><span><i class="fas fa-umbrella-beach"></i></span>Beach Relaxation</li>
                <li><span><i class="fas fa-water"></i></span>Snorkeling</li>
            </ul>
            <a href="bagamoyo.html" class="read-more">Read More</a>
        </div>
    </div>
</div>

<div class="col-md-4 page2">
    <div class="project-wrap">
        <a href="stone-town.html" class="img" style="background-image: url(images/Destinations/stone-town-dest.jpg);">
            <span class="price">$3,000 to 3,289/person</span>
        </a>
        <div class="text p-4">
            <h3><a href="stone-town.html">Stone Town | Historical and Cultural Tour</a></h3>
            <p class="location"><span class="fa fa-map-marker-alt"></span> Zanzibar (Starts) and Dar es Salaam (Ends)</p>
            <p>Immerse yourself in the rich history of Stone Town, a UNESCO World Heritage Site. Explore its narrow streets, bustling markets, and historic landmarks such as the House of Wonders and the Old Fort.</p>
            <ul>
                <li><span><i class="fas fa-landmark"></i></span>Historical Sites</li>
                <li><span><i class="fas fa-shopping-bag"></i></span>Local Markets</li>
            </ul>
            <a href="stone-town.html" class="read-more">Read More</a>
        </div>
    </div>
</div>


<div class="col-md-4 page5">
    <div class="project-wrap">
        <a href="lake-tanganyika.html" class="img" style="background-image: url(images/Destinations/Lake-Tanganyika-dest.jpg);">
            <span class="price">$1,300 to 2,340/person</span>
        </a>
        <div class="text p-4">
            <h3><a href="lake-tanganyika.html">Lake Tanganyika | Water Sports & Wildlife</a></h3>
            <p class="location"><span class="fa fa-map-marker-alt"></span> Kigoma (Starts), Lake Tanganyika (End)</p>
            <p>It is the second-largest lake by volume and the deepest, Dive into the clear waters of the Lake Tanganyika, longest freshwater lake, perfect for snorkeling and kayaking, surrounded by pristine nature.</p>
            <ul>
                <li><span><i class="fas fa-water"></i></span>Water Activities Available</li>
                <li><span><i class="fas fa-hotel"></i></span>Lodges Available</li>
            </ul>
            <a href="lake-tanganyika.html" class="read-more">Read More</a>
        </div>
    </div>
</div>

<div class="col-md-4 page2">
    <div class="project-wrap">
        <a href="gombe.html" class="img" style="background-image: url(images/Destinations/gombe-dest.jpg);">
            <span class="price">$1,000 to 3,400/person</span>
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


     `
 };


// Function to load and display the content for the selected page
function loadPageContent(pageNumber) {
     const contentArea = document.getElementById('tour-container');
     contentArea.innerHTML = tourData[pageNumber] || '<p>No content available for this page.</p>';
 

     // Save the current page to localStorage
     localStorage.setItem('currentPage', pageNumber);

    //update active class

    document.querySelectorAll('.page-btn').forEach(button =>{

    button.classList.remove('active');
});


document.querySelector(`.page-btn[data-page="${pageNumber}"]`).classList.add('active'); //set active class to clicked button

}



 // Function to initialize the page on load
 function initializePage() {

    // Get the last selected page from localStorage, default to 1 if not set
    const savedPage = localStorage.getItem('currentPage') || 1;
    loadPageContent(savedPage);
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
 
 

