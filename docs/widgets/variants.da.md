# De tre widgets

Samme script, forskellig `data-tingster-widget`. Alle eksempler herunder er live.

## `grid` — alle varer

Et responsivt gitter. Fylder bredden af sin beholder og vokser med indholdet. Brug den til en
side, der er dedikeret til "vores auktioner".

<div class="widget-demo" data-widget-demo="grid"></div>

```html
<script src="https://shop.tingster.dk/embed.js"
        data-tingster-widget="grid"
        data-limit="12"
        data-ref="dit-site"></script>
```

## `swipe` — swipe-stak til ja/nej

I størrelse til en sidebar eller en annonceplads (300×600 som standard). De besøgende swiper,
trækker eller bruger piletasterne; siger de ja, åbner varen på Tingster i en ny fane.

<div class="widget-demo" data-widget-demo="swipe"></div>

```html
<aside style="width: 300px">
  <script src="https://shop.tingster.dk/embed.js"
          data-tingster-widget="swipe"
          data-seller="Dit Firma ApS"
          data-ref="dit-site"></script>
</aside>
```

!!! note "`data-seller` er visningsnavnet"

    Nøjagtigt som det står på Tingster — `"Pippo 2020 ApS"`, mellemrum og store bogstaver
    inklusive. Ikke et slug, ikke et nummer. Udelad den for at vise hele Tingster.

## `card` — én bestemt vare

<div class="widget-demo" data-widget-demo="card"></div>

```html
<script src="https://shop.tingster.dk/embed.js"
        data-tingster-widget="card"
        data-product="AAA00021"
        data-ref="dit-site"></script>
```

`data-product` er påkrævet her — uden den bliver tagget ignoreret.

## Flere widgets på samme side

Gentag `<script>`-tagget så mange gange, du vil, og hent gerne `embed.js` mere end én gang.
Hvert tag initialiseres præcis én gang, og widgets ændrer aldrig størrelse på eller forstyrrer
hinanden. Denne side er selv tre widgets på én side.
