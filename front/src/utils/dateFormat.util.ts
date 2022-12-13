import moment from "moment";

export const dateFormat = (date?: string, subAmount?: number, subUnitTime?: moment.unitOfTime.DurationConstructor) => {
  if (subAmount && subUnitTime) {
    return `${moment().startOf("day").subtract(subAmount, subUnitTime)}`.substring(4).slice(0, -17) + "GMT-0300";
  }
  return `${moment(date).startOf("day")}`.substring(4).slice(0, -17) + "GMT-0300";
};
