# Options

Everything is configured with `data-` attributes on the `<script>` tag itself. There is no
JavaScript API and nothing to initialise.

| Attribute | Applies to | Default | Notes |
| --- | --- | --- | --- |
| `data-tingster-widget` | all | — | **Required.** `swipe`, `card`, or `grid`. |
| `data-product` | `card` | — | **Required for `card`.** The Tingster item id. |
| `data-seller` | `swipe`, `grid` | all sellers | Your seller name **exactly as it appears on Tingster** — the display name (`"Pippo 2020 ApS"`), not a slug or a number. Omit to show all of Tingster. [More](index.md#your-id) |
| `data-ref` | all | — | A short label **you choose yourself** — nothing is issued to you. Added to outgoing links so clicks from your site are recognisable. Recommended. [More](index.md#your-id) |
| `data-limit` | `swipe`, `grid` | `20` | Number of items to load. Capped at 50. |
| `data-locale` | all | `da` | `da`, `en`, `de`, or `pl`. |
| `data-width` | all | per widget | CSS width. `300`, `300px` and `80%` all work — a bare number is treated as pixels. Clamped to 200–1600px, or 1–100%. |
| `data-height` | all | per widget | Starting height. The widget then auto-resizes to its content, so set this only to control what shows while it loads. |

## Default sizes

| Widget | Width | Starting height |
| --- | --- | --- |
| `swipe` | 300px | 600px |
| `card` | 300px | 420px |
| `grid` | 100% | 640px |

## Sizing and styling

The widget renders in an iframe, so your CSS cannot reach inside it and its CSS cannot leak
into your page. Size and position the **surrounding container** instead:

```html
<aside style="width: 300px; margin: 0 auto">
  <script src="https://shop.tingster.dk/embed.js"
          data-tingster-widget="swipe"
          data-ref="your-site"></script>
</aside>
```

`data-width` is passed to the widget as well as applied to the frame — a `grid` told it is
narrow collapses to a single column rather than overflowing.

## Attribution

Outgoing clicks carry `utm_source=embed`, `utm_medium=widget`, `utm_content=<widget>`, and
`ref=<your data-ref>`. Set `data-ref` to something stable per site or per placement and your
widget traffic is identifiable on the other side.

## Privacy

No cookies are set on your visitors by the widget, and no login is involved.
