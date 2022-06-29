const form = document.getElementById('form');
const username = document.getElementById('name');
const descriptionBox = document.getElementById('description');
const assignedTo = document.getElementById('assignedTo');
const dueDate = document.getElementById('due date');
const errorElement = document.getElementById('error');
const validateStatus = document.getElementById('status');

// var today = new Date();
// var dd = String(today.getDate());
// var mm = String(today.getMonth() + 1);
// var yyyy = today.getFullYear();
// let dateString = dd + '/'+ mm + '/' + yyyy;
// console.log(dateString);

form.addEventListener('submit',function(e) { 

  let messages = [];

  if (username.value.length <= 8 || username.value === "" ) {
    messages.push('Name should be more then 8 characters')
  }

  if ( descriptionBox.value.length <= 15 || descriptionBox.value === "") {
    messages.push('Description should be more then 15 characters')
  }

  if (assignedTo.value.length <= 8 || assignedTo.value === "" ) {
    messages.push('Assigned to text should be more then 8 characters')
  }


  if ( dueDate === "" && dueDate < dateString){

    messages.push('Select correct date')

  }

  if (validateStatus.selectedIndex == 0) {
    messages.push('Please select an status option')
  }
  

  if (messages.length > 0 ) {
    e.preventDefault()
    errorElement.innerText = messages.join(';    ')
  }

});

//Displaying curret date on page
function currentDate () {
  const el = document.getElementById('date');
  const current= new Date();
  const day =  current.getDate();
  const month = current.getMonth()+1;
  const year = current.getFullYear();
  
  // returns the final date with backslash (/) separator
  const date = `${day}/${month}/${year}`;
  el.textContent = date;

}

currentDate();