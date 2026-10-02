# Optionen

Alles wird über `data-`-Attribute am `<script>`-Tag selbst konfiguriert. Es gibt keine
JavaScript-API und nichts zu initialisieren.

| Attribut | Gilt für | Standard | Hinweise |
| --- | --- | --- | --- |
| `data-tingster-widget` | alle | — | **Pflicht.** `swipe`, `card` oder `grid`. |
| `data-product` | `card` | — | **Pflicht bei `card`.** Die Artikel-ID auf Tingster. |
| `data-seller` | `swipe`, `grid` | alle Verkäufer | Ihr Verkäufername **exakt so, wie er auf Tingster steht** — der Anzeigename (`"Pippo 2020 ApS"`), kein Slug und keine Nummer. Weglassen zeigt ganz Tingster. [Mehr](index.md#your-id) |
| `data-ref` | alle | — | Ein kurzes Kennzeichen, **das Sie selbst wählen** — es wird Ihnen nichts zugeteilt. Wird an ausgehende Links angehängt, damit Klicks von Ihrer Website erkennbar sind. Empfohlen. [Mehr](index.md#your-id) |
| `data-limit` | `swipe`, `grid` | `20` | Anzahl der geladenen Artikel. Maximal 50. |
| `data-locale` | alle | `da` | `da`, `en`, `de` oder `pl`. |
| `data-width` | alle | je Widget | CSS-Breite. `300`, `300px` und `80%` funktionieren alle — eine reine Zahl gilt als Pixel. Begrenzt auf 200–1600px bzw. 1–100%. |
| `data-height` | alle | je Widget | Starthöhe. Danach passt sich das Widget selbst an seinen Inhalt an — setzen Sie den Wert also nur, um zu steuern, was während des Ladens zu sehen ist. |

## Standardgrößen

| Widget | Breite | Starthöhe |
| --- | --- | --- |
| `swipe` | 300px | 600px |
| `card` | 300px | 420px |
| `grid` | 100% | 640px |

## Größe und Gestaltung

Das Widget wird in einem iframe dargestellt: Ihr CSS kommt nicht hinein, und sein CSS dringt
nicht auf Ihre Seite. Geben Sie Größe und Position stattdessen dem **umgebenden Container**:

```html
<aside style="width: 300px; margin: 0 auto">
  <script src="https://shop.tingster.dk/embed.js"
          data-tingster-widget="swipe"
          data-ref="ihre-website"></script>
</aside>
```

`data-width` wird nicht nur auf den Rahmen angewendet, sondern auch an das Widget übergeben —
ein `grid`, dem man sagt, dass es schmal ist, bricht auf eine Spalte um, statt überzulaufen.

## Zuordnung von Klicks

Ausgehende Klicks tragen `utm_source=embed`, `utm_medium=widget`, `utm_content=<widget>` und
`ref=<Ihr data-ref>`. Setzen Sie `data-ref` auf etwas Festes je Website oder je Platzierung,
dann ist Ihr Widget-Traffic auf der anderen Seite identifizierbar.

## Datenschutz

Das Widget setzt keine Cookies bei Ihren Besuchern, und es ist kein Login beteiligt.
