$( document ).ready( function( ) {
  (function(data){
    function embed( id ) {
      var begin_div = '<div class="embed-responsive embed-responsive-16by9">';
      var begin_iframe = '<iframe width="854" height="480" src="https://www.youtube.com/embed/' + id + '" frameborder="0" allowfullscreen>';
      var end_iframe = '</iframe>';
      var end_div = '</div>';
      var string = '';
      return string.concat( begin_div , begin_iframe , end_iframe , end_div );
    }
    
    if ( data ) {
      data.replaceWith( embed( data.attr( 'data' ) ) );
    }
  })( $( 'em[id="youtube"]' ) );
});
