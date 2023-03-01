
let unreadMessages = document.querySelectorAll('.unread');

unreadMessages.forEach(message => {
  message.addEventListener('click', switchStyle) 

   
    function switchStyle(event) {
        
        let parentDiv = event.target.closest('.unread');
   
         if (parentDiv){
             parentDiv.classList.replace('unread', 'read');
         }
    }
})



// document.querySelector('.markRead').addEventListener('click', switchAll)

// function switchAll() {
//     document.querySelectorAll('.unread').classList.replace('unread', 'read');
// }
