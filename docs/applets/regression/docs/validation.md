# Vérification avant publication — 21 octobre 2026

## Vérifications effectuées

- node tests/run.cjs : 19 tests de calcul réussis, aucun échec.
- node tests/interface.cjs : tests d’interactions sur DOM simulé réussis. Ils couvrent les quatre modes, les constructions simples, les relances automatiques, les axes fixes pour n et les relances, leur recalcul après changement du modèle, les trois jeux québécois et le retrait réversible des bibliothèques.
- Un cas contrôlé de distributions hors cadre vérifie que les trois méthodes utilisent un rectangle de découpe SVG, que les coordonnées des boîtes restent leurs coordonnées réelles et que les dépassements sont signalés par méthode. Les éléments ne sont plus ramenés artificiellement au bord. Les barres sont coupées au sommet du cadre; les résumés incluent les valeurs hors cadre.
- node tests/generer-reperes.cjs : 22 configurations recalculées dans reperes-simulations.json. Quinze configurations simples (cinq situations × trois tailles) et sept avancées, germe 2026. La parabole simple est y = (x − 4)² + 20; les situations linéaires simples utilisent a=2, b=20 et des erreurs uniformes d’écart-type 1.
- Guide, mode d’emploi et description des mécanismes actualisés pour les quatre modes et les exemples réels. Le bouton de saisie porte le libellé « Calculer les droites pour ces données ».

## Limite de la vérification visuelle

Le contrôle du navigateur a refusé l’accès à index.html avec le protocole file://, en application de sa politique de sécurité. Aucun contournement n’a été tenté. Les tests de DOM et l’inspection des règles CSS ne constituent pas une vérification du rendu. Aucun des huit contrôles ci-dessous n’est annoncé comme visuellement validé.

| Mode | Grand écran (1440 × 900) | Petit écran (390 × 844) |
| --- | --- | --- |
| Simulation simple | À vérifier | À vérifier |
| Simulation avancée | À vérifier | À vérifier |
| Simulation personnalisée | À vérifier | À vérifier |
| Calculer avec des données | À vérifier | À vérifier |

Ouvrir index.html dans un navigateur pour effectuer ces contrôles. Pour chaque taille : vérifier les quatre boutons, les champs, les menus longs, les graduations, les noms des méthodes et unités, les encadrés ouverts et fermés, l’absence de chevauchements ou de débordement horizontal de la page. Les SVG réduits peuvent rendre les mesures trop petites sur un écran étroit : leur lisibilité doit être examinée visuellement avant publication.

En simulation simple, lancer puis choisir chaque construction et ouvrir les résultats. En avancée, modifier a, b, σ et n, puis relancer. En personnalisée, parcourir les distributions et chaque type de point particulier. Dans Calculer, afficher les trois jeux, retirer puis rétablir les bibliothèques, déplier les sources et interprétations, puis saisir et importer des couples. Vérifier aussi la navigation au clavier et le focus visible.

## Publication

L’applet n’a pas été publiée pendant cette vérification. La validation visuelle ci-dessus reste à terminer avant diffusion.
# Vérification après déplacement — 23 octobre 2026

Depuis le dossier Régression : les 19 tests de calcul et les tests d’interface sur DOM simulé passent. Le contrôle `node tests/liens-locaux.cjs` confirme 28 liens locaux et les trois empreintes SHA-256 des sources. Les redirections conservées à l’ancienne racine ciblent les fichiers déplacés. Le navigateur automatisé refuse les URL file://; aucune vérification visuelle après déplacement n’est revendiquée.

