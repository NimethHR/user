export const Auth = () => {
    return (
        <div>
            <input placeholder="Email ..... "/>
            <input placeholder="Password ..... "/>
        </div>
    );

};
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [user, setUser] = useState(null);
//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = () => {
//     setError("");
//     setLoading(true);
//     auth
//       .signInWithEmailAndPassword(email, password)
//       .then((user) => {
//         // signed in
//         console.log("user", user);
//         setUser(user);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log("error", error);
//         setError(error.message);
//         setLoading(false);
//       });
//   };

//   const handleLogout = () => {
//     auth
//       .signOut()
//       .then(() => {
//         // Sign-out successful.
//         setUser(null);
//       })
//       .catch((error) => {
//         // An error happened.
//         console.log("error", error);
//       });
//   };

//   const handleRegister = () => {
//     setError("");
//     setLoading(true);
//     auth
//       .createUserWithEmailAndPassword(email, password)
//       .then((user) => {
//         // signed in
//         console.log("user", user);
//         setUser(user);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log("error", error);
//         setError(error.message);
//         setLoading(false);
//       });
//   };

//   const togglePasswordVisiblity = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="auth">
//       <div className="auth__container">
//         <h1 className="auth__title">User Management</h1>
//         <div className="auth__form">
//           <div className="auth__input">
//             <TextField
//               label="Email"
//               variant="outlined"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="auth__input">
//             <TextField
//               label="Password"
//               variant="outlined"
//               type={showPassword ? "text" : "password"}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <IconButton
//               aria-label="toggle password visibility"
//               onClick={togglePasswordVisiblity}
//             >
//               {showPassword ?
