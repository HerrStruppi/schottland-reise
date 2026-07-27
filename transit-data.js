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
      id: 'b309', kind: 'bus', color: '#1f7a5a',
      check: { label: 'bustimes.org 309', url: 'https://bustimes.org/services/309-alexandria-balmaha' },
      name: 'McColl’s 309', sub: 'Balloch – Drymen – Balmaha (WHW-Einstieg)',
      days: 'täglich, ca. 9×',
      coords: [
        [55.98650,-4.58590],[55.99871,-4.58212],[56.0364,-4.5065],[56.06430,-4.44520],
        [56.0700,-4.4750],[56.0790,-4.5150],[56.08430,-4.54000]
      ],
      stops: [
        { name: 'Alexandria (Bahnhof)', lat: 55.98650, lng: -4.58590 },
        { name: 'Balloch (Bahnhof/Bus)', lat: 55.99871, lng: -4.58212, hub: true },
        { name: 'Gartocharn', lat: 56.0364, lng: -4.5065 },
        { name: 'Drymen (The Square)', lat: 56.06430, lng: -4.44520 },
        { name: 'Balmaha (Car Park)', lat: 56.08430, lng: -4.54000,
          gap: { n: 1, names: 'Buchanan Smithy' } }
      ],
      tables: [
        { title: 'Ungefähre Lage der Fahrten', head: [''],
          rows: [
            ['ab Alexandria', 'ca. 09:30 – 22:00'],
            ['ab Balmaha', 'ca. 10:00 – 22:20']
          ],
          note: 'Ca. 9 Fahrtenpaare täglich, ca. alle 1,5 Std. Genaue Zeiten vor der Fahrt auf bustimes.org prüfen – Sonntagsfahrplan weicht ab.' }
      ],
      notes: [
        'Das ist die gesuchte Verbindung, um die ersten WHW-Etappen zu überspringen: Zug Glasgow Queen Street → Balloch (ca. 50 Min., ca. 2×/Std.), dort in die 309.',
        'Endet in Balmaha. Nach Rowardennan fährt KEIN Bus – dorthin nur mit dem Waterbus (nur Sa/So) oder per Taxi ab Drymen/Balmaha.',
        'Fahrpreis Alexandria–Balmaha ca. £4,30 (Stand 2026, ohne Gewähr).'
      ]
    },
    {
      id: 'e5', kind: 'bus', color: '#0f7d7d',
      check: { label: 'ember.to', url: 'https://www.ember.to/' },
      name: 'Ember E5', sub: 'Glasgow – Loch Lomond – Fort William (E-Fernbus)',
      days: 'täglich 4×',
      coords: [
        [55.86549,-4.25035],[55.8642,-4.4331],[55.9436,-4.5686],[55.99871,-4.58212],[56.1006,-4.6396],
        [56.2050,-4.7150],[56.2500,-4.7220],[56.30184,-4.72161],[56.32830,-4.72180],[56.39033,-4.61844],
        [56.43591,-4.71169],[56.51639,-4.76432],[56.6819,-5.1073],[56.6836,-5.1830],[56.7226,-5.2290],
        [56.7800,-5.1300],[56.82098,-5.10495]
      ],
      stops: [
        { name: 'Glasgow Buchanan St', lat: 55.86549, lng: -4.25035, hub: true },
        { name: 'Glasgow Airport', lat: 55.8642, lng: -4.4331 },
        { name: 'Balloch', lat: 55.99871, lng: -4.58212, gap: { n: 1, names: 'Dumbarton' } },
        { name: 'Tarbet', lat: 56.2050, lng: -4.7150, gap: { n: 2, names: 'Luss Bypass · Arden/Duck Bay' } },
        { name: 'Ardlui', lat: 56.30184, lng: -4.72161, gap: { n: 1, names: 'Inveruglas' } },
        { name: 'Inverarnan (Beinglas)', lat: 56.32830, lng: -4.72180 },
        { name: 'Crianlarich', lat: 56.39033, lng: -4.61844 },
        { name: 'Tyndrum', lat: 56.43591, lng: -4.71169 },
        { name: 'Bridge of Orchy', lat: 56.51639, lng: -4.76432 },
        { name: 'Glencoe', lat: 56.6819, lng: -5.1073 },
        { name: 'Fort William', lat: 56.82098, lng: -5.10495, hub: true,
          gap: { n: 4, names: 'Ballachulish · North Ballachulish · Onich · Corran Ferry' } }
      ],
      tables: [],
      warns: ['An den meisten Halten nur mit Vorabbuchung – spätestens 10 Min. vor Abfahrt über ember.to. Kein spontanes Zusteigen!'],
      notes: [
        'Der einzige Fernbus, der in Inverarnan (Beinglas Farm) und Ardlui hält – dort fährt die Citylink 915 nicht.',
        'Direkt vom Flughafen Glasgow, praktisch für An- und Abreise.',
        'Schwesterlinie E4/E4X fährt Edinburgh – Callander – Crianlarich/Tyndrum – Bridge of Orchy – Fort William.'
      ]
    },
    {
      id: 'llwater', kind: 'faehre', color: '#2e6f8e',
      check: { label: 'cruiselochlomond.co.uk', url: 'https://www.cruiselochlomond.co.uk/timetable' },
      name: 'Waterbus Loch Lomond', sub: 'Cruise Loch Lomond: Tarbet · Inversnaid · Rowardennan · Luss · Balmaha',
      days: 'saisonal bis 01.11.',
      coords: [[56.2040,-4.7170],[56.2430,-4.6870]],
      coordsAlt: [
        [[56.2040,-4.7170],[56.1500,-4.6440],[56.1005,-4.6425]],
        [[56.1005,-4.6425],[56.0840,-4.5430]]
      ],
      stops: [
        { name: 'Tarbet (Pier)', lat: 56.2040, lng: -4.7170, hub: true },
        { name: 'Inversnaid (Pier)', lat: 56.2430, lng: -4.6870 },
        { name: 'Rowardennan (Pier)', lat: 56.1500, lng: -4.6440 },
        { name: 'Luss (Pier)', lat: 56.1005, lng: -4.6425 },
        { name: 'Balmaha (Pier)', lat: 56.0840, lng: -4.5430 }
      ],
      tables: [
        { title: 'LL5 Tarbet ↔ Inversnaid · täglich', head: [''],
          rows: [
            ['ab Tarbet', '10:30 · 11:45 · 13:45 · 16:00'],
            ['ab Inversnaid', '11:00 · 12:15 · 14:15 · 16:30']
          ], note: 'Überfahrt ca. 30 Min.' },
        { title: 'LL3 Tarbet ↔ Rowardennan ↔ Luss · nur Sa + So', head: [''],
          rows: [
            ['Tarbet ab', '08:45'],
            ['Rowardennan', '09:15'],
            ['Luss an', '10:00'],
            ['Luss ab', '16:15'],
            ['Rowardennan', '17:00'],
            ['Tarbet an', '17:30']
          ], note: 'Je 1 Fahrt – die einzige öffentliche Verbindung nach Rowardennan überhaupt.' },
        { title: 'LL1 Luss ↔ Balmaha · täglich', head: [''],
          rows: [
            ['ab Luss', '10:00 · 11:30 · 13:15 · 14:45'],
            ['ab Balmaha', '10:45 · 12:15 · 14:00 · 15:30']
          ], note: 'Überfahrt ca. 45 Min.' }
      ],
      warns: ['Wetterabhängig, Zeiten vorab telefonisch oder online bestätigen: +44 1301 702356.'],
      notes: [
        'Saison 2026 ca. 27.03.–01.11. – der Reisezeitraum liegt sicher drin.',
        'LL5 ist der Ausstieg mitten im schwierigsten Loch-Lomond-Abschnitt zwischen Rowardennan und Inversnaid.',
        'In Tarbet Anschluss an Bahnhof Arrochar & Tarbet, Citylink und Ember E5.'
      ]
    },
    {
      id: 'b44', kind: 'bus', color: '#b4622c',
      check: { label: 'shielbuses.co.uk', url: 'https://www.shielbuses.co.uk/route-n44-monday-to-friday' },
      name: 'Shiel Buses 44', sub: 'Fort William – Ballachulish – Glencoe – Kinlochleven',
      days: 'täglich, Mo–Fr 7×',
      coords: [
        [56.82098,-5.10495],[56.7800,-5.1300],[56.7226,-5.2290],[56.7000,-5.2150],[56.6950,-5.1950],
        [56.6836,-5.1830],[56.68190,-5.10729],[56.6900,-5.0800],[56.7028,-5.0192],[56.71450,-4.96040]
      ],
      stops: [
        { name: 'Fort William (Busbahnhof)', lat: 56.82098, lng: -5.10495, hub: true },
        { name: 'North Ballachulish', lat: 56.6950, lng: -5.1950,
          gap: { n: 2, names: 'Corran Ferry Road End · Onich' } },
        { name: 'Ballachulish', lat: 56.6836, lng: -5.1830 },
        { name: 'Glencoe (Junction)', lat: 56.68190, lng: -5.10729 },
        { name: 'Kinlochleven (Post Office)', lat: 56.71450, lng: -4.96040,
          gap: { n: 1, names: 'Caolasnacon' } }
      ],
      tables: [
        { title: 'Mo–Fr', head: ['ab Fort William', 'ab Kinlochleven'],
          rows: [
            ['1.', '06:30', '07:30'], ['2.', '08:30', '09:30'], ['3.', '10:30', '11:30'],
            ['4.', '12:30', '13:30'], ['5.', '14:30', '15:30'], ['6.', '17:30', '18:30'],
            ['7.', '21:00', '22:00']
          ], note: 'Fahrzeit ca. 50 Min. (um den Loch Leven herum, nicht über die Devil’s Staircase).' },
        { title: 'Sa / So', head: [''],
          rows: [
            ['Sa ab Fort William', '08:30 · 10:30 · 12:30 · 14:30 · 17:30 · 21:00'],
            ['So ab Fort William', '09:30 · 11:30 · 14:30 · 16:30'],
            ['So ab Kinlochleven', '10:30 · 12:30 · 15:30 · 17:30']
          ], note: 'Betreiber und bustimes.org widersprechen sich beim Wochenende – vor Ort prüfen.' }
      ],
      notes: [
        'Damit lässt sich die lange Schlussetappe Kinlochleven → Fort William (25 km) überspringen oder abbrechen.',
        'In Glencoe Junction Anschluss an Citylink 914/915/916 und Ember E5 – so kommt man auch von Kingshouse nach Kinlochleven.',
        'Fahrpreis Fort William–Kinlochleven ca. £5,80 einfach. Auskunft: +44 1397 700700.'
      ]
    },
    {
      id: 'b500', kind: 'bus', color: '#7a6a3f',
      check: { label: 'bustimes.org 500', url: 'https://bustimes.org/services/500-mallaig-fort-william' },
      name: 'Shiel Buses 500', sub: 'Fort William – Glenfinnan – Mallaig',
      days: 'Mo–Fr, wenige Fahrten',
      coords: [
        [56.82098,-5.10495],[56.84277,-5.12212],[56.85540,-5.19292],[56.85598,-5.29035],[56.87244,-5.44931],
        [56.88144,-5.66330],[56.91296,-5.83963],[57.00554,-5.83023]
      ],
      stops: [
        { name: 'Fort William (Busbahnhof)', lat: 56.82098, lng: -5.10495, hub: true },
        { name: 'Glenfinnan (Station Road)', lat: 56.87244, lng: -5.44931,
          gap: { label: 'Bedarfshalte entlang der A830' } },
        { name: 'Mallaig', lat: 57.00554, lng: -5.83023,
          gap: { n: 3, names: 'Lochailort · Arisaig · Morar' } }
      ],
      tables: [
        { title: 'Fort William → Glenfinnan', head: [''],
          rows: [['ab Fort William', '10:00 · 13:25'], ['an Glenfinnan', '10:30 · 13:55']],
          note: 'In den Fahrplandaten Mo–Fr. Auskunft: +44 1967 431272 / +44 1397 700700.' }
      ],
      notes: ['Bus-Alternative zur West Highland Line für Etappe 1 des CWT. Der Zug ist mit 4 Fahrten Mo–Sa aber verlässlicher.']
    },
    {
      id: 'b917', kind: 'bus', color: '#4a7fb5',
      check: { label: 'citylink.co.uk', url: 'https://www.citylink.co.uk/timetables.php' },
      name: 'Citylink 917', sub: 'Inverness – Glen Shiel – Skye',
      days: 'täglich 4×',
      coords: [
        [57.48023,-4.22271],[57.3350,-4.4790],[57.2100,-4.6300],[57.1500,-4.9000],[57.15632,-5.18285],
        [57.21419,-5.42053],[57.2779,-5.5159],[57.28021,-5.71387]
      ],
      stops: [
        { name: 'Inverness', lat: 57.48023, lng: -4.22271, hub: true },
        { name: 'Cluanie Inn', lat: 57.15632, lng: -5.18285,
          gap: { n: 2, names: 'Drumnadrochit · Invermoriston' } },
        { name: 'Shiel Bridge', lat: 57.21419, lng: -5.42053 },
        { name: 'Dornie', lat: 57.2779, lng: -5.5159 },
        { name: 'Kyle of Lochalsh', lat: 57.28021, lng: -5.71387, hub: true }
      ],
      tables: [
        { title: 'Shiel Bridge · täglich', head: ['→ Skye', '→ Inverness'],
          rows: [
            ['1.', '07:55', '10:36'], ['2.', '10:15', '12:16'],
            ['3.', '14:59', '14:36'], ['4.', '19:30', '19:15']
          ] }
      ],
      notes: [
        'Zusammen mit der Citylink 915 hat Shiel Bridge rund 8 Halte täglich – der mit Abstand beste Ausstiegspunkt der CWT-Südhälfte.',
        'Fährt ab Inverness am Loch Ness entlang, nicht über Fort William.'
      ]
    },
    {
      id: 'b809', kind: 'bus', color: '#8a4f7d',
      check: { label: 'rapsonshighland.com', url: 'https://www.rapsonshighland.com/route-809' },
      name: 'Rapsons 809', sub: 'Ullapool – Inchnadamph – Lochinver',
      days: 'Mo–Sa, 2×',
      coords: [
        [57.89542,-5.16036],[57.9350,-5.1750],[58.0000,-5.1400],[58.0350,-5.0700],[58.0500,-5.0350],
        [58.0700,-4.9880],[58.14900,-4.97190],[58.1720,-4.9800],[58.1800,-5.0900],[58.1600,-5.1800],[58.1470,-5.2450]
      ],
      stops: [
        { name: 'Ullapool (Fährterminal)', lat: 57.89542, lng: -5.16036, hub: true },
        { name: 'Ledmore / Elphin Junction', lat: 58.0700, lng: -4.9880,
          gap: { n: 4, names: 'Ardmair · Strathcanaird · Drumrunie Junction · Knockan' } },
        { name: 'Inchnadamph (Hotel)', lat: 58.14900, lng: -4.97190 },
        { name: 'Lochinver', lat: 58.1470, lng: -5.2450,
          gap: { n: 1, names: 'Loch Assynt' } }
      ],
      tables: [
        { title: 'Richtung Lochinver', head: ['Fahrt 1', 'Fahrt 2'],
          rows: [
            ['Ullapool ab', '10:00', '15:25'],
            ['Inchnadamph', '10:41', '16:17'],
            ['Lochinver an', '11:00', '16:36']
          ] },
        { title: 'Richtung Ullapool', head: ['Fahrt 1', 'Fahrt 2'],
          rows: [
            ['Lochinver ab', '07:45', '12:22'],
            ['Inchnadamph', '08:05', '12:42'],
            ['Ullapool an', '08:43', '13:20']
          ] }
      ],
      warns: [
        'Buchungspflicht: Fahrten vor Lochinver bis 18:00 des Vortags anmelden – +44 7721 755771 / +44 1875 340024.',
        'Die Betriebstage sind in den Fahrplandaten widersprüchlich (teils Mo–Sa, teils nur Di). Unbedingt vorher anrufen!'
      ],
      notes: ['Damit ist Inchnadamph doch per Linienbus erreichbar – der wichtigste Resupply-/Ausstiegspunkt in Assynt.']
    },
    {
      id: 'b702', kind: 'bus', color: '#5b8f42',
      check: { label: 'bustimes.org 702', url: 'https://bustimes.org/services/702-strathcarron-shieldaig-or-torridon' },
      name: 'DMK Motors 702', sub: 'Strathcarron – Lochcarron – Shieldaig – Annat',
      days: 'Mo–Sa 4×',
      coords: [
        [57.42275,-5.42856],[57.3980,-5.5030],[57.4050,-5.6100],[57.4350,-5.6600],[57.5200,-5.6500],[57.5330,-5.5240]
      ],
      stops: [
        { name: 'Strathcarron (Bahnhof)', lat: 57.42275, lng: -5.42856, hub: true },
        { name: 'Lochcarron', lat: 57.3980, lng: -5.5030 },
        { name: 'Shieldaig', lat: 57.5200, lng: -5.6500, gap: { n: 2, names: 'Kishorn · Tornapress' } },
        { name: 'Annat (Torridon)', lat: 57.5330, lng: -5.5240 }
      ],
      tables: [
        { title: 'Mo–Sa', head: ['ab Strathcarron', 'ab Shieldaig/Annat'],
          rows: [
            ['1.', '07:05', '06:40'], ['2.', '10:55', '10:30'],
            ['3.', '12:55', '12:20'], ['4.', '18:00', '17:30']
          ] }
      ],
      warns: ['Hält NICHT in Achnashellach, Craig oder im Dorf Torridon – nur bis Annat.'],
      notes: ['Guter Anschluss an die Kyle Line in Strathcarron; Ausweichweg, wenn man den CWT bei Coire Fionnaraich verlässt.']
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
        { name: 'Achfary', lat: 58.30630, lng: -4.93650 },
        { name: 'Lairg (Bahnhof)', lat: 58.00189, lng: -4.39987,
          gap: { n: 2, names: 'Loch Merkland · Overscaig' } },
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
    'whw-1': [
      'Anreise: S-Bahn Glasgow → Milngavie, ca. alle 30 Min.',
      'Diese Etappe lässt sich überspringen: Zug Glasgow → Balloch, dann McColl’s 309 nach Drymen oder Balmaha.'
    ],
    'whw-2': ['Drymen und Balmaha liegen beide an der McColl’s 309 (täglich, ca. 9×) – bequemster Ein-/Ausstieg der Südhälfte.'],
    'whw-2.5': ['Nach Rowardennan fährt kein Bus. Öffentlich nur mit dem Waterbus LL3 ab Tarbet/Luss – und der fährt nur Sa + So, je 1×.'],
    'whw-3': ['Mitten in der Etappe: Waterbus LL5 Inversnaid ↔ Tarbet, täglich 4×. Praktischer Notausstieg am schwierigsten Uferabschnitt.'],
    'whw-3.5': ['Inverarnan/Beinglas: Halt des Ember E5 (Vorabbuchung nötig). Ardlui zusätzlich per Bahn und Ardleish-Fähre.'],
    'whw-4': ['Crianlarich: Bahn, Citylink 913/915, Ember E4/E5 – der beste Umstiegspunkt am WHW.'],
    'whw-6': ['Kingshouse: Citylink 915 hält direkt am Kingshouse und 1,5 km südöstlich am Glencoe Ski Centre (White Corries).'],
    'whw-7': ['Kinlochleven hat sehr wohl Busanschluss: Shiel Buses 44 nach Fort William, täglich (Mo–Fr 7×). Über Glencoe Junction Anschluss an Citylink und Ember.'],
    'whw-8': ['Wer die 25 km nicht mehr laufen mag: Shiel Buses 44 fährt Kinlochleven → Fort William in ca. 50 Min.'],
    'cwt-1': [
      'Start mit der Passagierfähre Fort William Town Pier → Camusnagaul.',
      'Zurück von Glenfinnan: West Highland Line (4× Mo–Sa) oder Shiel Buses 500.'
    ],
    'cwt-2': ['Strathan/Loch Arkaig: kein Linienverkehr. Nächster Bus (Shiel 43 via Gairlochy/Clunes) endet ca. 19 km vorher an der Schotterstraße.'],
    'cwt-4': ['Kinloch Hourn: Straßenende, kein Linienverkehr. B&B + Tea Room (Kinlochhourn Farm).'],
    'cwt-4.5': ['Kinloch Hourn: Straßenende, kein Linienverkehr. B&B + Tea Room (Kinlochhourn Farm).'],
    'cwt-4.5': ['Shiel Bridge/Morvich: Citylink 915 UND 917 halten hier – zusammen ca. 8 Fahrten täglich. Bester Ausstiegspunkt der Südhälfte.'],
    'cwt-5': ['Maol-bhuidhe: Bothy, kein ÖPNV, kein Netz.'],
    'cwt-6': ['Craig liegt an der Kyle Line – Bahnhof Achnashellach ist ein Bedarfshalt direkt am Trail: beim Aussteigen dem Zugpersonal Bescheid geben, beim Einsteigen dem Lokführer deutlich winken.'],
    'cwt-7': ['Ausweichweg über Coire Fionnaraich nach Annat/Shieldaig: dort fährt DMK Motors 702 zum Bahnhof Strathcarron.'],
    'cwt-10': ['Oykel Bridge: kein belegter Linienverkehr. Der Bus 805 fährt trotz anderslautender Angaben im Netz NICHT über Oykel Bridge.'],
    'cwt-11': ['Inchnadamph ist doch angebunden: Rapsons 809 Ullapool ↔ Lochinver hält am Inchnadamph Hotel (2× täglich). Buchungspflicht bis 18:00 am Vortag!'],
    'cwt-12': ['Kylesku/Skiag Bridge: kein Linienbus. Nur der Assynt Dial-a-Bus auf Vorbestellung (+44 1571 844400) – ob Gäste ihn nutzen dürfen, vorher fragen.'],
    'cwt-14': ['Kinlochbervie: Laden (SPAR), Post, Unterkünfte, Bus 805.'],
    'cwt-14.5': ['Sandwood Bay: kein Linienbus. Der Kinlochbervie Dial-a-Bus (+44 7836 736378) bedient aber Blairmore, den Wanderparkplatz am Zugang zur Bucht.']
  },

  /* Telefonnummern für Transfers und Notfälle. Bewusst KEINE Karten-Pins:
     Ein „Taxi"-Symbol würde eine Verfügbarkeit vortäuschen, die es in Assynt
     und Sutherland nicht gibt – und ohne Handyempfang nützt der Pin genau
     dann nichts, wenn man ihn braucht. Nur belegte Anbieter mit eigener Seite. */
  contacts: [
    { region: 'Süden · Fort William, Glencoe, Kinlochleven', items: [
      { label: 'Lochaber Taxis (Fort William)', tel: '+44 1397 703334', note: 'hat eine eigene Seite für Wanderer-Transfers' },
      { label: 'West Highland Taxis (Kinlochleven/Glencoe)', tel: '+44 1855 831495', note: 'WHW-Transfers' },
      { label: 'Shiel Buses (Linien 44 / 500)', tel: '+44 1397 700700' }
    ] },
    { region: 'Loch Lomond · WHW-Anfang', items: [
      { label: 'Cruise Loch Lomond (Waterbus)', tel: '+44 1301 702356' },
      { label: 'Ardlui Hotel (Ardleish-Fähre)', tel: '+44 1301 704243' }
    ] },
    { region: 'Nordwesten · Ullapool, Assynt, Sutherland', items: [
      { label: 'Ulla Taxis (Ullapool)', tel: '+44 7795 622627', note: 'holt nach Absprache an Sandwood Bay, Kinlochbervie und der Keoldale-Fähre ab' },
      { label: 'Northern Sights (Lairg, ganz Sutherland)', tel: '+44 1549 402399' },
      { label: 'Rapsons 809 (Buchung Pflicht)', tel: '+44 7721 755771' },
      { label: 'Assynt Dial-a-Bus (Kylesku)', tel: '+44 1571 844400' },
      { label: 'Kinlochbervie Dial-a-Bus (Blairmore)', tel: '+44 7836 736378' },
      { label: 'Durness Bus (805, Reservierung per SMS)', tel: '+44 7782 110007' }
    ] },
    { region: 'Cape Wrath', items: [
      { label: 'Fähre Keoldale', tel: '+44 1971 511246' },
      { label: 'Minibus zum Leuchtturm', tel: '+44 7742 670196' }
    ] }
  ],

  generalWarns: [
    'Sonntags im Nordwesten fast überall busfrei.',
    'Fast alles Minibusse: "hail and ride" – am Straßenrand per Handzeichen anhalten.',
    'Taxi und Bedarfsbusse nur mit Vorbestellung – und auf weiten Teilen des CWT gibt es keinen Handyempfang. Nummern vorher notieren.',
    'Zeiten kurz vorher auf travelinescotland.com oder bustimes.org prüfen.'
  ]
};
