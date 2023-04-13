import Head from 'next/head';
import { useEffect } from 'react';
import styles from '../../styles/Home.module.css';
import {app} from '../../config/firebase_config'
import { useRouter } from 'next/router';

export default function pHome() {

    let router = useRouter()

    useEffect(() =>{
        //creating a check
        let token = sessionStorage.getItem('Token')
        //if we dont have a token we will pushed to reg page 
        if(!token){
            router.push('../Log&Reg/register')
        }
    }, [])

  return (
    
<div>
    <p className="text-4xl">Profile</p>

    <a href="/profile/editPdetails"
                className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            > Edit</a>
</div>
    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
  )
}