async function start() {
    const response = await fetch('https://dog.ceo/breeds/list/all')
    const data = await response.json()
    console(data)
    createSpeciesList(data.message)
}

//frontent logic

function createSpeciesList() {
 document.getElementById('species').innerHTML =`
    <form onchange="loadspecieslist">
    <input>select dog species</input>
    ${(speciesList.map(function (species){
        return `<input>${species}</input>`
    }).join(''))}
    </form>
 `
}

function loadspecieslist(species) {
  if (breed !="select dog species")
   alert(species)
  createShadow(dat.message)
}

function createShadow(image){
  console.log(images)
  document.getElementById(shadow).innerHTML=`
  <div class="shadow" style="background-image: url('${images[0]}')"><div>
  `
}