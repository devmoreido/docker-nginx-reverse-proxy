import { XCircle } from "react-bootstrap-icons";
import Button from "./Button";

function ClearAllTasks({ visibleWhen, onClear }) {
    if(!visibleWhen) return;

    return <Button onClick={onClear}>
        <XCircle size={16} />
        <span>Clear all tasks</span>
    </Button>;
}

export default ClearAllTasks;