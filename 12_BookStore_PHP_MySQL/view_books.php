<?php
include 'config.php';
session_start();
header('Content-Type: application/json');

if (!isset($_SESSION['user_id'])) {
    echo json_encode("You must be logged in to view books.");
    exit();
}

$sql = "SELECT * FROM books WHERE user_id=" . $_SESSION['user_id'];
$result = $conn->query($sql);

$books = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $books[] = $row;
    }
}

echo json_encode($books);
?>