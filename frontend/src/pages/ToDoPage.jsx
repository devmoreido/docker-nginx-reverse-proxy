import { useEffect, useState } from 'react';
import PageTitle from '../components/PageTitle';
import NewTaskForm from '../components/NewTaskForm';
import MainSection from '../components/MainSection';
import HeaderSection from '../components/HeaderSection';
import ClearAllTasks from '../components/ClearAllTasks'
import TaskList from '../components/TaskList';
import apiClient from '../api/api-client';

function ToDoPage() {
    const [tasks, setTasks] = useState([]);
    const [hasTasks, setHasTasks] = useState(false);

    useEffect(() => setHasTasks(!!tasks.length), [tasks]);

    const addTask = async description => {
        const requestData = { description, isDone: false };
        const response = await apiClient.sendPost('/', requestData);
        response.success && setTasks([...tasks, response.task]);
    }

    const editTask = async (id, newDescription) => {
        const setDescriptionWithId = task => task.id !== id
            ? task : { ...task, description: newDescription };

        const requestData = { description: newDescription };
        const response = await apiClient.sendPatch(`/${id}`, requestData)
        response.success && setTasks(tasks.map(setDescriptionWithId));
    };

    const resolveTask = async id => {
        const getTaskWithId = task => task.id === id;
        const setAsDoneWithId = task => task.id !== id
            ? task : { ...task, isDone: !task.isDone };

        const taskToResolve = tasks.find(getTaskWithId);
        const requestData = { isDone: !taskToResolve.isDone };
        const response = await apiClient.sendPatch('/' + id, requestData);
        response.success && setTasks(tasks.map(setAsDoneWithId));
    }

    const removeTask = async id => {
        const getTaskWithId = task => task.id === id;
        const getTaskWithoutId = task => task.id !== id;

        const taskToRemove = tasks.find(getTaskWithId);
        const confirmMessage = 'Are you sure you want to remove'
            + `the "${taskToRemove.description}" task?`;

        if (!window.confirm(confirmMessage)) return;

        const response = await apiClient.sendDelete('/' + taskToRemove.id);
        response.success && setTasks(tasks.filter(getTaskWithoutId));
    }

    const clearAllTasks = async () => {
        const confirmMessage = 'Are you sure you want'
            + 'to remove all tasks?';

        if (!window.confirm(confirmMessage)) return;

        const response = await apiClient.sendDelete('/');
        response.success && setTasks([]);
    }

    useEffect(() => {(async () => {
        const response = await apiClient.sendGet('/');
        response.success && setTasks(response.tasks);
    })()}, []);

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