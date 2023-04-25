import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css';
import {app,db,auth} from '../../config/firebase_config'
import { useRouter } from 'next/router';
import { collection,addDoc,getDocs,doc,getDoc } from 'firebase/firestore';
import { data } from 'autoprefixer';

export default function pHome() {

    
  const crf =auth?.currentUser?.uid

  //const databaseRef = doc(db,'User Data/${crf}');
  // const databaseRef=doc(db,`User Data/${crf}`);

  const databaseRef=collection(db,'User Data');
  //get data to a array
  const[fireData, setFireData]= useState([]); 

  //log out
    const logout = (() => {
        sessionStorage.removeItem('Token')
        router.push('../Log&Reg/register')
    })

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
<main className="profile-page">


  
        <div className="text-center mt-12">
            <h3 className="text-4xl font-semibold leading-normal mb-2  mb-2">
           <strong> {data.name}</strong>,  {data.age}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg "></i>{" "}
              {data.country}, {data.city}
            </div>
        </div>
        <div className="mt-2  text-center">
        <button
          className="text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
          type="button"
        >
          <i className="flex fab fa-twitter"></i>
        </button>
        <button
          className="text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
          type="button"
        >
          <i className="flex fab fa-facebook-square"></i>
        </button>
        
      </div>
        <div className="mt-10 py-10  text-center">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-9/12 px-4">
              <p className="mb-4 text-lg leading-relaxed ">
              {data.description}
              </p>
              <hr
           className="my-12  h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
              
            </div>
                </div>
              </div>
     <div className='text-center'>
               <div className="card  glass card-compact w-3/5 ml-20 mb-5">
                  <div className="card-body">
                    <h3 className="card-title text-2xl font-semibold">
                       <strong>Email :  </strong></h3>
                    <h3 className="text-2xl font-semibold leading-normal mb-2  mb-2">
                        <span>{data.contact_Email}</span>
                    </h3>  
                  </div>
               </div>
               <div className="card  glass card-compact w-3/5 ml-20 mb-5 ">
                  <div className="card-body">
                    <h3 className="card-title text-2xl font-semibold">
                       <strong>Contact Number :   </strong></h3>
                    <h3 className="text-2xl font-semibold leading-normal mb-2  mb-2">
                        <span>{data.contact_number}</span>
                    </h3>  
                  </div>
               </div>
               <div className="card  glass card-compact w-3/5 ml-20 mb-5">
                  <div className="card-body">
                    <h3 className="card-title text-2xl font-semibold">
                       <strong>Gender :  </strong></h3>
                    <h3 className="text-2xl font-semibold leading-normal mb-2  mb-2">
                        <span>{data.gender}</span>
                    </h3>  
                  </div>
               </div>
               <div className="card  glass card-compact w-3/5 ml-20 mb-5">
                  <div className="card-body">
                    <h3 className="card-title text-2xl font-semibold">
                       <strong>Quote :  </strong></h3>
                    <h3 className="text-2xl font-semibold leading-normal mb-2  mb-2">
                        <span>{data.quote}</span>
                    </h3>  
                  </div>
               </div>
          </div>     
              
        </main>
      
       
                    
        </div>

      )
    })}
  
  {/* <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      
                    </div>
                  </div>
                  
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                    Jenna Stones
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    Los Angeles, California
                  </div>
                  <div className="mb-2 text-gray-700 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div className="mb-2 text-gray-700">
                    <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                    University of Computer Science
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                      <a
                        href="#pablo"
                        className="font-normal text-pink-500"
                        onClick={e => e.preventDefault()}
                      >
                        Show more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

    <a href="/profile/editPdetails"
                className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            > Edit</a>

<button className="btn btn-primary md:btn-md"
          onClick={logout}
    >Log Out</button>
</div>
    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
  )
}