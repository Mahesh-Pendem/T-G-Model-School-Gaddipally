<?php
function numberToWords($num) {
    $ones = array(
        0 => "Zero", 1 => "One", 2 => "Two", 3 => "Three", 4 => "Four", 5 => "Five", 6 => "Six", 7 => "Seven", 8 => "Eight", 9 => "Nine", 10 => "Ten",
        11 => "Eleven", 12 => "Twelve", 13 => "Thirteen", 14 => "Fourteen", 15 => "Fifteen", 16 => "Sixteen", 17 => "Seventeen", 18 => "Eighteen", 19 => "Nineteen"
    );
    $tens = array(
        0 => "", 1 => "", 2 => "Twenty", 3 => "Thirty", 4 => "Forty", 5 => "Fifty", 6 => "Sixty", 7 => "Seventy", 8 => "Eighty", 9 => "Ninety"
    );
    if ($num < 20) {
        return $ones[$num];
    } elseif ($num < 100) {
        return $tens[floor($num / 10)] . ($num % 10 > 0 ? "-" . $ones[$num % 10] : "");
    } elseif ($num < 1000) {
        return $ones[floor($num / 100)] . " Hundred" . ($num % 100 > 0 ? " and " . numberToWords($num % 100) : "");
    } else {
        return numberToWords(floor($num / 1000)) . " Thousand" . ($num % 1000 > 0 ? " " . numberToWords($num % 1000) : "");
    }
}

function dateToWords($date) {
    $dateParts = explode("-", $date);
    $day = intval($dateParts[2]);
    $monthNum = intval($dateParts[1]);
    $year = intval($dateParts[0]);
    
    $months = array(
        1 => "January", 2 => "February", 3 => "March", 4 => "April", 5 => "May", 6 => "June",
        7 => "July", 8 => "August", 9 => "September", 10 => "October", 11 => "November", 12 => "December"
    );
    
    return numberToWords($day) . " " . $months[$monthNum] . " " . numberToWords($year);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $admission = htmlspecialchars($_POST['add']);
    $name = htmlspecialchars($_POST['name']);
    $fname = htmlspecialchars($_POST['fname']);
    $dob = htmlspecialchars($_POST['dob']);
    $from = htmlspecialchars($_POST['from']);
    $to = htmlspecialchars($_POST['to']);
    $year1 = htmlspecialchars($_POST['year1']);
    $year2 = htmlspecialchars($_POST['year2']);
    
    // Format date of birth
    $dobFormatted = date("Y-m-d", strtotime($dob));
    $dobInWords = dateToWords($dobFormatted);
    
    // Get the current date
    $currentDate = date("d-m-Y");
    
    echo "<!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Bonafide Certificate</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 20px;
                background-color: #f3f3f3;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                height: 100vh;
            }
            .certificate {
                border: 2px solid #4CAF50;
                padding: 30px;
                width: 100%;
                max-width: 600px;
                background-color: #fff;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                position: relative;
                border-radius: 10px;
                box-sizing: border-box;
            }
            .certificate h1,h2 {
                text-align: center;
                text-decoration: underline;
                color: #4CAF50;
            }
            .certificate p {
                margin: 20px 0;
                line-height: 1.6;
                color: #333;
            }
            .signature {
                text-align: right;
                margin-top: 50px;
            }
            .print-button {
                display: flex;
                justify-content: center;
                margin-top: 20px;
                padding: 10px 20px;
                background-color: #4CAF50;
                color: white;
                border: none;
                cursor: pointer;
                border-radius: 5px;
                text-align: center;
            }
            .print-button:hover {
                background-color: #45a049;
            }
            .date {
                margin-left: auto;
                margin-bottom: 60px;
                text-align: right;
            }
            .info {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0;
                margin-bottom: 20px;
            }
            #subhead {
                font-size: 13px;
                text-align: center;
                margin: 0;
            }
            #head {
                text-align: center;
                margin: 0;
            }
            .study {
                padding-top: 0px;
                margin: 0;
            }
            @media print {
                .print-button {
                    display: none;
                }
            }
        </style>
        <script>
            function printCertificate() {
                window.print();
            }
        </script>
    </head>
    <body>
        <div class='certificate'>
            <div class='info'>
                <img src='logo.jpeg' id='logo1' width='50px' height='50px' alt=''>
                <div>
                    <h3 id='head'>T G Model School and Jr. College Gaddipally</h3>
                    <p id='subhead'>Catering to the Educational Needs of Gifted Rural Youth</p>
                </div>
                <img src='tlogo1.png' id='logo2' width='50px' height='50px' alt=''>
            </div>
            <h2 class='study'>STUDY & CONDUCT CERTIFICATE</h2>
            <h4 align='center'>(Issued by School Authorities)</h4><br>
            <strong>Admission No: $admission</strong>
            <div class='date'>
                <strong>Date: $currentDate</strong>
            </div>
            <p>This is to certify that Mr/Mrs <strong>$name</strong>, S/o/D/o <strong>$fname</strong>, is/was a student of this institution Studied/Studying <strong>$from</strong> class to <strong>$to</strong> Class during the academic years from <strong>$year1</strong> to <strong>$year2</strong>.</p>
            <p>His/Her Character and Conduct was/were found satisfactory during the period of his/her stay in this institution.</p>
            <p>His/Her Date of Birth is <strong>$dob</strong> (In words <strong>$dobInWords</strong> )</p><br>
            <div class='signature'>
                <strong>Signature of Principal</strong>
            </div>
            <div>
                <strong>Place:</strong><br><br>
                <strong>Date:</strong>
            </div>
        </div>
        <button class='print-button' onclick='printCertificate()'>Print</button>
    </body>
    </html>";
}
?>

