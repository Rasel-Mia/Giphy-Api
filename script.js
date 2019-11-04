var apiKey ='Mrjdc0YDiu0GDGzkciE04Av5N2SJ1zSN';
var query = 'cat';
var url = "https://api.giphy.com/v1/gifs/search?api_key="+apiKey+"&q=";

var form = document.querySelector("form");
var input = document.querySelector('input[type="text"]');
var result = document.querySelector(".result");


function search(e) {
  e.preventDefault();
  query = input.value;
  makeRequest(query);
}

function createGif(gif,url){
  var item = document.createElement('div');
  var link = document.createElement('a');
  var img = document.createElement('img');
  
  link.href = url;
  img.src = gif;
  
  result.appendChild(item);
  item.appendChild(link);
  link.appendChild(img);
  
}
function makeRequest(query) {
  xhr = new XMLHttpRequest();

  xhr.onload = function() {
    var response = JSON.parse(this.responseText);
          console.log(response)
    response.data.map(function(gif){
      createGif(gif.images.fixed_height_downsampled.url,gif.url)
    })
  };
  xhr.open(
    "GET",
   url+query,
    true
  );
  xhr.send();
}

form.addEventListener("submit", search); 
