export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  teaser: string;
  intro: string;
  problems: string[];
  steps: string[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: 'service-reparatur',
    title: 'Service & Reparatur in Biebertal',
    shortTitle: 'Service & Reparatur',
    teaser: 'Inspektion, Wartung und Reparatur für Fahrzeuge aller Marken – nachvollziehbar, sauber dokumentiert und ohne unnötige Arbeiten.',
    intro: 'Wir prüfen Ihr Fahrzeug systematisch, erklären notwendige Arbeiten verständlich und stimmen Reparaturen vorab mit Ihnen ab.',
    problems: ['Serviceanzeige im Cockpit', 'ungewöhnliche Geräusche', 'Ölverlust oder Flüssigkeitsverlust', 'Bremsen, Fahrwerk oder Auspuff auffällig'],
    steps: ['Annahme mit Fehlerbeschreibung', 'Sicht- und Diagnoseprüfung', 'transparenter Kostenvorschlag', 'fachgerechte Reparatur', 'Übergabe mit kurzer Erklärung'],
    faqs: [
      { question: 'Reparieren Sie Fahrzeuge aller Marken?', answer: 'Ja. Wir betreuen Fahrzeuge vieler Hersteller und prüfen vorab, welche Teile und Diagnosewege sinnvoll sind.' },
      { question: 'Werden Zusatzarbeiten abgestimmt?', answer: 'Ja. Arbeiten außerhalb des vereinbarten Umfangs führen wir erst nach Rücksprache aus.' }
    ]
  },
  {
    slug: 'hu-au',
    title: 'HU/AU in Biebertal',
    shortTitle: 'HU/AU',
    teaser: 'Hauptuntersuchung und Abgasuntersuchung mit Vorabcheck, damit vermeidbare Mängel nicht erst beim Prüftermin auffallen.',
    intro: 'Wir prüfen sicherheitsrelevante Punkte vor dem Termin und kümmern uns um notwendige Instandsetzungen nach Rücksprache.',
    problems: ['HU-Plakette läuft ab', 'Fahrzeug soll verkauft werden', 'Warnleuchten oder sichtbare Mängel', 'Bremsen, Licht oder Reifen unsicher'],
    steps: ['Termin abstimmen', 'Vorabcheck durchführen', 'Mängel transparent besprechen', 'HU/AU durchführen lassen', 'Fahrzeug mit Ergebnis übergeben'],
    faqs: [
      { question: 'Kann ich ohne Vorabcheck kommen?', answer: 'Ja. Der Vorabcheck reduziert aber das Risiko einer Nachprüfung wegen leicht vermeidbarer Mängel.' },
      { question: 'Was passiert bei erheblichen Mängeln?', answer: 'Wir erklären die Mängel, erstellen auf Wunsch ein Angebot und planen die Reparatur.' }
    ]
  },
  {
    slug: 'klimaservice',
    title: 'Klimaservice in Biebertal',
    shortTitle: 'Klimaservice',
    teaser: 'Klimaanlagen warten, Dichtheit prüfen und Kühlleistung wiederherstellen – für klare Sicht und angenehme Temperaturen.',
    intro: 'Eine schwache Klimaanlage kann auf Kältemittelverlust, undichte Komponenten oder verschmutzte Filter hinweisen.',
    problems: ['Klimaanlage kühlt schlecht', 'unangenehme Gerüche', 'beschlagene Scheiben', 'ungewöhnliche Geräusche beim Einschalten'],
    steps: ['Funktionsprüfung', 'Dichtheits- und Sichtprüfung', 'Serviceumfang abstimmen', 'Kältemittel/Filter nach Bedarf erneuern', 'Abschlussprüfung'],
    faqs: [
      { question: 'Wie oft ist Klimaservice sinnvoll?', answer: 'Viele Fahrzeuge profitieren alle zwei Jahre von einer Prüfung. Bei Geruch oder schwacher Kühlung früher.' },
      { question: 'Wird sofort befüllt?', answer: 'Nur wenn die Anlage dafür geeignet ist. Bei Verdacht auf Undichtigkeit prüfen wir zuerst die Ursache.' }
    ]
  },
  {
    slug: 'reifen-raeder',
    title: 'Reifen & Räder in Biebertal',
    shortTitle: 'Reifen & Räder',
    teaser: 'Reifenwechsel, Rädermontage, Wuchten und Zustandsprüfung – mit Blick auf Sicherheit, Laufbild und Restprofil.',
    intro: 'Reifen entscheiden über Bremsweg, Fahrstabilität und Komfort. Wir prüfen nicht nur das Profil, sondern auch Schäden und Alter.',
    problems: ['Saisonwechsel steht an', 'Vibrationen beim Fahren', 'einseitig abgefahrene Reifen', 'Reifendruckverlust'],
    steps: ['Reifen/Räder prüfen', 'Montage und Wuchten', 'Drehmoment beachten', 'Reifendruck einstellen', 'Hinweis zu Profil, Alter und Schäden'],
    faqs: [
      { question: 'Prüfen Sie auch das Reifenalter?', answer: 'Ja. Neben Profiltiefe achten wir auf DOT-Alter, sichtbare Schäden und ungleichmäßigen Verschleiß.' },
      { question: 'Kann ich neue Reifen über Sie beziehen?', answer: 'Ja, nach Fahrzeugdaten und gewünschtem Einsatzprofil erstellen wir ein passendes Angebot.' }
    ]
  },
  {
    slug: 'diagnose',
    title: 'Fahrzeugdiagnose in Biebertal',
    shortTitle: 'Diagnose',
    teaser: 'Elektronische Fehlersuche, Auslesen von Steuergeräten und strukturierte Ursachenanalyse statt Teiletausch auf Verdacht.',
    intro: 'Moderne Fahrzeuge benötigen eine saubere Diagnosekette: Fehlerbild aufnehmen, Daten prüfen, Ursache eingrenzen, Lösung abstimmen.',
    problems: ['Motorkontrollleuchte aktiv', 'Startprobleme', 'sporadische Fehler', 'Assistenzsysteme melden Störungen'],
    steps: ['Fehlerbild dokumentieren', 'Steuergeräte auslesen', 'Messwerte plausibilisieren', 'Ursache eingrenzen', 'Reparaturweg empfehlen'],
    faqs: [
      { question: 'Reicht Fehlerauslesen immer aus?', answer: 'Nein. Fehlercodes sind Hinweise, keine Diagnose. Wir prüfen Messwerte und technische Zusammenhänge.' },
      { question: 'Was kostet Diagnose?', answer: 'Das hängt vom Fehlerbild ab. Wir klären den ersten Prüfaufwand vor Beginn.' }
    ]
  },
  {
    slug: 'unfallinstandsetzung',
    title: 'Unfallinstandsetzung in Biebertal',
    shortTitle: 'Unfallinstandsetzung',
    teaser: 'Schäden nach Unfall oder Parkrempler prüfen, dokumentieren und fachgerecht instand setzen lassen.',
    intro: 'Nach einem Schaden zählt eine strukturierte Aufnahme: sichtbare Schäden, verdeckte Folgeschäden und sichere Reparaturplanung.',
    problems: ['Parkschaden', 'Blech- oder Stoßfängerschaden', 'Licht oder Sensorik beschädigt', 'Fahrzeug zieht nach dem Unfall schief'],
    steps: ['Schaden aufnehmen', 'Reparaturumfang prüfen', 'Teile und Partnerarbeiten koordinieren', 'Instandsetzung durchführen', 'Endkontrolle'],
    faqs: [
      { question: 'Prüfen Sie auch verdeckte Schäden?', answer: 'Ja. Gerade Stoßfänger, Sensorik und Halterungen müssen nach einem Anstoß sorgfältig geprüft werden.' },
      { question: 'Kann ich vorher Fotos senden?', answer: 'Ja. Fotos helfen bei der Ersteinschätzung, ersetzen aber keine Prüfung am Fahrzeug.' }
    ]
  },
  {
    slug: 'autoglas',
    title: 'Autoglas in Biebertal',
    shortTitle: 'Autoglas',
    teaser: 'Steinschläge und Scheibenschäden einschätzen, Reparatur oder Austausch koordinieren und sicherheitsrelevante Systeme beachten.',
    intro: 'Frontscheiben sind heute Teil moderner Assistenzsysteme. Deshalb prüfen wir Schadenbild, Position und technische Anforderungen.',
    problems: ['Steinschlag im Sichtfeld', 'Riss in der Frontscheibe', 'Undichtigkeit', 'Kamerasysteme an der Scheibe'],
    steps: ['Schaden prüfen', 'Reparaturfähigkeit bewerten', 'Austausch oder Reparatur abstimmen', 'Arbeiten koordinieren', 'Sicht- und Funktionskontrolle'],
    faqs: [
      { question: 'Kann jeder Steinschlag repariert werden?', answer: 'Nein. Position, Größe und Rissbildung entscheiden. Sicherheit geht vor.' },
      { question: 'Müssen Assistenzsysteme beachtet werden?', answer: 'Ja. Kameras und Sensorik an der Scheibe können Kalibrierung oder besondere Arbeitsschritte erfordern.' }
    ]
  }
];

export const featuredServices = services.slice(0, 6);
