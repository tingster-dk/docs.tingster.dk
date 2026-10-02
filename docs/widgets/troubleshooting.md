# Troubleshooting

## Nothing appears

Check the browser console. The tag is silently ignored when:

- `data-tingster-widget` is missing or misspelled — it must be exactly `swipe`, `card`, or
  `grid`.
- the widget is `card` and `data-product` is missing.

## The widget shows items that aren't mine

`data-seller` did not match. It is the exact display name from Tingster, including spaces and
capitalisation — `"Pippo 2020 ApS"`, not `pippo-2020` and not a customer number. See
[Your seller name and your ref](index.md#your-id).

## It renders as unstyled text

You are on a stale cached copy of `embed.js`. Hard-refresh the page.

## Content Security Policy

If your site sends a CSP header, allow `https://shop.tingster.dk` in both directives:

```
script-src  https://shop.tingster.dk;   /* embed.js */
frame-src   https://shop.tingster.dk;   /* the widget itself */
```

## Serve your page over HTTPS

The widget will not frame on an `http://` page.

## The widget doesn't resize

Height is reported from the widget back to your page by `postMessage`, and your page's origin
has to be a real `https://` origin for that message to be accepted. On a plain `http://` page
the widget stays at its starting height — set `data-height` to something sensible, or move to
HTTPS.

## Still stuck

Compare against [`shop.tingster.dk/embed/preview`](https://shop.tingster.dk/embed/preview),
which renders all three widgets next to their exact snippets. If it works there and not on
your page, the difference is in your page — usually CSP, HTTP, or a tag manager stripping the
`data-` attributes.
