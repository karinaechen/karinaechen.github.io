// let mybutton = document.getElementById("myBtn");

function Position(obj){
  var currenttop = 0;
  if (obj.offsetParent){
    do {
      currenttop += obj.offsetTop;
    } while ((obj = obj.offsetParent));
    return [currenttop];
  }
 }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

// When the user clicks on the button, scroll to the next 
function scrollNext(id_) {
  let element = document.getElementById(id_);
  window.scrollTo({top: Position(element), behavior: 'smooth'});
}