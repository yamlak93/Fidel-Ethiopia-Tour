import omo from '../assets/Omo-Ethiopia.png';

const tours = [
  {
    historic: [
      {
        id: 'FET11',
        name: '13-Day Northern Ethiopia Historic Route',
        category: 'historic',
        duration: '13 Days',
        image: omo,
        summary:
          "Embark on an unforgettable 13-day journey through Northern Ethiopia, a region rich in history, culture, and breathtaking landscapes. From the ancient rock-hewn churches of Lalibela to the majestic Simien Mountains and the historical treasures of Gondar and Axum, this itinerary offers an in-depth exploration of Ethiopia's heritage. Experience vibrant local traditions, sample delicious Ethiopian cuisine, and connect with the warm hospitality of the Ethiopian people.",
        itinerary: [
          {
            day: 1,
            title: 'Arrival in Addis Ababa',
            morning: ['Arrive at Bole International Airport in Addis Ababa.', 'Meet your guide and transfer to your hotel.'],
            afternoon: ['Visit the National Museum of Ethiopia to see the famous fossil of Lucy and other significant artifacts.', 'Explore the Holy Trinity Cathedral, an important site for Ethiopian Orthodox Christians.'],
            evening: ['Enjoy dinner at a traditional Ethiopian restaurant with cultural music and dance.', 'Overnight at a hotel in Addis Ababa.'],
          },
          {
            day: 2,
            title: 'Addis Ababa - Bahir Dar',
            morning: ['Breakfast at hotel', 'Transfer to the airport for a flight to Bahir Dar.'],
            afternoon: ['Arrive in Bahir Dar and check into your hotel.', 'Visit the vibrant local market to experience daily life in Bahir Dar.'],
            evening: ['Dinner at a local restaurant, sampling regional dishes.', 'Overnight at a hotel in Bahir Dar.'],
          },
            {
        day: 3,
        title: 'Lake Tana and Blue Nile Falls',
        morning: [
        'Take a boat trip on Lake Tana, the largest lake in Ethiopia, to visit ancient monasteries on the islands, including Ura Kidane Meheret and Kibran Gabriel.'
        ],
        afternoon: [
        'Visit the Blue Nile Falls (Tis Issat), where you can enjoy the stunning views and take a short hike around the area.',
        'Have lunch at a nearby restaurant or picnic.'
        ],
        evening: [
        'Return to Bahir Dar for dinner.',
        'Overnight at a hotel in Bahir Dar.'
        ]
    },
    {
        day: 4,
        title: 'Bahir Dar - Gondar',
        morning: [
        'After breakfast, drive to Gondar (approximately 3 hours).',
        'Enjoy scenic views along the way.'
        ],
        afternoon: [
        'Check into your hotel and then visit the Royal Enclosure, including Fasil Ghebbi, a UNESCO World Heritage site with impressive castles and palaces.'
        ],
        evening: [
        'Dinner at a local restaurant featuring traditional Ethiopian cuisine.',
        'Overnight at a hotel in Gondar.'
        ]
    },
    {
        day: 5,
        title: 'Gondar - Simien Mountains National Park',
        morning: [
        'Depart for Simien Mountains National Park (approximately 2 hours).',
        'Meet your local guide for a day of hiking and exploration.'
        ],
        midMorning: [
        'Hike to viewpoints such as Sankaber or Geech, enjoying panoramic views of the dramatic landscapes and unique wildlife, including the Gelada baboons.'
        ],
        afternoon: [
        'Picnic lunch in the park surrounded by nature.',
        'Continue hiking or explore additional trails. Option for shorter hikes based on group preference.'
        ],
        evening: [
        'Return to Gondar for dinner and relaxation.',
        'Overnight at a hotel in Gondar.'
        ]
    },
            {
        day: 6,
        title: 'Gondar - Lalibela',
        morning: [
        'Fly from Gondar to Lalibela (flight time approximately 1 hour).'
        ],
        afternoon: [
        'Arrive in Lalibela, check into your hotel, and have lunch.',
        'Begin exploring the rock-hewn churches, starting with the first cluster church including Bet Medhane Alem, one of the largest and most impressive churches.'
        ],
        evening: [
        'Dinner at a local restaurant known for its traditional dishes.',
        'Overnight at a hotel in Lalibela.'
        ]
    },
    {
        day: 7,
        title: 'Lalibela',
        fullDay: [
        'Continue your exploration of the second cluster church and Naketulab Monastery:',
        'Visit Bet Maryam, Bet Giyorgis (the most famous church), and Bet Meskel.',
        'Learn about the history and significance of each church from your guide.',
        'Option to attend a local coffee ceremony for an authentic cultural experience.'
        ],
        lunch: [
        'Enjoy lunch at a local eatery or your hotel.'
        ],
        evening: [
        'Dinner at your hotel or a local restaurant.',
        'Overnight at a hotel in Lalibela.'
        ]
    },
    {
        day: 8,
        title: 'Lalibela - Axum',
        morning: [
        'Fly from Lalibela to Axum (flight time approximately 30 minutes).'
        ],
        afternoon: [
        'Arrive in Axum, check into your hotel, and have lunch.',
        'Visit the famous stelae fields and the ruins of ancient Axumite palaces.',
        'Visit St. Mary of Zion Church, believed to house the Ark of the Covenant.'
        ],
        evening: [
        'Dinner at a local restaurant specializing in Axumite cuisine.',
        'Overnight at a hotel in Axum.'
        ]
    },
    {
        day: 9,
        title: 'Axum',
        morning: [
        'After breakfast drive to Yeha Temple.',
        'Explore the Ancient historical sites of Yeha Temple.'
        ],
        afternoon: [
        'Return to Axum, Lunch at a local restaurant or your hotel.',
        'In the afternoon see the tombs of King Kaleb and other ancient rulers.',
        "Learn about Axum's role as an ancient trading empire and its significance in early Christianity."
        ],
        evening: [
        'Dinner at your hotel.',
        'Overnight at a hotel in Axum.'
        ]
    },
    {
        day: 10,
        title: 'Axum - Mekele',
        morning: [
        'Drive to Mekele (approximately 3 hours), enjoying beautiful views along the way.'
        ],
        afternoon: [
        'Arrive in Mekele, check into your hotel, and have lunch.',
        'Visit the Tigray Cultural Museum to learn about the history and culture of the Tigray region.'
        ],
        evening: [
        'Dinner at a local restaurant.',
        'Overnight at a hotel in Mekele.'
        ]
    },
    {
        day: 11,
        title: 'Mekele - Tigray Churches',
        fullDay: [
        'Explore the ancient rock-hewn churches of Tigray:',
        'Visit Abreha we Atsbeha Church, known for its beautiful frescoes and stunning architecture.',
        'Explore Daniel Korkor Church, located on a cliff with breathtaking views.',
        'Enjoy scenic drives through rural Tigray with opportunities to interact with locals and learn about their traditions.'
        ],
        lunch: [
        'Picnic lunch during your excursion or eat at a local eatery.'
        ],
        evening: [
        'Return to Mekele for dinner.',
        'Overnight at a hotel in Mekele.'
        ]
    },
    {
        day: 12,
        title: 'Mekele - Addis Ababa',
        morning: [
        'Fly back to Addis Ababa (flight time approximately 1 hour).'
        ],
        afternoon: [
        'Visit Entoto Hill for panoramic views of Addis Ababa and explore Entoto Maryam Church, one of Ethiopia’s oldest churches.'
        ],
        evening: [
        'Farewell dinner at a traditional Ethiopian restaurant featuring cultural performances.',
        'Overnight at a hotel in Addis Ababa.'
        ]
    },
    {
        day: 13,
        title: 'Departure from Addis Ababa',
        morning: [
        "Free time for last-minute shopping or relaxation. Consider visiting Mercato, one of Africa's largest open-air markets. If time allows."
        ],
        afternoon: [
        'Transfer to Bole International Airport for your departure flight.'
        ]
    },
            ],
            inclusions: [
            'Domestic flights',
            'Accommodation (12 nights)',
            'Daily breakfast and selected meals',
            'Local guide for all excursions',
            'Entrance fees to historical sites',
            'Transportation during the tour',
            'Boat trip on Lake Tana',
            ],
            exclusions: [
            'International flights to/from Ethiopia',
            'Visa fees for Ethiopia',
            'Meals not mentioned in the itinerary',
            'Personal expenses (e.g., souvenirs, tips)',
            'Travel insurance',
            'Any optional activities not included in the itinerary',
            ],
        },
        {
            id: 'FET12',
            name: '5-Day Tigray Rock-Hewn Churches',
            category: 'historic',
            duration: '5 Days',
            image: omo,
            summary:
            "This 5-day itinerary takes you on an unforgettable journey through the stunning landscapes of Tigray, Ethiopia, renowned for its ancient rock-hewn churches. You'll explore remarkable architectural wonders carved into cliffs, experience local culture, and enjoy the breathtaking scenery of the Ethiopian highlands.",
            itinerary: [
            {
        day: 1,
        title: 'Arrival in Addis Ababa',
        morning: [
        'Arrive at Addis Ababa Bole International Airport.'
        ],
        afternoon: [
        'Transfer to your hotel for check-in and rest.'
        ],
        evening: [
        'Welcome dinner and tour briefing.'
        ]
    },
    {
        day: 2,
        title: 'Addis Ababa to Mekele',
        morning: [
        'Fly from Addis Ababa to Mekele.'
        ],
        afternoon: [
        "Visit the Tigray Cultural Museum to learn about the region's history and traditions."
        ],
        evening: [
        'Dinner at a local restaurant featuring traditional Ethiopian dishes.',
        'Overnight in Mekele.'
        ]
    },
    {
        day: 3,
        title: 'Mekele - Abreha we Atsbeha Wukro Chirkos',
        morning: [
        'After breakfast, drive to Abreha we Atsbeha Church (approximately 1 hour).',
        'Explore this ancient rock-hewn church known for its beautiful frescoes and impressive architecture.'
        ],
        afternoon: [
        'Picnic lunch near the church or at a local eatery.',
        'Continue to Wukro Chirkos Church, one of the oldest churches in Tigray, famous for its unique architectural style.',
        'Return to Mekele for dinner.'
        ],
        evening: [
        'Free time to relax or explore Mekele’s local markets.',
        'Overnight at a hotel in Mekele.'
        ]
    },
    {
        day: 4,
        title: 'Mekele - Gheralta Churches',
        morning: [
        'After breakfast, drive to the Gheralta region (approximately 1 hour).',
        'Visit Abba Yemata Guh Church, known for its dramatic location and stunning frescoes. This church requires a short hike and some climbing.'
        ],
        lunch: [
        'Picnic lunch with scenic views.'
        ],
        afternoon: [
        'Explore other nearby churches, such as Maryam Korkor and Daniel Korkor, each offering unique architecture and history.'
        ],
        evening: [
        'Overnight at Gheralta Lodge.'
        ]
    },
    {
        day: 5,
        title: 'Departure from Mekele',
        morning: [
        'Enjoy breakfast at your hotel.',
        'Depending on your departure time, you may have some free time for last-minute shopping or sightseeing in Mekele.'
        ],
        afternoon: [
        'Transfer to Mekele Airport for your departure flight.'
        ]
    },
            ],
            inclusions: [
            'Accommodation (4 nights)',
            'Daily breakfast and selected meals',
            'Local guide for all excursions',
            'Entrance fees to historical sites',
            'Transportation during the tour',
            'Picnic lunches on excursion days',
            ],
            exclusions: [
            'International flights to/from Ethiopia',
            'Visa fees for Ethiopia',
            'Meals not mentioned in the itinerary',
            'Personal expenses (e.g., souvenirs, tips)',
            'Travel insurance',
            'Any optional activities not included in the itinerary',
            ],
        },
        {
            id: 'FET13',
            name: '6-Day Northern Ethiopia Historic Route',
            category: 'historic',
            duration: '6 Days',
            image: omo,
            summary:
            'This 6-day itinerary takes you through the historic treasures of Northern Ethiopia, exploring ancient churches, stunning landscapes, and rich cultural heritage. You will visit the UNESCO World Heritage Sites of Lalibela, Axum, and Gondar, along with other significant historical landmarks. This journey is perfect for history enthusiasts and those wanting to experience the unique culture of Ethiopia.',
            itinerary: [
            {
        day: 1,
        title: 'Arrival in Addis Ababa',
        morning: [
        'Arrive at Addis Ababa Bole International Airport. Meet your guide and transfer to your hotel.'
        ],
        afternoon: [
        'Lunch at a local restaurant.',
        'Visit the National Museum of Ethiopia to see the famous Lucy fossil and other historical artifacts.'
        ],
        evening: [
        'Dinner at a traditional Ethiopian restaurant with cultural performances.',
        'Overnight at a hotel in Addis Ababa.'
        ]
    },
    {
        day: 2,
        title: 'Addis Ababa - Lalibela',
        morning: [
        'After breakfast, transfer to the airport for a domestic flight to Lalibela (approximately 1 hour).',
        'Upon arrival, check into your hotel.'
        ],
        afternoon: [
        'Explore the famous rock-hewn churches of Lalibela, starting with the Northern Group, including the iconic Church of St. George (Bete Giyorgis).'
        ],
        lunch: [
        'Enjoy lunch at a local restaurant.'
        ],
        evening: [
        'Continue exploring more churches in Lalibela or take a short hike to enjoy panoramic views of the town.',
        'Overnight at a hotel in Lalibela.'
        ]
    },
    {
        day: 3,
        title: 'Lalibela - Axum',
        morning: [
        'After breakfast, visit the remaining churches in Lalibela, including the Southern Group.',
        'Transfer to the airport for a flight to Axum (approximately 1 hour).',
        'Upon arrival, check into your hotel and relax.'
        ],
        afternoon: [
        'Visit the famous Stelae Field, where ancient obelisks mark the burial sites of Axumite kings.',
        'Visit the Church of St. Mary of Zion, believed to house the Ark of the Covenant.'
        ],
        evening: [
        'Overnight at a hotel in Axum.'
        ]
    },
    {
        day: 4,
        title: 'Axum - Gondar',
        morning: [
        'Drive to Gonder (approximately 5 hour drive).'
        ],
        lunch: [
        'Picnic lunch.'
        ],
        afternoon: [
        'Explore the Royal Enclosure, home to several castles and palaces built in the 17th century.',
        'Check into your hotel.'
        ],
        evening: [
        'Check into your hotel.',
        'Overnight at a hotel in Gondar.'
        ]
    },
    {
        day: 5,
        title: 'Gondar - Simien Mountains National Park',
        morning: [
        'After breakfast, take a day trip to Simien Mountains National Park (approximately 2 hours).',
        'Enjoy hiking opportunities with stunning views of the dramatic landscape and endemic wildlife like the Gelada baboon.'
        ],
        lunch: [
        'Picnic lunch in the park amidst nature.'
        ],
        afternoon: [
        'Continue exploring the park and its breathtaking scenery.'
        ],
        evening: [
        'Return to Gondar for dinner and relaxation.',
        'Overnight at a hotel in Gondar.'
        ]
    },
    {
        day: 6,
        title: 'Departure from Gondar',
        morning: [
        'Enjoy breakfast at your hotel.',
        'Depending on your departure time, you may have some free time for last-minute shopping or sightseeing in Gondar.'
        ],
        afternoon: [
        'Transfer to Gondar Airport for your departure flight.'
        ]
    }
            ],
            inclusions: [
            'Accommodation (5 nights)',
            'Domestic flights',
            'Daily breakfast and selected meals',
            'Local guide for all excursions',
            'Entrance fees to historical sites',
            'Transportation during the tour',
            'Picnic lunches on excursion days',
            ],
            exclusions: [
            'International flights to/from Ethiopia',
            'Visa fees for Ethiopia',
            'Meals not mentioned in the itinerary',
            'Personal expenses (e.g., souvenirs, tips)',
            'Travel insurance',
            ],
        },
        {
            id: 'FET14',
            name: '8-Day Northern Ethiopia Historic Route',
            category: 'historic',
            duration: '8 Days',
            image: omo,
            summary:
            'This 8-day itinerary explores the rich historical and cultural heritage of Northern Ethiopia. You will visit iconic sites such as Lalibela, Axum, Gondar, and the Simien Mountains, each offering a unique glimpse into Ethiopia’s ancient past. This journey combines breathtaking landscapes, ancient churches, and vibrant local culture, making it perfect for travelers interested in history and adventure.',
            itinerary: [
            {
        day: 1,
        title: 'Arrival in Addis Ababa',
        morning: [
        'Arrive at Addis Ababa Bole International Airport. Meet your guide and transfer to your hotel.'
        ],
        afternoon: [
        'Lunch at a local restaurant.',
        'Visit the National Museum of Ethiopia to see the famous Lucy fossil and other significant artifacts.'
        ],
        evening: [
        'Dinner at a traditional Ethiopian restaurant featuring cultural performances.',
        'Overnight at a hotel in Addis Ababa.'
        ]
    },
    {
        day: 2,
        title: 'Addis Ababa - Lalibela',
        morning: [
        'After breakfast, transfer to the airport for a domestic flight to Lalibela (approximately 1 hour).',
        'Upon arrival, check into your hotel.'
        ],
        afternoon: [
        'Begin exploring the rock-hewn churches of Lalibela, starting with the Northern Group, including the iconic Church of St. George (Bete Giyorgis).'
        ],
        lunch: [
        'Enjoy lunch at a local restaurant.'
        ],
        evening: [
        'Continue exploring more churches in Lalibela or take a short hike to enjoy panoramic views of the town.',
        'Overnight at a hotel in Lalibela.'
        ]
    },
    {
        day: 3,
        title: 'Lalibela - More Churches Cultural Experience',
        morning: [
        'Visit the remaining churches in Lalibela, including the Southern Group.',
        'Learn about the history and significance of these churches from your local guide.'
        ],
        lunch: [
        'Lunch at a local restaurant.'
        ],
        afternoon: [
        'Visit Yemrehana Krestos church and monastery and Participate in a cultural experience, such as a traditional coffee ceremony or visiting a local village.'
        ],
        evening: [
        'Dinner at your hotel or a local restaurant.',
        'Overnight at a hotel in Lalibela.'
        ]
    },
    {
        day: 4,
        title: 'Lalibela - Axum',
        morning: [
        'After breakfast, transfer to the airport for a flight to Axum (approximately 1 hour).',
        'Upon arrival, check into your hotel.'
        ],
        afternoon: [
        'Visit the famous Stelae Field, where ancient obelisks mark the burial sites of Axumite kings.'
        ],
        lunch: [
        'Enjoy lunch at a local restaurant.'
        ],
        evening: [
        'Visit the Church of St. Mary of Zion, believed to house the Ark of the Covenant.',
        'Overnight at a hotel in Axum.'
        ]
    },
    {
        day: 5,
        title: 'Axum - Gondar',
        morning: [
        'Explore more archaeological sites in Axum, including the ruins of ancient palaces, tombs and obelisks'
        ],
        lunch: [
        'Lunch at a local restaurant.'
        ],
        afternoon: [
        'Drive to Gondar enjoying the scenic beauty of the semen chain mountain (approximately 5 hours by road).',
        'Check into your hotel upon arrival.'
        ],
        evening: [
        'Explore the Royal Enclosure, home to several castles and palaces built in the 17th century.',
        'Overnight at a hotel in Gondar.'
        ]
    },
    {
        day: 6,
        title: 'Gondar - Simien Mountains National Park',
        morning: [
        'After breakfast, take a day trip to Simien Mountains National Park (approximately 2 hours).',
        'Enjoy hiking opportunities with stunning views of the dramatic landscape and endemic        wildlife like the Gelada baboon.'
        ],
        lunch: [
        'Picnic lunch in the park amidst nature.'
        ],
        afternoon: [
        'Continue exploring the park and its breathtaking scenery, possibly visiting viewpoints like       Sankaber or Geech.'
        ],
        evening: [
        'Return to Gondar for dinner and relaxation.',
        'Overnight at a hotel in Gondar.'
        ]
    },
    {
        day: 7,
        title: 'Gondar - Bahir Dar',
        morning: [
        'After breakfast, drive to Bahir Dar (approximately 3 hours by road) on the way visit traditional houses and local villages.'
        ],
        lunch: [
        'Check into your hotel and have lunch at a local restaurant.'
        ],
        afternoon: [
        'Visit Lake Tana, Ethiopia\'s largest lake, and take a boat trip to explore some of its ancient monasteries on the islands (such as Ura Kidane Meheret).'
        ],
        evening: [
        'Return to Bahir Dar for dinner and enjoy a leisurely evening by the lake.',
        'Overnight at a hotel in Bahir Dar.'
        ]
    },
    {
        day: 8,
        title: 'Bahir Dar - Departure',
        morning: [
        'After breakfast, visit the Blue Nile Falls (Tis Issat), one of Ethiopia\'s most famous natural attractions.'
        ],
        lunch: [
        'Return to Bahir Dar for lunch at a local restaurant.'
        ],
        afternoon: [
        'Depending on your departure time, you may have some free time for last-minute shopping or sightseeing in Bahir Dar.'
        ],
        evening: [
        'Transfer to Bahir Dar Airport for your departure flight.'
        ]
    },
            ],
            inclusions: [
            'Accommodation (7 nights)',
            'Domestic flights',
            'Daily breakfast and selected meals',
            'Local guide for all excursions',
            'Entrance fees to historical sites',
            'Transportation during the tour',
            'Boat trip on Lake Tana',
            'Picnic lunches on excursion days',
            ],
            exclusions: [
            'International flights to/from Ethiopia',
            'Visa fees for Ethiopia',
            'Meals not mentioned in the itinerary',
            'Personal expenses (e.g., souvenirs, tips)',
            'Travel insurance',
            'Any optional activities not included in the itinerary',
            ],
        },
        {
            id: 'FET15',
            name: '15-Day Combined North and South Ethiopian Tour',
            category: 'historic',
            duration: '15 Days',
            image: omo,
            summary:
            "This comprehensive 15-day itinerary combines the rich historical and cultural heritage of Northern Ethiopia with the stunning natural landscapes and diverse cultures of Southern Ethiopia. You will explore ancient churches, archaeological sites, and vibrant local communities, as well as experience breathtaking scenery in the Simien Mountains and the Great Rift Valley. This journey is perfect for travelers seeking an immersive experience of Ethiopia's unique history, culture, and natural beauty.",
            itinerary: [
            {
        day: 1,
        title: 'Arrival in Addis Ababa',
        morning: [
        'Arrive at Addis Ababa Bole International Airport. Meet your guide and transfer to your hotel.'
        ],
        afternoon: [
        'Lunch at a local restaurant.',
        'Visit the National Museum of Ethiopia to see the famous Lucy fossil and other significant artifacts.'
        ],
        evening: [
        'Dinner at a traditional Ethiopian restaurant featuring cultural performances.',
        'Overnight at a hotel in Addis Ababa.'
        ]
    },
    {
        day: 2,
        title: 'Addis Ababa - Lalibela',
        morning: [
        'After breakfast, transfer to the airport for a domestic flight to Lalibela (approximately 1 hour).',
        'Upon arrival, check into your hotel.'
        ],
        afternoon: [
        'Begin exploring the rock-hewn churches of Lalibela, starting with the Northern Group, including the iconic Church of St. George (Bete Giyorgis).'
        ],
        lunch: [
        'Enjoy lunch at a local restaurant.'
        ],
        evening: [
        'Continue exploring more churches in Lalibela or take a short hike to enjoy panoramic views of the town.',
        'Overnight at a hotel in Lalibela.'
        ]
    },
    {
        day: 3,
        title: 'Lalibela - More Churches Cultural Experience',
        morning: [
        'Visit the remaining churches in Lalibela, including the Southern Group.',
        'Learn about the history and significance of these churches from your local guide.'
        ],
        lunch: [
        'Lunch at a local restaurant.'
        ],
        afternoon: [
        'excursion to Yemrehana Krestos  Church and Monastery 42 kilometer drive from Lalibela and Participate in a cultural experience, such as a traditional coffee ceremony or visiting a house  or tekule village.'
        ],
        evening: [
        'Dinner at your hotel or a local restaurant.',
        'Overnight at a hotel in Lalibela.'
        ]
    },
    {
        day: 4,
        title: 'Lalibela - Axum',
        morning: [
        'After breakfast, transfer to the airport for a flight to Axum (approximately 45 minute).',
        'Upon arrival, check into your hotel.'
        ],
        afternoon: [
        'Visit the famous Stelae Field, where ancient obelisks mark the burial sites of Axumite kings.'
        ],
        lunch: [
        'Enjoy lunch at a local restaurant.'
        ],
        evening: [
        'Visit the Church of St. Mary of Zion, believed to house the Ark of the Covenant.',
        'Overnight at a hotel in Axum.'
        ]
    },
    {
        day: 5,
        title: 'Axum - Gondar',
        morning: [
        'Start Driving to Gonder (approximately 5 hour)',
        'On the way explore more archaeological sites in Axum, including the ruins of ancient palaces of queen of Sheba and tombs.'
        ],
        lunch: [
        'Lunch at a local restaurant.'
        ],
        afternoon: [
        'Transfer to Gondar (approximately 5 hours by road).',
        'Check into your hotel upon arrival.'
        ],
        evening: [
        'Explore the Royal Enclosure, home to several castles and palaces built in the 17th century.',
        'Overnight at a hotel in Gondar.'
        ]
    },
    {
        day: 6,
        title: 'Gondar - Simien Mountains National Park',
        morning: [
        'After breakfast, take a day trip to Simien Mountains National Park (approximately 2 hours).',
        'Enjoy hiking opportunities with stunning views of the dramatic landscape and endemic wildlife like the Gelada baboon.'
        ],
        lunch: [
        'Picnic lunch in the park amidst nature.'
        ],
        afternoon: [
        'Continue exploring the park and its breathtaking scenery, possibly visiting viewpoints like Sankaber or Geech.'
        ],
        evening: [
        'Return to Gondar for dinner and relaxation.',
        'Overnight at a hotel in Gondar.'
        ]
    },
    {
        day: 7,
        title: 'Gondar - Bahir Dar',
        morning: [
        'After breakfast, transfer to Bahir Dar (approximately 3 hours by road).'
        ],
        lunch: [
        'Check into your hotel and have lunch at a local restaurant.'
        ],
        afternoon: [
        'Visit Lake Tana, Ethiopia\'s largest lake, and take a boat trip to explore some of its ancient monasteries on the islands (such as Ura Kidane Meheret).'
        ],
        evening: [
        'Return to Bahir Dar for dinner and enjoy a leisurely evening by the lake.',
        'Overnight at a hotel in Bahir Dar.'
        ]
    },
    {
        day: 8,
        title: 'Bahir Dar - Blue Nile Falls',
        morning: [
        'After breakfast, visit the Blue Nile Falls (Tis Issat), one of Ethiopia\'s most famous natural attractions.'
        ],
        lunch: [
        'Return to Bahir Dar for lunch at a local restaurant.'
        ],
        afternoon: [
        'Explore the traditional market of the city and visit Bezawit Palace ( Palace of Emporor Haile Selassie)  and additional sites around Bahir Dar or relax by Lake Tana.'
        ],
        evening: [
        'Dinner at your hotel or a local restaurant.',
        'Overnight at a hotel in Bahir Dar.'
        ]
    },
    {
        day: 9,
        title: 'Bahir Dar - Addis Ababa',
        morning: [
        'After breakfast, transfer to Bahir Dar Airport for your flight back to Addis Ababa (approximately 1 hour).'
        ],
        lunch: [
        'Check into your hotel upon arrival and have lunch at a local restaurant.'
        ],
        afternoon: [
        'Visit Entoto Hill for panoramic views of Addis Ababa and explore the historic church of St. Mary.'
        ],
        evening: [
        'Dinner at a traditional Ethiopian restaurant with cultural performances.',
        'Overnight at a hotel in Addis Ababa.'
        ]
    },
    {
        day: 10,
        title: 'Addis Ababa – Arba Minch',
        morning: [
        'After breakfast, depart for Arba Minch (approximately 8 hours by road), passing through beautiful landscapes and small towns.'
        ],
        lunch: [
        'Stop for lunch en route at a local restaurant or picnic.'
        ],
        evening: [
        'Arrive in Arba Minch and check into your hotel. Relax after your journey.',
        'Overnight at a hotel in Arba Minch.'
        ]
    },
    {
        day: 11,
        title: 'Arba Minch – Chencha – Lake Chamo',
        morning: [
        'After breakfast, visit Chencha village to learn about the Dorze people and their unique culture and weaving traditions.'
        ],
        lunch: [
        'Return to Arba Minch for lunch at a local restaurant.'
        ],
        afternoon: [
        'Take a boat trip on Lake Chamo to see hippos and crocodiles, along with stunning views of the surrounding landscape.'
        ],
        evening: [
        'Dinner at your hotel or a local restaurant.',
        'Overnight at a hotel in Arba Minch.'
        ]
    },
    {
        day: 12,
        title: 'Arba Minch – Jinka',
        morning: [
        'Depart for Jinka (approximately 5 hours by road), traveling through beautiful countryside and observing daily life in rural Ethiopia.'
        ],
        lunch: [
        'Stop for lunch en route at a local restaurant or picnic.'
        ],
        afternoon: [
        'Visit the Jinka Museum to learn about the Omo Valley tribes and their cultures.'
        ],
        evening: [
        'Dinner at your hotel or a local restaurant.',
        'Overnight at a hotel in Jinka.'
        ]
    },
    {
        day: 13,
        title: 'Jinka – Mursi Tribe Konso Village',
        morning: [
        'After breakfast, take an excursion to visit the Mursi tribe, famous for their lip plates and unique customs (approximately 1.5 hours drive).'
        ],
        lunch: [
        'Picnic lunch in the area or return to Jinka for lunch.'
        ],
        afternoon: [
        'Drive to Konso visit there Village, known for its terraced agriculture and unique cultural practices. Learn about their traditions from local guides.'
        ],
        evening: [
        'Return to your lodge for dinner and relaxation.',
        'Overnight at Kanta lodge'
        ]
    },
    {
        day: 14,
        title: 'Konso –Arbaminch - Addis Ababa',
        morning: [
        'Depart Konso and drive to Arbaminch 2 hours drive to take your afternoon flight'
        ],
        lunch: [
        'Stop for lunch en route at a local restaurant or picnic.'
        ],
        evening: [
        'Arrive in Addis Ababa, check into your hotel, and enjoy some leisure time after your journey.',
        'Farewell dinner at a traditional Ethiopian restaurant with cultural performances.',
        'Overnight at a hotel in Addis Ababa.'
        ]
    },
    {
        day: 15,
        title: 'Departure from Addis Ababa',
        morning: [
        'After breakfast, depending on your flight schedule, you may have some free time for last-minute shopping or sightseeing in Addis Ababa.'
        ],
        midMorning: [
        'Transfer to Bole International Airport for your departure flight.'
        ]
    },
            ],
            inclusions: [
            'Accommodation (14 nights)',
            'Domestic flights',
            'Daily breakfast and selected meals',
            'Local guides for all excursions',
            'Entrance fees to historical sites and national parks',
            'Transportation during the tour',
            'Boat trips on Lake Tana and Lake Chamo',
            'Cultural experiences (e.g., visits to local tribes)',
            ],
            exclusions: [
            'International flights to/from Ethiopia',
            'Visa fees for Ethiopia',
            'Meals not mentioned in the itinerary',
            'Personal expenses (e.g., souvenirs, tips)',
            'Travel insurance',
            'Any optional activities not included in the itinerary',
            ],
        },
    ],
    adventurous: [
      {
        id: 'FET21',
        name: '5-Day Danakil Depression Tour',
        category: 'adventurous',
        duration: '5 Days',
        image: omo,
        summary:
          "Embark on an unforgettable adventure to the Danakil Depression, one of the hottest and lowest places on Earth. This 5-day tour takes you through stunning landscapes, vibrant Afar culture, and unique geological formations. Witness the mesmerizing colors of the Dallol sulfur springs, explore the salt flats of Lake Assale, and experience the rich traditions of the Afar people. This journey promises an exhilarating blend of natural wonders and cultural immersion.",
        itinerary: [
          {
            day: 1,
            title: 'Arrival in Addis Ababa',
            morning: ['Arrive at Bole International Airport and transfer to your hotel.'],
            afternoon: [
              "Explore Addis Ababa, visiting the National Museum to see Lucy, the famous hominid skeleton, visit Holy Trinity Cathedral: Royal tombs and stained-glass windows depicting Biblical scenes. Drive through Africa’s largest open-air market ‘Merkato’ for spices, textiles, and coffee."
            ],
            evening: ['Welcome dinner featuring traditional Ethiopian cuisine.', 'Overnight: Addis Ababa'],
          },
          {
            day: 2,
            title: 'Flight to Mekele and Drive to Danakil',
            morning: ['Meet your guide, Take a domestic flight from Addis Ababa to Mekele.'],
            afternoon: ['Begin your journey to the Danakil Depression (approximately 3-4 hours drive).'],
            evening: [
              'Arrive at your camp in the Danakil area, Hamedela campsite and drive to Lake Assale to see the sun set and drive back to the Campsite. Enjoy a traditional dinner under the stars.',
              'Overnight: Camping in Hamedela',
            ],
          },
          {
            day: 3,
            title: 'Dallol and Erta Ale',
            morning: ['Visit Dallol, exploring its otherworldly landscapes, colorful sulfur springs, and salt formations.'],
            afternoon: ['Head towards Erta Ale volcano. Begin your trek to the summit (approximately 3-4 hours).'],
            evening: ['Witness the spectacular lava lake at Erta Ale. Enjoy dinner at the campsite.', 'Overnight: Camping near Erta Ale'],
          },
          {
            day: 4,
            title: 'Erta Ale to Semera',
            morning: ['Visit the stunning mornining view of Volcano Lake in Ert Ale. Descend from Erta Ale and return to your vehicle.'],
            afternoon: [
              'Drive to Semera, on the way stop at Lake Afdera for a swim and visit it’s vast salt flats. Explore the area and learn about traditional salt mining.'
            ],
            evening: ['Dinner at Semera.', 'Overnight: Semera'],
          },
          {
            day: 5,
            title: 'Flight to Addis Ababa',
            morning: ['Depart from Semera Airport to Addis Ababa.'],
            afternoon: ['Addis Ababa City Tour.'],
            evening: [
              'Cultural Cuisine, Traditional dance and Farewell dinner at local restaurant. Transfer to Bole International Airport for departure or extend your stay in Ethiopia.'
            ],
          },
        ],
        inclusions: [
          'Accommodation (3 nights camping, 1 night hotel in Addis Ababa)',
          'Domestic flights (Addis Ababa - Mekele , Semera - Addis Ababa)',
          'All meals as specified in the itinerary',
          'Transportation throughout the tour (private vehicle)',
          'English-speaking guide',
          'Entrance fees to attractions',
          'Camping equipment (tents, sleeping bags, etc.)',
          'Welcome dinner and farewell dinner',
          'Bottled water during excursions',
        ],
        exclusions: [
          'International airfare',
          'Travel insurance',
          'Personal expenses (souvenirs, snacks, etc.)',
          'Tips for guides and drivers',
          'Any meals not mentioned in the itinerary',
          'Visa fees',
        ],
      },
      {
    id: 'FET22',
    name: '3-Day Danakil Depression Adventure',
    category: 'adventurous',
    duration: '3 Days',
    image: omo,
    summary:
      "Experience the extreme landscapes of the Danakil Depression on this thrilling 3-day adventure. Explore colorful sulfur springs at Dallol, witness the mesmerizing lava lake at Erta Ale, visit salt flats at Lake Afdera, and immerse yourself in the stark beauty of Ethiopia's desert landscapes. This journey is perfect for adventurous travelers seeking unique natural wonders.",
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Mekele and Journey to Danakil',
        morning: ['Arrive at Mekele Airport, meet your guide, and start your adventure.'],
        afternoon: ['Drive to the Danakil Depression (3-4 hours), enjoying scenic views along the way.'],
        evening: [
          'Arrive at Hamedela campsite and drive to Lake Assale to see the sunset.',
          'Enjoy a traditional Ethiopian dinner under the stars.',
          'Overnight: Camping in Hamedela',
        ],
      },
      {
        day: 2,
        title: 'Explore Dallol and Erta Ale',
        morning: ['Visit Dallol, known for its vibrant sulfur springs, salt formations, and unique geological features. Take memorable photographs.'],
        afternoon: ['Head to Erta Ale to see the lava lake.'],
        evening: [
          'Return to the campsite for dinner and relax while enjoying the breathtaking desert sunset.',
          'Overnight: Camping near Erta Ale',
        ],
      },
      {
        day: 3,
        title: 'Drive to Semera and Departure',
        morning: [
          'Depart from Erta Ale and drive to Semera. Enjoy views of the unique landscapes along the way.',
          'Stop at Lake Afdera and explore the salt flats.',
        ],
        afternoon: ['Arrive in Semera, have some free time, and enjoy an early dinner.'],
        evening: ['Transfer to Semera Airport for your onward journey or return to Addis Ababa.'],
      },
    ],
    inclusions: [
      'Accommodation (2 nights camping)',
      'Transportation (private vehicle throughout the tour)',
      'English-speaking guide',
      'All meals as specified in the itinerary',
      'Entrance fees to attractions',
      'Camping equipment (tents, sleeping bags, etc.)',
      'Bottled water during excursions',
    ],
    exclusions: [
      'International airfare',
      'Travel insurance',
      'Personal expenses (souvenirs, snacks, etc.)',
      'Tips for guides and drivers',
      'Any meals not mentioned in the itinerary',
      'Visa fees',
    ],
  },
  {
    id: 'FET23',
    name: '5-Day Denakil Depression and Tigray Churches Adventurous Tour',
    category: 'adventurous',
    duration: '5 Days',
    image: omo,
    summary:
      "Embark on an unforgettable 5-day adventure through the breathtaking landscapes of the Danakil Depression and the ancient rock-hewn churches of Tigray in Ethiopia. This tour offers a unique blend of natural wonders and rich cultural heritage, showcasing the vibrant colors of the Danakil's geothermal features and the architectural marvels of Tigray's churches. Ideal for adventurous travelers and culture enthusiasts, this journey promises an experience filled with stunning scenery, fascinating history, and warm hospitality.",
    itinerary: [
      {
        day: 1,
        title: 'Meet your Guide at the hotel and transfer to the airport to take your flight to Mekele',
        morning: ['Arrive at Mekele Airport. Meet your driver and prepare for your adventure.'],
        afternoon: ['Depart for the Danakil Depression (approximately 3-4 hours drive). Enjoy the scenic desert landscapes along the way.'],
        evening: ['Arrive at your campsite in the Danakil area. Enjoy a traditional Ethiopian dinner under the stars.', 'Overnight: Camping in Danakil'],
      },
      {
        day: 2,
        title: 'Explore Dallol and Lake Assale',
        morning: ['Visit Dallol, famous for its colorful sulfur springs, salt formations, and unique geological features. Explore the vibrant landscape and take memorable photographs.Head to Lake Assale, one of the largest salt flats in the world. Witness the traditional salt mining process and enjoy breathtaking views.'],
        afternoon: ['Afternoon after having lunch drive to Ertale To visit the lava lake camping near to the volcano'],
        evening: ['Return to your campsite for dinner and relax while enjoying the spectacular desert sunset.', 'Overnight: Camping near to Ert-ale'],
      },
      {
        day: 3,
        title: 'Drive to Tigray and Visit Rock-Hewn Churches',
        morning: ['Depart from Danakil and drive towards Tigray (approximately 5-6 hours). Enjoy the changing landscapes as you travel.'],
        afternoon: ['Visit some of Tigray\'s renowned rock-hewn churches, such as Abreha we Atsbeha and Maryam Korkor. Marvel at their stunning architecture and learn about their historical significance.'],
        evening: ['Arrive at your accommodation in Hawzen. Enjoy dinner and relax.', 'Overnight: Hotel in Gheralta lodge'],
      },
      {
        day: 4,
        title: 'More Tigray Churches Exploration',
        morning: ['Continue your exploration of Tigray’s rock-hewn churches, including the famous Gheralta churches like Daniel Korkor and Debre Maryam Korkor. Hike to enjoy panoramic views of the surrounding landscape.'],
        afternoon: ['Visit additional churches or explore local villages to experience the culture and hospitality of the Tigrayan people.'],
        evening: ['Return to your lodge and a restful night.', 'Overnight: Hotel in Tigray'],
      },
      {
        day: 5,
        title: 'Return to Mekele and Departure',
        morning: ['Depart from Tigray and drive back to Mekele (approximately 2-3 hours). Enjoy scenic views along the route.'],
        afternoon: ['Arrive in Mekele with some free time for lunch or last-minute shopping for souvenirs.'],
        evening: ['Transfer to Mekele Airport for your onward journey or return to Addis Ababa.'],
      },
    ],
    inclusions: [
      'Accommodation (2 nights camping in Danakil, 2 nights hotel in Tigray)',
      'Transportation (private vehicle throughout the tour)',
      'English-speaking guide',
      'All meals as specified in the itinerary',
      'Entrance fees to attractions',
      'Camping equipment (tents, sleeping bags, etc.)',
      'Bottled water during excursions',
    ],
    exclusions: [
      'International airfare',
      'Travel insurance',
      'Personal expenses (souvenirs, snacks, etc.)',
      'Tips for guides and drivers',
      'Any meals not mentioned in the itinerary',
      'Visa fees',
    ],
  },
  {
    id: 'FET24',
    name: '8-Day Danakil Depression, Gheralta, and Lalibela Adventure Tour',
    category: 'adventurous',
    duration: '8 Days',
    image: omo,
    summary:
      "Discover the enchanting landscapes and rich cultural heritage of Ethiopia on this 8-day adventure tour. Explore the otherworldly Danakil Depression, marvel at the stunning rock formations of Gheralta, and immerse yourself in the history of Lalibela's legendary rock-hewn churches. This journey promises breathtaking scenery, unique geological wonders, and unforgettable experiences.",
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Addis Ababa',
        morning: ['Arrive at Addis Ababa Bole International Airport.'],
        afternoon: ['Transfer to your hotel for check-in and rest.'],
        evening: ['Welcome dinner and tour briefing.'],
      },
      {
        day: 2,
        title: 'Addis Ababa to Mekele',
        morning: ['Fly from Addis Ababa to Mekele.'],
        afternoon: ['Explore Mekele, visiting local markets and learning about Tigrayan culture.'],
        evening: ['Overnight in Mekele.'],
      },
      {
        day: 3,
        title: 'Mekele to Danakil Depression',
        morning: ['Depart Mekele for the Danakil Depression (approx. 3-4 hours drive).'],
        midday: ['Arrive at Dallol ; lunch en route.'],
        afternoon: ['Visit the salt flats and observe local salt mining activities.'],
        evening: ['Camp overnight in the Danakil Depression.'],
      },
      {
        day: 4,
        title: 'Erta Ale Volcano',
        morning: ['Depart for Erta Ale volcano hike (approx. 3-4 hours).'],
        midday: ['Arrive at the summit; enjoy breathtaking views and witness the lava lake.'],
        evening: ['Camp overnight near the volcano.'],
      },
      {
        day: 5,
        title: 'Erta Ale to Dallol and Return to Mekele',
        morning: ['Descend from Erta Ale and return to Dallol.'],
        midday: ['Explore Dallol’s colorful hydrothermal features and salt formations.'],
        afternoon: ['Drive back to Mekele.'],
        evening: ['Overnight in Mekele.'],
      },
      {
        day: 6,
        title: 'Mekele to Gheralta',
        morning: ['Depart Mekele for Gheralta (approx. 2 hours drive).'],
        afternoon: ['Explore the stunning rock formations and ancient churches carved into cliffs.'],
        evening: ['Overnight in a lodge with panoramic views of the Gheralta Mountains.'],
      },
      {
        day: 7,
        title: 'Drive to Lalibela',
        morning: ['Depart for Lalibela (approx. 2-3 hours drive).'],
        afternoon: ['On the way visit Yimerehane Kirstos church.'],
        evening: ['Overnight in Lalibela.'],
      },
      {
        day: 8,
        title: 'Lalibela Exploration and Departure',
        morning: ['Visit the famous rock-hewn churches of Lalibela, a UNESCO World Heritage site.'],
        afternoon: ['Fly back to Addis Ababa. Last-minute shopping or sightseeing in Addis Ababa.'],
        evening: ['Farewell dinner.'],
      },
    ],
    inclusions: [
      'Domestic flights (Addis Ababa - Mekele - Lalibela - Addis Ababa)',
      'All ground transportation in a comfortable vehicle',
      'Accommodation (hotels and lodges as specified)',
      'Meals as indicated in the itinerary',
      'Professional English-speaking guide',
      'Entrance fees to sites and national parks',
      'Camping equipment (for Danakil portion)',
    ],
    exclusions: [
      'International flights to/from Ethiopia',
      'Visa fees',
      'Travel insurance',
      'Personal expenses (souvenirs, snacks, etc.)',
      'Tips for guides and drivers',
      'Optional activities not mentioned in the itinerary',
    ],
  },
  {
    id: 'FET25',
    name: '11-Day Danakil Depression and Omo Valley Adventurous Tour',
    category: 'adventurous',
    duration: '11 Days',
    image: omo,
    summary:
      "Embark on an unforgettable 11-day adventure through Ethiopia’s most captivating landscapes and cultural treasures. This tour takes you from the surreal beauty of the Danakil Depression, with its alien-like geological formations and the vibrant and diverse cultures of the Omo Valley. Experience Ethiopia's rich heritage, stunning natural wonders, and warm hospitality on this immersive journey.",
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Addis Ababa',
        morning: ['Arrive at Addis Ababa Bole International Airport.'],
        afternoon: ['Transfer to your hotel for check-in and relaxation.'],
        evening: ['Welcome dinner and tour briefing.'],
      },
      {
        day: 2,
        title: 'Addis Ababa to Mekele',
        morning: ['Fly from Addis Ababa to Mekele.'],
        afternoon: ['Explore Mekele, visiting local markets and Tigrayan cultural sites.'],
        evening: ['Overnight in Mekele.'],
      },
      {
        day: 3,
        title: 'Mekele to Danakil Depression',
        morning: ['Depart Mekele for the Danakil Depression (approx. 3-4 hours drive).'],
        midday: ['Arrive at the base camp; lunch en route.'],
        afternoon: ['Visit the salt flats and observe local salt mining activities.'],
        evening: ['Camp overnight in the Danakil Depression.'],
      },
      {
        day: 4,
        title: 'Erta Ale Volcano',
        morning: ['Hike to Erta Ale volcano (approx. 3-4 hours).'],
        midday: ['Arrive at the summit; enjoy breathtaking views of the lava lake.'],
        evening: ['Camp overnight near Erta Ale.'],
      },
      {
        day: 5,
        title: 'Erta Ale to Dallol and Return to Mekele',
        morning: ['Descend from Erta Ale and head towards Dallol.'],
        midday: ['Explore Dallol’s colorful hydrothermal features and salt formations.'],
        afternoon: ['Drive back to Mekele.'],
        evening: ['Overnight in Mekele.'],
      },
      {
        day: 6,
        title: 'Mekele to Addis Ababa',
        morning: ['Depart Mekele, Fly to Addis Ababa'],
        midday: ['Lunch at local restaurant'],
        afternoon: ['City tour in Addis Ababa.'],
        evening: ['Overnight in Addis Ababa'],
      },
      {
        day: 7,
        title: 'Addis Ababa to Jinka',
        morning: ['Fly to Jinka, Drive to visit the Mursi tribe, famous for their lip plates and unique customs.'],
        afternoon: ['Explore Ari village and Jinka Museum.'],
        evening: ['Overnight Jinka Eco Omo lodge.'],
      },
      {
        day: 8,
        title: 'Jinka – Turmi (Hamar Tribe)',
        morning: ['Depart for Turmi (approximately 3 hours by road), home to the Hamar tribe known for their distinctive customs and rituals.'],
        lunch: ['Check into your hotel upon arrival and have lunch at a local restaurant.'],
        afternoon: ['Visit a Hamar village to learn about their traditional lifestyle, including their famous bull-jumping ceremony.'],
        evening: ['Dinner at your hotel or a local restaurant.', 'Accommodation: Overnight at a hotel in Turmi.'],
      },
      {
        day: 9,
        title: 'Turmi – Omorate – Dasenech Tribe',
        morning: ['After breakfast, take a day trip to Omorate (approximately 1 hour drive) to visit the Dasenech tribe living along the Omo River.'],
        lunch: ['Picnic lunch by the river or return to Turmi for lunch.'],
        afternoon: ['Explore ‘Korch village’ and visit a Karo village known for body painting to learn about their culture, art, and daily life along the Omo River.'],
        evening: ['Return to Turmi for dinner and relaxation.', 'Accommodation: Overnight at a hotel in Turmi.'],
      },
      {
        day: 10,
        title: 'Turmi – Arba Minch',
        morning: ['Depart Turmi for Arba Minch (approximately 5 hours by road). On the way visit the Key Afer market (on Thursdays) to experience the vibrant local trade and meet various tribes.'],
        lunch: ['Stop for lunch en route at Kanta lodge in Konso.'],
        afternoon: ['Visit Konso cultural village, known for its terraced agriculture and unique wooden totems.'],
        evening: ['Arrive in Arba Minch and dinner at your hotel or a local restaurant.', 'Accommodation: Overnight at a hotel in Arba Minch.'],
      },
      {
        day: 11,
        title: 'Arba Minch – Addis Ababa Departure',
        morning: ['After breakfast, depart for Addis Ababa (approximately an all-day drive).'],
        lunch: ['Stop for lunch en route at a local restaurant or picnic.'],
        evening: ['Arrive in Addis Ababa, Fare well dinner at cultural restaurant.'],
      },
    ],
    inclusions: [
      'Domestic flights (Addis Ababa - Mekele - Jinka - Addis Ababa)',
      'All ground transportation in a comfortable vehicle',
      'Accommodation (hotels and lodges as specified)',
      'Meals as indicated in the itinerary',
      'Professional English-speaking guide',
      'Entrance fees to sites and national parks',
      'Camping equipment (for Danakil portion)',
    ],
    exclusions: [
      'International flights to/from Ethiopia',
      'Visa fees',
      'Travel insurance',
      'Personal expenses (souvenirs, snacks, etc.)',
      'Tips for guides and drivers',
      'Optional activities not mentioned in the itinerary',
    ],
  },
    ],
    cityTour: [
        {
    id: 'FET01',
    name: 'Half Day Addis Ababa City Tour',
    category: 'CityTours',
    duration: 'Half Day',
    image: omo,
    summary:
      "Discover the highlights of Ethiopia's vibrant capital with our Half Day Addis Ababa City Tour. This concise yet enriching experience is perfect for travelers with limited time who want to immerse themselves in the city's culture, history, and local life. Explore iconic landmarks, visit fascinating museums, and indulge in traditional Ethiopian cuisine, all while guided by a knowledgeable local expert.",
    itinerary: [
      {
        time: '8:00 AM - Pickup from Your Hotel',
        description:
          'Kick off your half-day adventure with a convenient pickup from your accommodation in Addis Ababa. Meet your friendly guide who will share insights about the city throughout your tour.',
      },
      {
        time: '8:30 AM - National Museum of Ethiopia',
        description:
          'Your first stop is the National Museum of Ethiopia, where you will see the famous fossilized remains of "Lucy," one of humanity\'s oldest ancestors. Explore the museum’s extensive collection of artifacts that showcase Ethiopia’s rich history and cultural heritage.',
      },
      {
        time: '10:00 AM - Holy Trinity Cathedral',
        description:
          'Next, visit the Holy Trinity Cathedral, an architectural gem known for its stunning stained glass windows and significance as the burial site of Emperor Haile Selassie. Learn about the importance of this site in Ethiopian Orthodox Christianity and its role in the nation’s history.',
      },
      {
        time: '11:30 AM - Mercato Market',
        description:
          'Experience the vibrant atmosphere of Mercato, one of Africa\'s largest open-air markets. Walk through colorful stalls filled with spices, textiles, and handicrafts. This lively market offers a glimpse into the daily life of locals and an opportunity to purchase unique souvenirs.',
      },
      {
        time: '12:30 PM - Return to Your Hotel',
        description:
          'After an enriching morning exploring Addis Ababa\'s highlights, your guide will drop you off at your hotel. Reflect on the memorable experiences and cultural insights gained during your half-day tour.',
      },
    ],
        inclusions: [
      'Professional English-speaking guide',
      'Private transportation throughout the tour',
      'Entrance fees to all attractions',
      'Bottled water',
      'Traditional Ethiopian snack or light lunch',
      'Pickup and drop-off from your hotel',
    ],
    exclusions: [
      'International flights to/from Ethiopia',
      'Visa fees for Ethiopia',
      'Travel insurance',
      'Meals not mentioned in the itinerary',
      'Personal expenses (e.g., souvenirs, tips)',
      'Gratuities for the guide and driver',
      'Any optional activities not included in the itinerary',
    ],
    
  },
  {
    id: 'FET02',
    name: 'Full Day Addis Ababa City Tour',
    category: 'CityTours',
    duration: 'Full Day',
    image: omo,
    summary:
      "Experience the vibrant culture, rich history, and stunning landscapes of Ethiopia's capital city with our Full Day Addis Ababa City Tour. This immersive journey will take you through the heart of Addis Ababa, allowing you to explore its iconic landmarks, traditional markets, and historical museums. Ideal for first-time visitors and those looking to delve deeper into Ethiopian culture, this tour offers a perfect blend of sightseeing and local experiences.",
    itinerary: [
      {
        time: '8:00 AM - Pickup from Your Hotel',
        description:
          'Start your day with a convenient pickup from your accommodation in Addis Ababa. Meet your professional guide who will accompany you throughout the day.',
      },
      {
        time: '8:30 AM - National Museum of Ethiopia',
        description:
          'Your first stop is the National Museum of Ethiopia, home to the famous fossilized remains of "Lucy" (Australopithecus afarensis), one of the oldest hominids ever discovered. Explore the museum\'s rich collection of artifacts, including ancient manuscripts and traditional art pieces.',
      },
      {
        time: '10:00 AM - Holy Trinity Cathedral',
        description:
          'Next, visit the stunning Holy Trinity Cathedral, an architectural marvel that serves as the final resting place for Emperor Haile Selassie and his wife. Admire the beautiful stained glass windows and learn about the significance of this important religious site in Ethiopian Orthodox Christianity.',
      },
      {
        time: '11:30 AM - Mercato Market',
        description:
          'Experience the hustle and bustle of Mercato, one of Africa\'s largest open-air markets. Wander through the vibrant stalls selling everything from spices and textiles to handmade crafts. This is a great opportunity to interact with local vendors and pick up unique souvenirs.',
      },
      {
        time: '1:00 PM - Traditional Ethiopian Lunch',
        description:
          'Enjoy a delicious traditional Ethiopian lunch at a local restaurant. Savor dishes such as injera (a sourdough flatbread) served with a variety of spicy stews (wot) and vegetables. Experience the communal dining style that is central to Ethiopian culture.',
      },
      {
        time: '2:30 PM - Ethnological Museum',
        description:
          'After lunch, visit the Ethnological Museum located within the former palace of Emperor Haile Selassie. The museum offers insightful exhibits on Ethiopia\'s diverse cultures, traditions, and history. Don\'t miss the beautiful gardens that surround the museum.',
      },
      {
        time: '4:00 PM - Mount Entoto',
        description:
          'Conclude your day with a scenic drive up to Mount Entoto. Enjoy breathtaking panoramic views of Addis Ababa from this vantage point. Take a short hike if time permits, and learn about the historical significance of this area, including its role as the capital before Addis Ababa was established.',
      },
      {
        time: '5:30 PM - Return to Your Hotel',
        description:
          'After a full day of exploration, your guide will drop you off at your hotel. Reflect on the rich experiences and memories made during your Addis Ababa city tour.',
      },
    ],
    inclusions: [
      'Professional English-speaking guide',
      'Private transportation throughout the tour',
      'Entrance fees to all attractions',
      'Bottled water',
      'Traditional Ethiopian lunch',
      'Pickup and drop-off from your hotel',
    ],
    exclusions: [
      'International flights to/from Ethiopia',
      'Visa fees for Ethiopia',
      'Travel insurance',
      'Meals not mentioned in the itinerary',
      'Personal expenses (e.g., souvenirs, tips)',
      'Gratuities for the guide and driver',
      'Any optional activities not included in the itinerary',
    ],
   
  },
   {
    id: 'FET03',
    name: 'Full Day Expedition to Debre Libanos Monastery, Jemma Gorge, and Blue Nile Gorge',
    category: 'CityTours',
    duration: 'Full Day',
    image: omo,
    summary:
      "Embark on an unforgettable full-day expedition that takes you through the breathtaking landscapes and rich cultural heritage of Ethiopia. This tour will lead you to the historic Debre Libanos Monastery, the stunning Jemma Gorge, and the majestic Blue Nile Gorge. Perfect for nature lovers and history enthusiasts alike, this adventure showcases Ethiopia's natural beauty and spiritual significance.",
    itinerary: [
      {
        time: '7:00 AM - Pickup from Your Hotel',
        description:
          'Start your day early with a pickup from your hotel in Addis Ababa. Meet your knowledgeable guide who will accompany you throughout the day.',
      },
      {
        time: '8:30 AM - Debre Libanos Monastery',
        description:
          'Your first destination is the historic Debre Libanos Monastery, located about 110 km from Addis Ababa. Founded in the 13th century, this revered site is known for its stunning architecture and beautiful surroundings. Explore the monastery, learn about its significance in Ethiopian Orthodox Christianity, and enjoy panoramic views of the surrounding landscape.',
      },
      {
        time: '10:30 AM - Scenic Drive to Jemna Gorge',
        description:
          'After visiting the monastery, embark on a scenic drive to Jemna Gorge. This picturesque area is known for its dramatic cliffs and lush greenery. Take a short hike to appreciate the breathtaking views and immerse yourself in the tranquility of nature.',
      },
      {
        time: '12:30 PM - Traditional Ethiopian Lunch',
        description:
          'Enjoy a delicious traditional Ethiopian lunch at a local restaurant. Savor authentic dishes such as injera, doro wat, and various vegetarian options while experiencing the warm hospitality of Ethiopian culture.',
      },
      {
        time: '1:30 PM - Blue Nile Gorge',
        description:
          'Post-lunch, head to the spectacular Blue Nile Gorge. Often referred to as the "Grand Canyon of Ethiopia," this stunning gorge offers breathtaking views of the Blue Nile River as it winds through rocky cliffs. Take time to explore the area, capture stunning photographs, and learn about the geological significance of this natural wonder.',
      },
      {
        time: '3:30 PM - Return Journey to Addis Ababa',
        description:
          'Begin your journey back to Addis Ababa, enjoying the scenic landscapes along the way. Your guide will share insights about the history and culture of Ethiopia during your return trip.',
      },
      {
        time: '5:30 PM - Drop-off at Your Hotel',
        description:
          'Arrive back at your hotel in Addis Ababa, concluding your full-day expedition. Reflect on the incredible experiences and memories made during your adventure.',
      },
    ],
    inclusions: [
      'Professional English-speaking guide',
      'Private transportation throughout the tour',
      'Entrance fees to all attractions',
      'Bottled water',
      'Traditional Ethiopian lunch',
      'Pickup and drop-off from your hotel',
    ],
    exclusions: [
      'International flights to/from Ethiopia',
      'Visa fees for Ethiopia',
      'Travel insurance',
      'Meals not mentioned in the itinerary',
      'Personal expenses (e.g., souvenirs, tips)',
      'Gratuities for the guide and driver',
      'Any optional activities not included in the itinerary',
    ],
    
  },
   {
    id: 'FET04',
    name: 'Full Day Expedition to Melka Kunture, Adadi Maryam, and Tiya',
    category: 'CityTours',
    duration: 'Full Day',
    image: omo,
    summary:
      "Discover the rich archaeological heritage and stunning landscapes of Ethiopia on this full-day expedition to Melka Kunture, Adadi Maryam, and Tiya. This adventure offers a unique glimpse into Ethiopia's ancient history, showcasing significant archaeological sites and a UNESCO World Heritage Site. Ideal for history enthusiasts and culture seekers, this tour promises an enriching experience filled with exploration and discovery.",
    itinerary: [
      {
        time: '7:00 AM - Pickup from Your Hotel',
        description:
          'Start your day with a prompt pickup from your hotel in Addis Ababa. Meet your expert guide who will accompany you throughout the day.',
      },
      {
        time: '8:00 AM - Melka Kunture Archaeological Site',
        description:
          'Your first stop is Melka Kunture, an important archaeological site located about 50 km southwest of Addis Ababa. Explore the site where ancient stone tools dating back over a million years have been discovered. Learn about early hominids and their way of life while walking through this fascinating area rich in prehistoric significance.',
      },
      {
        time: '10:00 AM - Adadi Maryam Rock-Hewn Church',
        description:
          'Next, head to Adadi Maryam, a remarkable rock-hewn church built in the 12th century. This lesser-known gem is often compared to the more famous churches of Lalibela. Marvel at the intricate carvings and stunning architecture while your guide shares insights into its historical and religious significance within Ethiopian Orthodox Christianity.',
      },
      {
        time: '12:30 PM - Traditional Ethiopian Lunch',
        description:
          'Enjoy a delicious traditional Ethiopian lunch at a local restaurant. Savor a variety of dishes, including injera, doro wat, and vegetarian options, while experiencing the warmth of Ethiopian hospitality.',
      },
      {
        time: '1:30 PM - Tiya Archaeological Site',
        description:
          'After lunch, visit Tiya, a UNESCO World Heritage Site known for its ancient stelae and burial grounds dating back to the 4th century. Explore the site’s mysterious stone markers and learn about their significance in understanding Ethiopia’s prehistoric cultures. Your guide will provide context on the archaeological findings and their importance in the region\'s history.',
      },
      {
        time: '3:30 PM - Scenic Return Journey to Addis Ababa',
        description:
          'Begin your return journey to Addis Ababa, taking in the beautiful landscapes along the way. Your guide will share interesting stories about Ethiopian culture and history during the drive.',
      },
      {
        time: '5:30 PM - Drop-off at Your Hotel',
        description:
          'Arrive back at your hotel in Addis Ababa, concluding your full-day expedition. Reflect on the incredible experiences and insights gained throughout your journey.',
      },
    ],
     inclusions: [
      'Professional English-speaking guide',
      'Private transportation throughout the tour',
      'Entrance fees to all attractions',
      'Bottled water',
      'Traditional Ethiopian lunch',
      'Pickup and drop-off from your hotel',
    ],
    exclusions: [
      'International flights to/from Ethiopia',
      'Visa fees for Ethiopia',
      'Travel insurance',
      'Meals not mentioned in the itinerary',
      'Personal expenses (e.g., souvenirs, tips)',
      'Gratuities for the guide and driver',
      'Any optional activities not included in the itinerary',
    ],
   
  },
  {
    id: 'FET05',
    name: 'Full Day Expedition to Rift Valley: Ziway Lake',
    category: 'CityTours',
    duration: 'Full Day',
    image: omo,
    summary:
      "Embark on a captivating full-day expedition to the stunning Rift Valley, with a special focus on the picturesque Ziway Lake. This adventure offers a unique opportunity to explore one of Ethiopia’s beautiful lakes, renowned for its rich biodiversity and vibrant birdlife. Perfect for nature lovers and adventure seekers, this tour provides an unforgettable experience filled with scenic beauty, wildlife observation, and cultural encounters.",
    itinerary: [
      {
        time: '7:00 AM - Pickup from Your Hotel',
        description:
          'Begin your day with a prompt pickup from your hotel in Addis Ababa. Meet your knowledgeable guide who will accompany you throughout the day.',
      },
      {
        time: '8:00 AM - Journey to Ziway Lake',
        description:
          'Travel south towards the Rift Valley, enjoying the scenic landscapes along the way. The drive to Ziway Lake takes approximately 2.5 hours, providing opportunities to witness the unique flora and fauna of the region.',
      },
      {
        time: '10:30 AM - Arrive at Ziway Lake',
        description:
          'Upon arrival at Ziway Lake, take in the breathtaking views of the expansive lake surrounded by lush greenery and rolling hills. Your guide will provide an overview of the lake’s ecological significance and its importance as a habitat for various bird species.',
      },
      {
        time: '11:00 AM - Birdwatching and Boat Ride',
        description:
          'Embark on a relaxing boat ride on Ziway Lake. Keep your eyes peeled for a variety of bird species, including pelicans, herons, and several endemic birds. Enjoy the tranquility of the lake while learning about its diverse ecosystems from your guide.',
      },
      {
        time: '12:30 PM - Traditional Ethiopian Lunch',
        description:
          'After your boat ride, enjoy a traditional Ethiopian lunch at a local restaurant overlooking the lake. Savor authentic dishes such as injera, doro wat, and fresh salads while experiencing the warmth of Ethiopian hospitality.',
      },
      {
        time: '1:30 PM - Cultural Visit to Nearby Village',
        description:
          'Post-lunch, visit a nearby village to immerse yourself in the local culture. Interact with friendly residents, learn about their daily lives, and discover traditional crafts. This cultural experience provides insight into the rich heritage of the Rift Valley communities.',
      },
      {
        time: '3:00 PM - Scenic Drive through Rift Valley',
        description:
          'Take a leisurely drive through the Rift Valley, stopping at viewpoints to capture stunning photos of the landscape. Your guide will share interesting stories about the geological features and cultural significance of the area.',
      },
      {
        time: '4:30 PM - Return Journey to Addis Ababa',
        description:
          'Begin your return journey to Addis Ababa, reflecting on the day’s experiences while enjoying the scenic views along the way.',
      },
      {
        time: '6:30 PM - Drop-off at Your Hotel',
        description:
          'Arrive back at your hotel in Addis Ababa, concluding your enriching full-day expedition to Ziway Lake and the Rift Valley. Take home cherished memories of Ethiopia\'s natural beauty and cultural richness.',
      },
    ],
    inclusions: [
      'Professional English-speaking guide',
      'Private transportation throughout the tour',
      'Entrance fees to all attractions',
      'Bottled water',
      'Traditional Ethiopian lunch',
      'Pickup and drop-off from your hotel',
    ],
    exclusions: [
      'International flights to/from Ethiopia',
      'Visa fees for Ethiopia',
      'Travel insurance',
      'Meals not mentioned in the itinerary',
      'Personal expenses (e.g., souvenirs, tips)',
      'Gratuities for the guide and driver',
      'Any optional activities not included in the itinerary',
    ],
    
  },
    {
    id: 'FET06',
    name: 'Full Day Expedition to Wenchi Crater Lake',
    category: 'CityTours',
    duration: 'Full Day',
    image: omo,
    summary:
      "Discover the breathtaking beauty of Wenchi Crater Lake on this full-day expedition. Nested in the Oromia region of Ethiopia, Wenchi Crater Lake is a stunning volcanic lake surrounded by lush greenery and dramatic landscapes. This tour offers a unique blend of nature, adventure, and cultural experiences, making it perfect for outdoor enthusiasts and travelers seeking to explore Ethiopia’s natural wonders.",
    itinerary: [
      {
        time: '7:00 AM - Pickup from Your Hotel',
        description:
          'Quick start your adventure with a timely pickup from your hotel in Addis Ababa. Meet your experienced guide who will accompany you throughout the day.',
      },
      {
        time: '8:00 AM - Journey to Wenchi Crater Lake',
        description:
          'Travel west towards Wenchi Crater Lake, enjoying the scenic views of the Ethiopian highlands along the way. The drive takes approximately 2.5 hours, providing opportunities to appreciate the diverse landscapes.',
      },
      {
        time: '10:30 AM - Arrive at Wenchi Crater Lake',
        description:
          'Upon arrival, take in the stunning views of the crater lake surrounded by rolling hills and lush vegetation. Your guide will provide an overview of the geological formation and the ecological significance of the area.',
      },
      {
        time: '11:00 AM - Hiking or Horse Riding',
        description:
          'Choose between a guided hike around the lake or an optional horse ride to explore the picturesque surroundings. Enjoy the fresh air and stunning vistas as you traverse the scenic trails. If you opt for hiking, your guide will share insights about the local flora and fauna.',
      },
      {
        time: '1:00 PM - Traditional Ethiopian Lunch',
        description:
          'After your outdoor activities, enjoy a delicious traditional Ethiopian lunch at a local restaurant or picnic by the lakeside. Savor authentic dishes like injera, tibs, and fresh salads while soaking in the serene atmosphere.',
      },
      {
        time: '2:00 PM - Boat Ride on Wenchi Crater Lake',
        description:
          'Experience a peaceful boat ride on the lake, where you can relax and take in the stunning scenery. Keep an eye out for various bird species that inhabit the area. Your guide will share interesting facts about the lake’s ecosystem and its cultural significance.',
      },
      {
        time: '3:30 PM - Cultural Interaction with Local Communities',
        description:
          'Visit nearby villages to learn about the local culture and traditions. Engage with friendly residents, discover their way of life, and experience traditional crafts. This cultural interaction enriches your understanding of the region\'s heritage.',
      },
      {
        time: '5:00 PM - Scenic Drive Back to Addis Ababa',
        description:
          'Begin your return journey to Addis Ababa, reflecting on the day’s adventures while enjoying the beautiful landscapes along the route.',
      },
      {
        time: '7:30 PM - Drop-off at Your Hotel',
        description:
          'Arrive back at your hotel in Addis Ababa, concluding your memorable full-day expedition to Wenchi Crater Lake. Take home cherished memories of Ethiopia\'s natural beauty and cultural richness.',
      },
    ],
    inclusions: [
      'Professional English-speaking guide',
      'Private transportation to and from Wenchi Crater Lake',
      'Entrance fees to Wenchi Crater Lake',
      'Bottled water',
      'Traditional Ethiopian lunch',
      'Horse rental (optional)',
      'Pickup and drop-off from your hotel',
    ],
    exclusions: [
      'International flights to/from Ethiopia',
      'Visa fees for Ethiopia',
      'Travel insurance',
      'Meals not mentioned in the itinerary',
      'Personal expenses (e.g., souvenirs, tips)',
      'Gratuities for the guide and driver',
      'Any optional activities not included in the itinerary',
    ],
    
  },
  {
    id: 'FET06',
    name: 'Full Day Expedition to Wenchi Crater Lake',
    category: 'CityTours',
    duration: 'Full Day',
    image: omo,
    summary:
      "Discover the breathtaking beauty of Wenchi Crater Lake on this full-day expedition. Nested in the Oromia region of Ethiopia, Wenchi Crater Lake is a stunning volcanic lake surrounded by lush greenery and dramatic landscapes. This tour offers a unique blend of nature, adventure, and cultural experiences, making it perfect for outdoor enthusiasts and travelers seeking to explore Ethiopia’s natural wonders.",
    itinerary: [
      {
        time: '7:00 AM - Pickup from Your Hotel',
        description:
          'Quick start your adventure with a timely pickup from your hotel in Addis Ababa. Meet your experienced guide who will accompany you throughout the day.',
      },
      {
        time: '8:00 AM - Journey to Wenchi Crater Lake',
        description:
          'Travel west towards Wenchi Crater Lake, enjoying the scenic views of the Ethiopian highlands along the way. The drive takes approximately 2.5 hours, providing opportunities to appreciate the diverse landscapes.',
      },
      {
        time: '10:30 AM - Arrive at Wenchi Crater Lake',
        description:
          'Upon arrival, take in the stunning views of the crater lake surrounded by rolling hills and lush vegetation. Your guide will provide an overview of the geological formation and the ecological significance of the area.',
      },
      {
        time: '11:00 AM - Hiking or Horse Riding',
        description:
          'Choose between a guided hike around the lake or an optional horse ride to explore the picturesque surroundings. Enjoy the fresh air and stunning vistas as you traverse the scenic trails. If you opt for hiking, your guide will share insights about the local flora and fauna.',
      },
      {
        time: '1:00 PM - Traditional Ethiopian Lunch',
        description:
          'After your outdoor activities, enjoy a delicious traditional Ethiopian lunch at a local restaurant or picnic by the lakeside. Savor authentic dishes like injera, tibs, and fresh salads while soaking in the serene atmosphere.',
      },
      {
        time: '2:00 PM - Boat Ride on Wenchi Crater Lake',
        description:
          'Experience a peaceful boat ride on the lake, where you can relax and take in the stunning scenery. Keep an eye out for various bird species that inhabit the area. Your guide will share interesting facts about the lake’s ecosystem and its cultural significance.',
      },
      {
        time: '3:30 PM - Cultural Interaction with Local Communities',
        description:
          'Visit nearby villages to learn about the local culture and traditions. Engage with friendly residents, discover their way of life, and experience traditional crafts. This cultural interaction enriches your understanding of the region\'s heritage.',
      },
      {
        time: '5:00 PM - Scenic Drive Back to Addis Ababa',
        description:
          'Begin your return journey to Addis Ababa, reflecting on the day’s adventures while enjoying the beautiful landscapes along the route.',
      },
      {
        time: '7:30 PM - Drop-off at Your Hotel',
        description:
          'Arrive back at your hotel in Addis Ababa, concluding your memorable full-day expedition to Wenchi Crater Lake. Take home cherished memories of Ethiopia\'s natural beauty and cultural richness.',
      },
    ],
      inclusions: [
      'Professional English-speaking guide',
      'Private transportation to and from Wenchi Crater Lake',
      'Entrance fees to Wenchi Crater Lake',
      'Bottled water',
      'Traditional Ethiopian lunch',
      'Horse rental (optional)',
      'Pickup and drop-off from your hotel',
    ],
    exclusions: [
      'International flights to/from Ethiopia',
      'Visa fees for Ethiopia',
      'Travel insurance',
      'Meals not mentioned in the itinerary',
      'Personal expenses (e.g., souvenirs, tips)',
      'Gratuities for the guide and driver',
      'Any optional activities not included in the itinerary',
    ],
},
    {
    id: 'FET07',
    name: 'Full Day Expedition to Menagesha Suba Forest',
    category: 'CityTours',
    duration: 'Full Day',
    image: omo,
    summary:
      "Embark on an exhilarating full-day expedition to Menagesha Suba Forest, one of Ethiopia's oldest protected areas. Located just a short drive from Addis Ababa, this lush forest is a biodiversity hotspot, boasting unique flora and fauna, stunning landscapes, and opportunities for hiking and cultural exploration. Ideal for nature lovers and adventure seekers, this trip offers a perfect escape into the serene beauty of Ethiopia’s natural heritage.",
    itinerary: [
      {
        time: '7:00 AM - Pickup from Your Hotel',
        description:
          'Your adventure begins with a prompt pickup from your hotel in Addis Ababa. Meet your knowledgeable guide who will accompany you throughout the day.',
      },
      {
        time: '8:00 AM - Drive to Menagesha Suba Forest',
        description:
          'Enjoy a scenic drive of approximately 1.5 hours to Menagesha Suba Forest. As you travel through the picturesque Ethiopian countryside, take in the breathtaking views of rolling hills and vibrant landscapes.',
      },
      {
        time: '9:30 AM - Arrive at Menagesha Suba Forest',
        description:
          'Upon arrival, your guide will provide an overview of the forest\'s significance, its diverse ecosystems, and the various species that inhabit the area. Prepare for a day filled with exploration and discovery.',
      },
      {
        time: '10:00 AM - Guided Nature Hike',
        description:
          'Set off on a guided hike through the enchanting trails of Menagesha Suba Forest. Marvel at the ancient trees, unique plant species, and the rich birdlife that calls this forest home. Your guide will share insights about the local ecology, making this a perfect opportunity for nature enthusiasts and photographers alike.',
      },
      {
        time: '12:30 PM - Traditional Ethiopian Lunch',
        description:
          'After your hike, enjoy a delicious traditional Ethiopian lunch at a local restaurant or picnic in the forest. Indulge in authentic dishes such as injera, doro wat, and fresh salads while surrounded by nature.',
      },
      {
        time: '1:30 PM - Cultural Interaction with Local Communities',
        description:
          'Visit nearby villages to experience the local culture firsthand. Engage with residents, learn about their traditions, and discover their artisanal crafts. This cultural immersion adds depth to your understanding of Ethiopia\'s rich heritage.',
      },
      {
        time: '3:00 PM - Explore More Trails or Relax in Nature',
        description:
          'After lunch, you can either continue exploring additional trails within Menagesha Suba Forest or relax in the tranquil surroundings. Enjoy birdwatching or simply take in the peaceful ambiance of this beautiful natural setting.',
      },
      {
        time: '4:30 PM - Scenic Drive Back to Addis Ababa',
        description:
          'Begin your return journey to Addis Ababa, reflecting on the day\'s adventures while enjoying the stunning landscapes along the way.',
      },
      {
        time: '6:00 PM - Drop-off at Your Hotel',
        description:
          'Arrive back at your hotel in Addis Ababa, concluding your memorable full-day expedition to Menagesha Suba Forest. Take home cherished memories of Ethiopia\'s natural beauty and cultural richness.',
      },
    ],
    inclusions: [
      'Professional English-speaking guide',
      'Private transportation to and from Menagesha Suba Forest',
      'Entrance fees to Menagesha Suba Forest',
      'Bottled water',
      'Traditional Ethiopian lunch',
      'Optional horse rental (subject to availability)',
      'Pickup and drop-off from your hotel',
    ],
    exclusions: [
      'International flights to/from Ethiopia',
      'Visa fees for Ethiopia',
      'Travel insurance',
      'Meals not mentioned in the itinerary',
      'Personal expenses (e.g., souvenirs, tips)',
      'Gratuities for the guide and driver',
      'Any optional activities not included in the itinerary',
    ],
},
    {
    id: 'FET08',
    name: 'Full Day Expedition to Ankober',
    category: 'CityTours',
    duration: 'Full Day',
    image: omo,
    summary:
      "Embark on an unforgettable full-day expedition to Ankober, a historical town perched in the scenic Ethiopian highlands. Known for its breathtaking landscapes, rich history, and cultural significance, Ankober offers visitors a unique glimpse into Ethiopia’s past and present. This tour features stunning views of the surrounding mountains, opportunities for hiking, and encounters with local communities. Ideal for adventure seekers and history enthusiasts, this trip promises an enriching experience in one of Ethiopia's hidden gems.",
    itinerary: [
      {
        time: '7:00 AM - Pickup from Your Hotel',
        description:
          'Kick off your adventure with a timely pickup from your hotel in Addis Ababa. Meet your experienced guide who will accompany you throughout the day.',
      },
      {
        time: '8:00 AM - Scenic Drive to Ankober',
        description:
          'Enjoy a picturesque drive of approximately 2 hours to Ankober. As you travel through the lush Ethiopian countryside, soak in the stunning views of rolling hills, terraced fields, and traditional villages.',
      },
      {
        time: '10:00 AM - Arrive in Ankober',
        description:
          "Upon arrival, your guide will provide an overview of Ankober's historical significance as the former capital of the Shewa Kingdom. Learn about its role in Ethiopian history and the fascinating stories that shaped this region.",
      },
      {
        time: '10:30 AM - Explore Historical Sites',
        description:
          "Visit key historical sites, including the ruins of the ancient palace and churches. Discover the architectural marvels that reflect Ethiopia's rich heritage. Your guide will share insights into the history and culture of the area.",
      },
      {
        time: '12:30 PM - Traditional Ethiopian Lunch',
        description:
          'Savor a delicious traditional Ethiopian lunch at a local restaurant or enjoy a picnic with stunning views of the highlands. Indulge in authentic dishes such as injera, doro wat, and fresh salads while immersing yourself in the local atmosphere.',
      },
      {
        time: '1:30 PM - Guided Nature Hike',
        description:
          'After lunch, embark on a guided hike through the beautiful landscapes surrounding Ankober. Experience panoramic views of the Ethiopian highlands, diverse flora, and opportunities for birdwatching. Your guide will highlight the unique ecosystems and wildlife of the area.',
      },
      {
        time: '3:30 PM - Cultural Interaction with Local Communities',
        description:
          'Engage with local communities to learn about their traditions, crafts, and daily life. This cultural immersion provides a deeper understanding of the Ethiopian way of life and enhances your travel experience.',
      },
      {
        time: '4:30 PM - Scenic Drive Back to Addis Ababa',
        description:
          "Begin your return journey to Addis Ababa, reflecting on the day's adventures while enjoying the breathtaking scenery along the route.",
      },
      {
        time: '6:30 PM - Drop-off at Your Hotel',
        description:
          'Arrive back at your hotel in Addis Ababa, concluding your memorable full-day expedition to Ankober. Take home cherished memories of Ethiopia’s natural beauty and rich history.',
      },
    ],
    inclusions: [
      'Professional English-speaking guide',
      'Private transportation to and from Ankober',
      'Entrance fees to historical sites',
      'Bottled water',
      'Traditional Ethiopian lunch',
      'Optional horse rental (subject to availability)',
      'Pickup and drop-off from your hotel',
    ],
    exclusions: [
      'International flights to/from Ethiopia',
      'Visa fees for Ethiopia',
      'Travel insurance',
      'Meals not mentioned in the itinerary',
      'Personal expenses (e.g., souvenirs, tips)',
      'Gratuities for the guide and driver',
      'Any optional activities not included in the itinerary',
    ],
},
     {
    id: 'FET09',
    name: 'Full Day Expedition to Sodere',
    category: 'CityTours',
    duration: 'Full Day',
    image: omo,
    summary:
      "Experience a refreshing full-day expedition to Sodere, a popular resort town located just outside of Addis Ababa, renowned for its natural hot springs and lush landscapes. This getaway offers a perfect blend of relaxation and adventure, making it an ideal escape for families, couples, and solo travelers alike. Enjoy the soothing warmth of the hot springs, engage in outdoor activities, and savor delicious local cuisine. Whether you seek relaxation or adventure, Sodere promises an unforgettable day immersed in nature.",
    itinerary: [
      {
        time: '7:30 AM - Pickup from Your Hotel',
        description:
          'Begin your day with a prompt pickup from your hotel in Addis Ababa. Meet your friendly guide who will accompany you throughout your journey to Sodere.',
      },
      {
        time: '8:30 AM - Scenic Drive to Sodere',
        description:
          'Enjoy a picturesque drive of approximately 1.5 hours to Sodere. Marvel at the beautiful Ethiopian countryside, dotted with traditional villages and rolling hills.',
      },
      {
        time: '10:00 AM - Arrive at Sodere Hot Springs',
        description:
          'Upon arrival, immerse yourself in the natural beauty of Sodere. The main attraction here is the rejuvenating hot springs. Relax in the warm waters and enjoy the tranquil surroundings.',
      },
      {
        time: '11:30 AM - Outdoor Activities',
        description:
          'Choose from a variety of outdoor activities such as horseback riding, hiking, or exploring the nearby nature trails. Your guide will assist you in selecting the best options based on your interests.',
      },
      {
        time: '1:00 PM - Traditional Ethiopian Lunch',
        description:
          'Savor a delicious traditional Ethiopian lunch at a local restaurant. Indulge in classic dishes like injera, tibs, and fresh salads while enjoying the serene ambiance of Sodere.',
      },
      {
        time: '2:30 PM - Leisure Time at the Hot Springs',
        description:
          'After lunch, return to the hot springs for more relaxation or take a leisurely walk around the resort area. Capture stunning photos of the lush landscapes and vibrant flora surrounding you.',
      },
      {
        time: '4:00 PM - Cultural Interaction',
        description:
          'Engage with local communities to learn about their customs and traditions. This cultural interaction provides insights into the lifestyle of the people living in this beautiful region.',
      },
      {
        time: '5:00 PM - Scenic Drive Back to Addis Ababa',
        description:
          "Begin your return journey to Addis Ababa, reflecting on the day's experiences while enjoying the scenic views along the way.",
      },
      {
        time: '6:30 PM - Drop-off at Your Hotel',
        description:
          'Arrive back at your hotel in Addis Ababa, concluding your delightful full-day expedition to Sodere. Take home cherished memories of relaxation and adventure in one of Ethiopia\'s hidden treasures.',
      },
    ],
   inclusions: [
      'Professional English-speaking guide',
      'Private transportation to and from Sodere',
      'Entrance fees to hot springs and recreational areas',
      'Bottled water',
      'Traditional Ethiopian lunch',
      'Optional activities (horseback riding, swimming)',
      'Pickup and drop-off from your hotel',
    ],
    exclusions: [
      'International flights to/from Ethiopia',
      'Visa fees for Ethiopia',
      'Travel insurance',
      'Meals not mentioned in the itinerary',
      'Personal expenses (e.g., souvenirs, tips)',
      'Gratuities for the guide and driver',
      'Any optional activities not included in the itinerary',
    ],
},
    ],
    natural: [
        {
        id: 'FET16',
        name: '10-Day Omo Valley Tour',
        category: 'cultural_and_natural',
        image: omo,
        summary:
            "This immersive 10-day tour of the Omo Valley takes you through one of Ethiopia's most culturally rich and diverse regions. You will have the opportunity to visit various tribes, experience their unique customs and traditions, and explore the stunning landscapes of the valley. The journey includes visits to local markets, traditional villages, and breathtaking natural sites, providing a comprehensive understanding of the Omo Valley's vibrant cultures and rich heritage.",
        itinerary: [
            {
                day: 1,
                title: 'Arrival in Addis Ababa',
                morning: ['Arrive at Addis Ababa Bole International Airport. Meet your guide and transfer to your hotel.'],
                afternoon: ['Lunch at a local restaurant.', 'Visit the National Museum of Ethiopia to see the famous Lucy fossil and other significant artifacts.'],
                evening: ['Dinner at a traditional Ethiopian restaurant featuring cultural performances.', 'Accommodation: Overnight at a hotel in Addis Ababa.'],
            },
            {
                day: 2,
                title: 'Addis Ababa – Arba Minch',
                morning: ['After breakfast, depart for Arba Minch (approximately 8 hours by road), passing through beautiful landscapes and small towns.'],
                afternoon: ['Stop for lunch en route at a local restaurant or picnic.', 'Arrive in Arba Minch and check into your hotel. Relax after your journey.'],
                evening: ['Dinner at your hotel or a local restaurant.', 'Accommodation: Overnight at a hotel in Arba Minch.'],
            },
            {
                day: 3,
                title: 'Arba Minch – Chencha – Lake Chamo',
                morning: ['After breakfast, visit Chencha village to learn about the Dorze people and their unique culture and weaving traditions.'],
                afternoon: ['Return to Arba Minch for lunch at a local restaurant.', 'Take a boat trip on Lake Chamo to see hippos and crocodiles while enjoying stunning views of the surrounding landscape.'],
                evening: ['Dinner at your hotel or a local restaurant.', 'Accommodation: Overnight at a hotel in Arba Minch.'],
            },
            {
                day: 4,
                title: 'Arba Minch – Jinka',
                morning: ['Depart for Jinka (approximately 5 hours by road), traveling through beautiful countryside and observing daily life in rural Ethiopia.'],
                afternoon: ['Stop for lunch en route at a local restaurant or picnic.', 'Visit the Jinka Museum to learn about the Omo Valley tribes and their cultures.'],
                evening: ['Dinner at your hotel or a local restaurant.', 'Accommodation: Overnight at a hotel in Jinka.'],
            },
            {
                day: 5,
                title: 'Jinka – Mursi Tribe',
                morning: ['After breakfast, take an excursion to visit the Mursi tribe, known for their lip plates and unique customs (approximately 1.5 hours drive).'],
                afternoon: ['Picnic lunch in the area or return to Jinka for lunch.', 'Spend time interacting with the Mursi people, learning about their traditions, lifestyle, and daily activities.'],
                evening: ['Return to Jinka for dinner and relaxation.', 'Accommodation: Overnight at a hotel in Jinka.'],
            },
            {
                day: 6,
                title: 'Jinka – Turmi (Hamar Tribe)',
                morning: ['Depart for Turmi (approximately 3 hours by road), home to the Hamar tribe known for their distinctive customs and rituals.'],
                afternoon: ['Check into your hotel upon arrival and have lunch at a local restaurant.', 'Visit a Hamar village to learn about their traditional lifestyle, including their famous bull-jumping ceremony.'],
                evening: ['Dinner at your hotel or a local restaurant.', 'Accommodation: Overnight at a hotel in Turmi.'],
            },
            {
                day: 7,
                title: 'Turmi – Omorate – Dasenech Tribe',
                morning: ['After breakfast, take a day trip to Omorate (approximately 1 hour drive) to visit the Dasenech tribe living along the Omo River.'],
                afternoon: ['Picnic lunch by the river or return to Turmi for lunch.', 'Interact with the Dasenech people, learning about their fishing and farming practices.'],
                evening: ['Return to Turmi for dinner and relaxation.', 'Accommodation: Overnight at a hotel in Turmi.'],
            },
            {
                day: 8,
                title: 'Turmi – Key Afer Market Karo Tribe',
                morning: ['Visit the Key Afer market (on Thursdays) to experience the vibrant local trade and meet various tribes, including Karo people known for their body painting.'],
                afternoon: ['Lunch at a local restaurant in Turmi.', 'Visit a Karo village to learn about their culture, art, and daily life along the Omo River.'],
                evening: ['Dinner at your hotel or a local restaurant.', 'Accommodation: Overnight at a hotel in Turmi.'],
            },
            {
                day: 9,
                title: 'Turmi – Arba Minch',
                morning: ['Depart Turmi for Arba Minch (approximately 5 hours by road).'],
                afternoon: ['Stop for lunch en route at a local restaurant or picnic.', 'Arrive in Arba Minch and relax or explore the town.'],
                evening: ['Dinner at your hotel or a local restaurant.', 'Accommodation: Overnight at a hotel in Arba Minch.'],
            },
            {
                day: 10,
                title: 'Arba Minch – Addis Ababa Departure',
                morning: ['After breakfast, depart for Addis Ababa (approximately an all-day drive).'],
                afternoon: ['Stop for lunch en route at a local restaurant or picnic.'],
                evening: ['Arrive in Addis Ababa, transfer to Bole International Airport for your departure flight.'],
            },
        ],
        inclusions: [
            'Accommodation (9 nights) in mid-range hotels',
            'Daily breakfast and selected meals (lunch as indicated)',
            'Local guides for all excursions',
            'Entrance fees to cultural sites',
            'Transportation during the tour (including airport transfers)',
            'Boat trips on Lake Chamo',
            'Cultural experiences (e.g., visits to local tribes)',
        ],
        exclusions: [
            'International flights to/from Ethiopia',
            'Visa fees for Ethiopia',
            'Meals not mentioned in the itinerary',
            'Personal expenses (e.g., souvenirs, tips)',
            'Travel insurance',
            'Any optional activities not included in the itinerary',
        ],
    },
    {
        id: 'FET17',
        name: '5-Days Awash National Park, Harar and Dire Dewa',
        category: 'cultural_and_natural',
        image: omo,
        summary:
            "This 5-day tour takes you through some of Ethiopia's most captivating landscapes and historical sites. You'll explore the stunning Awash National Park, known for its diverse wildlife and dramatic scenery, visit the ancient city of Harar, famous for its rich Islamic heritage and unique architecture, and discover Dire Dawa, an important commercial hub. This itinerary combines nature, culture, and history, providing a comprehensive experience of Ethiopia's eastern region.",
        itinerary: [
            {
                day: 1,
                title: 'Arrival in Addis Ababa – Awash National Park',
                morning: ['Arrive at Addis Ababa Bole International Airport. Meet your guide and transfer to Awash National Park (approximately 4 hours by road).'],
                afternoon: ['Picnic lunch en route or at the park.', 'Arrive at Awash National Park. Enjoy a game drive to spot wildlife such as gazelles, baboons, and various bird species.'],
                evening: ['Check into your accommodation and relax.', 'Dinner at the lodge or campsite.', 'Accommodation: Overnight at a lodge or campsite in Awash National Park.'],
            },
            {
                day: 2,
                title: 'Awash National Park – Harar',
                morning: ['Early morning game drive in Awash National Park to see more wildlife and enjoy the beautiful landscapes.'],
                afternoon: ['Return to your lodge for breakfast and check out. Depart for Harar (approximately 5 hours by road).', 'Arrive in Harar and check into your hotel.', 'Visit the Harar Jegol (the old walled city), a UNESCO World Heritage site, and explore its narrow alleyways and colorful markets.'],
                evening: ['Dinner at a local restaurant featuring traditional Harari cuisine.', 'Accommodation: Overnight at a hotel in Harar.'],
            },
            {
                day: 3,
                title: 'Exploring Harar',
                morning: ['After breakfast, visit the famous Harar hyena man, who feeds wild hyenas in the evening.', 'Learn about the significance of hyenas in Harari culture.'],
                afternoon: ['Lunch at a local restaurant.', 'Explore more of Harar’s cultural sites, including the Harari Museum, the house of Ras Makonnen, and various historic mosques.'],
                evening: ['Enjoy a traditional coffee ceremony, a significant aspect of Ethiopian culture.', 'Dinner at your hotel or a local restaurant.', 'Accommodation: Overnight at a hotel in Harar.'],
            },
            {
                day: 4,
                title: 'Harar – Dire Dawa',
                morning: ['Depart for Dire Dawa after breakfast (approximately 1 hour by road).'],
                afternoon: ['Arrive in Dire Dawa and have lunch at a local restaurant.', 'Visit the Dire Dawa Railway Station and learn about the city’s history as a key transport hub.', 'Explore the vibrant markets and local neighborhoods.'],
                evening: ['Dinner at a local restaurant featuring regional cuisine.', 'Accommodation: Overnight at a hotel in Dire Dawa.'],
            },
            {
                day: 5,
                title: 'Dire Dawa – Addis Ababa Departure',
                morning: ['After breakfast, explore any remaining sites of interest in Dire Dawa or take a short excursion to nearby attractions.'],
                afternoon: ['Lunch at a local restaurant in Dire Dawa.', 'Depart for Addis Ababa (approximately 7 hours by road) or take a short domestic flight from Dire Dawa to Addis Ababa (if available).'],
                evening: ['Arrive in Addis Ababa. Depending on your flight schedule, transfer to Bole International Airport for your departure flight or spend the night in Addis Ababa.'],
            },
        ],
        inclusions: [
            'Accommodation (4 nights) in hotels/lodges',
            'Daily breakfast and selected meals',
            'Local guides for all excursions',
            'Entrance fees to national parks and cultural sites',
            'Transportation during the tour (including airport transfers)',
            'Game drives in Awash National Park',
            'Cultural experiences (e.g., coffee ceremony)',
        ],
        exclusions: [
            'International flights to/from Ethiopia',
            'Visa fees for Ethiopia',
            'Meals not mentioned in the itinerary',
            'Personal expenses (e.g., souvenirs, tips)',
            'Travel insurance',
            'Any optional activities not included in the itinerary',
        ],
    },
    {
        id: 'FET18',
        name: '12-Days Omo Valley and Awash National Park',
        category: 'cultural_and_natural',
        image: omo,
        summary:
            "This 12-day tour offers an in-depth exploration of Ethiopia's diverse landscapes and rich cultures. You will journey through the stunning Omo Valley, known for its vibrant tribal communities, experience the wildlife of Awash National Park, delve into the historical significance of Harar, and visit Dire Dawa. This itinerary combines adventure, cultural immersion, and wildlife observation, providing a comprehensive experience of Ethiopia’s southern and eastern regions.",
        itinerary: [
            {
                day: 1,
                title: 'Arrival in Addis Ababa',
                morning: ['Arrive at Addis Ababa Bole International Airport. Meet your guide and transfer to your hotel.'],
                afternoon: ['Visit the National Museum of Ethiopia to see the famous fossilized remains of Lucy.'],
                evening: ['Dinner at a local restaurant featuring traditional Ethiopian cuisine.', 'Accommodation: Overnight at a hotel in Addis Ababa.'],
            },
            {
                day: 2,
                title: 'Addis Ababa – Omo Valley (Arba Minch)',
                morning: ['Depart early for Arba Minch (approximately 8 hours by road).'],
                afternoon: ['Picnic lunch en route.', 'Arrive in Arba Minch and check into your hotel.', 'Enjoy a boat trip on Lake Chamo to see crocodiles and hippos.'],
                evening: ['Dinner at the hotel.', 'Accommodation: Overnight at a hotel in Arba Minch.'],
            },
            {
                day: 3,
                title: 'Omo Valley – Konso and Dorze Villages',
                morning: ['After breakfast, drive to Konso (approximately 2 hours).', 'Visit Konso cultural village, known for its terraced agriculture and unique wooden totems.'],
                afternoon: ['Lunch in Konso.', 'Continue to Dorze village to learn about their weaving traditions and unique bamboo houses.'],
                evening: ['Return to Arba Minch for dinner.', 'Accommodation: Overnight at a hotel in Arba Minch.'],
            },
            {
                day: 4,
                title: 'Omo Valley – Jinka',
                morning: ['Depart for Jinka (approximately 6 hours).', 'Enjoy scenic views along the way.'],
                afternoon: ['Lunch en route.', 'Arrive in Jinka and visit the South Omo Research Center and Museum.'],
                evening: ['Dinner at your hotel.', 'Accommodation: Overnight at a hotel in Jinka.'],
            },
            {
                day: 5,
                title: 'Mursi Tribe Visit',
                morning: ['Visit the Mursi tribe, famous for their lip plates (approximately 1.5 hours from Jinka).'],
                afternoon: ['Picnic lunch in the village.', 'Spend time with the Mursi people to learn about their culture and traditions. Return to Jinka.'],
                evening: ['Dinner at your hotel.', 'Accommodation: Overnight at a hotel in Jinka.'],
            },
            {
                day: 6,
                title: 'Omo Valley – Turmi (Hamar Tribe)',
                morning: ['Depart for Turmi (approximately 3 hours).'],
                afternoon: ['Lunch in Turmi.', 'Visit the Hamar tribe. Experience their unique customs, including the famous bull-jumping ceremony (if available).'],
                evening: ['Dinner at your hotel.', 'Accommodation: Overnight at a lodge in Turmi.'],
            },
            {
                day: 7,
                title: 'Turmi – Omorate – Back to Turmi',
                morning: ['Take a trip to Omorate to visit the Dasanech people along the Omo River (approximately 1 hour).'],
                afternoon: ['Picnic lunch by the river.', 'Return to Turmi and explore the local market if it coincides with market days (usually Mondays and Thursdays).'],
                evening: ['Dinner at your lodge.', 'Accommodation: Overnight at a lodge in Turmi.'],
            },
            {
                day: 8,
                title: 'Turmi – Arba Minch',
                morning: ['Depart Turmi for Arba Minch. Stop for lunch at Konso.'],
                afternoon: ['Arrive at Arba Minch, check into you Hotel.'],
                evening: ['Relax at your Hotel.', 'Accommodation: Overnight at Arba Minch.'],
            },
            {
                day: 9,
                title: 'Arba Minch - Awash National Park',
                morning: ['Early morning depart to Awash National Park. (approximately 6 hours).'],
                afternoon: ['Lunch en route.', 'Arrive in Awash National Park, Game driving through the national park to explore endemic wild life and visit the breath taking beauty of Awash Falls.'],
                evening: ['Dinner at a local restaurant in Awash falls lodge.', 'Accommodation: Overnight at Awash National Park.'],
            },
            {
                day: 10,
                title: 'Awash National Park – Harar',
                morning: ['Early morning game drive in Awash National Park to see more wildlife and enjoy the beautiful landscapes.', 'Depart for Harar (approximately 5 hours by road).'],
                afternoon: ['Arrive in Harar and check into your hotel.', 'Visit the Harar Jugol (the old walled city), a UNESCO World Heritage site, and explore its narrow alleyways and colorful markets.'],
                evening: ['Dinner at a local restaurant featuring traditional Harari cuisine.', 'Accommodation: Overnight at a hotel in Harar.'],
            },
            {
                day: 11,
                title: 'Exploring Harar',
                morning: ['Discover the ancient city of harar and explore the old walled town of harar.', 'Learn about their significance in Harari culture.'],
                afternoon: ['Lunch at a local restaurant.', 'Explore more of Harar’s cultural sites, including mosques, the Harari Museum, and Ras Makonnen’s house.'],
                evening: ['Visit the famous hyena man who feeds wild hyenas. Learn about their significance in Harari culture.', 'Accommodation: Overnight at a hotel in Harar.'],
            },
            {
                day: 12,
                title: 'Harar – Dire Dawa',
                morning: ['Depart for Dire Dawa (approximately 1 hour).'],
                afternoon: ['Arrive in Dire Dawa and have lunch at a local restaurant.', 'Visit Dire Dawa Railway Station and explore local markets and neighborhoods.'],
                evening: ['Dinner at a local restaurant featuring regional cuisine.', 'Accommodation: Overnight at a hotel in Dire Dawa.'],
            },
            {
                day: 13,
                title: 'Dire Dawa – Addis Ababa Departure',
                morning: ['After breakfast, explore any remaining sites of interest in Dire Dawa or take a short excursion to nearby attractions.'],
                afternoon: ['Lunch at a local restaurant in Dire Dawa.', 'Depart for Addis Ababa (approximately 7 hours by road) or take a short domestic flight from Dire Dawa to Addis Ababa (if available).'],
                evening: ['Arrive in Addis Ababa. Depending on your flight schedule, transfer to Bole International Airport for your departure flight or spend the night in Addis Ababa.'],
            },
        ],
        inclusions: [
            'Accommodation (11 nights) in mid-range hotels/lodges',
            'Daily breakfast and selected meals',
            'Local guides for all excursions',
            'Entrance fees to national parks and cultural sites',
            'Transportation during the tour (including airport transfers)',
            'Boat trip on Lake Chamo',
            'Game drives in Awash National Park',
            'Cultural experiences (e.g., coffee ceremony, hyena feeding)',
        ],
        exclusions: [
            'International flights to/from Ethiopia',
            'Visa fees for Ethiopia',
            'Meals not mentioned in the itinerary',
            'Personal expenses (e.g., souvenirs, tips)',
            'Travel insurance',
            'Any optional activities not included in the itinerary',
        ],
    },
    {
        id: 'FET19',
        name: '16-Day Photographic Tour of Ethiopia: Natural and Cultural Wonders',
        category: 'cultural_and_natural',
        image: omo,
        summary:
            "Join us on a captivating 16-day photographic journey through Ethiopia, a land of stunning landscapes, rich cultural heritage, and vibrant communities. This tour is designed for photography enthusiasts who wish to capture the essence of Ethiopia—from the majestic Simien Mountains to the ancient rock-hewn churches of Lalibela, and the colorful markets of Addis Ababa. Experience the diverse cultures, breathtaking scenery, and unique wildlife that make Ethiopia a photographer's paradise.",
        itinerary: [
            {
                day: 1,
                title: 'Arrival in Addis Ababa',
                morning: ['Arrive at Bole International Airport and transfer to your hotel.'],
                afternoon: ['Visit the National Museum (home of Lucy) and Holy Trinity Cathedral for initial photography opportunities.'],
                evening: ['Enjoy a traditional Ethiopian dinner with cultural performances. Overnight in Addis Ababa.'],
            },
            {
                day: 2,
                title: 'Addis Ababa to Bahir Dar',
                morning: ['Fly to Bahir Dar.'],
                afternoon: ['Photograph the scenic Blue Nile Falls (Tis Issat) and take a boat trip on Lake Tana to capture island monasteries like Ura Kidane Meheret.'],
                evening: ['Overnight in Bahir Dar.'],
            },
            {
                day: 3,
                title: 'Bahir Dar to Gondar',
                morning: ['Drive to Gondar (approx. 3 hours), capturing rural landscapes along the way.'],
                afternoon: ['Explore and photograph Gondar’s Royal Enclosure, including its castles and churches.'],
                evening: ['Visit Debre Birhan Selassie Church for stunning ceiling murals. Overnight in Gondar.'],
            },
            {
                day: 4,
                title: 'Gondar to Simien Mountains National Park',
                morning: ['Depart for Simien Mountains (approx. 2 hours).'],
                afternoon: ['Start a guided trek; photograph breathtaking views and unique wildlife such as gelada baboons.'],
                evening: ['Camp or stay at a lodge within the park.'],
            },
            {
                day: 5,
                title: 'Simien Mountains National Park',
                morning: ['Continue your exploration of the Simien Mountains, capturing the dramatic landscapes and local flora and fauna.'],
                afternoon: [],
                evening: ['Return to your accommodation for dinner and relaxation.'],
            },
            {
                day: 6,
                title: 'Simien Mountains to Axum',
                morning: ['Drive to Axum (approx. 6 hours), stopping for landscape photography.'],
                afternoon: ['Explore Axum’s stelae fields and the Church of St. Mary of Zion for cultural photography.'],
                evening: ['Overnight in Axum.'],
            },
            {
                day: 7,
                title: 'Axum to Lalibela',
                morning: ['Fly to Lalibela.', 'After arrival drive to the town Lalibela on the way visit Naktulab Monastery have a chance to capture antic crosses and ancient artifacts.'],
                afternoon: ['Begin exploring Lalibela’s rock-hewn churches, starting with Bet Medhane Alem and the Northern Cluster group of churches.'],
                evening: ['Overnight in Lalibela.'],
            },
            {
                day: 8,
                title: 'Lalibela',
                morning: ['Continue your exploration of Lalibela, photographing the intricately carved churches, including Bet Giyorgis.'],
                afternoon: ['Optionally attend a local religious ceremony for cultural insights.'],
                evening: ['Overnight in Lalibela.'],
            },
            {
                day: 9,
                title: 'Lalibela to Addis Ababa',
                morning: ['Fly back to Addis Ababa.'],
                afternoon: ['Free time for last-minute photography or visits to local markets or the Ethnological Museum.'],
                evening: ['Farewell dinner featuring traditional Ethiopian cuisine. Overnight in Addis Ababa.'],
            },
            {
                day: 10,
                title: 'Addis Ababa to Arba Minch',
                morning: ['Fly to Arba Minch.'],
                afternoon: ['Visit the Dorze village to capture traditional weaving and lifestyle.'],
                evening: ['Overnight in Arba Minch.'],
            },
            {
                day: 11,
                title: 'Arba Minch and Lake Chamo',
                morning: ['Take a boat trip on Lake Chamo, photographing hippos and crocodiles in their natural habitat.'],
                afternoon: ['Visit local markets and engage with communities for cultural photography.'],
                evening: ['Overnight in Arba Minch.'],
            },
            {
                day: 12,
                title: 'Arba Minch to Omo Valley',
                morning: ['Drive to Omo Valley (approx. 4 hours).'],
                afternoon: ['Visit various tribes (e.g., Hamar, Benna,Tsemay, ) for unique cultural photography opportunities.'],
                evening: ['Overnight in Turmi.'],
            },
            {
                day: 13,
                title: 'Turmi - Karo',
                morning: ['Drive to Korch village to explore the Karo tribe who live on the bank of Omo river, who are known for their stunning body painting and scarification.'],
                afternoon: ['Drive to Omorate (approximately 65 kilometer) to visit Dasenech Tribe.'],
                evening: ['Drive back to Turmi. Overnight Buska Lodge.'],
            },
            {
                day: 14,
                title: 'Turmi – Key Afer Market - Jinka',
                morning: ['Visit the Key Afer market (on Thursdays) to experience the vibrant local trade and meet various tribes.'],
                afternoon: ['Lunch at a local restaurant in Turmi.', 'Visit a Jinka Museum and Ari village to capture their culture, art, and daily life.'],
                evening: ['Dinner at your hotel or a local restaurant.', 'Accommodation: Overnight at Eco Omo Lodge.'],
            },
            {
                day: 15,
                title: 'Jinka – Mursi Tribe',
                morning: ['Visit the Mursi tribe, famous for their lip plates (approximately 1.5 hours from Jinka).'],
                afternoon: ['Picnic lunch in the village.', 'Transfer to Jinka airport to return to Addis Ababa.'],
                evening: ['Arrive in Addis Ababa, transfer to Bole International Airport for your departure flight.'],
            },
            {
                day: 16,
                title: 'Arba Minch – Addis Ababa Departure',
                morning: ['After breakfast, depart for Addis Ababa (approximately an all-day drive).'],
                afternoon: ['Stop for lunch en route at a local restaurant or picnic.'],
                evening: ['Arrive in Addis Ababa, transfer to Bole International Airport for your departure flight.'],
            },
        ],
        inclusions: [
            'Accommodation: Comfortable hotels, lodges, and camping as per itinerary.',
            'Meals: Daily breakfast, selected lunches, and dinners featuring traditional Ethiopian cuisine.',
            'Transportation: All internal flights and private transportation by road with a professional driver.',
            'Guided Tours: Professional English-speaking guide throughout the tour with expertise in photography.',
            'Entrance Fees: All entrance fees to sites and national parks as per itinerary.',
            'Photography Support: Tips on capturing stunning photographs from your guide.',
        ],
        exclusions: [
            'International airfare to/from Ethiopia.',
            'Visa fees for entry into Ethiopia.',
            'Personal expenses (souvenirs, additional snacks, etc.).',
            'Travel insurance.',
            'Optional activities not mentioned in the itinerary.',
            'Gratuities for guides and drivers.',
        ],
    },
    {
        id: 'FET20',
        name: '10-Day Cultural and Wildlife Photographic Tour: Southern Ethiopia',
        category: 'cultural_and_natural',
        image: omo,
        itinerary: [
            {
                day: 1,
                title: 'Arrival in Jinka',
                morning: ['Arrive at Jinka Airport. Transfer to your hotel.'],
                afternoon: ['Explore the town of Jinka. Visit the local market for vibrant street photography.'],
                evening: ['Sunset photography along the banks of the Jinka River.'],
            },
            {
                day: 2,
                title: 'Jinka to Mursi',
                morning: ['Drive to Mursi (approx. 1.5 hours).'],
                afternoon: ['Visit the Mursi tribe. Capture portraits of women with lip plates and traditional attire.', 'Engage with locals and photograph their daily life.'],
                evening: ['Return to Jinka. Dinner at a local restaurant.'],
            },
            {
                day: 3,
                title: 'Omo National Park',
                morning: ['Depart early for Omo National Park (approx. 2 hours).'],
                afternoon: ['Wildlife photography session in the park. Look for elephants, buffalo, and various bird species.', 'Continue exploring the park. Capture landscapes and wildlife interactions.'],
                evening: ['Camp overnight in the park for sunset and night sky photography.'],
            },
            {
                day: 4,
                title: 'Omo National Park to Kibish (Surma)',
                morning: ['Depart for Kibish (approx. 3 hours).'],
                afternoon: ['Arrive in Kibish. Meet the Surma tribe and photograph their unique body art and customs.', 'Participate in cultural activities and capture portraits.'],
                evening: ['Enjoy a traditional dinner with the Surma people.'],
            },
            {
                day: 5,
                title: 'Kibish to Kangaten',
                morning: ['Depart for Kangaten (approx. 2 hours).'],
                afternoon: ['Explore the village and interact with locals. Focus on capturing everyday life.', 'Photograph traditional ceremonies or dances if available.'],
                evening: ['Sunset photography over the Omo River.'],
            },
            {
                day: 6,
                title: 'Kangaten to Karo Dus',
                morning: ['Drive to Karo Dus (approx. 1 hour).'],
                afternoon: ['Visit the Karo tribe, known for their body painting and vibrant attire. Capture their artistic expressions.', 'Explore the nearby landscapes for stunning natural photography.'],
                evening: ['Return to your accommodation for a relaxing evening.'],
            },
            {
                day: 7,
                title: 'Karo Dus to Turmi',
                morning: ['Depart for Turmi (approx. 1.5 hours).'],
                afternoon: ['Arrive in Turmi and visit the Hamar tribe.', 'Capture images of their unique hairstyles and traditional clothing.', 'Attend a traditional Hamar ceremony or dance if available.'],
                evening: ['Enjoy a cultural dinner and share stories with locals.'],
            },
            {
                day: 8,
                title: 'Turmi Exploration',
                morning: ['Explore surrounding areas, including visits to nearby villages of the Hamar and Banna tribes.'],
                afternoon: ['Capture daily life, agricultural practices, and community interactions.', 'Visit local markets for colorful scenes and portraits.'],
                evening: ['Sunset photography at a scenic viewpoint.'],
            },
            {
                day: 9,
                title: 'Return to Jinka',
                morning: ['Depart Turmi and return to Jinka (approx. 3 hours).'],
                afternoon: ['Lunch in Jinka, followed by a rest period.', 'Free time for last-minute photography or revisiting favorite spots in Jinka.'],
                evening: ['Farewell dinner at a local restaurant.'],
            },
            {
                day: 10,
                title: 'Departure from Jinka',
                morning: ['Transfer to Jinka Airport for your departure flight.', 'Capture any last-minute photos of the beautiful landscapes or local life before leaving.'],
                afternoon: [],
                evening: [],
            },
        ],
        inclusions: [
            'Accommodation: Comfortable hotels, lodges, and camping as per itinerary.',
            'Meals: Daily breakfast, selected lunches, and dinners featuring traditional Ethiopian cuisine.',
            'Transportation: All internal flights and private transportation by road with a professional driver.',
            'Guided Tours: Professional English-speaking guide throughout the tour with expertise in photography.',
            'Entrance Fees: All entrance fees to sites and national parks as per itinerary.',
            'Photography Support: Tips on capturing stunning photographs from your guide.',
        ],
        exclusions: [
            'International airfare to/from Ethiopia.',
            'Visa fees for entry into Ethiopia.',
            'Personal expenses (souvenirs, additional snacks, etc.).',
            'Travel insurance.',
            'Optional activities not mentioned in the itinerary.',
            'Gratuities for guides and drivers.',
        ],
    },
    ],
    hiking: [
        {
        id: 'FET26',
        name: '10-Day Simien Mountains Hiking and Trekking Tour',
        category: 'hiking_and_trekking',
        image: omo,
        summary:
            "Experience the breathtaking beauty of Ethiopia's Simien Mountains on this 10-day hiking and trekking adventure. This tour will take you through stunning landscapes, including dramatic cliffs, deep valleys, and lush greenery, while providing opportunities to encounter unique wildlife and immerse yourself in the local culture. With expert guides and comfortable accommodations, this journey promises to be an unforgettable exploration of one of Africa's most spectacular national parks.",
        itinerary: [
            {
                day: 1,
                title: 'Arrival in Addis Ababa',
                morning: ['Arrive at Addis Ababa Bole International Airport.'],
                afternoon: ['Transfer to your hotel for check-in and relaxation.'],
                evening: ['Welcome dinner and trip briefing.'],
            },
            {
                day: 2,
                title: 'Addis Ababa to Gondar',
                morning: ['Fly from Addis Ababa to Gondar.'],
                afternoon: ['Explore the historic castles of Gondar, a UNESCO World Heritage site.'],
                evening: ['Overnight in Gondar.'],
            },
            {
                day: 3,
                title: 'Gondar to Debark and Sankaber',
                morning: ['Drive from Gondar to Debark (approx. 2 hours).'],
                afternoon: ['Meet your trekking team and begin your hike to Sankaber (approx. 3-4 hours).'],
                evening: ['Camp overnight at Sankaber.'],
            },
            {
                day: 4,
                title: 'Sankaber to Geech',
                morning: ['Trek from Sankaber to Geech (approx. 6-7 hours), enjoying panoramic views along the way.'],
                afternoon: ['Arrive at Geech; explore the area and relax.'],
                evening: ['Camp overnight at Geech.'],
            },
            {
                day: 5,
                title: 'Geech to Chenek',
                morning: ['Hike from Geech to Chenek (approx. 6-7 hours), passing through stunning landscapes.'],
                afternoon: ['Arrive at Chenek; enjoy the scenic views of the surrounding mountains.'],
                evening: ['Camp overnight at Chenek.'],
            },
            {
                day: 6,
                title: 'Chenek to Ras Dashen Summit',
                morning: ['Start early for a challenging hike to the summit of **Ras Dashen**, Ethiopia\'s highest peak (approx. 8 hours round trip).'],
                afternoon: ['Enjoy lunch at the summit and take in the breathtaking views. Return to camp at Chenek for the night.'],
                evening: ['Overnight at Chenek.'],
            },
            {
                day: 7,
                title: 'Chenek to Ambiko',
                morning: ['Trek from Chenek to Ambiko (approx. 6 hours), traversing beautiful landscapes.'],
                afternoon: ['Arrive at Ambiko; relax and enjoy the serene environment.'],
                evening: ['Camp overnight at Ambiko.'],
            },
            {
                day: 8,
                title: 'Ambiko to Sanka Pass and Return to Sankaber',
                morning: ['Hike from Ambiko over Sanka Pass (approx. 6-7 hours) back to Sankaber.'],
                afternoon: ['Enjoy a leisurely afternoon exploring the area around Sankaber.'],
                evening: ['Camp overnight at Sankaber.'],
            },
            {
                day: 9,
                title: 'Sankaber to Debark and Drive to Gondar',
                morning: ['Trek from Sankaber back to Debark (approx. 3 hours).'],
                afternoon: ['Drive back to Gondar (approx. 2 hours) and check into your hotel. Free time for relaxation or exploration in Gondar.'],
                evening: ['Farewell dinner in Gondar; overnight stay.'],
            },
            {
                day: 10,
                title: 'Gondar to Addis Ababa and Departure',
                morning: ['Fly back to Addis Ababa.'],
                afternoon: ['Last-minute shopping or sightseeing in Addis Ababa.'],
                evening: ['Transfer to the airport for your departure flight.'],
            },
        ],
        inclusions: [
            'Domestic flights (Addis Ababa - Gondar - Addis Ababa)',
            'All ground transportation in a comfortable vehicle',
            'Accommodation (hotels and camping as specified)',
            'All meals during trekking days (breakfast, lunch, dinner)',
            'Professional English-speaking trekking guide',
            'Local support staff (cooks, porters)',
            'Entrance fees to Simien Mountains National Park',
            'Camping equipment (tents, sleeping bags, etc.)',
        ],
        exclusions: [
            'International flights to/from Ethiopia',
            'Visa fees',
            'Travel insurance',
            'Personal expenses (souvenirs, snacks, etc.)',
            'Tips for guides and staff',
            'Optional activities not mentioned in the itinerary',
        ],
    },
    {
        id: 'FET27',
        name: '8-Day Bale Mountains Hiking and Trekking Tour',
        category: 'hiking_and_trekking',
        image: omo,
        summary:
            "Embark on an unforgettable 8-day hiking and trekking adventure in Ethiopia's stunning **Bale Mountains National Park**. This tour showcases the breathtaking landscapes, diverse ecosystems, and unique wildlife of the region, including the rare **Ethiopian wolf**. Experience the rich culture of the local communities as you trek through lush forests, alpine meadows, and dramatic mountain scenery.",
        itinerary: [
            {
                day: 1,
                title: 'Arrival in Addis Ababa',
                morning: ['Arrive at Addis Ababa Bole International Airport.'],
                afternoon: ['Transfer to your hotel for check-in and relaxation.'],
                evening: ['Welcome dinner and trip briefing.'],
            },
            {
                day: 2,
                title: 'Addis Ababa to Bale Mountains',
                morning: ['Depart Addis Ababa and drive to Bale Mountains National Park (approx. 6-7 hours).'],
                afternoon: ['Arrive at Dinsho, the park headquarters; enjoy a short hike in the area.'],
                evening: ['Overnight at a lodge in Dinsho.'],
            },
            {
                day: 3,
                title: 'Dinsho to Sanetti Plateau',
                morning: ['Begin your trek from Dinsho to the Sanetti Plateau (approx. 5-6 hours).'],
                afternoon: ['Enjoy stunning views and wildlife spotting, including the Ethiopian wolf.'],
                evening: ['Camp overnight on the Sanetti Plateau.'],
            },
            {
                day: 4,
                title: 'Explore Sanetti Plateau',
                morning: ['Full day of exploration on the Sanetti Plateau; hike to the highest point in the park, **Tullu Deemtu** (4,377 m).'],
                afternoon: ['Enjoy breathtaking vistas and unique flora and fauna.'],
                evening: ['Return to camp for dinner and overnight stay.'],
            },
            {
                day: 5,
                title: 'Sanetti Plateau to Harenna Forest',
                morning: ['Trek from the Sanetti Plateau down into the **Harenna Forest** (approx. 6-7 hours).'],
                afternoon: ['Experience the lush greenery and diverse wildlife of the forest.'],
                evening: ['Camp overnight in Harenna Forest.'],
            },
            {
                day: 6,
                title: 'Harenna Forest Exploration',
                morning: ['Guided hike through Harenna Forest; look for endemic species such as the **Bale monkey**.'],
                afternoon: ['Visit local communities and learn about their culture.'],
                evening: ['Return to camp for dinner and overnight stay.'],
            },
            {
                day: 7,
                title: 'Harenna Forest to Goba',
                morning: ['Trek from Harenna Forest to Goba (approx. 5 hours).'],
                afternoon: ['Arrive in Goba; explore the town and relax.'],
                evening: ['Overnight at a hotel in Goba.'],
            },
            {
                day: 8,
                title: 'Goba to Addis Ababa and Departure',
                morning: ['Drive back to Addis Ababa (approx. 5 hours).'],
                afternoon: ['Last-minute shopping or sightseeing in Addis Ababa.'],
                evening: ['Transfer to the airport for your departure flight.'],
            },
        ],
        inclusions: [
            'Ground transportation in a comfortable vehicle',
            'Accommodation (hotels and camping as specified)',
            'All meals during trekking days (breakfast, lunch, dinner)',
            'Professional English-speaking trekking guide',
            'Local support staff (cooks, porters)',
            'Entrance fees to Bale Mountains National Park',
            'Camping equipment (tents, sleeping bags, etc.)',
        ],
        exclusions: [
            'International flights to/from Ethiopia',
            'Visa fees',
            'Travel insurance',
            'Personal expenses (souvenirs, snacks, etc.)',
            'Tips for guides and staff',
            'Optional activities not mentioned in the itinerary',
        ],
    },
    {
        id: 'FET28',
        name: '3-Day Bale Mountains Hiking and Trekking Tour',
        category: 'hiking_and_trekking',
        image: omo,
        summary:
            "Discover the breathtaking beauty of the Bale Mountains National Park in Ethiopia on this immersive 3-day hiking and trekking tour. This adventure takes you through stunning landscapes, diverse ecosystems, and offers opportunities to spot unique wildlife, including the rare Ethiopian wolf. Perfect for nature lovers and adventure seekers, this short yet fulfilling tour promises unforgettable memories.",
        itinerary: [
            {
                day: 1,
                title: 'Arrival in Addis Ababa and Transfer to Bale Mountains',
                morning: ['Arrive at Addis Ababa Bole International Airport.'],
                afternoon: ['Depart for Bale Mountains National Park (approx. 6-7 hours drive). Enjoy scenic views along the way.'],
                evening: ['Arrive at Dinsho, the park headquarters. Settle into your lodge and enjoy a welcome dinner. Briefing about the upcoming trek.'],
            },
            {
                day: 2,
                title: 'Trekking in Dinsho and Sanetti Plateau',
                morning: ['After breakfast, embark on a guided trek from **Dinsho to the Sanetti Plateau** (approx. 5 hours). Look out for endemic wildlife, including the **Ethiopian wolf** and **Bale monkey**.'],
                afternoon: ['Enjoy a packed lunch amidst stunning landscapes. Continue exploring the plateau’s unique flora and fauna.'],
                evening: ['Return to Dinsho for dinner and overnight stay at a lodge.'],
            },
            {
                day: 3,
                title: 'Return to Addis Ababa',
                morning: ['After breakfast, take a short hike around Dinsho to explore more of the park’s beauty.'],
                afternoon: ['Depart for Addis Ababa (approx. 6-7 hours drive). Stop for lunch en route.'],
                evening: ['Arrive in Addis Ababa, where you can enjoy some last-minute shopping or sightseeing before heading to the airport for your departure.'],
            },
        ],
        inclusions: [
            'Ground transportation in a comfortable vehicle',
            'Accommodation (2 nights in a lodge)',
            'All meals (2 breakfasts, 2 lunches, 2 dinners)',
            'Professional English-speaking trekking guide',
            'Local support staff (cooks, porters)',
            'Entrance fees to Bale Mountains National Park',
            'First aid kit and safety equipment',
        ],
        exclusions: [
            'International flights to/from Ethiopia',
            'Visa fees',
            'Travel insurance',
            'Personal expenses (souvenirs, snacks, etc.)',
            'Tips for guides and staff',
            'Optional activities not mentioned in the itinerary',
        ],
    },
    {
        id: 'FET29',
        name: '5-Day Simien Mountains Hiking and Trekking Tour',
        category: 'hiking_and_trekking',
        image: omo,
        summary:
            "Discover the spectacular Simien Mountains on a focused 5-day trekking tour. Experience dramatic cliffs, deep valleys, and unique wildlife, including the **Gelada baboon** and **Walia ibex**. This adventure takes you through rugged terrain and picturesque villages, offering stunning panoramic views and an unforgettable exploration of this UNESCO World Heritage site.",
        itinerary: [
            {
                day: 1,
                title: 'Arrival in Addis Ababa and Transfer to Gondar',
                morning: ['Arrive at Addis Ababa Bole International Airport.'],
                afternoon: ['Fly from Addis Ababa to Gondar. Transfer to your hotel for check-in.'],
                evening: ['Dinner and trip briefing.'],
            },
            {
                day: 2,
                title: 'Gondar to Debark and Sankaber Trek',
                morning: ['Drive from Gondar to Debark (approx. 2 hours).'],
                afternoon: ['Meet your trekking team and begin your hike to **Sankaber** (approx. 3-4 hours).'],
                evening: ['Camp overnight at Sankaber.'],
            },
            {
                day: 3,
                title: 'Sankaber to Geech',
                morning: ['Trek from Sankaber to **Geech** (approx. 6-7 hours), with opportunities to spot Gelada baboons.'],
                afternoon: ['Arrive at Geech; explore the area and relax.'],
                evening: ['Camp overnight at Geech.'],
            },
            {
                day: 4,
                title: 'Geech Exploration and Day Hike',
                morning: ['Day hike from Geech to a vantage point for stunning views.'],
                afternoon: ['Trek to Buayte to spot the **Walia Ibex**.'],
                evening: ['Return to Geech for dinner and overnight stay.'],
            },
            {
                day: 5,
                title: 'Geech to Debark and Departure',
                morning: ['Trek from Geech back to Debark.'],
                afternoon: ['Drive from Debark to Gondar (approx. 2 hours). Fly from Gondar to Addis Ababa.'],
                evening: ['Transfer to the airport for your departure flight.'],
            },
        ],
        inclusions: [
            'Domestic flights (Addis Ababa - Gondar - Addis Ababa)',
            'All ground transportation in a comfortable vehicle',
            'Accommodation (hotels and camping as specified)',
            'All meals during trekking days (breakfast, lunch, dinner)',
            'Professional English-speaking trekking guide',
            'Local support staff (cooks, porters)',
            'Entrance fees to Simien Mountains National Park',
            'Camping equipment (tents, sleeping bags, etc.)',
        ],
        exclusions: [
            'International flights to/from Ethiopia',
            'Visa fees',
            'Travel insurance',
            'Personal expenses (souvenirs, snacks, etc.)',
            'Tips for guides and staff',
            'Optional activities not mentioned in the itinerary',
        ],
    },
    {
        id: 'FET30',
        name: '8-Day Danakil, Erta Ale, and Lalibela Adventure Tour',
        category: 'hiking_and_trekking',
        image: omo,
        summary:
            "An 8-day adventure combining challenging trekking with cultural exploration in Ethiopia's most extreme and historical regions. Highlights include exploring the otherworldly **Danakil Depression** and its salt flats, a hike to **Erta Ale Volcano** to witness the lava lake, marveling at the rock formations of **Gheralta**, and visiting the famous rock-hewn churches of **Lalibela**.",
        itinerary: [
            {
                day: 1,
                title: 'Arrival in Addis Ababa and Flight to Mekele',
                morning: ['Arrive at Addis Ababa Bole International Airport.'],
                afternoon: ['Fly from Addis Ababa to Mekele. Transfer to your hotel.'],
                evening: ['Dinner and trip briefing.'],
            },
            {
                day: 2,
                title: 'Mekele to Danakil Depression and Erta Ale Trek',
                morning: ['Drive from Mekele to the **Danakil Depression**.'],
                afternoon: ['Continue to the base of **Erta Ale Volcano**.'],
                evening: ['Evening trek (approx. 3 hours) up Erta Ale to view the lava lake. Overnight camping near the rim.'],
            },
            {
                day: 3,
                title: 'Erta Ale to Dallol',
                morning: ['Descend from Erta Ale. Drive to **Dallol**.'],
                afternoon: ['Explore Dallol’s colorful hydrothermal features and salt formations.'],
                evening: ['Drive back to Mekele. Overnight in Mekele.'],
            },
            {
                day: 4,
                title: 'Mekele to Gheralta',
                morning: ['Depart Mekele for **Gheralta** (approx. 2 hours drive).'],
                afternoon: ['Explore the stunning rock formations and ancient churches carved into cliffs.'],
                evening: ['Overnight in a lodge with panoramic views of the Gheralta Mountains.'],
            },
            {
                day: 5,
                title: 'Gheralta to Lalibela',
                morning: ['Depart for **Lalibela** (approx. 2-3 hours drive).'],
                afternoon: ['On the way, visit Yimerehane Kirstos church.'],
                evening: ['Overnight in Lalibela.'],
            },
            {
                day: 6,
                title: 'Lalibela Exploration',
                morning: ['Visit the famous rock-hewn churches of Lalibela, a UNESCO World Heritage site.'],
                afternoon: ['Continue exploring the complex of churches.'],
                evening: ['Dinner and overnight in Lalibela.'],
            },
            {
                day: 7,
                title: 'Lalibela Day Trip or Relaxation',
                morning: ['Optional day trip to a nearby monastery (e.g., Asheton Maryam) or time for rest and market exploration.'],
                afternoon: ['Lunch and free time.'],
                evening: ['Overnight in Lalibela.'],
            },
            {
                day: 8,
                title: 'Lalibela to Addis Ababa and Departure',
                morning: ['Fly back to Addis Ababa.'],
                afternoon: ['Last-minute shopping or sightseeing in Addis Ababa.'],
                evening: ['Farewell dinner. Transfer to the airport for your departure flight.'],
            },
        ],
        inclusions: [
            'Domestic flights (Addis Ababa - Mekele - Lalibela - Addis Ababa)',
            'All ground transportation in a comfortable vehicle',
            'Accommodation (hotels and lodges as specified)',
            'Meals as indicated in the itinerary',
            'Professional English-speaking guide',
            'Entrance fees to sites and national parks',
            'Camping equipment (for Danakil portion)',
        ],
        exclusions: [
            'International flights to/from Ethiopia',
            'Visa fees',
            'Travel insurance',
            'Personal expenses (souvenirs, snacks, etc.)',
            'Tips for guides and drivers',
            'Optional activities not mentioned in the itinerary',
        ],
    },
    ],
    coffeeBirding : [
        {
        id: 'FET31',
        name: '5-Day Ethiopian Coffee Plantation Tour',
        category: 'coffee_tour',
        image: omo,
        summary:
            "Experience the rich culture and heritage of Ethiopia, the birthplace of coffee. This 5-day tour takes you through lush coffee plantations, vibrant local markets, and stunning landscapes. Engage with local farmers, learn about traditional coffee-making processes, and savor some of the finest brews in the world. This immersive journey offers a unique blend of adventure, culture, and relaxation.",
        itinerary: [
            {
                day: 1,
                title: 'Arrival in Addis Ababa',
                morning: ['Arrive at Bole International Airport and transfer to your hotel.'],
                afternoon: ['Explore Addis Ababa, visiting the Ethnological Museum and Holy Trinity Cathedral.'],
                evening: ['Welcome dinner featuring traditional Ethiopian cuisine.', 'Accommodation: Overnight in Addis Ababa'],
            },
            {
                day: 2,
                title: 'Journey to Jimma',
                morning: ['Depart for Jimma, known for its rich coffee heritage (approximately 5 hours drive).'],
                afternoon: ['Visit the Jimma Coffee Research Center to learn about coffee cultivation and processing.'],
                evening: ['Enjoy a traditional coffee ceremony at a local family’s home.', 'Accommodation: Overnight in Jimma'],
            },
            {
                day: 3,
                title: 'Coffee Plantation Tour',
                morning: ['Visit a local coffee plantation. Participate in the harvesting process and learn about organic farming practices.'],
                afternoon: ['Enjoy a guided tour of the plantation, including coffee processing and roasting techniques.'],
                evening: ['Relax and enjoy a sunset view over the coffee fields.', 'Accommodation: Overnight in Jimma'],
            },
            {
                day: 4,
                title: 'Explore Local Culture',
                morning: ['Visit a nearby market to experience local life and purchase handmade crafts.'],
                afternoon: ['Participate in a cooking class focusing on traditional Ethiopian dishes.'],
                evening: ['Share your culinary creations with fellow travelers during a group dinner.', 'Accommodation: Overnight in Jimma'],
            },
            {
                day: 5,
                title: 'Return to Addis Ababa',
                morning: ['Depart Jimma and return to Addis Ababa.'],
                afternoon: ['Last-minute shopping at Mercato, one of Africa\'s largest open-air markets.'],
                evening: ['Transfer to Bole International Airport for departure.'],
            },
        ],
        inclusions: [
            'Accommodation (4 nights) in comfortable hotels',
            'Daily breakfast and selected meals',
            'Transportation throughout the tour (private vehicle)',
            'English-speaking guide',
            'Entrance fees to attractions',
            'Coffee plantation visits and tours',
            'Traditional Ethiopian cooking class',
            'Welcome dinner and farewell dinner',
            'Airport transfers',
        ],
        exclusions: [
            'International airfare',
            'Travel insurance',
            'Personal expenses (souvenirs, snacks, etc.)',
            'Tips for guides and drivers',
            'Any meals not mentioned in the itinerary',
        ],
    },
    {
        id: 'FET32',
        name: '7-Day Coffee Tour in Ethiopia',
        category: 'coffee_tour',
        image: omo,
        summary:
            "Embark on a captivating journey through the heart of Ethiopia, the birthplace of coffee. This 7-day itinerary takes you through the lush coffee-growing regions of Jimma, Bebeka, Mizan, Mankira, and Bonga. Experience the rich culture, stunning landscapes, and the intricate process of coffee cultivation and preparation. Enjoy local cuisine, visit traditional coffee ceremonies, and meet the passionate farmers who dedicate their lives to this beloved beverage.",
        itinerary: [
            {
                day: 1,
                title: 'Arrival in Addis Ababa',
                morning: ['Arrive in Addis Ababa.', 'Transfer to your hotel for check-in.'],
                afternoon: ['City tour including the National Museum and a local coffee shop.'],
                evening: ['Overnight in Addis Ababa.'],
            },
            {
                day: 2,
                title: 'Addis Ababa to Jimma',
                morning: ['Drive to Jimma (approx. 5 hours).', 'Visit the Jimma Coffee Research Center to learn about coffee varieties and cultivation methods.'],
                afternoon: ['Explore the local market and enjoy traditional Ethiopian lunch.'],
                evening: ['Overnight in Jimma.'],
            },
            {
                day: 3,
                title: 'Jimma to Bebeka',
                morning: ['Depart for Bebeka (approx. 2 hours).', 'Tour the Bebeka Coffee Plantation, one of the largest in the region.'],
                afternoon: ['Participate in a coffee tasting session and learn about organic coffee farming.'],
                evening: ['Overnight in Bebeka.'],
            },
            {
                day: 4,
                title: 'Bebeka to Mizan',
                morning: ['Travel to Mizan (approx. 1.5 hours).', 'Visit local coffee farms and engage with farmers about their practices.'],
                afternoon: ['Explore the Mizan Teferi town and its beautiful surroundings.'],
                evening: ['Overnight in Mizan.'],
            },
            {
                day: 5,
                title: 'Mizan to Mankira',
                morning: ['Journey to Mankira (approx. 2 hours).', 'Visit community cooperatives and learn about fair trade practices.'],
                afternoon: ['Participate in a traditional coffee ceremony with local families.'],
                evening: ['Overnight in Mankira.'],
            },
            {
                day: 6,
                title: 'Mankira to Bonga',
                morning: ['Depart for Bonga (approx. 1 hour).', 'Explore Bonga\'s lush landscapes and visit local coffee farms.'],
                afternoon: ['Enjoy a guided hike in the nearby forests known for their biodiversity.'],
                evening: ['Overnight in Bonga.'],
            },
            {
                day: 7,
                title: 'Bonga to Addis Ababa',
                morning: ['Return to Addis Ababa (approx. 7 hours).'],
                afternoon: ['Last-minute shopping at local markets for coffee and souvenirs.'],
                evening: ['Farewell dinner at a traditional Ethiopian restaurant.', 'Overnight in Addis Ababa or transfer to the airport for departure.'],
            },
        ],
        inclusions: [
            'Accommodation',
            'Daily breakfast and selected meals (as per itinerary)',
            'All transportation (private vehicle) during the tour',
            'English-speaking guide throughout the tour',
            'Entrance fees to all attractions mentioned',
            'Coffee tasting sessions and participation in traditional ceremonies',
            'Bottled water during travel',
        ],
        exclusions: [
            'International airfare to/from Ethiopia',
            'Visa fees',
            'Meals not mentioned in the itinerary',
            'Personal expenses (souvenirs, snacks, etc.)',
            'Gratuities for guides and drivers',
            'Travel insurance',
        ],
    },
    {
        id: 'FET33',
        name: '5-Day Ethiopian Coffee Tour',
        category: 'coffee_tour',
        image: omo,
        summary:
            "Embark on an unforgettable 5-day Ethiopian coffee tour that takes you through the heart of the coffee-growing regions of Yirgachefe, Yirgalem, Aletawendo, Awassa, and Wendogenet. This immersive journey will introduce you to the rich culture, breathtaking landscapes, and the world-renowned coffee that Ethiopia is famous for. Experience coffee tastings, traditional ceremonies, and explore local markets while engaging with local farmers and communities.",
        itinerary: [
            {
                day: 1,
                title: 'Arrival in Yirgachefe',
                morning: ['Arrive at Addis Ababa Bole International Airport.', 'Meet your guide and drive (approximately 5 Hour) to Yirgachefe, known for its high-quality Arabica coffee.'],
                afternoon: ['Check into your accommodation and enjoy a traditional Ethiopian lunch.'],
                evening: ['Visit a coffee farm at Aregash Lodge to learn about the coffee production process.', 'Participate in a traditional coffee ceremony.'],
            },
            {
                day: 2,
                title: 'Exploring Yirgachefe',
                morning: ['After breakfast, embark on a guided tour of the Yirgachefe Coffee Farmers\' Cooperative.', 'Discover the unique flavor profiles of Yirgachefe coffee.'],
                afternoon: ['Enjoy a scenic hike through the lush green hills of Yirgachefe.', 'Capture stunning views and enjoy a picnic lunch amidst nature.'],
                evening: ['Return to your accommodation for dinner and relax.'],
            },
            {
                day: 3,
                title: 'Yirgalem and Aletawendo',
                morning: ['Depart for Yirgalem. Visit the local markets and interact with local vendors selling spices and handicrafts.'],
                afternoon: ['Head to Aletawendo for a visit to another coffee plantation.', 'Participate in a hands-on coffee picking experience.'],
                evening: ['Depart for Awassa on the way visit local farmers and lifestyle.', 'Dinner at a local restaurant and enjoy traditional Ethiopian dishes.'],
            },
            {
                day: 4,
                title: 'Awassa',
                morning: ['After Breakfast visit the fish market along Lake Awassa and watch local fishermen at work.'],
                afternoon: ['Explore the Awassa Cultural Center and learn about the diverse ethnic groups in Ethiopia.', 'Enjoy lunch at a lakeside café.'],
                evening: ['Take a boat ride on Lake Awassa to witness stunning sunsets while enjoying a coffee tasting session on board.'],
            },
            {
                day: 5,
                title: 'Wendogenet and Departure',
                morning: ['Visit Wendogenet, known for its hot springs and beautiful landscapes.', 'Relax in the natural hot springs or take a short hike in the area.'],
                afternoon: ['Return to Awassa for lunch.', 'Afterward, enjoy some free time for last-minute shopping or exploration.'],
                evening: ['Transfer back to Addis Ababa for your departure flight.'],
            },
        ],
        inclusions: [
            'Accommodation throughout the tour',
            'All meals as specified in the itinerary',
            'Transportation in a comfortable vehicle',
            'Professional English-speaking guide',
            'Entrance fees to all attractions',
            'Coffee tasting experiences',
        ],
        exclusions: [
            'International airfare',
            'Travel insurance',
            'Personal expenses (souvenirs, snacks)',
            'Tips for guides and drivers',
            'Any meals not mentioned in the itinerary',
        ],
    },
    {
        id: 'FET34',
        name: '4-Day Ethiopian Coffee Tour Bonga & Keffa',
        category: 'coffee_tour',
        image: omo,
        summary:
            "Discover the birthplace of coffee on this captivating 4-day Ethiopian coffee tour that takes you through Bonga, the heart of the Keffa region, and the vibrant capital city of Addis Ababa. Experience the rich history of coffee, engage with local farmers, and savor the unique flavors of Ethiopian coffee. This journey will immerse you in the culture, traditions, and breathtaking landscapes of Ethiopia.",
        itinerary: [
            {
                day: 1,
                title: 'Arrival in Addis Ababa and Transfer to Jimma',
                morning: ['Arrive at Addis Ababa Bole International Airport.', 'Meet your guide and flight to Jimma airport and start to drive to Bonga, known for its lush coffee forests and rich biodiversity.'],
                afternoon: ['Check into your accommodation in Bonga and enjoy a traditional Ethiopian lunch.'],
                evening: ['Visit a local coffee farm to learn about coffee cultivation in the region.', 'Participate in a traditional coffee ceremony and savor freshly brewed coffee.'],
            },
            {
                day: 2,
                title: 'Exploring Bonga and Keffa',
                morning: ['After breakfast, embark on a guided tour of the Bonga Coffee Farmers\' Cooperative.', 'Discover the unique flavor profiles of Keffa coffee and its significance in Ethiopian culture.'],
                afternoon: ['Enjoy a scenic hike through the stunning landscapes of Keffa National Park, home to diverse flora and fauna.', 'Pack a picnic lunch to enjoy amidst nature.'],
                evening: ['Return to Bonga for dinner at a local restaurant featuring traditional Ethiopian cuisine.'],
            },
            {
                day: 3,
                title: 'Journey to Addis Ababa',
                morning: ['Depart Bonga and travel back to Addis Ababa.', 'On the way, stop at various coffee farms to interact with farmers and learn about their practices.'],
                afternoon: ['Arrive in Addis Ababa and check into your hotel.', 'Enjoy lunch at a popular local café known for its coffee specialties.'],
                evening: ['Visit the National Museum of Ethiopia to see the famous fossilized remains of Lucy.', 'End the day with a coffee tasting experience at a renowned café in the city.'],
            },
            {
                day: 4,
                title: 'Cultural Exploration and Departure',
                morning: ['Take a guided city tour of Addis Ababa.', 'Visit the Holy Trinity Cathedral and explore Mercato, one of Africa\'s largest open-air markets.'],
                afternoon: ['Enjoy lunch at a traditional restaurant and participate in an authentic Ethiopian coffee ceremony as a farewell experience.'],
                evening: ['Transfer to Addis Ababa Bole International Airport for your departure flight.'],
            },
        ],
        inclusions: [
            'Accommodation throughout the tour',
            'All meals as specified in the itinerary',
            'Transportation in a comfortable vehicle',
            'Professional English-speaking guide',
            'Entrance fees to all attractions',
            'Coffee tasting experiences',
        ],
        exclusions: [
            'International airfare',
            'Travel insurance',
            'Personal expenses (souvenirs, snacks)',
            'Tips for guides and drivers',
            'Any meals not mentioned in the itinerary',
        ],
    },
    {
        id: 'FET35',
        name: 'The Highlands and Rift Valley (8 Days)',
        category: 'birding_tour',
        image: omo,
        summary:
            "Discover the avian wonders of Ethiopia, home to over 800 species of birds, including numerous endemics and migratory visitors. Our expertly crafted birding tours will take you through diverse habitats, from the lush highlands to the arid lowlands, allowing you to witness the rich avian diversity of this enchanting country. With experienced guides and carefully selected locations, each tour promises an unforgettable experience for birdwatchers of all levels.",
        itinerary: [
            {
                day: 1,
                title: 'Arrival in Addis Ababa',
                morning: ['Arrive at Bole International Airport, Addis Ababa. Transfer to your hotel.'],
                afternoon: ['Birdwatching at Entoto Mountain; look for endemic species like the Ethiopian Bush Crow.'],
                evening: ['Overnight stay in Addis Ababa.'],
            },
            {
                day: 2,
                title: 'Addis Ababa to Debre Libanos',
                morning: ['Depart for Debre Libanos (approx. 2 hours drive).'],
                afternoon: ['Explore the church and surrounding areas; spot birds like the Blue-winged Goose and various raptors.'],
                evening: ['Overnight stay in Debre Libanos.'],
            },
            {
                day: 3,
                title: 'Debre Libanos to the Rift Valley',
                morning: ['Depart for the Rift Valley lakes (approx. 2 hours drive).'],
                afternoon: ['Birdwatching at Lake Awassa; look for African Fish Eagles and many waterbirds.'],
                evening: ['Overnight stay at a lodge by Lake Awassa.'],
            },
            {
                day: 4,
                title: 'Lake Awassa to Lake Abijatta',
                morning: ['Visit Lake Abijatta; enjoy birdwatching for flamingos and pelicans.'],
                afternoon: ['Explore the surrounding wetlands and grasslands.'],
                evening: ['Overnight stay at a lodge near Lake Abijatta.'],
            },
            {
                day: 5,
                title: 'Lake Abijatta to Bale Mountains National Park',
                morning: ['Depart for Bale Mountains National Park (approx. 4 hours drive).'],
                afternoon: ['Birdwatching in the park; look for the Ethiopian Bushbuck and endemics like the Bale Monkey.'],
                evening: ['Overnight stay in a lodge within the park.'],
            },
            {
                day: 6,
                title: 'Full Day in Bale Mountains National Park',
                morning: ['Explore various trails; focus on spotting birds such as the Blue-winged Goose and various endemic species.'],
                afternoon: [],
                evening: ['Overnight stay in Bale Mountains National Park.'],
            },
            {
                day: 7,
                title: 'Bale Mountains to Addis Ababa',
                morning: ['Depart for Addis Ababa (approx. 5 hours drive).'],
                afternoon: ['Visit local parks for last-minute birdwatching.'],
                evening: ['Farewell dinner and overnight stay in Addis Ababa.'],
            },
            {
                day: 8,
                title: 'Departure',
                morning: ['Transfer to the airport for your departure flight.'],
                afternoon: [],
                evening: [],
            },
        ],
        inclusions: [
            'Ground transportation throughout the tour',
            'Accommodation (7 nights)',
            'All meals during the tour',
            'Professional birding guide',
            'Entrance fees to national parks and reserves',
            'Birding checklist and field guides',
        ],
        exclusions: [
            'International flights to/from Ethiopia',
            'Visa fees',
            'Travel insurance',
            'Personal expenses (souvenirs, snacks, etc.)',
            'Tips for guides and staff',
        ],
    },
    {
        id: 'FET36',
        name: '7-Day Bird watching Tour: The Great Ethiopian Rift Valley',
        category: 'birding_tour',
        image: omo,
        summary:
            "A focused 7-day birdwatching tour exploring the rich avian life of the Great Ethiopian Rift Valley. This journey connects major water bodies like Lake Tana with the diverse habitats of the Simien Mountains and historical sites like Lalibela, providing excellent opportunities to spot numerous endemic and waterbird species.",
        itinerary: [
            {
                day: 1,
                title: 'Arrival in Addis Ababa',
                morning: ['Arrive at Bole International Airport, Addis Ababa. Transfer to your hotel.'],
                afternoon: ['Visit Entoto Mountain for birdwatching; look for endemic species.'],
                evening: ['Overnight stay in Addis Ababa.'],
            },
            {
                day: 2,
                title: 'Addis Ababa to Lake Tana',
                morning: ['Depart for Lake Tana (approx. 6 hours drive).'],
                afternoon: ['Birdwatching around the lake; spot waterbirds like African Jacanas and various herons.'],
                evening: ['Overnight stay at a lodge by Lake Tana.'],
            },
            {
                day: 3,
                title: 'Lake Tana to Simien Mountains National Park',
                morning: ['Depart for Simien Mountains National Park (approx. 4 hours drive).'],
                afternoon: ['Begin exploring the park; look for Gelada Baboons and birds like the Ethiopian Bush Crow.'],
                evening: ['Overnight stay in a lodge near the park.'],
            },
            {
                day: 4,
                title: 'Full Day in Simien Mountains National Park',
                morning: ['Trekking and birdwatching in the park; focus on spotting endemic birds and stunning landscapes.'],
                afternoon: [],
                evening: ['Overnight stay in Simien Mountains National Park.'],
            },
            {
                day: 5,
                title: 'Simien Mountains to Lalibela',
                morning: ['Depart for Lalibela (approx. 3 hours drive).'],
                afternoon: ['Birdwatch around Lalibela; look for various highland species.'],
                evening: ['Overnight stay in Lalibela.'],
            },
            {
                day: 6,
                title: 'Lalibela to Addis Ababa',
                morning: ['Visit local attractions and do some birdwatching before departing for Addis Ababa (approx. 8 hours drive).'],
                afternoon: [],
                evening: ['Farewell dinner and overnight stay in Addis Ababa.'],
            },
            {
                day: 7,
                title: 'Departure',
                morning: ['Transfer to the airport for your departure flight.'],
                afternoon: [],
                evening: [],
            },
        ],
        inclusions: [
            'Ground transportation throughout the tour',
            'Accommodation (6 nights)',
            'All meals during the tour',
            'Professional birding guide',
            'Entrance fees to national parks and reserves',
            'Birding checklist and field guides',
        ],
        exclusions: [
            'International flights to/from Ethiopia',
            'Visa fees',
            'Travel insurance',
            'Personal expenses (souvenirs, snacks, etc.)',
            'Tips for guides and staff',
        ],
    },
    {
        id: 'FET37',
        name: '8-Day Southern Ethiopia Birdwatching Tour',
        category: 'birding_tour',
        image: omo,
        summary:
            "An 8-day expedition into the lesser-explored southern regions of Ethiopia, focusing on unique dry-country species and the avian life around the Southern Rift Valley lakes, including Lake Chamo and the Yabello Wildlife Sanctuary. This tour offers a chance to see species like the Somali Ostrich and endemic birds of the Konso cultural landscape.",
        itinerary: [
            {
                day: 1,
                title: 'Arrival in Addis Ababa',
                morning: ['Arrive at Bole International Airport, Addis Ababa. Transfer to your hotel.'],
                afternoon: ['Visit local parks for introductory birdwatching.'],
                evening: ['Overnight stay in Addis Ababa.'],
            },
            {
                day: 2,
                title: 'Addis Ababa to Arba Minch',
                morning: ['Depart for Arba Minch (approx. 8 hours drive).'],
                afternoon: ['Birdwatching around Lake Chamo; look for African Fish Eagles and other waterbirds.'],
                evening: ['Overnight stay at a lodge by Lake Chamo.'],
            },
            {
                day: 3,
                title: 'Arba Minch to Nechisar National Park',
                morning: ['Visit Nechisar National Park; explore grasslands and wetlands.'],
                afternoon: ['Spot birds like the Lesser Flamingo and various raptors.'],
                evening: ['Overnight stay at a lodge near Nechisar.'],
            },
            {
                day: 4,
                title: 'Arba Minch to Konso',
                morning: ['Depart for Konso (approx. 2 hours drive).'],
                afternoon: ['Birdwatching in the Konso cultural landscape; look for endemic species.'],
                evening: ['Overnight stay in Konso.'],
            },
            {
                day: 5,
                title: 'Konso to Yabello',
                morning: ['Depart for Yabello (approx. 3 hours drive).'],
                afternoon: ['Explore Yabello Wildlife Sanctuary; spot birds like the Somali Ostrich and various dry-country species.'],
                evening: ['Overnight stay in Yabello.'],
            },
            {
                day: 6,
                title: 'Full Day in Yabello Wildlife Sanctuary',
                morning: ['Birdwatching throughout the sanctuary; focus on spotting unique species of southern Ethiopia.'],
                afternoon: [],
                evening: ['Overnight stay in Yabello.'],
            },
            {
                day: 7,
                title: 'Yabello to Addis Ababa',
                morning: ['Depart for Addis Ababa (approx. 8 hours drive).'],
                afternoon: ['Last-minute birdwatching opportunities in local parks.'],
                evening: ['Farewell dinner and overnight stay in Addis Ababa.'],
            },
            {
                day: 8,
                title: 'Departure',
                morning: ['Transfer to the airport for your departure flight.'],
                afternoon: [],
                evening: [],
            },
        ],
        inclusions: [
            'Ground transportation throughout the tour',
            'Accommodation (7 nights)',
            'All meals during the tour',
            'Professional birding guide',
            'Entrance fees to national parks and reserves',
            'Birding checklist and field guides',
        ],
        exclusions: [
            'International flights to/from Ethiopia',
            'Visa fees',
            'Travel insurance',
            'Personal expenses (souvenirs, snacks, etc.)',
            'Tips for guides and staff',
        ],
    },
    {
        id: 'FET38',
        name: '9-Day Northern Ethiopia Birdwatching Adventure',
        category: 'birding_tour',
        image: omo,
        summary:
            "A comprehensive 9-day birding adventure through Northern Ethiopia's most iconic destinations, including the historical cities of Gondar and Axum, the breathtaking highlands of the Simien Mountains, and the water-rich habitats of Lake Tana. This tour targets highland endemics, raptors, and diverse waterbird species across varied terrain.",
        itinerary: [
            {
                day: 1,
                title: 'Arrival in Addis Ababa',
                morning: ['Arrive at Bole International Airport, Addis Ababa. Transfer to your hotel.'],
                afternoon: ['Introductory birdwatching at Entoto Mountain.'],
                evening: ['Overnight stay in Addis Ababa.'],
            },
            {
                day: 2,
                title: 'Addis Ababa to Gondar',
                morning: ['Fly from Addis Ababa to Gondar.'],
                afternoon: ['Birdwatch around Gondar; spot birds such as the Blue-winged Goose.'],
                evening: ['Overnight stay in Gondar.'],
            },
            {
                day: 3,
                title: 'Gondar to Simien Mountains National Park',
                morning: ['Depart for Simien Mountains National Park (approx. 2 hours drive).'],
                afternoon: ['Begin birdwatching; look for Gelada Baboons and endemic birds.'],
                evening: ['Overnight stay at a lodge near Simien Mountains.'],
            },
            {
                day: 4,
                title: 'Full Day in Simien Mountains National Park',
                morning: ['Trekking and birdwatching; focus on spotting unique highland species.'],
                afternoon: [],
                evening: ['Overnight stay in Simien Mountains National Park.'],
            },
            {
                day: 5,
                title: 'Simien Mountains to Axum',
                morning: ['Depart for Axum (approx. 5 hours drive).'],
                afternoon: ['Explore Axum\'s historical sites and do some birdwatching nearby.'],
                evening: ['Overnight stay in Axum.'],
            },
            {
                day: 6,
                title: 'Axum to Lalibela',
                morning: ['Depart for Lalibela (approx. 5 hours drive).'],
                afternoon: ['Birdwatch around Lalibela; look for various highland species.'],
                evening: ['Overnight stay in Lalibela.'],
            },
            {
                day: 7,
                title: 'Lalibela to Bahir Dar',
                morning: ['Depart for Bahir Dar (approx. 6 hours drive).'],
                afternoon: ['Visit Lake Tana; enjoy birdwatching around the lake\'s islands.'],
                evening: ['Overnight stay at a lodge by Lake Tana.'],
            },
            {
                day: 8,
                title: 'Full Day at Lake Tana',
                morning: ['Explore Lake Tana\'s rich avian life; look for endemic birds and migratory species.'],
                afternoon: [],
                evening: ['Farewell dinner and overnight stay in Bahir Dar.'],
            },
            {
                day: 9,
                title: 'Departure from Addis Ababa',
                morning: ['Fly back to Addis Ababa for your departure flight.'],
                afternoon: [],
                evening: [],
            },
        ],
        inclusions: [
            'Ground transportation throughout the tour',
            'Accommodation (8 nights)',
            'All meals during the tour',
            'Domestic flights from Addis Ababa to Gondar and Bahir Dar',
            'Professional birding guide',
            'Entrance fees to national parks and reserves',
            'Birding checklist and field guides',
        ],
        exclusions: [
            'International flights to/from Ethiopia',
            'Visa fees',
            'Travel insurance',
            'Personal expenses (souvenirs, snacks, etc.)',
            'Tips for guides and staff',
        ],
    },
    ],
        festival: [
      {
        id: 'FET39',
        name: '4-Day Meskel Festival Tour in Gurage Zone',
        category: 'festival_tour',
        image: omo, // Corrected to string
        summary:
          "Meskel is a major religious festival celebrated by Ethiopian Orthodox Christians. It commemorates Saint Helena's discovery of the True Cross in the 4th century. The festival is marked by colorful processions, songs, dances, and the lighting of a large bonfire (Demera) symbolizing joy and faith. Communities come together to celebrate with feasting, sharing food, and engaging in cultural performances that highlight their rich heritage. Join us for a vibrant and culturally rich experience during the Meskel Festival in the Gurage Zone of Ethiopia. This 4-day tour will immerse you in the traditions and celebrations of one of Ethiopia's most significant religious festivals, commemorating the finding of the True Cross. Enjoy the warmth of local hospitality, explore stunning landscapes, and engage with the Gurage community as they celebrate this unique event.",
        itinerary: [
          {
            day: 1,
            title: 'Arrival in Addis Ababa and Transfer to Gurage Zone',
            morning: ['Arrive at Addis Ababa Bole International Airport. Meet your guide and transfer to the Gurage Zone, approximately a 3-hour drive from the capital.'],
            afternoon: ['Check into your accommodation in a local town within the Gurage Zone. Enjoy a traditional Ethiopian lunch featuring local specialties.'],
            evening: ['Attend a welcome dinner with a local family, where you will learn about the significance of Meskel and its customs.'],
          },
          {
            day: 2,
            title: 'Meskel Festival Celebrations',
            morning: ['After breakfast, participate in the Meskel celebrations. Join the local community as they gather to celebrate with singing, dancing, and colorful processions.'],
            afternoon: ['Enjoy a traditional feast prepared for the festival. Experience the unique rituals associated with Meskel, including the lighting of the bonfire (Demera), which symbolizes the finding of the True Cross.'],
            evening: ['Continue celebrating with local music and dance performances. Engage with community members to learn more about their traditions and stories related to Meskel.'],
          },
          {
            day: 3,
            title: 'Cultural Exploration and Local Attractions',
            morning: ['After breakfast, visit local historical sites and cultural landmarks in the Gurage Zone, such as ancient churches and traditional villages. Learn about the Gurage people\'s history and culture.'],
            afternoon: ['Enjoy lunch at a local restaurant. Participate in a workshop on traditional crafts or cooking, where you can learn how to prepare popular Gurage dishes.'],
            evening: ['Return to the festival area for an evening celebration filled with music, dance, and storytelling around the bonfire.'],
          },
          {
            day: 4,
            title: 'Return to Addis Ababa and Departure',
            morning: ['After breakfast, depart from the Gurage Zone and return to Addis Ababa. Stop at scenic viewpoints along the way for photo opportunities.'],
            afternoon: ['Arrive in Addis Ababa and enjoy lunch at a well-known restaurant. Take some time for last-minute shopping or sightseeing at places like Mercato or Entoto Hill.'],
            evening: ['Transfer to Addis Ababa Bole International Airport for your departure flight.'],
          },
        ],
        inclusions: [
          'Accommodation throughout the tour',
          'All meals as specified in the itinerary',
          'Transportation in a comfortable vehicle',
          'Professional English-speaking guide',
          'Entrance fees to all attractions',
          'Cultural workshops',
          'Participation in Meskel Festival activities',
        ],
        exclusions: [
          'International airfare',
          'Travel insurance',
          'Personal expenses (souvenirs, snacks)',
          'Tips for guides and drivers',
          'Any meals not mentioned in the itinerary',
        ],
      },
      {
        id: 'FET40',
        name: '4-Day Meskel Festival and Irreecha Tour',
        category: 'festival_tour',
        image: omo, // Corrected to string
        summary:
          "Meskel is a major religious festival celebrated by Ethiopian Orthodox Christians. It commemorates Saint Helena's discovery of the True Cross in the 4th century. The festival is marked by colorful processions, songs, dances, and the lighting of a large bonfire (Demera) symbolizing joy and faith. Communities come together to celebrate with feasting, sharing food, and engaging in cultural performances that highlight their rich heritage. Irreecha is an important cultural celebration for the Oromo people that marks the end of the rainy season and expresses gratitude for the harvest. It is celebrated with vibrant ceremonies involving songs, dances, and prayers by water bodies like lakes or rivers. Participants wear traditional attire and engage in communal feasting as they give thanks for blessings received throughout the year. The festival emphasizes unity, community spirit, and respect for nature. This 4-day itinerary takes you through Addis Ababa for Meskel celebrations and Debrezeit (Bishoftu) for Irreecha festivities.",
        itinerary: [
          {
            day: 1,
            title: 'Arrival in Addis Ababa',
            morning: ['Arrive at Addis Ababa Bole International Airport. Meet your guide and transfer to your hotel.'],
            afternoon: ['Enjoy a city tour, visiting key sites such as the National Museum of Ethiopia (home of Lucy), Holy Trinity Cathedral, and Mercato, one of Africa’s largest open-air markets.'],
            evening: ['Welcome dinner at a traditional Ethiopian restaurant featuring cultural music and dance performances.'],
          },
          {
            day: 2,
            title: 'Meskel Festival Celebrations in Addis Ababa',
            morning: ['After breakfast, head to Meskel Square to witness the vibrant celebrations. Join thousands of locals as they participate in processions, singing hymns, and dancing.'],
            afternoon: ['Experience the lighting of the Demera (bonfire), a central ritual symbolizing the finding of the True Cross. Enjoy traditional foods shared among festival-goers.'],
            evening: ['Continue celebrating with local music and dance performances. Engage with community members to learn more about the significance of Meskel in Ethiopian culture.'],
          },
          {
            day: 3,
            title: 'Travel to Debrezeit for Irreecha Festival',
            morning: ['Depart from Addis Ababa after breakfast and travel to Debrezeit (Bishoftu), a popular resort town located about an hour away.'],
            afternoon: ['Check into your accommodation and enjoy lunch featuring local cuisine. Explore the beautiful lakes around Debrezeit.'],
            evening: ['Attend a community gathering where locals prepare for the Irreecha festival. Participate in traditional activities such as coffee ceremonies and storytelling.'],
          },
          {
            day: 4,
            title: 'Irreecha Festival Celebrations in Debrezeit',
            morning: ['Participate in the Irreecha festival celebrations at one of the lakeside venues. Join locals dressed in traditional attire as they gather for prayers and thanksgiving rituals.'],
            afternoon: ['Enjoy a communal feast featuring traditional Oromo dishes. Experience cultural performances with music and dance celebrating nature and gratitude.'],
            evening: ['Engage with community elders who share stories about the history and significance of Irreecha to the Oromo people.'],
          },
        ],
        inclusions: [
          'Accommodation throughout the tour',
          'All meals as specified in the itinerary',
          'Transportation in a comfortable vehicle',
          'Professional English-speaking guide',
          'Entrance fees to all attractions',
          'Cultural workshops and community engagement',
          'Participation in Meskel and Irreecha festival activities',
        ],
        exclusions: [
          'International airfare',
          'Travel insurance',
          'Personal expenses (souvenirs, snacks)',
          'Tips for guides and drivers',
          'Any meals not mentioned in the itinerary',
        ],
      },
      {
        id: 'FET41',
        name: 'Genna Festival Tour in Northern Ethiopia',
        category: 'festival_tour',
        image: omo, // Corrected to string
        summary:
          "Genna is the Ethiopian Orthodox Christmas celebrated on January 7. It commemorates the birth of Jesus Christ and is marked by religious observances that include church services, prayers, and communal feasting. The festival is known for its unique traditions, such as wearing white garments (Shamma) by worshippers and engaging in traditional games like Gena. Families come together to celebrate with special meals and share stories of faith and community. The atmosphere is filled with joy, music, and dance as people express their gratitude and love for one another during this sacred time. Experience the magic of Genna, the Ethiopian Orthodox Christmas, during this immersive 4-day tour in Northern Ethiopia. This tour will take you to the historic towns of Gondar and Lalibela, where you will witness the rich traditions associated with Genna, engage with local communities, and enjoy the stunning landscapes of Northern Ethiopia.",
        itinerary: [
          {
            day: 1,
            title: 'Arrival in Gondar',
            morning: ['Arrive at Gondar Airport. Meet your guide and transfer to your hotel.'],
            afternoon: ['Explore Gondar, known for its medieval castles and churches. Visit the Royal Enclosure, Debre Birhan Selassie Church, and the famous Fasil Ghebbi.'],
            evening: ['Enjoy a welcome dinner featuring traditional Ethiopian cuisine and music.'],
          },
          {
            day: 2,
            title: 'Genna Celebrations in Gondar',
            morning: ['After breakfast, attend the Christmas Eve service at one of Gondar\'s historic churches. Experience the unique liturgical practices, including chanting and prayers that last throughout the night.'],
            afternoon: ['Join the local community for a traditional feast featuring Doro Wat (spicy chicken stew), injera (flatbread), and other festive dishes. Engage in conversations about the significance of Genna in their lives.'],
            evening: ['Participate in community festivities, including singing and dancing that celebrate the joyous occasion of Christmas.'],
          },
          {
            day: 3,
            title: 'Travel to Lalibela for Genna Celebrations',
            morning: ['Depart from Gondar after breakfast and travel to Lalibela, renowned for its rock-hewn churches. The journey offers breathtaking views of the Ethiopian Highlands.'],
            afternoon: ['Check into your accommodation and enjoy lunch. Visit some of Lalibela’s iconic churches such as Bet Medhane Alem and Bet Giyorgis.'],
            evening: ['Attend a community gathering where locals share stories about Genna and its importance in their culture.'],
          },
          {
            day: 4,
            title: 'Genna Festival Celebrations in Lalibela',
            morning: ['Participate in the grand Genna celebrations in Lalibela. Witness the colorful processions as worshippers gather for prayers and blessings at the rock-hewn churches.'],
            afternoon: ['Experience traditional gathering enjoy local delicacies served during the festival. Engage with community members celebrating together.'],
            evening: ['Conclude your tour with a farewell dinner featuring traditional music and dance performances that showcase Ethiopian culture.'],
          },
        ],
        inclusions: [
          'Accommodation throughout the tour',
          'All meals as specified in the itinerary',
          'Transportation in a comfortable vehicle',
          'Professional English-speaking guide',
          'Entrance fees to all attractions',
          'Participation in Genna festival activities',
          'Cultural workshops and community engagement',
        ],
        exclusions: [
          'International airfare',
          'Travel insurance',
          'Personal expenses (souvenirs, snacks)',
          'Tips for guides and drivers',
          'Any meals not mentioned in the itinerary',
        ],
      },
      {
        id: 'FET42',
        name: 'Timkat Festival Tour in Northern Ethiopia',
        category: 'festival_tour',
        image: omo, // Corrected to string
        summary:
          "Timkat is one of the most important religious festivals for Ethiopian Orthodox Christians, celebrating the baptism of Jesus Christ. The name \"Timkat\" means \"Epiphany\" in Ge'ez. The festival usually takes place on January 19 (or January 20 during leap years) and is marked by vibrant processions, prayers, and ceremonies. The highlight is the procession of the Tabot, which symbolizes the Ark of the Covenant. Communities come together to celebrate with singing, dancing, and feasting, reflecting their deep faith and cultural heritage. Join us for an unforgettable journey to Northern Ethiopia to experience. The festival is celebrated with vibrant processions, colorful attire, and spiritual ceremonies. This 4-day tour will take you through the historic cities of Gondar and Lalibela, where you’ll witness the rich traditions and deep spirituality associated with Timkat, engage with local communities, and enjoy the stunning landscapes of Northern Ethiopia.",
        itinerary: [
          {
            day: 1,
            title: 'Arrival in Gondar',
            morning: ['Arrive at Gondar Airport. Meet your guide and transfer to your hotel.'],
            afternoon: ['Explore Gondar, known for its medieval castles and churches. Visit the Royal Enclosure, Debre Birhan Selassie Church, and the famous Fasil Ghebbi.'],
            evening: ['Enjoy a welcome dinner featuring traditional Ethiopian cuisine and music.'],
          },
          {
            day: 2,
            title: 'Timkat Celebrations in Gondar',
            morning: ['After breakfast, join the locals at Fasil Ghebbi for the Timkat celebration. Witness the colorful processions as priests carry replicas of the Ark of the Covenant (Tabot) wrapped in beautiful cloth.'],
            afternoon: ['Participate in the ceremonial reenactment of Christ\'s baptism. Enjoy the vibrant atmosphere filled with singing, dancing, and traditional coffee ceremonies.'],
            evening: ['Gather with the community for a festive meal celebrating Timkat. Engage in conversations about the significance of the festival and its traditions.'],
          },
          {
            day: 3,
            title: 'Travel to Lalibela for Timkat Celebrations',
            morning: ['Depart from Gondar after breakfast and travel to Lalibela, famous for its rock-hewn churches. The journey offers breathtaking views of the Ethiopian Highlands.'],
            afternoon: ['Check into your accommodation and enjoy lunch. Explore some of Lalibela’s iconic churches such as Bet Medhane Alem and Bet Giyorgis.'],
            evening: ['Attend a community gathering where locals share stories about Timkat and its importance in their lives.'],
          },
          {
            day: 4,
            title: 'Timkat Festival Celebrations in Lalibela',
            morning: ['Participate in the grand Timkat celebrations in Lalibela. Join thousands of worshippers as they gather for prayers and blessings at the rock-hewn churches.'],
            afternoon: ['Experience the colorful processions and traditional rituals. Enjoy local delicacies served during the festival and engage with community members celebrating together.'],
            evening: ['Conclude your tour with a farewell dinner featuring traditional music and dance performances that showcase Ethiopian culture.'],
          },
        ],
        inclusions: [
          'Accommodation throughout the tour',
          'All meals as specified in the itinerary',
          'Transportation in a comfortable vehicle',
          'Professional English-speaking guide',
          'Entrance fees to all attractions',
          'Participation in Timkat festival activities',
          'Cultural workshops and community engagement',
        ],
        exclusions: [
          'International airfare',
          'Travel insurance',
          'Personal expenses (souvenirs, snacks)',
          'Tips for guides and drivers',
          'Any meals not mentioned in the itinerary',
        ],
      },
      {
        id: 'FET43',
        name: 'Easter Festival Tour in Northern Ethiopia',
        category: 'festival_tour',
        image: omo, // Corrected to string
        summary:
          "Fasika is the Ethiopian Orthodox celebration of Easter, symbolizing the resurrection of Jesus Christ. It follows a 55-day fasting period known as Lent, during which many Ethiopians abstain from animal products. The festival begins with Good Friday services that commemorate Christ's crucifixion and culminates in joyous Easter Sunday celebrations. Communities come together for church services filled with hymns and prayers, followed by festive meals shared among family and friends. Traditional foods like Doro Wat are prepared, and vibrant cultural expressions through music and dance fill the air with joy. Join us for a captivating 4-day tour to celebrate Fasika, the Ethiopian Orthodox Easter, in Northern Ethiopia. The festival is characterized by a blend of deep spiritual observance, vibrant community celebrations, and unique cultural traditions. This tour will take you through the historic towns of Lalibela and Gondar, where you will experience the rich customs associated with Fasika, enjoy traditional feasts, and engage with local communities.",
        itinerary: [
          {
            day: 1,
            title: 'Arrival in Lalibela',
            morning: ['Arrive at Lalibela Airport. Meet your guide and transfer to your hotel.'],
            afternoon: ['Explore the UNESCO World Heritage site of Lalibela, famous for its rock-hewn churches. Visit Bet Medhane Alem and Bet Giyorgis, learning about their historical significance.'],
            evening: ['Enjoy a welcome dinner featuring traditional Ethiopian cuisine and music.'],
          },
          {
            day: 2,
            title: 'Holy Week Observances in Lalibela',
            morning: ['After breakfast, attend the Good Friday service at one of Lalibela\'s churches. Experience the solemnity of the day with prayers, chanting, and rituals that commemorate the crucifixion of Christ.'],
            afternoon: ['Join the local community for a traditional meal that includes fasting foods such as injera and shiro (chickpea stew). Engage in discussions about the meaning of Fasika and its importance in their lives.'],
            evening: ['Participate in candlelight vigils and evening prayers, reflecting on the themes of sacrifice and redemption.'],
          },
          {
            day: 3,
            title: 'Easter Sunday Celebrations',
            morning: ['Celebrate Easter Sunday by attending a vibrant church service filled with joyous hymns and prayers. Witness the colorful processions as worshippers dress in white garments (Shamma) and gather for blessings.'],
            afternoon: ['Enjoy a festive communal feast featuring traditional dishes such as Doro Wat (spicy chicken stew) and special Easter breads. Engage with local families as they share their traditions and stories related to Fasika.'],
            evening: ['Experience local cultural performances including music and dance that celebrate the resurrection of Christ and the joy of the community.'],
          },
          {
            day: 4,
            title: 'Travel to Gondar and Farewell',
            morning: ['Depart from Lalibela after breakfast and travel to Gondar. Enjoy scenic views of the Ethiopian Highlands along the way.'],
            afternoon: ['Check into your accommodation and enjoy lunch. Visit Gondar’s Royal Enclosure and Debre Birhan Selassie Church, known for its stunning frescoes.'],
            evening: ['Conclude your tour with a farewell dinner featuring traditional Ethiopian dishes and live music, reflecting on your experiences during the Fasika celebrations.'],
          },
        ],
        inclusions: [
          'Accommodation throughout the tour',
          'All meals as specified in the itinerary',
          'Transportation in a comfortable vehicle',
          'Professional English-speaking guide',
          'Entrance fees to all attractions',
          'Participation in Fasika festival activities',
          'Cultural workshops and community engagement',
        ],
        exclusions: [
          'International airfare',
          'Travel insurance',
          'Personal expenses (souvenirs, snacks)',
          'Tips for guides and drivers',
          'Any meals not mentioned in the itinerary',
        ],
      },
      {
        id: 'FET44',
        name: 'Ethiopian Ashenda Festival Tour',
        category: 'festival_tour',
        image: omo, // Corrected to string
        summary:
          "Ashenda is a significant cultural festival celebrated primarily by young girls and women in Ethiopia. It marks the end of the fasting month of August and is associated with the Ethiopian New Year. The festival symbolizes renewal, joy, and community bonding. During Ashenda, girls dress in beautiful traditional clothing, sing songs celebrating their heritage, and engage in various festivities that strengthen social ties within their communities. Join us for a vibrant journey through Northern Ethiopia to celebrate Ashenda. This tour will immerse you in the rich traditions of the Amhara and Tigray regions, where you will experience the communal festivities, participate in local celebrations, and learn about the significance of this joyful occasion.",
        itinerary: [
          {
            day: 1,
            title: 'Arrival in Addis Ababa',
            morning: ['Arrive at Bole International Airport in Addis Ababa. Meet your guide and transfer to your hotel.'],
            afternoon: ['Rest and refresh after your journey. Attend an orientation session about the Ashenda festival and the itinerary.'],
            evening: ['Group dinner featuring traditional Ethiopian cuisine.'],
          },
          {
            day: 2,
            title: 'Travel to Gondar',
            morning: ['After breakfast, depart for Gondar (approximately 8 hours by bus). Enjoy scenic views of the countryside along the way.'],
            afternoon: ['Arrive in Gondar and check into your hotel. Visit the Royal Enclosure and explore the historical castles.'],
            evening: ['Dinner at a local restaurant with traditional music.'],
          },
          {
            day: 3,
            title: 'Celebrating Ashenda in Gondar',
            morning: ['Experience the Ashenda festival in Gondar. Join local girls as they dress in colorful traditional attire, carrying Ashenda (a type of flower) and singing songs that celebrate their culture.'],
            afternoon: ['Participate in community activities, including traditional dances and games. Enjoy a festive lunch with local families.'],
            evening: ['Witness evening celebrations with music and dance performances in the town square.'],
          },
          {
            day: 4,
            title: 'Travel to Axum',
            morning: ['Depart for Axum (approximately 6 hours by bus). Enjoy the scenic landscapes along the route.'],
            afternoon: ['Arrive in Axum and check into your hotel. Visit the famous stelae fields and learn about Axumite history.'],
            evening: ['Dinner at a local restaurant. Engage in discussions about the significance of Ashenda in Axum.'],
          },
          {
            day: 5,
            title: 'Ashenda Celebrations in Axum',
            morning: ['Join the local community in Axum for Ashenda celebrations. Experience traditional music, dance performances, and communal prayers.'],
            afternoon: ['Participate in workshops showcasing traditional crafts and cooking. Enjoy a festive lunch with local dishes.'],
            evening: ['Join a community feast where locals share stories about the meaning of Ashenda and its importance in their lives.'],
          },
          {
            day: 6,
            title: 'Return to Addis Ababa',
            morning: ['After breakfast, check out from your hotel and travel back to Addis Ababa (approximately 12 hours).'],
            afternoon: ['Free time for shopping or visiting other sites in Addis Ababa upon arrival.'],
            evening: ['Farewell dinner at a traditional Ethiopian restaurant with cultural performances.'],
          },
          {
            day: 7,
            title: 'Departure',
            morning: ['After breakfast, check out from your hotel. Reflect on your journey during your transfer to Bole International Airport for your departure flight.'],
            afternoon: [],
            evening: [],
          },
        ],
        inclusions: [
          'Accommodation throughout the tour (hotels in Addis Ababa, Gondar, and Axum)',
          'All meals as specified in the itinerary',
          'Transportation in comfortable vehicles',
          'Professional English-speaking guide',
          'Entry fees to all attractions',
          'Participation in Ashenda celebrations',
          'Community lunch experiences',
        ],
        exclusions: [
          'International airfare',
          'Travel insurance',
          'Personal expenses (souvenirs, snacks)',
          'Tips for guides and drivers',
          'Any meals not mentioned in the itinerary',
          'Visa fees (if applicable)',
        ],
      },
      {
        id: 'FET45',
        name: '6-Day Ethiopian Muslim Pilgrimage Tour Itinerary: Negashi Mosque and Sofumer Cave',
        category: 'pilgrimage_tour',
        image: omo, // Corrected to string
        summary:
          "Embark on a spiritual journey to Ethiopia, exploring the rich Islamic heritage of the country. This pilgrimage tour will take you to the historic Negashi Mosque, one of the oldest mosques in Ethiopia, and the sacred Sofumer Cave, known for its significance in Islamic history. Experience the cultural richness, local traditions, and the warm hospitality of the Ethiopian Muslim community as you engage in prayers, reflections, and community activities.",
        itinerary: [
          {
            day: 1,
            title: 'Arrival in Addis Ababa',
            morning: ['Arrive at Bole International Airport in Addis Ababa. Meet your guide and transfer to your hotel.'],
            afternoon: ['Rest and refresh after your journey. Attend an orientation session about the itinerary and the significance of the places you will visit.'],
            evening: ['Group dinner featuring traditional Ethiopian cuisine.'],
          },
          {
            day: 2,
            title: 'Travel to Negashi',
            morning: ['After breakfast, depart for Negashi (approximately 7 hours by bus). Enjoy scenic views of the Ethiopian countryside along the way.'],
            afternoon: ['Arrive in Negashi and check into your hotel. Visit the historic Negashi Mosque, which dates back to the 7th century, and learn about its significance in Ethiopian Islamic history.'],
            evening: ['Dinner at a local restaurant. Engage in discussions about the local Muslim community and their practices.'],
          },
          {
            day: 3,
            title: 'Pilgrimage Activities at Negashi',
            morning: ['Participate in morning prayers at Negashi Mosque. Spend time reflecting and connecting with fellow pilgrims.'],
            afternoon: ['Explore the surrounding area and engage with local community members. Participate in a workshop on traditional Islamic practices in Ethiopia.'],
            evening: ['Enjoy a communal dinner with local families, sharing stories and experiences.'],
          },
          {
            day: 4,
            title: 'Travel to Sofumer Cave',
            morning: ['Depart for Sofumer Cave (approximately 3 hours by bus). On arrival, take a guided tour of the cave, learning about its historical significance as a refuge for early Muslims.'],
            afternoon: ['Engage in spiritual reflection within the cave and participate in group prayers. Enjoy a packed lunch amidst nature.'],
            evening: ['Return to Negashi for dinner. Share insights from your day’s experiences.'],
          },
          {
            day: 5,
            title: 'Community Engagement and Return to Addis Ababa',
            morning: ['After breakfast, participate in community service activities within Negashi. Help with local projects that support the Muslim community.'],
            afternoon: ['Depart for Addis Ababa (approximately 7 hours). Arrive and check into your hotel.'],
            evening: ['Farewell dinner at a traditional Ethiopian restaurant with cultural performances.'],
          },
          {
            day: 6,
            title: 'Departure',
            morning: ['After breakfast, check out from your hotel. Reflect on your pilgrimage experience during your transfer to Bole International Airport for your departure flight.'],
            afternoon: [],
            evening: [],
          },
        ],
        inclusions: [
          'Accommodation throughout the tour (hotels in Addis Ababa and Negashi)',
          'All meals as specified in the itinerary',
          'Transportation in comfortable vehicles',
          'Professional English-speaking guide',
          'Entry fees to all attractions',
          'Participation in prayers and community activities',
          'Community service project engagement',
        ],
        exclusions: [
          'International airfare',
          'Travel insurance',
          'Personal expenses (souvenirs, snacks)',
          'Tips for guides and drivers',
          'Any meals not mentioned in the itinerary',
          'Visa fees',
        ],
      },
    ],
  },
];

export default tours;