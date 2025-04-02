import React from 'react';
import Avatar from '../assets/images/profile.png';
import '../styles/Main.css';
const MainProfile = () => {
    return (
        <div className='container'>
            <div className='sidebar'>
                <div className='profile'>
                    <img src={Avatar} alt="Avatar" />
                    <p className='name-profile'>Hey, ABCD</p>
                </div>
                <div className='menu-sidebar'>
                    <button>All Tasks</button>
                    <button>Today</button>
                    <button>Important</button>
                </div>
                <div className='stats'>

                </div>
            </div>

        </div>
    )
}

export default MainProfile;