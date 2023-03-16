import { useRef, useState } from 'react';
import Item from './Item';
import DoneIcon from './DoneIcon';
import PendingIcon from './PendingIcon';
import DescriptionInput from './DescriptionInput';
import DescriptionText from './DescriptionText';
import EditIcon from './EditIcon';
import RemoveIcon from './RemoveIcon';

function TaskListItem({id, isDone, description, onRemove, onResolve, onEdit}) {
    const [inputValue, setInputValue] = useState(description);
    const inputReference = useRef();
    const iconSize = 18;

    const callRemoveCallback = clickEvent => {
        clickEvent.stopPropagation();
        onRemove();
    }

    const setFocusOnDescriptionInput = () => {
        inputReference.current.focus();
    }

    const updateDescriptionValue = inputEvent => {
        const newDescription = inputEvent.target.value;
        setInputValue(newDescription);
    }

    const confirmWhenPressEnter = keyDownEvent => {
        const isEnter = keyDownEvent.key === "Enter";
        isEnter && inputReference.current.blur();
    }

    const callUpdateCallback = () => {
        onEdit(id, inputValue);
    }

    return <Item>
        {isDone
            ? <DoneIcon onClick={onResolve} size={iconSize} />
            : <PendingIcon onClick={onResolve} size={iconSize} /> }

        {isDone
            ? <DescriptionText>{description}</DescriptionText>
            : <DescriptionInput type="text"
                ref={inputReference}
                value={inputValue}
                isDone={isDone}
                onBlur={callUpdateCallback}
                onInput={updateDescriptionValue}
                onKeyDown={confirmWhenPressEnter} /> }

        {!isDone && <EditIcon size={iconSize}
            onClick={setFocusOnDescriptionInput} />}

        <RemoveIcon size={iconSize}
            onClick={callRemoveCallback} />
    </Item>;
}

export default TaskListItem;