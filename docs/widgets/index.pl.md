# Szybki start

Wklej to w miejscu, w którym ma się pojawić widżet:

<div class="widget-demo" data-widget-demo="grid"></div>

```html
<script src="https://shop.tingster.dk/embed.js"
        data-tingster-widget="grid"
        data-limit="6"
        data-ref="docs"></script>
```

Ramka powyżej *jest* tym fragmentem kodu w działaniu. Każdy podgląd na tej stronie powstaje z
bloku kodu pod nim, więc to, co kopiujesz, jest dokładnie tym, co zobaczyłeś.

## Co się dzieje

1. `embed.js` ładuje się z `shop.tingster.dk` i odczytuje atrybuty `data-` z własnego
   znacznika.
2. Zastępuje ten znacznik elementem iframe wskazującym na wybrany widżet — widżet trafia więc
   dokładnie tam, gdzie wpisałeś skrypt, a nie na koniec strony.
3. Widżet sam się mierzy i odsyła swoją wysokość do Twojej strony, dzięki czemu rośnie wraz z
   zawartością i nie musisz zgadywać żadnej liczby.

## Twoja nazwa sprzedawcy i Twój ref { #your-id }

Dwa atrybuty dotyczą *Ciebie* i działają inaczej. Żaden z nich nie jest identyfikatorem, który
przydzielamy — nie ma więc o co wnioskować ani na co czekać.

### `data-seller` — Twoja publiczna nazwa sprzedawcy

To ten atrybut decyduje, **czyje oferty się pokażą**. Jest to Twoja nazwa wyświetlana na
Tingsterze, zapisana **dokładnie** tak, jak widnieje na Twojej stronie sprzedawcy — razem ze
spacjami, wielkimi literami i formą prawną:

```html
data-seller="Pippo 2020 ApS"
```

Nie slug, nie numer klienta i nie Twój login. Otwórz własną stronę sprzedawcy na
[shop.tingster.dk](https://shop.tingster.dk) i skopiuj nazwę z góry. Jeśli pominiesz ten
atrybut, widżet pokaże cały Tingster.

### `data-ref` — etykieta, którą wybierasz sam

Krótkie oznaczenie Twojego pomysłu. Dołącza się do każdego linku, który widżet wysyła do
Tingstera, dzięki czemu ruch z Twojej strony jest rozpoznawalny:

```html
data-ref="nasza-strona"
```

Dowolny krótki tekst zadziała. Użyj innej wartości dla każdego miejsca — `strona-glowna`,
`pasek-boczny`, `newsletter` — a potem je rozróżnisz.

!!! question "Nie sprzedajesz jeszcze na Tingsterze?"

    Domy aukcyjne przyjmujemy bezpośrednio, a nie przez formularz rejestracji. Napisz na
    [kontakt@tingster.dk](mailto:kontakt@tingster.dk), a wszystko skonfigurujemy.

## Co dalej

- [Trzy widżety](variants.md) — grid, swipe i card, każdy na żywo.
- [Opcje](options.md) — pełna lista atrybutów.

!!! tip "Wolisz klikać niż czytać?"

    [`shop.tingster.dk/embed/preview`](https://shop.tingster.dk/embed/preview) pokazuje
    wszystkie trzy widżety obok ich fragmentów kodu. Dodaj
    `?seller=<Twoja nazwa>&product=<jakieś id>`, aby zobaczyć je na własnych danych.
