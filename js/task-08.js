// QUERYSELECTOR

const formEl = document.querySelector(".login-form");

// LISTENER

formEl.addEventListener('submit', handleSubmit);

// HANDLE SUBMIT FUNCTION

function handleSubmit(event) {
  event.preventDefault();
  
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value.trim() === "" || password.value.trim() === "") {
    return alert("Please fill in all the fields!");
  }

  const submitResultObj = {
    [email.name]: email.value,
    [password.name]: password.value.trim(),
  }

  console.log(submitResultObj);
  event.currentTarget.reset();
}
