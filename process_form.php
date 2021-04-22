<?php
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$subject = $_REQUEST['subject'];
$message = $_REQUEST['message'];

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

$mail_body = "Name : ".$name."<br>"; 
$mail_body .= "Email : " . $email . "<br>";
$mail_body .= "Subject : " . $subject . "<br>";
$mail_body .= "Message : " . $message . "<br>";
if(mail("r.nick.lusk@gmail.com"," " . $name ." - via Contact Form Nick Lusk",$mail_body,$headers)){
    $thanks_mail_body = "Hey " . $name ."!<br>";
    
    $thanks_mail_body .= "This means your message made it, fantastic news!<br>";
    $thanks_mail_body .= "I am delighted that you have taken the time to message me.<br>";
    $thanks_mail_body .= "As soon as I reasonably can I will be back to you.<br>";
    $thanks_mail_body .= "Thank You,<br>";
    $thanks_mail_body .= "Nick Lusk";

    if(mail($email,"Contact Request Notification Email",$thanks_mail_body,$headers)){
        echo "1";
        die();
    }
    echo "1";    
}else{
    echo "0";
}

