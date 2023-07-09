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
        profile_pic.style.zIndex = 2;
        scrollTimeout = setTimeout(() => {
            let threshold = 65;
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
            profile_pic.style.zIndex = 2;
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

const outerContainer = document.querySelector("#dex_bg");
const openModalButtons = document.querySelectorAll(".openModal");
const closes = document.querySelectorAll(".close-container");
const close_ability = document.querySelector("#close-ability");

openModalButtons.forEach((button) => {
  let ind = button.dataset.container;
  const container = document.querySelector("#container-" + String(ind));

  button.addEventListener("click", function() {
    document.querySelectorAll(".in-view").forEach((modal) => {
      modal.classList.remove("in-view");
    })
    container.classList.add("in-view");
    document.body.classList.add("shift-view");
    outerContainer.classList.add("filled");
  })
})

closes.forEach((close) => {
  close.addEventListener("click", function() {
    outerContainer.classList.remove("filled");
    document.body.classList.remove("shift-view");
    document.querySelectorAll(".in-view").forEach((modal) => {
      modal.classList.remove("in-view");
    })
  });
})

close_ability.addEventListener("click", function() {
  outerContainer.classList.remove("filled");
    document.body.classList.remove("shift-view");
    document.querySelectorAll(".in-view").forEach((modal) => {
      modal.classList.remove("in-view");
    })
    container.scrollTo(0, 0);
})






/*
var http = new XMLHttpRequest();

http.onreadystatechange = function() {
	if(http.readyState == 4 && http.status == 200) {
		var palette = JSON.parse(http.responseText).result;
	}
}

http.open("POST", url, true);
http.send(JSON.stringify(data));

let stuff = http.responseText;
console.log(stuff);
*/

async function colorize() {
  let darken = 0.6;
  let response1 = await fetch("https://colormind.io/api/", {
    method: "POST", 
    body: JSON.stringify({model : "ui"})
  });
  let data1 = await response1.json();
  console.log(data1);
  let colors = data1.result;

  let response2 = await fetch("https://colormind.io/api/", {
    method: "POST", 
    body: JSON.stringify({model : "default", input : colors}),
  });
  let data2 = await response2.json();
  console.log(data2);
  let pallette = data2.result;
  
  document.documentElement.style.setProperty('--light_shade', `rgb(${colors[0][0]}, ${colors[0][1]}, ${colors[0][2]})`);
  document.documentElement.style.setProperty('--light_accent', `rgb(${colors[1][0]}, ${colors[1][1]}, ${colors[1][2]})`);
  document.documentElement.style.setProperty('--main_brand', `rgb(${colors[2][0]}, ${colors[2][1]}, ${colors[2][2]})`);
  document.documentElement.style.setProperty('--dark_accent', `rgb(${colors[3][0]}, ${colors[3][1]}, ${colors[3][2]})`);
  document.documentElement.style.setProperty('--dark_accent_thin', `rgb(${colors[3][0]}, ${colors[3][1]}, ${colors[3][2]}, 0.8)`);
  document.documentElement.style.setProperty('--dark_shade', `rgb(${colors[4][0]}, ${colors[4][1]}, ${colors[4][2]})`);

  for (let i = 1; i < 5; i++) {
    document.documentElement.style.setProperty(`--pallette-${i}`, `rgb(${pallette[i][0] * darken}, ${pallette[i][1] * darken}, ${pallette[i][2] * darken})`);
  }
}

colorize();