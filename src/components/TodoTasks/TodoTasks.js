import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';

import TodoFilter from './TodoFilter/TodoFilter';
import TodoTask from './TodoTask/TodoTask';

import classes from './TodoTasks.module.css';

const TodoTasks = ({
        setFilterBy, 
        taskList, 
        taskListDoneHandler, 
        taskListDeleteHandler,
        turnOnModalHandler}) => {

    const animations = {
        initial: {opacity: 0},
        animate: {opacity: 1},
        exit: {opacity: 0},
        transition: {duration: .500, transition: 'ease-in-out'}
    }
    
    return (
        <div className={classes.TodoTasks}>
            <TodoFilter setFilterBy={setFilterBy}/>
                { taskList.map((task)=>{
                return (
                    <AnimatePresence>
                        <motion.div {...animations} layout>
                            <TodoTask
                                turnOnModalHandler={turnOnModalHandler}
                                taskListDoneHandler={taskListDoneHandler}
                                taskListDeleteHandler={taskListDeleteHandler}
                                key={task.id} 
                                id={task.id} 
                                status={task.status} 
                                taskDescription={task.description}
                                addedDate={task.addedDate}
                                finishedDate={task.finishedDate}/>
                        </motion.div>
                    </AnimatePresence>
                )})
                }
        </div>
    )
}

export default TodoTasks;
