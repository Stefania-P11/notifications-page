

// Displays the initial number of unread notifications
const notifications = document.querySelectorAll('.unread')


let initialNotificationCount = 0
notifications.forEach (notification => {
     
     initialNotificationCount ++
})

     document.querySelector('.notificationCounter').innerText = initialNotificationCount



// Changes the style of an unread notification when clicked
// Updates the notification Counter

notifications.forEach(notification => {
     notification.addEventListener('click', (e) => {
          
          notification.style.background = '#fff'
          const badge = notification.querySelector('.badge')
          badge.style.display = 'none'
          let notificationCount = document.querySelector('.notificationCounter').innerText
          if (e.target.classList.contains('triggerCount')) {

               notificationCount--;
               //notification.classList.remove('triggerCount')
               notification.classList.remove('unread')
             
          }

          document.querySelector('.notificationCounter').innerText = notificationCount;
     })

})




// Changes the style of all the unread notifications when the Mark all Read span is clicked
// Sets the Notification Counter to 0

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





