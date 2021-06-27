//our-domain.com/
import React from 'react';
import MongoClient from 'mongodb';

import Home from '../Components/Homepage/Home';

import { Fragment } from 'react';
import Head from 'next/head';
function HomePage(props){
  // console.log(props)
  return  <Fragment>
  <Head>
    <title>Meeting up with NEXT JS</title>
    <meta 
    name="description"
    content="ahhh relife relife finally,Great day at work"
    />
  </Head>
  <Home meetups={props.meetupPlaces}/>
  </Fragment>
  }

//getStaticProps()


//     async function handler(){

//       const response = await fetch('/api/Meetups');
//       const Data = await response.json();
// return Data 
//    }

   
// const MeuP=handler();
// console.log(MeuP);

export async function getStaticProps(){
  
  const client= await MongoClient.connect("mongodb+srv://next_newby:newby2021@cluster0.wyaqz.mongodb.net/MeetupDatabase?retryWrites=true&w=majority")
  const db=client.db()
  const Collection=db.collection('meetUpsOnly');

  // const response = await fetch('/api/Meetups');
  // const Data = await response.json();
  //  Collection.find({})
  // .toArray((err,documets)=>{
  //     // res.send(documets)
  //     console.log(documets)
  // })
const data= await Collection.find({}).toArray();
// console.log(Data)

client.close()
 return{
   props:{
    meetupPlaces:data.map(dta=>({
      image:dta.image,
      description:dta.description,
      address:dta.address,
      _id:dta._id.toString(),
      title:dta.title,
    })),
  },
  revalidate:1,
};
} 

//getServerSideProps()

// export async function getServerSideProps(context){
// const req=context.req,
// const res=context.res
//   //fetch data from an API
//  return{
//    props:{
//     meetupPlaces:meetups
//   },
//   revalidate:10
// }
// }

export default HomePage;