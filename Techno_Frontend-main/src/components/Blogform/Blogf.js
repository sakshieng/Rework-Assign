import React from "react";
import styles from './Blogf.css';

const Blog_f = () => {
    return (
        <div className="app">
            <div className="blog-form">
                <div className="title">Add Blog</div>
                <form id="wlug">
                    <div className="input-container">
                        <input type="text" placeholder="Title"/>
                    </div>
                <div className="input-container">
                    <textarea className="description" placeholder="Description"></textarea>
                    <textarea className="content" placeholder="Content"></textarea>
                    <form>
                        <div className="input-container">
                            <label>Image</label>
                            <input type="file" />
                        </div>
                        <div className="final-container">
                            <button typeof="submit" className="button-container">ADD BLOG</button>
                        </div>
                    </form>
                </div>
                </form>
            </div>
        </div >
    );
}

export default Blog_f
