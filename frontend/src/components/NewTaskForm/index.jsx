import { useEffect, useRef, useState } from 'react';
import Form from './Form';
import Icon from './Icon';
import Input from './Input';

function NewTaskForm({ onConfirm }) {
  const [inputValue, setInputValue] = useState('');
  const input = useRef();

  const resetInput = () => {
    setInputValue('');
    input.current.focus();
  };

  const onChangeInput = event => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  const onSubmitForm = submitEvent => {
    submitEvent.preventDefault();
    onConfirm(inputValue);
    resetInput();
  };

  useEffect(resetInput, []);

  return <Form onSubmit={onSubmitForm}>
    <Icon size={24} />
    <Input ref={input}
      type="text"
      value={inputValue}
      onChange={onChangeInput}
      placeholder="Add new task" />
  </Form>
};

export default NewTaskForm;