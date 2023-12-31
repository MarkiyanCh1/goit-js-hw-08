const feedBackForm = document.querySelector('.feedback-form');
import throttle from 'lodash.throttle';

const formInput = () => {
  const { email, message } = feedBackForm.elements;
  const formValue = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formValue));
};

const getFromLocal = () => {
  const formLocalOutput = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (formLocalOutput === null) {
    return;
  }
  const { email, message } = feedBackForm.elements;
  email.value = formLocalOutput.email;
  message.value = formLocalOutput.message;
};

const onSubmit = event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  feedBackForm.reset();
  localStorage.removeItem('feedback-form-state');
};

feedBackForm.addEventListener('input', throttle(formInput, 500));
document.addEventListener('DOMContentLoaded', getFromLocal);
feedBackForm.addEventListener('submit', onSubmit);
