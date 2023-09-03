
const mongoose = require('mongoose');

const connectDB = async () => {
	const connObject = await mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	console.log(
		`MongoDB connect: ${connObject.connection.host}`.cyan.underline.bold
	);
};

module.exports = connectDB;