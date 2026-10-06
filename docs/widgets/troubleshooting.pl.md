# Rozwiązywanie problemów

## Nic się nie pojawia

Sprawdź konsolę przeglądarki. Znacznik jest po cichu ignorowany, gdy:

- brakuje `data-tingster-widget` albo jest literówka — musi to być dokładnie `swipe`, `card`
  albo `grid`;
- widżet to `card`, a brakuje `data-product`.

## Widżet pokazuje oferty, które nie są moje

`data-seller` nie pasował. To dokładna nazwa wyświetlana z Tingstera, ze spacjami i wielkimi
literami — `"Pippo 2020 ApS"`, a nie `pippo-2020` i nie numer klienta. Zobacz
[Twoja nazwa sprzedawcy i Twój ref](index.md#your-id).

## Wyświetla się jako nieostylowany tekst

Masz nieaktualną kopię `embed.js` z pamięci podręcznej. Odśwież stronę na twardo.

## Content Security Policy

Jeśli Twoja strona wysyła nagłówek CSP, dopuść `https://shop.tingster.dk` w obu dyrektywach:

```
script-src  https://shop.tingster.dk;   /* embed.js */
frame-src   https://shop.tingster.dk;   /* sam widżet */
```

## Serwuj stronę po HTTPS

Widżet nie osadzi się w ramce na stronie `http://`.

## Widżet nie dopasowuje wysokości

Wysokość jest odsyłana z widżetu do Twojej strony przez `postMessage`, a origin Twojej strony
musi być prawdziwym originem `https://`, żeby wiadomość została przyjęta. Na zwykłej stronie
`http://` widżet zostanie na wysokości początkowej — ustaw rozsądną wartość `data-height` albo
przejdź na HTTPS.

## Nadal nie działa

Porównaj z [`shop.tingster.dk/embed/preview`](https://shop.tingster.dk/embed/preview), gdzie
wszystkie trzy widżety stoją obok swoich dokładnych fragmentów kodu. Jeśli tam działa, a u
Ciebie nie, różnica jest po Twojej stronie — zwykle CSP, HTTP albo menedżer tagów usuwający
atrybuty `data-`.
