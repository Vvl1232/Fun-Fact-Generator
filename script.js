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
    "https://images.unsplash.com/photo-1621490634245-c8c76cc432ee?q=80&w=2984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // spider
    "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Space
    "https://images.unsplash.com/photo-1457364887197-9150188c107b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Ocean
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Mountain
    "https://plus.unsplash.com/premium_photo-1672115680958-54438df0ab82?q=80&w=2968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // City
    "https://images.unsplash.com/photo-1514471244491-6fb96fcdf04f?q=80&w=2936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Desert
    "https://plus.unsplash.com/premium_photo-1672234253746-99ac19181f0b?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Sky
    "https://images.unsplash.com/photo-1496950866446-3253e1470e8e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Travel
    "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Beach
    "https://images.unsplash.com/photo-1496661415325-ef852f9e8e7c?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  // Flowers
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
