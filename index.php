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
    <link rel="stylesheet" href="css/timeline.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/slider.css">
    <link rel="stylesheet" href="css/info.css">
    <link rel="stylesheet" href="css/index.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
</head>
<body>
    <?php
        echo    "<div id='container' style='background-image: url(",$data[0]['image'][1],")'>";
    ?> 
        <header class="header">
            <!-- <div id="title-toggle">
                <a href="#menu" id="toggle"><span></span></a>
            </div> -->
                <div class="logo">
                    <img src="img/logo.png" alt="">
                </div>
                <div class="language"></div>
        </header>
        <main>
            <div class="timeline">
                <div class="timeline__inner">
                    <div class="tl__lines">
                        <?php
                            foreach($data as $x => $val) {
                                echo "<div class='tl__line' title='",$val['name'],"'>",
                                "<span>",$x + 1,"</span>",
                                "<div class='ttl-title'><p>",$val['name'],"</p></div>"
                                ,"</div>";
                            }
                        ?> 
                    </div>
                </div>
                <div class="timeline__count">

                </div>
            </div>
            <div class="content">
                <div class="info ">
                    <div class="form-info">
                        <div class="title-info-wrap">
                            <?php
                                foreach($data as $x => $val) {
                                    echo "<h1 class='content-title '>",$val['name'],"</h1>";
                                }
                            ?> 
                        </div>
                        <div class="desc-wrap">
                            <?php
                                foreach($data as $x => $val) {
                                    echo "<p class='content-desc'>",$val['description'],"</p>";
                                }
                            ?>
                        </div>
                        <div class="btn-wrap">
                            <button class="discover--btn scale-0">Khám phá </button>
                        </div>
                    </div>

                </div>
                <div class="slider ">
                    <div class="slide-wrap ">
                        <div class="slide-items flex vertical-center">
                            <?php
                                foreach($data as $x => $val) {
                                    echo    "<div class='slide-item' data-slide-id='",$x ,"' data-img-bg='",$val['image'][1],"'>
                                                <img src=",$val['image'][0],">
                                                <div class='title-wrap'>
                                                    <p class='card-text'>" ,$val['name'],"</p>
                                                </div>
                                            </div>";
                                }
                            ?> 
                        </div>
                    </div>
                    <div class="slider__btns">
                        <button class="slider__btn--left"><i class="fad fa-chevron-circle-left"></i></button>
                        <button class="slider__btn--right"><i class="fad fa-chevron-circle-right"></i></button>
                    </div>
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