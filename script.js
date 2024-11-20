const mountainFacts = [
    "Mount Everest: Standing at 29,032 feet (8,848 meters), Mount Everest is the highest mountain in the world. It is part of the Himalayas and is located on the border between Nepal and the Tibet Autonomous Region of China.",
    "The Andes: The Andes is the longest continental mountain range in the world, stretching approximately 7,000 kilometers (4,300 miles) along the western coast of South America through seven countries: Venezuela, Colombia, Ecuador, Peru, Bolivia, Chile, and Argentina.",
    "Mountain Formation: Mountains are formed through tectonic forces or volcanism. These forces can raise the surface of the Earth, creating peaks and ranges over millions of years. The Himalayas, for example, were formed by the collision of the Indian and Eurasian tectonic plates.",
    "Biodiversity: Mountains are home to a diverse range of ecosystems and species. They provide habitats for unique flora and fauna, some of which are not found anywhere else on Earth. The biodiversity in mountain regions is often rich and varied due to the range of altitudes and climates.",
    "Cultural Significance: Mountains have significant cultural and spiritual importance in many societies. For example, Mount Fuji in Japan is considered a sacred symbol and has inspired countless works of art and literature. Similarly, the Andes are central to the cultural identity of many indigenous peoples in South America."
];

document.getElementById('generate-fact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * mountainFacts.length);
    document.getElementById('fact-display').textContent = mountainFacts[randomIndex];
});
