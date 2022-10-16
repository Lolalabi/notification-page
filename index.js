const unread = document.getElementsByClassName('unread');
const currentNoti = document.getElementById('notification');
const redDot = document.getElementsByClassName('span4');


// Notification count is set to 0 before page as loaded, afterwards the below function triggers, and sets the value according to how many notifications are there.
document.addEventListener('DOMContentLoaded', notificationCount);


function notificationCount() {
    const unreadCount = unread.length;
    currentNoti.textContent = unreadCount;
    
};


const notiButton = document.querySelector('.p2');
// the function below, resets all containers by removing the unread class from every element, which then reupdates the notification count.
notiButton.addEventListener('click', () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.classList.remove('unread');
        notificationCount();
    });
console.log(redDot);
const dots = document.querySelectorAll(".span4")
dots.forEach(dot => {
    dot.classList.remove('span4');
})

});


