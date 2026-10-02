---
title: Tingster Docs
---

# Tingster widgets

Show live Tingster auction listings on your own website. One `<script>` tag, no build step,
no API key, no login. Items link back to Tingster, where the bidding happens.

```html
<script src="https://shop.tingster.dk/embed.js"
        data-tingster-widget="grid"
        data-seller="Your Company ApS"
        data-ref="your-site"></script>
```

That is the whole integration. The script replaces itself with an iframe at that exact spot.

## The three widgets

<div class="grid cards" markdown>

- **`grid`** — a responsive grid of listings. Fills its container and grows to fit.
- **`swipe`** — an accept/decline card stack, sized for a sidebar or ad slot (300×600).
- **`card`** — one specific item.

</div>

[Quick start :material-arrow-right:](widgets/index.md){ .md-button .md-button--primary }
[See them running :material-arrow-right:](widgets/variants.md){ .md-button }
