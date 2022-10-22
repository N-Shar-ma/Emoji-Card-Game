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
       {
        name: "Lilo & Stitch",
        content: {
          primary: "👽",
          secondary: "🏝🧍‍♀️",
        },
        hint: "Has 1 female protagonist and 1 Experiment in Hawaii",
        matchValue: "Daveigh Chase",
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
            {
                name: "Nirvana",
                content: {
                    primary: "👶🌊",
                    secondary: "🙂",
                },
                hint: "Musical style has been mainly described as grunge, alternative rock, punk rock, and hard rock",
                matchValue: "Singer - Kurt Cobain\nGuitarist - Kurt Cobain",
                seenHint: false,
            }
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
            },
          {
                name: "Thor",
                content: {
                    secondary: "🔨⚡️"
                },
                hint: "God of Thunder",
                matchValue: `Thor Odinson`,
                seenHint: false
            },
          {
                name: "Moonknight",
                content: {
                    secondary: "🌙🥷"
                },
                hint: "Worked in the Natural History Museum in London",
                matchValue: `Mark Spector`,
                seenHint: false
            }
        ]
    },
    {
        name: "Fantasy Fiction Books",
        author: "kat-kan",
        instructions:
            "The emoji/s on each card are a clue for a fantasy fiction book. You can flip (click) the card to see an additional hint. Drag and drop a card onto the matching text clue on the right, which will be the book or saga name in easy mode, and a character/place in the book in the challenging mode. You can make a maximum of 3 wrong matches.",
        cards: [
            {
                name: "Harry Potter and the Philosopher's Stone\n(Harry Potter Saga)",
                content: {
                    secondary: "⚡ 🧙",
                },
                hint: "The boy who lived",
                matchValue: "Hermione Granger",
                seenHint: false,
            },
            {
                name: "The Fellowship of the Ring\n(Lord of the Rings saga)",
                content: {
                    secondary: "🧝‍ 💍",
                },
                hint: "This book is largely concerned with hobbits",
                matchValue: "Frodo Baggins",
                seenHint: false,
            }
            ,
            {
                name: "Alice's Adventures in Wonderland",
                content: {
                    secondary: "🐇 🕛",
                },
                hint: "DRINK ME",
                matchValue: "The Cheshire Cat",
                seenHint: false,
            }
            ,
            {
                name: "The Colour of Magic",
                content: {
                    secondary: "🌈 🧙",
                },
                hint: "This wizard never finished the Unseen University",
                matchValue: "Rincewind",
                seenHint: false,
            },
            {
                name: "The Twilight",
                content: {
                    secondary: "🍎 🧛",
                },
                hint: "How long have you been seventeen?",
                matchValue: "Edward Cullen",
                seenHint: false,
            },
            {
                name: "Eragon",
                content: {
                    secondary: "🐉 🥚",
                },
                hint: "A story about 15 year old boy who became a dragon rider",
                matchValue: "Saphira",
                seenHint: false,
            },
            {
                name: "A Game of Thrones",
                content: {
                    secondary: "🧊 🩸",
                },
                hint: "This saga is known for killing many characters",
                matchValue: "John Snow",
                seenHint: false,
            },
            {
                name: "Blood of Elves\n(The Witcher Saga)",
                content: {
                    secondary: "🐺 🗡️",
                },
                hint: "The main character's love smells like lilac and gooseberries",
                matchValue: "Geralt from Rivia",
                seenHint: false,
            },
            {
                name: "The Hunger Games",
                content: {
                    secondary: "🐦 🏹",
                },
                hint: "12 districts, 24 volunteers",
                matchValue: "Katniss Everdeen",
                seenHint: false,
            }
        ]
    },
    {
      name: "DC Heroes",
      author: "thevinitgupta",
      instructions: "The emoji/s on each card are a clue for a hero from the DC universe. You can flip (click) the card to see an additional hint. Drag and drop a card onto the matching text clue on the right, which will be the superhero's alias in easy mode, and their real name in the challenging mode. You can make a maximum of 3 wrong matches.",
      cards: [
          {
              name: "Batman",
              content: {
                  secondary: "🦇👨🏻"
              },
              hint: "Works in the night",
              matchValue: `Bruce Wayne`,
              seenHint: false
          },
          {
              name: "Superman",
              content: {
                  secondary: "💪👦"
              },
              hint: "An alien who works at the Daily Planet",
              matchValue: `Clark Kent`,
              seenHint: false
          },
          {
              name: "Flash",
              content: {
                  secondary: "⚡🏃‍♂️"
              },
              hint: "Can beat you at a race",
              matchValue: `Barry Allen`,
              seenHint: false
          },
          {
              name: "Aquaman",
              content: {
                  secondary: "🌊🤴"
              },
              hint: "He is a Hybrid",
              matchValue: `Arthur Curry`,
              seenHint: false
          },
          {
              name: "Green Lantern",
              content: {
                  secondary: "🟩🏮"
              },
              hint: "In brightest day, in blackest night, no evil...",
              matchValue: `Hal Jordan`,
              seenHint: false
          },
          {
              name: "Martian Manhunter",
              content: {
                  secondary: "👽🔥"
              },
              hint: "He can read your mind but is afraid of fire",
              matchValue: `J'onn J'onzz`,
              seenHint: false
          },
          {
              name: "Wonder Woman",
              content: {
                  secondary: "👸⚔"
              },
              hint: "Princess of the Amazons",
              matchValue: `Diana Prince`,
              seenHint: false
          },
          {
              name: "Green Arrow",
              content: {
                  secondary: "🏹🟩"
              },
              hint: "He's another genius billionaire like Batman",
              matchValue: `Oliver Queen`,
              seenHint: false
          },
          {
              name: "Constantine",
              content: {
                  secondary: "👻🗣"
              },
              hint: "Can talk to dead people",
              matchValue: `John Constantine`,
              seenHint: false
          },
          {
              name: "Shazam",
              content: {
                  secondary: "🧙‍♂️🌩"
              },
              hint: "He's a kid in a man's body",
              matchValue: `Billy Batson`,
              seenHint: false
          },
          {
              name: "Blue Beetle",
              content: {
                  secondary: "🐞🟦"
              },
              hint: "He has a bio mechanical armour blue in color",
              matchValue: `Jamie Reyes`,
              seenHint: false
          },
        {
              name: "Beast Boy",
              content: {
                  secondary: "🧟‍♂️🦍"
              },
              hint: "He's the coolest kid around and transforms in animals",
              matchValue: `Garfield Logan`,
              seenHint: false
          },
      ]
  },
  {
    name: "Harry Potter Characters",
        author: "Ni-vik",
        instructions: "The emojis on each card represent a character from the Harry Potter Universe. You can flip(click) the card and see a hint.Drag and drop a card onto the matching text clue on the right, which is character's name in easy mode and some info regarding character in challengening mode.",
        cards: [
            {
                name: "George Weasley",
                content: {
                    primary: "🦅",
                    secondary: "❌👂",
                },
                hint: "Saint-like",
                matchValue: "Identical twin brother of Fred Weasley",
                seenHint: false,
            },
            {
                name: "Severus Snape",
                content: {
                    primary: "🩸",
                    secondary: "🐍🦌",
                },
                hint: "Always",
                matchValue: "Member of both the death eaters and the order of the phoenix",
                seenHint: false,
            },
            {
                name: "Hermione Granger",
                content: {
                    primary: "📚",
                    secondary: "🐱🦅",
                },
                hint: "Muggle-born in Harry's Year",
                matchValue: "Prefect and co-founder of the Dumbledore's army",
                seenHint: false,
            },
            {
                name: "Ron Weasley",
                content: {
                    primary: "🕷",
                    secondary: "🐭🦅",
                },
                hint: "Scabbers",
                matchValue: "Padma Patil's date for Yule Ball",
                seenHint: false,
            },
            {
                name: "Draco Malfoy",
                content: {
                    primary: "💰",
                    secondary: "🐍🧹",
                },
                hint: "Nimbus 2001",
                matchValue: "Attacked by the hippogriff,Buckbeak",
                seenHint: false,
            },
            {
                name: "Sirius Black",
                content: {
                    primary: "🐶",
                    secondary: "◾🦅",
                },
                hint: "prisoner of azkaban",
                matchValue: "He was named godfather of Harry",
                seenHint: false,
            },
            {
                name: "Albus Dumbledore",
                content: {
                    primary: "💯",
                    secondary: "🦅👨‍🏫",
                },
                hint: "100 points to gryffindor",
                matchValue: "Defeated Gellert Grindelwald in the global wizarding war",
                seenHint: false,
            },
            {
                name: "Harry Potter",
                content: {
                    primary: "⚡",
                    secondary: "🦉🦅",
                },
                hint: "Chosen one",
                matchValue: "Becomes master of death in dealthly hallows",
                seenHint: false,
            },
            {
                name: "Lord Voldemort",
                content: {
                    primary: "7️⃣",
                    secondary: "👃🐍",
                },
                hint: "You-Know-Who",
                matchValue: "Tom Marvolo Riddle",
                seenHint: false,
            },
        ]
  },
  {
      name: "Cartoons",
      author: "AyushiGautam9",
      instructions:"The emojis on each card are a clue to your favourite childhood cartoons. You can flip (click) the card to see an additional hint. Drag and drop a card onto the matching text clue on the right, which will be the cartoon's name in easy mode, and one fact like the name of the characters, their famous catchphrases, or something about them in challenging mode. You can make a maximum of 3 wrong matches.",
      cards: [
          {
              name: "SpongeBob SquarePants",
              content: {
                  primary: "🧽",
                  secondary:"🟧👖",
              },
              hint: "The protagonist lives in a pineapple.",
              matchValue: "Patrick is the best friend of the main character.",
              seenHint: false
          },
          {
              name: "Pokemon",
              content: {
                  primary:"Po",
                  secondary: "🗝️🧑🏻",
              },
              hint: "Pikachu",
              matchValue: "The villain in this TV cartoon show is Team Rocket.",
              seenHint: false
          },
          {
              name: "Simpsons",
              content: {
                  primary:"📶",
                  secondary: "P☀️",
              },
              hint: "Their skin is yellow.",
              matchValue: "Bart is one of the main characters.",
              seenHint: false
          },
          {
              name: "Mickey Mouse",
              content: {
                  primary:"Mi",
                  secondary: "🗝️🐭",
              },
              hint: "Mystery Mouseketool",
              matchValue: "Hot dogs is one of the famous catchphrases.",
              seenHint: false
          },
          {
              name: "Dragon Ballz",
              content: {
                  primary:"🐉",
                  secondary: "🏀Z",
              },
              hint: "Goku",
              matchValue:"The main cast is called the Z Warriors.",
              seenHint: false
          },
          {
              name: "Ninja Hattori",
              content: {
                  primary:"🥷",
                  secondary: "⛑️⛏️",
              },
              hint: "Ding ding ding...",
              matchValue: "The family there has a pet dog named Shishimaru.",
              seenHint: false
          },
          {
              name: "Doremon",
              content: {
                  primary:"🚪",
                  secondary: "🅰️🌕",
              },
              hint: "Robot",
              matchValue: "Dakisugi is one of the characters in the show.",
              seenHint: false
          },
          {
              name: "Ben 10",
              content: {
                  primary:"🍔",
                  secondary: "🕙⌚",
              },
              hint: "Omnitrix",
              matchValue: "The protagonist can transform into various aliens.",
              seenHint: false
          },
          {
              name: "Dora the Explorer",
              content: {
                  primary:"🚪",
                  secondary: "🅰️🏞️",
              },
              hint: "Talking map",
              matchValue: "The protagonist has a cousin named Diego.",
              seenHint: false
          },
          {
              name: "Tom and Jerry",
              content: {
                  primary:"🦵",
                  secondary: "Ⓜ️🐭",
              },
              hint: "Cat and Rat",
              matchValue: "One of the main characters loves cheese.",
              seenHint: false
          },
      ]
  },
  {
      name: "Countries",
      author: "RaginaPhalangae",
      instructions: "The emojis on each card are a clue to different countries across the globe. You can flip (click) the card to see an additional hint. Drag and drop a card onto the matching text clue on the right, which will be the country's name in easy mode and their capital in challenging mode. You can make a maximum of 3 wrong matches.",
      cards: [
          {
              name: "Belgium",
              content: {
                  secondary: "🔔💪"
              },
              hint: "It is famous for its chocolates.",
              matchValue: "Its capital is Brussels.",
              seenHint: false
          },
          {
              name: "China",
              content: {
                  secondary: "⛓️🅰️"
              },
              hint: "The first outbreak of the COVID-19 pandemic happened here.",
              matchValue: "Its capital is Beijing.",
              seenHint: false
          },
          {
              name: "Iceland",
              content: {
                  secondary: "🧊🏞️"
              },
              hint: "The Gyrfalcon is its national animal.",
              matchValue: "Its capital is Reykjavik.",
              seenHint: false
          },
          {
              name: "Spain",
              content: {
                  secondary: "S🎨"
              },
              hint: "La Tomatina is one of its most famous festivals.",
              matchValue:"Its capital is Madrid.",
              seenHint: false
          },
          {
              name: "Oman",
              content: {
                  secondary: "⭕🧑🏻"
              },
              hint: "It is the oldest independent state in the Arab world.",
              matchValue: "Its capital is Muscat.",
              seenHint: false
          },
          {
              name: "Japan",
              content: {
                  secondary: "J🍳"
              },
              hint: "Mount Fuji is the tallest mountain here.",
              matchValue: "Its capital is Tokyo.",
              seenHint: false
          },
          {
              name: "Germany",
              content: {
                  secondary: "🦠💰"
              },
              hint: "The federal eagle is its national animal.",
              matchValue: "Its capital is Berlin.",
              seenHint: false
          },
          {
              name: "Cuba",
              content: {
                  secondary: "🧊🅰️"
              },
              hint: "Its main island is the largest in the Caribbean.",
              matchValue: "Its capital is Havana.",
              seenHint: false
          },
          {
              name: "Finland",
              content: {
                  secondary: "🐠🏞️"
              },
              hint: "It is the world's happiest country.",
              matchValue:"Its capital is Helsinki.",
              seenHint: false
          },
          {
              name: "France",
              content: {
                  primary:"F",
                  secondary: "🏃♠️"
              },
              hint: "Marie Curie died here.",
              matchValue: "Its capital is Paris.",
              seenHint: false
          },
      ]
  },
  {
      name: "Apps",
      author: "RaginaPhalangae",
      instructions: "The emojis on each card are a clue to different apps. You can flip (click) the card to see an additional hint. Drag and drop a card onto the matching text clue on the right, which will be the app's name in easy mode and their founder's name or owner's name in challenging mode. You can make a maximum of 3 wrong matches.",
      cards: [
          {
              name: "Facebook",
              content: {
                  secondary: "🧑🏻📖"
              },
              hint: "Meta",
              matchValue: "It was founded by Mark Zuckerberg.",
              seenHint: false
          },
          {
              name: "Snapchat",
              content: {
                  secondary: "📸📱"
              },
              hint: "Snaps and Streaks.",
              matchValue: "Evan Spiegel, Bobby Murphy, and Reggie Brown are its founders.",
              seenHint: false
          },
          {
              name: "Myntra",
              content: {
                  secondary: "🍀Ra"
              },
              hint: "Tagline: A one-stop shop for all your fashion and lifestyle needs.",
              matchValue: "The company was established by Mukesh Bansal along with Vineet Saxena and Ashutosh Lawania.",
              seenHint: false
          },
          {
              name: "TikTok",
              content: {
                  secondary: "✔️💬"
              },
              hint: "It was initially named Musical.ly.",
              matchValue:"It was founded by Zhang Yiming.",
              seenHint: false
          },
          {
              name: "Hotstar",
              content: {
                  secondary: "🔥⭐"
              },
              hint: "It is an online video streaming platform.",
              matchValue: "It is owned by Novi Digital Entertainment Private Limited.",
              seenHint: false
          },
          {
              name: "Uber",
              content: {
                  secondary: "U🐻"
              },
              hint: "Tagline: Move the way you want.",
              matchValue: "It is founded by Travis Kalanick.",
              seenHint: false
          },
          {
              name: "Tinder",
              content: {
                  secondary: "🥫🚪"
              },
              hint: "Tagline: Swipe Right.",
              matchValue: "It was launched by Sean Rad.",
              seenHint: false
          },
          {
              name: "Gmail",
              content: {
                  secondary: "G📩"
              },
              hint: "It made mainstream a web development technique called AJAX.",
              matchValue: "It was developed by Paul Buchheit.",
              seenHint: false
          },
          {
              name: "Netflix",
              content: {
                  primary:"🥅",
                  secondary: "🪰❎",
              },
              hint: "Tagline: We want to entertain the world.",
              matchValue:"It was founded by Reed Hastings and Marc Randolph.",
              seenHint: false
          },
          {
              name: "Zomato",
              content: {
                  primary:"Z",
                  secondary: "⭕🍅",
              },
              hint: "Tagline: Never have a bad meal.",
              matchValue: "It is founded by Deepinder Goyal and Pankaj Chaddah.",
              seenHint: false
          },
      ]
  },
    {
        name: "Netflix series",
        author: "kat-kan",
        instructions:
            "The emoji/s on each card are a clue for a Netflix series. You can flip (click) the card to see an additional hint. Drag and drop a card onto the matching text clue on the right, which will be the series name in easy mode, and a character/place in the series in the challenging mode. You can make a maximum of 3 wrong matches.",
        cards: [
            {
                name: "Stranger Things",
                content: {
                    secondary: "👾 🚴",
                },
                hint: "This series' action is set in the 1980s",
                matchValue: "Eleven",
                seenHint: false,
            },
            {
                name: "The Umbrella Academy",
                content: {
                    secondary: "🎻 🏫",
                },
                hint: "One day, 43 women around the whole world gave birth unexpectedly",
                matchValue: "Klaus Hargreeves",
                seenHint: false,
            }
            ,
            {
                name: "Bridgerton",
                content: {
                    secondary: "📜 👰",
                },
                hint: "London society loves gossip",
                matchValue: "Lady Danbury",
                seenHint: false,
            }
            ,
            {
                name: "13 reasons why",
                content: {
                    secondary: "📼 📷",
                },
                hint: "It all started with the tapes...",
                matchValue: "Hannah Baker",
                seenHint: false,
            },
            {
                name: "The Crown",
                content: {
                    secondary: "👑 🔔",
                },
                hint: "It's based on the historical events, however some were depicted",
                matchValue: "Queen Elisabeth II",
                seenHint: false,
            },
            {
                name: "Sex Education",
                content: {
                    secondary: "👨🏻‍🏫 💑",
                },
                hint: "A pair of friends sets up some kind of clinic for the other students",
                matchValue: "Otis Milburn",
                seenHint: false,
            },
            {
                name: "Peaky Blinders",
                content: {
                    secondary: "🥃 💰",
                },
                hint: "The main character is a gangster villain-hero",
                matchValue: "Tommy Shelby",
                seenHint: false,
            },
            {
                name: "Money Heist",
                content: {
                    secondary: "🏦 🎭",
                },
                hint: "The original title is \"Le Casa de Papel\"",
                matchValue: "Sergio Marquina",
                seenHint: false,
            },
            {
                name: "You",
                content: {
                    secondary: "🩸 📚",
                },
                hint:"It's a story about toxic love",
                matchValue: "Joe Goldberg",
                seenHint: false,
            },
            {
                name: "The Queen's Gambit",
                content: {
                    secondary: "♟ 💊",
                },
                hint:"A miniseries about young genius",
                matchValue: "Beth Harmon",
                seenHint: false,
            },
            {
                name: "Squid Game",
                content: {
                    secondary: "🔺 ⬜",
                },
                hint:"This game had 456 players",
                matchValue: "Seong Gi-hun",
                seenHint: false,
            },
            {
                name: "Anne with an E",
                content: {
                    secondary: "💚 👩‍🦰",
                },
                hint:"For this little girl, Avonlea became a true home",
                matchValue: "Marilla Cuthbert",
                seenHint: false,
            },
            {
                name: "Dark",
                content: {
                    secondary: "👦 👴",
                },
                hint:"This series is like a big puzzle",
                matchValue: "Jonas Kahnwald",
                seenHint: false,
            }
        ]
    },
    {
        name: "Famous Companies",
        author: "Girlwithasmile",
        instructions: "The emoji/s on each card are a clue for a company. You can flip (click) the card to see an additional hint. Drag and drop a card onto the matching text clue on the right, which will be the company name in easy mode, and the company's founder/s in the challenging mode. You can make a maximum of 3 wrong matches.",
        cards:[
            {
                name: "Microsoft",
                content: {
                    primary: "🙋‍♀️",
                    secondary: "⬛🐦🍦", 
                },
                hint: "Head of MAANG",
                matchValue: "Bill Gates",
                seenHint: false
            },
            {
                name: "Google",
                content: {
                    secondary: "👓🔎"
                },
                hint: "You use this search engine everyday",
                matchValue: "Larry Page",
                seenHint: false
            },
            {
                name: "Meta",
                content: {
                    secondary: "😊📖"
                },
                hint: "Its former name is still the product name.",
                matchValue: "Mark Elliot Zuckerberg",
                seenHint: false
            },
            {
                name: "Amazon",
                content: {
                    secondary: "🤩🔛"
                },
                hint: "Shop, window shop",
                matchValue: "Jeff Bezoz",
                seenHint: false
            },
            {
                name: "Mercedes Benz",
                content: {
                    secondary: "🌡️©️🇩🇿"
                },
                hint: "We all dream of owning this car",
                matchValue: "Karl Benz, Gottlieb Daimler, Wilhelm Maybach and Emil Jellinek",
                seenHint: false
            },
            {
                name: "Twitter",
                content: {
                    secondary: "🍵w😢"
                },
                hint: "We all love the bird emoji",
                matchValue: "Jack Dorsey",
                seenHint: false
            },
            {
                name: "Adobe",
                content: {
                    primary: "🅰️",
                    secondary: "🐕🇧🇪"
                },
                hint: "PDF viewer, reader, digital signature",
                matchValue: "John Warnock",
                seenHint: false
            },
            {
                name: "Apple",
                content: {
                    secondary: "A💊"
                },
                hint: "_ a day keeps the doctor away",
                matchValue: "Steve Jobs",
                seenHint: false
            },
            {
                name: "IBM",
                content: {
                    primary: "👁️",
                    secondary: "🐝M"
                },
                hint: "Business machines",
                matchValue: "Charles Ranlett Flint",
                seenHint: false
            },
            {
                name: "Chanel",
                content: {
                    secondary: "📺📱"
                },
                hint: "French luxury fashion house",
                matchValue: "Coco Chanel",
                seenHint: false
            }
        ]
    },
    {
        name: "Games",
        author: "Shyamlee-1207",
        instructions:"The emojis on each card are a clue to different games. You can flip (click) the card to see an additional hint. Drag and drop a card onto the matching text clue on the right, which will be the games name in easy mode and their type / character name in challenging mode. You can make a maximum of 3 wrong matches.",
        cards: [
            {
                name: "Temple Run",
                content: {
                    secondary:"🛕 🏃‍♀️",
                },
                hint: "Zoombie run was developed in the wake of this games's success",
                matchValue: "Barry Bones",
                seenHint: false
            },
            {
                name: "Fifa",
                content: {
                    secondary: "⚽🥅",
                },
                hint: "Brings the world's game to life.",
                matchValue: "Cristiano Ronaldo",
                seenHint: false
            },
            {
                name: "Candy Crush",
                content: {
                    secondary: "🍭🔨",
                },
                hint: "Match the three and increment the score.",
                matchValue: "Tile matching game.",
                seenHint: false
            },
            {
                name: "Asphalt 8",
                content: {
                    secondary: "🚗 8",
                },
                hint: "First game in the series to feature a licensed soundtrack.",
                matchValue: "Racing video game",
                seenHint: false
            },
            {
                name: "Angry Birds",
                content: {
                    secondary: "😡 🦜",
                },
                hint: "Flock of birds trying to save their eggs from green-colored pigs.",
                matchValue:"Casual Puzzle video game",
                seenHint: false
            },
            {
                name: "Grand theft Auto",
                content: {
                    secondary: "🚗 🏃‍♀️",
                },
                hint: "Game revolves around driving and shooting with occasional role-playing and stealth element.",
                matchValue: "Maria Latore",
                seenHint: false
            },
            {
                name: "Assassin Creed",
                content: {
                    secondary: "🥷 🥷",
                },
                hint: "Game revolves around combat, stealth and ecploration, including parkour to navigate the environment.",
                matchValue: "Desmond Miles",
                seenHint: false
            },
            {
                name: "Minecraft",
                content: {
                    secondary: "🔨 🏠",
                },
                hint: "Players create and break various kinds of blocks in 3D worlds.",
                matchValue: "A sandbox video game.",
                seenHint: false
            },
            {
                name: "Ludo King",
                content: {
                    secondary: "🎲 👑",
                },
                hint: "Ranked among top Android games globally in 2020.",
                matchValue: "A record breaking casual game in the history of mobile gaming.",
                seenHint: false
            },
            {
                name: "Call Of Duty",
                content: {
                    secondary: "📞 👨‍💻",
                },
                hint: "Focused on games set in World War 2.",
                matchValue: "First-person shooter video game franchise.",
                seenHint: false
            },
            {
                name: "Subway Surfers",
                content: {
                    secondary: "🏂 🛤️",
                },
                hint: "Main character of the game tries to escape from the inspector and his dog.",
                matchValue: "Tricky",
                seenHint: false
            },
            {
                name: "Among Us",
                content: {
                    secondary: "🤫 🔫",
                },
                hint: "Crewmates work together to compplete tasks before one or more Imposters can kill everyone aboard.",
                matchValue: "A party game of teamwork and betrayal",
                seenHint: false
            },
        ]
    },
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
