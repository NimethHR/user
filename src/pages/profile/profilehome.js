import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css';
import {app,db} from '../../config/firebase_config'
import { useRouter } from 'next/router';
import { collection,addDoc,getDocs } from 'firebase/firestore';
import { data } from 'autoprefixer';

export default function pHome() {


  const [name,setName] = useState('');
  const [age,setAge] = useState(null);
  const [gender,setGender] = useState('');
  const [conemail,setconEmail] = useState('');
  const [pnumber,setPnumber] = useState(null);
  const [desc,setDesc] = useState('');
  const [quote,setQuote] = useState('');
  const [city,setCity] = useState('');
  const [country,setCountry] = useState('');


  const databaseRef=collection(db,'User Data');
  //get data to a array
  const[fireData, setFireData]= useState([]); 

    let router = useRouter()
    useEffect(() =>{
        //creating a check
        let token = sessionStorage.getItem('Token')
        //if we we have the token get the data
        if(token){
          getData()
        }
        //if we dont have a token we will pushed to reg page 
        if(!token){
            router.push('../Log&Reg/register')
        }
    }, [])

    const getData = async() =>{
      await getDocs(databaseRef)
      .then((response) =>{
        //get array of objects also returns id 
       setFireData(response.docs.map((data) =>{
          return {...data.data(),id: data.id}
        }))
      })

    }


  return (
    
<div  className={styles.main}>
    <p className="text-4xl">Profile</p>
    <br></br>

    {fireData.map((data) =>{
      return(
        <div> 
          <p>{data.name}</p>
          <p>{data.age}</p>
          <p>{data.gender}</p>
          <p>{data.conemail}</p>
          <p>{data.pnumber}</p>
          <p>{data.desc}</p>
          <p>{data.quote}</p>
          <p>{data.city}</p>
          <p>{data.country}</p>
        </div>

      )
    })}





    <a href="/profile/editPdetails"
                className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            > Edit</a>
</div>
    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
  )
}