export interface Solution {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  relatedMachineCategories: string[];
}

export const solutions: Solution[] = [
  {
    slug: "calibrage",
    name: "Calibrage des \u0153ufs",
    description: "Tri automatique par cat\u00e9gorie de poids (XL, L, M, S, XS) avec une pr\u00e9cision optimale.",
    longDescription: "Le calibrage est une \u00e9tape essentielle du conditionnement des \u0153ufs. Nos solutions de calibrage automatique permettent de trier les \u0153ufs par cat\u00e9gorie de poids conform\u00e9ment \u00e0 la r\u00e9glementation europ\u00e9enne. De la petite exploitation \u00e0 la ligne industrielle, nous proposons des calibreuses adapt\u00e9es \u00e0 chaque besoin.",
    image: "/images/solutions/calibrage.jpg",
    features: [
      "Tri automatique par pes\u00e9e individuelle",
      "Cat\u00e9gories conformes \u00e0 la r\u00e9glementation CE",
      "Pr\u00e9cision au gramme pr\u00e8s",
      "Cadences de 1 000 \u00e0 200 000 \u0153ufs/heure",
      "Interface de supervision intuitive",
    ],
    relatedMachineCategories: ["calibreuses", "centres-complets"],
  },
  {
    slug: "mirage",
    name: "Mirage & Contr\u00f4le qualit\u00e9",
    description: "D\u00e9tection automatique des d\u00e9fauts : f\u00ealures, taches de sang, inclusions.",
    longDescription: "Le mirage permet de contr\u00f4ler la qualit\u00e9 interne de chaque \u0153uf par transparence lumineuse. Nos mireuses automatiques d\u00e9tectent les f\u00ealures, taches de sang et autres d\u00e9fauts invisibles \u00e0 l\u2019\u0153il nu, garantissant un produit conforme aux normes de commercialisation.",
    image: "/images/solutions/mirage.jpg",
    features: [
      "D\u00e9tection des f\u00ealures et micro-fissures",
      "Identification des taches de sang",
      "Contr\u00f4le de la chambre \u00e0 air",
      "Rejet automatique des \u0153ufs non conformes",
      "Tra\u00e7abilit\u00e9 compl\u00e8te",
    ],
    relatedMachineCategories: ["calibreuses", "centres-complets"],
  },
  {
    slug: "conditionnement-emballage",
    name: "Conditionnement & Emballage",
    description: "Mise en bo\u00eetes automatis\u00e9e, \u00e9tiquetage et palettisation pour tous formats.",
    longDescription: "Du conditionnement en bo\u00eetes de 6 \u00e0 la palettisation compl\u00e8te, nos solutions d\u2019emballage automatis\u00e9es s\u2019adaptent \u00e0 tous les formats de vente. \u00c9tiquetage conforme, tra\u00e7abilit\u00e9 int\u00e9gr\u00e9e et cadences \u00e9lev\u00e9es pour optimiser votre productivit\u00e9.",
    image: "/images/solutions/conditionnement.jpg",
    features: [
      "Mise en bo\u00eetes automatique (6, 10, 12, 30 \u0153ufs)",
      "\u00c9tiquetage conforme r\u00e9glementation",
      "Palettisation automatis\u00e9e",
      "Gestion multi-formats",
      "Tra\u00e7abilit\u00e9 lot par lot",
    ],
    relatedMachineCategories: ["centres-complets", "equipements"],
  },
  {
    slug: "marquage-tracabilite",
    name: "Marquage & Tra\u00e7abilit\u00e9",
    description: "Impression du code producteur, date, QR code directement sur chaque \u0153uf.",
    longDescription: "Le marquage des \u0153ufs est obligatoire pour la commercialisation. Nos imprimantes \u00e0 jet d\u2019encre alimentaire permettent d\u2019imprimer le code producteur, la date de ponte, un QR code ou votre logo sur chaque \u0153uf, en conformit\u00e9 avec les exigences DDPP.",
    image: "/images/solutions/marquage.jpg",
    features: [
      "Impression code producteur obligatoire",
      "Date de ponte et DLC",
      "QR code de tra\u00e7abilit\u00e9",
      "Logo personnalisable",
      "Encre alimentaire certifi\u00e9e",
    ],
    relatedMachineCategories: ["impression-marquage"],
  },
  {
    slug: "batiment",
    name: "Construction de b\u00e2timent",
    description: "Conception et construction de centres de conditionnement conformes aux normes.",
    longDescription: "Nous concevons et r\u00e9alisons des b\u00e2timents de conditionnement conformes aux normes sanitaires DDPP. Du local de 20 m\u00b2 pour les petits \u00e9levages au centre industriel, notre bureau d\u2019\u00e9tudes prend en charge l\u2019ensemble du projet : plans, permis, construction et mise en conformit\u00e9.",
    image: "/images/solutions/batiment.jpg",
    features: [
      "Conception sur-mesure par notre bureau d\u2019\u00e9tudes",
      "Conformit\u00e9 normes sanitaires DDPP",
      "SAS d\u2019entr\u00e9e et zones de lavage",
      "Isolation et r\u00e9gulation thermique",
      "Livraison et installation cl\u00e9 en main",
    ],
    relatedMachineCategories: ["centres-complets"],
  },
  {
    slug: "ligne-complete",
    name: "Ligne compl\u00e8te cl\u00e9 en main",
    description: "De l\u2019\u00e9tude \u00e0 la mise en service, votre centre de conditionnement sur-mesure.",
    longDescription: "Notre expertise couvre l\u2019ensemble de la cha\u00eene : \u00e9tude de faisabilit\u00e9, conception, choix des \u00e9quipements, construction du b\u00e2timent, installation des machines, mise en service et formation. Un interlocuteur unique pour votre projet de centre de conditionnement.",
    image: "/images/solutions/ligne-complete.jpg",
    features: [
      "\u00c9tude de faisabilit\u00e9 compl\u00e8te",
      "Conception par notre bureau d\u2019\u00e9tudes",
      "S\u00e9lection et int\u00e9gration des \u00e9quipements",
      "Installation et mise en service",
      "Formation du personnel",
      "Maintenance et SAV",
    ],
    relatedMachineCategories: ["centres-complets", "calibreuses", "impression-marquage", "equipements"],
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
