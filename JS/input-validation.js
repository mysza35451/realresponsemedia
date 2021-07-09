let requiredInputs = document.querySelectorAll(".required");
let phone = document.querySelector("#telephone");
let emailAddress = document.querySelector("#email");
let postcode = document.querySelector("#postcode");

phone.addEventListener("blur", (event) => {
  let element = document.getElementById(phone.id);
  phoneNumber(event.target.value, element);
});
emailAddress.addEventListener("blur", (event) => {
  let element = document.getElementById(emailAddress.id);
  email(event.target.value, element);
});

postcode.addEventListener("blur", (event) => {
  let element = document.getElementById(postcode.id);
  postcodeValidation(event.target.value, element);
});

for (let x = 0; x < requiredInputs.length; x++) {
  console.log(requiredInputs[x].id);
  requiredInputs[x].addEventListener("blur", (event) => {
    console.log(wrongNoInputCounter);
    let element = document.getElementById(requiredInputs[x].id);
    checkIfNull(event.target.value, element);
    displayNullInputWarning();
  });
}
//warning messages
let wrongNoInputCounter = 0;
let warningMessageNoInput = document.getElementById("empty-input");
let warningMessageWrongPhone = document.getElementById("wrong-phone-input");
let warningMessageWrongEmail = document.getElementById("wrong-email-input");
let warningMessageWrongPostCode = document.getElementById(
  "wrong-postcode-input"
);

function checkIfNull(value, element) {
  if (value == "") {
    element.classList.add("wrong-input-null");
  } else {
    try {
      element.classList.remove("wrong-input-null");
    } catch (error) {}
  }
}
function checkOption(value, element) {
  if (value == "Select...") {
    element.classList.add("wrong-input");
  } else {
    try {
      element.classList.remove("wrong-input");
    } catch (error) {}
  }
}

function phoneNumber(value, element) {
  let regex = /^((\+44\s?|0)7([45789]\d{2}|624)\s?\d{3}\s?\d{3})$/;

  if (!value.match(regex)) {
    element.classList.add("wrong-input");
    warningMessageWrongPhone.classList.remove("hidden");
  } else {
    element.classList.remove("wrong-input");
    warningMessageWrongPhone.classList.add("hidden");
  }
}

function email(value, element) {
  let regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!value.match(regex)) {
    element.classList.add("wrong-input");
    warningMessageWrongEmail.classList.remove("hidden");
  } else {
    element.classList.remove("wrong-input");
    warningMessageWrongEmail.classList.add("hidden");
  }
}

function postcodeValidation(value, element) {
  let regex =
    /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/;

  if (!value.match(regex)) {
    element.classList.add("wrong-input");
    warningMessageWrongPostCode.classList.remove("hidden");
  } else {
    element.classList.remove("wrong-input");
    warningMessageWrongPostCode.classList.add("hidden");
  }
}

function displayNullInputWarning() {
  let warningNull = document.getElementsByClassName("wrong-input-null");
  console.log(warningNull.length);
  if (warningNull.length == 0) {
    warningMessageNoInput.classList.add("hidden");
  } else {
    warningMessageNoInput.classList.remove("hidden");
  }
}
