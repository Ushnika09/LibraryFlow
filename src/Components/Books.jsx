const books = [
  // Fiction
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    description: "A psychological thriller about a woman's act of violence and obsession with her silence.",
    detailedDescription: "Alicia Berenson, a famous painter, shoots her husband in cold blood and then never speaks another word. Her silence turns her into a mystery, until a psychotherapist named Theo Faber takes on her case, determined to uncover her secrets. As he dives deeper into her past and her art, shocking truths about obsession, trauma, and deception emerge.",
    rating: 4.3,
    isPopular: true,
    isFeatured: true,
    genre: "Fiction",
    coverImg: "https://covers.openlibrary.org/b/isbn/1250301696-L.jpg"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A witty tale of love, society, and manners in Regency England.",
    detailedDescription: "Elizabeth Bennet, one of five sisters in a modest English family, must navigate love, class, and society’s expectations. When she meets the wealthy but aloof Mr. Darcy, misunderstandings and pride stand in the way of romance. Austen’s masterpiece balances biting social commentary with one of literature’s greatest love stories.",
    rating: 4.6,
    isPopular: true,
    isFeatured: false,
    genre: "Fiction",
    coverImg: "https://covers.openlibrary.org/b/isbn/0141439513-L.jpg"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A tragic story of wealth, love, and the American dream.",
    detailedDescription: "Set in the Jazz Age, the novel follows the mysterious millionaire Jay Gatsby and his unrelenting obsession with Daisy Buchanan. Narrated by Nick Carraway, the story explores illusions of love, the hollowness of wealth, and the corruption of the American Dream beneath the glittering parties of Long Island.",
    rating: 4.4,
    isPopular: true,
    isFeatured: true,
    genre: "Fiction",
    coverImg: "https://covers.openlibrary.org/b/isbn/0743273567-L.jpg"
  },

  // Non-Fiction
  {
    title: "Educated",
    author: "Tara Westover",
    description: "A memoir on resilience, knowledge, and self-discovery.",
    detailedDescription: "Tara Westover was raised in a strict survivalist family in rural Idaho, without schooling or medical care. Against all odds, she self-educated, eventually earning a PhD from Cambridge University. Her memoir explores the cost of breaking away from her family, the power of knowledge, and the courage to define her own identity.",
    rating: 4.7,
    isPopular: true,
    isFeatured: false,
    genre: "Non-Fiction",
    coverImg: "https://covers.openlibrary.org/b/isbn/0399590501-L.jpg"
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    description: "An intimate, powerful memoir by the former First Lady of the United States.",
    detailedDescription: "Michelle Obama traces her journey from her childhood in Chicago to her role as First Lady of the United States. She shares her struggles balancing career, family, and public life, while also highlighting her advocacy for education, health, and empowerment. It’s a deeply personal story of resilience, identity, and hope.",
    rating: 4.8,
    isPopular: true,
    isFeatured: true,
    genre: "Non-Fiction",
    coverImg: "https://covers.openlibrary.org/b/isbn/1524763136-L.jpg"
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    description: "A sweeping history of human evolution and civilization.",
    detailedDescription: "Harari explores the history of humankind from the emergence of Homo sapiens in Africa to the present. The book examines how language, agriculture, empires, religion, and capitalism shaped human societies. It challenges readers to consider how shared myths and cooperation define humanity.",
    rating: 4.7,
    isPopular: true,
    isFeatured: true,
    genre: "Non-Fiction",
    coverImg: "https://covers.openlibrary.org/b/isbn/0062316095-L.jpg"
  },

  // Sci-Fi
  {
    title: "Dune",
    author: "Frank Herbert",
    description: "Epic sci-fi saga on the desert planet Arrakis.",
    detailedDescription: "Paul Atreides inherits control over the desert planet Arrakis, the source of the universe’s most valuable substance: spice. As political intrigue, betrayal, and war unfold, Paul discovers his destiny as a messianic leader. Herbert’s epic blends ecology, religion, and power struggles in one of the most influential sci-fi novels ever written.",
    rating: 4.6,
    isPopular: true,
    isFeatured: false,
    genre: "Sci-Fi",
    coverImg: "https://covers.openlibrary.org/b/isbn/0441172717-L.jpg"
  },
  {
    title: "Neuromancer",
    author: "William Gibson",
    description: "A cyberpunk classic about AI, hacking, and dystopia.",
    detailedDescription: "Case, a washed-up computer hacker, is hired for one last job: to hack into a powerful artificial intelligence system. Set in a gritty, high-tech future, Gibson’s novel pioneered the cyberpunk genre, exploring the blurred boundaries between humans, machines, and cyberspace.",
    rating: 4.2,
    isPopular: false,
    isFeatured: false,
    genre: "Sci-Fi",
    coverImg: "https://covers.openlibrary.org/b/isbn/0441569595-L.jpg"
  },
  {
    title: "Foundation",
    author: "Isaac Asimov",
    description: "A grand saga of the fall and rise of civilizations across galaxies.",
    detailedDescription: "Mathematician Hari Seldon develops psychohistory, a science predicting the fall of the Galactic Empire. To preserve knowledge and shorten the dark ages to come, he establishes the Foundation. The series follows the struggle to safeguard civilization against chaos and tyranny.",
    rating: 4.5,
    isPopular: true,
    isFeatured: true,
    genre: "Sci-Fi",
    coverImg: "https://covers.openlibrary.org/b/isbn/0553293354-L.jpg"
  },

  // Fantasy
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    description: "Bilbo's whimsical journey through Middle-earth.",
    detailedDescription: "Bilbo Baggins, a reluctant hobbit, is swept into an adventure with Gandalf the wizard and a band of dwarves seeking to reclaim their homeland from the dragon Smaug. Along the way, Bilbo discovers courage, cunning, and a mysterious ring that changes everything.",
    rating: 4.7,
    isPopular: true,
    isFeatured: true,
    genre: "Fantasy",
    coverImg: "https://covers.openlibrary.org/b/isbn/0618968636-L.jpg"
  },
  {
    title: "Harry Potter and the Sorcerer’s Stone",
    author: "J.K. Rowling",
    description: "The magical beginning of the Harry Potter series.",
    detailedDescription: "Harry Potter, an orphan living with cruel relatives, discovers he is a wizard on his 11th birthday. Attending Hogwarts School of Witchcraft and Wizardry, he makes friends, faces enemies, and learns of his connection to the dark wizard Voldemort.",
    rating: 4.9,
    isPopular: true,
    isFeatured: false,
    genre: "Fantasy",
    coverImg: "https://covers.openlibrary.org/b/isbn/059035342X-L.jpg"
  },
  {
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    description: "A brutal tale of politics, betrayal, and dragons.",
    detailedDescription: "In the Seven Kingdoms of Westeros, noble families vie for the Iron Throne through war, betrayal, and shifting alliances. With winter approaching and ancient threats rising, the story intertwines political intrigue with epic fantasy on a scale rarely seen.",
    rating: 4.8,
    isPopular: true,
    isFeatured: true,
    genre: "Fantasy",
    coverImg: "https://covers.openlibrary.org/b/isbn/0553573403-L.jpg"
  },

  // Mystery / Thriller
  {
    title: "Gone Girl",
    author: "Gillian Flynn",
    description: "A modern thriller full of twists about marriage and lies.",
    detailedDescription: "Nick and Amy Dunne’s marriage seems picture-perfect—until Amy goes missing on their fifth wedding anniversary. As media scrutiny intensifies, suspicions fall on Nick. Flynn’s novel twists and turns through unreliable narrators and shocking revelations about manipulation and deceit.",
    rating: 4.4,
    isPopular: true,
    isFeatured: false,
    genre: "Thriller",
    coverImg: "https://covers.openlibrary.org/b/isbn/0307588378-L.jpg"
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    description: "Murder mystery entwined with financial corruption and family secrets.",
    detailedDescription: "Journalist Mikael Blomkvist and hacker Lisbeth Salander team up to investigate the decades-old disappearance of a wealthy heiress. What they uncover is a web of family secrets, corruption, and violence. Lisbeth’s unforgettable character brings grit and brilliance to this dark thriller.",
    rating: 4.5,
    isPopular: true,
    isFeatured: true,
    genre: "Thriller",
    coverImg: "https://covers.openlibrary.org/b/isbn/0307949486-L.jpg"
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    description: "A gripping symbologist thriller involving secret societies.",
    detailedDescription: "Professor Robert Langdon is thrust into a deadly puzzle after a murder in the Louvre. Teaming with cryptologist Sophie Neveu, he uncovers hidden messages in Da Vinci’s works, leading to a secret guarded for centuries by secret societies and the Church.",
    rating: 4.3,
    isPopular: true,
    isFeatured: false,
    genre: "Thriller",
    coverImg: "https://covers.openlibrary.org/b/isbn/0307474275-L.jpg"
  },

  // Classics
  {
    title: "1984",
    author: "George Orwell",
    description: "A dystopian warning about surveillance and totalitarianism.",
    detailedDescription: "In a grim totalitarian future, Winston Smith works at the Ministry of Truth, rewriting history to suit the Party. Constantly watched by Big Brother, Winston secretly rebels, seeking love and freedom. Orwell’s chilling vision warns of the dangers of authoritarian control and lost individuality.",
    rating: 4.7,
    isPopular: true,
    isFeatured: true,
    genre: "Classics",
    coverImg: "https://covers.openlibrary.org/b/isbn/0451524934-L.jpg"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A classic exploring justice, race, and morality in the Deep South.",
    detailedDescription: "Scout Finch recalls her childhood in Maycomb, Alabama, where her father, lawyer Atticus Finch, defends a Black man falsely accused of raping a white woman. Through the eyes of Scout and her brother Jem, the novel explores innocence, prejudice, and the fight for justice.",
    rating: 4.9,
    isPopular: true,
    isFeatured: false,
    genre: "Classics",
    coverImg: "https://covers.openlibrary.org/b/isbn/0061120081-L.jpg"
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    description: "A psychological exploration of guilt, morality, and redemption.",
    detailedDescription: "Raskolnikov, a poor ex-student in St. Petersburg, commits a brutal murder, believing himself above morality. As guilt consumes him, he wrestles with morality, punishment, and redemption. Dostoevsky’s masterpiece probes the darkest corners of the human psyche.",
    rating: 4.5,
    isPopular: false,
    isFeatured: true,
    genre: "Classics",
    coverImg: "https://covers.openlibrary.org/b/isbn/0486415872-L.jpg"
  },

  // Self-Help
  {
    title: "Atomic Habits",
    author: "James Clear",
    description: "A proven framework for building good habits and breaking bad ones.",
    detailedDescription: "James Clear outlines how small, consistent changes lead to remarkable results. With practical strategies like habit stacking, environment design, and the 1% rule, this book shows how to reprogram behavior for long-term success in health, work, and life.",
    rating: 4.9,
    isPopular: true,
    isFeatured: true,
    genre: "Self-Help",
    coverImg: "https://covers.openlibrary.org/b/isbn/0735211299-L.jpg"
  },
  {
    title: "The Power of Now",
    author: "Eckhart Tolle",
    description: "A spiritual guide to living fully in the present moment.",
    detailedDescription: "Tolle encourages readers to break free from the constant chatter of the mind and embrace the present moment as the key to peace and fulfillment. Blending philosophy and spirituality, it teaches how to overcome anxiety and live with awareness.",
    rating: 4.6,
    isPopular: true,
    isFeatured: false,
    genre: "Self-Help",
    coverImg: "https://covers.openlibrary.org/b/isbn/1577314808-L.jpg"
  },
  {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    description: "A classic success manual blending mindset and wealth creation.",
    detailedDescription: "Based on decades of study and interviews with wealthy individuals, Hill distills 13 principles for success, including desire, persistence, and visualization. It remains a cornerstone of motivational and financial self-help literature.",
    rating: 4.4,
    isPopular: true,
    isFeatured: true,
    genre: "Self-Help",
    coverImg: "https://covers.openlibrary.org/b/isbn/0449214923-L.jpg"
  },

  // Extra
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    description: "A philosophical novel about following your dreams.",
    detailedDescription: "Santiago, a shepherd boy in Spain, dreams of discovering treasure near the Egyptian pyramids. His journey leads him across the desert, where he meets teachers who guide him to listen to his heart and pursue his destiny. Coelho’s allegorical tale inspires self-discovery and perseverance.",
    rating: 4.6,
    isPopular: true,
    isFeatured: false,
    genre: "Fiction",
    coverImg: "https://covers.openlibrary.org/b/isbn/0061122416-L.jpg"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description: "A coming-of-age story exploring teenage angst and alienation.",
    detailedDescription: "Holden Caulfield, a disaffected teenager expelled from prep school, wanders New York City grappling with loneliness, disillusionment, and identity. His voice, cynical yet vulnerable, has made the novel a landmark exploration of adolescent alienation.",
    rating: 4.3,
    isPopular: true,
    isFeatured: true,
    genre: "Classics",
    coverImg: "https://covers.openlibrary.org/b/isbn/0316769487-L.jpg"
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    description: "A dystopian novel exploring technology, control, and human freedom.",
    detailedDescription: "In a future society engineered for stability, individuality is sacrificed for conformity and pleasure. Citizens are controlled through conditioning and drugs, but a man raised outside this system challenges its values. Huxley’s classic critiques consumerism, technology, and loss of humanity.",
    rating: 4.4,
    isPopular: true,
    isFeatured: false,
    genre: "Classics",
    coverImg: "https://covers.openlibrary.org/b/isbn/0060850523-L.jpg"
  },
  {
    title: "The Martian",
    author: "Andy Weir",
    description: "A stranded astronaut's struggle to survive on Mars.",
    detailedDescription: "After a dust storm leaves astronaut Mark Watney stranded on Mars, he must use ingenuity, science, and humor to survive. From growing food to engineering life-saving solutions, Watney’s fight for survival captures resilience, hope, and human determination.",
    rating: 4.8,
    isPopular: true,
    isFeatured: true,
    genre: "Sci-Fi",
    coverImg: "https://covers.openlibrary.org/b/isbn/0804139024-L.jpg"
  },
  {
    title: "The Shining",
    author: "Stephen King",
    description: "A chilling tale of isolation and supernatural horror.",
    detailedDescription: "Jack Torrance, an aspiring writer, becomes caretaker of the remote Overlook Hotel with his wife and son. As winter closes in, malevolent forces in the hotel prey on Jack’s weaknesses, pushing him toward violence. King’s classic explores madness, isolation, and the supernatural.",
    rating: 4.7,
    isPopular: true,
    isFeatured: true,
    genre: "Horror",
    coverImg: "https://covers.openlibrary.org/b/isbn/0307743659-L.jpg"
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    description: "A haunting story of a father and son's survival in a post-apocalyptic world.",
    detailedDescription: "A father and his young son journey through a desolate, ash-covered landscape after an unspecified catastrophe. Facing starvation, violence, and despair, they cling to love and the hope of survival. McCarthy’s prose is stark yet deeply moving.",
    rating: 4.5,
    isPopular: true,
    isFeatured: false,
    genre: "Fiction",
    coverImg: "https://covers.openlibrary.org/b/isbn/0307387895-L.jpg"
  }
];

export default books;
