<?php
// Start the session
session_start();

// Define the maximum number of concurrent sessions
$maxSessions = 3;

// Check if the user already has a session
if (isset($_SESSION['user_id'])) {
    // User already has a session
    echo "You are already logged in!";
    exit;
}

// Function to load session data from the text file
function loadSessionData($sessionFile) {
    if (file_exists($sessionFile)) {
        $contents = file_get_contents($sessionFile);
        return $contents ? explode(PHP_EOL, $contents) : [];
    }
    return [];
}

// Function to update active sessions in the text file
function updateActiveSessions($sessionFile, $sessionId, $maxSessions) {
    $sessionData = loadSessionData($sessionFile);
    $sessionData[] = $sessionId;

    // Limit the array to the last $maxSessions entries
    $sessionData = array_slice($sessionData, -$maxSessions);

    // Save the updated session data to the text file
    file_put_contents($sessionFile, implode(PHP_EOL, $sessionData));
}

// Define the session file
$sessionFile = 'active_sessions.txt';

// Get the current number of sessions
$currentSessions = count(loadSessionData($sessionFile));

// Check if the maximum number of sessions has been reached
if ($currentSessions >= $maxSessions) {
    echo "Maximum number of concurrent sessions reached. Please try again later.";
    exit;
}

// Create a new session for the user
$_SESSION['user_id'] = uniqid(); // You can use any method to generate a unique user identifier

echo "Welcome! Your session has started.";

// Update the active sessions count
updateActiveSessions($sessionFile, session_id(), $maxSessions);
?>
