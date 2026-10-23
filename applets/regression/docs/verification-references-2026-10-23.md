# Vérification des références — 23 octobre 2026

Cette vérification en ligne complète le contrôle du code local du 22 octobre. Une erreur d’accès ne signifie pas qu’un lien est supprimé. Aucun fichier de données n’a été remplacé.

## Références confirmées par lecture

| Référence | Résultat |
| --- | --- |
| [Page officielle des programmes](https://www.quebec.ca/education/prescolaire-primaire-et-secondaire/programmes-formations-evaluation/programme-formation-ecole-quebecoise/secondaire/mathematique) | Accessible; liens vers le PFEQ et la progression toujours proposés. |
| [PFEQ, deuxième cycle](https://cdn-contenu.quebec.ca/cdn-contenu/education/pfeq/secondaire/programmes/PFEQ-mathematique-secondaire-deuxieme-cycle.pdf), page imprimée 75, notes 26–27 (index PDF 78) | Constructions compatibles avec le code. En CST : écart moyen; l’étude de l’écart-type et des moindres carrés est explicitement exclue de cette séquence. Les recherches textuelles « erreur quadratique » et « estimateur » n’ont pas trouvé de correspondance; cela ne prouve pas l’absence de tout concept voisin. |
| [Progression des apprentissages](https://cdn-contenu.quebec.ca/cdn-contenu/education/pfeq/secondaire/progressions-apprentissages/PFEQ-progression-apprentissages-mathematique-secondaire.pdf), page imprimée 26, statistique, point 8 | Mayer et médiane-médiane citées parmi les méthodes possibles. Le document actuellement lié par le Ministère porte la date d’août 2016. |
| [Alloprof — Mayer](https://www.alloprof.qc.ca/fr/eleves/bv/mathematiques/la-droite-de-mayer-m1507) | Tri par x puis y en cas d’égalité; deux points moyens. Effectif impair : omission du couple central ou inclusion dans un groupe permises. Notre convention garde le point à gauche. L’exemple Alloprof arrondit en cours de calcul; l’applet conserve la précision jusqu’à l’affichage. |
| [Alloprof — médiane-médiane](https://www.alloprof.qc.ca/fr/eleves/bv/mathematiques/la-droite-mediane-mediane-m1408) | Groupes extérieurs de même taille, point moyen des trois points médians, pente M₁M₃ : compatible avec le code. |
| [NIST — Linear Least Squares Regression](https://www.itl.nist.gov/div898/handbook/pmd/section1/pmd141.htm) | Critère de somme des carrés et coefficients de régression simple confirmés. |
| [Arbres du Québec, livraison v1.0.0](https://github.com/AurelienNicosiaULaval/arbres_quebec/releases/tag/v1.0.0) | Marquée Latest lors de la consultation. Confirme 200 arbres, 50 par espèce, origine PET5/MRNF, caractère pédagogique non représentatif, données sous CC BY 4.0, taxonomie VASCAN sous CC0 et code sous MIT. |
| [HistData — Mayer](https://friendly.github.io/HistData/reference/Mayer.html) | Confirme 27 équations, trois groupes de neuf puis trois équations à trois inconnues, en citant Stigler (1986, p. 21–22). |

## Confirmation partielle par indexation

| Référence | Limite et constat |
| --- | --- |
| [Alloprof — droite de régression](https://www.alloprof.qc.ca/fr/eleves/bv/mathematiques/la-droite-de-regression-m1378) et [sources de biais](https://www.alloprof.qc.ca/fr/eleves/bv/mathematiques/les-sources-de-biais-m1363) | Toujours indexées avec contenu pertinent. Lecture intégrale en échec, également via le sous-domaine cms. Les conclusions curriculaires reposent sur les documents officiels accessibles. |
| [MAMH — rôle d’évaluation foncière](https://www.donneesquebec.ca/recherche/dataset/roles-d-evaluation-fonciere-du-quebec) | Lecture directe bloquée par vérification JavaScript; contenu officiel indexé retrouvé. Le catalogue offre aussi des ressources 2026. L’applet conserve son échantillon pédagogique du rôle 2025; ce n’est pas le millésime le plus récent. La sélection de 600 parmi 99 072 reste documentée par les instantanés locaux, sans nouvelle vérification de l’extraction distante. |
| [BAnQ — statistiques des bibliothèques](https://www.donneesquebec.ca/recherche/dataset/statistiques_des_bibliotheques_publiques_du_quebec) | Lecture directe bloquée; fiche officielle indexée décrivant toujours les données 2024. Aucun nouveau rapprochement octet par octet du CSV distant. |

## Références non reconfirmées à distance

- Fiches Données bleues : [maisons](https://donneesbleues.ca/datasets/maisons-quebec/fiche.html), [arbres](https://donneesbleues.ca/datasets/arbres-quebec/fiche.html), [bibliothèques](https://donneesbleues.ca/datasets/bibliotheques-quebec/fiche.html). Accès impossible par l’outil; recherches ciblées sans résultat pertinent. Disponibilité et contenu distant non reconfirmés. Les attributions antérieures et les fichiers locaux sont conservés; la livraison GitHub confirme séparément la préparation des arbres.
- [Présentation GRMS 2020 d’Anne-Sophie Charest](https://www.dropbox.com/scl/fi/ttxme0p4weuzdp32m07en/GRMS___2020___M-thodes_de_r-gression.pdf?rlkey=g46v15dyt756lxudcod6mb9ih&dl=0). Lecture non obtenue par l’outil. Lien et repères de diapositives antérieurs conservés; pagination non reconfirmée aujourd’hui.

## Décisions

Aucune correction des algorithmes nécessaire. Préciser l’ancrage CST dans methodes.md, ajouter la progression et la référence NIST, et distinguer jeux pédagogiques figés et catalogues vivants. Ne pas modifier la date d’acquisition de la provenance : les trois empreintes des instantanés et les effectifs 600, 50, 187 ont été contrôlés localement le 22 octobre, et non retéléchargés aujourd’hui. Une référence non accessible n’est pas marquée comme relue.
