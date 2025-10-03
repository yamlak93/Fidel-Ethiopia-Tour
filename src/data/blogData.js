import omo from '../assets/OmoVally.jpg';
// NOTE: For the purpose of this data structure, I am reusing the 'omo' image asset for all entries. In a real application, you would replace these with unique image imports for each article.
import lalibela from '../assets/Gena.jpg'; 
import danakil from '../assets/Lalibela.jpg';
import meskel from '../assets/Gena.jpg';
import simien from '../assets/Gena.jpg';

const blogData = [
  {
    id: 1,
    title: 'Ethiopian e-Visa Price Reduced',
    date: 'October 3, 2025',
    image: omo, // Reusing existing image for demonstration
    summary: 'The price of Ethiopia’s electronic tourist visa has dropped by $20. Here’s what travelers need to know.',
    content: `
The price of the electronic tourist visa (e-Visa) has just dropped. Whereas it used to cost US$82, the price of an e-Visa for tourism in Ethiopia is now **US$62**. The last revision of the ministerial online visa fee was in February 2023.

The other visa categories (Investment, Workshop/Conference, Journalist and Visa extension) remain at the same prices. Since last November, Ethiopia no longer issues 90-day long-stay electronic tourist visas, and only offers a visa for stays of up to **30 days**.

To apply:
1. Visit https://www.evisa.gov.et and click “Apply Now”.
2. Choose your visa type and validity (30 days single entry).
3. Fill in the form with passport and travel details.
4. Upload required documents (passport copy and photo).
5. Pay the visa fee online.
6. Receive your e-Visa via email within 3 working days.

Important:
- e-Visa holders must enter via **Addis Ababa Bole International Airport**.
- Passport must be valid for at least 6 months after return.
- Tourist e-Visa allows single entry only.
    `,
  },
  {
    id: 2,
    title: 'Lalibela\'s Rock-Hewn Churches: A Timeless Pilgrimage',
    date: 'September 28, 2025',
    image: lalibela,
    summary: 'Explore the 11 monolithic churches carved directly into the earth—Ethiopia\'s most revered spiritual and architectural wonder.',
    content: `
A visit to **Lalibela** is a journey back in time, centered on a spiritual marvel: eleven monolithic churches carved out of solid rock in the 12th century. This **UNESCO World Heritage Site** is not a museum but a living, breathing place of worship for the Ethiopian Orthodox Tewahedo Church.

The churches are divided into two main groups, connected by trenches and tunnels. The most famous, **Bete Giyorgis (Church of St. George)**, is a perfect cross carved deep into the ground.

Key Facts for Visitors:
* **Location:** Amhara Region, northern Ethiopia.
* **Best Time to Visit:** During the **Timkat** (Epiphany) festival in January for the most vibrant celebrations.
* **Architecture:** The churches were carved from the top down, a feat of engineering that remains a mystery to modern architects.
* **Significance:** King Lalibela intended to create a "New Jerusalem" for Christian pilgrims unable to travel to the Holy Land.
    `,
  },
  {
    id: 3,
    title: 'Ethiopia Inaugurates $10 Billion Ogaden LNG Project Phase I',
    date: 'October 2, 2025',
    image: omo,
    summary: 'Prime Minister Abiy Ahmed launches the initial phase of a major Liquified Natural Gas (LNG) project, signaling a massive push into the energy sector.',
    content: `
In a significant stride for its economic reform agenda, Ethiopia has inaugurated the first phase of the **Ogaden Liquified Natural Gas (LNG) Project** in the Somali region. This initial stage boasts an annual production capacity of **111 million liters** and also contributes to energy generation with a capacity of **1,000 megawatts**.

The project is a keystone of the nation's strategy to leverage its natural resources. The overall value of the entire associated infrastructure is pegged at **$10 billion**.

Economic Impact:
* **Energy Security:** The project aims to improve Ethiopia's domestic energy supply and reduce reliance on imports.
* **Investment Drive:** The launch is part of a broader, multi-billion dollar investment strategy in the energy and fertilizer sectors.
* **Future Plans:** The second phase of the project, already in motion, is expected to add a massive **1.33 billion liters** to the annual capacity.
    `,
  },
  {
    id: 4,
    title: 'Trekking the Simien Mountains: Home of the Gelada Baboon',
    date: 'September 20, 2025',
    image: simien,
    summary: 'Discover the "Roof of Africa" at Simien Mountains National Park, a UNESCO site famous for its dramatic peaks and endemic wildlife.',
    content: `
The **Simien Mountains National Park**, often called the "Roof of Africa," is a world of dramatic landscapes featuring soaring plateaus, deep gorges, and Africa's fourth-highest peak, **Ras Dashen** ($4,533\text{ meters}$). As a **UNESCO World Heritage Site**, it is a prime destination for trekkers and nature lovers.

The park is a critical habitat for several endemic species found nowhere else on earth.

Endemic Wildlife Highlights:
* **Gelada Baboons (Gelada):** Often seen in large groups, these unique primates are known for the bright red patch on their chests.
* **Walia Ibex:** A wild goat subspecies found only in the Simien Mountains.
* **Ethiopian Wolf:** Africa's rarest canid, often sighted hunting rodents in the Afro-alpine grasslands.

Trekking information:
* **Routes:** The park offers routes from day hikes to multi-day treks.
* **Logistics:** Guides and armed scouts are mandatory for all treks for safety and compliance.
    `,
  },
  {
    id: 5,
    title: 'Meskel Festival: Celebrating the Finding of the True Cross',
    date: 'September 27, 2025',
    image: meskel,
    summary: 'A vibrant look at Meskel, one of Ethiopia’s major religious festivals, marked by massive bonfires and colorful processions.',
    content: `
The annual **Meskel Festival**, celebrated on September 27th (Gregorian calendar), commemorates the **discovery of the True Cross** in the 4th century by Empress Helena. This two-day, colorful event is a highlight of the Ethiopian Orthodox Tewahedo calendar.

The main celebration begins on the eve with **Demera**, a spectacular lighting of a massive bonfire topped with a cross and adorned with the golden-yellow **Meskel Daisies**.

Festival Highlights:
* **Demera Ceremony:** The Patriarch of the Ethiopian Orthodox Church presides over the lighting of the bonfire, often held in **Meskel Square in Addis Ababa**.
* **Symbolism:** The burning wood symbolizes the smoke that led Empress Helena to the site where the Cross was buried.
* **The Day After:** On Meskel day, believers use the ashes from the Demera to mark their heads with the sign of the cross.
* **Timing:** The festival coincides with the mass blooming of the Meskel daisies, marking the end of the rainy season and the arrival of spring.
    `,
  },
  {
    id: 6,
    title: 'The Danakil Depression: Exploring Earth\'s Hottest Place',
    date: 'September 15, 2025',
    image: danakil,
    summary: 'Travel to one of the most geologically unique and extreme environments on Earth, featuring the Erta Ale volcano and the Dallol sulfur springs.',
    content: `
The **Danakil Depression**, a geological marvel formed by the junction of three tectonic plates, is often cited as one of the hottest places on Earth. Located in the Afar region, it offers landscapes that truly feel otherworldly.

The region is defined by its extreme geography, with the lowest point in Africa, **Dallol** ($116\text{ meters}$ below sea level), at its core.

Key Attractions:
* **Erta Ale Volcano:** Home to one of the world's few persistent **lava lakes**. Tours often involve a night trek to view the molten glow.
* **Dallol Sulfur Springs:** The site features vibrant, psychedelic landscapes created by mineral-rich hot springs, sulfur, and salt formations.
* **Salt Caravans:** Witness the ancient tradition of Afar people cutting and transporting salt blocks via camel caravans.

Travel Advisory:
* Due to the extreme heat and remote nature, tours must be organized through specialized, reputable agencies and include armed security.
    `,
  },
  {
    id: 7,
    title: 'Ethiopian Airlines Invests $150M in MRO Facilities',
    date: 'July 22, 2025',
    image: omo, // Reusing existing image for demonstration
    summary: 'Ethiopian Airlines inaugurates state-of-the-art Maintenance, Repair, and Overhaul (MRO) facilities, boosting its Vision2035 strategy.',
    content: `
Solidifying its status as Africa’s largest and most reliable aviation group, **Ethiopian Airlines (ET)** has officially opened **$150 million** worth of new, advanced aviation facilities. The inauguration includes new hangars, a sophisticated Aircraft Component Shop, and a modern Aircraft Parts Store.

This investment is a key part of the airline's **Vision2035** strategy, which focuses on enhancing its **Maintenance, Repair, and Overhaul (MRO)** capabilities to support its rapidly expanding fleet.

Strategic Significance:
* **Operational Efficiency:** The new facilities are expected to significantly reduce maintenance turnaround times.
* **Regional Hub:** The expansion reinforces Ethiopia’s position as a global MRO service provider.
* **Job Creation:** The project is anticipated to create new opportunities for technical expertise and innovation in the region.
* **Timeline:** The massive infrastructure project was completed in just two years.
    `,
  },
  {
    id: 8,
    title: 'Harar Jugol: The Walled City and Hyena Men',
    date: 'August 5, 2025',
    image: omo,
    summary: 'Discover Harar, a UNESCO World Heritage city, known for its ancient walls, 99 mosques, and the unique, century-old tradition of feeding wild hyenas.',
    content: `
Located in Eastern Ethiopia, the historic fortified city of **Harar Jugol** is a significant cultural landmark and the **fourth holiest city of Islam**. Enclosed by a defensive wall built between the 13th and 16th centuries, the city is famous for its intricate maze of narrow alleyways and traditional Harari houses.

Harar is an incredible destination for culture and history enthusiasts, but it is the city's unique nightly ritual that draws international attention.

The Hyena Men of Harar:
* **The Ritual:** Every night, outside the city walls, local men feed scraps of meat to wild spotted hyenas.
* **Centuries-Old Tradition:** This practice is said to have originated centuries ago as a means to prevent hyenas from attacking livestock.
* **Cultural Significance:** The feeding has created a unique tolerance between the city's inhabitants and the surrounding wildlife.

Harar is registered as a **UNESCO World Heritage Site** for its cultural traditions and urban landscape.
    `,
  },
  {
    id: 9,
    title: 'Axum: The Ancient Capital and Home of the Ark?',
    date: 'October 15, 2025',
    image: omo,
    summary: 'Explore the heart of the ancient Axumite Empire, home to towering stelae, royal tombs, and the chapel believed to hold the Ark of the Covenant.',
    content: `
**Axum** was the powerful capital of the Axumite Empire, one of the four great powers of the ancient world. Today, the city is an archaeological and spiritual treasure trove, recognized as a **UNESCO World Heritage Site**.

The most striking features are the massive **stelae or obelisks**, carved granite monoliths that served as markers for royal tombs. The largest standing obelisk is over $24\text{ meters}$ tall.

Spiritual Significance:
* **St. Mary of Zion Church (Tsion Mariam):** This church complex is Ethiopia's most sacred religious site.
* **Ark of the Covenant:** The Chapel of the Tablet, within the complex, is believed by the Ethiopian Orthodox Tewahedo Church to house the original **Ark of the Covenant**.
* **Other Sites:** Visitors can also explore the ruins of **Queen of Sheba's Palace** (Dongar) and the tombs of ancient kings.
    `,
  },
  {
    id: 10,
    title: 'The Great Ethiopian Rift Valley Lakes: Birding Paradise',
    date: 'August 28, 2025',
    image: omo,
    summary: 'Travel through the Ethiopian Rift Valley and explore a string of beautiful lakes famed for their incredible birdlife and serene landscapes.',
    content: `
The **Great African Rift Valley** carves a path through Ethiopia, creating a chain of beautiful freshwater and alkaline lakes that are a haven for endemic and migratory bird species. This "Southern Route" is a byword for scenic splendor and superb bird-watching.

The lakes are easily accessible from Addis Ababa and offer a relaxing contrast to the historical circuit.

Featured Lakes:
* **Lake Ziway:** Famous for its four volcanic islands and rich fish life.
* **Lake Langano:** A popular tourist spot for swimming, as it is one of the few Rift Valley lakes free of bilharzia.
* **Lake Awassa:** Bordering the city of Awasa, the lake offers a vibrant fish market and easy access to birding opportunities.

The area is also a major draw for observing the **Great Rift Valley's geological activity** and stunning Highland scenery.
    `,
  },
  {
    id: 11,
    title: 'Ethiopia Unveils New Civil Service Salary Scale',
    date: 'October 2, 2025',
    image: omo,
    summary: 'The government announces a significant increase in pay for public servants, with the new salary scale ranging from 6,000 to 50,000 Birr.',
    content: `
In a move aimed at improving the living standards of its workforce and retaining talent, the Ethiopian government has introduced a **new civil service salary scale**. The increase is significant, with the minimum salary rising to **6,000 Birr** and the maximum reaching **50,000 Birr**.

This pay rise is part of broader macroeconomic reforms and is expected to have a notable impact on the economy.

Key Details:
* **Impact:** The salary hike is a substantial boost for public sector employees across all levels.
* **Funding:** The total increase for public servants is estimated at **160 billion Birr**.
* **Context:** This initiative comes amid an ongoing commitment to the **Homegrown Economic Reform Agenda**, though critics suggest it may add to inflationary pressures.
* **Timing:** The new scale takes effect as Ethiopia continues its push for financial and economic stability.
    `,
  },
  {
    id: 12,
    title: 'Gondar: The Camelot of Africa',
    date: 'September 1, 2025',
    image: omo,
    summary: 'Explore the Fasil Ghebbi complex in Gondar, a UNESCO site of imperial castles and fortifications from the 17th century Ethiopian Empire.',
    content: `
**Gondar**, once the imperial capital of Ethiopia, is famously known as the **"Camelot of Africa"**. The city’s main attraction is the magnificent **Fasil Ghebbi**, a fortified complex that served as the residence of Ethiopian emperors from the 17th to the 18th century.

This **UNESCO World Heritage Site** features several palaces, castles, and other buildings constructed by six successive emperors, blending African, Moorish, and Baroque architectural styles.

Must-See Sites:
* **Fasilides Castle:** The most famous and oldest castle in the enclosure.
* **Fasilides' Bath:** A large ceremonial pool, famously the site of the colorful **Timkat** (Epiphany) festival celebrations.
* **Debre Berhan Selassie Church:** Located nearby, it is famous for its ceiling covered with painted winged cherubs.

Gondar is a vital stop on the historical circuit, offering a glimpse into the Solomonic dynasty's golden age.
    `,
  },
  {
    id: 13,
    title: 'Timkat Festival: A Three-Day Epiphany Celebration',
    date: 'January 19, 2025',
    image: omo,
    summary: 'The biggest, most colorful festival in Ethiopia is Timkat, celebrating the baptism of Christ with a spectacular, three-day water procession.',
    content: `
**Timkat**, the Ethiopian Epiphany, is a Christian festival of immense religious and cultural significance, held annually on **January 19th** (or 20th in a leap year). The three-day event is widely considered the most vibrant and colorful celebration in Ethiopia, commemorating the baptism of Jesus Christ.

The main spectacle involves the replica of the **Ark of the Covenant (Tabot)** being carried in a massive procession to a body of water.

Highlights of the Celebration:
* **Ketera (Eve of Timkat):** Priests carry the Tabots from every church, covered in rich cloth, to a designated pool or river.
* **The Baptism Re-enactment:** Early on Timkat day, after a night-long vigil, the water is blessed. Worshippers renew their baptismal vows, and the water is sprinkled over the crowd.
* **Return Procession:** The Tabots are escorted back to their churches with singing, dancing, and traditional drumming, as pilgrims wear their finest traditional clothing.
* **Best Place to Watch:** While celebrated nationwide, the festivities at **Gondar's Fasilides' Bath** are particularly famous.
    `,
  },
  {
    id: 14,
    title: 'New Tax on Petroleum: 30% VAT and Excise Duty Implemented',
    date: 'September 28, 2025',
    image: omo,
    summary: 'The Ministry of Finance confirms the full implementation of a combined 30% tax on petroleum products for the new fiscal year.',
    content: `
Ethiopia's fiscal policy has undergone a major shift with the implementation of a combined **30 percent tax on petroleum products** for the 2025/26 fiscal year. This new tax structure comprises a **15 percent Value-Added Tax (VAT)** and a **15 percent excise duty**.

This move is a core component of the government's efforts to curb public spending, phase out fuel subsidies, and align with the Homegrown Economic Reform Agenda.

Economic Concerns:
* **Inflationary Pressure:** Experts warn that the tax increase risks exacerbating already elevated inflation, as fuel costs affect transportation, manufacturing, and agriculture.
* **Policy Goal:** The government aims to generate significant revenue and correct market distortions caused by long-standing subsidies.
* **Impact on Consumers:** The change places a substantial new financial burden on both consumers and businesses.
* **Fuel Prices:** Despite the new tax, pump prices for most petroleum products remained unchanged *at the time of the announcement* due to other subsidy-related adjustments.
    `,
  },
  {
    id: 15,
    title: 'The Omo Valley: A Cultural Mosaic of Southern Tribes',
    date: 'November 10, 2025',
    image: omo,
    summary: 'The remote Lower Omo Valley is a cultural hotspot, home to over 88 diverse ethnic communities and unique traditional practices.',
    content: `
The **Lower Omo Valley** in Southern Ethiopia is a region of extraordinary cultural diversity, often described as a living ethnographic museum. The area hosts numerous unique tribes, each with distinct languages, customs, and forms of body adornment.

The valley and the associated archaeological sites are recognized by **UNESCO** for their anthropological significance.

Notable Tribes:
* **Mursi and Suri (Surma):** Famous for the women who wear large, circular clay plates in their lower lips.
* **Hamer (Hamar):** Known for their elaborate body paint, clay hair buns, and the traditional **Bull Jumping** coming-of-age ceremony.
* **Karo:** Renowned for their intricate and elaborate body painting for ceremonial dress.

Visitor Experience:
* The Omo Valley offers deep cultural immersion, allowing visitors to experience traditional ways of life that have remained largely unchanged for centuries.
* Travel in this region requires a specialized tour operator and local guides due to its remoteness.
    `,
  },
  {
    id: 16,
    title: 'Ethiopia Attains WHO Maturity Level 3 for Drug Regulation',
    date: 'October 2, 2025',
    image: omo,
    summary: 'A major milestone in the health sector: Ethiopia has achieved WHO Maturity Level 3, certifying the stability of its drug regulatory system.',
    content: `
Ethiopia has reached a significant benchmark in its health sector development by attaining **World Health Organization (WHO) Maturity Level 3 (ML3)** for its national drug regulatory system. This certification is a global recognition of the country's commitment to public health.

WHO ML3 status means that the country has established a **stable, well-functioning, and integrated regulatory system** that guarantees the quality, safety, and effectiveness of medicines and medical devices.

Implications:
* **International Confidence:** The recognition boosts international confidence in Ethiopian-manufactured medical products.
* **Economic Benefit:** It supports the government’s efforts to increase **import substitution** and encourage local medicine manufacturers.
* **African Leadership:** Ethiopia joins a select group of African nations with this rating, setting an example for continental regulatory excellence.
    `,
  },
  {
    id: 17,
    title: 'Gheralta Mountains: The Churches on the Cliff Face',
    date: 'November 25, 2025',
    image: omo,
    summary: 'Hike the dramatic red sandstone cliffs of the Gheralta Mountains to discover hidden, ancient rock-hewn churches, some accessible only by climbing.',
    content: `
The **Gheralta Mountains** in the Tigray region offer one of Ethiopia's most breathtaking landscapes and a remarkable religious pilgrimage. The imposing, weathered red rock cliffs are home to dozens of ancient **rock-hewn churches**, most dating back to the 4th to 15th centuries.

These churches were deliberately carved into the cliff faces for isolation and protection, creating an unforgettable visitor experience.

The Most Famous:
* **Abuna Yemata Guh:** Known for its stunning interior frescoes and its notoriously difficult access, which requires a sheer, vertical climb up the rock face.
* **Maryam Korkor:** Offers panoramic views after a challenging but manageable hike, and features beautiful paintings inside.

The region is a treasure for adventurous travelers and those interested in the earliest forms of Christian architecture.
    `,
  },
  {
    id: 18,
    title: 'Ethiopia’s Plan for EV-Only Industrial Park',
    date: 'September 12, 2025',
    image: omo,
    summary: 'The federal government is planning to establish a dedicated industrial park focused solely on the manufacturing of Electric Vehicles (EVs).',
    content: `
As part of its national **green transportation campaign**, the Ethiopian federal government is advancing a proposal to create an **industrial park dedicated exclusively to Electric Vehicle (EV) manufacturing**. This initiative underscores Ethiopia's commitment to sustainable development and technological advancement in the automotive sector.

The plan aims to attract foreign direct investment and foster a domestic EV industry.

Goals of the Project:
* **Sustainable Transport:** To transition the country's transportation sector towards lower-emission alternatives.
* **Industrialization:** To build local manufacturing capacity and move beyond assembly.
* **Innovation Ecosystem:** The park is intended to spur related innovation and job creation in high-tech fields.

This move aligns with global trends and positions Ethiopia to become a regional leader in electric mobility.
    `,
  },
  {
    id: 19,
    title: 'Bale Mountains National Park: Land of Endemism',
    date: 'October 8, 2025',
    image: omo,
    summary: 'Explore the high-altitude Bale Mountains, a stunning wilderness and biodiversity hotspot that shelters numerous Ethiopian endemic species.',
    content: `
The **Bale Mountains National Park**, situated in southeastern Ethiopia, is a jewel of African biodiversity and a must-visit for wildlife enthusiasts. This park is known as the **"Land of Endemism"** because of its high number of species found nowhere else. The park features a diverse landscape ranging from rainforest to high-altitude moorland.

The Bale Mountains are a proposed **UNESCO World Heritage Site**.

Key Endemic Mammals:
* **Ethiopian Wolf:** The most iconic resident, the world’s rarest canid and one of the world's most endangered carnivores.
* **Mountain Nyala:** A magnificent spiral-horned antelope, found only in the Ethiopian highlands.
* **Menelik’s Bushbuck:** A subspecies of bushbuck endemic to the country.

Visitors can enjoy trekking across the vast Sanetti Plateau, home to the highest all-weather road in Africa, offering incredible chances for wildlife viewing.
    `,
  },
  {
    id: 20,
    title: 'Irreechaa Festival: The Oromo Thanksgiving Celebration',
    date: 'September 29, 2025',
    image: omo,
    summary: 'A look at the vibrant Irreechaa, the annual thanksgiving festival of the Oromo people, celebrating the transition from the rainy season to the harvest season.',
    content: `
**Irreechaa (or Irreessaa)** is one of the most important and distinct cultural festivals in Ethiopia, celebrated by the **Oromo people**. This annual thanksgiving celebration marks the end of the rainy season (winter) and the coming of the harvest season (spring).

It is a time for the Oromo to give thanks to their God (Waaqa) for the blessings of the past year and to pray for a good year ahead.

Celebration Details:
* **Timing:** Traditionally held in late September or early October.
* **Location:** The main celebration is often held at **Lake Hora Arsedi** in Bishoftu (Debre Zeit), though large regional events also occur.
* **Ritual:** Participants carry bouquets of green grass and wildflowers and immerse them in the water, symbolizing fertility and new life.
* **Cultural Significance:** The festival attracts millions of participants, dressed in traditional attire, making it one of the largest public gatherings in the country.
    `,
  },
];

export default blogData;