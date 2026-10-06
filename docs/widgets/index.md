# Quick start

Paste this where the widget should appear:

<div class="widget-demo" data-widget-demo="grid"></div>

```html
<script src="https://shop.tingster.dk/embed.js"
        data-tingster-widget="grid"
        data-limit="6"
        data-ref="docs"></script>
```

The box above is that snippet, running. Every preview on this site is rendered from the code
block beneath it, so what you copy is exactly what you saw.

## What happens

1. `embed.js` loads from `shop.tingster.dk` and reads the `data-` attributes off its own tag.
2. It replaces that tag with an iframe pointing at the matching widget — so the widget lands
   precisely where you wrote the script, not at the end of the page.
3. The widget measures itself and reports its height back to your page, so it grows to fit its
   content without you guessing a number.

## Your seller name and your ref { #your-id }

Two attributes are about *you*, and they work differently. Neither is an id we hand out, so
there is nothing to request and nothing to wait for.

### `data-seller` — your public seller name

This is the one that decides **whose listings show**. It is your display name on Tingster,
written **exactly** as it appears on your seller page — spaces, capitalisation, and the
company suffix included:

```html
data-seller="Pippo 2020 ApS"
```

Not a slug, not a customer number, not your login. Open your own seller page on
[shop.tingster.dk](https://shop.tingster.dk) and copy the name from the top of it. Leave the
attribute out entirely and the widget shows all of Tingster.

### `data-ref` — a label you choose

A short tag of your own invention. It rides along on every link the widget sends to Tingster,
so traffic from your site is recognisable:

```html
data-ref="vores-hjemmeside"
```

Any short text works. Use a different value per placement — `forside`, `sidebar`,
`nyhedsbrev` — and you can tell them apart afterwards.

!!! question "Not selling on Tingster yet?"

    We take on auction houses directly rather than through a signup form. Write to
    [kontakt@tingster.dk](mailto:kontakt@tingster.dk) and we'll get you set up.

## Next steps

- [The three widgets](variants.md) — grid, swipe and card, each running live.
- [Options](options.md) — the full attribute list.

!!! tip "Prefer to click than to read?"

    [`shop.tingster.dk/embed/preview`](https://shop.tingster.dk/embed/preview) renders all
    three widgets next to their snippets. Add `?seller=<your name>&product=<an id>` to
    preview with your own data.
