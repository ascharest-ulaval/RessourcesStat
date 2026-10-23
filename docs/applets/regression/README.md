# Trois méthodes, trois droites

Applet autonome en français pour comparer Mayer, médiane-médiane et moindres carrés.

## Ouvrir

Ouvrir le fichier `index.html` de ce dossier. Pour les commandes ci-dessous, se placer dans ce dossier.

Les anciens fichiers `RessourcesEnseignement/index.html` et `RessourcesEnseignement/docs/guide-profs.html` sont seulement des redirections conservées pour les liens existants, notamment ceux de la présentation GRMS. Ils ne sont pas nécessaires pour copier ou publier le projet : le dossier `Régression` est autonome.

Ouvrir index.html dans un navigateur récent. Aucun serveur, installation ou accès Internet n’est nécessaire au calcul. Les liens vers les sources nécessitent Internet. Les données saisies restent dans le navigateur; elles ne sont pas enregistrées après fermeture ou actualisation.

L’applet s’ouvre sur **Calculer avec des données**, avec les 50 bouleaux en premier; les simulations sont accessibles depuis les boutons du bandeau. Après retrait, les points exclus restent visibles en plus pâle; seules les droites recalculées sont tracées. Les équations avant/après restent dans la légende et des cases permettent de choisir les méthodes affichées.

## Quatre modes

- **Simulation simple** : cinq situations; 15 points par défaut, ou 30 et 60; 500 répétitions. Les coordonnées sont généralement positives avec ces réglages. La relation linéaire est y = 2x + 20 avec erreur normale d’écart-type 1. La parabole est y = (x − 4)² + 20. Les constructions sont accessibles dans Calculer, sur les données choisies et après retrait de points. Déplier les résultats pour comparer moyenne et EM (écart moyen).
- **Simulation avancée** : sept situations proposées. Modifier a, b et σ dans le modèle, ou n, le nombre de répétitions et le nombre de départ du hasard. Les modifications relancent le calcul après une courte pause. Les résultats sont affichés avant le nuage : moyenne, biais, écart-type et EQM.
- **Simulation personnalisée** : choisir aussi la répartition des x, les erreurs, la courbure, la dispersion et un point particulier. La simulation commence à l’ouverture et se met à jour automatiquement. La position proposée est 0 au centre et 9 à droite, puis reste modifiable. Le décalage est masqué lorsqu’il ne s’applique pas.
- **Calculer avec des données** : choisir les jeux québécois proposés ou entrer ses propres données. Les points seuls sont affichés à l’ouverture; les cases sous le graphique permettent de choisir les droites. Le choix de construction montre les groupes ou résidus, avec des étapes à déplier. Les interprétations des exemples sont également dans un encadré à déplier.

## Hasard et axes

Un même nombre de départ (germe) et les mêmes réglages reproduisent les mêmes données. « Refaire la simulation » change ce nombre. Changer n le conserve afin de faciliter les comparaisons; cela ne garantit pas que tous les points soient partagés entre tailles.

Les limites des axes restent fixes lorsqu’on change n ou qu’on refait la simulation. Changer le modèle ou la situation les recalcule. En simulation simple, les limites initiales prennent en compte les trois tailles proposées. Les éléments hors cadre sont coupés, sans déplacement au bord; les résultats hors cadre et les barres trop hautes sont signalés par méthode. Les résumés statistiques portent sur tous les résultats valides, y compris ceux hors cadre. Les échelles peuvent différer entre x et y : lire une pente avec les graduations.

## Données québécoises

- 600 maisons à Québec : aire d’étages brute en m² et valeur foncière en milliers de dollars. Tirage préparé par Aurélien Nicosia pour Données bleues parmi 99 072 unités admissibles. Ce ne sont pas des prix de vente. L’interprétation des pentes est convertie en dollars par m².
- 50 bouleaux à papier : diamètre en cm et hauteur en m, issus du jeu pédagogique MRNF/PET5 de 200 arbres.
- 187 bibliothèques ou centres déclarants en 2024 : population desservie et prêts annuels. Une ligne incomplète exclue du fichier officiel BAnQ de 188 lignes. Une option réversible retire les 1, 3 ou 5 plus grandes populations; les noms retirés sont indiqués et les axes recalculés.

Sources, attribution, sélection et transformations : « Source et préparation » dans l’applet et docs/data/provenance-quebec.json. Les instantanés sources et le script de préparation sont conservés dans docs/data/. Pour régénérer les exemples : node docs/data/build-quebec.cjs, depuis la racine. Aucune observation extrême n’est supprimée automatiquement.

## Entrer ses propres données

Nommer les variables et leurs unités. Une ligne par couple; séparateur virgule, point-virgule ou tabulation. Pour les décimales françaises, utiliser le point-virgule : 1,5;2,8. En-tête x,y facultatif. Le CSV simple est limité à 1 Mo et 2 000 couples. Les lignes invalides sont signalées. Les droites sont recalculées automatiquement après une courte pause de saisie. Dans la zone de saisie, Tab insère une tabulation; Échap puis Tab passe au champ suivant. Les données saisies sont conservées lorsqu’on passe aux exemples puis qu’on revient, mais pas après actualisation.

## Vérifier

Exécuter node tests/run.cjs et node tests/interface.cjs. Les tests couvrent les calculs et les interactions sur un DOM simulé, pas le rendu visuel. Voir docs/validation.md pour les vérifications et leurs limites.

`node tests/liens-locaux.cjs` vérifie aussi les liens des fichiers HTML/Markdown et les empreintes des trois sources de données.

## Publier

Héberger les fichiers statiques en conservant index.html à la racine, css/, js/ et docs/ avec les liens et les notices de sources. Aucun backend ni secret n’est requis. Vérifier les quatre modes sur un grand écran et un écran étroit avant diffusion. Aucune publication n’est effectuée par les scripts de test.

Le guide pédagogique est dans docs/guide-profs.html. Les conventions et les mécanismes des simulations sont regroupés dans docs/methodes.md. js/export.js est un ancien module conservé, non chargé par l’applet; aucun bouton d’export n’est proposé.

Dans **Calculer avec des données**, les points sont cliquables pour explorer leur influence. Entrée/Espace fonctionne aussi au clavier. Les trois droites sont recalculées; un bouton rétablit tous les points. Les retraits sont temporaires, avec un minimum de trois points, et ne changent ni les fichiers ni le texte saisi. Les simulations n'offrent pas cette interaction.

Le menu des exemples est classé par nombre d’observations croissant : bouleaux (50), bibliothèques (187), maisons (600).

Le guide pour les enseignants est organisé autour de deux usages : **Calculer pour comprendre les méthodes**, puis **Simuler pour comparer leur qualité dans différents contextes**. Il propose des questions à poser, des manipulations, des observations attendues et des précautions; les garanties théoriques et l’histoire viennent ensuite.
