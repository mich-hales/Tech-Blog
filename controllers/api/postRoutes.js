const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// Creating a post 
router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.postTitle,
            content: req.body.postContent,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Update post 
router.put('/', withAuth, async (req, res) => {
    Post.update(
        {
            title: req.body.postTitle,
            content: req.body.postContent,
        },
        {
            where: {
                id: req.body.postId,
            },
        }
    ).then((updatedPost) => {
        res.json(updatedPost);
    }).catch((err) => res.json(err));
});

// Delete post 
router.delete('/', withAuth, (req, res) => {
    Post.destroy({
        where: {
            id: req.body.postId,
        },
    }).then((deletedPost) => {
        res.json(deletedPost);
    }).catch((err) => res.json(err));
});

module.exports = router;