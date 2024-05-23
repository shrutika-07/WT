<?php
include 'config.php';
session_start();
header('Content-Type: application/json');

if (!isset($_SESSION['user_id'])) {
    echo json_encode("You must be logged in to delete a book.");
    exit();
}

$input = json_decode(file_get_contents('php://input'), true);
$book_id = $conn->real_escape_string($input['book_id']);
$user_id = $_SESSION['user_id'];

$sql = "DELETE FROM books WHERE id='$book_id' AND user_id='$user_id'";

if ($conn->query($sql) === TRUE) {
    echo json_encode("Book deleted successfully!");
} else {
    echo json_encode("Error: " . $sql . "<br>" . $conn->error);
}
?>
