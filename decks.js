const decks = [
  {
    name: "Animated Movies",
    author: "N-Shar-ma",
    instructions:
      "The emoji/s on each card are a clue for an animated movie. You can flip (click) the card to see an additional hint. Drag and drop a card onto the matching text clue on the right, which will be the movie name in easy mode, and a character/place in the movie in the challenging mode. You can make a maximum of 3 wrong matches.",
    cards: [
      {
        name: "Frozen",
        content: {
          primary: "❄️",
          secondary: "🏔️🚪",
        },
        hint: "Has 2 female protagonists",
        matchValue: "Arendelle",
        seenHint: false,
      },
      {
        name: "Snow White and the Seven Dwarfs",
        content: {
          primary: "🍎",
          secondary: "👸😗",
        },
        hint: "Earliest animated feature film",
        matchValue: "Dopey",
        seenHint: false,
      },
      {
        name: "Zootopia",
        content: {
          primary: "🐰",
          secondary: "👮‍♀️🦊",
        },
        hint: "Shakira featured in a song",
        matchValue: "Hopps",
        seenHint: false,
      },
      {
        name: "The Lion King",
        content: {
          primary: "🦁",
          secondary: "🐗🐦",
        },
        hint: "Has a live action remake",
        matchValue: "Pride Rock",
        seenHint: false,
      },
      {
        name: "Moana",
        content: {
          primary: "🌊",
          secondary: "🏝⛵",
        },
        hint: "Based on Polynesian culture",
        matchValue: "Motunui",
        seenHint: false,
      },
      {
        name: "Finding Nemo",
        content: {
          primary: "🐠",
          secondary: "🐟🌊",
        },
        hint: "Protagonist has a slight deformity",
        matchValue: "Great Barrier Reef",
        seenHint: false,
      },
      {
        name: "Toy Story",
        content: {
          primary: "🤠",
          secondary: "🤖🧒",
        },
        hint: "Beginning of a franchise",
        matchValue: "Andy",
        seenHint: false,
      },
      {
        name: "Aladdin",
        content: {
          primary: "🧞",
          secondary: "👳‍♀️🐒",
        },
        hint: "Based on a middle eastern folk tale",
        matchValue: "Jafar",
        seenHint: false,
      },
      {
        name: "The Little Mermaid",
        content: {
          primary: "🧜‍♀️",
          secondary: "🦵🗣️",
        },
        hint: "Based on a Hans Christian Anderson tale",
        matchValue: "Triton",
        seenHint: false,
      },
      {
        name: "Inside Out",
        content: {
          primary: "😄",
          secondary: "😔😡",
        },
        hint: "The main characters are emotions",
        matchValue: "Riley",
        seenHint: false,
      },
      {
        name: "101 Dalmations",
        content: {
          primary: "🐕",
          secondary: "⬛⬜",
        },
        hint: "Has a live action remake",
        matchValue: "Cruella",
        seenHint: false,
      },
      {
        name: "Up",
        content: {
          primary: "🎈",
          secondary: "🏡🐕",
        },
        hint: "Protagonist is an elderly widower",
        matchValue: "Paradise Falls",
        seenHint: false,
      },
      {
        name: "Pinocchio",
        content: {
          primary: "🤥",
          secondary: "👃🧚‍♀️",
        },
        hint: "Protagonist transitions from puppet to boy",
        matchValue: "Woodworker",
        seenHint: false,
      },
      {
        name: "The Incredibles",
        content: {
          primary: "🦸‍♂️",
          secondary: "🦸‍♀️🎭",
        },
        hint: "Family of superheroes living as muggles 😉",
        matchValue: "Elastigirl",
        seenHint: false,
      },
      {
        name: "Dumbo",
        content: {
          primary: "🐘",
          secondary: "🎪👂",
        },
        hint: "Has a live action reimagining",
        matchValue: "Mrs. Jumbo",
        seenHint: false,
      },
      {
        name: "Sleeping Beauty",
        content: {
          primary: "😴",
          secondary: "👸🧚",
        },
        hint: "Has a sequel focussing on the villain",
        matchValue: "Maleficient",
        seenHint: false,
      },
      {
        name: "Beauty and the Beast",
        content: {
          primary: "🌹",
          secondary: "👸👹",
        },
        hint: "Female protagonist loved books",
        matchValue: "Mrs. Potts",
        seenHint: false,
      },
      {
        name: "Coco",
        content: {
          primary: "💀",
          secondary: "🎸🐕",
        },
        hint: "Inspired by a Mexican holiday",
        matchValue: "Land of the Dead",
        seenHint: false,
      },
      {
        name: "Tangled",
        content: {
          primary: "💇‍♀️",
          secondary: "👸🌺",
        },
        hint: "Based on Rapunzel",
        matchValue: "Eugene Fitzherbert",
        seenHint: false,
      },
      {
        name: "Onward",
        content: {
          primary: "🧝‍♂️",
          secondary: "🧙👨‍👦‍👦",
        },
        hint: "All elf characters have blue skin",
        matchValue: "Wilden Lightfoot",
        seenHint: false,
      },
    ],
  },
  {
    name: "Coding Languages",
    author: "N-Shar-ma",
    instructions:
      "The emoji/s on each card are a clue for a programming language. You can flip (click) the card to see an additional hint. Drag and drop a card onto the matching text clue on the right, which will be the coding language name in easy mode, and a couple lines of code in that language in the challenging mode. You can make a maximum of 3 wrong matches.",
    cards: [
      {
        name: "Java",
        content: {
          primary: "☕",
        },
        hint: "Was earlier named Oak",
        matchValue: `String message = \"Hello World!\";
System.out.println(message)`,
        seenHint: false,
      },
      {
        name: "JavaScript",
        content: {
          secondary: "☕📜",
        },
        hint: "Based on ECMAScript",
        matchValue: `let message = \"Hello World!\"
console.log(message)`,
        seenHint: false,
      },
      {
        name: "TypeScript",
        content: {
          secondary: "⌨📜",
        },
        hint: "Compiles to JavaSccurl",
        matchValue: `let message : string = \"Hello World!\"
console.log(message)`,
        seenHint: false,
      },
      {
        name: "Python",
        content: {
          primary: "🐍",
        },
        hint: "Is whitespace sensitive",
        matchValue: `message = \"Hello World!\"
print(message)`,
        seenHint: false,
      },
      {
        name: "C",
        content: {
          primary: "🌊",
        },
        hint: "One of the oldest languages, but still popular",
        matchValue: `char message[11] = \"Hello World!\";
printf(\"%s\", message);`,
        seenHint: false,
      },
      {
        name: "Ruby",
        content: {
          primary: "💎",
        },
        hint: 'Its server side framework is called "Rails"',
        matchValue: `message = \"Hello World!\"
puts message`,
        seenHint: false,
      },
      {
        name: "C#",
        content: {
          secondary: "👀👓",
        },
        hint: "Most popular language for game development",
        matchValue: `string message = \"Hello World!\";
Console.WriteLine(message);`,
        seenHint: false,
      },
      {
        name: "Dart",
        content: {
          primary: "🎯",
        },
        hint: "Used to write Flutter apps",
        matchValue: `String message = \"Hello World!\";
print(message);`,
        seenHint: false,
      },
      {
        name: "Swift",
        content: {
          primary: "🦅",
        },
        hint: "Used to write apps for iOS and MacOS",
        matchValue: `var message : string = \"Hello World!\"
print(message)`,
        seenHint: false,
      },
      {
        name: "Perl",
        content: {
          primary: "🧅",
        },
        hint: "Originally developed for text manipulation",
        matchValue: `my $message = \'Hello World!\';
print($message, \'\\n\');`,
        seenHint: false,
      },
      {
        name: "PHP",
        content: {
          primary: "🐘",
        },
        hint: "Widely used as a server side scripting language",
        matchValue: `$message = \"Hello World!\";
echo $message;`,
                seenHint: false
            }
        ]
    },
    {
        name: "Freedom Fighters",
        author: "AlphaGaurav7",
        instructions: "The emoji/s on each card are a clue for a Freedom Fighter. You can flip (click) the card to see an additional hint. Drag and drop a card onto the matching text clue on the right, which will be the nickname in easy mode, and a famous quote in the challenging mode. You can make a maximum of 3 wrong matches.",
        cards: [
            {
                name: "Mahatma Gandhi",
                content: {
                    secondary:" 👨🏾‍🦲👓"
                },
                hint: "Bapu",
                matchValue: `Be the change you wish to see in the world.`,
                seenHint: false
            },
            {
                name: "Bhagat Singh",
                content: {
                    secondary: "🤠🥆"
                },
                hint: "Sahid-e-Azam",
                matchValue: `Inquilaab zindabaad!`,
                seenHint: false
            },
            {
                name: "Sardar Vallabhai Patel",
                content: {
                    secondary: "👴🏾🗿"
                },
                hint: "Iron Man of India",
                matchValue: `My only desire is that India should be a god producer and no one should be hungry, shedding tears for food in the country.`,
                seenHint: false
            },
            {
                name: "Rabindranath Tagore",
                content: {
                    secondary: "🎅🏾✒️"
                },
                hint: "Gurudev",
                matchValue: `“Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.”`,
                seenHint: false
            },
            {
                name: "Rani of Jhansi",
                content: {
                    secondary: "👸⚔️"
                },
                hint: "Manu",
                matchValue: `If defeated and killed on the field of battle, we shall surely earn eternal glory and salvation`,
                seenHint: false
            },
            {
                name: "BR Ambedkar",
                content: {
                    primary: "🤵",
                    secondary: "🧑‍⚖️‍📝"
                },
                hint: "Baba Saheb",
                matchValue: `They cannot make history who forget history`,
                seenHint: false
            },
            {
                name: "Jawahar Lal Nehru",
                content: {
                    secondary: "🌾🔴🌹"
                },
                hint: "Chachaji",
                matchValue: `We live in a wonderful world that is full of beauty, charm and adventure. There is no end to the adventures we can have if only we seek them with our eyes open.`,
                seenHint: false
            },
            {
                name: "Abul Kalam Azad",
                content: {
                    secondary: "🎅☪️️"
                },
                hint: "Maulana",
                matchValue: `As a child of God, I am greater than anything that can happen to me.`,
                seenHint: false
            },
            {
                name: "Subhash Chandra Bose",
                content: {
                    primary: "🌕"
                },
                hint: "Netaji",
                matchValue: `It is our duty to pay for our liberty with our own blood.`,
                seenHint: false
            },
            {
                name: "Sarojini Naidu",
                content: {
                    primary: "👵"
                },
                hint: "Nightingale of India",
                matchValue: `We want deeper sincerity of motive, a greater courage in speech and earnestness in action.`,
                seenHint: false
            },
            {
                name: "Tipu Sultan",
                content: {
                    primary: "👑"
                },
                hint: "Tiger of Mysore",
                matchValue: `It is far better to live like a lion for a day then to live like a jackal for hundred years.`,
                seenHint: false
            }
        ]
    },
    {
        name: "States and UT",
        author: "KarthikS373",
        instructions: "The emoji/s on each card are clues for a state of UT. You can flip (click) the card to see an additional hint. Drag and drop a card onto the matching text clue on the right, which will be the States and UTs name in easy mode, and a fact about the State / UTin the challenging mode. You can make a maximum of 3 wrong matches.",
        cards: [
            {
                name: "Andaman and Nicobar",
                content: {
                    secondary: "🥚👨"
                },
                hint: "Dugong, the gentle sea cow, is the state animal of this UT",
                matchValue: `Pandunus or Nicobar Breadfruit is a rare fruit found and widely eaten`,
                seenHint: false
            },
            {
                name: "Odisha",
                content: {
                    primary: "⭕",
                    secondary: "🥘🅰"
                },
                hint: "Chilika Lake – A haven for migratory birds",
                matchValue: `Konark Temple is located here`,
                seenHint: false
            },
            {
                name: "Nagaland",
                content: {
                    secondary: "🐍🏝"
                },
                hint: "“Unity” is the motto of this UT",
                matchValue: `Mithun is the state animal`,
                seenHint: false
            },
            {
                name: "Karnataka",
                content: {
                    secondary: "🚗🎭"
                },
                hint: "First Private Radio Station is in this state",
                matchValue: `Largest Coffee Exporter`,
                seenHint: false
            },
            {
                name: "Punjab",
                content: {
                    secondary: "🖐🅱"
                },
                hint: "Named After Five Rivers",
                matchValue: `Sikhism Was Founded Here`,
                seenHint: false
            },
            {
                name: "New Delhi",
                content: {
                    primary: "🆕♥"
                },
                hint: "Capital of India",
                matchValue: `Tallest Minaret in the World is here`,
                seenHint: false
            },
            {
                name: "Sikkim",
                content: {
                    secondary: "😷👘"
                },
                hint: "Least populous state of India",
                matchValue: `India’s first fully organic state`,
                seenHint: false
            },
            {
                name: "Bihar",
                content: {
                    secondary: "🅱📿"
                },
                hint: "The Birthplace Of Jainism And Buddhism",
                matchValue: `Houses The Oldest University`,
                seenHint: false
            },
            {
                name: "Assam",
                content: {
                    secondary: "𓃘🥭"
                },
                hint: "World’s Largest River Island “Majuli”",
                matchValue: `World’s biggest weaving village “Sualkuchi”`,
                seenHint: false
            },
            {
                name: "Chhattisgarh",
                content: {
                    primary: "🏡",
                    secondary: "3️⃣6️⃣"
                },
                hint: "The Niagara Falls of India is here",
                matchValue: `Bastar is located here`,
                seenHint: false
            }
        ]
    },
    {
        name: "Fruits",
        author: "divya-nshi",
        instructions: "The emoji/s on each card are a clue for a fruit. You can flip (click) the card to see an additional hint. Drag and drop a card onto the matching text clue on the right, which will be the fruit name in easy mode, and a fact of the food in the challenging mode. You can make a maximum of 3 wrong matches.",
        cards:[
            {
                name: "Orange",
                content: {
                    secondary: "O🏃‍♂️G", 
                },
                hint: "a colour",
                matchValue: "Orange is a fruit and a color lol",
                seenHint: false
            },
            {
                name: "Pear",
                content: {
                    secondary: "P👂"
                },
                hint: "green color fruit",
                matchValue: "it has about 100 calories",
                seenHint: false
            },
            {
                name: "Cherry",
                content: {
                    secondary: "🪑E"
                },
                hint: "japanese tree name has it",
                matchValue: "A cherry tree can be harvested in 7 seconds",
                seenHint: false
            },
            {
                name: "Mango",
                content: {
                    secondary: "👨Go"
                },
                hint: "king of fruits",
                matchValue: "Mangoes are related to cashews and pistachios",
                seenHint: false
            },
            {
                name: "Kiwi",
                content: {
                    secondary: "🔑V"
                },
                hint: "also a bird",
                matchValue: "low in calories",
                seenHint: false
            },
            {
                name: "Strawberry",
                content: {
                    secondary: "🥤🐻E"
                },
                hint: "first fruit to ripen in the spring",
                matchValue: "it has 200 seeds on an average",
                seenHint: false
            },
            {
                name: "Blackberry",
                content: {
                    secondary: "⚫🐻"
                },
                hint: "Superfood",
                matchValue: "helps tightening of tissues",
                seenHint: false
            },
            {
                name: "Apple",
                content: {
                    secondary: "A💊"
                },
                hint: "- a day keeps doctor away",
                matchValue: "Apple juice was one of the earliest prescribed antidepressants",
                seenHint: false
            },
            {
                name: "Banana",
                content: {
                    secondary: "👵❌❌ "
                },
                hint: "has no seeds",
                matchValue: "it is considered as a berry",
                seenHint: false
            },
            {
                name: "Pineapple",
                content: {
                    secondary: "🌲🍎"
                },
                hint: "it regenerates",
                matchValue: "it ripens faster upside down",
                seenHint: false
            }
        ]
    },
    {
        name: "Rock Bands",
        author: "SameepAher",
        instructions:
          "The emoji/s on each card are a clue for an English Rock Band (Mostly old). You can flip (click) the card to see an additional hint. Drag and drop a card onto the matching text clue on the right, which will be the rock band name in easy mode, and name of some band members in the challenging mode. You can make a maximum of 3 wrong matches.",
        cards: [
            {
                name: "Guns N' Roses",
                content: {
                    secondary: "🔫🌹",
                },
                hint: "Commonly known as the GnR",
                matchValue: "Lead singer - Axl Rose\nLead guitarist - Slash",
                seenHint: false,
            },
            {
                name: "Queen",
                content: {
                    primary: "👑",
                },
                hint: "Bohemian Rhapsody",
                matchValue: "Lead singer - Freddie Mercury\nLead guitarist - Brian May",
                seenHint: false,
            },
            {
                name: "The Beatles",
                content: {
                    primary: "🐞",
                },
                hint: "Started off in 1960s, Made rock music popular all over the world",
                matchValue: "John Lennon\nPaul McCartney",
                seenHint: false,
            },
            {
                name: "Green Day",
                content: {
                    secondary: "💚📆",
                },
                hint: "American rock band that infused the raw power of punk with a melodic pop sensibility",
                matchValue: "Singer: Billie Joe Armstrong\nBassist: Mike Dirnt",
                seenHint: false,
            },
            {
                name: "Eagles",
                content: {
                    primary: "🦅",
                },
                hint: "A band in which every member can sing\nFamous song hits like Hotel California",
                matchValue: "Glenn Frey\nDon Henley",
                seenHint: false,
            },
            {
                name: "Deep Purple",
                content: {
                    secondary: "💜💜",
                },
                hint: "Smoke on the water - as some guitarists would say the hardest intro to play (pun intended), yet very melodic and catchy",
                matchValue: "Singer - David Coverdale\nGuitarist - Ritchie Blackmore",
                seenHint: false,
            },
            {
                name: "Kiss",
                content: {
                    primary: "😘",
                },
                hint: "I wanna Rock and roll all nightttt",
                matchValue: "Singer - Paul Stanley\nGuitarist - Ace Frehley",
                seenHint: false,
            },
            {
                name: "Black Sabbath",
                content: {
                    secondary: "⚫🛀",
                },
                hint: "A hard rock band",
                matchValue: "Singer - Ozzy Osbourne\nGuitarist - Tony Iommi",
                seenHint: false,
            },
            {
                name: "AC / DC",
                content: {
                    secondary: "⚡💡",
                },
                hint: "An Australian hard rock, blues rock, and heavy metal band\nAlso, JEE students have studied this topic in physics",
                matchValue: "Singer - Bon Scott\nGuitarist - Angus Young",
                seenHint: false,
            },
            {
                name: "Red Hot Chili Peppers",
                content: {
                    primary: "🔴",
                    secondary: "🔥🌶",
                },
                hint: "Their music incorporates elements of alternative rock, funk, punk rock and psychedelic rock",
                matchValue: "Singer - Anthony Kiedis\nGuitarist - John Frusciante",
                seenHint: false,
            },
        ],
      },
    {
        name: "Marvel Heroes",
        author: "Ilikepizza2",
        instructions: "The emoji/s on each card are a clue for a hero from the Marvel universe. You can flip (click) the card to see an additional hint. Drag and drop a card onto the matching text clue on the right, which will be the superhero's alias in easy mode, and their real name in the challenging mode. You can make a maximum of 3 wrong matches.",
        cards: [
            {
                name: "Ant Man",
                content: {
                    secondary: "🐜👨🏻"
                },
                hint: "Can change his size on will",
                matchValue: `Scott Lang`,
                seenHint: false
            },
            {
                name: "Hawkeye",
                content: {
                    secondary: "🦅👁"
                },
                hint: "Shoots arrows and never misses :)",
                matchValue: `Clint Barton`,
                seenHint: false
            },
            {
                name: "Captain America",
                content: {
                    secondary: "🛡️👨🏻‍✈🇺🇸"
                },
                hint: "He can do this all day",
                matchValue: `Steve Rogers`,
                seenHint: false
            },
            {
                name: "Spider Man",
                content: {
                    secondary: "🕷️👨🏻"
                },
                hint: "A radioactive insect bit him",
                matchValue: `Peter Parker`,
                seenHint: false
            },
            {
                name: "Ghost Rider",
                content: {
                    secondary: "👻🚵"
                },
                hint: "He has his head on fire!",
                matchValue: `Roberto Reyes`,
                seenHint: false
            },
            {
                name: "Starlord",
                content: {
                    secondary: "⭐👑"
                },
                hint: "(Self-proclaimed)Leader of the Guardians of the Galaxy",
                matchValue: `Peter Quill`,
                seenHint: false
            },
            {
                name: "Silver Surfer",
                content: {
                    secondary: "🥈🏄"
                },
                hint: "Member of the fantastic four",
                matchValue: `Norrin Radd`,
                seenHint: false
            },
            {
                name: "Rocket Raccoon",
                content: {
                    secondary: "🚀🦝"
                },
                hint: "Is NOT a teddy bear!!  >:(",
                matchValue: `89P13`,
                seenHint: false
            },
            {
                name: "Deadpool",
                content: {
                    secondary: "😵🏊"
                },
                hint: "Has regenerative abilities",
                matchValue: `Wade Wilson`,
                seenHint: false
            },
            {
                name: "Iron Man",
                content: {
                    secondary: "🦾🧔🏻"
                },
                hint: "Love you 3000",
                matchValue: `Tony Stark`,
                seenHint: false
            },
            {
                name: "Black Panther",
                content: {
                    secondary: "⚫🐅"
                },
                hint: "Wakanda Forever",
                matchValue: `T'Challa`,
                seenHint: false
            }
        ]
    },
    {
        name: "Sports",
        instructions: "The emoji/s on each card are hints for the sport. You can flip (click) the card to view additional clues. Drag and drop the card onto the matching text clue on the right, which will alias the sport name in easy mode. You can make a maximum of 3 wrong matches.",
        cards: [
            {
                name: "Archery",
                content: {
                    secondary: "R🍒"
                },
                hint: "More than the bow and arrows.",
                matchValue: `bow and arrow`,
                seenHint: false
            },
            {
                name: "Football",
                content: {
                    secondary: "🦶⚽"
                },
                hint: "11 Players, 1 Heartbeat.",
                matchValue: `goooaaalll!`,
                seenHint: false
            },
            {
                name: "Cricket",
                content: {
                    secondary: "😭😺"
                },
                hint: "bat and ball game played",
                matchValue: `Batting Gloves and batting helmet`,
                seenHint: false
            },
            {
                name: "Golf",
                content: {
                    secondary: "⭕F"
                },
                hint: "Hit it long",
                matchValue: `put the ball in the hole`,
                seenHint: false
            },
            {
                name: "Horse race",
                content: {
                    secondary: "🐴🏁"
                },
                hint: "equestrian performance sport, typically involving two or more horses ridden by jockeys",
                matchValue: `using horse`,
                seenHint: false
            },
            {
                name: "Boxing",
                content: {
                    secondary: "🎁NG"
                },
                hint: "trying to punch their opponent with padded gloves on their fists",
                matchValue: `fighting, K.O.`,
                seenHint: false
            },
            {
                name: "Handball",
                content: {
                    secondary: "✋⚽"
                },
                hint: "pass a ball using their hands",
                matchValue: `into the goal with their hand`,
                seenHint: false
            },
            {
                name: "Basket ball",
                content: {
                    secondary: "🧺⚽"
                },
                hint: "tries to score by tossing the ball through the basket",
                matchValue: `b-ball`,
                seenHint: false
            },
            {
                name: "Tennis",
                content: {
                    secondary: "🕙S"
                },
                hint: "strike a hollow rubber ball covered with felt over a net and into the opponent's court",
                matchValue: `Life sized ping pong`,
                seenHint: false
            },
            {
                name: "Badminton",
                content: {
                    primary: "👎",
                    secondary: "⛏️10"
                },
                hint: " hit a shuttlecock across a net",
                matchValue: `battledore and shuttlecock`,
                seenHint: false
            },
        ]
    }
]

export function getShuffledDeck(category) {
  const cardDeck = decks.find((deck) => deck.name === category).cards;
  for (let i = cardDeck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [cardDeck[i], cardDeck[j]] = [cardDeck[j], cardDeck[i]];
  }
  return cardDeck;
}

export function getAuthor(category) {
  return decks.find((deck) => deck.name === category).author;
}

export function getInstructions(category) {
  return decks.find((deck) => deck.name === category).instructions;
}
