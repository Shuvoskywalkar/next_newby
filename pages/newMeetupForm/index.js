import ContctForm from "../../Components/Contact/ContctForm";
import {useRouter} from 'next/router';


import { Fragment } from 'react';
import Head from 'next/head';
const index = () => {
    const router=useRouter();

    async function addMeetupHandler(addedData){
    const response = await fetch('/api/newMeetupForm',{
        method:'POST',
        body:JSON.stringify(addedData),
        headers:{'Content-Type':'application/json'}
    });
    const data = await response.json();

console.log(data)
        // console.log("booom");
        // console.log(addedData)

    router.push('/')
    }
    return (
<Fragment>      
    <Head>
    <title>Enter the meetup place </title>
          <meta 
          name="description"
          content="ay tobe sohochori hate hate dhori dhori"
          />
    </Head>
          <ContctForm addMeetupHandler={addMeetupHandler}/>
</Fragment>
    );
};

export default index;