/* Author Emily Reger 2023 - Final Project
    DON'T FORGET TO OBFUSCATE THIS FILE BEFORE UPLOADING ONLINE FOR THE PUBLIC

    Things to do:
    fix form
    CLean up the gallery CSS and add <p>
    fix game
    clean up comments
*/

"use strict";

// Dark mode button
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

// 1. Regex and validate form
//got help from Alfredo Moreno to put this form together
//could not get the phone/email raido buttons to work all the way

 function valOnSubmit(e){
   // prevent default form submission
   e.preventDefault();
   
   // access the form itself and save in a variable
   let myForm = document.querySelector("#valOnSubmit");
   
   // access all of the error spans to be used as error message holders
   let errorSpans = document.querySelectorAll(".message");
   
   // boolean variable used to track form validity
   let isValid = true;
   
   // reset display of the error inputs before validating
   myForm.fullName.classList.remove("errorInput");
   myForm.email.classList.remove("errorInput");
   myForm.phone.classList.remove("errorInput");
   myForm.message.classList.remove("errorInput");
   
   // reset the display of the error message spans
   errorSpans.forEach(function(span){
     span.classList.remove("error");
   });
   
   // hide the success area on the page - this is what shows the user what they submitted in the form when submission is successful
   document.querySelector("#success").classList.remove("show");
   document.querySelector("#success").classList.add("hide");
   
   // regular expressions to validate the username/asurite and zipcode
   let emailCodeRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
   let phoneCodeRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
   
   // validate user name, it should not be blank and should match the userName regex
   if(myForm.fullName.value === "" ){
     // on error, add the errorInput class to the input itself
     myForm.fullName.classList.add("errorInput");
         
     // on error, add the error class to the span associated with this input that has the message class
     errorSpans[0].classList.add("error");
         
     // set the form validation tracking variable to false
     isValid = false;
   }
   
   // validate email, it should not be blank and should match the email regex
   if(myForm.email.value === "" || !(emailCodeRegex.test(myForm.email.value))){
     // on error, add the errorInput class to the input itself
     myForm.email.classList.add("errorInput");
         
     // on error, add the error class to the span associated with this input that has the message class
     errorSpans[1].classList.add("error");
         
     // set the form validation tracking variable to false
     isValid = false;
   }

   // validate phone, it should not be blank and should match the phone regex
   if(myForm.phone.value === "" || !(phoneCodeRegex.test(myForm.phone.value))){
     // on error, add the errorInput class to the input itself
     myForm.phone.classList.add("errorInput");
         
     // on error, add the error class to the span associated with this input that has the message class
     errorSpans[2].classList.add("error");
         
     // set the form validation tracking variable to false
     isValid = false;
   }
   
   // validate message, it should not be blank
   if(myForm.message.value === ""){
     // on error, add the errorInput class to the input itself
     myForm.message.classList.add("errorInput");
         
     // on error, add the error class to the span associated with this input that has the message class
     errorSpans[3].classList.add("error");
         
     // set the form validation tracking variable to false
     isValid = false;
   }

   //alert(!myForm.phonepref.checked && !myForm.emailpref.checked);

   if(!myForm.phonepref.checked && !myForm.emailpref.checked) {
     errorSpans[4].classList.add("error");
     isValid = false;
   }
   
   
   // if the form is valid, submit it and reset
   if(isValid){
     //display the 'success' section to the user
     document.querySelector("#success").classList.remove("hide");
     document.querySelector("#success").classList.add("show");
     
     // display the user's input data (to show what they are sending to the server)
     document.getElementById("formSub").innerHTML = 
     `<strong>User Name: </strong>${myForm.fullName.value}<br>
     <strong>Email: </strong>${myForm.email.value}<br>
     <strong>Phone: </strong>${myForm.phone.value}<br>
     <strong>Message: </strong>${myForm.message.value}<br>
     <strong>Contact Method: </strong>${myForm.contactpref.value}`;
     
     // reset the form
         myForm.reset();
   }
 }
 

 // 2. Product Display

//variables to get product elements

let cherry = document.getElementById("cb");
let snow = document.getElementById("sl");
let niceStreet = document.getElementById("nice");

function ImgCb() {
	//  toggles imgHidden class to show CB img and hide others
   cb.classList.remove("imgHide");
   sl.classList.add("imgHide");
   nice.classList.add("imgHide");
}

function ImgSl() {
	//  toggles imgHidden class to show snow img and hide others
   cb.classList.add("imgHide");
   sl.classList.remove("imgHide");
   nice.classList.add("imgHide");
}

function ImgNice() {
	//  toggles imgHidden class to show Nice img and hide others
   cb.classList.add("imgHide");
   sl.classList.add("imgHide");
   nice.classList.remove("imgHide");
}


 // 3.Game Play
//random number function from codepen assignments
function getRandomNumber(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}
//function from codepen assignment Snake Eyes
function gameContest(){
   //get the location where the numbers and message will display
   let userNumOutput = document.getElementById("userNum");
   let computerNumOutput = document.getElementById("computerNum");
   let gameContestMsg = document.getElementById("gameContestMsg");
   
   //get the number values
   let num1 = document.getElementById("numInput").value;
   let num2 = getRandomNumber(1, 10);
     
   //display the numbers
   userNumOutput.innerHTML = "Your number: " + num1;
   computerNumOutput.innerHTML = "Winning number: " + num2;

   //check to see if the numbers are the same
   if (num1 == num2 ){
      gameContestMsg.innerHTML = "You Win!";
   }else{
      gameContestMsg.innerHTML = "You Lose. Try Agian.";
   }
   
}

//event listeners

//toggle dark mode
document.getElementById("darkmode").addEventListener("click", darkMode);

//form
document.getElementById("valOnSubmit").addEventListener("submit", valOnSubmit);

//product display
document.getElementById("hideShowCb").addEventListener("click", ImgCb);

document.getElementById("hideShowSl").addEventListener("click", ImgSl);

document.getElementById("hideShowNice").addEventListener("click", ImgNice);

//Game
document.getElementById("gamePlay").addEventListener("click", gameContest);