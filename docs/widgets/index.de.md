# Schnellstart

Fügen Sie das dort ein, wo das Widget erscheinen soll:

<div class="widget-demo" data-widget-demo="grid"></div>

```html
<script src="https://shop.tingster.dk/embed.js"
        data-tingster-widget="grid"
        data-limit="6"
        data-ref="docs"></script>
```

Der Kasten oben *ist* dieses Snippet, in Aktion. Jede Vorschau auf dieser Website wird aus dem
Codeblock darunter erzeugt — was Sie kopieren, ist also genau das, was Sie gesehen haben.

## Was dabei passiert

1. `embed.js` wird von `shop.tingster.dk` geladen und liest die `data-`-Attribute an seinem
   eigenen Tag aus.
2. Es ersetzt dieses Tag durch ein iframe, das auf das passende Widget zeigt — das Widget
   landet also genau dort, wo Sie das Script geschrieben haben, und nicht am Seitenende.
3. Das Widget misst sich selbst und meldet seine Höhe an Ihre Seite zurück. So wächst es mit
   seinem Inhalt, ohne dass Sie eine Zahl raten müssen.

## Ihr Verkäufername und Ihr Ref { #your-id }

Zwei Attribute betreffen *Sie* und funktionieren unterschiedlich. Keines davon ist eine ID,
die wir vergeben — es gibt also nichts zu beantragen und auf nichts zu warten.

### `data-seller` — Ihr öffentlicher Verkäufername

Dieses Attribut entscheidet, **wessen Angebote erscheinen**. Es ist Ihr Anzeigename auf
Tingster, **exakt** so geschrieben, wie er auf Ihrer Verkäuferseite steht — mit Leerzeichen,
Groß- und Kleinschreibung und Rechtsform:

```html
data-seller="Pippo 2020 ApS"
```

Kein Slug, keine Kundennummer, nicht Ihr Login. Öffnen Sie Ihre eigene Verkäuferseite auf
[shop.tingster.dk](https://shop.tingster.dk) und kopieren Sie den Namen von ganz oben. Lassen
Sie das Attribut ganz weg, zeigt das Widget ganz Tingster.

### `data-ref` — ein Kürzel, das Sie selbst wählen

Ein kurzes Kennzeichen, das Sie sich selbst ausdenken. Es wird an jeden Link angehängt, den
das Widget zu Tingster schickt — so ist Traffic von Ihrer Website erkennbar:

```html
data-ref="unsere-website"
```

Jeder kurze Text funktioniert. Vergeben Sie pro Platzierung einen eigenen Wert — `startseite`,
`sidebar`, `newsletter` — dann lassen sie sich später auseinanderhalten.

!!! question "Noch nicht auf Tingster am Verkaufen?"

    Wir nehmen Auktionshäuser direkt auf, nicht über ein Anmeldeformular. Schreiben Sie an
    [kontakt@tingster.dk](mailto:kontakt@tingster.dk), dann richten wir Sie ein.

## Weiter geht's

- [Die drei Widgets](variants.md) — grid, swipe und card, alle live.
- [Optionen](options.md) — die vollständige Attributliste.

!!! tip "Lieber klicken als lesen?"

    [`shop.tingster.dk/embed/preview`](https://shop.tingster.dk/embed/preview) zeigt alle drei
    Widgets neben ihren Snippets. Mit `?seller=<Ihr Name>&product=<eine ID>` sehen Sie sie mit
    Ihren eigenen Daten.
