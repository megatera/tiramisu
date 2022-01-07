// Link cache
const gifs = {
  cute: [],
  cringe: [],
  lol: []
}


document.addEventListener('DOMContentLoaded', () => {
  // fetch data from GIPHY
  fetch('https://api.giphy.com/v1/gifs/search?api_key=***REMOVED***=cute+animals&limit=25&offset=0&rating=g&lang=en')
    .then((response) => response.json())
    .then((response) =>  {
      response.data.forEach(el => gifs.cute.push(el['images']['original']['url']))
    });

  fetch('https://api.giphy.com/v1/gifs/search?api_key=***REMOVED***=funny+fail&limit=25&offset=0&rating=g&lang=en')
    .then((response) => response.json())
    .then((response) =>  {
      response.data.forEach(el => gifs.cringe.push(el['images']['original']['url']))
    });

  fetch('https://api.giphy.com/v1/gifs/search?api_key=***REMOVED***=funny&limit=25&offset=0&rating=g&lang=en')
    .then((response) => response.json())
    .then((response) =>  {
      response.data.forEach(el => gifs.lol.push(el['images']['original']['url']))
    });

  // select buttons
  const cute = document.getElementById('cute');
  const cringe = document.getElementById('cringe');
  const lol = document.getElementById('lol');

  // add event listeners for button clicks, passing in openTab function
  cute.addEventListener('click', () => openTab('cute'));
  cringe.addEventListener('click', () => openTab('cringe'));
  lol.addEventListener('click', () => openTab('lol'));
  
  function openTab(category) {
    // generate random number with max length of category array in link object
    const rIndex = Math.floor(Math.random() * 25);
    // opens link from specified category in link cache in new tab
    chrome.tabs.create({active: true, url: gifs[category][rIndex]});
  }
});

