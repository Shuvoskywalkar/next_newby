import React, { useState } from 'react';
import router, {useRouter}  from "next/router";
import { MongoClient, ObjectId } from 'mongodb';
import Script from 'next/script'

const Updatethismeetup = (props) => {


    console.log(props)

const{title,address,id,picture,description}=props.meetData;

const Post={
  title:title,
  address:address,
  description:description,
  image:picture,
  id:id
  };

  
// const Post={
//   title:null,
//   address:null,
//   description:null,
//   image:null,
//   id:null
//   };
  
  // const Form=new FormData()
const changeHandler=(e)=>{
  Post[e.target.name]=e.target.value
}
 async function clickedSend(){
  // console.log(Post)

//  const body=JSON.stringify(Post)
// console.log(body)
  // const response=await 
  fetch(`/api/Post/${id}`,{
    method:'PATCH',
    body:JSON.stringify(Post),
    headers:{'Content-Type':'application/json'}
  })
  // console.log(Sandbox)
  // const data=await response.json();
  // console.log(response)
  .then(res=>res.json(Post))
  .then(result=>{console.log(result);
  if (result.modifiedCount>0) {
 router.push('/')   ;
  }})
}
<Script>
 imput1=document.getElementById('picture').defaultValue
console.log(imput1)

 </Script>
    return (
        <div className="Body">
        <div className="feedback-card">
  <div className="feedback-header">
    SEND FEEDBACK
  </div>
  <div className="feedback-body">
  <input itemID="imput1" onBlur={changeHandler} defaultValue={picture} name="image" style={{marginBottom:"5px"}}  type="text" className="feedback-body__email" placeholder="URL to Picture" />
    <input  name="address" onBlur={changeHandler} defaultValue={address} style={{marginBottom:"5px"}}  type="text" className="feedback-body__email" placeholder="Title" />
    <input  name="title" onBlur={changeHandler} type="text" defaultValue={title} className="feedback-body__email" placeholder="Adress" />
    <textarea  name="description" type="text" onBlur={changeHandler} defaultValue={description} className="feedback-body__message" placeholder="Description">
        </textarea><button 
        
        id="feedback-body__submit" onClick={clickedSend}>SEND</button>
  </div>
</div>
</div>
    );
};

export async function getStaticPaths(){

    
  const client= await MongoClient.connect("mongodb+srv://next_newby:newby2021@cluster0.wyaqz.mongodb.net/MeetupDatabase?retryWrites=true&w=majority",{useUnifiedTopology:true})
  const db=client.db()
  const Collection=db.collection('meetUpsOnly');
  const Data=await Collection.find({}).toArray();


  return{
    fallback:'blocking',
    paths:Data.map((dta)=>({
    params:{updatethismeetup:dta._id.toString()}
}))
  }


}

export async function getStaticProps(context){

    const meetID = context.params.updatethismeetup;

    const client = await MongoClient.connect("mongodb+srv://next_newby:newby2021@cluster0.wyaqz.mongodb.net/MeetupDatabase?retryWrites=true&w=majority",{useUnifiedTopology:true})
    const db=client.db()
    const Collection=db.collection('meetUpsOnly') ;
    const Data=await Collection.findOne({ _id: ObjectId(meetID)});
    // .toArray()
    // console.log(Data)
    client.close();
    return{
        props:{
           meetData:{        
        title:Data.title,
        address:Data.address,
        description:Data.description,
        id:meetID,
        picture:Data.image
            }
        }
    }
}
export default Updatethismeetup;