let currDate = new Date();
let currHour = currDate.getHours();

function loadPage(hour){
    const $root = $('#page');
    if (hour>18){
        $('#page').attr("style","background-color:hsl(0, 0%, 4%)");
        let elt = `<section class="hero is-fullheight is-black is-bold" style="background-image: url(./images/amj_site_night.png); background-size: contain; background-repeat: no-repeat; background-position: center;">
        <nav class="navbar" role="navigation" aria-label="main navigation" style="position:fixed; background-color:hsl(0, 0%, 4%);width: 100%;">
            <div class="navbar-brand">
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
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
                    <a class="navbar-item">Projects</a>
                    <a class="navbar-item">Resume</a>
                </div>
                <div class = "navbar-end"></div>
            </div>
        </nav>
        <div id = "container1">
            <p class = "moretext1">Welcom<span id = "E" style="color:hsl(0, 0%, 9%)">e</span></p>
            <p class = "moretext2">to after hours management</p>
        </div>
    </section>
    <section class="section" style = "background-color:hsl(0, 0%, 4%)" id = "AM">
        <div class="container">
            <div class="content">
                <h1 class="title">Hello!</h1>
                <h5 class="subtitle has-text-weight-normal">-An Informal Introduction</h5>
                <p>My name is Andres Menjivar Jr. and I welcome you to my personal site! 
                    Currently, I am a junior studying Computer Science at The University of North Carolina at Chapel Hill. 
                    I am grateful to be a first generation student, with my older sibling being graduate of UNC-CH in 2016. 
                    Prior to university life, I was heavily focused in student government and had hobbies such as playing cello, digital art design, and mobile photography. 
                    These hobbies remain today along with my work on small projects (such as this), which show a snippet of my knowledge of the field. 
                    As this site continues to expand, I hope my work continues to express this.</p>
            </div>
        </div>
    </section>
    <section class="section" id = "Photography">
        <div class = "container">
            <div class="content">
                <h1 class="title hideme">Photography</h1>
                <h5 class="subtitle has-text-weight-normal hideme">-I have come to develop a liking to strictly mobile photography, with these being some of my large collection. Enjoy!</h5>
                <div class="columns has-text-centered">
                    <div class="column">
                        <figure class="image">
                            <img src="./images/bell_tower.jpg" style="width:100%; height:auto; margin:0 auto;" alt="Tutorial Gif">
                        </figure>
                        <h4 class = "subtitle has-text-weight-normal hideme">UNC Bell Tower</h4>
                    </div>
                    <div class="column">
                        <figure class="image">
                            <img src="./images/well.JPG" style="width:100%; height:auto; margin:0 auto;" alt="Tutorial Gif">
                        </figure>
                        <h4 class = "subtitle has-text-weight-normal hideme">First Day a Tarheel!</h4>
                    </div>
                </div>
                <div class="columns has-text-centered">
                    <div class="column">
                        <figure class="image">
                            <img src="./images/blue_rose.JPG" style="width:100%; height:auto; margin:0 auto;" alt="Tutorial Gif">
                        </figure>
                        <h4 class = "subtitle has-text-weight-normal hideme">Spring Blues</h4>
                    </div>
                    <div class="column">
                        <figure class="image">
                            <img src="./images/piano.JPG" style="width:100%; height:auto; margin:0 auto;" alt="Tutorial Gif">
                        </figure>
                        <h4 class = "subtitle has-text-weight-normal hideme">Musicians code</h4>
                    </div>
                </div>
                <div class="columns has-text-centered">
                    <div class="column">
                        <figure class="image">
                            <img src="./images/clock.jpg" style="width:100%; height:auto; margin:0 auto;" alt="Tutorial Gif">
                        </figure>
                        <h4 class = "subtitle has-text-weight-normal hideme">Clockwork</h4>
                    </div>
                    <div class="column">
                        <figure class="image">
                            <img src="./images/nightlight.jpg" style="width:100%; height:auto; margin:0 auto;" alt="Tutorial Gif">
                        </figure>
                        <h4 class = "subtitle has-text-weight-normal hideme">Night Walker</h4>
                    </div>
                </div>
                <div class="columns has-text-centered">
                    <div class="column">
                        <figure class="image">
                            <img src="./images/candle.GIF" style="width:100%; height:auto; margin:0 auto;" alt="Tutorial Gif">
                        </figure>
                        <h4 class = "subtitle has-text-weight-normal hideme">Night Light</h4>
                    </div>
                    <div class="column">
                        <figure class="image">
                            <img src="./images/winter_blossom.jpg" style="width:100%; height:auto; margin:0 auto;" alt="Tutorial Gif">
                        </figure>
                        <h4 class = "subtitle has-text-weight-normal hideme">Winter Blossom</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class = "container">
        <div class = "hideme box" style = "background-color:hsl(0, 0%, 4%)">
            <p>Currently, this is under the works, but feel free to play my custom <a href = "./2048/index.html">2048</a> :)</p>
        </div>
    </section>`
        $(elt).appendTo($root);
    } else {
        let elt =`<section class="hero is-fullheight is-dark is-bold" style="background-image: url(./images/amj_site.png); background-size: contain; background-repeat: no-repeat; background-position: center;">
        <nav class="navbar" role="navigation" aria-label="main navigation" style="position:fixed; background-color: #363636;width: 100%;">
            <div class="navbar-brand">
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
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
                    <a class="navbar-item">Projects</a>
                    <a class="navbar-item">Resume</a>
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
                <h1 class="title">Hello!</h1>
                <h5 class="subtitle has-text-weight-normal">-An Informal Introduction</h5>
                <p>My name is Andres Menjivar Jr. and I welcome you to my personal site! 
                    Currently, I am a junior studying Computer Science at The University of North Carolina at Chapel Hill. 
                    I am grateful to be a first generation student, with my older sibling being graduate of UNC-CH in 2016. 
                    Prior to university life, I was heavily focused in student government and had hobbies such as playing cello, digital art design, and mobile photography. 
                    These hobbies remain today along with my work on small projects (such as this), which show a snippet of my knowledge of the field. 
                    As this site continues to expand, I hope my work continues to express this.</p>
            </div>
        </div>
    </section>
    <section class="section" id = "Photography">
        <div class = "container">
            <div class="content">
                <h1 class="title hideme">Photography</h1>
                <h5 class="subtitle has-text-weight-normal hideme">-I have come to develop a liking to strictly mobile photography, with these being some of my large collection. Enjoy!</h5>
                <div class="columns has-text-centered">
                    <div class="column">
                        <figure class="image">
                            <img src="./images/bell_tower.jpg" style="width:100%; height:auto; margin:0 auto;" alt="Tutorial Gif">
                        </figure>
                        <h4 class = "subtitle has-text-weight-normal hideme">UNC Bell Tower</h4>
                    </div>
                    <div class="column">
                        <figure class="image">
                            <img src="./images/well.JPG" style="width:100%; height:auto; margin:0 auto;" alt="Tutorial Gif">
                        </figure>
                        <h4 class = "subtitle has-text-weight-normal hideme">First Day a Tarheel!</h4>
                    </div>
                </div>
                <div class="columns has-text-centered">
                    <div class="column">
                        <figure class="image">
                            <img src="./images/blue_rose.JPG" style="width:100%; height:auto; margin:0 auto;" alt="Tutorial Gif">
                        </figure>
                        <h4 class = "subtitle has-text-weight-normal hideme">Spring Blues</h4>
                    </div>
                    <div class="column">
                        <figure class="image">
                            <img src="./images/piano.JPG" style="width:100%; height:auto; margin:0 auto;" alt="Tutorial Gif">
                        </figure>
                        <h4 class = "subtitle has-text-weight-normal hideme">Musicians code</h4>
                    </div>
                </div>
                <div class="columns has-text-centered">
                    <div class="column">
                        <figure class="image">
                            <img src="./images/clock.jpg" style="width:100%; height:auto; margin:0 auto;" alt="Tutorial Gif">
                        </figure>
                        <h4 class = "subtitle has-text-weight-normal hideme">Clockwork</h4>
                    </div>
                    <div class="column">
                        <figure class="image">
                            <img src="./images/nightlight.jpg" style="width:100%; height:auto; margin:0 auto;" alt="Tutorial Gif">
                        </figure>
                        <h4 class = "subtitle has-text-weight-normal hideme">Night Walker</h4>
                    </div>
                </div>
                <div class="columns has-text-centered">
                    <div class="column">
                        <figure class="image">
                            <img src="./images/candle.GIF" style="width:100%; height:auto; margin:0 auto;" alt="Tutorial Gif">
                        </figure>
                        <h4 class = "subtitle has-text-weight-normal hideme">Night Light</h4>
                    </div>
                    <div class="column">
                        <figure class="image">
                            <img src="./images/winter_blossom.jpg" style="width:100%; height:auto; margin:0 auto;" alt="Tutorial Gif">
                        </figure>
                        <h4 class = "subtitle has-text-weight-normal hideme">Winter Blossom</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class = "container">
        <div class = "hideme box">
            <p style="color:black;">Currently, this is under the works, but feel free to play my custom <a href = "./2048/index.html">2048</a> :)</p>
        </div>
    </section>`
    $(elt).appendTo($root);
    }
}

$(function() {
    loadPage(currHour);
});

