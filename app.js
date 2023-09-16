function twist() {
    console.log('TWIST');
}
function shout() {
    console.log('SHOUT');
}
const tasButton = document.querySelector('#tas');

tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)
tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)