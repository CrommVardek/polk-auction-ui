import { LeasePeriod } from '../polk-auction-api/models/Lease';
import moment from 'moment';

export const timeStampToDateFormattedString = (timeStamp: number) => {
  return moment(new Date(timeStamp)).utc().format('DD-MM-YYYY h:mm:ss a');
};

export const getMaxEndDateLeasePeriod = (leasePeriods: LeasePeriod[] | undefined) => {
  if (leasePeriods !== undefined && leasePeriods.length > 0) {
    const timeStamp = leasePeriods.reduce(
      (prev, curr) => (prev !== undefined && prev.endTimeStamp! > curr.endTimeStamp! ? prev : curr),
      {} as LeasePeriod,
    )?.endTimeStamp;
    return timeStampToDateFormattedString(timeStamp! as number);
  }
  return '';
};

export const getMinStartDateLeasePeriod = (leasePeriods: LeasePeriod[] | undefined) => {
  if (leasePeriods !== undefined && leasePeriods.length > 0) {
    const timeStamp = leasePeriods.reduce(
      (prev, curr) => (prev.startTimeStamp! < curr.startTimeStamp! ? prev : curr),
      {} as LeasePeriod,
    )?.startTimeStamp;
    return timeStampToDateFormattedString(timeStamp! as number);
  }
  return '';
};
