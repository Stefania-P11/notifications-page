
// let unreadMessages = document.querySelectorAll('.unread'); 

// unreadMessages.forEach(message => { 

//      message.addEventListener('click', (event) => { 
        
//            let parentDiv = event.target.closest('.unread'); 

//            if (parentDiv) {     
            
//                 parentDiv.style.backgroundColor = 'white'; 
                
//            }
//        });
//  }); 

const notifications = document.querySelectorAll('.unread')

notifications.forEach(notification => {
     notification.addEventListener('click', () => {
          notification.style.background = '#fff'
          const badge = notification.querySelector('.badge')
          badge.style.display = 'none'

     })
})

//  document.getElementsByClassName('badge').style.display = 'none'  TRY THIS AGAIN TOMORROW


const markAll = document.querySelector('.markRead')

markAll.addEventListener('click', () => {
     const notifications = document.querySelectorAll('.unread')
     notifications.forEach(notification => {
          notification.style.background = '#fff'
          const badge = notification.querySelector('.badge')
          badge.style.display = 'none'
     })

     document.querySelector('.notificationCounter').innerText = 0
})
