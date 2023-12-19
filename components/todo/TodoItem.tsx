import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import classes from './TodoItem.module.css';
import { useRecoilValue } from 'recoil';
import { todoRepo } from '@/recoil/todo-list/selectors';

interface Props {
  id: number;
  done?: boolean;
  children: React.ReactNode;
}

function TodoItem({ id, done, children }: Props) {
  const { toggle } = useRecoilValue(todoRepo);
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
}

export default TodoItem;
