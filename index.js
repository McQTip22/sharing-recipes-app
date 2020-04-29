const express = require('express'),
	app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');

const users = require('./routes/api/users');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//connect to DB config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose
	.connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
	.then(() => console.log('MongoDB connected successfully!!!'))
	.catch((err) => console.log(err));

//passport
app.use(passport.initialize());

require('./config/passport')(passport);

//routes
app.use('/api/users', users);

//use react build in client folder
app.use(express.static(path.join(__dirname, 'client', 'build')));

//apply react build to any unspecified route
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(process.env.PORT || 3000, function() {
	console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env);
});
