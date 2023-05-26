const submit = document.querySelector("#submit-color");

/*
let col_dict = {
    "blue": ["#CFDEF0", "#7F94CA", "#5583E6", "#3D589A", "#353FA4"],
    "green": ["#F4F2F3", "#858B6C", "#B19377", "#40727A", "#405523"],
    "light": ["#F4F8F5", "#F0B145", "#C86979", "#28B2DF", "#2A4158"],
    "spooky": ["#F4F2EE", "#E7A56D", "#E8613B", "#958A91", "#45343A"],
    'Serene Breeze: A calming combination of pale blue and soft white.': ['#E6E1BB', '#4DC4C1', '#0DB0C4', '#17788D', '#0B1727'], 
    'Golden Harvest: Warm hues of gold, burnt orange, and amber.': ['#FBE6D1', '#F3B77E', '#E5943B', '#A15E26', '#663513'], 
    'Twilight Mist: Muted shades of purples and grays, evoking a sense of mystery.': ['#EDECF2', '#BEBDD7', '#7E7AAE', '#544F82', '#312C56'], 
    'Coral Bliss: Vibrant coral mixed with delicate pastel tones.': ['#FCEDE9', '#F8B4A9', '#F27463', '#B74D41', '#742F26'], 
    'Forest Whispers: A rich blend of deep greens and earthy browns.': ['#E7EEDD', '#A4BFA1', '#527D4E', '#345A34', '#203A20'], 
    'Duskfire: Fiery oranges, deep purples, and smoky grays reminiscent of a sunset.': ['#F3E4E9', '#D096A9', '#A84966', '#822C47', '#53172B'], 
    'Oceanic Dreams: Cool blues and greens inspired by the depths of the sea.': ['#E4F2F6', '#A2D5E0', '#47A9BB', '#287F92', '#154E5D'], 
    'Cinnamon Spice: A warm palette featuring shades of cinnamon, nutmeg, and ginger.': ['#F8ECEA', '#F0B9B1', '#E17C6C', '#A85042', '#662D28'], 
    'Citrus Zest: A refreshing combination of zesty yellows and tangy oranges.': ['#FBF6E2', '#F6D592', '#F0A500', '#B57300', '#734A00'], 
    'Misty Lilac: Soft shades of lilac and lavender with a hint of gray.': ['#EDE7F0', '#C0A6D0', '#8D5FA1', '#61407A', '#3A274E'], 
    'Rustic Charm: Warm, rustic tones of terracotta, mustard, and weathered wood.': ['#F7EFE3', '#DFB88C', '#B86D3B', '#874B25', '#562D16'], 
    'Silver Lining: A sophisticated blend of silvers, grays, and subtle hints of blue.': ['#EDEFF4', '#C1C8D5', '#969EB8', '#6C7392', '#454C6F'], 
    'Meadow Glow: Bright pops of green, yellow, and pink like a vibrant meadow.': ['#E9F4E6', '#A5D9A1', '#5ABF5A', '#3C8C3C', '#225B22'], 
    'Enchanted Forest: Deep emerald greens, mossy browns, and magical splashes of gold.': ['#E2E8DF', '#9DB79D', '#4E8E52', '#336B39', '#1F4822'], 
    'Chocolate Truffle: Indulgent shades of rich, dark brown and velvety cocoa.': ['#E7E1DB', '#BFAFA5', '#80645A', '#594037', '#33221D'], 
    'Autumn Symphony: A symphony of warm oranges, deep reds, and golden yellows.': ['#F2E8DD', '#D5BFAE', '#B88461', '#8F593A', '#642F1D'], 
    'Cotton Candy Delight: Sweet pastel pinks, blues, and purples reminiscent of cotton candy.': ['#F7E8ED', '#DFB8CB', '#A15E85', '#822C54', '#531633'], 
    'Desert Oasis: A desert-inspired palette featuring sandy beiges, dusty pinks, and muted blues.': ['#F2EBE5', '#D5BCB1', '#B8866D', '#8F5947', '#642F28'], 
    'Mystic Moonlight: Mysterious shades of midnight blue, silver, and deep purple.': ['#EDE6EA', '#C0B1C0', '#8D678D', '#614261', '#3A253A'], 
    'Sun-kissed Sands: A warm blend of sandy beige, golden tan, and sun-kissed yellow': ['#F5F2E6', '#DAD6B7', '#BFB883', '#8F8B59', ' #64632F']
};
*/
let col_dict = {
    "blue": ["#CFDEF0", "#7F94CA", "#5583E6", "#3D589A", "#353FA4"],
    "green": ["#F4F2F3", "#858B6C", "#B19377", "#40727A", "#405523"],
    "light": ["#F4F8F5", "#F0B145", "#C86979", "#28B2DF", "#2A4158"],
    "spooky": ["#F4F2EE", "#E7A56D", "#E8613B", "#958A91", "#45343A"],
    'Serene Breeze: A calming combination of pale blue and soft white.': ['#FAFAF9', '#C1D6D7', '#9DCBC8', '#A5A7AA', '#5C8FC3'], 
    'Golden Harvest: Warm hues of gold, burnt orange, and amber.': ['#F6F8F6', '#D7C3AC', '#F37D53', '#CBA830', '#795441'], 
    'Twilight Mist: Muted shades of purples and grays, evoking a sense of mystery.': ['#ECEBEA', '#8B7B6E', '#7A6473', '#766980', '#1D1E25'],
    'Coral Bliss: Vibrant coral mixed with delicate pastel tones.': ['#EAE8E5', '#7171A4', '#C6767D', '#885364', '#36314B'], 
    'Forest Whispers: A rich blend of deep greens and earthy browns.': ['#EFF0EC', '#96A729', '#A7A596', '#745B41', '#215C33'], 
    'Duskfire: Fiery oranges, deep purples, and smoky grays reminiscent of a sunset.': ['#F5F5F2', '#8877BB', '#F58823', '#A46551', '#433A48'], 
    'Oceanic Dreams: Cool blues and greens inspired by the depths of the sea.': ['#EEE9E9', '#A4A36A', '#8EAED5', '#837779', '#13796B'], 
    'Cinnamon Spice: A warm palette featuring shades of cinnamon, nutmeg, and ginger.': ['#E8EAE2', '#7E7B7D', '#E53826', '#7C2A34', '#271320'], 
    'Citrus Zest: A refreshing combination of zesty yellows and tangy oranges.': ['#F9F9FA', '#B0B4BE', '#E7C0A2', '#B8A1A9', '#E27225'], 
    'Misty Lilac: Soft shades of lilac and lavender with a hint of gray.': ['#E7E3DF', '#969395', '#9F3F59', '#8E8C8D', '#4F3675'], 
    'Rustic Charm: Warm, rustic tones of terracotta, mustard, and weathered wood.': ['#F5F4EF', '#B0A190', '#E1A94D', '#968173', '#875E37'], 
    'Silver Lining: A sophisticated blend of silvers, grays, and subtle hints of blue.': ['#FCFBFB', '#BDC5C5', '#8EC0D3', '#BBBEC4', '#8C8E9F'], 
    'Meadow Glow: Bright pops of green, yellow, and pink like a vibrant meadow.': ['#FAFAFB', '#DDD3A9', '#EBC953', '#E89394', '#79AD90'], 
    'Enchanted Forest: Deep emerald greens, mossy browns, and magical splashes of gold.': ['#F9F9FA', '#A5A9A8', '#DAA645', '#8E611C', '#255036'], 
    'Chocolate Truffle: Indulgent shades of rich, dark brown and velvety cocoa.': ['#F6F6F5', '#BA8B66', '#C7A98B', '#927C74', '#582E1C'], 
    'Autumn Symphony: A symphony of warm oranges, deep reds, and golden yellows.': ['#EEEFE5', '#F0967C', '#E5A885', '#BF8C84', '#DE5C38'], 
    'Cotton Candy Delight: Sweet pastel pinks, blues, and purples reminiscent of cotton candy.': ['#F4F5F3', '#885DBC', '#56C3CB', '#A9526A', '#31485F'], 
    'Desert Oasis: A desert-inspired palette featuring sandy beiges, dusty pinks, and muted blues.': ['#F1F3F7', '#E27984', '#567080', '#9B8F7A', '#736C67'], 
    'Mystic Moonlight: Mysterious shades of midnight blue, silver, and deep purple.': ['#FAF9FA', '#9F9F9F', '#34A8D9', '#7A2491', '#223C73'], 
    'Sun-kissed Sands: A warm blend of sandy beige, golden tan, and sun-kissed yellow': ['#FAF9FB', '#DCC7AF', '#E4B54A', '#858C75', ' #AB761C']
};

let theme = localStorage.getItem('theme');

setTheme(theme);

let themeDots = document.querySelectorAll('.theme-dot');

for(var i=0; i < themeDots.length; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode;
        //console.log("Option clicked: " + mode);
        setTheme(mode);
    })
}

async function handleSearch(s){
    if (s) {
        let queryResults = `https://kalamojo.pythonanywhere.com/api4?search=${s}`;
        const response = await fetch(queryResults);
        const responseJson = await response.json();
        console.log(s, responseJson);
        setTheme(responseJson[1]);
        //place.innerText = responseJson[1][1] + "!";
        //description.innerText = responseJson[1][0];
    }
}


submit.addEventListener('click', (event) => {
    event.preventDefault();
	handleSearch(document.querySelector("#searchBox").value);
})

/*
function handleSearch() {
    let searchText = document.querySelector("#searchBox").value;
    setTheme(searchText);
}
*/

function setTheme(mode) {
    //mode = "Desert Oasis: A desert-inspired palette featuring sandy beiges, dusty pinks, and muted blues.";
    if (mode == null || !(mode in col_dict)) {
        mode = 'spooky';
    }
    let colors = col_dict[mode];
    /*
    switch(mode) {
        case 'blue':
            document.querySelector('#theme-style').href = 'blue.css';
            break;
        case 'green':
            document.querySelector('#theme-style').href = 'green.css';
            break;
        case 'light':
            document.querySelector('#theme-style').href = 'style.css';
            break;
        default:
            document.querySelector('#theme-style').href = 'spooky.css';
    }
    */
    document.documentElement.style.setProperty('--light_shade', colors[0]);
    document.documentElement.style.setProperty('--light_accent', colors[1]);
    document.documentElement.style.setProperty('--main_brand', colors[2]);
    document.documentElement.style.setProperty('--dark_accent', colors[3]);
    document.documentElement.style.setProperty('--dark_shade', colors[4]);

    localStorage.setItem('theme', mode);
}

/*
$(function() {
    $(".fiction").sortable({
        update: function(event, ui) {
                getIdsOfImages();
            } //end update       
    });
});

function getIdsOfImages() {
    var values = [];
    $('.fic-item').each(function(index) {
        values.push($(this).attr("id")
                    .replace("imageNo", ""));
    });
}

$(function() {
    $(".nonfiction").sortable({
        update: function(event, ui) {
                getIdsOfImages();
            } //end update       
    });
});

function getIdsOfImages() {
    var values = [];
    $('.nonfic-item').each(function(index) {
        values.push($(this).attr("id")
                    .replace("imageNo", ""));
    });
}
*/