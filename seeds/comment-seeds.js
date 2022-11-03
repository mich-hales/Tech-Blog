const { Comment } = require('../models');

const commentData = [
    {
        user_id: '2',
        post_id: '1',
        comment: '',
        date: 10/11/22,
        
    },
    {
        user_id: '3',
        post_id: '2',
        comment: '',
        date: 10/01/22,
        
    },
    {
        user_id: '1',
        post_id: '3',
        comment: '',
        date: 9/18/22,
        
    },
    {
        user_id: '3',
        post_id: '4',
        comment: '',
        date: 8/11/22,
        
    },
    {
        user_id: '2',
        post_id: '5',
        comment: '',
        date: 6/30/22,
        
    },
    {
        user_id: '',
        post_id: '',
        comment: '',
        date: 5/4/22,
        
    }
];

const commentSeeds = () => {
    Comment.bulkCreate(commentData);
}

module.exports = commentSeeds;

