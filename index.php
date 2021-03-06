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
    <title>VIHEJO</title>
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
                <div class="language">
                    <div class="translate_wrapper">
                        <div class="current_lang">
                            <div class="lang">
                                <img src="img/vi-flag.png">
                                <span class="lang-txt">VI</span> 
                                <span class="fa fa-chevron-down chevron"></span>
                            </div>
                        </div>
                        
                        <div class="more_lang">
                            <div class="lang" data-value='EN'>
                                <img src="img/en-flag.png">
                                <span class="lang-txt">English<span> (EN)</span></span>      
                            </div>
                            
                            <div class="lang selected" data-value='VI'>
                                <img src="img/vi-flag.png">
                                <span class="lang-txt">VietNam<span> (VI)</span></span>      
                            </div>
                        </div>
                    </div>
                </div>
        </header>
        <main>
            <div class="timeline">
                <div class="timeline__inner">
                    <div class="tl__lines">
                        <?php
                            foreach($data as $x => $val) {
                                echo "<div class='tl__line'>",
                                "<div class='tl__line__index'>",$x + 1,"</div>",
                                "<div class='ttl-title'><p><span class='vi'>",$val['name_vi'],"</span><span class='en'>",$val['name_en'],"</span></p></div>"
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
                                    echo "<h1 class='content-title '><span class='vi'>",$val['name_vi'],"</span><span class='en'>",$val['name_en'],"</span></h1>";
                                }
                            ?> 
                        </div>
                        <div class="desc-wrap">
                            <?php
                                foreach($data as $x => $val) {
                                    echo "<p class='content-desc'><span class='vi'>",$val['desc_vi'],"</span><span class='en'>",$val['desc_en'],"</span></p>";
                                }
                            ?>
                        </div>

                        <div class="btn-wrap">
                            <?php
                                foreach($data as $x => $val) {
                                    echo "<button class='discover--btn scale-0 btn-link'>Kh??m ph??</button>";
                                }
                                // foreach($data as $x => $val) {
                                //     echo "<a href='",$val['link_detail'],"' target='_blank' class='btn-link'>
                                //             <button class='discover--btn scale-0'>Kh??m ph??</button>
                                //         </a>";
                                // }
                            ?> 
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
                                                    <p class='card-text'><span class='vi'>",$val['name_vi'],"</span><span class='en'>",$val['name_en'],"</span></p>
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

    <div class="container" >
        <div class="form">
            <div class="form-popup">
                <button class="closePopup" ><i class="fas fa-times"></i></button>
                <iframe src="https://trealet.com/streamline?tr=123423234"  class="iframe" ></iframe>
            </div>
        </div>
    </div>

    <script src="js/common.js"></script>
    <script src="js/slider.js"></script>
    <script src="js/info.js"></script>
    <script src="js/timeline.js"></script>
</body>
</html>