

// Changes the style of an unread notification when clicked

const notifications = document.querySelectorAll('.unread')

notifications.forEach(notification => {
     notification.addEventListener('click', () => {
          notification.style.background = '#fff'
          const badge = notification.querySelector('.badge')
          badge.style.display = 'none'
          
     })

     
})


// Changes the style of all the unread notifications when the Mark all Read span is clicked
// Updates the Notification Counter to 0

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



// Displays the initial number of unread notifications

let initialNotificationCount = 0
notifications.forEach (notification => {
     
     initialNotificationCount ++
})

     document.querySelector('.notificationCounter').innerText = initialNotificationCount