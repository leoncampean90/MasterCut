export type Lang = 'ro' | 'en';

const translations = {
  ro: {
    // ── Navbar ──
    nav: {
      home: 'Acasă',
      services: 'Servicii',
      locations: 'Locații',
      team: 'Echipă',
      about: 'Despre',
      gallery: 'Galerie',
      contact: 'Contact',
      bookNow: 'Rezervă Acum',
    },

    // ── Hero ──
    hero: {
      badge: 'Est. 2024 — Studio de Frumusețe & Wellness',
      title1: 'Excelență în',
      title2: 'Frumusețe și Stil',
      bookBtn: 'Rezervă pe Mero',
      exploreBtn: 'Explorează Serviciile',
      scroll: 'Derulează',
      slides: [
        'Tunsori de Precizie',
        'Excelență Barbershop',
        'Artă Unghii',
        'Machiaj & Frumusețe',
        'Tratamente Cosmetice',
        'Masaj Relaxant',
      ],
    },

    // ── Highlights carousel ──
    highlights: {
      slides: [
        { title: 'Studio Barber', subtitle: 'Tunsori & Îngrijire de Precizie' },
        { title: 'Artă Unghii', subtitle: 'Manichiuri & Pedichiuri' },
        { title: 'Machiaj', subtitle: 'Looks care Impresionează' },
        { title: 'Îngrijire Cosmetică', subtitle: 'Radiantă & Tânără' },
        { title: 'Masaj', subtitle: 'Relaxare & Reîncărcare' },
        { title: 'Nunți & Evenimente', subtitle: 'Ziua Ta Specială' },
        { title: 'Terapie Pietre Fierbinți', subtitle: 'Relaxare Profundă' },
        { title: 'Lux Spa', subtitle: 'Wellness Total' },
      ],
      stats: [
        { label: 'Clienți Fericiți' },
        { label: 'Specialiști' },
        { label: 'Categorii Servicii' },
        { label: 'Locații' },
      ],
      dragHint: 'Trage pentru a explora',
    },

    // ── Services ──
    services: {
      sectionLabel: 'Ce Oferim',
      sectionTitle: 'Serviciile Noastre',
      sectionSubtitle: 'De la tunsori clasice la tratamente de lux — tot ce ai nevoie, sub un singur acoperiș',
      bookBtn: 'Rezervă Acum',
      fromPrice: 'De la',
      categories: [
        {
          label: 'Barber',
          description: 'Tunsori clasice și îngrijire pentru bărbatul modern',
          services: [
            { title: 'Tuns Clasic', description: 'Tuns de precizie adaptat formei feței și stilului personal, finalizat cu stilizare.', price: '35 RON' },
            { title: 'Ras cu Prosop Fierbinte', description: 'Ras tradițional cu lamă dreaptă, prosop fierbinte și îngrijire premium.', price: '30 RON' },
            { title: 'Sculptare Barbă', description: 'Tundere, modelare și condiționare expertă a bărbii pentru un aspect impecabil.', price: '25 RON' },
            { title: 'Tratamentul Regal', description: 'Tuns complet, ras fierbinte, barbă, masaj scalp și facial – experiența completă.', price: '85 RON' },
            { title: 'Vopsire Păr', description: 'Vopsire profesională, șuvițe sau acoperire fire albe cu produse de top.', price: '50+ RON' },
            { title: 'Tratament Scalp', description: 'Terapie revitalizantă a scalpului cu uleiuri esențiale și masaj de condiționare profundă.', price: '40 RON' },
          ],
        },
        {
          label: 'Unghii',
          description: 'Îngrijire profesională a unghiilor, de la manichiuri clasice la designuri artistice',
          services: [
            { title: 'Manichiură Clasică', description: 'Modelare unghii, îngrijire cuticule, masaj mâini și lac pentru mâini perfect îngrijite.', price: '25 RON' },
            { title: 'Unghii Gel', description: 'Lac gel durabil cu strălucire fără ciobire până la trei săptămâni.', price: '40 RON' },
            { title: 'Artă Unghii', description: 'Design personalizat de unghii cu motive intricate, de la florals la geometric abstract.', price: '55+ RON' },
            { title: 'Pedichiură Spa', description: 'Baie de picioare înmuiată, exfoliere, masaj și lac pentru picioare perfect îngrijite.', price: '40 RON' },
            { title: 'Extensii Acrilice', description: 'Extensii acrilice lungi cu formă și finisare personalizate pentru look-ul perfect.', price: '65 RON' },
            { title: 'Mani-Pedi Express', description: 'Serviciu combinat rapid de manichiură și pedichiură pentru un aspect proaspăt.', price: '55 RON' },
          ],
        },
        {
          label: 'Machiaj',
          description: 'Machiaj artistic și styling de lux pentru orice ocazie',
          services: [
            { title: 'Machiaj Nuntă', description: 'Machiaj bridal impecabil care durează toată ziua, cu consultare și trial inclus.', price: '120 RON' },
            { title: 'Glam de Seară', description: 'Machiaj dramatic și sofisticat potrivit pentru gale, petreceri și ocazii speciale.', price: '80 RON' },
            { title: 'Look Natural Zilnic', description: 'Machiaj natural care îmbunătățește trăsăturile tale pentru uz zilnic.', price: '55 RON' },
            { title: 'Lecție de Machiaj', description: 'Sesiune personalizată 1:1 pentru a-ți îmbunătăți tehnicile proprii.', price: '90 RON' },
            { title: 'Extensii Gene', description: 'Gene voluminoase sau naturale aplicate cu grijă pentru ochi expresivi.', price: '100 RON' },
            { title: 'Modelare & Vopsire Sprâncene', description: 'Sprâncene modelate perfect și vopsite pentru un cadru ideal al feței.', price: '35 RON' },
          ],
        },
        {
          label: 'Cosmetic',
          description: 'Tratamente avansate pentru piele netedă, luminoasă',
          services: [
            { title: 'Facial Curățare Profundă', description: 'Curățare facială completă cu extracție, mască și hidratare intensivă.', price: '70 RON' },
            { title: 'Peeling Chimic', description: 'Exfoliere chimică controlată pentru reînnoire celulară și ten mai luminos.', price: '90 RON' },
            { title: 'Microdermabrazie', description: 'Exfoliere mecanică fină pentru atenuarea cicatricilor, petelor și ridurilor fine.', price: '80 RON' },
            { title: 'Tratament Anti-Îmbătrânire', description: 'Protocol anti-aging cu seruri premium, lifting facial și stimulare colagen.', price: '110 RON' },
            { title: 'Terapie Lumină LED', description: 'Tratament non-invaziv cu lumină LED pentru acnee, roșeață și regenerare.', price: '65 RON' },
            { title: 'Mască Hidratantă', description: 'Mască hidratantă intensivă cu acid hialuronic pentru piele plină de viață.', price: '50 RON' },
          ],
        },
        {
          label: 'Masaj',
          description: 'Tratamente terapeutice pentru relaxare profundă și recuperare',
          services: [
            { title: 'Masaj Suedez', description: 'Masaj clasic relaxant cu tehnici gentle pentru reducerea stresului și tensiunii.', price: '80 RON' },
            { title: 'Masaj Țesuturi Profunde', description: 'Tehnici de presiune profundă pentru eliberarea tensiunii musculare cronice.', price: '95 RON' },
            { title: 'Terapie Pietre Fierbinți', description: 'Pietre vulcanice calde pentru relaxare profundă și îmbunătățirea circulației.', price: '110 RON' },
            { title: 'Masaj Aromaterapie', description: 'Masaj sensorial cu uleiuri esențiale premium pentru corp și minte.', price: '90 RON' },
            { title: 'Masaj Cupluri', description: 'Experiență romantică în two pentru doi, în camere special amenajate.', price: '160 RON' },
            { title: 'Cap & Umeri Relief', description: 'Sesiune focalizată pe reducerea tensiunii cervicale și cefalee.', price: '55 RON' },
          ],
        },
      ],
    },

    // ── About ──
    about: {
      title: 'Povestea MasterCut',
      p1: 'Fondat cu o pasiune pentru frumusețe și wellness, MasterCut este mai mult decât un salon — este o destinație completă. Specialiștii noștri în barber, unghii, machiaj, tratamente cosmetice și masaj combină tehnicile clasice cu tendințele contemporane pentru o experiență la fel de rafinată pe cât este de relaxantă.',
      p2: 'Fiecare detaliu contează, de la precizia unui tuns proaspăt la calmul unui masaj de țesuturi profunde. Vizitează oricare dintre cele două locații ale noastre și pleacă simțindu-te cea mai bună versiune a ta.',
      experienceBadge: 'Ani de Excelență',
      stats: [
        { label: 'Clienți Fericiți' },
        { label: 'Specialiști' },
        { label: 'Locații' },
        { label: 'Categorii Servicii' },
      ],
      locationsBtn: 'Locațiile Noastre',
    },

    // ── Gallery ──
    gallery: {
      title: 'Lucrările Noastre',
      subtitle: 'O privire în experiența MasterCut pe toate serviciile noastre',
      labels: ['Bărbierit Clasic', 'Artă Unghii', 'Artă Machiaj', 'Strălucire Cosmetică', 'Masaj Relaxant', 'Runway Barber'],
    },

    // ── Team ──
    team: {
      title: 'Cunoaște Specialiștii Noștri',
      subtitle: 'Profesioniști talentați în fiecare disciplină',
      members: [
        { role: 'Barber Master', bio: 'Peste 15 ani de experiență în crearea stilurilor clasice și moderne.' },
        { role: 'Stilist Senior', bio: 'Specialist în fades, tapere și tunsori texturate contemporane.' },
        { role: 'Artist Unghii', bio: 'Designer creativ de unghii specializat în artă intricată și extensii gel.' },
        { role: 'Artist Machiaj', bio: 'Specialist bridal și editorial cu un ochi pentru evidențierea frumuseții naturale.' },
        { role: 'Specialist Cosmetic', bio: 'Estetician certificat specializat în faciale, peelinguri și rejuvenare cutanată.' },
        { role: 'Maseur Terapeut', bio: 'Terapeut licențiat instruit în tehnici svedeze, deep tissue și cu pietre fierbinți.' },
      ],
    },

    // ── Testimonials ──
    testimonials: {
      title: 'Ce Spun Clienții',
      subtitle: 'Recenzii reale de la clienții noștri fideli',
      items: [
        { role: 'Client Fidel – Barber', text: 'MasterCut este într-o categorie aparte. Atenția la detalii pentru tunsul meu și atmosfera fac fiecare vizită o experiență autentică. Nu aș merge în altă parte.' },
        { role: 'Clientă – Unghii & Machiaj', text: 'Artiștii de unghii de here sunt incredibil de creativi, iar machiajul de probă pentru nuntă a fost impecabil. I-am rezervat pentru întreaga mea echipă de nuntă!' },
        { role: 'Client – Masaj & Cosmetic', text: 'Masajul deep tissue urmat de un facial rejuvenator — adevărat paradis. Ambele locații sunt frumos amenajate, iar personalul este de top.' },
      ],
    },

    // ── Locations ──
    locations: {
      sectionLabel: 'Unde Ne Găsești',
      sectionTitle: 'Locațiile Noastre',
      sectionSubtitle: 'Două studiouri premium — alege-l pe cel mai apropiat de tine',
      exploreBtn: 'Explorează Locația',
      getDirections: 'Obține Indicații',
      modalBookBtn: 'Rezervă la Această Locație',
      aboutTitle: 'Despre Acest Studio',
      contactTitle: 'Contact & Locație',
      hoursTitle: 'Program de Lucru',
      amenitiesTitle: 'Facilități',
      servicesTitle: 'Servicii Disponibile',
      locationData: [
        {
          about: 'Amplasat în inima orașului, MasterCut Downtown este studioul nostru emblematic. Cu o suprafață de peste 280 m² pe două etaje, îmbinăm meșteșugul bărbieriei clasice cu știința modernă a frumuseții. Din momentul în care pășești pe ușă, ești întâmpinat de aroma uleiurilor premium și sunetul foarfecelor mânuite cu măiestrie.',
          amenities: ['Parcare Gratuită', 'Wi-Fi', 'Băuturi Gratuite', 'Camere Private', 'Accesibilitate', 'Rezervări Online', 'Carduri Cadou', 'Program Fidelitate'],
          hours: [
            { day: 'Luni – Vineri', time: '9:00 – 20:00' },
            { day: 'Sâmbătă', time: '8:00 – 18:00' },
            { day: 'Duminică', time: '10:00 – 16:00' },
          ],
          services: ['Barber', 'Unghii', 'Machiaj', 'Cosmetic', 'Masaj'],
          galleryCaptions: ['Studio Barber', 'Etaj Principal', 'Tunsori Clasice', 'Salon Unghii', 'Salon Cosmetic', 'Salon Masaj', 'Studio Machiaj', 'Recepție'],
        },
        {
          about: 'MasterCut Uptown este refugiul nostru liniștit din cel mai rafinat cartier al orașului. Conceput cu o estetică minimalistă și inundat de lumină naturală, fiecare colț al acestui studio a fost gândit pentru a oferi cea mai relaxantă și luxoasă experiență de frumusețe. Echipa noastră Uptown este specializată în tratamente cosmetice premium și coafare la comandă.',
          amenities: ['Parcare Valet', 'Wi-Fi', 'Bar Șampanie', 'Suite Cupluri', 'Terasă pe Acoperiș', 'Rezervări Online', 'Carduri Cadou', 'Abonament VIP'],
          hours: [
            { day: 'Luni – Vineri', time: '10:00 – 21:00' },
            { day: 'Sâmbătă', time: '9:00 – 19:00' },
            { day: 'Duminică', time: '10:00 – 17:00' },
          ],
          services: ['Barber', 'Unghii', 'Machiaj', 'Cosmetic', 'Masaj'],
          galleryCaptions: ['Lounge Recepție', 'Suite Nuntași', 'Salon Pietre Calde', 'Suite Masaj Profund', 'Artă Unghii', 'Salon Îngrijire', 'Studio Culoare', 'Salon Aromaterapie'],
        },
      ],
    },

    // ── Contact ──
    contact: {
      label: 'Programări & Informații',
      heading1: 'Rezervă',
      heading2: 'Experiența Ta',
      lead: 'Alege serviciul, selectează locația și spune-ne ora preferată — noi ne ocupăm de rest.',
      downtown: 'Centru',
      uptown: 'Cartier Rezidențial',
      phone: 'Telefon',
      email: 'Email',
      hours: 'Program',
      hourRows: [
        { day: 'Luni – Vineri', time: '9:00 – 20:00' },
        { day: 'Sâmbătă', time: '8:00 – 18:00' },
        { day: 'Duminică', time: '10:00 – 16:00' },
      ],
      meroBadge: 'Platformă Oficială de Rezervări',
      meroDesc: 'Am colaborat cu Mero — platforma de top din România pentru rezervări — pentru a-ți oferi programare în timp real, confirmare instantanee și control deplin asupra programărilor tale.',
      meroFeatures: [
        { title: 'Locuri disponibile în timp real', sub: 'Disponibilitate mereu actualizată' },
        { title: 'Confirmare instantanee', sub: 'Fără așteptare, fără apeluri telefonice' },
        { title: 'Alege artistul tău', sub: 'Alege specialistul preferat' },
        { title: 'Remindere inteligente', sub: 'Alerte automate SMS & email' },
      ],
      meroBtn: 'Fă Rezervarea',
      meroNote: 'Vei fi redirecționat pe mero.ro — durează mai puțin de un minut.',
    },

    // ── Footer ──
    footer: {
      brandDesc: 'Studio premium de frumusețe & wellness. Barber, unghii, machiaj, cosmetic și masaj — două locații, o experiență elevată.',
      quickLinks: 'Link-uri Rapide',
      servicesCol: 'Servicii',
      newsletter: 'Rămâi la Curent',
      newsletterDesc: 'Abonează-te pentru oferte exclusive și sfaturi de frumusețe.',
      newsletterPlaceholder: 'Adresa ta de email',
      newsletterBtn: '→',
      privacy: 'Politică de Confidențialitate',
      terms: 'Termeni și Condiții',
      rights: 'Toate drepturile rezervate.',
    },

    // ── Language switcher ──
    langSwitch: 'EN',
  },

  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      locations: 'Locations',
      team: 'Team',
      about: 'About',
      gallery: 'Gallery',
      contact: 'Contact',
      bookNow: 'Book Now',
    },

    hero: {
      badge: 'Est. 2024 — Beauty & Wellness Studio',
      title1: 'Your Complete',
      title2: 'Beauty Destination',
      bookBtn: 'Book on Mero',
      exploreBtn: 'Explore Services',
      scroll: 'Scroll',
      slides: [
        'Precision Cuts',
        'Barbershop Excellence',
        'Nail Artistry',
        'Makeup & Beauty',
        'Cosmetic Treatments',
        'Relaxing Massage',
      ],
    },

    highlights: {
      slides: [
        { title: 'Barber Studio', subtitle: 'Precision Cuts & Grooming' },
        { title: 'Nail Artistry', subtitle: 'Manicures & Pedicures' },
        { title: 'Makeup', subtitle: 'Looks That Wow' },
        { title: 'Cosmetic Care', subtitle: 'Radiant & Youthful' },
        { title: 'Massage', subtitle: 'Relax & Recharge' },
        { title: 'Bridal & Events', subtitle: 'Your Special Day' },
        { title: 'Hot Stone Therapy', subtitle: 'Deep Relaxation' },
        { title: 'Spa Luxury', subtitle: 'Total Wellness' },
      ],
      stats: [
        { label: 'Happy Clients' },
        { label: 'Specialists' },
        { label: 'Service Categories' },
        { label: 'Locations' },
      ],
      dragHint: 'Drag to explore',
    },

    services: {
      sectionLabel: 'What We Offer',
      sectionTitle: 'Our Services',
      sectionSubtitle: 'From classic cuts to luxury treatments — everything you need, under one roof',
      bookBtn: 'Book Now',
      fromPrice: 'From',
      categories: [
        {
          label: 'Barber',
          description: 'Classic cuts and grooming for the modern gentleman',
          services: [
            { title: 'Classic Haircut', description: 'Precision cut tailored to your face shape and personal style, finished with styling.', price: '$35' },
            { title: 'Hot Towel Shave', description: 'Traditional straight-razor shave with hot towel treatment and premium aftercare.', price: '$30' },
            { title: 'Beard Sculpting', description: 'Expert beard trimming, shaping, and conditioning to keep your beard looking sharp.', price: '$25' },
            { title: 'The Royal Treatment', description: 'Full haircut, hot shave, beard trim, scalp massage, and facial – the complete experience.', price: '$85' },
            { title: 'Hair Coloring', description: 'Professional coloring, highlights, or grey blending with top-tier products.', price: '$50+' },
            { title: 'Scalp Treatment', description: 'Revitalizing scalp therapy with essential oils and deep conditioning massage.', price: '$40' },
          ],
        },
        {
          label: 'Nails',
          description: 'Professional nail care, from classic manicures to artistic designs',
          services: [
            { title: 'Classic Manicure', description: 'Nail shaping, cuticle care, hand massage, and polish for perfectly groomed hands.', price: '$25' },
            { title: 'Gel Nails', description: 'Long-lasting gel polish with chip-free shine that lasts up to three weeks.', price: '$40' },
            { title: 'Nail Art & Design', description: 'Custom nail designs with intricate motifs, from florals to geometric abstract.', price: '$55+' },
            { title: 'Spa Pedicure', description: 'Soaking foot bath, exfoliation, massage, and polish for perfectly pampered feet.', price: '$40' },
            { title: 'Acrylic Extensions', description: 'Long acrylic extensions with custom shape and finish for the perfect look.', price: '$65' },
            { title: 'Express Mani-Pedi', description: 'Quick combined manicure and pedicure service for a fresh, polished look.', price: '$55' },
          ],
        },
        {
          label: 'Makeup',
          description: 'Artistic makeup and luxury styling for any occasion',
          services: [
            { title: 'Bridal Makeup', description: 'Flawless bridal makeup that lasts all day, with consultation and trial included.', price: '$120' },
            { title: 'Evening Glam', description: 'Dramatic, sophisticated makeup suited for galas, parties, and special occasions.', price: '$80' },
            { title: 'Natural Everyday Look', description: 'Natural makeup that enhances your features for everyday wear.', price: '$55' },
            { title: 'Makeup Lesson', description: 'Personalized 1:1 session to improve your own techniques.', price: '$90' },
            { title: 'Lash Extensions', description: 'Voluminous or natural lashes carefully applied for expressive eyes.', price: '$100' },
            { title: 'Brow Shaping & Tint', description: 'Perfectly shaped and tinted brows for an ideal facial frame.', price: '$35' },
          ],
        },
        {
          label: 'Cosmetic',
          description: 'Advanced treatments for smooth, radiant skin',
          services: [
            { title: 'Deep Cleanse Facial', description: 'Full facial cleanse with extraction, mask, and intensive hydration.', price: '$70' },
            { title: 'Chemical Peel', description: 'Controlled chemical exfoliation for cellular renewal and a brighter complexion.', price: '$90' },
            { title: 'Microdermabrasion', description: 'Fine mechanical exfoliation to reduce scars, spots, and fine lines.', price: '$80' },
            { title: 'Anti-Aging Treatment', description: 'Anti-aging protocol with premium serums, facial lifting, and collagen stimulation.', price: '$110' },
            { title: 'LED Light Therapy', description: 'Non-invasive LED light treatment for acne, redness, and regeneration.', price: '$65' },
            { title: 'Hydrating Mask', description: 'Intensive hydrating mask with hyaluronic acid for vibrant, full skin.', price: '$50' },
          ],
        },
        {
          label: 'Massage',
          description: 'Therapeutic treatments for deep relaxation and recovery',
          services: [
            { title: 'Swedish Massage', description: 'Classic relaxing massage with gentle techniques to reduce stress and tension.', price: '$80' },
            { title: 'Deep Tissue Massage', description: 'Deep pressure techniques to release chronic muscle tension.', price: '$95' },
            { title: 'Hot Stone Therapy', description: 'Warm volcanic stones for deep relaxation and improved circulation.', price: '$110' },
            { title: 'Aromatherapy Massage', description: 'Sensory massage with premium essential oils for body and mind.', price: '$90' },
            { title: 'Couples Massage', description: 'Romantic experience for two in specially arranged rooms.', price: '$160' },
            { title: 'Head & Shoulder Relief', description: 'Focused session on reducing cervical tension and headaches.', price: '$55' },
          ],
        },
      ],
    },

    about: {
      title: 'The MasterCut Story',
      p1: 'Founded with a passion for beauty and wellness, MasterCut is more than a salon — it\'s a complete destination. Our specialists across barber, nails, makeup, cosmetic treatments, and massage blend classic techniques with contemporary trends to deliver an experience that\'s as refined as it is relaxing.',
      p2: 'Every detail matters, from the precision of a fresh haircut to the calm of a deep-tissue massage. Visit either of our two locations and leave feeling like the best version of yourself.',
      experienceBadge: 'Years of Excellence',
      stats: [
        { label: 'Happy Clients' },
        { label: 'Specialists' },
        { label: 'Locations' },
        { label: 'Service Categories' },
      ],
      locationsBtn: 'Our Locations',
    },

    gallery: {
      title: 'Our Work',
      subtitle: 'A glimpse into the MasterCut experience across all our services',
      labels: ['Classic Barbering', 'Nail Artistry', 'Makeup Artistry', 'Cosmetic Glow', 'Relaxing Massage', 'Runway Barber'],
    },

    team: {
      title: 'Meet Our Specialists',
      subtitle: 'Talented professionals across every discipline',
      members: [
        { role: 'Master Barber', bio: 'Over 15 years of experience crafting classic and modern styles.' },
        { role: 'Senior Stylist', bio: 'Specialist in fades, tapers, and contemporary textured cuts.' },
        { role: 'Nail Artist', bio: 'Creative nail designer specializing in intricate art and gel extensions.' },
        { role: 'Makeup Artist', bio: 'Bridal and editorial specialist with an eye for enhancing natural beauty.' },
        { role: 'Cosmetic Specialist', bio: 'Certified aesthetician specialising in facials, peels, and skin rejuvenation.' },
        { role: 'Massage Therapist', bio: 'Licensed therapist trained in Swedish, deep tissue, and hot stone techniques.' },
      ],
    },

    testimonials: {
      title: 'What Clients Say',
      subtitle: 'Real reviews from our valued patrons',
      items: [
        { role: 'Regular Client – Barber', text: 'MasterCut is in a league of its own. The attention to detail on my haircut and the atmosphere make every visit a genuine experience. Wouldn\'t go anywhere else.' },
        { role: 'Client – Nails & Makeup', text: 'The nail artists here are incredibly creative, and the bridal makeup trial was flawless. I booked them for my entire wedding party!' },
        { role: 'Client – Massage & Cosmetic', text: 'The deep tissue massage followed by a rejuvenating facial — absolute heaven. Both locations are beautifully maintained and the staff is top-notch.' },
      ],
    },

    locations: {
      sectionLabel: 'Find Us',
      sectionTitle: 'Our Locations',
      sectionSubtitle: 'Two premium studios — choose the one closest to you',
      exploreBtn: 'Explore Location',
      getDirections: 'Get Directions',
      modalBookBtn: 'Book at This Location',
      aboutTitle: 'About This Studio',
      contactTitle: 'Contact & Location',
      hoursTitle: 'Opening Hours',
      amenitiesTitle: 'Amenities',
      servicesTitle: 'Available Services',
      locationData: [
        {
          about: 'Located in the heart of the city, MasterCut Downtown is our flagship studio. Spanning over 3,000 sq ft across two floors, it combines old-world barbering craftsmanship with modern beauty science. From the moment you step through the door, you\'re greeted with the scent of premium oils and the sound of expertly wielded scissors.',
          amenities: ['Free Parking', 'Wi-Fi', 'Complimentary Drinks', 'Private Rooms', 'Accessibility', 'Online Booking', 'Gift Cards', 'Loyalty Program'],
          hours: [
            { day: 'Monday – Friday', time: '9:00 AM – 8:00 PM' },
            { day: 'Saturday', time: '8:00 AM – 6:00 PM' },
            { day: 'Sunday', time: '10:00 AM – 4:00 PM' },
          ],
          services: ['Barber', 'Nails', 'Makeup', 'Cosmetic', 'Massage'],
          galleryCaptions: ['Barber Studio', 'Main Floor', 'Classic Cuts', 'Nail Suite', 'Cosmetic Room', 'Massage Suite', 'Makeup Studio', 'Reception'],
        },
        {
          about: 'MasterCut Uptown is our serene escape in the city\'s most refined neighbourhood. Designed with a minimalist aesthetic and bathed in natural light, every corner of this studio was thoughtfully conceived to provide the most relaxing, luxurious beauty experience possible. Our Uptown team are specialists in high-end cosmetic treatments and bespoke styling.',
          amenities: ['Valet Parking', 'Wi-Fi', 'Champagne Bar', 'Couples Suite', 'Rooftop Terrace', 'Online Booking', 'Gift Cards', 'VIP Membership'],
          hours: [
            { day: 'Monday – Friday', time: '10:00 AM – 9:00 PM' },
            { day: 'Saturday', time: '9:00 AM – 7:00 PM' },
            { day: 'Sunday', time: '10:00 AM – 5:00 PM' },
          ],
          services: ['Barber', 'Nails', 'Makeup', 'Cosmetic', 'Massage'],
          galleryCaptions: ['Reception Lounge', 'Bridal Suite', 'Hot Stone Room', 'Deep Tissue Suite', 'Nail Artistry', 'Grooming Suite', 'Colour Studio', 'Aromatherapy Room'],
        },
      ],
    },

    contact: {
      label: 'Appointments & Enquiries',
      heading1: 'Book Your',
      heading2: 'Experience',
      lead: 'Choose your service, pick a location, and tell us your preferred time — we\'ll take care of the rest.',
      downtown: 'Downtown',
      uptown: 'Uptown',
      phone: 'Phone',
      email: 'Email',
      hours: 'Opening Hours',
      hourRows: [
        { day: 'Monday – Friday', time: '9:00 AM – 8:00 PM' },
        { day: 'Saturday', time: '8:00 AM – 6:00 PM' },
        { day: 'Sunday', time: '10:00 AM – 4:00 PM' },
      ],
      meroBadge: 'Official Booking Platform',
      meroDesc: 'We\'ve partnered with Mero — Romania\'s leading salon booking platform — to offer you real-time scheduling, instant confirmations and full control over your appointments.',
      meroFeatures: [
        { title: 'Real-time slots', sub: 'Always up-to-date availability' },
        { title: 'Instant confirm', sub: 'No waiting, no phone calls' },
        { title: 'Pick your artist', sub: 'Choose your preferred specialist' },
        { title: 'Smart reminders', sub: 'Automatic SMS & email alerts' },
      ],
      meroBtn: 'Book Your Appointment',
      meroNote: 'You\'ll be redirected to mero.ro — takes less than a minute.',
    },

    footer: {
      brandDesc: 'Premium beauty & wellness studio. Barber, nails, makeup, cosmetic, and massage — two locations, one elevated experience.',
      quickLinks: 'Quick Links',
      servicesCol: 'Services',
      newsletter: 'Stay Updated',
      newsletterDesc: 'Subscribe for exclusive offers and beauty tips.',
      newsletterPlaceholder: 'Your email',
      newsletterBtn: '→',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      rights: 'All rights reserved.',
    },

    langSwitch: 'RO',
  },
} as const;

export default translations;
