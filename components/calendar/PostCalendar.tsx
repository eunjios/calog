import { useState } from 'react';
import moment from 'moment';
import Calendar, { OnClickFunc } from 'react-calendar';
import { useSetRecoilState } from 'recoil';
import selectedDate from '../../recoil/date/atom';
// import { dateToString } from '../../utils';
import todoListState from '@/recoil/todo-list/atom';
import { DUMMY_TODO_LIST } from '@/utils/data';
import { Dot, Empty } from './TileContent';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const PostCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  const setDate = useSetRecoilState(selectedDate);
  const setTodoList = useSetRecoilState(todoListState);

  const clickDayHandler: OnClickFunc = (value) => {
    const dateString = moment(value).format('YYYYMMDD');
    setDate(dateString);
    const todoObj = DUMMY_TODO_LIST.find(
      (todoList) => todoList.date === dateString
    );
    setTodoList(todoObj?.todoList ?? []);
  };

  return (
    <div>
      <Calendar
        locale="en-KO"
        onChange={onChange}
        onClickDay={clickDayHandler}
        value={value}
        showNeighboringMonth={false}
        maxDetail="month"
        minDetail="month"
        prevLabel="〈"
        nextLabel="〉"
        formatDay={(locale, date) => moment(date).format('D')}
        formatMonthYear={(locale, date) => moment(date).format('MMMM YYYY')}
        formatShortWeekday={(locale, date) =>
          [`S`, `M`, `T`, `W`, `T`, `F`, `S`][date.getDay()]
        }
        tileContent={({ date }) => {
          const html = [];
          const dateString = moment(date).format('YYYYMMDD');

          if (DUMMY_TODO_LIST.find((x) => x.date === dateString)) {
            html.push(<Dot key={dateString} />);
          } else {
            html.push(<Empty key={dateString} />);
          }
          return (
            <div className="flex justify-center items-center absoluteDiv">
              {html}
            </div>
          );
        }}
      />
    </div>
  );
};

export default PostCalendar;
