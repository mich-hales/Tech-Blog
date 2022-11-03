const { Comment } = require('../models');

const commentData = [
    {
        user_id: '2',
        post_id: '1',
        comment: 'Wow so cool!',
        date: 10/11/2022,
        
    },
    {
        user_id: '3',
        post_id: '2',
        comment: 'Interesting.',
        date: 10/01/2022,
        
    },
    {
        user_id: '1',
        post_id: '3',
        comment: 'I never knew that.',
        date: 9/18/2022,
        
    },
    {
        user_id: '3',
        post_id: '4',
        comment: 'Would love your contact info.',
        date: 8/11/2022,
        
    },
    {
        user_id: '2',
        post_id: '5',
        comment: 'What prompted this blog post?',
        date: 6/30/2022,
        
    },
    {
        user_id: '1',
        post_id: '6',
        comment: 'really cool',
        date: 5/4/2022,
        
    }
];

const commentSeeds = () => {
    Comment.bulkCreate(commentData);
}

module.exports = commentSeeds;

