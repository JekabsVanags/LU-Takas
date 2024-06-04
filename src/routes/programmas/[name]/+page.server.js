export function load({ params }) {
  const programmes = [
    {
      slug: "datoriki",
      name: "Datoriķi!",
      description: "Datorzinātnes ir programma kur iet tad ja kaut bišķi interesē datori, un nāktonē vēlies pelnīt lielas naudas! Ne velti kursu ikgadu sāk nu jau krietni vairāk kā 200 studentu, tomēr ņem vērā, kvalifikācijas darbu aizstāvēs labi ja puse. Par Bakalaura iegušanu nerunājot!",
      img: `../lu-raina-bulvaris.JPG`,
      years: 4
    },
    {
      slug: "geografi",
      name: "Ģeogrāfi!",
      description: "Vislatvijas slavena mafija, kas maskējas par izglītības programmu. Ģeogrāfi vienmēr ir gatavi maukt ģeorallijā (t.i. laivu braucienā), rakt bedres, un varbūt dažreiz arī bišķi pamācīties.",
      img: `../lu-dabas-maja.jpeg`,
      years: 3
    },
    {
      slug: "mediki",
      name: "Medicīnas studenti...",
      description: "Mediķi... Tie kas pārdevuši savu dvēseli uz 6 gadiem + rezidentūru. Bet ja tu sevī jūti aicinājumu palīdzēt cilvēkiem, vai ceri uz labu algu pēc studiju pabeigšanas, varbūt ir tā vērts pamēģināt!",
      img: `../lu-zinatnu-maja.jpeg`,
      years: 0
    },
  ]

  const porgam = programmes.find((porgam) => porgam.slug === params.name);

  return porgam;
}
