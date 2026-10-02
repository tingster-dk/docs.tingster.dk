# Working on these docs

The content is plain Markdown in `docs/`. The site is
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).

## Run it locally

```bash
nix-shell        # creates .venv and installs mkdocs-material
mkdocs serve
```

Open <http://localhost:8000>. Rebuilds on save. Use `localhost`, not `127.0.0.1` — the
widget's height-reporting only trusts https origins and localhost.

## Layout

```
mkdocs.yml                     nav, theme, brand colour, logo
docs/index.md                  landing page
docs/widgets/*.md              the documentation — widgets is the only topic
docs/assets/extra.css          Tingster orange (#FF5722) + live-preview styling
docs/assets/demo.js            renders each live preview from the snippet below it
docs/assets/logo.svg           header mark (white); favicon.svg is the orange copy
```

## Adding a live widget preview

Put an empty demo box directly above a fenced `html` block. `demo.js` reads the snippet out of
the code block and runs it in the box, so the preview and the copy-paste code can never drift:

````markdown
<div class="widget-demo" data-widget-demo="grid"></div>

```html
<script src="https://shop.tingster.dk/embed.js"
        data-tingster-widget="grid"></script>
```
````

The `data-widget-demo` value (`grid` / `swipe` / `card`) only sets the box's minimum height
while the widget loads.

## Source of truth

The widget itself lives in `tingster-web-app` (`public/embed.js`, `lib/embed/`, `app/embed/`).
When its attributes change, update `docs/widgets/options.md` here.

Note that `data-ref` is free-text attribution only (`lib/embed/config.ts`) — nothing resolves
it against a record. `data-seller` is the one that is actually matched, against the seller's
public display name. Don't let the docs imply an id is issued.

## Deployment

Not wired up yet — local preview only.
