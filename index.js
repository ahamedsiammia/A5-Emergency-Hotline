// heart functonality

const cardContainerHerat = document.getElementById('card-container-heart');

cardContainerHerat.addEventListener('click',function(e){
    e.preventDefault()
    if (e.target.closest('.card-heart')) {
    
    const cardContainerHerat = parseInt(1)
    
    const nevberHeart = parseInt(document.getElementById('nevber-heart').innerText);
    

    const addHeart = cardContainerHerat + nevberHeart
    document.getElementById('nevber-heart').innerText = addHeart
    } 
})


// clear button functionality
document.getElementById('clear-btn').addEventListener('click',function(e){
    e.preventDefault()
    
    document.getElementById('call-history').style.display = 'none'
      
})




