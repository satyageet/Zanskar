<?PHP
$firstname = $_REQUEST["firstname"];
$lastname = $_REQUEST["lastname"];
$comments = $_REQUEST['subject'] ;
$email="nitinyadavjps@gmail.com";
$to = "nitinyadav0606@gmail.com";
$subject = "New Email Address for Mailing List";
$headers = "From: $email\n";
$message = "A visitor to your site has sent the following email address to be added to your mailing list.\n

Email Address: $email";
$user = "$email";
$usersubject = "Thank You";
$userheaders = "From: you@youremailaddress.com\n";
$usermessage = "Thank you for subscribing to our mailing list.";
if(mail($to,$email_subject,$email_body,$headers)){
    //redirect to the 'thank you' page
    header('Location: index.html');
} else {
    echo 'Error!';
}
?>