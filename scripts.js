// Write your JavaScript code here.
// Remember to pay attention to page loading!
document.addEventListener("DOMContentLoaded", function(){
    

//takeoff
const takeOffButton = document.getElementById("takeoff");
takeOffButton.addEventListener("click", function() {
    if(window.confirm("Confirm that the shuttle is ready for takeoff.")){

        const flightStatus = document.getElementById("flightStatus");
        flightStatus.innerText = "Shuttle in flight.";

        const shuttleBackground = document.getElementById("shuttleBackground");
        shuttleBackground.style.backgroundColor = "blue";

        const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
        spaceShuttleHeight.innerText = 10000;
    }

}, false);
//land
const landingButton = document.getElementById("landing");
landingButton.addEventListener("click", function() {
    if(window.confirm("The shuttle is landing. Landing gear engaged.")){

        const flightStatus = document.getElementById("flightStatus");
        flightStatus.innerText = "The shuttle has landed.";

        const shuttleBackground = document.getElementById("shuttleBackground");
        shuttleBackground.style.backgroundColor = "green";
        
        const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
        spaceShuttleHeight.innerText = 0;
    }

}, false);

//abort mission
const missionAbortButton = document.getElementById("missionAbort");
missionAbortButton.addEventListener("click", function() {
    if(window.confirm("Confirm that you want to abort the mission.")){

        const flightStatus = document.getElementById("flightStatus");
        flightStatus.innerText = "Mission aborted.";

        const shuttleBackground = document.getElementById("shuttleBackground");
        shuttleBackground.style.backgroundColor = "green";
        
        const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
        spaceShuttleHeight.innerText = 0;
    }

}, false);

//up, down, left, right
/*
The rocket image should move 10 px in the direction of the button that was clicked.
If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.
*/

const rocket = document.getElementById("rocket");
rocket.style.position = 'absolute';
rocket.style.marginLeft = '0px';
rocket.style.marginTop = '0px';

//up
const upButton = document.getElementById("up");
upButton.addEventListener("click", function() {

        rocket.style.marginTop = ((parseInt(rocket.style.marginTop) - 10) + 'px');
        
        const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
        spaceShuttleHeight.innerText = (parseInt(spaceShuttleHeight.innerText) + 10000);
    

}, false);

//down
const downButton = document.getElementById("down");
downButton.addEventListener("click", function() {

        rocket.style.marginTop = ((parseInt(rocket.style.marginTop) + 10) + 'px');
        
        const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
        spaceShuttleHeight.innerText = (parseInt(spaceShuttleHeight.innerText) - 10000);
    
}, false);

//right
const rightButton = document.getElementById("right");
rightButton.addEventListener("click", function() {

        rocket.style.marginLeft = ((parseInt(rocket.style.marginLeft) + 10) + 'px');   
    
}, false);

//left
const leftButton = document.getElementById("left");
leftButton.addEventListener("click", function() {

        rocket.style.marginLeft = ((parseInt(rocket.style.marginLeft) - 10) + 'px');
        
}, false);

});