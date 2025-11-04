/*let articles = window.localStorage.getItem("articles");

if (articles === null) {
    // Récupération des pièces
    const reponse = await fetch('db.json');
    articles = await reponse.json();
    
   // Transformation des articles en JSON
    const valeurArticles = JSON.stringify(articles);
    // Stockage des informations dans le localStorage
    window.localStorage.setItem("articles", valeurArticles);
} else {
    articles = JSON.parse(articles);
}*/

const reponse = await fetch('db.json');
const articles = await reponse.json();




function genererArticles(articles) {
    for (let i = 0; i < articles.length; i++) {

        const article = articles[i];
        // Récupération de l'élément du DOM qui accueillera les fiches
        const sectionFiches = document.querySelector(".articles");
        // Création d’une balise dédiée à une pièce automobile
        const articleElement = document.createElement("a");
        articleElement.dataset.id = articles[i].id
        articleElement.href = articles[i].url
        articleElement.classList.add("lien-conteneur");

        // Création des balises 
        const imageElement = document.createElement("img");
        imageElement.src = article.image;
        const nameElement = document.createElement("h2");
        nameElement.innerText = article.name;
        const categoryElement = document.createElement("p");
        categoryElement.innerText = "Catégorie : " + (article.category ?? "(aucune catégorie)");
        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
        // const tagsElement = document.createElement("p");
        // tagsElement.innerText = "Tags : " + article.tags;
        // Créer un bouton déroulant à la place
        const hoverElement = document.createElement("div");
        hoverElement.classList.add("lien-hover");
        hoverElement.innerText = "Voir le projet";


        // On rattache la balise article a la section Fiches
        sectionFiches.appendChild(articleElement);
        articleElement.appendChild(imageElement);
        articleElement.appendChild(nameElement);
        articleElement.appendChild(categoryElement);
        articleElement.appendChild(descriptionElement);
        // articleElement.appendChild(tagsElement);
        articleElement.appendChild(hoverElement);


    }
}

genererArticles(articles)




//gestion des bouttons 
const boutonTrier = document.querySelector(".btn-trier");

boutonTrier.addEventListener("click", function () {
    const articlesOrdonnees = Array.from(articles);
    articlesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
    });
    document.querySelector(".articles").innerHTML = "";
    genererArticles(articlesOrdonnees);
});

const boutonFiltrer = document.querySelector(".btn-filtrer");

boutonFiltrer.addEventListener("click", function () {
	const articlesFiltrees = articles.filter(function (article) {
		return article.prix <= 35;
	});
	document.querySelector(".articles").innerHTML = "";
	genererArticles(articlesFiltrees);
});

const boutonDecroissant = document.querySelector(".btn-decroissant");

boutonDecroissant.addEventListener("click", function () {
    const articlesOrdonnees = Array.from(articles);
    articlesOrdonnees.sort(function (a, b) {
        return b.prix - a.prix;
    });
    document.querySelector(".articles").innerHTML = "";
    genererArticles(articlesOrdonnees);
});

const boutonNoDescription = document.querySelector(".btn-nodesc");

boutonNoDescription.addEventListener("click", function () {
	const articlesFiltrees = articles.filter(function (article) {
		return article.description;
	});
	document.querySelector(".articles").innerHTML = "";
	genererArticles(articlesFiltrees);
});

const boutonMaj = document.querySelector(".btn-maj");

boutonMaj.addEventListener("click", function () {
    document.querySelector(".articles").innerHTML = "";
    genererArticles(articles);
});






/* const noms = articles.map(article => article.nom);
for (let i = articles.length - 1; i >= 0; i--) {
    if (articles[i].prix > 35) {
        noms.splice(i, 1);
    }
}
console.log(noms);
//Création de l'en-tête

const pElement = document.createElement("p");
pElement.innerText = "Pièces abordables";
//Création de la liste
const abordablesElements = document.createElement("ul");
//Ajout de chaque nom à la liste
for (let i = 0; i < noms.length; i++) {
    const nomElement = document.createElement('li');
    nomElement.innerText = noms[i];
    abordablesElements.appendChild(nomElement);
}
// Ajout de l'en-tête puis de la liste au bloc résultats filtres
document.querySelector(".abordables")
	.appendChild(pElement)
	.appendChild(abordablesElements);

const nomsDisponibles = articles.map(article => article.nom);
const prixDisponibles = articles.map(article => article.prix);

for (let i = articles.length - 1; i >= 0; i--) {
    if (articles[i].disponibilite === false) {
        nomsDisponibles.splice(i, 1);
        prixDisponibles.splice(i, 1);
    }
}

const disponiblesElement = document.createElement("ul");

for (let i = 0; i < nomsDisponibles.length; i++) {
    const nomElement = document.createElement('li');
    nomElement.innerText = `${nomsDisponibles[i]} - ${prixDisponibles[i]} €`
    disponiblesElement.appendChild(nomElement);
}

const pElementDisponible = document.createElement("p");
pElementDisponible.innerText = "Pièces disponibles:";
document.querySelector(".disponibles").appendChild(pElementDisponible).appendChild(disponiblesElement);

const inputPrixMax = document.querySelector('#prix-max')
inputPrixMax.addEventListener('input', function () {
    const articlesFiltrees = articles.filter(function (article) {
        return article.prix <= inputPrixMax.value;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererarticles(articlesFiltrees);
}) */

