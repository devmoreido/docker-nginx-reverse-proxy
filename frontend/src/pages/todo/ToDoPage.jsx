import PageTitle from '../../components/PageTitle';
import NewTaskForm from '../../components/NewTaskForm';
import MainSection from '../../components/MainSection';

function ToDoPage() {
    return <MainSection>
        <PageTitle>📖 My daily tasks</PageTitle>
        <NewTaskForm />
    </MainSection>;
}

export default ToDoPage;