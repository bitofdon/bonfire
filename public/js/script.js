
function getDirections() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(openTabWithDirections, function(error) {
        $('#location-container .messages--error').css("display", "block");
      });

  } else {
    console.log("errorrrr");
    // set alert to get user to allow geolcation
    alert("Your geolcation is turned off, turn it on to allow the system to generate your directions.")
  }
}

function openTabWithDirections(position) {
  $('#location-container .messages--error').css("display", "none");
  var userPositionString = position.coords.latitude.toString() + "%2C+" + position.coords.longitude.toString();
  var mapsURL = "https://www.google.com/maps/dir/?api=1&destination=30.530545%2C+-87.224906&origin=";
  mapsURL += userPositionString;
  window.open(mapsURL);
}


$( document ).ready(function(){
    if (window.location.pathname == '/blog')
      $( '#top-navbar li:nth-of-type(5) span' ).css('border-bottom', 'solid thin white')

    if (window.location.pathname == '/about_us')
      $( '#top-navbar li:nth-of-type(3) span' ).css('border-bottom', 'solid thin white')

    if (window.location.pathname == '/menu')
      $( '#top-navbar li:nth-of-type(2) span' ).css('border-bottom', 'solid thin white')

    if (window.location.pathname == '/locations')
      $( '#top-navbar li:nth-of-type(1) span' ).css('border-bottom', 'solid thin white')
});

$( document ).ready(function(){ 
  if ($(this).scrollTop() > 0 || window.location.pathname == '/about_us' || window.location.pathname == '/locations')
    document.getElementById('navbar1').style.backgroundColor = "#003946";
  else if ($(this).scrollTop() == 0)
    document.getElementById('navbar1').style.background = "none";
  
  $('.navbar-collapse').on('show.bs.collapse', function() { 
    $("#login-btn").removeAttr('style').css("position","inherit");  
    $('#navbar1').css('background-color', '#003946');
    $('#top-navbar').removeClass('float-right');
    $('#top-navbar').addClass('float-left');
  });

  $('.navbar-collapse').on('hidden.bs.collapse', function() { 
    $('#login-btn').removeAttr('style').css('position', 'absolute'); 
    $('#top-navbar').removeClass('float-left');
    $('#top-navbar').addClass('float-right');
  });
});

function expandDropDownMobile(){
  // toggle menu
  if ( $('#collapsefields')[0].attributes[2] == undefined || $('#collapsefields')[0].attributes[2].value == "false" ){
    document.getElementById('content').style.display = "none";
    document.getElementById('footer').style.display = "none";
    document.getElementById('login-btn').style.position = "inherit"; 
    //document.body.style.backgroundColor = "#1b2126";
    $('#navbar1').css('background-color', '#1b2126');
    $('.nav-link').css('color', 'white');
    $('.navbar-brand').css('color', 'white');
    
  }
  // collapse menu
   else { 
    document.getElementById('content').style.display = "block";
    document.getElementById('footer').style.display = "inherit";
    document.getElementById('login-btn').style.position = "absolute";
    //document.body.style.backgroundColor = "white";
    
  }
}

function moveLoginButton(){
  
  // toggle menu
  if ( $('#collapsefields')[0].attributes[2] == undefined || $('#collapsefields')[0].attributes[2].value == "false" ){
    $("#login-btn").removeAttr('style').css("position","inherit");  
    $('#navbar1').css('background-color', '#1b2126');
  }
  // collapse menu
   else { 
    $('#login-btn').removeAttr('style').css('position', 'absolute');
  }
}


$(window).scroll(function() {
	if ($(this).scrollTop() > 0 || window.location.pathname == '/contact_us' || window.location.pathname == '/about_us' || window.location.pathname == '/locations')
    document.getElementById('navbar1').style.backgroundColor = "#003946";
	else if ($(this).scrollTop() == 0 && ( $('#collapsefields')[0].attributes[2] == undefined || $('#collapsefields')[0].attributes[2].value == "false"))
	  document.getElementById('navbar1').style.background = "none";
});

function scrollToPizzas() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#pizzas-container").offset().top - 100
    }, 700);
}

function scrollToSalads() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#salads-container").offset().top - 100
    }, 700);
}

function scrollToDesserts() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#desserts-container").offset().top - 70
    }, 700);
}


