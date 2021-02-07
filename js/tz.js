let currDate = new Date();
let currHour = currDate.getHours();

function loadHTML(){
    const $root = $('#page');
    let elt = 
        `<section id="welcome" class="hero is-fullheight is-bold" style="background-size: 300px; background-repeat: no-repeat; background-position: center;">
            <nav class="navbar" role="navigation" aria-label="main navigation" style="position:fixed;width: 100%;">
                <div class="navbar-brand">
                    <a id="burger" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" class="navbar-menu">
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
        <section class="section" id = "AM">
            <div class="container">
                <div class="content">
                    <h1 class="title" >Hello!</h1>
                    <h5 class="subtitle has-text-weight-normal">-An Informal Introduction</h5>
                    <p> My name is Andres Menjivar Jr. and I welcome you to my personal site! 
                        Currently, I am a junior studying Computer Science at The University of North Carolina at Chapel Hill. 
                        I am grateful to be a first generation student, with my older sibling being graduate of UNC-CH in 2016. 
                        Prior to university life, I was heavily focused in student government and had hobbies such as playing cello, digital art design, and mobile photography. 
                        These hobbies remain today along with my work on small projects (such as this), which show a snippet of my knowledge of the field. 
                        As this site continues to expand, I hope my work continues to express this.
                    </p>
                </div>
            </div>
        </section>
        <div class = "break"></div>
        <section class="section" id = "Photography" >
            <div class = "container">
                <div class="content">
                    <h1 class="title hideme">Photography</h1>
                    <h5 class="subtitle has-text-weight-normal hideme">-I have come to develop a liking to strictly mobile photography, with these being some of my large collection. Enjoy!</h5>
                    <div class="rows"> 
                        <div class="cols">
                            <img src="./images/bell_tower.jpg">
                            <img src="./images/well.JPG">
                            <img src="./images/n1.jpg">
                            <img src="./images/blue_rose.JPG">
                            <img src="./images/piano.JPG">
                            <img src="./images/n5.jpg">
                        </div>
                        <div class="cols">
                            <img src="./images/n2.jpg">
                            <img src="./images/candle.GIF">
                            <img src="./images/winter_blossom.jpg">
                            <img src="./images/n3.jpg">
                            <img src="./images/n4.jpg">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class = "break"></div>
        <section class="section" id = "Projects">
            <div class="container">
                <div class="content">
                    <h1 class="title">Projects</h1>
                    <h5 class="subtitle has-text-weight-normal">-cool caption to be :)</h5>
                    <p>Some projects I have personally enjoyed creating. Hope you enjoy!</p>
                </div>
                <div class="columns box has-text-centered" style = "background-color:transparent; border-radius:25px;">
                    <div class="column">
                        <figure class="image">
                            <img src="./images/giphy-after.gif" style="width:100%; height:auto; margin:0 auto;">
                        </figure>
                        <h1 class="title">Designed and Created by:</h1>
                        <figure class="image">
                            <img src="" id="me" style="width:33%;margin:0 auto;" alt="AMJ Logo">
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
                <div class="columns box has-text-centered" style = "background-color:transparent; border-radius:25px;">
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
                        <h1 class="title">Designed and Created by:</h1>
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
                <div class="columns box has-text-centered" style = "background-color:transparent; border-radius:25px;">
                    <div class="column">
                        <figure class="image">
                            <img src="./images/giphy-toast.gif" style="width:100%; height:auto; margin:0 auto;">
                        </figure>
                        <h1 class="title">Designed and Created by:</h1>
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
                        <p><a href = "../Element/ElementDemoVer3/index.html">ELEMENT Demo</a> is a single player, 2D game developed by myself and 4 others for Global Game Jam 2020. </p>
                        <p> You are Toastipher and your objective is to rescue your fellow kitchen utensil, the ice tray. Through rigorous trails, you encounter various ice creatures and your greatest foe, the Ice machine! Will you save Ice T. in time?</p>
                        <br>
                        <p id = "warning" class ="notification is-warning">
                            Not mobile friendly :(
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <div class = "break"></div>
        <section class="section" id = "Resume">
            <div class="container">
                <div class="content">
                    <h1 class="title">Resume</h1>
                    <div class ="resume_content box">
                        <h1 style="font-family: 'Raleway', sans-serif; color:rgb(28, 161, 132);">Andrés Menjívar, Jr.</h1>
                        <div class = "box">
                            <h2 style="font-family: 'Raleway', sans-serif; color:rgb(28, 161, 132);">Contact Information:</h2>
                            <address style="font-family: 'Raleway', sans-serif;">
                                <a href="mailto:menjivar.andres.j@unc.edu" style="color: rgb(40, 100, 190)">menjivar.andres.j@unc.edu</a><br>
                                <a href="mailto:andres25@unc.edu" style="color: rgb(40, 100, 190)">andres25@live.unc.edu</a><br>
                                <a href="https://www.linkedin.com/in/aboutmenjivar" style="color: rgb(40, 100, 190)">LinkedIn</a>
                            </address>    
                        </div>
                        <div class = "box">
                            <h2 style="font-family: 'Raleway', sans-serif; color:rgb(28, 161, 132);">Education:</h2>
                            <i class="fas fa-graduation-cap"><h3 style="font-size:97%;display:inline;font-family: 'Raleway">   Hugh M. Cummings High School</h3></i>
                            <ul>
                                <li>College-Prep Diploma </li>
                                <li>Completed: June 2018</li>
                                <li>Academic Honors: Valedictorian, Superintendent Award of Excellence</li>
                            </ul>
                            <i class="fas fa-university"><h3 style="font-size:97%;display:inline;font-family: 'Raleway"> University of North Carolina at Chapel Hill</h3></i>
                            <ul>
                                <li>Major: Computer Science</li>
                                <li>Expected Graduation: May 2022</li>
                                <li>Current GPA: 3.226</li>
                            </ul>  
                        </div>
                        <div class = "box">
                            <h2 style="font-family: 'Raleway', sans-serif; color:rgb(28, 161, 132);">Work Experience:</h2>
                            <i class="fas fa-briefcase"><h3 style="font-size:97%;display:inline;font-family: 'Raleway"> Sales Associate | Polo Ralph Lauren | June 2017-January 2021</h3></i>
                            <ul>
                                <li>Acknowledge all customers that enter store and ask open ended questions to fulfill needs.</li>
                                <li>Keep assigned sections clean and organized.</li>
                                <li>Communicate effectively with customers and other team members to maintain a positive work environment.</li>
                            </ul>
                            <i class="fas fa-briefcase"><h3 style="font-size:97%;display:inline;font-family: 'Raleway"> Cashier | Morehead Planetarium And Science Center | August 2018-March 2020</h3></i>
                            <ul>
                                <li>Acknowledge all customers that enter store and ask open ended questions to fulfill needs.</li>
                                <li>Keep gift shop clean, organized, and restocked.</li>
                                <li>Communicate effectively with customers and other team members to maintain a positive work environment.</li>
                            </ul>
                        </div>
                        <div class = "box">
                            <h2 style="font-family: 'Raleway', sans-serif; color:rgb(28, 161, 132);">Major and Additional Course Work for CS (BS):</h2>
                            <ul>
                                <li>COMP 401: Foundations of Programming </li>
                                <li>COMP 410: Data Structures</li>
                                <li>COMP 411: Computer Organization</li>
                                <li>COMP 426: Modern Web Programming</li>
                                <li>COMP 435: Security Concepts</li>
                                <li>COMP 521: Files and Databases</li>
                                <li>MATH 231: Calculus of Functions of One Variable I</li>
                                <li>MATH 232: Calculus of Functions of One Variable II</li>
                                <li>MATH 233: Multi Variable Calculus I</li>
                                <li>MATH 381: Discrete Mathematics</li>
                                <li>PHYS 118: Mechanics and Relativity</li>
                                <li>CHEM 101: General Descriptive Chemistry I</li>
                                <li>CHEM 101L: Quantitative Chemistry Laboratory I</li>
                            </ul>
                        </div>
                        <div class = "box">
                            <h2 style="font-family: 'Raleway', sans-serif; color:rgb(28, 161, 132);">Programming Languages:</h2>
                            <ul>
                                <li>Proficient in Java</li>
                                <li>Proficient in JavaScript</li>
                                <li>Proficient in HTML</li>
                                <li>Proficient in CSS</li>
                                <li>Proficient in SQLite</li>
                                <li>Proficient in TypeScript</li>
                                <li>Familiar with Python</li>
                                <li>Familiar with MongoDB</li>
                            </ul>
                        </div>
                        <div class = "box">
                            <h2 style="font-family: 'Raleway', sans-serif; color:rgb(28, 161, 132);">Interests and Activities:</h2>
                            <ul>
                                <li>Hugh M. Cummings High School Orchestra, 2014-­2018  </li>
                                <li>Hugh M. Cummings High School Science Fair, 2015, 2016</li>
                                <li>Blessed Sacrament Catholic Church Total Youth Ministries, 2014-2016</li>
                                <li>Student Advisory Council, 2016-2018</li>
                                <li>Student Government Association, 2016-2018</li>
                                <li>Key Club, 2016-2018</li>
                                <li>National Honors Society, 2017-2018</li>
                                <li>Hack NC, 2019</li>
                                <li>Quantum Hackathon, 2020</li>
                                <li>Global Game Jam, 2020</li>
                            </ul>
                        </div>
                        <div class = "box">
                            <h2 style="font-family: 'Raleway', sans-serif; color:rgb(28, 161, 132);">Volunteer Activities:</h2>
                            <ul>
                                <li>Carousel Festival, 2016</li>
                                <li>Toys for Tots, 2016</li>
                                <li>Kiwanis Club Pancake Day, 2017</li>
                                <li>FAFSA Night, 2018</li>
                                <li>Junior Night, 2018</li>
                            </ul>
                        </div>
                        <div class = "box">
                            <h2 style="font-family: 'Raleway', sans-serif; color:rgb(28, 161, 132);">Languages</h2>
                            <ul>
                                <li>Proficient in English and Spanish</li>
                            </ul>
                        </div>
                        <a href = "../downloads/Resume_Menjivar (Online).pdf" download style="font-family: 'Raleway', sans-serif; color:rgb(28, 161, 132);font-size:200%;">PDF of current Resume</a> 
                    </div>
                </div>
            </div>
        </section>`
    $(elt).appendTo($root);
}
function loadmode(hour){
    if (hour <=6 || hour>=18){
        $('head').append('<link rel="stylesheet" type="text/css" href="./css/night.css">');
        $('#welcome').css({"background-image": "url(./images/Andres_Logo_night.png)"});
        $('.navbar').css("background-color","hsl(0, 0%, 4%)");
        $('#navbarBasicExample').css("background-color","hsl(0, 0%, 4%)");
        $('section > div > div > h1, h5, p').css("color","rgb(150,150,150)");
        $('.moretext1').css("color","rgb(70,18,161)")
        $('.rows').css("background-image", 'url("../images/me_night.png")');
        $('#me').attr("src","../images/Andres_Logo_BlueBlack.png")
        $('.column > h1').css("color", "rgb(150,150,150)");
        $('.resume_content').css("background-color", "hsl(0,0%,4%)");
        $('.resume_content > .box').css("background-color", "hsl(0,0%,10%)");
    } else {
        $('head').append('<link rel="stylesheet" type="text/css" href="./css/day.css">');
        $('#welcome').css({"background-image": "url(./images/Andres_Logo_Day.png)"});
        $('.navbar').css("background-color","#363636");
        $('#navbarBasicExample').css("background-color","#363636");
        $('section > div > div > h1, h5, p').css("color","black");
        $('.moretext1').css("color","black")
        $('.rows').css("background-image", 'url("../images/me.png")');
        $('#me').attr("src","../images/Andres_Logo_BlueWhite.png")
        $('.column > h1').css("color", "black");
    }
    $("#warning").css("color","black");
}

function mobile (){
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i)  
        || navigator.userAgent.match(/iPad/i)  
        || navigator.userAgent.match(/iPod/i) 
        || navigator.userAgent.match(/BlackBerry/i) 
        || navigator.userAgent.match(/Windows Phone/i)) { 
            $('#welcome').css("background-size","75%");
            $('.text1').css("font-size","100px");
            $('#burger').css("zoom","300%");
            $('.navbar-item').css("font-size","300%");
            $('#AM').css("font-size","225%");
            $('#Photography').css("font-size","225%");
            $('.cols').css("zoom","35%");
            $('#Projects').css("font-size","225%");
            $('#Resume').css("font-size","225%");
            $('p').css("font-size","100%");
    }
}
$(function() {
    loadHTML();
    loadmode(currHour);
    mobile();
});

