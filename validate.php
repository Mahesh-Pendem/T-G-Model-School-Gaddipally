<?php
session_start();

// Database connection settings
$servername = "localhost:3306";
$username = "root"; // Your database username
$password = "Mahesh@123"; // Your database password
$database = "TGMS";

// Create a connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $uid = $_POST['uid'];
    $uname = $_POST['uname'];

    // Prepare and execute the SQL query
    $sql = "SELECT * FROM users WHERE uid = ? AND uname = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("is", $uid, $uname); // 'i' for integer (uid), 's' for string (uname)
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Login successful
        $_SESSION['user'] = $uid;
        header("Location: retrieve.php"); // Redirect to a home page
        exit();
    } else {
        // Login failed, redirect back to login with an error message
        $errorMessage = urlencode("Invalid Credentials! Please try again.");
        header("Location: login.php?msg=$errorMessage");
        exit();
    }
}

// Close the connection
$conn->close();
?>

