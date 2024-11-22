const facts = [
    "The shortest war in history lasted just 38 minutes.",
    "You can walk from Russia to Alaska in winter.",
    "Canada has more lakes than the rest of the world combined.",
    "The longest place name in the world is 85 letters long.",
    "France is the most visited country in the world.",
    "Australia is wider than the moon.",
    "The Great Wall of China is not visible from space.",
    "Japan has over 6,800 islands.",
    "The world's most remote place is Tristan da Cunha, in the South Atlantic Ocean.",
    "In Antarctica, there's a waterfall that runs red."
];

const backgroundImages = [
    "https://source.unsplash.com/1600x900/?nature,forest",    // Nature & Forest
    "https://source.unsplash.com/1600x900/?space,stars",      // Space & Stars
    "https://source.unsplash.com/1600x900/?ocean,beach",      // Ocean & Beach
    "https://source.unsplash.com/1600x900/?mountain,sunset",  // Mountain & Sunset
    "https://source.unsplash.com/1600x900/?city,night",       // City & Night
    "https://source.unsplash.com/1600x900/?desert,landscape", // Desert & Landscape
    "https://source.unsplash.com/1600x900/?sky,clouds",       // Sky & Clouds
    "https://source.unsplash.com/1600x900/?landscape,travel", // Landscape & Travel
    "https://source.unsplash.com/1600x900/?beach,sunset",     // Beach & Sunset
    "https://source.unsplash.com/1600x900/?flowers,colors"    // Flowers & Colors
];

document.getElementById('generateFact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomImage = Math.floor(Math.random() * backgroundImages.length);

    // Log to check if the random image URL is generated correctly
    console.log('Selected Fact:', facts[randomIndex]);
    console.log('Selected Background Image URL:', backgroundImages[randomImage]);

    // Update Fact Text
    document.getElementById('factDisplay').innerText = facts[randomIndex];

    // Set background image and handle error if the image fails to load
    const img = new Image();
    img.onload = function() {
        document.body.style.backgroundImage = `url(${backgroundImages[randomImage]})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
    };
    img.onerror = function() {
        console.error('Background image failed to load');
        // Fallback image in case of error
        document.body.style.backgroundImage = "url('https://via.placeholder.com/1600x900?text=Background+Image+Failed')";
    };
    img.src = backgroundImages[randomImage];
});
