const memeGeneratorBtn = document.querySelector(".meme__generator-btn");
const memeGeneratorTitle = document.querySelector(".meme__generator-title");
const memeGeneratorAuthor = document.querySelector(".meme__generator-author");
const memeImage = document.querySelector(".meme__generator img");

const updateDetails = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeGeneratorTitle.innerHTML = title;
  memeGeneratorAuthor.innerHTML = `Meme by ${author}`;
};

const generateMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    });
};

memeGeneratorBtn.addEventListener("click", generateMeme);

// memeGeneratorTitle.style.margin = "20px";
// memeGeneratorTitle.style.margin = "20px";
