// Zeltplatz-Kandidaten entlang WHW & CWT (Stand Juli 2026, Quellen je Eintrag).
// Wildzelten in Schottland ist legal (Scottish Outdoor Access Code) – Ausnahme:
// Camping Management Zone am Loch-Lomond-Ostufer (März–Sep.: Permit/Campingplatz).
// stage = zugehörige Etappe (fürs Etappen-Sheet), src = Quelle zum Nachlesen.
window.CAMPS = [
  {
    stage: 'whw-2.5', name: 'Sallochy Campsite (Permit-Zone!)', lat: 56.116, lng: -4.605,
    text: 'Einfacher Zeltplatz am Ostufer in der Camping-Zone – zwischen Balmaha und Rowardennan ist wild zelten März–Sep. verboten, Permit/Platz nötig (früh buchen, £5).',
    src: 'https://www.lochlomond-trossachs.org/things-to-do/camping/', srcName: 'Nationalpark (Byelaws)'
  },
  {
    stage: 'whw-3.5', name: 'Doune Bothy / Ardleish', lat: 56.290, lng: -4.706,
    text: 'Nördlich der Camping-Zone: flache Wiesen zwischen Doune Bothy und Ardleish-Steg, Wasser vom Burn. Direkt an der Ardlui-Fähre.',
    src: 'https://www.westhighlandway.org/wild-camping/', srcName: 'westhighlandway.org'
  },
  {
    stage: 'whw-3.5', name: 'Beinglas Farm (bezahlt)', lat: 56.3299, lng: -4.7194,
    text: 'Campingplatz mit Bar, Duschen und Mini-Laden am Etappenende – bequemer Klassiker vor dem Glen Falloch.',
    src: 'https://www.westhighlandway.org/accommodation/', srcName: 'westhighlandway.org'
  },
  {
    stage: 'whw-5.5', name: 'Victoria Bridge / Inveroran', lat: 56.539, lng: -4.846,
    text: 'Der klassische legale WHW-Wildzelt-Spot: ebene Wiesen am Abhainn Shira nahe der Brücke, Wasser direkt am Platz. Beliebt, aber weitläufig.',
    src: 'https://www.westhighlandway.org/wild-camping/', srcName: 'westhighlandway.org'
  },
  {
    stage: 'whw-6', name: 'Ba Bridge (Rannoch Moor)', lat: 56.581, lng: -4.836,
    text: 'Exponierter, aber unvergesslicher Moor-Spot an der alten Steinbrücke mitten im Rannoch Moor – nur bei stabilem Wetter, windfest abspannen.',
    src: 'https://www.goingthewholehogg.com/west-highland-way-camping/', srcName: 'GTWH Camping-Guide'
  },
  {
    stage: 'whw-6', name: 'Kingshouse Zeltwiese', lat: 56.644, lng: -4.805,
    text: 'Geduldete, kostenlose Zeltwiese am River Etive hinterm Kingshouse Hotel, Blick auf den Buachaille; Hotelbar nebenan. Midges!',
    src: 'https://www.goingthewholehogg.com/west-highland-way-camping/', srcName: 'GTWH Camping-Guide'
  },
  {
    stage: 'whw-7', name: 'Oberhalb Devil’s Staircase', lat: 56.669, lng: -4.893,
    text: 'Kleine Terrassen am höchsten WHW-Punkt (548 m) mit Glencoe-Panorama – Wasser aus Bächen, sehr exponiert bei Wind.',
    src: 'https://www.goingthewholehogg.com/west-highland-way-camping/', srcName: 'GTWH Camping-Guide'
  },
  {
    stage: 'whw-8', name: 'Glen Nevis (bezahlt)', lat: 56.803, lng: -5.070,
    text: 'Großer Campingplatz unterm Ben Nevis, 3 km vor Fort William – gute Basis für die letzte Nacht vor dem CWT.',
    src: 'https://www.glen-nevis.co.uk', srcName: 'glen-nevis.co.uk'
  },
  {
    stage: 'cwt-1', name: 'Cona Glen', lat: 56.777, lng: -5.250,
    text: 'Viele ebene Grasflächen am Cona River im stillen Estate-Tal – erster Wildzelt-Klassiker des CWT, Rotwild inklusive.',
    src: 'https://capewrathtrailguide.org', srcName: 'capewrathtrailguide.org'
  },
  {
    stage: 'cwt-2', name: 'Corryhully Bothy', lat: 56.899, lng: -5.421,
    text: '„Electric Bothy“ des Glenfinnan Estate (sogar Steckdose); ebene Zeltflächen am Fluss davor. Guter Etappenbrecher hinter Glenfinnan.',
    src: 'https://capewrathtrailguide.org/route/glenfinnan-to-glen-dessarry', srcName: 'capewrathtrailguide.org'
  },
  {
    stage: 'cwt-3', name: 'River Carnach / Sourlies', lat: 57.010, lng: -5.512,
    text: 'Wiesen am River Carnach hinter Sourlies-Bothy (Gezeitenpassage am Loch Nevis beachten). Meerblick, Watvögel, ggf. Robben.',
    src: 'https://capewrathtrailguide.org/route/glen-dessarry-to-barisdale', srcName: 'capewrathtrailguide.org'
  },
  {
    stage: 'cwt-3', name: 'Barrisdale Bay (kleine Gebühr)', lat: 57.0947, lng: -5.5125,
    text: 'Estate-Zeltwiese mit Toilette neben dem Bothy, traumhaft an der Bucht unter Ladhar Bheinn. Kasse des Vertrauens (£).',
    src: 'https://capewrathtrailguide.org/route/glen-dessarry-to-barisdale', srcName: 'capewrathtrailguide.org'
  },
  {
    stage: 'cwt-4.5', name: 'Shiel Bridge Campsite (bezahlt)', lat: 57.2069, lng: -5.429,
    text: 'Einfacher Platz mit Laden/Tankstelle direkt am Bus 915 – ideale Erholung nach der Forcan-Ridge-Etappe.',
    src: 'https://www.walkhighlands.co.uk/cape-wrath-trail.shtml', srcName: 'walkhighlands'
  },
  {
    stage: 'cwt-5', name: 'Loch na Leitreach', lat: 57.277, lng: -5.289,
    text: 'Flache Uferwiesen unterhalb der Falls of Glomach – ruhig, viel Wasser, gelegentlich Hirsche am Abend.',
    src: 'https://www.walkhighlands.co.uk/cape-wrath-trail.shtml', srcName: 'walkhighlands'
  },
  {
    stage: 'cwt-5', name: 'Maol-bhuidhe Bothy', lat: 57.3724, lng: -5.2406,
    text: 'Eines der abgelegensten Bothies Schottlands; ebene Flächen am Fluss davor. Kein Netz, niemand weit und breit.',
    src: 'https://www.mountainbothies.org.uk', srcName: 'Mountain Bothies Association'
  },
  {
    stage: 'cwt-8', name: 'Shenavall / Strath na Sealga', lat: 57.7767, lng: -5.254,
    text: 'Bothy und Flussterrassen unter dem An Teallach – Kultplatz der Great Wilderness. Flussquerungen bei Hochwasser gefährlich!',
    src: 'https://www.mountainbothies.org.uk', srcName: 'Mountain Bothies Association'
  },
  {
    stage: 'cwt-10', name: 'Knockdamph Bothy / Loch an Daimh', lat: 57.909, lng: -4.907,
    text: 'Bothy mit Uferwiesen am halben Weg nach Oykel Bridge; alternativ 6 km weiter das Schoolhouse-Bothy an der Duag Bridge.',
    src: 'https://www.mountainbothies.org.uk', srcName: 'Mountain Bothies Association'
  },
  {
    stage: 'cwt-11', name: 'Loch Ailsh', lat: 58.012, lng: -4.812,
    text: 'Kiefernumstandene Uferflächen nahe Benmore Lodge – letzter geschützter Platz vor dem Assynt-Übergang.',
    src: 'https://capewrathtrailguide.org', srcName: 'capewrathtrailguide.org'
  },
  {
    stage: 'cwt-12', name: 'Glendhu Bothy', lat: 58.2585, lng: -4.934,
    text: 'Bothy mit Wiese direkt am Fjordende von Loch Glendhu; Alternativ Glencoul-Bothy eine Bucht früher. Beide traumhaft gelegen.',
    src: 'https://www.mountainbothies.org.uk', srcName: 'Mountain Bothies Association'
  },
  {
    stage: 'cwt-14.5', name: 'Sandwood Bay Dünen', lat: 58.532, lng: -5.064,
    text: 'Zelten in den Dünen hinterm rosa Strand (John Muir Trust-Land): Süßwasser aus dem Sandwood Loch, kein Feuer, alles wieder mitnehmen.',
    src: 'https://www.johnmuirtrust.org', srcName: 'John Muir Trust'
  },
  {
    stage: 'cwt-15', name: 'Kearvaig Bothy (nach dem Kap)', lat: 58.607, lng: -4.923,
    text: 'Bothy mit eigener Traumbucht an der Minibus-Piste Richtung Fähre – schöne letzte Nacht, wenn das MOD-Gebiet offen ist.',
    src: 'https://www.mountainbothies.org.uk', srcName: 'Mountain Bothies Association'
  }
];
