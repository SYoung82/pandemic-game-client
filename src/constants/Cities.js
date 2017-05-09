export const cities = [
    {name: 'San Francisco', color: 'blue', lat: 47.754, lng: -129.4738, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Chicago', 'Los Angeles', 'Tokyo', 'Manila']},
    {name: 'Chicago', color: 'blue', lat: 53.5403, lng: -97.83325, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['San Francisco', 'Montreal', 'Atlanta', 'Mexico City', 'Los Angeles']},
    {name: 'Atlanta', color: 'blue', lat: 41.2448, lng: -88.9563, researchStation: true, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Chicago', 'Washington', 'Miami'], players: [1, 2]},
    {name: 'Montreal', color: 'blue', lat: 54.3678, lng: -73.4875, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Chicago', 'New York', 'Washington']},
    {name: 'New York', color: 'blue', lat: 52.6963, lng: -54.5032, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Montreal', 'London', 'Madrid', 'Washington']},
    {name: 'Washington', color: 'blue', lat: 42.2936, lng: -62.2375, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Atlanta', 'Montreal', 'New York', 'Miami']},
    {name: 'London', color: 'blue', lat: 60.7592, lng: -7.7454, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['New York', 'Madrid', 'Paris', 'Essen']},
    {name: 'Madrid', color: 'blue', lat: 46.3166, lng: -11.6125, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['New York', 'London', 'Paris', 'Algiers', 'Sao Paulo']},
    {name: 'Paris', color: 'blue', lat: 53.9567, lng: 10.5359, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Madrid', 'London', 'Essen', 'Milan', 'Algiers']},
    {name: 'Essen', color: 'blue', lat: 62.9152, lng: 16.5125, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['London', 'St. Petersburg', 'Milan', 'Paris']},
    {name: 'Milan', color: 'blue', lat: 56.7527, lng: 26.7078, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Paris', 'Essen', 'Istanbul']},
    {name: 'St. Petersburg', color: 'blue', lat: 65.0721, lng: 44.2859, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Essen', 'Moscow', 'Istanbul']},
    {name: 'Los Angeles', color: 'yellow', lat: 27.3718, lng: -124.8157, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['San Francisco', 'Chicago', 'Mexico City', 'Sydney']},
    {name: 'Mexico City', color: 'yellow', lat: 19.9733, lng: -101.9641, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Los Angeles', 'Chicago', 'Miami', 'Bogota', 'Lima']},
    {name: 'Miami', color: 'yellow', lat: 23.5640, lng: -73.1360, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Atlanta', 'Washington', 'Bogota', 'Mexico City']},
    {name: 'Bogota', color: 'yellow', lat: -1.4061, lng: -75.5969, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Mexico City', 'Miami', 'Sao Paulo', 'Buenos Aires', 'Lima']},
    {name: 'Lima', color: 'yellow', lat: -27.9944, lng: -84.0344, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Santiago', 'Mexico City', 'Bogota']},
    {name: 'Santiago', color: 'yellow', lat: -50.0642, lng: -80.8704, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Lima']},
    {name: 'Buenos Aires', color: 'yellow', lat: -46.5589, lng: -54.5032, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Bogota', 'Sao Paulo']},
    {name: 'Sao Paulo', color: 'yellow', lat: -31.6534, lng: -40.0891, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Buenos Aires', 'Bogota', 'Madrid', 'Lagos']},
    {name: 'Lagos', color: 'yellow', lat: 3.1625, lng: 8.4265, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Sao Paulo', 'Khartoum', 'Kinshasha']},
    {name: 'Kinshasha', color: 'yellow', lat: -14.6048, lng: 23.8953, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Lagos', 'Khartoum', 'Johannesburg']},
    {name: 'Johannesburg', color: 'yellow', lat: -37.9962, lng: 37.9578, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Kinshasha', 'Khartoum']},
    {name: 'Khartoum', color: 'yellow', lat: 7.0137, lng: 39.3640, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Johannesburg', 'Kinshasha', 'Lagos', 'Cairo']},
    {name: 'Algiers', color: 'black', lat: 35.1738, lng: 16.1609, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Madrid', 'Paris', 'Istanbul', 'Cairo']},
    {name: 'Cairo', color: 'black', lat: 31.3536, lng: 34.4421, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Algiers', 'Istanbul', 'Baghdad', 'Riyadh', 'Khartoum']},
    {name: 'Istanbul', color: 'black', lat: 47.5172, lng: 38.3093, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Milan', 'St. Petersburg', 'Moscow', 'Baghdad', 'Cairo', 'Algiers']},
    {name: 'Moscow', color: 'black', lat: 56.7527, lng: 57.6453, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['St. Petersburg', 'Tehran', 'Istanbul']},
    {name: 'Tehran', color: 'black', lat: 49.6107, lng: 74.5203, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Moscow', 'Delhi', 'Karachi', 'Baghdad']},
    {name: 'Baghdad', color: 'black', lat: 38.2727, lng: 55.5359, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Cairo', 'Istanbul', 'Tehran', 'Karachi', 'Riyadh']},
    {name: 'Riyadh', color: 'black', lat: 18.3128, lng: 58.3484, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Cairo', 'Baghdad', 'Karachi']},
    {name: 'Karachi', color: 'black', lat: 31.3536, lng: 79.4421, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Riyadh', 'Baghdad', 'Tehran', 'Delhi', 'Mumbai']},
    {name: 'Delhi', color: 'black', lat: 37.43997, lng: 97.3718, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Tehran', 'Kolkata', 'Chennai', 'Mumbai', 'Karachi']},
    {name: 'Mumbai', color: 'black', lat: 14.2644, lng: 81.9031, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Karachi', 'Delhi', 'Chennai']},
    {name: 'Chennai', color: 'black', lat: 0.7031, lng: 100.8875, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Mumbai', 'Delhi', 'Kolkata', 'Bangkok', 'Jakarta']},
    {name: 'Kolkata', color: 'black', lat: 31.9522, lng: 114.9410, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Delhi', 'Hong Kong', 'Bangkok', 'Chennai']},
    {name: 'Bangkok', color: 'red', lat: 12.8975, lng: 118.8171, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Kolkata', 'Hong Kong', 'Ho Chi Minh City', 'Jakarta', 'Chennai']},
    {name: 'Jakarta', color: 'red', lat: -20.9614, lng: 118.4656, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Chennai', 'Bangkok', 'Ho Chi Minh City', 'Sydney']},
    {name: 'Ho Chi Minh City', color: 'red', lat: -5.2660, lng: 133.9343, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Bangkok', 'Hong Kong', 'Manila', 'Jakarta']},
    {name: 'Sydney', color: 'red', lat: -48.9225, lng: 172.2546, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Jakarta', 'Manila', 'Los Angeles']},
    {name: 'Manila', color: 'red', lat: -3.5134, lng: 157.8406, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Sydney', 'Ho Chi Minh City', 'Hong Kong', 'Taipei', 'San Francisco']},
    {name: 'Hong Kong', color: 'red', lat: 22.9179, lng: 132.8796, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Kolkata', 'Shanghai', 'Taipei', 'Manila', 'Ho Chi Minh City', 'Bangkok']},
    {name: 'Taipei', color: 'red', lat: 26.7456, lng: 152.5671, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Hong Kong', 'Shanghai', 'Osaka', 'Manila']},
    {name: 'Osaka', color: 'red', lat: 33.1376, lng: 170.8484, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Taipei', 'Tokyo']},
    {name: 'Tokyo', color: 'red', lat: 47.9899, lng: 168.7390, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Osaka', 'Shanghai', 'Seoul', 'San Francisco']},
    {name: 'Seoul', color: 'red', lat: 54.1624, lng: 151.5125, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Beijing', 'Tokyo', 'Shanghai']},
    {name: 'Beijing', color: 'red', lat: 53.3309, lng: 129.3640, researchStation: false, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Shanghai', 'Seoul']},
    {name: 'Shanghai', color: 'red', lat: 41.2448, lng: 130.4187, researchStation: true, cubes:{black: 0, blue: 0, red: 0, yellow: 0}, adjacentCities: ['Beijing', 'Seoul', 'Tokyo', 'Taipei', 'Hong Kong']},
]