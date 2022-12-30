import moment from "moment";

export function convertDate(isoDate) {
  if (isoDate) {
    const formatedDate = moment.utc(isoDate).format("DD/MM/YYYY");
    return formatedDate;
  }
}
