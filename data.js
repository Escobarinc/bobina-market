window.BOBINA_FEATURES = [
  {
    "id": "1.1",
    "title": "Marketplace mezi uživateli (C2C)",
    "category": "Základ produktu a obchodní model",
    "description": "Umožní jednomu uživateli vystavit předmět a jinému jej koupit přímo v aplikaci.",
    "without": "Bez toho vznikne jen katalog nebo inzertní portál, ne skutečné tržiště.",
    "example": "Anna vystaví svetr za 420 Kč, Petra jej koupí, aplikace zaznamená objednávku a po doručení dokončí obchod.",
    "build": [
      "Navrhnout databázi uživatelů, inzerátů a objednávek a vztahy mezi nimi.",
      "Postavit celý tok: vystavení → nákup → platba → doručení → dokončení.",
      "Napojit platby, dopravu a hodnocení do jednoho celku."
    ],
    "category_note": "Provozovatel nastaví obchodní pravidlo a sleduje jeho dopad na nákup nebo prodej.",
    "effort": "L"
  },
  {
    "id": "1.2",
    "title": "Podpora profesionálních prodejců (B2C / PRO)",
    "category": "Základ produktu a obchodní model",
    "description": "Rozliší běžného uživatele a podnikatele, včetně odlišných pravidel, údajů a procesů.",
    "without": "Bez toho bude nutné profesionální prodej zakázat nebo řešit ručně a právně nečistě.",
    "example": "Obyčejná uživatelka prodává vlastní šatník; registrovaný obchodník může mít firemní údaje a jiné povinnosti.",
    "build": [
      "Druhý typ účtu „PRO“ s firemními údaji (IČO, DIČ, sídlo).",
      "Odlišná pravidla pro firmy: doklady, práva spotřebitele, limity.",
      "Označení PRO prodejce u inzerátů a na profilu."
    ],
    "category_note": "Provozovatel nastaví obchodní pravidlo a sleduje jeho dopad na nákup nebo prodej.",
    "effort": "M"
  },
  {
    "id": "1.3",
    "title": "Více kategorií zboží",
    "category": "Základ produktu a obchodní model",
    "description": "Umožní provozovat módu, elektroniku, domácnost, sport, knihy a další segmenty v jednom systému.",
    "without": "Bez toho bude marketplace omezen jen na úzký typ zboží.",
    "example": "Vedle oblečení může Petra prodat i starou kávovarku, dětský kočárek nebo knihy – vše v jedné aplikaci.",
    "build": [
      "Katalog tak, aby každá kategorie měla vlastní parametry (velikost, kapacita, rozměr).",
      "Napojit kategorie na hledání, filtry i vystavení.",
      "Připravit úvodní strom kategorií a jeho správu."
    ],
    "category_note": "Provozovatel nastaví obchodní pravidlo a sleduje jeho dopad na nákup nebo prodej.",
    "effort": "M"
  },
  {
    "id": "1.4",
    "title": "Obchodní model platformy",
    "category": "Základ produktu a obchodní model",
    "description": "Nastaví, z čeho platforma vydělává: poplatek kupujícího, provize, placené zvýraznění, předplatné nebo kombinace.",
    "without": "Bez toho se aplikace může technicky spustit, ale nebude mít definovaný zdroj příjmů.",
    "example": "U objednávky za 800 Kč musí být jasné, zda Bobina vydělá na poplatku kupujícího, provizi prodejce, nebo na reklamě.",
    "build": [
      "Výpočet poplatků a provizí na jednom místě, nastavitelný bez programátora.",
      "Zobrazení poplatků v košíku i v přehledu prodejce.",
      "Účetní evidence příjmů platformy."
    ],
    "category_note": "Provozovatel nastaví obchodní pravidlo a sleduje jeho dopad na nákup nebo prodej.",
    "effort": "M"
  },
  {
    "id": "1.5",
    "title": "Minimální a maximální cena předmětu",
    "category": "Základ produktu a obchodní model",
    "description": "Omezí, za jakou cenu lze předmět vystavit a koupit.",
    "without": "Bez limitů mohou vznikat nesmyslné nebo rizikové objednávky.",
    "example": "Nikdo nemůže vystavit tričko za 1 Kč ani za 500 000 Kč – aplikace takovou cenu nepustí.",
    "build": [
      "Kontrola ceny při vystavení a úpravě inzerátu.",
      "Srozumitelná chybová hláška pro uživatele.",
      "Nastavení limitů v administraci."
    ],
    "category_note": "Provozovatel nastaví obchodní pravidlo a sleduje jeho dopad na nákup nebo prodej.",
    "effort": "S"
  },
  {
    "id": "2.1",
    "title": "Registrace e-mailem",
    "category": "Registrace a přihlášení",
    "description": "Uživatel vytvoří účet pomocí e-mailu a hesla.",
    "without": "Bez něj budou uživatelé odkázáni pouze na externí přihlášení.",
    "example": "Denisa zadá e-mail, heslo a potvrdí registraci. Aplikace musí odmítnout již používanou adresu.",
    "build": [
      "Registrační formulář s kontrolou e-mailu a síly hesla.",
      "Bezpečné uložení hesla (šifrovaný otisk).",
      "Ochrana proti hromadnému zakládání falešných účtů."
    ],
    "category_note": "Nový uživatel si zakládá účet nebo se bezpečně vrací do svého profilu.",
    "effort": "S"
  },
  {
    "id": "2.2",
    "title": "Přihlášení přes Apple",
    "category": "Registrace a přihlášení",
    "description": "Uživatel se přihlásí jedním kliknutím pomocí Apple ID.",
    "without": "Bez něj bude registrace na iOS o krok delší.",
    "example": "Na iPhonu klepne na „Pokračovat přes Apple“ a přihlásí se bez vytváření dalšího hesla.",
    "build": [
      "Registrace aplikace u Applu a nastavení „Sign in with Apple“.",
      "Propojení Apple účtu s účtem v BOBINA.",
      "Ošetřit skrytý e-mail, který Apple umí posílat."
    ],
    "category_note": "Nový uživatel si zakládá účet nebo se bezpečně vrací do svého profilu.",
    "effort": "S"
  },
  {
    "id": "2.3",
    "title": "Přihlášení přes Google",
    "category": "Registrace a přihlášení",
    "description": "Uživatel se přihlásí pomocí Google účtu.",
    "without": "Bez něj část uživatelů zvolí složitější klasickou registraci.",
    "example": "Na Androidu vybere svůj Google účet a vrátí se do již existujícího profilu.",
    "build": [
      "Nastavení přihlášení v Google Cloud konzoli.",
      "Propojení Google účtu s účtem v BOBINA.",
      "Sloučení, když už stejný e-mail existuje."
    ],
    "category_note": "Nový uživatel si zakládá účet nebo se bezpečně vrací do svého profilu.",
    "effort": "S"
  },
  {
    "id": "2.4",
    "title": "Ověření e-mailu",
    "category": "Registrace a přihlášení",
    "description": "Po registraci musí uživatel potvrdit e-mailovou adresu.",
    "without": "Bez něj lze snadno zakládat účty na neexistující adresy.",
    "example": "Po registraci přijde e-mail s odkazem, který potvrdí vlastnictví adresy.",
    "build": [
      "Odeslání e-mailu s potvrzovacím odkazem.",
      "Omezení funkcí, dokud e-mail není potvrzený.",
      "Znovuzaslání a vypršení odkazu."
    ],
    "category_note": "Nový uživatel si zakládá účet nebo se bezpečně vrací do svého profilu.",
    "effort": "S"
  },
  {
    "id": "2.5",
    "title": "Ověření telefonního čísla",
    "category": "Registrace a přihlášení",
    "description": "Uživatel potvrdí telefon kódem z SMS.",
    "without": "Bez něj je levnější a snazší vytvářet vícenásobné falešné profily.",
    "example": "Uživatel obdrží jednorázový SMS kód a opíše jej do aplikace.",
    "build": [
      "Napojení na SMS bránu (placená služba za každou SMS).",
      "Zadání a kontrola kódu, limit pokusů.",
      "Ochrana proti zneužití SMS (náklady, roboti)."
    ],
    "category_note": "Nový uživatel si zakládá účet nebo se bezpečně vrací do svého profilu.",
    "effort": "S"
  },
  {
    "id": "2.6",
    "title": "Zapomenuté heslo / reset",
    "category": "Registrace a přihlášení",
    "description": "Bezpečný proces pro obnovu přístupu k účtu.",
    "without": "Bez něj bude každý zapomenutý přístup vyžadovat zásah administrátora.",
    "example": "Zapomněla heslo. Požádá o obnovu a obdrží časově omezený odkaz.",
    "build": [
      "E-mail s jednorázovým odkazem na změnu hesla.",
      "Formulář nového hesla a odhlášení ostatních zařízení.",
      "Ochrana proti zneužití (limit žádostí)."
    ],
    "category_note": "Nový uživatel si zakládá účet nebo se bezpečně vrací do svého profilu.",
    "effort": "S"
  },
  {
    "id": "2.7",
    "title": "Dvoufaktorové ověření (2FA)",
    "category": "Registrace a přihlášení",
    "description": "Při citlivém přihlášení nebo změně údajů vyžádá druhý ověřovací krok.",
    "without": "Bez něj je převzetí účtu po úniku hesla podstatně snazší.",
    "example": "Při neobvyklém přihlášení je třeba potvrdit druhý ověřovací krok.",
    "build": [
      "Druhý krok přes SMS nebo ověřovací aplikaci.",
      "Vyžádat ho u citlivých akcí: výběr peněz, změna účtu.",
      "Záložní kódy pro ztracený telefon."
    ],
    "category_note": "Nový uživatel si zakládá účet nebo se bezpečně vrací do svého profilu.",
    "effort": "M"
  },
  {
    "id": "2.8",
    "title": "Správa aktivních zařízení a relací",
    "category": "Registrace a přihlášení",
    "description": "Uživatel vidí přihlášená zařízení a může je vzdáleně odhlásit.",
    "without": "Bez toho je obtížnější rychle ukončit cizí přístup.",
    "example": "Jana zapomněla být přihlášená na počítači v práci; v telefonu ho uvidí v seznamu a jedním klepnutím ho odhlásí.",
    "build": [
      "Evidence přihlášených zařízení (typ, místo, čas).",
      "Obrazovka se seznamem zařízení.",
      "Vzdálené odhlášení vybraného zařízení."
    ],
    "category_note": "Nový uživatel si zakládá účet nebo se bezpečně vrací do svého profilu.",
    "effort": "S"
  },
  {
    "id": "2.9",
    "title": "Smazání účtu",
    "category": "Registrace a přihlášení",
    "description": "Uživatel může požádat o zrušení účtu podle pravidel platformy.",
    "without": "Bez toho vzniká zbytečná agenda pro podporu a compliance problém.",
    "example": "Lucie už nechce prodávat, v nastavení klikne na „Smazat účet“ a po potvrzení jí účet zmizí.",
    "build": [
      "Kontrola, že uživatel nemá rozběhlé objednávky ani peníze v peněžence.",
      "Smazání nebo anonymizace osobních údajů.",
      "Uchování dat, která musí zůstat ze zákona (účetnictví)."
    ],
    "category_note": "Nový uživatel si zakládá účet nebo se bezpečně vrací do svého profilu.",
    "effort": "M"
  },
  {
    "id": "3.1",
    "title": "Veřejný profil uživatele",
    "category": "Profil a důvěryhodnost",
    "description": "Zobrazuje uživatelské jméno, fotku, bio, lokalitu, hodnocení a vystavené předměty.",
    "without": "Bez profilu bude transakce působit anonymně a důvěra výrazně klesne.",
    "example": "Na detailu kabátu otevře profil prodejce, uvidí jeho hodnocení a všechny veřejné inzeráty.",
    "build": [
      "Stránka profilu: jméno, fotka, bio, místo, hodnocení.",
      "Výpis inzerátů prodejce s řazením.",
      "Ochrana soukromí – co je veřejné a co ne."
    ],
    "category_note": "Kupující otevře profil prodávajícího ještě před nákupem a posoudí, zda mu důvěřuje.",
    "effort": "S"
  },
  {
    "id": "3.2",
    "title": "Profilová fotografie a bio",
    "category": "Profil a důvěryhodnost",
    "description": "Uživatel si doplní fotku a krátké představení.",
    "without": "Bez toho budou profily působit prázdněji, ale transakce mohou fungovat.",
    "example": "Klára si nahraje usměvavou fotku a napíše „Prodávám po sestře, nekouřím, posílám do 2 dnů“.",
    "build": [
      "Nahrání a ořez profilové fotky.",
      "Kontrola nevhodných fotek a textů.",
      "Úprava v nastavení profilu."
    ],
    "category_note": "Kupující otevře profil prodávajícího ještě před nákupem a posoudí, zda mu důvěřuje.",
    "effort": "S"
  },
  {
    "id": "3.3",
    "title": "Stav ověření účtu",
    "category": "Profil a důvěryhodnost",
    "description": "Profil ukazuje, zda je ověřen e-mail, telefon nebo identita.",
    "without": "Bez toho se ověření sice může provádět, ale uživatelé jeho hodnotu neuvidí.",
    "example": "Na profilu prodejce je vidět „✓ E-mail ověřen · ✓ Telefon ověřen“, takže kupující mu víc věří.",
    "build": [
      "Evidence, co má uživatel ověřené (e-mail, telefon, identita).",
      "Odznáčky ověření na profilu a u inzerátu.",
      "Výzva k doplnění ověření."
    ],
    "category_note": "Kupující otevře profil prodávajícího ještě před nákupem a posoudí, zda mu důvěřuje.",
    "effort": "S"
  },
  {
    "id": "3.4",
    "title": "Ověření identity (KYC)",
    "category": "Profil a důvěryhodnost",
    "description": "U vybraných uživatelů nebo před výběrem peněz ověří skutečnou totožnost.",
    "without": "Bez něj mohou být omezené platební funkce nebo vyšší riziko podvodů.",
    "example": "Před vyplacením vyšší částky si platební poskytovatel může vyžádat ověření totožnosti.",
    "build": [
      "Napojení na službu pro ověření dokladů a obličeje.",
      "Pravidla, kdy je ověření povinné (např. před výběrem peněz).",
      "Bezpečné uložení výsledku podle GDPR."
    ],
    "category_note": "Kupující otevře profil prodávajícího ještě před nákupem a posoudí, zda mu důvěřuje.",
    "effort": "L"
  },
  {
    "id": "3.5",
    "title": "Sledování prodejců",
    "category": "Profil a důvěryhodnost",
    "description": "Uživatel může sledovat oblíbené prodejce, má jejich seznam na jednom místě a vidí jejich nové nabídky.",
    "without": "Bez toho platforma přijde o sociální a retenční prvek.",
    "example": "Eva má ráda styl jedné prodejkyně, klikne na „Sledovat“ a vidí její nové kousky jako první.",
    "build": [
      "Tlačítko Sledovat a seznam sledovaných.",
      "Nové nabídky sledovaných prodejců ve feedu.",
      "Upozornění na nové kusy oblíbených prodejců."
    ],
    "category_note": "Kupující otevře profil prodávajícího ještě před nákupem a posoudí, zda mu důvěřuje.",
    "effort": "S"
  },
  {
    "id": "3.6",
    "title": "Počet sledujících / sledovaných",
    "category": "Profil a důvěryhodnost",
    "description": "Zobrazuje sociální důkaz na profilu.",
    "without": "Bez toho bude profil jednodušší, ale funkčně použitelný.",
    "example": "U profilu svítí „1 240 sledujících“ – na první pohled je jasné, že je to oblíbená prodejkyně.",
    "build": [
      "Počítání sledujících a sledovaných.",
      "Zobrazení na profilu.",
      "Seznam sledujících po rozkliknutí."
    ],
    "category_note": "Kupující otevře profil prodávajícího ještě před nákupem a posoudí, zda mu důvěřuje.",
    "effort": "S"
  },
  {
    "id": "3.7",
    "title": "Poslední aktivita / stav online",
    "category": "Profil a důvěryhodnost",
    "description": "Ukazuje, zda je uživatel aktivní nebo kdy byl naposledy přihlášen.",
    "without": "Bez toho může uživatel čekat na neaktivního prodejce bez kontextu.",
    "example": "U prodejce je napsáno „Aktivní před 2 hodinami“, takže kupující ví, že brzy odpoví.",
    "build": [
      "Ukládání času poslední aktivity.",
      "Zobrazení „Aktivní před 2 h“ u profilu a v chatu.",
      "Možnost aktivitu skrýt v nastavení soukromí."
    ],
    "category_note": "Kupující otevře profil prodávajícího ještě před nákupem a posoudí, zda mu důvěřuje.",
    "effort": "S"
  },
  {
    "id": "3.8",
    "title": "Blokování uživatelů",
    "category": "Profil a důvěryhodnost",
    "description": "Uživatel může zablokovat jiný účet a omezit další kontakt.",
    "without": "Bez toho musí vše řešit podpora nebo uživatel nemá obranný nástroj.",
    "example": "Někdo Markétě opakovaně posílá nepříjemné zprávy; zablokuje ho a už jí nemůže psát ani kupovat.",
    "build": [
      "Tlačítko Zablokovat a seznam zablokovaných.",
      "Zablokovaný nemůže psát, kupovat ani nabízet cenu.",
      "Odblokování v nastavení."
    ],
    "category_note": "Kupující otevře profil prodávajícího ještě před nákupem a posoudí, zda mu důvěřuje.",
    "effort": "S"
  },
  {
    "id": "3.9",
    "title": "Odznaky prodejce",
    "category": "Profil a důvěryhodnost",
    "description": "Profil může získat odznak, např. „Rychle odesílá“ nebo „Často přidává nové věci“.",
    "example": "U Kláry svítí odznak „Rychle odesílá“, protože posledních 20 zásilek podala do 24 hodin.",
    "without": "Bez odznaků se spolehlivý prodejce pozná jen podle hodnocení.",
    "build": [
      "Pravidla pro každý odznak (např. odeslání do 24 h u 20 zásilek).",
      "Automatický přepočet podle historie objednávek.",
      "Zobrazení odznaků na profilu a u inzerátu."
    ],
    "category_note": "Kupující otevře profil prodávajícího ještě před nákupem a posoudí, zda mu důvěřuje.",
    "effort": "M"
  },
  {
    "id": "4.1",
    "title": "Hierarchie kategorií",
    "category": "Kategorie a parametry zboží",
    "description": "Spravuje strukturu Kategorie → Podkategorie → Typ produktu.",
    "without": "Bez ní bude katalog chaotický a hledání nepřesné.",
    "example": "Kupující projde Ženy → Oblečení → Svetry a uvidí jen odpovídající nabídky.",
    "build": [
      "Strom Kategorie → Podkategorie → Typ (např. Ženy › Boty › Tenisky).",
      "Výběr kategorie při vystavení krok za krokem.",
      "Správa stromu v administraci bez programátora."
    ],
    "category_note": "Prodávající vybírá parametry výrobku; kupující podle těchto parametrů hledá.",
    "effort": "M"
  },
  {
    "id": "4.2",
    "title": "Značky",
    "category": "Kategorie a parametry zboží",
    "description": "Centrální seznam značek s možností jejich výběru při vystavení.",
    "without": "Bez značek uživatelé budou značku psát volně do textu a data budou nekonzistentní.",
    "example": "Při vystavení začne Tereza psát „Zar…“ a vybere „Zara“ ze seznamu, takže značka je všude napsaná stejně.",
    "build": [
      "Databáze značek (tisíce položek) s vyhledáváním.",
      "Našeptávání značky při vystavení.",
      "Přidávání nových značek a slučování překlepů."
    ],
    "category_note": "Prodávající vybírá parametry výrobku; kupující podle těchto parametrů hledá.",
    "effort": "M"
  },
  {
    "id": "4.3",
    "title": "Velikosti",
    "category": "Kategorie a parametry zboží",
    "description": "Podporuje velikostní systémy podle kategorie, značky nebo země.",
    "without": "Bez velikostí bude nutné vše hledat v popisu a počet chybných nákupů vzroste.",
    "example": "U tenisek se nabízí EU 38–46, zatímco u triček XS–XXL.",
    "build": [
      "Tabulky velikostí podle typu zboží (oblečení, boty, děti).",
      "Výběr velikosti při vystavení podle kategorie.",
      "Napojení na filtr a „Moje velikosti“."
    ],
    "category_note": "Prodávající vybírá parametry výrobku; kupující podle těchto parametrů hledá.",
    "effort": "M"
  },
  {
    "id": "4.4",
    "title": "Stav předmětu",
    "category": "Kategorie a parametry zboží",
    "description": "Výběr např. nový, jako nový, velmi dobrý, dobrý, uspokojivý.",
    "without": "Bez stavu bude obtížné posoudit, zda zboží odpovídá popisu.",
    "example": "Prodávající u bundy vybere „Velmi dobrý – nošeno párkrát, bez vad“, kupující hned ví, co čekat.",
    "build": [
      "Pevný seznam stavů s krátkým vysvětlením.",
      "Povinný výběr při vystavení.",
      "Zobrazení na detailu a ve filtru."
    ],
    "category_note": "Prodávající vybírá parametry výrobku; kupující podle těchto parametrů hledá.",
    "effort": "S"
  },
  {
    "id": "4.5",
    "title": "Barvy a další atributy",
    "category": "Kategorie a parametry zboží",
    "description": "Umožní filtrovat barvu, materiál, model, kapacitu, rozměr a další vlastnosti.",
    "without": "Bez atributů bude vyhledávání více závislé na nekvalitním volném textu.",
    "example": "U kabelky vyplní barvu „béžová“ a materiál „kůže“; kupující pak může hledat jen béžové kožené kabelky.",
    "build": [
      "Atributy podle kategorie (barva, materiál, kapacita…).",
      "Formulář při vystavení se správnými poli.",
      "Napojení na filtry."
    ],
    "category_note": "Prodávající vybírá parametry výrobku; kupující podle těchto parametrů hledá.",
    "effort": "M"
  },
  {
    "id": "4.6",
    "title": "Povinná pole podle kategorie",
    "category": "Kategorie a parametry zboží",
    "description": "Každá kategorie má vlastní povinné údaje.",
    "without": "Bez toho budou chybět zásadní informace a podpora bude řešit více sporů.",
    "example": "U bot musí prodávající vyplnit velikost, u mobilu kapacitu paměti – bez toho inzerát nejde uložit.",
    "build": [
      "Nastavení, co je v které kategorii povinné.",
      "Kontrola při uložení inzerátu.",
      "Srozumitelné upozornění, co chybí."
    ],
    "category_note": "Prodávající vybírá parametry výrobku; kupující podle těchto parametrů hledá.",
    "effort": "S"
  },
  {
    "id": "4.7",
    "title": "Zakázané kategorie a položky",
    "category": "Kategorie a parametry zboží",
    "description": "Systém zabrání nebo označí nabídky, které se na platformě nesmějí prodávat.",
    "without": "Bez toho bude moderace pouze reaktivní a rizikové nabídky se zveřejní.",
    "example": "Někdo zkusí vystavit léky nebo zbraň – aplikace inzerát zastaví a upozorní, že to se tu prodávat nesmí.",
    "build": [
      "Seznam zakázaného zboží a klíčových slov.",
      "Automatická kontrola při vystavení.",
      "Fronta podezřelých inzerátů pro moderátora."
    ],
    "category_note": "Prodávající vybírá parametry výrobku; kupující podle těchto parametrů hledá.",
    "effort": "M"
  },
  {
    "id": "5.1",
    "title": "Přidání více fotografií",
    "category": "Vystavení předmětu",
    "description": "Prodávající nahraje několik fotek předmětu z různých úhlů.",
    "without": "Bez více fotek klesne důvěra a poroste množství dotazů a reklamací.",
    "example": "Prodávající přidá osm fotografií jedněch bot a určí, která bude titulní.",
    "build": [
      "Nahrání až 20 fotek, změna pořadí, výběr hlavní fotky.",
      "Zmenšení a uložení fotek na server (úložiště, náklady).",
      "Kontrola formátu a velikosti souborů."
    ],
    "category_note": "Prodávající postupně vyplní formulář a předmět zveřejní nebo rozpracování uloží.",
    "effort": "M"
  },
  {
    "id": "5.2",
    "title": "Fotoaparát přímo v aplikaci",
    "category": "Vystavení předmětu",
    "description": "Umožní vyfotit produkt bez opuštění aplikace.",
    "without": "Bez toho musí uživatel nejprve vytvořit fotky v telefonu a následně je nahrát.",
    "example": "Martina vyfotí šaty přímo v aplikaci a fotky se rovnou přidají do inzerátu.",
    "build": [
      "Přístup k fotoaparátu telefonu se souhlasem uživatele.",
      "Focení více snímků za sebou.",
      "Přidání fotek rovnou do inzerátu."
    ],
    "category_note": "Prodávající postupně vyplní formulář a předmět zveřejní nebo rozpracování uloží.",
    "effort": "S"
  },
  {
    "id": "5.3",
    "title": "Ořez, otočení a základní úprava fotek",
    "category": "Vystavení předmětu",
    "description": "Uživatel upraví fotku před publikací.",
    "without": "Bez toho budou častější špatně otočené nebo nevhodně oříznuté fotografie.",
    "example": "Fotka je nakřivo a s kusem pokoje; prodávající ji v aplikaci otočí a ořízne na samotný svetr.",
    "build": [
      "Editor: ořez, otočení, jas.",
      "Uložení upravené verze.",
      "Funguje na telefonu i na webu."
    ],
    "category_note": "Prodávající postupně vyplní formulář a předmět zveřejní nebo rozpracování uloží.",
    "effort": "S"
  },
  {
    "id": "5.4",
    "title": "Název předmětu",
    "category": "Vystavení předmětu",
    "description": "Krátký název nabídky použitý ve výsledcích hledání.",
    "without": "Bez něj se bude muset název generovat automaticky nebo použít jen popis.",
    "example": "Prodávající napíše „Růžový pletený svetr Zara, vel. M“ – přesně to pak kupující uvidí ve výsledcích hledání.",
    "build": [
      "Pole s limitem znaků.",
      "Kontrola zakázaných slov.",
      "Použití názvu ve vyhledávání."
    ],
    "category_note": "Prodávající postupně vyplní formulář a předmět zveřejní nebo rozpracování uloží.",
    "effort": "S"
  },
  {
    "id": "5.5",
    "title": "Popis předmětu",
    "category": "Vystavení předmětu",
    "description": "Prodávající uvede stav, vady, rozměry a další informace.",
    "without": "Bez popisu výrazně naroste počet dotazů a sporů.",
    "example": "V popisu je „Nošeno 2×, malá oděrka na rukávu (viz foto), délka 65 cm“.",
    "build": [
      "Pole s limitem znaků a nápovědou, co napsat.",
      "Kontrola kontaktů a odkazů v textu.",
      "Použití popisu ve vyhledávání."
    ],
    "category_note": "Prodávající postupně vyplní formulář a předmět zveřejní nebo rozpracování uloží.",
    "effort": "S"
  },
  {
    "id": "5.6",
    "title": "Cena",
    "category": "Vystavení předmětu",
    "description": "Prodávající nastaví požadovanou cenu.",
    "without": "Bez ceny nebude možné provést standardní checkout.",
    "example": "Prodávající nastaví cenu 420 Kč, kterou kupující uvidí u inzerátu.",
    "build": [
      "Pole ceny s kontrolou limitů.",
      "Zobrazení ceny i s poplatkem pro kupujícího.",
      "Historie změn ceny (pro upozornění na zlevnění)."
    ],
    "category_note": "Prodávající postupně vyplní formulář a předmět zveřejní nebo rozpracování uloží.",
    "effort": "S"
  },
  {
    "id": "5.7",
    "title": "Doporučená cena",
    "category": "Vystavení předmětu",
    "description": "Systém navrhne cenu podle podobných předmětů, značky nebo historie.",
    "without": "Bez toho musí cenu určit uživatel bez podpory.",
    "example": "Při zadávání ceny aplikace poradí: „Podobné svetry Zara se prodávají za 300–450 Kč“.",
    "build": [
      "Výpočet z cen podobných prodaných věcí (značka, kategorie, stav).",
      "Zobrazení rozpětí při zadávání ceny.",
      "Průběžné přepočítávání podle nových prodejů."
    ],
    "category_note": "Prodávající postupně vyplní formulář a předmět zveřejní nebo rozpracování uloží.",
    "effort": "M"
  },
  {
    "id": "5.8",
    "title": "Velikost zásilky / hmotnost",
    "category": "Vystavení předmětu",
    "description": "Prodávající určí logistickou velikost, případně ji systém doporučí.",
    "without": "Bez toho může být doprava chybně naceněná nebo zásilka odmítnuta.",
    "example": "U bundy prodávající vybere „Střední balík (do 5 kg)“ a podle toho se kupujícímu spočítá doprava.",
    "build": [
      "Výběr velikosti balíku (malý / střední / velký).",
      "Napojení na cenu dopravy u dopravců.",
      "Doporučení velikosti podle kategorie."
    ],
    "category_note": "Prodávající postupně vyplní formulář a předmět zveřejní nebo rozpracování uloží.",
    "effort": "S"
  },
  {
    "id": "5.9",
    "title": "Náhled inzerátu před publikací",
    "category": "Vystavení předmětu",
    "description": "Uživatel vidí, jak bude nabídka vypadat.",
    "without": "Bez něj uživatel zjistí chyby až po publikaci.",
    "example": "Před zveřejněním Klára vidí, jak bude inzerát vypadat, a všimne si, že zapomněla velikost.",
    "build": [
      "Obrazovka náhledu před zveřejněním.",
      "Zvýraznění chybějících údajů.",
      "Návrat k úpravě jedním klepnutím."
    ],
    "category_note": "Prodávající postupně vyplní formulář a předmět zveřejní nebo rozpracování uloží.",
    "effort": "S"
  },
  {
    "id": "5.10",
    "title": "Uložení konceptu",
    "category": "Vystavení předmětu",
    "description": "Rozpracovanou nabídku lze uložit a dokončit později.",
    "without": "Bez toho se při odchodu z formuláře rozpracovaná data ztratí.",
    "example": "Při fotografování dalších věcí přeruší vyplňování a později se vrátí k uloženému konceptu.",
    "build": [
      "Automatické ukládání rozpracovaného inzerátu.",
      "Seznam konceptů.",
      "Dokončení nebo smazání konceptu."
    ],
    "category_note": "Prodávající postupně vyplní formulář a předmět zveřejní nebo rozpracování uloží.",
    "effort": "S"
  },
  {
    "id": "5.11",
    "title": "Editace aktivního inzerátu",
    "category": "Vystavení předmětu",
    "description": "Prodávající může upravit cenu, popis, fotografie a parametry.",
    "without": "Bez editace by bylo nutné nabídku smazat a založit znovu.",
    "example": "Po týdnu bez zájmu prodávající sníží cenu z 600 na 490 Kč a přidá další fotku.",
    "build": [
      "Úprava všech údajů aktivního inzerátu.",
      "Zákaz úprav během rozběhlé objednávky.",
      "Upozornění zájemců při zlevnění."
    ],
    "category_note": "Prodávající postupně vyplní formulář a předmět zveřejní nebo rozpracování uloží.",
    "effort": "S"
  },
  {
    "id": "5.12",
    "title": "Smazání / skrytí inzerátu",
    "category": "Vystavení předmětu",
    "description": "Prodávající nabídku dočasně skryje nebo odstraní.",
    "without": "Bez toho zůstanou v katalogu neaktuální položky. Strana 6 KLIENTSKÝ VÝBĚR FUNKCÍ - MARKETPLACE TYPU VINTED FUNKCE / VYSVĚTLENÍ CENA CHCI",
    "example": "Prodávající odjíždí, inzerát na čas skryje, a po návratu ho zase zobrazí.",
    "build": [
      "Skrýt / zobrazit / smazat inzerát.",
      "Zachování historie kvůli objednávkám.",
      "Hromadné skrytí (např. dovolená)."
    ],
    "category_note": "Prodávající postupně vyplní formulář a předmět zveřejní nebo rozpracování uloží.",
    "effort": "S"
  },
  {
    "id": "5.13",
    "title": "Znovuvystavení prodané/stornované položky",
    "category": "Vystavení předmětu",
    "description": "Jedním krokem obnoví předchozí inzerát.",
    "without": "Bez toho musí uživatel vše vyplnit znovu.",
    "example": "Kupující objednávku zrušil; prodávající jedním klepnutím vystaví stejný inzerát znovu.",
    "build": [
      "Kopie inzerátu i s fotkami jedním klepnutím.",
      "Kontrola, že původní objednávka je uzavřená.",
      "Nový inzerát s novým datem."
    ],
    "category_note": "Prodávající postupně vyplní formulář a předmět zveřejní nebo rozpracování uloží.",
    "effort": "S"
  },
  {
    "id": "5.14",
    "title": "Prodej setu více věcí v jednom inzerátu",
    "category": "Vystavení předmětu",
    "description": "Jedna nabídka může obsahovat více souvisejících kusů.",
    "without": "Bez toho musí prodávající vytvořit jednotlivé inzeráty.",
    "example": "Maminka prodá „balík dětského oblečení 0–3 měsíce, 15 kusů“ jako jeden inzerát.",
    "build": [
      "Pole „počet kusů“ a seznam položek v popisu.",
      "Velikost zásilky podle setu.",
      "Označení „set“ ve výpisu."
    ],
    "category_note": "Prodávající postupně vyplní formulář a předmět zveřejní nebo rozpracování uloží.",
    "effort": "S"
  },
  {
    "id": "6.1",
    "title": "Personalizovaný feed („Doporučené pro vás“)",
    "category": "Domovská stránka a doporučování",
    "description": "Úvodní stránka ukazuje každému jiné předměty podle toho, co si prohlíží, ukládá, hledá a kupuje.",
    "without": "Bez něj uvidí všichni stejný obsah a relevance bude výrazně nižší.",
    "example": "Po opakovaném prohlížení sportovní módy se na úvodu začne zobrazovat více relevantních nabídek.",
    "build": [
      "Sběr signálů: prohlížení, oblíbené, hledání, nákupy.",
      "Doporučovací algoritmus a jeho průběžné ladění.",
      "Rychlé načítání feedu pro každého zvlášť."
    ],
    "category_note": "Kupující otevře úvodní stránku a rychle objeví zajímavé předměty.",
    "effort": "L"
  },
  {
    "id": "6.2",
    "title": "Novinky / nejnovější nabídky",
    "category": "Domovská stránka a doporučování",
    "description": "Sekce řadí čerstvě přidané předměty.",
    "without": "Bez toho se nové nabídky hůř objevují.",
    "example": "Na úvodní stránce je sekce „Právě přidáno“ s věcmi vystavenými před pár minutami.",
    "build": [
      "Výpis nejnovějších inzerátů s průběžným načítáním.",
      "Filtrování podle velikostí uživatele.",
      "Ukládání do mezipaměti kvůli rychlosti."
    ],
    "category_note": "Kupující otevře úvodní stránku a rychle objeví zajímavé předměty.",
    "effort": "S"
  },
  {
    "id": "6.3",
    "title": "Podobné předměty",
    "category": "Domovská stránka a doporučování",
    "description": "Na detailu nabídky ukáže podobné alternativy.",
    "without": "Bez toho detail produktu častěji končí odchodem z aplikace.",
    "example": "Pod zimní bundou jsou „Podobné předměty“ – další bundy stejné velikosti a ceny.",
    "build": [
      "Výpočet podobnosti (kategorie, značka, velikost, cena).",
      "Sekce pod detailem inzerátu.",
      "Vynechání prodaných a skrytých věcí."
    ],
    "category_note": "Kupující otevře úvodní stránku a rychle objeví zajímavé předměty.",
    "effort": "M"
  },
  {
    "id": "6.4",
    "title": "Doporučené profily / prodejci",
    "category": "Domovská stránka a doporučování",
    "description": "Navrhuje uživatele ke sledování.",
    "without": "Bez něj se nové profily objevují jen náhodně.",
    "example": "Aplikace nabídne „Prodejci, kteří by se vám mohli líbit“ podle toho, co si uživatelka prohlíží.",
    "build": [
      "Výběr prodejců podle stylu a aktivity.",
      "Sekce na úvodní stránce.",
      "Skrytí již sledovaných prodejců."
    ],
    "category_note": "Kupující otevře úvodní stránku a rychle objeví zajímavé předměty.",
    "effort": "M"
  },
  {
    "id": "6.5",
    "title": "Nedávno prohlížené",
    "category": "Domovská stránka a doporučování",
    "description": "Uživatel se rychle vrátí k předmětům, které už otevřel.",
    "without": "Bez toho musí nabídku znovu hledat.",
    "example": "Včera si Petra prohlížela kabelku; dnes ji najde v sekci „Nedávno prohlížené“ bez hledání.",
    "build": [
      "Ukládání historie prohlížení.",
      "Sekce na úvodní stránce.",
      "Smazání historie v nastavení."
    ],
    "category_note": "Kupující otevře úvodní stránku a rychle objeví zajímavé předměty.",
    "effort": "S"
  },
  {
    "id": "6.6",
    "title": "Sekce trendů / populární",
    "category": "Domovská stránka a doporučování",
    "description": "Ukazuje populární značky, kategorie nebo produkty.",
    "without": "Bez toho platforma ztrácí část řízeného discovery.",
    "example": "Sekce „Teď v trendu“ ukazuje, že se nejvíc hledají Nike Air Force a lněné košile.",
    "build": [
      "Výpočet nejhledanějších značek a kategorií.",
      "Sekce trendů na úvodní stránce.",
      "Ruční úpravy trendů v administraci."
    ],
    "category_note": "Kupující otevře úvodní stránku a rychle objeví zajímavé předměty.",
    "effort": "M"
  },
  {
    "id": "6.7",
    "title": "Moje velikosti a oblíbené značky",
    "category": "Domovská stránka a doporučování",
    "description": "Uživatel si uloží své velikosti a oblíbené značky a aplikace podle nich přednostně ukazuje nabídky.",
    "example": "Petra si nastaví „oblečení M, boty 38, Zara a Nike“ a na úvodní stránce vidí hlavně tyto věci.",
    "without": "Bez toho musí uživatel pokaždé ručně nastavovat filtry velikosti.",
    "build": [
      "Uložení velikostí a oblíbených značek v profilu.",
      "Předvyplnění filtrů a úprava feedu.",
      "Úvodní výběr při první registraci."
    ],
    "category_note": "Kupující otevře úvodní stránku a rychle objeví zajímavé předměty.",
    "effort": "S"
  },
  {
    "id": "7.1",
    "title": "Fulltextové vyhledávání",
    "category": "Vyhledávání a filtry",
    "description": "Hledá v názvu, popisu, značce a dalších datech.",
    "without": "Bez něj je uživatel odkázán na procházení kategorií.",
    "example": "Zadá „růžový svetr Zara“ a uvidí odpovídající názvy, značky i popisy.",
    "build": [
      "Vyhledávací server (např. Elasticsearch / Algolia) a jeho provoz.",
      "Hledání v názvu, popisu, značce i s překlepy a bez diakritiky.",
      "Průběžné aktualizace při každé změně inzerátu."
    ],
    "category_note": "Kupující zadá, co hledá, upřesní podmínky a dostane správný seznam nabídek.",
    "effort": "L"
  },
  {
    "id": "7.2",
    "title": "Automatické našeptávání",
    "category": "Vyhledávání a filtry",
    "description": "Během psaní navrhuje značky, kategorie a časté dotazy.",
    "without": "Bez něj bude vyhledávání pomalejší a méně přesné.",
    "example": "Uživatelka napíše „nik“ a aplikace nabídne „Nike“, „Nike Air Max“ a „Nike mikina“.",
    "build": [
      "Návrhy během psaní (značky, kategorie, časté dotazy).",
      "Rychlá odezva do pár desetin sekundy.",
      "Učení z toho, co lidé hledají."
    ],
    "category_note": "Kupující zadá, co hledá, upřesní podmínky a dostane správný seznam nabídek.",
    "effort": "M"
  },
  {
    "id": "7.3",
    "title": "Filtr kategorie",
    "category": "Vyhledávání a filtry",
    "description": "Omezí výsledky na konkrétní část katalogu.",
    "without": "Bez něj budou výsledky obsahovat mnoho nerelevantních položek.",
    "example": "Kupující hledá jen v „Ženy › Boty › Tenisky“, ostatní věci se neukážou.",
    "build": [
      "Výběr kategorie ve výsledcích hledání.",
      "Počty výsledků u každé kategorie.",
      "Zapamatování filtru."
    ],
    "category_note": "Kupující zadá, co hledá, upřesní podmínky a dostane správný seznam nabídek.",
    "effort": "S"
  },
  {
    "id": "7.4",
    "title": "Filtr značky",
    "category": "Vyhledávání a filtry",
    "description": "Umožní vybrat jednu nebo více značek.",
    "without": "Bez něj musí uživatel značku zadávat do textu.",
    "example": "Kupující zaškrtne značky Zara a H&M a vidí jen jejich věci.",
    "build": [
      "Výběr více značek s vyhledáváním.",
      "Počty výsledků u značek.",
      "Napojení na uložené hledání."
    ],
    "category_note": "Kupující zadá, co hledá, upřesní podmínky a dostane správný seznam nabídek.",
    "effort": "S"
  },
  {
    "id": "7.5",
    "title": "Filtr velikosti",
    "category": "Vyhledávání a filtry",
    "description": "Omezí produkty na požadovanou velikost.",
    "without": "Bez něj bude velká část výsledků pro kupujícího nepoužitelná.",
    "example": "Kupující nosí velikost M, nastaví filtr a ostatní velikosti se schovají.",
    "build": [
      "Výběr velikostí podle typu zboží.",
      "Předvyplnění z „Moje velikosti“.",
      "Kombinace s ostatními filtry."
    ],
    "category_note": "Kupující zadá, co hledá, upřesní podmínky a dostane správný seznam nabídek.",
    "effort": "S"
  },
  {
    "id": "7.6",
    "title": "Filtr ceny",
    "category": "Vyhledávání a filtry",
    "description": "Nastaví minimální a maximální cenu.",
    "without": "Bez něj musí uživatel ručně procházet drahé nebo příliš levné nabídky.",
    "example": "Kupující nastaví cenu 200–500 Kč a levnější ani dražší věci neuvidí.",
    "build": [
      "Rozsah od–do.",
      "Cena včetně / bez poplatku.",
      "Kombinace s ostatními filtry."
    ],
    "category_note": "Kupující zadá, co hledá, upřesní podmínky a dostane správný seznam nabídek.",
    "effort": "S"
  },
  {
    "id": "7.7",
    "title": "Filtr stavu",
    "category": "Vyhledávání a filtry",
    "description": "Omezí výsledky podle opotřebení / novosti.",
    "without": "Bez něj se míchají nové i silně použité věci.",
    "example": "Kupující chce jen „Nové s visačkou“ nebo „Jako nové“.",
    "build": [
      "Výběr stavů.",
      "Kombinace s ostatními filtry.",
      "Zobrazení ve výsledcích."
    ],
    "category_note": "Kupující zadá, co hledá, upřesní podmínky a dostane správný seznam nabídek.",
    "effort": "S"
  },
  {
    "id": "7.8",
    "title": "Filtr barvy a atributů",
    "category": "Vyhledávání a filtry",
    "description": "Filtruje podle barvy, materiálu a dalších vlastností.",
    "without": "Bez něj bude hledání méně přesné.",
    "example": "Kupující hledá jen černé šaty z bavlny.",
    "build": [
      "Výběr barev a materiálů podle kategorie.",
      "Kombinace s ostatními filtry.",
      "Počty výsledků."
    ],
    "category_note": "Kupující zadá, co hledá, upřesní podmínky a dostane správný seznam nabídek.",
    "effort": "S"
  },
  {
    "id": "7.9",
    "title": "Řazení výsledků",
    "category": "Vyhledávání a filtry",
    "description": "Řadí např. podle relevance, ceny, novosti nebo popularity.",
    "without": "Bez něj je uživatel závislý pouze na jednom algoritmu řazení.",
    "example": "Kupující si seřadí výsledky „Od nejlevnějšího“ nebo „Nejnovější“.",
    "build": [
      "Řazení podle relevance, ceny, data, oblíbenosti.",
      "Zapamatování zvoleného řazení.",
      "Stejné výsledky na webu i v aplikaci."
    ],
    "category_note": "Kupující zadá, co hledá, upřesní podmínky a dostane správný seznam nabídek.",
    "effort": "S"
  },
  {
    "id": "7.10",
    "title": "Uložené vyhledávání",
    "category": "Vyhledávání a filtry",
    "description": "Uživatel si uloží kombinaci hledaného textu a filtrů.",
    "without": "Bez něj musí stejné filtry zadávat opakovaně.",
    "example": "Uloží si hledání „Nike, velikost 40, do 900 Kč“ a příště nemusí podmínky zadávat znovu.",
    "build": [
      "Uložení dotazu se všemi filtry.",
      "Seznam uložených hledání.",
      "Úprava a smazání."
    ],
    "category_note": "Kupující zadá, co hledá, upřesní podmínky a dostane správný seznam nabídek.",
    "effort": "S"
  },
  {
    "id": "7.11",
    "title": "Upozornění na nové výsledky",
    "category": "Vyhledávání a filtry",
    "description": "Pošle notifikaci, když se objeví položka odpovídající uloženému hledání.",
    "without": "Bez toho uložené hledání pouze šetří čas, ale aktivně uživatele nevrací.",
    "example": "Kupující si uloží hledání „Levi's 501, vel. 28“ a jakmile je někdo vystaví, přijde mu upozornění.",
    "build": [
      "Pravidelná kontrola nových inzerátů proti uloženým hledáním.",
      "Odeslání push / e-mailu bez spamování.",
      "Nastavení četnosti upozornění."
    ],
    "category_note": "Kupující zadá, co hledá, upřesní podmínky a dostane správný seznam nabídek.",
    "effort": "M"
  },
  {
    "id": "7.12",
    "title": "Filtr podle místa",
    "category": "Vyhledávání a filtry",
    "description": "Kupující může hledat věci v okolí – hodí se hlavně pro osobní předání.",
    "example": "Kupující z Brna si nastaví „do 20 km“ a vidí věci, pro které si může dojet.",
    "without": "Bez toho nejde najít věci v okolí a osobní předání se domlouvá složitě.",
    "build": [
      "Uložení přibližné polohy prodejce (město).",
      "Výpočet vzdálenosti a filtr „do X km“.",
      "Ochrana soukromí – nikdy přesná adresa."
    ],
    "category_note": "Kupující zadá, co hledá, upřesní podmínky a dostane správný seznam nabídek.",
    "effort": "M"
  },
  {
    "id": "8.1",
    "title": "Galerie fotografií",
    "category": "Detail produktu",
    "description": "Zobrazí fotografie ve vysoké kvalitě s přiblížením.",
    "without": "Bez kvalitní galerie klesá důvěra a roste počet dotazů.",
    "example": "Kupující si roztáhne fotku prsty a zblízka vidí strukturu látky i drobnou vadu.",
    "build": [
      "Prohlížení fotek tažením a přiblížení prsty.",
      "Načítání ve správné velikosti pro mobil.",
      "Zobrazení na celou obrazovku."
    ],
    "category_note": "Kupující otevře konkrétní předmět a může se rozhodnout, zda jej chce.",
    "effort": "S"
  },
  {
    "id": "8.2",
    "title": "Kompletní parametry produktu",
    "category": "Detail produktu",
    "description": "Na jednom místě zobrazí značku, velikost, stav, barvu, cenu a další údaje.",
    "without": "Bez toho musí kupující hledat informace v textu.",
    "example": "Na detailu je přehledně: Zara · vel. M · Velmi dobrý stav · růžová · bavlna · 420 Kč.",
    "build": [
      "Přehled všech parametrů na detailu.",
      "Odkazy z parametrů do hledání (např. „další Zara“).",
      "Stejné zobrazení na webu i v aplikaci."
    ],
    "category_note": "Kupující otevře konkrétní předmět a může se rozhodnout, zda jej chce.",
    "effort": "S"
  },
  {
    "id": "8.3",
    "title": "Informace o prodávajícím",
    "category": "Detail produktu",
    "description": "Na detailu ukáže profil, hodnocení a ověření prodejce.",
    "without": "Bez toho musí přecházet na profil nebo nakupuje naslepo.",
    "example": "Pod inzerátem je prodejkyně „Klára, ★ 4,9 (86 hodnocení), ověřený telefon“.",
    "build": [
      "Karta prodejce na detailu inzerátu.",
      "Hodnocení, ověření, poslední aktivita.",
      "Odkaz na celý šatník."
    ],
    "category_note": "Kupující otevře konkrétní předmět a může se rozhodnout, zda jej chce.",
    "effort": "S"
  },
  {
    "id": "8.4",
    "title": "Odhad dopravy / cena dopravy",
    "category": "Detail produktu",
    "description": "Zobrazí dostupné možnosti a orientační náklady.",
    "without": "Bez toho může skutečná cena v checkoutu uživatele nepříjemně překvapit.",
    "example": "U inzerátu je napsáno „Doprava od 69 Kč (Zásilkovna, PPL)“.",
    "build": [
      "Načtení cen od dopravců podle velikosti balíku.",
      "Zobrazení nejlevnější možnosti na detailu.",
      "Aktualizace při změně ceníků."
    ],
    "category_note": "Kupující otevře konkrétní předmět a může se rozhodnout, zda jej chce.",
    "effort": "M"
  },
  {
    "id": "8.5",
    "title": "Tlačítko Koupit",
    "category": "Detail produktu",
    "description": "Spustí bezpečný checkout přímo v aplikaci.",
    "without": "Bez něj bude nutné obchod domlouvat mimo systém.",
    "example": "U kabelky klepne na Koupit a přejde na výběr dopravy a platební metody.",
    "build": [
      "Spuštění objednávky a dočasná rezervace předmětu.",
      "Ochrana proti tomu, aby věc koupili dva najednou.",
      "Napojení na platbu a dopravu."
    ],
    "category_note": "Kupující otevře konkrétní předmět a může se rozhodnout, zda jej chce.",
    "effort": "M"
  },
  {
    "id": "8.6",
    "title": "Tlačítko Nabídnout cenu",
    "category": "Detail produktu",
    "description": "Kupující navrhne prodávajícímu nižší cenu.",
    "without": "Bez něj se vyjednávání přesune do chatu a bude méně strukturované.",
    "example": "U bundy za 1 000 Kč nabídne 800 Kč; prodávající nabídku přijme nebo odmítne.",
    "build": [
      "Dialog pro zadání nabízené ceny.",
      "Odeslání nabídky do chatu.",
      "Limit nabídek proti zneužití."
    ],
    "category_note": "Kupující otevře konkrétní předmět a může se rozhodnout, zda jej chce.",
    "effort": "S"
  },
  {
    "id": "8.7",
    "title": "Tlačítko Poslat dotaz",
    "category": "Detail produktu",
    "description": "Otevře konverzaci s prodávajícím o konkrétní položce.",
    "without": "Bez něj budou nejasnosti častěji končit nenákupem.",
    "example": "Kupující klepne na „Zeptat se“ a napíše „Jaká je délka rukávu?“ – zpráva se váže k tomuto svetru.",
    "build": [
      "Otevření chatu s prodávajícím.",
      "Připojení náhledu inzerátu do konverzace.",
      "Kontrola blokovaných uživatelů."
    ],
    "category_note": "Kupující otevře konkrétní předmět a může se rozhodnout, zda jej chce.",
    "effort": "S"
  },
  {
    "id": "8.8",
    "title": "Přidat do oblíbených",
    "category": "Detail produktu",
    "description": "Uloží produkt pro pozdější návrat.",
    "without": "Bez toho uživatel nabídku snadno ztratí.",
    "example": "Kupující klepne na srdíčko a svetr se uloží do oblíbených na později.",
    "build": [
      "Srdíčko u inzerátu a na detailu.",
      "Počet oblíbení u inzerátu.",
      "Synchronizace mezi mobilem a webem."
    ],
    "category_note": "Kupující otevře konkrétní předmět a může se rozhodnout, zda jej chce.",
    "effort": "S"
  },
  {
    "id": "8.9",
    "title": "Sdílení nabídky",
    "category": "Detail produktu",
    "description": "Vygeneruje odkaz pro sdílení mimo aplikaci.",
    "without": "Bez něj bude sdílení složitější.",
    "example": "Petra pošle kamarádce odkaz na šaty přes WhatsApp a ta je otevře rovnou v aplikaci.",
    "build": [
      "Sdílecí odkaz s náhledem pro sociální sítě.",
      "Otevření odkazu rovnou v aplikaci.",
      "Systémové sdílení na telefonu."
    ],
    "category_note": "Kupující otevře konkrétní předmět a může se rozhodnout, zda jej chce.",
    "effort": "S"
  },
  {
    "id": "9.1",
    "title": "Seznam oblíbených předmětů",
    "category": "Oblíbené a sledování",
    "description": "Uživatel má vlastní seznam uložených nabídek.",
    "without": "Bez něj je návrat ke konkrétní nabídce obtížnější.",
    "example": "V záložce „Oblíbené“ má uživatelka 12 uložených věcí, ke kterým se může vrátit.",
    "build": [
      "Obrazovka oblíbených s řazením.",
      "Označení prodaných a zlevněných kusů.",
      "Odebrání z oblíbených."
    ],
    "category_note": "Kupující se vrací k uložené věci nebo sleduje změny v nabídce.",
    "effort": "S"
  },
  {
    "id": "9.2",
    "title": "Notifikace při změně ceny oblíbené položky",
    "category": "Oblíbené a sledování",
    "description": "Upozorní na zlevnění uloženého předmětu.",
    "without": "Bez toho se uživatel o slevě nemusí dozvědět.",
    "example": "Označí si šaty srdíčkem a po snížení ceny z 800 na 650 Kč dostane upozornění.",
    "build": [
      "Hlídání změny ceny u oblíbených.",
      "Upozornění zájemcům.",
      "Omezení počtu upozornění."
    ],
    "category_note": "Kupující se vrací k uložené věci nebo sleduje změny v nabídce.",
    "effort": "S"
  },
  {
    "id": "9.3",
    "title": "Notifikace při prodeji oblíbené položky",
    "category": "Oblíbené a sledování",
    "description": "Informuje, že sledovaný předmět už není dostupný.",
    "without": "Bez něj uživatel zjistí nedostupnost až při návratu.",
    "example": "Uživatelce přijde „Kabelka, kterou máte v oblíbených, byla prodána“.",
    "build": [
      "Hlídání prodeje oblíbených.",
      "Upozornění zájemcům.",
      "Nabídka podobných věcí."
    ],
    "category_note": "Kupující se vrací k uložené věci nebo sleduje změny v nabídce.",
    "effort": "S"
  },
  {
    "id": "10.1",
    "title": "Chat mezi kupujícím a prodávajícím",
    "category": "Zprávy a vyjednávání",
    "description": "Soukromé zprávy uvnitř platformy.",
    "without": "Bez chatu se komunikace přesune mimo platformu a platforma ztratí dohled.",
    "example": "Kupující napíše „Jaká je délka rukávu?“ a prodávající odpoví v jednom vlákně.",
    "build": [
      "Server pro zprávy v reálném čase.",
      "Seznam konverzací, nepřečtené zprávy, upozornění.",
      "Uchování historie a ochrana soukromí."
    ],
    "category_note": "Kupující a prodejce se domlouvají o konkrétním předmětu.",
    "effort": "L"
  },
  {
    "id": "10.2",
    "title": "Chat navázaný na konkrétní předmět",
    "category": "Zprávy a vyjednávání",
    "description": "Konverzace automaticky obsahuje kontext nabídky.",
    "without": "Bez toho si uživatelé musí sami hlídat, o čem si píší.",
    "example": "V chatu je nahoře vždy vidět, o který svetr se jedná, i s fotkou a cenou.",
    "build": [
      "Náhled inzerátu v hlavičce chatu.",
      "Jedna konverzace na předmět a dvojici lidí.",
      "Rychlé tlačítko Koupit z chatu."
    ],
    "category_note": "Kupující a prodejce se domlouvají o konkrétním předmětu.",
    "effort": "S"
  },
  {
    "id": "10.3",
    "title": "Posílání fotografií v chatu",
    "category": "Zprávy a vyjednávání",
    "description": "Uživatel může vyžádat nebo poslat detail vady, rozměr či doklad.",
    "without": "Bez toho se fotky budou posílat mimo platformu.",
    "example": "Kupující požádá o fotku cedulky a prodávající ji pošle přímo do chatu.",
    "build": [
      "Nahrání fotek do konverzace.",
      "Kontrola nevhodných obrázků.",
      "Úložiště a mazání starých fotek."
    ],
    "category_note": "Kupující a prodejce se domlouvají o konkrétním předmětu.",
    "effort": "M"
  },
  {
    "id": "10.4",
    "title": "Strukturovaná nabídka ceny",
    "category": "Zprávy a vyjednávání",
    "description": "Nabídka ceny má částku, stav přijetí/odmítnutí a časovou platnost.",
    "without": "Bez toho vznikne chaotické smlouvání v textu.",
    "example": "Kupující nabídne 350 Kč místo 420 Kč; prodávající jen klepne „Přijmout“ nebo „Odmítnout“.",
    "build": [
      "Nabídka jako zvláštní zpráva s tlačítky Přijmout / Odmítnout.",
      "Platnost nabídky (např. 48 h).",
      "Po přijetí nákup za nabídnutou cenu."
    ],
    "category_note": "Kupující a prodejce se domlouvají o konkrétním předmětu.",
    "effort": "M"
  },
  {
    "id": "10.5",
    "title": "Protinabídka",
    "category": "Zprávy a vyjednávání",
    "description": "Prodávající může odpovědět jinou částkou.",
    "without": "Bez toho musí vytvořit novou nabídku nebo napsat cenu textem.",
    "example": "Kupující nabízí 700 Kč, prodávající navrhne 850 Kč a kupující se rozhodne.",
    "build": [
      "Odpověď jinou částkou.",
      "Historie nabídek v konverzaci.",
      "Limit počtu kol."
    ],
    "category_note": "Kupující a prodejce se domlouvají o konkrétním předmětu.",
    "effort": "S"
  },
  {
    "id": "10.6",
    "title": "Označení přečtené zprávy",
    "category": "Zprávy a vyjednávání",
    "description": "Ukáže, zda protistrana zprávu viděla.",
    "without": "Bez toho uživatel neví, zda protistrana nereaguje nebo zprávu nečetla.",
    "example": "U zprávy je vidět „Přečteno“, takže kupující ví, že ji prodávající viděl.",
    "build": [
      "Ukládání času přečtení.",
      "Zobrazení „Přečteno“.",
      "Možnost vypnout v nastavení."
    ],
    "category_note": "Kupující a prodejce se domlouvají o konkrétním předmětu.",
    "effort": "S"
  },
  {
    "id": "10.7",
    "title": "Automatické systémové zprávy v konverzaci",
    "category": "Zprávy a vyjednávání",
    "description": "V chatu se zobrazí stav nákupu, štítek, doručení, spor a další události.",
    "without": "Bez toho budou informace roztroušené v různých obrazovkách.",
    "example": "Do chatu se samo napíše „Zásilka byla odeslána“ nebo „Kupující potvrdil převzetí“.",
    "build": [
      "Automatické zprávy při každé změně objednávky.",
      "Odkazy ze zpráv na objednávku a sledování zásilky.",
      "Texty ve všech jazycích aplikace."
    ],
    "category_note": "Kupující a prodejce se domlouvají o konkrétním předmětu.",
    "effort": "M"
  },
  {
    "id": "11.1",
    "title": "Přímý nákup jednoho předmětu",
    "category": "Košík a dokončení nákupu",
    "description": "Kupující přejde z detailu přímo do objednávky.",
    "without": "Bez toho bude checkout zbytečně komplikovaný.",
    "example": "Kupující klepne na „Koupit“ a hned je v objednávce, bez košíku.",
    "build": [
      "Objednávková obrazovka: adresa, doprava, platba, souhrn.",
      "Vytvoření objednávky a rezervace předmětu.",
      "Potvrzení oběma stranám."
    ],
    "category_note": "Kupující vybírá, co zaplatí a kam se má předmět doručit.",
    "effort": "M"
  },
  {
    "id": "11.2",
    "title": "Balíček více předmětů od jednoho prodejce",
    "category": "Košík a dokončení nákupu",
    "description": "Kupující koupí několik položek od stejného prodejce společně.",
    "without": "Bez toho musí každou položku kupovat a posílat zvlášť.",
    "example": "Z jednoho šatníku koupí dvě trička a jedny boty v jedné zásilce.",
    "build": [
      "Výběr více věcí od jednoho prodejce do jednoho nákupu.",
      "Jedna doprava za celý balíček.",
      "Rozdělení při stornu jednotlivé věci."
    ],
    "category_note": "Kupující vybírá, co zaplatí a kam se má předmět doručit.",
    "effort": "M"
  },
  {
    "id": "11.3",
    "title": "Sleva na balíček",
    "category": "Košík a dokončení nákupu",
    "description": "Prodávající může nastavit procentní slevu podle počtu položek.",
    "without": "Bez toho nebude systém aktivně podporovat větší objednávky.",
    "example": "Prodávající nastaví „Při koupi 3 a více věcí sleva 15 %“.",
    "build": [
      "Nastavení slev v profilu prodejce.",
      "Výpočet slevy v košíku.",
      "Zobrazení výhody u inzerátů."
    ],
    "category_note": "Kupující vybírá, co zaplatí a kam se má předmět doručit.",
    "effort": "S"
  },
  {
    "id": "11.4",
    "title": "Souhrn ceny před zaplacením",
    "category": "Košík a dokončení nákupu",
    "description": "Zobrazí cenu zboží, dopravy, poplatků a celkovou částku.",
    "without": "Bez toho kupující neví, kolik skutečně zaplatí.",
    "example": "Před zaplacením vidí zboží 500 Kč, dopravu 79 Kč a platformní poplatek odděleně.",
    "build": [
      "Rozpis: zboží, doprava, poplatky, celkem.",
      "Přepočet při změně dopravy.",
      "Stejná částka v potvrzení a na dokladu."
    ],
    "category_note": "Kupující vybírá, co zaplatí a kam se má předmět doručit.",
    "effort": "S"
  },
  {
    "id": "11.5",
    "title": "Volba adresy / výdejního místa",
    "category": "Košík a dokončení nákupu",
    "description": "Kupující vybere doručovací adresu, box nebo výdejní místo.",
    "without": "Bez toho nelze automaticky vytvořit správnou zásilku.",
    "example": "Kupující vybere „Z-BOX Brno, Hlavní 12“ nebo zadá domácí adresu.",
    "build": [
      "Formulář adresy s kontrolou PSČ.",
      "Výběr výdejního místa z mapy dopravce.",
      "Uložení pro příště."
    ],
    "category_note": "Kupující vybírá, co zaplatí a kam se má předmět doručit.",
    "effort": "M"
  },
  {
    "id": "11.6",
    "title": "Volba dopravce",
    "category": "Košík a dokončení nákupu",
    "description": "Kupující si vybere dostupnou přepravní službu.",
    "without": "Bez toho platforma musí dopravce určit automaticky.",
    "example": "Kupující si vybere mezi Zásilkovnou za 69 Kč a PPL za 99 Kč.",
    "build": [
      "Seznam dopravců s cenou a dobou doručení.",
      "Jen dopravci dostupní pro danou zásilku.",
      "Výchozí volba podle minula."
    ],
    "category_note": "Kupující vybírá, co zaplatí a kam se má předmět doručit.",
    "effort": "S"
  },
  {
    "id": "11.7",
    "title": "Volba platební metody",
    "category": "Košík a dokončení nákupu",
    "description": "Kupující zvolí kartu, Apple Pay, Google Pay nebo jinou podporovanou metodu.",
    "without": "Bez výběru bude checkout omezen na jediný způsob platby.",
    "example": "Kupující zaplatí kartou, Apple Pay nebo Google Pay.",
    "build": [
      "Výběr metody v objednávce.",
      "Uložená karta pro rychlou platbu.",
      "Zobrazení jen dostupných metod."
    ],
    "category_note": "Kupující vybírá, co zaplatí a kam se má předmět doručit.",
    "effort": "S"
  },
  {
    "id": "11.8",
    "title": "Potvrzení obchodních podmínek",
    "category": "Košík a dokončení nákupu",
    "description": "Před platbou uživatel odsouhlasí relevantní podmínky.",
    "without": "Bez něj se zvyšuje právní riziko provozovatele.",
    "example": "Před zaplacením kupující zaškrtne, že souhlasí s obchodními podmínkami.",
    "build": [
      "Zaškrtávací políčko s odkazem na podmínky.",
      "Uložení souhlasu u objednávky.",
      "Jiné podmínky u PRO prodejců."
    ],
    "category_note": "Kupující vybírá, co zaplatí a kam se má předmět doručit.",
    "effort": "S"
  },
  {
    "id": "11.9",
    "title": "Uložené adresy",
    "category": "Košík a dokončení nákupu",
    "description": "Uživatel si uloží doručovací adresy a oblíbená výdejní místa a příště je jen vybere.",
    "example": "Jana má uloženou adresu domů a Z-BOX u práce; při nákupu jen klepne na jednu z nich.",
    "without": "Bez toho musí kupující adresu vyplňovat při každém nákupu znovu.",
    "build": [
      "Adresář s více adresami a výchozí adresou.",
      "Oblíbená výdejní místa.",
      "Úprava a mazání."
    ],
    "category_note": "Kupující vybírá, co zaplatí a kam se má předmět doručit.",
    "effort": "S"
  },
  {
    "id": "12.1",
    "title": "Online platba kartou",
    "category": "Platby a peněženka",
    "description": "Kupující zaplatí objednávku přímo v aplikaci.",
    "without": "Bez ní se platby přesunou mimo systém.",
    "example": "Kupující zadá kartu a zaplatí přímo v aplikaci; peníze se k prodávajícímu dostanou až po doručení.",
    "build": [
      "Smlouva a napojení platební brány pro tržiště (např. Stripe Connect, Adyen).",
      "Bezpečné 3-D Secure ověření platby.",
      "Účtování plateb, poplatků a vratek."
    ],
    "category_note": "Zákazník platí; prodejce sleduje výdělek a případné vrácení peněz.",
    "effort": "L"
  },
  {
    "id": "12.2",
    "title": "Apple Pay / Google Pay",
    "category": "Platby a peněženka",
    "description": "Rychlá mobilní platba bez ručního zadávání karty.",
    "without": "Bez toho bude část mobilních nákupů zbytečně pomalejší.",
    "example": "Na iPhonu kupující zaplatí jedním dvojklikem a Face ID, bez opisování karty.",
    "build": [
      "Aktivace v platební bráně a u Applu / Googlu.",
      "Tlačítka v objednávce.",
      "Ověření na všech zařízeních."
    ],
    "category_note": "Zákazník platí; prodejce sleduje výdělek a případné vrácení peněz.",
    "effort": "S"
  },
  {
    "id": "12.3",
    "title": "Držení platby do dokončení obchodu",
    "category": "Platby a peněženka",
    "description": "Peníze se neuvolní prodávajícímu okamžitě; čekají na úspěšné doručení / dokončení.",
    "without": "Bez toho prodávající dostane peníze dříve, než kupující zboží převezme.",
    "example": "Kupující zaplatí, ale prodejce nedostane peníze před dokončením obchodu podle pravidel poskytovatele.",
    "build": [
      "Peníze zůstávají u platební brány do potvrzení doručení.",
      "Automatické uvolnění po lhůtě nebo po potvrzení.",
      "Zadržení při sporu a vrácení kupujícímu."
    ],
    "category_note": "Zákazník platí; prodejce sleduje výdělek a případné vrácení peněz.",
    "effort": "L"
  },
  {
    "id": "12.4",
    "title": "Virtuální peněženka prodávajícího",
    "category": "Platby a peněženka",
    "description": "Po dokončení transakce se výdělek připíše do interního zůstatku.",
    "without": "Bez peněženky lze peníze posílat rovnou na účet, ale řízení plateb je méně flexibilní.",
    "example": "Po doručení svetru se prodávající Kláře připíše 420 Kč do peněženky v aplikaci.",
    "build": [
      "Účetní kniha zůstatků každého uživatele.",
      "Připsání výdělku po dokončení objednávky.",
      "Soulad s pravidly platebních služeb (licence / partner)."
    ],
    "category_note": "Zákazník platí; prodejce sleduje výdělek a případné vrácení peněz.",
    "effort": "L"
  },
  {
    "id": "12.5",
    "title": "Výběr peněz na bankovní účet",
    "category": "Platby a peněženka",
    "description": "Prodávající odešle zůstatek na svůj ověřený účet.",
    "without": "Bez toho jsou výdělky uzamčené v platformě.",
    "example": "Klára si z peněženky pošle 1 200 Kč na svůj bankovní účet.",
    "build": [
      "Zadání a ověření bankovního účtu.",
      "Odeslání výplaty přes platební bránu.",
      "Limity, poplatky a historie výběrů."
    ],
    "category_note": "Zákazník platí; prodejce sleduje výdělek a případné vrácení peněz.",
    "effort": "M"
  },
  {
    "id": "12.6",
    "title": "Historie peněženky a plateb",
    "category": "Platby a peněženka",
    "description": "Zobrazuje příchozí výdělky, refundace, výběry a poplatky.",
    "without": "Bez toho vzniká více dotazů a reklamací na platby.",
    "example": "V peněžence Klára vidí: „+420 Kč prodej svetru, −1 200 Kč výběr na účet“.",
    "build": [
      "Přehled všech pohybů s filtrem.",
      "Detail každého pohybu.",
      "Export pro účetnictví."
    ],
    "category_note": "Zákazník platí; prodejce sleduje výdělek a případné vrácení peněz.",
    "effort": "S"
  },
  {
    "id": "12.7",
    "title": "Refundace celé platby",
    "category": "Platby a peněženka",
    "description": "Systém umí vrátit kupujícímu celou částku.",
    "without": "Bez toho musí finance řešit podporou a manuálními převody.",
    "example": "Po uznaném nedoručení se peníze vrátí na původní platební metodu.",
    "build": [
      "Vrácení peněz na původní kartu.",
      "Automatické vrácení při stornu.",
      "Evidence a potvrzení kupujícímu."
    ],
    "category_note": "Zákazník platí; prodejce sleduje výdělek a případné vrácení peněz.",
    "effort": "M"
  },
  {
    "id": "12.8",
    "title": "Částečné vrácení peněz",
    "category": "Platby a peněženka",
    "description": "Lze vrátit část ceny bez zrušení celé objednávky – po dohodě stran nebo jako rozhodnutí sporu podporou.",
    "without": "Bez toho je řešením pouze plná refundace nebo žádná.",
    "example": "Svetr přišel s malou vadou, prodávající vrátí kupujícímu 100 Kč z ceny a obchod platí. Platí i jako řešení sporu.",
    "build": [
      "Zadání částky a důvodu.",
      "Souhlas druhé strany nebo rozhodnutí podpory.",
      "Přepočet poplatků a výdělku prodejce."
    ],
    "category_note": "Zákazník platí; prodejce sleduje výdělek a případné vrácení peněz.",
    "effort": "M"
  },
  {
    "id": "12.9",
    "title": "Platba zůstatkem z peněženky",
    "category": "Platby a peněženka",
    "description": "Kupující může zaplatit nákup penězi, které má v peněžence z vlastních prodejů.",
    "example": "Klára má v peněžence 600 Kč z prodaných šatů a kabelku za 450 Kč zaplatí rovnou z nich.",
    "without": "Bez toho musí uživatel peníze nejdřív vybrat na účet a pak znovu platit kartou.",
    "build": [
      "Zůstatek jako platební metoda, i v kombinaci s kartou.",
      "Správné zaúčtování a vrácení zpět do peněženky.",
      "Zobrazení v historii."
    ],
    "category_note": "Zákazník platí; prodejce sleduje výdělek a případné vrácení peněz.",
    "effort": "M"
  },
  {
    "id": "13.1",
    "title": "Integrace dopravců přes API",
    "category": "Doprava a logistika",
    "description": "Aplikace komunikuje přímo se zásilkovými službami.",
    "without": "Bez integrace musí uživatelé dopravu řešit ručně mimo aplikaci.",
    "example": "Aplikace si sama objedná přepravu u Zásilkovny nebo PPL, nikdo nic nevyplňuje na jejich webu.",
    "build": [
      "Smlouvy a napojení API každého dopravce zvlášť (Zásilkovna, PPL…).",
      "Objednání přepravy po zaplacení.",
      "Ošetření výpadků a chyb dopravců."
    ],
    "category_note": "Po zaplacení musí vzniknout správná zásilka a oba uživatelé sledují její cestu.",
    "effort": "L"
  },
  {
    "id": "13.2",
    "title": "Automatické vytvoření štítku / podacího kódu",
    "category": "Doprava a logistika",
    "description": "Po zaplacení dostane prodávající připravený štítek nebo kód.",
    "without": "Bez něj musí prodávající sám objednávat dopravu.",
    "example": "Po zaplacení dostane prodávající do telefonu kód, nadiktuje ho na pobočce a štítek mu vytisknou.",
    "build": [
      "Získání štítku nebo podacího kódu od dopravce.",
      "Zobrazení prodávajícímu v aplikaci a e-mailem.",
      "Nové vytvoření při chybě."
    ],
    "category_note": "Po zaplacení musí vzniknout správná zásilka a oba uživatelé sledují její cestu.",
    "effort": "M"
  },
  {
    "id": "13.3",
    "title": "Mapa výdejních míst a boxů",
    "category": "Doprava a logistika",
    "description": "Kupující vybere konkrétní místo na mapě nebo v seznamu.",
    "without": "Bez mapy je výběr výdejního místa nepohodlný.",
    "example": "Na mapě vybere nejbližší výdejní box, systém jej předá dopravci.",
    "build": [
      "Mapa a seznam výdejních míst z dat dopravců.",
      "Vyhledání podle adresy a polohy.",
      "Pravidelná aktualizace míst."
    ],
    "category_note": "Po zaplacení musí vzniknout správná zásilka a oba uživatelé sledují její cestu.",
    "effort": "M"
  },
  {
    "id": "13.4",
    "title": "Sledování zásilky",
    "category": "Doprava a logistika",
    "description": "Kupující i prodávající vidí aktuální stav přepravy.",
    "without": "Bez trackingu budou uživatelé hledat zásilku u dopravce ručně.",
    "example": "Kupující v aplikaci vidí „Zásilka je na cestě, doručení zítra“.",
    "build": [
      "Načítání stavů zásilky od dopravců.",
      "Časová osa v objednávce.",
      "Upozornění na doručení."
    ],
    "category_note": "Po zaplacení musí vzniknout správná zásilka a oba uživatelé sledují její cestu.",
    "effort": "M"
  },
  {
    "id": "13.5",
    "title": "Lhůta na odeslání",
    "category": "Doprava a logistika",
    "description": "Objednávka má definovaný termín, do kdy má prodávající zásilku podat.",
    "without": "Bez lhůty může zaplacená objednávka zůstat dlouho bez pohybu.",
    "example": "Prodávající musí zásilku podat do 5 pracovních dnů, jinak se mu ukáže upozornění.",
    "build": [
      "Výpočet termínu (pracovní dny).",
      "Odpočet v objednávce a připomínky.",
      "Napojení na automatické storno."
    ],
    "category_note": "Po zaplacení musí vzniknout správná zásilka a oba uživatelé sledují její cestu.",
    "effort": "S"
  },
  {
    "id": "13.6",
    "title": "Prodloužení lhůty po souhlasu kupujícího",
    "category": "Doprava a logistika",
    "description": "Prodávající požádá o více času a kupující rozhodne.",
    "without": "Bez toho se objednávka musí stornovat nebo ignorovat původní termín.",
    "example": "Prodávající je nemocný, požádá o 3 dny navíc a kupující to schválí.",
    "build": [
      "Žádost prodejce o další dny.",
      "Schválení kupujícím.",
      "Posunutí termínu."
    ],
    "category_note": "Po zaplacení musí vzniknout správná zásilka a oba uživatelé sledují její cestu.",
    "effort": "S"
  },
  {
    "id": "13.7",
    "title": "Automatické storno při neodeslání",
    "category": "Doprava a logistika",
    "description": "Po uplynutí lhůty systém objednávku ukončí a refunduje kupujícího.",
    "without": "Bez toho budou neodeslané objednávky viset a vyžadovat podporu.",
    "example": "Prodejce zásilku včas nepodá; systém za splnění pravidel objednávku zruší a zahájí vrácení.",
    "build": [
      "Hlídání uplynulých lhůt.",
      "Zrušení objednávky a vrácení peněz.",
      "Záznam do hodnocení prodejce."
    ],
    "category_note": "Po zaplacení musí vzniknout správná zásilka a oba uživatelé sledují její cestu.",
    "effort": "M"
  },
  {
    "id": "13.8",
    "title": "Vlastní doprava / osobní předání",
    "category": "Doprava a logistika",
    "description": "Volitelný režim mimo dopravce: kupující a prodávající si věc předají osobně a převzetí potvrdí kódem v aplikaci.",
    "without": "Bez něj bude možné obchodovat jen prostřednictvím podporovaných dopravců.",
    "example": "Kupující a prodávající jsou ze stejného města a předají si věc osobně; převzetí potvrdí kódem v aplikaci.",
    "build": [
      "Volba „osobní předání“ v objednávce.",
      "Jednorázový kód pro potvrzení převzetí.",
      "Pravidla ochrany kupujícího bez dopravce."
    ],
    "category_note": "Po zaplacení musí vzniknout správná zásilka a oba uživatelé sledují její cestu.",
    "effort": "M"
  },
  {
    "id": "14.1",
    "title": "Stavy objednávky",
    "category": "Životní cyklus objednávky",
    "description": "Objednávka má jasné stavy od vytvoření přes zaplacení a doručení až po dokončení.",
    "without": "Bez stavového automatu vzniknou nekonzistentní transakce.",
    "example": "Objednávka postupně přejde přes „zaplaceno“, „odesláno“, „doručeno“ a „dokončeno“.",
    "build": [
      "Návrh všech stavů a povolených přechodů mezi nimi.",
      "Hlídání, aby objednávka nikdy neuvízla.",
      "Záznam každé změny."
    ],
    "category_note": "Objednávka postupně mění stav od zaplacení až po dokončení.",
    "effort": "L"
  },
  {
    "id": "14.2",
    "title": "Potvrzení odeslání",
    "category": "Životní cyklus objednávky",
    "description": "Prodávající nebo dopravce potvrdí, že zásilka byla podána.",
    "without": "Bez toho není jasné, zda prodejce splnil povinnost.",
    "example": "Po podání zásilky se objednávka přepne na „Odesláno“ a kupující dostane upozornění.",
    "build": [
      "Ruční i automatické potvrzení od dopravce.",
      "Upozornění kupujícímu.",
      "Kontrola lhůty."
    ],
    "category_note": "Objednávka postupně mění stav od zaplacení až po dokončení.",
    "effort": "S"
  },
  {
    "id": "14.3",
    "title": "Potvrzení převzetí kupujícím",
    "category": "Životní cyklus objednávky",
    "description": "Kupující potvrdí, že je vše v pořádku.",
    "without": "Bez něj se musí čekat pouze na automatickou lhůtu.",
    "example": "Kupující otevře balík, vše sedí, klepne „Vše v pořádku“ a prodávajícímu se uvolní peníze.",
    "build": [
      "Tlačítko „Vše v pořádku“.",
      "Uvolnění peněz prodejci.",
      "Výzva k hodnocení."
    ],
    "category_note": "Objednávka postupně mění stav od zaplacení až po dokončení.",
    "effort": "S"
  },
  {
    "id": "14.4",
    "title": "Automatické dokončení po lhůtě",
    "category": "Životní cyklus objednávky",
    "description": "Pokud kupující nenahlásí problém, systém objednávku po určité době dokončí.",
    "without": "Bez toho musí každý obchod ručně uzavírat kupující nebo podpora.",
    "example": "Kupující nic nepotvrdí ani nenahlásí; po 2 dnech od doručení se objednávka dokončí sama.",
    "build": [
      "Odpočet po doručení (např. 2 dny).",
      "Automatické dokončení a výplata.",
      "Upozornění před koncem lhůty."
    ],
    "category_note": "Objednávka postupně mění stav od zaplacení až po dokončení.",
    "effort": "S"
  },
  {
    "id": "14.5",
    "title": "Ruční storno před odesláním",
    "category": "Životní cyklus objednávky",
    "description": "Kupující nebo prodávající mohou v povoleném stavu objednávku zrušit.",
    "without": "Bez toho bude každé storno vyžadovat zásah podpory.",
    "example": "Prodávající zjistí, že má svetr potrhaný, a ještě před odesláním objednávku zruší.",
    "build": [
      "Tlačítko Zrušit v povolených stavech.",
      "Vrácení peněz.",
      "Upozornění druhé straně."
    ],
    "category_note": "Objednávka postupně mění stav od zaplacení až po dokončení.",
    "effort": "S"
  },
  {
    "id": "14.6",
    "title": "Důvody storna",
    "category": "Životní cyklus objednávky",
    "description": "Při stornu se zaznamená strukturovaný důvod.",
    "without": "Bez toho nebude jasné, proč se objednávky ruší.",
    "example": "Při zrušení prodávající vybere důvod „Předmět je poškozený“.",
    "build": [
      "Seznam důvodů.",
      "Statistika pro moderaci.",
      "Vliv na hodnocení."
    ],
    "category_note": "Objednávka postupně mění stav od zaplacení až po dokončení.",
    "effort": "S"
  },
  {
    "id": "14.7",
    "title": "Automatické vrácení nabídky do prodeje",
    "category": "Životní cyklus objednávky",
    "description": "Po stornu lze položku znovu aktivovat.",
    "without": "Bez toho musí nabídku založit znovu.",
    "example": "Po zrušení objednávky se svetr automaticky znovu objeví v nabídce.",
    "build": [
      "Znovu zobrazit inzerát po stornu.",
      "Upozornění prodejci.",
      "Výjimka pro poškozené věci."
    ],
    "category_note": "Objednávka postupně mění stav od zaplacení až po dokončení.",
    "effort": "S"
  },
  {
    "id": "15.1",
    "title": "Tlačítko „Mám problém“",
    "category": "Ochrana kupujícího a spory",
    "description": "Kupující v definované lhůtě zastaví dokončení objednávky a otevře problém.",
    "without": "Bez něj nelze jednoduše zastavit transakci při vadném zboží.",
    "example": "Kupující otevře zaplacenou objednávku a klikne „Mám problém“, protože přišlo poškozené zboží.",
    "build": [
      "Tlačítko v objednávce během ochranné lhůty.",
      "Zastavení automatického dokončení.",
      "Otevření případu s druhou stranou."
    ],
    "category_note": "Kupující hlásí problém s doručenou věcí a žádá řešení.",
    "effort": "M"
  },
  {
    "id": "15.2",
    "title": "Typy reklamací",
    "category": "Ochrana kupujícího a spory",
    "description": "Kupující zvolí např. nedoručeno, poškozeno, neodpovídá popisu, podezření na padělek.",
    "without": "Bez toho bude každý spor volný text a práce podpory naroste.",
    "example": "Kupující vybere „Neodpovídá popisu“, ne jen napíše dlouhý text.",
    "build": [
      "Seznam typů s návodem, co doložit.",
      "Jiný postup podle typu.",
      "Statistika pro podporu."
    ],
    "category_note": "Kupující hlásí problém s doručenou věcí a žádá řešení.",
    "effort": "S"
  },
  {
    "id": "15.3",
    "title": "Nahrání důkazů",
    "category": "Ochrana kupujícího a spory",
    "description": "Strany mohou přiložit fotografie, zprávy a další podklady.",
    "without": "Bez toho se spor stává tvrzením proti tvrzení.",
    "example": "K reklamaci přiloží fotografie poškození a obalu, aby podpora mohla rozhodnout.",
    "build": [
      "Nahrání fotek a dokumentů k případu.",
      "Přístup jen pro strany a podporu.",
      "Uchování po dobu sporu."
    ],
    "category_note": "Kupující hlásí problém s doručenou věcí a žádá řešení.",
    "effort": "M"
  },
  {
    "id": "15.4",
    "title": "Pozastavení výplaty během sporu",
    "category": "Ochrana kupujícího a spory",
    "description": "Peníze zůstanou zadrženy do vyřešení případu.",
    "without": "Bez toho mohou být peníze vyplaceny dříve než se spor vyřeší.",
    "example": "Kupující nahlásí problém a peníze prodávajícímu se zastaví, dokud se spor nevyřeší.",
    "build": [
      "Zadržení peněz při otevřeném sporu.",
      "Uvolnění podle výsledku.",
      "Upozornění prodejci."
    ],
    "category_note": "Kupující hlásí problém s doručenou věcí a žádá řešení.",
    "effort": "M"
  },
  {
    "id": "15.5",
    "title": "Dohoda mezi kupujícím a prodávajícím",
    "category": "Ochrana kupujícího a spory",
    "description": "Systém umožní, aby strany vyřešily problém samy před eskalací.",
    "without": "Bez toho musí každý problém řešit interní tým.",
    "example": "Kupující a prodávající se v aplikaci domluví na vrácení části peněz a spor se uzavře bez podpory.",
    "build": [
      "Návrh řešení (vrácení části, vrácení zboží).",
      "Přijetí druhou stranou.",
      "Automatické provedení dohody."
    ],
    "category_note": "Kupující hlásí problém s doručenou věcí a žádá řešení.",
    "effort": "M"
  },
  {
    "id": "15.6",
    "title": "Eskalace na zákaznickou podporu",
    "category": "Ochrana kupujícího a spory",
    "description": "Pokud není dohoda, případ převezme moderátor / support.",
    "without": "Bez toho neexistuje autorita, která spor uzavře.",
    "example": "Strany se nedohodnou, kupující klepne „Požádat podporu o pomoc“ a případ převezme pracovník Bobiny.",
    "build": [
      "Předání případu podpoře.",
      "Lhůty pro odpověď.",
      "Rozhodnutí a jeho provedení."
    ],
    "category_note": "Kupující hlásí problém s doručenou věcí a žádá řešení.",
    "effort": "M"
  },
  {
    "id": "15.7",
    "title": "Proces vrácení zboží",
    "category": "Ochrana kupujícího a spory",
    "description": "Systém určí, zda a kam se má zboží vrátit a sleduje návratovou zásilku.",
    "without": "Bez toho se vrácení řeší ručně a snadno vzniknou další spory.",
    "example": "Bota je jiná velikost; kupující dostane štítek na vrácení a po doručení zpět se mu vrátí peníze.",
    "build": [
      "Štítek pro zpětnou zásilku.",
      "Sledování zpětné zásilky.",
      "Vrácení peněz po doručení zpět."
    ],
    "category_note": "Kupující hlásí problém s doručenou věcí a žádá řešení.",
    "effort": "L"
  },
  {
    "id": "15.8",
    "title": "Reklamace ztracené zásilky u dopravce",
    "category": "Ochrana kupujícího a spory",
    "description": "Systém propojí objednávku s reklamačním procesem dopravce.",
    "without": "Bez toho musí uživatel nebo podpora vše řešit odděleně.",
    "example": "Zásilka se ztratila; aplikace sama podá reklamaci u dopravce a kupující dostane peníze zpět.",
    "build": [
      "Podání reklamace dopravci přes jeho systém.",
      "Vrácení peněz kupujícímu.",
      "Evidence náhrad od dopravce."
    ],
    "category_note": "Kupující hlásí problém s doručenou věcí a žádá řešení.",
    "effort": "M"
  },
  {
    "id": "16.1",
    "title": "Hodnocení po dokončené transakci",
    "category": "Hodnocení a reputace",
    "description": "Kupující a prodávající se po obchodu ohodnotí.",
    "without": "Bez toho nový kupující neví, zda je protistrana spolehlivá.",
    "example": "Po doručení kupující ohodnotí prodejce pěti hvězdami a krátkým komentářem.",
    "build": [
      "Výzva k hodnocení po dokončení.",
      "Hodnocení jen u skutečné objednávky.",
      "Uzávěrka pro úpravy."
    ],
    "category_note": "Po dokončení prodeje jedna strana hodnotí zkušenost s druhou.",
    "effort": "M"
  },
  {
    "id": "16.2",
    "title": "Hvězdičkové skóre",
    "category": "Hodnocení a reputace",
    "description": "Profil zobrazuje průměrné hodnocení.",
    "without": "Bez skóre musí uživatel číst všechny recenze.",
    "example": "U profilu svítí „★ 4,8 z 5 (52 hodnocení)“.",
    "build": [
      "Výpočet průměru.",
      "Zobrazení na profilu a u inzerátu.",
      "Ochrana proti manipulaci."
    ],
    "category_note": "Po dokončení prodeje jedna strana hodnotí zkušenost s druhou.",
    "effort": "S"
  },
  {
    "id": "16.3",
    "title": "Textová recenze",
    "category": "Hodnocení a reputace",
    "description": "Uživatel může doplnit zkušenost slovně.",
    "without": "Bez textu je hodnocení méně informativní.",
    "example": "Kupující napíše „Rychlé odeslání, krásně zabalené, doporučuji!“.",
    "build": [
      "Pole pro text s limitem.",
      "Kontrola nevhodného obsahu.",
      "Zobrazení na profilu."
    ],
    "category_note": "Po dokončení prodeje jedna strana hodnotí zkušenost s druhou.",
    "effort": "S"
  },
  {
    "id": "16.4",
    "title": "Automatické hodnocení za vybraná selhání",
    "category": "Hodnocení a reputace",
    "description": "Systém může označit opakované storno nebo neodeslání.",
    "without": "Bez toho lze opakovaně rušit objednávky bez dopadu na reputaci.",
    "example": "Prodávající třikrát neodeslal zásilku; aplikace mu automaticky přidá záporné hodnocení.",
    "build": [
      "Pravidla pro automatické záznamy.",
      "Zobrazení na profilu.",
      "Odvolání."
    ],
    "category_note": "Po dokončení prodeje jedna strana hodnotí zkušenost s druhou.",
    "effort": "S"
  },
  {
    "id": "16.5",
    "title": "Nahlášení nevhodné recenze",
    "category": "Hodnocení a reputace",
    "description": "Uživatel může požádat o moderaci recenze porušující pravidla.",
    "without": "Bez toho se recenzní systém může stát nástrojem obtěžování.",
    "example": "Prodávající dostane urážlivou recenzi, nahlásí ji a moderátor ji odstraní.",
    "build": [
      "Tlačítko Nahlásit.",
      "Fronta pro moderátora.",
      "Skrytí po rozhodnutí."
    ],
    "category_note": "Po dokončení prodeje jedna strana hodnotí zkušenost s druhou.",
    "effort": "S"
  },
  {
    "id": "16.6",
    "title": "Odpověď prodejce na hodnocení",
    "category": "Hodnocení a reputace",
    "description": "Prodávající může k hodnocení napsat veřejnou odpověď.",
    "example": "Kupující napíše „Svetr byl menší“; Klára odpoví „Rozměry byly v popisu, ale omlouvám se, nabízím vrácení“.",
    "without": "Bez toho se prodávající nemůže k nespravedlivému hodnocení vyjádřit.",
    "build": [
      "Jedna odpověď na hodnocení.",
      "Zobrazení pod hodnocením.",
      "Moderace odpovědí."
    ],
    "category_note": "Po dokončení prodeje jedna strana hodnotí zkušenost s druhou.",
    "effort": "S"
  },
  {
    "id": "17.1",
    "title": "Moje nabídky / šatník",
    "category": "Nástroje prodejce",
    "description": "Prodávající vidí všechny aktivní, rezervované, prodané a skryté položky.",
    "without": "Bez toho se větší počet nabídek stává nepřehledný.",
    "example": "Klára vidí na jednom místě 35 aktivních, 2 rezervované, 48 prodaných a 3 skryté inzeráty.",
    "build": [
      "Přehled inzerátů podle stavu.",
      "Rychlé akce (zlevnit, skrýt, topovat).",
      "Hledání ve vlastních inzerátech."
    ],
    "category_note": "Prodejce otevře svůj šatník a řídí vystavené předměty i objednávky.",
    "effort": "M"
  },
  {
    "id": "17.2",
    "title": "Přehled prodejů",
    "category": "Nástroje prodejce",
    "description": "Ukazuje aktuální a dokončené objednávky.",
    "without": "Bez toho je nutné vše hledat v jednotlivých chatech.",
    "example": "V přehledu prodejů Klára vidí, které objednávky musí ještě odeslat.",
    "build": [
      "Seznam objednávek podle stavu.",
      "Zvýraznění toho, co je potřeba odeslat.",
      "Detail objednávky."
    ],
    "category_note": "Prodejce otevře svůj šatník a řídí vystavené předměty i objednávky.",
    "effort": "S"
  },
  {
    "id": "17.3",
    "title": "Přehled výdělků",
    "category": "Nástroje prodejce",
    "description": "Souhrn příjmů za období.",
    "without": "Bez toho si musí výdělky počítat z jednotlivých transakcí.",
    "example": "Klára vidí „Za říjen vyděláno 3 450 Kč“.",
    "build": [
      "Součty za období.",
      "Graf vývoje.",
      "Export."
    ],
    "category_note": "Prodejce otevře svůj šatník a řídí vystavené předměty i objednávky.",
    "effort": "S"
  },
  {
    "id": "17.4",
    "title": "Hromadná správa nabídek",
    "category": "Nástroje prodejce",
    "description": "Umožní označit více položek a změnit cenu, skrýt je nebo odstranit.",
    "without": "Bez toho se každá změna provádí jednotlivě.",
    "example": "Klára označí 20 letních věcí a jedním klepnutím jim sníží cenu o 20 %.",
    "build": [
      "Výběr více inzerátů.",
      "Hromadná změna ceny / skrytí / smazání.",
      "Kontrola rozběhlých objednávek."
    ],
    "category_note": "Prodejce otevře svůj šatník a řídí vystavené předměty i objednávky.",
    "effort": "M"
  },
  {
    "id": "17.5",
    "title": "Režim dovolená",
    "category": "Nástroje prodejce",
    "description": "Dočasně omezí nákup nebo upozorní na delší odeslání.",
    "without": "Bez něj musí všechny nabídky ručně skrýt nebo riskovat storna.",
    "example": "Prodejce odjíždí na týden pryč a zapne dovolenou, aby nepřijímal objednávky, které nestihne odeslat.",
    "build": [
      "Zapnutí s datem návratu.",
      "Skrytí nebo zablokování nákupu.",
      "Upozornění zájemcům."
    ],
    "category_note": "Prodejce otevře svůj šatník a řídí vystavené předměty i objednávky.",
    "effort": "S"
  },
  {
    "id": "17.6",
    "title": "Statistiky nabídek",
    "category": "Nástroje prodejce",
    "description": "Ukazuje zobrazení, oblíbené, konverzi a další metriky.",
    "without": "Bez toho prodávající neví, proč se nabídka neprodává.",
    "example": "Klára vidí, že šaty mělo 230 lidí zobrazené a 18 v oblíbených, ale nikdo je nekoupil.",
    "build": [
      "Počítání zobrazení a oblíbení.",
      "Přehled u každého inzerátu.",
      "Doporučení (např. zlevni)."
    ],
    "category_note": "Prodejce otevře svůj šatník a řídí vystavené předměty i objednávky.",
    "effort": "M"
  },
  {
    "id": "18.1",
    "title": "Topování / bump jednotlivé nabídky",
    "category": "Monetizace",
    "description": "Prodávající zaplatí za dočasně vyšší viditelnost položky.",
    "without": "Bez toho přichází platforma o přímou monetizaci prodejců.",
    "example": "Prodejce si zaplatí zvýraznění bot a po stanovenou dobu je nabídka lépe viditelná.",
    "build": [
      "Nákup topování a platba.",
      "Přednostní zobrazení na zvolenou dobu.",
      "Vyhodnocení, kolik to přineslo."
    ],
    "category_note": "Prodejce nebo platforma využívá placenou službu či poplatek.",
    "effort": "M"
  },
  {
    "id": "18.2",
    "title": "Zvýraznění celého profilu / šatníku",
    "category": "Monetizace",
    "description": "Placena propagace zobrazí více položek jednoho prodejce.",
    "without": "Bez toho lze monetizovat jen jednotlivé položky.",
    "example": "Klára zaplatí 99 Kč a celý její šatník se týden ukazuje víc lidem.",
    "build": [
      "Nákup propagace šatníku.",
      "Zobrazení ve feedu a ve hledání.",
      "Statistiky výsledku."
    ],
    "category_note": "Prodejce nebo platforma využívá placenou službu či poplatek.",
    "effort": "M"
  },
  {
    "id": "18.3",
    "title": "Propagační kredity / kupony",
    "category": "Monetizace",
    "description": "Platforma může přidělit slevu na placené funkce nebo nákup.",
    "without": "Bez toho jsou promo akce méně flexibilní.",
    "example": "Nová uživatelka dostane kupon „100 Kč na první nákup“.",
    "build": [
      "Generování kódů a kreditů.",
      "Uplatnění v objednávce.",
      "Pravidla platnosti a zneužití."
    ],
    "category_note": "Prodejce nebo platforma využívá placenou službu či poplatek.",
    "effort": "M"
  },
  {
    "id": "18.4",
    "title": "Poplatek za ochranu kupujícího",
    "category": "Monetizace",
    "description": "Checkout přidá poplatek za bezpečnou transakci a služby platformy.",
    "without": "Bez něj musí platforma vydělávat jiným způsobem.",
    "example": "Kupující u svetru za 420 Kč zaplatí navíc ochranu kupujícího, třeba 5 % + 15 Kč.",
    "build": [
      "Výpočet poplatku v objednávce.",
      "Zobrazení a vysvětlení kupujícímu.",
      "Nastavení sazby v administraci."
    ],
    "category_note": "Prodejce nebo platforma využívá placenou službu či poplatek.",
    "effort": "S"
  },
  {
    "id": "18.5",
    "title": "Provize z prodeje",
    "category": "Monetizace",
    "description": "Platforma strhne procento nebo fixní částku z ceny prodávajícího.",
    "without": "Bez provize musí být monetizace na kupujícím, reklamě nebo předplatném.",
    "example": "Z prodeje za 420 Kč si Bobina nechá například 10 % a prodávajícímu pošle 378 Kč.",
    "build": [
      "Výpočet a stržení provize z výdělku.",
      "Zobrazení prodejci před vystavením.",
      "Nastavení sazby."
    ],
    "category_note": "Prodejce nebo platforma využívá placenou službu či poplatek.",
    "effort": "S"
  },
  {
    "id": "18.6",
    "title": "Předplatné PRO",
    "category": "Monetizace",
    "description": "Profesionální prodejci platí měsíční tarif za rozšířené nástroje.",
    "without": "Bez něj jsou PRO funkce zdarma nebo se monetizují jinak.",
    "example": "Malý obchod s second handem platí 299 Kč měsíčně za firemní profil a lepší nástroje.",
    "build": [
      "Opakované platby a tarify.",
      "Odemčení nástrojů podle tarifu.",
      "Faktury a zrušení předplatného."
    ],
    "category_note": "Prodejce nebo platforma využívá placenou službu či poplatek.",
    "effort": "L"
  },
  {
    "id": "18.7",
    "title": "Reklamní plochy / sponzorovaný obsah",
    "category": "Monetizace",
    "description": "Platforma může zobrazovat placenou reklamu třetích stran nebo partnerů.",
    "without": "Bez něj bude uživatelské prostředí čistší, ale monetizace užší.",
    "example": "Mezi nabídkami se občas zobrazí reklama na prací prostředek nebo spřátelený e-shop.",
    "build": [
      "Reklamní místa ve feedu.",
      "Správa kampaní nebo napojení reklamní sítě.",
      "Souhlas s cookies a označení reklamy."
    ],
    "category_note": "Prodejce nebo platforma využívá placenou službu či poplatek.",
    "effort": "M"
  },
  {
    "id": "19.1",
    "title": "Push notifikace",
    "category": "Upozornění",
    "description": "Mobil upozorní na zprávy, prodej, nabídku ceny, dopravu a další události.",
    "without": "Bez push notifikací se transakce zpomalí a více uživatelů zapomene reagovat.",
    "example": "Na telefonu se objeví upozornění „Vaše zásilka byla doručena“.",
    "build": [
      "Napojení na Apple a Google notifikace.",
      "Typy upozornění a jejich texty.",
      "Hromadné i jednotlivé odesílání."
    ],
    "category_note": "Uživatel dostane zprávu o důležité události nebo nové nabídce.",
    "effort": "M"
  },
  {
    "id": "19.2",
    "title": "E-mailové notifikace",
    "category": "Upozornění",
    "description": "Důležité události se odešlou také e-mailem.",
    "without": "Bez něj jsou uživatelé závislí pouze na aplikaci.",
    "example": "Kupujícímu přijde e-mail „Vaše objednávka byla odeslána“.",
    "build": [
      "Napojení e-mailové služby.",
      "Šablony e-mailů ve všech jazycích.",
      "Odhlášení a správa doručitelnosti."
    ],
    "category_note": "Uživatel dostane zprávu o důležité události nebo nové nabídce.",
    "effort": "M"
  },
  {
    "id": "19.3",
    "title": "Nastavení notifikací",
    "category": "Upozornění",
    "description": "Uživatel si zvolí, které typy upozornění chce.",
    "without": "Bez nastavení může platforma uživatele zahlcovat nebo naopak neinformovat.",
    "example": "Uživatelka si vypne upozornění na novinky, ale nechá si upozornění na zprávy a objednávky.",
    "build": [
      "Obrazovka s přepínači podle typu.",
      "Respektování nastavení při odesílání.",
      "Výchozí nastavení."
    ],
    "category_note": "Uživatel dostane zprávu o důležité události nebo nové nabídce.",
    "effort": "S"
  },
  {
    "id": "19.4",
    "title": "Transakční upozornění s vysokou prioritou",
    "category": "Upozornění",
    "description": "Platba, storno, spor nebo termín odeslání mají oddělený režim od marketingu.",
    "without": "Bez toho mohou uživatelé vypnout vše kvůli marketingu a přijít o důležité zprávy.",
    "example": "Upozornění „Zbývá 1 den na odeslání zásilky“ přijde vždy, i když má uživatelka vypnuté reklamní zprávy.",
    "build": [
      "Oddělení důležitých upozornění od reklamních.",
      "Doručení i při vypnutém marketingu.",
      "Záloha e-mailem."
    ],
    "category_note": "Uživatel dostane zprávu o důležité události nebo nové nabídce.",
    "effort": "S"
  },
  {
    "id": "19.5",
    "title": "Marketingové kampaně",
    "category": "Upozornění",
    "description": "Platforma posílá cílené kampaně podle segmentu a chování.",
    "without": "Bez toho bude retence záviset jen na organickém návratu.",
    "example": "Uživatelkám, které hledají boty, přijde „Jarní výprodej tenisek – sleva na dopravu“.",
    "build": [
      "Výběr skupin uživatelů.",
      "Plánování a odeslání kampaně.",
      "Měření výsledků a souhlasy."
    ],
    "category_note": "Uživatel dostane zprávu o důležité události nebo nové nabídce.",
    "effort": "M"
  },
  {
    "id": "20.1",
    "title": "Nahlášení uživatele",
    "category": "Bezpečnost a moderace",
    "description": "Uživatel může nahlásit podezřelý profil.",
    "without": "Bez toho je moderace výrazně méně škálovatelná.",
    "example": "Profil vypadá jako podvodník, kupující ho nahlásí a moderátor ho prověří.",
    "build": [
      "Formulář s důvody.",
      "Fronta pro moderátora.",
      "Odpověď nahlašovateli."
    ],
    "category_note": "Komunita nebo systém označí rizikové chování či nevhodný obsah.",
    "effort": "S"
  },
  {
    "id": "20.2",
    "title": "Nahlášení nabídky",
    "category": "Bezpečnost a moderace",
    "description": "Podezřelé nebo zakázané zboží lze nahlásit přímo z detailu nabídky a předat moderaci.",
    "without": "Bez toho závadné položky zůstanou déle online.",
    "example": "Kupující nahlásí inzerát s padělkem kabelky, z inzerátu i ze stránky moderace.",
    "build": [
      "Tlačítko na detailu inzerátu.",
      "Fronta pro moderátora.",
      "Skrytí inzerátu po rozhodnutí."
    ],
    "category_note": "Komunita nebo systém označí rizikové chování či nevhodný obsah.",
    "effort": "S"
  },
  {
    "id": "20.3",
    "title": "Nahlášení zprávy nebo konverzace",
    "category": "Bezpečnost a moderace",
    "description": "Zprávy i celé konverzace lze nahlásit kvůli phishingu, spamu nebo obtěžování.",
    "without": "Bez toho platforma ztrácí důležitý bezpečnostní mechanismus.",
    "example": "Někdo v chatu posílá podezřelý odkaz na platbu; příjemce zprávu nahlásí. Lze nahlásit i celou konverzaci.",
    "build": [
      "Nahlášení zprávy i celé konverzace.",
      "Přístup moderátora ke konverzaci.",
      "Blokace odesílatele."
    ],
    "category_note": "Komunita nebo systém označí rizikové chování či nevhodný obsah.",
    "effort": "S"
  },
  {
    "id": "20.4",
    "title": "Automatická detekce zakázaného obsahu",
    "category": "Bezpečnost a moderace",
    "description": "Pravidla nebo AI před publikací a po ní hledají rizikové texty a obrázky.",
    "without": "Bez toho bude potřeba výrazně větší moderátorský tým.",
    "example": "Prodávající do popisu napíše telefon a „pošli peníze na účet“; aplikace inzerát zadrží ke kontrole.",
    "build": [
      "Pravidla a klíčová slova pro rizikový obsah.",
      "Napojení AI kontroly obrázků a textů.",
      "Zadržení podezřelého obsahu ke kontrole."
    ],
    "category_note": "Komunita nebo systém označí rizikové chování či nevhodný obsah.",
    "effort": "L"
  },
  {
    "id": "20.5",
    "title": "Detekce padělků / podezřelých značkových nabídek",
    "category": "Bezpečnost a moderace",
    "description": "Rizikové luxusní produkty označí k ruční kontrole nebo vyžádá důkaz originality.",
    "without": "Bez toho může marketplace rychle získat pověst místa pro fake zboží.",
    "example": "Kabelka „Louis Vuitton“ za 500 Kč se automaticky označí jako podezřelá a prodávající musí doložit pravost.",
    "build": [
      "Pravidla pro rizikové značky a ceny.",
      "Žádost o doklad pravosti.",
      "Fronta pro odborníka."
    ],
    "category_note": "Komunita nebo systém označí rizikové chování či nevhodný obsah.",
    "effort": "L"
  },
  {
    "id": "20.6",
    "title": "Detekce phishingových odkazů a kontaktů",
    "category": "Bezpečnost a moderace",
    "description": "Chat blokuje nebo varuje před podezřelými odkazy, e-maily a přesunem platby mimo platformu.",
    "without": "Bez toho může být bezpečný checkout obcházen komunikací v chatu.",
    "example": "Podvodník pošle falešný odkaz na platbu; systém zprávu označí nebo zablokuje.",
    "build": [
      "Rozpoznání odkazů, e-mailů a čísel účtů v chatu.",
      "Varování nebo blokace zprávy.",
      "Hlášení opakovaných pokusů."
    ],
    "category_note": "Komunita nebo systém označí rizikové chování či nevhodný obsah.",
    "effort": "M"
  },
  {
    "id": "20.7",
    "title": "Dočasná a trvalá blokace účtu",
    "category": "Bezpečnost a moderace",
    "description": "Moderátor může účet omezit na určitou dobu nebo definitivně.",
    "without": "Bez toho lze pouze mazat jednotlivý obsah, ale problémový uživatel pokračuje.",
    "example": "Za opakované podvody dostane účet blokaci na 30 dní, při dalším porušení navždy.",
    "build": [
      "Typy blokací a jejich délka.",
      "Co blokovaný účet nesmí.",
      "Upozornění s důvodem."
    ],
    "category_note": "Komunita nebo systém označí rizikové chování či nevhodný obsah.",
    "effort": "M"
  },
  {
    "id": "20.8",
    "title": "Odvolání proti moderaci",
    "category": "Bezpečnost a moderace",
    "description": "Uživatel může napadnout blokaci nebo smazání nabídky.",
    "without": "Bez toho budou omyly moderace řešeny chaoticky přes podporu.",
    "example": "Prodávající si myslí, že mu inzerát smazali neprávem, podá odvolání a moderátor rozhodne znovu.",
    "build": [
      "Formulář odvolání.",
      "Druhé posouzení jiným moderátorem.",
      "Odpověď s odůvodněním."
    ],
    "category_note": "Komunita nebo systém označí rizikové chování či nevhodný obsah.",
    "effort": "M"
  },
  {
    "id": "21.1",
    "title": "Ověření originality luxusního zboží",
    "category": "Ověření rizikových předmětů",
    "description": "Vybraná objednávka nejprve putuje do ověřovacího centra.",
    "without": "Bez toho nese kupující i platforma vyšší riziko u luxusních transakcí.",
    "example": "Dražší značková kabelka může před předáním projít kontrolou pravosti.",
    "build": [
      "Smlouva s ověřovacím centrem nebo vlastní tým odborníků.",
      "Postup ověření a protokol.",
      "Poplatek za ověření v objednávce."
    ],
    "category_note": "Kupující chce nezávislé potvrzení, že předmět odpovídá nabídce.",
    "effort": "L"
  },
  {
    "id": "21.2",
    "title": "Ověření elektroniky",
    "category": "Ověření rizikových předmětů",
    "description": "Specialista zkontroluje funkčnost, stav, vlastnosti a případně originalitu zařízení.",
    "without": "Bez toho bude více sporů o skryté vady a funkčnost.",
    "example": "Kupující koupí iPhone za 8 000 Kč s ověřením; technik zkontroluje, že funguje a není kradený.",
    "build": [
      "Partner nebo technik pro kontrolu zařízení.",
      "Kontrolní seznam podle typu zařízení.",
      "Protokol pro kupujícího."
    ],
    "category_note": "Kupující chce nezávislé potvrzení, že předmět odpovídá nabídce.",
    "effort": "L"
  },
  {
    "id": "21.3",
    "title": "Automatická způsobilost pro ověření",
    "category": "Ověření rizikových předmětů",
    "description": "Systém podle kategorie, značky a ceny určí, zda lze službu nabídnout.",
    "without": "Bez toho musí způsobilost určovat člověk.",
    "example": "Aplikace nabídne ověření jen u značkových kabelek nad 3 000 Kč, u trička ne.",
    "build": [
      "Pravidla podle kategorie, značky a ceny.",
      "Nabídka služby v objednávce.",
      "Nastavení v administraci."
    ],
    "category_note": "Kupující chce nezávislé potvrzení, že předmět odpovídá nabídce.",
    "effort": "S"
  },
  {
    "id": "21.4",
    "title": "Speciální logistický tok přes ověřovací centrum",
    "category": "Ověření rizikových předmětů",
    "description": "Po zaplacení se zásilka neposílá rovnou kupujícímu.",
    "without": "Bez něj nelze autentizaci bezpečně vložit do objednávkového procesu.",
    "example": "Kabelka nejde rovnou kupující, ale nejdřív do ověřovacího centra a odtud teprve k ní.",
    "build": [
      "Doprava prodejce → centrum → kupující.",
      "Stavy objednávky pro tuto cestu.",
      "Sledování obou zásilek."
    ],
    "category_note": "Kupující chce nezávislé potvrzení, že předmět odpovídá nabídce.",
    "effort": "L"
  },
  {
    "id": "21.5",
    "title": "Výsledek ověření a refundace",
    "category": "Ověření rizikových předmětů",
    "description": "Neúspěšně ověřená položka se nedoručí kupujícímu a spustí se definovaný proces vrácení.",
    "without": "Bez toho neexistuje automatický postup při neúspěšném ověření.",
    "example": "Kabelka se ukáže jako padělek; kupující dostane všechny peníze zpět a kabelka se vrátí prodávajícímu.",
    "build": [
      "Zápis výsledku ověření.",
      "Vrácení peněz a zboží při neúspěchu.",
      "Upozornění oběma stranám."
    ],
    "category_note": "Kupující chce nezávislé potvrzení, že předmět odpovídá nabídce.",
    "effort": "M"
  },
  {
    "id": "22.1",
    "title": "Centrum nápovědy / FAQ",
    "category": "Zákaznická podpora",
    "description": "Uživatel najde návody podle témat bez kontaktování podpory.",
    "without": "Bez něj bude podpora odpovídat stále na stejné otázky.",
    "example": "Uživatelka hledá „jak vrátit zboží“ a najde návod v nápovědě bez psaní podpoře.",
    "build": [
      "Systém článků s kategoriemi a hledáním.",
      "Napsání desítek návodů.",
      "Správa článků bez programátora."
    ],
    "category_note": "Uživatel potřebuje pomoc s nákupem, účtem nebo reklamací.",
    "effort": "M"
  },
  {
    "id": "22.2",
    "title": "Kontaktní formulář podle problému",
    "category": "Zákaznická podpora",
    "description": "Formulář sbírá správná data podle typu požadavku.",
    "without": "Bez toho vzniknou dlouhé výměny zpráv kvůli chybějícím údajům.",
    "example": "Ve formuláři vybere „Problém s platbou“ a formulář se rovnou zeptá na číslo objednávky.",
    "build": [
      "Formulář s výběrem typu problému.",
      "Povinná pole podle typu.",
      "Odeslání do systému podpory."
    ],
    "category_note": "Uživatel potřebuje pomoc s nákupem, účtem nebo reklamací.",
    "effort": "S"
  },
  {
    "id": "22.3",
    "title": "Ticketing systém",
    "category": "Zákaznická podpora",
    "description": "Každý požadavek má číslo, stav, prioritu a historii.",
    "without": "Bez toho se požadavky snadno ztratí nebo řeší duplicitně.",
    "example": "Uživatel vytvoří požadavek na podporu a dostane číslo případu i přehled odpovědí.",
    "build": [
      "Napojení nebo vlastní systém požadavků (např. Freshdesk, Zendesk).",
      "Stavy, priority, přiřazení pracovníkům.",
      "Historie komunikace."
    ],
    "category_note": "Uživatel potřebuje pomoc s nákupem, účtem nebo reklamací.",
    "effort": "M"
  },
  {
    "id": "22.4",
    "title": "Podpora přímo z objednávky",
    "category": "Zákaznická podpora",
    "description": "Uživatel otevře podporu se současným kontextem transakce.",
    "without": "Bez toho uživatel opisuje čísla a vysvětluje celý případ.",
    "example": "U konkrétní objednávky klepne „Potřebuji pomoc“ a podpora hned ví, o jakou objednávku jde.",
    "build": [
      "Tlačítko v objednávce.",
      "Automatické přiložení údajů objednávky.",
      "Zobrazení odpovědi v aplikaci."
    ],
    "category_note": "Uživatel potřebuje pomoc s nákupem, účtem nebo reklamací.",
    "effort": "S"
  },
  {
    "id": "22.5",
    "title": "Šablony odpovědí a makra",
    "category": "Zákaznická podpora",
    "description": "Operátor má připravené reakce a akce pro typické situace.",
    "without": "Bez toho každý operátor odpovídá jinak a pomaleji.",
    "example": "Pracovník podpory jedním klepnutím vloží připravenou odpověď „Jak vrátit zboží“.",
    "build": [
      "Knihovna odpovědí.",
      "Vkládání jedním klepnutím.",
      "Úpravy šablon."
    ],
    "category_note": "Uživatel potřebuje pomoc s nákupem, účtem nebo reklamací.",
    "effort": "S"
  },
  {
    "id": "22.6",
    "title": "SLA a eskalace ticketů",
    "category": "Zákaznická podpora",
    "description": "Systém hlídá dobu odpovědi a předává kritické případy vyšší úrovni.",
    "without": "Bez toho mohou citlivé případy zůstat dlouho bez reakce.",
    "example": "Když na dotaz nikdo neodpoví do 24 hodin, přesune se automaticky vedoucímu podpory.",
    "build": [
      "Lhůty podle priority.",
      "Upozornění při překročení.",
      "Předání vedoucímu."
    ],
    "category_note": "Uživatel potřebuje pomoc s nákupem, účtem nebo reklamací.",
    "effort": "S"
  },
  {
    "id": "23.1",
    "title": "Admin dashboard",
    "category": "Administrace",
    "description": "Interní přehled uživatelů, objednávek, sporů, peněz a stavu systému.",
    "without": "Bez něj se systém nedá efektivně provozovat ve větším měřítku.",
    "example": "Majitelka ráno otevře přehled: 120 nových objednávek, 3 spory, 2 nahlášené inzeráty.",
    "build": [
      "Hlavní přehled s čísly za den.",
      "Rozcestník do všech částí administrace.",
      "Přístup jen pro zaměstnance."
    ],
    "category_note": "Pracovník BOBINA spravuje provoz přes oddělenou administraci.",
    "effort": "M"
  },
  {
    "id": "23.2",
    "title": "Správa uživatelů",
    "category": "Administrace",
    "description": "Admin vyhledá účet, zkontroluje historii, ověření, blokace a poznámky.",
    "without": "Bez toho je řešení konkrétního uživatele velmi pomalé.",
    "example": "Podpora najde uživatele podle e-mailu a vidí jeho objednávky, hodnocení a blokace.",
    "build": [
      "Hledání a detail uživatele.",
      "Blokace, poznámky, historie.",
      "Záznam všech zásahů."
    ],
    "category_note": "Pracovník BOBINA spravuje provoz přes oddělenou administraci.",
    "effort": "M"
  },
  {
    "id": "23.3",
    "title": "Správa nabídek",
    "category": "Administrace",
    "description": "Admin může nabídku skrýt, smazat nebo upravit její stav.",
    "without": "Bez toho není možné rychle odstranit závadný obsah.",
    "example": "Moderátor skryje inzerát s nevhodnou fotkou.",
    "build": [
      "Hledání a detail inzerátu.",
      "Skrytí, smazání, změna stavu.",
      "Odůvodnění zásahu uživateli."
    ],
    "category_note": "Pracovník BOBINA spravuje provoz přes oddělenou administraci.",
    "effort": "S"
  },
  {
    "id": "23.4",
    "title": "Správa objednávek",
    "category": "Administrace",
    "description": "Admin vidí časovou osu transakce a může provést povolené servisní zásahy.",
    "without": "Bez toho support nedokáže transakci efektivně opravit.",
    "example": "Administrátor otevře konkrétní problematickou objednávku a vidí její události.",
    "build": [
      "Detail objednávky s časovou osou.",
      "Povolené zásahy (storno, prodloužení).",
      "Záznam zásahů."
    ],
    "category_note": "Pracovník BOBINA spravuje provoz přes oddělenou administraci.",
    "effort": "M"
  },
  {
    "id": "23.5",
    "title": "Správa sporů",
    "category": "Administrace",
    "description": "Interní fronta sporů s důkazy, rozhodnutím a historií.",
    "without": "Bez toho se spory řeší v e-mailu nebo tabulkách.",
    "example": "Moderátor otevře spor, prohlédne fotky od kupujícího a rozhodne o vrácení peněz.",
    "build": [
      "Fronta sporů s prioritou.",
      "Důkazy a komunikace na jednom místě.",
      "Rozhodnutí a jeho provedení."
    ],
    "category_note": "Pracovník BOBINA spravuje provoz přes oddělenou administraci.",
    "effort": "M"
  },
  {
    "id": "23.6",
    "title": "Správa refundací",
    "category": "Administrace",
    "description": "Oprávněný pracovník může spustit nebo schválit refundaci.",
    "without": "Bez toho musí každou výjimku řešit vývojář nebo platební provider.",
    "example": "Pracovník financí schválí vrácení 420 Kč kupujícímu.",
    "build": [
      "Seznam žádostí o vrácení.",
      "Schválení podle oprávnění.",
      "Napojení na platební bránu."
    ],
    "category_note": "Pracovník BOBINA spravuje provoz přes oddělenou administraci.",
    "effort": "S"
  },
  {
    "id": "23.7",
    "title": "Správa kategorií, značek a atributů",
    "category": "Administrace",
    "description": "Obsahový tým mění katalog bez nasazení nové verze aplikace.",
    "without": "Bez toho každá změna vyžaduje programátora.",
    "example": "Majitelka přidá novou značku nebo kategorii „Svatební šaty“ sama v administraci, bez programátora.",
    "build": [
      "Úpravy kategorií, značek a atributů.",
      "Okamžité promítnutí do aplikace.",
      "Kontrola dopadu na existující inzeráty."
    ],
    "category_note": "Pracovník BOBINA spravuje provoz přes oddělenou administraci.",
    "effort": "M"
  },
  {
    "id": "23.8",
    "title": "Správa bannerů a obsahu",
    "category": "Administrace",
    "description": "Marketing mění bannery, promo sekce a texty.",
    "without": "Bez toho je i jednoduchá změna marketingu technický úkol.",
    "example": "Majitelka změní úvodní banner na „Podzimní kolekce“ sama v administraci.",
    "build": [
      "Nahrání banneru a plánování zobrazení.",
      "Promo sekce na úvodní stránce.",
      "Náhled před zveřejněním."
    ],
    "category_note": "Pracovník BOBINA spravuje provoz přes oddělenou administraci.",
    "effort": "S"
  },
  {
    "id": "23.9",
    "title": "Správa poplatků a limitů",
    "category": "Administrace",
    "description": "Admin konfiguruje sazby, minimum, maximum a vybraná obchodní pravidla.",
    "without": "Bez toho je změna obchodního modelu závislá na vývoji.",
    "example": "Majitelka změní poplatek pro kupující z 5 % na 4 % sama v administraci.",
    "build": [
      "Formulář sazeb a limitů.",
      "Platnost od data.",
      "Historie změn."
    ],
    "category_note": "Pracovník BOBINA spravuje provoz přes oddělenou administraci.",
    "effort": "S"
  },
  {
    "id": "23.10",
    "title": "Role a oprávnění zaměstnanců",
    "category": "Administrace",
    "description": "Odděluje přístup supportu, moderátorů, financí a superadmina.",
    "without": "Bez toho má příliš mnoho lidí zbytečně vysoká oprávnění.",
    "example": "Pracovník podpory vidí objednávky, ale nemůže vracet peníze; to smí jen účetní.",
    "build": [
      "Role (podpora, moderátor, finance, admin).",
      "Omezení přístupu podle role.",
      "Správa zaměstnanců."
    ],
    "category_note": "Pracovník BOBINA spravuje provoz přes oddělenou administraci.",
    "effort": "M"
  },
  {
    "id": "24.1",
    "title": "Funnel nákupu",
    "category": "Statistiky a reporting",
    "description": "Sleduje detail → checkout → platba → dokončená objednávka.",
    "without": "Bez něj není jasné, proč je nízká konverze.",
    "example": "Přehled ukáže, že 1 000 lidí otevřelo inzerát, 200 kliklo na „Koupit“ a 150 zaplatilo.",
    "build": [
      "Měření kroků od detailu k zaplacení.",
      "Graf, kde lidé odpadají.",
      "Srovnání v čase."
    ],
    "category_note": "Vedení platformy sleduje čísla a rozhoduje podle reálného provozu.",
    "effort": "M"
  },
  {
    "id": "24.2",
    "title": "Funnel prodeje",
    "category": "Statistiky a reporting",
    "description": "Sleduje registraci prodejce → vystavení → zobrazení → prodej.",
    "without": "Bez něj se těžko pozná, proč na marketplace chybí nabídka.",
    "example": "Přehled ukáže, kolik nových prodávajících vystavilo první věc a kolik z nich opravdu prodalo.",
    "build": [
      "Měření kroků od registrace k prodeji.",
      "Graf, kde prodejci odpadají.",
      "Srovnání v čase."
    ],
    "category_note": "Vedení platformy sleduje čísla a rozhoduje podle reálného provozu.",
    "effort": "M"
  },
  {
    "id": "24.3",
    "title": "GMV a tržby platformy",
    "category": "Statistiky a reporting",
    "description": "Měří celkovou hodnotu obchodů a skutečný příjem platformy.",
    "without": "Bez toho nelze přesně řídit ekonomiku produktu.",
    "example": "Vedení sleduje hodnotu obchodů a skutečné příjmy z provizí zvlášť.",
    "build": [
      "Výpočet obratu a příjmů platformy.",
      "Přehled po dnech a měsících.",
      "Napojení na účetnictví."
    ],
    "category_note": "Vedení platformy sleduje čísla a rozhoduje podle reálného provozu.",
    "effort": "M"
  },
  {
    "id": "24.4",
    "title": "Fraud a moderation reporting",
    "category": "Statistiky a reporting",
    "description": "Měří podvody, blokace, padělky, storna a reklamace.",
    "without": "Bez toho nelze poznat, zda riziko roste.",
    "example": "Přehled ukáže 12 zablokovaných podvodníků a 3 padělky tento měsíc.",
    "build": [
      "Počty podvodů, blokací a reklamací.",
      "Trendy v čase.",
      "Podklady pro zprávu podle DSA."
    ],
    "category_note": "Vedení platformy sleduje čísla a rozhoduje podle reálného provozu.",
    "effort": "M"
  },
  {
    "id": "24.5",
    "title": "Export reportů",
    "category": "Statistiky a reporting",
    "description": "Vybraná data lze exportovat do CSV/XLSX nebo účetních nástrojů.",
    "without": "Bez exportu jsou týmy odkázány jen na interní dashboard.",
    "example": "Účetní si stáhne přehled poplatků za měsíc do Excelu.",
    "build": [
      "Export do CSV / Excelu.",
      "Výběr období a údajů.",
      "Pravidelné automatické zasílání."
    ],
    "category_note": "Vedení platformy sleduje čísla a rozhoduje podle reálného provozu.",
    "effort": "S"
  },
  {
    "id": "25.1",
    "title": "Obchodní podmínky",
    "category": "Právo a soukromí",
    "description": "Definují vztah mezi platformou a uživateli.",
    "without": "Bez nich je provoz právně zásadně rizikový.",
    "example": "Při registraci uživatelka odsouhlasí obchodní podmínky Bobiny.",
    "build": [
      "Sepsání podmínek s právníkem.",
      "Stránka v aplikaci a na webu.",
      "Odsouhlasení při registraci a po změně."
    ],
    "category_note": "Platforma musí dodržovat závazná pravidla a informovat uživatele.",
    "effort": "M"
  },
  {
    "id": "25.2",
    "title": "Zásady ochrany osobních údajů",
    "category": "Právo a soukromí",
    "description": "Informují, jaká data se zpracovávají a proč.",
    "without": "Bez nich hrozí právní a reputační problém.",
    "example": "V aplikaci je stránka, která vysvětluje, jaké údaje Bobina o uživatelce ukládá a proč.",
    "build": [
      "Sepsání zásad s právníkem (GDPR).",
      "Stránka v aplikaci a na webu.",
      "Kontakt pro dotazy k osobním údajům."
    ],
    "category_note": "Platforma musí dodržovat závazná pravidla a informovat uživatele.",
    "effort": "M"
  },
  {
    "id": "25.3",
    "title": "Cookie consent na webu",
    "category": "Právo a soukromí",
    "description": "Uživatel nastaví analytické a marketingové cookies.",
    "without": "Bez něj mohou být analytické/marketingové cookies používány nesprávně.",
    "example": "Při první návštěvě webu si návštěvník zvolí analytické a marketingové cookies.",
    "build": [
      "Lišta se souhlasem a nastavením.",
      "Spouštění měřicích nástrojů až po souhlasu.",
      "Uložení volby."
    ],
    "category_note": "Platforma musí dodržovat závazná pravidla a informovat uživatele.",
    "effort": "S"
  },
  {
    "id": "25.4",
    "title": "Export osobních údajů",
    "category": "Právo a soukromí",
    "description": "Uživatel může získat kopii svých dat.",
    "without": "Bez něj se žádosti musí zpracovávat ručně.",
    "example": "Uživatelka si v nastavení stáhne všechna svá data v jednom souboru.",
    "build": [
      "Sestavení všech dat uživatele do souboru.",
      "Bezpečné stažení.",
      "Lhůta pro vyřízení podle GDPR."
    ],
    "category_note": "Platforma musí dodržovat závazná pravidla a informovat uživatele.",
    "effort": "M"
  },
  {
    "id": "25.5",
    "title": "Žádost o výmaz osobních údajů",
    "category": "Právo a soukromí",
    "description": "Řídí mazání nebo anonymizaci dat při zachování zákonných povinností.",
    "without": "Bez procesu vzniká chaos mezi GDPR a účetními povinnostmi.",
    "example": "Uživatelka požádá o smazání svých údajů a Bobina je smaže, kromě toho, co musí ze zákona uchovat.",
    "build": [
      "Žádost v nastavení.",
      "Smazání nebo anonymizace ve všech systémech.",
      "Výjimky podle zákona."
    ],
    "category_note": "Platforma musí dodržovat závazná pravidla a informovat uživatele.",
    "effort": "M"
  },
  {
    "id": "25.6",
    "title": "Věkové omezení a souhlas zákonného zástupce",
    "category": "Právo a soukromí",
    "description": "Nastaví minimální věk nebo zvláštní režim pro nezletilé.",
    "without": "Bez toho může platforma přijímat uživatele, pro které není právně připravena.",
    "example": "Při registraci aplikace pustí jen lidi od 18 let, nebo mladší se souhlasem rodiče.",
    "build": [
      "Kontrola věku při registraci.",
      "Pravidla pro nezletilé.",
      "Zablokování podezřelých účtů."
    ],
    "category_note": "Platforma musí dodržovat závazná pravidla a informovat uživatele.",
    "effort": "S"
  },
  {
    "id": "25.7",
    "title": "Daňové / regulatorní reporty pro prodejce",
    "category": "Právo a soukromí",
    "description": "Systém eviduje relevantní prodejní údaje a limity pro zákonné reportování.",
    "without": "Bez toho bude compliance založená na ručním dohledávání dat.",
    "example": "Prodávající, který prodá víc než 30 věcí za rok, se musí podle zákona nahlásit finančnímu úřadu; aplikace to hlídá.",
    "build": [
      "Sledování počtu a obratu prodejů každého uživatele (DAC7).",
      "Sběr údajů od prodejců nad limitem.",
      "Roční hlášení finanční správě."
    ],
    "category_note": "Platforma musí dodržovat závazná pravidla a informovat uživatele.",
    "effort": "L"
  },
  {
    "id": "25.8",
    "title": "Práva spotřebitele u PRO prodejců (14 dní na vrácení)",
    "category": "Právo a soukromí",
    "description": "U nákupu od firemního prodejce má kupující zákonná práva spotřebitele, např. vrátit zboží do 14 dnů bez udání důvodu.",
    "example": "Kupující koupí šaty od second handu s PRO účtem a do 14 dnů je může vrátit, i když jsou v pořádku.",
    "without": "Bez toho by firemní prodej v aplikaci nesplňoval pravidla ochrany spotřebitele.",
    "build": [
      "Odlišení nákupu od soukromé osoby a od firmy.",
      "Proces odstoupení do 14 dnů.",
      "Informace kupujícímu před nákupem."
    ],
    "category_note": "Platforma musí dodržovat závazná pravidla a informovat uživatele.",
    "effort": "M"
  },
  {
    "id": "25.9",
    "title": "Faktury od PRO prodejců",
    "category": "Právo a soukromí",
    "description": "Firemní prodejce vystaví kupujícímu doklad o koupi a platforma vystavuje doklady za své poplatky.",
    "example": "Kupující dostane k šatům od firemního prodejce fakturu v PDF a uživatelka dostane doklad za zaplacené topování.",
    "without": "Bez dokladů nemůže firma v aplikaci legálně prodávat a uživatelé nemají potvrzení plateb.",
    "build": [
      "Generování dokladů v PDF.",
      "Doklady za poplatky platformy.",
      "Archiv ke stažení."
    ],
    "category_note": "Platforma musí dodržovat závazná pravidla a informovat uživatele.",
    "effort": "M"
  },
  {
    "id": "25.10",
    "title": "Ověření firemních prodejců",
    "category": "Právo a soukromí",
    "description": "Než firma začne prodávat, doloží své údaje (IČO, sídlo, kontakt) a platforma je ověří.",
    "example": "Second hand „Retro Brno“ zadá IČO, aplikace ho ověří v rejstříku a teprve pak může prodávat jako PRO.",
    "without": "Bez toho by mohl kdokoli vystupovat jako firma bez dohledatelných údajů.",
    "build": [
      "Formulář firemních údajů.",
      "Ověření v obchodním rejstříku.",
      "Zobrazení údajů firmy kupujícím."
    ],
    "category_note": "Platforma musí dodržovat závazná pravidla a informovat uživatele.",
    "effort": "M"
  },
  {
    "id": "25.11",
    "title": "Povinnosti platformy podle DSA",
    "category": "Právo a soukromí",
    "description": "Evropské nařízení o digitálních službách: oznámení nezákonného obsahu, vysvětlení každého zásahu moderace a pravidelná zpráva o moderaci.",
    "example": "Bobina smaže inzerát a uživatelka dostane vysvětlení „proč a podle jakého pravidla“ s možností odvolání.",
    "without": "Bez toho platforma nesplní povinnosti, které pro online tržiště v EU platí.",
    "build": [
      "Formulář pro oznámení nezákonného obsahu.",
      "Odůvodnění každého zásahu a odvolání.",
      "Podklady pro zprávu o transparentnosti."
    ],
    "category_note": "Platforma musí dodržovat závazná pravidla a informovat uživatele.",
    "effort": "M"
  },
  {
    "id": "26.1",
    "title": "Vícejazyčnost",
    "category": "Mezinárodní provoz",
    "description": "Aplikace zobrazuje rozhraní podle jazyka uživatele.",
    "without": "Bez toho je produkt prakticky omezen na jeden jazykový trh.",
    "example": "Slovenská uživatelka vidí aplikaci ve slovenštině, česká v češtině.",
    "build": [
      "Všechny texty aplikace v souborech pro překlad.",
      "Překlad do každého jazyka.",
      "Volba jazyka a formáty dat a cen."
    ],
    "category_note": "Uživatel nakupuje v jiném jazyce, zemi nebo měně.",
    "effort": "M"
  },
  {
    "id": "26.2",
    "title": "Automatický překlad chatu",
    "category": "Mezinárodní provoz",
    "description": "Zprávy lze automaticky přeložit mezi jazyky.",
    "without": "Bez toho bude mezinárodní komunikace horší.",
    "example": "Česká kupující píše slovenské prodejkyni a obě vidí zprávy přeložené do svého jazyka.",
    "build": [
      "Napojení překladové služby (placená podle objemu).",
      "Tlačítko Přeložit u zprávy.",
      "Ukládání překladů kvůli nákladům."
    ],
    "category_note": "Uživatel nakupuje v jiném jazyce, zemi nebo měně.",
    "effort": "M"
  },
  {
    "id": "26.3",
    "title": "Automatický překlad popisu nabídky",
    "category": "Mezinárodní provoz",
    "description": "Zobrazí strojový překlad inzerátu.",
    "without": "Bez toho zahraniční produkty zůstanou pro část uživatelů nesrozumitelné.",
    "example": "Německý kupující si nechá zobrazit český popis inzerátu přeložený do němčiny.",
    "build": [
      "Napojení překladové služby.",
      "Překlad na detailu inzerátu.",
      "Ukládání překladů."
    ],
    "category_note": "Uživatel nakupuje v jiném jazyce, zemi nebo měně.",
    "effort": "M"
  },
  {
    "id": "26.4",
    "title": "Více měn",
    "category": "Mezinárodní provoz",
    "description": "Zobrazuje a zpracovává ceny v podporovaných měnách.",
    "without": "Bez toho musí být všechny země v jedné měně nebo oddělené.",
    "example": "Na Slovensku se ceny ukazují v eurech, v Česku v korunách.",
    "build": [
      "Kurzy a přepočty měn.",
      "Platby v různých měnách přes bránu.",
      "Zaokrouhlení a zobrazení."
    ],
    "category_note": "Uživatel nakupuje v jiném jazyce, zemi nebo měně.",
    "effort": "M"
  },
  {
    "id": "26.5",
    "title": "Přeshraniční doprava",
    "category": "Mezinárodní provoz",
    "description": "Definuje, mezi kterými zeměmi lze vytvořit zásilku.",
    "without": "Bez ní zůstávají země oddělené marketplace.",
    "example": "Kupující z Prahy si objedná bundu od prodejkyně z Bratislavy a doprava se vyřeší v aplikaci.",
    "build": [
      "Dopravci mezi zeměmi a jejich ceny.",
      "Pravidla pro clo a zakázané zboží.",
      "Sledování mezinárodních zásilek."
    ],
    "category_note": "Uživatel nakupuje v jiném jazyce, zemi nebo měně.",
    "effort": "L"
  },
  {
    "id": "26.6",
    "title": "Pravidla dostupnosti podle země",
    "category": "Mezinárodní provoz",
    "description": "Funkce, kategorie a dopravci se mohou lišit podle trhu.",
    "without": "Bez toho musí všechny země podporovat přesně stejné funkce.",
    "example": "Na Slovensku je k dispozici jiný dopravce než v Česku a aplikace to sama hlídá.",
    "build": [
      "Nastavení funkcí podle země.",
      "Dopravci a platby podle země.",
      "Správa v administraci."
    ],
    "category_note": "Uživatel nakupuje v jiném jazyce, zemi nebo měně.",
    "effort": "M"
  },
  {
    "id": "27.1",
    "title": "iOS aplikace",
    "category": "Mobilní aplikace a přístupnost",
    "description": "Nativní nebo cross-platform aplikace pro iPhone.",
    "without": "Bez iOS přijde platforma o velkou část trhu.",
    "example": "Uživatelka si stáhne Bobinu z App Store na iPhone.",
    "build": [
      "Vývoj aplikace pro iPhone (všechny obrazovky).",
      "Vývojářský účet Apple a schválení v App Store.",
      "Aktualizace a podpora nových verzí iOS."
    ],
    "category_note": "Kupující používá BOBINA na telefonu nebo na počítači.",
    "effort": "L"
  },
  {
    "id": "27.2",
    "title": "Android aplikace",
    "category": "Mobilní aplikace a přístupnost",
    "description": "Aplikace pro telefony s Androidem.",
    "without": "Bez Androidu je zásah výrazně omezený.",
    "example": "Uživatelka si stáhne Bobinu z Google Play na telefon s Androidem.",
    "build": [
      "Vývoj aplikace pro Android (všechny obrazovky).",
      "Účet Google Play a schválení.",
      "Testování na různých telefonech."
    ],
    "category_note": "Kupující používá BOBINA na telefonu nebo na počítači.",
    "effort": "L"
  },
  {
    "id": "27.3",
    "title": "Webová verze",
    "category": "Mobilní aplikace a přístupnost",
    "description": "Marketplace funguje také v prohlížeči.",
    "without": "Bez webu je celý produkt závislý na instalaci aplikace.",
    "example": "Bobina jde otevřít i na počítači v prohlížeči, bez stahování.",
    "build": [
      "Web se všemi funkcemi aplikace.",
      "Funguje na počítači i mobilu.",
      "Vyhledávače (SEO) – inzeráty dohledatelné na Googlu."
    ],
    "category_note": "Kupující používá BOBINA na telefonu nebo na počítači.",
    "effort": "L"
  },
  {
    "id": "27.4",
    "title": "Biometrické odemknutí citlivých funkcí",
    "category": "Mobilní aplikace a přístupnost",
    "description": "Face ID / Touch ID může chránit peněženku nebo změnu údajů.",
    "without": "Bez toho se citlivé akce chrání pouze heslem / relací.",
    "example": "Před výběrem peněz z peněženky aplikace chce Face ID nebo otisk prstu.",
    "build": [
      "Face ID / otisk prstu v aplikaci.",
      "Vyžadování u citlivých akcí.",
      "Záložní ověření heslem."
    ],
    "category_note": "Kupující používá BOBINA na telefonu nebo na počítači.",
    "effort": "S"
  },
  {
    "id": "27.5",
    "title": "Dark mode",
    "category": "Mobilní aplikace a přístupnost",
    "description": "Rozhraní podporuje světlé a tmavé téma.",
    "without": "Bez něj aplikace funguje normálně, jen s menší mírou personalizace.",
    "example": "Večer se aplikace přepne do tmavých barev, aby neoslňovala.",
    "build": [
      "Druhá barevná sada.",
      "Přepnutí podle telefonu nebo ručně.",
      "Kontrola všech obrazovek."
    ],
    "category_note": "Kupující používá BOBINA na telefonu nebo na počítači.",
    "effort": "S"
  },
  {
    "id": "27.6",
    "title": "Přístupnost",
    "category": "Mobilní aplikace a přístupnost",
    "description": "Podpora čteček obrazovky, kontrastu, velikosti textu a ovládání.",
    "without": "Bez ní část uživatelů aplikaci nebude schopna pohodlně používat.",
    "example": "Nevidomý uživatel si nechá aplikaci předčítat a zvětší si písmo.",
    "build": [
      "Popisky pro čtečky obrazovky.",
      "Kontrast a zvětšení písma.",
      "Ovládání bez myši a test s nástroji."
    ],
    "category_note": "Kupující používá BOBINA na telefonu nebo na počítači.",
    "effort": "M"
  },
  {
    "id": "28.1",
    "title": "AI odstranění pozadí fotografie",
    "category": "AI funkce",
    "description": "Automaticky vyčistí pozadí produktové fotky.",
    "without": "Bez toho uživatel nahrává běžné fotografie.",
    "example": "Prodávající vyfotí svetr na posteli a AI pozadí vymaže na čistě bílé.",
    "build": [
      "Napojení AI služby na odstranění pozadí (placená za fotku).",
      "Tlačítko v editoru fotek.",
      "Uložení původní i upravené verze."
    ],
    "category_note": "Uživatel získá automatickou pomoc při prodeji nebo výběru zboží.",
    "effort": "M"
  },
  {
    "id": "28.2",
    "title": "AI automatické rozpoznání kategorie",
    "category": "AI funkce",
    "description": "Z fotografie nebo názvu navrhne kategorii produktu.",
    "without": "Bez toho vše vybírá prodávající ručně.",
    "example": "Prodávající nahraje fotku tenisek a aplikace sama navrhne kategorii „Ženy › Boty › Tenisky“.",
    "build": [
      "Napojení AI na rozpoznání z fotky / názvu.",
      "Návrh kategorie při vystavení.",
      "Měření přesnosti a opravy."
    ],
    "category_note": "Uživatel získá automatickou pomoc při prodeji nebo výběru zboží.",
    "effort": "M"
  },
  {
    "id": "28.3",
    "title": "AI návrh názvu a popisu",
    "category": "AI funkce",
    "description": "Z fotek a parametrů vytvoří návrh textu inzerátu.",
    "without": "Bez toho uživatel vše píše ručně.",
    "example": "Prodejce nahraje fotografii bot a AI navrhne název i popis, které před publikací opraví.",
    "build": [
      "Napojení jazykového modelu (placený za použití).",
      "Návrh textu z fotek a parametrů.",
      "Úprava návrhu uživatelem."
    ],
    "category_note": "Uživatel získá automatickou pomoc při prodeji nebo výběru zboží.",
    "effort": "M"
  },
  {
    "id": "28.4",
    "title": "AI odhad ceny",
    "category": "AI funkce",
    "description": "Navrhne cenu podle podobných prodaných a aktivních nabídek.",
    "without": "Bez toho cenu určuje uživatel bez datové podpory.",
    "example": "AI navrhne cenu 380 Kč podle toho, za kolik se podobné svetry skutečně prodaly.",
    "build": [
      "Model z dat o prodejích.",
      "Návrh ceny při vystavení.",
      "Průběžné učení na nových prodejích."
    ],
    "category_note": "Uživatel získá automatickou pomoc při prodeji nebo výběru zboží.",
    "effort": "M"
  },
  {
    "id": "28.5",
    "title": "AI detekce nekvalitní / duplicitní fotografie",
    "category": "AI funkce",
    "description": "Před publikací upozorní na rozmazání, screenshot, duplicitu nebo problém.",
    "without": "Bez toho se nekvalitní obsah řeší až po publikaci.",
    "example": "Fotka je rozmazaná; aplikace upozorní „Fotka je neostrá, zkuste ji vyfotit znovu“.",
    "build": [
      "Rozpoznání rozmazaných a duplicitních fotek.",
      "Upozornění při nahrání.",
      "Pravidla pro screenshoty a stažené fotky."
    ],
    "category_note": "Uživatel získá automatickou pomoc při prodeji nebo výběru zboží.",
    "effort": "M"
  },
  {
    "id": "28.6",
    "title": "AI moderace textu a obrázků",
    "category": "AI funkce",
    "description": "Automaticky skóruje rizikový obsah a předává ho k ruční kontrole.",
    "without": "Bez toho výrazně roste potřeba manuální moderace.",
    "example": "AI pozná nevhodnou fotku nebo urážlivý text dřív, než ho uvidí ostatní.",
    "build": [
      "Napojení AI kontroly textu a obrázků.",
      "Skóre rizika a fronta pro moderátora.",
      "Měření chyb a ladění."
    ],
    "category_note": "Uživatel získá automatickou pomoc při prodeji nebo výběru zboží.",
    "effort": "M"
  },
  {
    "id": "28.7",
    "title": "AI detekce podvodných transakcí",
    "category": "AI funkce",
    "description": "Vyhodnocuje kombinaci signálů účtu, chatu, plateb a objednávek.",
    "without": "Bez něj je nutné spoléhat na pravidla a ruční kontrolu.",
    "example": "AI si všimne, že nový účet kupuje drahé věci a hned mění adresu, a zastaví objednávku ke kontrole.",
    "build": [
      "Sběr signálů z účtů, chatu a plateb.",
      "Model rizika a pravidla.",
      "Zastavení podezřelých objednávek ke kontrole."
    ],
    "category_note": "Uživatel získá automatickou pomoc při prodeji nebo výběru zboží.",
    "effort": "L"
  },
  {
    "id": "29.1",
    "title": "Rezervace předmětu",
    "category": "Nadstandardní volitelné funkce",
    "description": "Prodávající dočasně označí nabídku pro konkrétního kupujícího.",
    "without": "Bez toho může předmět mezitím koupit někdo jiný.",
    "example": "Prodávající podrží svetr pro kupující, která zaplatí zítra, aby ho mezitím nekoupil nikdo jiný.",
    "build": [
      "Rezervace pro vybraného kupujícího na dobu.",
      "Skrytí tlačítka Koupit ostatním.",
      "Automatické zrušení po vypršení."
    ],
    "category_note": "Platforma rozšíří standardní způsob nákupu o speciální obchodní možnost.",
    "effort": "S"
  },
  {
    "id": "29.2",
    "title": "Cenové nabídky více zájemců",
    "category": "Nadstandardní volitelné funkce",
    "description": "Prodávající spravuje více nabídek ceny na jednom místě.",
    "without": "Bez toho řeší nabídky jednotlivě v chatech.",
    "example": "Na kabelku přišly 3 nabídky ceny a prodávající je vidí vedle sebe a vybere nejlepší.",
    "build": [
      "Přehled všech nabídek ceny k inzerátu.",
      "Přijetí jedné a odmítnutí ostatních.",
      "Upozornění zájemcům."
    ],
    "category_note": "Platforma rozšíří standardní způsob nákupu o speciální obchodní možnost.",
    "effort": "M"
  },
  {
    "id": "29.3",
    "title": "Aukční režim",
    "category": "Nadstandardní volitelné funkce",
    "description": "Cena se určí příhozy do určitého času.",
    "without": "Bez toho zůstane pouze pevná cena a vyjednávání.",
    "example": "Uživatel přihazuje cenu v aukci a před ukončením vidí aktuální nejvyšší nabídku.",
    "build": [
      "Příhozy, minimální krok a konec aukce.",
      "Ochrana proti robotům a posledním vteřinám.",
      "Povinnost vítěze zaplatit."
    ],
    "category_note": "Platforma rozšíří standardní způsob nákupu o speciální obchodní možnost.",
    "effort": "L"
  },
  {
    "id": "29.4",
    "title": "Věrnostní program",
    "category": "Nadstandardní volitelné funkce",
    "description": "Odměňuje aktivitu body, kredity nebo výhodami.",
    "without": "Bez něj zůstává retence založená na nabídce a notifikacích.",
    "example": "Za každý nákup dostane uživatelka body a za 500 bodů slevu 50 Kč.",
    "build": [
      "Body za nákupy a aktivitu.",
      "Výměna bodů za slevy.",
      "Pravidla a ochrana proti zneužití."
    ],
    "category_note": "Platforma rozšíří standardní způsob nákupu o speciální obchodní možnost.",
    "effort": "M"
  },
  {
    "id": "29.5",
    "title": "Referral program",
    "category": "Nadstandardní volitelné funkce",
    "description": "Uživatel získá odměnu za přivedení nového uživatele.",
    "without": "Bez něj platforma nemá vestavěnou referral smyčku.",
    "example": "Klára pozve kamarádku; když kamarádka poprvé nakoupí, obě dostanou 100 Kč.",
    "build": [
      "Osobní pozvánkový odkaz.",
      "Odměna po prvním nákupu pozvaného.",
      "Ochrana proti falešným účtům."
    ],
    "category_note": "Platforma rozšíří standardní způsob nákupu o speciální obchodní možnost.",
    "effort": "M"
  },
  {
    "id": "29.6",
    "title": "Firemní API",
    "category": "Nadstandardní volitelné funkce",
    "description": "Externí prodejce nebo partner může napojit sklad či nabídky.",
    "without": "Bez něj je správa pouze ručně přes aplikaci nebo web.",
    "example": "Schválený obchodník přes zabezpečené API automaticky aktualizuje nabídky a jejich dostupnost.",
    "build": [
      "Rozhraní pro hromadné nahrávání a správu inzerátů.",
      "Klíče a oprávnění pro firmy.",
      "Dokumentace a limity."
    ],
    "category_note": "Platforma rozšíří standardní způsob nákupu o speciální obchodní možnost.",
    "effort": "L"
  },
  {
    "id": "29.7",
    "title": "Partnerský / affiliate program",
    "category": "Nadstandardní volitelné funkce",
    "description": "Externí weby a tvůrci mohou přivádět objednávky za odměnu.",
    "without": "Bez něj se růst opírá o jiné marketingové kanály.",
    "example": "Módní blogerka dá na svůj web odkaz na Bobinu a za každý nákup přes něj dostane odměnu.",
    "build": [
      "Partnerské odkazy a sledování nákupů.",
      "Výpočet a výplata odměn.",
      "Přehled pro partnery."
    ],
    "category_note": "Platforma rozšíří standardní způsob nákupu o speciální obchodní možnost.",
    "effort": "M"
  },
  {
    "id": "29.8",
    "title": "Výměna předmětů",
    "category": "Nadstandardní volitelné funkce",
    "description": "Dva uživatelé si místo prodeje vymění věc za věc.",
    "example": "Petra nabídne své šaty za Janinu kabelku, obě souhlasí a pošlou si je navzájem.",
    "without": "Bez toho jde věc jen prodat nebo koupit, ne vyměnit.",
    "build": [
      "Návrh výměny s výběrem vlastního předmětu.",
      "Doprava oběma směry.",
      "Řešení sporů, když jedna strana nepošle."
    ],
    "category_note": "Platforma rozšíří standardní způsob nákupu o speciální obchodní možnost.",
    "effort": "L"
  },
  {
    "id": "30.1",
    "type": "info",
    "title": "Ve kterých zemích má BOBINA začít?",
    "category": "Upřesnění: vaše představa",
    "description": "Kde se bude prodávat při spuštění a kam se případně rozšíří později.",
    "example": "Příklad odpovědi: Na začátku jen Česko, do roka Slovensko.",
    "options": [
      "Jen Česko",
      "Česko a Slovensko",
      "Později další země EU"
    ],
    "without": "",
    "build": [],
    "category_note": "Otevřené otázky. Odpovězte vlastními slovy nebo klepněte na nabídnuté možnosti. Podle těchto odpovědí se nastaví čísla, dopravci, platby a rozsah prvního spuštění."
  },
  {
    "id": "30.2",
    "type": "info",
    "title": "Jazyky a měny",
    "category": "Upřesnění: vaše představa",
    "description": "V jakém jazyce a v jaké měně bude aplikace na začátku.",
    "example": "Příklad odpovědi: Čeština, ceny v Kč.",
    "options": [
      "Čeština",
      "Slovenština",
      "Angličtina",
      "Koruny (Kč)",
      "Eura (€)"
    ],
    "without": "",
    "build": [],
    "category_note": "Otevřené otázky. Odpovězte vlastními slovy nebo klepněte na nabídnuté možnosti. Podle těchto odpovědí se nastaví čísla, dopravci, platby a rozsah prvního spuštění."
  },
  {
    "id": "30.3",
    "type": "info",
    "title": "Co se bude prodávat?",
    "category": "Upřesnění: vaše představa",
    "description": "Které druhy zboží mají být v nabídce od začátku a které ne.",
    "example": "Příklad odpovědi: Hlavně dámské a dětské oblečení, boty a doplňky. Elektroniku zatím ne.",
    "options": [
      "Dámské oblečení",
      "Pánské oblečení",
      "Dětské oblečení",
      "Boty a doplňky",
      "Bydlení",
      "Elektronika",
      "Knihy a hry",
      "Kosmetika"
    ],
    "without": "",
    "build": [],
    "category_note": "Otevřené otázky. Odpovězte vlastními slovy nebo klepněte na nabídnuté možnosti. Podle těchto odpovědí se nastaví čísla, dopravci, platby a rozsah prvního spuštění."
  },
  {
    "id": "30.4",
    "type": "info",
    "title": "Kteří dopravci?",
    "category": "Upřesnění: vaše představa",
    "description": "S jakými přepravními službami má aplikace umět posílat zásilky.",
    "example": "Příklad odpovědi: Zásilkovna a Balíkovna, později PPL.",
    "options": [
      "Zásilkovna",
      "Balíkovna / Česká pošta",
      "PPL",
      "DPD",
      "GLS",
      "Osobní předání"
    ],
    "without": "",
    "build": [],
    "category_note": "Otevřené otázky. Odpovězte vlastními slovy nebo klepněte na nabídnuté možnosti. Podle těchto odpovědí se nastaví čísla, dopravci, platby a rozsah prvního spuštění."
  },
  {
    "id": "30.5",
    "type": "info",
    "title": "Jak se bude platit?",
    "category": "Upřesnění: vaše představa",
    "description": "Které způsoby platby mají kupující mít.",
    "example": "Příklad odpovědi: Karta a Apple Pay / Google Pay.",
    "options": [
      "Platební karta",
      "Apple Pay",
      "Google Pay",
      "Bankovní převod",
      "Zůstatek v peněžence"
    ],
    "without": "",
    "build": [],
    "category_note": "Otevřené otázky. Odpovězte vlastními slovy nebo klepněte na nabídnuté možnosti. Podle těchto odpovědí se nastaví čísla, dopravci, platby a rozsah prvního spuštění."
  },
  {
    "id": "30.6",
    "type": "info",
    "title": "Poplatky: kdo platí a kolik?",
    "category": "Upřesnění: vaše představa",
    "description": "Z čeho bude BOBINA vydělávat – poplatek kupujícího, provize prodávajícího, placené topování… a přibližně kolik.",
    "example": "Příklad odpovědi: Jako Vinted: kupující platí 5 % + 15 Kč za ochranu, prodávající nic.",
    "options": [
      "Platí kupující",
      "Platí prodávající",
      "Platí oba",
      "Placené topování"
    ],
    "without": "",
    "build": [],
    "category_note": "Otevřené otázky. Odpovězte vlastními slovy nebo klepněte na nabídnuté možnosti. Podle těchto odpovědí se nastaví čísla, dopravci, platby a rozsah prvního spuštění."
  },
  {
    "id": "30.7",
    "type": "info",
    "title": "Nejnižší a nejvyšší cena předmětu",
    "category": "Upřesnění: vaše představa",
    "description": "Pokud chcete omezit ceny, napište nejnižší a nejvyšší povolenou cenu.",
    "example": "Příklad odpovědi: Minimum 20 Kč, maximum 30 000 Kč.",
    "options": [
      "Bez omezení",
      "Minimum 20 Kč",
      "Maximum 50 000 Kč"
    ],
    "without": "",
    "build": [],
    "category_note": "Otevřené otázky. Odpovězte vlastními slovy nebo klepněte na nabídnuté možnosti. Podle těchto odpovědí se nastaví čísla, dopravci, platby a rozsah prvního spuštění."
  },
  {
    "id": "30.8",
    "type": "info",
    "title": "Jak velká má BOBINA být?",
    "category": "Upřesnění: vaše představa",
    "description": "Kolik uživatelů a inzerátů čekáte v prvním roce. Podle toho se navrhne technika i náklady na provoz.",
    "example": "Příklad odpovědi: V prvním roce asi 5 000 uživatelů a 20 000 inzerátů.",
    "options": [
      "Do 1 000 uživatelů",
      "Do 10 000 uživatelů",
      "Do 100 000 uživatelů",
      "Víc"
    ],
    "without": "",
    "build": [],
    "category_note": "Otevřené otázky. Odpovězte vlastními slovy nebo klepněte na nabídnuté možnosti. Podle těchto odpovědí se nastaví čísla, dopravci, platby a rozsah prvního spuštění."
  },
  {
    "id": "30.9",
    "type": "info",
    "title": "Kdy spustit a co musí být hotové jako první?",
    "category": "Upřesnění: vaše představa",
    "description": "Termín spuštění a funkce, bez kterých nemá smysl začínat. Ostatní může přijít později.",
    "example": "Příklad odpovědi: Do půl roku: vystavení, hledání, nákup s platbou a Zásilkovnou. Zbytek později.",
    "options": [
      "Co nejdřív",
      "Do 3 měsíců",
      "Do půl roku",
      "Nejdřív web",
      "Nejdřív mobilní aplikace"
    ],
    "without": "",
    "build": [],
    "category_note": "Otevřené otázky. Odpovězte vlastními slovy nebo klepněte na nabídnuté možnosti. Podle těchto odpovědí se nastaví čísla, dopravci, platby a rozsah prvního spuštění."
  },
  {
    "id": "30.10",
    "type": "info",
    "title": "Čím se má BOBINA lišit od Vintedu?",
    "category": "Upřesnění: vaše představa",
    "description": "Co vám na Vintedu vadí, co chcete udělat jinak a pro koho hlavně BOBINA je.",
    "example": "Příklad odpovědi: Nižší poplatky, jen pro ženy a děti, hezčí design a česká podpora.",
    "options": [],
    "without": "",
    "build": [],
    "category_note": "Otevřené otázky. Odpovězte vlastními slovy nebo klepněte na nabídnuté možnosti. Podle těchto odpovědí se nastaví čísla, dopravci, platby a rozsah prvního spuštění."
  }
];
window.BOBINA_RULES = [
  {
    "if": "15.1",
    "need": [
      "12.1",
      "12.3"
    ],
    "msg": "Ochrana kupujícího („Mám problém“) funguje jen tehdy, když se platí v aplikaci a peníze se drží do doručení."
  },
  {
    "if": "15.4",
    "need": [
      "12.3"
    ],
    "msg": "Pozastavit výplatu při sporu jde jen tehdy, když aplikace peníze drží do dokončení obchodu."
  },
  {
    "if": "12.3",
    "need": [
      "12.1"
    ],
    "msg": "Držet peníze do dokončení obchodu jde jen při platbě v aplikaci."
  },
  {
    "if": "12.4",
    "need": [
      "12.1"
    ],
    "msg": "Peněženka prodávajícího potřebuje platby v aplikaci."
  },
  {
    "if": "12.5",
    "need": [
      "12.4"
    ],
    "msg": "Výběr na bankovní účet potřebuje peněženku prodávajícího."
  },
  {
    "if": "12.9",
    "need": [
      "12.4"
    ],
    "msg": "Placení zůstatkem potřebuje peněženku."
  },
  {
    "if": "12.7",
    "need": [
      "12.1"
    ],
    "msg": "Vracet peníze jde jen u plateb přes aplikaci."
  },
  {
    "if": "12.8",
    "need": [
      "12.1"
    ],
    "msg": "Vracet část peněz jde jen u plateb přes aplikaci."
  },
  {
    "if": "18.4",
    "need": [
      "12.1"
    ],
    "msg": "Poplatek za ochranu kupujícího se vybírá při platbě v aplikaci."
  },
  {
    "if": "18.5",
    "need": [
      "12.1"
    ],
    "msg": "Provizi z prodeje lze strhnout jen z platby v aplikaci."
  },
  {
    "if": "13.2",
    "need": [
      "13.1"
    ],
    "msg": "Automatický štítek potřebuje napojení na dopravce."
  },
  {
    "if": "13.3",
    "need": [
      "13.1"
    ],
    "msg": "Mapa výdejních míst potřebuje napojení na dopravce."
  },
  {
    "if": "13.4",
    "need": [
      "13.1"
    ],
    "msg": "Sledování zásilky potřebuje napojení na dopravce."
  },
  {
    "if": "26.5",
    "need": [
      "13.1"
    ],
    "msg": "Přeshraniční doprava potřebuje napojení na dopravce."
  },
  {
    "if": "13.6",
    "need": [
      "13.5"
    ],
    "msg": "Prodloužení lhůty dává smysl jen s lhůtou na odeslání."
  },
  {
    "if": "13.7",
    "need": [
      "13.5"
    ],
    "msg": "Automatické storno potřebuje lhůtu na odeslání."
  },
  {
    "if": "21.1",
    "need": [
      "12.3",
      "21.4"
    ],
    "msg": "Ověření pravosti potřebuje držení peněz a cestu zásilky přes ověřovací centrum."
  },
  {
    "if": "21.2",
    "need": [
      "12.3",
      "21.4"
    ],
    "msg": "Ověření elektroniky potřebuje držení peněz a cestu zásilky přes ověřovací centrum."
  },
  {
    "if": "11.3",
    "need": [
      "11.2"
    ],
    "msg": "Sleva na balíček potřebuje nákup více věcí najednou."
  },
  {
    "if": "8.6",
    "need": [
      "10.4"
    ],
    "msg": "Tlačítko „Nabídnout cenu“ potřebuje nabídku ceny v chatu."
  },
  {
    "if": "10.5",
    "need": [
      "10.4"
    ],
    "msg": "Protinabídka potřebuje nabídku ceny."
  },
  {
    "if": "7.11",
    "need": [
      "7.10"
    ],
    "msg": "Upozornění na nové výsledky potřebuje uložené vyhledávání."
  },
  {
    "if": "9.2",
    "need": [
      "9.1"
    ],
    "msg": "Upozornění na změnu ceny potřebuje oblíbené předměty."
  },
  {
    "if": "9.3",
    "need": [
      "9.1"
    ],
    "msg": "Upozornění na prodej potřebuje oblíbené předměty."
  },
  {
    "if": "3.6",
    "need": [
      "3.5"
    ],
    "msg": "Počet sledujících dává smysl jen se sledováním."
  },
  {
    "if": "16.2",
    "need": [
      "16.1"
    ],
    "msg": "Hvězdičky potřebují hodnocení po obchodu."
  },
  {
    "if": "16.3",
    "need": [
      "16.1"
    ],
    "msg": "Textová recenze potřebuje hodnocení po obchodu."
  },
  {
    "if": "16.6",
    "need": [
      "16.1"
    ],
    "msg": "Odpověď na hodnocení potřebuje hodnocení."
  },
  {
    "if": "18.6",
    "need": [
      "1.2"
    ],
    "msg": "Předplatné PRO potřebuje firemní prodejce."
  },
  {
    "if": "25.8",
    "need": [
      "1.2"
    ],
    "msg": "Práva spotřebitele u firem se týkají jen firemních prodejců."
  },
  {
    "if": "25.9",
    "need": [
      "1.2"
    ],
    "msg": "Faktury od firem se týkají jen firemních prodejců."
  },
  {
    "if": "25.10",
    "need": [
      "1.2"
    ],
    "msg": "Ověření firem se týká jen firemních prodejců."
  }
];
