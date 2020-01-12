/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
var jqs = function(sParam) {
 var sPageURL = window.location.search.substring(1);
 var sURLVariables = sPageURL.split("&");
 for (var i = 0; i < sURLVariables.length; i++) {
 var sParameterName = sURLVariables[i].split("=");
 if (sParameterName[0] === sParam) {
 return sParameterName[1];
 }
 }
 };
 window.jqs = jqs;
 var name = decodeURI(jqs("wishyou"));
 if (typeof jqs("wishyou") === "undefined") {
 name = "";
 }
 var checkName = function() {
 if (name.length !== 0) {
 name = name.replace(/-/g, " ");
 console.log("name is there", name);
 document.querySelector("#wb-show-name").innerHTML = name;

 document.querySelector("#wb-show-wishing").innerHTML = "";
 document.querySelector("#wb-fromMessage").innerHTML= ""
 } else {

 }
 };
 checkName();
 var createGreeting=function(){
 sname=document.querySelector("#nameTextBox").value;
 sname=sname.replace(/@/g,"-")
 sname=sname.replace(/%40/g,"-")
 sname=sname.replace(/\./g,"-")
 if(sname.trim()!=""){
 document.querySelector("#enter__name").style.display = "none-sumit";
 document.querySelector(".whatshare").style.display = "block";
 document.querySelector("#wb-show-name").innerHTML = sname;
 document.querySelector("#wb-show-wishing").innerHTML = "";
 document.querySelector("#wb-fromMessage").innerHTML= "";
 window.scrollTo(0,0);
 }else {
 alert ("Please Type Your Name First");
 document.getElementById("nameTextBox").focus();
 }
 }

 var shareActionWA = function() {
 var shareString = "";
 var whatsappHref;
 shareString += "*"+sname+"*";
 
 shareString +=" Send you Special Gift 🎁 %0AClick on blue Link 🙏%0A👇👇👇👇 %0A"
 shareString +=(window.location.href.split("?")[0] + "?wishyou=" + sname).replace("#", "").replace(/ /g, "-");
 whatsappHref = "whatsapp://send?text=" + shareString;
 window.location.href = whatsappHref;

 };
 var countDownDate = new Date("January 01, 2020 00:00:00").getTime();

 // Update the count down every 1 second
 var x = setInterval(function() {
 // Get todays date and time
 var now = new Date().getTime();

 // Find the distance between now an the count down date
 var distance = countDownDate - now;

 // Time calculations for days, hours, minutes and seconds
 var days = Math.floor(distance / (1000 * 60 * 60 * 24));
 var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 var seconds = Math.floor((distance % (1000 * 60)) / 1000);

 // Output the result in an element with id="demo"
 document.getElementById("demo").innerHTML = days + "days " + hours + "hr "+ minutes + "min " + seconds + "sec ";

 // If the count down is over, write some text
 if (distance < 0)
 {
 clearInterval(x);
 document.getElementById("demoo").innerHTML = "";
 document.getElementById("inAdvance").innerHTML = "";

 }
 }, 1000);

 function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function showcreate() {
    $('#clicktocreate').hide();
    $('#createnew').show();
}
var width = window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    var height = window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
    /*console.log(width);
    console.log(height);*/
    if (navigator.userAgent.indexOf("UCBrowser") !== -1) { /*$.toast("ðŸŽŠ Your UCBrowser is unsafe..");*/ }

    function init() {
        var imgDefer = document.getElementsByClassName('afterload');
        for (var i = 0; i < imgDefer.length; i++) {
            if (imgDefer[i].getAttribute('data-href')) {
                imgDefer[i].setAttribute('href', imgDefer[i].getAttribute('data-href'));
            }
            if (imgDefer[i].getAttribute('data-src')) {
                imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
            }
            if (imgDefer[i].getAttribute('data-style')) {
                imgDefer[i].setAttribute('style', imgDefer[i].getAttribute('data-style'));
            }
        }
        var imgDefer = document.getElementsByClassName('featured__img');
        for (var i = 0; i < imgDefer.length; i++) {
            if (imgDefer[i].getAttribute('data-style')) {
                imgDefer[i].setAttribute('style', imgDefer[i].getAttribute('data-style')); /*$('.featured__img img').attr('src',$('.featured__img img').attr('data-src'));*/ /*$('.featured__img img').removeAttr("data-src");*/ /*$('.featured__img').removeAttr("data-style");*/
            }
        } /* setTimeout(function() { */
        if ($(".force__center__inn__btn").length) {
            $('.force__center__inn__btn').append('<iframe defer name="f21bb3f24229374" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" title="Festival Gif wishes with name" src="https://www.facebook.com/v2.11/plugins/like.php?app_id=113869198637480&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FlY4eZXm_YWu.js%3Fversion%3D42%23cb%3Df390f78b6ba69e8%26domain%3Ddevelopers.facebook.com%26origin%3Dhttps%253A%252F%252Fdevelopers.facebook.com%252Ff3741e1b1934b94%26relation%3Dparent.parent&amp;container_width=678&amp;href=https%3A%2F%2Fwww.facebook.com%2Ffestival.wishes.fest.first%2F&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey&amp;share=false&amp;show_faces=false&amp;size=large" style="border: none;visibility: visible;width: 95px;height: 28px;margin-right: 20px;vertical-align: middle;" class="center animated animated_10s infinite pulse"></iframe>');
        } /* $('.force__center__inn__btn').append(''); */ /* }, 2000); */
    }
    window.onload = init;
