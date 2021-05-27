import React from 'react'
import { useEffect, useState } from "react";


//function home() {
//fetch leta efter fetch post	
//const [postsByCategory, setPostsByCategory] = useState([]);

/* useEffect(() => {
    const fetchPosts = async () => {
      const response = await Api.get(`/posts/category/${category}`);
      setPostsByCategory(response.data);
    };
    fetchPosts();
    
  }, [category, posts]); //refetches posts every time category changes */

  function Home() {

	return (
			<div>
				<h1>HAMSTERWARS!</h1>
			</div>
		);
}



export default Home;