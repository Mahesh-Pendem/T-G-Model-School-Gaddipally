<?php
// Database connection details
$host = "localhost:3306"; 
$username = "root"; 
$password = "Mahesh@123";
$database = "TGMS";

// Create a connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $uid = $conn->real_escape_string($_POST['uid']);
    $uname = $conn->real_escape_string($_POST['uname']);
    $emailid = $conn->real_escape_string($_POST['emailid']);
    $mobilenum = $conn->real_escape_string($_POST['mobilenum']);

    // Input validation
    if (!empty($uid) && !empty($uname) && filter_var($emailid, FILTER_VALIDATE_EMAIL) && !empty($mobilenum)) {
        // Prepare and bind
        $stmt = $conn->prepare("INSERT INTO users (uid, uname, emailid, mobilenum) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $uid, $uname, $emailid, $mobilenum);

        if ($stmt->execute()) {
            header("Location: home.php?msg=Registration Successful!");
        } else {
            header("Location: register.php?msg=Registration Failed. Please try again.");
        }

        // Close statement
        $stmt->close();
    } else {
        header("Location: register.php?msg=Invalid Input. Please check your entries.");
    }
}

// Close the connection
$conn->close();
?>

