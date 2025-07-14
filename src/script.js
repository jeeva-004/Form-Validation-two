function validateEmail(email) {
  return /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(email);
}

const form_ = document.querySelector('form');
const first_Name = form_.querySelector('#first-name');
const last_Name = form_.querySelector('#last-name');
const email_Id = form_.querySelector('#e-mail');
const check_One = form_.querySelector('#type-1');
const check_Two = form_.querySelector('#type-2');
const message = form_.querySelector('#message');
const check_box = form_.querySelector('#check-box');


form_.addEventListener('submit', (e) => {
  if (!validate_Form())
    e.preventDefault();
})

function validate_Form() {
  const first_Name_val = first_Name.value;
  const last_Name_val = last_Name.value;
  const email_Id_val = email_Id.value;
  const message_val = message.value;
  let result = true;

  if (first_Name_val.trim() === '') {
    setError_Name(first_Name, 'This field is required!');
    result = false;
  }
  else {
    setSuccess_Name(first_Name);
    result = true;
  }


  if (last_Name_val.trim() === '') {
    setError_Name(last_Name, 'This field is required!');
    result = false;
  }
  else {
    setSuccess_Name(last_Name);
    result = true;
  }

  if (email_Id_val.trim() === '') {
    setError(email_Id, 'This field is required!');
    result = false;
  }
  else if (!validateEmail(email_Id_val)) {
    setError(email_Id, 'Enter a valid mail!');
    result = false;
  }
  else {
    setSuccess(email_Id);
    result = true;
  }

  if (!check_One.checked) {
    setError(check_One, 'Please select a query type!');
    result = false;
  }
  else if (!check_Two.checked) {
    setError(check_Two, 'Please select a query type!');
    result = false;
  }
  else if (check_One.checked) {
    setSuccess(check_One);
    result = true;
  }
  else {
    setSuccess(check_Two);
    result = true;
  }


  if (message_val.trim()==='') {
    setError(message, `Can't be empty. Type some subject!`);
    result = false;
  }
  else {
    setSuccess(message);
    result = true;
  }

  if(!check_box.checked){
    setError(check_box, `To submit this form, Please consent to being contacted!`);
    result = false;
  }
  else{
    setSuccess(check_box);
    result = true;
  }

  return result;
}

function setError(element, msg) {
  let group = element.closest('.group');
  element.classList.add('error');
  let error = group.querySelector('.error-message');
  error.textContent = msg;
}

function setSuccess(element) {
  element.classList.remove('error');
  element.classList.add('success');
  const group = element.closest('.group');
  let error = group.querySelector('.error-message');
  error.textContent = '';
}

function setError_Name(element, msg) {

  if (element.closest('.first')) {
    let first = element.closest('.first');
    let error_one = first.querySelector('.error-message');
    error_one.textContent = msg;
  }
  else {
    let last = element.closest('.last');
    let error_two = last.querySelector('.error-message');
    error_two.textContent = msg;
  }
  element.classList.add('error');
}

function setSuccess_Name(element) {
  if (element.closest('.first')) {
    let first = element.closest('.first');
    let error_one = first.querySelector('.error-message');
    error_one.textContent = '';
  }
  else {
    let last = element.closest('.last');
    let error_two = last.querySelector('.error-message');
    error_two.textContent = '';
  }
  element.classList.remove('error');
  element.classList.add('success');
}