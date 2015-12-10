/*$( document ).ready( function( ) {
  (function( data ){
    var embed = (function ( id ) {
      var begin_div = '<div class="embed-responsive embed-responsive-16by9">';
      var begin_iframe = '<iframe width="854" height="480" src="https://www.youtube.com/embed/' + id + '" frameborder="0" allowfullscreen>';
      var end_iframe = '</iframe>';
      var end_div = '</div>';
      var string = '';
      return string.concat( begin_div , begin_iframe , end_iframe , end_div );
    });
    
    if ( data ) {
      $( data ).each(function( index ) {
        $(this).replaceWith( embed( $(this).attr( 'data' ) ) )
      });
    }
  })( $( 'em[id="youtube"]' ) );
});

*/

// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('ytplayer', {
    /*height: '390',
    width: '640',*/
    videoId: 'M7lc1UVf-VE',
    playerVars: {
      'autoplay': 0,
      'controls': 2,
      'rel': 1,
    }
  });
}