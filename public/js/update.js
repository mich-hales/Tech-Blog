// post api endpoint

const update = async (event) => {
    event.preventDefault();
    const postTitle = document.querySelector('#title').value.trim();
    const postContent = document.querySelector('#post-area').value.trim();
    const urlArr = window.location.href.split('/');
    const postId = urlArr[urlArr.length-1];

    const response = await fetch('/api/posts', {
        method: 'PUT',
        body: JSON.stringify({ postTitle, postContent, postId }),
        headers: {
            "Content-Type" : "application/json",
        },
    });

    if (response.ok) {
        document.location.href='/dashboard';
    } else {
        alert ('Failed to update post');
    }
};


const deletePost = async (event) => {
    event.preventDefault();
    const urlArr = window.location.href.split('/');
    const postId = urlArr[urlArr.length-1];

    const response = await fetch('/api/posts', {
        method: 'DELETE',
        body: JSON.stringify({ postId }),
        headers: {
            "Content-Type" : "application/json",
        },
    });

    if (response.ok) {
        document.location.href='/dashboard';
    } else {
        alert ('Failed to delete post');
    }
}


document.querySelector('#update').addEventListener('click', update);
document.querySelector('#delete').addEventListener('click', deletePost);