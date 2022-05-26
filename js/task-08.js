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

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  const submitResultObj = {
    [email.name]: email.value,
    [password.name]: password.value,
  }

  console.log(submitResultObj);
  event.currentTarget.reset();
}
