import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import {app} from '../../config/firebase_config'
import { useEffect, useState } from 'react';
import { getAuth,
        signInWithEmailAndPassword,
        GoogleAuthProvider,
        signInWithPopup
       } from 'firebase/auth';
import { useRouter } from 'next/router';


export default function Login() {

    const auth =getAuth();
    const googleProvider = new GoogleAuthProvider();
    const router= useRouter();
    const [email,setEmail]= useState('');
    const [password, setPassword]=useState('');

    const login = () => {
        //signs in 
        signInWithEmailAndPassword(auth,email,password)
        //if sign in successfull 
        .then((response) =>{
            //record the response
            console.log(response.user)
            //when tab is closed auto logout 
            sessionStorage.setItem('Token',response.user.accessToken)
            router.push('../profile/profilehome')
        })
        .catch(err => {
            alert('Login Failed, Please Try Again with Correct Credentials')
        })
        .catch
    }

    const signUpWithGoogle = () =>{
        signInWithPopup(auth,googleProvider)
        .then((response) =>{
            //record the response
            console.log(response.user)
            sessionStorage.setItem('Token',response.user.accessToken)
            router.push('../profile/profilehome')

        })

    }
        useEffect(() =>{
            //creating a check
            let token = sessionStorage.getItem('Token')
            //if we have a token we cant go back to reg page 
            if(token){
                router.push('../profile/profilehome')
            }
        }, [])
        
        
return (
    
    <div className="grid h-screen place-items-center ">
    {/*title*/}   
        <main className={styles.main}><h1></h1>
            <p className="text-4xl font-bold my-5">Log In</p>
            <br></br>

        <input  type="email" 
                placeholder="Email" 
                className="input input-bordered " 
                onChange={(event)=> setEmail(event.target.value)}
                value={email}
        />

        <input  type="password" 
                placeholder="Password"
                className="input input-bordered my-5"
                onChange={(event)=> setPassword(event.target.value)}
                value={password}
        />

        {/*link to register page incase user doesn't has a account*/}    
            
        <button 
            className="btn btn-wide"
            onClick={login}
        >Sign In</button>
        <br></br>
        <label className="label">
            <span className="label-text">
                Have a Google Account?
            </span>
        </label>
        {/*convert to css!!!!!!!!!!!!!!!!!!!*/}
<button type="button" 
        className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 btn btn-wide"
        onClick={signUpWithGoogle}
>
  <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
  Sign in with Google
</button>
    <br></br>

        Dont have an account?{" "}
            <a href="/Log&Reg/register"
                className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            > Register</a>


        </main>
    
    </div>
  )
}