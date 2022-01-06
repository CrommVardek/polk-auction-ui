import { useMemo } from 'react';
import { LeasePeriod } from '../polk-auction-api/models/Lease';

export const useMaxEndDateLeasePeriod = (leasePeriods: LeasePeriod[] | undefined) =>
  useMemo(() => {
    if (leasePeriods !== undefined && leasePeriods.length > 0) {
      const timeStamp = leasePeriods.reduce(
        (prev, curr) => (prev.endTimeStamp! > curr.endTimeStamp! ? prev : curr),
        {} as LeasePeriod,
      )?.endTimeStamp;
      return new Date(timeStamp! as number).toUTCString();
    }
    return '';
  }, [leasePeriods]);

export const useMinStartDateLeasePeriod = (leasePeriods: LeasePeriod[] | undefined) =>
  useMemo(() => {
    if (leasePeriods !== undefined && leasePeriods.length > 0) {
      const timeStamp = leasePeriods.reduce(
        (prev, curr) => (prev.startTimeStamp! < curr.startTimeStamp! ? prev : curr),
        {} as LeasePeriod,
      )?.startTimeStamp;
      return new Date(timeStamp! as number).toUTCString();
    }
    return '';
  }, [leasePeriods]);
