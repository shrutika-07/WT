<?php
include 'config.php';
session_start();
header('Content-Type: application/json');

if (!isset($_SESSION['user_id'])) {
    echo json_encode("You must be logged in to add a book.");
    exit();
}

$input = json_decode(file_get_contents('php://input'), true);
$title = $conn->real_escape_string($input['title']);
$author = $conn->real_escape_string($input['author']);
$description = $conn->real_escape_string($input['description']);
$user_id = $_SESSION['user_id'];

$sql = "INSERT INTO books (title, author, description, user_id) VALUES ('$title', '$author', '$description', '$user_id')";

if ($conn->query($sql) === TRUE) {
    echo json_encode("Book added successfully!");
} else {
    echo json_encode("Error: " . $sql . "<br>" . $conn->error);
}
?>
