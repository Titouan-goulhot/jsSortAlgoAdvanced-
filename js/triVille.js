let csvFile;
let listVille = [];
let nbPermutation = 0;
let nbComparaison = 0;

document.querySelector("#read-button").addEventListener('click', function () {
    csvFile = document.querySelector("#file-input").files[0];
    let reader = new FileReader();
    reader.addEventListener('load', function (e) {
        // récupération de la liste des villes
        listVille = getArrayCsv(e.target.result);

        // Calcul de la distance des villes par rapport à Grenoble
        listVille.forEach(ville => {
            ville.distanceFromGrenoble = distanceFromGrenoble(ville);
        });
        // Tri
        const algo = $("#algo-select").val();
        nbPermutation = 0;
        nbComparaison = 0;
        sort(algo);

        // Affichage 
        displayListVille()
    });
    reader.readAsText(csvFile)
})

/**
 * Récupére la liste des villes contenu dans le fichier csv
 * @param csv fichier csv brut
 * @returns la liste des villes mis en forme
 */
function getArrayCsv(csv) {
    let listLine = csv.split("\n")
    listVille = [];
    let isFirstLine = true;
    listLine.forEach(line => {
        if (isFirstLine || line === '') {
            isFirstLine = false;
        } else {
            let listColumn = line.split(";");
            listVille.push(
                new Ville(
                    listColumn[8],
                    listColumn[9],
                    listColumn[11],
                    listColumn[12],
                    listColumn[13],
                    0
                )
            );
        }
    });
    return listVille;
}

/**
 * Calcul de la distance entre Grenoble et une ville donnée
 * @param ville ville
 * @returns la distance qui sépare la ville de Grenoble
 */
function distanceFromGrenoble(ville) {

    // Latitude et longitude de Grenoble.
    const lat1 = 45.166667;
    const lon1 = 5.716667;

    // latitiude et longitude de l'objet ville
    const lat2 = ville.latitude;
    const lon2 = ville.longitude;

    const R = 6371e3; // metres
    const φ1 = lat1 * Math.PI / 180; // φ, λ in radians
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c; // in metres

    console.log('result of distanceFromGrenoble : ', d);
    return d;
}

/**
 * Retourne vrai si la ville i est plus proche de Grenoble
 * par rapport à j
 * @param {*} i distance de la ville i
 * @param {*} j distance de la ville j
 * @return vrai si la ville i est plus proche
 */
function isLess(i, j) {

    if (i.distanceFromGrenoble < j.distanceFromGrenoble) {

        return true;
    } else {
        return false;
    }
    console.log('isLess Result : ');
}

/**
 * interverti la ville i avec la ville j dans la liste des villes
 * @param {*} i 
 * @param {*} j 
 */
function swap(i, j, listVille) {
    //  
    var temporary = listVille[i];
    listVille[i] = listVille[j];
    listVille[j] = temporary;

    nbPermutation++;

    console.log('Swap Result : ');

}

function sort(type) {
    switch (type) {
        case 'insert':
            insertsort(listVille);
            break;
        case 'select':
            selectionsort(listVille);
            break;
        case 'bubble':
            bubblesort(listVille);
            break;
        case 'shell':
            shellsort();
            break;
        case 'merge':
            mergesort();
            break;
        case 'heap':
            heapsort();
            break;
        case 'quick':
            quicksort(0, listVille.length - 1);
            break;
    }
}

function insertsort(listVille) {

    for (var i = 1; i < listVille.length; i++) {
        var temporary = listVille[i];
        var j = i;
        while (j > 0 && isLess(temporary, listVille[j - 1])) {
            // listVille[j + 1] = listVille[j];
            swap(j, j - 1, listVille)
            j = j - 1;
        }
        listVille[j] = temporary;
    }
    return listVille;
};
console.log("insertsort - ", insertsort(listVille));


function selectionsort(listVille) {

    for (var i = 0; i < listVille.length; i++) {
        var index_min = i;
        for (var j = i + 1; j < listVille.length; j++) {
            if (!isLess(listVille[index_min], listVille[j])) {
                index_min = j;
            }
        }
        swap(i, index_min, listVille)
    }
    return listVille;
}
console.log("selectionsort - ", selectionsort(listVille));

function bubblesort(listVille) {
    var passage = 0
    var permute = true;

    while (permute === true) {
        permute = false
        for (var i = 0; i < listVille.length - 1; i++) {
            if (isLess(listVille[i + 1], listVille[i])) {
                swap(i, i + 1, listVille)
                permute = true;
            }
        }

        passage = passage + 1;
    }

    return listVille;
};
console.log("bubblesort - ", bubblesort(listVille));


function shellsort() {
    console.log("shellsort - implement me !");
}

function mergesort() {
    listVille = tri_fusion(listVille);

}

function tri_fusion(listVille) {
    let gauche = listVille.slice(0, listVille.length / 2);
    let droite = listVille.slice(listVille.length / 2);

    if (listVille.length <= 1) {
        return listVille;
    } else {
        return fusion(tri_fusion(gauche), tri_fusion(droite));
    }
}

function fusion(gauche, droite) {

    if (gauche.length == 0) {
        return droite;

    }
    if (droite.length == 0) {
        return gauche;
    }
    nbPermutation++;

    if (isLess(gauche[0], droite[0])) {
        return [gauche.shift()].concat(fusion(gauche, droite));
    } else {
        return [droite.shift()].concat(fusion(gauche, droite));
    }
}
console.log("mergesort - : ", mergesort());



function heapsort() {
    console.log("heapsort - implement me !");
}

function quicksort(first, last) {
    if (first < last) {
        var pi = partition(first, last);

        quicksort(first, pi - 1);

        quicksort(pi + 1, last);

    }

    return listVille;


}
function partition(first, last) {

    pivot = listVille[last];
    j = first;
    for (i = first; i <= last - 1; i++) {
        if (isLess(listVille[i], pivot)) {
            swap(i, j, listVille)
            j = j + 1
        }
    }
    swap(last, j, listVille);

    return j;
}

console.log("quicksort - ", quicksort(0, listVille.length - 1));

/** MODEL */

class Ville {
    constructor(nom_commune, codes_postaux, latitude, longitude, dist, distanceFromGrenoble) {
        this.nom_commune = nom_commune;
        this.codes_postaux = codes_postaux;
        this.latitude = latitude;
        this.longitude = longitude;
        this.dist = dist;
        this.distanceFromGrenoble = distanceFromGrenoble;
    }
}

/** AFFICHAGE */
function displayPermutation(nbPermutation) {
    document.getElementById('permutation').innerHTML = nbPermutation + ' permutations';
}

function displayListVille() {
    document.getElementById("navp").innerHTML = "";
    displayPermutation(nbPermutation);
    let mainList = document.getElementById("navp");
    for (var i = 0; i < listVille.length; i++) {
        let item = listVille[i];
        let elem = document.createElement("li");
        elem.innerHTML = item.nom_commune + " - \t" + Math.round(item.distanceFromGrenoble * 100) / 100 + ' m';
        mainList.appendChild(elem);
    }
}

