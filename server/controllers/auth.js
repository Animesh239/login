let users =[];

export function postSignUp(req,res,next){
    const newUser = {
        id: new Date().toISOString(),
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };
      users.push(newUser);
      res.json({ message: "new User added", userDetails: newUser });
}

export async function postSignIn(req,res,next){
    const email = req.body.email;
    const password = req.body.password;
  
    const user = await users.find((user) => {
      return user.email === email 
    });
  
    if (!user) {
            return res.json({ message: "email does not exist" });
          }
          if (user.password !== password) {
            return res.json({ message: "invalid password" });
          }
  
    console.log("user loggedin successfully");
    return res.json({ messsage: "user authenticated", user: user });
}