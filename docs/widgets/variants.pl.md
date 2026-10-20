# Trzy widżety

Ten sam skrypt, inna wartość `data-tingster-widget`. Każdy podgląd poniżej działa na żywo.

## `grid` — wszystkie oferty

Responsywna siatka. Wypełnia szerokość kontenera i rośnie wraz z zawartością. Nadaje się na
osobną podstronę w stylu „nasze aukcje".

<div class="widget-demo" data-widget-demo="grid"></div>

```html
<script src="https://shop.tingster.dk/embed.js"
        data-tingster-widget="grid"
        data-limit="12"
        data-ref="twoja-strona"></script>
```

## `swipe` — stos kart do przyjęcia lub odrzucenia

W rozmiarze paska bocznego albo slotu reklamowego (domyślnie 300×600). Odwiedzający
przesuwają, przeciągają albo używają strzałek; przyjęcie otwiera daną ofertę na Tingsterze w
nowej karcie.

<div class="widget-demo" data-widget-demo="swipe" data-demo-seller=""></div>

```html
<aside style="width: 300px">
  <script src="https://shop.tingster.dk/embed.js"
          data-tingster-widget="swipe"
          data-seller="Twoja Firma Sp. z o.o."
          data-ref="twoja-strona"></script>
</aside>
```

!!! note "`data-seller` to nazwa wyświetlana"

    Dokładnie taka, jak na Tingsterze — `"Pippo 2020 ApS"`, ze spacjami i wielkimi literami.
    Nie slug, nie numer. Pomiń ten atrybut, aby pokazać cały Tingster.

## `card` — jedna konkretna oferta

<div class="widget-demo" data-widget-demo="card" data-demo-product="0hn7eQxkL2YIllaTjdwX"></div>

```html
<script src="https://shop.tingster.dk/embed.js"
        data-tingster-widget="card"
        data-product="AAA00021"
        data-ref="twoja-strona"></script>
```

`data-product` jest tutaj wymagany — bez niego znacznik zostanie zignorowany.

## Kilka widżetów na jednej stronie

Powtarzaj znacznik `<script>` dowolną liczbę razy, możesz też wielokrotnie ładować `embed.js`.
Każdy znacznik inicjalizuje się dokładnie raz, a widżety nigdy nie zmieniają sobie nawzajem
rozmiaru ani nie przeszkadzają sobie. Ta strona sama jest przykładem trzech widżetów na jednej
stronie.
