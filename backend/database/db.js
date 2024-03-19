const mongoose = require("mongoose");


// mongo url string 
const url = "";

function connectDB(url) {
  mongoose.connect(url).then((res) => {
    console.log("Connected to database successfully...");
  }).catch((err) => {
    console.log("Failed to connet to database ");
  })
}

connectDB(url);



const UserSchema = new mongoose.Schema({
  username: { type: mongoose.Schema.Types.String },
  phone: { type: mongoose.Schema.Types.String, unique: true },
  cost: { type: mongoose.Schema.Types.Number },
  price: { type: mongoose.Schema.Types.Number },
  count: { type: mongoose.Schema.Types.Number },
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'lastModified'
  }
})

const AdminSchema = new mongoose.Schema({
  username: { type: mongoose.Schema.Types.String, required: true },
  password: { type: mongoose.Schema.Types.String, required: true }
})



const User = mongoose.model('User', UserSchema);
const Admin = mongoose.model('Admin', AdminSchema);

module.exports = {
  User,
  Admin
}
