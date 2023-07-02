const container = document.querySelector('#blockade');
const pages = document.querySelectorAll('.blocks');
const playButton = document.querySelector('.play');
const audioPlayer = document.querySelector('#sound1');
const profile_pic = document.querySelector("#profile-holder");

playButton.addEventListener('click', togglePlayback);

audioPlayer.addEventListener('play', () => {
  playButton.classList.add('paused');
});

audioPlayer.addEventListener('pause', () => {
  playButton.classList.remove('paused');
});

function togglePlayback() {
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
}



container.addEventListener('scroll', synchronizeScroll);

function synchronizeScroll() {
  const activePageIndex = Math.round(container.scrollLeft / container.offsetWidth);
  const activePage = pages[activePageIndex];

  pages.forEach((page, index) => {
    if (index !== activePageIndex) {
      page.scrollTop = activePage.scrollTop;
    }
  });
}

let scrollTimeout;
pages.forEach((page, index) => {
    page.addEventListener('scroll', handleScroll);
    function handleScroll() {
        clearTimeout(scrollTimeout);
        profile_pic.style.zIndex = 1;
        scrollTimeout = setTimeout(() => {
            let threshold = 75;
            if (document.documentElement.clientWidth < 950) {
                threshold = 20
            }
      
          // Perform actions with the scroll position of the active page
          const scrollPosition = page.scrollTop;
          if (scrollPosition > threshold) {
            profile_pic.style.opacity = 0;
            setTimeout(() => {
              profile_pic.style.zIndex = 0;
            }, 200);
          }
          else {
            profile_pic.style.opacity = 1
            profile_pic.style.zIndex = 1;
          }
          console.log('Scroll position:', scrollPosition);
      
          // Add your custom code here to handle the scroll position
      
        }, 200); // Adjust the timeout duration as needed
      }
});





// Modal Stuff
/*
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");
const modalContainer = document.getElementById("modalContainer");

openModalButton.addEventListener("click", function() {
  //modalContainer.style.display = "block";
  modalContainer.style.top = "0";
});

closeModalButton.addEventListener("click", function() {
  //modalContainer.style.display = "none";
  modalContainer.style.top = "105%";
});
*/

const outerContainer = document.querySelector("#dex_bg_outer");
const openModalButtons = document.querySelectorAll(".openModal");
openModalButtons.forEach((button) => {
  let ind = button.dataset.container;
  const container = document.querySelector("#container-" + String(ind));
  const close = document.querySelector("#close-" + String(ind));

  button.addEventListener("click", function() {
    document.querySelectorAll(".in-view").forEach((modal) => {
      modal.classList.remove("in-view");
    })
    container.classList.add("in-view");
    document.body.classList.add("shift-view");
    outerContainer.classList.add("filled");
  })

  close.addEventListener("click", function() {
    //modalContainer.style.display = "none";
    //container.style.top = "105%";
    //container.classList.remove("in-view");
    outerContainer.classList.remove("filled");
    document.body.classList.remove("shift-view");
    document.querySelectorAll(".in-view").forEach((modal) => {
      modal.classList.remove("in-view");
    })
  });
})




/*
const submit = document.querySelector("#submit-color");

let col_dict = {
    "blue": ["#CFDEF0", "#7F94CA", "#5583E6", "#3D589A", "#353FA4"],
    "green": ["#F4F2F3", "#858B6C", "#B19377", "#40727A", "#405523"],
    "light": ["#F4F8F5", "#F0B145", "#C86979", "#28B2DF", "#2A4158"],
    "spooky": ["#F4F2EE", "#E7A56D", "#E8613B", "#958A91", "#45343A"],
    'A calming combination of pale blue and soft white.': ['#FAFAF9', '#C1D6D7', '#9DCBC8', '#A5A7AA', '#5C8FC3', 'Serene Breeze'], 
    'Warm hues of gold, burnt orange, and amber.': ['#F6F8F6', '#D7C3AC', '#F37D53', '#CBA830', '#795441', 'Golden Harvest'], 
    'Muted shades of purples and grays, evoking a sense of mystery.': ['#ECEBEA', '#8B7B6E', '#7A6473', '#766980', '#1D1E25', 'Twilight Mist'],
    'Vibrant coral mixed with delicate pastel tones.': ['#EAE8E5', '#7171A4', '#C6767D', '#885364', '#36314B', 'Coral Bliss'], 
    'A rich blend of deep greens and earthy browns.': ['#EFF0EC', '#96A729', '#A7A596', '#745B41', '#215C33', 'Forest Whispers'], 
    'Fiery oranges, deep purples, and smoky grays reminiscent of a sunset.': ['#F5F5F2', '#8877BB', '#F58823', '#A46551', '#433A48', 'Duskfire'], 
    'Cool blues and greens inspired by the depths of the sea.': ['#EEE9E9', '#A4A36A', '#8EAED5', '#837779', '#13796B', 'Oceanic Dreams'], 
    'A warm palette featuring shades of cinnamon, nutmeg, and ginger.': ['#E8EAE2', '#7E7B7D', '#E53826', '#7C2A34', '#271320', 'Cinnamon Spice'], 
    'A refreshing combination of zesty yellows and tangy oranges.': ['#F9F9FA', '#B0B4BE', '#E7C0A2', '#B8A1A9', '#E27225', 'Citrus Zest'], 
    'Soft shades of lilac and lavender with a hint of gray.': ['#E7E3DF', '#969395', '#9F3F59', '#8E8C8D', '#4F3675', 'Misty Lilac'], 
    'Warm, rustic tones of terracotta, mustard, and weathered wood.': ['#F5F4EF', '#B0A190', '#E1A94D', '#968173', '#875E37', 'Rustic Charm'], 
    'A sophisticated blend of silvers, grays, and subtle hints of blue.': ['#FCFBFB', '#BDC5C5', '#8EC0D3', '#BBBEC4', '#8C8E9F', 'Silver Lining'], 
    'Bright pops of green, yellow, and pink like a vibrant meadow.': ['#FAFAFB', '#DDD3A9', '#EBC953', '#E89394', '#79AD90', 'Meadow Glow'], 
    'Deep emerald greens, mossy browns, and magical specs of gold.': ['#F9F9FA', '#A5A9A8', '#DAA645', '#8E611C', '#255036', 'Enchanted Forest'], 
    'Indulgent shades of rich, dark brown and velvety cocoa.': ['#F6F6F5', '#BA8B66', '#C7A98B', '#927C74', '#582E1C', 'Chocolate Truffle'], 
    'A symphony of warm oranges, deep reds, and golden yellows.': ['#EEEFE5', '#F0967C', '#E5A885', '#BF8C84', '#DE5C38', 'Autumn Symphony'], 
    'Sweet pastel pinks, blues, and purples reminiscent of cotton candy.': ['#F4F5F3', '#885DBC', '#56C3CB', '#A9526A', '#31485F', 'Cotton Candy Delight'], 
    'A desert-inspired palette featuring sandy beiges, dusty pinks, and muted blues.': ['#F1F3F7', '#E27984', '#567080', '#9B8F7A', '#736C67', 'Desert Oasis'], 
    'Mysterious shades of midnight blue, silver, and deep purple.': ['#FAF9FA', '#9F9F9F', '#34A8D9', '#7A2491', '#223C73', 'Mystic Moonlight'], 
    'A warm blend of sandy beige, golden tan, and sun-kissed yellow': ['#FAF9FB', '#DCC7AF', '#E4B54A', '#858C75', ' #AB761C', 'Sun-kissed Sands']
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
        console.log(s, col_dict[responseJson[1]][5], responseJson[0]);
        setTheme(responseJson[1]);
    }
}


submit.addEventListener('click', (event) => {
    event.preventDefault();
	handleSearch(document.querySelector("#searchBox").value);
})

function setTheme(mode) {
    //mode = "Desert Oasis: A desert-inspired palette featuring sandy beiges, dusty pinks, and muted blues.";
    if (mode == null || !(mode in col_dict)) {
        mode = 'spooky';
    }
    let colors = col_dict[mode];
    //let colors = ['#FAF9FA', '#C2C7FA', '#E7A8B4', '#E3E5B8', '#C7E1B5'];
    console.log(colors);

    document.documentElement.style.setProperty('--light_shade', colors[0]);
    document.documentElement.style.setProperty('--light_shade_thin', colors[0] + "CC");
    document.documentElement.style.setProperty('--light_accent', colors[1]);
    document.documentElement.style.setProperty('--main_brand', colors[2]);
    document.documentElement.style.setProperty('--main_brand_thin', colors[2] + "33");
    document.documentElement.style.setProperty('--dark_accent', colors[3]);
    document.documentElement.style.setProperty('--dark_shade', colors[4]);

    localStorage.setItem('theme', mode);
}
*/