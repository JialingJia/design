function myValidation() {
  let firstName = document.getElementById('fname').value;
  let lastName = document.getElementById('lname').value;
  let emailName = document.getElementById('ename').value;

  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch('https://script.google.com/macros/s/AKfycbzP27DNG9hVkWuWs-x0mTPAqwHqeoc8rTERnX9tVrK5UHba3RAY/exec', { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

  if (firstName == "") {
    event.preventDefault();
    event.stopPropagation();
    document.getElementById('fblank').innerHTML = "please input your first name.";
  }
  else {
    document.getElementById('fblank').innerHTML = "";
  }

  if (lastName == "") {
    event.preventDefault();
    event.stopPropagation();
    document.getElementById('lblank').innerHTML = "please input your last name.";
  }
  else {
    document.getElementById('lblank').innerHTML = "";
  }

  if (emailName == "") {
    event.preventDefault();
    event.stopPropagation();
    document.getElementById('eblank').innerHTML = "please input your email.";
  }
  else {
    document.getElementById('eblank').innerHTML = "";
  }

  if (firstName != "" && lastName != "" && emailName != "") {
    document.addEventListener('submit', function () {
      document.getElementById('form-content').innerHTML = "enroll successufully!";
    } )


  }

}
