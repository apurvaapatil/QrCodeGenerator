//initialize the textbox
var courseName = document.getElementById('course');
var sessionName = document.getElementById('session');
var instructorName = document.getElementById('instructor');
var passwordName = document.getElementById('password');

//initialize the div where you are going to display the QR(using the api)
var qrcode = new QRCode(document.getElementById('qr_display'));

//onClick() of button
function generateQR() {
    //get the actual content in textbox
    var course = courseName.value;
    var session = sessionName.value;
    var instructor = instructorName.value;
    var password = passwordName.value; 

    //convert the data to a JSON string
    var obj = {course : course, session : session, instructor : instructor, password : password};
    var myJSON = JSON.stringify(obj);
   
    //create the actual QR code (this function ia already defined in the qrcode.min.js)
    qrcode.makeCode(myJSON);    
  }