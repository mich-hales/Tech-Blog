// Sends the input username and password to the user routes api
const login = (event) => {
    event.preventDefault();
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    console.log(email, password)
    if (email && password) {
        fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type" : "application/json",
            },
        }).then((res) => {
            if (res.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Incorrect password or email');
        }
        });
    }
}

// Sends the username and password fields for new users signing up and sends to the user routes api
const signup = (event) => {
    event.preventDefault();
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: {
                "Content-Type" : "application/json",
            },
        }).then((res) => {
            if (res.ok) {
                document.location.replace('/dashboard')
            }
        })
    }
}

document.querySelector('#loginForm').addEventListener('click',login);
document.querySelector('#signupForm').addEventListener('click', signup);
