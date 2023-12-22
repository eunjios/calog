import selectedDate from '@/recoil/date/atom';
import { todoStats } from '@/recoil/todo-list/selectors';
import moment from 'moment';
import { useRecoilValue } from 'recoil';

function DateTitle() {
  const date = useRecoilValue(selectedDate);
  const { totalCount } = useRecoilValue(todoStats);
  const formattedDate = moment(date).format('YYYY년 MM월 D일');
  return (
    <div>
      <h2>{formattedDate}</h2>
      <p>오늘의 할 일 {totalCount} 개</p>
    </div>
  );
}

export default DateTitle;
