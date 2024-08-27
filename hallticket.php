<?php
// Retrieve form data
$admission_no = htmlspecialchars($_POST['add']);
$name = htmlspecialchars($_POST['name']);
$class = htmlspecialchars($_POST['class']);
$section = htmlspecialchars($_POST['section']);
$roll_no = htmlspecialchars($_POST['roll']);

// Define the photo path (this should be based on your server setup)
// You can use dynamic naming based on admission number or roll number
$photo = "uploads/" . $admission_no . ".jpg"; // Ensure the file exists

// Ensure all necessary details are provided
if (!$admission_no || !$name || !$class || !$section || !$roll_no) {
    echo "All fields are required!";
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hall Ticket - <?php echo $name; ?></title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f8f9fa;
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .ticket-container {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            width: 600px;
            max-width: 90%;
            border: 2px solid #007bff;
            position: relative;
        }
        .ticket-header {
            text-align: center;
            margin-bottom: 20px;
        }
        .ticket-header h2 {
            margin: 0;
            color: #007bff;
        }
        .ticket-header p {
            margin: 5px 0;
            color: #555;
        }
        .details-container {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 20px;
        }
        .details-left {
            flex: 1;
        }
        .details-left p {
            margin: 8px 0;
            font-size: 16px;
            color: #333;
        }
        .details-left p span {
            font-weight: bold;
        }
        .details-right {
            flex: 0 0 120px;
            height: 150px;
            border: 1px solid #ddd;
            background-color: #f0f0f0;
            text-align: center;
            padding: 10px;
        }
        .details-right img {
            max-width: 100%;
            max-height: 100%;
            object-fit: cover;
        }
        .rules-container {
            margin-top: 20px;
            padding: 15px;
            background-color: #f8f9fa;
            border-radius: 10px;
            border: 1px solid #ddd;
        }
        .rules-container h3 {
            margin-bottom: 10px;
            color: #007bff;
        }
        .rules-container ul {
            padding-left: 20px;
        }
        .rules-container ul li {
            margin-bottom: 10px;
            font-size: 14px;
            color: #333;
        }
        .signature-container {
            margin-top: 30px;
            text-align: right;
            font-size: 16px;
            color: #333;
        }
        .signature-container p {
            margin: 5px 0;
        }
        .signature-container .signature {
            font-size: 18px;
            font-weight: bold;
        }
        .print-btn {
            margin-top: 20px;
            text-align: center;
        }
        .print-btn button {
            padding: 10px 20px;
            font-size: 16px;
            color: #fff;
            background-color: #007bff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .print-btn button:hover {
            background-color: #0056b3;
        }
        @media print {
            .print-btn {
                display: none;
            }
        }
    </style>
</head>
<body>
    <div class="ticket-container">
        <div class="ticket-header">
           <h1>T G Model School:Gaddipally</h1>
            <h2>Hall Ticket</h2>
        </div>
        <div class="details-container">
            <div class="details-left">
                <p><span>Admission No:</span> <?php echo $admission_no; ?></p>
                <p><span>Name:</span> <?php echo $name; ?></p>
                <p><span>Class:</span> <?php echo $class; ?></p>
                <p><span>Section:</span> <?php echo $section; ?></p>
                <p><span>Roll No:</span> <?php echo $roll_no; ?></p>
            </div>
            <div class="details-right">
                <?php if (file_exists($photo)) : ?>
                    <img src="<?php echo $photo; ?>" alt="Candidate Photo">
                <?php else : ?>
                    <p>No Photo Available</p>
                <?php endif; ?>
            </div>
        </div>
        <div class="rules-container">
            <h3>Exam Rules</h3>
            <ul>
                <li>All students must carry this hall ticket and a valid ID card to the exam hall.</li>
                <li>Students should be seated 15 minutes before the exam start time.</li>
                <li>Electronic gadgets like mobile phones, calculators, or smartwatches are strictly prohibited.</li>
                <li>Any form of malpractice will lead to immediate disqualification.</li>
                <li>Do not leave the exam hall without the invigilator's permission.</li>
            </ul>
        </div><br><br>
        <div class="signature-container">
            <p>______________________</p>
            <p class="signature">Principal's Signature</p>
        </div>
        <div>
            <p class="signature"><b>Student Signature:</b></p>
             <p class="signature"><b>Date:</b></p>
        </div>
        <div class="print-btn">
            <button onclick="window.print()">Print Hall Ticket</button>
        </div>
    </div>
</body>
</html>

