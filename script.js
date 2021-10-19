var path = window.location.pathname;
var page = path.split("/").pop();

// check retrieval of name is correct
// console.log( page );

// grab button from html
var btn = document.getElementById("curr1");
// grab div to add info into
var info = document.getElementById("text1");

btn.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    var toFetch = 'data.json'
    // console.log('got it');
    ourRequest.open('GET', toFetch);

    ourRequest.onload = function(){
    // shows in "Inspect" console    
    // reads as string not JSON
    // var ourData = ourRequest.responseText;
    
    // AJAX 
    var ourData = JSON.parse(ourRequest.responseText);
    // testing purposes
    // console.log(ourData[0]);
    renderHTML(ourData);
    };
    ourRequest.send();
});

function renderHTML(data) {
    var htmlString = "";

    // data in data.rates
    htmlString += "<li>" + data.base + "</li>";
    info.insertAdjacentHTML('beforeend', htmlString);
}