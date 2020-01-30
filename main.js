// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "&#x2661;"


// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', function(){
  listenForHeartClick();
});

function listenForHeartClick() {
  const articlesDiv = document.querySelector('#articles');
  articlesDiv.addEventListener('click', handleClick)
}

function handleClick(e) {
  const clickedChild = e.target;
  if (isHeartElement(e.target)) {
     mimicServerCall().then(() => {
      
          toggleHeart()

     }).catch(error => {
        // remove hidden class from modal
        // timeout 5 seconds
        // add modal back
        setErrorModal();
     })
  } 
}

function isHeartElement(element) {

  return element.className.includes("like-glyph")
  

}

function isFullHeart(heartElement) {
  heartElement.innerText !== EMPTY_HEART
}

function toggleHeart(heartElement) {
  if (heartElement.classList.includes("activated-heart")) heartElement.classList.remove("activated-heart");
  else heartElement.classList.add("activated-heart");
}

function setErrorModal() {

  const modal = document.getElementById("modal");
  modal.className = "";
  setTimeout(() => modal.className = "hidden", 5000);
}





//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
