// Zelt- & Campingplätze entlang WHW und CWT. Koordinaten: Nominatim/OSM bzw.
// auf den eigenen Track gesnappt; Links direkt zur jeweiligen Platz-Seite.
// Stand der Recherche: Juli 2026 – Öffnungszeiten/Preise vor Ort prüfen.
// paid: true = offizieller Platz (Gebühr), sonst Wildzelt-Spot/Bothy-Umfeld.
// Wildzelten ist in Schottland legal (Scottish Outdoor Access Code) – Ausnahme:
// Camping Management Zone am Loch-Lomond-Ostufer (März–Sep.).
window.CAMPS = [
  /* ---------- West Highland Way ---------- */
  {
    stage: 'whw-1', paid: true, name: 'Drymen Camping', lat: 56.0538, lng: -4.4324,
    text: 'Kleine Zeltwiese auf einer Farm an der Gartness Road, ca. 3 km vor Drymen direkt am Weg. Einfach (Kompost-WC, Unterstand), dafür herzlich – gute Option für die erste Nacht.',
    src: 'https://drymencamping.co.uk/', srcName: 'drymencamping.co.uk'
  },
  {
    stage: 'whw-2', paid: true, name: 'Milarrochy Bay (C&CC-Club)', lat: 56.1004, lng: -4.5632,
    text: 'Großer Club-Platz direkt am WHW und am Wasser, 2,5 km nördlich von Balmaha. Nimmt Zelte, Nichtmitglieder zahlen Aufschlag. Liegt in der Camping-Zone – dort ist er eine der legalen Optionen.',
    src: 'https://www.campingandcaravanningclub.co.uk/campsites/uk/glasgow/drymen/milarrochy-bay-camping-and-caravanning-club-site/', srcName: 'campingandcaravanningclub.co.uk'
  },
  {
    stage: 'whw-2.5', paid: true, name: 'Cashel Campsite', lat: 56.1135, lng: -4.5885,
    text: '168 Stellplätze mit Backpacker-Bereich, Duschen, Waschmaschine und Laden (Kaffee, Snacks, Gas) – der WHW läuft direkt am Eingang vorbei. Halbzeit zwischen Balmaha und Rowardennan.',
    src: 'https://cashel-campsite.com/', srcName: 'cashel-campsite.com'
  },
  {
    stage: 'whw-2.5', paid: true, name: 'Sallochy Campsite (nur Zelte)', lat: 56.1271, lng: -4.6074,
    text: 'Einfacher Waldplatz am Ufer, nur Zelte, Kompost-WC, KEIN Trinkwasser (filtern oder mitbringen). Liegt in der Permit-Zone; online buchbar, max. 4 Wochen im Voraus – im August früh dran sein!',
    src: 'https://www.lochlomond-trossachs.org/things-to-do/camping/find-a-campsite/', srcName: 'Nationalpark (Buchung)'
  },
  {
    stage: 'whw-3.5', name: 'Doune Bothy / Ardleish', lat: 56.290, lng: -4.706,
    text: 'Erst nördlich von Ptarmigan Lodge endet die Camping-Verbotszone. Bei Doune Bothy und am Ardleish-Steg (Fähre nach Ardlui) gibt es flache Wiesen mit Bachwasser – legaler Wildzelt-Klassiker.',
    src: 'https://www.westhighlandway.org/wild-camping/', srcName: 'westhighlandway.org'
  },
  {
    stage: 'whw-3.5', paid: true, name: 'Beinglas Farm Campsite', lat: 56.3295, lng: -4.7180,
    text: 'Großer Wanderer-Campingplatz am Etappenende mit Pub (Essen bis ca. 21 Uhr), Duschen und kleinem Laden. Wer hier zeltet, spart sich den Abstieg nach Inverarnan.',
    src: 'https://www.beinglascampsite.co.uk/', srcName: 'beinglascampsite.co.uk'
  },
  {
    stage: 'whw-4.5', paid: true, name: 'Strathfillan Wigwams (Auchtertyre)', lat: 56.4258, lng: -4.6691,
    text: 'Farm-Campingplatz mit Zeltwiese und Holz-Wigwams, direkt am Weg 3 km vor Tyndrum. Hofladen mit Grundversorgung.',
    src: 'https://www.wigwamholidays.com/strathfillan', srcName: 'wigwamholidays.com'
  },
  {
    stage: 'whw-4.5', paid: true, name: 'By The Way Hostel & Campsite (Tyndrum)', lat: 56.4342, lng: -4.7137,
    text: 'Ruhiger Platz mit Hostel, Hobbit-Häuschen und Zeltwiese, 200 m vom Weg im Dorf. Tyndrum hat zwei Läden (Brodies + Green Welly, lange offen) und Imbisse.',
    src: 'https://www.tyndrumbytheway.com/', srcName: 'tyndrumbytheway.com'
  },
  {
    stage: 'whw-5.5', name: 'Victoria Bridge / Forest Lodge', lat: 56.5400, lng: -4.8139,
    text: 'Ebene Wiesen am Abhainn Shira, wo die Straße endet und die alte Drovers’ Road beginnt (ca. 1 km hinter dem Inveroran Hotel). Der beliebteste legale Wildzelt-Spot des WHW – Wasser aus dem Fluss, kein Service.',
    src: 'https://www.goingthewholehogg.com/west-highland-way-camping/', srcName: 'GTWH Camping-Guide'
  },
  {
    stage: 'whw-6', name: 'Ba Bridge (Rannoch Moor)', lat: 56.5858, lng: -4.8016,
    text: 'Kleine Grasflächen an der alten Steinbrücke über den River Ba, mitten im weiten Rannoch Moor. Sehr exponiert – nur bei stabilem Wetter, dafür einer der einsamsten Schlafplätze des Weges.',
    src: 'https://www.goingthewholehogg.com/west-highland-way-camping/', srcName: 'GTWH Camping-Guide'
  },
  {
    stage: 'whw-6', paid: true, name: 'Glencoe Mountain Resort (Camping)', lat: 56.6202, lng: -4.8395,
    text: 'Zeltwiese und Microlodges am Ski Centre, 2,5 km vor Kingshouse; Café mit warmem Essen, Duschen. Der Citylink 915 hält direkt am Resort.',
    src: 'https://www.glencoemountain.co.uk/', srcName: 'glencoemountain.co.uk'
  },
  {
    stage: 'whw-6', name: 'Kingshouse Wildzelt-Wiese', lat: 56.6528, lng: -4.8410,
    text: 'Geduldete, kostenlose Zeltwiese direkt hinter dem Kingshouse Hotel (über der Flussbrücke, Platz für ca. 6–10 Zelte, Flusswasser). Hotelbar/Restaurant nebenan – dafür abends viele Midges.',
    src: 'https://westhighlandwayscotland.com/amp/kingshouse/', srcName: 'westhighlandwayscotland.com'
  },
  {
    stage: 'whw-7', name: 'Oberhalb Devil’s Staircase', lat: 56.669, lng: -4.893,
    text: 'Kleine Terrassen am höchsten WHW-Punkt (548 m) mit Blick zurück auf Glencoe. Wasser aus den Bächen kurz unterhalb; bei Sturm ungeeignet.',
    src: 'https://www.goingthewholehogg.com/west-highland-way-camping/', srcName: 'GTWH Camping-Guide'
  },
  {
    stage: 'whw-7', paid: true, name: 'Red Squirrel Campsite (Glencoe)', lat: 56.6695, lng: -5.0703,
    text: 'Legendärer, weitläufiger Naturcampingplatz im Glencoe-Tal (Lagerfeuer erlaubt!). Liegt 10 km abseits des WHW – nur sinnvoll mit Bus 915 ab Glencoe Ski Centre/Crossroads für einen Glencoe-Tag.',
    src: 'https://redsquirrelcampsite.co.uk/', srcName: 'redsquirrelcampsite.co.uk'
  },
  {
    stage: 'whw-7', paid: true, name: 'Blackwater Hostel & Campsite (Kinlochleven)', lat: 56.7145, lng: -4.9604,
    text: 'Erster Platz am Ortseingang, 30 Zeltplätze am River Leven (nur kleine Zelte), Duschen, Trockenraum, WLAN, 200 m ins Zentrum (Co-op!).',
    src: 'https://blackwaterhostel.co.uk/campsite/', srcName: 'blackwaterhostel.co.uk'
  },
  {
    stage: 'whw-7', paid: true, name: 'MacDonald Hotel & Cabins (Kinlochleven)', lat: 56.7164, lng: -4.9719,
    text: 'Zeltwiese hinterm Hotel am Loch Leven mit WC, Duschen, Küchenzeile und Trockenraum; Pub mit Essen im Haus. Am westlichen Ortsrand Richtung Lairigmòr.',
    src: 'https://macdonaldhotel.co.uk/', srcName: 'macdonaldhotel.co.uk'
  },
  {
    stage: 'whw-8', paid: true, name: 'Glen Nevis Caravan & Camping Park', lat: 56.8045, lng: -5.0747,
    text: 'Großer, gut ausgestatteter Platz unterm Ben Nevis, ca. 3 km vor Fort William (kurz abseits des Wegs). Gute letzte Nacht vor dem CWT-Start; Restaurant und Laden im Glen.',
    src: 'https://www.glen-nevis.co.uk/', srcName: 'glen-nevis.co.uk'
  },

  /* ---------- Cape Wrath Trail ---------- */
  {
    stage: 'cwt-1', name: 'Cona Glen', lat: 56.777, lng: -5.250,
    text: 'Viele ebene Grasflächen am Cona River im stillen Estate-Tal, Wasser überall. Am besten einige Kilometer hinein, bis das Tal breiter wird – Rotwild fast garantiert.',
    src: 'https://capewrathtrailguide.org', srcName: 'capewrathtrailguide.org'
  },
  {
    stage: 'cwt-2', name: 'Corryhully Bothy', lat: 56.899, lng: -5.421,
    text: 'Offenes Estate-Bothy („electric bothy“ – Licht + Steckdose!) mit ebenen Zeltflächen am Fluss. 4 km hinter Glenfinnan, guter Puffer, wenn man spät ankommt.',
    src: 'https://capewrathtrailguide.org/route/glenfinnan-to-glen-dessarry', srcName: 'capewrathtrailguide.org'
  },
  {
    stage: 'cwt-3', name: 'Sourlies / River Carnach', lat: 57.010, lng: -5.512,
    text: 'Wiesen am Bothy und flussauf am River Carnach. Wichtig: Direkt hinter Sourlies führt der Weg ums Ufer – bei Hochwasser (Flut) ist die Umgehung der Landzunge überspült, dann über den kleinen Felsrücken klettern oder Ebbe abwarten. Der Carnach selbst ist bei Starkregen unpassierbar.',
    src: 'https://capewrathtrailguide.org/route/glen-dessarry-to-barisdale', srcName: 'capewrathtrailguide.org'
  },
  {
    stage: 'cwt-3', paid: true, name: 'Barrisdale Bay (Zeltwiese, £)', lat: 57.0947, lng: -5.5125,
    text: 'Estate-Zeltwiese mit WC und Wasser neben dem Bothy (Kasse des Vertrauens, wenige Pfund). Traumlage an der Bucht unter Ladhar Bheinn; die Landzunge vorn hat oft Brise = weniger Midges.',
    src: 'https://capewrathtrailguide.org/route/glen-dessarry-to-barisdale', srcName: 'capewrathtrailguide.org'
  },
  {
    stage: 'cwt-4.5', paid: true, name: 'Glenshiel Campsite (Shiel Bridge)', lat: 57.2117, lng: -5.4162,
    text: 'Unabhängiger Platz an der Schule von Shiel Bridge unter den Five Sisters, Zelte willkommen. Tankstellen-Laden 300 m, Bus 915 hält im Ort.',
    src: 'https://glenshielcampsite.co.uk/', srcName: 'glenshielcampsite.co.uk'
  },
  {
    stage: 'cwt-4.5', paid: true, name: 'Morvich (Caravan & Motorhome Club)', lat: 57.2270, lng: -5.4010,
    text: 'Gepflegter Club-Platz mit Zeltbereich, Duschen und Trockenraum – liegt direkt am CWT-Weiterweg durch Strath Croe (Nichtmitglieder-Aufschlag).',
    src: 'https://www.experiencefreedom.co.uk/locations/regions/scotland/highlands/morvich/', srcName: 'Caravan & Motorhome Club'
  },
  {
    stage: 'cwt-5', name: 'Loch na Leitreach', lat: 57.277, lng: -5.289,
    text: 'Flache Uferwiesen unterhalb der Falls of Glomach bei Carnach – ruhig, viel Wasser. Wer die Wasserfall-Schlucht erst morgens gehen will, übernachtet besser noch davor (der Pfad an der Glomach-Schlucht ist ausgesetzt und bei Nässe heikel).',
    src: 'https://www.walkhighlands.co.uk/cape-wrath-trail.shtml', srcName: 'walkhighlands'
  },
  {
    stage: 'cwt-5', name: 'Maol-bhuidhe Bothy', lat: 57.3724, lng: -5.2406,
    text: 'Eines der abgelegensten Bothies Schottlands (MBA-gepflegt), ebene Flächen am Fluss. Kein Netz, kein Holz – Respekt vor dem Bothy Code: sauber hinterlassen, klein zelten.',
    src: 'https://www.mountainbothies.org.uk/bothies/western-highlands/maol-bhuidhe/', srcName: 'Mountain Bothies Association'
  },
  {
    stage: 'cwt-6', name: 'Bendronaig Lodge Bothy', lat: 57.418, lng: -5.320,
    text: 'Estate-Bothy mit (!) Spültoilette, kurz abseits der Route vor dem Bealach Bhearnais; Zeltwiesen am Fluss. Gute Option, wenn Craig zu weit wird.',
    src: 'https://capewrathtrailguide.org', srcName: 'capewrathtrailguide.org'
  },
  {
    stage: 'cwt-7', paid: true, name: 'Beinn Eighe Campsite (Taagan/Kinlochewe)', lat: 57.6196, lng: -5.3277,
    text: 'Kleiner, kostenloser(!) NatureScot-Platz bei Taagan, 2 km nordwestlich von Kinlochewe an der A832 – first come, first served, WC vorhanden. Laden und Hotel im Dorf.',
    src: 'https://www.nature.scot/enjoying-outdoors/visit-our-nature-reserves/beinn-eighe-and-loch-maree-islands-national-nature-reserve', srcName: 'NatureScot (Beinn Eighe NNR)'
  },
  {
    stage: 'cwt-8', name: 'Shenavall / Strath na Sealga', lat: 57.7767, lng: -5.254,
    text: 'MBA-Bothy und Flussterrassen unter dem An Teallach – Kultplatz der Great Wilderness. Achtung: Die Querungen von Abhainn Srath na Sealga und Abhainn Gleann na Muice sind nach Regen schnell hüfttief – dann warten oder Umweg über die Brücke bei Achneigie.',
    src: 'https://www.mountainbothies.org.uk/bothies/northern-highlands/shenavall/', srcName: 'Mountain Bothies Association'
  },
  {
    stage: 'cwt-10', name: 'Knockdamph Bothy / Loch an Daimh', lat: 57.909, lng: -4.907,
    text: 'MBA-Bothy mit Uferwiesen auf halbem Weg nach Oykel Bridge. 6 km weiter liegt das Schoolhouse-Bothy an der Duag Bridge (alte Schule mit Schulbänken!).',
    src: 'https://www.mountainbothies.org.uk/bothies/northern-highlands/knockdamph/', srcName: 'Mountain Bothies Association'
  },
  {
    stage: 'cwt-11', name: 'Loch Ailsh', lat: 58.012, lng: -4.812,
    text: 'Kiefernumstandene Uferflächen nahe Benmore Lodge – geschützter, flacher Platz vor dem langen Anstieg um Ben More Assynt.',
    src: 'https://capewrathtrailguide.org', srcName: 'capewrathtrailguide.org'
  },
  {
    stage: 'cwt-12', name: 'Glencoul & Glendhu Bothy', lat: 58.2585, lng: -4.934,
    text: 'Zwei MBA-Bothies an den Fjordenden von Loch Glencoul und Loch Glendhu, je mit Zeltwiese am Wasser. Zwischen beiden liegt ein steiler Küstenpfad – Zeit einplanen.',
    src: 'https://www.mountainbothies.org.uk/bothies/northern-highlands/glendhu/', srcName: 'Mountain Bothies Association'
  },
  {
    stage: 'cwt-14.5', name: 'Sandwood Bay Dünen', lat: 58.532, lng: -5.064,
    text: 'Zelten in den Dünen hinter dem rosa Strand (John-Muir-Trust-Land, ausdrücklich geduldet): Süßwasser aus dem Sandwood Loch (filtern), kein Feuerholz sammeln, alles wieder mitnehmen. Am Abend oft ganz allein mit dem Sea Stack Am Buachaille.',
    src: 'https://www.johnmuirtrust.org/trust-land/sandwood', srcName: 'John Muir Trust'
  },
  {
    stage: 'cwt-15', name: 'Kearvaig Bothy (nach dem Kap)', lat: 58.6080, lng: -4.9400,
    text: 'MBA-Bothy mit eigener Traumbucht, ca. 7 km vom Leuchtturm an der Minibus-Piste Richtung Fähre. Nur zugänglich, wenn das MOD-Gebiet nicht gesperrt ist – Schießzeiten vorher checken.',
    src: 'https://www.mountainbothies.org.uk/bothies/northern-highlands/kearvaig/', srcName: 'Mountain Bothies Association'
  },
  {
    stage: 'cwt-15', paid: true, name: 'Sango Sands Oasis (Durness)', lat: 58.5697, lng: -4.7432,
    text: 'Campingplatz auf den Klippen über dem Sango-Strand in Durness – perfekter Endpunkt nach Fähre + Minibus, mit Pub/Restaurant und Bus 805 am Morgen.',
    src: 'https://www.sangosands.com/', srcName: 'sangosands.com'
  }
];
