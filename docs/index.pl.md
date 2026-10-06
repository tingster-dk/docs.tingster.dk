---
title: Tingster Docs
hide:
  - navigation
  - toc
---

<div class="hero" markdown>

![Tingster](assets/favicon.svg){ .hero__logo }

# Tingster Docs

<p class="hero__tagline">Nowy dom aukcyjny Danii — w Twoim telefonie.</p>

<p class="hero__lead">
Tingster to mobilny dom aukcyjny, w którym firmy i osoby prywatne sprzedają dalej rzeczy wciąż
nadające się do użytku, zamiast je wyrzucać. Kupujący przesuwają oferty na telefonie, licytują
i umawiają odbiór albo dostawę. Sprzedający zyskują zasięg — i dowód na to, ile rzeczy
uchronili przed śmietnikiem.
</p>

</div>

---

## Dla kogo jest ta dokumentacja

Prowadzisz dom aukcyjny, sklep internetowy albo po prostu własną stronę i chcesz pokazywać na
niej swoje oferty z Tingstera. Ta dokumentacja dotyczy **widżetów Tingster**: jednego znacznika
`<script>`, który umieszcza Twoje aktualne oferty na Twojej stronie. Bez kroku budowania, bez
klucza API, bez logowania i bez ciasteczek u Twoich odwiedzających.

```html
<script src="https://shop.tingster.dk/embed.js"
        data-tingster-widget="grid"
        data-seller="Twoja Firma Sp. z o.o."
        data-ref="twoja-strona"></script>
```

<div class="grid cards" markdown>

- **`grid`** — responsywna siatka ofert. Wypełnia kontener i rośnie wraz z zawartością.
- **`swipe`** — stos kart do przyjęcia lub odrzucenia, w rozmiarze paska bocznego lub slotu reklamowego (300×600).
- **`card`** — jedna konkretna oferta.

</div>

[Szybki start :material-arrow-right:](widgets/index.md){ .md-button .md-button--primary }
[Zobacz je na żywo :material-arrow-right:](widgets/variants.md){ .md-button }

Chcesz kupować lub sprzedawać na samym Tingsterze, a nie go osadzać? To znajdziesz na
[tingster.dk](https://tingster.dk).
