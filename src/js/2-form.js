import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

form.addEventListener('input', throttle(oninput, 500));
form.addEventListener('submit', onSubmit);

function oninput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmit(e) {
  e.preventDefault();

  const { email, message } = form.elements;

  if (email.value === '' || message.value === '') {
    alert('Please fill out both fields.');
    return;
  }

  console.log('Form data submitted:', formData);
  // --------- Типу на бек - енд. )))

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: '', message: '' };
}

function autoFormFields() {
  const saveData = localStorage.getItem(STORAGE_KEY);

  if (saveData) {
    formData = JSON.parse(saveData);
    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || '';
  }
}

autoFormFields();
