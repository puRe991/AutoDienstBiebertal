export const site = {
  name: 'Auto Dienst Biebertal',
  legalName: 'Auto Dienst Biebertal GmbH',
  tagline: 'KFZ-Meisterwerkstatt in Biebertal',
  description:
    'Wartung, Reparatur, HU/AU, Diagnose, Klimaservice und Reifenservice für Fahrzeuge aller Marken in Biebertal.',
  url: 'https://www.autodienst-biebertal.de',
  foundingYear: 2005,
  phoneDisplay: '06409 / 662 662',
  phoneHref: 'tel:+496409662662',
  faxDisplay: '06409 / 808 933',
  email: 'info@autodienst-biebertal.de',
  emailHref: 'mailto:info@autodienst-biebertal.de',
  address: {
    street: 'An der Amtmannsmühle 7',
    postalCode: '35444',
    city: 'Biebertal',
    country: 'DE'
  },
  geo: {
    latitude: 50.6222,
    longitude: 8.5917
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Auto+Dienst+Biebertal+An+der+Amtmannsm%C3%BChle+7+35444+Biebertal',
  openingHours: [
    'Mo–Do: 08:00–17:00 Uhr',
    'Fr: 08:00–15:00 Uhr',
    'Sa–So: geschlossen'
  ],
  openingHoursSpecification: [
    { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '08:00', closes: '17:00' },
    { dayOfWeek: 'Friday', opens: '08:00', closes: '15:00' }
  ]
} as const;

export const navItems = [
  { label: 'Start', href: '/' },
  { label: 'Leistungen', href: '/leistungen/' },
  { label: 'HU/AU', href: '/leistungen/hu-au/' },
  { label: 'Reifen', href: '/leistungen/reifen-raeder/' },
  { label: 'Diagnose', href: '/leistungen/diagnose/' },
  { label: 'Über uns', href: '/ueber-uns/' },
  { label: 'Kontakt', href: '/kontakt/' }
] as const;
