let currDate = new Date();
let currHour = currDate.getHours();

function loadPage(hour){
    const $root = $('#page');
    if (hour <=6 || hour>=18){
        let elt = `<section class="hero is-fullheight is-bold" style="background-image: url(./images/Andres_Logo_night.png); background-size: 300px; background-repeat: no-repeat; background-position: center;">
        <nav class="navbar" role="navigation" aria-label="main navigation" style="position:fixed; background-color:hsl(0, 0%, 4%);width: 100%;">
            <div class="navbar-brand">
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" class="navbar-menu" style="background-color:hsl(0, 0%, 4%)">
                <div class="navbar-start">
                    <a class="navbar-item" href = "#page">Home</a>
                    <a class="navbar-item" href = "#AM">About Me</a>
                    <a class="navbar-item" href = "#Photography">Photography</a>
                    <a class="navbar-item" href = "#Projects">Projects</a>
                    <a class="navbar-item" href = "#Resume">Resume</a>
                </div>
                <div class = "navbar-end"></div>
            </div>
        </nav>
        <div id = "container1">
            <p class = "moretext1">Welcome</p>
        </div>
    </section>
    <section class="section" id = "AM">
        <div class="container">
            <div class="content">
                <h1 class="title" style = "color:rgb(150,150,150);">Hello!</h1>
                <h5 class="subtitle has-text-weight-normal" style = "color:rgb(150,150,150);">-An Informal Introduction</h5>
                <p>My name is Andres Menjivar Jr. and I welcome you to my personal site! 
                    Currently, I am a junior studying Computer Science at The University of North Carolina at Chapel Hill. 
                    I am grateful to be a first generation student, with my older sibling being graduate of UNC-CH in 2016. 
                    Prior to university life, I was heavily focused in student government and had hobbies such as playing cello, digital art design, and mobile photography. 
                    These hobbies remain today along with my work on small projects (such as this), which show a snippet of my knowledge of the field. 
                    As this site continues to expand, I hope my work continues to express this.</p>
            </div>
        </div>
    </section>
    <div class = "break"></div>
    <section class="section" id = "Photography" >
        <div class = "container">
            <div class="content">
                <h1 class="title hideme" style = "color:rgb(150,150,150);">Photography</h1>
                <h5 class="subtitle has-text-weight-normal hideme" style = "color:rgb(150,150,150);">-I have come to develop a liking to strictly mobile photography, with these being some of my large collection. Enjoy!</h5>
                <div class="rows"> 
                    <div class="cols">
                    <img src="./images/bell_tower.jpg" style="width:100%">
                    <img src="./images/well.JPG" style="width:100%">
                    <img src="./images/n1.jpg" style="width:100%">
                    <img src="./images/blue_rose.JPG" style="width:100%">
                    <img src="./images/piano.JPG" style="width:100%">
                    <img src="./images/n5.jpg" style="width:100%">
                    </div>
                    <div class="cols">
                    <img src="./images/n2.jpg" style="width:100%">
                    <img src="./images/candle.GIF" style="width:100%">
                    <img src="./images/winter_blossom.jpg" style="width:100%">
                    <img src="./images/n3.jpg" style="width:100%">
                    <img src="./images/n4.jpg" style="width:100%">
                    </div>
                  </div>
            </div>
        </div>
    </section>
    <div class = "break"></div>
    <section class="section" id = "Projects">
        <div class="container">
            <div class="content">
                <h1 class="title" style = "color:rgb(150,150,150);">Projects</h1>
                <h5 class="subtitle has-text-weight-normal" style = "color:rgb(150,150,150);">-cool caption to be :)</h5>
                <p>Some projects I have personally enjoyed creating. Hope you enjoy!</p>
            </div>
            <div class="columns box has-text-centered" style = "background-color:transparent; border-radius:25px;">
                <div class="column">
                    <figure class="image">
                        <img src="./images/giphy-after.gif" style="width:100%; height:auto; margin:0 auto;">
                    </figure>
                    <h1 class="title" style = "color:rgb(150,150,150);">Designed and Created by:</h1>
                    <figure class="image">
                        <img src="../images/Andres_Logo_BlueBlack.png" style="width:33%;margin:0 auto;" alt="Team signoff">
                    </figure>
                    <strong>AMJ</strong>
                    <br>
                    Andres Menjivar
                    <br>
                </div>
                <div class="column">
                    <p> This is a custom <a href = "./2048/index.html">2048</a> which I created for COMP 426 Modern Web Programming. </p>
                    <p> Your controls will be your arrow keys and your objective is to reach 2048, represented by a carolina blue colored tile. Best of luck and hope you enjoy! </p>
                </div>
            </div>
            <div class="columns box has-text-centered" style = "color:rgb(150,150,150);background-color:transparent; border-radius:25px;">
                <div class="column">
                    <p> This is <a href = "https://kmps-spicy-9-adventure.herokuapp.com/">KMP'S Spicy 9 Adventure!</a> Play as either a Ketan Mayer Patel, 
                    the head of the Computer Science Dept. at UNC-CH, or as a UNC CS professor. 
                    The goal is to either collect all the sushi as KMP, or be a professor and stop him! 
                    Good luck and have fun!</p>
                    </div>
                <div class="column">
                    <figure class="image">
                        <img src="./images/gameplay_gif.gif" style="width:100%; height:auto; margin:0 auto;">
                    </figure>
                    <h1 class="title" style = "color:rgb(150,150,150);">Designed and Created by:</h1>
                    <figure class="image">
                        <img src="../images/team_signoff.png" style="width:33%;margin:0 auto;" alt="Team signoff">
                    </figure>
                    <strong>Spicy 9 Adventure</strong>
                    <br>
                    Nelson Lopez
                    <br>
                    Andres Menjivar
                    <br>
                    Samuel Miller
                    <br>
                    Alexander Harvey
                    <br>
                
                </div>
            </div>
            <div class="columns box has-text-centered" style = "color:rgb(150,150,150);background-color:transparent; border-radius:25px;">
                <div class="column">
                    <figure class="image">
                        <img src="./images/giphy-toast.gif" style="width:100%; height:auto; margin:0 auto;">
                    </figure>
                    <h1 class="title" style = "color:rgb(150,150,150);">Designed and Created by:</h1>
                    <figure class="image">
                        <img src="../images/UDS.png" style="width:33%;margin:0 auto;" alt="Team signoff">
                    </figure>
                    <strong>Under Development Studios</strong>
                    <br>
                    Andres Menjivar
                    <br>
                    Alexander Harvey
                    <br>
                    Nelson Lopez
                    <br>
                </div>
                <div class="column">
                    <p><a href = "./Element Demo.zip" download>ELEMENT Demo</a> is a single player, 2D game developed by myself and 4 others for Global Game Jam 2020. </p>
                    <p> You are Toastipher and your objective is to rescue your fellow kitchen utensil, the ice tray. Through rigorous trails, you encounter various ice creatures and your greatest foe, the Ice machine! Will you save Ice T. in time?</p>
                    <br>
                    <p class ="notification is-warning">This demo is a downloadable zip file (click the game title) To play the game, keep everything in the same file destination and run 'Element Demo'. Controls are arrow keys to move and left mouse click to fire toast.</p>
                </div>
            </div>
        </div>
    </section>
    <div class = "break"></div>
    <section class="section" id = "Resume">
        <div class="container">
            <div class="content">
                <h1 class="title" style = "color:rgb(150,150,150);">Resume</h1>
                <p>Will be posted soon -AMJ</p>
            </div>
        </div>
    </section>`
        $(elt).appendTo($root);
        $('head').append('<link rel="stylesheet" type="text/css" href="./css/night.css">');
    } else {
        let elt =`<section class="hero is-fullheight is-bold" style="background-image: url(./images/Andres_Logo_Day.png); background-size: 300px; background-repeat: no-repeat; background-position: center;">
        <nav class="navbar" role="navigation" aria-label="main navigation" style="position:fixed; background-color: #363636;width: 100%;">
            <div class="navbar-brand">
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" class="navbar-menu" style="background-color:#363636;">
                <div class="navbar-start">
                    <a class="navbar-item" href = "#page">Home</a>
                    <a class="navbar-item" href = "#AM">About Me</a>
                    <a class="navbar-item" href = "#Photography">Photography</a>
                    <a class="navbar-item" href = "#Projects">Projects</a>
                    <a class="navbar-item" href = "#Resume">Resume</a>
                </div>
                <div class = "navbar-end"></div>
            </div>
        </nav>
        <div id = "container">
            <span class = "text1">Welcome</span>
        </div>
    </section>
    <section class="section hideme" id = "AM">
        <div class="container">
            <div class="content">
                <h1 class="title" style = "color:black;">Hello!</h1>
                <h5 class="subtitle has-text-weight-normal" style = "color:black;">-An Informal Introduction</h5>
                <p>My name is Andres Menjivar Jr. and I welcome you to my personal site! 
                    Currently, I am a junior studying Computer Science at The University of North Carolina at Chapel Hill. 
                    I am grateful to be a first generation student, with my older sibling being graduate of UNC-CH in 2016. 
                    Prior to university life, I was heavily focused in student government and had hobbies such as playing cello, digital art design, and mobile photography. 
                    These hobbies remain today along with my work on small projects (such as this), which show a snippet of my knowledge of the field. 
                    As this site continues to expand, I hope my work continues to express this.</p>
            </div>
        </div>
    </section>
    <div class = "break"></div>
    <section class="section" id = "Photography">
        <div class = "container">
            <div class="content">
                <h1 class="title hideme" style = "color:black;">Photography</h1>
                <h5 class="subtitle has-text-weight-normal hideme" style = "color:black;">-I have come to develop a liking to strictly mobile photography, with these being some of my large collection. Enjoy!</h5>
                <div class="rows"> 
                    <div class="cols">
                        <img src="./images/bell_tower.jpg" style="width:100%">
                        <img src="./images/well.JPG" style="width:100%">
                        <img src="./images/n1.jpg" style="width:100%">
                        <img src="./images/blue_rose.JPG" style="width:100%">
                        <img src="./images/piano.JPG" style="width:100%">
                        <img src="./images/n5.jpg" style="width:100%">
                    </div>
                    <div class="cols">
                        <img src="./images/n2.jpg" style="width:100%">
                        <img src="./images/candle.GIF" style="width:100%">
                        <img src="./images/winter_blossom.jpg" style="width:100%">
                        <img src="./images/n3.jpg" style="width:100%">
                        <img src="./images/n4.jpg" style="width:100%">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class = "break"></div>
    <section class="section" id = "Projects">
                <div class="container">
                    <div class="content">
                        <h1 class="title" style = "color:black;">Projects</h1>
                        <h5 class="subtitle has-text-weight-normal" style = "color:black;">-cool caption to be :)</h5>
                        <p>Some projects I have personally enjoyed creating. Hope you enjoy!</p>
                    </div>
                    <div class="columns box has-text-centered" style = "background-color:transparent;">
                        <div class="column" style="color:black;">
                            <figure class="image">
                                <img src="./images/giphy-after.gif" style="width:100%; height:auto; margin:0 auto;">
                            </figure>
                            <h1 class="title"style="color:black;">Designed and Created by:</h1>
                    <figure class="image">
                        <img src="../images/Andres_Logo_BlueWhite.png" style="width:33%;margin:0 auto;" alt="Team signoff">
                    </figure>
                    <strong>AMJ</strong>
                    <br>
                    Andres Menjivar
                    <br>
                        </div>
                        <div class="column has-text-centered">
                            <p> This is a custom <a href = "./2048/index.html">2048</a> which I created for COMP 426 Modern Web Programming. </p>
                            <p> Your controls will be your arrow keys and your objective is to reach 2048, represented by a carolina blue colored tile. Best of luck and hope you enjoy! </p>
                        </div>
                    </div>
                    <div class="columns box has-text-centered" style = "background-color:transparent;">
                        <div class="column">
                            <p> This is <a href = "https://kmps-spicy-9-adventure.herokuapp.com/">KMP'S Spicy 9 Adventure!</a> Play as either a Ketan Mayer Patel, the head of the Computer Science Dept. at UNC-CH, or as a UNC CS professor. The goal is to either collect all the sushi as KMP, or be a professor and stop him! Good luck and have fun!</p>
                        </div>
                        <div class="column" style="color:black">
                            <figure class="image">
                                <img src="./images/gameplay_gif.gif" style="width:100%; height:auto; margin:0 auto;">
                            </figure>
                            <h1 class="title" style = "color:black;">Designed and Created by:</h1>
                    <figure class="image">
                        <img src="../images/team_signoff.png" style="width:33%;margin:0 auto;" alt="Team signoff">
                    </figure>
                    <strong>Spicy 9 Adventure</strong>
                    <br>
                    Nelson Lopez
                    <br>
                    Andres Menjivar
                    <br>
                    Samuel Miller
                    <br>
                    Alexander Harvey
                    <br>
                        </div>
                    </div>
                    <div class="columns box has-text-centered" style = "background-color:transparent;">
                        <div class="column" style=" color:black">
                            <figure class="image">
                                <img src="./images/giphy-toast.gif" style="width:100%; height:auto; margin:0 auto;">
                            </figure>
                            <figure class="image">
                        <img src="../images/UDS.png" style="width:33%;margin:0 auto;" alt="Team signoff">
                    </figure>
                    <strong>Under Development Studios</strong>
                    <br>
                    Andres Menjivar
                    <br>
                    Alexander Harvey
                    <br>
                    Nelson Lopez
                    <br>
                        </div>
                        <div class="column">
                            <p><a href = "./Element Demo.zip" download>ELEMENT Demo</a> is a single player, 2D game developed by myself and 4 others for Global Game Jam 2020. </p>
                            <p> You are Toastipher and your objective is to rescue your fellow kitchen utensil, the ice tray. Through rigorous trails, you encounter various ice creatures and your greatest foe, the Ice machine! Will you save Ice T. in time?</p>
                            <br>
                            <p class ="notification is-warning">This demo is a downloadable zip file (click the game title) To play the game, keep everything in the same file destination and run 'Element Demo'. Controls are arrow keys to move and left mouse click to fire toast.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div class = "break"></div>
            <section class="section" id = "Resume">
        <div class="container">
            <div class="content">
                <h1 class="title" style = "color:black;">Resume</h1>
                <h5 class="subtitle has-text-weight-normal"></h5>
                <p>Will be posted soon -AMJ</p>
            </div>
        </div>
    </section>`
        $(elt).appendTo($root);
        $('head').append('<link rel="stylesheet" type="text/css" href="./css/day.css">');
    }
}

$(function() {
    loadPage(currHour);
});

