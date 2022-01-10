import { LeasePeriod } from '../polk-auction-api/models/Lease';
import moment from 'moment';

export const getMaxEndDateLeasePeriod = (leasePeriods: LeasePeriod[] | undefined) => {
  console.log(leasePeriods);
  if (leasePeriods !== undefined && leasePeriods.length > 0) {
    const timeStamp = leasePeriods.reduce(
      (prev, curr) => (prev !== undefined && prev.endTimeStamp! > curr.endTimeStamp! ? prev : curr),
      {} as LeasePeriod,
    )?.endTimeStamp;
    console.log(timeStamp);
    return moment(new Date(timeStamp! as number))
      .utc()
      .format('DD-MM-YYYY h:mm:ss a');
  }
  return '';
};

export const getMinStartDateLeasePeriod = (leasePeriods: LeasePeriod[] | undefined) => {
  if (leasePeriods !== undefined && leasePeriods.length > 0) {
    const timeStamp = leasePeriods.reduce(
      (prev, curr) => (prev.startTimeStamp! < curr.startTimeStamp! ? prev : curr),
      {} as LeasePeriod,
    )?.startTimeStamp;
    return moment(new Date(timeStamp! as number))
      .utc()
      .format('DD-MM-YYYY h:mm:ss a');
  }
  return '';
};
