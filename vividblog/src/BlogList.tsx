import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import moment from 'moment';

//function
const BlogList=()=> {
  
  //use States for fetching the blog information and pagination information from backend
  const [blogs, setBlogs] = useState([]as any);
  const [pagination,setPagination]=useState({
    page:1,
    pagecount:1
  });

  //useEffect
  useEffect(() => {
    getBlog();
  }, [pagination.page]);
 
  //API function call to fetch the values using axios and set the use states
  const getBlog=()=>
  {
  try
  {
    //axios get call
     axios.get(`http://localhost:5001/${pagination.page}`)
    .then((res)=>{
      console.log(res.data);


      setBlogs(res.data.blogs);
      setPagination({...pagination,pagecount:res.data.blogcount});
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  catch(err)
  {
      console.log('Axios call error')
  }
  }

  //onPageChange method for pagination to set up the new page information
  const handlePageChange=(data:any)=>
  {

    let currentpage= data.selected+1
    setPagination({
      ...pagination,
      page:currentpage
    })

    console.log(data.selected)
  }
  
  return (
  
    <div className='container'>
      <div className='row m-2'>
      <h1 ><b>Vivid Theory Blog</b></h1>
      <div className='row m-2'>

      {/* mapping the information and displaying it on the card  */}
        {blogs.map((blog: any) => (
          
          <div className='col-sm-6 col-md-4 v my-2'>
            <a key={blog.id} href={`/blog/${blog.slug}`}>
            <div className='card shadow-sm h-100' style={{minHeight:225}}>
              <div className='card-body'>
                <img  className='card-img' src={blog.image} alt='' style={{minHeight:150}}/>
                <h4 className='card-title text-center h2'>{blog.title}</h4>


                {/* Moment used to format the date */}
                <h6 className='card-subtitle mb-2 text-muted text-center'>Published on:{moment(blog.published_at).format('LL')}</h6>
              </div>
            </div>
             
            </a>
          </div>
         
        ))}
      </div>
      </div>
     {/* React paginate component to use for pagination */}
     <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'} 
        pageCount={3}
        onPageChange={handlePageChange}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        activeClassName={'active'}
        />
    </div>
    
  )
}

export default BlogList