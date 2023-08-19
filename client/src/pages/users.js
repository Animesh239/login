import React, {
  useState,
  useEffect,
  useCallback,
//   useContext,
//   createContext,
} from "react";



const Users = () => {
  const [users, setUsers] = useState([]);
  const [loggedUser, setLoggedUser] = useState([]);
//   const IsAuthenticatedContext = createContext(false);

  const getUsers = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:8000/");
      const usersData = await response.json();
      setUsers(usersData.loggedInUsers);
    } catch (err) {
      // Error handling would be implemented here
      console.log(err);
    }
  }, []);

  const getLoggedInUser = useCallback(async()=>{
    try {
        const response = await fetch("http://localhost:8000/auth/signin");
        const usersData = await response.json();
        setLoggedUser(usersData.users);
      } catch (err) {
        // Error handling would be implemented here
        console.log(err);
      }
  },[])

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
        loggedUser && users && (
          <ul className="users__list">
            {users.map((user) => (
              <li key={user.id}>
                <span>{user.name}</span>
                <span>{user.email}</span>
                <span>{user.name}</span>
              </li>
            ))}
          </ul>
        )
      }
    </React.Fragment>
  );
};

export default Users;
