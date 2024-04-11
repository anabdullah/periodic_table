let cells = document.querySelectorAll(".element");
let infoScreen = document.querySelector('.info-screen');

cells.forEach((cell, index) => {
  let elemNumber = cell.getAttribute("data-element");
  cell.textContent = data[elemNumber - 1].symbol;
  if (data[elemNumber - 1].type == "Metal") {
    cell.classList.add("metal");
  }
  if (data[elemNumber - 1].type == "Non-metal") {
    cell.classList.add("nonmetal");
  }
  if (data[elemNumber - 1].type == "Metalloid") {
    cell.classList.add("metalloid");
  }
  cells[index].innerHTML += `
<div class="floater">
<h1>${data[elemNumber - 1].symbol}</h1>
<p>${data[elemNumber - 1].name}</p>
<p>${data[elemNumber - 1].atomic_number}</p>
</div>
`;

  cell.addEventListener("mouseenter", (e) => {
    cell.querySelector(".floater").style.display = "flex";
  });

  cell.addEventListener("mouseleave", (e) => {
    cell.querySelector(".floater").style.display='none'
  });

  cell.onclick=()=>{
    infoScreen.style.display='flex';
    infoScreen.querySelector('h1').textContent=`Element: ${data[elemNumber - 1].name}`
    infoScreen.querySelector('.atomic-mass').textContent=`Atomic mass: ${data[elemNumber - 1].atomic_mass}`
    infoScreen.querySelector('.atomic-num').textContent=`Atomic number: ${data[elemNumber - 1].atomic_number}`
    infoScreen.querySelector('.c-symbol').textContent=`Chemical symbol: ${data[elemNumber - 1].symbol}`
    infoScreen.querySelector('.element-type').textContent=`Property/type: ${data[elemNumber - 1].type}`
    infoScreen.querySelector('.info-card').textContent=`${data[elemNumber - 1].description}`
  }
});

// close window
document.querySelector('button').onclick=()=>{
infoScreen.style.display='none';
copy.textContent='Copy text'
copy.classList.remove('copied')
}
// copying

let copy = document.querySelector('.copy');
copy.onclick=()=>{
    navigator.clipboard.writeText(infoScreen.querySelector('.info-card').textContent);
    copy.textContent='Copied !!'
    copy.classList.add('copied')

}