# Opcje

Wszystko konfiguruje się atrybutami `data-` na samym znaczniku `<script>`. Nie ma żadnego API
JavaScript ani niczego do zainicjowania.

| Atrybut | Dotyczy | Domyślnie | Uwagi |
| --- | --- | --- | --- |
| `data-tingster-widget` | wszystkich | — | **Wymagany.** `swipe`, `card` albo `grid`. |
| `data-product` | `card` | — | **Wymagany dla `card`.** Identyfikator oferty na Tingsterze. |
| `data-seller` | `swipe`, `grid` | wszyscy sprzedawcy | Twoja nazwa sprzedawcy **dokładnie taka, jak widnieje na Tingsterze** — nazwa wyświetlana (`"Pippo 2020 ApS"`), nie slug ani numer. Pomiń, aby pokazać cały Tingster. [Więcej](index.md#your-id) |
| `data-ref` | wszystkich | — | Krótka etykieta, **którą wybierasz sam** — nic nie jest Ci przydzielane. Dołączana do linków wychodzących, dzięki czemu kliknięcia z Twojej strony są rozpoznawalne. Zalecane. [Więcej](index.md#your-id) |
| `data-limit` | `swipe`, `grid` | `20` | Liczba wczytywanych ofert. Maksymalnie 50. |
| `data-locale` | wszystkich | `da` | `da`, `en`, `de` albo `pl`. |
| `data-width` | wszystkich | zależnie od widżetu | Szerokość CSS. `300`, `300px` i `80%` działają — sama liczba oznacza piksele. Ograniczone do 200–1600px lub 1–100%. |
| `data-height` | wszystkich | zależnie od widżetu | Wysokość początkowa. Potem widżet sam dopasowuje się do zawartości, więc ustaw ją tylko po to, by zdecydować, co widać podczas ładowania. |

## Rozmiary domyślne

| Widżet | Szerokość | Wysokość początkowa |
| --- | --- | --- |
| `swipe` | 300px | 600px |
| `card` | 300px | 420px |
| `grid` | 100% | 640px |

## Rozmiar i stylowanie

Widżet renderuje się w elemencie iframe, więc Twój CSS nie sięgnie do jego wnętrza, a jego CSS
nie wycieknie na Twoją stronę. Rozmiar i pozycję ustaw na **kontenerze dookoła**:

```html
<aside style="width: 300px; margin: 0 auto">
  <script src="https://shop.tingster.dk/embed.js"
          data-tingster-widget="swipe"
          data-ref="twoja-strona"></script>
</aside>
```

`data-width` jest nie tylko stosowany do ramki, ale też przekazywany do widżetu — `grid`,
który wie, że jest wąski, zwija się do jednej kolumny, zamiast wylewać się poza kontener.

## Przypisywanie ruchu

Kliknięcia wychodzące niosą `utm_source=embed`, `utm_medium=widget`, `utm_content=<widżet>`
oraz `ref=<Twój data-ref>`. Ustaw `data-ref` na coś stałego dla danej strony lub danego
miejsca, a Twój ruch z widżetów będzie rozpoznawalny po drugiej stronie.

## Prywatność

Widżet nie ustawia ciasteczek u Twoich odwiedzających i nie wymaga żadnego logowania.
