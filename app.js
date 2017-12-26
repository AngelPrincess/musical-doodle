require('dotenv').config();

const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');

// Build Snoowrap and Snoostorm clients
const r = new Snoowrap({
    userAgent: 'reddit-bot-example-node',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS
});
const client = new Snoostorm(r);

const streamOpts = {
    subreddit: 'all',
    results: 25
};

const comments = client.CommentStream(streamOpts);

// On comment, perform whatever logic you want to do
comments.on('comment', (comment) => {
    console.log(comment);
    if (comment.body === 'a') {
        comment.reply('e');
    }
});

