
let theme = localStorage.getItem('theme');

if(theme == null) {
    setTheme('light');
}
else {
    setTheme(theme);
}

let themeDots = document.querySelectorAll('.theme-dot');

for(var i=0; i < themeDots.length; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode;
        console.log("Option clicked: " + mode);
        setTheme(mode);
    })
}

function setTheme(mode) {
    switch(mode) {
        case 'blue':
            document.querySelector('#theme-style').href = 'blue.css';
            break;
        case 'green':
            document.querySelector('#theme-style').href = 'green.css';
            break;
        case 'spooky':
            document.querySelector('#theme-style').href = 'spooky.css';
            break;
        default:
            document.querySelector('#theme-style').href = 'style.css';
    }

    localStorage.setItem('theme', mode);
}