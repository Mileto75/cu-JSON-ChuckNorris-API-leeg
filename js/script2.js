"use strict";

//declare global vars here
var divQuote;
var btnQuote;
var imgChuck;
const apiUrl = "https://api.chucknorris.io/jokes/random";

//wait for document load
window.addEventListener('load',Initialize);

function Initialize()
{
    BindElements();
    addEvents();
}

/**
 * FUNCTIONS
 */

 function BindElements()
 {
    divQuote = document.querySelector("#divquote");
    btnQuote = document.querySelector("#btngetquote");
    imgChuck = document.querySelector("#imgchuck");
 }

 function addEvents()
 {
    btnQuote.addEventListener("click",GetQuoteWithXmlHttp);
    //btnQuote.addEventListener("click",GetQuoteWithFetch);
 }

 /**
  * gets a chuck norris quote using XMLhttp
  */
 function GetQuoteWithXmlHttp()
 {
    //declare var to hold xmlHTTP request object
    
	//set the onreadystatechange property to an anonymous function
	//that handles the response
	//!//does not work with arrow function without referencing to xmlHTTP
	
    //call the web api
	
    //send the request

      
 }

 function DisplayQuote(quote)
 {
    //show the quote
    divQuote.innerHTML = quote.value;
    //set the icon
	imgChuck.src = quote.icon_url;
}

 /**
  * gets a chuck norris quote using fetch
  */
function GetQuoteWithFetch()
{
	
}

