// ÖPNV-Daten für die Highland-Karte. Quelle: fahrplaene.md (Stand Juli 2026).
// Fahrzeiten vor der Reise gegen travelinescotland.com / ScotRail prüfen!
// kind: 'zug' | 'bus' | 'faehre' — Tabellen: head = Spaltenköpfe, rows = [Halt, Zeit…]
window.TRANSIT = {
  lines: [
    {
      id: 'whl', kind: 'zug', color: '#3f4d55',
      check: { label: 'ScotRail', url: 'https://www.scotrail.co.uk/plan-your-journey' },
      name: 'West Highland Line', sub: 'Glasgow – Fort William – Mallaig',
      days: 'Mo–Sa 3×, So 2×',
      coords: [
        [55.8626,-4.2510],[55.912,-4.417],[55.943,-4.567],[56.010,-4.727],[56.080,-4.828],
        [56.204,-4.723],[56.3019,-4.7217],[56.3903,-4.6188],[56.4396,-4.7040],[56.5162,-4.7642],
        [56.6857,-4.5757],[56.7604,-4.6902],[56.885,-4.702],[56.888,-4.836],[56.889,-4.921],
        [56.8205,-5.1063],[56.8710,-5.4483],[56.880,-5.657],[56.911,-5.847],[56.968,-5.815],[57.0056,-5.8302]
      ],
      stops: [
        { name: 'Glasgow Queen Street', lat: 55.8626, lng: -4.2510, hub: true },
        { name: 'Ardlui', lat: 56.3019, lng: -4.7217 },
        { name: 'Crianlarich', lat: 56.3903, lng: -4.6188 },
        { name: 'Upper Tyndrum', lat: 56.4396, lng: -4.7040 },
        { name: 'Bridge of Orchy', lat: 56.5162, lng: -4.7642 },
        { name: 'Fort William', lat: 56.8205, lng: -5.1063, hub: true },
        { name: 'Glenfinnan', lat: 56.8710, lng: -5.4483 },
        { name: 'Mallaig', lat: 57.0056, lng: -5.8302 }
      ],
      tables: [
        { title: 'Richtung Mallaig · Mo–Sa', head: ['Zug 1', 'Zug 2', 'Zug 3'],
          rows: [
            ['Glasgow Queen St ab', '08:22', '12:22', '18:24'],
            ['Ardlui', '09:51', '13:56', '19:53'],
            ['Crianlarich', '10:21', '14:24', '20:20'],
            ['Upper Tyndrum', '10:32', '14:35', '20:31'],
            ['Bridge of Orchy', '10:48', '14:49', '20:45'],
            ['Fort William', '12:18', '16:19', '22:12'],
            ['Glenfinnan', '12:51', '16:55', '22:45'],
            ['Mallaig an', '13:40', '17:44', '23:37']
          ],
          note: 'Sa 1–5 Min. früher (Glasgow 08:21 / 18:23, Fort William 12:13).' },
        { title: 'Richtung Mallaig · So', head: ['Zug 1', 'Zug 2'],
          rows: [
            ['Glasgow Queen St ab', '12:20', '18:21'],
            ['Ardlui', '13:56', '19:51'],
            ['Crianlarich', '14:24', '20:20'],
            ['Upper Tyndrum', '14:35', '20:31'],
            ['Bridge of Orchy', '14:49', '20:47'],
            ['Fort William', '16:19', '22:14'],
            ['Glenfinnan', '16:55', '22:47'],
            ['Mallaig an', '17:44', '23:39']
          ],
          note: 'So zusätzlich Zug nur ab Fort William 12:13 → Mallaig an 13:35.' }
      ],
      notes: ['Zug wird in Crianlarich geteilt – hinterer Zugteil fährt nach Mallaig, vorderer nach Oban!'],
      warns: ['Sonntags kein Morgenzug ab Glasgow.']
    },
    {
      id: 'sbahn', kind: 'zug', color: '#6d7f8a',
      check: { label: 'ScotRail', url: 'https://www.scotrail.co.uk/plan-your-journey' },
      name: 'S-Bahn Glasgow – Milngavie', sub: 'Zubringer zum WHW-Start',
      days: 'ca. alle 30 Min.',
      coords: [[55.8580,-4.2580],[55.887,-4.284],[55.905,-4.310],[55.9411,-4.3167]],
      stops: [
        { name: 'Glasgow (Central/Queen St low level)', lat: 55.8580, lng: -4.2580 },
        { name: 'Milngavie', lat: 55.9411, lng: -4.3167 }
      ],
      tables: [],
      notes: ['Vorortzüge ca. alle 30 Min., Fahrzeit ca. 25 Min. Zeiten: ScotRail-App.']
    },
    {
      id: 'kyle', kind: 'zug', color: '#5c6f7a',
      check: { label: 'ScotRail', url: 'https://www.scotrail.co.uk/plan-your-journey' },
      name: 'Kyle Line', sub: 'Inverness – Kyle of Lochalsh',
      days: 'Mo–Sa ca. 4×, So weniger',
      coords: [
        [57.4800,-4.2237],[57.595,-4.428],[57.6127,-4.6903],[57.5803,-5.0722],[57.481,-5.335],
        [57.4222,-5.4266],[57.353,-5.548],[57.337,-5.665],[57.2797,-5.7132]
      ],
      stops: [
        { name: 'Inverness', lat: 57.4800, lng: -4.2237, hub: true },
        { name: 'Achnasheen', lat: 57.5803, lng: -5.0722 },
        { name: 'Strathcarron', lat: 57.4222, lng: -5.4266 },
        { name: 'Kyle of Lochalsh', lat: 57.2797, lng: -5.7132 }
      ],
      tables: [],
      notes: [
        'Ca. 4 Züge/Tag und Richtung (Mo–Sa), sonntags weniger. Zeiten: ScotRail-App.',
        'Strathcarron–Inverness ca. 2 Std. – wichtigster Bahn-Zustieg am CWT.',
        'Achnasheen liegt ca. 15 km östlich von Kinlochewe (Ausweichoption).'
      ]
    },
    {
      id: 'b915', kind: 'bus', color: '#3c6e9e',
      check: { label: 'citylink.co.uk', url: 'https://www.citylink.co.uk/timetables.php' },
      name: 'Citylink 915', sub: 'Glasgow – Fort William – Skye',
      days: 'täglich 3×',
      coords: [
        [55.8626,-4.2510],[56.010,-4.727],[56.204,-4.723],[56.3019,-4.7217],[56.3903,-4.6188],
        [56.4363,-4.7115],[56.5162,-4.7642],[56.6360,-4.8560],[56.6840,-5.1010],[56.7180,-5.1450],
        [56.8205,-5.1063],[56.889,-4.921],[57.068,-4.786],[57.1596,-5.1099],[57.2062,-5.4335],
        [57.279,-5.514],[57.2797,-5.7132]
      ],
      stops: [
        { name: 'Glasgow Buchanan St', lat: 55.8642, lng: -4.2519, hub: true },
        { name: 'Tyndrum', lat: 56.4363, lng: -4.7115 },
        { name: 'Bridge of Orchy', lat: 56.5165, lng: -4.7660 },
        { name: 'Glencoe Ski Centre', lat: 56.6360, lng: -4.8560 },
        { name: 'Glencoe Crossroads', lat: 56.6840, lng: -5.1010 },
        { name: 'Fort William', lat: 56.8205, lng: -5.1063, hub: true },
        { name: 'Cluanie Inn', lat: 57.1596, lng: -5.1099 },
        { name: 'Shiel Bridge', lat: 57.2062, lng: -5.4335 }
      ],
      tables: [
        { title: 'Fort William → Shiel Bridge · täglich', head: ['Bus 1', 'Bus 2', 'Bus 3'],
          rows: [
            ['Fort William ab', '10:00', '14:00', '17:25'],
            ['Cluanie Inn', '11:11', '15:11', '18:36'],
            ['Shiel Bridge an', '11:30', '15:30', '18:55']
          ] },
        { title: 'Shiel Bridge → Fort William · täglich', head: ['Bus 1', 'Bus 2', 'Bus 3'],
          rows: [
            ['Shiel Bridge ab', '09:35', '11:45', '16:21'],
            ['Cluanie Inn', '09:54', '12:04', '16:40'],
            ['Fort William an', '11:11', '13:21', '17:51']
          ] }
      ],
      notes: [
        'Shiel Bridge = bester Bus-Zustieg im Süden des CWT.',
        'Südast Glasgow–Fort William hält u. a. Tyndrum, Bridge of Orchy, Glencoe (Zeiten: citylink.co.uk).',
        'Zusätzlich Citylink 917 Inverness–Skye (ca. 3× tägl., hält Shiel Bridge).'
      ]
    },
    {
      id: 'b961', kind: 'bus', color: '#5f5591',
      check: { label: 'bustimes.org', url: 'https://bustimes.org/search?q=ullapool+inverness' },
      name: 'Citylink 961 + D&E 61', sub: 'Inverness – Ullapool',
      days: 'mehrmals täglich',
      coords: [
        [57.4800,-4.2237],[57.565,-4.560],[57.6127,-4.6903],[57.680,-4.780],[57.744,-5.020],
        [57.8210,-5.0630],[57.8952,-5.1615]
      ],
      stops: [
        { name: 'Inverness', lat: 57.4800, lng: -4.2237, hub: true },
        { name: 'Inverlael (Winken!)', lat: 57.8210, lng: -5.0630 },
        { name: 'Ullapool', lat: 57.8952, lng: -5.1615, hub: true }
      ],
      tables: [],
      notes: [
        'Zusammen mehrmals täglich, Fahrzeit ca. 1,5 Std. Zeiten: bustimes.org.',
        'Fährt auf der A835 direkt an Inverlael vorbei (hail & ride: Handzeichen!).',
        'Ullapool = bester Versorgungspunkt der Nordhälfte des CWT.'
      ]
    },
    {
      id: 'b700', kind: 'bus', color: '#2f7d68',
      check: { label: 'bustimes.org', url: 'https://bustimes.org/operators/westerbus' },
      name: 'Westerbus 700A / 700 / 707', sub: 'Inverness – Kinlochewe / Dundonnell',
      days: 'nur einzelne Tage!',
      coords: [
        [57.4800,-4.2237],[57.595,-4.428],[57.6127,-4.6903],[57.5803,-5.0722],[57.6031,-5.3018],
        [57.68,-5.49],[57.7126,-5.6890]
      ],
      coordsAlt: [[57.5803,-5.0722],[57.72,-5.10],[57.868,-5.253]],
      stops: [
        { name: 'Inverness', lat: 57.4800, lng: -4.2237, hub: true },
        { name: 'Achnasheen', lat: 57.5803, lng: -5.0722 },
        { name: 'Kinlochewe', lat: 57.6031, lng: -5.3018 },
        { name: 'Dundonnell', lat: 57.8680, lng: -5.2530 }
      ],
      tables: [
        { title: 'Kinlochewe (700A) · nur Di + Sa', head: [''],
          rows: [
            ['Kinlochewe → Inverness', 'ab ca. 09:10'],
            ['Inverness → Kinlochewe', 'ab 16:10 (an ca. 17:30)']
          ] }
      ],
      notes: ['Alternative für Kinlochewe: Bahnhof Achnasheen (ca. 15 km, Kyle Line).'],
      warns: [
        '700A (Kinlochewe): nur Di + Sa!',
        'Dundonnell: nur Mo + Fr nach Inverness (700), nur Do nach Ullapool (707), je 1 Fahrt.'
      ]
    },
    {
      id: 'b805', kind: 'bus', color: '#a84a6b',
      check: { label: 'thedurnessbus.com', url: 'https://thedurnessbus.com' },
      name: 'Bus 805 Far North', sub: 'Durness – Lairg – Inverness (Durness Bus)',
      days: 'Mo–Sa 1×',
      coords: [
        [58.5680,-4.7454],[58.55,-4.83],[58.4290,-5.0234],[58.4610,-5.0503],[58.4290,-5.0234],
        [58.371,-4.999],[58.3520,-5.1560],[58.371,-4.999],[58.310,-4.938],[58.183,-4.653],
        [58.0210,-4.3990],[57.8845,-4.3437],[57.664,-4.336],[57.53,-4.34],[57.4800,-4.2237]
      ],
      stops: [
        { name: 'Durness', lat: 58.5680, lng: -4.7454 },
        { name: 'Kinlochbervie', lat: 58.4610, lng: -5.0503 },
        { name: 'Rhiconich', lat: 58.4290, lng: -5.0234 },
        { name: 'Scourie', lat: 58.3520, lng: -5.1560 },
        { name: 'Lairg (Bahnhof)', lat: 58.0210, lng: -4.3990 },
        { name: 'Inverness', lat: 57.4800, lng: -4.2237, hub: true }
      ],
      tables: [
        { title: 'Mo–Sa · je 1 Fahrt', head: ['→ Inverness', '→ Durness'],
          rows: [
            ['Durness', '08:05', 'an 18:08'],
            ['Kinlochbervie', '08:55', '17:40'],
            ['Rhiconich', '09:02', '17:45'],
            ['Scourie', '09:20', '17:23'],
            ['Lairg Bahnhof', '10:27', '·'],
            ['Inverness', 'an 11:40', 'ab 15:00']
          ] }
      ],
      notes: [
        'Lairg: Umstieg zur Far North Line (Bahn Richtung Inverness/Thurso).',
        'Reservierung im Sommer empfohlen: SMS an +44 7782 110007 (Name, Datum, Strecke).'
      ],
      warns: ['Kein Sonntagsverkehr!']
    },
    {
      id: 'fardlui', kind: 'faehre', color: '#4d6a75',
      check: { label: 'ardlui.com', url: 'https://ardlui.com' },
      name: 'Fähre Ardleish – Ardlui', sub: 'Loch Lomond: WHW-Ostufer → Bahnhof Ardlui',
      days: 'saisonal, auf Zuruf',
      coords: [[56.3006,-4.7075],[56.3025,-4.7210]],
      stops: [
        { name: 'Ardleish (WHW)', lat: 56.3006, lng: -4.7075 },
        { name: 'Ardlui (Bahnhof/Hotel)', lat: 56.3025, lng: -4.7210 }
      ],
      tables: [],
      notes: [
        'Kleine Passagierfähre des Ardlui Hotels, ca. April–Oktober tagsüber.',
        'Am Ardleish-Steg die Signalkugel hissen, dann wird man abgeholt. Details/Zeiten: ardlui.com.'
      ]
    },
    {
      id: 'fcam', kind: 'faehre', color: '#4d6a75',
      check: { label: 'lochabertransport.org.uk', url: 'https://lochabertransport.org.uk' },
      name: 'Fähre Fort William – Camusnagaul', sub: 'Start des Cape Wrath Trail',
      days: 'Mo–Sa mehrmals',
      coords: [[56.8190,-5.1120],[56.8161,-5.1145]],
      stops: [
        { name: 'Fort William Pier', lat: 56.8190, lng: -5.1120 },
        { name: 'Camusnagaul', lat: 56.8161, lng: -5.1145 }
      ],
      tables: [],
      notes: ['Passagierfähre über Loch Linnhe (ca. 10 Min.) – klassischer CWT-Start. Zeiten vorab prüfen (lochabertransport.org.uk).']
    },
    {
      id: 'fcw', kind: 'faehre', color: '#4d6a75',
      check: { label: 'visitcapewrath.com', url: 'https://www.visitcapewrath.com' },
      name: 'Fähre + Minibus Cape Wrath', sub: 'Keoldale – Kap (ca. Mai–Sep)',
      days: 'keine festen Zeiten',
      coords: [[58.559,-4.775],[58.566,-4.786],[58.60,-4.90],[58.6247,-4.9990]],
      stops: [
        { name: 'Keoldale (Fähre)', lat: 58.559, lng: -4.775 },
        { name: 'Cape Wrath Leuchtturm', lat: 58.6247, lng: -4.9990 }
      ],
      tables: [],
      notes: [
        'Fähre über den Kyle of Durness + Minibus zum Leuchtturm, ca. Mai–Sep.',
        'Vorher anrufen – am Kap kein Handyempfang!'
      ],
      warns: ['Gezeiten-, wetter- und MOD-abhängig. Schießzeiten vorab prüfen!'],
      phones: [
        { label: 'Fähre', tel: '+44 1971 511246' },
        { label: 'Minibus', tel: '+44 7742 670196' }
      ]
    }
  ],

  // Zusätzliche Hinweise pro Etappe (id aus trails-data.js)
  stageNotes: {
    'whw-1': ['Anreise: S-Bahn Glasgow → Milngavie, ca. alle 30 Min.'],
    'whw-6': ['Kingshouse: Citylink 915 hält am Glencoe Ski Centre (ca. 3 km westlich).'],
    'cwt-1': ['Start mit der Passagierfähre Fort William → Camusnagaul.'],
    'cwt-4': ['Kinloch Hourn: Straßenende, kein Linienverkehr. B&B + Tea Room (Kinlochhourn Farm).'],
    'cwt-4.5': ['Kinloch Hourn: Straßenende, kein Linienverkehr. B&B + Tea Room (Kinlochhourn Farm).'],
    'cwt-5': ['Maol-bhuidhe: Bothy, kein ÖPNV, kein Netz.'],
    'cwt-6': ['Craig liegt an der Kyle Line zwischen Achnashellach und Strathcarron (nächste Bahnhöfe).'],
    'cwt-10': ['Oykel Bridge: kein Linienverkehr.'],
    'cwt-11': ['Inchnadamph: 2026 kein Linienbus! Nur Taxi (ab Ullapool/Lochinver) oder trampen.'],
    'cwt-12': ['Inchnadamph & Kylesku: 2026 kein Linienbus! Lochinver–Ullapool: Bus 809, Mo–Fr 1× früh morgens.'],
    'cwt-14': ['Kinlochbervie: Laden (London Stores), Unterkünfte, Bus 805.'],
    'cwt-14.5': ['Sandwood Bay: kein ÖPNV – nächster Bus (805) in Kinlochbervie/Rhiconich.']
  },

  generalWarns: [
    'Sonntags im Nordwesten fast überall busfrei.',
    'Fast alles Minibusse: "hail and ride" – am Straßenrand per Handzeichen anhalten.',
    'Zeiten kurz vorher auf travelinescotland.com oder bustimes.org prüfen.'
  ]
};
