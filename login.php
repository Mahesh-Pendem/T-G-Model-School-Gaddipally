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
            background: linear-gradient(135deg, #6a11cb, #2575fc);
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
            background-size: cover;
            background-attachment: fixed;
        }

        .container {
            background: rgba(255, 255, 255, 0.2);
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            width: 350px;
            text-align: center;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        h2 {
            color: #fff;
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
            background: rgba(255, 255, 255, 0.8);
        }

        input[type="text"]:focus, input[type="password"]:focus {
            outline: none;
            box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
        }

        input[type="submit"] {
            width: 100%;
            padding: 12px;
            margin-top: 20px;
            background: linear-gradient(135deg, #ff9966, #ff5e62);
            color: #fff;
            border: none;
            border-radius: 25px;
            font-size: 18px;
            cursor: pointer;
            transition: background 0.3s ease, transform 0.2s ease;
        }

        input[type="submit"]:hover {
            background: linear-gradient(135deg, #ff5e62, #ff9966);
            transform: scale(1.05);
        }

        .links {
            margin-top: 20px;
        }

        a {
            color: #fff;
            text-decoration: none;
            transition: color 0.3s ease;
            font-weight: 500;
        }

        a:hover {
            color: #ff9966;
        }

        .error-message {
            background-color: rgba(255, 0, 0, 0.2);
            color: white;
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

