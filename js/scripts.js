/* Erik Petersen Week 3-Day 2: Responsive Design...but not really */

var $catHover = $( ".overlay" );
var $audio = $catHover.find( "audio" )[0];

$(".overlay").hover( function() {
  console.log("sound");
  $audio.play();
});
