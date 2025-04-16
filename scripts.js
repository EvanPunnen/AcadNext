document.addEventListener('DOMContentLoaded', function() {
    const greeting = document.createElement('p');
    greeting.textContent = "Hello, welcome to your Student Portal!";
    document.querySelector('#home').appendChild(greeting);
});
