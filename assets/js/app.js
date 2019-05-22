// Variables

eventListeners();
//Event Listeners
function eventListeners() {
    //Form submission
    document.querySelector("#form").addEventListener("submit", newTweet)
}


// Functions

function newTweet(e){
    e.preventDefault();
    console.log("Form Submitted");
}
