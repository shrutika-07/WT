<?php
include 'config.php';

header('Content-Type: application/json');

$input = json_decode(file_get_contents('php://input'), true);
$username = $conn->real_escape_string($input['username']);
$password = password_hash($conn->real_escape_string($input['password']), PASSWORD_BCRYPT);

// Check if the username already exists
$sql = "SELECT * FROM users WHERE username='$username'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo json_encode("Error: Username already exists.");
} else {
    $sql = "INSERT INTO users (username, password) VALUES ('$username', '$password')";
    if ($conn->query($sql) === TRUE) {
        echo json_encode("Registration successful!");
    } else {
        echo json_encode("Error: " . $sql . "<br>" . $conn->error);
    }
}
?>