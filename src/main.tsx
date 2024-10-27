import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Country from "./components/country/Country";
import Search from "./components/search/Search";
import { ErrorBoundary } from "react-error-boundary";

const travelPlaces = [
  {
    country: "China",
    touristAttraction: [
      {
        name: "The Great Wall of China",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/1920px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg",
        details:
          "The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe.",
        location: "Huairou District, China, 101406",
        map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6073.907392249487!2d116.57198!3d40.4320242!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f121d7687f2ccf%3A0xd040259b950522df!2sGreat%20Wall%20of%20China!5e0!3m2!1sen!2sph!4v1726936519968!5m2!1sen!2sph",
      },
      {
        name: "Emperor Qin Shi Huang's mausoleum site museum",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Tomb_of_the_First_Emperor_Qin_Shi_Huang_Di%2C_Xi%27an%2C_China_-_panoramio.jpg/1920px-Tomb_of_the_First_Emperor_Qin_Shi_Huang_Di%2C_Xi%27an%2C_China_-_panoramio.jpg",
        details:
          "The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first emperor of China. It is a form of funerary art buried with the emperor in 210–209 BCE with the purpose of protecting him in his afterlife.",
        location: "Lintong District, Xi'An, Shaanxi, China, 710612",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13170.761456361626!2d109.26067665954102!3d34.38379471853921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3664a0c90a888abf%3A0x43e52952434487a3!2sMuseum%20of%20Qin%20Terracotta%20Warriors%20and%20Horses%20West%20Gate!5e0!3m2!1sen!2sph!4v1730041514895!5m2!1sen!2sph",
      },
      {
        name: "The Bund",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Bund_2.jpg/1280px-The_Bund_2.jpg",
        details:
          "The Bund is a waterfront area and a protected historical district in central Shanghai. The area centers on a section of Zhongshan Road (East Zhongshan Road No.1) within the former Shanghai International Settlement, which runs along the western bank of the Huangpu River in the eastern part of Huangpu.",
        location: "central Shanghai",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13646.010547828495!2d121.48165275744557!3d31.234506089534463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b270578b874861%3A0x4d56fbed10d1af64!2sThe%20Bund!5e0!3m2!1sen!2sph!4v1726946593521!5m2!1sen!2sph",
      },
    ],
    imageLink:
      "https://images.pexels.com/photos/4445240/pexels-photo-4445240.jpeg",
  },
  {
    country: "India",
    touristAttraction: [
      {
        name: "The Taj Mahal",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1024px-Taj_Mahal_%28Edited%29.jpeg",
        details:
          "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan to house the tomb of his beloved wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.",
        location:
          "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001, India",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.400553310003!2d78.0421422!3d27.175144799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747121d702ff6d%3A0xdd2ae4803f767dde!2sTaj%20Mahal!5e0!3m2!1sen!2sph!4v1726977392611!5m2!1sen!2sph",
      },
      {
        name: "Amber Palace",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/20191219_Fort_Amber%2C_Amer%2C_Jaipur_0955_9481.jpg/1024px-20191219_Fort_Amber%2C_Amer%2C_Jaipur_0955_9481.jpg",
        details:
          "Amer Fort or Amber Fort is a fort located in Amer, Rajasthan, India. Amer is a town with an area of 4 square kilometres located 11 kilometres from Jaipur, the capital of Rajasthan. Located high on a hill, it is the principal tourist attraction in Jaipur. Amer Fort is known for its artistic style elements.",
        location: "Devisinghpura, Amer, Jaipur, Rajasthan 302001, India",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.4128679029423!2d75.848770475442!3d26.98548647660386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db05acbd20dfb%3A0x6221df6747147e2b!2sAmber%20Palace!5e0!3m2!1sen!2sph!4v1726977469984!5m2!1sen!2sph",
      },
      {
        name: "Red Fort",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Delhi_fort.jpg/1024px-Delhi_fort.jpg",
        details:
          "The Red Fort, also known as Lal Qila is a historic fort located in Delhi, India, that historically served as the main residence of the Mughal emperors. Emperor Shah Jahan commissioned construction of the Red Fort, on 12 May 1639, when he decided to shift his capital from Agra to Delhi.",
        location:
          "Netaji Subhash Marg, Lal Qila, Chandni Chowk, New Delhi, Delhi, 110006, India",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57362331.58301292!2d9.741020300000011!3d28.656159199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfce26ec085ef%3A0x441e32f4fa5002fb!2sRed%20Fort!5e0!3m2!1sen!2sph!4v1726977545708!5m2!1sen!2sph",
      },
    ],
    imageLink:
      "https://i.insider.com/5d38929736e03c2138374645?width=600&format=jpeg&auto=webp",
  },
  {
    country: "France",
    touristAttraction: [
      {
        name: "The Eiffel Tower",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/800px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg",
        details:
          "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower from 1887 to 1889.",
        location: "Av. Gustave Eiffel, 75007 Paris, France",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916246075636!2d2.2944812999999997!3d48.858370099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sph!4v1726976839455!5m2!1sen!2sph",
      },
      {
        name: "Disneyland Paris",
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Sleeping_Beauty_Castle%2C_Disneyland%2C_Paris.jpg/1024px-Sleeping_Beauty_Castle%2C_Disneyland%2C_Paris.jpg",
        details:
          "Disneyland Paris is an entertainment resort in Marne-la-Vallée, France. located about 32 kilometres east of Paris. It encompasses two theme parks, seven Disney-owned hotels, two convention centers, a golf course, an arena, and a shopping, dining and entertainment complex.",
        location: "Bd de Parc, 77700 Coupvray, France",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.5187971085275!2d2.781018076464965!3d48.86738577133339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e61d19ca7ae2bd%3A0x57faf8cb6310e660!2sDisneyland%20Paris!5e0!3m2!1sen!2sph!4v1726976903508!5m2!1sen!2sph",
      },
      {
        name: "The Louvre Museum",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/1024px-Louvre_Museum_Wikimedia_Commons.jpg",
        details:
          "The Louvre, or the Louvre Museum, is a national art museum in Paris, France, and one of the most famous museums in the world.",
        location: "75001 Paris, France",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.874101278919!2d2.337644!3d48.8606111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d877937b0f%3A0xb975fcfa192f84d4!2sLouvre%20Museum!5e0!3m2!1sen!2sph!4v1726976972394!5m2!1sen!2sph",
      },
    ],
    imageLink:
      "https://i.insider.com/5d3878bb36e03c348c7cfcd6?width=600&format=jpeg&auto=webp",
  },
  {
    country: "Canada",
    touristAttraction: [
      {
        name: "Niagara Falls",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/3Falls_Niagara.jpg/1024px-3Falls_Niagara.jpg",
        details:
          "Niagara Falls is a group of three waterfalls at the southern end of Niagara Gorge, spanning the border between the province of Ontario in Canada and the state of New York in the United States.",
        location: "69 km (43 mi) southeast of Toronto",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93279.24594886662!2d-79.16013232832032!3d43.06296314975507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3445eec824db9%3A0x46d2c56156bda288!2sNiagara%20Falls%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sph!4v1726978841599!5m2!1sen!2sph",
      },
      {
        name: "CN Tower",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Toronto_-_ON_-_Toronto_Harbourfront7.jpg/800px-Toronto_-_ON_-_Toronto_Harbourfront7.jpg",
        details: `The CN Tower is a 553.3 m-high concrete communications and observation tower in Toronto, Ontario, Canada. Completed in 1976, it is located in downtown Toronto, built on the former Railway Lands. Its name "CN" referred to Canadian National, the railway company that built the tower.`,
        location: "290 Bremner Blvd, Toronto, ON M5V 3L9, Canada",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.269250927025!2d-79.38963172382378!3d43.64256617110262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2sCN%20Tower!5e0!3m2!1sen!2sph!4v1726979026835!5m2!1sen!2sph",
      },
      {
        name: "Stanley Park",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Stanley_Park_Labeled_Aerial_Map.png/1024px-Stanley_Park_Labeled_Aerial_Map.png",
        details:
          "Picnic tables available, Has basketball court, Playground swings available. Stanley Park is a 405-hectare public park in British Columbia, Canada, that makes up the northwestern half of Vancouver's Downtown peninsula, surrounded by waters of Burrard Inlet and English Bay.",
        location: "Vancouver, BC V6G 1Z4, Canada",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2601.529337210358!2d-123.14425219999998!3d49.304258399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486718cad26e4a3%3A0x364a639db409e216!2sStanley%20Park!5e0!3m2!1sen!2sph!4v1726979158364!5m2!1sen!2sph",
      },
    ],
    imageLink:
      "https://i.insider.com/5d377bf436e03c29e93eed13?width=600&format=jpeg&auto=webp",
  },
  {
    country: "Thailand",
    touristAttraction: [
      {
        name: "Bangkok",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Bangkok_Montage_2021.jpg/800px-Bangkok_Montage_2021.jpg",
        details:
          "Bangkok, Thailand’s capital, is a large city known for ornate shrines and vibrant street life. The boat-filled Chao Phraya River feeds its network of canals, flowing past the Rattanakosin royal district, home to opulent Grand Palace and its sacred Wat Phra Kaew Temple. Nearby is Wat Pho Temple with an enormous reclining Buddha and, on the opposite shore, Wat Arun Temple with its steep steps and Khmer-style spire.",
        location: "Bangkok, Thailand",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d992233.6942053817!2d99.97363989628013!3d13.723724826940103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2sBangkok%2C%20Thailand!5e0!3m2!1sen!2sph!4v1726979305112!5m2!1sen!2sph",
      },
      {
        name: "Patong Beach",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Patong_Beach.jpg/1024px-Patong_Beach.jpg",
        details:
          "Patong is a beach resort town on the west coast of Phuket Island, facing the Andaman Sea in the southwest of Thailand. Its sandy, crescent beach is lined with cafes, restaurants and bars. The famously raucous nightlife scene features beer bars, go-go bars, nightclubs, massage parlors and cabarets that overflow into the street along neon-lit Bangla Road and in the Patong OTOP Shopping Paradise complex.",
        location: "Phuket Province",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63230.71525010161!2d98.2512808054234!3d7.903457582516691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30503a96a80e1833%3A0x40223bc2c382480!2sPa%20Tong%2C%20Kathu%20District%2C%20Phuket%2C%20Thailand!5e0!3m2!1sen!2sph!4v1726979379665!5m2!1sen!2sph",
      },
      {
        name: "Chiang Mai",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/0020-%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%B4%E0%B8%87%E0%B8%AB%E0%B9%8C%E0%B8%A7%E0%B8%A3%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3.jpg/1024px-0020-%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%B4%E0%B8%87%E0%B8%AB%E0%B9%8C%E0%B8%A7%E0%B8%A3%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3.jpg",
        details:
          "Chiang Mai is a city in mountainous northern Thailand. Founded in 1296, it was capital of the independent Lanna Kingdom until 1558. Its Old City area still retains vestiges of walls and moats from its history as a cultural and religious center. It’s also home to hundreds of elaborate Buddhist temples, including 14th-century Wat Phra Singh and 15th-century Wat Chedi Luang, adorned with carved serpents.",
        location: "Chiang Mai City, Thailand",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241733.7147063474!2d98.79166518309225!3d18.79417360385279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a7e90bb6f5d%3A0x98d46270a59b4367!2sChiang%20Mai%2C%20Mueang%20Chiang%20Mai%20District%2C%20Chiang%20Mai%2C%20Thailand!5e0!3m2!1sen!2sph!4v1726979540236!5m2!1sen!2sph",
      },
    ],
    imageLink:
      "https://i.insider.com/5d38b30636e03c59cb0063c2?width=600&format=jpeg&auto=webp",
  },
  {
    country: "Brazil",
    touristAttraction: [
      {
        name: "Christ the Redeemer",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Christ_the_Redeemer_-_Cristo_Redentor.jpg/800px-Christ_the_Redeemer_-_Cristo_Redentor.jpg",
        details:
          "Christ the Redeemer is an Art Deco statue of Jesus in Rio de Janeiro, Brazil, created by French-Polish sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot. Romanian sculptor Gheorghe Leonida sculpted the face.",
        location: "Rio de Janeiro, Brazil, Corcovado",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.9542747622286!2d-43.21306212377695!3d-22.951911039487083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fd5984aa13f%3A0x9dc984d7019502de!2sChrist%20the%20Redeemer!5e0!3m2!1sen!2sph!4v1726981100390!5m2!1sen!2sph",
      },
      {
        name: "Parque Ibirapuera",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Parque_do_ibirapuera_visto_do_c%C3%A9u.jpg/1024px-Parque_do_ibirapuera_visto_do_c%C3%A9u.jpg",
        details:
          "Has dog park, Picnic tables available and Has basketball court. Ibirapuera Park is an urban park in São Paulo. It comprises 158 hectares between Av. República do Líbano, Av. Pedro Alvares Cabral, and Av. IV Centenário, and is the most visited park in South America, with 14.4 million visits in 2017.",
        location:
          "Av. Pedro Álvares Cabral - Vila Mariana, São Paulo - SP, 04094-050, Brazil",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4718093294287!2d-46.660305124669044!3d-23.58740637878191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59f1069d11d1%3A0xcb936109af9ce541!2sIbirapuera%20Park!5e0!3m2!1sen!2sph!4v1726981229746!5m2!1sen!2sph",
      },
      {
        name: "Iguazu Falls",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Cataratas.jpg/1024px-Cataratas.jpg",
        details:
          "Iguazú Falls or Iguaçu Falls are waterfalls of the Iguazu River on the border of the Argentine province of Misiones and the Brazilian state of Paraná.",
        location: "Argentina: Misiones province Brazil: Paraná state",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14381.60700141524!2d-54.45135368132873!3d-25.691119101789734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f6ea0ca3aa1b6d%3A0x917b75179c5e987e!2sIguazu%20Falls!5e0!3m2!1sen!2sph!4v1726981339208!5m2!1sen!2sph",
      },
    ],
    imageLink:
      "https://i.insider.com/5d3776e836e03c01ae25c453?width=600&format=jpeg&auto=webp",
  },
  {
    country: "Cuba",
    touristAttraction: [
      {
        name: "Old Havana",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Old_Square%2C_Havana.jpg/1024px-Old_Square%2C_Havana.jpg",
        details:
          "Old Havana is the city-center and one of the 15 municipalities forming Havana, Cuba. It has the second highest population density in the city and contains the core of the original city of Havana. The positions of the original Havana city walls are the modern boundaries of Old Havana.",
        location: "La Habana Vieja, Havana, Cuba",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58698.45115599143!2d-82.35380646351096!3d23.14634834607168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88cd79a330925259%3A0x142229cc76b7d63d!2sOld%20Havana%2C%20Havana%2C%20Cuba!5e0!3m2!1sen!2sph!4v1726981466982!5m2!1sen!2sph",
      },
      {
        name: "Viñales Valley",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Vi%C3%B1ales_Valley.jpg/1024px-Vi%C3%B1ales_Valley.jpg",
        details:
          "Viñales Valley is a karstic depression in Cuba. The valley has an area of 132 km² and is located in the Sierra de los Órganos mountains, just north of Viñales in the Pinar del Río Province.",
        location: "J74F+3QF, Viñales, Cuba",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.302422173085!2d-83.72813882469855!3d22.60517927946859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88cb5174b8f5869d%3A0xcf34f73ca7340cf7!2sVi%C3%B1ales%20Valley!5e0!3m2!1sen!2sph!4v1726981561547!5m2!1sen!2sph",
      },
      {
        name: "Varadero",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Varadero_Cuba_%2840975990711%29.jpg/1024px-Varadero_Cuba_%2840975990711%29.jpg",
        details:
          "Varadero, covering Cuba’s narrow Hicacos Peninsula, is a popular beach resort town. Along its 20km of Atlantic Ocean coastline is a string of all-inclusive hotel and spa complexes, and a golf course. Near the peninsula’s eastern tip is Reserva Ecológica Varahicacos, a preserve with trails and an ancient burial cave. Parque Josone is a park with a pond and gardens.",
        location: "Varadero, Cuba",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234756.50142740816!2d-81.37974094169311!3d23.16763291311687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d307c11ac4c263%3A0x390db0c32f899588!2sVaradero%2C%20Cuba!5e0!3m2!1sen!2sph!4v1726981633723!5m2!1sen!2sph",
      },
    ],
    imageLink:
      "https://i.insider.com/5d377fd436e03c170541f807?width=600&format=jpeg&auto=webp",
  },
  {
    country: "United Arab Emirates",
    touristAttraction: [
      {
        name: "Burj Khalifa",
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Burj_Khalifa.jpg/800px-Burj_Khalifa.jpg",
        details:
          "The Burj Khalifa is a skyscraper in Dubai, United Arab Emirates. It is the world's tallest structure.",
        location: "Burj Park",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7220.357306899009!2d55.26613665390623!3d25.197196999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sph!4v1726982512239!5m2!1sen!2sph",
      },
      {
        name: "Sheikh Zayed Grand Mosque",
        image:
          "https://upload.wikimedia.org/wikipedia/en/7/7d/Sheikh_Zayed_Mosque_view.jpg",
        details:
          "It is the country's largest mosque, and is the key place of worship for daily Islamic prayers. There is a smaller replica of this mosque in Surakarta.",
        location: "Al Rawdah - Abu Dhabi - United Arab Emirates",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.0930879615257!2d54.4708555269531!3d24.412833400000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e4273e8dafe49%3A0x248fbbcbefe2afc7!2sSheikh%20Zayed%20Grand%20Mosque!5e0!3m2!1sen!2sph!4v1726983021112!5m2!1sen!2sph",
      },
      {
        name: "Ferrari World Yas Island, Abu Dhabi",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Ferrari_World.jpg/1024px-Ferrari_World.jpg",
        details:
          "Has restaurant Ferrari World Abu Dhabi is a mostly indoors theme park located on Yas Island in Abu Dhabi, United Arab Emirates. It is the world's first Ferrari-themed park and features Formula Rossa, the world's fastest roller coaster. The foundation stone for the park was laid on 3 November 2007.",
        location: "Yas Island - Abu Dhabi - United Arab Emirates",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14524.220959976703!2d54.59698005357271!3d24.483542800832915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e457e2d394a05%3A0x6076df4876c470a9!2sFerrari%20World%20Yas%20Island%2C%20Abu%20Dhabi!5e0!3m2!1sen!2sph!4v1726985122129!5m2!1sen!2sph",
      },
    ],
    imageLink:
      "https://i.insider.com/5d38c33536e03c120b6d5233?width=600&format=jpeg&auto=webp",
  },
  {
    country: "Egypt",
    touristAttraction: [
      {
        name: "The Great Sphinx",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Sphinx_with_the_third_pyramid.jpg/1024px-Sphinx_with_the_third_pyramid.jpg",
        details:
          "The Great Sphinx of Giza is a limestone statue of a reclining sphinx, a mythical creature with the head of a human and the body of a lion. Facing directly from west to east, it stands on the Giza Plateau on the west bank of the Nile in Giza, Egypt. The face of the Sphinx appears to represent the pharaoh Khafre.",
        location: "Giza Necropolis",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.1447886632022!2d31.134992475551037!3d29.975268674958443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584f62a3aea979%3A0xc9d3f0a64066bda9!2sGreat%20Sphinx%20of%20Giza!5e0!3m2!1sen!2sph!4v1726985241335!5m2!1sen!2sph",
      },
      {
        name: "The Egyptian Museum in Cairo",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/The_Egyptian_Museum.jpg/1024px-The_Egyptian_Museum.jpg",
        details:
          "The Museum of Egyptian Antiquities, commonly known as the Egyptian Museum, located in Cairo, Egypt, houses the largest collection of Egyptian antiquities in the world. It houses over 120,000 items, with a representative amount on display.",
        location:
          "El-Tahrir Square, Ismailia, Qasr El Nil, Cairo Governorate 4272083, Egypt",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.6005164308276!2d31.231092475553854!3d30.048316674921676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458b14d72adf029%3A0x9a38f9bbb6edbfe4!2sThe%20Egyptian%20Museum%20in%20Cairo!5e0!3m2!1sen!2sph!4v1726985383231!5m2!1sen!2sph",
      },
      {
        name: "Karnak",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Temple_de_Louxor_68.jpg/1024px-Temple_de_Louxor_68.jpg",
        details:
          "The Karnak Temple Complex, commonly known as Karnak comprises a vast mix of temples, pylons, chapels, and other buildings near Luxor, Egypt.",
        location: "El-Karnak, Luxor Governorate, Egypt",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28756.517161877073!2d32.62431131562502!3d25.718834600000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1449159228fec0cd%3A0xc71ae8c008c259d8!2sKarnak!5e0!3m2!1sen!2sph!4v1726985454836!5m2!1sen!2sph",
      },
    ],
    imageLink:
      "https://i.insider.com/5d3867af36e03c4a363b5c44?width=600&format=jpeg&auto=webp",
  },
  {
    country: "Japan",
    touristAttraction: [
      {
        name: "Mount Fuji",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Views_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg/1024px-Views_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg",
        details:
          "Japan’s Mt. Fuji is an active volcano about 100 kilometers southwest of Tokyo. Commonly called “Fuji-san,” it’s the country’s tallest peak, at 3,776 meters. A pilgrimage site for centuries, it’s considered one of Japan’s 3 sacred mountains, and summit hikes remain a popular activity. Its iconic profile is the subject of numerous works of art, notably Edo Period prints by Hokusai and Hiroshige.",
        location: "	Fuji-Hakone-Izu National Park",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26030.395553315946!2d138.70676380614015!3d35.360623252281506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019629a42fdc899%3A0xa6a1fcc916f3a4df!2sMount%20Fuji!5e0!3m2!1sen!2sph!4v1726986139578!5m2!1sen!2sph",
      },
      {
        name: "Universal Studios Japan",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/USJ_5years.JPG/1024px-USJ_5years.JPG",
        details:
          "Universal Studios Japan is a theme park located in Osaka, Japan. Opened on March 31, 2001, it is one of six Universal Studios theme parks worldwide and was the first to open outside the United States. The park is owned and operated by USJ LLC, a wholly owned subsidiary of NBCUniversal.",
        location: "Konohana-ku, Osaka, Japan",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.5654111220592!2d135.42974357574303!3d34.6656767729322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e0d083d5e25d%3A0x3605fe25303252aa!2sUniversal%20Studios%20Japan!5e0!3m2!1sen!2sph!4v1726987029130!5m2!1sen!2sph",
      },
      {
        name: "Naoshima (Art Island)",
        image:
          "https://boutiquejapan.com/wp-content/uploads/2013/10/Western-Japan-Naoshima-Island-Art-Yayoi-Kusama-Pumpkin-Sculpture-bigstock-e1539829368938.png.webp",
        details:
          "home to stunning art and architecture including Benesse House, the Chichu Museum, and more.",
        location: "Kagawa District, Kagawa 761-3110",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52625.683418236134!2d133.94617839493932!3d34.474855087903165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3553f1b6b30575ed%3A0xae1f083eeb8571c5!2sNaoshima%2C%20Kagawa%20District%2C%20Kagawa%20761-3110%2C%20Japan!5e0!3m2!1sen!2sph!4v1726987115622!5m2!1sen!2sph",
      },
    ],
    imageLink:
      "https://i.insider.com/5d38bf5536e03c0465428de6?width=600&format=jpeg&auto=webp",
  },
  {
    country: "United Kingdom",
    touristAttraction: [
      {
        name: "Buckingham Palace",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Buckingham_Palace_UK.jpg/1024px-Buckingham_Palace_UK.jpg",
        details:
          "Buckingham Palace is a royal residence in London, and the administrative headquarters of the monarch of the United Kingdom. Located in the City of Westminster, the palace is often at the centre of state occasions and royal hospitality.",
        location: "London SW1A 1AA, United Kingdom",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.6459684757015!2d-0.14446492338029263!3d51.501363971811976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760520cd5b5eb5%3A0xa26abf514d902a7!2sBuckingham%20Palace!5e0!3m2!1sen!2sph!4v1726987232355!5m2!1sen!2sph",
      },
      {
        name: "Natural History Museum",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Natural_History_Museum_London_Jan_2006.jpg/1024px-Natural_History_Museum_London_Jan_2006.jpg",
        details:
          "Travel through 4.6 billion years of our planet's history and help protect its future. Get your free ticket. Ticket holders skip the queues.",
        location:
          "Cromwell Rd, South Kensington, London SW7 5BD, United Kingdom",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.8993229699395!2d-0.1789421233805405!3d51.49671497181088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760542e6182f3f%3A0x7bb7e385c39764c4!2sNatural%20History%20Museum!5e0!3m2!1sen!2sph!4v1726987397218!5m2!1sen!2sph",
      },
      {
        name: "British Museum",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/British_Museum_%28aerial%29.jpg/1024px-British_Museum_%28aerial%29.jpg",
        details:
          "The British Museum is a public museum dedicated to human history, art and culture located in the Bloomsbury area of London. Its permanent collection of eight million works is the largest in the world. It documents the story of human culture from its beginnings to the present.",
        location: "	Great Russell Street, London WC1B 3DG, England",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.6621888044397!2d-0.1295315233792002!3d51.51941327181605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b323093d307%3A0x2fb199016d5642a7!2sThe%20British%20Museum!5e0!3m2!1sen!2sph!4v1726988368031!5m2!1sen!2sph",
      },
    ],
    imageLink:
      "https://i.insider.com/5d3a26d136e03c074c16cc73?width=600&format=jpeg&auto=webp",
  },
  {
    country: "Australia",
    touristAttraction: [
      {
        name: "Sydney Opera House",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Sydney_Australia._%2821339175489%29.jpg/1024px-Sydney_Australia._%2821339175489%29.jpg",
        details:
          "Has restaurant The Sydney Opera House is a multi-venue performing arts centre in Sydney, New South Wales, Australia. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.",
        location: "Bennelong Point, Sydney NSW 2000, Australia",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.2757238835025!2d151.21272177570816!3d-33.85678437323111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae665e892fdd%3A0x3133f8d75a1ac251!2sSydney%20Opera%20House!5e0!3m2!1sen!2sph!4v1726988637901!5m2!1sen!2sph",
      },
      {
        name: "Cairns and Port Douglas",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/20/Port_douglas_qld_australia.jpg",
        details:
          "Port Douglas is a coastal town and locality in the Shire of Douglas, Queensland, Australia, approximately 60 km north of Cairns.",
        location: "Queensland, Australia",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30604.302813839597!2d145.46280174999998!3d-16.498922599999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6982a7b80f4526eb%3A0x500eef17f211080!2sPort%20Douglas%20QLD%2C%20Australia!5e0!3m2!1sen!2sph!4v1726988791701!5m2!1sen!2sph",
      },
      {
        name: "Hobart",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Franklin_Wharf_2015.jpg/1024px-Franklin_Wharf_2015.jpg",
        details:
          "Hobart, capital of Australia's island state of Tasmania, sits on the River Derwent. At its fashionable Salamanca Place, old sandstone warehouses host galleries and cafes. Nearby is Battery Point, a historic district with narrow lanes and colonial-era cottages. The city's backdrop is 1,270m-high Mount Wellington, with sweeping views, plus hiking and cycling trails.",
        location: "Tasmania 7000, Australia",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23388.401136631637!2d147.30795677951616!3d-42.88233835351368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa6e7584e52ccfed%3A0x503c94dd0de1530!2sHobart%20TAS%207000%2C%20Australia!5e0!3m2!1sen!2sph!4v1726988865148!5m2!1sen!2sph",
      },
    ],
    imageLink:
      "https://i.insider.com/5d37715d36e03c3ec304ccd6?width=600&format=jpeg&auto=webp",
  },
  {
    country: "Greece",
    touristAttraction: [
      {
        name: "The Parthenon",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/The_Parthenon_in_Athens.jpg/300px-The_Parthenon_in_Athens.jpg",
        details:
          "The Parthenon is a former temple on the Athenian Acropolis, Greece, that was dedicated to the goddess Athena. Its decorative sculptures are considered some of the high points of classical Greek art, and the Parthenon is considered an enduring symbol of Ancient Greece, democracy, and Western civilization.",
        location: "Acropolis of Athens",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51531611.82735193!2d-43.773283400000054!3d37.971528500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd19ca39ee61%3A0x1b3fa079b878a218!2sParthenon!5e0!3m2!1sen!2sph!4v1726992355595!5m2!1sen!2sph",
      },
      {
        name: "Acropolis of Athens",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Classic_view_of_Acropolis.jpg/1024px-Classic_view_of_Acropolis.jpg",
        details:
          "The Acropolis of Athens is an ancient citadel located on a rocky outcrop above the city of Athens, Greece, and contains the remains of several ancient buildings of great architectural and historical significance, the most famous being the Parthenon.",
        location: "Athens, Attica, Greece",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25161.918535098266!2d23.69279021562501!3d37.9715323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd1837f5acf3%3A0x5c97c042f5eb0df6!2sAcropolis%20of%20Athens!5e0!3m2!1sen!2sph!4v1726992462835!5m2!1sen!2sph",
      },
      {
        name: "Meteora",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Meteora%27s_monastery_2.jpg/1024px-Meteora%27s_monastery_2.jpg",
        details:
          "The Meteora is a rock formation in the regional unit of Trikala, in Thessaly, in northwestern Greece, hosting one of the most prominent complexes of Eastern Orthodox monasteries, viewed locally as second in importance only to Mount Athos.",
        location: "Trikala, Thessaly, Greece",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.7987902908894!2d21.62801467597667!3d39.72170437155975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13590faee8327f39%3A0x7127add4d8bc32ff!2sMeteora!5e0!3m2!1sen!2sph!4v1726992515392!5m2!1sen!2sph",
      },
    ],
    imageLink:
      "https://i.insider.com/5d3879da36e03c1d1260f734?width=700&format=jpeg&auto=webp",
  },
  {
    country: "Bolivia",
    touristAttraction: [
      {
        name: "Salar de Uyuni salt flat",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/4/4a/Salar_Uyuni_au01.jpg",
        details:
          "Salar de Uyuni, amid the Andes in southwest Bolivia, is the world’s largest salt flat. It’s the legacy of a prehistoric lake that went dry, leaving behind a desertlike, nearly 11,000-sq.-km. landscape of bright-white salt, rock formations and cacti-studded islands. Its otherworldly expanse can be observed from central Incahuasi Island. Though wildlife is rare in this unique ecosystem, it harbors many pink flamingos.",
        location: "Daniel Campos Province, Potosí Department",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1917084.6281403382!2d-68.91152417350192!3d-20.20460508564931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915584b325e18bd7%3A0xce4183a158278b6!2sUyuni%20Salt%20Flat!5e0!3m2!1sen!2sph!4v1727099815564!5m2!1sen!2sph",
      },
      {
        name: "North Yungas Road",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Bolivia_-_The_Worlds_Most_Dangerous_Road.jpg/800px-Bolivia_-_The_Worlds_Most_Dangerous_Road.jpg",
        details:
          "The Yungas Road, popularly known as The Death Road, is a 64-kilometre long cycle route linking the city of La Paz with the Yungas region of Bolivia. It was conceived in the 1930's by the Bolivian government to connect the main city of La Paz with parts of the Amazon forest in the north part of the country.",
        location: "Yungas, humid, subtropical region in western Bolivia",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.5054190136166!2d-67.78766102486043!3d-16.24584668445953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f72c790f54159%3A0xd84b2c3f8def4d38!2sN%20Yungas%20Rd%2C%20Bolivia!5e0!3m2!1sen!2sph!4v1727099935008!5m2!1sen!2sph",
      },
      {
        name: "Parque Nacional Madidi",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Madidi_park.JPG/284px-Madidi_park.JPG",
        details:
          "Madidi is a national park in the upper Amazon river basin in Bolivia. It was established in 1995 with a total land area of 18,958 km². Together with the nearby protected areas Manuripi-Heath and Apolobamba and the Manu Biosphere Reserve, Madidi is part of one of the largest protected areas in the world.",
        location: "RM68+8C8, Ucumari, Bolivia",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3868.095081860334!2d-68.3339275!3d-14.189209000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91617d2e287b1c9d%3A0x3416c01206da1f4c!2sParque%20Nacional%20Madidi!5e0!3m2!1sen!2sph!4v1727100104528!5m2!1sen!2sph",
      },
    ],
    imageLink:
      "https://i.insider.com/5d23868621a86134a03af496?width=700&format=jpeg&auto=webp",
  },
  {
    country: "Spain",
    touristAttraction: [
      {
        name: "La Sagrada Família",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Sagrada_Familia_8-12-21_%281%29.jpg/1024px-Sagrada_Familia_8-12-21_%281%29.jpg",
        details:
          "The Basílica i Temple Expiatori de la Sagrada Família, otherwise known as Sagrada Família, is a church under construction in the Eixample district of Barcelona, Catalonia, Spain. It is the largest unfinished Catholic church in the world.",
        location: "Eixample, 08013 Barcelona, Spain",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.639723565661!2d2.1717808767117477!3d41.40362987129789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2dcd83dfb93%3A0x9bd8aac21bc3c950!2sBas%C3%ADlica%20de%20la%20Sagrada%20Fam%C3%ADlia!5e0!3m2!1sen!2sph!4v1727100191718!5m2!1sen!2sph",
      },
      {
        name: "Alhambra",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg/1024px-Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg",
        details:
          "The Alhambra is a palace and fortress complex located in Granada, Andalusia, Spain. It is one of the most famous monuments of Islamic architecture and one of the best-preserved palaces of the historic Islamic world, in addition to containing notable examples of Spanish Renaissance architecture.",
        location: "C. Real de la Alhambra, s/n, Centro, 18009 Granada, Spain",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.016524226803!2d-3.5907162241443555!3d37.17607827214239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fcb7977fb93b%3A0x808dd1ef1221a27f!2sAlhambra!5e0!3m2!1sen!2sph!4v1727100255997!5m2!1sen!2sph",
      },
      {
        name: "Park Güell",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Parc_guell_-_panoramio.jpg/1024px-Parc_guell_-_panoramio.jpg",
        details:
          "Park Güell is a privatized park system composed of gardens and architectural elements located on Turó del Carmel, in Barcelona, Catalonia, Spain. Turó del Carmel belongs to the mountain range of Collserola - the Parc del Carmel is located on the northern face.",
        location: "Gràcia, 08024 Barcelona, Spain",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.1392969063213!2d2.150119576061005!3d41.414494771296525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2ae52d441ab%3A0x899a0ba01aaace58!2sPark%20G%C3%BCell!5e0!3m2!1sen!2sph!4v1727100322242!5m2!1sen!2sph",
      },
    ],
    imageLink:
      "https://i.insider.com/5d38bcc136e03c10dd2815b6?width=700&format=jpeg&auto=webp",
  },
  {
    country: "Iceland",
    touristAttraction: [
      {
        name: "Blue Lagoon",
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Blue_Lagoon_Main_Building.JPG/1920px-Blue_Lagoon_Main_Building.JPG",
        details:
          "The Blue Lagoon is a geothermal spa in southwestern Iceland. The spa is located in a lava field 5 km (3.1 mi) from Grindavík and in front of Mount Þorbjörn on the Reykjanes Peninsula, in a location favourable for geothermal power, and is supplied by water used in the nearby Svartsengi geothermal power station.",
        location: "Norðurljósavegur 9, 240 Grindavík, Iceland",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.165280120084!2d-22.455315276259054!3d63.8791251961834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d61d766b978a7f%3A0xc4e555ca1ef80f94!2sBlue%20Lagoon!5e0!3m2!1sen!2sph!4v1730041605814!5m2!1sen!2sph",
      },
      {
        name: "Hallgrimskirkja",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Reykjavik%27s_church.jpg/800px-Reykjavik%27s_church.jpg",
        details:
          "Hallgrímskirkja is a Lutheran parish church in Reykjavík, Iceland. At 74.5 metres tall, it is the largest church in Iceland and among the tallest structures in the country.",
        location: "Hallgrímstorg 1, 101 Reykjavík, Iceland",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1740.1268021476558!2d-21.92912422239004!3d64.14202521694041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d674cca0432db5%3A0xf7af28c4489daaef!2sHallgrimskirkja!5e0!3m2!1sen!2sph!4v1730041638654!5m2!1sen!2sph",
      },
      {
        name: "Thingvellir National Park",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/%C3%9Eingvellir_from_the_information_centre.JPG/1280px-%C3%9Eingvellir_from_the_information_centre.JPG",
        details:
          "Thingvellir is a historic site and national park in Iceland, east of Reykjavík. It's known for the Alþing (Althing), the site of Iceland's parliament from the 10th to 18th centuries. On the site are the Þingvellir Church and the ruins of old stone shelters. The park sits in a rift valley caused by the separation of 2 tectonic plates, with rocky cliffs and fissures like the huge Almannagjá fault.",
        location: "806 Selfoss, Iceland",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1731.3393527645092!2d-21.079024122385825!3d64.28217480521343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d6811ffb13697b%3A0x6b756c8b079262f2!2sThingvellir%20National%20Park!5e0!3m2!1sen!2sph!4v1730043643575!5m2!1sen!2sph",
      },
    ],
    imageLink:
      "https://i.insider.com/5d387dd836e03c031177f93c?width=700&format=jpeg&auto=webp",
  },
  {
    country: "Argentina",
    touristAttraction: [
      {
        name: "La Boca, Buenos Aires",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/LaBoca_ST_98.jpg/1280px-LaBoca_ST_98.jpg",
        details:
          "La Boca is a working-class area with a cluster of attractions near the Riachuelo River. Steakhouses and street artists surround Caminito, a narrow alley flanked by brightly painted zinc shacks that evoke the district's early immigrant days. A cauldron of noise on match days, La Bombonera is the home ground of Boca Juniors soccer team. Modern art museum Fundación Proa has temporary exhibits and views of the old docks.",
        location: "La Boca Buenos Aires Argentina",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26261.431998816875!2d-58.382294940397216!3d-34.63755135877249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334b0bf5ff0a5%3A0x3858a68c0d7599a0!2sLa%20Boca%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2sph!4v1730043725398!5m2!1sen!2sph",
      },
      {
        name: "Iguazu Falls",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Cataratas.jpg/1280px-Cataratas.jpg",
        details:
          "Iguazú Falls or Iguaçu Falls are waterfalls of the Iguazu River on the border of the Argentine province of Misiones and the Brazilian state of Paraná.",
        location: "Argentina: Misiones province. Brazil: Paraná state",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.2769110036784!2d-54.43924112369752!3d-25.695254143441538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f6ea0ca3aa1b6d%3A0x917b75179c5e987e!2sIguazu%20Falls!5e0!3m2!1sen!2sph!4v1730044439746!5m2!1sen!2sph",
      },
      {
        name: "Teatro Colón",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Fachada_del_Teatro_Col%C3%B3n_en_Buenos_Aires%2C_Argentina.jpg/1280px-Fachada_del_Teatro_Col%C3%B3n_en_Buenos_Aires%2C_Argentina.jpg",
        details:
          "The Teatro Colón (English: Columbus Theatre) is a historic opera house in Buenos Aires, Argentina. It is considered one of the ten best opera houses in the world by National Geographic.",
        location:
          "Tucumán 1171, C1049 Cdad. Autónoma de Buenos Aires, Argentina",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31491091.273625024!2d-86.87557804671826!3d-15.531302131140576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac630121623%3A0x53386f2ac88991a9!2sTeatro%20Col%C3%B3n!5e0!3m2!1sen!2sph!4v1730044479485!5m2!1sen!2sph",
      },
    ],
    imageLink:
      "https://i.insider.com/5a1ee0bb3339b01d008b45c2?width=700&format=jpeg&auto=webp",
  },
  {
    country: "Mexico",
    touristAttraction: [
      {
        name: "Chichen-Itza",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Chichen_Itza_3.jpg/1920px-Chichen_Itza_3.jpg",
        details:
          "Chichén Itzá is a complex of Mayan ruins on Mexico's Yucatán Peninsula. A massive step pyramid, known as El Castillo or Temple of Kukulcan, dominates the ancient city, which thrived from around 600 A.D. to the 1200s. Graphic stone carvings survive at structures like the ball court, Temple of the Warriors and the Wall of the Skulls. Nightly sound-and-light shows illuminate the buildings' sophisticated geometry.",
        location: "97751 Yucatan, Mexico",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.638408998207!2d-88.57190247304685!3d20.684284899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5138c6e391c0e7%3A0x7c1ea0a168994d9a!2zQ2hpY2jDqW4gSXR6w6E!5e0!3m2!1sen!2sph!4v1730044529598!5m2!1sen!2sph",
      },
      {
        name: "Tulum",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Chichen_Itza_3.jpg/1920px-Chichen_Itza_3.jpg",
        details:
          "Tulum is a town on the Caribbean coastline of Mexico’s Yucatán Peninsula. It’s known for its beaches and well-preserved ruins of an ancient Mayan port city. The main building is a large stone structure called El Castillo (castle), perched on a rocky cliff above the white sand beach and turquoise sea. Near the ruins is the Parque Nacional Tulum, a coastal area with mangroves and cenotes (natural limestone sinkholes).",
        location: "Tulum, Quintana Roo, Mexico",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119839.13858232205!2d-87.54646237170083!3d20.176846300454432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4fd40310e42a4b%3A0xeedc0db93ff9ab7!2sTulum%2C%20Quintana%20Roo%2C%20Mexico!5e0!3m2!1sen!2sph!4v1730044557138!5m2!1sen!2sph",
      },
      {
        name: "Museo Nacional de Antropología",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/94/Musee_National_Anthropologie-Entree.jpg",
        details:
          "The National Museum of Anthropology is a national museum of Mexico. It is the largest and most visited museum in Mexico.",
        location:
          "Av. P.º de la Reforma s/n, Polanco, Bosque de Chapultepec I Secc, Miguel Hidalgo, 11560 Ciudad de México, CDMX, Mexico",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.685077455607!2d-99.18885352402896!3d19.42600824088992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201b420c8c849%3A0x84231ae36f6ec524!2sMuseo%20Nacional%20de%20Antropolog%C3%ADa!5e0!3m2!1sen!2sph!4v1730044590762!5m2!1sen!2sph",
      },
    ],
    imageLink:
      "https://i.insider.com/5d3896e336e03c548d2a598a?width=700&format=jpeg&auto=webp",
  },
  {
    country: "New Zealand",
    touristAttraction: [
      {
        name: "Hobbiton",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Waterhouse_Lake_Front.jpg/1280px-Waterhouse_Lake_Front.jpg",
        details:
          "The Hobbiton Movie Set is a significant location used for The Lord of the Rings film trilogy and The Hobbit film trilogy, serving as a stand-in for the town of Hobbiton in the Shire in both trilogies.",
        location: "501 Buckland Road, Matamata 3472, New Zealand",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100783.85991009424!2d175.5510736625!3d-37.8720905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6dab6237e84a77%3A0x24ff7cd6a8f521a6!2sHobbiton%E2%84%A2%20Movie%20Set%20Tours!5e0!3m2!1sen!2sph!4v1730044638898!5m2!1sen!2sph",
      },
      {
        name: "Aoraki / Mount Cook",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Mt_Cook_LC0247.jpg/1024px-Mt_Cook_LC0247.jpg",
        details:
          "Aoraki / Mount Cook is the highest mountain in New Zealand. Its height, as of 2014, is listed as 3,724 metres. It sits in the Southern Alps, the mountain range that runs the length of the South Island. A popular tourist destination, it is also a favourite challenge for mountain climbers.",
        location:
          "Southern Alps, the mountain range that runs the length of the South Island",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23116.45657287882!2d170.1211887837012!3d-43.59494141976774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d2bcbf4957533cb%3A0x2459ca45fd83e865!2sAoraki%20%2F%20Mount%20Cook!5e0!3m2!1sen!2sph!4v1730044672626!5m2!1sen!2sph",
      },
    ],
    imageLink:
      "https://i.insider.com/5d38a4d836e03c25514c8684?width=700&format=jpeg&auto=webp",
  },
  {
    country: "Croatia",
    touristAttraction: [
      {
        name: "Dubrovnik Old Town",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/The_walls_of_the_fortress_and_View_of_the_old_city._panorama.jpg/1920px-The_walls_of_the_fortress_and_View_of_the_old_city._panorama.jpg",
        details:
          "At the heart of the city, the Old Town is enclosed by medieval walls with battlements offering views of the Old Port. Art, weapons, and photos are on display at the Cultural History Museum in the Gothic-style Rector’s Palace, a film location for TV’s “Game of Thrones.” Bars, seafood restaurants, and traditional eateries dot the area, and pedestrianized Stradun street is lined with souvenir shops and fashion stores.",
        location: "southern tip of the Dalmatia region of Croatia",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5869.932279705704!2d18.104623797763544!3d42.64087777697119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134c0b32f93c5965%3A0xdaab5b77b07f1455!2sOld%20Town%2C%2020000%2C%20Dubrovnik%2C%20Croatia!5e0!3m2!1sen!2sph!4v1730044737121!5m2!1sen!2sph",
      },
      {
        name: "Plitvice Lakes National Park",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Plitvice_lakes.JPG/800px-Plitvice_lakes.JPG",
        details:
          "Plitviče Lakes National Park is a 295-sq.-km forest reserve in central Croatia. It's known for a chain of 16 terraced lakes, joined by waterfalls, that extend into a limestone canyon. Walkways and hiking trails wind around and across the water, and an electric boat links the 12 upper and 4 lower lakes. The latter are the site of Veliki Slap, a 78m-high waterfall.",
        location:
          "National route D1 Zagreb–Split between Slunj and Korenica in the vicinity of Bosnia and Herzegovina",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.8474457118323!2d15.579436976700514!3d44.865400373191385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47615e6cfed90f3d%3A0x51a8ff8379a5e70!2sPlitvice%20Lakes%20National%20Park!5e0!3m2!1sen!2sph!4v1730044783587!5m2!1sen!2sph",
      },
      {
        name: "Diocletian's Palace",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Croatia-01239_-_The_Peristil_%289551533404%29.jpg/800px-Croatia-01239_-_The_Peristil_%289551533404%29.jpg",
        details:
          "Diocletian's Palace was built at the end of the third century AD as a residence for the Roman emperor Diocletian, and today forms about half of the old town of Split, Croatia.",
        location: "21000, Grad, Split, Croatia",
        map: "https://www.google.com/maps/embed?pb=!4v1730045030824!6m8!1m7!1sCAoSLEFGMVFpcFBtOFNJVThOUzJyYlkweHRKcDZURGxVYWRvLXNoVVVEN3l2QnVN!2m2!1d43.50825536924725!2d16.44019756651392!3f6.791098130992204!4f3.6231370206823073!5f0.7820865974627469",
      },
    ],
    imageLink:
      "https://i.insider.com/5d38754b36e03c1c25565f17?width=700&format=jpeg&auto=webp",
  },
  {
    country: "Vietnam",
    touristAttraction: [
      {
        name: "Ba Na Hill mountain resort",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/91/Linh_Ung_Pagoda.jpg",
        details:
          "Its name Bà-nà or Pà-nà (old) in Kinh text was originated from Cham language : Po Inu Nagar. This area was the place to worship the most important goddess of the Champa tribes in the past, that is the time before the Islamic era.",
        location:
          "Trường Sơn Mountains west of the city of Da Nang, in central Vietnam.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61365.0562262116!2d107.92193143124997!3d15.997056699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141f7b5026661c9%3A0x847bab3e51ad7ea2!2sBa%20Na%20Hills!5e0!3m2!1sen!2sph!4v1730049111071!5m2!1sen!2sph",
      },
      {
        name: "Cu Chi Tunnel",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/68/VietnamCuChiTunnels.jpg",
        details:
          "The tunnels of Củ Chi are an immense network of connecting tunnels located in the Củ Chi District of Ho Chi Minh City, Vietnam, and are part of a much larger network of tunnels that underlie much of the country.",
        location: "Phú Hiệp, Củ Chi, Ho Chi Minh City, Vietnam",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15658.421454816076!2d106.45000976175747!3d11.14274057774798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310b32c0ee427529%3A0x98ada0b5e37b142f!2sCu%20Chi%20Tunnel!5e0!3m2!1sen!2sph!4v1730049142288!5m2!1sen!2sph",
      },
      {
        name: "War Remnants Museum",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/War_Remnants_Museum%2C_HCMC%2C_front.JPG/1280px-War_Remnants_Museum%2C_HCMC%2C_front.JPG",
        details:
          "The War Remnants Museum is a war museum at 28 Vo Van Tan, in District 3, Ho Chi Minh City, Vietnam. It contains exhibits relating to the First Indochina War and the Vietnam War.",
        location: "Phường 6, District 3, Ho Chi Minh City 700000, Vietnam",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.414703283991!2d106.68951667586876!3d10.779515859135067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f30a23708cf%3A0x7cd94adf2b1474aa!2sWar%20Remnants%20Museum!5e0!3m2!1sen!2sph!4v1730049174896!5m2!1sen!2sph",
      },
    ],
    imageLink:
      "https://i.insider.com/5d38b0b336e03c401422cdf8?width=700&format=jpeg&auto=webp",
  },
  {
    country: "Zambia",
    touristAttraction: [
      {
        name: "Victoria Falls",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Cataratas_Victoria%2C_Zambia-Zimbabue%2C_2018-07-27%2C_DD_04.jpg/800px-Cataratas_Victoria%2C_Zambia-Zimbabue%2C_2018-07-27%2C_DD_04.jpg",
        details:
          "Victoria Falls is a waterfall on the Zambezi River, located on the border between Zambia and Zimbabwe. It is one of the world's largest waterfalls, with a width of 1,708 m (5,604 ft). The region around it is inhabited by several species of plants and animals.",
        location: "Midway along the course of the Zambezi River",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60736.19177285348!2d25.785538935254426!3d-17.931594897882604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x194fe53f0d97964b%3A0xb5064359416ab317!2sVictoria%20Falls%2C%20Zimbabwe!5e0!3m2!1sen!2sph!4v1730049299825!5m2!1sen!2sph",
      },
      {
        name: "South Luangwa National Park",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Luangwa_River_crossing.jpg/1280px-Luangwa_River_crossing.jpg",
        details:
          "It’s known for its abundant wildlife. Inside the Mfuwe Gate entrance, the river is often crowded with hippos. The woodland savannah is home to hundreds of bird species. Trails from the park’s lodges wander past baobab trees, herds of elephants and rare Thornicroft’s giraffes. Spotlights are used to locate the leopard population after dark.",
        location: "East Zambia’s Luangwa River valley",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1990138.935448196!2d30.291626372270684!3d-13.036301454790678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19175767e026dc7b%3A0xe08a012a332bf6f5!2sSouth%20Luangwa%20National%20Park!5e0!3m2!1sen!2sph!4v1730049344728!5m2!1sen!2sph",
      },
      {
        name: "Mosi-oa-Tunya National Park",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/33/White_rhino_Livingstone.jpg",
        details:
          'Mosi-oa-Tunya National Park is a UNESCO World Heritage Site that is home to one-half of the Mosi-oa-Tunya—"The Smoke that Thunders", known worldwide as Victoria Falls—on the Zambezi River.',
        location: "Livingstone, Zambia",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.310938140873!2d25.808193176094846!3d-17.870908577507954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x194fef73f9346b5f%3A0x4b02012511b7b451!2sMosi-oa-Tunya%20National%20Park!5e0!3m2!1sen!2sph!4v1730049364575!5m2!1sen!2sph",
      },
    ],
    imageLink:
      "https://i.insider.com/5d38b84c36e03c28c6288eaa?width=700&format=jpeg&auto=webp",
  },
  {
    country: "Morocco",
    touristAttraction: [
      {
        name: "Hassan II Mosque",
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Hassan_II_mosque%2C_Casablanca_2.jpg/800px-Hassan_II_mosque%2C_Casablanca_2.jpg",
        details:
          "The 9-hectare (22-acre) complex nestles between the harbor and the · The mosque stands on a promontory looking out to the Atlantic Ocean; worshippers can pray over the sea but there is no glass floor looking into the sea.",
        location: "Bd Sidi Mohammed Ben Abdallah in Casablanca",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53177.623913287774!2d-7.695515209766386!3d33.58969467353873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2607994d58f%3A0x67a1d618e7b0d072!2sHassan%20II%20Mosque!5e0!3m2!1sen!2sph!4v1730049409625!5m2!1sen!2sph",
      },
      {
        name: "Koutoubia",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Marokko0112_%28retouched%29.jpg/800px-Marokko0112_%28retouched%29.jpg",
        details:
          "Kutubiyya Mosque or Koutoubia Mosque is the largest mosque in Marrakesh, Morocco. The mosque was founded in 1147 by the Almohad caliph Abd al-Mu'min right after he conquered Marrakesh from the Almoravids. A second version of the mosque was entirely rebuilt by Abd al-Mu'min around 1158, with Ya'qub al-Mansur possibly finalizing construction of the minaret around 1195.",
        location: "Southwest medina quarter of Marrakesh",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27178.959367225183!2d-8.026578584374981!3d31.623720500000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee5c99d75ddf%3A0xd8cd38139a6e6fc2!2sKoutoubia!5e0!3m2!1sen!2sph!4v1730049440254!5m2!1sen!2sph",
      },
      {
        name: "Kasbah of the Udayas",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Kasbah_Oudayas_exterior.jpg/1280px-Kasbah_Oudayas_exterior.jpg",
        details:
          "The Kasbah of the Udayas, also spelled Kasbah of the Oudaias or of the Oudayas, is a kasbah in Rabat, Morocco. It is located on a hill at the mouth of the Bou Regreg opposite Salé, and adjacent to the Medina quarter of Rabat. It is listed, along with other sites in Rabat, as a UNESCO World Heritage Site.",
        location: "25J7+PGX, Rabat, Morocco",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.4800390936343!2d-6.835981349999986!3d34.031555350000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76c0a963e9e05%3A0xe4ada9488b2a5459!2sKasbah%20of%20the%20Udayas%2C%20Rabat%2C%20Morocco!5e0!3m2!1sen!2sph!4v1730049479226!5m2!1sen!2sph",
      },
    ],
    imageLink:
      "https://i.insider.com/5d38ba6336e03c10425f5bb3?width=700&format=jpeg&auto=webp",
  },
  {
    country: "United States",
    touristAttraction: [
      {
        name: "Disney World",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Cinderella_Castle%2C_Magic_Kingdom_Walt_Disney_World_2024_%28square_crop%29.jpg/1024px-Cinderella_Castle%2C_Magic_Kingdom_Walt_Disney_World_2024_%28square_crop%29.jpg",
        details:
          "The property covers nearly 25,000 acres (39 sq mi; 101 km2), of which half has been developed. Walt Disney World contains numerous recreational facilities designed to attract visitors for an extended stay, including four theme parks, two water parks, four golf courses, conference centers, a competitive sports complex and a shopping, dining, and entertainment complex.",
        location: "Southwest of Orlando, Florida, United States",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.393174602027!2d-81.57331492384216!3d28.3771903956292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd7ee634caa5f7%3A0xa71e391fd01cf1a0!2sWalt%20Disney%20World%C2%AE%20Resort!5e0!3m2!1sen!2sph!4v1730049624527!5m2!1sen!2sph",
      },
      {
        name: "Times Square",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/1920px-New_york_times_square-terabass.jpg",
        details:
          "Times Square is a major commercial intersection, tourist destination, entertainment hub, and neighborhood in the Midtown Manhattan section of New York City. It is formed by the junction of Broadway, Seventh Avenue, and 42nd Street.",
        location: "Manhattan, NY 10036, USA",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1839490174257!2d-73.98811752345712!3d40.75797873479885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sph!4v1730049653726!5m2!1sen!2sph",
      },
      {
        name: "Niagara Falls",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/3Falls_Niagara.jpg/1920px-3Falls_Niagara.jpg",
        details:
          "Niagara Falls is a group of three waterfalls at the southern end of Niagara Gorge, spanning the border between the province of Ontario in Canada and the state of New York in the United States.",
        location: "27 km (17 mi) northwest of Buffalo, New York",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46611.81370127774!2d-79.00874154999997!3d43.09950550000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d363ea29e633b7%3A0x61975ae4b9c5aab3!2sNiagara%20Falls%2C%20NY%2C%20USA!5e0!3m2!1sen!2sph!4v1730049706942!5m2!1sen!2sph",
      },
    ],
    imageLink:
      "https://i.insider.com/5d38ad7236e03c01a7108a67?width=700&format=jpeg&auto=webp",
  },
  {
    country: "The Netherlands",
    touristAttraction: [
      {
        name: "Anne Frank House",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Amsterdam_%28NL%29%2C_Anne-Frank-Huis_--_2015_--_7185.jpg/1280px-Amsterdam_%28NL%29%2C_Anne-Frank-Huis_--_2015_--_7185.jpg",
        details:
          "The Anne Frank House is a writer's house and biographical museum dedicated to Jewish wartime diarist Anne Frank. The building is located on a canal called the Prinsengracht, close to the Westerkerk, in central Amsterdam in the Netherlands.",
        location: "Westermarkt 20, 1016 GV Amsterdam, Netherlands",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.735194229253!2d4.881401577023253!3d52.37522144693806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c5213e1149%3A0xd49a5d653e635b0a!2sAnne%20Frank%20House!5e0!3m2!1sen!2sph!4v1730049730997!5m2!1sen!2sph",
      },
      {
        name: "Rijksmuseum",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/South_facade_of_the_Rijksmuseum_Amsterdam_%28DSCF0528%29.jpg/1280px-South_facade_of_the_Rijksmuseum_Amsterdam_%28DSCF0528%29.jpg",
        details:
          "The Rijksmuseum is the national museum of the Netherlands dedicated to Dutch arts and history and is located in Amsterdam. The museum is located at the Museum Square in the borough of Amsterdam South, close to the Van Gogh Museum, the Stedelijk Museum Amsterdam, and the Concertgebouw.",
        location: "Museumstraat 1, 1071 XX Amsterdam, Netherlands",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.5745711670074!2d4.882643877022543!3d52.36000084806261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609eec1bb16e5%3A0xd54373ae6a408585!2sRijksmuseum!5e0!3m2!1sen!2sph!4v1730049815732!5m2!1sen!2sph",
      },
      {
        name: "Van Gogh Museum",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Van_Gogh_Museum%2C_Kurokawa_wing.jpg/1920px-Van_Gogh_Museum%2C_Kurokawa_wing.jpg",
        details:
          "The Van Gogh Museum is a Dutch art museum dedicated to the works of Vincent van Gogh and his contemporaries in the Museum Square in Amsterdam South, close to the Stedelijk Museum, the Rijksmuseum, and the Concertgebouw.",
        location: "Museumplein 6, 1071 DJ Amsterdam, Netherlands",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.6805467827885!2d4.878630377022447!3d52.35807894820466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609ef96d35a5f%3A0xc22828aef97cc51a!2sVan%20Gogh%20Museum!5e0!3m2!1sen!2sph!4v1730049842753!5m2!1sen!2sph",
      },
    ],
    imageLink:
      "https://i.insider.com/5d38c86236e03c00a8103607?width=700&format=jpeg&auto=webp",
  },
  {
    country: "Italy",
    touristAttraction: [
      {
        name: "Leaning Tower of Pisa",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Italy_-_Pisa_-_Leaning_Tower.jpg/800px-Italy_-_Pisa_-_Leaning_Tower.jpg",
        details:
          "The Leaning Tower of Pisa, or simply the Tower of Pisa, is the campanile, or freestanding bell tower, of Pisa Cathedral. It is known for its nearly four-degree lean, the result of an unstable foundation.",
        location: "Piazza del Duomo, 56126 Pisa PI, Italy",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.4029282890306!2d10.394022076655284!3d43.72295584791582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d591a6c44e88cd%3A0x32eca9b1d554fc03!2sTower%20of%20Pisa!5e0!3m2!1sen!2sph!4v1730049881300!5m2!1sen!2sph",
      },
      {
        name: "Colosseum",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1280px-Colosseo_2020.jpg",
        details:
          "The Colosseum is an elliptical amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world, despite its age.",
        location: "Piazza del Colosseo, 1, 00184 Roma RM, Italy",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6082812.053182168!2d4.054730899999984!3d41.890210200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b6532013ad%3A0x28f1c82e908503c4!2sColosseum!5e0!3m2!1sen!2sph!4v1730049928172!5m2!1sen!2sph",
      },
      {
        name: "Pantheon",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pantheon_Rom_1_cropped.jpg/1280px-Pantheon_Rom_1_cropped.jpg",
        details:
          "Is a former Roman temple and, since AD 609, a Catholic church (Basilica Santa Maria ad Martyres or Basilica of St. Mary and the Martyrs) in Rome, Italy. It was built on the site of an earlier temple commissioned by Marcus Vipsanius Agrippa during the reign of Augustus (27 BC - AD 14); then, after the original burnt down, the present building was ordered by the emperor Hadrian and probably dedicated c. AD 126.",
        location: "the Campus Martius, a flood plain of the Tiber River",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6104272.615935069!2d4.054207446219325!3d41.66434342455518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f604f678640a9%3A0xcad165fa2036ce2c!2sPantheon!5e0!3m2!1sen!2sph!4v1730049951476!5m2!1sen!2sph",
      },
    ],
    imageLink:
      "https://i.insider.com/5d38ca7d36e03c5dfa2ed4e3?width=700&format=jpeg&auto=webp",
  },
];

const router = createBrowserRouter([
  {
    path: "/Travel-now/",
    element: <App />,
    children: [
      {
        path: "/Travel-now/",
        element: <Home countryInfo={travelPlaces} />,
      },
      {
        path: "/Travel-now/About",
        element: <About />,
      },
      {
        path: "/Travel-now/Country",
        element: <Country countryInfo={travelPlaces} />,
      },
      {
        path: "/Travel-now/Search",
        element: <Search countryInfo={travelPlaces} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ErrorBoundary>
);
