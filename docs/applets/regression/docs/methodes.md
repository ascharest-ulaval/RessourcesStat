# Algorithmes et sources

Documentation comparée au code local le 22 octobre 2026. Références pédagogiques principales revérifiées en ligne le 23 octobre 2026; voir le [journal de vérification](verification-references-2026-10-23.md) pour les résultats et les limites d’accès aux autres sources.

## Références pédagogiques
Références consultées initialement le 6 octobre, puis revérifiées le 23 octobre 2026 : [PFEQ, deuxième cycle, page imprimée 75, notes 26 et 27](https://cdn-contenu.quebec.ca/cdn-contenu/education/pfeq/secondaire/programmes/PFEQ-mathematique-secondaire-deuxieme-cycle.pdf) et [page officielle des programmes](https://www.quebec.ca/education/prescolaire-primaire-et-secondaire/programmes-formations-evaluation/programme-formation-ecole-quebecoise/secondaire/mathematique). Le programme décrit Mayer par deux points moyens et médiane-médiane par une parallèle à M₁M₃ passant par la moyenne des trois points médians. Pour CST, l’étude des moindres carrés et de l’écart-type n’est pas au programme; l’écart moyen est retenu. Les moindres carrés sont ajoutés ici comme comparaison pour la formation. La [progression des apprentissages, statistique, point 8](https://cdn-contenu.quebec.ca/cdn-contenu/education/pfeq/secondaire/progressions-apprentissages/PFEQ-progression-apprentissages-mathematique-secondaire.pdf), toujours liée par le Ministère, cite aussi Mayer et médiane-médiane.

Conventions complémentaires revérifiées le 23 octobre 2026 : [Mayer, Alloprof](https://www.alloprof.qc.ca/fr/eleves/bv/mathematiques/la-droite-de-mayer-m1507) et [médiane-médiane, Alloprof](https://www.alloprof.qc.ca/fr/eleves/bv/mathematiques/la-droite-mediane-mediane-m1408). Référence technique pour les moindres carrés : [NIST](https://www.itl.nist.gov/div898/handbook/pmd/section1/pmd141.htm), consultée le même jour. Résumés paraphrasés; les exemples numériques sont originaux. Contrairement à certains exemples scolaires arrondis en cours de calcul, l’applet n’arrondit qu’à l’affichage.

## Préparation commune
Conserver les couples; trier par x croissant puis y croissant en cas d'égalité. Valeurs finies uniquement. Aucun arrondi intermédiaire. Une médiane d'effectif pair est la moyenne des deux valeurs centrales. Les médianes de x et de y se calculent séparément dans chaque groupe.

## Mayer
Au moins deux points. Partage aux rangs : ceil(n/2) dans le premier groupe, le reste dans le second. Pour n impair, le point supplémentaire est donc conservé à gauche. Alloprof permet aussi de l'exclure ou de le placer à droite; notre choix explicite évite une convention cachée. Calculer P₁=(moyenne x, moyenne y) et P₂. Pente a=(y₂−y₁)/(x₂−x₁), ordonnée b=y₁−ax₁.

## Médiane-médiane
Au moins trois points. Si n=3k : tailles k,k,k; si n=3k+1 : k,k+1,k; si n=3k+2 : k+1,k,k+1. Calculer M₁,M₂,M₃. a=(y₃−y₁)/(x₃−x₁); P est la moyenne non pondérée des trois points médians; b=Pᵧ−aPₓ. La droite finale est parallèle à M₁M₃ et passe par P. Elle ne passe pas nécessairement par les trois points médians.

## Moindres carrés
Au moins deux points. x̄ et ȳ; Sxx=Σ(x−x̄)², Sxy=Σ(x−x̄)(y−ȳ); a=Sxy/Sxx; b=ȳ−ax̄. Résidu vertical e=y−(ax+b). La droite minimise Σe² parmi les droites y=ax+b.

## Cas problématiques
Abscisses des résumés égales ou Sxx nul : résultat indisponible avec explication. Les échecs sont exclus des résumés. Résultats non finis également indisponibles. Aucun biais d'ordonnée ou pente n'est inventé pour un jeu utilisateur sans générateur connu.

## Statistiques des répétitions
Pour m estimations valides : moyenne, biais=moyenne−référence, écart-type avec dénominateur m−1, EQM=Σ(estimation−référence)²/m. Avec m=1, écart-type indisponible. Sous courbure, le biais et l’EQM restent calculés par rapport aux coefficients linéaires a et b : ils ne comparent pas les droites à une vraie relation linéaire. Sous contamination, comparaison au mécanisme linéaire de base. L'EQM concerne le paramètre, pas l'erreur de prédiction.

Quantiles par interpolation au rang (m−1)p (type 7). Boîtes : Q1, médiane, Q3; moustaches aux observations extrêmes dans [Q1−1,5 IQR,Q3+1,5 IQR]; valeurs au-delà montrées individuellement. Histogrammes : mêmes bornes et classes pour les méthodes d'un même paramètre. Résultats Monte-Carlo approximatifs et sensibles au germe.

## Mesures affichées selon le mode
La **Simulation simple** affiche seulement la moyenne et l’écart moyen (EM), séparément pour les pentes et les ordonnées de chaque méthode. Pour m valeurs valides tᵢ et leur moyenne t̄, écart moyen = Σ|tᵢ − t̄|/m. Les distances portent sur la moyenne des estimations, et non sur la valeur de départ. Avec une seule valeur, l’écart moyen vaut 0; sans valeur valide, il est indisponible.

Les simulations **avancée** et **personnalisée** affichent moyenne, biais, écart-type et EQM. Les mesures sont inscrites à côté des distributions; le tableau récapitulatif calculé dans le code reste masqué. Les nombres sont généralement affichés à deux décimales; les graduations évitent les zéros inutiles. Pour une relation courbe, aucune valeur cible ni ligne de référence n’est affichée dans les distributions. Dans les modes avancés, le biais et l’EQM restent calculés par rapport aux coefficients linéaires saisis, avec la limite d’interprétation précisée plus haut.

## Calculer : constructions et retrait de points

L’applet s’ouvre sur les 50 bouleaux, avec les points seuls. Les cases sous le graphique permettent d’afficher indépendamment une, deux ou trois droites. Le choix d’une construction active aussi la droite correspondante. Mayer montre deux groupes et leurs points moyens; médiane-médiane montre trois groupes, leurs points médians, la droite M₁M₃ et le point moyen P; les moindres carrés montrent les résidus verticaux. Les étapes numérotées se déplient sous le graphique.

Cliquer sur un point l’exclut des trois calculs; le point reste visible en pâle et un nouveau clic le réintègre. Au moins trois points doivent rester dans le calcul. Les groupes et résumés sont reconstruits à partir des points conservés. Les équations avec tous les points sont conservées dans la légende, avec celles après retrait. Une case permet d’ajouter les droites avant retrait en traits pâles; elles sont masquées par défaut. « Rétablir les points » annule les retraits. Le cadre reste celui du jeu initial pendant ces clics. Changer de jeu ou recalculer les données saisies réinitialise les retraits.

Les jeux proposés sont classés par nombre d’observations : 50 bouleaux, 187 bibliothèques, 600 maisons. Pour les bibliothèques, l’option retirant les 1, 3 ou 5 plus grandes populations charge un nouveau jeu et recalcule le cadre; elle se distingue des retraits par clic.

La saisie et l’importation acceptent deux colonnes numériques, jusqu’à 2 000 couples et 1 Mo par fichier. Séparateurs : point-virgule, tabulation, virgule ou espaces pour la saisie; avec des décimales à virgule, utiliser point-virgule ou tabulation. Un en-tête x,y est facultatif. Les lignes vides sont ignorées; les lignes invalides sont signalées et empêchent la validation du jeu. Pendant la saisie, la ligne incomplète en cours peut être provisoirement écartée de l’aperçu; quitter le champ valide l’ensemble. Aucun remplacement de valeur manquante n’est effectué.


## Mécanismes des simulations

### Simulation simple

Cinq situations : droite, point haut, point éloigné suivant ou contredisant la tendance, parabole. n = 15 par défaut (ou 30, 60), 500 répétitions, germe initial 2026. x uniforme entre 1 et 7; relation linéaire y = 2x + 20 et erreur normale de moyenne 0 et d’écart-type 1. Point haut : x entre 3,5 et 4,5 et décalage entre +10 et +14. Points éloignés : x entre 12 et 14; décalage nul pour le point suivant la tendance ou entre −20 et −16 pour le point contraire. La parabole est y = (x − 4)² + 20, avec la même erreur normale. Les coordonnées sont généralement positives avec ces paramètres, sans garantie absolue.

### Simulations avancée et personnalisée

Les mécanismes ci-dessous concernent ces deux modes. La personnalisation est un mode séparé.

Base : y=ax+b+σe. Chaque répétition régénère x et e indépendamment. X uniforme sur [−3,3], normale N(0,1) ou exponentielle de moyenne 1. Erreurs centrées et d'écart-type 1 : normale, uniforme [−√3,√3], Student à 3 degrés de liberté divisée par √3. Le paramètre σ est donc l'écart-type de l'erreur de base.

1. **Conditions idéales** : base linéaire, x uniforme et erreurs normales. Étudier variabilité et précision sous modèle correct.
2. **X asymétriques** : base linéaire avec x exponentiel. Étudier les groupes inégalement espacés et la précision des estimations.
3. **Aberrance verticale centrale** : remplacer le dernier point par x uniforme sur [−0,5; 0,5] et y=b+ax+σe+δ, avec δ uniforme sur [10; 14]. Isoler une anomalie en y près du centre des x uniformes.
4. **Fort levier suivant la tendance** : dernier x uniforme sur [8; 10], y=b+ax+σe. Étudier l'information apportée par un point éloigné mais compatible.
5. **Fort levier contraire** : dernier x uniforme sur [8; 10], y=b+ax+σe+δ, avec δ uniforme sur [−20; −16]. Distinguer levier et discordance; observer la rotation des droites.
6. **Hétéroscédasticité** : multiplier σ par 1+0,5 max(0,x+3). Étudier une dispersion croissante sans modifier la moyenne conditionnelle.
7. **Relation quadratique** : x uniforme sur [−3; 3] et ajout de 0,75x². Ce domaine centré permet de voir les deux côtés de la courbure autour de la tendance linéaire. La droite ax+b est seulement une référence; biais et EQM relatifs à cette droite ne mesurent pas un biais par rapport à la vraie relation courbe.
8. **Personnalisé** : choisir les deux distributions, amplitude de courbure, croissance de dispersion, type de point spécial, x et déplacement vertical de ce point. Les paramètres sont affichés dans le modèle et les champs; aucun export n’est proposé. Les scénarios prédéfinis fixent les distributions; seul Personnalisé utilise ces commandes.

Germe entier non signé 32 bits, générateur Mulberry32; transformation Box-Muller sans cache pour la normale. Le germe 0 est accepté. À configuration identique, les données et résultats sont reproduits dans l'ordre des répétitions. La navigation « autre échantillon » n'altère pas la simulation. « Refaire la simulation » choisit un nouveau germe; changer de situation ou de taille conserve le germe courant et relance les calculs. Cela ne garantit pas des observations communes entre deux tailles. Les champs avancés acceptent n de 3 à 1 000 et de 2 à 3 000 répétitions; les paramètres numériques ont une valeur absolue maximale de 10 000, avec dispersion et croissance non négatives.


## Sources des exemples réels

Les jeux intégrés sont des versions pédagogiques conservées, sans mise à jour automatique. Le catalogue MAMH propose aussi des ressources 2026; l’exemple conserve son rôle 2025. Les fiches Données bleues n’ont pas pu être relues par l’outil le 23 octobre : liens d’attribution conservés, sans confirmation de disponibilité. Voir le [journal](verification-references-2026-10-23.md).

- **Maisons à Québec** : MAMH, rôle de Québec; sélection de 600 unités parmi 99 072 admissibles par Aurélien Nicosia pour Données bleues, version 1.0.0. L’aire d’étages reste en m²; seule la valeur foncière est divisée par 1 000. [Fiche Données bleues](https://donneesbleues.ca/datasets/maisons-quebec/fiche.html).
- **Bouleaux à papier** : mesures MRNF/PET5, jeu pédagogique de 200 arbres préparé par Aurélien Nicosia, version 1.0.0; les 50 bouleaux sont retenus, sans modification de leurs mesures. [Fiche Données bleues](https://donneesbleues.ca/datasets/arbres-quebec/fiche.html).
- **Bibliothèques** : fichier officiel BAnQ de 2024, 187 couples complets sur 188 lignes. Population desservie et prêts annuels sans transformation. Le retrait des plus grandes populations est une option exploratoire réversible, distincte de la préparation des données. [Fiche Données bleues](https://donneesbleues.ca/datasets/bibliotheques-quebec/fiche.html).

Attributions et transformations figurent aussi dans l’applet. Les données numériques et adaptations utilisées sont sous CC BY 4.0. Les fichiers sources, leurs empreintes SHA-256 et le script de préparation sont conservés dans [data/](data/) (soit docs/data/ depuis la racine du projet); voir [la provenance](data/provenance-quebec.json) et [le script de préparation](data/build-quebec.cjs). Le jeu source des arbres mentionne séparément la taxonomie VASCAN sous CC0 et le code sous MIT; ces mentions ne constituent pas la licence globale de l’applet.

## Axes et reproductibilité

Les trois méthodes partagent les mêmes bornes et classes d’histogramme. Les limites sont conservées lorsqu’on change n ou qu’on relance; un changement de modèle ou de situation les réinitialise. En simulation simple, les limites initiales sont préparées pour n = 15, 30 et 60. Les graphiques coupent les éléments hors cadre sans les déplacer sur la limite; les statistiques utilisent toutes les estimations valides.

Les repères de 22 configurations actuelles sont dans [reperes-simulations.json](reperes-simulations.json), régénéré après le passage aux erreurs normales en simulation simple. Depuis la racine du projet, `node tests/generer-reperes.cjs` les recalcule. Le [README](../README.md) décrit le lancement et la maintenance; le [guide pour les enseignants](guide-profs.html) présente l’utilisation en classe. Les tests se lancent avec `node tests/run.cjs` et `node tests/interface.cjs`; ces derniers vérifient le câblage sur un DOM simulé, sans confirmer le rendu visuel.
