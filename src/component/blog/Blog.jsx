import React from "react"
import Back from "../common/back/Back"
import BlogCard from "./BlogCard"
import Header from "../common/heading/Header"
import "./blog.css"

const Blog = () => {
  return (
    <>
    <Header/>
      <Back title='Blog Posts' />
      <section className='blog padding'>
        <div className='contain grid2'>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog
