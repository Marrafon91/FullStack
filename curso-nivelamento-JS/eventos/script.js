const inputName = document.forms.cadastro.name;

inputName.addEventListener('keyup', handleInputNameKeyUp)

const inputEmail = document.forms.cadastro.email;

inputEmail.addEventListener('change', handleInputEmailChange);

const btnSubmit = document.querySelector('[type="submit"]');

btnSubmit.addEventListener('click', handleBtnSubmitClick);

function handleBtnSubmitClick(e) {
    e.preventDefault();
    console.log(`NOME: ${inputName.value},\nEMAIL: ${inputEmail.value}`)
}


function handleInputNameKeyUp(event) {
    console.log(event.target.value);
}

function handleInputEmailChange(e) {
    if (validateEmail(e.target.value)) {
        e.target.classList.add("input-ok");
    }
    else {
        e.target.classList.add("input-error");
    }
}

// https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
