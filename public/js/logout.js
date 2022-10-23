const logout = async (req, res) => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: {
            "Content-Type" : 'application/json'
        },
    });

    if (res.ok) {
        document.location.replace('/');
    } else {
        alert (response.statusText);
    }
};

const logoutButton = document.querySelector('#logout');

if (logoutButton !== null) {
    logoutButton.addEventListener('click', logout);
}

