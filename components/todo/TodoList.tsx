import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import classes from './TodoList.module.css';

interface Props {
  done?: boolean;
  children: React.ReactNode;
}

const TodoList: React.FC<Props> = ({ done, children }) => {
  const Icon = done ? MdCheckBox : MdCheckBoxOutlineBlank;
  const className = done
    ? `${classes['todo-li']} ${classes.done}`
    : classes['todo-li'];

  return (
    <li className={className}>
      <Icon size={18} fill="#666" />
      {children}
    </li>
  );
};

export default TodoList;
