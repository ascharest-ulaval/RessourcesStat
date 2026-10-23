# Lisibilité et couleurs

## Axes pour la projection
Les nombres du nuage de points passent de 14 à 24 unités SVG, avec un texte plus foncé. La marge gauche est élargie, les nombres de l'axe vertical alignés à droite et ceux de l'axe horizontal centrés sous les graduations. Les unités SVG sont redimensionnées avec le graphique : elles ne correspondent pas à une taille fixe en pixels à l'écran.

## Daltonisme : ce que les sources permettent d'affirmer
Consultation le 20 octobre 2026 : [Color Universal Design, Masataka Okabe et Kei Ito](https://jfly.uni-koeln.de/color/). Les auteurs proposent une palette comprenant notamment orange, bleu et pourpre rougeâtre, et recommandent d'associer les couleurs à des formes, positions ou types de traits. Le choix doit tenir compte de l'éclairage et de l'utilisation.

[Claus Wilke, Fundamentals of Data Visualization, chapitre 19](https://clauswilke.com/dataviz/color-pitfalls.html) présente les valeurs exactes de la palette Okabe–Ito, notamment orange #E69F00, bleu #0072B2 et pourpre rougeâtre #CC79A7. Les noms « orange, mauve, bleu » ne suffisent pas à garantir que n'importe quelles nuances se distinguent.

À la demande de l'utilisateur, la palette actuelle utilise les nuances exactes Okabe–Ito : Mayer orange #E69F00, médiane-médiane pourpre rougeâtre #CC79A7, moindres carrés bleu #0072B2. Ces couleurs sont utilisées dans les droites, la légende, les distributions et les groupes de construction. Les noms et équations de la légende gardent un texte foncé pour la lisibilité. Le choix de cette palette ne constitue pas une validation de toute l'application pour toutes les déficiences de perception des couleurs.

Les droites gardent trois styles : Mayer continu, médiane-médiane en tirets, moindres carrés en pointillés. La légende reprend ces styles et les noms. Cela suit le principe du [W3C, WCAG 2.2, utilisation de la couleur](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html) : la couleur ne doit pas être le seul moyen de distinguer l'information. Cela ne constitue pas une certification de conformité de toute l'application.

À valider sur le projecteur réel et, idéalement, avec des personnes concernées. En vue de construction, les groupes sont encore différenciés surtout par leur couleur; ne pas présenter l'ensemble de l'application comme pleinement accessible au daltonisme sans travail supplémentaire.
