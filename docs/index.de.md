---
title: Tingster Docs
hide:
  - navigation
  - toc
---

<div class="hero" markdown>

![Tingster](assets/favicon.svg){ .hero__logo }

# Tingster Docs

<p class="hero__tagline">Dänemarks neues Auktionshaus — auf Ihrem Handy.</p>

<p class="hero__lead">
Tingster ist ein mobiles Auktionshaus, auf dem Unternehmen und Privatpersonen brauchbare Waren
weiterverkaufen, statt sie wegzuwerfen. Käufer wischen sich am Handy durch die Lose, bieten
und vereinbaren Abholung oder Lieferung. Verkäufer gewinnen Reichweite — und einen Nachweis
darüber, was sie aus der Tonne herausgehalten haben.
</p>

</div>

---

## Für wen ist diese Dokumentation?

Sie betreiben ein Auktionshaus, einen Webshop oder einfach Ihre eigene Website und möchten
Ihre Tingster-Lose dort zeigen. Diese Dokumentation behandelt die **Tingster-Widgets**: ein
einziges `<script>`-Tag, das Ihre aktuellen Angebote auf Ihrer eigenen Seite darstellt. Kein
Build-Schritt, kein API-Schlüssel, kein Login und keine Cookies bei Ihren Besuchern.

```html
<script src="https://shop.tingster.dk/embed.js"
        data-tingster-widget="grid"
        data-seller="Ihre Firma GmbH"
        data-ref="ihre-website"></script>
```

<div class="grid cards" markdown>

- **`grid`** — ein responsives Raster Ihrer Angebote. Füllt seinen Container und wächst mit.
- **`swipe`** — ein Kartenstapel zum Annehmen oder Ablehnen, passend für Sidebar oder Werbeplatz (300×600).
- **`card`** — ein einzelnes Los.

</div>

[Schnellstart :material-arrow-right:](widgets/index.md){ .md-button .md-button--primary }
[Live ansehen :material-arrow-right:](widgets/variants.md){ .md-button }

Sie möchten auf Tingster selbst kaufen oder verkaufen, statt es einzubinden? Das finden Sie
auf [tingster.dk](https://tingster.dk).
