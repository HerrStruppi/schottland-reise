// Übernachtungsmöglichkeiten entlang WHW und CWT. Koordinaten: Nominatim/OSM,
// MBA-Grid-Refs bzw. Geograph-Foto-GPS. Stand der Recherche: Juli 2026 –
// Öffnungszeiten/Preise vor Ort prüfen, alle Links und Fotos verifiziert.
// type: 'roof'  = feste Unterkunft (Bunkhouse, Hostel, B&B, Hotel an der Strecke)
//       'camp'  = offizieller Campingplatz (Gebühr)
//       'bothy' = Bothy/Schutzhütte (unbewirtschaftet, frei bzw. Honesty Box)
//       'wild'  = Wildzelt-Spot (legal nach Scottish Outdoor Access Code;
//                 Ausnahme Camping Management Zone Loch-Lomond-Ostufer März–Sep.)
window.CAMPS = [

  /* ---------- whw-1 ---------- */
  {
    stage: 'whw-1', type: 'camp', name: 'Drymen Camping (Easter Drumquhassle Farm)', lat: 56.0538, lng: -4.4324,
    text: 'Kleine Zeltwiese auf der Easter Drumquhassle Farm, ca. 25 Gehminuten vor Drymen direkt an der Route. Warme Duschen, Aufenthaltsraum, Frühstück buchbar; im August unbedingt vorab online reservieren. Pubs und Läden in Drymen (u. a. Clachan Inn, einer der ältesten Pubs Schottlands).',
    src: 'https://www.drymencamping.co.uk/', srcName: 'drymencamping.co.uk',
    photos: [{ url: 'https://drymencamping.co.uk/wp-content/uploads/2024/02/dc-header2_www.jpg', credit: 'Drymen Camping' }, { url: 'https://s0.geograph.org.uk/geophotos/01/16/34/1163467_7e040905.jpg', credit: '© Derek Mugridge, geograph.org.uk, CC BY-SA 2.0' }]
  },

  /* ---------- whw-2 ---------- */
  {
    stage: 'whw-2', type: 'roof', name: 'Oak Tree Inn (Balmaha)', lat: 56.084, lng: -4.5399,
    text: 'Der Klassiker in Balmaha direkt am Way: Inn mit Zimmern und Cabins, dazu Pub-Küche, eigenes Café (St Mocha) und Village Shop — letzte gute Einkaufsmöglichkeit vor Rowardennan. Im August früh ausgebucht, Wochenenden sehr voll.',
    src: 'https://www.oak-tree-inn.co.uk/', srcName: 'oak-tree-inn.co.uk',
    photos: [{ url: 'https://s0.geograph.org.uk/geophotos/03/75/99/3759934_254cb998.jpg', credit: '© Andy Farrington, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'whw-2', type: 'camp', name: 'Milarrochy Bay Camping & Caravanning Club Site', lat: 56.1, lng: -4.5596,
    text: 'Club-Platz direkt am Ostufer des Loch Lomond, ca. 2,5 km nach Balmaha — der Way führt am Eingang vorbei. Moderner Sanitärblock, Spülküche, Backpacker-Bereich; Nichtmitglieder zahlen Aufschlag, im August besser reservieren. Laden und Pub in Balmaha. Liegt in der Camping-Zone — dort eine der legalen Optionen.',
    src: 'https://www.campingandcaravanningclub.co.uk/campsites/uk/glasgow/drymen/milarrochy-bay-camping-and-caravanning-club-site/', srcName: 'campingandcaravanningclub.co.uk',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Milarrochy_Bay.JPG/1280px-Milarrochy_Bay.JPG', credit: 'DrDevilFX, Wikimedia Commons, CC0' }, { url: 'https://s0.geograph.org.uk/photos/95/49/954912_0f26de9e.jpg', credit: '© John Salmon, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'whw-2', type: 'wild', name: 'Garadhban Forest (Wildzelt-Lichtungen)', lat: 56.085, lng: -4.4543,
    text: 'Kiefernlichtungen im Garadhban Forest nördlich von Drymen — die letzte legale Wildzelt-Option vor der Camping Management Zone, die Richtung Conic Hill/Balmaha beginnt (Verbot 1. März–30. Sep). Kein Wasser am Platz, in Drymen auffüllen.',
    src: 'https://www.westhighlandway.org/wild-camping/', srcName: 'westhighlandway.org',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Garadhban_Forest_-_geograph.org.uk_-_5401233.jpg/960px-Garadhban_Forest_-_geograph.org.uk_-_5401233.jpg', credit: '© Richard Webb, geograph.org.uk, CC BY-SA 2.0' }]
  },

  /* ---------- whw-2.5 ---------- */
  {
    stage: 'whw-2.5', type: 'roof', name: 'Rowardennan Youth Hostel (Hostelling Scotland)', lat: 56.158, lng: -4.6435,
    text: 'Frisch renoviertes SYHA-Hostel in einer viktorianischen Jagd-Lodge direkt am Loch, ca. 1 km hinter dem Rowardennan-Pier. Betten und Privatzimmer, Selbstversorgerküche, Abendessen/Frühstück buchbar, Drying Room. Im August oft Monate vorher ausgebucht.',
    src: 'https://www.hostellingscotland.org.uk/hostels/rowardennan/', srcName: 'hostellingscotland.org.uk',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Rowardennan_Lodge_Youth_Hostel_-_geograph.org.uk_-_3287777.jpg/1280px-Rowardennan_Lodge_Youth_Hostel_-_geograph.org.uk_-_3287777.jpg', credit: '© Rude Health, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'whw-2.5', type: 'roof', name: 'Rowardennan Hotel', lat: 56.1493, lng: -4.6414,
    text: 'Hotel mit der Clansman Bar am Etappenende unterhalb des Ben Lomond — letzte Einkehr und letztes Bett vor dem einsamen Ostufer-Abschnitt. Biergarten mit Loch-Blick, Pub-Essen; Zimmer für August früh sichern.',
    src: 'https://rowardennanhotel.co.uk/', srcName: 'rowardennanhotel.co.uk',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Rowardennan_Hotel_-_geograph.org.uk_-_7140576.jpg/1280px-Rowardennan_Hotel_-_geograph.org.uk_-_7140576.jpg', credit: '© Richard Sutcliffe, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'whw-2.5', type: 'camp', name: 'Cashel Campsite', lat: 56.1126, lng: -4.585,
    text: 'Großer Campingplatz direkt am Loch-Ufer zwischen Balmaha und Rowardennan, unabhängig geführt. Zeltplätze am Wasser, Duschen, kleiner Shop (Kaffee, Snacks, Gas); online buchbar — für August empfohlen. Abends Midges am Ufer einplanen.',
    src: 'https://cashel-campsite.com/', srcName: 'cashel-campsite.com',
    photos: [{ url: 'https://s0.geograph.org.uk/geophotos/01/16/35/1163521_bcb80518.jpg', credit: '© Derek Mugridge, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'whw-2.5', type: 'camp', name: 'Sallochy Campsite (nur Zelte)', lat: 56.1283, lng: -4.6073,
    text: 'Einfacher Nationalpark-Zeltplatz im 200 Jahre alten Eichenwald direkt am Ufer, nur für Zelte. Komposttoiletten, KEIN Trinkwasser (filtern); ca. £11 p. P. Online-Buchung öffnet nur 4 Wochen im Voraus — für August am Stichtag buchen, die Ufer-Pitches sind schnell weg.',
    src: 'https://www.lochlomond-trossachs.org/things-to-do/camping/find-a-campsite/sallochy-campsite/', srcName: 'lochlomond-trossachs.org',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Sallochy_Campsite_entrance%2C_looking_north_across_bridge_over_Allt_a%27_Mhuitinn_-_geograph.org.uk_-_8065467.jpg/1280px-Sallochy_Campsite_entrance%2C_looking_north_across_bridge_over_Allt_a%27_Mhuitinn_-_geograph.org.uk_-_8065467.jpg', credit: '© Victoria Miller, geograph.org.uk, CC BY-SA 2.0' }]
  },

  /* ---------- whw-3 ---------- */
  {
    stage: 'whw-3', type: 'roof', name: 'Inversnaid Hotel', lat: 56.2431, lng: -4.6844,
    text: 'Großes Ausflugshotel direkt am Wasserfall von Inversnaid, mitten auf dem einsamsten Abschnitt — der Way führt an der Haustür vorbei. Einzelzimmer für Wanderer buchbar; Bar mit Essen auch für Nicht-Gäste, guter Zwischenstopp.',
    src: 'https://www.lochsandglens.com/our-hotels/inversnaid-hotel', srcName: 'lochsandglens.com',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Inversnaid_Hotel.jpg/1280px-Inversnaid_Hotel.jpg', credit: '© Macieklew, Wikimedia Commons, CC BY-SA 4.0' }]
  },
  {
    stage: 'whw-3', type: 'roof', name: 'Inversnaid Bunkhouse', lat: 56.2463, lng: -4.6715,
    text: 'Umgebaute Kirche ca. 800 m (bergauf) vom Way, mit kostenlosem Abhol-Service vom Trail. Bunkrooms, Twin-/Doppelzimmer, Restaurant/Bar mit Abendessen und Frühstück — dazu Platz für ca. 10 Zelte mit Nutzung aller Einrichtungen. Für August reservieren.',
    src: 'https://inversnaid.com/', srcName: 'inversnaid.com',
    photos: [{ url: 'https://www.westhighlandway.org/wp-content/uploads/2023/01/F5F7F264-9C9A-4E0D-82A5-35E317FE24EA-1024x768.jpeg', credit: 'Inversnaid Bunkhouse / westhighlandway.org' }]
  },
  {
    stage: 'whw-3', type: 'bothy', name: 'Rowchoish Bothy (MBA)', lat: 56.2022, lng: -4.6839,
    text: 'Einfache MBA-Bothy im Wald ca. 7 km nördlich von Rowardennan, wenige Minuten abseits des Wegs. Kostenlos, keine Reservierung: Schlafplattformen, offene Feuerstelle, Wasser aus dem Bach. Liegt noch in der Camping Management Zone — Übernachten in der Bothy ist erlaubt, Zelten daneben von März–Sep. nicht.',
    src: 'https://www.mountainbothies.org.uk/bothies/southern-highlands/rowchoish/', srcName: 'mountainbothies.org.uk',
    photos: [{ url: 'https://s0.geograph.org.uk/geophotos/01/04/05/1040554_82985e12.jpg', credit: '© ronnie leask, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'whw-3', type: 'wild', name: 'Lochufer nördlich Ptarmigan Lodge', lat: 56.1695, lng: -4.6527,
    text: 'Kleine Ufer-Buchten am WHW nördlich von Ptarmigan Lodge. Wichtig: Die Camping Management Zone (Zeltverbot 1. März–30. Sep) endet erst hier — auf die Beschilderung achten und erst nördlich der Zonengrenze zelten. Wasser aus Bächen, abends Midges.',
    src: 'https://www.westhighlandway.org/wild-camping/', srcName: 'westhighlandway.org',
    photos: [{ url: 'https://s0.geograph.org.uk/photos/15/20/152045_faa514e9.jpg', credit: '© Iain Thompson, geograph.org.uk, CC BY-SA 2.0' }]
  },

  /* ---------- whw-3.5 ---------- */
  {
    stage: 'whw-3.5', type: 'roof', name: 'The Drovers Inn (Inverarnan)', lat: 56.3283, lng: -4.7218,
    text: 'Legendäres Inn von 1705, fünf Minuten von Beinglas über die Fußbrücke: ausgestopfter Bär in der Lobby, Personal im Kilt, offene Feuer und oft Livemusik. Zimmer im historischen Haupthaus und in der moderneren Lodge gegenüber; Pub-Essen bis spät — auch als Abendessen vom Campingplatz aus lohnend.',
    src: 'https://www.droversinn.co.uk/', srcName: 'droversinn.co.uk',
    photos: [{ url: 'https://www.droversinn.co.uk/wp-content/uploads/2025/10/drovers-inn-preview.jpg', credit: 'The Drovers Inn' }, { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/The_Drovers_Inn%2C_Inverarnan_-_geograph.org.uk_-_2180895.jpg/1280px-The_Drovers_Inn%2C_Inverarnan_-_geograph.org.uk_-_2180895.jpg', credit: '© wfmillar, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'whw-3.5', type: 'camp', name: 'Beinglas Farm Campsite', lat: 56.3307, lng: -4.7168,
    text: 'Campingplatz direkt am Way in Inverarnan mit Bar/Restaurant (Essen bis ca. 21 Uhr), kleinem Laden, Duschen und Drying Room — dazu Holz-Pods. Zeltplätze meist auch ohne Reservierung, Pods vorab buchen. Klassisches Etappenende nach dem Ostufer-Abschnitt.',
    src: 'https://www.beinglascampsite.co.uk/', srcName: 'beinglascampsite.co.uk',
    photos: [{ url: 'https://beinglascampsite.co.uk/wp-content/uploads/2024/11/DJI_0569-scaled.jpg', credit: 'Beinglas Campsite' }, { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Entrance_to_Beinglas_Farm_Campsite_-_geograph.org.uk_-_3526197.jpg/960px-Entrance_to_Beinglas_Farm_Campsite_-_geograph.org.uk_-_3526197.jpg', credit: '© Iain Russell, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'whw-3.5', type: 'bothy', name: 'Doune Byre Bothy (MBA)', lat: 56.2931, lng: -4.696,
    text: 'Steinerne MBA-Bothy direkt am Way zwischen Inversnaid und Ardleish, kurz vor dem Nordende des Loch Lomond. Kostenlos, first come, first served: Schlafplattformen, sehr einfach, Wasser aus dem Bach. Im Sommer beliebt — Zelt als Backup einpacken.',
    src: 'https://www.mountainbothies.org.uk/bothies/southern-highlands/doune-byre/', srcName: 'mountainbothies.org.uk',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Doune_Byre_%28Bothy%29_-_geograph.org.uk_-_5107431.jpg/1280px-Doune_Byre_%28Bothy%29_-_geograph.org.uk_-_5107431.jpg', credit: '© Raibeart MacAoidh, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'whw-3.5', type: 'wild', name: 'Cnap Mor / Ardleish (Wildzelt-Spots)', lat: 56.3105, lng: -4.7137,
    text: 'Hügelkuppe mit dem letzten großen Loch-Lomond-Panorama, oberhalb von Ardleish (Fähre nach Ardlui am Steg) — flache Grasflächen am Weg, außerhalb jeder Management Zone, also legal. Exponiert, aber gerade deshalb im August angenehm brisig und midge-ärmer als das Ufer.',
    src: 'https://www.westhighlandway.org/wild-camping/', srcName: 'westhighlandway.org',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Loch_Lomond_from_Cnap_Mor_-_geograph.org.uk_-_5660058.jpg/1280px-Loch_Lomond_from_Cnap_Mor_-_geograph.org.uk_-_5660058.jpg', credit: '© Alan Walker, geograph.org.uk, CC BY-SA 2.0' }]
  },

  /* ---------- whw-4 ---------- */
  {
    stage: 'whw-4', type: 'roof', name: 'Crianlarich Youth Hostel (Hostelling Scotland)', lat: 56.3914, lng: -4.6164,
    text: 'SYHA-Hostel im Dorf, ca. 1 km Abstieg vom Way am „Halfway“-Kreuzungspunkt. Selbstversorgerküche, Drying Room, Privat- und Mehrbettzimmer; im Dorf Laden, Pub und Bahnhof (WHW-Ausstieg möglich). Praktisch, um die lange Etappe nach Tyndrum zu teilen.',
    src: 'https://www.hostellingscotland.org.uk/hostels/crianlarich/', srcName: 'hostellingscotland.org.uk',
    photos: [{ url: 'https://s0.geograph.org.uk/geophotos/05/64/00/5640029_fb984987.jpg', credit: '© Thomas Nugent, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'whw-4', type: 'wild', name: 'River Falloch bei Derrydaroch', lat: 56.3603, lng: -4.67,
    text: 'Wiesenflecken an den Pools des River Falloch rund um die Derrydaroch-Brücke, gut von Beinglas aus erreichbar. Legal und viel genutzt; im August Midge-Hotspot am Wasser — lieber etwas erhöht und windoffen stehen. Kein Handyempfang in Teilen des Glen Falloch.',
    src: 'https://www.westhighlandway.org/wild-camping/', srcName: 'westhighlandway.org',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Derrydaroch_Bridge_-_geograph.org.uk_-_4003288.jpg/1280px-Derrydaroch_Bridge_-_geograph.org.uk_-_4003288.jpg', credit: '© Chris Heaton, geograph.org.uk, CC BY-SA 2.0' }]
  },

  /* ---------- whw-4.5 ---------- */
  {
    stage: 'whw-4.5', type: 'camp', name: 'Strathfillan Wigwams (Auchtertyre) — GESCHLOSSEN', lat: 56.4249, lng: -4.6695,
    text: 'Achtung: Das Wigwam-Dorf mit Zeltplätzen auf der Auchtertyre Farm ist derzeit geschlossen — keine Buchungen, kein Wiedereröffnungstermin (Stand Juli 2026). Alternative in Tyndrum: By The Way Hostel & Campsite.',
    src: 'https://www.wigwamholidays.com/strathfillan', srcName: 'wigwamholidays.com',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Strathfillan_Wigwam_Village_-_geograph.org.uk_-_4958980.jpg/1280px-Strathfillan_Wigwam_Village_-_geograph.org.uk_-_4958980.jpg', credit: '© Tim Heaton, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'whw-4.5', type: 'camp', name: 'By The Way Hostel & Campsite (Tyndrum)', lat: 56.4342, lng: -4.7137,
    text: 'Hostel, Campingplatz, Pods und Hütten am alten Bahnhofsweg in Tyndrum — der Way läuft direkt vorbei. Gute Küche/Sanitär, Drying Room; im Ort Green Welly Stop, Brodies und Real Food Café zum Aufstocken. August: Hostelbetten früh buchen, Zeltwiese entspannter.',
    src: 'https://www.tyndrumbytheway.com/', srcName: 'tyndrumbytheway.com',
    photos: [{ url: 'https://tyndrumbytheway.com/wp-content/uploads/2018/07/IMG_6136-1024x682.jpg', credit: 'By The Way Hostel' }]
  },

  /* ---------- whw-5 ---------- */
  {
    stage: 'whw-5', type: 'roof', name: 'Bridge of Orchy Hotel', lat: 56.5175, lng: -4.7696,
    text: 'Preisgekröntes Landhotel direkt am Trail: 32 Zimmer in Haupthaus und Annex, Bar und Restaurant — Abendessen auch für Durchwanderer. Das frühere Bunkhouse gibt es nicht mehr; günstige Betten bietet stattdessen der WHW Sleeper am Bahnhof. Für August lange im Voraus buchen.',
    src: 'https://www.bridgeoforchy.co.uk/', srcName: 'bridgeoforchy.co.uk',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Bridge_of_Orchy_Hotel_-_geograph.org.uk_-_2025393.jpg/1280px-Bridge_of_Orchy_Hotel_-_geograph.org.uk_-_2025393.jpg', credit: '© Trevor Littlewood, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'whw-5', type: 'roof', name: 'West Highland Way Sleeper (Bahnhofs-Bunkhouse)', lat: 56.5164, lng: -4.7643,
    text: 'Bunkhouse im alten Bahnhofsgebäude von Bridge of Orchy, direkt am Bahnsteig: 10er-Schlafsaal (Bettwäsche inklusive) und 4-Bett-Zimmer en suite, ab ca. £35 p. P. Frühstück und Lunchpakete buchbar — oder 5 Minuten hinunter ins Hotel. Züge nach Glasgow und Fort William halten vor der Tür.',
    src: 'https://www.westhighlandwaysleeper.co.uk/', srcName: 'westhighlandwaysleeper.co.uk',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Bridge_of_Orchy_Station_-_geograph.org.uk_-_5709276.jpg/1280px-Bridge_of_Orchy_Station_-_geograph.org.uk_-_5709276.jpg', credit: '© Euan Nelson, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'whw-5', type: 'camp', name: 'Tyndrum Holiday Park (ehem. Pine Trees)', lat: 56.433, lng: -4.7076,
    text: 'Großer Platz am Nordausgang von Tyndrum, direkt am Weg — mit WHW-Passport-Stempelstelle, Zeltwiesen, Hiker-Pods (teils en suite) und Shop. Im Bach durch den Platz kann man Gold waschen. Tyndrum ist mit Green Welly Stop und Real Food Café der letzte große Versorgungspunkt — für August früh buchen.',
    src: 'https://highlandholidays.com/parks/tyndrum/', srcName: 'highlandholidays.com',
    photos: [{ url: 'https://www.westhighlandway.org/wp-content/uploads/2023/06/View_TWI2733-1024x683.jpg', credit: '© westhighlandway.org' }]
  },
  {
    stage: 'whw-5', type: 'wild', name: 'Auch Gleann / Allt Kinglass (Horseshoe-Viadukt)', lat: 56.4876, lng: -4.7065,
    text: 'Klassischer Wildzelt-Abschnitt auf halber Etappe: Grasflächen am Allt Kinglass mit Blick auf das Horseshoe-Curve-Viadukt der West Highland Line. Legal nach Outdoor Access Code, Wasser aus dem Fluss. Im August windexponierte Stellen wählen — Midge-Alarm in den Senken.',
    src: 'https://www.westhighlandway.org/wild-camping/', srcName: 'westhighlandway.org',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Auch_Viaduct_-_geograph.org.uk_-_3932502.jpg/1280px-Auch_Viaduct_-_geograph.org.uk_-_3932502.jpg', credit: '© Alan O\'Dowd, geograph.org.uk, CC BY-SA 2.0' }]
  },

  /* ---------- whw-5.5 ---------- */
  {
    stage: 'whw-5.5', type: 'roof', name: 'Inveroran Hotel', lat: 56.5329, lng: -4.8074,
    text: 'Abgeschiedenes Drover-Gasthaus aus dem 19. Jahrhundert am Loch Tulla mit 9 Zimmern, Walkers\' Bar mit Abendessen und kleinem Shop für Snacks. Kaum Handyempfang. Saison ca. Ende März bis Mitte Oktober — einer der begehrtesten Stopps am WHW, Monate im Voraus buchen.',
    src: 'https://www.inveroran.com/', srcName: 'inveroran.com',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Approaching_the_Inveroran_Hotel_-_geograph.org.uk_-_4965172.jpg/1280px-Approaching_the_Inveroran_Hotel_-_geograph.org.uk_-_4965172.jpg', credit: '© Tim Heaton, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'whw-5.5', type: 'wild', name: 'Victoria Bridge / Forest Lodge', lat: 56.5398, lng: -4.8225,
    text: 'Wildzelt-Klassiker: flache Wiesen an der Abhainn Shira bei Victoria Bridge, nur 10 Gehminuten hinter dem Inveroran Hotel — Abendessen und Bier in dessen Walkers\' Bar. Wasser aus dem Fluss, kein Service. Im August Stellen mit Brise wählen, die Midges sind hier berüchtigt.',
    src: 'https://www.westhighlandway.org/wild-camping/', srcName: 'westhighlandway.org',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Abhainn_Shira_-_geograph.org.uk_-_919849.jpg', credit: '© Richard Webb, geograph.org.uk, CC BY-SA 2.0' }]
  },

  /* ---------- whw-6 ---------- */
  {
    stage: 'whw-6', type: 'roof', name: 'Glencoe Mountain Microlodges', lat: 56.6318, lng: -4.8262,
    text: '16 „Hobbit“-Microlodges für 4–6 Personen mit Strom und Matratzen — Schlafsack mitbringen (Leihgebühr £5). Ab 2026 zusätzlich neue En-suite-Eco-Lodges mit WC und Waschbecken. Check-in ab 15 Uhr, Café an der Talstation; Buchung telefonisch (01855 851226).',
    src: 'https://www.glencoemountain.co.uk/accommodation/', srcName: 'glencoemountain.co.uk',
    photos: [{ url: 'https://www.glencoemountain.co.uk/wp-content/gallery/lodges/Glencoe-Mountain-Hobbits-Outside.jpg', credit: '© Glencoe Mountain Resort' }]
  },
  {
    stage: 'whw-6', type: 'roof', name: 'Kingshouse Hotel & Bunkhouse', lat: 56.6515, lng: -4.8413,
    text: 'Das 2019 neu eröffnete Kingshouse hat neben Hotelzimmern einen eigenen Bunkhouse-Trakt: Betten in 2er-, 4er- und 6er-Zimmern ab £44 (£54 mit Frühstück), Bettwäsche inklusive, Gemeinschaftsküche, Trockenraum und Münz-Waschmaschine. Bar und Restaurant im Haupthaus — die einzige Einkehr zwischen Inveroran und Kinlochleven.',
    src: 'https://www.kingshousehotel.co.uk/bunkhouse', srcName: 'kingshousehotel.co.uk',
    photos: [{ url: 'https://www.kingshousehotel.co.uk/media/euwneaqg/kinghouse-hotel-entrance-at-night.jpg', credit: '© Kingshouse Hotel' }, { url: 'https://www.kingshousehotel.co.uk/media/ilobpudq/bunkhouse-boots.jpg', credit: '© Kingshouse Hotel' }]
  },
  {
    stage: 'whw-6', type: 'camp', name: 'Glencoe Mountain Resort Camping', lat: 56.6325, lng: -4.8271,
    text: 'Einfacher, halbwilder Zeltplatz an der Talstation des Skigebiets, ca. 2 km abseits des Weges: Platz für rund 20 Zelte, Duschen (£1/5 Min.), Trockenraum und Café täglich 8–20 Uhr. Ganzjährig geöffnet; der Citylink 915 hält am Resort.',
    src: 'https://www.glencoemountain.co.uk/accommodation/', srcName: 'glencoemountain.co.uk',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Cafe_at_Glencoe_Mountain_Resort_-_geograph.org.uk_-_7242759.jpg/1280px-Cafe_at_Glencoe_Mountain_Resort_-_geograph.org.uk_-_7242759.jpg', credit: '© Jim Smillie, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'whw-6', type: 'wild', name: 'Ba Bridge (Rannoch Moor)', lat: 56.5954, lng: -4.809,
    text: 'Einsamster Punkt des ganzen Weges mitten im Rannoch Moor: geschützte Grasflächen an der alten Militärstraßen-Brücke über den River Ba. Kein Handyempfang, Wasser aus dem Fluss. Bei Wind herrlich midge-frei, bei Flaute im August besser weiterziehen.',
    src: 'https://www.westhighlandway.org/wild-camping/', srcName: 'westhighlandway.org',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/On_the_great_Moor_of_Rannoch_near_to_Ba_Bridge_-_geograph.org.uk_-_8263036.jpg/1280px-On_the_great_Moor_of_Rannoch_near_to_Ba_Bridge_-_geograph.org.uk_-_8263036.jpg', credit: '© Iain Lees, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'whw-6', type: 'wild', name: 'Kingshouse Wildzelt-Wiese', lat: 56.6521, lng: -4.8408,
    text: 'Traditionelle, geduldete Zeltwiese am River Etive direkt hinter dem Kingshouse Hotel mit Blick auf den Buachaille Etive Mòr. Abends schaut zutrauliches Rotwild vorbei — Essen unbedingt sicher verstauen. Toiletten und Bar im Hotel; im August viel los.',
    src: 'https://www.westhighlandway.org/wild-camping/', srcName: 'westhighlandway.org',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/A_deer_in_the_Kingshouse_Hotel_campsite.jpg/1280px-A_deer_in_the_Kingshouse_Hotel_campsite.jpg', credit: '© Andrew Bowden, Wikimedia Commons, CC BY-SA 2.0' }]
  },

  /* ---------- whw-7 ---------- */
  {
    stage: 'whw-7', type: 'roof', name: 'West Highland Lodge Bunkhouse (Kinlochleven)', lat: 56.7115, lng: -4.9626,
    text: 'Bunkhouse in Hanglage über Kinlochleven mit Blick auf die Mamores (gleiche Betreiber wie das Blackwater Hostel): 8 private Mehrbettzimmer für bis zu 32 Personen, ab ca. £25 p. P. Selbstversorgerküche, TV-Raum, Trockenraum und WLAN — 5 Minuten vom Dorfzentrum.',
    src: 'https://blackwaterhostel.co.uk/west-highland-lodge/', srcName: 'blackwaterhostel.co.uk',
    photos: [{ url: 'https://www.westhighlandway.org/wp-content/uploads/2021/10/West-Highland-Lodge-Hostel-1024x683.jpg', credit: '© westhighlandway.org' }]
  },
  {
    stage: 'whw-7', type: 'roof', name: 'Tailrace Inn (Kinlochleven)', lat: 56.715, lng: -4.9638,
    text: 'Pub mit 6 Zimmern mitten in Kinlochleven: Frühstück ab 7 Uhr, durchgehend warme Küche bis 20:30, Bar bis Mitternacht. Unkomplizierte, online buchbare Basis vor der langen Schlussetappe nach Fort William.',
    src: 'https://thetailraceinn.co.uk/', srcName: 'thetailraceinn.co.uk',
    photos: [{ url: 'https://thetailraceinn.co.uk/wp-content/uploads/2024/07/11320-The-Tailrace-Inn-025-scaled-1.jpg', credit: '© Tailrace Inn' }]
  },
  {
    stage: 'whw-7', type: 'camp', name: 'Red Squirrel Campsite (Glencoe)', lat: 56.6695, lng: -5.0703,
    text: 'Weitläufiger, naturbelassener Platz am River Coe bei Glencoe Village — rund 10 km abseits der Route, per Citylink 915 ab Kingshouse/Glencoe Crossroads erreichbar. £15 p. P., ganzjährig geöffnet; Lagerfeuer in leihbaren Feuerschalen erlaubt, an vielen Wochenenden Foodtruck.',
    src: 'https://redsquirrelcampsite.co.uk/', srcName: 'redsquirrelcampsite.co.uk',
    photos: [{ url: 'https://redsquirrelcampsite.co.uk/wp-content/uploads/2019/01/red-squirrel-gallery-14.jpg', credit: '© Red Squirrel Campsite' }]
  },
  {
    stage: 'whw-7', type: 'camp', name: 'Blackwater Hostel & Campsite (Kinlochleven)', lat: 56.7145, lng: -4.9604,
    text: 'Erste Unterkunft am Ortseingang von Kinlochleven, am River Leven nur 200 m vom Zentrum (Co-op!): Zeltplätze (max. 2-Personen-Zelte), Glamping-Pods und TentBoxen (ab £34), dazu Hostel mit En-suite-Zimmern. Duschen, Küche und WLAN; das Ice-Factor-Kletterzentrum zu Fuß erreichbar.',
    src: 'https://blackwaterhostel.co.uk/', srcName: 'blackwaterhostel.co.uk',
    photos: [{ url: 'https://blackwaterhostel.co.uk/wp-content/uploads/2018/10/blackwater_hostel_home_camping_feature.jpg', credit: '© Blackwater Hostel' }]
  },
  {
    stage: 'whw-7', type: 'camp', name: 'MacDonald Hotel & Cabins (Kinlochleven)', lat: 56.7164, lng: -4.9719,
    text: 'Camping und einfache Holz-Cabins auf der Wiese hinter dem Hotel, direkt am WHW mit Blick auf Loch Leven; Sanitärgebäude mit Duschen und Selbstversorger-Ecke. Im Bothy Bar gibt es Abendessen — vorher reservieren. Für die Komfort-Variante: 10 En-suite-Hotelzimmer.',
    src: 'https://www.macdonaldhotel.co.uk/', srcName: 'macdonaldhotel.co.uk',
    photos: [{ url: 'https://macdonaldhotel.co.uk/wp-content/uploads/2023/07/001-MacDonald-Hotel-Kinlochleven-Campsite-1200x896-1.webp', credit: '© MacDonald Hotel' }]
  },
  {
    stage: 'whw-7', type: 'wild', name: 'Oberhalb Devil\'s Staircase', lat: 56.675, lng: -4.9146,
    text: 'Kleine ebene Flächen am höchsten Punkt des WHW (548 m) oberhalb der Teufelstreppe, mit Panorama auf Glencoe und die Mamores. Sehr exponiert — nur bei stabilem Wetter zelten, dafür hält der Wind meist die Midges fern. Wasser vorher an den Bächen am Anstieg fassen.',
    src: 'https://www.westhighlandway.org/wild-camping/', srcName: 'westhighlandway.org',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/2011_Argyllshire_Devil%27s_Staircase_cairn_27-05-2011_13-28-34.jpg/1280px-2011_Argyllshire_Devil%27s_Staircase_cairn_27-05-2011_13-28-34.jpg', credit: '© Paul Hermans, Wikimedia Commons, CC BY-SA 3.0' }]
  },

  /* ---------- whw-8 ---------- */
  {
    stage: 'whw-8', type: 'roof', name: 'Glen Nevis Youth Hostel (Hostelling Scotland)', lat: 56.7997, lng: -5.0676,
    text: 'Hostelling-Scotland-Haus direkt am River Nevis gegenüber dem Ben-Nevis-Aufstieg — letzter Schlafplatz an der Strecke vor dem Zieleinlauf in Fort William. Private Zimmer und Schlafsäle, Selbstversorgerküche und Trockenraum; für August früh buchen.',
    src: 'https://www.hostellingscotland.org.uk/hostels/glen-nevis/', srcName: 'hostellingscotland.org.uk',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Glen_Nevis_Youth_Hostel_-_geograph.org.uk_-_5053961.jpg/1280px-Glen_Nevis_Youth_Hostel_-_geograph.org.uk_-_5053961.jpg', credit: '© Tim Heaton, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'whw-8', type: 'camp', name: 'Glen Nevis Caravan & Camping Park', lat: 56.8045, lng: -5.0747,
    text: 'Riesiger, preisgekrönter Platz im Talgrund mit Ben-Nevis-Blick, ca. 3 km vor dem offiziellen Endpunkt in Fort William: fünf Zeltwiesen, gut sortierter Shop, Restaurant und Bar nebenan. Ganzjährig geöffnet — im August trotzdem reservieren (01397 702191). Gute letzte Nacht vor dem CWT-Start.',
    src: 'https://www.glen-nevis.co.uk/campsite', srcName: 'glen-nevis.co.uk',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Glen_Nevis_camping_park_-_geograph.org.uk_-_992883.jpg/500px-Glen_Nevis_camping_park_-_geograph.org.uk_-_992883.jpg', credit: '© Johnny Durnan, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'whw-8', type: 'wild', name: 'Lairigmor (Tigh-na-sleubhaich)', lat: 56.733, lng: -5.0475,
    text: 'Weite, einsame Passlandschaft des Lairigmor: Zeltmöglichkeiten auf Grasflächen rund um die Ruine Tigh-na-sleubhaich am alten Militärweg — die letzte gute Wildzelt-Option vor Fort William. Bachwasser vorhanden, bei Westwind sehr exponiert.',
    src: 'https://www.westhighlandway.org/wild-camping/', srcName: 'westhighlandway.org',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Tigh-na-sleubhaich._-_geograph.org.uk_-_4077308.jpg/1280px-Tigh-na-sleubhaich._-_geograph.org.uk_-_4077308.jpg', credit: '© Peter S, geograph.org.uk, CC BY-SA 2.0' }]
  },

  /* ---------- cwt-1 ---------- */
  {
    stage: 'cwt-1', type: 'roof', name: 'Stage House Glenfinnan (ehem. Prince\'s House)', lat: 56.8732, lng: -5.4531,
    text: 'Seit März 2025 führen zwei Schwestern das frühere Prince\'s House Hotel als B&B mit 9 Zimmern – 100 m nach dem Bahnhof Glenfinnan direkt an der A830. Nur Frühstück (im Preis), Lunchpakete auf Anfrage; Abendessen gibt es im Glenfinnan House Hotel im Ort.',
    src: 'https://www.glenfinnan.co.uk/', srcName: 'glenfinnan.co.uk',
    photos: [{ url: 'https://www.glenfinnan.co.uk/wp-content/uploads/2025/05/Stage-House-Glenfinnan-Home-Exterior-b.webp', credit: '© Stage House Glenfinnan' }]
  },
  {
    stage: 'cwt-1', type: 'wild', name: 'Cona Glen', lat: 56.777, lng: -5.25,
    text: 'Viele ebene Grasflächen am Cona River im stillen Estate-Tal, Wasser überall. Am besten einige Kilometer hinein, bis das Tal breiter wird – Rotwild fast garantiert.',
    src: 'https://capewrathtrailguide.org/route/fort-william-glenfinnan', srcName: 'capewrathtrailguide.org',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Cona_Glen_-_geograph.org.uk_-_5687119.jpg/960px-Cona_Glen_-_geograph.org.uk_-_5687119.jpg', credit: '© Richard Webb, geograph.org.uk, CC BY-SA 2.0' }]
  },

  /* ---------- cwt-2 ---------- */
  {
    stage: 'cwt-2', type: 'bothy', name: 'Corryhully Bothy', lat: 56.9042, lng: -5.4299,
    text: 'Offenes Estate-Bothy des Glenfinnan Estate („electric bothy“ – Licht + Steckdose!) mit ebenen Zeltflächen am Fluss, oft liegt Feuerholz bereit. 4 km hinter Glenfinnan, guter Puffer, wenn man spät ankommt.',
    src: 'https://capewrathtrailguide.org/route/glenfinnan-glendessarry', srcName: 'capewrathtrailguide.org',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Corryhully_bothy_-_geograph.org.uk_-_5886545.jpg/1280px-Corryhully_bothy_-_geograph.org.uk_-_5886545.jpg', credit: '© Alan Reid, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'cwt-2', type: 'bothy', name: 'Glenpean Bothy (MBA)', lat: 56.9591, lng: -5.3954,
    text: 'MBA-Bothy im Glen Pean, gut 2 km südwestlich von Strathan – ruhiges Ausweichquartier fürs Etappenende, wenn man nicht bei Strathan zelten will. Schlafplattform und Ofen; Brennmaterial mitbringen.',
    src: 'https://www.mountainbothies.org.uk/bothies/western-highlands-islands/glenpean/', srcName: 'Mountain Bothies Association',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Glenpean_Bothy_-_geograph.org.uk_-_7795285.jpg/1280px-Glenpean_Bothy_-_geograph.org.uk_-_7795285.jpg', credit: '© Ben Thompson, geograph.org.uk, CC BY-SA 2.0' }]
  },

  /* ---------- cwt-3 ---------- */
  {
    stage: 'cwt-3', type: 'camp', name: 'Barrisdale Bay (Zeltwiese, £)', lat: 57.079, lng: -5.513,
    text: 'Ausgewiesene Estate-Zeltwiese direkt neben dem Bothy: £5 p. P./Nacht in die Honesty Box im Bothy, Mitnutzung von WC und kaltem Wasser. Traumlage an der Bucht unter Ladhar Bheinn; Wasser abkochen/filtern, Müll komplett mitnehmen.',
    src: 'https://www.barrisdaleestate.com/the-campsite', srcName: 'Barrisdale Estate',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Tents_and_bothy_at_Barrisdale%2C_1991_-_geograph.org.uk_-_7068155.jpg/1280px-Tents_and_bothy_at_Barrisdale%2C_1991_-_geograph.org.uk_-_7068155.jpg', credit: '© Trevor Littlewood, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'cwt-3', type: 'bothy', name: 'A\' Chùil Bothy (Glen Dessarry, MBA)', lat: 56.9774, lng: -5.3839,
    text: 'MBA-Bothy am Waldrand von Glen Dessarry, knapp eine Stunde hinter Strathan – perfekt, um Etappe 2 zu verlängern oder Etappe 3 früh zu starten. Zwei Räume mit offenen Kaminen, Schlafplattformen und Kompost-WC; Totholz aus dem Wald erlaubt. Beliebt und klein – Zelt als Backup.',
    src: 'https://www.mountainbothies.org.uk/bothies/western-highlands-islands/achuil/', srcName: 'Mountain Bothies Association',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/A%27_Ch%C3%B9il_Bothy_-_geograph.org.uk_-_6450788.jpg/1280px-A%27_Ch%C3%B9il_Bothy_-_geograph.org.uk_-_6450788.jpg', credit: '© Colin Kinnear, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'cwt-3', type: 'bothy', name: 'Barisdale Bothy (£)', lat: 57.0788, lng: -5.5127,
    text: 'Privates Estate-Bothy („White House“) mit 12 Schlafplätzen in zwei Bunkräumen, 2 WCs, kaltem Wasser und Strom – Luxus für Knoydart. £5 p. P./Nacht in die Honesty Box, first come, first served (keine Reservierung); wenn voll, nebenan zelten.',
    src: 'https://www.barrisdaleestate.com/the-bothy', srcName: 'Barrisdale Estate',
    photos: [{ url: 'https://images.squarespace-cdn.com/content/v1/5856a80c2e69cfba3cc7205b/1714382659587-4R3O6HUGK48GWMV5L9DO/20240429_100843.jpg', credit: '© Barrisdale Estate' }, { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Farm_buildings_and_bothy%2C_Barrisdale_-_geograph.org.uk_-_1960290.jpg/960px-Farm_buildings_and_bothy%2C_Barrisdale_-_geograph.org.uk_-_1960290.jpg', credit: '© Nic Bullivant, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'cwt-3', type: 'wild', name: 'Sourlies / River Carnach', lat: 57.01, lng: -5.512,
    text: 'Wiesen am kleinen MBA-Bothy Sourlies und flussauf am River Carnach. Direkt hinter Sourlies führt der Weg ums Ufer – bei Flut ist die Umgehung der Landzunge überspült, dann über den Felsrücken klettern oder Ebbe abwarten. Gute Nachricht: Über den River Carnach gibt es inzwischen eine neue Fußgängerbrücke – die früher gefürchtete Furt entfällt.',
    src: 'https://www.mountainbothies.org.uk/bothies/western-highlands-islands/sourlies/', srcName: 'Mountain Bothies Association',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Sourlies_Bothy_-_geograph.org.uk_-_6450744.jpg/1280px-Sourlies_Bothy_-_geograph.org.uk_-_6450744.jpg', credit: '© Colin Kinnear, geograph.org.uk, CC BY-SA 2.0' }]
  },

  /* ---------- cwt-4 ---------- */
  {
    stage: 'cwt-4', type: 'roof', name: 'Lochhournhead B&B & Tea Room (Kinloch Hourn Farm)', lat: 57.1049, lng: -5.3852,
    text: 'Kleines B&B („The Stables“) plus Self-Catering-Cottage der Familie Gordon direkt am Etappenziel, Saison ca. April–Oktober. Trockenraum, Frühstück, auf Vorbestellung Abendessen und Lunchpakete – vorab buchen (07904 127142).',
    src: 'https://lochhournhead.co.uk/', srcName: 'lochhournhead.co.uk',
    photos: [{ url: 'https://lochhournhead.co.uk/wp-content/uploads/2023/03/Home-Page.jpg', credit: '© Lochhournhead' }]
  },
  {
    stage: 'cwt-4', type: 'camp', name: 'Kinloch Hourn Zeltwiese (£)', lat: 57.1046, lng: -5.3857,
    text: 'Zelten auf der Wiese beim Farmhaus am Ende der Single-Track-Road – Bezahlung per Honesty Box, kontaktlos geht im Tea Room. Der Tea Room (tagsüber offen) rettet mit Tee, Suppe und Kuchen; Wasser vor Ort.',
    src: 'https://lochhournhead.co.uk/', srcName: 'lochhournhead.co.uk',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Kinloch_Hourn_-_geograph.org.uk_-_2419225.jpg/1280px-Kinloch_Hourn_-_geograph.org.uk_-_2419225.jpg', credit: '© Glen Breaden, geograph.org.uk, CC BY-SA 2.0' }]
  },

  /* ---------- cwt-4.5 ---------- */
  {
    stage: 'cwt-4.5', type: 'roof', name: 'Ratagan Youth Hostel (Hostelling Scotland)', lat: 57.2224, lng: -5.4475,
    text: 'Hostel in Traumlage am Loch Duich mit Blick auf die Five Sisters, ca. 2 km vom CWT bei Shiel Bridge (Saison ca. April–Okt). Dorms und Privatzimmer, große Küche, Trockenraum, Basics und Fertiggerichte an der Rezeption – online buchen.',
    src: 'https://www.hostellingscotland.org.uk/hostels/ratagan/', srcName: 'Hostelling Scotland',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Ratagan_Youth_Hostel_-_geograph.org.uk_-_5707217.jpg/1280px-Ratagan_Youth_Hostel_-_geograph.org.uk_-_5707217.jpg', credit: '© Richard Sutcliffe, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'cwt-4.5', type: 'roof', name: 'Kintail Lodge Hotel (Invershiel)', lat: 57.2206, lng: -5.4178,
    text: 'Hotel direkt an der Route am Loch Duich mit Bar-Restaurant und Imbiss „Wee Bun House“ – ideal für ein richtiges Abendessen. Achtung: Die früheren Budget-Optionen Trekkers\' Lodge und Wee Bunkhouse werden nicht mehr angeboten, es gibt nur noch Hotelzimmer.',
    src: 'https://www.kintaillodgehotel.co.uk/', srcName: 'kintaillodgehotel.co.uk',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kintail_Lodge_Hotel_-_geograph.org.uk_-_2367859.jpg/1280px-Kintail_Lodge_Hotel_-_geograph.org.uk_-_2367859.jpg', credit: '© Glen Breaden, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'cwt-4.5', type: 'camp', name: 'Glenshiel Campsite (Shiel Bridge)', lat: 57.2117, lng: -5.4162,
    text: 'Unabhängiger Platz an der Schule von Shiel Bridge unter den Five Sisters, Zelte willkommen (März–Ende Okt). Duschen, Spülraum und Trockenbereich rund um die Uhr; Tankstellen-Laden 300 m, Bus 915 hält im Ort.',
    src: 'https://glenshielcampsite.co.uk/', srcName: 'glenshielcampsite.co.uk',
    photos: [{ url: 'https://glenshielcampsite.co.uk/wp-content/uploads/2022/08/Glensheil-Campsite-001A.jpg', credit: '© Glenshiel Campsite' }, { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Shiel_Bridge_campsite_-_geograph.org.uk_-_1962556.jpg/960px-Shiel_Bridge_campsite_-_geograph.org.uk_-_1962556.jpg', credit: '© Nic Bullivant, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'cwt-4.5', type: 'camp', name: 'Morvich (Caravan & Motorhome Club)', lat: 57.227, lng: -5.401,
    text: 'Gepflegter Club-Platz mit Zeltbereich, Duschen und Trockenraum – liegt direkt am CWT-Weiterweg durch Strath Croe (Nichtmitglieder-Aufschlag, Saison ca. März–Nov).',
    src: 'https://www.experiencefreedom.co.uk/locations/regions/scotland/highlands/morvich/', srcName: 'Caravan & Motorhome Club',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Morvich_Caravan_Club_Site_-_geograph.org.uk_-_4755192.jpg/1280px-Morvich_Caravan_Club_Site_-_geograph.org.uk_-_4755192.jpg', credit: '© Jo and Steve Turner, geograph.org.uk, CC BY-SA 2.0' }]
  },

  /* ---------- cwt-5 ---------- */
  {
    stage: 'cwt-5', type: 'bothy', name: 'Camban Bothy (Fionngleann, Alternativroute)', lat: 57.2153, lng: -5.2251,
    text: 'MBA-Bothy auf NTS-Land (West Affric) im Fionngleann – liegt auf der Glen-Affric-Alternative via Gleann Lichd/Alltbeithe statt Falls of Glomach. Zwei große Räume mit Schlafplattformen für 8+, Multifuel-Ofen; Brennmaterial mitbringen.',
    src: 'https://www.mountainbothies.org.uk/bothies/north-west-highlands-islands/camban/', srcName: 'Mountain Bothies Association',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Camban_Bothy_-_geograph.org.uk_-_5649825.jpg/1280px-Camban_Bothy_-_geograph.org.uk_-_5649825.jpg', credit: '© Richard Sutcliffe, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'cwt-5', type: 'bothy', name: 'Maol-bhuidhe Bothy', lat: 57.3732, lng: -5.239,
    text: 'Eines der abgelegensten Bothies Schottlands (MBA-gepflegt, Killilan Estate), ebene Zeltflächen am Fluss; kein Netz, kein Brennmaterial. Wichtig für September: Während der Hirschjagd (Herbst) ist das Bothy nicht verfügbar – vorher beim Estate anfragen und Zelt einplanen. Bothy Code: sauber hinterlassen, klein zelten.',
    src: 'https://www.mountainbothies.org.uk/bothies/north-west-highlands-islands/maol-bhuidhe/', srcName: 'Mountain Bothies Association',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Maol-bhuidhe_bothy_-_geograph.org.uk_-_2704672.jpg/1280px-Maol-bhuidhe_bothy_-_geograph.org.uk_-_2704672.jpg', credit: '© Craig Wallace, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'cwt-5', type: 'wild', name: 'Loch na Leitreach', lat: 57.277, lng: -5.289,
    text: 'Flache Uferwiesen unterhalb der Falls of Glomach bei Carnach – ruhig, viel Wasser. Wer die Wasserfall-Schlucht erst morgens gehen will, übernachtet besser noch davor (der Pfad an der Glomach-Schlucht ist ausgesetzt und bei Nässe heikel).',
    src: 'https://www.walkhighlands.co.uk/cape-wrath-trail.shtml', srcName: 'walkhighlands',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Loch_na_Leitreach_-_geograph.org.uk_-_4695890.jpg/960px-Loch_na_Leitreach_-_geograph.org.uk_-_4695890.jpg', credit: '© Alan Reid, geograph.org.uk, CC BY-SA 2.0' }]
  },

  /* ---------- cwt-6 ---------- */
  {
    stage: 'cwt-6', type: 'roof', name: 'Gerry\'s Hostel (Craig, Achnashellach)', lat: 57.4909, lng: -5.2744,
    text: 'Schottlands ältestes unabhängiges Hostel, direkt am Etappenziel in Craig – ganzjährig offen, Hauptdorm 10 Betten plus Familienzimmer, Selbstversorgerküche und Lounge mit Feuer. Vorab über die Website oder Tel. 01520 766232 reservieren; kein Laden vor Ort, Proviant mitbringen.',
    src: 'https://gerryshostel.com/', srcName: 'gerryshostel.com',
    photos: [{ url: 'https://gerryshostel.com/wp-content/uploads/2019/06/img_3592.jpg', credit: '© Gerry\'s Hostel' }]
  },
  {
    stage: 'cwt-6', type: 'bothy', name: 'Bendronaig Lodge Bothy', lat: 57.3965, lng: -5.3076,
    text: 'Estate-Bothy (Attadale) mit (!) Spültoilette – Spülkasten per Eimer aus dem Bach füllen. Kurz abseits der Route vor dem Bealach Bhearnais, Zeltwiesen am Fluss; gute Option, wenn Craig zu weit wird.',
    src: 'https://capewrathtrailguide.org/route/shiel-bridge-strathcarron', srcName: 'capewrathtrailguide.org',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Bendronaig_Lodge%2C_the_bothy_-_geograph.org.uk_-_8128973.jpg/1280px-Bendronaig_Lodge%2C_the_bothy_-_geograph.org.uk_-_8128973.jpg', credit: '© Trevor Littlewood, geograph.org.uk, CC BY-SA 2.0' }]
  },

  /* ---------- cwt-7 ---------- */
  {
    stage: 'cwt-7', type: 'roof', name: 'Kinlochewe Hotel & Bunkhouse', lat: 57.6041, lng: -5.3006,
    text: 'Hotel mit günstigem 12-Betten-Bunkhouse (Selbstversorgerküche, Trockenraum) am Etappenziel; Bar-Meals und Real Ales im Haus (01445 760253). Im Ort außerdem Whistle Stop Café und ein kleiner Laden mit Tankstelle zum Aufstocken der Vorräte.',
    src: 'https://www.kinlochewehotel.co.uk/', srcName: 'kinlochewehotel.co.uk',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Kinlochewe_Hotel_-_geograph.org.uk_-_7467755.jpg', credit: '© Eirian Evans, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'cwt-7', type: 'camp', name: 'Beinn Eighe Campsite Taagan (Kinlochewe)', lat: 57.6198, lng: -5.3279,
    text: 'Kleiner, kostenloser Basis-Zeltplatz des Beinn Eighe National Nature Reserve bei Taagan Farm, ca. 2,5 km vor Kinlochewe Richtung Loch Maree. Keine Reservierung (first come, first served), nur einfachste Ausstattung – Einkauf und Essen dann in Kinlochewe.',
    src: 'https://capewrathtrailguide.org/accommodation/kinlochewe', srcName: 'Cape Wrath Trail Guide',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/4/40/The_campsite_at_Taagan_-_geograph.org.uk_-_490948.jpg', credit: '© Nigel Brown, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'cwt-7', type: 'bothy', name: 'Coire Fionnaraich Bothy', lat: 57.4762, lng: -5.42,
    text: 'Ehemaliges Stalker-Cottage aus dem 19. Jh. (MBA) im Coire Fionnaraich nördlich von Coulags – liegt auf der Strathcarron-Variante des CWT, nicht auf der Coulin-Pass-Route ab Craig. Mehrere Räume und Schlafplattform; wegen Hirschjagd 20.9.–20.10. geschlossen.',
    src: 'https://www.mountainbothies.org.uk/bothies/north-west-highlands-islands/coire-fionnaraich/', srcName: 'Mountain Bothies Association',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Coire_Fionnaraich_bothy_-_geograph.org.uk_-_7482922.jpg', credit: '© Jim Barton, geograph.org.uk, CC BY-SA 2.0' }]
  },

  /* ---------- cwt-8 ---------- */
  {
    stage: 'cwt-8', type: 'bothy', name: 'Shenavall Bothy / Strath na Sealga', lat: 57.7773, lng: -5.2532,
    text: 'Bekannte MBA-Bothy unterhalb von An Teallach, oft gut besucht – Zeltwiesen davor als Ausweichoption; Kultplatz der Great Wilderness. Wegen Hirschjagd 15.9.–20.10. gesperrt; die Furten über Abhainn Strath na Sealga und Abhainn Gleann na Muice direkt danach sind nach Regen gefährlich bis unpassierbar.',
    src: 'https://www.mountainbothies.org.uk/bothies/north-west-highlands-islands/shenavall/', srcName: 'Mountain Bothies Association',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Shenavall_Bothy_-_geograph.org.uk_-_2736130.jpg', credit: '© John Ferguson, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'cwt-8', type: 'wild', name: 'Wildzelt Loch an Nid', lat: 57.7198, lng: -5.2178,
    text: 'Klassischer Wildzelt-Spot des CWT: ebene Grasflächen am Ufer des Loch an Nid unter den Felswänden von Sgurr Bàn, auf dem Weg in die Great Wilderness. Wasser aus dem Abhainn Loch an Nid; kein Schutz bei Sturm – bei Schlechtwetter besser bis Shenavall weiterziehen.',
    src: 'https://www.walkhighlands.co.uk/cape-wrath-trail.shtml', srcName: 'Walkhighlands',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Loch_an_Nid_-_geograph.org.uk_-_1796040.jpg', credit: '© Richard Webb, geograph.org.uk, CC BY-SA 2.0' }]
  },

  /* ---------- cwt-9 ---------- */
  {
    stage: 'cwt-9', type: 'roof', name: 'The Dundonnell Hotel', lat: 57.8416, lng: -5.221,
    text: 'Familiengeführtes Hotel an der A832 am Little Loch Broom, ca. 2 km Abstecher von Corrie Hallie; Ensuite-Zimmer, Bar und Abendessen 18–20 Uhr, geöffnet März–Oktober (01854 633204). Das früher beliebte Sail Mhor Croft Hostel scheint dauerhaft geschlossen.',
    src: 'https://www.dundonnellhotel.co.uk/', srcName: 'dundonnellhotel.co.uk',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Dundonnell_Hotel_-_geograph.org.uk_-_7535803.jpg', credit: '© Chris Morgan, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'cwt-9', type: 'roof', name: 'Forest Way B&B & Bunkhouse (Lael/Inverlael)', lat: 57.7834, lng: -5.0388,
    text: 'Kleines B&B mit Bunkhouse in Lael an der A835, wenige Kilometer vom Etappenziel Inverlael – wirbt ausdrücklich um Cape-Wrath-Trail-Wanderer. Buchung über forestway.co.uk; Alternative im Tal: Clachan Farmhouse B&B (nimmt Versorgungspakete an, Trockenraum).',
    src: 'https://forestway.co.uk/', srcName: 'forestway.co.uk',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Inverlael_-_geograph.org.uk_-_231024.jpg', credit: '© Stuart Meek, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'cwt-9', type: 'camp', name: 'Ullapool: Broomfield Holiday Park & Youth Hostel (Abstecher)', lat: 57.8951, lng: -5.1648,
    text: 'Ullapool liegt ca. 10 km neben der Route (Bus/Trampen ab Inverlael an der A835) und ist der beste Versorgungsstopp der Mitte-Etappen: Tesco, Outdoor-Läden, Pubs. Übernachten am Wasser auf dem Broomfield Holiday Park (Zeltwiese, keine Reservierung nötig) oder im Ullapool Youth Hostel an der Shore Street.',
    src: 'https://www.hostellingscotland.org.uk/hostels/ullapool/', srcName: 'Hostelling Scotland',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Ullapool_harbour.jpg', credit: '© Victuallers, Wikimedia Commons, CC BY-SA 4.0' }]
  },

  /* ---------- cwt-10 ---------- */
  {
    stage: 'cwt-10', type: 'roof', name: 'Oykel Bridge Hotel', lat: 57.968, lng: -4.7324,
    text: 'Traditionsreiches Angler-Hotel direkt an der Brücke über den River Oykel, ganzjährig geöffnet – neben den Hotelzimmern gibt es einfachere, günstigere „Bothy Rooms“ für Wanderer. Bar mit warmem Essen (01549 441218). Letzte zuverlässige Einkehr vor Inchnadamph.',
    src: 'https://oykelbridgehotel.com/', srcName: 'oykelbridgehotel.com',
    photos: [{ url: 'https://oykelbridgehotel.com/wp-content/uploads/oykel-bridge-hotel-photo-49.jpg', credit: '© Oykel Bridge Hotel' }, { url: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Oykel_Bridge_Hotel_-_geograph.org.uk_-_4659273.jpg', credit: '© M J Richardson, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'cwt-10', type: 'bothy', name: 'Knockdamph Bothy / Loch an Daimh', lat: 57.9154, lng: -4.8942,
    text: 'MBA-Bothy am Ostende des Loch an Daimh mit Schlafplattform und offenem Kamin – Brennstoff selbst mitbringen. Wegen Hirschjagd 20.9.–20.10. gesperrt. 6 km weiter liegt das Schoolhouse-Bothy an der Duag Bridge.',
    src: 'https://www.mountainbothies.org.uk/bothies/north-west-highlands-islands/knockdamph/', srcName: 'Mountain Bothies Association',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Knockdamph_Bothy_-_geograph.org.uk_-_627864.jpg', credit: '© Anna and Goetz Gerhardt, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'cwt-10', type: 'bothy', name: 'The Schoolhouse Bothy (Duag Bridge)', lat: 57.9363, lng: -4.8046,
    text: 'Liebevoll restaurierte ehemalige Dorfschule (bis in die 1930er in Betrieb) an der Duag Bridge – holzvertäfelte Räume mit alten Schulbänken, aber kein Ofen. Während der Jagdsaison (1.9.–20.10.) auf den Haupttracks bleiben. Von hier nur noch ca. 8 km Schotterstraße bis zum Oykel Bridge Hotel.',
    src: 'https://www.mountainbothies.org.uk/bothies/northern-highlands/schoolhouse-duag-bridge/', srcName: 'Mountain Bothies Association',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Duag_Bridge_-_geograph.org.uk_-_2705514.jpg', credit: '© Richard Webb, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'cwt-10', type: 'wild', name: 'Wildzelt Glen Douchary', lat: 57.8612, lng: -4.9438,
    text: 'Nach dem langen Anstieg von Inverlael über die Wasserscheide bietet das einsame Glen Douchary schöne Wildzelt-Plätze auf Grasterrassen am River Douchary, bevor der Pfad zum Loch an Daimh hinabführt. Wasser reichlich, völlig exponiert und weglos.',
    src: 'https://capewrathtrailguide.org/route/inverlael-oykel-bridge', srcName: 'Cape Wrath Trail Guide',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Looking_towards_Creag_Dhubh_from_Glen_Douchary_-_geograph.org.uk_-_2423557.jpg', credit: '© Rob Jayne, geograph.org.uk, CC BY-SA 2.0' }]
  },

  /* ---------- cwt-11 ---------- */
  {
    stage: 'cwt-11', type: 'roof', name: 'Inchnadamph Explorers Lodge', lat: 58.1508, lng: -4.9714,
    text: 'Hostel und B&B in der denkmalgeschützten ehemaligen Manse am Etappenziel: Schlafsäle, Privatzimmer, Selbstversorgerküche – ideale, günstige Basis unter Conival und Ben More Assynt. Buchung online (inchnadamph.com); kein Laden im Weiler, Vorräte vorher organisieren.',
    src: 'https://www.inchnadamph.com/', srcName: 'inchnadamph.com',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Inchnadamph.jpg', credit: 'W. L. Tarbert, Wikimedia Commons, Public Domain' }]
  },
  {
    stage: 'cwt-11', type: 'roof', name: 'Inchnadamph Hotel', lat: 58.1489, lng: -4.9719,
    text: 'Klassisches Highland-Hotel an der A837 am Loch Assynt, direkt gegenüber der Explorers Lodge – Zimmer mit Frühstück, Bar und Abendessen für den Zieltag der Mitte-Etappen (01571 822202).',
    src: 'https://www.inchnadamphhotel.com/', srcName: 'inchnadamphhotel.com',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Inchnadamph_Hotel_and_environs_-_geograph.org.uk_-_5882068.jpg', credit: '© Ibn Musa, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'cwt-11', type: 'wild', name: 'Wildzelt Loch Ailsh', lat: 58.0493, lng: -4.8525,
    text: 'Ebene, grasige Zeltplätze am Südufer des Loch Ailsh nahe der Zufahrt zur privaten Benmore Lodge – klassischer Übernachtungspunkt, bevor der Trail dem oberen River Oykel in den Kessel unter Ben More Assynt folgt. Auch entlang des River Oykel weitere Zeltmöglichkeiten.',
    src: 'https://capewrathtrailguide.org/route/oykel-bridge-inchnadamph', srcName: 'Cape Wrath Trail Guide',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Loch_Ailsh_-_geograph.org.uk_-_1135019.jpg', credit: '© AlastairG, geograph.org.uk, CC BY-SA 2.0' }]
  },

  /* ---------- cwt-12 ---------- */
  {
    stage: 'cwt-12', type: 'roof', name: 'Kylesku Hotel', lat: 58.2572, lng: -5.0183,
    text: 'Boutique-Hotel (Highland Coast Hotels) direkt am alten Fähranleger von Kylesku, bekannt für Fisch- und Meeresfrüchte-Restaurant mit Blick auf Loch Glendhu. Einzige bookbare Unterkunft am Etappenziel — früh reservieren, an der NC500 stark nachgefragt.',
    src: 'https://www.kyleskuhotel.co.uk/', srcName: 'kyleskuhotel.co.uk',
    photos: [{ url: 'https://www.highlandcoasthotels.com/assets/images/Kylesku/_1200x630_crop_center-center_82_none/Kylesku_Exterior.jpg?mtime=1737476230', credit: '© Highland Coast Hotels / kyleskuhotel.co.uk' }, { url: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Kylesku_Hotel_-_geograph.org.uk_-_4016680.jpg', credit: '© Jim Barton, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'cwt-12', type: 'bothy', name: 'Glencoul & Glendhu Bothy (MBA)', lat: 58.2283, lng: -4.9461,
    text: 'Zwei MBA-Bothies der Reay Forest Estate an den Fjordköpfen von Loch Glencoul und Loch Glendhu, je ca. 8 Schlafplätze auf Plattformen. Kein Brennholz außer Treibholz. Wichtig für August/September: In der Stalking-Saison (12. Aug.–20. Okt.) bittet die Estate um vorherigen Anruf (01971 500 221).',
    src: 'https://www.mountainbothies.org.uk/bothies/northern-highlands/glencoul/', srcName: 'Mountain Bothies Association',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/7/79/House_and_bothy%2C_Glencoul_%28geograph_4010388%29.jpg', credit: '© Jim Barton, geograph.org.uk, CC BY-SA 2.0' }, { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Glendhu_Bothy_-_geograph.org.uk_-_4009143.jpg/1280px-Glendhu_Bothy_-_geograph.org.uk_-_4009143.jpg', credit: '© Jim Barton, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'cwt-12', type: 'wild', name: 'Wildzelt Glen Coul (Stack of Glencoul)', lat: 58.229, lng: -4.948,
    text: 'Ebene Grasflächen am Flussdelta beim Kopf von Loch Beag nahe der Glencoul-Bothy, mit Blick Richtung Stack of Glencoul und Eas a\' Chual Aluinn (höchster Wasserfall GB). Wasser aus dem Fluss, bei Windstille starke Midges — Alternative ist die Bothy nebenan.',
    src: 'https://capewrathtrailguide.org/', srcName: 'Cape Wrath Trail Guide',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Stack_of_Glencoul_-_geograph.org.uk_-_5206818.jpg', credit: '© Jim Barton, geograph.org.uk, CC BY-SA 2.0' }]
  },

  /* ---------- cwt-13 ---------- */
  {
    stage: 'cwt-13', type: 'roof', name: 'Rhiconich Hotel', lat: 58.4239, lng: -4.9894,
    text: 'Kleines Highland-Hotel an der A838 am Kopf von Loch Inchard, direkt am Etappenziel. Zimmer mit Frühstück, Bar mit einfachen Gerichten — praktisch als einzige Unterkunft direkt in Rhiconich, vorab buchen.',
    src: 'https://www.rhiconichhotel.co.uk/', srcName: 'rhiconichhotel.co.uk',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Rhiconich_Hotel_-_geograph.org.uk_-_3684908.jpg/1280px-Rhiconich_Hotel_-_geograph.org.uk_-_3684908.jpg', credit: '© Tim Glover, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'cwt-13', type: 'wild', name: 'Wildzelt Loch Stack / Arkle', lat: 58.3378, lng: -4.9107,
    text: 'Flache Uferwiesen entlang des Nordwestufers von Loch Stack unterhalb der Quarzitflanken von Arkle, kurz nach Achfary. Wasser aus Zuflüssen, exponierte, aber grandiose Lage; Reay-Forest-Estate-Gebiet — Spuren vermeiden, in der Stalking-Saison abseits der Pfade diskret zelten.',
    src: 'https://capewrathtrailguide.org/', srcName: 'Cape Wrath Trail Guide',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Loch_Stack_and_Arkle_-_geograph.org.uk_-_6888682.jpg', credit: '© Richard Webb, geograph.org.uk, CC BY-SA 2.0' }]
  },

  /* ---------- cwt-14 ---------- */
  {
    stage: 'cwt-14', type: 'roof', name: 'Old School Restaurant & Rooms (Inshegra)', lat: 58.449, lng: -5.0023,
    text: 'Familiengeführtes Restaurant mit 6 Zimmern (teils en suite) in der alten Dorfschule von Inshegra an der B801 zwischen Rhiconich und Kinlochbervie — direkt an der Straßenetappe. Ganzjährig geöffnet, Restaurant ab 18 Uhr; Vorbuchung empfohlen (Tel. 01971 521383).',
    src: 'https://www.oldschoolhotel.co.uk/', srcName: 'oldschoolhotel.co.uk',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Cafe%2C_Inshegra_-_geograph.org.uk_-_6962589.jpg', credit: '© Richard Webb, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'cwt-14', type: 'roof', name: 'Kinlochbervie Hotel', lat: 58.4613, lng: -5.051,
    text: 'Hotel oberhalb des Fischereihafens von Kinlochbervie mit Restaurant und Bar, letzte größere Unterkunft vor Sandwood Bay und Cape Wrath. Im Ort gibt es zudem den Spar-Laden (London Stores, Badcall) — letzte Einkaufsmöglichkeit für Proviant bis Durness.',
    src: 'https://www.kinlochberviehotel.com/', srcName: 'kinlochberviehotel.com',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Kinlochbervie_Hotel_-_geograph.org.uk_-_819603.jpg', credit: '© Anne Burgess, geograph.org.uk, CC BY-SA 2.0' }, { url: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Kinlochbervie_Harbour_-_geograph.org.uk_-_442794.jpg', credit: '© Bob Jones, geograph.org.uk, CC BY-SA 2.0' }]
  },

  /* ---------- cwt-14.5 ---------- */
  {
    stage: 'cwt-14.5', type: 'camp', name: 'Sheigra Beach Honour Campsite', lat: 58.4954, lng: -5.11,
    text: 'Einfacher Zeltplatz (nur Zelte) der Crofter auf der Wiese über dem Sheigra-Strand am Ende der Straße hinter Blairmore, Bezahlung per Honesty Box. Sehr einfach ausgestattet, dafür Traumlage; ca. 2,5 km vom Blairmore-Parkplatz, wo der Pfad nach Sandwood Bay beginnt.',
    src: 'https://www.kinlochbervie.info/visitor-information', srcName: 'kinlochbervie.info',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Sheigra_Beach_-_geograph.org.uk_-_821519.jpg/500px-Sheigra_Beach_-_geograph.org.uk_-_821519.jpg', credit: '© Anne Burgess, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'cwt-14.5', type: 'bothy', name: 'Strathan Bothy (MBA)', lat: 58.5036, lng: -5.0103,
    text: 'Kleine, einfache MBA-Bothy im Strath Shinary südöstlich von Sandwood Loch — ruhige Ausweichoption, wenn die Bucht voll ist. Achtung: Die Hängebrücke über den Abhainn an t-Srathain ist eingestürzt, der Fluss muss gefurtet werden (bei Hochwasser problematisch).',
    src: 'https://www.mountainbothies.org.uk/bothies/northern-highlands/strathan/', srcName: 'Mountain Bothies Association',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Strath_Shinary%2C_Strathan_Bothy_and_Sandwood_Loch_-_geograph.org.uk_-_1253722.jpg', credit: '© Peter Aikman, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'cwt-14.5', type: 'wild', name: 'Oldshoremore Beach (Machair-Camping)', lat: 58.4787, lng: -5.0715,
    text: 'Toleriertes Zelten am Dünenrand des preisgekrönten Oldshoremore-Strands (handgemaltes „Camp Here“-Schild am Gatter). Am kleinen Parkplatz Toilettenblock mit Trinkwasser (ca. März–Okt.) — gute Alternative kurz vor dem Abzweig nach Sandwood Bay.',
    src: 'https://www.undiscoveredscotland.co.uk/kinlochbervie/oldshoremore/index.html', srcName: 'Undiscovered Scotland',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Oldshoremore_Beach_-_geograph.org.uk_-_443304.jpg', credit: '© Bob Jones, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'cwt-14.5', type: 'wild', name: 'Sandwood Bay Dünen (John Muir Trust)', lat: 58.533, lng: -5.0609,
    text: 'Klassischer Wildzelt-Spot in den Dünen hinter dem 2 km langen Strand mit Blick auf den Sea Stack Am Buachaille — Land des John Muir Trust, Wildzelten toleriert. Keine Einrichtungen; Süßwasser aus Sandwood Loch bzw. Bächen (filtern), bei Windstille massive Midges, alles wieder mitnehmen.',
    src: 'https://www.johnmuirtrust.org/trust-land/sandwood', srcName: 'John Muir Trust',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Beach%2C_Sandwood_Bay_-_geograph.org.uk_-_7872255.jpg/1280px-Beach%2C_Sandwood_Bay_-_geograph.org.uk_-_7872255.jpg', credit: '© Richard Webb, geograph.org.uk, CC BY-SA 2.0' }, { url: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/The_beach_and_dunes_at_Sandwood_Bay_-_geograph.org.uk_-_877064.jpg', credit: '© M J Richardson, geograph.org.uk, CC BY-SA 2.0' }]
  },

  /* ---------- cwt-15 ---------- */
  {
    stage: 'cwt-15', type: 'roof', name: 'Ozone Café & Bunkhouse (Cape Wrath Leuchtturm)', lat: 58.6255, lng: -4.9992,
    text: 'Café mit einfachem Bunkhouse im ehemaligen Maschinenhaus (1905) direkt am Cape-Wrath-Leuchtturm — nach eigener Angabe 365 Tage im Jahr geöffnet; Übernachtung telefonisch buchen (01971 511 314). Perfekt, um das Trail-Ende zu feiern; weiter nach Durness per Minibus und Keoldale-Fähre (ca. Mai–Sep., gezeiten-, wetter- und MOD-abhängig).',
    src: 'https://www.visitcapewrath.com/around-cape-wrath/ozone-cafe/', srcName: 'visitcapewrath.com',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Cape_Wrath_Lighthouse_-_geograph.org.uk_-_6437064.jpg', credit: '© Colin Park, geograph.org.uk, CC BY-SA 2.0' }, { url: 'https://www.visitcapewrath.com/s/img/emotionheader.jpg', credit: '© visitcapewrath.com' }]
  },
  {
    stage: 'cwt-15', type: 'roof', name: 'Lazy Crofter Bunkhouse (Durness)', lat: 58.568, lng: -4.7468,
    text: 'Kleines, gemütliches Bunkhouse der Familie Mackay im Zentrum von Durness, direkt gegenüber von Mackay\'s Rooms — beliebter Zielort für CWT-Finisher. Online buchbar über durnesshostel.com; Läden, Pub und Bushaltestelle fußläufig.',
    src: 'https://www.durnesshostel.com/', srcName: 'durnesshostel.com',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Lazy_Crofter_Bunkhouse_-_geograph.org.uk_-_1266245.jpg', credit: '© Colin Kinnear, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'cwt-15', type: 'roof', name: 'Durness Youth Hostel (Hostelling Scotland, Smoo)', lat: 58.5637, lng: -4.7229,
    text: 'Einfaches saisonales Hostel von Hostelling Scotland bei der Smoo Cave, ca. 1,5 km östlich des Dorfzentrums von Durness. Geöffnet etwa April–September; Rezeption 8–10 und 17–22 Uhr — günstigste Betten am Trail-Endpunkt.',
    src: 'https://www.hostellingscotland.org.uk/hostels/durness-smoo/', srcName: 'Hostelling Scotland',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Durness_Smoo_Youth_Hostel.jpg/1280px-Durness_Smoo_Youth_Hostel.jpg', credit: '© Victuallers, Wikimedia Commons, CC BY-SA 4.0' }]
  },
  {
    stage: 'cwt-15', type: 'camp', name: 'Sango Sands Oasis (Durness)', lat: 58.5697, lng: -4.7432,
    text: 'Campingplatz auf den Klippenwiesen über der Sango Bay mitten in Durness, mit Duschen, Küchenraum und Bar/Restaurant nebenan — idealer Endpunkt nach Fähre und Minibus vom Cape. Läden und Bushaltestelle (805) im Dorf; für Zelte i. d. R. keine Reservierung nötig.',
    src: 'https://www.sangosands.com/', srcName: 'sangosands.com',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Sango_Bay_from_Sango_Sands_Camping_Site_-_geograph.org.uk_-_4756547.jpg/1280px-Sango_Bay_from_Sango_Sands_Camping_Site_-_geograph.org.uk_-_4756547.jpg', credit: '© Clive Nicholson, geograph.org.uk, CC BY-SA 2.0' }, { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Sango_Sands_Camping_site%2C_Durness_-_geograph.org.uk_-_7454105.jpg/1280px-Sango_Sands_Camping_site%2C_Durness_-_geograph.org.uk_-_7454105.jpg', credit: '© Eirian Evans, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'cwt-15', type: 'bothy', name: 'Strathchailleach Bothy („Sandy\'s Bothy“, MBA)', lat: 58.5449, lng: -5.0103,
    text: 'Legendäre MBA-Bothy ca. 1 Stunde nördlich von Sandwood Bay: Hier lebte der Einsiedler James „Sandy“ McRory-Smith über 30 Jahre — seine Wandmalereien sind erhalten. Offene Torf-Feuerstelle; die Furt des Strathchailleach-Flusses davor kann nach Regen schwierig sein.',
    src: 'https://www.mountainbothies.org.uk/bothies/northern-highlands/strathchailleach/', srcName: 'Mountain Bothies Association',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Murals_in_Strathchailleach_bothy_-_geograph.org.uk_-_1759968.jpg/1280px-Murals_in_Strathchailleach_bothy_-_geograph.org.uk_-_1759968.jpg', credit: '© David Greer, geograph.org.uk, CC BY-SA 2.0' }, { url: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Strathchailleach_Bothy_-_geograph.org.uk_-_571708.jpg', credit: '© Ian Bolton, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'cwt-15', type: 'bothy', name: 'Kearvaig Bothy (MBA)', lat: 58.6085, lng: -4.9418,
    text: 'MBA-Bothy in Traumlage direkt an der Kearvaig Bay, 2 Räume mit Kamin. Liegt im MOD-Schießgebiet Cape Wrath: Bei Übungen (rote Flaggen) sind Zugang und Nutzung strikt verboten — Schießzeiten vorab auf gov.uk („Cape Wrath firing times“) prüfen oder Range Control 01971 511242 anrufen.',
    src: 'https://www.mountainbothies.org.uk/bothies/northern-highlands/kearvaig/', srcName: 'Mountain Bothies Association',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Kearvaig_Bothy_-_geograph.org.uk_-_2736121.jpg/1280px-Kearvaig_Bothy_-_geograph.org.uk_-_2736121.jpg', credit: '© John Ferguson, geograph.org.uk, CC BY-SA 2.0' }, { url: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Kearvaig_beach_and_bothy_-_geograph.org.uk_-_7499118.jpg', credit: '© Simon Bonney, geograph.org.uk, CC BY-SA 2.0' }]
  },
  {
    stage: 'cwt-15', type: 'wild', name: 'Wildzelt Kearvaig Bay', lat: 58.61, lng: -4.939,
    text: 'Grasflächen hinter dem einsamen Sandstrand der Kearvaig Bay, Wasser aus dem Kearvaig River — Alternative, falls die Bothy belegt ist. Gleiche MOD-Regel wie für die Bothy: bei aktiven Schießzeiten ist das gesamte Gebiet gesperrt.',
    src: 'https://www.visitcapewrath.com/', srcName: 'visitcapewrath.com',
    photos: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Down_Kearvaig_river%2C_towards_Kearvaig_Bay_-_geograph.org.uk_-_5892193.jpg/1280px-Down_Kearvaig_river%2C_towards_Kearvaig_Bay_-_geograph.org.uk_-_5892193.jpg', credit: '© Ibn Musa, geograph.org.uk, CC BY-SA 2.0' }]
  }
];
