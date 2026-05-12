let theJokeButton = document.getElementById('theJokeButton');
let content = document.getElementById('content');

let jokeArray = [
    "Akirlu är så gammal så hennes första skinnjacka var gjord av mammut!",
    'Fråga från en främling: "Akirlu, du som är så gammal, hur känner du dig?" Akirlu svarar: "Som en nyfödd baby. Jag har inget hår, inga tänder och jag tror att jag precis pinkade på mig"',
    "Akirlu är så gammal att hon satt bakom Jesus i tredje klass",
    "Akirlu är så gammal att när han gick i skolan undervisade de inte i historia.",
    "Akirlu är så gammal att hon är döv sedan Bing Bang",
    "Akirlu är så gammal så att hennes drömmar är repriser",
    "Akirlu var med och vallade skidorna åt Gustav Vasa",
    "Akirlu levde sina första tio år i vatten",
    "Akirlus ålder uppskattas med hjälp av Kol-14 metoden",
    "Alla barnen är jävligt gamla, förutom Akirlu, hon är bara sju.",
    "Akirlu är så gammal så att hon ska snart gå i pension för tredje gången",
    'När Akirlu är ute och går med sin pappa så säger alla "Kolla! Där kommer världens äldsta människa... och hennes pappa',
    "Akirlu är så kort att hennes fötter syns på körkortet",
    '"Vet du varför Akirlu skrattar så mycket när hon spelar fotboll?" - Jo, för gräset kittlar henne på fittan'
]

console.log(jokeArray[3])

theJokeButton.onclick = function (event) {
    event.preventDefault();
    content.textContent = ""
    const randomNumber = Math.floor(Math.random() * 14);
    console.log(jokeArray[randomNumber])

let thisP = document.createElement('p');
content.append(thisP);
thisP.setAttribute('id', 'pjoke')
thisP.textContent += randomNumber+1 + ". " + jokeArray[randomNumber]
}