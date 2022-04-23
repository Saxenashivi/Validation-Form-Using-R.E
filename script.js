// Grabbing
let name1 = document.getElementById('name1');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let validName = false;
let validPhone = false;
let validEmail = false;
let success = document.getElementById('success');
let failure = document.getElementById('failure');


// $('#failure').hide();
// $('#success').hide();
//For Name validation
name1.addEventListener('blur', () => {
    console.log("It got blurred");
    let regex = /^[A-Za-z]([A-Za-z0-9]){2,10}$/;
    str = name1.value;
    if (regex.test(str)) {
        console.log("value got matched");
        name1.classList.remove('is-invalid');
        validName = true;
    }
    else {
        console.log("Value did not get match");
        name1.classList.add('is-invalid');
        validName = false;
    }
});

//For Phone Validation
phone.addEventListener('blur', () => {
    console.log("phone is blurred");
    // Validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;

    }
});
//For Email Validation
email.addEventListener('blur', () => {
    console.log("Email is blurred");
    // Validate email here
    // /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
    let regex = /^([_\-\.0-9A-Za-z]+)@([A-Za-z]+)\.([A-Za-z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;

    }
});
//For submit Validation
let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();

    console.log('You clicked on submit');
    console.log(validEmail, validName, validPhone);

    // Submit your form here
    if (validEmail && validName && validPhone) {
        let failure = document.getElementById('failure');

        console.log('Phone, email and user are valid. Submitting the form');
        let success = document.getElementById('success');
        // success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();

    }
    else {
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();
    }

    // /Working for Local storage
    
    let value1 = localStorage.getItem('value1');
    if (value1 == null) {
        formObj = [];

    }
    else {
        formObj = JSON.parse(value1);
    }
    let myObj = {
        v1: name1.value,
        v2: email.value,
        v3: car.value,
        v4: phone.value,
        v5: exampleFormControlTextarea1.value
    }
    formObj.push(myObj);
    console.log(formObj);
    localStorage.setItem("value1", JSON.stringify(formObj));
    name1.value = "";
    email.value = "";
    car.value = "";
    phone.value = "";
    exampleFormControlTextarea1.value = "";

});

