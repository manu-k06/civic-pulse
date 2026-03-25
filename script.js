    // ===================================================================
    //  GAME DATA
    // ===================================================================

    const ROUNDS = [
      {
        id: 1,
        title: "Air Quality Emergency",
        desc: "Bharatnagar's AQI has crossed 400 (Hazardous). Schools are closed. Citizens are protesting. Factories blame each other. You must act immediately.",
        sdgs: ["SDG 3 · Good Health & Wellbeing", "SDG 11 · Sustainable Cities", "SDG 13 · Climate Action"],
        realData: [
          { label: "Delhi AQI, Nov 2023", val: "450+" },
          { label: "Indian cities in top 30 most polluted", val: "22 of 30" },
          { label: "Deaths/year from air pollution (India)", val: "~16 lakh" },
          { label: "Industries violating norms (India)", val: "~60%" },
        ],
        choices: [
          {
            icon: "🏭",
            title: "Shut Down 40 Factories",
            desc: "2-week closure of 40 top polluters. Fast relief, but industry pushback.",
            effects: ["+Health", "+Happiness", "-Budget", "–Pollution"],
            volunteerBonus: 5,
            outcome: "The AQI dropped to 180 in 10 days. Citizens breathed easier. But 12,000 workers lost wages and industrialists filed protests. Your treasury took a ₹240 crore hit in lost taxes. Public Trust organised meal camps for displaced workers — your network grew.",
            deltas: { health: 15, pollution: -20, happiness: 8, budget: -15, volunteer: 5 }
          },
          {
            icon: "🌱",
            title: "Green Transition Incentive",
            desc: "₹50 cr subsidies for industries going clean. Slow burn, lasting gain.",
            effects: ["+Health (slow)", "+Budget long-term", "±Pollution"],
            volunteerBonus: 8,
            outcome: "18 factories signed up immediately. AQI only dropped to 320 over 3 months — slow progress, but factories stayed open. The community monitors trained as pollution monitors, becoming citizen watchdogs. International media praised your approach.",
            deltas: { health: 6, pollution: -8, happiness: 3, budget: -8, volunteer: 8 }
          },
          {
            icon: "🚌",
            title: "Emergency Bus Fleet Expansion",
            desc: "300 electric buses on the streets now. Cuts vehicle smog, not factory smoke.",
            effects: ["+Happiness", "−Pollution (partial)", "−Budget"],
            volunteerBonus: 3,
            outcome: "Traffic pollution fell 15%. But industrial smog continued. Citizens liked the buses — happiness spiked among commuters. Buses became a symbol of civic pride. Community groups decorated terminals with murals.",
            deltas: { health: 3, pollution: -4, happiness: 8, budget: -18, volunteer: 2 }
          },
          {
            icon: "📋",
            title: "Commission a 3-Month Study",
            desc: "Expert committee studies the crisis for 3 months. Safe — but slow.",
            effects: ["−Happiness", "+Info", "Status quo"],
            volunteerBonus: 0,
            outcome: "Citizens were furious. 'Study this!' became a protest slogan. The AQI stayed at 380. The expert report, when it came, was excellent — but public trust fell sharply. Next challenge will be harder.",
            deltas: { health: -12, pollution: 8, happiness: -18, budget: 5, volunteer: -8 }
          }
        ]
      },
      {
        id: 2,
        title: "Slum Sanitation Crisis",
        desc: "Dharavi-West, home to 400,000 residents, has no proper sewage. Cholera cases are rising. An NGO and a developer both want to help — with very different agendas.",
        sdgs: ["SDG 3 · Good Health", "SDG 6 · Clean Water & Sanitation", "SDG 11 · Inclusive Cities"],
        realData: [
          { label: "Indians without basic sanitation", val: "~600M" },
          { label: "Swachh Bharat Mission toilets built", val: "110M+" },
          { label: "Cholera cases in India (2023)", val: "~1,800" },
          { label: "Urban slum dwellers (India)", val: "~65M" },
        ],
        choices: [
          {
            icon: "🤝",
            title: "Partner with Janshakti NGO",
            desc: "Community-led toilets & sewage. Residents own the fix. ₹30 cr, 8 months.",
            effects: ["+Health", "+Public Trust", "+Happiness", "−Budget"],
            volunteerBonus: 15,
            outcome: "1,200 community toilets built in 8 months. Janshakti trained 400 local sanitation workers — many of them women. Cholera cases dropped 80%. Residents celebrated with a 'Clean Dharavi-West' festival. Your public trust exploded.",
            deltas: { health: 18, pollution: -5, happiness: 14, budget: -10, volunteer: 15 }
          },
          {
            icon: "🏗️",
            title: "Accept Developer's Offer",
            desc: "Developer builds flats, relocates residents 15 km out. Modern — but displacing.",
            effects: ["+Budget (short-term)", "−Happiness", "−Public Trust", "±Health"],
            volunteerBonus: -5,
            outcome: "Residents were forcibly relocated. 40% found the new homes too far from work — many returned to squatting. Health improved marginally but social fabric tore. Protests turned violent. You gained ₹80 crore in taxes but lost public trust. Community engagement fell.",
            deltas: { health: -5, pollution: 0, happiness: -22, budget: 18, volunteer: -10 }
          },
          {
            icon: "🚿",
            title: "Government Sanitation Drive",
            desc: "State engineers build toilets fast. Quick results, but no community buy-in.",
            effects: ["+Health (moderate)", "−Budget", "±Public Trust"],
            volunteerBonus: 2,
            outcome: "Toilets were built quickly but residents didn't feel ownership — many were misused or blocked. Still, cholera cases dropped 50%. Engineers complained about corruption in supply chains; ₹18 crore went unaccounted. Mixed result.",
            deltas: { health: 5, pollution: 2, happiness: -8, budget: -22, volunteer: -3 }
          },
          {
            icon: "💧",
            title: "Emergency Water Tankers + Chlorination",
            desc: "Tankers + chlorination now. Stops the outbreak — doesn't fix the root.",
            effects: ["+Health (temp)", "−Budget (small)", "−Happiness (long-term)"],
            volunteerBonus: 1,
            outcome: "The cholera outbreak was controlled — 200 lives saved immediately. But residents are angry: 'same tankers every year!' The underlying problem festers. You'll face a harder health crisis next challenge if structural work isn't done.",
            deltas: { health: -8, pollution: 5, happiness: -14, budget: -3, volunteer: -5 }
          }
        ]
      },
      {
        id: 3,
        title: "Budget Crunch & School Collapse",
        desc: "A government school in Sector 7 collapsed injuring 22 students. 400 more schools need urgent inspection. The state government cut your city's funds by 30%. What do you prioritise?",
        sdgs: ["SDG 4 · Quality Education", "SDG 11 · Safe Infrastructure", "SDG 16 · Institutions"],
        realData: [
          { label: "India school buildings needing repair", val: "~2.7 lakh" },
          { label: "Children in unsafe school structures", val: "~4.4 crore" },
          { label: "Annual education budget (state/pupil)", val: "₹5,000–₹40,000" },
          { label: "Out-of-school children (India)", val: "~3.2 crore" },
        ],
        choices: [
          {
            icon: "🏫",
            title: "Emergency School Safety Fund",
            desc: "Divert ₹120 cr from road works. Inspect & repair all 400 schools in 6 months.",
            effects: ["+Happiness", "+Health", "−Budget", "−Public Trust"],
            volunteerBonus: 10,
            outcome: "All 400 schools inspected. 87 needed urgent repairs. Parents formed community inspection committees — they're now a permanent safety watchdog. 3 roads stayed narrower, causing traffic complaints, but school safety became a city trademark.",
            deltas: { health: 10, pollution: 0, happiness: 16, budget: -20, volunteer: 10 }
          },
          {
            icon: "📱",
            title: "Crowdfund via Civic App",
            desc: "'Fix My School' app — citizens donate to their own school. Partial but people-powered.",
            effects: ["+Public Trust", "+Happiness", "±Budget", "+Health (partial)"],
            volunteerBonus: 20,
            outcome: "₹43 crore raised in 60 days — a record for Indian municipal crowdfunding. 130 schools repaired. Parents became long-term school committee members. The app became a national model. But 270 schools still need work — the gap is real.",
            deltas: { health: 7, pollution: 0, happiness: 12, budget: 5, volunteer: 20 }
          },
          {
            icon: "🏦",
            title: "Apply for World Bank Education Loan",
            desc: "₹400 cr World Bank loan for all 400 schools. Right move — takes 18 months.",
            effects: ["+Health (long)", "−Budget (debt)", "+Happiness (delayed)", "Delay risk"],
            volunteerBonus: 3,
            outcome: "The loan was approved — 14 months later. During the wait, 3 more schools had minor structural incidents. The resulting ₹400 crore rebuilt 350 schools beautifully. Debt will affect the city budget for 8 years, but the transformation is real.",
            deltas: { health: 14, pollution: 0, happiness: 6, budget: -10, volunteer: 3 }
          },
          {
            icon: "🏚️",
            title: "Relocate Students to Rented Spaces",
            desc: "Rent commercial spaces for classes now. Kids are safe — schools stay broken.",
            effects: ["−Budget (ongoing)", "−Happiness", "−Health (long-term)", "+time"],
            volunteerBonus: 0,
            outcome: "Students relocated safely in 2 weeks. But rented spaces were substandard — poor ventilation, no playgrounds. Learning outcomes dropped. Teachers complained. Parents organised protests. Schools are still broken. This just kicked the can down the road.",
            deltas: { health: -10, pollution: 3, happiness: -20, budget: -10, volunteer: -8 }
          }
        ]
      },
      {
        id: 4,
        title: "Flood Preparedness vs. Stadium",
        desc: "Monsoon season arrives. Your flood drainage system is 40 years old. A corporate sponsor is offering ₹300 crore to build a cricket stadium — but on the land reserved for a storm water retention lake.",
        sdgs: ["SDG 13 · Climate Action", "SDG 11 · Resilient Cities", "SDG 9 · Infrastructure"],
        realData: [
          { label: "Urban flood losses in India (2022)", val: "₹22,000 crore" },
          { label: "Indians displaced by floods/year", val: "~4 crore" },
          { label: "Bengaluru flood damage (2022)", val: "₹28,000 crore" },
          { label: "India sports infrastructure investment", val: "₹2,000 crore/year" },
        ],
        choices: [
          {
            icon: "🌊",
            title: "Build the Retention Lake",
            desc: "Use city reserves to build a flood buffer lake + 60 km upgraded drainage.",
            effects: ["+Health", "+Happiness (long-term)", "−Budget", "−Short-term popularity"],
            volunteerBonus: 12,
            outcome: "That monsoon season, Bharatnagar had zero major flooding while neighbouring cities drowned. 18,000 homes were protected. The lake became a public park — a beloved civic space. Community naturalist groups adopted it. International recognition followed.",
            deltas: { health: 12, pollution: -8, happiness: 10, budget: -18, volunteer: 12 }
          },
          {
            icon: "🏟️",
            title: "Accept the Stadium Deal",
            desc: "₹300 cr from SportsCorp for a cricket stadium. Budget boost, flood risk grows.",
            effects: ["+Budget", "+Short-term happiness", "−Health (flood risk)", "−Long-term"],
            volunteerBonus: -3,
            outcome: "The stadium was magnificent. But the next monsoon, Bharatnagar flooded catastrophically. 4,000 homes damaged. 22 lives lost. ₹600 crore in damage. 'You chose cricket over children,' said the headlines. The stadium controversy defines your tenure.",
            deltas: { health: -25, pollution: 0, happiness: -15, budget: 18, volunteer: -12 }
          },
          {
            icon: "⚖️",
            title: "Negotiate: Lake + Mini Stadium",
            desc: "60% lake + 40% community sports complex. Lower corp funds, higher civic win.",
            effects: ["+Health (partial)", "+Happiness", "+Budget (partial)", "+Public Trust"],
            volunteerBonus: 8,
            outcome: "A creative solution praised by both environmentalists and sports fans. The lake reduced flooding by 70%. The sports complex hosted 400 community events per year. It became a model for 'green infrastructure' partnerships across India.",
            deltas: { health: 8, pollution: -5, happiness: 13, budget: 5, volunteer: 8 }
          },
          {
            icon: "🔬",
            title: "Pilot Smart Drainage with Sensors",
            desc: "₹80 cr AI drainage sensors for real-time flood response. Smart — but not complete.",
            effects: ["+Health (partial)", "−Budget", "+Happiness", "+Public Trust (tech)"],
            volunteerBonus: 6,
            outcome: "The smart system worked — during a moderate flood, it rerouted water efficiently. But when a record rainfall hit, sensors couldn't compensate for lack of physical infrastructure. 700 homes flooded. The tech was impressive; the gap in infrastructure, costly.",
            deltas: { health: -6, pollution: 5, happiness: -10, budget: -8, volunteer: -4 }
          }
        ]
      },
      {
        id: 5,
        title: "Your Final Challenge: Legacy Decision",
        desc: "Your last year as Mayor. The city has evolved based on your choices. Now: a once-in-a-generation ₹500 crore infrastructure grant arrives. How do you use it? This shapes Bharatnagar's future for the next 20 years.",
        sdgs: ["SDG 11 · Sustainable Cities", "SDG 17 · Partnerships", "SDG 1 · No Poverty", "SDG 10 · Reduced Inequalities"],
        realData: [
          { label: "India's Smart City Mission budget", val: "₹48,000 crore" },
          { label: "Urban poor in Indian cities", val: "~81M" },
          { label: "Municipal bond market (India)", val: "₹9,700 crore" },
          { label: "India renewable energy capacity", val: "~180 GW" },
        ],
        choices: [
          {
            icon: "☀️",
            title: "Solar-for-All Programme",
            desc: "Solar rooftops on 50,000 homes — free power for BPL families. All ₹500 cr.",
            effects: ["+Health", "+Happiness", "+Budget (long-term)", "−Pollution"],
            volunteerBonus: 15,
            outcome: "50,000 solar rooftops changed the city. 15,000 poor families got free electricity. Hospital backup power prevented 340 deaths over 2 years. The city became a net energy exporter — generating ₹40 crore/year in revenue. Community green brigades maintained the system.",
            deltas: { health: 15, pollution: -18, happiness: 18, budget: 10, volunteer: 15 }
          },
          {
            icon: "🚇",
            title: "Metro Connectivity to Slums",
            desc: "18 km metro extension linking 6 underserved neighbourhoods to jobs & hospitals.",
            effects: ["+Happiness", "+Health", "+Budget (long-term)", "±Public Trust"],
            volunteerBonus: 8,
            outcome: "180,000 people got new access to jobs and hospitals. 22% of slum residents found better employment in 18 months. Property values in connected areas rose 40% — a double-edged sword. The metro became the spine of a new inclusive city narrative.",
            deltas: { health: 10, pollution: -6, happiness: 20, budget: 8, volunteer: 8 }
          },
          {
            icon: "🏥",
            title: "Universal Health Infrastructure",
            desc: "25 new PHCs, 3 upgraded hospitals, free telemedicine for all. Public, free.",
            effects: ["+Health (massive)", "+Happiness", "+Public Trust", "−Budget (small net)"],
            volunteerBonus: 18,
            outcome: "Maternal mortality dropped 62%. 400,000 additional patients accessed healthcare annually. 1,200 community health workers trained and deployed. Infant mortality in slums fell below state average — a historic achievement. Your health legacy will last decades.",
            deltas: { health: 25, pollution: 0, happiness: 16, budget: -5, volunteer: 18 }
          },
          {
            icon: "🎓",
            title: "Skills & Digital Access",
            desc: "100 digital skill centres + free internet for 200 low-income wards. Youth-led future.",
            effects: ["+Happiness", "+Budget (long-term)", "+Public Trust", "+Health (indirect)"],
            volunteerBonus: 12,
            outcome: "45,000 youth trained. 12,000 found employment in 18 months. Youth-led community brigades became city infrastructure — maintaining parks, running community services. The digital inclusion index rose 38 points. Bharatnagar became a startup destination.",
            deltas: { health: 2, pollution: 3, happiness: 12, budget: 8, volunteer: 5 }
          }
        ]
      },
      {
        id: 6,
        title: "Water Scarcity & Tanker Mafia",
        desc: "Bharatnagar's groundwater has dropped 18 metres in 5 years. Half the city gets water only 2 hours a day. A 'tanker mafia' is profiteering — private water trucks charge 20x the pipe rate in poor areas. Citizens are furious.",
        sdgs: ["SDG 6 · Clean Water & Sanitation", "SDG 10 · Reduced Inequalities", "SDG 11 · Sustainable Cities"],
        realData: [
          { label: "Indians facing high water stress", val: "~600M" },
          { label: "Cities with <8hr daily water supply", val: "~40% of India" },
          { label: "Cost difference: tanker vs piped water", val: "10–30x" },
          { label: "Urban India groundwater depletion", val: "Critical in 21 cities" },
        ],
        choices: [
          {
            icon: "💧",
            title: "24/7 Water Grid Overhaul",
            desc: "New pipelines + smart meters citywide. 18-month disruption, permanent clean water.",
            effects: ["+Health", "+Happiness (long)", "−Budget", "−Pollution (indirect)"],
            volunteerBonus: 10,
            outcome: "Pipeline work disrupted traffic for 14 months. Citizens were impatient — until the water flowed. Tanker mafia lost 80% of their business. 1.2 million poor residents now have clean water at ₹2/litre instead of ₹40. Community water-watch committees maintained the meters. A generational achievement.",
            deltas: { health: 18, pollution: -5, happiness: 12, budget: -22, volunteer: 10 }
          },
          {
            icon: "🌧️",
            title: "Rainwater Harvesting Mandate",
            desc: "Mandate rooftop harvesting for large buildings, subsidise it for the poor.",
            effects: ["+Health (partial)", "+Public Trust", "−Pollution", "±Budget"],
            volunteerBonus: 14,
            outcome: "12,000 buildings installed systems in the first phase. Groundwater recharge improved 22%. Slum areas got subsidised community tanks — community members managed them brilliantly. During the monsoon, Bharatnagar collected 4 billion litres. The tanker mafia shrank but didn't disappear. A smart, distributed solution.",
            deltas: { health: 10, pollution: -10, happiness: 8, budget: -8, volunteer: 14 }
          },
          {
            icon: "🚔",
            title: "Bust the Tanker Mafia",
            desc: "Arrest cartel leaders, cap water prices by law. High-risk, high-reward crackdown.",
            effects: ["+Happiness", "−Budget (enforcement)", "±Health", "±Public Trust"],
            volunteerBonus: 6,
            outcome: "17 cartel leaders arrested. Water prices dropped overnight. But a shadow market emerged within 3 months. The structural shortage remained. Citizens cheered the crackdown — happiness surged — but water supply didn't fundamentally improve. A popular but incomplete victory.",
            deltas: { health: 5, pollution: 0, happiness: 16, budget: -10, volunteer: 6 }
          },
          {
            icon: "🔁",
            title: "Sewage Water Recycling Plant",
            desc: "Treat 40% of waste water for industry & farms, freeing fresh water for residents.",
            effects: ["+Health", "−Pollution", "+Budget (long)", "+Public Trust"],
            volunteerBonus: 9,
            outcome: "The plant took 10 months to build. Industry switched to recycled water — saving 80 million litres/day of fresh water. Pollution in the Bharna River dropped 35%. Citizens called it 'the invisible hero.' Engineers who built it became civic celebrities. A quiet, brilliant intervention.",
            deltas: { health: 12, pollution: -15, happiness: 6, budget: 5, volunteer: 9 }
          }
        ]
      },
      {
        id: 7,
        title: "Youth Unemployment & Gig Economy Trap",
        desc: "35% of Bharatnagar's youth (18–28) are unemployed or underemployed. The gig economy is growing but offers no security. A sudden factory closure has put 8,000 workers on the streets. Your labour minister and an ed-tech company both have very different plans.",
        sdgs: ["SDG 8 · Decent Work", "SDG 10 · Reduced Inequalities", "SDG 1 · No Poverty"],
        realData: [
          { label: "India youth unemployment rate (2024)", val: "~16–45%" },
          { label: "Gig workers in India", val: "~77 lakh" },
          { label: "Indians entering workforce annually", val: "~10 million" },
          { label: "MSME sector jobs share (India)", val: "~45% of workforce" },
        ],
        choices: [
          {
            icon: "🏭",
            title: "Bharatnagar MSME Cluster",
            desc: "Dedicated MSME park with tax breaks & shared infrastructure. ₹150 cr.",
            effects: ["+Happiness", "+Budget (long)", "+Health (indirect)", "−Budget (now)"],
            volunteerBonus: 8,
            outcome: "340 small businesses set up in the first phase. 6,200 jobs created within 18 months — exceeding the factory job losses. The cluster became a hub for food processing, textiles, and electronics. Youth unemployment fell 8 points. Community business mentors from the city's corporate sector joined the effort unprompted.",
            deltas: { health: 6, pollution: 2, happiness: 16, budget: -10, volunteer: 8 }
          },
          {
            icon: "🎓",
            title: "Skill-Up Voucher Programme",
            desc: "₹15,000 skill voucher for every unemployed youth. Market-driven reskilling.",
            effects: ["+Happiness", "+Budget (long)", "+Public Trust", "±Health"],
            volunteerBonus: 16,
            outcome: "42,000 vouchers redeemed in 6 months. Top courses: coding, solar installation, healthcare support. Youth-led community groups emerged — they started teaching digital skills in slums. Unemployment fell 11 points over 2 years. The voucher model was replicated across 3 other Indian cities.",
            deltas: { health: 4, pollution: 0, happiness: 14, budget: -8, volunteer: 16 }
          },
          {
            icon: "⚖️",
            title: "Gig Worker Rights Charter",
            desc: "City ordinance: min pay, accident cover & sick leave for all gig workers.",
            effects: ["+Happiness (workers)", "+Public Trust", "−Happiness (business)", "±Budget"],
            volunteerBonus: 12,
            outcome: "180,000 gig workers gained basic protections. Delivery platform companies lobbied against you furiously. Two left the city — briefly increasing costs. But worker health improved (fewer accidents went untreated), productivity rose, and the ordinance became a template for national legislation. A historic, contested win.",
            deltas: { health: 8, pollution: 0, happiness: 10, budget: -4, volunteer: 12 }
          },
          {
            icon: "🤝",
            title: "Factory Retraining Deal",
            desc: "Factory funds retraining of 8,000 workers in exchange for a tax relief deal.",
            effects: ["±Budget", "+Health (moderate)", "+Happiness", "+Public Trust (mild)"],
            volunteerBonus: 5,
            outcome: "8,000 workers retrained in 9 months in electronics assembly and renewable energy servicing. 70% found work within a year. The factory owner gained goodwill and a tax break — controversial, but pragmatic. The remaining 30% needed additional support that wasn't provided. A partial, efficient win.",
            deltas: { health: -5, pollution: 8, happiness: -8, budget: 6, volunteer: -4 }
          }
        ]
      },
      {
        id: 8,
        title: "Cybercrime Wave & Digital Divide",
        desc: "Online fraud has skyrocketed — ₹280 crore lost by citizens in 2 months. Elderly and rural residents are worst hit. Simultaneously, only 28% of slum households have reliable internet. Digital inclusion and digital safety are in direct tension with your budget.",
        sdgs: ["SDG 9 · Innovation & Infrastructure", "SDG 10 · Reduced Inequalities", "SDG 16 · Strong Institutions"],
        realData: [
          { label: "India financial cybercrime losses (2023)", val: "₹11,333 crore" },
          { label: "Cybercrime complaints filed in India", val: "15.56 lakh (2023)" },
          { label: "Urban-rural internet penetration gap", val: "~42% vs ~31%" },
          { label: "Digital literacy among 60+ in India", val: "~8%" },
        ],
        choices: [
          {
            icon: "🛡️",
            title: "Cyber Crime Command Centre",
            desc: "24/7 cyber response hub + rapid victim recovery funds. ₹80 cr, 6 months.",
            effects: ["+Happiness", "+Health (indirect)", "−Budget", "+Public Trust (mild)"],
            volunteerBonus: 7,
            outcome: "Response time to fraud reports dropped from 18 days to 36 hours. ₹42 crore recovered for victims in the first phase. A dedicated helpline for senior citizens became wildly popular. Crime rate dropped 40% — word spread that Bharatnagar was 'hard to scam.' Community members ran free cyber-safety workshops.",
            deltas: { health: 5, pollution: 0, happiness: 15, budget: -12, volunteer: 7 }
          },
          {
            icon: "📡",
            title: "Universal Broadband Initiative",
            desc: "Free 50 Mbps broadband to every slum & village. ₹180 cr, 14-month rollout.",
            effects: ["+Happiness", "+Budget (long)", "+Public Trust", "+Health (telemedicine)"],
            volunteerBonus: 13,
            outcome: "600,000 residents got free internet for the first time. Telemedicine consultations tripled. Students accessed online schooling, reducing dropout rates. New cybercrime risks emerged — but community digital literacy brigades countered them. Bharatnagar's digital economy grew 22% as small businesses went online.",
            deltas: { health: 10, pollution: 0, happiness: 12, budget: -14, volunteer: 13 }
          },
          {
            icon: "📚",
            title: "Mass Digital Literacy Campaign",
            desc: "2,000 Digital Saathis teach cyber safety in slums, schools & senior centres.",
            effects: ["+Happiness", "+Public Trust (major)", "−Budget (small)", "+Health (indirect)"],
            volunteerBonus: 20,
            outcome: "280,000 citizens trained in 8 months. Fraud complaints from trained communities dropped 65%. The Digital Saathis became permanent community fixtures — some went on to teach coding. This built the highest public trust in the city's history. A people-powered revolution in digital safety.",
            deltas: { health: 6, pollution: 0, happiness: 10, budget: -6, volunteer: 20 }
          },
          {
            icon: "🤖",
            title: "AI-Powered Fraud Detection Layer",
            desc: "Fintech AI monitors all transactions. Revenue-share model, minimal upfront cost.",
            effects: ["+Budget (neutral)", "+Health (mild)", "+Happiness", "−Public Trust"],
            volunteerBonus: 3,
            outcome: "The AI flagged 94,000 suspicious transactions in the first quarter, preventing ₹120 crore in losses. Citizens barely noticed it — which was the point. But digital literacy didn't improve; underlying vulnerability remained. The fintech partner wanted data sharing agreements that raised privacy concerns. A stealthy, complex win.",
            deltas: { health: -8, pollution: 5, happiness: -12, budget: 5, volunteer: -6 }
          }
        ]
      },
      {
        id: 9,
        title: "Waste Management Collapse",
        desc: "Bharatnagar's landfill — the size of 50 football fields — caught fire and has been burning for 6 days. Toxic smoke blankets 3 wards. Simultaneously, only 18% of waste is segregated at source. The city generates 4,200 tonnes of garbage a day. You need both an immediate response and a long-term plan.",
        sdgs: ["SDG 3 · Good Health", "SDG 11 · Sustainable Cities", "SDG 12 · Responsible Consumption", "SDG 13 · Climate Action"],
        realData: [
          { label: "India's daily municipal solid waste", val: "~1.5 lakh tonnes" },
          { label: "Waste treated before disposal (India)", val: "~20%" },
          { label: "Landfill fires in Indian cities (2023)", val: "Multiple major incidents" },
          { label: "Waste segregation at source (Indian avg)", val: "~15–25%" },
        ],
        choices: [
          {
            icon: "🔥",
            title: "Emergency Decentralised Composting",
            desc: "500 ward-level biogas & composting units. Residents manage their own waste.",
            effects: ["+Health", "−Pollution", "+Public Trust (major)", "−Budget"],
            volunteerBonus: 18,
            outcome: "Residents became waste managers in their own wards. RWAs competed to produce the best compost. 500 biogas units powered 12,000 street lights for free. Landfill intake dropped 38%. The fire was controlled, then the site was capped and converted to a methane power plant. A bottom-up triumph.",
            deltas: { health: 14, pollution: -18, happiness: 10, budget: -14, volunteer: 18 }
          },
          {
            icon: "🏭",
            title: "Waste-to-Energy Plant",
            desc: "Private plant processes 1,500 tonnes/day, generates electricity. ₹400 cr deal.",
            effects: ["+Budget (long)", "−Pollution (partial)", "+Health (mild)", "−Public Trust"],
            volunteerBonus: -2,
            outcome: "The plant worked — but critics called it 'burning the problem away.' It generated 15MW of power, saving ₹30 crore annually. However, segregation remained poor and the plant became an excuse not to reduce waste at source. Air quality improved by only 12%. A technically sound but culturally incomplete solution.",
            deltas: { health: -5, pollution: 10, happiness: -10, budget: 10, volunteer: -8 }
          },
          {
            icon: "♻️",
            title: "Zero-Waste Neighbourhoods Pilot",
            desc: "Mandate 100% source segregation in 20 pilot wards. Radical, transformative.",
            effects: ["+Health", "−Pollution (major)", "+Public Trust", "−Happiness (short-term)"],
            volunteerBonus: 15,
            outcome: "Initial resistance was fierce — residents protested the fines. But within 4 months, 20 wards produced 70% less landfill waste. Informal waste pickers were trained and integrated into the formal system — their incomes tripled. The pilot became Bharatnagar's proudest civic achievement. Other cities visited to learn.",
            deltas: { health: 12, pollution: -20, happiness: -4, budget: -8, volunteer: 15 }
          },
          {
            icon: "🚛",
            title: "Rapid Landfill Remediation",
            desc: "Bioremediation extinguishes the fire & converts the landfill into green cover.",
            effects: ["+Health (immediate)", "−Pollution (immediate)", "−Budget", "±Public Trust"],
            volunteerBonus: 5,
            outcome: "The fire was completely extinguished in 9 days. Bioremediation took 8 months — the former landfill became a 12-hectare urban forest, now the city's most-visited park. But the underlying waste crisis was not addressed — another landfill crisis loomed. A beautiful, incomplete solution.",
            deltas: { health: 16, pollution: -12, happiness: 14, budget: -20, volunteer: 5 }
          }
        ]
      },
      {
        id: 10,
        title: "Your Decade's Legacy — The Final Vote",
        desc: "Ten years as Mayor. Bharatnagar has been through crises, breakthroughs, and setbacks. One final decision shapes your legacy: a national award committee offers to build a permanent monument in Bharatnagar — but YOU choose what it is. This choice shows what you truly stand for.",
        sdgs: ["SDG 11 · Sustainable Cities", "SDG 17 · Partnerships", "SDG 4 · Quality Education", "SDG 3 · Good Health"],
        realData: [
          { label: "Indian cities with open civic spaces", val: "Declining by 2% annually" },
          { label: "Public library access in Indian cities", val: "1 per 1.4 lakh people" },
          { label: "Green cover in Indian metros", val: "10–20% (target: 33%)" },
          { label: "Community health worker coverage", val: "~1 per 1,000 in cities" },
        ],
        choices: [
          {
            icon: "📚",
            title: "The Bharatnagar Knowledge Commons",
            desc: "Free 24/7 library, digital hub & maker-space — education as city infrastructure.",
            effects: ["+Happiness (massive)", "+Health (indirect)", "+Public Trust (major)", "+Budget (long-term)"],
            volunteerBonus: 22,
            outcome: "Opening day: 40,000 citizens queued at dawn. Within a year, 2.8 lakh active members — the most-used public building in Bharatnagar's history. Youth coding bootcamps, senior story-circles, startup incubators, community radio: all bloomed here. Twenty years later, three Chief Ministers of the state will have started their civic journeys in this building.",
            deltas: { health: 8, pollution: 0, happiness: 22, budget: -5, volunteer: 22 }
          },
          {
            icon: "🌳",
            title: "Bharatnagar Central Forest Park",
            desc: "80 hectares of degraded land turned into a protected urban forest & wetland.",
            effects: ["+Health (massive)", "−Pollution (major)", "+Happiness", "+Public Trust"],
            volunteerBonus: 16,
            outcome: "Air quality in surrounding wards improved 28%. Temperature fell 2°C locally. 180 bird species returned. The forest became Bharatnagar's most-photographed place — and its most beloved. Community naturalist groups grew to 12,000 members. Flood risk fell as the wetlands absorbed monsoon surges. A gift to every future generation.",
            deltas: { health: 20, pollution: -22, happiness: 14, budget: -4, volunteer: 16 }
          },
          {
            icon: "🏥",
            title: "The Community Health Village",
            desc: "10-acre campus: 500-bed hospital, specialist clinics, mental health — all free.",
            effects: ["+Health (transformative)", "+Happiness", "+Public Trust", "−Budget (minor)"],
            volunteerBonus: 20,
            outcome: "Infant mortality in Bharatnagar fell below the national average for the first time. Mental health services — previously non-existent in public facilities — treated 18,000 patients in the first phase. 1,200 doctors chose to work here over private hospitals, inspired by the mission. Community health engagement exploded. Your health legacy becomes a national model.",
            deltas: { health: 28, pollution: 0, happiness: 16, budget: -6, volunteer: 20 }
          },
          {
            icon: "🤲",
            title: "Citizen Assembly Hall",
            desc: "500 randomly selected citizens vote on every major city decision — by law.",
            effects: ["+Happiness (transformative)", "+Public Trust (massive)", "+Health (indirect)", "+Budget (efficiency)"],
            volunteerBonus: 25,
            outcome: "The Assembly's first act: vote to plant 1 million trees. Its second: redesign the public transport grid. Citizens who participated reported the highest sense of civic belonging ever measured in India. Corruption dropped 45% as every contract was publicly reviewed. This was not a monument to you — it was a monument to Bharatnagar's people. Your greatest act was to make yourself unnecessary.",
            deltas: { health: 6, pollution: -5, happiness: 25, budget: 10, volunteer: 25 }
          }
        ]
      }
    ];

    

    // ===================================================================
    //  GAME STATE
    // ===================================================================

    let state = {};


    // ═══════════════════════════════════════════════════════
    //  AUDIO ENGINE (Web Audio API — no external files)
    // ═══════════════════════════════════════════════════════
    let audioCtx = null;
    let isMuted = false;
    let ambientNode = null;

    function getAudio() {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      return audioCtx;
    }

    // toggleMute defined in startAmbient section

    function playTone(freq, type, duration, vol, delay=0, ramp=true) {
      if (isMuted) return;
      try {
        const ctx = getAudio();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = type;
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0, ctx.currentTime + delay);
        gain.gain.linearRampToValueAtTime(vol, ctx.currentTime + delay + 0.01);
        if (ramp) gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + duration);
        osc.start(ctx.currentTime + delay);
        osc.stop(ctx.currentTime + delay + duration + 0.05);
      } catch(e) {}
    }

    function playCardClick() {
      // Soft UI click
      playTone(520, 'sine', 0.12, 0.15);
      playTone(780, 'sine', 0.08, 0.08, 0.06);
    }

    function playGoodChoice() {
      // Ascending positive chime
      playTone(440, 'sine', 0.18, 0.12, 0.0);
      playTone(554, 'sine', 0.18, 0.12, 0.1);
      playTone(659, 'sine', 0.25, 0.14, 0.2);
      playTone(880, 'sine', 0.35, 0.12, 0.32);
    }

    function playBadChoice() {
      // Descending minor tone
      playTone(440, 'sine', 0.2, 0.1, 0.0);
      playTone(370, 'sine', 0.2, 0.1, 0.12);
      playTone(311, 'triangle', 0.3, 0.08, 0.25);
    }

    function playCrisisAlarm() {
      // Urgent pulsing alarm
      for (let i = 0; i < 3; i++) {
        playTone(880, 'sawtooth', 0.15, 0.06, i * 0.28);
        playTone(660, 'sawtooth', 0.15, 0.06, i * 0.28 + 0.15);
      }
    }

    function playRoundStart() {
      // Soft whoosh/transition
      playTone(200, 'sine', 0.4, 0.05);
      playTone(400, 'sine', 0.3, 0.08, 0.1);
    }

    function playVictoryFanfare() {
      // Triumphant fanfare for grade A
      const notes = [523, 659, 784, 1047];
      notes.forEach((f, i) => playTone(f, 'sine', 0.4, 0.12, i * 0.18));
      playTone(1047, 'sine', 0.8, 0.15, notes.length * 0.18);
    }

    function playNextRound() {
      playTone(660, 'sine', 0.15, 0.1);
      playTone(880, 'sine', 0.2, 0.1, 0.12);
    }

    let _ambientNodes = [];

    function stopAmbient() {
      _ambientNodes.forEach(n => { try { n.stop ? n.stop() : null; } catch(e){} });
      _ambientNodes = [];
      if (ambientNode) { try { ambientNode.gain.setTargetAtTime(0, getAudio().currentTime, 0.3); } catch(e){} }
      ambientNode = null;
    }

    function startAmbient() {
      stopAmbient();
      if (isMuted) return;
      try {
        const ctx = getAudio();
        const master = ctx.createGain();
        master.gain.value = 0;
        master.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 2);
        master.connect(ctx.destination);
        ambientNode = master;

        // Layer 1: Deep city drone (two slightly detuned sines)
        [[55, 0.4], [57.8, 0.3], [110, 0.15]].forEach(([freq, vol]) => {
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          o.type = 'sine'; o.frequency.value = freq;
          g.gain.value = vol;
          o.connect(g); g.connect(master);
          o.start();
          _ambientNodes.push(o);
        });

        // Layer 2: Slow pad — arpeggiated chord (Dm: 147, 175, 220, 262)
        const padNotes = [147, 175, 220, 262, 220, 175];
        let padStep = 0;
        const padGain = ctx.createGain();
        padGain.gain.value = 0.035;
        padGain.connect(master);

        const schedulePad = () => {
          if (!ambientNode) return;
          const o = ctx.createOscillator();
          const env = ctx.createGain();
          o.type = 'triangle';
          o.frequency.value = padNotes[padStep % padNotes.length];
          env.gain.setValueAtTime(0, ctx.currentTime);
          env.gain.linearRampToValueAtTime(0.8, ctx.currentTime + 0.3);
          env.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2.8);
          o.connect(env); env.connect(padGain);
          o.start(ctx.currentTime); o.stop(ctx.currentTime + 3);
          padStep++;
          if (ambientNode) setTimeout(schedulePad, 2800);
        };
        setTimeout(schedulePad, 1000);

        // Layer 3: Slow LFO tremolo on master
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.value = 0.08;
        lfoGain.gain.value = 0.015;
        lfo.connect(lfoGain);
        lfoGain.connect(master.gain);
        lfo.start();
        _ambientNodes.push(lfo);

      } catch(e) { console.warn('Audio init failed:', e); }
    }

    function toggleMute() {
      isMuted = !isMuted;
      document.getElementById('mute-btn').textContent = isMuted ? '🔇' : '🔊';
      if (ambientNode) {
        const ctx = getAudio();
        ambientNode.gain.setTargetAtTime(isMuted ? 0 : 0.06, ctx.currentTime, 0.5);
      }
    }

    // ═══════════════════════════════════════════════════════
    //  CHALLENGE PROGRESS STRIP
    // ═══════════════════════════════════════════════════════
    const progressLog = []; // { isCrisis, isBest }

    function renderProgressStrip() {
      const strip = document.getElementById('progress-strip');
      if (!strip) return;
      const total = ROUNDS.length;
      const current = state.round; // 0-indexed current

      let html = '';
      for (let i = 0; i < total; i++) {
        const done = i < current;
        const cur  = i === current;
        const entry = progressLog[i];
        let cls = 'prog-node';
        let label = i + 1;
        let title = '';

        if (done && entry) {
          cls += entry.isCrisis ? ' crisis' : (entry.isBest ? ' done' : ' done-bad');
          label = entry.isCrisis ? '⚡' : (entry.isBest ? '✓' : '!');
          title = entry.isCrisis ? 'Crisis' : (entry.isBest ? 'Optimal' : 'Suboptimal');
        } else if (cur) {
          cls += ' current';
        }

        html += `<div class="${cls}" title="${title || 'Challenge ' + (i+1)}">${label}</div>`;
        if (i < total - 1) {
          html += `<div class="prog-connector ${done ? 'filled' : ''}"></div>`;
        }
      }
      strip.innerHTML = html;
    }

    // ═══════════════════════════════════════════════════════
    //  SCREEN TRANSITION
    // ═══════════════════════════════════════════════════════
    function playTransition(label, callback) {
      const wipe = document.getElementById('screen-wipe');
      const rt   = document.getElementById('round-transition');
      const rtTxt = document.getElementById('round-transition-text');

      // Wipe in
      wipe.className = 'screen-wipe wipe-in';
      setTimeout(() => {
        if (callback) callback();
        wipe.className = 'screen-wipe wipe-out';
        if (label) {
          rtTxt.textContent = label;
          rt.className = 'round-transition show';
          setTimeout(() => { rt.className = 'round-transition'; }, 1300);
        }
      }, 380);
    }

    // ═══════════════════════════════════════════════════════
    //  CONFETTI (for grade A)
    // ═══════════════════════════════════════════════════════
    function launchConfetti() {
      const colors = ['#A78BFA','#34D399','#F472B6','#60A5FA','#FCD34D','#FB923C'];
      for (let i = 0; i < 90; i++) {
        const el = document.createElement('div');
        el.className = 'confetti-piece';
        el.style.left = Math.random() * 100 + 'vw';
        el.style.background = colors[Math.floor(Math.random() * colors.length)];
        el.style.width  = (8 + Math.random() * 8) + 'px';
        el.style.height = (8 + Math.random() * 8) + 'px';
        el.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        const dur = 2.5 + Math.random() * 2;
        el.style.animationDuration = dur + 's';
        el.style.animationDelay    = Math.random() * 1.2 + 's';
        document.body.appendChild(el);
        setTimeout(() => el.remove(), (dur + 1.5) * 1000);
      }
    }

    // ═══════════════════════════════════════════════════════
    //  CITY MOOD — background tint based on overall health
    // ═══════════════════════════════════════════════════════
    function updateCityMood() {
      const screen = document.getElementById('screen-game');
      if (!screen) return;
      const avg = (state.health + (100 - state.pollution) + state.happiness) / 3;
      let tint;
      if (avg >= 70)      tint = 'linear-gradient(135deg, #050f1a 0%, #0a1628 40%, #0d0520 100%)'; // healthy blue
      else if (avg >= 45) tint = 'linear-gradient(135deg, #0d0520 0%, #12072a 100%)';               // neutral dark
      else                tint = 'linear-gradient(135deg, #1a0505 0%, #2a0a0a 40%, #0d0520 100%)';  // danger red
      screen.style.background = tint;
    }


    // ═══════════════════════════════════════════════════════
    //  DIFFICULTY SYSTEM
    // ═══════════════════════════════════════════════════════
    let difficulty = 'easy';
    const DIFFICULTY_CONFIG = {
      easy:   { budget: 75, pollRate: 0,   eventChance: 0.45, label: 'easy',   name: 'EASY' },
      medium: { budget: 60, pollRate: 1,   eventChance: 0.65, label: 'medium', name: 'MEDIUM' },
      hard:   { budget: 45, pollRate: 2.5, eventChance: 0.9,  label: 'hard',   name: 'HARD' },
    };

    function setDifficulty(d) {
      difficulty = d;
      document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
      document.querySelector('.diff-btn.' + d).classList.add('active');
    }

    // ═══════════════════════════════════════════════════════
    //  TUTORIAL SYSTEM
    // ═══════════════════════════════════════════════════════
    const TUT_KEY = 'civicpulse_tutorial_done';
    let tutStep = 0;
    const TUT_STEPS = [
      {
        icon: '🏛️',
        title: 'Welcome, Mayor!',
        body: 'You lead Bharatnagar — a city of 4 million lives. Every decision you make shapes health, happiness, the environment, and the city budget.<br><br>The clock is ticking.',
        highlight: null,
      },
      {
        icon: '📊',
        title: 'Watch Your Metrics',
        body: 'The top bar shows 5 key city stats in real time:<div class="tut-highlight">🏥 Health · 🌫️ Pollution · 😊 Happiness · 💰 Budget · 🌟 Trust</div>Keep them balanced — let any one collapse and the city suffers.',
        highlight: null,
      },
      {
        icon: '🃏',
        title: 'Pick Your Decision',
        body: 'Each challenge gives you 2–4 decision cards. Hover a card to preview its impact before committing.<div class="tut-highlight">⏱️ You have a time limit — decide before it runs out!</div>After choosing, see what really happened and whether a better option existed.',
        highlight: null,
      },
    ];

    function showTutorial() {
      if (localStorage.getItem(TUT_KEY)) return;
      tutStep = 0;
      document.getElementById('tutorial-overlay').classList.remove('hidden');
      renderTutStep();
    }

    function renderTutStep() {
      const step = TUT_STEPS[tutStep];
      document.getElementById('tut-icon').textContent = step.icon;
      document.getElementById('tut-title').textContent = step.title;
      document.getElementById('tut-body').innerHTML = step.body.replace(/\n/g, '<br>');
      document.getElementById('tut-next-btn').textContent =
        tutStep === TUT_STEPS.length - 1 ? "Let's Go! 🚀" : 'Next →';
      // dots
      document.getElementById('tut-dots').innerHTML = TUT_STEPS.map((_, i) =>
        `<div class="tut-dot ${i === tutStep ? 'active' : ''}"></div>`
      ).join('');
    }

    function tutorialNext() {
      tutStep++;
      if (tutStep >= TUT_STEPS.length) {
        closeTutorial();
      } else {
        renderTutStep();
      }
    }

    function closeTutorial() {
      document.getElementById('tutorial-overlay').classList.add('hidden');
      localStorage.setItem(TUT_KEY, '1');
    }

    // ═══════════════════════════════════════════════════════
    //  DECISION TIMER
    // ═══════════════════════════════════════════════════════
    let timerInterval = null;
    let timerSeconds = 30;
    const TIMER_DURATION = 30;

    function startTimer(choices) {
      clearTimer();
      const cfg = DIFFICULTY_CONFIG[difficulty];
      timerSeconds = difficulty === 'easy' ? 45 : difficulty === 'medium' ? 30 : 20;

      const wrap  = document.getElementById('timer-wrap');
      const fill  = document.getElementById('timer-fill');
      const count = document.getElementById('timer-count');
      wrap.classList.add('active');
      fill.style.width = '100%';
      fill.classList.remove('urgent');
      count.classList.remove('urgent');
      count.textContent = timerSeconds;

      timerInterval = setInterval(() => {
        timerSeconds--;
        const pct = (timerSeconds / (difficulty === 'easy' ? 45 : difficulty === 'medium' ? 30 : 20)) * 100;
        fill.style.width = pct + '%';
        count.textContent = timerSeconds;

        if (timerSeconds <= 5) {
          fill.classList.add('urgent');
          count.classList.add('urgent');
          playTick();
        }

        if (timerSeconds <= 0) {
          clearTimer();
          // Auto-select a random unchosen card
          if (state.chosen === null) {
            const idx = Math.floor(Math.random() * choices.length);
            if (state.crisisActive) {
              const crisis = CRISIS_EVENTS.find(c => usedCrises[usedCrises.length-1] === c.id);
              if (crisis) chooseCrisis(crisis.id, idx);
            } else {
              choose(idx);
            }
          }
        }
      }, 1000);
    }

    function clearTimer() {
      if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
      const wrap = document.getElementById('timer-wrap');
      if (wrap) wrap.classList.remove('active');
    }

    function playTick() {
      if (isMuted) return;
      try {
        const ctx = getAudio();
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.connect(g); g.connect(ctx.destination);
        osc.frequency.value = 1200; osc.type = 'square';
        g.gain.setValueAtTime(0.04, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
        osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.09);
      } catch(e) {}
    }

    // ═══════════════════════════════════════════════════════
    //  AI ADVISOR SYSTEM
    // ═══════════════════════════════════════════════════════
    const ADVISOR_TIPS = [
      (s) => s.pollution > 70
        ? "⚠️ Pollution is critical. Prioritise green or health options — citizens are already suffering."
        : null,
      (s) => s.health < 35
        ? "🏥 Health is dangerously low. Any choice that boosts it will save lives and build trust."
        : null,
      (s) => s.budget < 25
        ? "💰 Budget is near collapse. Avoid costly options or the city will face a fiscal crisis."
        : null,
      (s) => s.happiness < 30
        ? "😟 Citizens are deeply unhappy. A community-driven option will rebuild morale quickly."
        : null,
      (s) => s.volunteer > 50
        ? "🌟 High public trust amplifies every good decision. Community-driven options are extra powerful now."
        : null,
      (s) => s.health > 70 && s.happiness > 70
        ? "✨ The city is thriving. Bold, long-term infrastructure decisions will cement your legacy."
        : null,
      (s) => s.budget > 70
        ? "💎 Healthy budget gives you room to invest. Don't hoard — SDG-aligned spending multiplies returns."
        : null,
      (s) => "📋 Review each card carefully. Hover to preview its impact on your city metrics.",
    ];

    function showAdvisor() {
      const banner = document.getElementById('advisor-banner');
      const text = document.getElementById('advisor-text');
      if (!banner || !text) return;

      let tip = null;
      for (const fn of ADVISOR_TIPS) {
        tip = fn(state);
        if (tip) break;
      }
      if (!tip) tip = ADVISOR_TIPS[ADVISOR_TIPS.length - 1](state);

      text.textContent = tip;
      banner.classList.remove('show');
      void banner.offsetWidth;
      banner.classList.add('show');
    }

    // ═══════════════════════════════════════════════════════
    //  SDG EDUCATIONAL INSIGHTS
    // ═══════════════════════════════════════════════════════
    const SDG_INSIGHTS = {
      health: [
        "Cities investing in clean air save ₹4 for every ₹1 spent on pollution control. (WHO, 2023)",
        "Universal healthcare access reduces poverty by up to 40% in urban areas. (UN SDG 3)",
        "Green hospital infrastructure reduces energy costs by 30% while improving patient recovery. (IGBC)",
      ],
      pollution: [
        "Urban green corridors reduce local temperatures by 3–4°C and cut air pollutants by 25%. (UN Habitat)",
        "Cities that banned high-emission vehicles saw asthma rates drop 18% within 2 years. (Lancet, 2022)",
        "Switching to renewable energy for just 20% of a city grid prevents ~40 premature deaths per lakh citizens. (IPCC)",
      ],
      happiness: [
        "Access to public parks within 500m of homes increases citizen happiness scores by 22%. (World Happiness Report)",
        "Cities with active participatory budgeting report 31% higher civic trust. (OECD, 2022)",
        "Walkable neighbourhoods reduce depression risk by 17% and increase social cohesion. (BMJ, 2023)",
      ],
      budget: [
        "Every ₹1 invested in flood resilience saves ₹6 in disaster recovery costs. (UNDP)",
        "Cities with transparent budget portals collect 12% more taxes through voluntary compliance. (World Bank)",
        "Preventive health infrastructure costs 1/5th of emergency response for the same health outcomes. (WHO)",
      ],
      volunteer: [
        "Cities with strong community networks recover from disasters 3x faster. (UNDRR, 2022)",
        "Civic engagement programmes reduce youth unemployment by 8–14% in Indian urban centres. (ILO)",
        "Volunteerism adds equivalent of 2.4% GDP annually to urban economies worldwide. (UN Volunteers)",
      ],
    };

    function getInsightForDeltas(deltas) {
      // Pick the metric with biggest absolute change, show matching insight
      const order = ['health','pollution','happiness','budget','volunteer'];
      let best = 'health', bestAbs = 0;
      order.forEach(k => {
        if (Math.abs(deltas[k] || 0) > bestAbs) { bestAbs = Math.abs(deltas[k]); best = k; }
      });
      const pool = SDG_INSIGHTS[best] || SDG_INSIGHTS.health;
      return pool[Math.floor(Math.random() * pool.length)];
    }

    function showSDGInsight(deltas) {
      const el = document.getElementById('sdg-insight');
      const txt = document.getElementById('sdg-insight-text');
      if (!el || !txt) return;
      txt.textContent = getInsightForDeltas(deltas);
      el.classList.remove('show');
      void el.offsetWidth;
      el.classList.add('show');
    }

    // ═══════════════════════════════════════════════════════
    //  ACHIEVEMENT SYSTEM
    // ═══════════════════════════════════════════════════════
    const ACH_KEY = 'civicpulse_achievements';
    let unlockedAchs = new Set(JSON.parse(localStorage.getItem(ACH_KEY) || '[]'));

    const ACHIEVEMENTS = [
      { id: 'green_guardian',  icon: '🌿', name: 'Green Guardian',  desc: 'Pollution below 20',         check: s => s.pollution < 20 },
      { id: 'citizen_hero',    icon: '😊', name: 'Citizen Hero',    desc: 'Happiness above 80',         check: s => s.happiness > 80 },
      { id: 'budget_master',   icon: '💰', name: 'Budget Master',   desc: 'Budget above 70',            check: s => s.budget > 70 },
      { id: 'health_champion', icon: '🏥', name: 'Health Champion', desc: 'Health above 85',            check: s => s.health > 85 },
      { id: 'trust_builder',   icon: '🌟', name: 'Trust Builder',   desc: 'Public Trust above 70',      check: s => s.volunteer > 70 },
      { id: 'clean_city',      icon: '🌆', name: 'Clean City',      desc: 'All 5 metrics above 50',     check: s => s.health>50 && (100-s.pollution)>50 && s.happiness>50 && s.budget>50 && s.volunteer>50 },
      { id: 'iron_mayor',      icon: '🏛️', name: 'Iron Mayor',     desc: 'Survive a Hard game',        check: s => difficulty === 'hard' },
      { id: 'speed_demon',     icon: '⚡', name: 'Speed Demon',     desc: 'Decide in under 5 seconds',  check: s => s._fastDecision },
    ];

    let popupTimer = null;
    function checkAchievements() {
      const s = { ...state };
      ACHIEVEMENTS.forEach(ach => {
        if (!unlockedAchs.has(ach.id) && ach.check(s)) {
          unlockAchievement(ach);
        }
      });
    }

    function unlockAchievement(ach) {
      if (unlockedAchs.has(ach.id)) return;
      unlockedAchs.add(ach.id);
      localStorage.setItem(ACH_KEY, JSON.stringify([...unlockedAchs]));

      // Show popup
      const popup = document.getElementById('achievement-popup');
      document.getElementById('ach-popup-icon').textContent = ach.icon;
      document.getElementById('ach-popup-name').textContent = ach.name;
      document.getElementById('ach-popup-desc').textContent = ach.desc;
      popup.classList.add('show');
      if (popupTimer) clearTimeout(popupTimer);
      popupTimer = setTimeout(() => popup.classList.remove('show'), 3500);
      playTone(660, 'sine', 0.2, 0.1);
      playTone(880, 'sine', 0.15, 0.1, 0.15);
    }

    // ═══════════════════════════════════════════════════════
    //  VISUAL FEEDBACK — screen shake + red flash
    // ═══════════════════════════════════════════════════════
    function triggerScreenShake() {
      const panel = document.querySelector('.main-panel');
      if (!panel) return;
      panel.classList.remove('shake');
      void panel.offsetWidth;
      panel.classList.add('shake');
      setTimeout(() => panel.classList.remove('shake'), 500);
    }

    function triggerRedFlash() {
      const fl = document.getElementById('flash-overlay');
      if (!fl) return;
      fl.classList.add('flash');
      setTimeout(() => fl.classList.remove('flash'), 120);
      setTimeout(() => { fl.classList.add('flash'); setTimeout(() => fl.classList.remove('flash'), 120); }, 280);
    }

    // ═══════════════════════════════════════════════════════
    //  ANIMATED CITY MAP
    // ═══════════════════════════════════════════════════════
    function updateCityMap() {
      const el = document.getElementById('map-effects');
      if (!el) return;
      let svg = '';

      // Smoke puffs if pollution high
      if (state.pollution > 60) {
        const opacity = ((state.pollution - 60) / 40).toFixed(2);
        svg += `
          <circle cx="135" cy="50" r="8" fill="rgba(100,100,100,${opacity})" opacity="0.6">
            <animate attributeName="cy" values="50;35;50" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="r" values="8;14;8" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="150" cy="45" r="6" fill="rgba(80,80,80,${opacity})" opacity="0.5">
            <animate attributeName="cy" values="45;28;45" dur="2.5s" repeatCount="indefinite"/>
            <animate attributeName="r" values="6;11;6" dur="2.5s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.5;0;0.5" dur="2.5s" repeatCount="indefinite"/>
          </circle>`;
      }

      // Glow windows if happiness high
      if (state.happiness > 60) {
        const glow = Math.min(1, (state.happiness - 60) / 40).toFixed(2);
        for (let i = 0; i < 6; i++) {
          const x = 18 + (i % 3) * 22;
          const y = 75 + Math.floor(i / 3) * 18;
          svg += `<rect x="${x}" y="${y}" width="8" height="6" rx="1" fill="rgba(253,224,71,${glow})" opacity="0.9">
            <animate attributeName="opacity" values="${glow};${glow*0.3};${glow}" dur="${1.5+i*0.3}s" repeatCount="indefinite"/>
          </rect>`;
        }
      }

      // Trees in green zone if environment good
      if (state.pollution < 50) {
        svg += `
          <circle cx="210" cy="110" r="10" fill="rgba(52,211,153,0.35)"/>
          <circle cx="230" cy="105" r="8" fill="rgba(52,211,153,0.3)"/>
          <circle cx="250" cy="112" r="9" fill="rgba(52,211,153,0.28)"/>`;
      }

      // Warning indicators if health low
      if (state.health < 35) {
        svg += `
          <text x="45" y="78" text-anchor="middle" font-size="12" opacity="0.9">
            ⚠️
            <animate attributeName="opacity" values="0.9;0.2;0.9" dur="1s" repeatCount="indefinite"/>
          </text>`;
      }

      // Water level indicator
      const waterH = Math.round((state.health / 100) * 20 + 8);
      svg += `<rect x="15" y="${48 - waterH}" width="260" height="${waterH}" rx="2" fill="rgba(59,130,246,0.15)"/>`;

      el.innerHTML = svg;
    }


    function initState() {
      const cfg = DIFFICULTY_CONFIG[difficulty];
      state = {
        round: 0,
        health: difficulty === 'hard' ? 35 : difficulty === 'medium' ? 40 : 45,
        pollution: difficulty === 'hard' ? 72 : difficulty === 'medium' ? 68 : 65,
        volunteer: 0,
        budget: cfg.budget,
        happiness: difficulty === 'hard' ? 30 : 40,
        log: [],
        totalVolunteers: 0,
        chosen: null,
        history: [],
        crisisActive: false,
        crisisResolved: false,
        playerId: 'player_' + Math.random().toString(36).slice(2, 10) + '_' + Date.now(),
        _fastDecision: false,
        _decisionStartTime: 0,
      };
      progressLog.length = 0;
      scoreSubmitted = false;
    }

    // ===================================================================
    //  SCREEN MANAGEMENT
    // ===================================================================

    function showScreen(id) {
      document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
      document.getElementById('screen-' + id).classList.add('active');
    }

    let mayorName = '';

    function startGame() {
      const input = document.getElementById('mayor-name-input');
      const errEl = document.getElementById('mayor-input-error');
      const name  = input ? input.value.trim() : '';

      if (!name) {
        errEl.textContent = 'Please enter your name to continue.';
        input.classList.add('input-error');
        input.focus();
        setTimeout(() => input.classList.remove('input-error'), 400);
        return;
      }

      mayorName = name;
      errEl.textContent = '';

      initState();
      showScreen('game');
      startAmbient();

      // Show mayor name + difficulty badge in topbar
      const meta = document.getElementById('topbar-meta');
      if (meta) meta.textContent = `Mayor ${mayorName} · Challenge 1 of 10 · Bharatnagar`;
      // Inject difficulty badge into topbar if not present
      let diffBadge = document.getElementById('diff-topbar-badge');
      if (!diffBadge) {
        const tb = document.querySelector('.topbar');
        if (tb) {
          diffBadge = document.createElement('span');
          diffBadge.id = 'diff-topbar-badge';
          diffBadge.className = 'diff-topbar-badge ' + difficulty;
          tb.appendChild(diffBadge);
        }
      }
      if (diffBadge) diffBadge.textContent = DIFFICULTY_CONFIG[difficulty].name;

      // Apply hard-mode vignette
      document.body.classList.toggle('hard-mode', difficulty === 'hard');
      buildCityDashboard();
      renderMetrics();
      drawRadar();
      renderProgressStrip();
      loadRound();
      setTimeout(showTutorial, 800); // Show tutorial overlay after game loads
    }

    // ===================================================================
    //  MAP
    // ===================================================================

    function drawRadar() {
      const canvas = document.getElementById('radar-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const W = canvas.width, H = canvas.height;
      const cx = W / 2, cy = H / 2 + 8;
      const R = Math.min(W, H) * 0.32;     // data ring radius
      const labelR = R + 28;               // label distance from centre
      const levels = 4;
      const axes = 5;

      // Order: top → clockwise
      const AXES = [
        { label: 'HEALTH',     emoji: '🏥', val: state.health / 100 },
        { label: 'AIR QUAL.',  emoji: '🌿', val: 1 - (state.pollution / 100) },
        { label: 'HAPPINESS',  emoji: '😊', val: state.happiness / 100 },
        { label: 'BUDGET',     emoji: '💰', val: state.budget / 100 },
        { label: 'PUB. TRUST', emoji: '🌟', val: state.volunteer / 100 },
      ];

      // Angle: start at top (-90°), go clockwise
      const angle = (i) => (Math.PI * 2 * i / axes) - Math.PI / 2;

      ctx.clearRect(0, 0, W, H);

      // ── Grid rings ──
      for (let l = levels; l >= 1; l--) {
        const r = R * (l / levels);
        ctx.beginPath();
        for (let i = 0; i < axes; i++) {
          const a = angle(i);
          i === 0 ? ctx.moveTo(cx + r * Math.cos(a), cy + r * Math.sin(a))
                  : ctx.lineTo(cx + r * Math.cos(a), cy + r * Math.sin(a));
        }
        ctx.closePath();
        ctx.strokeStyle = `rgba(139,92,246,${0.1 + l * 0.04})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.fillStyle = `rgba(109,40,217,${0.04 + l * 0.02})`;
        ctx.fill();
      }

      // ── Axis spokes ──
      for (let i = 0; i < axes; i++) {
        const a = angle(i);
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + R * Math.cos(a), cy + R * Math.sin(a));
        ctx.strokeStyle = 'rgba(139,92,246,0.22)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // ── Data polygon fill ──
      ctx.beginPath();
      for (let i = 0; i < axes; i++) {
        const a = angle(i);
        const r = R * AXES[i].val;
        i === 0 ? ctx.moveTo(cx + r * Math.cos(a), cy + r * Math.sin(a))
                : ctx.lineTo(cx + r * Math.cos(a), cy + r * Math.sin(a));
      }
      ctx.closePath();
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
      grad.addColorStop(0,   'rgba(167,139,250,0.40)');
      grad.addColorStop(0.6, 'rgba(96,165,250,0.22)');
      grad.addColorStop(1,   'rgba(244,114,182,0.12)');
      ctx.fillStyle = grad;
      ctx.fill();

      // ── Data polygon stroke ──
      ctx.beginPath();
      for (let i = 0; i < axes; i++) {
        const a = angle(i);
        const r = R * AXES[i].val;
        i === 0 ? ctx.moveTo(cx + r * Math.cos(a), cy + r * Math.sin(a))
                : ctx.lineTo(cx + r * Math.cos(a), cy + r * Math.sin(a));
      }
      ctx.closePath();
      ctx.strokeStyle = 'rgba(167,139,250,0.9)';
      ctx.lineWidth = 2;
      ctx.shadowColor = 'rgba(139,92,246,0.7)';
      ctx.shadowBlur = 8;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // ── Dots + value numbers ──
      for (let i = 0; i < axes; i++) {
        const a = angle(i);
        const r = R * AXES[i].val;
        const dx = cx + r * Math.cos(a);
        const dy = cy + r * Math.sin(a);

        const dotColor = AXES[i].val >= 0.6 ? '#6EE7B7'
                       : AXES[i].val >= 0.35 ? '#A78BFA'
                       : '#FDA4AF';

        // Glow halo
        ctx.beginPath();
        ctx.arc(dx, dy, 7, 0, Math.PI * 2);
        ctx.fillStyle = `${dotColor}22`;
        ctx.fill();

        // Dot
        ctx.beginPath();
        ctx.arc(dx, dy, 4, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.shadowColor = dotColor;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Value nudged toward axis tip
        const valR = r + 13;
        ctx.font = 'bold 9px "Space Mono", monospace';
        ctx.fillStyle = dotColor;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(Math.round(AXES[i].val * 100), cx + valR * Math.cos(a), cy + valR * Math.sin(a));
      }

      // ── Axis labels drawn at exact tip positions ──
      for (let i = 0; i < axes; i++) {
        const a = angle(i);
        const lx = cx + labelR * Math.cos(a);
        const ly = cy + labelR * Math.sin(a);

        // Align text based on which side of centre
        const cosA = Math.cos(a);
        ctx.textAlign = Math.abs(cosA) < 0.2 ? 'center'
                      : cosA > 0 ? 'left' : 'right';
        ctx.textBaseline = Math.sin(a) < -0.5 ? 'bottom'
                         : Math.sin(a) > 0.5  ? 'top' : 'middle';

        // Emoji
        ctx.font = '13px serif';
        ctx.fillText(AXES[i].emoji, lx, ly - 7);

        // Label text
        ctx.font = 'bold 7.5px "Space Mono", monospace';
        ctx.fillStyle = 'rgba(196,181,253,0.8)';
        ctx.fillText(AXES[i].label, lx, ly + 7);
      }

      // ── Centre avg ──
      const avg = Math.round(AXES.reduce((s, ax) => s + ax.val, 0) / axes * 100);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = 'bold 16px "Syne", sans-serif';
      ctx.fillStyle = 'rgba(196,181,253,0.9)';
      ctx.fillText(avg, cx, cy - 7);
      ctx.font = '7px "Space Mono", monospace';
      ctx.fillStyle = 'rgba(148,163,184,0.5)';
      ctx.fillText('AVG', cx, cy + 8);
    }

    const CITY_ZONES = [
      {
        id: 'health-zone',
        icon: '🏥',
        name: 'Health & Sanitation',
        desc: 'Hospitals, clinics & clean water access',
        metricKey: 'health',
        goodThreshold: 60,
        warnThreshold: 35,
        barColor: '#60A5FA',
        barColorWarn: '#FDE68A',
        barColorCrit: '#FDA4AF',
      },
      {
        id: 'air-zone',
        icon: '🌫️',
        name: 'Air & Environment',
        desc: 'Pollution levels across industrial areas',
        metricKey: 'pollution',
        goodThreshold: 40,   // low pollution = good
        warnThreshold: 65,
        invert: true,        // lower is better
        barColor: '#6EE7B7',
        barColorWarn: '#FDE68A',
        barColorCrit: '#FDA4AF',
      },
      {
        id: 'civic-zone',
        icon: '😊',
        name: 'Citizen Happiness',
        desc: 'Public trust, morale & satisfaction',
        metricKey: 'happiness',
        goodThreshold: 60,
        warnThreshold: 35,
        barColor: '#C4B5FD',
        barColorWarn: '#FDE68A',
        barColorCrit: '#FDA4AF',
      },
      {
        id: 'finance-zone',
        icon: '💰',
        name: 'City Budget',
        desc: 'Municipal funds & fiscal stability',
        metricKey: 'budget',
        goodThreshold: 55,
        warnThreshold: 30,
        barColor: '#93C5FD',
        barColorWarn: '#FDE68A',
        barColorCrit: '#FDA4AF',
      },
    ];

    // ===================================================================
    //  CRISIS EVENTS (random mid-game shocks)
    // ===================================================================

    const CRISIS_EVENTS = [
      {
        id: 'flood',
        icon: '🌊',
        title: 'Flash Flood Emergency',
        desc: 'Monsoon overflow has submerged 3 low-lying wards. Citizens are demanding immediate relief.',
        urgency: 'EMERGENCY',
        choices: [
          {
            icon: '🏠', title: 'Emergency Relief Camps',
            desc: 'Deploy tents, food & medical aid immediately.',
            hiddenEffect: 'Citizens notice the swift response — trust surges.',
            outcome: 'Relief camps were operational within 6 hours. Over 12,000 displaced residents received food, clean water and medical care. The city\'s rapid response became national news. Volunteer groups flooded in to help, and public trust in the administration surged. The flood damage was real — but Bharatnagar showed it could look after its most vulnerable.',
            deltas: { health: -5, happiness: +12, budget: -12, pollution: 0, volunteer: +8 }
          },
          {
            icon: '💸', title: 'Fast-Track Contractor Repairs',
            desc: 'Hire private contractors to fix drainage overnight.',
            hiddenEffect: 'Corruption allegations surface 2 months later.',
            outcome: 'Drainage repairs were completed quickly, but at triple the market rate. Two months later, a whistleblower revealed the contracts were awarded to companies linked to a city official. The press ran with it for weeks. Citizens felt the money meant for their safety was siphoned away — and they didn\'t forget it at the next public meeting.',
            deltas: { health: -3, happiness: -8, budget: -18, pollution: 0, volunteer: -5 }
          },
          {
            icon: '📋', title: 'Form a Study Committee',
            desc: 'Commission an expert report on flood-proofing.',
            hiddenEffect: 'Citizens are furious at inaction during the crisis.',
            outcome: 'While the committee convened, floodwaters sat in the wards for four days. Three elderly residents were hospitalised. The expert report, delivered six weeks later, was thorough — but citizens were already organising protests. "They studied while we drowned" became a popular slogan. The delayed response cost the administration dearly in credibility.',
            deltas: { health: -12, happiness: -15, budget: -3, pollution: 0, volunteer: -10 }
          }
        ]
      },
      {
        id: 'riot',
        icon: '🔥',
        title: 'Civil Unrest in Industrial Belt',
        desc: 'Factory workers protest toxic dumping. Tensions are escalating into street clashes.',
        urgency: 'CRITICAL',
        choices: [
          {
            icon: '🤝', title: 'Negotiate with Workers',
            desc: 'Bring union leaders to the table. Listen first.',
            hiddenEffect: 'A binding agreement is reached — pollution drops too.',
            outcome: 'The negotiation sessions were tense but productive. Union leaders, factory management and city officials reached a binding agreement — stricter waste disposal standards, a worker safety fund, and an independent monitoring committee. Street clashes ended within 48 hours. Air quality in the industrial belt improved measurably within a month. Workers felt heard, and Bharatnagar avoided a prolonged conflict.',
            deltas: { health: +5, happiness: +10, budget: -5, pollution: -8, volunteer: +12 }
          },
          {
            icon: '🚔', title: 'Deploy Police Force',
            desc: 'Restore order with a show of force.',
            hiddenEffect: 'Protests go underground. Resentment runs deep.',
            outcome: 'Police deployment dispersed the visible protests within a day. But the underlying grievances — toxic dumping, unsafe working conditions — were never addressed. Workers organised quietly, filed legal complaints, and began a go-slow movement. Factory output dropped 15%. Three months later, a larger, angrier protest erupted. Suppressing dissent had only delayed and intensified the conflict.',
            deltas: { health: -5, happiness: -18, budget: -6, pollution: 0, volunteer: -8 }
          },
          {
            icon: '💰', title: 'Pay Off Factory Owners',
            desc: 'Quietly settle with factory management.',
            hiddenEffect: 'A whistleblower leaks the deal to the press.',
            outcome: 'The settlement was supposed to be confidential — but a junior official leaked the documents to a journalist. Front-page headlines described how the city paid factory owners to keep quiet while workers were still being exposed to toxins. The story went regional. Workers felt betrayed, citizens were outraged, and opposition councillors called for an inquiry. The cover-up cost far more than the crisis ever would have.',
            deltas: { health: -8, happiness: -12, budget: -20, pollution: +5, volunteer: -6 }
          }
        ]
      },
      {
        id: 'budget',
        icon: '📉',
        title: 'State Budget Cut',
        desc: 'The state government slashed Bharatnagar\'s municipal grant by 30%. Projects are stalling.',
        urgency: 'URGENT',
        choices: [
          {
            icon: '🏗️', title: 'Delay Non-Critical Projects',
            desc: 'Pause construction, protect frontline services.',
            hiddenEffect: 'Citizens accept the delay — services hold steady.',
            outcome: 'Pausing the park renovation and smart-street-lighting projects frustrated some residents, but essential services — sanitation, healthcare, schools — continued without disruption. The city communicated transparently about the cuts, which built goodwill. When the state restored funding six months later, the paused projects resumed on schedule. A difficult but responsible call.',
            deltas: { health: 0, happiness: -5, budget: +15, pollution: 0, volunteer: 0 }
          },
          {
            icon: '🏦', title: 'Take a Municipal Loan',
            desc: 'Borrow to keep all projects running.',
            hiddenEffect: 'Interest payments cripple the next budget cycle.',
            outcome: 'Projects continued without visible interruption, which pleased residents short-term. But the loan came with a 9% interest rate, and annual repayments absorbed ₹22 crore from next year\'s budget — money that would have funded a new health centre. The city kept moving, but at a hidden cost that would quietly constrain every decision going forward.',
            deltas: { health: +3, happiness: +5, budget: -10, pollution: 0, volunteer: 0 }
          },
          {
            icon: '🏘️', title: 'Raise Local Property Tax',
            desc: 'Increase taxes on commercial properties only.',
            hiddenEffect: 'Business owners lobby against you, but revenue holds.',
            outcome: 'Commercial property owners formed a lobby group and submitted formal objections. Two prominent businesses threatened to relocate. But the tax increase was legally sound, revenue came in steadily, and services were fully funded. Most residents — who didn\'t pay the increased tax — supported the move as fair. The city\'s finances stabilised, even if a few business relationships turned frosty.',
            deltas: { health: 0, happiness: -10, budget: +20, pollution: 0, volunteer: -5 }
          }
        ]
      },
      {
        id: 'heatwave',
        icon: '☀️',
        title: 'Extreme Heatwave — 48°C',
        desc: 'Record temperatures have killed 12 people. Hospitals are overwhelmed. Power grid is failing.',
        urgency: 'EMERGENCY',
        choices: [
          {
            icon: '🏥', title: 'Open Cooling Centres',
            desc: 'Convert schools & community halls into emergency shelters.',
            hiddenEffect: 'The elderly and children are saved. Goodwill spreads.',
            outcome: '47 cooling centres opened across all wards within 12 hours. Over 18,000 residents — mostly elderly, children and daily wage workers — found shelter and medical support. Heat-related deaths dropped sharply after the first day. Volunteers from local NGOs joined city staff. The heatwave lasted nine days, but Bharatnagar had one of the lowest casualty rates in the region. A human-centred crisis response that citizens remembered.',
            deltas: { health: +10, happiness: +8, budget: -8, pollution: 0, volunteer: +6 }
          },
          {
            icon: '⚡', title: 'Emergency Power Rationing',
            desc: 'Cut power to industry; prioritise hospitals & homes.',
            hiddenEffect: 'Factories lose ₹40 crore — they\'ll remember this.',
            outcome: 'Hospitals received uninterrupted power throughout the crisis, which directly saved lives. Residential areas got priority supply during peak heat hours. Industrial units bore the brunt — factory losses were significant and management lodged strong complaints. But the city\'s infrastructure held, deaths were minimised, and most citizens felt the priorities were right. An unpopular but defensible call.',
            deltas: { health: +5, happiness: +3, budget: -5, pollution: -5, volunteer: 0 }
          },
          {
            icon: '📢', title: 'Issue Public Advisories Only',
            desc: 'Tell people to stay indoors. No infrastructure response.',
            hiddenEffect: 'More deaths follow. The press calls it negligence.',
            outcome: 'Advisories reached those with smartphones and air-conditioned homes — not the daily wage workers, street vendors, and elderly residents who had nowhere cool to go. Heat deaths climbed to 34 over four days. A reporter photographed a construction worker who collapsed on a Bharatnagar road. The image went viral. The National Human Rights Commission sent a notice. The city\'s failure to act when action was possible became defining.',
            deltas: { health: -15, happiness: -20, budget: 0, pollution: 0, volunteer: -8 }
          }
        ]
      }
    ];

    // Rounds after which a crisis can trigger (not round 1 or 10)
    const CRISIS_ROUNDS = [3, 5, 7];
    let usedCrises = [];

    function getZoneStatus(zone, value) {
      if (zone.invert) {
        if (value <= zone.goodThreshold) return 'good';
        if (value <= zone.warnThreshold) return 'warning';
        return 'critical';
      }
      if (value >= zone.goodThreshold) return 'good';
      if (value >= zone.warnThreshold) return 'warning';
      return 'critical';
    }

    function getStatusLabel(status) {
      return { good: '✓ Stable', warning: '⚠ At Risk', critical: '✕ Critical' }[status];
    }

    function buildCityDashboard() {
      const dash = document.getElementById('city-dashboard');
      if (!dash) return;
      dash.innerHTML = CITY_ZONES.map(z => {
        const val = state[z.metricKey];
        const status = getZoneStatus(z, val);
        const barPct = z.invert ? (100 - val) : val;
        const barColor = status === 'good' ? z.barColor : status === 'warning' ? z.barColorWarn : z.barColorCrit;
        return `
          <div class="zone-card zone-${status}" id="${z.id}">
            <div class="zone-header">
              <div class="zone-name">
                <span class="zone-icon">${z.icon}</span>
                ${z.name}
              </div>
              <span class="zone-status status-${status}" id="status-${z.id}">${getStatusLabel(status)}</span>
            </div>
            <div class="zone-desc">${z.desc}</div>
            <div class="zone-bar-wrap">
              <div class="zone-bar-fill" id="zbar-${z.id}"
                style="width:${barPct}%; background:${barColor}"></div>
            </div>
          </div>`;
      }).join('');
    }

    function updateCityDashboard() {
      CITY_ZONES.forEach(z => {
        const val = state[z.metricKey];
        const status = getZoneStatus(z, val);
        const barPct = z.invert ? (100 - val) : val;
        const barColor = status === 'good' ? z.barColor : status === 'warning' ? z.barColorWarn : z.barColorCrit;

        const card = document.getElementById(z.id);
        const statusEl = document.getElementById('status-' + z.id);
        const barEl = document.getElementById('zbar-' + z.id);

        if (card) {
          card.className = `zone-card zone-${status}`;
        }
        if (statusEl) {
          statusEl.className = `zone-status status-${status}`;
          statusEl.textContent = getStatusLabel(status);
        }
        if (barEl) {
          barEl.style.width = barPct + '%';
          barEl.style.background = barColor;
        }
      });
    }

    // ===================================================================
    //  METRICS
    // ===================================================================

    function clamp(v) { return Math.max(0, Math.min(100, v)); }

    function getTrendArrow(key) {
      if (state.history.length < 2) return '';
      const prev = state.history[state.history.length - 1][key];
      const curr = state[key];
      if (curr === undefined || prev === undefined) return '';
      const diff = curr - prev;
      if (Math.abs(diff) < 2) return '<span class="trend-flat">→</span>';
      if (key === 'pollution') {
        // For pollution, down is good
        return diff < 0 ? '<span class="trend-up">↓</span>' : '<span class="trend-down">↑</span>';
      }
      return diff > 0 ? '<span class="trend-up">↑</span>' : '<span class="trend-down">↓</span>';
    }

    function snapshotMetrics() {
      state.history.push({
        health: state.health,
        pollution: state.pollution,
        happiness: state.happiness,
        budget: state.budget,
        volunteer: state.volunteer,
      });
      if (state.history.length > 3) state.history.shift();
    }

    function getMetricColor(key) {
      return { health:'#A78BFA', pollution:'#FDA4AF', happiness:'#E879F9', budget:'#93C5FD', volunteer:'#FCD34D' }[key] || '#A78BFA';
    }

    function renderMetrics() {
      const bar = document.getElementById('metrics-bar');
      const metrics = [
        { key: 'health',    icon: '🏥', label: 'Health',       cls: 'bar-health',    hint: 'City wellness' },
        { key: 'pollution', icon: '🌫️', label: 'Pollution',    cls: 'bar-pollution', hint: 'Lower is better' },
        { key: 'happiness', icon: '😊', label: 'Happiness',    cls: 'bar-happiness', hint: 'Public mood' },
        { key: 'budget',    icon: '💰', label: 'Budget',       cls: 'bar-budget',    hint: 'City funds' },
        { key: 'volunteer', icon: '🌟', label: 'Public Trust', cls: 'bar-volunteer', hint: 'Community amplifier' },
      ];
      bar.innerHTML = metrics.map(m => {
        const v = Math.round(state[m.key]);
        const w = clamp(state[m.key]);
        const color = getMetricColor(m.key);
        // Colour value text based on threshold
        const danger = (m.key === 'pollution') ? v > 70 : v < 30;
        const warn   = (m.key === 'pollution') ? v > 55 : v < 45;
        const valColor = danger ? '#FDA4AF' : warn ? '#FCD34D' : color;
        return `
    <div class="metric-pill" id="pill-${m.key}" title="${m.hint}" style="--pill-color:${color}">
      <span class="icon">${m.icon}</span>
      <div class="metric-info">
        <div class="metric-top">
          <span class="metric-label">${m.label}</span>
          <span class="val" id="val-${m.key}" style="color:${valColor};text-shadow:0 0 10px ${valColor}">${v}${getTrendArrow(m.key)}</span>
        </div>
        <div class="bar-wrap">
          <div class="bar-fill ${m.cls}" id="fill-${m.key}" style="width:${w}%;--pill-color:${color}"></div>
        </div>
      </div>
    </div>`;
      }).join('');
    }

    function spawnDeltaFloat(pill, delta, isGood) {
      const rect = pill.getBoundingClientRect();
      const el = document.createElement('div');
      el.className = 'delta-float';
      el.textContent = (delta > 0 ? '+' : '') + delta;
      el.style.color = isGood ? '#6EE7B7' : '#FDA4AF';
      el.style.left = (rect.left + rect.width / 2 - 16) + 'px';
      el.style.top  = (rect.top - 4) + 'px';
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 1300);
    }

    function animateMetricUpdate(deltas) {
      // Stagger each pill update slightly for drama
      const entries = Object.entries(deltas).filter(([, v]) => v !== 0);
      entries.forEach(([key, delta], idx) => {
        setTimeout(() => {
          const pill  = document.getElementById('pill-' + key);
          const fillEl = document.getElementById('fill-' + key);
          if (!pill) return;

          // Pollution: lower is better, so invert "good"
          const isGood = key === 'pollution' ? delta < 0 : delta > 0;

          // Remove old classes first
          pill.classList.remove('flash-good', 'flash-bad');
          void pill.offsetWidth; // reflow

          pill.classList.add(isGood ? 'flash-good' : 'flash-bad');
          setTimeout(() => pill.classList.remove('flash-good', 'flash-bad'), 700);

          // Update state and bar
          state[key] = clamp(state[key] + delta);
          if (fillEl) {
            fillEl.style.width = clamp(state[key]) + '%';
            fillEl.classList.remove('pulse-up');
            void fillEl.offsetWidth;
            if (isGood) fillEl.classList.add('pulse-up');
            setTimeout(() => fillEl.classList.remove('pulse-up'), 700);
          }

          // Floating delta number
          spawnDeltaFloat(pill, delta, isGood);

        }, idx * 120); // stagger 120ms per metric
      });

      // Re-render after all deltas applied
      const totalDelay = entries.length * 120 + 50;
      setTimeout(() => {
        renderMetrics();
        drawRadar();
      }, totalDelay);
    }

    // ===================================================================
    //  VOLUNTEER TRACKER
    // ===================================================================

    function updateVolunteerUI() {
      const vol = document.getElementById('vol-level');
      const fill = document.getElementById('vol-fill');
      const desc = document.getElementById('vol-desc');

      const v = state.volunteer;
      vol.textContent = Math.round(v) + '%';
      fill.style.width = clamp(v) + '%';

      let label, text;
      if (v < 10) { label = 'Dormant'; text = 'No public trust yet. Community-driven decisions build trust.' }
      else if (v < 25) { label = 'Emerging'; text = 'A small but motivated group. They\'re watching your decisions closely.' }
      else if (v < 45) { label = 'Active'; text = 'Public Trust are running local clean-ups, health camps, and school programmes.' }
      else if (v < 65) { label = 'Thriving'; text = 'A powerful civic network. They\'re amplifying every government action by 2x.' }
      else { label = 'Movement'; text = 'You\'ve built a city-wide civic movement. Bharatnagar is self-sustaining.' }

      desc.innerHTML = `<strong style="color:#F472B6">${label}</strong> — ${text}`;
    }

    // ===================================================================
    //  CHALLENGE LOGIC
    // ===================================================================

    function loadRound() {
      state.chosen = null;
      state.crisisActive = false;

      // Snapshot metrics before this round for trend arrows
      snapshotMetrics();

      // Crisis is now pre-decided in nextRound() to sync with transition banner
      // loadRound() is only called for non-crisis rounds from nextRound()

      const r = ROUNDS[state.round];

      document.getElementById('round-badge').textContent = `CHALLENGE ${r.id} / ${ROUNDS.length}`;
      document.getElementById('round-title').textContent = r.title;
      document.getElementById('round-desc').textContent = r.desc;
      document.getElementById('topbar-meta').textContent = `Mayor ${mayorName} · Challenge ${r.id} of 10 · Bharatnagar`;

      // SDG chips
      document.getElementById('round-sdg').innerHTML = r.sdgs.map(s =>
        `<span class="sdg-chip">${s}</span>`
      ).join('');

      // Real data
      document.getElementById('data-box').innerHTML = r.realData.map(d =>
        `<div class="data-stat"><span>${d.label}</span><span class="data-val">${d.val}</span></div>`
      ).join('');

      // Decision cards — GAME TILE mode
      const grid = document.getElementById('decisions-grid');
      const svgBgs = [
        `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><g stroke="#60A5FA" fill="none" stroke-width="0.8"><line x1="0" y1="40" x2="200" y2="40"/><line x1="0" y1="80" x2="200" y2="80"/><line x1="0" y1="120" x2="200" y2="120"/><line x1="0" y1="160" x2="200" y2="160"/><line x1="40" y1="0" x2="40" y2="200"/><line x1="80" y1="0" x2="80" y2="200"/><line x1="120" y1="0" x2="120" y2="200"/><line x1="160" y1="0" x2="160" y2="200"/><circle cx="40" cy="40" r="3" fill="#60A5FA"/><circle cx="120" cy="80" r="3" fill="#60A5FA"/><circle cx="80" cy="160" r="3" fill="#60A5FA"/><circle cx="160" cy="120" r="3" fill="#60A5FA"/><animateTransform attributeName="transform" type="translate" values="0,0;5,5;0,0" dur="6s" repeatCount="indefinite"/></g></svg>`,
        `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><g stroke="#A78BFA" fill="none" stroke-width="0.8"><polygon points="100,10 130,28 130,64 100,82 70,64 70,28"/><polygon points="100,82 130,100 130,136 100,154 70,136 70,100"/><polygon points="30,46 60,64 60,100 30,118 0,100 0,64"/><polygon points="170,46 200,64 200,100 170,118 140,100 140,64"/><animateTransform attributeName="transform" type="rotate" values="0 100 100;3 100 100;0 100 100" dur="8s" repeatCount="indefinite"/></g></svg>`,
        `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><g stroke="#34D399" fill="none" stroke-width="1"><path d="M0,100 Q50,40 100,100 Q150,160 200,100"><animate attributeName="d" values="M0,100 Q50,40 100,100 Q150,160 200,100;M0,100 Q50,160 100,100 Q150,40 200,100;M0,100 Q50,40 100,100 Q150,160 200,100" dur="4s" repeatCount="indefinite"/></path><path d="M0,80 Q50,20 100,80 Q150,140 200,80" opacity="0.5"><animate attributeName="d" values="M0,80 Q50,20 100,80 Q150,140 200,80;M0,80 Q50,140 100,80 Q150,20 200,80;M0,80 Q50,20 100,80 Q150,140 200,80" dur="4s" repeatCount="indefinite"/></path></g></svg>`,
        `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><g stroke="#F472B6" fill="none" stroke-width="0.8"><g transform="translate(100,100)"><line x1="0" y1="-85" x2="0" y2="85"/><line x1="-85" y1="0" x2="85" y2="0"/><line x1="-60" y1="-60" x2="60" y2="60"/><line x1="60" y1="-60" x2="-60" y2="60"/><circle cx="0" cy="0" r="30" opacity="0.4"/><circle cx="0" cy="0" r="60" opacity="0.2"/><animateTransform attributeName="transform" type="rotate" values="0 0 0;360 0 0" additive="sum" dur="20s" repeatCount="indefinite" calcMode="linear"/></g></g></svg>`,
      ];
      const cardLabels = ['A','B','C','D'];
      grid.innerHTML = r.choices.map((c, i) => {
        const impactTags = Object.entries(c.deltas)
          .filter(([,v]) => v !== 0)
          .map(([k, v]) => {
            const lbl = {health:'🏥',pollution:'🌫️',happiness:'😊',budget:'💰',volunteer:'🌟'}[k] || k;
            const cls = v > 0 ? 'imp-pos' : v < 0 ? 'imp-neg' : 'imp-neu';
            return `<span class="imp-tag ${cls}">${lbl} ${v > 0 ? '+' : ''}${v}</span>`;
          }).join('');
        return `
        <div class="decision-card" id="card-${i}" onclick="choose(${i})">
          <div class="card-bg">${svgBgs[i] || svgBgs[0]}</div>
          <div class="card-orb"></div>
          <div class="card-badge">${cardLabels[i]}</div>
          <div class="card-art">${c.icon}</div>
          <div class="card-reveal">
            <div class="card-title">${c.title}</div>
            <div class="card-desc">${c.desc}</div>
            <div class="card-hidden-hint">🔍 EFFECTS REVEALED AFTER DECISION</div>
            ${c.volunteerBonus > 0 ? '<div class="volunteer-note">🤝 COMMUNITY-DRIVEN</div>' : ''}
          </div>
          <div class="impact-preview">${impactTags}</div>
        </div>`;
      }).join('');

      document.getElementById('outcome-box').classList.remove('visible');
      updateVolunteerUI();
      renderMetrics();
      drawRadar();
      updateCityDashboard();
      updateCityMood();
      updateCityMap();
      renderProgressStrip();
      playRoundStart();
      showAdvisor();
      startTimer(r.choices);
      state._decisionStartTime = Date.now();
    }

    function loadCrisisRound(crisis) {
      playCrisisAlarm();
      renderProgressStrip();
      document.getElementById('round-badge').innerHTML = `<span class="crisis-badge-text">⚡ ${crisis.urgency}</span>`;
      document.getElementById('round-title').textContent = crisis.title;
      document.getElementById('round-desc').textContent = crisis.desc;
      document.getElementById('topbar-meta').textContent = `Mayor ${mayorName} · Crisis Event · Bharatnagar`;
      document.getElementById('round-sdg').innerHTML = `<span class="sdg-chip crisis-sdg">⚡ Unplanned Crisis</span>`;

      // Keep existing real data visible
      // Crisis screen flash
      const flash = document.createElement('div');
      flash.style.cssText = 'position:fixed;inset:0;background:rgba(239,68,68,0.12);z-index:9999;pointer-events:none;animation:crisisFlash 0.6s ease both';
      document.body.appendChild(flash);
      setTimeout(() => flash.remove(), 700);

      const grid = document.getElementById('decisions-grid');
      const crisisSvg = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><g stroke="#F87171" fill="none" stroke-width="0.8"><polygon points="100,5 195,195 5,195"><animateTransform attributeName="transform" type="rotate" values="0 100 100;4 100 100;0 100 100;-4 100 100;0 100 100" dur="3s" repeatCount="indefinite"/></polygon><polygon points="100,35 170,175 30,175" opacity="0.4"/></g></svg>`;
      grid.innerHTML = crisis.choices.map((c, i) => `
        <div class="decision-card crisis-card" id="card-crisis-${i}" onclick="chooseCrisis('${crisis.id}', ${i})" style="--ca:#F87171;--cg:rgba(248,113,113,0.35);--cd:#3d0f0f">
          <div class="card-bg">${crisisSvg}</div>
          <div class="card-orb" style="background:radial-gradient(circle,#F87171 0%,transparent 70%)"></div>
          <div class="card-badge" style="color:#F87171;border-color:#F87171">${['A','B','C'][i]}</div>
          <div class="card-art">${c.icon}</div>
          <div class="card-reveal">
            <div class="card-title">${c.title}</div>
            <div class="card-desc">${c.desc}</div>
            <div class="card-hidden-hint">⚡ CONSEQUENCE REVEALED AFTER ACTION</div>
          </div>
        </div>
      `).join('');

      document.getElementById('outcome-box').classList.remove('visible');
      renderMetrics();
      updateCityDashboard();
      updateCityMap();
      showAdvisor();
      startTimer(crisis.choices);
      state._decisionStartTime = Date.now();
    }

    // ═══════════════════════════════════════
    //  PARTICLE BURST + TOAST POPUP
    // ═══════════════════════════════════════
    function spawnParticles(x, y, color) {
      const count = 22;
      for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const angle = (360 / count) * i + (Math.random() * 20 - 10);
        const dist  = 60 + Math.random() * 80;
        const size  = 4 + Math.random() * 6;
        const dur   = 0.55 + Math.random() * 0.45;
        const rad   = angle * Math.PI / 180;
        p.style.cssText = `
          width:${size}px; height:${size}px;
          background:${color};
          left:${x - size/2}px; top:${y - size/2}px;
          box-shadow: 0 0 ${size*2}px ${color};
          --dx:${Math.cos(rad)*dist}px;
          --dy:${Math.sin(rad)*dist}px;
          --dur:${dur}s;
        `;
        document.body.appendChild(p);
        setTimeout(() => p.remove(), dur * 1000 + 100);
      }
    }

    const TOAST_DATA = [
      { emoji:'⚡', label:'POLICY DEPLOYED',  color:'#60A5FA' },
      { emoji:'🔮', label:'DECISION LOCKED',  color:'#A78BFA' },
      { emoji:'🌿', label:'ACTION TAKEN',     color:'#34D399' },
      { emoji:'💥', label:'MANDATE ISSUED',   color:'#F472B6' },
    ];
    const CRISIS_TOAST = { emoji:'🚨', label:'CRISIS RESPONSE', color:'#F87171' };

    function showToast(cardIdx, title, isCrisis) {
      const td = isCrisis ? CRISIS_TOAST : (TOAST_DATA[cardIdx] || TOAST_DATA[0]);
      const toast = document.createElement('div');
      toast.className = 'game-toast';
      toast.style.setProperty('--toast-color', td.color);
      toast.innerHTML = `
        <div class="toast-emoji">${td.emoji}</div>
        <div class="toast-title">${td.label}</div>
        <div class="toast-msg">${title}</div>
      `;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 2400);
    }


    // ══════════════════════════════════════════
    //  BEST OPTION ANALYSIS
    // ══════════════════════════════════════════
    // Weight each metric by social-development importance
    const METRIC_WEIGHTS = {
      health: 2.0,      // top priority — lives
      pollution: 1.8,   // environmental justice
      happiness: 1.4,   // quality of life
      budget: 0.8,      // enabler
      volunteer: 1.2,   // community trust
    };

    function scoreChoice(deltas) {
      let total = 0;
      Object.entries(deltas).forEach(([k, v]) => {
        const w = METRIC_WEIGHTS[k] || 1;
        // Pollution: lower is better, so invert
        const adjusted = k === 'pollution' ? -v : v;
        total += adjusted * w;
      });
      return Math.round(total * 10) / 10;
    }

    function getBestChoice(choices) {
      let bestIdx = 0, bestScore = -Infinity;
      choices.forEach((c, i) => {
        const s = scoreChoice(c.deltas);
        if (s > bestScore) { bestScore = s; bestIdx = i; }
      });
      return { idx: bestIdx, score: bestScore, choice: choices[bestIdx] };
    }

    function showBestOption(chosenIdx, choices) {
      const best      = getBestChoice(choices);
      const yourScore = scoreChoice(choices[chosenIdx].deltas);
      const isBest    = best.idx === chosenIdx;
      const bestWrap  = document.getElementById('popup-best-wrap');
      if (!bestWrap) return;

      const metricNames = { health:'Health', pollution:'Air Quality', happiness:'Happiness', budget:'Budget', volunteer:'Public Trust' };

      // Build reason from top gains of the best option
      const topGains = Object.entries(best.choice.deltas)
        .map(([k, v]) => ({ k, adj: k === 'pollution' ? -v : v, abs: Math.abs(v) }))
        .filter(x => x.adj > 0)
        .sort((a, b) => (b.adj * (METRIC_WEIGHTS[b.k]||1)) - (a.adj * (METRIC_WEIGHTS[a.k]||1)))
        .slice(0, 2);

      const reasonParts = topGains.map(x => `+${x.abs} ${metricNames[x.k]}`);

      const icon    = isBest ? '🏆' : '💡';
      const label   = isBest ? '✅ OPTIMAL DECISION' : '💡 BETTER OPTION EXISTED';
      const verdict = isBest
        ? 'You chose the best option for Bharatnagar! 🎉'
        : "A stronger option was available.";
      const reason  = isBest
        ? `Maximising ${reasonParts.join(' and ')} — the highest social impact this challenge.`
        : `The better pick would have gained ${reasonParts.join(', ')} — stronger for community well-being.`;

      const popup = document.createElement('div');
      popup.className = 'popup-card popup-best ' + (isBest ? 'popup-best-good' : '');
      popup.innerHTML = `
        <div class="popup-label">${icon} ${label}</div>
        <div class="best-verdict">${verdict}</div>
        ${!isBest ? `<div class="best-option-highlight">${best.choice.icon} ${best.choice.title}</div>` : ''}
        <div class="best-reason">${reason}</div>
        <div class="best-scores">
          <span class="bscore bscore-yours">YOUR IMPACT  ${yourScore > 0 ? '+' : ''}${yourScore}</span>
          ${!isBest ? `<span class="bscore bscore-best">BEST IMPACT  +${Math.round(best.score*10)/10}</span>` : ''}
        </div>`;
      bestWrap.appendChild(popup);

      // Highlight best card visually if user didn't pick it (works for both normal + crisis cards)
      if (!isBest) {
        const bestCard = document.getElementById('card-' + best.idx)
                      || document.getElementById('card-crisis-' + best.idx);
        if (bestCard) {
          bestCard.classList.remove('unchosen');
          bestCard.classList.add('best-card');
          const lbl = document.createElement('div');
          lbl.className = 'best-card-label';
          lbl.textContent = '⭐ BEST';
          bestCard.appendChild(lbl);
        }
      }
    }

    function choose(idx) {
      if (state.chosen !== null) return;
      state.chosen = idx;
      playCardClick();

      const r = ROUNDS[state.round];
      const c = r.choices[idx];

      // Particle burst + toast
      const card = document.getElementById('card-' + idx);
      if (card) {
        const rect = card.getBoundingClientRect();
        const colors = ['#60A5FA','#A78BFA','#34D399','#F472B6'];
        spawnParticles(rect.left + rect.width/2, rect.top + rect.height/2, colors[idx] || '#A78BFA');
      }
      showToast(idx, c.title, false);

      // Mark cards chosen/unchosen
      r.choices.forEach((ch, i) => {
        const card = document.getElementById('card-' + i);
        if (!card) return;
        card.classList.add(i === idx ? 'chosen' : 'unchosen');
        if (i === idx) {
          // Reveal effects on chosen card
          const hint = card.querySelector('.card-hidden-hint');
          if (hint) hint.outerHTML = `<div class="card-effects">${
            c.effects.map(e => `<span class="effect-tag ${e.startsWith('+') ? 'effect-pos' : e.startsWith('−') || e.startsWith('-') ? 'effect-neg' : 'effect-neu'}">${e}</span>`).join('')
          }</div>`;
        }
      });

      // Apply deltas with volunteer multiplier
      const volMultiplier = 1 + (state.volunteer / 200);
      const scaledDeltas = {};
      Object.entries(c.deltas).forEach(([k, v]) => {
        if (k === 'volunteer') {
          scaledDeltas[k] = v + c.volunteerBonus;
        } else {
          scaledDeltas[k] = v > 0 ? Math.round(v * volMultiplier) : v;
        }
      });

      animateMetricUpdate(scaledDeltas);
      const choseBest = getBestChoice(r.choices).idx === idx;
      showOutcome(c.outcome, scaledDeltas, null, choseBest);
      setTimeout(() => showBestOption(idx, r.choices), 2200);

      // Audio + visual feedback
      if (choseBest) {
        playGoodChoice();
        if (state.round === 0) setTimeout(launchConfetti, 800); // mini confetti on first optimal
      } else {
        playBadChoice();
        triggerScreenShake();
        triggerRedFlash();
      }

      // Fast decision tracking
      const elapsed = Date.now() - (state._decisionStartTime || Date.now());
      if (elapsed < 5000) { state._fastDecision = true; }

      // SDG educational insight (delayed so it doesn't compete with typewriter)
      setTimeout(() => showSDGInsight(scaledDeltas), 3500);

      // Check achievements after metric update
      setTimeout(() => checkAchievements(), 100);

      // Log for progress strip
      progressLog[state.round] = { isCrisis: false, isBest: choseBest };
      renderProgressStrip();

      addLog(r.id, c.title);
      updateVolunteerUI();
      updateCityDashboard();
      updateCityMood();
      updateCityMap();
      clearTimer();
    }

    function chooseCrisis(crisisId, idx) {
      const crisis = CRISIS_EVENTS.find(c => c.id === crisisId);
      if (!crisis) return;
      playCardClick();

      // Disable all crisis cards
      crisis.choices.forEach((ch, i) => {
        const card = document.getElementById('card-crisis-' + i);
        if (!card) return;
        card.classList.add(i === idx ? 'chosen' : 'unchosen');
        const hint = card.querySelector('.card-hidden-hint');
        if (hint) hint.outerHTML = `<div class="crisis-reveal">💡 <em>${ch.hiddenEffect}</em></div>`;
      });

      const c = crisis.choices[idx];
      animateMetricUpdate(c.deltas);
      const choseBest = getBestChoice(crisis.choices).idx === idx;
      showOutcome(c.outcome, c.deltas, true, choseBest);
      setTimeout(() => showBestOption(idx, crisis.choices), 2200);

      if (choseBest) {
        playGoodChoice();
      } else {
        playBadChoice();
        triggerScreenShake();
        triggerRedFlash();
      }

      const crisisElapsed = Date.now() - (state._decisionStartTime || Date.now());
      if (crisisElapsed < 5000) { state._fastDecision = true; }

      setTimeout(() => showSDGInsight(c.deltas), 3500);
      setTimeout(() => checkAchievements(), 100);

      progressLog[state.round] = { isCrisis: true, isBest: choseBest };
      renderProgressStrip();

      addLog('⚡', `[Crisis] ${c.title}`);
      updateVolunteerUI();
      updateCityDashboard();
      updateCityMood();
      updateCityMap();
      clearTimer();
    }

    let _typewriterTimer = null;
    function typewriterText(el, text, onDone) {
      // Cancel any in-progress typewriter run
      if (_typewriterTimer !== null) {
        clearTimeout(_typewriterTimer);
        _typewriterTimer = null;
      }
      el.textContent = '';
      el.classList.add('typing');
      let i = 0;
      const speed = Math.max(12, Math.min(28, 2200 / text.length));
      const tick = () => {
        if (i < text.length) {
          el.textContent += text[i++];
          _typewriterTimer = setTimeout(tick, speed);
        } else {
          _typewriterTimer = null;
          el.classList.remove('typing');
          if (onDone) onDone();
        }
      };
      tick();
    }

    function showOutcome(text, deltas, isCrisis, isBest) {
      const outcomeBox  = document.getElementById('outcome-box');
      const textEl      = document.getElementById('outcome-text');
      const deltasEl    = document.getElementById('outcome-deltas');
      const bestWrap    = document.getElementById('popup-best-wrap');
      const storyPopup  = document.getElementById('popup-story');
      const labels = {
        health:    '🏥 Health',
        pollution: '🌫️ Air Quality',
        happiness: '😊 Happiness',
        budget:    '💰 Budget',
        volunteer: '🌟 Public Trust'
      };

      deltasEl.innerHTML = '';
      if (bestWrap) bestWrap.innerHTML = '';
      outcomeBox.classList.add('visible');

      // Theme the story popup based on whether user picked optimally
      if (storyPopup && isBest === false) {
        storyPopup.classList.add('popup-story-warn');
      } else if (storyPopup) {
        storyPopup.classList.remove('popup-story-warn');
      }

      typewriterText(textEl, text, () => {
        const chips = Object.entries(deltas).filter(([, v]) => v !== 0);
        chips.forEach(([k, v], i) => {
          const chip = document.createElement('span');
          chip.className = `delta-chip ${v > 0 ? 'delta-pos' : 'delta-neg'}`;
          chip.style.animationDelay = `${i * 90}ms`;
          chip.textContent = `${labels[k] || k}  ${v > 0 ? '+' : ''}${v}`;
          deltasEl.appendChild(chip);
        });
      });

      const nextRoundNum = state.round + 1;
      const btn = document.getElementById('btn-next');
      btn.textContent = isCrisis ? '⚡ Continue' :
        nextRoundNum >= ROUNDS.length ? '🏆 See Your Legacy' : '▶ Next Challenge';
    }

    function addLog(round, title) {
      state.log.unshift({ round, title });
      const log = document.getElementById('history-log');
      log.innerHTML = state.log.map(e =>
        `<div class="log-entry"><span class="log-round">Y${e.round}</span>${e.title}</div>`
      ).join('');
    }

    function nextRound() {
      if (!state.crisisActive) {
        state.round++;
      }
      state.crisisActive = false;
      state.chosen = null;

      playNextRound();

      if (state.round >= ROUNDS.length) {
        playTransition('LEGACY', () => showEndScreen());
        return;
      }
      // Decide now if a crisis will fire so the transition banner matches
      const roundNum = state.round + 1;
      const cfg = DIFFICULTY_CONFIG[difficulty];
      const available = CRISIS_EVENTS.filter(c => !usedCrises.includes(c.id));
      const crisisRoll = CRISIS_ROUNDS.includes(roundNum) && available.length > 0 && Math.random() < cfg.eventChance;
      let preselectedCrisis = null;
      if (crisisRoll) {
        preselectedCrisis = available[Math.floor(Math.random() * available.length)];
        usedCrises.push(preselectedCrisis.id);
      }
      const label = preselectedCrisis ? '\u26a1 EMERGENCY' : `CHALLENGE ${roundNum}`;
      playTransition(label, () => {
        if (preselectedCrisis) {
          state.crisisActive = true;
          loadCrisisRound(preselectedCrisis);
        } else {
          loadRound();
        }
        document.querySelector('.main-panel')?.scrollTo(0, 0);
        window.scrollTo(0, 0);
      });
    }

    function restartGame() {
      usedCrises = [];
      stopAmbient();
      document.body.classList.remove('hard-mode');
      showScreen('intro');
    }

    // ===================================================================
    //  END SCREEN
    // ===================================================================

    function showEndScreen() {
      showScreen('end');
      // Fade music on end screen
      if (ambientNode) {
        try { ambientNode.gain.setTargetAtTime(0.02, getAudio().currentTime, 1.5); } catch(e){}
      }

      // ── SCORING: blend absolute metric achievement + improvement ──────────
      // Each metric scored 0-100 based on final value, then weighted by SDG priority.
      // Budget scored separately — penalise collapse but don't punish social spending.

      const healthScore    = Math.min(100, state.health);              // higher = better
      const airScore       = Math.min(100, 100 - state.pollution);     // lower pollution = better
      const happyScore     = Math.min(100, state.happiness);
      const trustScore     = Math.min(100, state.volunteer);

      // Budget: reward staying above 20, neutral up to starting value, mild penalty below
      const budgetScore    = state.budget >= 40 ? 100
                           : state.budget >= 20 ? 50 + (state.budget - 20)
                           : Math.max(0, state.budget * 2);            // collapse punished hard

      // Weighted average (SDG priorities: health + air most important)
      const weights   = { h: 2.2, a: 2.0, hap: 1.6, t: 1.4, b: 0.8 };
      const wTotal    = weights.h + weights.a + weights.hap + weights.t + weights.b;
      const weighted  = (healthScore * weights.h + airScore * weights.a +
                         happyScore * weights.hap + trustScore * weights.t +
                         budgetScore * weights.b) / wTotal;

      // Hard penalties for true disasters
      let penalty = 0;
      if (state.health     <  25) penalty += 12;
      if (state.pollution  >  85) penalty += 12;
      if (state.happiness  <  20) penalty +=  8;
      if (state.budget     <  10) penalty += 10;

      const score = Math.max(0, Math.min(100, Math.round(weighted - penalty)));

      let grade, gradeClass, title, verdict;
      if (score >= 80) {
        grade = 'A'; gradeClass = 'grade-A';
        title = '🌟 Legendary Mayor';
        verdict = 'Exceptional governance. You balanced immediate relief with long-term reform, built a civic community movement, and brought the SDGs from paper to practice. Bharatnagar is now a model for cities across India. This took real skill.';
      } else if (score >= 62) {
        grade = 'B'; gradeClass = 'grade-B';
        title = '👍 Capable Mayor';
        verdict = 'Solid governance with some missed opportunities. You improved the city meaningfully but left potential on the table — perhaps letting pollution linger, or missing chances to build civic trust. Bharatnagar is better, not transformed.';
      } else if (score >= 44) {
        grade = 'C'; gradeClass = 'grade-C';
        title = '⚖️ Struggling Mayor';
        verdict = 'Mixed results. Some decisions backfired, others never paid off. The city is roughly where it started on key SDG indicators. Urban governance is hard — but the gap between intent and impact here was wide. Citizens expected more.';
      } else if (score >= 24) {
        grade = 'D'; gradeClass = 'grade-D';
        title = '🏚️ The City Paid the Price';
        verdict = 'Poor governance left lasting damage. Short-term thinking, missed crises, and neglected fundamentals pushed Bharatnagar backwards. The SDGs aren\'t aspirational — they measure real lives lost and futures denied. These decisions had consequences.';
      } else {
        grade = 'F'; gradeClass = 'grade-D';
        title = '💀 City in Collapse';
        verdict = 'Bharatnagar is in crisis. Pollution is toxic, citizens are fleeing, and the treasury is dry. This wasn\'t just bad governance — it was negligence at scale. In a real city, this means preventable deaths, broken families, and a generation without opportunity.';
      }

      document.getElementById('end-grade').textContent = grade;
      document.getElementById('end-grade').className = 'end-grade ' + gradeClass;
      document.getElementById('end-title').textContent = title;
      const verdictEl = document.getElementById('end-verdict');
      const diffLabel = {easy:'Easy',medium:'Medium',hard:'Hard'}[difficulty];
      if (verdictEl) verdictEl.innerHTML = `<div class="city-narrative">${verdict}<br><br><strong>Difficulty:</strong> ${diffLabel} &nbsp;·&nbsp; <strong>Decisions Made:</strong> ${state.log.length}</div>`;

      if (grade === 'A') { setTimeout(launchConfetti, 600); playVictoryFanfare(); }

      currentScore = score;
      // Reset submit area
      const submitArea = document.getElementById('lb-submit-area');
      if (submitArea) submitArea.style.opacity = '1';
      const nameInput = document.getElementById('lb-name-input');
      if (nameInput) { nameInput.value = mayorName; nameInput.disabled = false; }
      const submitBtn = document.getElementById('lb-submit-btn');
      if (submitBtn) submitBtn.disabled = false;
      const submitStatus = document.getElementById('lb-submit-status');
      if (submitStatus) submitStatus.textContent = '';

      const metrics = [
        { label:'Health',  val: state.health,        color:'#60A5FA' },
        { label:'Air',     val: 100-state.pollution, color:'#34D399' },
        { label:'Happy',   val: state.happiness,     color:'#F472B6' },
        { label:'Budget',  val: state.budget,        color:'#FCD34D' },
        { label:'Trust',   val: state.volunteer,     color:'#A78BFA' },
      ];
      document.getElementById('end-stats').innerHTML = `
        <div class="metric-ring-wrap">
          ${metrics.map(m => `
            <div class="metric-ring">
              <div style="font-family:'Space Mono',monospace;font-size:0.72rem;color:${m.color};margin-bottom:0.2rem">${Math.round(m.val)}</div>
              <div class="metric-ring-bar">
                <div class="metric-ring-fill" style="height:${Math.max(2,Math.round(m.val))}%;background:${m.color};opacity:0.85"></div>
              </div>
              <div class="metric-ring-label">${m.label}</div>
            </div>`).join('')}
        </div>
        <div class="end-stat-card" style="width:100%;text-align:center;margin-top:0.5rem">
          <div class="end-stat-val" style="color:#A78BFA;font-size:2.2rem">${score}</div>
          <div class="end-stat-label">Sustainability Score / 100</div>
        </div>
      `;

      document.getElementById('sdg-reflection').innerHTML = `
    <div class="sdg-ref-title">🌐 SDG Alignment Achieved</div>
    ${[
          { sdg: 'SDG 3 · Good Health', score: state.health, note: 'Health infrastructure, sanitation, and clean air decisions' },
          { sdg: 'SDG 11 · Sustainable Cities', score: Math.round((state.health + state.happiness) / 2), note: 'Urban planning, flood resilience, inclusive infrastructure' },
          { sdg: 'SDG 13 · Climate Action', score: Math.round(100 - state.pollution), note: 'Pollution control, green energy, flood management' },
          { sdg: 'SDG 17 · Partnerships', score: state.volunteer, note: 'NGO collaboration, civic engagement, public trusts' },
        ].map(item => `
      <div class="sdg-ref-item">
        <strong>${item.sdg}</strong> &nbsp;
        <span style="color:${item.score > 60 ? '#A78BFA' : item.score > 35 ? '#60A5FA' : '#F43F5E'};font-family:Space Mono,monospace;font-size:0.8rem">${item.score}/100</span>
        <br><span style="font-size:0.75rem;color:#94A3B8">${item.note}</span>
      </div>
    `).join('')}
  `;

      // ── Render achievement summary ────────────────────────────────
      const achEl = document.getElementById('end-achievements');
      if (achEl) {
        const earned = ACHIEVEMENTS.filter(a => unlockedAchs.has(a.id));
        if (earned.length > 0) {
          achEl.innerHTML = `
            <div class="ach-section-title">🏅 Achievements Unlocked</div>
            <div class="ach-grid">
              ${earned.map(a => `
                <div class="ach-badge">
                  <span class="ach-icon">${a.icon}</span>
                  <div>
                    <div style="font-weight:700;font-size:0.8rem">${a.name}</div>
                    <div style="font-size:0.65rem;color:#94A3B8">${a.desc}</div>
                  </div>
                </div>`).join('')}
            </div>`;
        } else {
          achEl.innerHTML = '<div style="font-size:0.75rem;color:#64748B;margin-top:0.5rem">No achievements unlocked yet. Try again on Hard mode!</div>';
        }
      }

      // ── Performance bars for end screen stat cards ──────────────
      // Animate stat values counting up
      document.querySelectorAll('.end-stat-val[data-target]').forEach(el => {
        const target = parseInt(el.dataset.target);
        let cur = 0;
        const step = Math.ceil(target / 30);
        const t = setInterval(() => {
          cur = Math.min(cur + step, target);
          el.textContent = cur + (el.dataset.suffix || '');
          if (cur >= target) clearInterval(t);
        }, 40);
      });

      // ── Confetti for final A grade ────────────────────────────────
      if (grade === 'A') { setTimeout(launchConfetti, 1200); }

      // Load global leaderboard
      loadLeaderboard();
    }

    // ===================================================================
    //  LEADERBOARD (shared persistent storage)
    // ===================================================================

    let currentScore = 0;
    let scoreSubmitted = false;

    // ── localStorage leaderboard helpers ────────────────────────────────────
    const LB_KEY = 'civicpulse_leaderboard';

    function lbLoad() {
      try { return JSON.parse(localStorage.getItem(LB_KEY) || '[]'); }
      catch { return []; }
    }

    function lbSave(entries) {
      try { localStorage.setItem(LB_KEY, JSON.stringify(entries)); } catch {}
    }

    function loadLeaderboard() {
      const list = document.getElementById('lb-list');
      if (!list) return;

      const entries = lbLoad()
        .sort((a, b) => b.score - a.score)
        .slice(0, 15);

      if (entries.length === 0) {
        list.innerHTML = '<div class="lb-loading">No scores yet — be the first!</div>';
        return;
      }

      const rankIcons = ['🥇', '🥈', '🥉'];
      const rankClass = ['lb-top1', 'lb-top2', 'lb-top3'];
      const rankColor = ['gold', 'silver', 'bronze'];

      list.innerHTML = entries.map((e, i) => {
        const isMine = e.id === state.playerId;
        return `
          <div class="lb-entry ${i < 3 ? rankClass[i] : ''} ${isMine ? 'lb-mine' : ''}">
            <div class="lb-rank ${i < 3 ? rankColor[i] : ''}">${i < 3 ? rankIcons[i] : '#' + (i + 1)}</div>
            <div class="lb-info">
              <div class="lb-name">${escHtml(e.name)}${isMine ? ' <span style="color:#A78BFA;font-size:0.6rem">(you)</span>' : ''}</div>
              <div class="lb-meta">
                <span>🏥 ${e.health}</span>
                <span>🌫️ ${e.pollution}</span>
                <span>😊 ${e.happiness}</span>
                <span>💰 ${e.budget}</span>
                <span>🌟 ${e.volunteer}</span>
              </div>
            </div>
            <div class="lb-score-col">
              <div class="lb-score">${e.score}</div>
              <div class="lb-grade">Grade ${e.grade}</div>
            </div>
          </div>`;
      }).join('');
    }

    function submitScore() {
      if (scoreSubmitted) return;
      const nameInput = document.getElementById('lb-name-input');
      const btn       = document.getElementById('lb-submit-btn');
      const status    = document.getElementById('lb-submit-status');
      const name      = (nameInput?.value || '').trim();

      if (!name) {
        status.className = 'lb-submit-status lb-status-err';
        status.textContent = '⚠ Please enter a name first.';
        return;
      }

      const entry = {
        id:        state.playerId,
        name:      name.slice(0, 20),
        score:     currentScore,
        grade:     document.getElementById('end-grade')?.textContent || '?',
        health:    Math.round(state.health),
        pollution: Math.round(state.pollution),
        happiness: Math.round(state.happiness),
        budget:    Math.round(state.budget),
        volunteer: Math.round(state.volunteer),
        ts:        Date.now(),
      };

      // Upsert by playerId
      const all = lbLoad().filter(e => e.id !== entry.id);
      all.push(entry);
      lbSave(all);

      scoreSubmitted = true;
      btn.disabled = true;
      status.className = 'lb-submit-status lb-status-ok';
      status.textContent = '✓ Score saved! See your rank below.';
      document.getElementById('lb-submit-area').style.opacity = '0.5';
      nameInput.disabled = true;
      loadLeaderboard();
    }

    function escHtml(str) {
      return str.replace(/[&<>"']/g, c =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])
      );
    }

    // ===================================================================
    //  INTRO SCREEN EFFECTS
    // ===================================================================

    (function initIntroEffects() {
      // Stars
      const starsLayer = document.getElementById('stars-layer');
      if (starsLayer) {
        for (let i = 0; i < 80; i++) {
          const star = document.createElement('div');
          star.className = 'star';
          const size = Math.random() * 2.5 + 0.5;
          star.style.cssText = `
            width:${size}px;height:${size}px;
            top:${Math.random() * 70}%;
            left:${Math.random() * 100}%;
            animation-duration:${1.5 + Math.random() * 3}s;
            animation-delay:${Math.random() * 4}s;
          `;
          starsLayer.appendChild(star);
        }
      }

      // Particles
      const canvas = document.getElementById('particles-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');

      function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      resize();
      window.addEventListener('resize', resize);

      const COLORS = ['#60A5FA', '#A78BFA', '#F472B6', '#818CF8', '#34D399'];
      const particles = Array.from({ length: 55 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5 - 0.15,
        r: Math.random() * 2 + 0.5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        alpha: Math.random() * 0.6 + 0.2,
        pulse: Math.random() * Math.PI * 2,
      }));

      function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
          p.pulse += 0.02;
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = canvas.width;
          if (p.x > canvas.width) p.x = 0;
          if (p.y < 0) p.y = canvas.height;
          if (p.y > canvas.height) p.y = 0;

          const a = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse));
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = a;
          ctx.fill();
          ctx.globalAlpha = 1;
        });

        // Draw connecting lines between nearby particles
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 100) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = '#8B5CF6';
              ctx.globalAlpha = (1 - dist / 100) * 0.12;
              ctx.lineWidth = 0.8;
              ctx.stroke();
              ctx.globalAlpha = 1;
            }
          }
        }
        requestAnimationFrame(drawParticles);
      }
      drawParticles();
    })();

    // ═══════════════════════════════════════════════════════════════════
    //  MODULE 1: NEWS TICKER SYSTEM
    // ═══════════════════════════════════════════════════════════════════
    const NEWS_HEADLINES = {
      default: [
        { text: "Bharatnagar City Council in session — critical decisions ahead", cls: "news-neutral" },
        { text: "Mayor's office reports 4.1 million residents watching policy outcomes", cls: "news-neutral" },
        { text: "UN SDG tracking dashboard updated — city metrics under review", cls: "news-neutral" },
        { text: "Community volunteers mobilizing across Bharatnagar districts", cls: "news-neutral" },
      ],
      good: [
        { text: "🌿 Mayor launches landmark green initiative — citizens applaud", cls: "news-good" },
        { text: "🏥 Health metrics surge following decisive policy action", cls: "news-good" },
        { text: "😊 Bharatnagar happiness index reaches record high", cls: "news-good" },
        { text: "🌟 Public trust in city administration at all-time high", cls: "news-good" },
        { text: "💧 Clean water access expanded to underserved neighbourhoods", cls: "news-good" },
        { text: "🌱 Green zone expansion praised by environmental groups", cls: "news-good" },
        { text: "📈 City sustainability score climbs — national recognition follows", cls: "news-good" },
        { text: "🤝 NGO partnerships delivering results on the ground", cls: "news-good" },
      ],
      bad: [
        { text: "⚠️ Industrial pollution sparks citizen outrage across Bharatnagar", cls: "news-bad" },
        { text: "😡 Protests erupt as residents demand better healthcare access", cls: "news-bad" },
        { text: "💸 Budget crisis deepens — city services under threat", cls: "news-bad" },
        { text: "🌫️ Air quality hits dangerous levels — health emergency possible", cls: "news-bad" },
        { text: "🚨 Public trust collapses following controversial decision", cls: "news-bad" },
        { text: "📉 City metrics declining — pressure mounts on administration", cls: "news-bad" },
      ],
      crisis: [
        { text: "🚨 BREAKING: Emergency situation declared in Bharatnagar", cls: "news-bad" },
        { text: "⚡ Crisis response teams deployed across the city", cls: "news-bad" },
        { text: "🆘 Mayor under pressure to act decisively on unfolding crisis", cls: "news-bad" },
      ]
    };

    let currentNewsHeadlines = [...NEWS_HEADLINES.default];

    function updateNewsTicker(type, customHeadline) {
      const inner = document.getElementById('news-ticker-inner');
      if (!inner) return;

      if (customHeadline) {
        // Inject breaking news item at the front
        const breakingItem = `<span class="news-item news-bad">🔴 BREAKING: ${customHeadline}</span>`;
        const existingContent = inner.innerHTML;
        inner.innerHTML = breakingItem + '&nbsp;&nbsp;&nbsp;' + breakingItem + '&nbsp;&nbsp;&nbsp;' + existingContent;
        return;
      }

      const pool = type === 'good' ? [...NEWS_HEADLINES.default, ...NEWS_HEADLINES.good]
                  : type === 'bad' ? [...NEWS_HEADLINES.default, ...NEWS_HEADLINES.bad]
                  : type === 'crisis' ? NEWS_HEADLINES.crisis
                  : NEWS_HEADLINES.default;

      // Shuffle and pick 6-8 items, then duplicate for seamless loop
      const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, 8);
      const doubled = [...shuffled, ...shuffled];
      inner.innerHTML = doubled.map(h => `<span class="news-item ${h.cls}">${h.text}</span>`).join('');

      // Restart animation
      inner.classList.add('paused');
      void inner.offsetWidth;
      inner.classList.remove('paused');
    }

    function initNewsTicker() {
      updateNewsTicker('default');
    }

    // ═══════════════════════════════════════════════════════════════════
    //  MODULE 2: CITIZEN REACTION SYSTEM
    // ═══════════════════════════════════════════════════════════════════
    const GOOD_REACTIONS = ['🎉','😄','🙌','👏','🥳','💚','✊','🌟','😊','🎊'];
    const BAD_REACTIONS  = ['😤','😠','✊','😡','📢','😢','👎','😤','🪧','😤'];
    const NEUTRAL_REACTIONS = ['🤔','😐','👀','🧐','💭','🫤'];

    const GOOD_SPEECHES = [
      "Great decision!", "Thank you Mayor!", "This is progress!",
      "Our city is growing!", "Finally some good news!", "Well done!",
      "This changes everything!", "We believe in you!"
    ];
    const BAD_SPEECHES = [
      "We deserve better!", "Not good enough!", "We're watching you!",
      "Fix this now!", "Unacceptable!", "Resign!", "Citizens matter!",
      "This hurts us!"
    ];

    function triggerCitizenReactions(sentiment, count = 8) {
      const container = document.getElementById('citizen-reactions');
      if (!container) return;

      const emojis = sentiment === 'good' ? GOOD_REACTIONS
                   : sentiment === 'bad' ? BAD_REACTIONS : NEUTRAL_REACTIONS;
      const speeches = sentiment === 'good' ? GOOD_SPEECHES : BAD_SPEECHES;
      const cls = sentiment === 'good' ? 'citizen-good' : sentiment === 'bad' ? 'citizen-bad' : '';

      // Stagger spawning
      for (let i = 0; i < count; i++) {
        setTimeout(() => {
          const figure = document.createElement('div');
          figure.className = `citizen-figure ${cls}`;
          figure.textContent = emojis[Math.floor(Math.random() * emojis.length)];
          const leftPct = 5 + Math.random() * 88;
          const delay = Math.random() * 0.4;
          const duration = 2.8 + Math.random() * 1.2;
          figure.style.cssText = `left:${leftPct}%;animation-duration:${duration}s;animation-delay:${delay}s;`;
          container.appendChild(figure);

          // Occasionally add speech bubble
          if (Math.random() < 0.35 && sentiment !== 'neutral') {
            const bubble = document.createElement('div');
            bubble.className = 'speech-bubble';
            const speech = speeches[Math.floor(Math.random() * speeches.length)];
            bubble.textContent = speech;
            bubble.style.cssText = `left:${leftPct}%;animation-duration:${duration}s;animation-delay:${delay + 0.2}s;`;
            container.appendChild(bubble);
            setTimeout(() => bubble.remove(), (duration + delay + 0.5) * 1000);
          }

          setTimeout(() => figure.remove(), (duration + delay + 0.5) * 1000);
        }, i * 120);
      }
    }

    // ═══════════════════════════════════════════════════════════════════
    //  MODULE 3: ENVIRONMENTAL SIMULATION
    // ═══════════════════════════════════════════════════════════════════
    let smogPuffs = [];

    function updateEnvironmentalOverlay() {
      const smogLayer = document.getElementById('smog-layer');
      const clearBirds = document.getElementById('clear-birds');
      const smogParticles = document.getElementById('smog-particles');
      if (!smogLayer) return;

      const pol = state.pollution;

      // Smog overlay
      if (pol > 75) {
        smogLayer.classList.add('severe');
        smogLayer.classList.remove('active');
        // Add smog puff particles
        if (smogParticles && smogPuffs.length < 8) {
          for (let i = smogPuffs.length; i < 8; i++) {
            const puff = document.createElement('div');
            puff.className = 'smog-puff';
            const size = 80 + Math.random() * 120;
            puff.style.cssText = `
              width:${size}px;height:${size}px;
              left:${Math.random() * 100}%;
              top:${Math.random() * 30}%;
              animation-duration:${8 + Math.random() * 6}s;
              animation-delay:${Math.random() * 4}s;
            `;
            smogParticles.appendChild(puff);
            smogPuffs.push(puff);
          }
        }
      } else if (pol > 55) {
        smogLayer.classList.add('active');
        smogLayer.classList.remove('severe');
      } else {
        smogLayer.classList.remove('active', 'severe');
        // Clear puffs
        smogPuffs.forEach(p => p.remove());
        smogPuffs = [];
      }

      // Birds if clean
      if (clearBirds) {
        if (pol < 35) {
          clearBirds.classList.add('active');
        } else {
          clearBirds.classList.remove('active');
        }
      }
    }

    // ═══════════════════════════════════════════════════════════════════
    //  MODULE 4: CITY SKYLINE EVOLUTION
    // ═══════════════════════════════════════════════════════════════════
    let skylineAnimFrame = null;
    let skylineProgress = 0; // 0 to 1

    function drawSkylineEvolution(canvasId, roundPct, health, pollution, happiness) {
      const canvas = document.getElementById(canvasId);
      if (!canvas) return;

      // Set canvas width to match display
      canvas.width = canvas.offsetWidth || 280;
      const W = canvas.width, H = canvas.height || 80;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, W, H);

      // Sky gradient based on pollution/time of day
      const skyDark = pollution > 65 ? 0.9 : 0.6;
      const skyGrad = ctx.createLinearGradient(0, 0, 0, H);
      if (pollution > 70) {
        skyGrad.addColorStop(0, `rgba(40,30,10,${skyDark})`);
        skyGrad.addColorStop(1, `rgba(20,15,5,0.95)`);
      } else if (health > 60 && happiness > 60) {
        skyGrad.addColorStop(0, `rgba(10,20,50,0.85)`);
        skyGrad.addColorStop(1, `rgba(5,2,18,0.95)`);
      } else {
        skyGrad.addColorStop(0, `rgba(13,5,32,0.9)`);
        skyGrad.addColorStop(1, `rgba(5,2,18,0.95)`);
      }
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, W, H);

      // Era-based building parameters
      let era, buildings;
      if (roundPct < 0.25) {
        era = 'Early Town';
        buildings = generateBuildings(W, H, 8, 0.4, roundPct);
      } else if (roundPct < 0.55) {
        era = 'Growing City';
        buildings = generateBuildings(W, H, 14, 0.6, roundPct);
      } else if (roundPct < 0.8) {
        era = 'Developing City';
        buildings = generateBuildings(W, H, 18, 0.75, roundPct);
      } else {
        era = 'Modern Metropolis';
        buildings = generateBuildings(W, H, 24, 0.95, roundPct);
      }

      // Draw buildings
      buildings.forEach(b => {
        // Building body
        const bGrad = ctx.createLinearGradient(b.x, b.y, b.x, H);
        if (pollution > 65) {
          bGrad.addColorStop(0, `rgba(${b.r},${b.g},${b.b},0.5)`);
          bGrad.addColorStop(1, `rgba(10,5,20,0.9)`);
        } else {
          bGrad.addColorStop(0, `rgba(${b.r},${b.g},${b.b},0.7)`);
          bGrad.addColorStop(1, `rgba(5,2,18,0.95)`);
        }
        ctx.fillStyle = bGrad;
        ctx.beginPath();
        ctx.roundRect ? ctx.roundRect(b.x, b.y, b.w, H - b.y, [2, 2, 0, 0])
                       : ctx.rect(b.x, b.y, b.w, H - b.y);
        ctx.fill();

        // Windows
        if (happiness > 40) {
          const windowRows = Math.floor((H - b.y - 10) / 8);
          const windowCols = Math.floor(b.w / 6);
          for (let row = 0; row < Math.min(windowRows, 6); row++) {
            for (let col = 0; col < Math.min(windowCols, 4); col++) {
              if (Math.random() < (0.3 + happiness / 200)) {
                const wx = b.x + 3 + col * 6;
                const wy = b.y + 5 + row * 8;
                const brightness = Math.random();
                ctx.fillStyle = brightness > 0.6
                  ? `rgba(253,224,71,${0.6 + Math.random() * 0.3})`
                  : `rgba(147,197,253,${0.4 + Math.random() * 0.3})`;
                ctx.fillRect(wx, wy, 3, 3);
              }
            }
          }
        }

        // Antenna on tall buildings
        if (b.h > H * 0.5 && roundPct > 0.4) {
          ctx.fillStyle = 'rgba(167,139,250,0.8)';
          ctx.fillRect(b.x + b.w/2 - 1, b.y - 8, 2, 10);
          // Blinking light
          if (Date.now() % 1800 < 900) {
            ctx.beginPath();
            ctx.arc(b.x + b.w/2, b.y - 9, 2, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(239,68,68,0.9)';
            ctx.fill();
          }
        }
      });

      // Trees if low pollution
      if (pollution < 50 && roundPct > 0.3) {
        const treeCount = Math.floor((1 - pollution/100) * 6);
        for (let t = 0; t < treeCount; t++) {
          const tx = (t * W / treeCount) + Math.random() * (W / treeCount * 0.8);
          const ty = H - 12 - Math.random() * 8;
          const tr = 6 + Math.random() * 4;
          ctx.beginPath();
          ctx.arc(tx, ty, tr, 0, Math.PI * 2);
          const greenAlpha = 0.4 + (1 - pollution/100) * 0.4;
          ctx.fillStyle = `rgba(52,211,153,${greenAlpha})`;
          ctx.fill();
        }
      }

      // Smog layer on canvas
      if (pollution > 60) {
        const smogOpacity = Math.min(0.6, (pollution - 60) / 40 * 0.6);
        const smogGrad = ctx.createLinearGradient(0, 0, 0, H/2);
        smogGrad.addColorStop(0, `rgba(80,70,40,${smogOpacity})`);
        smogGrad.addColorStop(1, 'rgba(80,70,40,0)');
        ctx.fillStyle = smogGrad;
        ctx.fillRect(0, 0, W, H/2);
      }

      // Ground line
      const groundGrad = ctx.createLinearGradient(0, H-3, 0, H);
      groundGrad.addColorStop(0, 'rgba(139,92,246,0.4)');
      groundGrad.addColorStop(1, 'rgba(109,40,217,0.15)');
      ctx.fillStyle = groundGrad;
      ctx.fillRect(0, H-3, W, 3);

      // Update era label
      const eraLabel = document.getElementById(canvasId === 'skyline-canvas' ? 'skyline-era-label' : 'cinematic-era-text');
      if (eraLabel) {
        if (canvasId === 'skyline-canvas') {
          eraLabel.textContent = era;
        } else {
          // Cinematic end screen
          if (health > 65 && pollution < 40 && happiness > 65) {
            eraLabel.textContent = '🌟 Thriving Metropolis';
          } else if (health > 45 && pollution < 60) {
            eraLabel.textContent = '🏙️ Developing City';
          } else if (pollution > 75 || health < 25) {
            eraLabel.textContent = '🏚️ Struggling City';
          } else {
            eraLabel.textContent = '🌆 Growing City';
          }
        }
      }
    }

    function generateBuildings(W, H, count, heightFactor, era) {
      const buildings = [];
      const totalW = W - 10;
      const step = totalW / count;
      for (let i = 0; i < count; i++) {
        const h = (0.2 + Math.random() * 0.6) * heightFactor * H;
        const w = step * (0.6 + Math.random() * 0.35);
        const x = 5 + i * step + (step - w) / 2;
        const y = H - h;
        // Color palettes based on era
        let r, g, b;
        if (era < 0.3) {
          r = 30 + Math.floor(Math.random() * 30); g = 20; b = 60 + Math.floor(Math.random() * 40);
        } else if (era < 0.6) {
          r = 50 + Math.floor(Math.random() * 60); g = 30; b = 90 + Math.floor(Math.random() * 60);
        } else {
          const palette = [[59,130,246],[139,92,246],[236,72,153],[52,211,153]];
          [r,g,b] = palette[Math.floor(Math.random() * palette.length)];
        }
        buildings.push({ x, y, w, h, r, g, b });
      }
      return buildings;
    }

    let skylineRafId = null;
    function animateSkyline() {
      if (skylineRafId) return; // already running
      function tick() {
        if (document.getElementById('screen-game')?.classList.contains('active')) {
          const pct = Math.min(1, state.round / (ROUNDS.length - 1));
          drawSkylineEvolution('skyline-canvas', pct, state.health, state.pollution, state.happiness);
          updateEnvironmentalOverlay();
        }
        skylineRafId = requestAnimationFrame(tick);
      }
      skylineRafId = requestAnimationFrame(tick);
    }

    function stopSkylineAnimation() {
      if (skylineRafId) {
        cancelAnimationFrame(skylineRafId);
        skylineRafId = null;
      }
    }

    function drawCinematicCity() {
      const pct = 1.0;
      drawSkylineEvolution('cinematic-canvas', pct, state.health, state.pollution, state.happiness);
      // Keep animating for the end screen
      function tick() {
        if (document.getElementById('screen-end')?.classList.contains('active')) {
          drawSkylineEvolution('cinematic-canvas', pct, state.health, state.pollution, state.happiness);
          requestAnimationFrame(tick);
        }
      }
      requestAnimationFrame(tick);
    }

    // ═══════════════════════════════════════════════════════════════════
    //  MODULE 5: EMERGENCY ALERT SYSTEM
    // ═══════════════════════════════════════════════════════════════════
    let alertTimeout = null;
    let lastAlertedMetric = null;

    const ALERT_THRESHOLDS = [
      { id: 'health_low',  check: s => s.health < 20,       icon: '🏥', title: 'HEALTH CRISIS',    msg: 'City health has collapsed! Immediate action required.' },
      { id: 'poll_high',   check: s => s.pollution > 82,    icon: '🌫️', title: 'AIR EMERGENCY',    msg: 'Toxic pollution levels detected across Bharatnagar!' },
      { id: 'budget_low',  check: s => s.budget < 10,       icon: '💸', title: 'BUDGET CRITICAL',  msg: 'City funds near depletion — services at risk!' },
      { id: 'happy_low',   check: s => s.happiness < 15,    icon: '😡', title: 'CIVIC UNREST',     msg: 'Citizen unrest at breaking point. Protests imminent!' },
    ];

    const shownAlerts = new Set();

    function checkEmergencyAlerts() {
      if (document.getElementById('emergency-alert').classList.contains('show')) return;

      for (const threshold of ALERT_THRESHOLDS) {
        if (threshold.check(state) && !shownAlerts.has(threshold.id + '_' + state.round)) {
          shownAlerts.add(threshold.id + '_' + state.round);
          showEmergencyAlert(threshold.icon, threshold.title, threshold.msg);
          break;
        }
      }
    }

    function showEmergencyAlert(icon, title, msg) {
      const el = document.getElementById('emergency-alert');
      const iconEl = document.getElementById('alert-icon');
      const titleEl = document.getElementById('alert-title');
      const msgEl = document.getElementById('alert-msg');
      if (!el) return;

      iconEl.textContent = icon;
      titleEl.textContent = title;
      msgEl.textContent = msg;

      el.classList.add('show', 'flashing');

      // Play alarm sound
      try {
        const ctx = getAudio();
        if (ctx && !isMuted) {
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          o.type = 'sawtooth';
          o.frequency.setValueAtTime(440, ctx.currentTime);
          o.frequency.setValueAtTime(550, ctx.currentTime + 0.15);
          o.frequency.setValueAtTime(440, ctx.currentTime + 0.3);
          g.gain.setValueAtTime(0.08, ctx.currentTime);
          g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
          o.connect(g); g.connect(ctx.destination);
          o.start(ctx.currentTime); o.stop(ctx.currentTime + 0.5);
        }
      } catch(e) {}

      if (alertTimeout) clearTimeout(alertTimeout);
      alertTimeout = setTimeout(dismissAlert, 5000);
    }

    function dismissAlert() {
      const el = document.getElementById('emergency-alert');
      if (el) {
        el.classList.remove('show', 'flashing');
      }
    }

    // ═══════════════════════════════════════════════════════════════════
    //  MODULE 6: ENHANCED NEWS TICKER — DECISION-AWARE
    // ═══════════════════════════════════════════════════════════════════
    function generateDecisionHeadline(choiceTitle, deltas, isBest) {
      const positiveMetrics = Object.entries(deltas).filter(([k,v]) => k !== 'pollution' ? v > 0 : v < 0);
      const negativeMetrics = Object.entries(deltas).filter(([k,v]) => k !== 'pollution' ? v < 0 : v > 0);

      const metricNames = {
        health: 'public health', pollution: 'air quality', happiness: 'citizen happiness',
        budget: 'city finances', volunteer: 'public trust'
      };

      let headline;
      if (isBest && positiveMetrics.length >= 2) {
        const m1 = metricNames[positiveMetrics[0][0]];
        headline = `Mayor's "${choiceTitle}" decision boosts ${m1} — experts applaud`;
      } else if (!isBest && negativeMetrics.length >= 1) {
        const m1 = metricNames[negativeMetrics[0][0]];
        headline = `Critics question "${choiceTitle}" as ${m1} faces setback`;
      } else {
        headline = `Bharatnagar: "${choiceTitle}" policy now in effect`;
      }

      return headline;
    }

    // Hook into existing choose() and chooseCrisis() via post-processing
    const _origChoose = window.choose;
    // We'll call ticker update inside our enhanced code

    // ═══════════════════════════════════════════════════════════════════
    //  MODULE 7: ENHANCED START GAME — wire everything up
    // ═══════════════════════════════════════════════════════════════════
    const _origStartGame = window.startGame;

    // We patch into existing functions by extending them
    // After startGame is called we init ticker and skyline
    (function patchGameFunctions() {
      // Patch startGame
      const origStart = startGame;
      window.startGame = function() {
        origStart();
        // Init new modules if game started successfully
        if (document.getElementById('screen-game').classList.contains('active')) {
          initNewsTicker();
          animateSkyline();
          shownAlerts.clear();
        }
      };

      // Patch choose to add reactions + news
      const origChoose = choose;
      window.choose = function(idx) {
        origChoose(idx);
        // Trigger reactions and news after a small delay
        setTimeout(() => {
          const r = ROUNDS[state.round];
          if (!r) return;
          const c = r.choices[idx];
          const isBest = getBestChoice(r.choices).idx === idx;
          const sentiment = isBest ? 'good' : 'bad';
          triggerCitizenReactions(sentiment, isBest ? 10 : 8);
          const headline = generateDecisionHeadline(c.title, c.deltas, isBest);
          updateNewsTicker(sentiment, headline);
          checkEmergencyAlerts();
        }, 400);
      };

      // Patch chooseCrisis
      const origChooseCrisis = chooseCrisis;
      window.chooseCrisis = function(crisisId, idx) {
        origChooseCrisis(crisisId, idx);
        setTimeout(() => {
          const crisis = CRISIS_EVENTS.find(ev => ev.id === crisisId);
          if (!crisis) return;
          const isBest = getBestChoice(crisis.choices).idx === idx;
          triggerCitizenReactions(isBest ? 'good' : 'bad', 7);
          updateNewsTicker('crisis', null);
          checkEmergencyAlerts();
        }, 400);
      };

      // Patch nextRound to update skyline era label
      const origNextRound = nextRound;
      window.nextRound = function() {
        origNextRound();
      };

      // Patch restartGame to stop skyline animation
      const origRestart = restartGame;
      window.restartGame = function() {
        stopSkylineAnimation();
        shownAlerts.clear();
        origRestart();
      };

      // Patch showEndScreen to draw cinematic city
      const origEnd = showEndScreen;
      window.showEndScreen = function() {
        stopSkylineAnimation();
        origEnd();
        setTimeout(() => {
          drawCinematicCity();
          // Show grade-appropriate citizens
          const grade = document.getElementById('end-grade')?.textContent;
          if (grade === 'A' || grade === 'B') {
            setTimeout(() => triggerCitizenReactions('good', 15), 1500);
          } else if (grade === 'D' || grade === 'F') {
            setTimeout(() => triggerCitizenReactions('bad', 12), 1200);
          }
        }, 600);
      };
    })();

    // ═══════════════════════════════════════════════════════════════════
    //  MODULE 8: SKYLINE CANVAS RESIZE HANDLING
    // ═══════════════════════════════════════════════════════════════════
    (function() {
      let resizeTimeout;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          if (document.getElementById('screen-game')?.classList.contains('active')) {
            const canvas = document.getElementById('skyline-canvas');
            if (canvas) {
              canvas.width = canvas.offsetWidth;
              drawSkylineEvolution('skyline-canvas',
                Math.min(1, state.round / (ROUNDS.length - 1)),
                state.health, state.pollution, state.happiness);
            }
          }
        }, 150);
      });
    })();

    // ═══════════════════════════════════════════════════════════════════
    //  MODULE 9: MOBILE HAPTIC & TOUCH IMPROVEMENTS
    // ═══════════════════════════════════════════════════════════════════
    (function() {
      // Add haptic feedback to decision cards on mobile
      document.addEventListener('touchstart', (e) => {
        const card = e.target.closest('.decision-card');
        if (card && navigator.vibrate) {
          navigator.vibrate(20);
        }
      }, { passive: true });

      // Prevent double-tap zoom on buttons
      document.querySelectorAll('.btn-primary,.btn-next,.diff-btn,.tut-next').forEach(btn => {
        btn.addEventListener('touchend', (e) => e.preventDefault());
      });

      // Touch reveal for cards on mobile (tap instead of hover)
      document.addEventListener('touchend', (e) => {
        const card = e.target.closest('.decision-card');
        if (!card) {
          document.querySelectorAll('.decision-card.touch-reveal').forEach(c => {
            if (c !== card) c.classList.remove('touch-reveal');
          });
          return;
        }
        if (!card.classList.contains('chosen') && !card.classList.contains('unchosen')) {
          // Toggle reveal
          const isRevealed = card.classList.contains('touch-reveal');
          document.querySelectorAll('.decision-card.touch-reveal').forEach(c => c.classList.remove('touch-reveal'));
          if (!isRevealed) {
            card.classList.add('touch-reveal');
            e.preventDefault();
          }
        }
      }, { passive: false });
    })();

    // ═══════════════════════════════════════════════════════════════════
    //  MODULE 10: TICKER INITIALIZATION ON PAGE LOAD
    // ═══════════════════════════════════════════════════════════════════
    (function() {
      // Init ticker with default headlines once DOM is ready
      setTimeout(initNewsTicker, 100);

      // Set up touch-reveal CSS
      const style = document.createElement('style');
      style.textContent = `
        .decision-card.touch-reveal .card-reveal { transform: translateY(0) !important; }
        .decision-card.touch-reveal .card-art { transform: translate(-50%, -80%) scale(0.75) !important; animation-play-state: paused !important; }
        .decision-card.touch-reveal .impact-preview { transform: translateY(0) !important; }
        @media (hover: none) {
          .decision-card:hover .card-reveal { transform: translateY(100%); }
          .decision-card:hover .impact-preview { transform: translateY(100%); }
          .decision-card:hover .card-art { transform: translate(-50%, -56%); }
        }
      `;
      document.head.appendChild(style);
    })();

