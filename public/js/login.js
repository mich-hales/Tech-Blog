// Sends the input username and password to the user routes api
const login = (event) => {
    event.preventDefault();
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (username && password) {
        fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type' : 'application/json'},
        }).then((res) => {
            if (res.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('incorrect password or username');
        }
        });
    }
}

// Sends the username and password fields for new users signing up and sends to the user routes api
const signup = (event) => {
    event.preventDefault();
    const username = document.querySelector('#username2').value.trim();
    const password = document.querySelector('#password2').value.trim();

    if (username && password) {
        fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {"Content-Type" : "application/json"},
        }).then((res) => {
            if (res.ok) {
                document.location.replace('/dashboard')
            }
        })
    }
}

document.querySelector('#loginForm').addEventListener('submit',login);
document.querySelector('#signupForm').addEventListener('submit', signup);
