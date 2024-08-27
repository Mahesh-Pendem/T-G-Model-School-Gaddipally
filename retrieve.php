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

// SQL query to fetch data
$sql = "SELECT uid, uname, emailid, mobilenum FROM users";
$result = $conn->query($sql);

// Check if there are results and display them
if ($result->num_rows > 0) {
    echo "<div class='table-container'>";
    echo "<table>";
    echo "<thead><tr><th>User ID</th><th>Username</th><th>Email ID</th><th>Mobile Number</th></tr></thead>";
    echo "<tbody>";

    // Fetch rows as an associative array and display them
    while ($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . htmlspecialchars($row['uid']) . "</td>";
        echo "<td>" . htmlspecialchars($row['uname']) . "</td>";
        echo "<td>" . htmlspecialchars($row['emailid']) . "</td>";
        echo "<td>" . htmlspecialchars($row['mobilenum']) . "</td>";
        echo "</tr>";
    }
    echo "</tbody>";
    echo "</table>";
    echo "</div>";
} else {
    echo "<p>No records found.</p>";
}

// Close the connection
$conn->close();
?>

<style>
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f4f7f6;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.table-container {
    width: 80%;
    margin: auto;
    background: #ffffff;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

thead {
    background-color: #4CAF50;
    color: white;
}

th, td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

tbody tr:nth-child(even) {
    background-color: #f2f2f2;
}

tbody tr:hover {
    background-color: #ddd;
}

th {
    font-size: 18px;
}

td {
    font-size: 16px;
    color: #333;
}

p {
    text-align: center;
    font-size: 18px;
    color: #555;
}
</style>

