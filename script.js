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
    "In Antarctica, there's a waterfall that runs red.",
    "The first computer programmer was Ada Lovelace.",
    "The first computer virus was created in 1983.",
    "The first ever domain name registered was symbolics.com.",
    "The first programming language was Fortran.",
    "The most common programming language in the world is JavaScript.",
    "The term 'bug' in software originated from an actual bug.",
    "There are over 700 programming languages.",
    "'Hello, World!' is often the first program written in any language.",
    "The first 1GB hard disk drive was announced in 1980 and weighed over 500 pounds.",
    "Python was named after Monty Python, not the snake.",
    "Muscle tissue is three times more efficient at burning calories than fat.",
    "There are over 600 muscles in the human body.",
    "The heart is the hardest working muscle in the body.",
    "Exercise can improve your mental health.",
    "Running burns approximately 50% more calories than walking.",
    "Strength training can improve bone density.",
    "Regular exercise can help improve sleep quality.",
    "Working out can boost your immune system.",
    "The world record for the most push-ups in one hour is 2,919.",
    "The world's oldest marathoner ran his last marathon at age 101.",
    "The longest chess game theoretically possible is 5,949 moves.",
    "The word 'Checkmate' in chess comes from the Persian phrase 'Shah Mat,' meaning 'the king is dead.'",
    "The number of possible unique chess games is greater than the number of electrons in the universe.",
    "The first chessboard with alternating light and dark squares appeared in Europe in 1090.",
    "The second book ever printed in English was about chess.",
    "There are more possible iterations of a game of chess than there are atoms in the known universe.",
    "'En passant' is a unique chess move that allows a pawn to capture another pawn that has moved two squares.",
    "The first modern chess tournament was held in London in 1851.",
    "The chessboard has 64 squares.",
    "The shortest possible chess game is called 'Fool's Mate,' and it can be achieved in just two moves.",
    "Bananas are berries, but strawberries aren't.",
    "Honey never spoils and has been found in ancient Egyptian tombs.",
    "A single cloud can weigh more than a million pounds.",
    "Octopuses have three hearts.",
    "Some cats are allergic to humans.",
    "The Eiffel Tower can be 15 cm taller during the summer.",
    "A day on Venus is longer than a year on Venus.",
    "A blue whale's heart is the size of a small car.",
    "Humans share 50% of their DNA with bananas.",
    "The shortest war in history lasted just 38 minutes.",
    "The world's deepest postbox is in Susami Bay, Japan, underwater.",
    "An octopus has three hearts and blue blood.",
    "The longest recorded flight of a chicken is 13 seconds.",
    "A cow-bison hybrid is called a 'beefalo.'",
    "There are more stars in the universe than grains of sand on all the Earth's beaches.",
    "The average person walks the equivalent of five times around the world in their lifetime.",
    "The total weight of all the ants on Earth is roughly equal to the total weight of all humans.",
    "Lightning strikes the Earth 100 times every second.",
    "The honeybee's wings stroke 11,400 times per minute, making their distinctive buzz.",
    "A group of flamingos is called a 'flamboyance.'",
    "The Guinness World Record for the longest hiccuping spree is held by Charles Osborne, who hiccuped for 68 years.",
    "A snail can sleep for three years at a time.",
    "There are more lifeforms living on your skin than there are people on the planet.",
    "Cleopatra lived closer in time to the first Moon landing than to the construction of the Great Pyramid of Giza.",
    "A day on Mars is 24 hours and 37 minutes long.",
    "Hot water freezes faster than cold water, a phenomenon known as the Mpemba effect.",
    "You can't hum while holding your nose closed.",
    "A single strand of spaghetti is called a 'spaghetto.'",
    "A crocodile cannot stick its tongue out.",
    "A shrimp's heart is in its head.",
    "The first oranges weren’t orange; they were green.",
    "The heart of a blue whale is so large a human can swim through its arteries.",
    "Butterflies taste with their feet.",
    "There's a planet that rains diamonds, known as 55 Cancri e.",
    "Jellyfish are 95% water.",
    "Cows have best friends and get stressed when they are separated.",
    "A rhinoceros's horn is made of compacted hair.",
    "Turtles can breathe through their butts.",
    "The unicorn is the national animal of Scotland.",
    "The world's oldest piece of chewing gum is over 9,000 years old.",
    "A group of hedgehogs is called a 'prickle.'",
    "Bananas glow blue under black light.",
    "Honey never spoils; it can last for thousands of years.",
    "There's a species of jellyfish that is biologically immortal.",
    "A jiffy is an actual unit of time, equal to 1/100th of a second.",
    "The Twitter bird actually has a name: Larry.",
    "Octopuses have copper-based blood, which is why it is blue.",
    "Wombat poop is cube-shaped.",
    "It is impossible to lick your own elbow (give it a try!).",
    "The inventor of the Pringles can is now buried in one.",
    "Sea cucumbers eat with their feet.",
    "There are more fake flamingos in the world than real ones.",
    "If you lift a kangaroo's tail off the ground, it can't hop.",
    "Starfish can regenerate their limbs.",
    "A baby spider is called a 'spiderling.'",
    "Some frogs can be frozen solid and still survive.",
    "The Eiffel Tower can be 15 cm taller during the summer.",
    "There is a McDonald's in every continent except Antarctica.",
    "The first computer mouse was made of wood."
];

const backgroundImages = [
    "https://images.unsplash.com/photo-1465093960093-d717f55e0b06?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZvcmVzdHxlbnwwfDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080", // Nature
    "https://images.unsplash.com/photo-1485793984699-fef0240dbff7?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDdffG1vcm5pbmcgdGhlIHNreXxlbnwwfDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080", // Space
    "https://images.unsplash.com/photo-1506748686214-4d8d2b23e900?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJlYWNofGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080", // Ocean
    "https://images.unsplash.com/photo-1496390284405-5a0c8b3f0101?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1vdW50YWluc3xlbnwwfDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080", // Mountain
    "https://images.unsplash.com/photo-1495576147588-cba6ba98ac62?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG5pZ2h0Y2l0eXxlbnwwfDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080", // City
    "https://images.unsplash.com/photo-1530119287072-77d129a9adf3?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fGRlc2VydHxlbnwwfDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080", // Desert
    "https://images.unsplash.com/photo-1504366811407-5093e22e0145?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDcyfHxtaW5kZWxpcGllfGVufDB8fDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080", // Sky
    "https://images.unsplash.com/photo-1496853090732-9fc9d1cc48e4?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGxhbmRzY2FwZXxlbnwwfDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080", // Travel
    "https://images.unsplash.com/photo-1487638147470-698a54076890?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJlYWNoLCBzdW5zZXQxfGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080", // Beach
    "https://images.unsplash.com/photo-1506748686214-4d8d2b23e900?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJlYWNofGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080"  // Flowers
];


document.getElementById('generateFact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomImage = Math.floor(Math.random() * backgroundImages.length);
    
    // Update the fact text
    document.getElementById('factDisplay').innerText = facts[randomIndex];

    // Set the background image correctly
    document.body.style.backgroundImage = `url(${backgroundImages[randomImage]})`;  // Use template literals
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
});
