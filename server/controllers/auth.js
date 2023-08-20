// let users = [];
// let loggedInUsers = [];

const User = require("../models/user");

// const loggedInUser = require("../models/loggedInUser");


exports.getUsers = (req, res, next) => {
  // Pass the `isAuthenticated` prop from the server to the client
  res.json({
    message: "All users",
    users: users,
  });
};

exports.postSignUp = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const user = new User({
    name: name,
    email: email,
    password: password, // use bcrypt later
    is_logged_in: false,
  });
  user.save();

  // users.push(newUser);
  // res.redirect('/auth/signin')
  res
    .json({
      message: "new User added",
      userDetails: newUser,
    })
    .redirect("/auth/signin");
};

exports.postSignIn = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({ email: email });

  if (!user) {
    return res.json({ message: "email does not exist" });
  }

  if (user.password !== password) {
    return res.json({ message: "invalid password" });
  }

  user.is_logged_in = true;

  console.log("user loggedin successfully");

  res
    .json({
      messsage: "user authenticated",
      user: user,
    })
    .redirect("/");
};

exports.getLoggedInUsers = async(req, res, next) => {
  // for (let user of User) {
  //   if (user.is_logged_in) {
  //     LoggedInUser.save(user);
  //   }
  // }
  const liveUsers = await User.find((user)=>{
    user.is_logged_in === true 
  })
  


  res.json({
    message: "Logged in users",
    loggedInUsers: liveUsers,
  });
};    
