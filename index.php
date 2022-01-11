<?php
    $string = file_get_contents("data.json");
    $data = json_decode($string,true);

    echo($data[0]["name"]);
    foreach ($json_a as $key => $value){
        echo  $key . ':' . $value;
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Places </title>
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/banner.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/places.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

</head>
<body>
    <div class="container">
        <header class="header">
            header
        </header>
        <main>
            <div class="timeline">
            
            </div>
            <div class="content">
                <div class="info">

                </div>
                <div class="slider">
                    
                </div>
            </div>
        </main>
    </div>
    <script src="js/common.js"></script>
    <script src="js/banner.js"></script>
    <script src="js/footer.js"></script>
    <script src="js/places.js"></script>
    <script src="js/header.js"></script>
</body>
</html>