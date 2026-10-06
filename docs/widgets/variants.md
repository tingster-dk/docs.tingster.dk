# The three widgets

Same script, different `data-tingster-widget`. Each preview below is live.

## `grid` — all listings

A responsive grid. Fills the width of its container and grows to fit its contents. Use it for
a dedicated "our auctions" page.

<div class="widget-demo" data-widget-demo="grid"></div>

```html
<script src="https://shop.tingster.dk/embed.js"
        data-tingster-widget="grid"
        data-limit="12"
        data-ref="your-site"></script>
```

## `swipe` — accept/decline card stack

Sized for a sidebar or ad slot (300×600 by default). Visitors swipe, drag, or use the arrow
keys; accepting opens that item on Tingster in a new tab.

<div class="widget-demo" data-widget-demo="swipe"></div>

```html
<aside style="width: 300px">
  <script src="https://shop.tingster.dk/embed.js"
          data-tingster-widget="swipe"
          data-seller="Your Company ApS"
          data-ref="your-site"></script>
</aside>
```

!!! note "`data-seller` is the display name"

    Exactly as it appears on Tingster — `"Pippo 2020 ApS"`, spaces and capitalisation
    included. Not a slug, not a number. Omit it to show all of Tingster.

## `card` — one specific item

<div class="widget-demo" data-widget-demo="card"></div>

```html
<script src="https://shop.tingster.dk/embed.js"
        data-tingster-widget="card"
        data-product="AAA00021"
        data-ref="your-site"></script>
```

`data-product` is required here — without it the tag is ignored.

## Putting several on one page

Repeat the `<script>` tag as many times as you like, including loading `embed.js` more than
once. Each tag initialises exactly once, and widgets never resize or interfere with each
other. This page is itself three widgets on one page.
