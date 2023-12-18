import { useState } from 'react';
import moment from 'moment';
import Calendar, { OnClickFunc } from 'react-calendar';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import selectedDate from '../../recoil/date/atom';
import { Dot, Empty } from './TileContent';
import todoState from '@/recoil/todo-list/atom';
import { dateToString } from '@/utils';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const PostCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  const setDate = useSetRecoilState(selectedDate);
  const todoList = useRecoilValue(todoState);

  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const clickDayHandler: OnClickFunc = (value) => {
    const dateString = dateToString(value);
    setDate(dateString);
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
        formatShortWeekday={(locale, date) => weekDays[date.getDay()]}
        tileContent={({ date }) => {
          const html = [];
          const dateString = dateToString(date);

          if (todoList.find((x) => x.date === dateString)) {
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
