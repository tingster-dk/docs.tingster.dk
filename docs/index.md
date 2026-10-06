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
Tingster is a mobile-first auction house where businesses and private sellers turn usable
goods into bids instead of waste. Buyers swipe through lots on their phone, bid, and arrange
pickup or delivery; sellers get reach, and a record of what they kept out of the bin.
</p>

</div>

---

## Who these docs are for

You run an auction house, a webshop, or any site of your own, and you want your Tingster lots
to show up on it. These docs cover the **Tingster widgets**: one `<script>` tag that puts your
live listings on your own page. No build step, no API key, no login, no cookies on your
visitors.

```html
<script src="https://shop.tingster.dk/embed.js"
        data-tingster-widget="grid"
        data-seller="Your Company ApS"
        data-ref="your-site"></script>
```

<div class="grid cards" markdown>

- **`grid`** — a responsive grid of listings. Fills its container and grows to fit.
- **`swipe`** — an accept/decline card stack, sized for a sidebar or ad slot (300×600).
- **`card`** — one specific item.

</div>

[Quick start :material-arrow-right:](widgets/index.md){ .md-button .md-button--primary }
[See them running :material-arrow-right:](widgets/variants.md){ .md-button }

Buying or selling on Tingster itself, rather than embedding it? That lives at
[tingster.dk](https://tingster.dk).
