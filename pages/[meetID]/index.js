import Image from 'next/image'; 
import MongoClient, { ObjectId } from 'mongodb';
import {useRouter} from 'next/router';


import { Fragment } from 'react';
import Head from 'next/head';
const meetDetailsPage = (props) => {
 
    const{meetData}=props;
    // console.log(props)
    return (
        <Fragment >
          <Head>
          <title>{meetData.title}</title>
          <meta 
          name="description"
          content={meetData.description}
          />
          </Head>
             <div style={{textAlign:"center",justifyContent:"center",marginTop:"12px"}}>
             <img className="imaage"  src={meetData.picture} alt="nai re vai"/>
             <br/>
<small>{meetData.id}</small>
<h1 >{meetData.title}</h1>
<h5>{meetData.address}</h5>
<p>{meetData.description}</p>
</div> 
      </Fragment>
    );
};



export async function getStaticPaths(){
 
  const client= await MongoClient.connect("mongodb+srv://next_newby:newby2021@cluster0.wyaqz.mongodb.net/MeetupDatabase?retryWrites=true&w=majority")
  const db=client.db()
  const Collection=db.collection('meetUpsOnly');

  const Data=await Collection.find({}).toArray();
  // console.log(Data)
   client.close();
    return{
    fallback:'blocking',
    paths:Data.map((dta)=>({params:{meetID:dta._id.toString()},}))
,}
}







export async function getStaticProps (context){
const meetID=context.params.meetID;
const client= await MongoClient.connect("mongodb+srv://next_newby:newby2021@cluster0.wyaqz.mongodb.net/MeetupDatabase?retryWrites=true&w=majority")
  const db=client.db()
  const Collection=db.collection('meetUpsOnly');

  const Data=await Collection.findOne({_id:ObjectId(meetID)});
  // console.log(Data)
  client.close();
return{
    props:{
        meetData:{
        title:Data.title,
        address:Data.address,
        description:Data.description,
        id:Data._id.toString(),
        picture:Data.image

        }

    }
}

}
export default meetDetailsPage;