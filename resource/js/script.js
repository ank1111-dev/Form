const labelDate = document.getElementById("date");

let currentAccount;
const now = new Date();
const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "numeric",
  year: "numeric",
};

//labelDate.textContent = new Intl.DateTimeFormat(
//currentAccount.locale,
//options
//).format(now);

const day = `${now.getDate()}`.padStart(2, 0);
const month = `${now.getMonth() + 1}`.padStart(2, 0);
const year = now.getFullYear();
//const hour = `${now.getMinutes()}`.padStart(2, 0);
//const min = `${now.getDate()}`.padStart(2, 0);
labelDate.textContent = `Date: ${day}/${month}/${year}`;
