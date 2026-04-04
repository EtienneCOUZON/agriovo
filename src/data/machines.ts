export interface Machine {
  id: string;
  slug: string;
  name: string;
  reference: string;
  category: string;
  categorySlug: string;
  capacity: string;
  capacityNumber: number;
  price: number;
  description: string;
  shortDescription: string;
  longDescription: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  applications: string[];
  image: string;
  gallery: string[];
  includedEquipment: string[];
  advantages: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
  relatedSolutions: string[];
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
}

export const categories: Category[] = [
  { slug: "centres-complets", name: "Centres complets", description: "Solutions cl\u00e9 en main de 300 \u00e0 200 000 \u0153ufs/heure", image: "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/centreconditionnement.png?v=1772710510" },
  { slug: "calibreuses", name: "Calibreuses & Mireuses", description: "Machines de tri, calibrage et mirage des \u0153ufs", image: "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/calibreuse.jpg?v=1772706459" },
  { slug: "impression-marquage", name: "Impression & Marquage", description: "Imprimantes et tamponneuses pour \u0153ufs", image: "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/Eggtech4000_4.png?v=1773317424" },
  { slug: "equipements", name: "\u00c9quipements & Accessoires", description: "Tables inox, \u00e9tag\u00e8res, kits \u00e9talon", image: "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/table-en-inox-InoxEgg.png?v=1773073152" },
];

export const machines: Machine[] = [
  // ──────────────────────────────────────────────
  // PLE200K — 200 000 \u0153ufs/h
  // ──────────────────────────────────────────────
  {
    id: "ple200k",
    slug: "centre-conditionnement-200000-oeufs-heure",
    name: "Centre de conditionnement 200 000 \u0153ufs/heure",
    reference: "PLE200K",
    category: "Centres complets",
    categorySlug: "centres-complets",
    capacity: "200 000 \u0153ufs/h",
    capacityNumber: 200000,
    price: 84100,
    description: "Ce centre de conditionnement des \u0153ufs haute capacit\u00e9 traite jusqu\u2019\u00e0 200 000 \u0153ufs par heure. Solution industrielle cl\u00e9 en main int\u00e9grant calibreuse automatique multi-voies, mireuse haute cadence, convoyeurs d\u2019alimentation et d\u2019\u00e9vacuation, syst\u00e8me de marquage jet d\u2019encre, emballeuse automatique et palettiseur. Conforme DDPP avec tra\u00e7abilit\u00e9 compl\u00e8te et supervision par \u00e9cran tactile.",
    shortDescription: "Solution industrielle compl\u00e8te pour 200 000 \u0153ufs par heure",
    longDescription: `Le centre de conditionnement des \u0153ufs PLE200K repr\u00e9sente le sommet de notre gamme industrielle. Con\u00e7u pour les grands centres de conditionnement, les coop\u00e9ratives agricoles et les groupements d\u2019\u00e9leveurs, cette calibreuse industrielle traite jusqu\u2019\u00e0 200 000 \u0153ufs par heure avec une pr\u00e9cision et une fiabilit\u00e9 in\u00e9gal\u00e9es. L\u2019ensemble repose sur une calibreuse automatique multi-voies capable de trier les \u0153ufs en cinq cat\u00e9gories de poids (XL, L, M, S, XS) gr\u00e2ce \u00e0 des cellules de pes\u00e9e \u00e9lectronique de haute pr\u00e9cision.

Le flux de production d\u00e9marre par les convoyeurs d\u2019alimentation qui acheminent les \u0153ufs vers la mireuse haute cadence. Celle-ci inspecte chaque \u0153uf par transparence et d\u00e9tection UV afin de rep\u00e9rer les f\u00ealures, les inclusions de sang et les \u0153ufs non conformes. Les \u0153ufs valid\u00e9s passent ensuite sur la calibreuse multi-voies o\u00f9 ils sont pes\u00e9s individuellement puis orient\u00e9s vers les voies de tri correspondantes. Le syst\u00e8me de marquage jet d\u2019encre alimentaire imprime en temps r\u00e9el le code producteur, la date de ponte, la DLC et le mode d\u2019\u00e9levage sur chaque \u0153uf.

En bout de ligne, l\u2019emballeuse automatique multi-formats conditionne les \u0153ufs en bo\u00eetes de 6, 10, 12 ou 30 selon la configuration choisie. Le palettiseur finalise le processus en empilant les caisses sur palette, pr\u00eates pour l\u2019exp\u00e9dition. L\u2019ensemble de la cha\u00eene est pilot\u00e9 par une armoire \u00e9lectrique centralis\u00e9e avec supervision par \u00e9cran tactile, offrant une vue en temps r\u00e9el des cadences, des statistiques de tri et des alertes de maintenance.

La conformit\u00e9 DDPP est garantie de bout en bout : tra\u00e7abilit\u00e9 compl\u00e8te de chaque lot, enregistrement automatique des donn\u00e9es de production, marquage r\u00e9glementaire et archivage num\u00e9rique. Cette solution cl\u00e9 en main inclut la formation du personnel sur 5 jours ainsi que la mise en service sur site par nos techniciens sp\u00e9cialis\u00e9s. Le retour sur investissement est g\u00e9n\u00e9ralement atteint en 18 \u00e0 24 mois gr\u00e2ce aux gains de productivit\u00e9 et \u00e0 la r\u00e9duction des co\u00fbts de main-d\u2019\u0153uvre.`,
    highlights: [
      "Capacit\u00e9 de 200 000 \u0153ufs par heure",
      "Calibrage automatique multi-voies (XL, L, M, S, XS)",
      "Mirage haute cadence avec d\u00e9tection UV int\u00e9gr\u00e9e",
      "Syst\u00e8me de marquage jet d\u2019encre alimentaire conforme DDPP",
      "Emballeuse automatique multi-formats (6, 10, 12, 30 \u0153ufs)",
      "Palettiseur automatis\u00e9 en bout de ligne",
      "Supervision par \u00e9cran tactile avec statistiques en temps r\u00e9el",
      "Tra\u00e7abilit\u00e9 compl\u00e8te et archivage num\u00e9rique",
    ],
    specs: [
      { label: "Capacit\u00e9", value: "200 000 \u0153ufs/h" },
      { label: "Cat\u00e9gories de tri", value: "XL, L, M, S, XS" },
      { label: "Alimentation", value: "Triphas\u00e9 400V / 50 Hz" },
      { label: "Puissance install\u00e9e", value: "15 kW" },
      { label: "Mirage", value: "Automatique haute cadence + UV" },
      { label: "Marquage", value: "Jet d\u2019encre alimentaire temps r\u00e9el" },
      { label: "Supervision", value: "\u00c9cran tactile + logiciel de tra\u00e7abilit\u00e9" },
      { label: "Dimensions estim\u00e9es", value: "Variable selon configuration" },
      { label: "Poids", value: "Variable selon configuration" },
      { label: "Niveau sonore", value: "< 85 dB" },
      { label: "Certification", value: "CE" },
      { label: "Garantie", value: "24 mois pi\u00e8ces et main d\u2019\u0153uvre" },
    ],
    applications: ["Centres de conditionnement industriels", "Coop\u00e9ratives agricoles", "Groupements d\u2019\u00e9leveurs", "Stations d\u2019emballage \u00e0 grande \u00e9chelle"],
    image: "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/centreconditionnement.png?v=1772710510",
    gallery: [
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/calibreuse_oeufs-removebg-preview.png?v=1773307742",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/mireuse-removebg-preview.png?v=1773307742",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/convoyeur_oeufs-removebg-preview.png?v=1773307742",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/marquage_tete.png?v=1773307742",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/etiquettage_oeufs-removebg-preview.png?v=1773307742",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/boite_oeuf.png?v=1773307742",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/table_calibreuse-removebg-preview.png?v=1773307742",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/image-removebg-preview_11.png?v=1773307742",
    ],
    includedEquipment: [
      "Calibreuse automatique multi-voies",
      "Mireuse haute cadence avec d\u00e9tection UV",
      "Convoyeurs d\u2019alimentation et d\u2019\u00e9vacuation",
      "Syst\u00e8me de marquage jet d\u2019encre alimentaire",
      "Emballeuse automatique multi-formats",
      "Palettiseur",
      "Armoire \u00e9lectrique et supervision tactile",
      "Formation du personnel (5 jours)",
      "Mise en service sur site",
    ],
    advantages: [
      {
        title: "Productivit\u00e9 maximale",
        description: "Avec 200 000 \u0153ufs trait\u00e9s par heure, cette ligne automatise l\u2019int\u00e9gralit\u00e9 du processus de conditionnement. Le flux continu sans interruption manuelle permet de traiter la production de plusieurs \u00e9levages en une seule journ\u00e9e, r\u00e9duisant consid\u00e9rablement les besoins en main-d\u2019\u0153uvre.",
      },
      {
        title: "Contr\u00f4le qualit\u00e9 irr\u00e9prochable",
        description: "La mireuse haute cadence avec d\u00e9tection UV \u00e9limine automatiquement les \u0153ufs f\u00eal\u00e9s, souill\u00e9s ou pr\u00e9sentant des anomalies internes. Chaque \u0153uf est inspect\u00e9 individuellement, garantissant un taux de conformit\u00e9 sup\u00e9rieur \u00e0 99,5 % en sortie de ligne.",
      },
      {
        title: "Conformit\u00e9 r\u00e9glementaire totale",
        description: "Le marquage jet d\u2019encre alimentaire et le syst\u00e8me de tra\u00e7abilit\u00e9 int\u00e9gr\u00e9 r\u00e9pondent \u00e0 toutes les exigences de la DDPP. Code producteur, date de ponte, DLC et mode d\u2019\u00e9levage sont imprim\u00e9s sur chaque \u0153uf avec archivage num\u00e9rique automatique des lots.",
      },
      {
        title: "Retour sur investissement rapide",
        description: "La r\u00e9duction des co\u00fbts de main-d\u2019\u0153uvre, la diminution du taux de casse et l\u2019augmentation des cadences permettent un retour sur investissement g\u00e9n\u00e9ralement atteint en 18 \u00e0 24 mois. La maintenance pr\u00e9ventive int\u00e9gr\u00e9e minimise les arr\u00eats de production.",
      },
    ],
    faq: [
      {
        question: "Quel est le d\u00e9lai de livraison pour le centre PLE200K ?",
        answer: "Le d\u00e9lai de livraison standard est de 8 \u00e0 12 semaines apr\u00e8s validation de la commande. Ce d\u00e9lai inclut la fabrication, les tests en usine et la pr\u00e9paration logistique. Un planning d\u00e9taill\u00e9 vous est communiqu\u00e9 d\u00e8s la confirmation.",
      },
      {
        question: "La formation du personnel est-elle incluse ?",
        answer: "Oui, la formation est incluse dans le prix. Nos techniciens se d\u00e9placent sur votre site pendant 5 jours pour former vos op\u00e9rateurs au fonctionnement, aux r\u00e9glages et \u00e0 la maintenance de premier niveau. Un manuel technique complet est \u00e9galement fourni.",
      },
      {
        question: "Comment se passe la maintenance de la ligne ?",
        answer: "Un contrat de maintenance pr\u00e9ventive est propos\u00e9 avec interventions trimestrielles. La garantie de 24 mois couvre les pi\u00e8ces et la main-d\u2019\u0153uvre. Notre SAV est joignable 6j/7 et un technicien peut intervenir sous 48 heures en cas de panne critique.",
      },
    ],
    relatedSolutions: ["calibrage", "mirage", "conditionnement-emballage", "marquage-tracabilite"],
  },

  // ──────────────────────────────────────────────
  // PLE100K — 100 000 \u0153ufs/h
  // ──────────────────────────────────────────────
  {
    id: "ple100k",
    slug: "centre-conditionnement-100000-oeufs-heure",
    name: "Centre de conditionnement 100 000 \u0153ufs/heure",
    reference: "PLE100K",
    category: "Centres complets",
    categorySlug: "centres-complets",
    capacity: "100 000 \u0153ufs/h",
    capacityNumber: 100000,
    price: 54100,
    description: "Centre de conditionnement semi-industriel performant pour atteindre les 100 000 \u0153ufs par heure. Solution compl\u00e8te avec calibreuse automatique, mireuse int\u00e9gr\u00e9e, convoyeurs, syst\u00e8me de marquage en option et emballage semi-automatis\u00e9. Parfait pour les centres de taille moyenne souhaitant automatiser leur production tout en ma\u00eetrisant leur investissement.",
    shortDescription: "Solution semi-industrielle pour 100 000 \u0153ufs par heure",
    longDescription: `Le centre de conditionnement PLE100K est notre solution semi-industrielle de r\u00e9f\u00e9rence pour les centres de taille moyenne et les coop\u00e9ratives r\u00e9gionales. Avec une cadence de 100 000 \u0153ufs par heure, cette ligne offre un \u00e9quilibre parfait entre performance industrielle et investissement ma\u00eetris\u00e9. La calibreuse automatique int\u00e9gr\u00e9e trie les \u0153ufs en quatre cat\u00e9gories (XL, L, M, S) avec une pr\u00e9cision de pes\u00e9e \u00e0 0,5 g pr\u00e8s.

Le processus de conditionnement commence par l\u2019alimentation automatique via convoyeurs \u00e0 bande, suivie du mirage int\u00e9gr\u00e9 par transparence pour \u00e9carter les \u0153ufs d\u00e9fectueux. La calibreuse oriente ensuite chaque \u0153uf vers la voie de tri correspondant \u00e0 sa cat\u00e9gorie de poids. Le marquage r\u00e9glementaire peut \u00eatre ajout\u00e9 en option avec notre module jet d\u2019encre alimentaire EggTech2000.

L\u2019emballage semi-automatis\u00e9 permet une grande flexibilit\u00e9 dans le choix des formats de conditionnement. Le syst\u00e8me peut \u00eatre pilot\u00e9 par un \u00e0 deux op\u00e9rateurs seulement, r\u00e9duisant significativement les co\u00fbts de main-d\u2019\u0153uvre par rapport \u00e0 un conditionnement manuel. La formation et la mise en service sur site sont incluses dans la prestation.`,
    highlights: [
      "Capacit\u00e9 de 100 000 \u0153ufs par heure",
      "Calibrage automatique haute pr\u00e9cision (\u00b1 0,5 g)",
      "Mirage int\u00e9gr\u00e9 par transparence",
      "Compatible marquage r\u00e9glementaire (option jet d\u2019encre)",
      "Emballage semi-automatis\u00e9 multi-formats",
      "Convoyage automatis\u00e9 alimentation et \u00e9vacuation",
      "Formation et mise en service incluses",
      "1 \u00e0 2 op\u00e9rateurs seulement",
    ],
    specs: [
      { label: "Capacit\u00e9", value: "100 000 \u0153ufs/h" },
      { label: "Cat\u00e9gories de tri", value: "XL, L, M, S" },
      { label: "Pr\u00e9cision de pes\u00e9e", value: "\u00b1 0,5 g" },
      { label: "Alimentation", value: "Triphas\u00e9 400V / 50 Hz" },
      { label: "Puissance install\u00e9e", value: "10 kW" },
      { label: "Mirage", value: "Int\u00e9gr\u00e9 par transparence" },
      { label: "Marquage", value: "En option (jet d\u2019encre alimentaire)" },
      { label: "Dimensions estim\u00e9es", value: "12 m x 4 m x 2,2 m (L x l x H)" },
      { label: "Niveau sonore", value: "< 82 dB" },
      { label: "Certification", value: "CE" },
      { label: "Garantie", value: "24 mois pi\u00e8ces et main d\u2019\u0153uvre" },
    ],
    applications: ["Centres de conditionnement moyens", "\u00c9leveurs avec vente directe \u00e0 grande \u00e9chelle", "Coop\u00e9ratives r\u00e9gionales", "Stations de conditionnement multi-\u00e9levages"],
    image: "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/centreconditionnement.png?v=1772710510",
    gallery: [
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/calibreuse_oeufs-removebg-preview.png?v=1773307742",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/mireuse-removebg-preview.png?v=1773307742",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/convoyeur_oeufs-removebg-preview.png?v=1773307742",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/marquage_tete.png?v=1773307742",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/etiquettage_oeufs-removebg-preview.png?v=1773307742",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/boite_oeuf.png?v=1773307742",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/table_calibreuse-removebg-preview.png?v=1773307742",
    ],
    includedEquipment: [
      "Calibreuse automatique 4 voies",
      "Mireuse int\u00e9gr\u00e9e par transparence",
      "Convoyeurs d\u2019alimentation et d\u2019\u00e9vacuation",
      "Syst\u00e8me d\u2019emballage semi-automatis\u00e9",
      "Armoire \u00e9lectrique avec tableau de commande",
      "Formation du personnel (3 jours)",
      "Mise en service sur site",
    ],
    advantages: [
      {
        title: "Performance semi-industrielle",
        description: "100 000 \u0153ufs par heure permettent de traiter la production de plusieurs \u00e9levages sur une seule ligne, avec un niveau d\u2019automatisation \u00e9lev\u00e9 qui r\u00e9duit les besoins en personnel \u00e0 1 ou 2 op\u00e9rateurs.",
      },
      {
        title: "Investissement optimis\u00e9",
        description: "Le rapport capacit\u00e9/prix du PLE100K est parmi les meilleurs du march\u00e9. La possibilit\u00e9 d\u2019ajouter le marquage en option permet de lisser l\u2019investissement initial selon vos priorit\u00e9s.",
      },
      {
        title: "Flexibilit\u00e9 d\u2019emballage",
        description: "Le syst\u00e8me d\u2019emballage semi-automatis\u00e9 accepte de multiples formats de bo\u00eetes et peut \u00eatre adapt\u00e9 rapidement pour r\u00e9pondre aux commandes sp\u00e9cifiques de vos clients distributeurs.",
      },
    ],
    faq: [
      {
        question: "Peut-on ajouter le marquage jet d\u2019encre ult\u00e9rieurement ?",
        answer: "Oui, le module de marquage peut \u00eatre ajout\u00e9 \u00e0 tout moment. La ligne est pr\u00e9-c\u00e2bl\u00e9e pour accueillir notre imprimante EggTech2000 sans modification structurelle. L\u2019installation du module prend moins d\u2019une journ\u00e9e.",
      },
      {
        question: "Combien d\u2019op\u00e9rateurs sont n\u00e9cessaires ?",
        answer: "En fonctionnement nominal, 1 \u00e0 2 op\u00e9rateurs suffisent pour piloter l\u2019ensemble de la ligne. Un op\u00e9rateur supervise l\u2019alimentation et le tri, tandis que le second g\u00e8re l\u2019emballage et la palettisation.",
      },
      {
        question: "La ligne est-elle \u00e9volutive vers 200 000 \u0153ufs/h ?",
        answer: "La structure m\u00e9canique du PLE100K n\u2019est pas directement upgradable vers 200 000 \u0153ufs/h, mais certains composants (convoyeurs, marquage) peuvent \u00eatre r\u00e9utilis\u00e9s lors d\u2019une \u00e9volution future. Contactez-nous pour une \u00e9tude personnalis\u00e9e.",
      },
    ],
    relatedSolutions: ["calibrage", "mirage", "conditionnement-emballage", "marquage-tracabilite"],
  },

  // ──────────────────────────────────────────────
  // PLE50K — 50 000 \u0153ufs/h
  // ──────────────────────────────────────────────
  {
    id: "ple50k",
    slug: "centre-conditionnement-50000-oeufs-heure",
    name: "Centre de conditionnement 50 000 \u0153ufs/heure",
    reference: "PLE50K",
    category: "Centres complets",
    categorySlug: "centres-complets",
    capacity: "50 000 \u0153ufs/h",
    capacityNumber: 50000,
    price: 54100,
    description: "Centre de conditionnement semi-industriel pour atteindre les 50 000 \u0153ufs par heure. Solution interm\u00e9diaire id\u00e9ale pour les \u00e9leveurs en croissance, les centres de conditionnement r\u00e9gionaux et les coop\u00e9ratives locales souhaitant automatiser leur production avec un encombrement ma\u00eetris\u00e9.",
    shortDescription: "Solution interm\u00e9diaire pour 50 000 \u0153ufs par heure",
    longDescription: `Le centre de conditionnement PLE50K constitue la passerelle id\u00e9ale entre les solutions compactes et les lignes industrielles. Avec une cadence de 50 000 \u0153ufs par heure, il r\u00e9pond aux besoins des \u00e9levages en pleine croissance et des centres de conditionnement r\u00e9gionaux qui traitent la production de plusieurs fermes. Son encombrement ma\u00eetris\u00e9 permet une installation dans des locaux de taille raisonnable.

La ligne int\u00e8gre une calibreuse automatique multi-cat\u00e9gories avec pes\u00e9e \u00e9lectronique, un module de mirage automatique par transparence et des convoyeurs d\u2019alimentation optimis\u00e9s. Le tri s\u2019effectue en quatre cat\u00e9gories (XL, L, M, S) avec une pr\u00e9cision remarquable, garantissant un classement conforme aux normes europ\u00e9ennes de commercialisation des \u0153ufs.

L\u2019architecture modulaire du PLE50K offre une grande \u00e9volutivit\u00e9. Il est possible d\u2019ajouter un module de marquage, d\u2019upgrader le syst\u00e8me d\u2019emballage ou d\u2019augmenter la cadence en int\u00e9grant des convoyeurs suppl\u00e9mentaires. Cette flexibilit\u00e9 prot\u00e8ge votre investissement \u00e0 long terme et accompagne la croissance de votre activit\u00e9.`,
    highlights: [
      "Capacit\u00e9 de 50 000 \u0153ufs par heure",
      "Calibrage pr\u00e9cis multi-cat\u00e9gories (XL, L, M, S)",
      "Mirage automatique par transparence",
      "Encombrement r\u00e9duit par rapport aux lignes industrielles",
      "\u00c9volutif vers capacit\u00e9 sup\u00e9rieure",
      "Architecture modulaire et flexible",
      "Compatible marquage r\u00e9glementaire en option",
      "Formation et mise en service incluses",
    ],
    specs: [
      { label: "Capacit\u00e9", value: "50 000 \u0153ufs/h" },
      { label: "Cat\u00e9gories de tri", value: "XL, L, M, S" },
      { label: "Pr\u00e9cision de pes\u00e9e", value: "\u00b1 0,5 g" },
      { label: "Alimentation", value: "Triphas\u00e9 400V / 50 Hz" },
      { label: "Puissance install\u00e9e", value: "7,5 kW" },
      { label: "Mirage", value: "Int\u00e9gr\u00e9 automatique" },
      { label: "Marquage", value: "En option" },
      { label: "Dimensions estim\u00e9es", value: "8 m x 3,5 m x 2,2 m (L x l x H)" },
      { label: "Niveau sonore", value: "< 80 dB" },
      { label: "Certification", value: "CE" },
      { label: "Garantie", value: "24 mois pi\u00e8ces et main d\u2019\u0153uvre" },
    ],
    applications: ["Centres de conditionnement r\u00e9gionaux", "\u00c9leveurs en croissance", "Coop\u00e9ratives locales", "Stations multi-\u00e9levages"],
    image: "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/centreconditionnement.png?v=1772710510",
    gallery: [
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/calibreuse_oeufs-removebg-preview.png?v=1773307742",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/mireuse-removebg-preview.png?v=1773307742",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/convoyeur_oeufs-removebg-preview.png?v=1773307742",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/marquage_tete.png?v=1773307742",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/etiquettage_oeufs-removebg-preview.png?v=1773307742",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/boite_oeuf.png?v=1773307742",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/table_calibreuse-removebg-preview.png?v=1773307742",
    ],
    includedEquipment: [
      "Calibreuse automatique 4 voies",
      "Mireuse automatique par transparence",
      "Convoyeurs d\u2019alimentation et d\u2019\u00e9vacuation",
      "Syst\u00e8me d\u2019emballage semi-automatis\u00e9",
      "Armoire \u00e9lectrique",
      "Formation du personnel (3 jours)",
      "Mise en service sur site",
    ],
    advantages: [
      {
        title: "\u00c9quilibre performance/encombrement",
        description: "Le PLE50K offre une cadence semi-industrielle de 50 000 \u0153ufs/h dans un encombrement ma\u00eetris\u00e9, permettant une installation dans des locaux de taille standard sans travaux lourds d\u2019am\u00e9nagement.",
      },
      {
        title: "\u00c9volutivit\u00e9 garantie",
        description: "L\u2019architecture modulaire permet d\u2019ajouter progressivement des fonctionnalit\u00e9s (marquage, emballage automatis\u00e9) ou d\u2019augmenter la cadence sans remplacement complet de la ligne.",
      },
      {
        title: "Accompagnement de la croissance",
        description: "Id\u00e9al pour les \u00e9leveurs en phase de d\u00e9veloppement, le PLE50K offre une marge de capacit\u00e9 suffisante pour absorber l\u2019augmentation de production tout en restant rentable d\u00e8s le d\u00e9marrage.",
      },
    ],
    faq: [
      {
        question: "Le PLE50K peut-il \u00eatre install\u00e9 dans un b\u00e2timent existant ?",
        answer: "Oui, gr\u00e2ce \u00e0 son encombrement r\u00e9duit (environ 8 m x 3,5 m), le PLE50K s\u2019installe dans la plupart des locaux existants. Nous r\u00e9alisons une \u00e9tude d\u2019implantation gratuite avant la commande pour v\u00e9rifier la faisabilit\u00e9.",
      },
      {
        question: "Quelle est la consommation \u00e9lectrique ?",
        answer: "La puissance install\u00e9e est de 7,5 kW en triphas\u00e9 400V. En fonctionnement nominal, la consommation moyenne est d\u2019environ 5 kW, ce qui repr\u00e9sente un co\u00fbt \u00e9nerg\u00e9tique tr\u00e8s mod\u00e9r\u00e9 rapport\u00e9 \u00e0 la cadence de production.",
      },
    ],
    relatedSolutions: ["calibrage", "mirage", "conditionnement-emballage", "marquage-tracabilite"],
  },

  // ──────────────────────────────────────────────
  // PLE25K — 25 000 \u0153ufs/h
  // ──────────────────────────────────────────────
  {
    id: "ple25k",
    slug: "centre-conditionnement-25000-oeufs-heure",
    name: "Centre de conditionnement 25 000 \u0153ufs/heure",
    reference: "PLE25K",
    category: "Centres complets",
    categorySlug: "centres-complets",
    capacity: "25 000 \u0153ufs/h",
    capacityNumber: 25000,
    price: 29540,
    description: "Centre de conditionnement compact pour 25 000 \u0153ufs par heure. Id\u00e9al pour les \u00e9leveurs souhaitant internaliser le conditionnement avec un investissement ma\u00eetris\u00e9. Calibrage et mirage int\u00e9gr\u00e9s, installation rapide et co\u00fbt d\u2019exploitation r\u00e9duit. Solution parfaite pour les \u00e9leveurs moyens et les petits centres de conditionnement.",
    shortDescription: "Solution compacte pour 25 000 \u0153ufs par heure",
    longDescription: `Le centre de conditionnement PLE25K est sp\u00e9cialement con\u00e7u pour les \u00e9leveurs qui souhaitent internaliser le conditionnement de leurs \u0153ufs sans investir dans une ligne industrielle. Avec une cadence de 25 000 \u0153ufs par heure, il r\u00e9pond parfaitement aux besoins des \u00e9levages de taille moyenne et des petits centres de conditionnement traitant entre 5 000 et 50 000 \u0153ufs par jour.

L\u2019ensemble int\u00e8gre une calibreuse avec pes\u00e9e \u00e9lectronique pour un tri pr\u00e9cis en trois cat\u00e9gories (L, M, S) ainsi qu\u2019un module de mirage par transparence pour garantir la qualit\u00e9 des \u0153ufs commercialis\u00e9s. L\u2019alimentation se fait manuellement ou par convoyeur court selon la configuration choisie, offrant une flexibilit\u00e9 d\u2019utilisation appr\u00e9ci\u00e9e.

Le PLE25K se distingue par son installation rapide (2 \u00e0 3 jours) et son co\u00fbt d\u2019exploitation r\u00e9duit. Fonctionnant en monophas\u00e9 230V, il ne n\u00e9cessite pas de raccordement \u00e9lectrique sp\u00e9cifique. Un seul op\u00e9rateur suffit pour piloter l\u2019ensemble du processus. C\u2019est la solution id\u00e9ale pour d\u00e9marrer le conditionnement en propre et valoriser directement sa production.`,
    highlights: [
      "Capacit\u00e9 de 25 000 \u0153ufs par heure",
      "Calibrage et mirage int\u00e9gr\u00e9s",
      "Installation rapide en 2 \u00e0 3 jours",
      "Co\u00fbt d\u2019exploitation r\u00e9duit",
      "Fonctionne en monophas\u00e9 230V",
      "Un seul op\u00e9rateur n\u00e9cessaire",
      "Parfait pour internaliser le conditionnement",
      "Compatible marquage en option",
    ],
    specs: [
      { label: "Capacit\u00e9", value: "25 000 \u0153ufs/h" },
      { label: "Cat\u00e9gories de tri", value: "L, M, S" },
      { label: "Pr\u00e9cision de pes\u00e9e", value: "\u00b1 1 g" },
      { label: "Alimentation", value: "Monophas\u00e9 230V / 50 Hz" },
      { label: "Puissance install\u00e9e", value: "2,5 kW" },
      { label: "Mirage", value: "Int\u00e9gr\u00e9 par transparence" },
      { label: "Marquage", value: "En option" },
      { label: "Dimensions estim\u00e9es", value: "4 m x 2,5 m x 1,8 m (L x l x H)" },
      { label: "Poids", value: "Environ 450 kg" },
      { label: "Niveau sonore", value: "< 75 dB" },
      { label: "Certification", value: "CE" },
      { label: "Garantie", value: "24 mois pi\u00e8ces et main d\u2019\u0153uvre" },
    ],
    applications: ["\u00c9leveurs moyens", "Fermes avec vente directe", "Petits centres de conditionnement", "Coop\u00e9ratives locales"],
    image: "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/centre_de_conditionnement_des_oeufs.png?v=1771537133",
    gallery: [
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/centre_conditionnement_oeufs.jpg?v=1771537133",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/container_section.png?v=1771537133",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/calibreuse_oeufs-removebg-preview.png?v=1773307742",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/mireuse-removebg-preview.png?v=1773307742",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/convoyeur_oeufs-removebg-preview.png?v=1773307742",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/table_calibreuse-removebg-preview.png?v=1773307742",
    ],
    includedEquipment: [
      "Calibreuse \u00e9lectronique 3 voies",
      "Mireuse par transparence",
      "Convoyeur court d\u2019alimentation",
      "Table de r\u00e9ception inox",
      "Armoire \u00e9lectrique",
      "Formation du personnel (2 jours)",
      "Mise en service sur site",
    ],
    advantages: [
      {
        title: "Investissement ma\u00eetris\u00e9",
        description: "Le PLE25K repr\u00e9sente un point d\u2019entr\u00e9e accessible pour internaliser le conditionnement. L\u2019\u00e9conomie r\u00e9alis\u00e9e par rapport \u00e0 la sous-traitance permet un amortissement rapide de l\u2019\u00e9quipement.",
      },
      {
        title: "Installation simple",
        description: "Fonctionnant en monophas\u00e9 230V standard, le PLE25K ne n\u00e9cessite aucun raccordement \u00e9lectrique sp\u00e9cifique. L\u2019installation compl\u00e8te prend 2 \u00e0 3 jours seulement, mise en service incluse.",
      },
      {
        title: "Simplicit\u00e9 d\u2019utilisation",
        description: "Un seul op\u00e9rateur suffit pour faire fonctionner l\u2019ensemble de la ligne. L\u2019interface intuitive permet une prise en main rapide, m\u00eame sans exp\u00e9rience pr\u00e9alable en conditionnement industriel.",
      },
    ],
    faq: [
      {
        question: "Le PLE25K convient-il pour la vente directe ?",
        answer: "Absolument. Le PLE25K est particuli\u00e8rement adapt\u00e9 aux \u00e9leveurs pratiquant la vente directe. Il permet de calibrer et conditionner les \u0153ufs de mani\u00e8re professionnelle pour la vente en march\u00e9s, AMAP ou magasins de producteurs.",
      },
      {
        question: "Peut-on \u00e9voluer vers une capacit\u00e9 sup\u00e9rieure ?",
        answer: "Le PLE25K est con\u00e7u pour \u00eatre autonome, mais si votre production augmente, nous proposons une reprise de votre \u00e9quipement pour faciliter la transition vers un PLE50K ou sup\u00e9rieur. Contactez-nous pour \u00e9tudier les options.",
      },
    ],
    relatedSolutions: ["calibrage", "mirage", "conditionnement-emballage"],
  },

  // ──────────────────────────────────────────────
  // PLE10K — 10 000 \u0153ufs/h
  // ──────────────────────────────────────────────
  {
    id: "ple10k",
    slug: "centre-conditionnement-10000-oeufs-heure",
    name: "Centre de conditionnement 10 000 \u0153ufs/heure",
    reference: "PLE10K",
    category: "Centres complets",
    categorySlug: "centres-complets",
    capacity: "10 000 \u0153ufs/h",
    capacityNumber: 10000,
    price: 29540,
    description: "Centre de conditionnement pour 10 000 \u0153ufs par heure. Solution accessible et compacte pour les \u00e9leveurs souhaitant professionnaliser leur conditionnement. Calibrage automatique, mirage et emballage dans un format r\u00e9duit. Faible consommation \u00e9nerg\u00e9tique et pilotage par un seul op\u00e9rateur.",
    shortDescription: "Solution accessible pour 10 000 \u0153ufs par heure",
    longDescription: `Le centre de conditionnement PLE10K est la solution id\u00e9ale pour les \u00e9leveurs qui traitent entre 2 000 et 20 000 \u0153ufs par jour et souhaitent professionnaliser leur activit\u00e9 de conditionnement. Compact et \u00e9conomique, ce centre offre toutes les fonctionnalit\u00e9s essentielles : calibrage automatique, mirage et pr\u00e9paration \u00e0 l\u2019emballage.

La calibreuse int\u00e9gr\u00e9e trie les \u0153ufs en trois cat\u00e9gories (L, M, S) gr\u00e2ce \u00e0 un syst\u00e8me de pes\u00e9e \u00e9lectronique fiable. Le mirage par transparence permet de d\u00e9tecter les \u0153ufs f\u00eal\u00e9s ou pr\u00e9sentant des anomalies avant le conditionnement. L\u2019ensemble fonctionne en monophas\u00e9 230V avec une consommation \u00e9nerg\u00e9tique tr\u00e8s faible.

Ce centre est particuli\u00e8rement appr\u00e9ci\u00e9 des \u00e9leveurs en circuits courts, des fermes p\u00e9dagogiques et des producteurs bio qui souhaitent valoriser leur production avec un conditionnement professionnel. Son format compact permet une installation dans un local de conditionnement de taille modeste, y compris dans un b\u00e2timent EggRoom20.`,
    highlights: [
      "Capacit\u00e9 de 10 000 \u0153ufs par heure",
      "Calibrage automatique \u00e9lectronique",
      "Compact et facile \u00e0 installer",
      "Faible consommation \u00e9nerg\u00e9tique",
      "Monophas\u00e9 230V \u2014 aucun raccordement sp\u00e9cial",
      "Un seul op\u00e9rateur n\u00e9cessaire",
      "Id\u00e9al pour circuits courts et vente directe",
      "Compatible b\u00e2timent EggRoom20",
    ],
    specs: [
      { label: "Capacit\u00e9", value: "10 000 \u0153ufs/h" },
      { label: "Cat\u00e9gories de tri", value: "L, M, S" },
      { label: "Pr\u00e9cision de pes\u00e9e", value: "\u00b1 1 g" },
      { label: "Alimentation", value: "Monophas\u00e9 230V / 50 Hz" },
      { label: "Puissance install\u00e9e", value: "1,5 kW" },
      { label: "Mirage", value: "Int\u00e9gr\u00e9 par transparence" },
      { label: "Dimensions estim\u00e9es", value: "3 m x 2 m x 1,6 m (L x l x H)" },
      { label: "Poids", value: "Environ 280 kg" },
      { label: "Niveau sonore", value: "< 72 dB" },
      { label: "Certification", value: "CE" },
      { label: "Garantie", value: "24 mois pi\u00e8ces et main d\u2019\u0153uvre" },
    ],
    applications: ["\u00c9leveurs", "Fermes en circuits courts", "Petits producteurs", "Fermes p\u00e9dagogiques", "Producteurs bio"],
    image: "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/centre_de_conditionnement_des_oeufs.png?v=1771537133",
    gallery: [
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/centre_conditionnement_oeufs.jpg?v=1771537133",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/container_section.png?v=1771537133",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/calibreuse_oeufs-removebg-preview.png?v=1773307742",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/mireuse-removebg-preview.png?v=1773307742",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/convoyeur_oeufs-removebg-preview.png?v=1773307742",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/table_calibreuse-removebg-preview.png?v=1773307742",
    ],
    includedEquipment: [
      "Calibreuse \u00e9lectronique 3 voies",
      "Mireuse par transparence",
      "Table d\u2019alimentation",
      "Bacs de r\u00e9ception par cat\u00e9gorie",
      "Armoire \u00e9lectrique",
      "Formation du personnel (1 jour)",
      "Mise en service sur site",
    ],
    advantages: [
      {
        title: "Accessibilit\u00e9 financi\u00e8re",
        description: "Le PLE10K offre un point d\u2019entr\u00e9e tr\u00e8s accessible pour les \u00e9leveurs souhaitant professionnaliser leur conditionnement. Le faible co\u00fbt d\u2019exploitation (monophas\u00e9, un op\u00e9rateur) maximise la rentabilit\u00e9.",
      },
      {
        title: "Compacit\u00e9",
        description: "Ses dimensions r\u00e9duites permettent une installation dans un local modeste, voire directement dans un b\u00e2timent de conditionnement EggRoom20. Aucun am\u00e9nagement lourd n\u2019est requis.",
      },
      {
        title: "Professionnalisation",
        description: "Le calibrage automatique et le mirage int\u00e9gr\u00e9 permettent de proposer des \u0153ufs calibr\u00e9s et contr\u00f4l\u00e9s, valorisant votre production aupr\u00e8s des consommateurs et des distributeurs.",
      },
    ],
    faq: [
      {
        question: "Le PLE10K est-il adapt\u00e9 pour un \u00e9levage bio ?",
        answer: "Oui, le PLE10K est parfaitement adapt\u00e9 aux \u00e9levages bio. Les mat\u00e9riaux en contact avec les \u0153ufs sont de qualit\u00e9 alimentaire et le syst\u00e8me respecte l\u2019int\u00e9grit\u00e9 des \u0153ufs. Il est possible d\u2019ajouter un tampon de marquage bio en option.",
      },
      {
        question: "Peut-on l\u2019installer dans un EggRoom20 ?",
        answer: "Oui, le PLE10K est dimensionn\u00e9 pour s\u2019int\u00e9grer dans notre b\u00e2timent de conditionnement EggRoom20. Les deux produits sont con\u00e7us pour fonctionner ensemble et offrir une solution compl\u00e8te cl\u00e9 en main.",
      },
    ],
    relatedSolutions: ["calibrage", "mirage", "conditionnement-emballage"],
  },

  // ──────────────────────────────────────────────
  // PLE5000 — 5 000 \u0153ufs/h
  // ──────────────────────────────────────────────
  {
    id: "ple5000",
    slug: "centre-conditionnement-5000-oeufs-heure",
    name: "Centre de conditionnement 5 000 \u0153ufs/heure",
    reference: "PLE5000",
    category: "Centres complets",
    categorySlug: "centres-complets",
    capacity: "5 000 \u0153ufs/h",
    capacityNumber: 5000,
    price: 24820,
    description: "Centre de conditionnement d\u2019entr\u00e9e de gamme pour 5 000 \u0153ufs par heure. Parfait pour les petits \u00e9leveurs, les d\u00e9marrages d\u2019activit\u00e9 et la vente directe \u00e0 la ferme. Investissement accessible, simple d\u2019utilisation, encombrement minimal. La solution id\u00e9ale pour conditionner vos \u0153ufs de mani\u00e8re professionnelle.",
    shortDescription: "Solution d\u2019entr\u00e9e de gamme pour 5 000 \u0153ufs par heure",
    longDescription: `Le centre de conditionnement PLE5000 est notre solution d\u2019entr\u00e9e de gamme con\u00e7ue pour les petits \u00e9leveurs et les d\u00e9marrages d\u2019activit\u00e9. Avec une cadence de 5 000 \u0153ufs par heure, il permet de conditionner la production quotidienne d\u2019un \u00e9levage de 500 \u00e0 3 000 poules en quelques heures seulement, lib\u00e9rant du temps pour les autres t\u00e2ches de la ferme.

L\u2019\u00e9quipement comprend une calibreuse compacte avec tri en trois cat\u00e9gories (L, M, S), un mirage de contr\u00f4le et une zone de conditionnement int\u00e9gr\u00e9e. L\u2019ensemble est d\u2019une simplicit\u00e9 d\u2019utilisation remarquable : un seul op\u00e9rateur g\u00e8re l\u2019int\u00e9gralit\u00e9 du processus, de l\u2019alimentation en \u0153ufs \u00e0 la mise en bo\u00eete.

Le PLE5000 fonctionne sur une simple prise monophas\u00e9e 230V et son encombrement minimal permet une installation dans un local r\u00e9duit. C\u2019est le choix privil\u00e9gi\u00e9 des \u00e9leveurs en vente directe, en AMAP ou sur les march\u00e9s qui souhaitent proposer des \u0153ufs calibr\u00e9s et contr\u00f4l\u00e9s \u00e0 leurs clients, renfor\u00e7ant ainsi leur image de professionnalisme et la confiance des consommateurs.`,
    highlights: [
      "Capacit\u00e9 de 5 000 \u0153ufs par heure",
      "Investissement accessible \u2014 entr\u00e9e de gamme",
      "Simple d\u2019utilisation, un seul op\u00e9rateur",
      "Encombrement minimal",
      "Monophas\u00e9 230V standard",
      "Calibrage en 3 cat\u00e9gories (L, M, S)",
      "Mirage de contr\u00f4le int\u00e9gr\u00e9",
      "Id\u00e9al vente directe et march\u00e9s",
    ],
    specs: [
      { label: "Capacit\u00e9", value: "5 000 \u0153ufs/h" },
      { label: "Cat\u00e9gories de tri", value: "L, M, S" },
      { label: "Pr\u00e9cision de pes\u00e9e", value: "\u00b1 1 g" },
      { label: "Alimentation", value: "Monophas\u00e9 230V / 50 Hz" },
      { label: "Puissance install\u00e9e", value: "0,75 kW" },
      { label: "Mirage", value: "Contr\u00f4le int\u00e9gr\u00e9" },
      { label: "Dimensions estim\u00e9es", value: "2,5 m x 1,5 m x 1,5 m (L x l x H)" },
      { label: "Poids", value: "Environ 180 kg" },
      { label: "Niveau sonore", value: "< 70 dB" },
      { label: "Certification", value: "CE" },
      { label: "Garantie", value: "24 mois pi\u00e8ces et main d\u2019\u0153uvre" },
    ],
    applications: ["Petits \u00e9leveurs", "D\u00e9marrage d\u2019activit\u00e9", "Vente directe \u00e0 la ferme", "AMAP et march\u00e9s", "Fermes p\u00e9dagogiques"],
    image: "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/centre_de_conditionnement_des_oeufs.png?v=1771537133",
    gallery: [
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/centre_conditionnement_oeufs.jpg?v=1771537133",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/container_section.png?v=1771537133",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/calibreuse_oeufs-removebg-preview.png?v=1773307742",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/mireuse-removebg-preview.png?v=1773307742",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/convoyeur_oeufs-removebg-preview.png?v=1773307742",
    ],
    includedEquipment: [
      "Calibreuse compacte 3 voies",
      "Mireuse de contr\u00f4le",
      "Table d\u2019alimentation compacte",
      "Bacs de r\u00e9ception par cat\u00e9gorie",
      "Formation du personnel (1 jour)",
      "Mise en service sur site",
    ],
    advantages: [
      {
        title: "Investissement minimal",
        description: "Le PLE5000 offre le meilleur rapport qualit\u00e9/prix pour d\u00e9marrer le conditionnement professionnel. Son co\u00fbt d\u2019acquisition et d\u2019exploitation en fait la solution la plus accessible du march\u00e9.",
      },
      {
        title: "Simplicit\u00e9 extr\u00eame",
        description: "Aucune comp\u00e9tence technique particuli\u00e8re n\u2019est requise. L\u2019\u00e9quipement est op\u00e9rationnel en quelques heures et la formation initiale prend une seule journ\u00e9e. Id\u00e9al pour les \u00e9leveurs qui g\u00e8rent tout seuls.",
      },
      {
        title: "Valorisation de la production",
        description: "Proposer des \u0153ufs calibr\u00e9s et contr\u00f4l\u00e9s renforce la confiance des clients en vente directe et permet de pratiquer des prix coh\u00e9rents avec la qualit\u00e9 de votre production.",
      },
    ],
    faq: [
      {
        question: "Le PLE5000 convient-il pour d\u00e9marrer une activit\u00e9 ?",
        answer: "Oui, c\u2019est pr\u00e9cis\u00e9ment la solution con\u00e7ue pour les d\u00e9marrages d\u2019activit\u00e9. Son investissement accessible et sa simplicit\u00e9 d\u2019utilisation en font le choix id\u00e9al pour les porteurs de projets et les \u00e9leveurs qui se lancent dans la vente d\u2019\u0153ufs.",
      },
      {
        question: "Quelles sont les options de financement ?",
        answer: "Nous proposons plusieurs solutions de financement : cr\u00e9dit-bail, location avec option d\u2019achat et paiement en plusieurs fois. Contactez-nous pour \u00e9tudier la solution la plus adapt\u00e9e \u00e0 votre situation.",
      },
    ],
    relatedSolutions: ["calibrage", "mirage", "conditionnement-emballage"],
  },

  // ──────────────────────────────────────────────
  // EggRoom20 — B\u00e2timent de conditionnement
  // ──────────────────────────────────────────────
  {
    id: "eggroom20",
    slug: "centre-conditionnement-300-1000-oeufs-jour",
    name: "Centre de conditionnement 300 \u00e0 1000 \u0153ufs/jour",
    reference: "EggRoom20",
    category: "Centres complets",
    categorySlug: "centres-complets",
    capacity: "300-1000 \u0153ufs/jour",
    capacityNumber: 1000,
    price: 24540,
    description: "B\u00e2timent de conditionnement des \u0153ufs obligatoire d\u00e8s que l\u2019\u00e9levage d\u00e9passe 250 poules pondeuses. Structure cl\u00e9 en main de 20 m\u00b2 (6 m x 3,3 m) avec SAS d\u2019entr\u00e9e norm\u00e9, lavabo eau chaude, zone de stockage r\u00e9frig\u00e9rable, isolation panneaux sandwich 40 mm, dalle b\u00e9ton, r\u00e9seau \u00e9lectrique et \u00e9clairage conforme. Livr\u00e9 pr\u00eat \u00e0 poser, conforme aux exigences sanitaires de la DDPP.",
    shortDescription: "B\u00e2timent de conditionnement conforme pour petits \u00e9levages",
    longDescription: `Le EggRoom20 n\u2019est pas une machine mais un v\u00e9ritable b\u00e2timent de conditionnement des \u0153ufs, cl\u00e9 en main et conforme aux exigences de la r\u00e9glementation sanitaire fran\u00e7aise. La loi impose \u00e0 tout \u00e9levage d\u00e9passant 250 poules pondeuses de disposer d\u2019un local de conditionnement d\u00e9di\u00e9, s\u00e9par\u00e9 du poulailler et r\u00e9pondant \u00e0 des normes strictes d\u2019hygi\u00e8ne et de tra\u00e7abilit\u00e9. Le EggRoom20 r\u00e9pond \u00e0 toutes ces obligations r\u00e9glementaires.

Le b\u00e2timent mesure 6 m\u00e8tres de long sur 3,3 m\u00e8tres de large, soit une surface utile de 20 m\u00b2. Il comprend un SAS d\u2019entr\u00e9e norm\u00e9 \u00e9quip\u00e9 d\u2019un lavabo avec eau chaude et d\u2019un distributeur de savon \u2014 le passage par le SAS est obligatoire avant d\u2019acc\u00e9der \u00e0 la zone de conditionnement. Le plan de nettoyage DDPP est int\u00e9gr\u00e9 avec les \u00e9quipements correspondants. La zone principale accueille l\u2019espace de travail pour le tri, le calibrage et l\u2019emballage des \u0153ufs.

L\u2019isolation est assur\u00e9e par des panneaux sandwich de 40 mm d\u2019\u00e9paisseur, garantissant une temp\u00e9rature stable essentielle \u00e0 la bonne conservation des \u0153ufs. Le sol est constitu\u00e9 d\u2019une dalle b\u00e9ton liss\u00e9e, facile \u00e0 nettoyer et conforme aux normes d\u2019hygi\u00e8ne. Le r\u00e9seau \u00e9lectrique est pr\u00e9-install\u00e9 avec prises de courant et \u00e9clairage LED conforme. La zone de stockage r\u00e9frig\u00e9rable permet de maintenir les \u0153ufs \u00e0 temp\u00e9rature optimale avant exp\u00e9dition.

Le EggRoom20 est livr\u00e9 pr\u00eat \u00e0 poser sur une dalle existante ou sur plots b\u00e9ton. L\u2019installation est rapide (1 \u00e0 2 jours) et ne n\u00e9cessite pas de permis de construire dans la plupart des cas (simple d\u00e9claration pr\u00e9alable). Ce b\u00e2timent est la premi\u00e8re \u00e9tape indispensable pour tout \u00e9leveur souhaitant se mettre en conformit\u00e9 avec la r\u00e9glementation et obtenir son agr\u00e9ment sanitaire DDPP.`,
    highlights: [
      "Obligatoire pour les \u00e9levages de plus de 250 poules",
      "SAS d\u2019entr\u00e9e norm\u00e9 avec lavabo eau chaude",
      "Isolation panneaux sandwich 40 mm",
      "Zone de stockage r\u00e9frig\u00e9rable",
      "Dalle b\u00e9ton liss\u00e9e conforme hygi\u00e8ne",
      "R\u00e9seau \u00e9lectrique et \u00e9clairage LED pr\u00e9-install\u00e9s",
      "Plan de nettoyage DDPP int\u00e9gr\u00e9",
      "Livr\u00e9 pr\u00eat \u00e0 poser \u2014 installation 1 \u00e0 2 jours",
    ],
    specs: [
      { label: "Capacit\u00e9", value: "300 \u00e0 1 000 \u0153ufs/jour" },
      { label: "Surface utile", value: "20 m\u00b2" },
      { label: "Dimensions ext\u00e9rieures", value: "6 m x 3,3 m" },
      { label: "Hauteur sous plafond", value: "2,5 m" },
      { label: "Isolation", value: "Panneaux sandwich 40 mm" },
      { label: "Sol", value: "Dalle b\u00e9ton liss\u00e9e" },
      { label: "SAS", value: "Inclus avec lavabo eau chaude" },
      { label: "\u00c9lectrique", value: "Monophas\u00e9 230V pr\u00e9-c\u00e2bl\u00e9" },
      { label: "\u00c9clairage", value: "LED conforme" },
      { label: "R\u00e9frig\u00e9ration", value: "Zone r\u00e9frig\u00e9rable (option climatisation)" },
      { label: "Conformit\u00e9", value: "Normes DDPP / R\u00e9glementation sanitaire" },
      { label: "Installation", value: "1 \u00e0 2 jours sur dalle ou plots b\u00e9ton" },
    ],
    applications: ["\u00c9levages de 250+ poules", "Mise en conformit\u00e9 r\u00e9glementaire", "Vente directe", "Obtention agr\u00e9ment sanitaire DDPP"],
    image: "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/centre_de_conditionnement_des_oeufs.png?v=1771537133",
    gallery: [
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/container_section.png?v=1771537133",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/centre_conditionnement_oeufs.jpg?v=1771537133",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/table_calibreuse-removebg-preview.png?v=1773307742",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/image-removebg-preview_11.png?v=1773307742",
    ],
    includedEquipment: [
      "Structure b\u00e2timent isol\u00e9e (panneaux sandwich 40 mm)",
      "SAS d\u2019entr\u00e9e norm\u00e9 avec porte",
      "Lavabo avec arriv\u00e9e eau chaude et froide",
      "Distributeur de savon et essuie-mains",
      "Dalle b\u00e9ton liss\u00e9e (si option dalle incluse)",
      "R\u00e9seau \u00e9lectrique pr\u00e9-c\u00e2bl\u00e9 avec diff\u00e9rentiel",
      "\u00c9clairage LED conforme",
      "Kit plan de nettoyage DDPP",
      "Notice de montage et guide de mise en conformit\u00e9",
    ],
    advantages: [
      {
        title: "Conformit\u00e9 r\u00e9glementaire garantie",
        description: "Le EggRoom20 est con\u00e7u pour satisfaire toutes les exigences de la DDPP en mati\u00e8re de local de conditionnement. SAS d\u2019entr\u00e9e, lavabo, mat\u00e9riaux lavables, plan de nettoyage : tout est int\u00e9gr\u00e9 pour faciliter l\u2019obtention de votre agr\u00e9ment sanitaire.",
      },
      {
        title: "Installation rapide sans permis de construire",
        description: "Livr\u00e9 en kit pr\u00eat \u00e0 poser, le EggRoom20 s\u2019installe en 1 \u00e0 2 jours sur une dalle existante ou sur plots b\u00e9ton. Dans la plupart des cas, une simple d\u00e9claration pr\u00e9alable de travaux suffit, \u00e9vitant les d\u00e9lais li\u00e9s \u00e0 un permis de construire.",
      },
      {
        title: "Conservation optimale des \u0153ufs",
        description: "L\u2019isolation en panneaux sandwich 40 mm et la zone r\u00e9frig\u00e9rable garantissent une temp\u00e9rature stable et conforme \u00e0 la r\u00e9glementation pour la conservation des \u0153ufs avant commercialisation.",
      },
      {
        title: "Solution cl\u00e9 en main",
        description: "Tout est inclus pour d\u00e9marrer imm\u00e9diatement : structure, \u00e9lectricit\u00e9, plomberie, \u00e9clairage et \u00e9quipements d\u2019hygi\u00e8ne. Vous n\u2019avez rien \u00e0 pr\u00e9voir hormis le raccordement aux r\u00e9seaux existants.",
      },
    ],
    faq: [
      {
        question: "Le EggRoom20 est-il obligatoire pour mon \u00e9levage ?",
        answer: "Oui, d\u00e8s que votre \u00e9levage d\u00e9passe 250 poules pondeuses, la r\u00e9glementation sanitaire impose de disposer d\u2019un local de conditionnement d\u00e9di\u00e9, s\u00e9par\u00e9 du poulailler, conforme aux normes DDPP. Le EggRoom20 r\u00e9pond \u00e0 cette obligation.",
      },
      {
        question: "Faut-il un permis de construire ?",
        answer: "Dans la grande majorit\u00e9 des cas, une d\u00e9claration pr\u00e9alable de travaux suffit pour une structure de 20 m\u00b2. Nous vous fournissons les plans et documents n\u00e9cessaires pour constituer votre dossier en mairie.",
      },
      {
        question: "Peut-on y installer des machines de conditionnement ?",
        answer: "Absolument. Le EggRoom20 est dimensionn\u00e9 pour accueillir nos centres de conditionnement PLE5000 et PLE10K. L\u2019alimentation \u00e9lectrique est pr\u00e9-c\u00e2bl\u00e9e pour cet usage. Nous proposons des packs combin\u00e9s b\u00e2timent + machines \u00e0 prix avantageux.",
      },
    ],
    relatedSolutions: ["conditionnement-emballage", "stockage-conservation", "reglementation-sanitaire"],
  },

  // ──────────────────────────────────────────────
  // IntelEgg1400 — Calibreuse
  // ──────────────────────────────────────────────
  {
    id: "intelegg1400",
    slug: "calibreuse-oeufs-intelegg1400",
    name: "Calibreuse \u0153ufs IntelEgg1400",
    reference: "IntelEgg1400",
    category: "Calibreuses & Mireuses",
    categorySlug: "calibreuses",
    capacity: "5 400 \u0153ufs/h",
    capacityNumber: 5400,
    price: 5420,
    description: "Calibreuse mireuse \u00e9lectronique pour \u0153ufs, traitant jusqu\u2019\u00e0 5 400 \u0153ufs par heure. Chaque \u0153uf est pes\u00e9 individuellement par cellule de charge \u00e9lectronique puis dirig\u00e9 vers la voie de tri correspondante. Le mirage par transparence int\u00e9gr\u00e9 d\u00e9tecte les f\u00ealures, les taches de sang et les anomalies internes. Construction enti\u00e8rement en inox alimentaire. Adapt\u00e9e pour les centres traitant de 2 000 \u00e0 20 000 \u0153ufs par jour.",
    shortDescription: "Calibreuse mireuse robuste pour 2 000 \u00e0 20 000 \u0153ufs/jour",
    longDescription: `La calibreuse IntelEgg1400 est une machine de tri et de mirage des \u0153ufs enti\u00e8rement automatis\u00e9e, con\u00e7ue pour les centres de conditionnement traitant de 2 000 \u00e0 20 000 \u0153ufs par jour. Son syst\u00e8me de pes\u00e9e \u00e9lectronique individuel garantit un classement pr\u00e9cis de chaque \u0153uf dans les cat\u00e9gories r\u00e9glementaires XL, L, M, S et XS.

Le fonctionnement est simple et efficace. Les \u0153ufs sont d\u00e9pos\u00e9s manuellement ou par convoyeur sur la rampe d\u2019alimentation. Ils passent d\u2019abord par le module de mirage par transparence, o\u00f9 une source lumineuse puissante \u00e9claire chaque \u0153uf pour r\u00e9v\u00e9ler les f\u00ealures invisibles \u00e0 l\u2019\u0153il nu, les taches de sang et les anomalies de la chambre \u00e0 air. Les \u0153ufs non conformes sont automatiquement \u00e9cart\u00e9s. Les \u0153ufs valid\u00e9s poursuivent vers la station de pes\u00e9e o\u00f9 une cellule de charge \u00e9lectronique d\u00e9termine leur poids \u00e0 0,5 g pr\u00e8s.

Un m\u00e9canisme d\u2019aiguillage oriente ensuite chaque \u0153uf vers la voie de tri correspondant \u00e0 sa cat\u00e9gorie de poids. Les cinq voies de sortie aboutissent \u00e0 des bacs ou des tapis de r\u00e9ception o\u00f9 les \u0153ufs sont regroup\u00e9s par calibre, pr\u00eats pour l\u2019emballage. La construction enti\u00e8rement en inox alimentaire facilite le nettoyage et garantit la durabilit\u00e9 de la machine dans les environnements de production exigeants.`,
    highlights: [
      "Capacit\u00e9 de 5 400 \u0153ufs par heure",
      "Pes\u00e9e \u00e9lectronique individuelle haute pr\u00e9cision",
      "Mirage int\u00e9gr\u00e9 par transparence avec d\u00e9tection des d\u00e9fauts",
      "Tri automatique en 5 cat\u00e9gories (XL, L, M, S, XS)",
      "Construction enti\u00e8rement en inox alimentaire",
      "Simple d\u2019utilisation \u2014 un seul op\u00e9rateur",
      "Maintenance r\u00e9duite et pi\u00e8ces d\u2019usure accessibles",
      "Compatible convoyeur d\u2019alimentation",
    ],
    specs: [
      { label: "Capacit\u00e9", value: "5 400 \u0153ufs/h" },
      { label: "Cat\u00e9gories de tri", value: "XL, L, M, S, XS (5 voies)" },
      { label: "Pr\u00e9cision de pes\u00e9e", value: "\u00b1 0,5 g" },
      { label: "Mirage", value: "Int\u00e9gr\u00e9 par transparence" },
      { label: "Alimentation", value: "Monophas\u00e9 230V / 50 Hz" },
      { label: "Puissance", value: "0,55 kW" },
      { label: "Mat\u00e9riau", value: "Inox alimentaire 304" },
      { label: "Dimensions", value: "2,2 m x 0,8 m x 1,2 m (L x l x H)" },
      { label: "Poids", value: "Environ 120 kg" },
      { label: "Niveau sonore", value: "< 68 dB" },
      { label: "Certification", value: "CE" },
      { label: "Garantie", value: "24 mois pi\u00e8ces et main d\u2019\u0153uvre" },
    ],
    applications: ["Centres de conditionnement", "\u00c9leveurs", "Fermes avec vente directe", "Calibrage avant emballage"],
    image: "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/calibreuse.jpg?v=1772706459",
    gallery: [
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/calibreuse_oeufs-removebg-preview.png?v=1773307742",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/mireuse-removebg-preview.png?v=1773307742",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/table_calibreuse-removebg-preview.png?v=1773307742",
    ],
    includedEquipment: [
      "Calibreuse \u00e9lectronique 5 voies en inox",
      "Module de mirage par transparence",
      "Rampe d\u2019alimentation",
      "Bacs de r\u00e9ception par cat\u00e9gorie (x5)",
      "Kit de nettoyage",
      "Manuel technique et guide d\u2019\u00e9talonnage",
      "Formation op\u00e9rateur (1/2 journ\u00e9e)",
    ],
    advantages: [
      {
        title: "Pr\u00e9cision de classement",
        description: "La cellule de charge \u00e9lectronique p\u00e8se chaque \u0153uf individuellement \u00e0 0,5 g pr\u00e8s, garantissant un classement conforme aux normes europ\u00e9ennes de commercialisation. Fini les erreurs de tri manuel.",
      },
      {
        title: "Contr\u00f4le qualit\u00e9 int\u00e9gr\u00e9",
        description: "Le mirage par transparence d\u00e9tecte automatiquement les \u0153ufs f\u00eal\u00e9s, les taches internes et les anomalies, r\u00e9duisant les r\u00e9clamations clients et les retours produits.",
      },
      {
        title: "Durabilit\u00e9 et hygi\u00e8ne",
        description: "La construction enti\u00e8rement en inox alimentaire 304 assure une dur\u00e9e de vie exceptionnelle et un nettoyage facile, conforme aux exigences d\u2019hygi\u00e8ne les plus strictes.",
      },
    ],
    faq: [
      {
        question: "Comment \u00e9talonner la calibreuse ?",
        answer: "L\u2019\u00e9talonnage se fait simplement \u00e0 l\u2019aide de notre kit d\u2019\u0153ufs \u00e9talon EggKit60. La proc\u00e9dure prend moins de 15 minutes et est d\u00e9crite pas \u00e0 pas dans le manuel. Nous recommandons un \u00e9talonnage mensuel pour garantir la pr\u00e9cision.",
      },
      {
        question: "Peut-on int\u00e9grer la calibreuse sur une ligne existante ?",
        answer: "Oui, l\u2019IntelEgg1400 peut \u00eatre coupl\u00e9e \u00e0 un convoyeur d\u2019alimentation et connect\u00e9e en amont d\u2019une emballeuse ou d\u2019une tamponneuse. Les interfaces m\u00e9caniques sont standardis\u00e9es.",
      },
      {
        question: "Quelles sont les pi\u00e8ces d\u2019usure ?",
        answer: "Les principales pi\u00e8ces d\u2019usure sont les guides de transfert en silicone alimentaire et les ampoules de mirage. Ces pi\u00e8ces sont peu co\u00fbteuses et facilement rempla\u00e7ables par l\u2019op\u00e9rateur sans outillage sp\u00e9cifique.",
      },
    ],
    relatedSolutions: ["calibrage", "mirage", "conditionnement-emballage"],
  },

  // ──────────────────────────────────────────────
  // EggTech4000 — Tamponneuse / Imprimante
  // ──────────────────────────────────────────────
  {
    id: "eggtech4000",
    slug: "imprimante-oeufs-eggtech4000",
    name: "Imprimante \u00e0 \u0153ufs EggTech4000",
    reference: "EggTech4000",
    category: "Impression & Marquage",
    categorySlug: "impression-marquage",
    capacity: "6 300 \u0153ufs/h",
    capacityNumber: 6300,
    price: 5750,
    description: "Tamponneuse et imprimante \u00e0 \u0153ufs EggTech4000, traitant jusqu\u2019\u00e0 6 300 \u0153ufs par heure. Impression par tampon rotatif avec encre alimentaire certifi\u00e9e. Personnalisation compl\u00e8te : code producteur, date de ponte, DLC, mode d\u2019\u00e9levage et logo. Syst\u00e8me d\u2019alimentation automatique par tapis. Conforme aux exigences de tra\u00e7abilit\u00e9 DDPP. Int\u00e9grable sur ligne de conditionnement existante.",
    shortDescription: "Tamponneuse professionnelle jusqu\u2019\u00e0 6 300 \u0153ufs/heure",
    longDescription: `L\u2019EggTech4000 est une tamponneuse professionnelle con\u00e7ue pour imprimer les informations r\u00e9glementaires sur chaque \u0153uf \u00e0 une cadence de 6 300 \u0153ufs par heure. Son syst\u00e8me d\u2019impression par tampon rotatif garantit un marquage net, lisible et durable directement sur la coquille de l\u2019\u0153uf, m\u00eame sur les surfaces irr\u00e9guli\u00e8res.

Le m\u00e9canisme d\u2019alimentation automatique par tapis achemine les \u0153ufs un \u00e0 un vers la station d\u2019impression. Le tampon rotatif descend sur chaque \u0153uf avec une pression calibr\u00e9e pour un marquage uniforme sans risque de casse. L\u2019encre utilis\u00e9e est une encre alimentaire certifi\u00e9e, s\u00e9chant en moins de 2 secondes au contact de la coquille. Les cartouches d\u2019encre sont facilement rempla\u00e7ables et permettent environ 100 000 impressions.

Le contenu du marquage est enti\u00e8rement personnalisable : code producteur (FR-XXX), date de ponte, date limite de consommation, mode d\u2019\u00e9levage (0 = bio, 1 = plein air, 2 = sol, 3 = cage) et logo de l\u2019exploitation. Les clich\u00e9s de tampons sont r\u00e9alisables sur commande et interchangeables en quelques minutes. L\u2019EggTech4000 est int\u00e9grable sur toute ligne de conditionnement existante et constitue un \u00e9quipement indispensable pour la mise en conformit\u00e9 DDPP.`,
    highlights: [
      "Impression jusqu\u2019\u00e0 6 300 \u0153ufs/heure",
      "Tampon rotatif \u00e0 pression calibr\u00e9e",
      "Encre alimentaire certifi\u00e9e s\u00e9chage rapide",
      "Code producteur, date, DLC, logo personnalisable",
      "Alimentation automatique par tapis",
      "Clich\u00e9s interchangeables en quelques minutes",
      "Compatible agr\u00e9ment DDPP",
      "Int\u00e9grable sur ligne existante",
    ],
    specs: [
      { label: "Capacit\u00e9", value: "6 300 \u0153ufs/h" },
      { label: "Technologie", value: "Tampon rotatif" },
      { label: "R\u00e9solution", value: "300 DPI" },
      { label: "Encre", value: "Alimentaire certifi\u00e9e \u2014 s\u00e9chage < 2 s" },
      { label: "Autonomie encre", value: "Environ 100 000 impressions/cartouche" },
      { label: "Marquage", value: "Code producteur, date, DLC, logo" },
      { label: "Alimentation", value: "Monophas\u00e9 230V / 50 Hz" },
      { label: "Puissance", value: "0,35 kW" },
      { label: "Dimensions", value: "1,2 m x 0,6 m x 0,9 m (L x l x H)" },
      { label: "Poids", value: "Environ 65 kg" },
      { label: "Certification", value: "CE" },
      { label: "Garantie", value: "24 mois pi\u00e8ces et main d\u2019\u0153uvre" },
    ],
    applications: ["Centres de conditionnement", "Mise en conformit\u00e9 tra\u00e7abilit\u00e9", "Marquage r\u00e9glementaire", "Personnalisation et branding"],
    image: "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/Eggtech4000_4.png?v=1773317424",
    gallery: [
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/Eggtech4000_3.png?v=1773317424",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/Eggtech4000_2.png?v=1773317424",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/Eggtech4000_1.png?v=1773317424",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/marquage_tete.png?v=1773307742",
    ],
    includedEquipment: [
      "Tamponneuse EggTech4000 compl\u00e8te",
      "Tapis d\u2019alimentation automatique",
      "Jeu de clich\u00e9s personnalis\u00e9s (1 mod\u00e8le)",
      "2 cartouches d\u2019encre alimentaire",
      "Kit de nettoyage et d\u2019entretien",
      "Manuel technique",
      "Formation op\u00e9rateur (1/2 journ\u00e9e)",
    ],
    advantages: [
      {
        title: "Marquage net et durable",
        description: "Le tampon rotatif \u00e0 pression calibr\u00e9e produit un marquage parfaitement lisible sur la coquille, r\u00e9sistant \u00e0 la manipulation et au stockage. L\u2019encre alimentaire s\u00e8che en moins de 2 secondes.",
      },
      {
        title: "Conformit\u00e9 r\u00e9glementaire",
        description: "L\u2019EggTech4000 imprime toutes les mentions obligatoires exig\u00e9es par la DDPP : code producteur, date de ponte, mode d\u2019\u00e9levage. Le passage au marquage automatique \u00e9limine les erreurs humaines.",
      },
      {
        title: "Faible co\u00fbt d\u2019exploitation",
        description: "Avec environ 100 000 impressions par cartouche d\u2019encre, le co\u00fbt unitaire de marquage est extr\u00eamement r\u00e9duit. Les clich\u00e9s sont durables et les pi\u00e8ces d\u2019usure peu co\u00fbteuses.",
      },
    ],
    faq: [
      {
        question: "Comment changer le clich\u00e9 de tampon ?",
        answer: "Le changement de clich\u00e9 se fait sans outil en moins de 5 minutes. Il suffit de d\u00e9clipser l\u2019ancien clich\u00e9 et de clipser le nouveau. Nous fournissons les clich\u00e9s personnalis\u00e9s sur commande avec un d\u00e9lai de 5 jours ouvr\u00e9s.",
      },
      {
        question: "L\u2019encre est-elle vraiment alimentaire ?",
        answer: "Oui, l\u2019encre utilis\u00e9e est certifi\u00e9e alimentaire selon la r\u00e9glementation europ\u00e9enne (R\u00e8glement CE 1935/2004). Elle est sp\u00e9cialement formul\u00e9e pour le contact avec les coquilles d\u2019\u0153ufs et n\u2019alt\u00e8re ni le go\u00fbt ni la qualit\u00e9 du produit.",
      },
      {
        question: "Quelle maintenance est n\u00e9cessaire ?",
        answer: "La maintenance se r\u00e9sume au nettoyage quotidien du tampon (5 minutes) et au remplacement des cartouches d\u2019encre environ tous les 100 000 \u0153ufs. Un entretien pr\u00e9ventif semestriel est recommand\u00e9 pour v\u00e9rifier les pi\u00e8ces m\u00e9caniques.",
      },
    ],
    relatedSolutions: ["marquage-tracabilite", "conditionnement-emballage"],
  },

  // ──────────────────────────────────────────────
  // EggTech2000 — Jet d\u2019encre haute cadence
  // ──────────────────────────────────────────────
  {
    id: "eggtech2000",
    slug: "imprimante-oeufs-eggtech2000",
    name: "Imprimante \u00e0 \u0153ufs EggTech2000",
    reference: "EggTech2000",
    category: "Impression & Marquage",
    categorySlug: "impression-marquage",
    capacity: "16 000 \u0153ufs/h",
    capacityNumber: 16000,
    price: 1450,
    description: "Imprimante jet d\u2019encre EggTech2000 haute cadence pour \u0153ufs, traitant jusqu\u2019\u00e0 16 000 \u0153ufs par heure. R\u00e9solution 600 DPI permettant l\u2019impression de QR codes, logos d\u00e9taill\u00e9s et textes fins. Pilotage int\u00e9gral par application mobile (Android/iOS). Encre alimentaire certifi\u00e9e. Compatible code producteur, date de ponte, DLC, mode d\u2019\u00e9levage, QR code de tra\u00e7abilit\u00e9.",
    shortDescription: "Imprimante jet d\u2019encre haute cadence 16 000 \u0153ufs/heure",
    longDescription: `L\u2019EggTech2000 est notre imprimante jet d\u2019encre de derni\u00e8re g\u00e9n\u00e9ration, con\u00e7ue pour le marquage haute cadence des \u0153ufs. Avec une capacit\u00e9 de 16 000 \u0153ufs par heure et une r\u00e9solution de 600 DPI, elle repr\u00e9sente un bond technologique par rapport aux tamponneuses traditionnelles, permettant l\u2019impression de contenus graphiques complexes directement sur la coquille.

La technologie jet d\u2019encre thermique permet d\u2019imprimer non seulement le code producteur et les dates r\u00e9glementaires, mais \u00e9galement des QR codes de tra\u00e7abilit\u00e9 scannables par les consommateurs, des logos d\u00e9taill\u00e9s et des pictogrammes. Chaque QR code peut pointer vers une page personnalis\u00e9e pr\u00e9sentant l\u2019exploitation, les conditions d\u2019\u00e9levage et le parcours de l\u2019\u0153uf \u2014 un atout consid\u00e9rable pour la transparence et la diff\u00e9renciation commerciale.

Le pilotage s\u2019effectue int\u00e9gralement par application mobile (Android et iOS). L\u2019op\u00e9rateur peut modifier le contenu d\u2019impression, changer les dates, activer ou d\u00e9sactiver le QR code et consulter les statistiques de production depuis son smartphone ou sa tablette. Cette simplicit\u00e9 d\u2019utilisation rend l\u2019EggTech2000 accessible m\u00eame aux petites exploitations qui souhaitent un marquage professionnel sans investissement lourd.`,
    highlights: [
      "Cadence de 16 000 \u0153ufs par heure",
      "R\u00e9solution 600 DPI \u2014 QR codes et logos d\u00e9taill\u00e9s",
      "Pilotage int\u00e9gral par application mobile (Android/iOS)",
      "QR code de tra\u00e7abilit\u00e9 scannable par le consommateur",
      "Encre alimentaire certifi\u00e9e CE",
      "Compatible agr\u00e9ment DDPP",
      "Impression code producteur, date, DLC, mode d\u2019\u00e9levage",
      "Installation plug-and-play en quelques minutes",
    ],
    specs: [
      { label: "Capacit\u00e9", value: "16 000 \u0153ufs/h" },
      { label: "Technologie", value: "Jet d\u2019encre thermique" },
      { label: "R\u00e9solution", value: "600 DPI" },
      { label: "Encre", value: "Alimentaire certifi\u00e9e CE" },
      { label: "Autonomie encre", value: "Environ 200 000 impressions/cartouche" },
      { label: "Pilotage", value: "Application mobile Android / iOS" },
      { label: "Marquage", value: "QR code, logo, code producteur, dates" },
      { label: "Alimentation", value: "Monophas\u00e9 230V / 50 Hz" },
      { label: "Puissance", value: "0,15 kW" },
      { label: "Dimensions", value: "0,4 m x 0,3 m x 0,25 m (L x l x H)" },
      { label: "Poids", value: "Environ 8 kg" },
      { label: "Certification", value: "CE" },
    ],
    applications: ["Centres de conditionnement", "Lignes haute cadence", "Tra\u00e7abilit\u00e9 avanc\u00e9e par QR code", "Marketing et branding sur coquille"],
    image: "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/imprimante_oeuf.jpg?v=1772707796",
    gallery: [
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/marquage_tete.png?v=1773307742",
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/etiquettage_oeufs-removebg-preview.png?v=1773307742",
    ],
    includedEquipment: [
      "Imprimante jet d\u2019encre EggTech2000",
      "Support de montage universel",
      "1 cartouche d\u2019encre alimentaire",
      "C\u00e2ble d\u2019alimentation",
      "Application mobile (licence incluse)",
      "Guide d\u2019installation rapide",
    ],
    advantages: [
      {
        title: "Technologie jet d\u2019encre 600 DPI",
        description: "La r\u00e9solution de 600 DPI permet d\u2019imprimer des QR codes scannables, des logos d\u00e9taill\u00e9s et des textes fins impossibles \u00e0 r\u00e9aliser avec une tamponneuse classique. Un outil de diff\u00e9renciation commerciale puissant.",
      },
      {
        title: "Pilotage mobile intuitif",
        description: "L\u2019application mobile permet de modifier le contenu d\u2019impression en temps r\u00e9el, sans arr\u00eater la production. Changement de date, activation du QR code, personnalisation du logo : tout se fait du bout des doigts.",
      },
      {
        title: "Rapport qualit\u00e9/prix exceptionnel",
        description: "Pour un investissement tr\u00e8s mod\u00e9r\u00e9, l\u2019EggTech2000 offre une cadence de 16 000 \u0153ufs/h et une qualit\u00e9 d\u2019impression professionnelle. Le co\u00fbt unitaire est minimal gr\u00e2ce \u00e0 l\u2019autonomie de 200 000 impressions par cartouche.",
      },
    ],
    faq: [
      {
        question: "Comment fonctionne le QR code de tra\u00e7abilit\u00e9 ?",
        answer: "Chaque QR code imprim\u00e9 sur l\u2019\u0153uf peut pointer vers une URL personnalis\u00e9e de votre choix. Le consommateur scanne le QR code avec son smartphone et acc\u00e8de \u00e0 votre page de tra\u00e7abilit\u00e9 (exploitation, mode d\u2019\u00e9levage, parcours de l\u2019\u0153uf). Vous g\u00e9rez le contenu via l\u2019application mobile.",
      },
      {
        question: "L\u2019EggTech2000 est-elle compatible avec ma ligne existante ?",
        answer: "Oui, l\u2019EggTech2000 est ultra-compacte (40 x 30 x 25 cm) et s\u2019installe sur tout type de convoyeur ou de ligne de conditionnement gr\u00e2ce \u00e0 son support de montage universel. L\u2019installation prend moins de 30 minutes.",
      },
    ],
    relatedSolutions: ["marquage-tracabilite", "conditionnement-emballage"],
  },

  // ──────────────────────────────────────────────
  // InoxEgg — Table inox
  // ──────────────────────────────────────────────
  {
    id: "inoxegg",
    slug: "table-inox-oeufs",
    name: "Table en inox pour les \u0153ufs",
    reference: "InoxEgg",
    category: "\u00c9quipements & Accessoires",
    categorySlug: "equipements",
    capacity: "-",
    capacityNumber: 0,
    price: 550,
    description: "Table de conditionnement pour les \u0153ufs en inox alimentaire 304. Surface de travail spacieuse et ergonomique, id\u00e9ale pour l\u2019entreposage, le tri manuel et l\u2019emballage dans les centres de conditionnement. Pieds r\u00e9glables en hauteur, bords relev\u00e9s anti-chute, surface lisse facile \u00e0 nettoyer. Conforme aux normes d\u2019hygi\u00e8ne HACCP.",
    shortDescription: "Table inox alimentaire pour conditionnement des \u0153ufs",
    longDescription: `La table InoxEgg est un \u00e9quipement essentiel pour tout centre de conditionnement des \u0153ufs. Fabriqu\u00e9e en inox alimentaire 304, elle offre une surface de travail robuste, hygi\u00e9nique et durable pour les op\u00e9rations de tri, de contr\u00f4le et d\u2019emballage des \u0153ufs.

Les bords relev\u00e9s emp\u00eachent la chute accidentelle des \u0153ufs, tandis que les pieds r\u00e9glables en hauteur permettent d\u2019adapter la table \u00e0 l\u2019ergonomie de chaque op\u00e9rateur. La surface lisse et sans joint facilite le nettoyage et la d\u00e9sinfection quotidiens, en conformit\u00e9 avec les protocoles HACCP et les exigences de la DDPP.

Cette table peut \u00eatre utilis\u00e9e seule pour les op\u00e9rations manuelles ou en compl\u00e9ment d\u2019une calibreuse comme plan de r\u00e9ception et d\u2019emballage. Elle s\u2019int\u00e8gre parfaitement dans un b\u00e2timent EggRoom20 et constitue un \u00e9l\u00e9ment indispensable de la cha\u00eene de conditionnement.`,
    highlights: [
      "Inox alimentaire 304 haute qualit\u00e9",
      "Surface de travail spacieuse et ergonomique",
      "Bords relev\u00e9s anti-chute",
      "Pieds r\u00e9glables en hauteur",
      "Facile \u00e0 nettoyer et d\u00e9sinfecter",
      "Conforme normes HACCP et DDPP",
    ],
    specs: [
      { label: "Mat\u00e9riau", value: "Inox alimentaire 304" },
      { label: "Dimensions du plateau", value: "120 cm x 60 cm" },
      { label: "Hauteur", value: "R\u00e9glable de 80 \u00e0 100 cm" },
      { label: "Bords", value: "Relev\u00e9s 3 cm anti-chute" },
      { label: "Charge maximale", value: "150 kg" },
      { label: "Poids", value: "Environ 25 kg" },
      { label: "Pieds", value: "R\u00e9glables avec embouts antid\u00e9rapants" },
      { label: "Conformit\u00e9", value: "HACCP / Contact alimentaire" },
    ],
    applications: ["Centres de conditionnement", "Locaux d\u2019emballage", "Tri manuel et contr\u00f4le qualit\u00e9", "Compl\u00e9ment de calibreuse"],
    image: "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/table-en-inox-InoxEgg.png?v=1773073152",
    gallery: [
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/table_calibreuse-removebg-preview.png?v=1773307742",
    ],
    includedEquipment: [
      "Table inox InoxEgg assembl\u00e9e",
      "4 pieds r\u00e9glables avec embouts antid\u00e9rapants",
      "Notice de montage",
    ],
    advantages: [
      {
        title: "Hygi\u00e8ne irr\u00e9prochable",
        description: "L\u2019inox alimentaire 304 est non poreux, r\u00e9sistant \u00e0 la corrosion et facile \u00e0 d\u00e9sinfecter. La surface lisse sans joint \u00e9limine les zones de r\u00e9tention bact\u00e9rienne.",
      },
      {
        title: "Ergonomie et s\u00e9curit\u00e9",
        description: "Les pieds r\u00e9glables en hauteur et les bords relev\u00e9s anti-chute offrent un confort de travail optimal et r\u00e9duisent la casse lors des manipulations.",
      },
    ],
    faq: [
      {
        question: "La table est-elle livr\u00e9e mont\u00e9e ?",
        answer: "La table est livr\u00e9e en kit pr\u00e9-assembl\u00e9 pour faciliter le transport. Le montage final prend moins de 15 minutes avec les outils fournis et ne n\u00e9cessite aucune comp\u00e9tence particuli\u00e8re.",
      },
    ],
    relatedSolutions: ["conditionnement-emballage", "equipement-inox"],
  },

  // ──────────────────────────────────────────────
  // InoxStable120 — \u00c9tag\u00e8re alimentaire
  // ──────────────────────────────────────────────
  {
    id: "inoxstable120",
    slug: "etagere-alimentaire-oeufs",
    name: "\u00c9tag\u00e8re alimentaire \u0153ufs",
    reference: "InoxStable120",
    category: "\u00c9quipements & Accessoires",
    categorySlug: "equipements",
    capacity: "-",
    capacityNumber: 0,
    price: 550,
    description: "\u00c9tag\u00e8re alimentaire en inox 304 pour le stockage des \u0153ufs dans les centres de conditionnement. Plusieurs niveaux de rangement pour organiser les plateaux et bo\u00eetes d\u2019\u0153ufs. Construction robuste et durable, conforme aux normes d\u2019hygi\u00e8ne HACCP. Id\u00e9ale pour les zones de stockage, chambres froides et locaux de conditionnement.",
    shortDescription: "\u00c9tag\u00e8re inox alimentaire pour stockage des \u0153ufs",
    longDescription: `L\u2019\u00e9tag\u00e8re InoxStable120 est con\u00e7ue sp\u00e9cifiquement pour le stockage des \u0153ufs dans les centres de conditionnement et les locaux de stockage. Sa construction en inox alimentaire 304 garantit une dur\u00e9e de vie exceptionnelle et une hygi\u00e8ne parfaite, m\u00eame en environnement humide ou r\u00e9frig\u00e9r\u00e9.

Avec ses quatre niveaux de rangement espac\u00e9s de mani\u00e8re optimale, elle accueille les plateaux alvéol\u00e9s de 30 \u0153ufs, les bo\u00eetes de conditionnement et les caisses de transport. La charge par \u00e9tag\u00e8re est de 50 kg, permettant un stockage dense et organis\u00e9. Les \u00e9tag\u00e8res ajour\u00e9es favorisent la circulation de l\u2019air, essentielle \u00e0 la bonne conservation des \u0153ufs.

L\u2019InoxStable120 s\u2019int\u00e8gre parfaitement dans un b\u00e2timent EggRoom20, dans une chambre froide ou dans tout local de conditionnement. Elle compl\u00e8te id\u00e9alement la table InoxEgg pour cr\u00e9er un poste de travail complet et conforme aux exigences sanitaires.`,
    highlights: [
      "Inox alimentaire 304 haute qualit\u00e9",
      "4 niveaux de rangement ajour\u00e9s",
      "50 kg de charge par \u00e9tag\u00e8re",
      "Compatible chambres froides",
      "Robuste et durable",
      "Conforme normes HACCP et DDPP",
    ],
    specs: [
      { label: "Mat\u00e9riau", value: "Inox alimentaire 304" },
      { label: "Largeur", value: "120 cm" },
      { label: "Profondeur", value: "50 cm" },
      { label: "Hauteur", value: "180 cm" },
      { label: "Nombre de niveaux", value: "4 \u00e9tag\u00e8res ajour\u00e9es" },
      { label: "Charge par niveau", value: "50 kg" },
      { label: "Charge totale", value: "200 kg" },
      { label: "Poids", value: "Environ 18 kg" },
      { label: "Pieds", value: "R\u00e9glables avec embouts antid\u00e9rapants" },
      { label: "Conformit\u00e9", value: "HACCP / Contact alimentaire" },
    ],
    applications: ["Centres de conditionnement", "Chambres froides", "Locaux de stockage", "Zones de pr\u00e9paration de commandes"],
    image: "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/etagere_alimentaire_oeuf.png?v=1773072074",
    gallery: [
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/image-removebg-preview_11.png?v=1773307742",
    ],
    includedEquipment: [
      "\u00c9tag\u00e8re InoxStable120 en kit",
      "4 \u00e9tag\u00e8res ajour\u00e9es inox",
      "4 pieds r\u00e9glables avec embouts",
      "Visserie inox compl\u00e8te",
      "Notice de montage",
    ],
    advantages: [
      {
        title: "Stockage organis\u00e9",
        description: "Les 4 niveaux ajour\u00e9s permettent d\u2019organiser efficacement les plateaux et bo\u00eetes d\u2019\u0153ufs, facilitant la rotation des stocks (premier entr\u00e9, premier sorti) et le contr\u00f4le des DLC.",
      },
      {
        title: "Polyvalence d\u2019utilisation",
        description: "Compatible avec les chambres froides, les locaux de conditionnement et les zones de stockage, l\u2019InoxStable120 s\u2019adapte \u00e0 tous les environnements de la fili\u00e8re \u0153uf.",
      },
    ],
    faq: [
      {
        question: "L\u2019\u00e9tag\u00e8re r\u00e9siste-t-elle en chambre froide ?",
        answer: "Oui, l\u2019inox alimentaire 304 est parfaitement adapt\u00e9 aux environnements r\u00e9frig\u00e9r\u00e9s et humides. Il ne rouille pas et ne s\u2019alt\u00e8re pas, m\u00eame en chambre froide positive ou n\u00e9gative.",
      },
    ],
    relatedSolutions: ["stockage-conservation", "conditionnement-emballage", "equipement-inox"],
  },

  // ──────────────────────────────────────────────
  // EggKit60 — Kit \u0153ufs \u00e9talon
  // ──────────────────────────────────────────────
  {
    id: "eggkit60",
    slug: "kit-oeufs-etalon",
    name: "Kit \u0153ufs \u00e9talon",
    reference: "EggKit60",
    category: "\u00c9quipements & Accessoires",
    categorySlug: "equipements",
    capacity: "-",
    capacityNumber: 0,
    price: 350,
    description: "Kit d\u2019\u0153ufs \u00e9talon pour tester et \u00e9talonner votre calibreuse. Comprend des \u0153ufs de r\u00e9f\u00e9rence en r\u00e9sine haute densit\u00e9 dans toutes les cat\u00e9gories r\u00e9glementaires : XL, L, M, S, XS. Chaque \u0153uf est usin\u00e9 avec pr\u00e9cision pour correspondre exactement aux seuils de poids r\u00e9glementaires. Dur\u00e9e de vie illimit\u00e9e. Indispensable pour la v\u00e9rification p\u00e9riodique de la pr\u00e9cision de votre calibreuse.",
    shortDescription: "Kit de calibration avec \u0153ufs \u00e9talon toutes cat\u00e9gories",
    longDescription: `Le kit EggKit60 est un outil de m\u00e9trologie indispensable pour tout centre de conditionnement \u00e9quip\u00e9 d\u2019une calibreuse \u00e0 \u0153ufs. Il contient un jeu complet d\u2019\u0153ufs \u00e9talon en r\u00e9sine haute densit\u00e9, calibr\u00e9s avec pr\u00e9cision aux poids correspondant aux seuils r\u00e9glementaires des cat\u00e9gories XL, L, M, S et XS.

Chaque \u0153uf \u00e9talon est usin\u00e9 individuellement et contr\u00f4l\u00e9 pour correspondre exactement aux limites de poids d\u00e9finies par la r\u00e9glementation europ\u00e9enne de commercialisation des \u0153ufs. L\u2019\u00e9talonnage r\u00e9gulier de votre calibreuse (recommand\u00e9 chaque mois) garantit la conformit\u00e9 de votre tri et \u00e9vite les litiges commerciaux li\u00e9s \u00e0 des erreurs de classement.

Fabriqu\u00e9s en r\u00e9sine haute densit\u00e9, les \u0153ufs \u00e9talon sont insensibles \u00e0 l\u2019humidit\u00e9, aux variations de temp\u00e9rature et \u00e0 l\u2019usure. Leur dur\u00e9e de vie est illimit\u00e9e, ce qui en fait un investissement unique et durable. Le kit est livr\u00e9 dans un coffret de rangement avec certificat de conformit\u00e9 et proc\u00e9dure d\u2019\u00e9talonnage.`,
    highlights: [
      "\u0152ufs \u00e9talon toutes cat\u00e9gories (XL, L, M, S, XS)",
      "R\u00e9sine haute densit\u00e9 usin\u00e9e avec pr\u00e9cision",
      "Durables, r\u00e9utilisables et illimit\u00e9s en dur\u00e9e de vie",
      "Indispensable pour la calibration r\u00e9glementaire",
      "Certificat de conformit\u00e9 inclus",
      "Coffret de rangement fourni",
    ],
    specs: [
      { label: "Cat\u00e9gories", value: "XL, L, M, S, XS (5 \u0153ufs)" },
      { label: "Mat\u00e9riau", value: "R\u00e9sine haute densit\u00e9 usin\u00e9e" },
      { label: "Pr\u00e9cision", value: "\u00b1 0,1 g" },
      { label: "Dur\u00e9e de vie", value: "Illimit\u00e9e" },
      { label: "Poids XL", value: "73 g (\u2265 73 g)" },
      { label: "Poids L", value: "63 g (63-73 g)" },
      { label: "Poids M", value: "53 g (53-63 g)" },
      { label: "Poids S", value: "43 g (< 53 g)" },
      { label: "Certification", value: "Certificat de conformit\u00e9 inclus" },
      { label: "Rangement", value: "Coffret de protection" },
    ],
    applications: ["\u00c9talonnage de calibreuses", "Contr\u00f4le qualit\u00e9 p\u00e9riodique", "V\u00e9rification r\u00e9glementaire", "Audit et inspection DDPP"],
    image: "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/kit-test-oeufs.png?v=1773074284",
    gallery: [
      "https://cdn.shopify.com/s/files/1/0887/8994/2608/files/calibreuse_oeufs-removebg-preview.png?v=1773307742",
    ],
    includedEquipment: [
      "5 \u0153ufs \u00e9talon (XL, L, M, S, XS)",
      "Coffret de rangement rembourr\u00e9",
      "Certificat de conformit\u00e9 individuel",
      "Proc\u00e9dure d\u2019\u00e9talonnage pas \u00e0 pas",
      "Fiche de suivi des \u00e9talonnages",
    ],
    advantages: [
      {
        title: "Conformit\u00e9 garantie",
        description: "L\u2019\u00e9talonnage r\u00e9gulier avec le EggKit60 garantit que votre calibreuse trie les \u0153ufs conform\u00e9ment aux seuils de poids r\u00e9glementaires. En cas de contr\u00f4le DDPP, vous pouvez pr\u00e9senter les fiches de suivi d\u2019\u00e9talonnage.",
      },
      {
        title: "Investissement unique",
        description: "Fabriqu\u00e9s en r\u00e9sine haute densit\u00e9, les \u0153ufs \u00e9talon ne s\u2019usent pas et ne se d\u00e9gradent pas. C\u2019est un achat unique qui servira durant toute la vie de votre calibreuse.",
      },
    ],
    faq: [
      {
        question: "\u00c0 quelle fr\u00e9quence faut-il \u00e9talonner la calibreuse ?",
        answer: "Nous recommandons un \u00e9talonnage mensuel en utilisation courante, et hebdomadaire pour les lignes \u00e0 forte cadence. L\u2019\u00e9talonnage prend moins de 15 minutes et la proc\u00e9dure est d\u00e9taill\u00e9e dans le kit.",
      },
      {
        question: "Le kit est-il compatible avec toutes les calibreuses ?",
        answer: "Oui, les \u0153ufs \u00e9talon EggKit60 sont compatibles avec toutes les calibreuses du march\u00e9 utilisant le syst\u00e8me de pes\u00e9e \u00e9lectronique. Ils reproduisent fidèlement le poids et la forme d\u2019un \u0153uf r\u00e9el.",
      },
    ],
    relatedSolutions: ["calibrage", "controle-qualite"],
  },
];

export function getMachinesByCategory(categorySlug: string): Machine[] {
  return machines.filter((m) => m.categorySlug === categorySlug);
}

export function getMachineBySlug(slug: string): Machine | undefined {
  return machines.find((m) => m.slug === slug);
}

export function getSimilarMachines(machine: Machine, limit = 3): Machine[] {
  return machines
    .filter((m) => m.id !== machine.id && m.categorySlug === machine.categorySlug)
    .slice(0, limit);
}
