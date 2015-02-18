<?php
if($_POST)
{
	//check if its an ajax request, exit if not
    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
        die();
    } 
	
	$to_Email   	= "jahn.schlosser@gmail.com"; //Replace with recipient email address
	$subject        = 'Contact Form Submit | from jahnschlosser.com'; //Subject line for emails
	
	//check $_POST vars are set, exit if any missing
	if(!isset($_POST["userName"]) || !isset($_POST["userEmail"]) || !isset($_POST["userMessage"]))
	{
		die();
	}

	//Sanitize input data using PHP filter_var().
	$user_Name        = filter_var($_POST["userName"], FILTER_SANITIZE_STRING);
	$user_Email       = filter_var($_POST["userEmail"], FILTER_SANITIZE_EMAIL);
	$user_Message     = filter_var($_POST["userMessage"], FILTER_SANITIZE_STRING);
	
	//additional php validation
	if(strlen($user_Name)<4) // If length is less than 4 it will throw an HTTP error.
	{
		header('HTTP/1.1 500 Name is too short or empty!');
		exit();
	}
	if(!filter_var($user_Email, FILTER_VALIDATE_EMAIL)) //email validation
	{
		header('HTTP/1.1 500 Please enter a valid email!');
		exit();
	}
	if(strlen($user_Message)<5) //check emtpy message
	{
		header('HTTP/1.1 500 Too short message! Please enter something.');
		exit();
	}
	
	//proceed with PHP email.
	$headers = 'From: '.$user_Email.'' . "\r\n" .
	'Reply-To: '.$user_Email.'' . "\r\n" .
	'X-Mailer: PHP/' . phpversion();
	
	@$sentMail = mail($to_Email, $subject, $user_Message .'  -'.$user_Name, $headers);
	
	if(!$sentMail)
	{
		header('HTTP/1.1 500 Could not send mail! Sorry..');
		exit();
	}else{
		echo 'Hi '.$user_Name .', Thank you for your email! ';
		echo 'Your email has been sent.';
	}
}
?>