const express = require('express')
const mongoose = require('mongoose')

const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');


const app = express();

// DB config
const db = require('./config/keys').mongoURI;

//connect to mongoDB
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB  connected'))
    .catch(err => console.log(err));


app.get('/', (req, res) => res.send('hell hohoh'));

//use routs 
app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/profile', profile);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));