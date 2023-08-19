import React, {
  useState,
  useEffect,
  useCallback
} from "react";

import './Users.css';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loggedUser, setLoggedUser] = useState([]);
//   const IsAuthenticatedContext = createContext(false);

  const getUsers = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:8000/");
      const usersData = await response.json();
      setUsers(usersData.users);
      
    } catch (err) {
      // Error handling would be implemented here
      console.log(err);
    }
  }, []);

  const getLoggedInUser = useCallback(async()=>{
    try {
        const response = await fetch("http://localhost:8000/auth/signin");
        const usersData = await response.json();
        setLoggedUser(usersData.loggedInUsers);
        // const mailresponse = await fetch("http://localhost:8000/");
        // const usersDataMail = await response.json();
        
      } catch (err) {
        // Error handling would be implemented here
        console.log(err);
      }
  },[])

  const authenticateUser = async (useremail) => {
    const response = await fetch(`http://localhost:8000/auth/signin`, {
      method: 'POST',
      body: JSON.stringify({ email: useremail }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  };

  const isAuth = loggedUser.filter((loggedUser) => {
    return authenticateUser(loggedUser.email);
  });

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  useEffect(() => {
    getLoggedInUser();
  }, [getLoggedInUser]);

//   const isAuthenticated = useContext(IsAuthenticatedContext);

  return (
    <React.Fragment>
      {
        // Check the user's authentication status
         users && isAuth && (
          <ul className="users__list">
            {users.map((user) => (
              <li key={user.id}>
                <span>{user.name}</span>
                <span>{user.email}</span>
                
              </li>
            ))}
          </ul>
        )
      }
    </React.Fragment>
  );
};

export default Users;
