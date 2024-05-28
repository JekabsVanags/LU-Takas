import { base } from '$app/paths';
import { error } from '@sveltejs/kit';

export function load({ params }) {
  const years = [
    {
      programme_slug: "datoriki",
      year_slug: "1",
      max_years: "4",
      name: "Datoriķu kursi",
      img: `../../trails.jpg`,
      courses_fall: [
      ],
      courses_spring: [
      ]
    },
    {
      programme_slug: "datoriki",
      year_slug: "2",
      max_years: "4",
      name: "Datoriķu kursi",
      img: `../../trails.jpg`,
      courses_fall: [
      ],
      courses_spring: [
      ]
    },
    {
      programme_slug: "datoriki",
      year_slug: "3",
      max_years: "4",
      name: "Datoriķu kursi",
      img: `../../trails.jpg`,
      courses_fall: [
      ],
      courses_spring: []
    },
    {
      programme_slug: "datoriki",
      year_slug: "4",
      max_years: "4",
      name: "Datoriķu kursi",
      img: `../../trails.jpg`,
      courses_fall: [],
      courses_spring: []
    },
    {
      programme_slug: "geografi",
      year_slug: "1",
      max_years: "3",
      name: "Geogrāfu kursi",
      img: `../../trails.jpg`,
      courses_fall: [
        {
          title: "Cilvēku ģeogrāfjia",
          img: `../../test.webp`,
          altText: "alt1",
          teaser: "Kurss par un ap cilvēkiem un kur tie dzīvo...",
          content: "Šajā kursā ir iespējams uzzināt, ne tikai cilvēku demogrāfiskos rādītājus, bet arī cilvēku kultūras un reliģijas izcelsmes vietas, to attīstība un kopējā izplatība. Šajā kursā ir iespējams tuvāk izpētīt, katru pasaules daļu un uzzināt vairāk, par cilvēku kultūru, reliģiju, dzīves stilu, u.c."
        },
        {
          title: "Zemes zinātnes",
          img: `../../geo-zemes-zinatnes.jpeg`,
          altText: "alt1",
          teaser: "Kas planētai Zeme vēderā?",
          content: "Kurss kas ir zināms visiem aar ģeogrāfiju saistītajiem. Šajā kursā ir iespējams uzzināt par to, kas atrodas planētas Zemes vēderā. Šajā kursā ir iespējams uzzināt, dažādu iežu viedošanos procesu, kā atpazīt iežus un daudz citus procesus, kas notiek uz šīs planētas, kā piemēram, vulkānu izvirdumi, tsunami, zemestrīces un citas dabas stihijas."
        },
        {
          title: "Klimatoloģija un meteroloģijas pamati",
          img: `../../trails.jpg`,
          altText: "alt1",
          teaser: "Šeit dzimst laika ziņu diktori...",
          content: "Kurss, kas dos ieskatu, kas notiek aiz TV3 laika ziņu durvīm un ko tieši Toms Bricis stāsta par tuvākajām laika prognozēm. Šajā kursā iemācās, kā darboties ar vairākām ierīcēm priekš tagadējo un nākotnes laikapstākļu prognozēšanai un cik ļoti svarīgi tas arī ir."
        },
        {
          title: "Augsnes zinātne",
          img: `../../geo-augsnes-zinatne.jpeg`,
          altText: "alt1",
          teaser: "Kūdra, melnzeme, smiltis un ķīmija...",
          content: "Viens no teorētiski garlaicīgākajiem kursiem, bet praktiski viens no visinteresantākajiem kursiem, kas ir piedāvāts šajā fakultātē. Kurss kas ir stipri balstīts uz ķīmijas pamatiem, bet kad to visu sastop dabā, tad tas dod lielāku ieskatu un sapratni, cik mūsu daba ir kompleksa un skaista."
        },
        {
          title: "Kartogrāfija",
          img: `../../lu-test-image.jpg`,
          altText: "alt1",
          teaser: "Šeit apmaldīties nav opcija...",
          content: "Ģeogrāfijas studiju programmas viens no vissvarīgākajiem balstiem. Kā jau nosaukumā minēts, kurss ir balstīts ap kartēm, visu kas ir saistīts ar kartogrāfijas vēsturi un kā mūsdienās kartes tiek veidotas. Kursa laikā iemācīsies, ka pašam izveidot karti izmantojot vairāks datorprogrammas."
        }
      ],
      courses_spring: []
    },
    {
      programme_slug: "geografi",
      year_slug: "2",
      max_years: "3",
      name: "Geogrāfu kursi",
      img: `../../trails.jpg`,
      courses_fall: [],
      courses_spring: [
        {
          title: "Latvijas ģeogrāfija",
          img: `../../geo-latvijas-geografija.jpeg`,
          altText: "alt1",
          teaser: "Es <3 tevi, Latvija!",
          content: "Šis kurss ir tikai veltīts mūsu mīļajai Latvijai. Kursa laikā, detāli petīsi Latvijas fiziskās ģeogrāfijas attīstību, kā arī Latvijas iedzīvotāju demogrāfijas izmaiņas un attīstību. Uzzināsi, ka aptuveni viss ko Tu redzi apkārt Latvijā saistībā ar relfeju ir veidojusi milzīgs ledāja gabals."
        },
        {
          title: "Paleoģeogrāfija",
          img: `../../geo-paleogeografija.jpeg`,
          altText: "alt1",
          teaser: "No A līdz Z zemes vēsturē...",
          content: "Šis kurss ir viss par zemes vēsturi, kopš tās paša sākuma. Kursa laikā Tu izzej cauri visiem zemes vēstures etapiem un apskaties, kā tajā laikā izskatījās pasaule, kas tajā brīdī auga un dzīvoja gan zem ūdens, gan virs ūdens."
        }
      ]
    },
    {
      programme_slug: "geografi",
      year_slug: "3",
      max_years: "3",
      name: "Geogrāfu kursi",
      img: `../../trails.jpg`,
      courses_fall: [
        {
          title: "Telpiskā analīze ilgstpējīgām pilsētām un sabiedrībai",
          img: `../../lu-test-image.jpg`,
          altText: "alt1",
          teaser: "Varēsi izmantot savas Rīdzinieka zināšanas...",
          content: "Šajā kursā detāli apskatīsi kādu pēc izvēles Latvijas valstspilsētu un analizēsi tās veidošanās īpašības un kādas ir iespējamas nākotnes uzlabojumi pilsētai, lai tā spētu dabai draudzīgi attīstīties."
        }
      ],
      courses_spring: []
    }
  ]

  const year = years.find((year) => year.programme_slug === params.name && year.year_slug === params.year);

  if (!year) {
    // If year is not found, return a 404 error
    return error(404, `Year not found: ${params.name}/${params.year}`);
  }

  return year;
}
