/*
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
labelDate.textContent = `${day}/${month}/${year}`;
*/
////////////////////////////////////////////////////////////
/*
//Due Date for checking date//
const dueD = document.getElementById("due date");

const dueDates = function (date, locale) {
  const calcDaysRemain = (date1, dueD) =>
    Math.round(Math.abs(dueD - date1) / (1000 * 60 * 60 * 24));

  const daysRemain = calcDaysRemain(new Date(), date);
  console.log(daysRemain);

  if (daysRemain === 0) return "Today";
  if (daysRemain === 1) return "Yesterday";
  if (daysRemain <= 0) return `${daysRemain} days ago`;

  return new Intl.DateTimeFormat(locale).format(date);
};
dueDate();
console.log(dueDate());

///////////////////////////////////////////////////////////
//Description//

function displayDescription() {
  let descriptionBox = document.getElementById("exampleFormControlTextarea1");

  let submitButton = document.getElementById("submitBTN");

  if (descriptionBox.value === "" || descriptionBox.value.length < 15) {
    alert(`Please write your description!`);
  } else {
    return true;
  }
}

let submitButton1 = document.getElementById("submitBTN");
submitButton1.addEventListener("click", displayDescription);

//////////////////////////////////////////////////////////////
//Name//

function validateName() {
  let formName = document.getElementById("name");
  let submit = document.getElementById("submitBTN");

  if (formName.value === "" || formName.length > 8) {
    alert(`Input invalid`);
  } else {
    return true;
  }
}

let submitButton2 = document.getElementById("submitBTN");
submitButton2.addEventListener("click", validateName);

////////////////////////////////////////////////////////////
//Assigned to//

function validateform() {
  let assignedTo = document.getElementById("assignedTo");

  if (assignedTo.value.length > 8 || assignedTo.value == "") {
    alert("Input is invalid");
  } else {
    return true;
  }
}
let submitButton3 = document.getElementById("submitBTN");
submitButton3.addEventListener("click", validateform);

///////////////////////////////////////////////////////////
//Due Date//

function dueDate() {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  let duedate = document.getElementById("due date");
  if (duedate === " " && duedate < today) {
    alert("Select correct Due date");
  } else {
    alert("Success");
  }
}
///////////////////////////////////////////////////////////
function validate() {
  //Global Variables//
  let formName = document.getElementById("name");
  let descriptionBox = document.getElementById("exampleFormControlTextarea1");
  let submitButton = document.getElementById("submitBTN");
  let assignedTo = document.getElementById("assignedTo");

  if (validateName) {
    displayDescription();
    if (displayDescription) {
      validateform();
      if (validateform) {
        dueDate();
      }
    }
  }
}

validate();
*/
////////////////////////////////////////////////////////////////////
