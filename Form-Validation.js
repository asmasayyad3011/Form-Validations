function printError(elemId, hintMsg)
{
  document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm()
{
  event.preventDefault();
  let fname = document.contactForm.fname.value;
  let gender = document.contactForm.gender.value;
  let hobbies = [];
  let checkboxes = document.getElementsByName("hobbies[]");
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      hobbies.push(checkboxes[i].value);
    }
  }
  let lname = document.contactForm.lname.value;
  let email = document.contactForm.email.value;
  let phone = document.contactForm.phone.value;
  let qualification = document.contactForm.qualification.value;
  let Comments = document.contactForm.Comments.value;

  // Defining error variables with a default value
  var nameErr = lastnameErr = emailErr = phoneErr = qualErr = commentsErr = mobileErr = countryErr = genderErr = true;

  // Validate first name
  if (fname == "") {
    printError("nameErr", "Please enter your first name");
  } else {
    let regex = /^[a-zA-Z\s]+$/;
    if (regex.test(fname) === false) {
      printError("nameErr", "Please enter a valid name");
    } else {
      printError("nameErr", '')
      nameErr = false;
      firstNameValue;
    }
  }

   // Validate Last name
   if (lname == "") {
    printError("lastnameErr", "Please enter your last name");
  } else {
    let regex = /^[a-zA-Z\s]+$/;
    if (regex.test(lname) === false) {
      printError("lastnameErr", "Please enter a valid name");
    } else {
      printError("lastnameErr", '')
      lastnameErr = false;
      LastNameValue;
    }
  }

   // Email validation
   if(email == ""){
    printError("emailErr", "Email cannot be empty");
    //document.getElementById("emailErr").innerHTML = "Email cannot be empty";
}
else if(email.indexOf('@') <= 0){
  printError("emailErr", "Email is not valid");
  //document.getElementById("emailErr").innerHTML = "Email is not valid";
}
else if(email.charAt(email.length-4)!="." && email.charAt(email.length-3)!=".") {
  printError("emailErr", "Email is not valid");
  //document.getElementById("emailErr").innerHTML = "Email is not valid";
    return false;
}else{
  printError("emailErr",'')
  emailErr = false;
  EmailValue;
}

// validate phone number
if (phone == "") {
  printError("phoneErr", "Enter your phone number");
}
else if (phone.length != 10) {
  printError("phoneErr", "Enter valid phone number");
} else{
  printError("phoneErr",'')
  phoneErr = false;
  PhoneValue;
}

//Validate for qualification
if (qualification == -1) {
  printError("qualErr", "choose one qualification");
  //setErrorMsg(qualification, "choose one qualification");
} else {
  printError("qualErr",'')
  qualErr = false;
  qualificationValue;
}

  // Validate gender
  if (gender == "") {
    printError("genderErr", "Please select your gender");
  } else {
    printError("genderErr", "");
    genderErr = false;
    genderValue;
  }

  // Validate hobbies
  if (hobbies == "") {
    printError("hobbiesErr", "Please select your hobbies");
  } else {
    printError("hobbiesErr", "");
    hobbiesErr = false;
    hobbiesValue;
  }

  // validate for comments
  if (Comments === "") {
    printError("commentsErr", "Please suggest something");
    //setErrorMsg(Comments, "please suggest something");
}
 if (Comments.length <= 15) {
  printError("commentsErr", "comments  min 15 character");
  //setErrorMsg(Comments, "comments  min 20 character");
} else {
  printError("commentsErr", "");
  commentsErr = false;   
}

  if (
    (nameErr || lastnameErr || emailErr || phoneErr || qualErr || genderErr || hobbiesValue) == true
  ) {
    return false;
  } else {
    var firstNameValue = (document.getElementById("firstN").innerHTML =
      "<b>First name:</b> " + fname);

    var LastNameValue =  (document.getElementById("lastN").innerHTML =
    "<b>Last name:</b> " + lname); 

    var EmailValue = (document.getElementById("emailAdd").innerHTML =
    "<b>Email Add :</b> " + email);

    var PhoneValue = (document.getElementById("phoneNo").innerHTML =
    "<b>Phone No :</b> " + phone);

    var qualificationValue = (document.getElementById("qualiFN").innerHTML =
    "<b>Qualification :</b> " + qualification);

    var genderValue = (document.getElementById("genderT").innerHTML =
      "<b>Gender:</b> " + gender);
    var hobbiesValue = (document.getElementById("hobbiesT").innerHTML =
      "<b>Hobbies:</b> " + hobbies);
  }
}