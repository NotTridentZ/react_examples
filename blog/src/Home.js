import React from 'react'
import { useState, useEffect } from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {
  //use local data
  // const [blogs, setBlogs] = useState([
  //   { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
  //   { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
  //   { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  // ])

  // const [blogs, setBlogs] = useState(null)
  // const [isPending, setIsPending] = useState(true)
  // const [error, setError] = useState(null)

  //use local data
  // const handleDelete = (id) =>{
  //   const newBlog = blogs.filter(blog => blog.id !== id)
  //   setBlogs(newBlog)
  // }

  // useEffect(()=>{
  //   setTimeout(() => {
  //     fetch('http://localhost:8000/blogs')
  //     .then(res => {
  //       if(!res.ok){
  //         throw Error('could not fetch the data for that resource')
  //       }
  //       return res.json()
  //     })
  //     .then(data => {
  //       setBlogs(data)
  //       setIsPending(false)
  //       setError(null)
  //     })
  //     .catch((err) => {
  //       setIsPending(false)
  //       setError(err.message)
  //     })
  //   }, 1000)
  // },[blogs])

  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" /* //use local datahandleDelete = {handleDelete}*/ />}
    </div>
  )
}

export default Home