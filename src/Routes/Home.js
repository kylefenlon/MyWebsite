import React from 'react'
import NavBar from '../Components/NavBar';
import HomeContainer from '../Containers/HomeContainer'
import '../CSS/Home.css'

const Home = () => {
    return (
        <div>
            <NavBar />
            <div className='pageContent'>
                <HomeContainer />

            </div>
        </div>
    )
};

export default Home;