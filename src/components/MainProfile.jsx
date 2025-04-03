import React from 'react';
import Avatar from '../assets/images/profile.png';
import '../styles/Main.css';
import { Icon } from "@iconify/react";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
const MainProfile = () => {
    const percentage = 75;
    return (
        <div className='sidebar-container'>
            <div className='sidebar'>
                <div className='profile'>
                    <img src={Avatar} alt="Avatar" />
                    <p>Hey, ABCD</p>
                </div>
                <div className='menu-sidebar'>
                    <button className='menu-item'>
                        <Icon icon="hugeicons:task-01" width="32" height="32"  style={{color:"#000"}}  />
                        <span>All Tasks</span>
                    </button>
                    <button className='menu-item'>
                        <Icon icon="uit:calender" width="32" height="32"  style={{color: "#000"}} />
                        <span>Today</span>
                    </button>
                    <button className='menu-item'>
                        <Icon icon="iconamoon:star-thin" width="32" height="32"  style={{color: "#000"}} />
                        <span>Important</span>
                    </button>
                    <button className='menu-item'>
                        <Icon icon="carbon:plan" width="32" height="32"  style={{color: "#000"}} />
                        <span>Planed</span>
                    </button>
                    <button className='menu-item'>
                        <Icon icon="iwwa:assign" width="32" height="32"  style={{color: "#000"}} />
                        <span>Assigned to me</span>
                    </button>
                </div>
                <div className='menu-addlist'>
                        <button>
                            <Icon icon="pixel:plus" width="32" height="32"  style={{color: "#000"}} />
                            Add list</button>
                    </div>
                
                <div className='stats'>
                    <div className='stats-content'>
                        <p>Today Task</p>
                        <p>11</p>
                        <Icon icon="mingcute:warning-fill" width="32" height="32"  style={{color: "#000"}} className="warning-icon" />
                    </div>
                    <hr />
                    <div className='progressbar-content'>
                        <div className='circular-content'>
                            <CircularProgressbar
                                value={percentage}
                                strokeWidth={20}
                                styles={
                                    buildStyles({
                                        rotation: 0.7,
                                        pathColor:"#3F9142",
                                        trailColor:"#142E15",
                                        strokeLinecap:"butt"
                                    })
                                }
                                className='circular-progress'
                            />
                        </div>
                        <div className="status-container">
                            <span className="status-item">
                                <span className="status-circle pendding-circle"></span>
                                Pending
                            </span>
                            <span className="status-item">
                                <span className="status-circle done-circle"></span>
                                Done
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MainProfile;