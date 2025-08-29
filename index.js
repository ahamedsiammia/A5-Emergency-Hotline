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

// call button click and add history
//  document.getElementById('call-btn').addEventListener('click',function(e){
//     e.preventDefault()
//     console.log('clicked call button')
//     const allCallHistory = document.getElementById('all-call-history')
//     console.log(allCallHistory)
//     const parentCallHistory = document.getElementById('call-history').innerText
//     console.log(parentCallHistory)
//     const creatElement = document.createElement('div')
//     creatElement = allCallHistory
//     parentCallHistory.appendChild(allCallHistory);
//  })
// copy button functionality


cardContainerHerat.addEventListener('click',function(e){
    e.preventDefault()
    if(e.target.closest('.copy-btn')){

        const cardContainerHerat = parseInt(1)
        
        const navberCopyBtn = parseInt(document.getElementById('navber-copy-btn').innerText)

        const addCopy = navberCopyBtn + cardContainerHerat
        document.getElementById('navber-copy-btn').innerText = addCopy
    }
})