var map;
			
$(document).ready(function() {
	loadScript();
	$('body').scrollspy({ target: '#nav' })
	
	$(function() {
		$('a').bind('click',function(event){
			var $anchor = $(this);
	 
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 500,'linear');
			event.preventDefault();
		});
	});
});

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
	  'callback=initialize';
  document.body.appendChild(script);
}

function initialize() {
  var mapOptions = {
	zoom: 13,
	center: new google.maps.LatLng(51.709294, 5.303675),
	scrollwheel: false,
	disableDefaultUI: true,
	draggable: false,
	zoomControl: false,
	disableDoubleClickZoom: true
  };
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
  var m2 = new google.maps.Marker({
	  position: new google.maps.LatLng(51.695904, 5.322186),
	  map: map,
	  title: 'Jujiba'
  });
  var m3 = new google.maps.Marker({
	  position: new google.maps.LatLng(51.707493, 5.360959),
	  map: map,
	  title: 'Rosmalense Judoclub'
  });
  var m4 = new google.maps.Marker({
	  position: new google.maps.LatLng(51.717177, 5.323125),
	  map: map,
	  title: 'Sportacademie van Gent'
  });
  var m6 = new google.maps.Marker({
	  position: new google.maps.LatLng(51.727076, 5.287780),
	  map: map,
	  title: 'Sportcenter Reflex'
  });
  var m7 = new google.maps.Marker({
	  position: new google.maps.LatLng(51.694696, 5.265838),
	  map: map,
	  title: 'Judoschool Kradolfer'
  });
  google.maps.event.addListener(m2, 'click', function() {
	$('html, body').animate({
		scrollTop: $("#jujiba").offset().top
	}, 2000);
  });
  google.maps.event.addListener(m3, 'click', function() {
	$('html, body').animate({
		scrollTop: $("#rosmalen").offset().top
	}, 2000);
  });
  google.maps.event.addListener(m4, 'click', function() {
	$('html, body').animate({
		scrollTop: $("#vanGent").offset().top
	}, 2000);
  });
  google.maps.event.addListener(m6, 'click', function() {
	$('html, body').animate({
		scrollTop: $("#reflex").offset().top
	}, 2000);
  });
  google.maps.event.addListener(m7, 'click', function() {
	$('html, body').animate({
		scrollTop: $("#kradolfer").offset().top
	}, 2000);
  });
  
	google.maps.visualRefresh = true;
	google.maps.event.addDomListener(window, 'load', initialize);
	google.maps.event.addDomListener(window, 'resize', function() {
		map.setCenter(new google.maps.LatLng(51.709294, 5.303675));
	});
}
	
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-2728881-2', 'judowedstrijd.nl');
  ga('send', 'pageview');