import { kv } from '@vercel/kv';

interface Service {
  id: string;
  header: string;
  price: string;
  text: string;
}

const initialServices: Service[] = [
    {
        id: "1",
        header: "Shampoonieren der Sitze",
        price: "ab 99,95€",
        text: "Reinigung textiler Oberflächen mittels Sprühextraktionssauger"
      },
      {
        id: "2",
        header: "Lederreinugung & Pflege",
        price: "ab 99,95€",
        text: "Intensive Reinigung der Ledersitze & Pflege"
      },
      {
        id: "3",
        header: "Ozonbehandlung",
        price: "ab 79,95€",
        text: "Der besondere Frischekick gegen Gerüche & Keime"
      },
      {
        id: "4",
        header: "Tierhaarentfernung",
        price: "ab 59,95€",
        text: "Entfernung festsitzender Tierhaare im kompletten Innenraum"
      },
      {
        id: "5",
        header: "Motorreinigung",
        price: "ab 79,95€",
        text: "Entfernung von Staub, Schmutz & Ölrückständen"
      },
      {
        id: "6",
        header: "Cabriodach-Imprägnierung",
        price: "ab 179,95€",
        text: "Vermeidung von teuren Reparaturkosten durch den Schutz Ihres Verdeckstoffes"
      },
      {
        id: "7",
        header: "Scheibenversiegelung",
        price: "ab 95,95€",
        text: "Verbesserte Sicht durch Wasser und Schmutzabweisende Versiegelung"
      },
      {
        id: "8",
        header: "Felgen-Versiegelung",
        price: "49,95€/Felge",
        text: "Verbesserte Sicht durch Wasser und Schmutzabweisende Versiegelung"
      },
      {
        id: "9",
        header: "Trockeneis-Reinigung",
        price: "auf Anfrage",
        text: "Das wie-neu- Erlebnis mit unserer schonenden & Umweltfreundlichen Trockeneis-Reinigung"
      },
      {
        id: "10",
        header: "Motorradaufbereitung",
        price: "ab 199€",
        text: "Ihr Bike mit strahlendem Glanz, Schutz vor Witterungseinflüssen & Wertsteigerung"
      }
];

async function initializeKV() {
  await kv.set('services', initialServices);
  console.log('Services initialized');
}

initializeKV(); 