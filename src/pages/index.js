import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Login from '../components/loginform/login'

export default function Home() {
  return (<>
    <Login/>
  </>
    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
  )
}
