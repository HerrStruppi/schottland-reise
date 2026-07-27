// Orte an der Strecke: Versorgung, Geld, Gesundheit, Anschluss.
// Die Infrastruktur-Angaben (Läden, Apotheke, Post, Geldautomat, Wäscherei …)
// stammen aus einer OpenStreetMap-Abfrage im Ortsumkreis (Juli 2026) und sind
// bewusst knapp gehalten: Es geht darum, ob es die Sache GIBT – Öffnungszeiten
// ändern sich, die bitte vor Ort prüfen.
// Glasgow ist absichtlich nicht enthalten (Anreisestadt, braucht keine Karte).
// facts-Schlüssel: shop outdoor health cash post wash food fuel info water transit
window.PLACES = [
  {
    id: 'milngavie', name: 'Milngavie', lat: 55.94151, lng: -4.31460, kind: 'town',
    text: 'Offizieller Start des West Highland Way (Obelisk in der Fußgängerzone). Vorstadt von Glasgow mit voller Infrastruktur — die letzte Gelegenheit, günstig und in Ruhe alles einzukaufen, was für die ersten Tage fehlt. Bahnhof mit Vorortzügen alle 30 Min. nach Glasgow.',
    facts: [
      ['shop', 'Tesco, Aldi, M&S Foodhall, dazu 9 kleinere Läden, Bäckerei, Metzger'],
      ['health', '3 Apotheken (u. a. Boots), 2 Arztpraxen'],
      ['cash', '2 Banken, 3 Geldautomaten'],
      ['post', 'Craigash Road Post Office'],
      ['food', '4 Pubs, 5 Restaurants, 10 Cafés'],
      ['transit', 'Bahn nach Glasgow Queen Street (ca. alle 30 Min.), Buslinien X10/X10A']
    ]
  },
  {
    id: 'drymen', name: 'Drymen', lat: 56.06430, lng: -4.44520, kind: 'village',
    text: 'Erster Ort am Weg, ca. 1 km abseits der Route. Kleiner, aber vollständig versorgter Ort um einen Dorfplatz; der Clachan Inn gilt als einer der ältesten Pubs Schottlands. Letzter Geldautomat vor Crianlarich.',
    facts: [
      ['shop', 'Spar, Bäckerei, Metzger'],
      ['health', 'Apotheke Davidsons, Drymen Medical Practice'],
      ['cash', 'Geldautomat'],
      ['food', '2 Pubs, 3 Restaurants, 2 Cafés'],
      ['transit', 'McColl’s 309 nach Balloch (Bahnanschluss) und Balmaha, täglich ca. 9×']
    ]
  },
  {
    id: 'balmaha', name: 'Balmaha', lat: 56.08430, lng: -4.54000, kind: 'hamlet',
    text: 'Weiler direkt am Ostufer des Loch Lomond, unterhalb des Conic Hill. Der Village Shop neben dem Oak Tree Inn ist die letzte richtige Einkaufsmöglichkeit vor Inverarnan — danach gibt es rund 50 km lang nur Hotelküchen und den kleinen Laden in Rowardennan.',
    facts: [
      ['shop', 'Village Shop (klein, aber gut sortiert)'],
      ['info', 'National Park Centre'],
      ['food', 'Oak Tree Inn mit Pub-Küche und Café (St Mocha)'],
      ['water', 'Trinkwasser, öffentliche Toiletten'],
      ['transit', 'McColl’s 309 nach Drymen/Balloch; Waterbus LL1 nach Luss']
    ]
  },
  {
    id: 'rowardennan', name: 'Rowardennan', lat: 56.14930, lng: -4.64140, kind: 'hamlet',
    text: 'Ende der Straße am Ostufer und Ausgangspunkt für den Ben Lomond. Danach beginnt der ruppige, wurzelige Uferabschnitt. Kein Bus — öffentlich nur mit dem Waterbus, und der fährt ausschließlich Sa und So je einmal.',
    facts: [
      ['shop', 'Rowardennan Shop (sehr klein)'],
      ['food', 'Pub im Rowardennan Hotel'],
      ['water', 'Trinkwasser, Toiletten, Telefonzelle'],
      ['transit', 'Waterbus LL3 nach Tarbet/Luss — nur Sa + So, je 1 Fahrt']
    ]
  },
  {
    id: 'inverarnan', name: 'Inverarnan / Beinglas', lat: 56.32830, lng: -4.72180, kind: 'hamlet',
    text: 'Zwei Häuser am Ende des Loch Lomond: die Beinglas Farm mit Campingplatz und Laden sowie der historische Drovers Inn gegenüber. Der Campsite-Shop führt Grundnahrungsmittel und Gaskartuschen — dazwischen liegt nichts bis Crianlarich.',
    facts: [
      ['shop', 'Beinglas Campsite Shop'],
      ['food', 'Drovers Inn (Pub/Restaurant), Beinglas-Restaurant'],
      ['water', 'Trinkwasser, Toiletten'],
      ['transit', 'Ember E5 hält hier (Vorabbuchung!); Bahnhof Ardlui ca. 3 km, Ardleish-Fähre']
    ]
  },
  {
    id: 'crianlarich', name: 'Crianlarich', lat: 56.39140, lng: -4.61640, kind: 'village',
    text: 'Bahnknoten mitten in den Highlands — hier teilt sich die West Highland Line nach Oban und Fort William. Der Weg führt oberhalb des Ortes vorbei, der Abstieg ins Dorf lohnt sich für Laden, Post und Geldautomat. Bester Punkt zum Ein- oder Aussteigen auf halber WHW-Strecke.',
    facts: [
      ['shop', 'Crianlarich Store'],
      ['post', 'Crianlarich Post Office'],
      ['cash', 'Geldautomat'],
      ['food', 'Pub, Restaurant'],
      ['transit', 'Bahn (West Highland Line), Citylink 913/915, Ember E4/E5']
    ]
  },
  {
    id: 'tyndrum', name: 'Tyndrum', lat: 56.43591, lng: -4.71169, kind: 'village',
    text: 'Winziger Ort mit erstaunlich viel Betrieb, weil sich hier die Straßen nach Oban und Fort William trennen. Der Green Welly Stop ist Tankstelle, Laden, Outdoor-Abteilung und Café in einem — die beste Versorgungsgelegenheit zwischen Milngavie und Fort William, inklusive Waschmaschine.',
    facts: [
      ['shop', 'The Green Welly Stop, KeyStore, Campingplatz-Laden'],
      ['wash', 'Wäscherei'],
      ['cash', 'Geldautomat'],
      ['fuel', '2 Tankstellen'],
      ['food', '2 Pubs, 3 Restaurants, Café'],
      ['transit', 'Bahnhof Upper Tyndrum, Citylink 913/915/976, Ember E4/E5']
    ]
  },
  {
    id: 'bridge-of-orchy', name: 'Bridge of Orchy', lat: 56.51769, lng: -4.76689, kind: 'hamlet',
    text: 'Nur Hotel, Bahnhof und Brücke. Keinerlei Einkauf — wer hier übernachtet, isst im Hotel. Trotzdem ein wichtiger Punkt: Bahn und mehrere Fernbusse halten hier, und das Bahnhofsgebäude beherbergt ein Bunkhouse.',
    facts: [
      ['food', 'Restaurant/Bar im Bridge of Orchy Hotel'],
      ['water', 'Trinkwasser'],
      ['transit', 'Bahnhof (West Highland Line), Citylink 913/915, Ember E4/E5']
    ]
  },
  {
    id: 'kinlochleven', name: 'Kinlochleven', lat: 56.71450, lng: -4.96040, kind: 'village',
    text: 'Ehemaliger Aluminiumhütten-Ort am Ende des Loch Leven, umrahmt von steilen Bergen. Letzte Versorgung vor der Schlussetappe: Co-op-Supermarkt, Waschsalon, Arztpraxis und Geldautomat. Und ja — es gibt Busanschluss, entgegen dem ersten Eindruck.',
    facts: [
      ['shop', 'Co-op Food'],
      ['wash', 'Waschsalon'],
      ['health', 'The Surgery Kinlochleven'],
      ['cash', 'Geldautomat'],
      ['food', 'Pub, 2 Restaurants'],
      ['transit', 'Shiel Buses 44 nach Fort William (Mo–Fr 7×, täglich) über Glencoe — keine Bahn']
    ]
  },
  {
    id: 'fort-william', name: 'Fort William', lat: 56.81950, lng: -5.10850, kind: 'town',
    text: 'Ziel des WHW und Start des Cape Wrath Trail — die „Outdoor Capital of the UK“. Der wichtigste Versorgungspunkt der ganzen Reise: sieben Outdoor-Läden (Gaskartuschen, Ersatzteile, Schuhe), vier Supermärkte, Krankenhaus, Waschsalon. Wer den CWT plant, kauft hier alles, was für die nächsten Tage fehlt.',
    facts: [
      ['shop', 'Morrisons, Aldi, Lidl, Spar; Bäckerei'],
      ['outdoor', '7 Outdoor-Läden (Cotswold, Ellis Brigham, Go Outdoors Express …), Sports Direct'],
      ['wash', '2 Waschsalons'],
      ['health', '2 Apotheken, Belford Hospital'],
      ['cash', '2 Banken, 7 Geldautomaten'],
      ['post', 'Fort William Post Office'],
      ['food', '9 Pubs, 17 Restaurants, 9 Cafés'],
      ['transit', 'Bahnhof (West Highland Line, Caledonian Sleeper), Busbahnhof: Citylink 915/916, Ember E5, Shiel 44/500; Fähre nach Camusnagaul']
    ]
  },
  {
    id: 'glencoe', name: 'Glencoe (Dorf)', lat: 56.68276, lng: -5.10146, kind: 'village',
    text: 'Nicht am Weg, aber per Bus 44 ab Kinlochleven in 20 Minuten erreichbar — und dort kreuzen sich Citylink und Ember. Als Ausweichquartier interessant, wenn in Kinlochleven alles belegt ist. Einkaufen lässt sich hier allerdings kaum.',
    facts: [
      ['fuel', 'Tankstelle'],
      ['info', 'Besucherzentrum'],
      ['food', '2 Restaurants, 2 Cafés'],
      ['transit', 'Citylink 914/915/916, Ember E5, Shiel Buses 44']
    ]
  },
  {
    id: 'glenfinnan', name: 'Glenfinnan', lat: 56.87244, lng: -5.44931, kind: 'hamlet',
    text: 'Ende der ersten CWT-Etappe, bekannt für Viadukt und Denkmal. Keine Einkaufsmöglichkeit, aber Café, Restaurant und Bahnhof — und damit der erste bequeme Ausstieg des Cape Wrath Trail.',
    facts: [
      ['food', 'Restaurant, 3 Cafés (u. a. im Bahnwagen am Bahnhof)'],
      ['water', 'Trinkwasser, Toiletten, Telefonzelle'],
      ['transit', 'Bahnhof (West Highland Line, 4× Mo–Sa), Shiel Buses 500']
    ]
  },
  {
    id: 'shiel-bridge', name: 'Shiel Bridge / Morvich', lat: 57.21419, lng: -5.42053, kind: 'hamlet',
    text: 'Der wichtigste Knoten der CWT-Südhälfte: Citylink 915 und 917 halten hier, zusammen rund acht Fahrten am Tag. Der Laden an der Tankstelle ist klein — wer richtig einkaufen will, fährt mit dem Bus nach Kyle of Lochalsh oder Fort William. Youth Hostel in Ratagan, Campingplätze in Shiel Bridge und Morvich.',
    facts: [
      ['shop', 'kleiner Laden am Kintail Crafts / an der Tankstelle'],
      ['food', '2 Restaurants, Café'],
      ['transit', 'Citylink 915 (Fort William ↔ Skye) und 917 (Inverness ↔ Skye), zusammen ca. 8×/Tag']
    ]
  },
  {
    id: 'achnashellach', name: 'Craig / Achnashellach', lat: 57.48203, lng: -5.33332, kind: 'hamlet',
    text: 'Kein Ort, sondern ein Bahnhof im Wald — aber ein sehr nützlicher: Achnashellach ist Bedarfshalt der Kyle Line direkt am Trail. Zum Aussteigen dem Zugpersonal Bescheid geben, zum Einsteigen dem Lokführer deutlich winken. Keine Versorgung, nur ein kleiner Campingplatz.',
    facts: [
      ['water', 'Toiletten'],
      ['transit', 'Bahnhof Achnashellach (Bedarfshalt, Kyle Line) — nach Inverness ca. 2 Std.']
    ]
  },
  {
    id: 'strathcarron', name: 'Strathcarron', lat: 57.42275, lng: -5.42856, kind: 'hamlet',
    text: 'Regulärer Bahnhof der Kyle Line mit Hotel und Post — der zuverlässigste Bahn-Zustieg der CWT-Mitte, falls man Achnashellach verpasst. Von hier fährt außerdem der Bus 702 nach Lochcarron, Shieldaig und Annat.',
    facts: [
      ['post', 'Strathcarron Post Office'],
      ['food', '2 Restaurants'],
      ['transit', 'Bahnhof Kyle Line (regulärer Halt), DMK Motors 702 nach Shieldaig/Annat']
    ]
  },
  {
    id: 'kinlochewe', name: 'Kinlochewe', lat: 57.60429, lng: -5.30206, kind: 'village',
    text: 'Erster echter Versorgungspunkt seit Shiel Bridge: zwei Läden, Post und Tankstelle. Das Beinn Eighe Visitor Centre informiert über das älteste Naturreservat Großbritanniens. Busanbindung ist dünn — der Westerbus 700A fährt nur Di und Sa; verlässlicher ist der Bahnhof Achnasheen, ca. 15 km östlich.',
    facts: [
      ['shop', 'Kinlochewe Village Stores, Laden an der Tankstelle'],
      ['post', 'Kinlochewe Post Office'],
      ['fuel', 'Tankstelle'],
      ['info', 'Beinn Eighe Visitor Centre'],
      ['food', 'Pub im Kinlochewe Hotel, 2 Cafés'],
      ['transit', 'Westerbus 700A nach Inverness — nur Di + Sa! Alternative: Bahnhof Achnasheen (15 km)']
    ]
  },
  {
    id: 'ullapool', name: 'Ullapool', lat: 57.89542, lng: -5.16036, kind: 'town',
    text: 'Der beste Versorgungspunkt der Nordhälfte — auch wenn er 7 km abseits von Inverlael liegt. Tesco, Outdoor-Laden, Apotheke, Bank und mehrere Busse täglich nach Inverness. Wer den CWT in zwei Hälften teilt, macht das hier. Fischerhafen mit Fähre nach Stornoway.',
    facts: [
      ['shop', 'Tesco, Ullapool Unpacked, Delikatessen, Metzger'],
      ['outdoor', 'Ullapool Outdoors, Eisenwarenladen'],
      ['health', 'Boots-Apotheke, Ullapool Health Centre'],
      ['cash', '2 Banken, Geldautomat'],
      ['post', 'Ullapool Post Office'],
      ['fuel', 'Tankstelle'],
      ['food', '3 Pubs, 7 Restaurants, 3 Cafés'],
      ['transit', 'Citylink 961 + D&E 61 nach Inverness (mehrmals täglich), Rapsons 809 nach Inchnadamph/Lochinver']
    ]
  },
  {
    id: 'inchnadamph', name: 'Inchnadamph', lat: 58.14900, lng: -4.97190, kind: 'hamlet',
    text: 'Hotel, Explorers Lodge und sonst nichts — keine Läden, kein Geldautomat, nur eine Telefonzelle. Trotzdem wichtig, denn der Bus 809 hält am Hotel (2× täglich, Buchung bis 18:00 am Vortag) und verbindet damit Assynt mit Ullapool und Lochinver. Verpflegung nur über die Unterkünfte.',
    facts: [
      ['food', 'Küche im Inchnadamph Hotel und in der Explorers Lodge'],
      ['water', 'Telefonzelle (bei fehlendem Handyempfang wertvoll)'],
      ['transit', 'Rapsons 809 Ullapool ↔ Lochinver, 2× täglich — Buchungspflicht!']
    ]
  },
  {
    id: 'lochinver', name: 'Lochinver', lat: 58.14700, lng: -5.24500, kind: 'village',
    text: 'Nicht am Trail, aber mit dem Bus 809 ab Inchnadamph in 20 Minuten erreichbar — und der einzige Ort in Assynt mit richtigem Laden, Post und Arzt. Wer in Assynt Vorräte braucht, macht diesen Abstecher.',
    facts: [
      ['shop', 'Lochinver Stores, Inverpark Stores, Metzger, Eisenwaren'],
      ['health', 'Assynt Health Centre'],
      ['post', 'Lochinver Post Office'],
      ['fuel', 'Tankstelle'],
      ['food', '4 Restaurants, Café, Bar'],
      ['transit', 'Rapsons 809 nach Inchnadamph und Ullapool']
    ]
  },
  {
    id: 'kylesku', name: 'Kylesku', lat: 58.25720, lng: -5.01830, kind: 'hamlet',
    text: 'Ein Hotel an der eleganten Kylesku-Brücke, bekannt für Meeresfrüchte direkt vom Boot. Kein Laden, kein Geldautomat, kein Linienbus — nur der Assynt Dial-a-Bus auf Vorbestellung. Handyempfang ist unzuverlässig, die Telefonzelle deshalb nicht bloß Deko.',
    facts: [
      ['food', 'Kylesku Hotel (Restaurant/Bar), Café'],
      ['water', 'Toiletten, Telefonzelle'],
      ['transit', 'kein Linienbus — Assynt Dial-a-Bus nur auf Vorbestellung (+44 1571 844400)']
    ]
  },
  {
    id: 'rhiconich', name: 'Rhiconich', lat: 58.42410, lng: -4.98997, kind: 'hamlet',
    text: 'Straßenkreuzung am Kopf des Loch Inchard mit einem Hotel. Keine Einkaufsmöglichkeit — die ist 7 km weiter in Kinlochbervie. Immerhin hält hier der Bus 805 nach Durness und Inverness.',
    facts: [
      ['food', 'Rhiconich Hotel'],
      ['water', 'Toiletten, Telefonzelle'],
      ['transit', 'Bus 805 Durness ↔ Lairg ↔ Inverness, Mo–Sa je 1×']
    ]
  },
  {
    id: 'kinlochbervie', name: 'Kinlochbervie', lat: 58.45899, lng: -5.05039, kind: 'village',
    text: 'Fischereihafen und letzte richtige Versorgung vor Cape Wrath: SPAR-Laden, Post, Arztpraxis, Tankstelle. Wer nach Sandwood Bay und zum Kap weiterläuft, füllt hier auf — danach kommt nichts mehr.',
    facts: [
      ['shop', 'SPAR'],
      ['health', 'Kinlochbervie Health Centre'],
      ['post', 'Kinlochbervie Post Office'],
      ['fuel', 'Tankstelle'],
      ['food', 'Café'],
      ['transit', 'Bus 805; Dial-a-Bus bis Blairmore/Sheigra auf Vorbestellung (+44 7836 736378)']
    ]
  },
  {
    id: 'durness', name: 'Durness', lat: 58.56851, lng: -4.74703, kind: 'village',
    text: 'Der Zielort nach dem Kap: zwei Läden, Post, Arzt, Geldautomat und sogar ein Waschsalon. Von hier startet die Fähre über den Kyle of Durness nach Cape Wrath, und der Bus 805 fährt morgens nach Inverness. Smoo Cave und die Strände sind ein guter Abschluss.',
    facts: [
      ['shop', 'Spar, Mathers'],
      ['wash', 'Revolution Laundry'],
      ['health', 'Durness Medical Centre'],
      ['cash', 'Geldautomat'],
      ['post', 'Durness Post Office'],
      ['fuel', 'Tankstelle'],
      ['info', '2 Touristinfos'],
      ['food', '2 Restaurants, 2 Cafés'],
      ['transit', 'Bus 805 nach Inverness (Mo–Sa 08:05); Fähre Keoldale → Cape Wrath']
    ]
  },
  {
    id: 'inverness', name: 'Inverness', lat: 57.47700, lng: -4.22500, kind: 'town',
    text: 'Nicht am Weg, aber das Tor zum ganzen Norden: hier laufen Kyle Line, Far North Line und praktisch alle Highland-Buslinien zusammen. Neun Outdoor-Läden, sieben Supermärkte, Krankenhaus — der beste Ort für Ersatzausrüstung, wenn unterwegs etwas kaputtgeht, und der übliche Abreisepunkt nach Cape Wrath.',
    facts: [
      ['shop', '7 Supermärkte (Aldi, Lidl, Co-op …), Bäckereien, Kaufhäuser'],
      ['outdoor', '9 Outdoor-Läden (Cotswold, Alpkit, Craigdon Mountain Sports …)'],
      ['wash', '5 Wäschereien'],
      ['health', '5 Apotheken, 7 Arztpraxen, Krankenhäuser'],
      ['cash', '10 Banken, 10 Geldautomaten'],
      ['post', 'Inverness Post Office'],
      ['food', '27 Pubs, 51 Restaurants, 39 Cafés'],
      ['transit', 'Bahn nach Kyle of Lochalsh, Thurso und Süden; Citylink 917/961, Westerbus, Bus 805']
    ]
  },
  {
    id: 'oykel-bridge', name: 'Oykel Bridge', lat: 57.96800, lng: -4.73240, kind: 'hamlet',
    text: 'Ein Anglerhotel an einer Brücke, sonst nichts. Kein Laden, kein belegter Linienverkehr — der Bus 805 fährt trotz anderslautender Angaben im Netz NICHT hier vorbei. Wer hier aussteigen will, braucht ein vorbestelltes Taxi aus Lairg oder Ullapool.',
    facts: [
      ['food', 'Oykel Bridge Hotel (Bar/Restaurant)'],
      ['transit', 'kein belegter Linienverkehr — Taxi ab Lairg (Northern Sights, +44 1549 402399)']
    ]
  }
];
