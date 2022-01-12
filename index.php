<?php
    $string = file_get_contents("data.json");
    $data = json_decode($string,true);

    // echo($data[0]["name"]);
    // foreach ($json_a as $key => $value){
    //     echo  $key . ':' . $value;
    // }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Places </title>
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/timeline.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/slider.css">
    <link rel="stylesheet" href="css/info.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

</head>
<body>
    <div id="container">
        <header class="header">
            header
        </header>
        <main>
            <div class="timeline">
                <div class="timeline__inner">
                    <div class="tl__lines">
                        <div class="tl__line">1</div>
                        <div class="tl__line">2</div>
                        <div class="tl__line">3</div>
                        <div class="tl__line">4</div>
                        <div class="tl__line">5</div>
                        <div class="tl__line">6</div>
                        <div class="tl__line">7</div>
                        <div class="tl__line">8</div>
                        <div class="tl__line">9</div>
                        <div class="tl__line">10</div>
                        <div class="tl__line">12</div>
                        <div class="tl__line">13</div>
                        <div class="tl__line">14</div>
                    </div>
                </div>
                <div class="timeline__count">

                </div>
            </div>
            <div class="content">
                <div class="info">
                    infor
                </div>
                <div class="slider">
                    slider
                </div>
            </div>
        </main>
    </div>
    <script src="js/common.js"></script>
    <script src="js/slider.js"></script>
    <script src="js/info.js"></script>
    <script src="js/timeline.js"></script>
</body>
</html>