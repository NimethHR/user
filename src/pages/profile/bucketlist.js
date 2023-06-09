import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css';
import { app, db, auth } from '../../config/firebase_config'
import { useRouter } from 'next/router';
import {
    collection,
    addDoc,
    getDocs,
    doc,
    deleteDoc,
    updateDoc,
    query, where
} from 'firebase/firestore';
import { data } from 'autoprefixer';

export default function bucketlist() {

    //update
    const [isUpdate, setIsUpdate] = useState(false)
    const [ID, setID] = useState(null);
    //add
    const [item, setItem] = useState('');
    const databaseRef = collection(db, 'BucketList');

    //read
    const crf = auth?.currentUser?.uid
    const crf1 = String(crf);

    const databaseref3 = query(databaseRef, where("UID", "==", crf1))
    //const databaseRef2=collection(db,'BucketList').where("UID","==","73hAnTQNCGVzQ5HJ8fYCUuvNHfS2");

    //get data to a array read
    const [fireData, setFireData] = useState([]);

    let router = useRouter()
    useEffect(() => {
        // //creating a check
        // let token = sessionStorage.getItem('Token')
        // //if we we have the token get the data
        // if (token) {
        //     getData()
        // }
        // //if we dont have a token we will pushed to reg page 
        // if (!token) {
        //     router.push('../Log&Reg/register')
        // }

        getData();
    }, [crf])

    //get query data from firebase   
    //add
    const addData = () => {
        addDoc(databaseRef, {
            item: item,
            UID: crf
        })
            .then(() => {
                alert('Details Added Succesfully')
                setItem('')
                getData()
            })
            .catch((err) => {
                console.log(err);
            })
    }

    //edit
    const getID = (id, item) => {
        setID(id)
        setItem(item)
        setIsUpdate(true)


    }
    const UpdateFields = () => {
        let fieldToEdit = doc(db, 'BucketList', ID)

        updateDoc(fieldToEdit, {
            item: item
        })
            .then(() => {
                alert('Data Updated')
                //empty strings or null
                setItem('')
                //so that when update button wil turn back to add item 
                setIsUpdate(false)
                getData()

            })
            .catch((err) => {
                console.log(err)
            })
    }

    //to delete
    const deleteitem = (id) => {
        let fieldtodelete = doc(db, 'BucketList', id)
        deleteDoc(fieldtodelete)

            .then(() => {
                alert('Item Deleted')
                getData()
            })
            .catch((err) => {
                alert('Cannot delete the item ')
            })
    }

    //to read
    const getData = async () => {
        await getDocs(databaseref3)
            .then((response) => {
                //get array of objects also returns id 
                setFireData(response.docs.map((data) => {
                    return { ...data.data(), id: data.id }
                }))
            })

    }


    return (

        <div className={styles.main}>
            <p className="text-4xl">Your Bucket List</p>

            <br></br><br></br>
            <input type="text" placeholder="Enter a Item "
                className="input input-bordered w-full max-w-xs"
                onChange={event => setItem(event.target.value)}
                value={item}
            />
            <br></br>
            {isUpdate ? (
                <button
                    className="btn md:btn-md"
                    onClick={UpdateFields}
                >Update Item
                </button>

            ) : (
                <button
                    className="btn md:btn-md"
                    onClick={addData}
                >Add Item
                </button>
            )}

            <br></br><br></br>
            {fireData.map((data) => {
                return (
                    <div className="card card-side bg-base-100 shadow-xl w-3/5 my-5">

                        <div className="card-body">

                            <h2 className="card-title">{data.item}</h2>
                            <div className="card-actions justify-end">
                                <button
                                    className="btn btn-primary sm:btn-sm"
                                    onClick={() => getID(data.id, data.item)}
                                >Edit
                                </button>
                                <button
                                    className="btn btn-primary sm:btn-sm"
                                    onClick={() => deleteitem(data.id)}
                                >Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}

            <a href="/profile/profilehome"
                className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            > Home</a>
        </div>
        // <h1 className="text-3xl font-bold underline">
        //   Hello world!
        // </h1>
    )
}