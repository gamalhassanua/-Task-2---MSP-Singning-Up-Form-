function display() {
    DispWin = window.open('','','width=1000,height=700');
    message = "<ul><li><b>Your Full Name is </b>" + document.sign_up_form.FullName.value;
    message += "<li><b>Your User Name is  </b>" + document.sign_up_form.username.value;
    message += "<li><b> Your E-mail is </b>" + document.sign_up_form.email.value;
    message += "<li><b> Your Phone Number is </b>" + document.sign_up_form.telephone.value;
    message += "<li><b>Your Age is </b>" + document.sign_up_form.age.value
    message += "<li><b> Your Date of Birth is </b>" + document.sign_up_form.date.value
    message += "<li><b>Your Country is </b>" + document.sign_up_form.country.value
    message += "<li><b>Your University is </b>" + document.sign_up_form.university.value + "</ul>";
    DispWin.document.write(message);
  }