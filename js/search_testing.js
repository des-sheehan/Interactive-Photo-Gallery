//target the input field 
// make it a variable.

// const searchbar = document.querySelector('#searchbar');

//This code targets one of the captions, in a range from i = 0-11.
// const Captiontexts = document.querySelectorAll('a')[i].getAttribute('data-content');

//V1--------------------------------
//=============================
//-----------------------------

// function Search() { 
//     //This is what is typed in Search bar
//     let searchTerm = document.querySelector('#searchbar').value.toLowerCase();
//     //This is the text in the captions 
//     let CapText = document.getElementsByTagName('a')[i].getAttribute('data-caption');
     
//     for (i = 0; i < CapText.length; i++) { 
//         if (!CapText.includes(searchTerm).toLowerCase()) { 
//             CapText[i].style.display="none"; 
//         } else { 
//             CapText[i].style.display="";				 
//             } 
//      } 
// } 

//V2-------------------------------- https://www.w3schools.com/howto/howto_js_filter_lists.asp
//=============================
//-----------------------------

// function Search() { 
//     //This is what is typed in Search bar
//     let searchTerm = document.querySelector('#searchbar').value.toLowerCase();
     
//     for (i = 0; i < CapText.length; i++) { 
//         //This is the text in the captions 
//     capText = document.getElementsByTagName('a')[i].getAttribute('data-caption');
//     txtValue = capText.textContent || capText.innerText;
//     if (txtValue.toLowerCase().indexOf(searchTerm) > -1) {
//         a[i].style.display = "";
//       } else {
//         a[i].style.display = "none";				 
//             } 
//      } 
// } 


//V3-------------------------------- Office Hours layout
//=============================
//-----------------------------

// const searchbar = document.querySelector('#searchbar');
// const captionTexts = document.getElementsByTagName('a')[i].getAttribute('data-caption');

// const handleSearch = event => {
//   const searchTerm = event.target.value.toLowerCase();
  
//   captionTexts.forEach(boxText => {
//     const text = boxText.textContent.toLowerCase();
//     const box = boxText.parentElement;
    
//    // if(text.indexOf(searchTerm) > -1) {
//     if(text.includes(searchTerm)) {
//       box.style.display = "block";
//     } else {
//       box.style.display = "none";  
//     }
//   });

// };

// search.addEventListener('keyup', handleSearch);


// V4-------------------------------- https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/
//=============================
//-----------------------------

// function photoSearch() { 
//   let input = document.getElementById('searchbar').value;
//   let a = document.getElementsByTagName('a');
//   input = input.toLowerCase(); 
   
  
//   for (i = 0; i < a.length; i++) { 
//       if (!a[i].getAttribute('data-caption').toLowerCase().includes(input)) { 
//           a[i].style.display="none"; 
//       } else { 
//           a[i].style.display="";				 
//           } 
//    } 
// } 


//=============================
//-----------------------------
// From Slack conversation:

// Start with this very slight modification to your :javascript: 
// making input a global variable and the .value removed from it, 
// so the keyup event listener can be attached to it, like in Amber's Office Hours.
// With this code you can open console and see the letters being typed in. 
// There are a few more things you will need to tweak, but this will get you started out:

// let input = document.getElementById('searchbar');
// function Search() {
//   console.log(input.value);
//   let a = document.getElementsByTagName('a');
//   for (i = 0; i < a.length; i++) {
//     if (!a[i].getAttribute('data-caption').toLowerCase().includes(input)) {
//       a[i].style.display = "none";
//     } else {
//       a[i].style.display = "";
//     }
//   }
// }
// input.addEventListener('keyup', Search);



//V5 --------------------------
//=============================
//-----------------------------

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
    const ImageDisplay = aTag.firstElementChild;


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
