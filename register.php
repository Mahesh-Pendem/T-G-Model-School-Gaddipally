<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-size: 32px;
            margin: 0;
            padding: 0;
            background: linear-gradient(to right, #764ba2, #667eea); /* Colorful gradient background */
            font-family: 'Arial', sans-serif;
            color: #fff;
        }
        .container {
            background-color: rgba(255, 255, 255, 0.1);
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(10px);
            text-align: center;
            width: 100%;
            max-width: 600px;
            box-sizing: border-box;
            margin: 10px;
        }
        h1 {
            margin-bottom: 20px;
            font-size: 2.5rem;
        }
        .table {
            width: 100%;
            font-size: 28px;
            margin: 20px 0;
            border-collapse: collapse;
        }
        .table td {
            padding: 15px;
            border: none;
        }
        .table input {
            width: calc(100% - 20px);
            padding: 10px;
            font-size: 1rem;
            border: none;
            border-radius: 5px;
            margin: 5px 0;
        }
        .myButton {
            font-size: 0.9rem; /* Reduced font size */
            padding: 6px 12px; /* Reduced padding */
            margin: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            background-color: #a8eb12;
            color: black;
            transition: background-color 0.3s ease;
            width: 10%;
        }
        .myButton:hover {
            background-color: #051977;
            color: #fff;
        }
        p {
            font-size: 1rem;
            margin-top: 20px;
        }
        @media (max-width: 650px) {
            .container {
                width: 100%;
                padding: 20px;
                margin: 0;
            }
            .table {
                font-size: 20px;
            }
            .table td {
                padding: 10px;
            }
            .table input {
                width: calc(100% - 20px);
                padding: 8px;
            }
            .myButton {
                font-size: 0.8rem; /* Further reduced font size for smaller screens */
                padding: 6px 10px; /* Further reduced padding */
                width: 45%;
            }
            h1 {
                font-size: 2rem;
            }
            p {
                font-size: 0.9rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Registration Form</h1>
        <?php
        if (isset($_GET['msg'])) {
            $msg = htmlspecialchars($_GET['msg']);
            echo "<div style='color: red; font-size: 1.5rem; margin-bottom:70px;'>$msg</div>";
        }
        ?>
        <form name="f1" action="UserRegistration.php" method="post">
            <table class="table">
                <tr>
                    <td>User ID</td>
                    <td><input type="text" name="uid" id="uid" class="myTextbox" required placeholder="Admission No"></td>
                </tr>
                <tr>
                    <td>User Name</td>
                    <td><input type="text" name="uname" id="uname" class="myTextbox" required placeholder="Full Name"></td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td><input type="email" name="emailid" id="emailid" class="myTextbox" required placeholder="Email Id"></td>
                </tr>
                <tr>
                    <td>Mobile</td>
                    <td><input type="text" name="mobilenum" id="mobilenum" class="myTextbox" required placeholder="Mobile No"></td>
                </tr>
                <tr>
                    <td colspan="2">
                        <input type="submit" value="Register" class="myButton">
                        <input type="reset" value="Reset" class="myButton">
                    </td>
                </tr>
            </table>
            <p><b>Note:</b> 1. Student User ID should be the same as your Admission Number.<br><br>
                       &nbsp;    2.Teachers can also register using their registration number.</p>
        </form>
    </div>
</body>
</html>

