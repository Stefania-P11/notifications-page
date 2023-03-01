
let unreadMessages = document.querySelectorAll('.unread'); 

unreadMessages.forEach(message => { 

     message.addEventListener('click', (event) => { 
        
           let parentDiv = event.target.closest('.unread'); 

           if (parentDiv) {     
            
                parentDiv.style.backgroundColor = 'white'; 
                
           }
       });
 }); 


//  document.getElementsByClassName('badge').style.display = 'none'  TRY THIS AGAIN TOMORROW



