<?php
// Check if there's a message to display
$msg = isset($_GET['msg']) ? $_GET['msg'] : '';
?>

<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(120deg, #a8edea, #fed6e3); /* Softer pastel gradient */
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            background: #ffffff;
            padding: 40px 60px;
            border-radius: 15px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
            width: 350px;
            text-align: center;
        }
        h2 {
            margin-bottom: 20px;
            color: #333;
            font-size: 28px;
            font-weight: 600;
        }
        input[type="text"], input[type="password"] {
            width: 100%;
            padding: 12px;
            margin: 15px 0;
            border: none;
            border-radius: 25px;
            font-size: 16px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            box-sizing: border-box;
            transition: all 0.3s ease;
        }
        input[type="text"]:focus, input[type="password"]:focus {
            outline: none;
            box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
        }
        input[type="submit"] {
            width: 100%;
            padding: 12px;
            margin-top: 20px;
            background: linear-gradient(120deg, #ff9966, #ff5e62);
            color: #fff;
            border: none;
            border-radius: 25px;
            font-size: 18px;
            cursor: pointer;
            transition: background 0.3s ease;
        }
        input[type="submit"]:hover {
            background: linear-gradient(120deg, #ff5e62, #ff9966);
        }
        .links {
            margin-top: 20px;
        }
        a {
            color: #ff5e62;
            text-decoration: none;
            transition: color 0.3s ease;
            font-weight: 500;
        }
        a:hover {
            color: #ff9966;
        }
        /* Styling for error message */
        .error-message {
            background-color: #f8d7da;
            color: #721c24;
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 20px;
            font-size: 16px;
            font-weight: 500;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            animation: fadeIn 0.5s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Login</h2>
        <!-- Display error message if it exists -->
        <?php if ($msg != ''): ?>
            <div class="error-message">
                <?php echo htmlspecialchars($msg); ?>
            </div>
        <?php endif; ?>
        <form action="validate.php" method="POST">
            <input type="text" name="uid" placeholder="Admission No" required>
            <input type="password" name="uname" placeholder="Name" required>
            <input type="submit" value="Login">
        </form>
        <div class="links">
            <a href="register.php">Don't have an account? Register</a>
        </div>
    </div>
</body>
</html>

