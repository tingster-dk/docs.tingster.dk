---
title: Tingster Docs
hide:
  - navigation
  - toc
---

<div class="hero" markdown>

![Tingster](assets/favicon.svg){ .hero__logo }

# Tingster Docs

<p class="hero__tagline">Danmarks nye auktionshus — på din mobil.</p>

<p class="hero__lead">
Tingster er et mobilt auktionshus, hvor både virksomheder og private sælger brugbare varer
videre i stedet for at smide dem ud. Købere swiper sig gennem varerne på telefonen, byder og
aftaler afhentning eller levering. Sælgere får rækkevidde — og dokumentation for, hvad de har
holdt ude af skraldespanden.
</p>

</div>

---

## Hvem er denne dokumentation til?

Du driver et auktionshus, en webshop eller bare dit eget site, og du vil have dine
Tingster-varer vist på det. Denne dokumentation handler om **Tingster-widgets**: ét
`<script>`-tag, der sætter dine aktuelle varer ind på din egen side. Ingen byggetrin, ingen
API-nøgle, intet login og ingen cookies hos dine besøgende.

```html
<script src="https://shop.tingster.dk/embed.js"
        data-tingster-widget="grid"
        data-seller="Dit Firma ApS"
        data-ref="dit-site"></script>
```

<div class="grid cards" markdown>

- **`grid`** — et responsivt gitter med varer. Fylder sin beholder og vokser med indholdet.
- **`swipe`** — en swipe-stak til ja/nej, i størrelse til en sidebar eller annonceplads (300×600).
- **`card`** — én bestemt vare.

</div>

[Kom godt i gang :material-arrow-right:](widgets/index.md){ .md-button .md-button--primary }
[Se dem køre :material-arrow-right:](widgets/variants.md){ .md-button }

Skal du købe eller sælge på Tingster i stedet for at indlejre det? Det foregår på
[tingster.dk](https://tingster.dk).
