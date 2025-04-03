import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
const MainToDo = () => {
    return (
        <div className='container'>
            <div className='todo-content'>
                <div className='todo-title'>
                    <p>To Do</p>
                    <Icon icon="bxs:down-arrow" width="24" height="24"  style={{color: "#142E159E"}} />
                </div>
                <hr />
                <div className='task-container'>
                    <div className='task-content'>
                        <p>Add A Task</p>
                        <div className='task-icons'>
                            <Icon icon="clarity:notification-line" width="24" height="24"  style={{color: "#000"}} />
                            <Icon icon="ph:repeat-fill" width="24" height="24"  style={{color: "#000"}} />
                            <Icon icon="iconoir:calendar" width="24" height="24"  style={{color: "#000"}} />
                        </div>
                    </div>
                    <button>  ADD TASK </button>
                </div>
            </div>
        </div>
    )
}

export default MainToDo;