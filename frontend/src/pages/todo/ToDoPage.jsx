import PageTitle from '../../components/PageTitle';
import NewTaskForm from '../../components/NewTaskForm';
import MainSection from '../../components/MainSection';
import HeaderSection from '../../components/HeaderSection';
import ClearAllTasks from '../../components/ClearAllTasks'
import { useEffect, useState } from 'react';

function ToDoPage() {
    const [tasks, setTasks] = useState([]);
    const [hasTasks, setHasTasks] = useState(false);

    useEffect(() => setHasTasks(!!tasks.length), [tasks]);

    const createTask = description => ({
        id: tasks.length + 1,
        isDone: false,
        description
    });

    const addNewTask = description => {
        const newTask = createTask(description);
        setTasks([...tasks, newTask]);
    }

    const clearAllTasks = () => {
        if(window.confirm('Are you sure you want to remove all tasks?')) {
            setTasks([]);
        }
    }
    
    return <MainSection>
        <HeaderSection>
            <PageTitle>📖 My daily tasks</PageTitle>
            <ClearAllTasks visibleWhen={hasTasks} onClear={clearAllTasks} />
        </HeaderSection>
        <NewTaskForm onConfirm={addNewTask} />
    </MainSection>;
}

export default ToDoPage;