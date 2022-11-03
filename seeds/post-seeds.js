const { Post } = require('../models');

const postData = [
    {
        title: 'Tech Savvy',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus diam eget nunc placerat vehicula. Pellentesque eget turpis sed neque dignissim mattis. Duis lacinia, lectus vitae accumsan hendrerit, metus elit iaculis magna, quis dignissim nisi dolor ut nibh. Maecenas vitae magna quis est consectetur tempus et vitae tellus. Nunc turpis velit, vulputate a magna eu, dignissim condimentum enim. ',
        user_id: '1',
    },
    {
        title: 'Back to Basics',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus diam eget nunc placerat vehicula. Pellentesque eget turpis sed neque dignissim mattis. Duis lacinia, lectus vitae accumsan hendrerit, metus elit iaculis magna, quis dignissim nisi dolor ut nibh. Maecenas vitae magna quis est consectetur tempus et vitae tellus. Nunc turpis velit, vulputate a magna eu, dignissim condimentum enim. ',
        user_id: '2',
    },
    {
        title: 'Where to Begin Your Tech Journey',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus diam eget nunc placerat vehicula. Pellentesque eget turpis sed neque dignissim mattis. Duis lacinia, lectus vitae accumsan hendrerit, metus elit iaculis magna, quis dignissim nisi dolor ut nibh. Maecenas vitae magna quis est consectetur tempus et vitae tellus. Nunc turpis velit, vulputate a magna eu, dignissim condimentum enim. ',
        user_id: '3',
    },
    {
        title: 'Coding Secrets Every Developer Should Know',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus diam eget nunc placerat vehicula. Pellentesque eget turpis sed neque dignissim mattis. Duis lacinia, lectus vitae accumsan hendrerit, metus elit iaculis magna, quis dignissim nisi dolor ut nibh. Maecenas vitae magna quis est consectetur tempus et vitae tellus. Nunc turpis velit, vulputate a magna eu, dignissim condimentum enim. ',
        user_id: '2',
    },
    {
        title: 'Advanced Tech Interview Prep Questions',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus diam eget nunc placerat vehicula. Pellentesque eget turpis sed neque dignissim mattis. Duis lacinia, lectus vitae accumsan hendrerit, metus elit iaculis magna, quis dignissim nisi dolor ut nibh. Maecenas vitae magna quis est consectetur tempus et vitae tellus. Nunc turpis velit, vulputate a magna eu, dignissim condimentum enim. ',
        user_id: '1',
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;