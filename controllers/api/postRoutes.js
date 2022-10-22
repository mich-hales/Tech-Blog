const router = require('express').Router();
const { json } = require('sequelize');
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// Creating a post button
router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Post.create({
            content: req.body.postContent,
            title: req.body.postTitle,
            user_id: req.session.user_id,
        });
        res.status(200)json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Update post endpoint
router.put('/', withAuth, async (req, res) => {
    Post.update(
        {
            content: req.body.postContent,
            title: req.body.postTitle
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

// Delete post endpoint
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