import { Tour } from '../types/database.types';

export const TOURS_DATA: Tour[] = [
  {
    id: 'tour-7d-classic',
    title: '7 Days — Classic Sri Lanka',
    slug: '7-days-classic-sri-lanka',
    duration_days: 7,
    duration_nights: 6,
    short_description: 'An iconic balance of ancient rock citadels, sacred hill capital culture, misty tea hills, and scenic coastal shores.',
    overview: 'The quintessential introduction to Sri Lanka. From the dramatic rock fortress of Sigiriya in the Cultural Triangle to the revered Temple of the Tooth in Kandy, up through the emerald tea terraces of Nuwara Eliya and ending at the Dutch colonial ramparts of Galle Fort.',
    cover_image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1200&q=80',
    destinations: ['Sigiriya', 'Dambulla', 'Kandy', 'Nuwara Eliya', 'Galle', 'Colombo'],
    highlights: [
      'Climb the 5th-century Sigiriya Lion Rock fortress at sunrise',
      'Marvel at the ancient Buddhist cave temples of Dambulla',
      'Visit the sacred Temple of the Tooth Relic in royal Kandy',
      'Scenic highland drive past cascading Ramboda waterfalls',
      'Fresh Ceylon tea factory tour & tasting in Nuwara Eliya',
      'Walk the historic ramparts of UNESCO-listed Galle Dutch Fort'
    ],
    suitable_for: ['Couples', 'Families', 'First-time Visitors', 'Culture & Nature Lovers'],
    is_published: true,
    itinerary: [
      {
        day_number: 1,
        title: 'Arrival & Journey to the Cultural Triangle',
        route: 'Bandaranaike Int. Airport (CMB) → Sigiriya',
        description: 'Meet your dedicated CK Tours private chauffeur-guide upon arrival at Colombo Airport. Embark on a comfortable, air-conditioned transfer into the heart of the Cultural Triangle. Enjoy your first glimpses of lush tropical coconut groves and rural Sri Lankan landscapes. Check in and unwind.',
        activities: ['Airport Meet & Greet', 'Comfortable Private Transfer', 'Evening relaxation at resort'],
        overnight_stay: 'Sigiriya / Habarana',
        distance_or_scenic_notes: 'Approx. 4 hours driving time'
      },
      {
        day_number: 2,
        title: 'Sigiriya Rock Fortress & Dambulla Cave Monastery',
        route: 'Sigiriya → Dambulla → Sigiriya',
        description: 'Ascend the majestic Sigiriya Lion Rock Fortress early in the morning before the tropical heat. Admire ancient frescoes, the polished Mirror Wall, and panoramic 360-degree jungle vistas. In the afternoon, visit the golden cave temples of Dambulla, housing centuries-old Buddhist murals and statues.',
        activities: ['Sigiriya Lion Rock morning ascent', 'Authentic village lunch', 'Dambulla Royal Rock Cave Temple'],
        overnight_stay: 'Sigiriya / Habarana',
        distance_or_scenic_notes: 'Short scenic local drives'
      },
      {
        day_number: 3,
        title: 'Matale Spice Valleys & Sacred Royal Kandy',
        route: 'Sigiriya → Matale → Kandy',
        description: 'Drive south through the spice-growing hills of Matale, learning how Ceylon cinnamon, cardamom, and cloves flourish. Arrive in the sacred hill capital of Kandy nestled around a picturesque lake. Visit the UNESCO World Heritage Temple of the Sacred Tooth Relic (Sri Dalada Maligawa).',
        activities: ['Matale Spice Garden visit', 'Scenic lakeside drive in Kandy', 'Temple of the Tooth evening ceremony'],
        overnight_stay: 'Kandy',
        distance_or_scenic_notes: 'Approx. 2.5 - 3 hours scenic driving'
      },
      {
        day_number: 4,
        title: 'Royal Botanical Gardens & Highlands of Nuwara Eliya',
        route: 'Kandy → Ramboda Falls → Nuwara Eliya',
        description: 'Explore the vast Peradeniya Royal Botanical Gardens featuring towering palms and exotic orchid collections. Then wind uphill into the misty mountains of Ceylon tea country, passing gushing waterfalls like Ramboda Falls. Stop at an authentic tea estate to witness hand-picking and orthodox tea manufacturing.',
        activities: ['Peradeniya Royal Botanical Gardens', 'Ramboda Falls scenic stop', 'Working Ceylon Tea Factory & Tea Tasting'],
        overnight_stay: 'Nuwara Eliya',
        distance_or_scenic_notes: 'Approx. 2.5 hours winding mountain roads'
      },
      {
        day_number: 5,
        title: 'Highland Cool & Scenic Descent to Southern Coast',
        route: 'Nuwara Eliya → Ella Gap → Galle / Bentota',
        description: 'Enjoy a stroll through "Little England" around Gregory Lake and British colonial architecture. Descend gracefully through dramatic mountain passes toward the golden palm-fringed southern coastline. Check into your seaside hotel and savor fresh Indian Ocean seafood.',
        activities: ['Gregory Lake morning walk', 'Ella Gap scenic vista', 'Drive to Southern Coast'],
        overnight_stay: 'Galle / Koggala',
        distance_or_scenic_notes: 'Approx. 4.5 hours scenic descent'
      },
      {
        day_number: 6,
        title: 'UNESCO Galle Dutch Fort & Coastal Leisure',
        route: 'Galle & Southern Coastline',
        description: 'Explore the living 17th-century Galle Fort, walking along cobblestone lanes lined with Dutch colonial mansions, artisan boutiques, and maritime lighthouses. Spend the afternoon swimming or relaxing on quiet sandy beaches.',
        activities: ['Guided walk along Galle Fort ramparts', 'Artisan boutique browsing', 'Sunset by the Indian Ocean'],
        overnight_stay: 'Galle / Bentota',
        distance_or_scenic_notes: 'Short coastal drives'
      },
      {
        day_number: 7,
        title: 'Coastal Highway Transfer to Colombo / Airport Departure',
        route: 'Galle → Colombo → Airport (CMB)',
        description: 'After breakfast, take the modern southern expressway toward Colombo. Depending on your flight schedule, enjoy a short sightseeing drive through Colombo (Independence Square, Galle Face Green) before your timely private airport drop-off.',
        activities: ['Expressway transfer', 'Colombo orientation drive (optional)', 'Timely airport departure transfer'],
        distance_or_scenic_notes: 'Approx. 2 hours via Southern Expressway'
      }
    ]
  },
  {
    id: 'tour-5d-highlights',
    title: '5 Days — Sri Lanka Highlights',
    slug: '5-days-sri-lanka-highlights',
    duration_days: 5,
    duration_nights: 4,
    short_description: 'A curated short break featuring royal Kandy, cool tea mountains, and relaxed coastal moments.',
    overview: 'Perfect for travelers with limited time or visitors on a stopover. This comfortable route introduces Sri Lanka’s key highlights: the sacred city of Kandy, misty Nuwara Eliya tea estates, and warm golden beaches along the southwest coast.',
    cover_image: 'https://images.unsplash.com/photo-1588598198321-9735fd52455b?auto=format&fit=crop&w=1200&q=80',
    destinations: ['Colombo', 'Pinnawala', 'Kandy', 'Nuwara Eliya', 'Bentota'],
    highlights: [
      'Pinnawala elephant care sanctuary visit',
      'The sacred Temple of the Tooth in Kandy',
      'Peradeniya Royal Botanical Gardens',
      'Misty tea plantations & factory experience',
      'Relaxation along Bentota beach & Madu River boat safari'
    ],
    suitable_for: ['Short Stays', 'Stopovers', 'Families with young children'],
    is_published: true,
    itinerary: [
      {
        day_number: 1,
        title: 'Airport Greeting & Transfer to Hill Capital Kandy',
        route: 'Airport (CMB) → Pinnawala → Kandy',
        description: 'Welcome by your CK Tours driver. En route to Kandy, visit the elephant sanctuary at Pinnawala. Continue to Kandy and witness an evening traditional cultural dance performance.',
        activities: ['Airport pickup', 'Pinnawala stop', 'Kandy Cultural Show'],
        overnight_stay: 'Kandy'
      },
      {
        day_number: 2,
        title: 'Royal Kandy & Journey into Misty Tea Country',
        route: 'Kandy → Ramboda → Nuwara Eliya',
        description: 'Morning visit to the Temple of the Sacred Tooth Relic. Ascend through lush green mountain passes with waterfall vistas to Nuwara Eliya. Tour a historic Ceylon tea processing factory.',
        activities: ['Temple of the Tooth', 'Ramboda Falls', 'Tea Factory & Tasting'],
        overnight_stay: 'Nuwara Eliya'
      },
      {
        day_number: 3,
        title: 'Highlands to Tropical Southwest Beach',
        route: 'Nuwara Eliya → Kitulgala → Bentota',
        description: 'Travel through the lush rainforest valleys of Kitulgala (filming site of The Bridge on the River Kwai) and arrive at the tranquil beaches of Bentota.',
        activities: ['Scenic valley drive', 'Check-in at beachside resort', 'Sunset beach walk'],
        overnight_stay: 'Bentota'
      },
      {
        day_number: 4,
        title: 'Madu River Mangrove Safari & Coastal Relaxation',
        route: 'Bentota & Balapitiya',
        description: 'Take a private boat safari through the biodiverse mangrove islands of the Madu River, observing water monitors, cinnamon peeling, and birdlife. Enjoy free leisure time on the golden sand.',
        activities: ['Madu River boat safari', 'Turtle conservation project', 'Beach leisure'],
        overnight_stay: 'Bentota'
      },
      {
        day_number: 5,
        title: 'Colombo City Drive & Airport Departure',
        route: 'Bentota → Colombo → Airport (CMB)',
        description: 'Relaxed morning before a private expressway journey to Colombo for souvenir shopping and an orientation drive, followed by safe drop-off at Bandaranaike International Airport.',
        activities: ['Private expressway transfer', 'Colombo highlights drive', 'Airport drop-off']
      }
    ]
  },
  {
    id: 'tour-8d-hill-country',
    title: '8 Days — Hill Country & South Coast',
    slug: '8-days-hill-country-south-coast',
    duration_days: 8,
    duration_nights: 7,
    short_description: 'Spectacular mountain passes, the iconic blue train route, wild elephant safaris, and pristine beaches.',
    overview: 'An unforgettable itinerary blending dramatic highlands with Sri Lanka’s untamed wildlife and sun-drenched southern bays. Experience the legendary train over Demodara Nine Arch Bridge, search for leopards in Yala, and unwind in Mirissa.',
    cover_image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80',
    destinations: ['Kandy', 'Nuwara Eliya', 'Ella', 'Yala National Park', 'Mirissa', 'Galle'],
    highlights: [
      'Scenic train ride through misty tea mountains',
      'Walk across the architectural Nine Arch Bridge in Ella',
      'Hike Little Adam’s Peak for panoramic ridge views',
      'Thrilling 4x4 open-jeep wildlife safari in Yala National Park',
      'Whale watching or coastal relaxation in Mirissa',
      'Historic sunset stroll atop Galle Dutch Fort'
    ],
    suitable_for: ['Nature Lovers', 'Photographers', 'Wildlife Enthusiasts', 'Couples'],
    is_published: true,
    itinerary: [
      {
        day_number: 1,
        title: 'Arrival & Transfer to Royal Kandy',
        route: 'Airport (CMB) → Kandy',
        description: 'Personal greeting by your CK Tours private chauffeur. Drive inland to Kandy, check into your boutique hotel, and enjoy a stroll around the lake.',
        activities: ['Airport Meet & Greet', 'Lakeside drive', 'Rest & acclimatization'],
        overnight_stay: 'Kandy'
      },
      {
        day_number: 2,
        title: 'Kandy Temples & Highlands to Nuwara Eliya',
        route: 'Kandy → Ramboda → Nuwara Eliya',
        description: 'Visit the revered Dalada Maligawa (Temple of the Tooth) followed by a scenic drive into tea country. Visit a working tea estate and taste authentic Ceylon grades.',
        activities: ['Temple of the Tooth', 'Highland tea tour', 'Gregory Lake promenade'],
        overnight_stay: 'Nuwara Eliya'
      },
      {
        day_number: 3,
        title: 'Scenic Train Journey to Ella & Nine Arch Bridge',
        route: 'Nuwara Eliya (Nanu Oya) → Ella',
        description: 'Board the world-famous blue train through emerald valleys and misty pine forests while your driver transfers your luggage safely to Ella. In the afternoon, visit the magnificent Nine Arch Bridge.',
        activities: ['Iconic highland train ride', 'Nine Arch Bridge photography', 'Ella town cafe vibes'],
        overnight_stay: 'Ella'
      },
      {
        day_number: 4,
        title: 'Little Adam’s Peak & Ravana Waterfall',
        route: 'Ella & surrounds',
        description: 'A gentle morning hike up Little Adam’s Peak rewarded with sweeping views across Ella Gap. Visit the roaring Ravana Falls before relaxing in Ella.',
        activities: ['Little Adam’s Peak hike', 'Ravana Falls visit', 'Leisure evening'],
        overnight_stay: 'Ella'
      },
      {
        day_number: 5,
        title: 'Ella to Yala & Afternoon 4x4 Wildlife Safari',
        route: 'Ella → Wellawaya → Yala',
        description: 'Descend from the highlands into the dry-zone wilderness of Yala. Board an exclusive 4x4 safari jeep with an expert tracker to look for leopards, wild elephants, sloth bears, and crocodiles.',
        activities: ['Highland to jungle transfer', 'Yala National Park 4x4 safari', 'Campfire dinner experience'],
        overnight_stay: 'Yala / Tissamaharama'
      },
      {
        day_number: 6,
        title: 'Yala to Mirissa Golden Coastline',
        route: 'Yala → Tangalle → Mirissa',
        description: 'Scenic southern coastal drive past secluded coves and stilt fishermen. Arrive in Mirissa, renowned for coconut palm hills, turquoise surf, and beachfront dining.',
        activities: ['Coastal route transfer', 'Coconut Tree Hill visit', 'Sunset beach dining'],
        overnight_stay: 'Mirissa'
      },
      {
        day_number: 7,
        title: 'Mirissa Beach & Historic Galle Dutch Fort',
        route: 'Mirissa → Galle',
        description: 'Relaxed morning by the sea (optional seasonal whale watching). In the afternoon, visit the UNESCO-listed Galle Dutch Fort for history, gelato, and rampart views.',
        activities: ['Beach leisure', 'Galle Fort walking tour', 'Oceanfront sunset drinks'],
        overnight_stay: 'Galle / Unawatuna'
      },
      {
        day_number: 8,
        title: 'Southern Expressway to Airport Departure',
        route: 'Galle → Airport (CMB)',
        description: 'Comfortable private transfer along the Southern Expressway directly to the airport for your flight home, with warm farewells from CK Tours.',
        activities: ['Expressway transfer', 'Departure assistance']
      }
    ]
  },
  {
    id: 'tour-10d-complete',
    title: '10 Days — Complete Sri Lanka',
    slug: '10-days-complete-sri-lanka',
    duration_days: 10,
    duration_nights: 9,
    short_description: 'An immersive grand circle journey: ancient ruins, dramatic rocks, royal cities, high tea trails, wild safaris, and coastal bliss.',
    overview: 'The complete Sri Lankan expedition. Designed for travelers who want to truly discover the breadth of the island: Anuradhapura or Wilpattu, Sigiriya, Polonnaruwa, Kandy, Nuwara Eliya, Ella, Yala, and the southern beaches.',
    cover_image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    destinations: ['Anuradhapura', 'Sigiriya', 'Polonnaruwa', 'Kandy', 'Nuwara Eliya', 'Ella', 'Yala', 'Mirissa', 'Galle'],
    highlights: [
      'Ancient sacred cities of Anuradhapura and Polonnaruwa',
      'Sigiriya Lion Rock and Pidurangala sunset lookout',
      'Minneriya elephant gathering safari',
      'Sacred Kandy Temple of the Tooth & botanical gardens',
      'Nuwara Eliya tea plantations and Lake Gregory',
      'Nine Arch Bridge & Little Adam’s Peak in Ella',
      'Yala National Park leopard & elephant safari',
      'Southern beaches & UNESCO Galle Fort'
    ],
    suitable_for: ['In-depth Explorers', 'Families', 'Couples', 'Active Travelers'],
    is_published: true,
    itinerary: [
      {
        day_number: 1,
        title: 'Arrival & Ancient Anuradhapura / Sigiriya',
        route: 'Airport (CMB) → Cultural Triangle',
        description: 'Meet your private driver and head to the cultural heartland. Rest and shake off jet lag at your eco-resort.',
        activities: ['Airport pickup', 'Scenic country drive', 'Resort relaxation'],
        overnight_stay: 'Sigiriya'
      },
      {
        day_number: 2,
        title: 'Sigiriya Lion Rock & Minneriya Elephant Safari',
        route: 'Sigiriya → Minneriya → Sigiriya',
        description: 'Morning climb of Sigiriya Lion Rock Fortress. Afternoon open-top jeep safari in Minneriya National Park to watch herds of wild elephants.',
        activities: ['Sigiriya Fortress climb', 'Minneriya elephant safari', 'Stargazing at lodge'],
        overnight_stay: 'Sigiriya'
      },
      {
        day_number: 3,
        title: 'Polonnaruwa Ancient Kingdom & Dambulla Caves',
        route: 'Sigiriya → Polonnaruwa → Dambulla',
        description: 'Explore the 12th-century stone palaces and giant Buddha statues of Polonnaruwa by vehicle or bicycle. Visit Dambulla cave temple.',
        activities: ['Polonnaruwa archaeological ruins', 'Dambulla cave temple'],
        overnight_stay: 'Sigiriya / Dambulla'
      },
      {
        day_number: 4,
        title: 'Matale Spice Gardens & Royal Kandy',
        route: 'Dambulla → Matale → Kandy',
        description: 'Journey to Kandy via the aromatic spice plantations of Matale. Visit Kandy Lake and the Temple of the Tooth.',
        activities: ['Spice trail experience', 'Temple of the Tooth', 'Kandy market stroll'],
        overnight_stay: 'Kandy'
      },
      {
        day_number: 5,
        title: 'Highlands & Tea Terroirs of Nuwara Eliya',
        route: 'Kandy → Nuwara Eliya',
        description: 'Climb into tea country past roaring waterfalls. Tour an operational colonial tea factory and sample single-origin tea.',
        activities: ['Ramboda waterfall stop', 'Ceylon tea estate tour', 'Post Office & Gregory Lake'],
        overnight_stay: 'Nuwara Eliya'
      },
      {
        day_number: 6,
        title: 'Highland Train to Ella & Nine Arch Bridge',
        route: 'Nuwara Eliya → Ella',
        description: 'Board the scenic mountain train over bridges and valleys to the bohemian mountain village of Ella. Walk to Nine Arch Bridge.',
        activities: ['Highland scenic train', 'Nine Arch Bridge', 'Ella cafes'],
        overnight_stay: 'Ella'
      },
      {
        day_number: 7,
        title: 'Ella Views & Journey to Yala Safari Kingdom',
        route: 'Ella → Yala',
        description: 'Morning views over Ella Gap and Ravana Falls. Drive down to the southern wilderness border of Yala National Park.',
        activities: ['Little Adam’s Peak sunrise', 'Ravana Falls', 'Safari lodge check-in'],
        overnight_stay: 'Yala'
      },
      {
        day_number: 8,
        title: 'Yala National Park Leopard Safari & Coastal Drive',
        route: 'Yala → Mirissa',
        description: 'Dawn 4x4 safari in Yala tracking leopards, sloth bears, and birdlife. Continue along the scenic coastal route to Mirissa.',
        activities: ['Dawn wildlife safari', 'Drive along palm-fringed coast', 'Seafood beach dinner'],
        overnight_stay: 'Mirissa'
      },
      {
        day_number: 9,
        title: 'Southern Coastal Gems & Historic Galle Fort',
        route: 'Mirissa → Galle',
        description: 'Relaxed beach time in the morning. Afternoon exploration of Galle Fort’s ramparts, bastions, and colonial streets.',
        activities: ['Beach leisure', 'Galle Fort walking tour', 'Lighthouse sunset'],
        overnight_stay: 'Galle / Bentota'
      },
      {
        day_number: 10,
        title: 'Southern Highway to Airport Departure',
        route: 'Galle → Airport (CMB)',
        description: 'Private transfer along the Southern Expressway directly to the airport for your onward flight, enriched with memories.',
        activities: ['Comfortable expressway transfer', 'Airport drop-off']
      }
    ]
  },
  {
    id: 'tour-12d-ultimate',
    title: '12 Days — Ultimate Sri Lanka Journey',
    slug: '12-days-ultimate-sri-lanka',
    duration_days: 12,
    duration_nights: 11,
    short_description: 'The master itinerary: Northern heritage, Sigiriya, highlands, high peaks, wild safaris, and secluded coastal hideaways.',
    overview: 'The definitive Sri Lankan voyage with no compromises. Crafted for discerning travelers wanting an unhurried, deeply personal encounter with Sri Lanka’s ancient kingdoms, hill-country tea estates, dense national parks, and idyllic southern beaches.',
    cover_image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80',
    destinations: ['Negombo', 'Anuradhapura', 'Sigiriya', 'Kandy', 'Nuwara Eliya', 'Horton Plains', 'Ella', 'Yala', 'Mirissa', 'Galle', 'Colombo'],
    highlights: [
      'Negombo lagoon & coastal culture',
      'Sacred ancient kingdom of Anuradhapura',
      'Sigiriya Lion Rock & Minneriya safari',
      'Kandy Temple of the Tooth & Royal Botanical Gardens',
      'Misty high-altitude tea trails of Nuwara Eliya',
      'Horton Plains & World’s End cliff trek',
      'Ella Nine Arch Bridge & scenic railway ride',
      'Yala National Park premium 4x4 safari',
      'Mirissa beach relaxation & Galle UNESCO Fort',
      'Colombo heritage & dining orientation'
    ],
    suitable_for: ['Discerning Travelers', 'Luxury Explorers', 'Extended Vacations', 'Family Expeditions'],
    is_published: true,
    itinerary: [
      {
        day_number: 1,
        title: 'Arrival & Coastal Relaxation in Negombo',
        route: 'Airport (CMB) → Negombo',
        description: 'Warm welcome by your dedicated private driver. Short transfer to the coastal town of Negombo to unwind and shake off jet lag by the ocean.',
        activities: ['Airport pickup', 'Beachfront hotel check-in', 'Sunset ocean dinner'],
        overnight_stay: 'Negombo'
      },
      {
        day_number: 2,
        title: 'Ancient Anuradhapura & Journey to Sigiriya',
        route: 'Negombo → Anuradhapura → Sigiriya',
        description: 'Drive north to the first ancient capital of Sri Lanka, Anuradhapura, home to the sacred Jaya Sri Maha Bodhi tree and colossal white stupas.',
        activities: ['Anuradhapura sacred city exploration', 'Scenic countryside drive to Sigiriya'],
        overnight_stay: 'Sigiriya'
      },
      {
        day_number: 3,
        title: 'Sigiriya Rock Citadel & Minneriya Wildlife Safari',
        route: 'Sigiriya & Minneriya',
        description: 'Morning climb of the Sigiriya Lion Rock Fortress. Afternoon private 4x4 safari in Minneriya observing large herds of wild elephants.',
        activities: ['Sigiriya Lion Rock climb', 'Minneriya elephant gathering safari'],
        overnight_stay: 'Sigiriya'
      },
      {
        day_number: 4,
        title: 'Dambulla Royal Cave Temple & Sacred Kandy',
        route: 'Sigiriya → Dambulla → Kandy',
        description: 'Visit the cave monasteries of Dambulla before winding through spice gardens to Kandy. Evening cultural show and Temple of the Tooth.',
        activities: ['Dambulla Cave Temple', 'Matale spice garden', 'Temple of the Tooth Relic'],
        overnight_stay: 'Kandy'
      },
      {
        day_number: 5,
        title: 'Royal Botanical Gardens & Highlands to Nuwara Eliya',
        route: 'Kandy → Ramboda → Nuwara Eliya',
        description: 'Tour Peradeniya Botanical Gardens, then climb into the cloud-covered tea mountains of Nuwara Eliya with waterfall view stops.',
        activities: ['Peradeniya Botanical Gardens', 'Ramboda Falls', 'Tea factory tour & high tea'],
        overnight_stay: 'Nuwara Eliya'
      },
      {
        day_number: 6,
        title: 'Horton Plains World’s End & Highland Leisure',
        route: 'Nuwara Eliya → Horton Plains → Nuwara Eliya',
        description: 'Early morning nature trek across the misty Horton Plains plateau to the precipitous 870-meter World’s End drop and Baker’s Falls.',
        activities: ['Horton Plains national park trek', 'World’s End cliff view', 'Colonial Nuwara Eliya town stroll'],
        overnight_stay: 'Nuwara Eliya'
      },
      {
        day_number: 7,
        title: 'Scenic Mountain Train to Ella & Nine Arch Bridge',
        route: 'Nuwara Eliya → Ella',
        description: 'Experience Sri Lanka’s most breathtaking railway journey. In the afternoon, walk through lush jungle trails to Demodara Nine Arch Bridge.',
        activities: ['Scenic tea-country train', 'Nine Arch Bridge', 'Ella cafes'],
        overnight_stay: 'Ella'
      },
      {
        day_number: 8,
        title: 'Little Adam’s Peak & Descent to Yala Safari Kingdom',
        route: 'Ella → Yala',
        description: 'Hike Little Adam’s Peak for sunrise panoramic views over the southern plains. Drive down past Ravana Falls to Yala National Park.',
        activities: ['Little Adam’s Peak hike', 'Ravana Falls', 'Evening wildlife lodge ambiance'],
        overnight_stay: 'Yala'
      },
      {
        day_number: 9,
        title: 'Yala National Park 4x4 Safari & Southern Coast',
        route: 'Yala → Mirissa',
        description: 'Early morning 4x4 jeep safari tracking leopards, elephants, and bears. Journey along the southern coastline to idyllic Mirissa.',
        activities: ['Yala dawn safari', 'Coastal transfer', 'Mirissa beachside dinner'],
        overnight_stay: 'Mirissa'
      },
      {
        day_number: 10,
        title: 'Mirissa Beach Relaxation & Coconut Tree Hill',
        route: 'Mirissa & Southern Coast',
        description: 'Full day of coastal relaxation: swim in warm turquoise waters, visit famous Coconut Tree Hill, or enjoy fresh ocean seafood.',
        activities: ['Beach leisure', 'Coconut Tree Hill photography', 'Optional surfing / massage'],
        overnight_stay: 'Mirissa'
      },
      {
        day_number: 11,
        title: 'Historic Galle Fort & Sunset Ramparts Walk',
        route: 'Mirissa → Galle',
        description: 'Travel to Galle. Walk along the historic 400-year-old fort ramparts, explore boutique art galleries, and enjoy colonial architecture.',
        activities: ['Galle Fort guided walk', 'Artisan shopping', 'Sunset lighthouse cocktails'],
        overnight_stay: 'Galle'
      },
      {
        day_number: 12,
        title: 'Colombo City Drive & International Airport Departure',
        route: 'Galle → Colombo → Airport (CMB)',
        description: 'Smooth transfer via the Southern Expressway to Colombo for last-minute Ceylon tea shopping and scenic sights before your flight home.',
        activities: ['Expressway transfer', 'Colombo orientation drive', 'Airport drop-off']
      }
    ]
  }
];
