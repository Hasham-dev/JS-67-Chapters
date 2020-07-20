

// // Get the modal
var modal = document.getElementById("myModal");
function myModal(e){
// // Get the image and insert it inside the modal - use its "alt" text as a caption
var img = e;
console.log(img);
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = e.src;
  captionText.innerHTML = e.alt;
 

// // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
 span.onclick = function() { 
   modal.style.display = "none";
 }
 }




 function zoomin(e) {
    var myImg = e.parentNode.childNodes[1];
    console.log(myImg);
    var currWidth = myImg.clientWidth;
    if (currWidth == 2500) return false;
    else {
      myImg.style.width = (currWidth + 100) + "px";
    }
  }
  
  function zoomout(e) {
    var myImg = e.parentNode.childNodes[1];
    var currWidth = myImg.clientWidth;
    if (currWidth == 100) return false;
    else {
      myImg.style.width = (currWidth - 100) + "px";
    }
  }