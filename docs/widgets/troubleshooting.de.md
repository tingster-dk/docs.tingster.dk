# Fehlerbehebung

## Es erscheint nichts

Schauen Sie in die Browser-Konsole. Das Tag wird stillschweigend ignoriert, wenn:

- `data-tingster-widget` fehlt oder falsch geschrieben ist — es muss exakt `swipe`, `card`
  oder `grid` lauten.
- das Widget `card` ist und `data-product` fehlt.

## Das Widget zeigt Artikel, die nicht meine sind

`data-seller` hat nicht gepasst. Es ist der exakte Anzeigename von Tingster, mit Leerzeichen
und Groß-/Kleinschreibung — `"Pippo 2020 ApS"`, nicht `pippo-2020` und keine Kundennummer.
Siehe [Ihr Verkäufername und Ihr Ref](index.md#your-id).

## Es wird als unformatierter Text dargestellt

Sie haben eine veraltete, zwischengespeicherte Fassung von `embed.js`. Laden Sie die Seite
hart neu.

## Content Security Policy

Sendet Ihre Website einen CSP-Header, erlauben Sie `https://shop.tingster.dk` in beiden
Direktiven:

```
script-src  https://shop.tingster.dk;   /* embed.js */
frame-src   https://shop.tingster.dk;   /* das Widget selbst */
```

## Liefern Sie Ihre Seite über HTTPS aus

Das Widget lässt sich auf einer `http://`-Seite nicht einbetten.

## Das Widget passt seine Höhe nicht an

Die Höhe wird vom Widget per `postMessage` an Ihre Seite zurückgemeldet, und dafür muss der
Origin Ihrer Seite ein echter `https://`-Origin sein. Auf einer einfachen `http://`-Seite
bleibt das Widget auf seiner Starthöhe stehen — setzen Sie `data-height` auf einen sinnvollen
Wert oder wechseln Sie auf HTTPS.

## Immer noch ratlos

Vergleichen Sie mit [`shop.tingster.dk/embed/preview`](https://shop.tingster.dk/embed/preview),
wo alle drei Widgets neben ihren exakten Snippets stehen. Funktioniert es dort, aber nicht bei
Ihnen, liegt der Unterschied auf Ihrer Seite — meist CSP, HTTP oder ein Tag-Manager, der die
`data-`-Attribute entfernt.
