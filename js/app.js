
 //runs lightbox  
 window.addEventListener('load', () => {
	baguetteBox.run('.gallery');
});

// Seach Bar Element

// define a variable for the Search bar element
let searchInput = document.getElementById('searchbar');

//create variable for the text that's been input live in the search bar.
const searchTextLive = (searchInput) => {
  //target all anchor tags
  const aTags = document.querySelectorAll('a');
  //array of each anchor element
  aTags.forEach(aTag => {
    //define the caption text for each, set to lowercase.
    const captionText = aTag.getAttribute('data-caption').toLowerCase();
    //define the image element for each
    const imageDisplay = aTag.firstElementChild;


    //if the caption text is is included in the Search input
      if (captionText.includes(searchInput)){
        //display the image
      imageDisplay.style.display = 'block';
    } else { 
      //hide the image
      imageDisplay.style.display = 'none';
    }
  });
};

//Event Listener to check the function on each keyup
// x is a unnamed variable

searchInput.addEventListener('keyup', (x) => {
	let searchInput = x.target.value.toLowerCase();
	searchTextLive(searchInput);
})
