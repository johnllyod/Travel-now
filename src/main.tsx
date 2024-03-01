import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Country from "./components/country/Country";
import Search from "./components/search/Search";

const travelPlaces = [
  {
    country: "China",
    touristAttraction: [
      "The Great Wall of China",
      "Emperor Qin Shi Huang's mausoleum site museum",
      "The Bund",
    ],
    imageLink:
      "https://images.pexels.com/photos/4445240/pexels-photo-4445240.jpeg",
  },
  {
    country: "India",
    touristAttraction: ["The Taj Mahal", "Amber Palace", "Red Fort"],
    imageLink:
      "https://i.insider.com/5d38929736e03c2138374645?width=600&format=jpeg&auto=webp",
  },
  {
    country: "France",
    touristAttraction: [
      "The Eiffel Tower",
      "Disneyland Paris",
      "The Louvre Museum",
    ],
    imageLink:
      "https://i.insider.com/5d3878bb36e03c348c7cfcd6?width=600&format=jpeg&auto=webp",
  },
  {
    country: "Canada",
    touristAttraction: ["Niagara Falls", "CN Tower", "Stanley Park"],
    imageLink:
      "https://i.insider.com/5d377bf436e03c29e93eed13?width=600&format=jpeg&auto=webp",
  },
  {
    country: "Thailand",
    touristAttraction: ["Bangkok", "Patong Beach", "Chiang Mai"],
    imageLink:
      "https://i.insider.com/5d38b30636e03c59cb0063c2?width=600&format=jpeg&auto=webp",
  },
  {
    country: "Brazil",
    touristAttraction: [
      "Christ the Redeemer",
      "Parque Ibirapuera",
      "Iguazu Falls",
    ],
    imageLink:
      "https://i.insider.com/5d3776e836e03c01ae25c453?width=600&format=jpeg&auto=webp",
  },
  {
    country: "Cuba",
    touristAttraction: ["Old Havana", "Viñales Valley", "Varadero"],
    imageLink:
      "https://i.insider.com/5d377fd436e03c170541f807?width=600&format=jpeg&auto=webp",
  },
  {
    country: "United Arab Emirates",
    touristAttraction: [
      "Burj Khalifa",
      "Sheikh Zayed Grand Mosque",
      "Ferrari World Yas Island, Abu Dhabi",
    ],
    imageLink:
      "https://i.insider.com/5d38c33536e03c120b6d5233?width=600&format=jpeg&auto=webp",
  },
  {
    country: "Egypt",
    touristAttraction: [
      "The Great Sphinx",
      "The Egyptian Museum in Cairo",
      "Karnak",
    ],
    imageLink:
      "https://i.insider.com/5d3867af36e03c4a363b5c44?width=600&format=jpeg&auto=webp",
  },
  {
    country: "Japan",
    touristAttraction: [
      "Mount Fuji",
      "Animal Islands",
      "Naoshima (Art Island)",
    ],
    imageLink:
      "https://i.insider.com/5d38bf5536e03c0465428de6?width=600&format=jpeg&auto=webp",
  },
  {
    country: "United Kingdom",
    touristAttraction: [
      "Buckingham Palace",
      "Natural History Museum",
      "British Museum",
    ],
    imageLink:
      "https://i.insider.com/5d3a26d136e03c074c16cc73?width=600&format=jpeg&auto=webp",
  },
  {
    country: "Australia",
    touristAttraction: [
      "Sydney Opera House",
      "Cairns and Port Douglas",
      "Hobart",
    ],
    imageLink:
      "https://i.insider.com/5d37715d36e03c3ec304ccd6?width=600&format=jpeg&auto=webp",
  },
  {
    country: "Greece",
    touristAttraction: ["The Parthenon", "Acropolis of Athens", "Meteora"],
    imageLink:
      "https://i.insider.com/5d3879da36e03c1d1260f734?width=700&format=jpeg&auto=webp",
  },
  {
    country: "Bolivia",
    touristAttraction: [
      "Salar de Uyuni salt flat",
      "North Yungas Road",
      "Parque Nacional Madidi",
    ],
    imageLink:
      "https://i.insider.com/5d23868621a86134a03af496?width=700&format=jpeg&auto=webp",
  },
  {
    country: "Spain",
    touristAttraction: ["La Sagrada Família", "Alhambra", "Park Güell"],
    imageLink:
      "https://i.insider.com/5d38bcc136e03c10dd2815b6?width=700&format=jpeg&auto=webp",
  },
  {
    country: "Iceland",
    touristAttraction: [
      "Blue Lagoon",
      "Hallgrimskirkja",
      "Thingvellir National Park",
    ],
    imageLink:
      "https://i.insider.com/5d387dd836e03c031177f93c?width=700&format=jpeg&auto=webp",
  },
  {
    country: "Argentina",
    touristAttraction: [
      "La Boca, Buenos Aires",
      "Iguazu Falls",
      "Teatro Colón",
    ],
    imageLink:
      "https://i.insider.com/5a1ee0bb3339b01d008b45c2?width=700&format=jpeg&auto=webp",
  },
  {
    country: "Mexico",
    touristAttraction: [
      "Chichen-Itza",
      "Tulum",
      "Museo Nacional de Antropología",
    ],
    imageLink:
      "https://i.insider.com/5d3896e336e03c548d2a598a?width=700&format=jpeg&auto=webp",
  },
  {
    country: "New Zealand",
    touristAttraction: [
      "Hobbiton",
      "Aoraki / Mount Cook",
      "Milford Sound / Piopiotahi",
    ],
    imageLink:
      "https://i.insider.com/5d38a4d836e03c25514c8684?width=700&format=jpeg&auto=webp",
  },
  {
    country: "Croatia",
    touristAttraction: [
      "Dubrovnik Old Town",
      "Plitvice Lakes National Park",
      "Diocletian's Palace",
    ],
    imageLink:
      "https://i.insider.com/5d38754b36e03c1c25565f17?width=700&format=jpeg&auto=webp",
  },
  {
    country: "Vietnam",
    touristAttraction: [
      "Ba Na Hill mountain resort",
      "Cu Chi Tunnel",
      "War Remnants Museum",
    ],
    imageLink:
      "https://i.insider.com/5d38b0b336e03c401422cdf8?width=700&format=jpeg&auto=webp",
  },
  {
    country: "Zambia",
    touristAttraction: [
      "Victoria Falls",
      "South Luangwa National Park",
      "Mosi-oa-Tunya National Park",
    ],
    imageLink:
      "https://i.insider.com/5d38b84c36e03c28c6288eaa?width=700&format=jpeg&auto=webp",
  },
  {
    country: "Morocco",
    touristAttraction: [
      "Hassan II Mosque",
      "Koutoubia",
      "Kasbah of the Udayas",
    ],
    imageLink:
      "https://i.insider.com/5d38ba6336e03c10425f5bb3?width=700&format=jpeg&auto=webp",
  },
  {
    country: "United States",
    touristAttraction: ["Disney World", "Times Square", "Niagara Falls"],
    imageLink:
      "https://i.insider.com/5d38ad7236e03c01a7108a67?width=700&format=jpeg&auto=webp",
  },
  {
    country: "The Netherlands",
    touristAttraction: ["Anne Frank House", "Rijksmuseum", "Van Gogh Museum"],
    imageLink:
      "https://i.insider.com/5d38c86236e03c00a8103607?width=700&format=jpeg&auto=webp",
  },
  {
    country: "Italy",
    touristAttraction: ["Leaning Tower of Pisa", "Colosseum", "Pantheon"],
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
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
