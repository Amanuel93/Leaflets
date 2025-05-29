
// const map = L.map('map').setView([20, 0], 2);
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: '&copy; OpenStreetMap contributors'
// }).addTo(map);

// // Sample Dataset (15 entries with groups like Country, Equipment, Colors, etc.)
// const dataSet = [
//   { group: "Country", countriesInGroup: "Germany:France", upVotes: 15, threatOrOpportunity: "Threat", timePosted: "2025-05-01T10:00:00Z", startDate: "2025-06-01T00:00:00Z", endDate: "2025-06-30T23:59:59Z", displayColor: "#FF0000", areaSize: "large" },
//   { group: "Country", countriesInGroup: "India:China", upVotes: 12, threatOrOpportunity: "Opportunity", timePosted: "2025-05-02T08:00:00Z", startDate: "2025-06-05T00:00:00Z", endDate: "2025-07-05T23:59:59Z", displayColor: "#00FF00", areaSize: "medium" },
//   { group: "Equipment", countriesInGroup: "USA:Canada", upVotes: 10, threatOrOpportunity: "Opportunity", timePosted: "2025-05-03T11:30:00Z", startDate: "2025-06-10T00:00:00Z", endDate: "2025-06-25T23:59:59Z", displayColor: "#0000FF", areaSize: "large" },
//   { group: "Equipment", countriesInGroup: "Brazil:Argentina", upVotes: 8, threatOrOpportunity: "Threat", timePosted: "2025-05-04T09:15:00Z", startDate: "2025-06-15T00:00:00Z", endDate: "2025-06-30T23:59:59Z", displayColor: "#FFA500", areaSize: "medium" },
//   { group: "Colors", countriesInGroup: "Spain:Portugal", upVotes: 7, threatOrOpportunity: "Opportunity", timePosted: "2025-05-05T14:00:00Z", startDate: "2025-06-20T00:00:00Z", endDate: "2025-07-10T23:59:59Z", displayColor: "#800080", areaSize: "large" },
//   { group: "Colors", countriesInGroup: "Norway:Sweden", upVotes: 9, threatOrOpportunity: "Threat", timePosted: "2025-05-06T13:00:00Z", startDate: "2025-06-25T00:00:00Z", endDate: "2025-07-15T23:59:59Z", displayColor: "#FFC0CB", areaSize: "medium" },
//   { group: "Animals", countriesInGroup: "Australia:New Zealand", upVotes: 11, threatOrOpportunity: "Opportunity", timePosted: "2025-05-07T16:00:00Z", startDate: "2025-07-01T00:00:00Z", endDate: "2025-07-31T23:59:59Z", displayColor: "#008080", areaSize: "large" },
//   { group: "Animals", countriesInGroup: "South Africa:Egypt", upVotes: 6, threatOrOpportunity: "Threat", timePosted: "2025-05-08T12:30:00Z", startDate: "2025-07-05T00:00:00Z", endDate: "2025-07-20T23:59:59Z", displayColor: "#FFD700", areaSize: "medium" },
//   { group: "Vehicles", countriesInGroup: "Japan:South Korea", upVotes: 14, threatOrOpportunity: "Opportunity", timePosted: "2025-05-09T09:45:00Z", startDate: "2025-07-10T00:00:00Z", endDate: "2025-07-25T23:59:59Z", displayColor: "#A52A2A", areaSize: "large" },
//   { group: "Vehicles", countriesInGroup: "Russia:Ukraine", upVotes: 13, threatOrOpportunity: "Threat", timePosted: "2025-05-10T08:20:00Z", startDate: "2025-07-15T00:00:00Z", endDate: "2025-07-30T23:59:59Z", displayColor: "#000000", areaSize: "medium" },
//   { group: "Fruits", countriesInGroup: "Mexico:Guatemala", upVotes: 5, threatOrOpportunity: "Opportunity", timePosted: "2025-05-11T11:10:00Z", startDate: "2025-07-20T00:00:00Z", endDate: "2025-08-05T23:59:59Z", displayColor: "#FF69B4", areaSize: "large" },
//   { group: "Fruits", countriesInGroup: "Chile:Peru", upVotes: 4, threatOrOpportunity: "Threat", timePosted: "2025-05-12T15:25:00Z", startDate: "2025-07-25T00:00:00Z", endDate: "2025-08-10T23:59:59Z", displayColor: "#4B0082", areaSize: "medium" },
//   { group: "Planets", countriesInGroup: "USA", upVotes: 16, threatOrOpportunity: "Opportunity", timePosted: "2025-05-13T17:00:00Z", startDate: "2025-08-01T00:00:00Z", endDate: "2025-08-31T23:59:59Z", displayColor: "#1E90FF", areaSize: "large" },
//   { group: "Planets", countriesInGroup: "Canada", upVotes: 3, threatOrOpportunity: "Threat", timePosted: "2025-05-14T19:00:00Z", startDate: "2025-08-05T00:00:00Z", endDate: "2025-08-25T23:59:59Z", displayColor: "#2E8B57", areaSize: "medium" },
//   { group: "Planets", countriesInGroup: "Mexico", upVotes: 2, threatOrOpportunity: "Opportunity", timePosted: "2025-05-15T20:30:00Z", startDate: "2025-08-10T00:00:00Z", endDate: "2025-08-30T23:59:59Z", displayColor: "#8B0000", areaSize: "medium" }
// ];

// // Expanded country coordinates to cover all countries in the dataset
// const countryCoordinates = {
//   "Germany": [51.1657, 10.4515],
//   "France": [46.2276, 2.2137],
//   "India": [20.5937, 78.9629],
//   "China": [35.8617, 104.1954],
//   "USA": [37.0902, -95.7129],
//   "Canada": [56.1304, -106.3468],
//   "Brazil": [-14.2350, -51.9253],
//   "Argentina": [-38.4161, -63.6167],
//   "Spain": [40.4637, -3.7492],
//   "Portugal": [39.3999, -8.2245],
//   "Norway": [60.4720, 8.4689],
//   "Sweden": [60.1282, 18.6435],
//   "Australia": [-25.2744, 133.7751],
//   "New Zealand": [-40.9006, 174.8860],
//   "South Africa": [-30.5595, 22.9375],
//   "Egypt": [26.8206, 30.8025],
//   "Japan": [36.2048, 138.2529],
//   "South Korea": [35.9078, 127.7669],
//   "Russia": [61.5240, 105.3188],
//   "Ukraine": [48.3794, 31.1656],
//   "Mexico": [23.6345, -102.5528],
//   "Guatemala": [15.7835, -90.2308],
//   "Chile": [-35.6751, -71.5430],
//   "Peru": [-9.1900, -75.0152],
// };

// // Adjust marker radius based on areaSize
// function getRadius(areaSize) {
//   switch(areaSize) {
//     case 'large': return 20;
//     case 'medium': return 12;
//     default: return 8;
//   }
// }

// // Sorting function based on priority rules
// function sortByPriority(data) {
//   return data.sort((a, b) => {
//     if (b.upVotes !== a.upVotes) return b.upVotes - a.upVotes;
//     if (a.threatOrOpportunity === 'Threat' && b.threatOrOpportunity !== 'Threat') return -1;
//     if (b.threatOrOpportunity === 'Threat' && a.threatOrOpportunity !== 'Threat') return 1;
//     const timeA = new Date(a.timePosted);
//     const timeB = new Date(b.timePosted);
//     if (timeA - timeB !== 0) return timeA - timeB;
//     const startA = new Date(a.startDate);
//     const startB = new Date(b.startDate);
//     if (startA - startB !== 0) return startA - startB;
//     const endA = new Date(a.endDate);
//     const endB = new Date(b.endDate);
//     return endA - endB;
//   });
// }

// // Render Countries on Map with circle markers (varying size)
// function renderCountries(selectedGroup = 'All') {
//   map.eachLayer((layer) => {
//     if (layer instanceof L.CircleMarker) map.removeLayer(layer);
//   });

//   const prioritySorted = sortByPriority([...dataSet]);
//   const displayedCountries = new Set();

//   for (const item of prioritySorted) {
//     if (selectedGroup !== 'All' && item.group !== selectedGroup) continue;

//     const countries = item.countriesInGroup.split(':');
//     for (const country of countries) {
//       if (!displayedCountries.has(country)) {
//         displayedCountries.add(country);
//         const coords = countryCoordinates[country];
//         if (coords) {
//           const marker = L.circleMarker(coords, {
//             color: item.displayColor,
//             radius: getRadius(item.areaSize),
//             fillOpacity: 0.6
//           }).addTo(map);

//           marker.bindPopup(`
//             <strong>${country}</strong><br/>
//             Group: ${item.group}<br/>
//             Upvotes: ${item.upVotes}<br/>
//             Type: ${item.threatOrOpportunity}<br/>
//             Start: ${item.startDate}<br/>
//             End: ${item.endDate}
//           `);
//         }
//       }
//     }
//   }
// }

// // Populate Dropdown with groups + 'All' option
// function populateDropdown() {
//   const groupSet = new Set(dataSet.map(d => d.group));
//   const select = document.getElementById('groupDropdown');
//   // Clear existing options
//   select.innerHTML = '';
//   // Add 'All' option
//   const allOption = document.createElement('option');
//   allOption.value = 'All';
//   allOption.textContent = 'All Groups';
//   select.appendChild(allOption);

//   groupSet.forEach(group => {
//     const opt = document.createElement('option');
//     opt.value = group;
//     opt.textContent = group;
//     select.appendChild(opt);
//   });

//   select.addEventListener('change', (e) => {
//     renderCountries(e.target.value);
//   });
// }

// // Initialize
// populateDropdown();
// renderCountries();

// Replace circle markers with a choropleth rendering in Leaflet using GeoJSON
const map = L.map('map').setView([20, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const nounGroups = [
  "billion", "orange", "green", "tea", "coffee",
  "apple", "river", "mountain", "book", "garden",
  "ocean", "sky", "forest", "star", "cloud",
  "light", "stone", "wind", "fire", "rain"
];

const dataSet = [
  { group: nounGroups[0], countriesInGroup: "USA:Russia", upVotes: 15, threatOrOpportunity: "Threat", timePosted: "2025-05-01T10:00:00Z", startDate: "2025-06-01T00:00:00Z", endDate: "2025-06-30T23:59:59Z", displayColor: "#FF0000", areaSize: "large" },
  { group: nounGroups[1], countriesInGroup: "India:China", upVotes: 12, threatOrOpportunity: "Opportunity", timePosted: "2025-05-02T08:00:00Z", startDate: "2025-06-05T00:00:00Z", endDate: "2025-07-05T23:59:59Z", displayColor: "#00FF00", areaSize: "medium" },
  { group: nounGroups[2], countriesInGroup: "USA:Canada", upVotes: 10, threatOrOpportunity: "Opportunity", timePosted: "2025-05-03T11:30:00Z", startDate: "2025-06-10T00:00:00Z", endDate: "2025-06-25T23:59:59Z", displayColor: "#0000FF", areaSize: "large" },
  { group: nounGroups[3], countriesInGroup: "Brazil:Argentina", upVotes: 8, threatOrOpportunity: "Threat", timePosted: "2025-05-04T09:15:00Z", startDate: "2025-06-15T00:00:00Z", endDate: "2025-06-30T23:59:59Z", displayColor: "#FFA500", areaSize: "medium" },
  { group: nounGroups[4], countriesInGroup: "Spain:Portugal", upVotes: 7, threatOrOpportunity: "Opportunity", timePosted: "2025-05-05T14:00:00Z", startDate: "2025-06-20T00:00:00Z", endDate: "2025-07-10T23:59:59Z", displayColor: "#800080", areaSize: "large" },
  { group: nounGroups[5], countriesInGroup: "Norway:Sweden", upVotes: 9, threatOrOpportunity: "Threat", timePosted: "2025-05-06T13:00:00Z", startDate: "2025-06-25T00:00:00Z", endDate: "2025-07-15T23:59:59Z", displayColor: "#FFC0CB", areaSize: "medium" },
  { group: nounGroups[6], countriesInGroup: "Australia:New Zealand", upVotes: 11, threatOrOpportunity: "Opportunity", timePosted: "2025-05-07T16:00:00Z", startDate: "2025-07-01T00:00:00Z", endDate: "2025-07-31T23:59:59Z", displayColor: "#008080", areaSize: "large" },
  { group: nounGroups[7], countriesInGroup: "South Africa:Ethiopia", upVotes: 6, threatOrOpportunity: "Threat", timePosted: "2025-05-08T12:30:00Z", startDate: "2025-07-05T00:00:00Z", endDate: "2025-07-20T23:59:59Z", displayColor: "#FFD700", areaSize: "medium" },
  { group: nounGroups[8], countriesInGroup: "Japan:South Korea", upVotes: 14, threatOrOpportunity: "Opportunity", timePosted: "2025-05-09T09:45:00Z", startDate: "2025-07-10T00:00:00Z", endDate: "2025-07-25T23:59:59Z", displayColor: "#A52A2A", areaSize: "large" },
  { group: nounGroups[9], countriesInGroup: "Russia:Ukraine", upVotes: 13, threatOrOpportunity: "Threat", timePosted: "2025-05-10T08:20:00Z", startDate: "2025-07-15T00:00:00Z", endDate: "2025-07-30T23:59:59Z", displayColor: "#000000", areaSize: "medium" },
  { group: nounGroups[10], countriesInGroup: "Mexico:Guatemala", upVotes: 5, threatOrOpportunity: "Opportunity", timePosted: "2025-05-11T11:10:00Z", startDate: "2025-07-20T00:00:00Z", endDate: "2025-08-05T23:59:59Z", displayColor: "#FF69B4", areaSize: "large" },
  { group: nounGroups[11], countriesInGroup: "Chile:Peru", upVotes: 4, threatOrOpportunity: "Threat", timePosted: "2025-05-12T15:25:00Z", startDate: "2025-07-25T00:00:00Z", endDate: "2025-08-10T23:59:59Z", displayColor: "#4B0082", areaSize: "medium" },
  { group: nounGroups[12], countriesInGroup: "USA", upVotes: 16, threatOrOpportunity: "Opportunity", timePosted: "2025-05-13T17:00:00Z", startDate: "2025-08-01T00:00:00Z", endDate: "2025-08-31T23:59:59Z", displayColor: "#1E90FF", areaSize: "large" },
  { group: nounGroups[13], countriesInGroup: "Canada", upVotes: 3, threatOrOpportunity: "Threat", timePosted: "2025-05-14T19:00:00Z", startDate: "2025-08-05T00:00:00Z", endDate: "2025-08-25T23:59:59Z", displayColor: "#2E8B57", areaSize: "medium" },
  { group: nounGroups[14], countriesInGroup: "Mexico", upVotes: 2, threatOrOpportunity: "Opportunity", timePosted: "2025-05-15T20:30:00Z", startDate: "2025-08-10T00:00:00Z", endDate: "2025-08-30T23:59:59Z", displayColor: "#8B0000", areaSize: "medium" }
];

// Mapping dataset country names to GeoJSON names
const countryNameMap = {
  "USA": "United States of America",
  "Russia": "Russian Federation",
  "South Korea": "Korea, South",
  "UK": "United Kingdom",
  "South Africa": "South Africa", // same but explicit
  "Egypt": "Egypt",
  "New Zealand": "New Zealand",
  // Add any other necessary mappings here
};

function normalizeCountryName(name) {
  return countryNameMap[name] || name;
}

async function renderChoropleth(selectedGroup = 'All') {
  // Remove previous GeoJSON layer if exists
  if (window.geoJsonLayer) {
    map.removeLayer(window.geoJsonLayer);
  }

  // Load GeoJSON countries boundaries
  const response = await fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json');
  const geoJsonData = await response.json();

  // Filter dataset by group
  const filteredData = selectedGroup === 'All' ? dataSet : dataSet.filter(d => d.group === selectedGroup);

  // Create a dictionary to map country to upVotes
  const countryScores = {};
  filteredData.forEach(entry => {
    const countries = entry.countriesInGroup.split(':');
    countries.forEach(country => {
      const normalized = normalizeCountryName(country);
      if (!countryScores[normalized]) {
        countryScores[normalized] = 0;
      }
      countryScores[normalized] += entry.upVotes;
    });
  });

  // Define color scale
  function getColor(score) {
    return score > 15 ? '#800026' :
           score > 12 ? '#BD0026' :
           score > 9  ? '#E31A1C' :
           score > 6  ? '#FC4E2A' :
           score > 3  ? '#FD8D3C' :
           score > 0  ? '#FEB24C' :
                        '#FFEDA0';
  }

  function style(feature) {
    const name = feature.properties.name;
    const score = countryScores[name] || 0;
    return {
      fillColor: getColor(score),
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  }

  window.geoJsonLayer = L.geoJson(geoJsonData, {
    style,
    onEachFeature: function (feature, layer) {
      const name = feature.properties.name;
      const score = countryScores[name] || 0;
      layer.bindPopup(`<strong>${name}</strong><br/>Score: ${score}`);
    }
  }).addTo(map);
}

// Populate group dropdown with "All" option + groups
const groupDropdown = document.getElementById('groupDropdown');
const allGroups = [...new Set(dataSet.map(item => item.group))];

// Add "All" option first
const optionAll = document.createElement('option');
optionAll.value = 'All';
optionAll.textContent = 'All';
groupDropdown.appendChild(optionAll);

// Add other groups
allGroups.forEach(group => {
  const option = document.createElement('option');
  option.value = group;
  option.textContent = group;
  groupDropdown.appendChild(option);
});

groupDropdown.value = 'All';

// Event listener for dropdown change
groupDropdown.addEventListener('change', (event) => {
  renderChoropleth(event.target.value);
});

// Initial render with "All"
renderChoropleth('All');

