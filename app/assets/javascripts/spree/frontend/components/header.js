var stylesToHeader = {
  "position": "absolute",
  "z-index": "10",
  "left": "0",
  "right": "0",
  "opacity": "0.9",
};

$(document).ready(function(){
  if( $('body').is('#default') ) {
    $('header').css(stylesToHeader);
  }
});
