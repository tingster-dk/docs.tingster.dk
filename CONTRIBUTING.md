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

## Languages

English is the default and is served from the site root. Danish, German and Polish are built
to `/da/`, `/de/` and `/pl/`, and the header gets a language picker.

Translations live beside each page with a locale suffix:

```
docs/widgets/options.md      English (the default — no suffix)
docs/widgets/options.da.md   Dansk
docs/widgets/options.de.md   Deutsch
docs/widgets/options.pl.md   Polski
```

A missing translation is **not** an error — that language simply falls back to the English
page, so you can add a language or a page one file at a time. When you change an English page,
update the three siblings or accept that readers see the old wording in their language.

Section and page titles in the nav are translated in `mkdocs.yml` under each locale's
`nav_translations`, keyed by the **English** title. Rename a nav entry in `nav:` and you must
rename its key in all three `nav_translations` blocks too.

Two things stay the same in every language: `{ #your-id }` on the seller-name heading in
`widgets/index*.md` (cross-page links point at it), and the `data-widget-demo` markup for the
live previews.

`theme.features` deliberately does **not** include `navigation.instant` — it breaks the
language picker's "stay on this page" behaviour.

## Source of truth

The widget itself lives in `tingster-web-app` (`public/embed.js`, `lib/embed/`, `app/embed/`).
When its attributes change, update `docs/widgets/options.md` here.

Note that `data-ref` is free-text attribution only (`lib/embed/config.ts`) — nothing resolves
it against a record. `data-seller` is the one that is actually matched, against the seller's
public display name. Don't let the docs imply an id is issued.

## Deployment

Not wired up yet — local preview only.
