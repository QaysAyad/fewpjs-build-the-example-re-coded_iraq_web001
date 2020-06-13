// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'



// Your JavaScript code goes here!
let hide = document.getElementById('modal')
hide.className = 'hidden'
document.addEventListener('DOMContentLoaded',function(e){


document.addEventListener('click', function(e){
    if (e.target.classList.contains('like-glyph')){
    mimicServerCall()
    .then(()=>{
      // e.target.innerText = e.target.innerText === EMPTY_HEART?FULL_HEART:EMPTY_HEART;
      if ( e.target.innerText === FULL_HEART){
      e.target.classList.remove('activated-heart');
      e.target.innerText = EMPTY_HEART;

    } else {
      e.target.classList.add('activated-heart');
      e.target.innerText = FULL_HEART;

    }
    })
    .catch((err)=>{
      hide.className = ''
      hide.innerText = err
      setTimeout(function(){ hide.className = 'hidden'; }, 5000);
        })

    }
})
})


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
