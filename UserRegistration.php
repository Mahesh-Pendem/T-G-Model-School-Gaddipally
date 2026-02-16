<?php
// Enable error reporting
//Enables all PHP error messages.

//Helps debug by showing errors directly in the browser (useful during development).

error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection details
$host = "localhost"; 
$username = "root"; 
$password = "Mahesh@123";
$database = "TGMS";

// Create a connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted via POST
//Only executes the logic if the form is submitted using POST method.
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve and sanitize input
    //Checked for existence (isset)
    //Escaped to prevent SQL Injection (real_escape_string)
    $uid = isset($_POST['uid']) ? $conn->real_escape_string(trim($_POST['uid'])) : '';
    $uname = isset($_POST['uname']) ? $conn->real_escape_string(trim($_POST['uname'])) : '';
    $emailid = isset($_POST['emailid']) ? $conn->real_escape_string(trim($_POST['emailid'])) : '';
    $mobilenum = isset($_POST['mobilenum']) ? $conn->real_escape_string(trim($_POST['mobilenum'])) : '';

    // Validate inputs
    if (!empty($uid) && !empty($uname) && filter_var($emailid, FILTER_VALIDATE_EMAIL) && !empty($mobilenum)) {

        // Prepare SQL statement
        $stmt = $conn->prepare("INSERT INTO users (uid, uname, emailid, mobilenum) VALUES (?, ?, ?, ?)");
        if (!$stmt) {
            die("Prepare failed: " . $conn->error);
        }

        // Bind parameters
        $stmt->bind_param("ssss", $uid, $uname, $emailid, $mobilenum);

        // Execute and check
        if ($stmt->execute()) {
            // Redirect with success message
            header("Location: home.php?msg=Registration Successful!");
            exit();
        } else {
            // Redirect with failure message
            header("Location: register.php?msg=Registration Failed. Please try again.");
            exit();
        }

        // Close the statement
        $stmt->close();

    } else {
        // Redirect with validation error
        header("Location: register.php?msg=Invalid Input. Please check your entries.");
        exit();
    }
}

// Close DB connection
$conn->close();
?>

