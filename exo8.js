let paragraphe = document.createElement('p');
contenu.appendChild(paragraphe);
let listeUl = document.createElement('ul');
paragraphe.appendChild(listeUl);
let listeLi = document.createElement('li');
listeUl.appendChild(listeLi);
let listeLiBis = document.createElement('li');
listeUl.appendChild(listeLiBis);

let xScrollWidth = contenu.scrollWidth; // calcul la largeur de l'élément
let text = listeLi.textContent; // ajoute le texte à la liste
listeLi.textContent = "La largeur est de : " + xScrollWidth + "px"; // contenu à afficher

let xScrolleHeight = contenu.scrollHeight; //calcul la hauteur de l'élément
let textBis = listeLiBis.textContent; // ajoute texte à la liste
listeLiBis.textContent = "La hauteur est de : " + xScrolleHeight + "px"; // contenu à afficher