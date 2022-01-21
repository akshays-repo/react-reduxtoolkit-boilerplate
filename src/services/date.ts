import moment from 'moment';
import {
  SERVER_DATE_FORMAT,
  SYSTEM_DATE_FORMAT,
} from '../constants/dateFormat';

export const getSystemDate = (date: Date | string) => {
  try {
    const returnDate = moment(date).format(SYSTEM_DATE_FORMAT);

    if (returnDate === 'Invalid date') {
      return '';
    } else {
      return returnDate;
    }
  } catch (error) {
    return '';
  }
};

export const getServerDate = (date: Date | string) => {
  return moment(date).format(SERVER_DATE_FORMAT);
};
