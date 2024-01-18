import { useState } from 'react';
import moment from 'moment';
import Calendar, { OnClickFunc } from 'react-calendar';
import { useRecoilState, useRecoilValue } from 'recoil';
import todoState from '@/recoil/todo-list/atom';
import postState from '@/recoil/posts/atom';
import selectedDate from '@/recoil/date/atom';
import Dot from './TileContent';
import { dateToString } from '@/utils';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const PostCalendar = () => {
  const [date, setDate] = useRecoilState(selectedDate);
  const todoList = useRecoilValue(todoState);
  const postList = useRecoilValue(postState);
  const [value, onChange] = useState<Value>(moment(date, 'YYYYMMDD').toDate());

  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const hasTodo = (date: string) => {
    return todoList.some((x) => x.date === date);
  };

  const hasPost = (date: string) => {
    return postList.some((x) => x.date === date);
  };

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
          const dateString = dateToString(date);
          const html = [];
          html.push(
            <Dot
              key={dateString}
              hasTodo={hasTodo(dateString)}
              hasPost={hasPost(dateString)}
            />
          );
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
