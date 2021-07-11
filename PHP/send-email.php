<?php 
if (isset($_POST['send_message_btn'])) {
  $fname = $_POST['fname'];
  $lname = $_POST['fname'];
  $email = $_POST['email'];
  $telephone = $_POST['telephone'];
  $address1 = $_POST['address1'];
  $address2 = $_POST['address2'];
  $town = $_POST['town'];
  $county = $_POST['county'];
  $postcode = $_POST['postcode'];
  $country = $_POST['country'];
  $description = $_POST['description'];
  $myfile = $_POST['myfile'];

  // Content-Type helps email client to parse file as HTML 
  // therefore retaining styles
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers = 'From: Maciej <maciejmyszczynskiofficial@gmail.com>' . "\r\n" .
           'To: '.$fname.' <'.$email.'>' . "\r\n" .
           
           'Reply-To: maciejmyszczynskiofficial@gmail.com' . "\r\n" .
           'X-Mailer: PHP/' . phpversion();
  $message = "<html>
  <head>
  	<title>Here are the details you provided us with on your application</title>
  </head>
  <body>
  	<h1>Here are your details: </h1>
  	<p>".$fname."</p>
  	<p>".$lname."</p>
  	<p>".$email."</p>
  	<p>".$telephone."</p>
  	<p>".$address1."</p>
  	<p>".$address2."</p>
  	<p>".$town."</p>
  	<p>".$county."</p>
  	<p>".$postcode."</p>
  	<p>".$country."</p>
  	<p>".$description."</p>
  	<p>".$fname."</p>

  </body>
  </html>";
  if (mail($email, $subject, $message, $headers)) {
   echo "Email sent";
  }else{
   echo "Failed to send email. Please try again later";
  }
}
?>