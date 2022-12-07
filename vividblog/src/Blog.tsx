import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
 
//Function
const Blog=()=> {
  //UseParam used to fetch the value from the url
  const {slug}=useParams();
  //UseState for fetching the value from the blog object
  const [blogDetails, setBlogDetails] = useState({}as any);
  

  //useEffect to call the function
  useEffect(() => {
    getBlog();
  }, []);

  //Axios Request call and set the state of the blogDetails
  const getBlog=()=>
  {
 
    console.log(slug);
     axios.get(`http://localhost:5001/blog/${slug}`,)
    .then((res)=>{
      console.log(res.data);
      setBlogDetails(res.data);
      
    })
    .catch((err)=>{
      console.log(err);
    })
 
    
  

}
 

  return (
  <>
    <div className='blogBody'>
      {/* Fetching the information from the object and displaying as html in div section */}
      <div dangerouslySetInnerHTML={{__html: `${blogDetails.content}`}} />
    </div>
    </>
  )
}

export default Blog
