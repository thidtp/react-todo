import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import {Checkbox ,FormControlLabel, IconButton} from '@mui/material';
const MainToDo = () => {
    // const [tasks, setTasks] = React.useState([
    //     { id: 1, name: "Buy groceries", completed: false, important: false },
    //     { id: 2, name: "Finish project report", completed: false, important: true },
    //     { id: 3, name: "Call the bank", completed: false, important: false },
    //     { id: 4, name: "Schedule dentist appointment", completed: false, important: false },
    //     { id: 5, name: "Plan weekend trip", completed: false, important: false },
    //     { id: 6, name: "Read a book", completed: true, important: false },
    //     { id: 7, name: "Clean the house", completed: true, important: false },
    //     { id: 8, name: "Prepare presentation", completed: true, important: true },
    //     { id: 9, name: "Update blog", completed: true, important: false },
    // ]);
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
                            <div className='task-icon'>
                                <Icon icon="clarity:notification-line" width="24" height="24"  style={{color: "#000"}} />
                                <Icon icon="ph:repeat-fill" width="24" height="24"  style={{color: "#000"}} />
                                <Icon icon="iconoir:calendar" width="24" height="24"  style={{color: "#000"}} />
                            </div>
                            <button>  ADD TASK </button>
                        </div>
                    </div>
                </div>
                <div className='todo-list'>
                    <div className='todo-list-content'>
                        <div className='todo-list-items'>
                            <div className='todo-list-item'>
                                <FormControlLabel control={
                                    <Checkbox 
                                        icon={<Icon icon="carbon:checkbox" width="24" height="24"  style={{color: "#000"}} />}
                                        checkedIcon={<Icon icon="ion:checkbox" width="24" height="24"  style={{color: "#000"}} />}
                                    />
                                } label="Buy groceries" />
                                
                                <IconButton>
                                    <Icon icon="ph:star-bold" width="24" height="24" style={{ color: "#000" }} />
                                    </IconButton>
                            </div>
                            <div className='todo-list-item'>
                                <FormControlLabel control={
                                    <Checkbox 
                                        icon={<Icon icon="carbon:checkbox" width="24" height="24"  style={{color: "#000"}} />}
                                        checkedIcon={<Icon icon="ion:checkbox" width="24" height="24"  style={{color: "#000"}} />}
                                    />
                                } label="Buy groceries" />
                                
                                <IconButton>
                                    <Icon icon="ph:star-bold" width="24" height="24" style={{ color: "#000" }} />
                                    </IconButton>
                            </div>
                            <div className='todo-list-item'>
                                <FormControlLabel control={
                                    <Checkbox 
                                        icon={<Icon icon="carbon:checkbox" width="24" height="24"  style={{color: "#000"}} />}
                                        checkedIcon={<Icon icon="ion:checkbox" width="24" height="24"  style={{color: "#000"}} />}
                                    />
                                } label="Buy groceries" />
                                
                                <IconButton>
                                    <Icon icon="ph:star-bold" width="24" height="24" style={{ color: "#000" }} />
                                    </IconButton>
                            </div>
                            <div className='todo-list-item'>
                                <FormControlLabel control={
                                    <Checkbox 
                                        icon={<Icon icon="carbon:checkbox" width="24" height="24"  style={{color: "#000"}} />}
                                        checkedIcon={<Icon icon="ion:checkbox" width="24" height="24"  style={{color: "#000"}} />}
                                    />
                                } label="Buy groceries" />
                                
                                <IconButton>
                                    <Icon icon="ph:star-bold" width="24" height="24" style={{ color: "#000" }} />
                                    </IconButton>
                            </div>
                        </div>
                        <h4>Completed</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainToDo;