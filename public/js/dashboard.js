// Sends the input from the title and content fields and sends data to post api

const post = async (event) => {
    event.preventDefault();

    const postTitle = document.querySelector('#title').value.trim();
    const postContent = document.querySelector('#post-area').value.trim();

    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ postTitle, postContent }),
        headers: {
            "Content-Type" : "application/json",
        },
    });

    if (response.ok) {
        document.location.reload('/posts');
    } else {
        alert ('Failed to create post');
    }
};

document.querySelector('#create-post-btn').addEventListener('click', post);