# Kom godt i gang

Indsæt dette der, hvor widgeten skal vises:

<div class="widget-demo" data-widget-demo="grid"></div>

```html
<script src="https://shop.tingster.dk/embed.js"
        data-tingster-widget="grid"
        data-limit="6"
        data-ref="docs"></script>
```

Boksen ovenfor *er* den kodestump, der kører. Alle eksempler på dette site bliver vist ud fra
kodeblokken lige under dem, så det, du kopierer, er præcis det, du har set.

## Hvad der sker

1. `embed.js` hentes fra `shop.tingster.dk` og læser `data-`-attributterne på sit eget tag.
2. Den erstatter tagget med en iframe, der peger på den valgte widget — så widgeten lander
   præcis dér, hvor du skrev scriptet, og ikke nederst på siden.
3. Widgeten måler sig selv og melder sin højde tilbage til din side, så den vokser med sit
   indhold, uden at du skal gætte et tal.

## Dit sælgernavn og dit ref { #your-id }

To attributter handler om *dig*, og de virker forskelligt. Ingen af dem er et id, vi udsteder,
så der er intet at ansøge om og intet at vente på.

### `data-seller` — dit offentlige sælgernavn

Det er den, der afgør, **hvis varer der vises**. Det er dit visningsnavn på Tingster, skrevet
**nøjagtigt** som det står på din sælgerside — mellemrum, store bogstaver og selskabsform
inklusive:

```html
data-seller="Pippo 2020 ApS"
```

Ikke et slug, ikke et kundenummer og ikke dit login. Åbn din egen sælgerside på
[shop.tingster.dk](https://shop.tingster.dk) og kopiér navnet øverst. Udelader du attributten
helt, viser widgeten hele Tingster.

### `data-ref` — en mærkat, du selv vælger

En kort tekst, du selv finder på. Den følger med på alle de links, widgeten sender til
Tingster, så trafik fra dit site er til at kende:

```html
data-ref="vores-hjemmeside"
```

Enhver kort tekst dur. Brug forskellige værdier til forskellige placeringer — `forside`,
`sidebar`, `nyhedsbrev` — så kan du skelne dem bagefter.

!!! question "Sælger du ikke på Tingster endnu?"

    Vi tager auktionshuse ind direkte frem for gennem en tilmeldingsformular. Skriv til
    [kontakt@tingster.dk](mailto:kontakt@tingster.dk), så sætter vi dig op.

## Næste skridt

- [De tre widgets](variants.md) — grid, swipe og card, alle sammen live.
- [Indstillinger](options.md) — den fulde liste over attributter.

!!! tip "Hellere klikke end læse?"

    [`shop.tingster.dk/embed/preview`](https://shop.tingster.dk/embed/preview) viser alle tre
    widgets ved siden af deres kodestumper. Tilføj `?seller=<dit navn>&product=<et id>` for at
    se dem med dine egne data.
