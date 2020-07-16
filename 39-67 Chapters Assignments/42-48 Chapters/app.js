function alertBox(){
  alert("This is a alert box")
}


function SomeDeleteRowFunction() {
  // event.target will be the input element.
  var td = event.target.parentNode; 
  var tr = td.parentNode; // the row to be removed
  tr.parentNode.removeChild(tr);
}


function mouseOver(){
  var img = document.getElementById("img1");
  img.src = "https://image.shutterstock.com/image-photo/saudi-arabiamadina28052019masjid-nabwi-minerats-green-260nw-1491610727.jpg";


}
function mouseOut(){
  var img = document.getElementById("img1");
  img.src = "https://image.shutterstock.com/image-photo/close-view-madina-green-dome-260nw-1157631508.jpg";


}


var clicks = 0;
    function onClick() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };

    function outClick() {
        clicks -= 1;
        document.getElementById("clicks").innerHTML = clicks;
    }; 