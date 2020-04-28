const express = require('express'),
	app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

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

app.listen(process.env.PORT || 3001, function() {
	console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env);
});
