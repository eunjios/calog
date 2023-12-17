import moment from 'moment';
import { atom } from 'recoil';

type SelectedDate = string;

const selectedDate = atom<SelectedDate>({
  key: 'selectedDate',
  default: moment(Date.now()).format('YYYYMMDD'),
});

export default selectedDate;
