const btn = document.querySelector(".btn");
console.log(btn);
const pic = document.querySelector(".pic");
console.log(pic);

function fetchRandomDog() {
  const url = "https://dog.ceo/api/breeds/image/random";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      pic.innerHTML = `
<img src=${data.message}>
`;
    });
}

btn.addEventListener("click", () => {
  fetchRandomDog();
});
