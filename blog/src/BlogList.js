import React from 'react'
import { Link } from 'react-router-dom'

const BlogList = ({ blogs, title/*//use local data, handleDelete*/ }) => {
  return (
    <div>
      <h2>{title}</h2>
      {blogs.map(blog => (
        <div key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
          {/*//use local data <button onClick={() => {handleDelete(blog.id)}}>delete blog</button> */}
        </div>
      ))}
    </div>
  )
}

export default BlogList