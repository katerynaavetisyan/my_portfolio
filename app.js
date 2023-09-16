function talk() {
    console.log('Talking');
}
function shout() {
    console.log('SHOUT');
}
const tasButton = document.querySelector('#tas');

tasButton.addEventListener('click', talk)
tasButton.addEventListener('click', shout)

