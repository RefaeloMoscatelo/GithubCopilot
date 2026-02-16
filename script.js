//function to validate an email address using regex
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
//function to validate ID number (assuming it's a 9-digit number)
function validateID(id) {
    const re = /^\d{9}$/;
    return re.test(String(id));
}