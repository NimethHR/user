// import { createContext, useState, useEffect } from 'react';
// import { auth } from '../../config/firebase_config';

// /**
//  * context to get the current users auth object
//  * @example
//  * const {currentUser} = useContext(AuthContext);
//  */
// const AuthContext = createContext();

// /**
//  * context provider to get the current users auth object
//  */
// const AuthContextProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     return auth.onAuthStateChanged((user) => {
//       if (user) {
//         setCurrentUser(user);
//       } else {
//         setCurrentUser(null);
//       }
//       setLoading(false);
//     })
//   }, []);

//   //TODO - user loading page
//   return (
//     <AuthContext.Provider value={{ currentUser }}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };

// export { AuthContext, AuthContextProvider };