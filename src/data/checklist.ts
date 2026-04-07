import { ChecklistCategory } from "@/types/plateforme";

export const checklistData: ChecklistCategory[] = [
  {
    id: "prerequis",
    title: "Prérequis administratifs",
    icon: "ClipboardList",
    items: [
      {
        id: "prerequis-1",
        label: "Inscription au registre du commerce ou chambre d'agriculture",
        description:
          "Vous devez être enregistré auprès du registre du commerce et des sociétés (RCS) ou de la chambre d'agriculture de votre département. Cette inscription est indispensable pour exercer une activité de conditionnement d'œufs.",
        conseils:
          "Contactez votre chambre d'agriculture locale pour connaître les démarches spécifiques à votre situation. Si vous êtes déjà exploitant agricole, vous êtes probablement déjà inscrit.",
        documents: ["Extrait Kbis ou attestation d'inscription à la chambre d'agriculture"],
        premium: false,
      },
      {
        id: "prerequis-2",
        label: "Obtention du numéro d'identification de l'exploitation (EDE)",
        description:
          "Le numéro EDE (Établissement Départemental de l'Élevage) est attribué par l'EDE de votre département. Il identifie de manière unique votre exploitation et est nécessaire pour la traçabilité.",
        conseils:
          "Faites la demande dès que possible car le délai peut varier selon les départements. Ce numéro sera utilisé dans le code producteur marqué sur les œufs.",
        documents: ["Formulaire de demande EDE", "Justificatif d'identité", "Justificatif de domicile"],
        premium: false,
      },
      {
        id: "prerequis-3",
        label: "Déclaration d'activité auprès de la DDPP",
        description:
          "La Direction Départementale de la Protection des Populations (DDPP) doit être informée de votre activité de conditionnement d'œufs. Cette déclaration est un préalable à la demande d'agrément.",
        conseils:
          "Prenez contact avec la DDPP de votre département le plus tôt possible. Ils pourront vous orienter sur les exigences spécifiques et planifier une pré-visite.",
        documents: ["Courrier de déclaration d'activité"],
        premium: false,
      },
      {
        id: "prerequis-4",
        label: "Vérification du classement ICPE si nécessaire",
        description:
          "Les Installations Classées pour la Protection de l'Environnement (ICPE) concernent les élevages au-delà de certains seuils. Vérifiez si votre exploitation est soumise à déclaration, enregistrement ou autorisation.",
        conseils:
          "Le seuil ICPE pour les volailles est de 5 000 emplacements. En dessous, vous êtes soumis au Règlement Sanitaire Départemental. Consultez la nomenclature ICPE rubrique 2111.",
        documents: ["Dossier ICPE si applicable"],
        premium: true,
      },
      {
        id: "prerequis-5",
        label: "Souscription assurance responsabilité civile professionnelle",
        description:
          "Une assurance RC professionnelle est indispensable pour couvrir les risques liés à votre activité de conditionnement et de mise sur le marché d'œufs.",
        conseils:
          "Comparez plusieurs assureurs spécialisés en agriculture. Vérifiez que la couverture inclut les risques sanitaires et le rappel de produits.",
        documents: ["Attestation d'assurance RC professionnelle"],
        premium: false,
      },
    ],
  },
  {
    id: "locaux",
    title: "Locaux et aménagements",
    icon: "Building2",
    items: [
      {
        id: "locaux-1",
        label: "Plan des locaux conforme aux exigences sanitaires",
        description:
          "Les plans doivent montrer la disposition des différentes zones, les circuits de circulation des produits et du personnel, et respecter le principe de la marche en avant.",
        conseils:
          "Faites appel à un architecte spécialisé en bâtiments agroalimentaires ou consultez les guides du ministère de l'Agriculture.",
        documents: ["Plans architecturaux côtés", "Plan de circulation des flux"],
        premium: true,
      },
      {
        id: "locaux-2",
        label: "Zone de réception des œufs séparée",
        description:
          "Une zone dédiée à la réception des œufs bruts doit être clairement délimitée et séparée des autres zones de travail pour éviter les contaminations croisées.",
        conseils:
          "Prévoyez un espace suffisant pour le stockage temporaire des œufs entrants et le contrôle à réception.",
        documents: [],
        premium: false,
      },
      {
        id: "locaux-3",
        label: "Zone de mirage / tri",
        description:
          "Un espace dédié au mirage (contrôle visuel par transparence) et au tri des œufs selon leur qualité. L'éclairage doit être adapté pour permettre un contrôle efficace.",
        conseils:
          "L'éclairage de la zone de mirage doit être d'au moins 540 lux. Prévoyez un espace ergonomique pour limiter la fatigue du personnel.",
        documents: [],
        premium: false,
      },
      {
        id: "locaux-4",
        label: "Zone de calibrage et d'emballage",
        description:
          "Espace pour le calibrage des œufs par poids et leur conditionnement dans les emballages réglementaires.",
        conseils:
          "Organisez cette zone pour minimiser les manipulations et les risques de casse. Prévoyez un accès facile aux emballages.",
        documents: [],
        premium: false,
      },
      {
        id: "locaux-5",
        label: "Zone de stockage réfrigérée ou à température contrôlée",
        description:
          "Les œufs doivent être stockés dans des conditions de température contrôlée. La température ne doit pas fluctuer de plus de 5°C entre le stockage et le transport.",
        conseils:
          "Installez des enregistreurs de température avec alarme. La température recommandée est entre 5°C et 20°C selon la réglementation.",
        documents: ["Relevés de température"],
        premium: false,
      },
      {
        id: "locaux-6",
        label: "Local de nettoyage et désinfection du matériel",
        description:
          "Un local séparé doit être prévu pour le nettoyage et la désinfection du matériel et des équipements utilisés dans le centre de conditionnement.",
        conseils:
          "Prévoyez une arrivée d'eau chaude, un système d'évacuation des eaux usées et un espace de rangement pour les produits de nettoyage.",
        documents: [],
        premium: false,
      },
      {
        id: "locaux-7",
        label: "Vestiaires et sanitaires pour le personnel",
        description:
          "Des vestiaires et sanitaires doivent être mis à disposition du personnel, séparés des zones de production. Ils doivent inclure des lave-mains à commande non manuelle.",
        conseils:
          "Prévoyez des casiers individuels et un affichage des consignes d'hygiène. Les lave-mains doivent être équipés de savon et de moyens de séchage hygiéniques.",
        documents: [],
        premium: false,
      },
      {
        id: "locaux-8",
        label: "Séparation des circuits propre / sale (marche en avant)",
        description:
          "Le principe de marche en avant impose que les produits progressent toujours du sale vers le propre, sans retour en arrière possible, pour éviter les contaminations.",
        conseils:
          "Matérialisez les circuits avec un marquage au sol et des affichages. Formez le personnel au respect strict de ces circuits.",
        documents: ["Schéma des circuits"],
        premium: true,
      },
      {
        id: "locaux-9",
        label: "Sols, murs et plafonds lisses, lavables et désinfectables",
        description:
          "Toutes les surfaces en contact ou à proximité des zones de travail doivent être lisses, imperméables, résistantes aux produits de nettoyage et faciles à désinfecter.",
        conseils:
          "Les matériaux recommandés sont les carrelages, résines époxy ou panneaux sandwich alimentaires. Évitez le bois brut et les surfaces poreuses.",
        documents: [],
        premium: false,
      },
      {
        id: "locaux-10",
        label: "Système de ventilation adapté",
        description:
          "Une ventilation correcte est nécessaire pour maintenir la qualité de l'air, contrôler l'humidité et les odeurs dans les locaux de conditionnement.",
        conseils:
          "Privilégiez une ventilation mécanique contrôlée (VMC) avec des filtres adaptés. Prévoyez un entretien régulier des filtres.",
        documents: [],
        premium: false,
      },
      {
        id: "locaux-11",
        label: "Éclairage suffisant dans les zones de travail",
        description:
          "Un éclairage adéquat est requis dans toutes les zones de travail, en particulier pour le mirage et le tri des œufs. Les luminaires doivent être protégés contre la casse.",
        conseils:
          "Minimum 220 lux dans les zones de travail générales et 540 lux pour le mirage. Utilisez des protections anti-éclats sur tous les luminaires.",
        documents: [],
        premium: false,
      },
      {
        id: "locaux-12",
        label: "Protection contre les nuisibles (grilles, moustiquaires, pièges)",
        description:
          "Des dispositifs de protection contre les nuisibles (insectes, rongeurs, oiseaux) doivent être installés : grilles aux ouvertures, moustiquaires, pièges, etc.",
        conseils:
          "Faites appel à une société spécialisée en dératisation/désinsectisation pour établir un plan de lutte et un contrat d'entretien régulier.",
        documents: ["Plan de lutte contre les nuisibles", "Contrat prestataire"],
        premium: true,
      },
    ],
  },
  {
    id: "equipements",
    title: "Équipements",
    icon: "Wrench",
    items: [
      {
        id: "equip-1",
        label: "Mireuse (manuelle ou automatique)",
        description:
          "La mireuse permet de contrôler la qualité interne des œufs par transparence (détection des fêlures, taches de sang, développement embryonnaire).",
        conseils:
          "Pour les petits volumes, une mireuse manuelle suffit. Au-delà de 5 000 œufs/jour, envisagez une mireuse automatique. Agriovo propose des solutions adaptées à votre volume.",
        documents: ["Fiche technique de l'équipement"],
        premium: false,
      },
      {
        id: "equip-2",
        label: "Calibreuse / trieuse",
        description:
          "La calibreuse trie les œufs par catégories de poids réglementaires : S (<53g), M (53-63g), L (63-73g), XL (>73g).",
        conseils:
          "Choisissez une calibreuse adaptée à votre volume de production. Vérifiez régulièrement l'étalonnage avec une balance de précision.",
        documents: ["Fiche technique", "Certificat d'étalonnage"],
        premium: false,
      },
      {
        id: "equip-3",
        label: "Machine de marquage des œufs (code producteur)",
        description:
          "Le marquage du code producteur sur chaque œuf est obligatoire. Le code comprend : mode d'élevage (0-3) + pays (FR) + code exploitation.",
        conseils:
          "L'encre utilisée doit être de qualité alimentaire. Testez régulièrement la lisibilité du marquage.",
        documents: ["Homologation de l'encre alimentaire"],
        premium: false,
      },
      {
        id: "equip-4",
        label: "Balance de contrôle",
        description:
          "Une balance de précision est nécessaire pour vérifier le calibrage des œufs et s'assurer de la conformité des poids annoncés.",
        conseils:
          "Faites vérifier votre balance annuellement par un organisme agréé. Conservez les certificats de vérification.",
        documents: ["Certificat de vérification métrologique"],
        premium: false,
      },
      {
        id: "equip-5",
        label: "Étiqueteuse pour les emballages",
        description:
          "Les emballages d'œufs doivent porter des étiquettes conformes mentionnant toutes les informations réglementaires obligatoires.",
        conseils:
          "Vérifiez que vos étiquettes contiennent : DCR, mode d'élevage, calibre, nombre d'œufs, numéro du centre d'emballage, pays d'origine.",
        documents: ["Maquettes d'étiquettes validées"],
        premium: true,
      },
      {
        id: "equip-6",
        label: "Matériel de nettoyage et désinfection",
        description:
          "Tout le matériel nécessaire au nettoyage et à la désinfection des locaux et équipements doit être disponible et conforme.",
        conseils:
          "Utilisez uniquement des produits homologués pour le contact alimentaire. Stockez-les séparément des zones de production.",
        documents: ["Fiches techniques des produits", "Fiches de données de sécurité"],
        premium: false,
      },
      {
        id: "equip-7",
        label: "Thermomètres et enregistreurs de température",
        description:
          "Des thermomètres et enregistreurs de température doivent être installés dans les zones de stockage pour assurer le suivi continu de la chaîne du froid.",
        conseils:
          "Privilégiez les enregistreurs numériques avec alarme en cas de dépassement des seuils. Archivez les relevés pendant au moins 3 ans.",
        documents: ["Relevés de température archivés"],
        premium: false,
      },
      {
        id: "equip-8",
        label: "Emballages conformes à la réglementation",
        description:
          "Les emballages utilisés doivent être conformes à la réglementation : matériaux aptes au contact alimentaire, résistants, propres et secs.",
        conseils:
          "Vérifiez que vos fournisseurs d'emballages fournissent des attestations de conformité alimentaire.",
        documents: ["Attestation de conformité alimentaire des emballages"],
        premium: false,
      },
    ],
  },
  {
    id: "pms",
    title: "Plan de Maîtrise Sanitaire (PMS)",
    icon: "ShieldCheck",
    items: [
      {
        id: "pms-1",
        label: "Document décrivant l'activité et les produits",
        description:
          "Un document descriptif de votre activité : types de produits conditionnés, volumes, circuits de distribution, clients.",
        conseils:
          "Soyez précis et exhaustif. Ce document sera la base de votre PMS et sera examiné lors de l'inspection.",
        documents: ["Modèle de description d'activité"],
        premium: true,
      },
      {
        id: "pms-2",
        label: "Diagramme de fabrication (flux des œufs)",
        description:
          "Un schéma détaillant toutes les étapes du processus de conditionnement, de la réception des œufs bruts à l'expédition des produits finis.",
        conseils:
          "Incluez les temps d'attente, les températures, et les points de contrôle. Utilisez des symboles normalisés.",
        documents: ["Modèle de diagramme de fabrication"],
        premium: true,
      },
      {
        id: "pms-3",
        label: "Analyse des dangers (méthode HACCP)",
        description:
          "Identification et évaluation systématique de tous les dangers biologiques, chimiques et physiques à chaque étape du processus.",
        conseils:
          "Formez-vous à la méthode HACCP ou faites-vous accompagner par un consultant spécialisé. Les 7 principes HACCP doivent être appliqués.",
        documents: ["Tableau d'analyse des dangers", "Guide HACCP œufs"],
        premium: true,
      },
      {
        id: "pms-4",
        label: "Identification des CCP (points critiques)",
        description:
          "Les Points Critiques pour la maîtrise (CCP) sont les étapes où un contrôle est essentiel pour prévenir ou éliminer un danger. Ex : température de stockage, mirage.",
        conseils:
          "Utilisez l'arbre de décision du Codex Alimentarius pour identifier vos CCP. Ne multipliez pas les CCP inutilement.",
        documents: ["Arbre de décision CCP"],
        premium: true,
      },
      {
        id: "pms-5",
        label: "Procédures de surveillance des CCP",
        description:
          "Pour chaque CCP identifié, définissez les limites critiques, les méthodes de surveillance, la fréquence des contrôles et les actions correctives.",
        conseils:
          "Documentez chaque procédure de manière claire et accessible. Formez le personnel à leur application.",
        documents: ["Fiches de surveillance des CCP"],
        premium: true,
      },
      {
        id: "pms-6",
        label: "Plan de nettoyage et désinfection",
        description:
          "Un plan détaillé précisant pour chaque zone et équipement : quoi nettoyer, avec quoi, comment, quand, par qui, et comment vérifier l'efficacité.",
        conseils:
          "Prévoyez des contrôles de surface réguliers pour vérifier l'efficacité du nettoyage. Documentez tous les contrôles.",
        documents: ["Modèle de plan de nettoyage", "Fiches de contrôle"],
        premium: true,
      },
      {
        id: "pms-7",
        label: "Plan de lutte contre les nuisibles",
        description:
          "Un plan formalisé de prévention et de lutte contre les nuisibles : identification des risques, mesures préventives, plan d'implantation des appâts et pièges.",
        conseils:
          "Confiez ce plan à un prestataire certifié. Conservez tous les rapports d'intervention et les plans d'implantation.",
        documents: ["Contrat prestataire 3D", "Plan d'implantation des postes"],
        premium: true,
      },
      {
        id: "pms-8",
        label: "Plan de formation du personnel",
        description:
          "Un programme de formation continue du personnel aux bonnes pratiques d'hygiène, à la sécurité alimentaire et aux procédures spécifiques du centre.",
        conseils:
          "Prévoyez une formation initiale à l'embauche et des rappels réguliers. Conservez les attestations de formation.",
        documents: ["Programme de formation", "Attestations de formation"],
        premium: true,
      },
      {
        id: "pms-9",
        label: "Procédure de traçabilité (amont et aval)",
        description:
          "Système permettant de tracer les œufs depuis leur origine (élevage fournisseur) jusqu'au client final, et inversement.",
        conseils:
          "La traçabilité doit permettre de retrouver l'historique d'un lot en moins de 4 heures. Testez régulièrement votre système.",
        documents: ["Procédure de traçabilité", "Registres de traçabilité"],
        premium: true,
      },
      {
        id: "pms-10",
        label: "Procédure de gestion des non-conformités",
        description:
          "Procédure décrivant comment identifier, enregistrer, traiter et suivre les non-conformités détectées (produits, processus, équipements).",
        conseils:
          "Mettez en place un système simple de fiches de non-conformité. Analysez les causes racines pour éviter la récurrence.",
        documents: ["Modèle de fiche de non-conformité"],
        premium: true,
      },
      {
        id: "pms-11",
        label: "Procédure de retrait / rappel des produits",
        description:
          "Procédure d'urgence en cas de mise sur le marché de produits dangereux : retrait des points de vente, rappel auprès des consommateurs, notification aux autorités.",
        conseils:
          "Testez votre procédure de retrait/rappel au moins une fois par an avec un exercice de simulation.",
        documents: ["Procédure de retrait/rappel", "Liste de contacts d'urgence"],
        premium: true,
      },
    ],
  },
  {
    id: "tracabilite",
    title: "Traçabilité et étiquetage",
    icon: "ScanBarcode",
    items: [
      {
        id: "trace-1",
        label: "Système d'enregistrement des lots entrants",
        description:
          "Un registre ou système informatique pour enregistrer chaque lot d'œufs reçu : date, fournisseur, quantité, qualité, numéro de lot.",
        conseils:
          "Un simple tableur peut suffire au démarrage, mais envisagez un logiciel spécialisé pour les gros volumes.",
        documents: ["Registre des lots entrants"],
        premium: false,
      },
      {
        id: "trace-2",
        label: "Système d'enregistrement des lots sortants",
        description:
          "Enregistrement de chaque lot expédié : date, client, quantité, calibre, numéro de lot, DCR (Date de Consommation Recommandée).",
        conseils:
          "Assurez le lien entre lots entrants et sortants pour garantir la traçabilité complète.",
        documents: ["Registre des lots sortants"],
        premium: false,
      },
      {
        id: "trace-3",
        label: "Registre d'élevage à jour",
        description:
          "Si vous êtes également producteur, le registre d'élevage doit être tenu à jour avec les informations sanitaires, les traitements, l'alimentation.",
        conseils:
          "Le registre doit être conservé pendant au moins 5 ans. Il peut être demandé lors des inspections.",
        documents: ["Registre d'élevage"],
        premium: false,
      },
      {
        id: "trace-4",
        label: "Marquage des œufs conforme (code producteur)",
        description:
          "Chaque œuf doit être marqué avec le code producteur : chiffre du mode d'élevage (0=bio, 1=plein air, 2=sol, 3=cage) + FR + code exploitation.",
        conseils:
          "Vérifiez quotidiennement la lisibilité du marquage. L'encre doit être de qualité alimentaire et résistante.",
        documents: [],
        premium: false,
      },
      {
        id: "trace-5",
        label: "Étiquetage des emballages conforme",
        description:
          "Les emballages doivent mentionner : DCR, mode d'élevage, calibre, nombre d'œufs, numéro du centre d'emballage, pays d'origine, conditions de conservation.",
        conseils:
          "Faites valider vos maquettes d'étiquettes par la DDPP avant impression en série. Cela évite des corrections coûteuses.",
        documents: ["Modèle d'étiquette conforme"],
        premium: true,
      },
      {
        id: "trace-6",
        label: "Conservation des documents de traçabilité (5 ans)",
        description:
          "Tous les documents de traçabilité (registres, bons de livraison, factures, résultats d'analyses) doivent être conservés pendant au minimum 5 ans.",
        conseils:
          "Mettez en place un système d'archivage organisé (physique et/ou numérique). Prévoyez des sauvegardes régulières.",
        documents: [],
        premium: false,
      },
    ],
  },
  {
    id: "personnel",
    title: "Personnel et formation",
    icon: "Users",
    items: [
      {
        id: "perso-1",
        label: "Formation hygiène alimentaire (HACCP) du responsable",
        description:
          "Le responsable du centre de conditionnement doit avoir suivi une formation en hygiène alimentaire incluant les principes HACCP.",
        conseils:
          "Cette formation est obligatoire et dure généralement 14 heures (2 jours). Choisissez un organisme de formation certifié.",
        documents: ["Attestation de formation HACCP"],
        premium: false,
      },
      {
        id: "perso-2",
        label: "Formation du personnel aux bonnes pratiques d'hygiène",
        description:
          "Tout le personnel manipulant les œufs doit être formé aux bonnes pratiques d'hygiène : lavage des mains, tenue de travail, gestes à éviter.",
        conseils:
          "Organisez des sessions de rappel régulières (au moins annuelles). Documentez toutes les formations dispensées.",
        documents: ["Attestations de formation", "Programme de formation"],
        premium: false,
      },
      {
        id: "perso-3",
        label: "Tenue de travail adaptée (blouse, charlotte, chaussures)",
        description:
          "Le personnel doit porter une tenue de travail propre et adaptée : blouse ou combinaison, coiffe couvrant les cheveux, chaussures de sécurité dédiées.",
        conseils:
          "Prévoyez un stock suffisant de tenues pour permettre le change quotidien. Organisez le lavage des tenues de travail.",
        documents: [],
        premium: false,
      },
      {
        id: "perso-4",
        label: "Suivi médical du personnel",
        description:
          "Le personnel manipulant des denrées alimentaires doit bénéficier d'un suivi médical régulier par la médecine du travail.",
        conseils:
          "Informez le médecin du travail de la nature de l'activité. Le personnel atteint de maladies transmissibles ne doit pas manipuler les œufs.",
        documents: ["Attestations d'aptitude médicale"],
        premium: false,
      },
      {
        id: "perso-5",
        label: "Affichage des consignes d'hygiène",
        description:
          "Des affiches rappelant les consignes d'hygiène doivent être visibles dans les zones de travail : lavage des mains, port de la tenue, interdictions.",
        conseils:
          "Placez les affiches à des endroits stratégiques : entrée des zones de production, vestiaires, sanitaires, points de lavage des mains.",
        documents: ["Affiches de consignes d'hygiène"],
        premium: true,
      },
    ],
  },
  {
    id: "dossier",
    title: "Dossier de demande d'agrément",
    icon: "FileText",
    items: [
      {
        id: "dossier-1",
        label: "Formulaire CERFA de demande d'agrément",
        description:
          "Le formulaire CERFA n°13983*02 est le document officiel de demande d'agrément sanitaire. Il doit être rempli avec soin et signé par le responsable.",
        conseils:
          "Téléchargez la dernière version sur service-public.fr. Remplissez tous les champs obligatoires et vérifiez les informations avant envoi.",
        documents: ["CERFA n°13983*02 rempli et signé"],
        premium: false,
      },
      {
        id: "dossier-2",
        label: "Plan de situation et plan des locaux",
        description:
          "Le plan de situation localise votre établissement dans son environnement. Le plan des locaux détaille l'agencement intérieur avec les zones et circuits.",
        conseils:
          "Les plans doivent être à l'échelle et cotés. Indiquez clairement les zones propres/sales et les circuits de circulation.",
        documents: ["Plan de situation", "Plan des locaux côté"],
        premium: true,
      },
      {
        id: "dossier-3",
        label: "Description des activités",
        description:
          "Un document détaillant vos activités : types de produits, volumes, procédés de conditionnement, circuits de distribution.",
        conseils:
          "Soyez précis sur les volumes prévisionnels et les types de clients (GMS, marchés, restauration, etc.).",
        documents: ["Note descriptive des activités"],
        premium: false,
      },
      {
        id: "dossier-4",
        label: "Plan de maîtrise sanitaire complet",
        description:
          "Le PMS complet doit être joint au dossier : HACCP, plans de nettoyage, traçabilité, gestion des non-conformités, etc.",
        conseils:
          "Assurez-vous que tous les éléments du PMS sont cohérents entre eux et correspondent à votre activité réelle.",
        documents: ["PMS complet relié"],
        premium: true,
      },
      {
        id: "dossier-5",
        label: "Justificatifs administratifs (SIRET, etc.)",
        description:
          "Joindre tous les justificatifs administratifs : extrait Kbis ou inscription chambre d'agriculture, attestation SIRET, assurance RC pro.",
        conseils:
          "Vérifiez que tous les documents sont à jour et que les informations sont cohérentes entre les différents justificatifs.",
        documents: ["Extrait Kbis", "Attestation SIRET", "Assurance RC Pro"],
        premium: false,
      },
      {
        id: "dossier-6",
        label: "Envoi du dossier à la DDPP du département",
        description:
          "Le dossier complet doit être envoyé à la DDPP de votre département, de préférence en recommandé avec accusé de réception.",
        conseils:
          "Envoyez le dossier au moins 2 mois avant la date de démarrage souhaitée. Conservez une copie complète du dossier envoyé.",
        documents: ["Accusé de réception du dossier"],
        premium: false,
      },
    ],
  },
  {
    id: "inspection",
    title: "Inspection et obtention",
    icon: "Award",
    items: [
      {
        id: "insp-1",
        label: "Pré-visite volontaire (recommandée)",
        description:
          "Avant l'inspection officielle, vous pouvez demander une pré-visite à la DDPP. C'est l'occasion d'identifier les points à corriger avant l'inspection formelle.",
        conseils:
          "Profitez de cette pré-visite pour poser toutes vos questions. Les inspecteurs sont généralement plus dans une démarche d'accompagnement lors de cette étape.",
        documents: [],
        premium: false,
      },
      {
        id: "insp-2",
        label: "Inspection officielle de la DDPP",
        description:
          "L'inspection officielle est réalisée par les services vétérinaires de la DDPP. Elle vérifie la conformité de vos locaux, équipements, procédures et documentation.",
        conseils:
          "Préparez tous vos documents à l'avance. Assurez-vous que le centre est opérationnel et propre le jour de l'inspection. Soyez disponible pour répondre aux questions.",
        documents: ["Rapport d'inspection"],
        premium: false,
      },
      {
        id: "insp-3",
        label: "Corrections des éventuelles non-conformités",
        description:
          "Suite à l'inspection, des non-conformités peuvent être relevées. Vous devrez les corriger dans le délai imparti par l'inspecteur.",
        conseils:
          "Traitez les non-conformités par ordre de priorité. Documentez chaque correction avec des photos et des justificatifs.",
        documents: ["Plan d'actions correctives", "Justificatifs de correction"],
        premium: false,
      },
      {
        id: "insp-4",
        label: "Obtention de l'agrément conditionnel (3 mois)",
        description:
          "Si le dossier est conforme, un agrément conditionnel vous est délivré pour une durée de 3 mois. Vous pouvez commencer votre activité sous ce régime.",
        conseils:
          "Pendant ces 3 mois, appliquez rigoureusement toutes vos procédures. C'est une période probatoire avant l'agrément définitif.",
        documents: ["Notification d'agrément conditionnel"],
        premium: false,
      },
      {
        id: "insp-5",
        label: "Inspection de confirmation",
        description:
          "Avant la fin de la période conditionnelle, une nouvelle inspection est réalisée pour vérifier le bon fonctionnement du centre en conditions réelles.",
        conseils:
          "Tenez à jour tous vos registres et enregistrements. L'inspecteur vérifiera que vos procédures sont effectivement appliquées au quotidien.",
        documents: ["Rapport d'inspection de confirmation"],
        premium: false,
      },
      {
        id: "insp-6",
        label: "Obtention de l'agrément définitif",
        description:
          "Si tout est conforme, l'agrément définitif vous est délivré. Votre numéro d'agrément sanitaire sera de la forme : FR XX.XXX.XXX CE.",
        conseils:
          "L'agrément est valable sans limite de durée mais reste soumis à des inspections périodiques. Maintenez vos standards en permanence.",
        documents: ["Arrêté d'agrément définitif"],
        premium: false,
      },
    ],
  },
];
