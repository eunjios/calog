import { todoRepository } from '@/recoil/todo-list/selectors';
import { FormEventHandler, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import { Form, Input } from './NewTodo.style';
import ToggleVisibleButton from '../ui/ToggleVisibleButton';

const NewTodo = () => {
  const todoTextRef = useRef<HTMLInputElement>(null);
  const { add } = useRecoilValue(todoRepository);

  const submitHandler: FormEventHandler = (event) => {
    event.preventDefault();
    const text = todoTextRef.current?.value;
    if (text && text.trim().length > 0) {
      add(text);
      todoTextRef.current.value = '';
      // setIsVisibleInput(false);
    }
  };

  return (
    <ToggleVisibleButton>
      <Form onSubmit={submitHandler}>
        <MdCheckBoxOutlineBlank size={18} fill="#666" />
        <Input type="text" ref={todoTextRef} />
      </Form>
    </ToggleVisibleButton>
  );
};

export default NewTodo;
