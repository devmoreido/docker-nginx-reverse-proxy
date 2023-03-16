import { useEffect, useState } from 'react';
import PageTitle from '../components/PageTitle';
import NewTaskForm from '../components/NewTaskForm';
import MainSection from '../components/MainSection';
import HeaderSection from '../components/HeaderSection';
import ClearAllTasks from '../components/ClearAllTasks'
import TaskList from '../components/TaskList';

function ToDoPage() {
    const [tasks, setTasks] = useState([]);
    const [hasTasks, setHasTasks] = useState(false);

    useEffect(() => setHasTasks(!!tasks.length), [tasks]);

    const createTask = description => ({
        id: tasks.length + 1,
        isDone: false,
        description
    });

    const addTask = description => {
        const newTask = createTask(description);
        setTasks([...tasks, newTask]);
    }

    const editTask = (id, newDescription) => {
        const setDescriptionWithId = task => task.id !== id
            ? task : { ...task, description: newDescription };

        setTasks(tasks.map(setDescriptionWithId));
    };

    const resolveTask = id => {
        const setAsDoneWithId = task => task.id !== id
            ? task : { ...task, isDone: !task.isDone };

        setTasks(tasks.map(setAsDoneWithId));
    }

    const removeTask = id => {
        const getTaskWithId = task => task.id === id;
        const taskToRemove = tasks.find(getTaskWithId);
        const confirmMessage = 'Are you sure you want to remove'
            + `the "${taskToRemove.description}" task?`;

        if(!window.confirm(confirmMessage)) return;
        
        const getTaskWithoutId = task => task.id !== id;
        setTasks(tasks.filter(getTaskWithoutId));
    }

    const clearAllTasks = () => {
        const confirmMessage = 'Are you sure you want'
            + 'to remove all tasks?';

        if(!window.confirm(confirmMessage)) return;

        setTasks([]);
    }
    
    return <MainSection>
        <HeaderSection>
            <PageTitle>📖 My daily tasks</PageTitle>
            <ClearAllTasks visibleWhen={hasTasks}
                onClear={clearAllTasks} />
        </HeaderSection>
        <NewTaskForm onConfirm={addTask} />
        <TaskList tasks={tasks}
            onResolveTask={resolveTask}
            onRemoveTask={removeTask}
            onEditTask={editTask} />
    </MainSection>;
}

export default ToDoPage;