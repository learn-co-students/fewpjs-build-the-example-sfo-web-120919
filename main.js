// Defining text characters for the empty and full hearts for you to use later.
let EMPTY_HEART = '♡'
let FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeButton = document.getElementsByClassName("like-glyph")[0]

likeButton.addEventListener("click", function(){

  likeButton.innerText = FULL_HEART
  
  
  
  
})

const modalDiv = document.getElementById("modal")
modalDiv.classList.add("hidden");


















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
