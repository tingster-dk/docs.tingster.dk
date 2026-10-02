# Indstillinger

Alt sættes op med `data-`-attributter på selve `<script>`-tagget. Der er ingen JavaScript-API
og intet, der skal initialiseres.

| Attribut | Gælder for | Standard | Noter |
| --- | --- | --- | --- |
| `data-tingster-widget` | alle | — | **Påkrævet.** `swipe`, `card` eller `grid`. |
| `data-product` | `card` | — | **Påkrævet for `card`.** Varens id på Tingster. |
| `data-seller` | `swipe`, `grid` | alle sælgere | Dit sælgernavn **nøjagtigt som det står på Tingster** — visningsnavnet (`"Pippo 2020 ApS"`), ikke et slug eller et nummer. Udelad den for at vise hele Tingster. [Mere](index.md#your-id) |
| `data-ref` | alle | — | En kort mærkat, **du selv vælger** — der bliver ikke udstedt noget til dig. Følger med på udgående links, så klik fra dit site er til at kende. Anbefales. [Mere](index.md#your-id) |
| `data-limit` | `swipe`, `grid` | `20` | Antal varer, der hentes. Maks. 50. |
| `data-locale` | alle | `da` | `da`, `en`, `de` eller `pl`. |
| `data-width` | alle | pr. widget | CSS-bredde. `300`, `300px` og `80%` virker alle — et tal alene opfattes som pixels. Begrænses til 200–1600px eller 1–100%. |
| `data-height` | alle | pr. widget | Starthøjde. Derefter tilpasser widgeten selv sin højde til indholdet, så sæt den kun for at styre, hvad der vises, mens den indlæses. |

## Standardstørrelser

| Widget | Bredde | Starthøjde |
| --- | --- | --- |
| `swipe` | 300px | 600px |
| `card` | 300px | 420px |
| `grid` | 100% | 640px |

## Størrelse og styling

Widgeten vises i en iframe, så din CSS kan ikke nå ind i den, og dens CSS kan ikke sive ud på
din side. Sæt størrelse og placering på **beholderen udenom** i stedet:

```html
<aside style="width: 300px; margin: 0 auto">
  <script src="https://shop.tingster.dk/embed.js"
          data-tingster-widget="swipe"
          data-ref="dit-site"></script>
</aside>
```

`data-width` sendes både til widgeten og sættes på rammen — et `grid`, der får at vide, at det
er smalt, falder sammen til én kolonne i stedet for at flyde over.

## Attribuering

Udgående klik bærer `utm_source=embed`, `utm_medium=widget`, `utm_content=<widget>` og
`ref=<din data-ref>`. Sæt `data-ref` til noget fast pr. site eller pr. placering, så er din
widget-trafik til at genkende i den anden ende.

## Privatliv

Widgeten sætter ingen cookies hos dine besøgende, og der er intet login involveret.
