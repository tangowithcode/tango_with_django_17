/**
 * Created by leif on 24/10/2014.
 */

	$(document).ready( function() {

		$("#about-btn").click( function(event) {
	    	msgstr = $("#msg").html()
			msgstr = msgstr + "o"
			$("#msg").html(msgstr)
		 });


        $(".ouch").click( function(event) {
               alert("You clicked me! ouch!");
    });

    $("p").hover(
        function() {
        $( this ).append( $( "<span> ***</span>" ) );
        }, function() {
        $( this ).find( "span:last" ).remove();
        }

    );

     $("p").hover(
        function() {
        $( this ).css( "color", 'red' );
        }, function() {
        $( this ).css( "color", 'blue' );}

    );

    $("#about-btn").addClass('btn btn-primary')


   	});