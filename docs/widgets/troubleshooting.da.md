# Fejlfinding

## Der sker ingenting

Kig i browserens konsol. Tagget bliver stiltiende ignoreret, når:

- `data-tingster-widget` mangler eller er stavet forkert — den skal være præcis `swipe`,
  `card` eller `grid`.
- widgeten er `card`, og `data-product` mangler.

## Widgeten viser varer, der ikke er mine

`data-seller` passede ikke. Det er det nøjagtige visningsnavn fra Tingster, mellemrum og store
bogstaver inklusive — `"Pippo 2020 ApS"`, ikke `pippo-2020` og ikke et kundenummer. Se
[Dit sælgernavn og dit ref](index.md#your-id).

## Den vises som tekst uden styling

Du sidder på en forældet, cachet kopi af `embed.js`. Lav en hård genindlæsning af siden.

## Content Security Policy

Sender dit site en CSP-header, skal `https://shop.tingster.dk` tillades i begge direktiver:

```
script-src  https://shop.tingster.dk;   /* embed.js */
frame-src   https://shop.tingster.dk;   /* selve widgeten */
```

## Server din side over HTTPS

Widgeten vil ikke vises i en ramme på en `http://`-side.

## Widgeten tilpasser ikke sin højde

Højden meldes fra widgeten tilbage til din side med `postMessage`, og din sides origin skal
være en rigtig `https://`-origin, før beskeden accepteres. På en almindelig `http://`-side
bliver widgeten stående i sin starthøjde — sæt `data-height` til noget fornuftigt, eller skift
til HTTPS.

## Stadig i tvivl

Sammenlign med [`shop.tingster.dk/embed/preview`](https://shop.tingster.dk/embed/preview), som
viser alle tre widgets ved siden af deres nøjagtige kodestumper. Virker det dér, men ikke på
din side, ligger forskellen på din side — typisk CSP, HTTP eller en tag manager, der fjerner
`data-`-attributterne.
