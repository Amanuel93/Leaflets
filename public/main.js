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

