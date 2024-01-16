const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');


// mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;

// Event listeners for connection events
db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});





// {mongodb://127.0.0.1:27017/instaverse}
const userSchema = mongoose.Schema({
    username: String,
    name: String,
    email: String,
    password: String,
    profileimage: String,
    bio: String,
    posts: [{ 
      type: mongoose.Schema.Types.ObjectId,
       ref: "post" }]

})

userSchema.plugin(plm);
module.exports = mongoose.model("user",userSchema);