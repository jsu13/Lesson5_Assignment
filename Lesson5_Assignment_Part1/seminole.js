// program name: seminole Trojans
// program topics: variables, functions, arrays, loops
// Author: Joshua Upton
// Date: 9/30/2015
// Filename: seminole.js

// global variables
var daysofweek = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

//global variables
var opponents = ["Lightning","combines","combines","combines","Lightning","Lightning","Lightning","Lightning","Barn Raisers",
                "Barn Raisers","Barn Raisers","sodbusters","sodbusters","sodbusters","sodbusters","(off)","River Riders",
                 "River Riders","River Riders","Big Dippers","Big Dippers","Big Dippers","(off)","sodbusters","sodbusters","sodbusters","combines","combines",
                 "combines","(off)","(off)"];

//global variables
var gameLocation =
    ["away","away","away","away","home","home","home","home","home","home","home","home","away","away","away","away","away","","away","away","away","away","away","away","",
     "home","home","home","home","home","home","",""];

// function to place daysOfweek values in header row cells 
    function addcolumnHeaders(){
     var i= 0;
     while (i < 7) {
       
    document.getElementsByTagName("th")[i].innerHTML = daysofweek[i]; 
     i++;
       }//end of while loop

       }
 //end of columnHeaders function
 
 // function to place day of month value in first p element
 //  within each table data cell that has an id
 function addCalanderDates(){
   
   var i = 1;
   var paragraphs = "";
   
   do {
     
    var tableCell = document.getElementById("08-" + i); 
     
     paragraphs = tableCell.getElementsByTagName("p");
     
     paragraphs[0].innerHTML = i;
     i++;
     
   }//end of do/while loop 
   while (i < 32);
   
 }//end of addCalanderDates function
 
// function to load the calander content in the calander when the page load
 function setUpPage(){
 
   addcolumnHeaders();
   addCalanderDates();
   addGameInfo();
   
 }//end of setUpPage function
 

// this function will place the game information in the calendar
function addGameInfo(){
  
  var paragraphs = "";
  for (var i = 0; i < 31; i++) {
    var date = i+1;
    var tablecell = document.getElementById("08-" + date);
    paragraphs = tablecell.getElementsByTagName("p");
    paragraphs [1].innerHTML += opponents[i];
  if (gameLocation[i] ==="away") {
    
    paragraphs[1].innerHTML = "@" ;
    paragraphs[1].innerHTML += opponents[i];
    
    
  }//end of if
    else if (gameLocation[i] === "home") {
      paragraphs[1].innerHTML = "vs ";
      paragraphs [1].innerHTML += opponents [i]
    }
    
    
    
  }//end of for loop
}//end of function



//this statement will add the column headers to the page immediately when the page loads in the browser 
 window.addEventListener("load", setUpPage(), false);




























