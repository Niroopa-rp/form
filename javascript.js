function validationform() {
  var fname = document.validateform.fname.value;
  var lname = document.validateform.lname.value;
  var city = document.validateform.city.value; 
  var phone = document.validateform.phone.value;
  var address = document.validateform.address.value;
  if (fname == null || fname == "") {
    alert("firstname cannot be blank");
    return false;
  }
  else if (lname == null || lname == "") {
    alert("lastname cannot be blank");
    return false;
  }
  else if (phone>=0 && phone<=9) {
    alert("Phone number should be in numeric values");
    return false;
  }
  else if (address.length < 10) {
    alert("Address should be atleast ten characters");
    return false;
  }
  else{
    document.write("form submitted successfully!");
    return true;
  }
}
