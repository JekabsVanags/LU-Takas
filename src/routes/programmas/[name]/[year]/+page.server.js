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
      courses: [
        {
          title: "Tīmekļa tehnoloģijas I",
          img: `../../`,
          altText: "Programmētājs lasa WW3 rakstu par HTML mācīšanos.",
          teaser: "Šeit uzzina, ka HTML nav programmēšanas valoda...",
          content: "Vienmēr ir jāsāk ar pašiem pamatiem, un tīmekļa tehnoloģijās tie ir HTML, CSS un JavaScript. Jā, klausīties par katras birkas nozīmēm un CSS stila iespējām izklausās garlaicīgi, un jāatzīst, pārsvarā tā arī ir. Pa vidu kursam parādīsies \"sidequest\" pamēģināt lietot Bootstrap, ko gan izmanto, jo industrija draudzējas ar Bootstrap, Tailwind un tāda veida CSS ietvariem. Līdz eksāmenam tev jau vajadzētu varēt izveidot tīri pieklājīgu statisku mājaslapu!"
        },
        {
          title: "Algoritmi un programmēšana",
          img: `../../`,
          altText: "Datora ekrāns, kurā ir atvērta CodeBlocks izstrādes vide.",
          teaser: "Tava, visticamāk, pirmā sastapšanās ar C++...",
          content: "Pat ja tu pirms universitātes esi pamēģinājis programmēt, visticamāk, ka ar mītisko briesmoni, ko sauc C++, tev vēl nebūs bijusi darīšana. Šī arī būs valoda, kurā pirmos divus universitātes gadus pārsvarā būs jāprogrammē, jādomā un jāmurgo. Bet kursa saturs tiek sākts tiešām no absolūtas nulles, tā ka nav jāuztraucas par iepriekšēju zināšanu trūkumu. Laboratorijas darbos būs iespēja izmēģināt jaunās prasmes un kļūdīties pirms kontroldarbiem."
        },
        {
          title: "Diskrētā matemātika datoriķiem",
          img: `../../`,
          altText: "Pierakstu klades un papīra lapa uz kuras sarakstītas matemātiskās loģiskās izteiksmes.",
          teaser: "Un tev likās ka vidusskolas matemātika ir grūta...",
          content: "Diskrētā matemātika datoriķiem ir kā tikt iegrūstam ledainā ūdenī saulainā dienā. Ja tev šķita ka matemātika, ko apskatīs universitātē ir līdzīga vidusskolā mācītajam, šis kurss šo uzskatu sagraus. Katru mēnesi apskatīsiet jaunu, arvien sarežģītāku tēmu, kas gandrīz nekādi nav saistīta ar neko, kas iepriekš ir apskatīts. (Tāpēc to sauc par diskrēto matemātiku?) Paspēsiet iegūt pamatus matemātiskajā loģikā ar predikātiem un kvantoriem, apskatīt kopu teoriju, grafus un vēl daudz ko citu."
        },
        {
          title: "Operētājsistēmas",
          img: `../../`,
          altText: "Datora startēšanas ekrāns ar zibatmiņu tam priekšā.",
          teaser: "Windows, Linux un failu sistēmas...",
          content: "Šajā kursā katram būs iespēja sajusties kā īstam hakerim, kādus redzam filmās. Apgūsi Windows un Linux failu sistēmu atšķirības, to, kā lietot virtuālās mašīnas un kā uzinstalēt jaunu operētājsistēmu uz savas ierīces. Brīdinājums - iespēja, ka uz tava datora paralēli klasiskajam Windows pēc šī kursa parādīsies kāds no Linux variantiem, ir liela. Ja būsi atjautīgs, iespējams, pēc šī kursa tev pelīti vairs nevajadzēs, jo kā profesionāls datoriķis visas darbības datorā veiksi caur termināli."
        },
        {
          title: "Datorsistēmu arhitektūra un datoru inženierijas pamati I",
          img: `../../`,
          altText: "Datora kaste ar dažādām detaļām.",
          teaser: "Kas datoram vēderā?",
          content: "Datorsistēmu arhitektūras un datoru inženierijas pamatos tev vajadzētu iemācīties, kā strādā datori, mātesplates un loģikas vārti. Lai to izdarītu, ir vajadzīgi labi pasniedzēji. Viss, ko varu teikt, ir, ka ceru, ka tev paveiksies vairāk nekā man. Tomēr šī kursa saturu vismaz vispārējā līmenī vajadzētu zināt katram sevi cienošam datoriķim."
        }
      ]
    },
    {
      programme_slug: "datoriki",
      year_slug: "2",
      max_years: "4",
      name: "Datoriķu kursi",
      img: `../../trails.jpg`,
      courses: [
        {
          title: "Analītiskā ģeometrija",
          img: `../../`,
          altText: "Tāfele uz kuras ar krītu sazīmēti vektori un kalkulācijas.",
          teaser: "Vienības vektors, paralēlvektors, visi vektori...",
          content: "Analītiskā ģeometrija sākumā var izklausīties biedējoši, bet ar labu profesoru, labiem materiāliem un eksāmenu, kurā var lietot visus pierakstus, ātri vien sāksi saprast, cik viegli ir aprēķināt distanci starp punktiem vai nogriežņa vienības vektoru. Vēl jautrāk šis kurss kļūst brīdī, kad saproti, ka vieta, kur šīs tehnikas tiek izmantotas ļoti daudz, ir videospēles un citas simulācijas. Un kurš gan negrib iemācīties programmēt videospēles?"
        },
        {
          title: "Praktiskā dziļā mašīnmācīšanās",
          img: `../../`,
          altText: "Cilvēks, kas raksta jautājumu Chat-GPT programmai.",
          teaser: "Arī tu varēsi lielīties ka zini kā strādā mākslīgais intalekts..",
          content: "Pašlaik visai populāra tēma, ja vien nedzīvo zem akmens, ir mašīnmācīšanās (plašāk pazīstama kā AI vai ✨). Šajā kursā sapratīsi, kā tas strādā, bet neieslīgsi dziļos matemātiskos pamatojumos un vienādojumos. Lielāks uzsvars tiks likts tieši uz programmēšanu, un kursa beigās būsi izveidojis vairākus samērā vieglus, bet tomēr savus, mašīnmācīšanās modeļus, izmantojot Python."
        },
        {
          title: "Programminženierija",
          img: `../../`,
          altText: "Mape ar dokumentiem",
          teaser: "Šī kursa laikā tev gribēsies programmēt...",
          content: "Kurss par to, kā veidot programmatūras projektējumu. Lekciju daļā galvenais ir neaizmigt un cerēt, ka testiņos pietiks ar loģisko domāšanu, lai izspriestu atbildi. Bet laboratorijas darbi ir tas, kur šis kurss parāda savus ilkņus – jums būs jāstrādā... komandās. Tātad, atrodiet savus piecus labākos draugus kursā un ceriet, ka neatklāsies, ka kāds no viņiem nespēj iesniegt darbu laikā vai komunicēt. Kursa beigās dokuments būs jāprezentē komisijai, it kā sagatavojot tevi kvalifikācijas darba aizstāvēšanai."
        },
        {
          title: "Varbūtību teorija un matemātiskā statistika",
          img: `../../`,
          altText: "Cilvēks strādā ar eksel lietotājprogrammatūru.",
          teaser: "Excel ir vislabākais kalkulātors...",
          content: "Kurss sākās ar to, ka, kā es atceros, profesore teica: \"Un, protams, visiem aprēķiniem izmantosim Excel izklājlapas. Varat lietot arī citas profesionālās statistikas vides, bet Excel ir pilnīgi pietiekami\" Tad tā arī pusgadu mācīsies par statistiku un varbūtību teoriju, kas, kopā ar statistikas kontekstu un Excel =IEVIETO_FORMULU, nemaz nav tik biedējoši, kā varētu šķist. Un galu galā, ja pēc šāda kursa var atcerēties, kas ir standartnovirze un normālais sadalījums, tad domāju, ka profesore savu darbu ir labi padarījusi."
        },
        {
          title: "Automātu teorija",
          img: `../../`,
          altText: "Pieraksti kur uzzīmēti grafi, kas apzīmē automātus.",
          teaser: "Viss vienkāršais ir ģeniāls...",
          content: "Vai zini to sajūtu, kad vienlaikus visu saproti, bet tajā pašā laikā nesaproti itin neko? Aptuveni tā varētu aprakstīt Automātu teorijas kursu. Sākumā apspriedīsiet, kas ir automāts, kā tas strādā, kur tas \"dzīvo\" un ko tas \"ēd\". Un tieši brīdī, kad domā, ka saproti, ka automāts ir tas pats algoritms, tikai bišķi savādāk izteikts, profesors uz tāfeles sāks rakstīt pumpēšanas lemmu, un tad varu novēlēt tikai veiksmi.          "
        },
        {
          title: "Ievads uzņēmējdarbībā",
          img: `../../df-bizness.jpg`,
          altText: "Kaudze ar sapakotām paciņām.",
          teaser: "Šaubos, ka gribēsi būt biznesmens...",
          content: "Viens no valsts noteiktajiem kursiem, kura mērķis ir, lai katrs students kaut ko iemācītos par uzņēmējdarbību un veicinātu biznesa attīstību mūsu valstī. Diemžēl no šī kursa tu, visticamāk, neiemācīsies gandrīz neko, tāpēc iesaku izvēlēties biznesa ideju, par kuru pašam ir jautri domāt un vienkārši izbaudīt laiku ar komandu, kur jūs divas stundas mēģināsiet izdomāt biznesa nosaukumu un vēl trīs - kādus mārketinga pasākumus veiksiet (atbilde vienmēr būs Instagram un Facebook)."
        }
      ]
    },
    {
      programme_slug: "datoriki",
      year_slug: "3",
      max_years: "4",
      name: "Datoriķu kursi",
      img: `../../trails.jpg`,
      courses: [
        {
          title: "Kvalifikācijas darbs",
          img: `../../`,
          altText: "Latvijas Universitātes diploma vāciņš.",
          teaser: "Beidzot būs papīrs...",
          content: "Ja būsi izvēlējies pa ceļam uz bakalauru iegūt arī profesionālās izglītības diplomu, šis būs tavs pēdējais pārbaudījums pirms pirmā papīra saņemšanas. Viss, ko varu ieteikt, ir neatlikt visu uz pēdējo brīdi, izvēlēties labu darba vadītāju un uzturēt ar viņu regulārus sakarus. Pārējais jau būs viegli, pieņemot, ka pa šiem 2,5 gadiem esi apguvis programmēšanas pamatus. Galvenais ir atcerēties, ka tu esi tā vērts, un tavs darbs ir vēl vērtīgāks!"
        },
        {
          title: "Prakse",
          img: `../../`,
          altText: "Vīrietis skatās Linkedin piedāvājumus.",
          teaser: "Nu būs īstā dzīve...",
          content: "Iespējams tava pirmā darba pieredze Informāciju Tehnoloģiju jomā. Visticamāk grūtākais šajā kursā būs atrast prakses vietu, vel jo vairāk atrast prakses vietu, kas tev maksā. Bet ja to izdosies izdarīt, noteikti iegūsti nenovērtējamu pieredzi, un sapratīsi, ka mācīties vajadzēs visa mūža garumā, jo neviena mācību programma tevi nevar sagatavot visu darbavietu prasībām."
        }
      ]
    },
    {
      programme_slug: "datoriki",
      year_slug: "4",
      max_years: "4",
      name: "Datoriķu kursi",
      img: `../../trails.jpg`,
      courses: []
    },
    {
      programme_slug: "geografi",
      year_slug: "1",
      max_years: "3",
      name: "Geogrāfu kursi",
      img: `../../trails.jpg`,
      courses: [
        {
          title: "Cilvēku ģeogrāfjia",
          img: `../../geo-cilveku-geog.jpeg`,
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
          img: `../../geo-meterologija.jpeg`,
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
          img: `../../geo-kartografija.jpeg`,
          altText: "alt1",
          teaser: "Šeit apmaldīties nav opcija...",
          content: "Ģeogrāfijas studiju programmas viens no vissvarīgākajiem balstiem. Kā jau nosaukumā minēts, kurss ir balstīts ap kartēm, visu kas ir saistīts ar kartogrāfijas vēsturi un kā mūsdienās kartes tiek veidotas. Kursa laikā iemācīsies, ka pašam izveidot karti izmantojot vairāks datorprogrammas."
        }
      ]
    },
    {
      programme_slug: "geografi",
      year_slug: "2",
      max_years: "3",
      name: "Geogrāfu kursi",
      img: `../../trails.jpg`,
      courses: [{
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
      }]
    },
    {
      programme_slug: "geografi",
      year_slug: "3",
      max_years: "3",
      name: "Geogrāfu kursi",
      img: `../../trails.jpg`,
      courses: [
        {
          title: "Telpiskā analīze ilgstpējīgām pilsētām un sabiedrībai",
          img: `../../geo-pilseta.jpeg`,
          altText: "alt1",
          teaser: "Varēsi izmantot savas Rīdzinieka zināšanas...",
          content: "Šajā kursā detāli apskatīsi kādu pēc izvēles Latvijas valstspilsētu un analizēsi tās veidošanās īpašības un kādas ir iespējamas nākotnes uzlabojumi pilsētai, lai tā spētu dabai draudzīgi attīstīties."
        }
      ]
    }
  ]

  const year = years.find((year) => year.programme_slug === params.name && year.year_slug === params.year);

  if (!year) {
    // If year is not found, return a 404 error
    return error(404, `Year not found: ${params.name}/${params.year}`);
  }

  return year;
}
