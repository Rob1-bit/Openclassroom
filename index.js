const marmotte_1 = {
    "Titre": "Marmotte des Alpes",
    "Nom": "Marmota marmota",
    "Famille": "Sciuridés",
    "Ordre": "Rongeur",
    "Classe": "Mammifères",
    "Identification": "Silhouette massive ; pattes courtes ; queue touffue ; pelage variable, brun, gris, fauve ou beige ; oreilles petites ; dents puissantes",
} 
const marmotte_2 = {
    "Titre": "Marmotte du Canada",
    "Nom": "Marmotta Monax<br>Aussi appelée marmotte commune, siffleur ou siffleux au Canada francophone, et woodchuck en anglais.",
    "Ordre": "Rongeur",
    "Comportement": "; territoire individuel variant de 0,4 à 3 hectares ; les jeunes ne connaissent que leur mère ; ils se dispersent à l'automne suivant leur naissance.",
    "Habitat": "Clairières et zones récemment déboisées ; nord de l'Amérique du Nord.",
    "Identification": 'Pas très grande ; de 2,3 à 5,4 kg en moyenne ; <span class="inred">4 paires de mamelles chez la femelle au lieu de 5.</span>',
}

const marmottes = [
    marmotte_1,
    marmotte_2
]

// function createItem(title, fieldsList) {
//     const li = document.createElement("li");
//     li.appendChild(title);
//     li.appendChild(fieldsList);
//     return li;
// }
function createTitle(txt) {
    const h4 = document.createElement("h4");
    h4.innerHTML = txt;
    return h4;
}
function createField(name, valeur) {
    const li = document.createElement("li");
    li.innerHTML = name;
    li.classList.add("soustitle");
    const p = document.createElement("p");
    p.classList.add("contenue");
    p.innerHTML = valeur;
    li.appendChild(p);
    return li;
}

// Recupérer la liste <ol class="list"> pour ajouter le marmottes dedans
// Pour toutes les marmottes[]
const ol = document.querySelector(".list");
for (let marmotte of marmottes) {
    // Créer les champs de renseignement <li> de la marmotte
    // Les ajouter dans une liste <ul class="marmotte-description">
    const li = document.createElement("li");
    const ul = document.createElement("ul");
    for (let key in marmotte) {
        if (key == "Titre") {
            const title = createTitle(marmotte[key]);
            li.appendChild(title);
        } else {
            const field = createField(key, marmotte[key]);
            ul.appendChild(field);
        }
    }
    li.appendChild(ul);
    // Ajouter list dans la liste <ol class="list">
    ol.appendChild(li);
}


