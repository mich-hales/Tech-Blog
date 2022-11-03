// Sends the post id from the query parameter with the comment field data and sends it to the comments api

const comment = async (event) => {
    event.preventDefault();
    const commentData = document.querySelector('#comment-area').value.trim();
    const urlArr = window.location.href.split('/');
    const postId = urlArr[urlArr.length - 1];

    const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ commentData, postId }),
        headers: {
            "Content-Type" : "application/json",
        },
    });

    if (response.ok) {
        document.location.reload('/comments');
    } else {
        alert ('Failed to create comment');
    }
};

document.querySelector('#btn').addEventListener('click', comment);