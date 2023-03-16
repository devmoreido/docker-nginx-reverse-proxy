import TaskListItem from '../TaskListItem';
import EmptyMessage from './EmptyMessage';
import UnorderedList from './UnorderedList';

function TaskList({tasks, onResolveTask, onRemoveTask, onEditTask}) {
    const hasItems = !!tasks.length;

    return <UnorderedList>
        {hasItems ? tasks.map(task => {
            const onResolve = () => onResolveTask(task.id);
            const onRemove = () => onRemoveTask(task.id);
            return <TaskListItem
                key={task.id}
                id={task.id}
                isDone={task.isDone}
                onResolve={onResolve}
                onRemove={onRemove}
                onEdit={onEditTask}
                description={task.description} />
        }) : <EmptyMessage />}
    </UnorderedList>
};

export default TaskList;