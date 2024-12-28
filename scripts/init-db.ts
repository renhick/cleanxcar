import { prisma } from '../src/lib/prisma';

const initialServices = [
  {
    header: "Shampoonieren der Sitze",
    price: "ab 99,95€",
    text: "Reinigung textiler Oberflächen mittels Sprühextraktionssauger"
  },
  {
    header: "Lederreinugung & Pflege",
    price: "ab 99,95€",
    text: "Intensive Reinigung der Ledersitze & Pflege"
  },
  {
    header: "Ozonbehandlung",
    price: "ab 79,95€",
    text: "Der besondere Frischekick gegen Gerüche & Keime"
  },
  {
    header: "Tierhaarentfernung",
    price: "ab 59,95€",
    text: "Entfernung festsitzender Tierhaare im kompletten Innenraum"
  },
  {
    header: "Motorreinigung",
    price: "ab 79,95€",
    text: "Entfernung von Staub, Schmutz & Ölrückständen"
  },
  {
    header: "Cabriodach-Imprägnierung",
    price: "ab 179,95€",
    text: "Vermeidung von teuren Reparaturkosten durch den Schutz Ihres Verdeckstoffes"
  },
  {
    header: "Scheibenversiegelung",
    price: "ab 95,95€",
    text: "Verbesserte Sicht durch Wasser und Schmutzabweisende Versiegelung"
  },
  {
    header: "Felgen-Versiegelung",
    price: "49,95€/Felge",
    text: "Verbesserte Sicht durch Wasser und Schmutzabweisende Versiegelung"
  },
  {
    header: "Trockeneis-Reinigung",
    price: "auf Anfrage",
    text: "Das wie-neu- Erlebnis mit unserer schonenden & Umweltfreundlichen Trockeneis-Reinigung"
  },
  {
    header: "Motorradaufbereitung",
    price: "ab 199€",
    text: "Ihr Bike mit strahlendem Glanz, Schutz vor Witterungseinflüssen & Wertsteigerung"
  }
];

async function initDB() {
  try {
    // Lösche existierende Einträge
    await prisma.service.deleteMany();

    // Füge initiale Services ein
    await prisma.service.createMany({
      data: initialServices
    });

    console.log('Datenbank erfolgreich initialisiert');
  } catch (error) {
    console.error('Fehler bei der Initialisierung:', error);
  }
  process.exit(0);
}

initDB(); 