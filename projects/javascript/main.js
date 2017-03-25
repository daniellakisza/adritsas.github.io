/* CURRENTLY IN: javascript/main.js */

(function(){	// protect the lemmings!
	var fullPageOpts = {
		scrollingSpeed: 500
		, anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage' ]
    	, menu: '#myMenu'
	}

	$.fn.fullpage(  fullPageOpts  );

	$('#myMenu').on(
		'click'
		, 'a'
		, onClickLink
	);

	$( '.logo' ).on('click', onClickLink )

	function onClickLink( e ) {
		e.preventDefault();

		var slideItem = $( this ).attr( 'data-slide' );
		slideItem = parseInt( slideItem );

		$.fn.fullpage.moveTo( slideItem, 0 );

		// $('.active').removeClass( 'active' );
		$( this ).addClass( 'active' );
	}

	function onAfterLoad( anchorLink, index ) {
		console.log( index, anchorLink )
		//$( '#'+anchorLink ).addClass( 'active' );
	}

	// call the plugin that will automagically convert menu to mobile
	$('#myMenu').slicknav();
	$( '.slicknav_nav li a' ).on('click', function(){
		var index = $( this ).parents('li').index();
		$.fn.fullpage.moveTo( index+2, 0 );
	});
})();