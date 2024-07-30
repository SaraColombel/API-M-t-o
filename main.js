// Tâches à effectuer :
// 1) Installer la librairie FontAwesome (https://fontawesome.com/)
// 2) Placer dans le html l'icône Cloud-sun (https://fontawesome.com/icons/cloud-sun?s=solid) juste avant le bouton Charger
// 3) Installer la librairie Animate on Scroll (https://github.com/michalsnik/aos)
// 4) Animer la div cardMeteo avec une durée de 1 seconde (soit 1000ms)

// La suite sera uniquement réalisée en Javascript :
// 5) Créer une div que vous stockerez dans une variable info
// 6) Donner à cette div les propriétés CSS suivantes
//     - une hauteur de 300px
//     - une largeur de 200px
//     - un margin en haut et en bas de 16px
//     - un border de 3px, solid, en gris
//     - un padding en haut de 16px, à droite et à gauche de 12px, et en bas de 24px
let info = document.createElement('div');
info.style.height = "300px";
info.style.width = "200px";
info.style.margin = "16px 0px 16px 0";
info.style.border = "3px solid grey";
info.style.paddingTop = "16px 12px 24px";

// 7) Insérer cette div dans la div cardMeteo, avant le bouton

const cardMeteo = document.getElementById("cardMeteo");
console.log(cardMeteo);
const button = document.getElementById("button");
cardMeteo.insertBefore(info, button);

// 8) Créer une fonction addInfo() qui va ajouter du texte à la div précédement créée

function addInfo(meteo){
  info.innerHTML = meteo;
}

// 9) Créer une fonction bouton() qui ajoute la class "button__cardMeteo" à notre bouton html

// 10) Faire en sorte que lorsqu'on maintien le click de la souris (event mousedown) sur le bouton charger, sa couleur de fond devient orange

button.addEventListener('mousedown', ()=>{
  button.style.backgroundColor = 'orange';
})

// 11) Faire en sorte que lorsqu'on relâche le click de la souris (event mouseup) n'importe où, cela annule la couleur précedente

button.addEventListener('mouseup', ()=>{
  button.style.backgroundColor = 'green';
})

// 12) Faire en sorte que lorsqu'on clique (event click) sur le bouton charger, cela interroge l'API météo ("https://prevision-meteo.ch/services/json/toulouse") et nous affiche les informations météos suivantes :
//     - La condition actuelle
//     - La température actuelle
//     - La température maximum du jour 0
//     - La température minimum du jour 0
// NOTE : vous afficherez les informations dans la div précédement créé en appelant la fonction addInfo(). Si vous n'avez pas réussi à la créer et la palcer, affichez les informations dans un console.log

button.addEventListener('click', async ()=>{
  const meteo = await fetch('https://prevision-meteo.ch/services/json/toulouse');
  const meteoTransformed = await meteo.json();
  console.log(meteoTransformed);
  const informations = `${meteoTransformed.city_info.name} - ${meteoTransformed.city_info.country}<br><br> Levé du soleil : ${meteoTransformed.city_info.sunrise} <br> Couché du soleil : ${meteoTransformed.city_info.sunset}<br> Horaire actuelle : ${meteoTransformed.current_condition.hour}<br><br>Le temps est : ${meteoTransformed.current_condition.condition}<br>Température : ${meteoTransformed.current_condition.tmp}°C <br>T° Max = ${meteoTransformed.fcst_day_0.tmax}°C<br>T° Min = ${meteoTransformed.fcst_day_0.tmin}°C`;
  addInfo(informations);
});

info.style.fontSize = "20px";

bouton.class = "button__cardMeteo";

bouton.setAttribute('class', 'button__cardMeteo');
