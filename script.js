/*-------------------------------SCROLL--------------------------------*/

const button = document.querySelector(".scroll-button");

button.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

/*-------------------------------SCROLL--------------------------------*/

/*-------------------------------MENU-TOGGLE--------------------------------*/
let menuToggle = document.querySelector(".menu-toggle");
let header = document.querySelector("nav");
menuToggle.onclick = function () {
  header.classList.toggle("active");
};

/*-------------------------------MENU-TOGGLE--------------------------------*/
/*-------------------------------STICKYNAV--------------------------------*/

const navBar = document.getElementById("header-bottom-container");

const sticky = navBar.offsetTop;

function stickyNav() {
  if (window.scrollY >= sticky) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
}

/*-------------------------------STICKYNAV--------------------------------*/

/*-------------------------------OPINIONS--------------------------------*/

const comments = [
  {
    comment:
      "“Polecam! Interesujące wycieczki, dobrze zorganizowane z dbłością o każdy szczegół.”",
    avatar: "comments/user1.png",
    userName: "Jan Kowalski",
  },
  {
    comment:
      "“Dobrze spędzona wycieczka z rodziną. Najlepsza dla osób z gromadką dzieci.”",
    avatar: "comments/user2.png",
    userName: "Ilona Adamczuk",
  },
  {
    comment:
      "“Trasy dostosowane do umiejętności. Dogodne terminy. Organizacja bez zarzutu.“ ",
    avatar: "comments/user3.png",
    userName: "Marian Machnowski",
  },
  {
    comment: "“Najlepszy wypad w góry na jakim byłam! Polecam gorąco!”",
    avatar: "comments/user4.png",
    userName: "Honorata Sabik",
  },
  {
    comment: "“Lubię nowe wyzwania. Z Mountravel ich nie brakuje. ”",
    avatar: "comments/user5.png",
    userName: "Wojciech Nowak",
  },
];

function displayComment(index) {
  const slider = document.getElementById("comment");
  if (!slider) {
    return;
  }
  slider.innerHTML = `
    <div class="comment active">      
        <p>${comments[index].comment}</p>
        <img src="${comments[index].avatar}"alt="Avatar" />
        <p><b>${comments[index].userName}</b></p>
    </div>`;
}

let currentCommentIndex = 0;

function nextComment() {
  currentCommentIndex = (currentCommentIndex + 1) % comments.length;
  displayComment(currentCommentIndex);
}

function prevComment() {
  currentCommentIndex =
    (currentCommentIndex - 1 + comments.length) % comments.length;
  displayComment(currentCommentIndex);
}

displayComment(currentCommentIndex);

/*-------------------------------OPINIONS--------------------------------*/
