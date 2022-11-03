const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Route for homepage -- GET all posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                { 
                    model: User, 
                    attributes: ['name'],
                },
            ],
        }).catch((err) => res.json(err));
        
        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            posts,
            title: 'Tech Blog',
            style: 'jass.css',
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route for individual posts -- GET one post
router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: Comment
                },
                {
                    model: User
                },
            ],
        });

        const post = postData.get({ plain: true });

        console.log

        // Getting all the comment data
        let commData = [];
        for (let i = 0; i < post.comments.length; i++) {
            const comment = await Comment.findByPk(post.comments[i].id, {
                include: [
                    {
                        model: User
                    },
                ],
            });
            commData.push(comment);
        }

        const comm = commData.map((com) => com.get({ plain: true }));
        res.render('post', {
            post, 
            comm,
            title: 'Post',
            style: 'jass.css',
            logged_in: req.session.logged_in,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Route for login page
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login', {
        title: 'Login',
        style: 'login.css',
    });
});


// Route for dashboard
router.get('/dashboard', withAuth, async (req, res) => 
{
    try {
        

        const userData = await User.findByPk(req.session.user_id, {
            include: [
                {
                    model: Post
                }
            ]
        });

        const user = userData.get({ plain: true });

        res.render('dashboard', {
            user, 
            title: 'Dashboard',
            style: 'jass.css',
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route for updated posts page
router.get('/update/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);
        const post = postData.get({ plain: true });
        res.render('update', {
            title: 'update',
            style: 'jass.css',
            post,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;