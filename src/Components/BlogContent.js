import "./BlogContent.css"
import "./BlogContent.css"
import React from 'react'


const AboutContent = () => {
    return (
        <div class="blog-container">
            <div class="single-blog-container">
                <div class="blog-card">
                    <h2 class="blog-title">Starting Codelcan - 7th November 2022</h2>
                    <div class="line">
                        <hr></hr>
                    </div>
                    <div class="blog-details">
                        <p>Started code clan today, learned about the best ways to work in the software industry.
                            Learned more in depth how to use the terminal and its commands and how to navigate it and then also how to use git,
                            the website and using it in the terminal. Learned how to create a respiratory in git and how to push a file into this from the terminal.
                        </p>
                    </div>
                </div>
            </div>
            <div class="single-blog-container">
                <div class="blog-card">
                    <h2 class="blog-title">Finished 1st Full Stack App - 7th December 2022</h2>
                    <div class="line">
                        <hr></hr>
                    </div>
                    <div class="blog-details">
                        <p>Handed in my 1st full stack project that I built myself. This was built in Python and used Flask with SQL. This was a great opportunity
                            to consolidate my learning and put to use what I had learned. Using a database was interesting and felt very useful to get more
                            fluent with. Excited to see the development between this project and my next.
                        </p>
                    </div>
                </div>
            </div>
            <div class="single-blog-container">
                <div class="blog-card">
                    <h2 class="blog-title">Created a Basic E-commerce site with React - 10th Januaury 2023</h2>
                    <div class="line">
                        <hr></hr>
                    </div>
                    <div class="blog-details">
                        <p>Created a basic E-commerce site that sold shoes using React. Was interesting to learn how to use useStates and useEffects in the most
                            reasonable and efective way and how sometimes you do not need to use them. Continuing to use React and learning the power of it has been
                            really fun and I enjoy it. Making the back-end work is always a great feeling, as I had to use my newly devloped software
                            problem-solving skills to make certain things work.
                        </p>
                    </div>
                </div>
            </div>
            <div class="single-blog-container">
                <div class="blog-card">
                    <h2 class="blog-title">JPEG image does not load through AWS Amplify but loads locally  - 16th Januaury 2023</h2>
                    <div class="line">
                        <hr></hr>
                    </div>
                    <div class="blog-details">
                        <p>Tried to load a "jpeg" file onto my website using AWS Amplify, however the image would not load once the website was deployed, but still showed
                            up locally. Changing the photo file to end in "jpg" solved the issue, but to solve it without changing from "jpeg" to "jpg" you need to change
                            the default configuration on AWS Amplify to include "jpeg" otherwise it will just render the index page.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent