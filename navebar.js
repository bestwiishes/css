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