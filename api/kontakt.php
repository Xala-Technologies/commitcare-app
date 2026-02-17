<?php
/**
 * Contact Form API Endpoint for one.com
 * This file should be uploaded to one.com public_html/api/kontakt.php
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method Not Allowed'
    ]);
    exit;
}

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

// Validate required fields
$errors = [];

if (empty($data['name']) || strlen($data['name']) < 2) {
    $errors[] = 'Navn må være minst 2 tegn';
}

if (empty($data['email']) || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Ugyldig e-postadresse';
}

if (empty($data['message']) || strlen($data['message']) < 10) {
    $errors[] = 'Melding må være minst 10 tegn';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $errors[0]
    ]);
    exit;
}

// Email configuration
$to = 'info@commitcare.no'; // Change this to your email
$subject = 'Ny melding fra kontaktskjemaet - ' . htmlspecialchars($data['name']);
$fromEmail = 'noreply@commitcare.no'; // Must be from your domain

// Build email message
$message = "Ny melding fra kontaktskjemaet\n\n";
$message .= "Navn: " . htmlspecialchars($data['name']) . "\n";
$message .= "E-post: " . htmlspecialchars($data['email']) . "\n";
if (!empty($data['phone'])) {
    $message .= "Telefon: " . htmlspecialchars($data['phone']) . "\n";
}
$message .= "\nMelding:\n" . htmlspecialchars($data['message']) . "\n";

// Build HTML email
$htmlMessage = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #0d9488; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background-color: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #0d9488; }
        .value { margin-top: 5px; padding: 10px; background-color: white; border-radius: 4px; }
        .message-box { margin-top: 10px; padding: 15px; background-color: white; border-left: 4px solid #0d9488; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1 style='margin: 0;'>Ny melding fra kontaktskjemaet</h1>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='label'>Navn:</div>
                <div class='value'>" . htmlspecialchars($data['name']) . "</div>
            </div>
            <div class='field'>
                <div class='label'>E-post:</div>
                <div class='value'><a href='mailto:" . htmlspecialchars($data['email']) . "'>" . htmlspecialchars($data['email']) . "</a></div>
            </div>";
if (!empty($data['phone'])) {
    $htmlMessage .= "
            <div class='field'>
                <div class='label'>Telefon:</div>
                <div class='value'><a href='tel:" . preg_replace('/\s+/', '', $data['phone']) . "'>" . htmlspecialchars($data['phone']) . "</a></div>
            </div>";
}
$htmlMessage .= "
            <div class='field'>
                <div class='label'>Melding:</div>
                <div class='message-box'>" . nl2br(htmlspecialchars($data['message'])) . "</div>
            </div>
        </div>
    </div>
</body>
</html>";

// Email headers
$headers = "From: $fromEmail\r\n";
$headers .= "Reply-To: " . htmlspecialchars($data['email']) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Send email
$mailSent = mail($to, $subject, $htmlMessage, $headers);

if ($mailSent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Meldingen din er sendt! Vi tar kontakt så snart som mulig.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Kunne ikke sende melding. Vennligst prøv igjen senere.'
    ]);
}
?>


