export default function (dateTime, separetor = " ", short = false) {
  const d = new Date(dateTime);
  return `${d.getDate()}${separetor}${
    short ? month[d.getMonth()].slice(0, 3) : month[d.getMonth()]
  }${separetor}${d.getFullYear()}`;
}

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
