# Die drei Widgets

Dasselbe Script, unterschiedliches `data-tingster-widget`. Jede Vorschau unten ist live.

## `grid` — alle Angebote

Ein responsives Raster. Füllt die Breite seines Containers und wächst mit seinem Inhalt.
Ideal für eine eigene Seite nach dem Motto „unsere Auktionen".

<div class="widget-demo" data-widget-demo="grid"></div>

```html
<script src="https://shop.tingster.dk/embed.js"
        data-tingster-widget="grid"
        data-limit="12"
        data-ref="ihre-website"></script>
```

## `swipe` — Kartenstapel zum Annehmen oder Ablehnen

Passend für eine Sidebar oder einen Werbeplatz (standardmäßig 300×600). Besucher wischen,
ziehen oder nutzen die Pfeiltasten; beim Annehmen öffnet sich das Los auf Tingster in einem
neuen Tab.

<div class="widget-demo" data-widget-demo="swipe"></div>

```html
<aside style="width: 300px">
  <script src="https://shop.tingster.dk/embed.js"
          data-tingster-widget="swipe"
          data-seller="Ihre Firma GmbH"
          data-ref="ihre-website"></script>
</aside>
```

!!! note "`data-seller` ist der Anzeigename"

    Exakt so, wie er auf Tingster steht — `"Pippo 2020 ApS"`, mit Leerzeichen und
    Groß-/Kleinschreibung. Kein Slug, keine Nummer. Weglassen zeigt ganz Tingster.

## `card` — ein einzelnes Los

<div class="widget-demo" data-widget-demo="card"></div>

```html
<script src="https://shop.tingster.dk/embed.js"
        data-tingster-widget="card"
        data-product="AAA00021"
        data-ref="ihre-website"></script>
```

`data-product` ist hier Pflicht — ohne das Attribut wird das Tag ignoriert.

## Mehrere Widgets auf einer Seite

Wiederholen Sie das `<script>`-Tag beliebig oft, auch `embed.js` darf mehrfach geladen werden.
Jedes Tag wird genau einmal initialisiert, und Widgets verändern oder stören einander nie.
Diese Seite ist selbst ein Beispiel für drei Widgets auf einer Seite.
