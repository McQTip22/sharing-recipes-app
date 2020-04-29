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

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', ''));
	});
}

app.listen(process.env.PORT || 3000, function() {
	console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env);
});
