import React from 'react'
import BlogCard from '../BlogCard/BlogCard'
import styles from './Blogs.module.css'

const Blogs = () => {
  return (
    <div className={styles.Blogs}>
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  )
}

export default Blogs
