import sql from '../src/lib/db';

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
    // Erstelle Tabelle
    await sql`
      CREATE TABLE IF NOT EXISTS services (
        id SERIAL PRIMARY KEY,
        header VARCHAR(255) NOT NULL,
        price VARCHAR(255) NOT NULL,
        text TEXT NOT NULL
      )
    `;

    // Lösche existierende Einträge
    await sql`DELETE FROM services`;

    // Füge initiale Services ein
    for (const service of initialServices) {
      await sql`
        INSERT INTO services (header, price, text)
        VALUES (${service.header}, ${service.price}, ${service.text})
      `;
    }

    console.log('Datenbank erfolgreich initialisiert');
  } catch (error) {
    console.error('Fehler bei der Initialisierung:', error);
  }
  process.exit(0);
}

initDB(); 