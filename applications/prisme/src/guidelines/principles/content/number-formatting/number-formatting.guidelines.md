# Séparateur de milliers et de décimales (radix)
En ce qui concerne le séparateur de décimales (radix), on retient une option parmi 2 choix :
- La virgule
- Le point

Pour ce qui est du séparateur de milliers, il y a deux choix :
- la virgule
- l'espace fine insécable ("U+2009", "\&#8239;" ou "\&#x202F;")

| Locale | Séparateur de milliers | Radix   | Format           |
| :----- | :--------------------- | :------ | :--------------- |
| FR     | espace fine            | virgule | 4 294 967 295,00 |
| DE     | point                  | virgule | 4.294.967.295,00 |
| IT     | point                  | virgule | 4.294.967.295,00 |
| ES     | point                  | virgule | 4.294.967.295,00 |
| EN-GB  | virgule                | point   | 4,294,967,295.00 |
| EN-US  | virgule                | point   | 4,294,967,295.00 |
| NL     | point                  | virgule | 4.294.967.295,00 |

*Séparateurs dans les langues supportées par Lucca*

Pour éviter toute confusion dans les documents internationaux (entre radix et séparateur des milliers), il est **devenu courant d'imposer l'espace fine insécable comme séparateur universel des milliers**.

> *The symbol for the decimal marker shall be either the point on the line or the comma on the line.*
> *Numbers may be divided in groups of three in order to facilitate reading; neither dots nor commas are ever inserted in the spaces between groups.*
>
> \- 22ème Conférence Générale sur les Poids et Mesures (2003)

# Les montants de devises
Dans la majorité des cultures, la devise (code ou symbole) est située après le montant, précédée par un espace insécable.
<div class="markdown-dualDisplay">
<div class="markdown-block mod-positive">

- 20.00 €

</div>
<div class="markdown-block mod-negative">

- 20.00€
- € 20.00

</div>
</div>

### Culture anglo-saxonne
Dans les pays anglo-saxons, le symbole ou le code de la devise se situe avant le montant. Si c'est le symbole qui est utilisé, il n'y a pas d'espace entre celui-ci et le montant, mais si c'est le code de la devise qui est préféré, on retrouve alors un espace insécable entre les deux.
<div class="markdown-dualDisplay">
<div class="markdown-block mod-positive">

- £20.00
- GBP 20.00

</div>
<div class="markdown-block mod-negative">

- £ 20.00
- GBP20.00

</div>
</div>

# Arrondis
Afin de simplifier l'interprétation des chiffres, il est courant de les arrondir au millier / million / milliard le plus proche. Dans ce cas là, on arrondira au supérieur.
![exemple](guidelines/principles/content/number-formatting/images/rounding.png)

Les unités pour les arrondis n'ont pas de normes définies aujourd'hui. Chez Lucca on utilisera les notations suivantes :
- K pour arrondir au millier
- M pour arrondir au million
- B pour arrondir au milliard

<div class="markdown-dualDisplay">
<div class="markdown-block mod-positive">

- 200 K€
- 300 B€

</div>
<div class="markdown-block mod-negative">

- 200 Mn€
- 300 Md€

</div>
</div>

Si un arrondi de ce type est appliqué il faut:

- soit le préciser clairement en en-tête lorsqu'on est dans le contexte d'un tableau (e.g. "*PIB (M€)*") ;
- soit le préciser à chaque fois, en retenant la notation "€ 3,412,250K" / "€ 3,412M" / "€ 3B".

# Affichage en tableau
1. Les cellules contenant des chiffres devront toujours être **ferrés à droite** (en-tête comprise).

2. Les chiffres devront être "**cadrés sur le séparateur de décimale**", c'est-à-dire que le chiffre des dizaines, des centaines, des milliers, etc.. de chaque cellule doivent être alignés verticalement. Les décimales, lorsque nulles, pourront ne pas être affichées.

3. On privilégiera donc systématiquement l'alignement tabulaire (tous les chiffres ont la même chasse / largeur) plutôt que proportionnel. On utilisera pour cela la propriété CSS :

```
font-feature-settings: 'tnum';
```

4. Dans des tableaux comptables (cellules contenant des montants de devises, donc), il sera possible d'**afficher les mouvements débiteurs entre parenthèses** (uniquement le chiffre, pas l'unité), auquel cas le caractère "-" ne sera pas affiché. Par exemple : "USD (2,000.00)" plutôt que "USD -2,000.00". Notons que la présence de ces parenthèses, et plus particulièrement la dernière, ne doit en aucun cas déroger au principe d'alignement vertical des chiffres (cf 2.).

5. L'**unité devrait toujours être précisée entre parenthèses dans l'en-tête du tableau** (e.g. "Montant (EUR)"). Si ça n'est pas possible, alors il faudra la rappeler dans chaque cellule.

![exemple](guidelines/principles/content/number-formatting/images/table.png)

# Horaire et durée

L'affichage d'un horaire et d'une durée ne doivent pas être confondues.

### L'horaire → 08:12:45

Un horaire sera toujours affiché au format suivant : "(hh):(mm):(ss)" et ce quelle que soit la langue. Par défaut, il sera affiché en base 24, c'est-à-dire qu'on privilégiera "18:30:00" à "06:30:00 PM". Dans le cadre de notre volonté d'internationalisation, il sera cela dit probablement nécessaire d'en faire un paramètre qui relève des préférences de l'utilisateur.

Enfin, notons que la norme ISO-8601 reconnaît les deux notations "2017-12-31T24:00:00" et "2018-01-01T00:00:00" pour la désignation de minuit (ici le nouvel an). En termes d'interface, lorsque dans le contexte de la définition d'un segment horaire (horaire de début - horaire de fin) sans précision systématique de la date du jour, on tâchera de réserver la notation "00:00:00" pour l'horaire de début, et "24:00:00" pour l'horaire de fin.

### La durée → 8 h 12 min 45 s

Une durée sera exprimée en français sous la forme suivante : "(jj) j et (hh) h (mm) min (ss) s". Par exemple : "2 j 2 h 45 min 23 s".

On évitera autant que possible d'afficher une durée exprimée dans une unité qui n'est pas décimale (base 10) en notation décimale (avec une partie fractionnaire). Ainsi, on ne dira pas "2,5 h" mais plutôt "2 h 30 min" mais on pourra écrire "2,5 jours" ou "300,2541 secondes".

Voici les différentes traductions des abréviations d'unité :

| Locale | Days | Hours | Minutes | Seconds |
| :----- | :--- | :---- | :------ | :------ |
| FR     | j    | h     | min     | s       |
| DE     |      |       |         |         |
| IT     |      |       |         |         |
| ES     | d    | h     | min     | s       |
| EN-GB  | d    | h     | min     | s       |
| EN-US  | d    | h     | min     | s       |
| NL     |      |       |         |         |
