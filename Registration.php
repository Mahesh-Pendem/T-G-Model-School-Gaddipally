<?php
// Database connection details
$host = "localhost:3306"; // Replace with your host
$username = "root"; // Replace with your database username
$password = "Mahesh@123"; // Replace with your database password
$database = "TGMS"; // Replace with your database name

// Create a connection
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $student_id = $conn->real_escape_string($_POST['student_id']);
    $password = $conn->real_escape_string($_POST['password']);

    // Hash the password for secure storage
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO students (student_id, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $student_id, $hashed_password);

    if ($stmt->execute()) {
        echo "<div style='text-align: center; margin-top: 50px;'>
                 <h2 style='color: green;'>Registration Successful!</h2>
                 <a href='login.php' style='text-decoration: none; color: blue;'>Go back to Login</a>
              </div>";
    } else {
        echo "<div style='text-align: center; margin-top: 50px;'>
                 <h2 style='color: red;'>Registration Failed. Please try again.</h2>
              </div>";
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
}
?>

