// Variables
const tweetList = document.getElementById("tweet-list");
const textarea = document.querySelector("textarea");

eventListeners();
//Event Listeners
function eventListeners() {
    //Form submission
    document.querySelector("#form").addEventListener("submit", newTweet);
    //Remove tweet from the list
    tweetList.addEventListener("click", removeTweet);
    //Dcument
    document.addEventListener("DOMContentLoaded", localStorageOnLoad);
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
    textarea.value = "";
    //Add to local storage
    addTweetLocalStorage(tweet);
    //Alert message
    alert("Tweet Added");
}

//
function removeTweet(e) {
    if(e.target.classList.contains("remove-tweet")) {
        e.target.parentElement.remove();
    } 
    //Remove from Storage
    removeTweetLocalStorage(e.target.parentElement.textContent);
}

//Add the tweets into the local storage
function addTweetLocalStorage(tweet) {
    let tweets = getTweetsFromStorage();
    //Add tweet into array
    tweets.push(tweet);
    localStorage.setItem("tweets", JSON.stringify(tweets));
}

function getTweetsFromStorage() {
    let tweets;
    const tweetsLS = localStorage.getItem("tweets")
    //Get the values, if null is returned then we create an empty array
    if(tweetsLS === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(tweetsLS);
    }
    return tweets;
}

//Print local storage tweet on load

function localStorageOnLoad() {
    let tweets = getTweetsFromStorage();
    //Loop through storage and display the value
    tweets.forEach(function(tweet) {
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
    })
}

//Removes the tweet from local storage
function removeTweetLocalStorage(tweet) {
    //Get tweets from storage
    let tweets = getTweetsFromStorage();
    //Remove the X from the tweet
    const tweetDelete = tweet.substring(0, tweet.length -1);
    //Loop through the tweets and remove the tweet that's equal
    tweets.forEach(function(tweetLS, index) {
        if(tweetDelete === tweetLS) {
            tweets.splice(index, 1)
        }
    });
    localStorage.setItem("tweets", JSON.stringify(tweets));
}