import React from 'react'
import TourTrek from '../Tour and Trek/TourTrek';


const itineraryObject = {

    title: "Annapurna Base Camp Trekking Itinerary",
    description:"The Annapurna region in Nepal is one of the most popular trekking destinations in the world, known for its breathtaking mountain views, diverse landscapes, and rich cultural heritage. It offers a range of trekking routes, from short and easy hikes to challenging high-altitude adventures.",
    days: [
      { day: "Day 01", activity: "Arrival at Kathmandu Airport (1324m) - Transfer to hotel and free day." },
      { day: "Day 02", activity: "Kathmandu Sightseeing Tour: Swoyambhunath, Kathmandu Durbar Square, Pashupatinath, Boudhanath." },
      { day: "Day 03", activity: "Drive from Kathmandu to Pokhara by tourist bus." },
      { day: "Day 04", activity: "Drive to Tikhedhunga and trek to Ghorepani (2,874m)." },
      { day: "Day 05", activity: "Hike to Poon Hill for sunrise, return and trek to Tadapani (2,630m)." },
      { day: "Day 06", activity: "Trek from Tadapani to Chhomrong (1,951m)." },
      { day: "Day 07", activity: "Trek from Chhomrong to Dovan (2,130m)." },
      { day: "Day 08", activity: "Trek from Dovan to Machhapuchhre Base Camp (3,720m)." },
      { day: "Day 09", activity: "Trek to Annapurna Base Camp (4,095m) and explore. Return to Bamboo." },
      { day: "Day 10", activity: "Trek from Bamboo to Jhinu Danda (1,700m), optional hot spring visit." },
      { day: "Day 11", activity: "Trek from Jhinu Danda to Pothana (1,700m)." },
      { day: "Day 12", activity: "Trek to Pokhara via Dhampus-Phedi and drive to hotel." },
      { day: "Day 13", activity: "Free day in Pokhara to explore." },
      { day: "Day 14", activity: "Drive from Pokhara to Kathmandu." },
      { day: "Day 15", activity: "Transfer to airport for departure." }
    ],
    included: [
      "All necessary transportation by private vehicles",
      "All entrance fee in Kathmandu",
      "6 nights in a 3 star standard hotel in Kathmandu and Pokhara on BB basis",
      "Accommodations and three times meals (Breakfast, Lunch, and Dinner) during the trek",
      "A guide and porters",
      "National park entry and TIMS permits",
      "Well-equipped first aid kit, oximeter, and oxygen",
      "All the government Tax, Vat, and service charges",
      "Farewell dinner on the last night in Kathmandu",
      "In case of emergency: A helicopter service will be arranged and paid through your travel insurance"
    ],
    excluded: [
      "Nepal entry visa fee",
      "Your Travel insurance (compulsory)",
      "Meals (lunch & dinner in Kathmandu)",
      "Your personal expenses, drinking water, hot and cold drinks & bar bills",
      "Laundry, telephone, hot shower & internet charge",
      "Tips for the guide and porters",
      "Anything not mentioned in the included section"
    ]
  };
  
function AnnapurnaBaseCamp() {
  return (
    <>
  <TourTrek
  title={itineraryObject.title}
  description={itineraryObject.description}
  
  days={itineraryObject.days}
  includes={itineraryObject.included}
  excludes={itineraryObject.excluded} 
  />



    </>
  )
}

export default AnnapurnaBaseCamp