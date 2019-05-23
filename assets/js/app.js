// Variables
const tweetList = document.getElementById("tweet-list");


eventListeners();
//Event Listeners
function eventListeners() {
    //Form submission
    document.querySelector("#form").addEventListener("submit", newTweet)
}


// Functions

function newTweet(e){
    e.preventDefault();
    //Read the textarea value
    const tweet = document.getElementById("tweet").value;
    //Create a remove button
    const removeBtn = document.createElement("a");
    removeBtn.classList = "remove-tweet";
    removeBtn.textContent = "X";
    //Create an li element
    const li = document.createElement("li");
    li.textContent = tweet;
    //Add remove button to each tweet
    li.appendChild(removeBtn);
    //Add to list
    tweetList.appendChild(li);
}
