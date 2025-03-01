<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Successful</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: 'Arial', sans-serif;
            background: linear-gradient(to right, #43cea2, #185a9d); /* Gradient background */
            color: #fff;
            text-align: center;
        }
        .container {
            background-color: rgba(255, 255, 255, 0.2);
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            max-width: 600px;
            margin: 20px;
            backdrop-filter: blur(10px);
        }
        h1 {
            font-size: 3rem;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
        }
        p {
            font-size: 1.5rem;
            margin-bottom: 30px;
        }
        .myButton {
            padding: 10px 20px;
            font-size: 1.2rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            background-color: #00c6ff;
            color: #fff;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
            transition: background-color 0.3s ease;
        }
        .myButton:hover {
            background-color: #0077b6;
        }
        .myButton:focus {
            outline: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Success!</h1>
        <p>Your registration was successful.</p>
        <a href="login.php">
            <button class="myButton">Login</button>
        </a>
    </div>
</body>
</html>

