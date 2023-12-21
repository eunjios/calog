import { todoRepo } from '@/recoil/todo-list/selectors';
import { FormEventHandler, useCallback, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import { Form, Input } from './NewTodo.style';
import Toggle from '../ui/toggle/Toggle';

interface Props {
  hasPlaceholder?: boolean;
}

function NewTodo({ hasPlaceholder = false }: Props) {
  const todoTextRef = useRef<HTMLInputElement>(null);
  const { add } = useRecoilValue(todoRepo);

  const submitHandler: FormEventHandler = (event) => {
    event.preventDefault();
    const text = todoTextRef.current?.value;
    if (text && text.trim().length > 0) {
      add(text);
      todoTextRef.current.value = '';
    }
  };

  const focusInput = useCallback(() => {
    todoTextRef.current?.focus();
  }, []);

  return (
    <Toggle hasPlaceholder={hasPlaceholder} callbackFn={focusInput}>
      <Form onSubmit={submitHandler}>
        <MdCheckBoxOutlineBlank size={18} fill="#666" />
        <Input type="text" ref={todoTextRef} />
      </Form>
    </Toggle>
  );
}

export default NewTodo;
