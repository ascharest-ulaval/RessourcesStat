# Ancrage curriculaire des statistiques affichées

Actualisation du 23 octobre 2026 : PFEQ et progression officielle revérifiés en ligne. Le PFEQ, page imprimée 75, notes 26–27, confirme l’écart moyen en CST et exclut l’étude de l’écart-type et des moindres carrés dans cette séquence. Les fiches Alloprof ci-dessous sur la régression et les biais restent indexées, mais leur lecture intégrale n’a pas abouti aujourd’hui. Voir le [journal de vérification](verification-references-2026-10-23.md) pour distinguer les contenus confirmés des constats antérieurs.

Vérification le 20 octobre 2026.

- [PFEQ, mathématique, deuxième cycle](https://cdn-contenu.quebec.ca/cdn-contenu/education/pfeq/secondaire/programmes/PFEQ-mathematique-secondaire-deuxieme-cycle.pdf) : les passages sur la régression présentent notamment Mayer et médiane-médiane. La recherche textuelle « erreur quadratique » ne donne aucun résultat. L'EQM d'un estimateur n'a pas été repérée comme contenu prescrit dans ce document.
- [Alloprof, La droite de régression](https://www.alloprof.qc.ca/fr/eleves/bv/mathematiques/la-droite-de-regression-m1378) : la fiche présente plusieurs méthodes, dont moindres carrés, les équations, les prédictions et leurs comparaisons. L'EQM des estimations obtenues sur des répétitions n'y est pas présentée. Une recherche ciblée sur le site n'a pas trouvé de fiche consacrée à cette notion; cela ne prouve pas son absence de tout le site.

Décision : retirer l'EQM du tableau et des définitions de la version de base. La conserver dans le moteur statistique, les tests, le guide enseignant et la version plus complète comme prolongement. Ne pas confondre l'EQM d'une pente ou d'une ordonnée sur plusieurs échantillons avec la somme des carrés des résidus sur un seul nuage, qui explique la construction des moindres carrés.

Le biais d'un estimateur sur des simulations est également un outil d'interprétation pédagogique de cette ressource; il n'est pas présenté comme un objectif explicitement prescrit. L'écart-type apparaît dans certaines séquences du PFEQ, mais la note 26, page imprimée 75, précise qu'il n'est pas au programme en CST, où l'écart moyen est utilisé. La moyenne et les constructions de régression peuvent donc être travaillées en classe sans exiger la maîtrise de toutes les statistiques de simulation.

Adaptation CST : la version de base présente désormais l'écart moyen plutôt que l'écart-type. Ce choix reprend la mesure de dispersion mentionnée pour la CST; l'application de cette mesure à une distribution d'estimations simulées reste une démarche pédagogique de la ressource. La version complète conserve l'écart-type et l'EQM.

## Sens du mot biais en CST — 20 octobre 2026
Le PFEQ (page imprimée 75, séquence CST) demande de relever et corriger les sources de biais pouvant nuire à la fiabilité d'une étude. Alloprof présente aussi les sources de biais : https://www.alloprof.qc.ca/fr/eleves/bv/mathematiques/les-sources-de-biais-m1363 . Ce sens scolaire ne correspond pas à une prescription repérée du calcul du biais d'un estimateur, c'est-à-dire espérance de l'estimation moins paramètre. La recherche « estimateur » dans le PFEQ consulté ne donne pas de résultat.

État vérifié le 26 octobre 2026 : la simulation simple affiche la moyenne et l’écart moyen (EM). Elle n’affiche plus « Écart avec la valeur de départ ». Les simulations avancée et personnalisée conservent le biais, calculé comme la moyenne des estimations moins la référence, ainsi que l’écart-type et l’EQM. Le biais est signé et reste distinct de l’écart moyen.
