document.getElementById('main-landing').addEventListener("mousemove", evt => {
  const mouseX = evt.clientX;
  const mouseY = evt.clientY;

  gsap.set(".cursor", {
    x: mouseX,
    y: mouseY });


  gsap.to(".shape", {
    x: mouseX,
    y: mouseY,
    stagger: -0.1 });

});

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