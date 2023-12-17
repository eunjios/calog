import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import classes from './TodoItem.module.css';
import { useRecoilValue } from 'recoil';
import { todoRepository } from '@/recoil/todo-list/selectors';

interface Props {
  id: number;
  done?: boolean;
  children: React.ReactNode;
}

const TodoItem: React.FC<Props> = ({ id, done, children }: Props) => {
  const { toggle } = useRecoilValue(todoRepository);
  const Icon = done ? MdCheckBox : MdCheckBoxOutlineBlank;
  const className = done
    ? `${classes['todo-li']} ${classes.done}`
    : classes['todo-li'];

  return (
    <li className={className} onClick={() => toggle(id)}>
      <Icon size={18} fill="#666" />
      {children}
    </li>
  );
};

export default TodoItem;
