import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css';
import {app,db} from '../../config/firebase_config'
import { useRouter } from 'next/router';
import { collection,addDoc } from 'firebase/firestore';

export default function profileEdit() {

    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [gender,setGender] = useState('');
    const [conemail,setconEmail] = useState('');
    const [pnumber,setPnumber] = useState('');
    const [desc,setDesc] = useState('');
    const [quote,setQuote] = useState('');
    const [city,setCity] = useState('');
    const [country,setCountry] = useState('');

    const databaseRef=collection(db,'User CRUD Data');

    let router = useRouter()
    useEffect(() =>{
        //creating a check
        let token = sessionStorage.getItem('Token')
        //if we dont have a token we will pushed to reg page 
        if(!token){
            router.push('../Log&Reg/register')
        }
    }, [])

    const addData = () =>{
        addDoc(databaseRef,{

        })
    }

  return (
    
<div className={styles.main}>
    <p className="text-4xl">Profile</p>
    
    <br></br>
    <input type="text" placeholder="Your Name" 
        className="input input-bordered w-full max-w-xs"
        onChange={event => setName(event.target.value)}
     />

     <br></br>
    <input type="text" placeholder="Age" 
        className="input input-bordered w-full max-w-xs"
        onChange={event => setAge(event.target.value)}
     />

     <br></br>
    <input type="text" placeholder="Gender" 
        className="input input-bordered w-full max-w-xs"
        onChange={event => setGender(event.target.value)}
     />

     <br></br>
    <input type="email" placeholder="Contact Email" 
        className="input input-bordered w-full max-w-xs"
        onChange={event => setconEmail(event.target.value)}
     />

     <br></br>
    <input type="number" placeholder="Contact Number" 
        className="input input-bordered w-full max-w-xs"
        onChange={event => setPnumber(event.target.value)}
     />

     <br></br>
     <textarea 
        placeholder="Description" 
        className="textarea textarea-bordered textarea-sm w-full max-w-xs"
        onChange={event => setDesc(event.target.value)}>
    </textarea>

     <br></br>
    <input type="text" placeholder="A Qoute to Display" 
        className="input input-bordered w-full max-w-xs"
        onChange={event => setQuote(event.target.value)}
     />

     <br></br>
    <input type="text" placeholder="Country of Origin" 
        className="input input-bordered w-full max-w-xs"
        onChange={event => setCountry(event.target.value)}
     />

     <br></br>
    <input type="text" placeholder="City of Origin" 
        className="input input-bordered w-full max-w-xs"
        onChange={event => setCity(event.target.value)}
     />
     <br></br>
    

    <a href="/profile/profilehome"
                className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            > Home</a>
</div>
    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
  )
}