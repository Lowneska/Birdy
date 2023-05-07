export function signInErrors(err) {
	let errors = { email: '', password: ''}
  
	if (err == "email") 
	  errors.email = "Unkown email.";
	
	if (err == "password")
	  errors.password = "The password is not correct."
  
	return errors;
  }