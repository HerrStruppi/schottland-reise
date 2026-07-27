// ÖPNV-Daten für die Highland-Karte. Quelle: fahrplaene.md (Stand Juli 2026).
// Fahrzeiten vor der Reise gegen travelinescotland.com / ScotRail prüfen!
// kind: 'zug' | 'bus' | 'faehre' — Tabellen: head = Spaltenköpfe, rows = [Halt, Zeit…]
//
// Alle Halte-Koordinaten wurden gegen OpenStreetMap geprüft (Bahnhofs-,
// Bus-Halt- und Fähranleger-Knoten, Juli 2026).
// gap = Halte, die zwischen dem vorherigen und diesem Halt ausgelassen werden:
//   { n: Anzahl, names: 'A · B · C' }  oder  { label: 'freier Text' }
window.TRANSIT = {
  lines: [
    {
      id: 'whl', kind: 'zug', color: '#3f4d55',
      check: { label: 'ScotRail', url: 'https://www.scotrail.co.uk/plan-your-journey' },
      name: 'West Highland Line', sub: 'Glasgow – Fort William – Mallaig',
      days: 'Mo–Sa 3×, So 2×',
      coords: [
        [55.86256,-4.25112],[55.912,-4.417],[55.94652,-4.56761],[56.01244,-4.73077],[56.08023,-4.82536],
        [56.20330,-4.72312],[56.30184,-4.72161],[56.39033,-4.61844],[56.43481,-4.70394],[56.51639,-4.76432],
        [56.68615,-4.57695],[56.76028,-4.69077],[56.88410,-4.70113],[56.88834,-4.83711],[56.88987,-4.92162],
        [56.82056,-5.10531],[56.84277,-5.12212],[56.85540,-5.19292],[56.85598,-5.29035],[56.87244,-5.44931],
        [56.88144,-5.66330],[56.91296,-5.83963],[56.96896,-5.82209],[57.00554,-5.83023]
      ],
      stops: [
        { name: 'Glasgow Queen Street', lat: 55.86256, lng: -4.25112, hub: true },
        { name: 'Ardlui', lat: 56.30184, lng: -4.72161,
          gap: { n: 6, names: 'Dalmuir · Singer · Dumbarton Central · Helensburgh Upper · Garelochhead · Arrochar & Tarbet' } },
        { name: 'Crianlarich', lat: 56.39033, lng: -4.61844 },
        { name: 'Upper Tyndrum', lat: 56.43481, lng: -4.70394 },
        { name: 'Bridge of Orchy', lat: 56.51639, lng: -4.76432 },
        { name: 'Fort William', lat: 56.82056, lng: -5.10531, hub: true,
          gap: { n: 5, names: 'Rannoch · Corrour · Tulloch · Roy Bridge · Spean Bridge' } },
        { name: 'Glenfinnan', lat: 56.87244, lng: -5.44931,
          gap: { n: 4, names: 'Banavie · Corpach · Loch Eil Outward Bound · Locheilside' } },
        { name: 'Mallaig', lat: 57.00554, lng: -5.83023,
          gap: { n: 4, names: 'Lochailort · Beasdale · Arisaig · Morar' } }
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
      coords: [
        [55.86256,-4.25112],[55.86464,-4.26958],[55.88995,-4.32157],[55.90483,-4.33513],
        [55.91694,-4.33260],[55.92033,-4.31972],[55.94087,-4.31428]
      ],
      stops: [
        { name: 'Glasgow Queen Street (Low Level)', lat: 55.86256, lng: -4.25112, hub: true },
        { name: 'Milngavie', lat: 55.94087, lng: -4.31428,
          gap: { n: 5, names: 'Charing Cross · Anniesland · Westerton · Bearsden · Hillfoot' } }
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
        [57.48023,-4.22271],[57.51767,-4.46022],[57.59420,-4.42220],[57.61311,-4.68838],[57.62180,-4.80899],
        [57.60960,-4.91384],[57.57932,-5.07220],[57.48203,-5.33332],[57.42275,-5.42856],[57.39448,-5.45540],
        [57.35220,-5.55077],[57.33359,-5.66589],[57.31983,-5.69162],[57.28021,-5.71387]
      ],
      stops: [
        { name: 'Inverness', lat: 57.48023, lng: -4.22271, hub: true },
        { name: 'Achnasheen', lat: 57.57932, lng: -5.07220,
          gap: { n: 7, names: 'Beauly · Muir of Ord · Conon Bridge · Dingwall · Garve · Lochluichart · Achanalt' } },
        { name: 'Achnashellach', lat: 57.48203, lng: -5.33332 },
        { name: 'Strathcarron', lat: 57.42275, lng: -5.42856 },
        { name: 'Kyle of Lochalsh', lat: 57.28021, lng: -5.71387,
          gap: { n: 5, names: 'Attadale · Stromeferry · Duncraig · Plockton · Duirinish' } }
      ],
      tables: [],
      notes: [
        'Ca. 4 Züge/Tag und Richtung (Mo–Sa), sonntags weniger. Zeiten: ScotRail-App.',
        'Strathcarron–Inverness ca. 2 Std. – wichtigster Bahn-Zustieg am CWT.',
        'Achnashellach liegt direkt am CWT (Etappenziel Craig) – Bedarfshalt, dem Zugpersonal Bescheid geben!',
        'Achnasheen liegt ca. 15 km östlich von Kinlochewe (Ausweichoption).'
      ]
    },
    {
      id: 'b915', kind: 'bus', color: '#3c6e9e',
      check: { label: 'citylink.co.uk', url: 'https://www.citylink.co.uk/timetables.php' },
      name: 'Citylink 915', sub: 'Glasgow – Fort William – Skye',
      days: 'täglich 3×',
      coords: [
        [55.86549,-4.25035],[56.010,-4.727],[56.20330,-4.72312],[56.30184,-4.72161],[56.39033,-4.61844],
        [56.43591,-4.71169],[56.51639,-4.76432],[56.5800,-4.8100],[56.64325,-4.82749],[56.65059,-4.84089],
        [56.6570,-4.8760],[56.6660,-4.9700],[56.6790,-5.0450],[56.68190,-5.10729],[56.6883,-5.1830],
        [56.7060,-5.2150],[56.72143,-5.23480],[56.7600,-5.1900],[56.82098,-5.10495],[56.88987,-4.92162],
        [57.0640,-4.7830],[57.1000,-4.9500],[57.1300,-5.0800],[57.15632,-5.18285],[57.21419,-5.42053],
        [57.2740,-5.5160],[57.28021,-5.71387]
      ],
      stops: [
        { name: 'Glasgow Buchanan St', lat: 55.86549, lng: -4.25035, hub: true },
        { name: 'Tyndrum', lat: 56.43591, lng: -4.71169,
          gap: { n: 5, names: 'Luss · Tarbet · Arrochar · Ardlui · Crianlarich' } },
        { name: 'Bridge of Orchy', lat: 56.51639, lng: -4.76432 },
        { name: 'Glencoe Ski Centre (White Corries)', lat: 56.64325, lng: -4.82749 },
        { name: 'Kingshouse', lat: 56.65059, lng: -4.84089 },
        { name: 'Glencoe Crossroads', lat: 56.68190, lng: -5.10729,
          gap: { n: 1, names: 'Glencoe Visitor Centre' } },
        { name: 'Fort William', lat: 56.82098, lng: -5.10495, hub: true,
          gap: { n: 4, names: 'Ballachulish · North Ballachulish · Onich · Corran' } },
        { name: 'Cluanie Inn', lat: 57.15632, lng: -5.18285,
          gap: { n: 2, names: 'Spean Bridge · Invergarry' } },
        { name: 'Shiel Bridge', lat: 57.21419, lng: -5.42053 },
        { name: 'Kyle of Lochalsh', lat: 57.28021, lng: -5.71387,
          gap: { n: 1, names: 'Dornie' } }
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
        'Kingshouse und Glencoe Ski Centre liegen direkt am WHW – Ausstieg für Etappe Inveroran → Kingshouse.',
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
        [57.48023,-4.22271],[57.565,-4.560],[57.61311,-4.68838],[57.680,-4.780],[57.744,-5.020],
        [57.82054,-5.06160],[57.89542,-5.16036]
      ],
      stops: [
        { name: 'Inverness', lat: 57.48023, lng: -4.22271, hub: true },
        { name: 'Inverlael (Winken!)', lat: 57.82054, lng: -5.06160,
          gap: { n: 3, names: 'Tore · Garve · Braemore Junction' } },
        { name: 'Ullapool', lat: 57.89542, lng: -5.16036, hub: true }
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
        [57.48023,-4.22271],[57.51767,-4.46022],[57.61311,-4.68838],[57.57932,-5.07220],[57.60429,-5.30206],
        [57.68,-5.49],[57.7126,-5.6890]
      ],
      coordsAlt: [[57.57932,-5.07220],[57.72,-5.10],[57.8000,-5.1600],[57.84152,-5.22011]],
      stops: [
        { name: 'Inverness', lat: 57.48023, lng: -4.22271, hub: true },
        { name: 'Achnasheen', lat: 57.57932, lng: -5.07220,
          gap: { n: 5, names: 'Muir of Ord · Marybank · Contin · Garve · Achanalt' } },
        { name: 'Kinlochewe', lat: 57.60429, lng: -5.30206 },
        { name: 'Dundonnell', lat: 57.84152, lng: -5.22011,
          gap: { label: 'anderer Linienast: 700 / 707 über Braemore, nicht ab Kinlochewe' } }
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
        [58.56851,-4.74703],[58.5400,-4.8300],[58.4700,-4.9400],[58.42410,-4.98997],
        [58.45899,-5.05039],[58.42410,-4.98997],[58.3775,-5.0333],[58.35052,-5.15471],
        [58.3775,-5.0333],[58.3200,-4.9400],[58.2100,-4.7600],[58.1000,-4.5200],
        [58.00189,-4.39987],[57.8845,-4.3437],[57.664,-4.336],[57.59420,-4.42220],[57.48023,-4.22271]
      ],
      stops: [
        { name: 'Durness', lat: 58.56851, lng: -4.74703 },
        { name: 'Kinlochbervie', lat: 58.45899, lng: -5.05039,
          gap: { label: 'Bedarfshalte entlang der A838' } },
        { name: 'Rhiconich', lat: 58.42410, lng: -4.98997 },
        { name: 'Scourie', lat: 58.35052, lng: -5.15471,
          gap: { n: 1, names: 'Laxford Bridge' } },
        { name: 'Lairg (Bahnhof)', lat: 58.00189, lng: -4.39987,
          gap: { label: 'Bedarfshalte über Laxford Bridge und Loch More' } },
        { name: 'Inverness', lat: 57.48023, lng: -4.22271, hub: true,
          gap: { label: 'u. a. Bonar Bridge · Ardgay · Tain · Alness · Dingwall' } }
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
      coords: [[56.30134,-4.70482],[56.30259,-4.71989]],
      stops: [
        { name: 'Ardleish (WHW)', lat: 56.30134, lng: -4.70482 },
        { name: 'Ardlui (Bahnhof/Hotel)', lat: 56.30259, lng: -4.71989 }
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
      coords: [[56.81681,-5.11475],[56.82804,-5.12370]],
      stops: [
        { name: 'Fort William Town Pier', lat: 56.81681, lng: -5.11475 },
        { name: 'Camusnagaul', lat: 56.82804, lng: -5.12370 }
      ],
      tables: [],
      notes: ['Passagierfähre über Loch Linnhe (ca. 10 Min.) – klassischer CWT-Start. Zeiten vorab prüfen (lochabertransport.org.uk).']
    },
    {
      id: 'fcw', kind: 'faehre', color: '#4d6a75',
      check: { label: 'visitcapewrath.com', url: 'https://www.visitcapewrath.com' },
      name: 'Fähre + Minibus Cape Wrath', sub: 'Keoldale – Kap (ca. Mai–Sep)',
      days: 'keine festen Zeiten',
      coords: [[58.55330,-4.78550],[58.55232,-4.79527],[58.5560,-4.8100],[58.5900,-4.9200],[58.62548,-4.99916]],
      stops: [
        { name: 'Keoldale (Fähranleger)', lat: 58.55330, lng: -4.78550 },
        { name: 'Cape Wrath Leuchtturm', lat: 58.62548, lng: -4.99916,
          gap: { label: 'ab Achiemore weiter mit dem Minibus (ca. 18 km Piste)' } }
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
    'whw-6': ['Kingshouse: Citylink 915 hält direkt am Kingshouse und 1,5 km südöstlich am Glencoe Ski Centre (White Corries).'],
    'cwt-1': ['Start mit der Passagierfähre Fort William Town Pier → Camusnagaul.'],
    'cwt-4': ['Kinloch Hourn: Straßenende, kein Linienverkehr. B&B + Tea Room (Kinlochhourn Farm).'],
    'cwt-4.5': ['Kinloch Hourn: Straßenende, kein Linienverkehr. B&B + Tea Room (Kinlochhourn Farm).'],
    'cwt-5': ['Maol-bhuidhe: Bothy, kein ÖPNV, kein Netz.'],
    'cwt-6': ['Craig liegt an der Kyle Line – Bahnhof Achnashellach ist ein Bedarfshalt direkt am Trail.'],
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
