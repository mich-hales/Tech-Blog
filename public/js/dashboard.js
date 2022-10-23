// Sends the input from the title and content fields and sends data to post api

const post = async (event) => {
    event.preventDefault();
    const postText = document.querySelector('#post-area').value.trim();
    const postTitle = document.querySelector('#title').value.trim();

    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ postText, postTitle }),
        headers: {
            'Content-Type' : 'application/json',
        },
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert ('Error: post not created.');
    }
};

document.querySelector('#btn').addEventListener('click', post);