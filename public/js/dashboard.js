// Sends the input from the title and content fields and sends data to post api

const post = async (event) => {
    event.preventDefault();
    const postData = document.querySelector('#post-area').value.trim();
    const postTitle = document.querySelector('#title').value.trim();

    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ postData, postTitle }),
        headers: {
            'Content-Type' : 'application/json',
        },
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert ('Failed to create post');
    }
};

document.querySelector('#btn').addEventListener('click', post);