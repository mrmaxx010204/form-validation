console.log("Welcome to the Form_Validation");

let user = document.getElementById("name");
let email = document.getElementById("email");
let number = document.getElementById("number");

let validUser = false;
let validEmail = false;
let validNumber = false;

// Validate user name here
user.addEventListener("blur", () => {
  let regex = /^[a-zA-Z]([0-9a-zA-Z]{2,10}$)/;
  let str = user.value;
  if (regex.test(str)) {
    user.classList.remove("is-invalid");
    validUser = true;
  } else {
    user.classList.add("is-invalid");
    validUser = false;
  }
});

// Validate email id here
email.addEventListener("blur", () => {
  let regex = /^([_\.\- 0-9a-zA-Z]+)@([_\.\- 0-9a-zA-Z]+)\.([a-zA-Z]){1,6}$/;
  let str = email.value;
  if (regex.test(str)) {
    email.classList.remove("is-invalid");
    validEmail = true;
  } else {
    email.classList.add("is-invalid");
    validEmail = false;
  }
});

// Validate phone number here
number.addEventListener("blur", () => {
  let regex = /^[6-9][0-9]{9}/;
  let str = number.value;
  if (regex.test(str)) {
    number.classList.remove("is-invalid");
    validNumber = true;
  } else {
    number.classList.add("is-invalid");
    validNumber = false;
  }
});

//Now the submit part
// let submit = document.getElementById('submit');
// submit.addEventListener("click", (e)=>{

//     e.preventDefault();

//     if(validUser && validEmail && validNumber){

//         if(validEmail && validUser && validPhone){
//             let failure = document.getElementById('failure');

//             console.log('Phone, email and user are valid. Submitting the form');
//             let success = document.getElementById('success');
//             success.classList.add('show');
//             // failure.classList.remove('show');
//             // $('#failure').alert('close');
//             $('#failure').hide();
//             $('#success').show();
//     }
//     else{
//         console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
//         let failure = document.getElementById('failure');
//         failure.classList.add('show');
//         // success.classList.remove('show');
//         // $('#success').alert('hide');
//         $('#success').hide();
//         $('#failure').show();
//     }
// });
let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();

  console.log("You clicked on submit");
  console.log(validEmail, validUser, validPhone);

  // Submit your form here
  if (validEmail && validUser && validPhone) {
    let failure = document.getElementById("failure");

    console.log("Phone, email and user are valid. Submitting the form");
    let success = document.getElementById("success");
    success.classList.add("show");
    // failure.classList.remove('show');
    // $('#failure').alert('close');
    $("#failure").hide();
    $("#success").show();
  } else {
    console.log(
      "One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again"
    );
    let failure = document.getElementById("failure");
    failure.classList.add("show");
    // success.classList.remove('show');
    // $('#success').alert('hide');
    $("#success").hide();
    $("#failure").show();
  }
});
