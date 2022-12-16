import moment from "moment";

export const dateFormat = ({ date, subAmount, subUnitTime }: { date?: string; subAmount?: number; subUnitTime?: moment.unitOfTime.DurationConstructor }) => {
  if (date) {
    const dateIsValid = moment(date).isValid();

    if (!dateIsValid) {
      throw new Error("Invalid date format");
    }

    if (subAmount && subUnitTime) {
      const getDate = moment(date).subtract(subAmount, subUnitTime).toString();

      return getDate.substring(4).slice(0, 12).concat("GMT-0300");
    }

    const getDate = moment(date).startOf("day").toString();

    return getDate.substring(4).slice(0, 12).concat("GMT-0300");
  }

  if (subAmount && subUnitTime) {
    const getDate = moment().subtract(subAmount, subUnitTime).toString();

    return getDate.substring(4).slice(0, 12).concat("GMT-0300");
  }

  const getDate = moment().toString();

  return getDate.substring(4).slice(0, 12).concat("GMT-0300");
};
