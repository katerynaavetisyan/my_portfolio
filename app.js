const h1 = document.querySelector('h1');
const input = document.querySelector('input');
input.addEventListener('input', (e) => {
    const newWelcome = input.value;

    if (newWelcome) {
        h1.innerText = `Welcome, ${newWelcome}`;
    } else {
        h1.innerText = 'Enter Your Username';
    }
});
