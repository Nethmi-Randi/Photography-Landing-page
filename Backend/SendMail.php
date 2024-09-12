<?php

require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';
require './PHPMailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $input = file_get_contents('php://input');
    error_log("Received input: " . $input);
    $data = json_decode($input, true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        error_log("JSON Error: " . json_last_error_msg()); 
        http_response_code(400);
        echo json_encode(["message" => "Invalid JSON input"]);
        exit;
    }

    $email = isset($data['email']) ? filter_var($data['email'], FILTER_VALIDATE_EMAIL) : null;
    $name = isset($data['name']) ? htmlspecialchars(strip_tags($data['name'])) : null;
    $phone = isset($data['phone']) ? htmlspecialchars(strip_tags($data['phone'])) : null;
    $message = isset($data['message']) ? htmlspecialchars(strip_tags($data['message'])) : null;

    
    error_log("Email: $email, Name: $name, Phone: $phone, Message: $message");

    
    if (!$email || empty($name) || empty($phone) || empty($message)) {
        error_log("Invalid input: email=$email, name=$name, phone=$phone, message=$message"); // Log invalid input details
        http_response_code(400);
        echo json_encode(["message" => "Invalid input"]);
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';  
        $mail->SMTPAuth = true;
        $mail->Username = 't12914822@gmail.com';  
        $mail->Password = 'fsyb gyoy plpr uvyf';  
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;  

        $mail->setFrom('t12914822@gmail.com', 'Website Contact Form');  
        $mail->addAddress('t12914822@gmail.com');  

        $mail->isHTML(true);
        $mail->Subject = 'Contact Form Submission';
        $mail->Body    = "<p><strong>Name:</strong> $name</p>
                          <p><strong>Phone:</strong> $phone</p>
                          <p><strong>Message:</strong><br>$message</p>";
        $mail->AltBody = "Name: $name\nPhone: $phone\nMessage: $message";

        $mail->send();
        echo json_encode(["message" => "Email sent successfully"]);
    } catch (Exception $e) {
        error_log($mail->ErrorInfo);
        http_response_code(500);
        echo json_encode(["message" => "Error sending email: " . $mail->ErrorInfo]);
    }
} else {
    http_response_code(405);
    echo json_encode(["message" => "Only POST requests are allowed"]);
}
