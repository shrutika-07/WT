<?php
include 'config.php';
session_start();
header('Content-Type: application/json');

$input = json_decode(file_get_contents('php://input'), true);
$username = $conn->real_escape_string($input['username']);
$password = $input['password'];

$sql = "SELECT * FROM users WHERE username='$username'";
$result = $conn->query($sql);

if ($result->num_rows == 1) {
    $user = $result->fetch_assoc();
    if (password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['id'];
        echo json_encode("Login successful!");
    } else {
        echo json_encode("Invalid password.");
    }
} else {
    echo json_encode("User not found.");
}
?>