let users = [];
let loggedInUsers = [];

exports.getUsers = (req, res, next) => {
  // Pass the `isAuthenticated` prop from the server to the client
  res.json({
    message: "All users",
    users: users,
  });
};

exports.postSignUp = (req, res, next) => {
  const newUser = {
    id: new Date().toISOString(),
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    is_logged_in: false
  };

  users.push(newUser);
  // res.redirect('/auth/signin')
  res.json({
    message: "new User added",
    userDetails: newUser,
  });
  res.redirect('/auth/signin')
};

exports.postSignIn = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await users.find((user) => {
    return user.email === email;
  });

  if (!user) {
    return res.json({ message: "email does not exist" });
  }

  if (user.password !== password) {
    return res.json({ message: "invalid password" });
  }

    // Update the user's is_logged_in status to true
    user.is_logged_in = true;

    // Save the user
    
  

  console.log("user loggedin successfully");

  // res.redirect('/')
    

  res.json({
    messsage: "user authenticated",
    user: user,
  });
  res.redirect('/');
};

exports.getLoggedInUsers = (req, res, next) => {

  for (let user of users) {
    if (user.is_logged_in) {
      loggedInUsers.push(user);
    }
  }

  res.json({
    message: "Logged in users",
    loggedInUsers: loggedInUsers,
  });
};