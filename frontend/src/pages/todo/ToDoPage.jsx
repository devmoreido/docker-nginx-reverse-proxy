import PageTitle from '../../components/PageTitle';
import NewTaskForm from '../../components/NewTaskForm';
import MainSection from '../../components/MainSection';
import HeaderSection from '../../components/HeaderSection';
import ClearAllTasks from '../../components/ClearAllTasks'

function ToDoPage() {
    return <MainSection>
        <HeaderSection>
            <PageTitle>📖 My daily tasks</PageTitle>
            <ClearAllTasks />
        </HeaderSection>
        <NewTaskForm />
    </MainSection>;
}

export default ToDoPage;