import React from 'react';
import '../styles/Main.css';
import MainProfile from '../components/MainProfile';
import MainToDo from '../components/MainToDo';
const Main = ()  => {
    return (
        <div className='main-container'>
            <MainProfile />
            <MainToDo />
        </div>
    )
}

export default Main;