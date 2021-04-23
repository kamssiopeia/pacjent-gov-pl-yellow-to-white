// ==UserScript==
// @name         Better dark mode for pacjent.gov.pl
// @version      0.1
// @author       Kamssiopeia
// @match        https://*.pacjent.gov.pl/*
// @description  Replaces `wysoki-kontrast` style declaration values from #ff0 -> #f3f3eb
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

GM_addStyle (`
.wysoki-kontrast {
    --kolor-tekstu: #f3f3eb !important;
    --kolor-tekstu-szary: #f3f3eb !important;
    --kolor-tekstu-sredni-szary: #f3f3eb !important;
    --kolor-przycisku: #f3f3eb !important;
    --kolor-tekstu-przycisku-bialy: #f3f3eb !important;
    --kolor-ramki-przycisku-bialy: #f3f3eb !important;
    --kolor-tla-okragly-przycisk: #f3f3eb !important;
    --kolor-tla-myslnik: #f3f3eb !important;
    --kolor-ramki: #f3f3eb !important;
    --kolor-ramki-czarny: #f3f3eb !important;
    --kolor-ramki-input: #f3f3eb !important;
    --kolor-tekstu-input: #f3f3eb !important;
    --kolor-input-radio: #f3f3eb !important;
    --kolor-iput-placeholder: #f3f3eb !important;
    --kolor-status-ramka: #f3f3eb !important;
    --kolor-placeholder: #f3f3eb !important;
    --kolor-bledu: #f3f3eb !important;
    --kolor-ramki-tooltip: #f3f3eb !important;
    --kolor-ramki-gornej-tooltip: #f3f3eb !important;
    --kolor-ramki-tabeli: #f3f3eb !important;
    --kolor-tekstu-naglowek-tabeli: #f3f3eb !important;
    --kolor-tekstu-tabela: #f3f3eb !important;
    --kolor-tekstu-tabela-status: #f3f3eb !important;
    --kolor-tekstu-tabela-status-wystawiona: #f3f3eb !important;
    --kolor-tekstu-tabela-status-anulowana: #f3f3eb !important;
    --kolor-tekstu-link: #f3f3eb !important;
    --kolor-tekstu-brak-wyniku: #f3f3eb !important;
    --kolor-tekstu-tooltip: #f3f3eb !important;
    --kolor-tytulu-tekstu-tooltip: #f3f3eb !important;
    --kolor-ramki-select: #f3f3eb !important;
    --background-tooltip: #f3f3eb !important;
    --kolor-ramki-przycisku-modal: #f3f3eb !important;
    --kolor-tekstu-przycisku-modal: #f3f3eb !important;
    --kolor-tekstu-przycisku-jasnego-modal: #f3f3eb !important;
    --kolor-niebieski-disabled: #f3f3eb !important;
    --kolor-tekstu-naglowek: #f3f3eb !important;
    --kolor-przycisku-naglowek: #f3f3eb !important;
    --kolor-ramki-naglowek: #f3f3eb !important;
    --kolor-tekstu-footer: #f3f3eb !important;
    --kolor-przycisk-footer: #f3f3eb !important;
    --kolor-ramki-footer: #f3f3eb !important;
    --kolor-suwaka: #f3f3eb !important;
    --kolor-tekstu-przycisku-bez-tla: #f3f3eb !important;
    --kolor-ramki-przycisku-aktywnego: #f3f3eb !important;
    --kolor-przycisku-nieaktywnego: #f3f3eb !important;
    --kolor-ramki-przycisku-nieaktywnego: #f3f3eb !important;
    --kolor-ramki-przycisku-nieaktywnego-hover: #f3f3eb !important;
    --kolor-tekstu-daty-regulaminu: #f3f3eb !important;
    --kolor-tekstu-kontekst: #f3f3eb !important;
    --kolor-cienia-kontekst: #f3f3eb !important;
    --kolor-tekstu-grupa-kontekstu: #f3f3eb !important;
    --kolor-tekstu-input-placeholder: #f3f3eb !important;
    --kolor-ramki-input-ankiety: #f3f3eb !important;
    --kolor-paska-meter: #f3f3eb !important;
    --kolor-paska-value: #f3f3eb !important;
    --kolor-ramki-przycisk-przezroczysty: #f3f3eb !important;
    --kolor-tekstu-przycisk-przezroczysty: #f3f3eb !important;
    --kolor-ikony: #f3f3eb !important;
    --kolor-ikony-koronawirus: #f3f3eb !important;
    --kolor-link-ulotka: #f3f3eb !important;
    --kolor-link-wiecej: #f3f3eb !important;
    --kolor-autocomplete-clear: #f3f3eb !important;
    --kolor-tla-wiek-szczepienie: #f3f3eb !important;
    --kolor-tla-wiek-szczepienie-wyszarzone: #f3f3eb !important;
    --ikona-bilans: #f3f3eb !important;
    --kolor-przycisk-disabled: #f3f3eb !important;
    --kolor-ikona-wyszukiwania: #f3f3eb !important;
    --kolor-ikona-sukces: #f3f3eb !important;
    --kolor-ikona-uwaga: #f3f3eb !important;
    --kolor-ikona-ok: #f3f3eb !important;
    --ramka-modal: 1px solid #f3f3eb !important;
    --ramka-tabela: 1px solid #f3f3eb !important;
    --ramka-kafelek-listy: 1px solid #f3f3eb !important;
    --ramka-transformaty: 1px solid #f3f3eb !important;
    --ramka-transformata-checkbox: 1px solid #f3f3eb !important;
    --ramka-transformata-checkbox-checked: solid #f3f3eb !important;
    --ramka-podkreslenie: 1px solid #f3f3eb !important;
    --ramka-szczegoly-wizyty: 2px solid #f3f3eb !important;
    --ramka-przelacz-widocznosc: 2px solid #f3f3eb !important;
    --ramka-anuluj-naduzycia: 2px solid #f3f3eb !important;
    --ramka-input-naduzycia: 1px solid #f3f3eb !important;
    --ramka-regulaminu: solid 2px #f3f3eb !important;
    --ramka-regulamin-checkbox: 2px solid #f3f3eb !important;
    --ramka-focus: 2px dotted #f3f3eb !important;
    --ramka-baza-lekow-wyszukiwarka: 1px solid #f3f3eb !important;
    --ramka-przycisk-ulotka: 2px solid #f3f3eb !important;
    --kolor-dzwonka-powiadomienia: #f3f3eb !important;
    --kolor-dzwonka-powiadomienia-wazne: #f3f3eb !important;
    --kolor-dekorator-elementu-listy: #f3f3eb !important;
    --ramka-podkreslenie-kalendarz: 1px solid #f3f3eb !important;
    --ramka-podkreslenie-kalendarz-wiek: 1px solid #f3f3eb !important;
    --ramka-tabela-kalendarz-szczepien: 2px solid #f3f3eb !important;
    --cien-ramka-opis-szczepienia: 0 0 #f3f3eb !important;
    --ramka-przycisk-modal: 2px solid #f3f3eb !important;
    --ikona-cez-niebieski: #f3f3eb !important;
    --ikona-cez-zolty: #f3f3eb !important;
    --ikona-fundusze-tlo: #f3f3eb !important;
    --ikona-fundusze-tekst: #f3f3eb !important;
    --ikona-ue-ramka: #f3f3eb !important;
    --ikona-ue-gwiazdy: #f3f3eb !important;
    --ikona-ue-tekst: #f3f3eb !important;
    --ikona-pzh-kolor-1: #f3f3eb !important;
    --ikona-pzh-kolor-2: #f3f3eb !important;
    --ikona-pzh-kolor-3: #f3f3eb !important;
    --ikona-powiadomienia-czarna: #f3f3eb !important;
    --ikona-powiadomienia-jasny-niebieski: #f3f3eb !important;
    --ikona-powiadomienia-ciemny-niebieski: #f3f3eb !important;
    --strzalki-sortowanie-aktywne-asc-lewa: #f3f3eb !important;
    --strzalki-sortowanie-aktywne-desc-prawa: #f3f3eb !important;
    --strzalki-sortowanie-nieaktywne: #f3f3eb !important;
}
`);
