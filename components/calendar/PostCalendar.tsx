import moment from 'moment';
import { useState } from 'react';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const PostCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
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
      />
    </div>
  );
};

export default PostCalendar;
