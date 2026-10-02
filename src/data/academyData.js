/**
 * KS Chess Academy - Master Configuration & Academy Data
 * 
 * IMPORTANT FOR USER:
 * To configure your Google Form URL, update `formUrl` below.
 * All other academy details are synchronized across the entire website from here.
 */

export const ACADEMY_DATA = {
  // Brand & Identity
  academyName: "KS Chess Academy",
  tagline: "Build Your Mind. Master the Game.",
  establishedNote: "Professional Chess Coaching",
  
  // Founder Information & Verified Credentials
  founder: {
    name: "M. Karthiganes",
    credentials: "FA, AIM",
    education: "B.A., LL.B. (Pursuing)",
    designation: "FOUNDER & CHESS COACH",
    bio: "Dedicated to nurturing strategic acumen, mental discipline, and chess mastery through structured, time-tested coaching methodologies tailored for kids, students, and adult competitors.",
    credentialsList: [
      {
        title: "FIDE ARBITER",
        subtitle: "Official Arbiter Credential",
        description: "Certified by the International Chess Federation (FIDE) to officiate international and national rated tournaments.",
        icon: "ShieldCheck"
      },
      {
        title: "INTERNATIONAL FIDE RATED PLAYER",
        subtitle: "Active Competitive Master",
        description: "Official international tournament rating with extensive competitive game mastery and match analysis experience.",
        icon: "Trophy"
      },
      {
        title: "ARENA INTERNATIONAL MASTER",
        subtitle: "AIM Title Holder",
        description: "Recognized international master title awarded for sustained tactical accuracy and high-performance competitive play.",
        icon: "Crown"
      },
      {
        title: "WORLD RECORD HOLDER",
        subtitle: "Noble Book of Records",
        description: "Prestigious world record recognition documented by the Noble Book of Records for extraordinary chess excellence.",
        icon: "Award"
      }
    ]
  },

  // Contact Information
  phone: "9025819382",
  phoneDisplay: "+91 90258 19382",
  whatsappNumber: "919025819382",
  email: "infokschessacademy@gmail.com",

  // Academy Centers
  locations: [
    {
      id: "thoothukudi",
      name: "Thoothukudi",
      tag: "Main Center",
      description: "Comprehensive in-person coaching, over-the-board play & tactical workshops.",
      actionText: "Enquire for Thoothukudi Batch"
    },
    {
      id: "tirunelveli",
      name: "Tirunelveli",
      tag: "Active Center",
      description: "Structured weekend and weekday training batches for kids and tournament players.",
      actionText: "Enquire for Tirunelveli Batch"
    },
    {
      id: "puthiyamputhur",
      name: "Puthiyamputhur",
      tag: "Active Center",
      description: "Dedicated offline guidance, foundational workshops, and tournament preparation.",
      actionText: "Enquire for Puthiyamputhur Batch"
    }
  ],

  // Modes & Timings
  classTypes: "Online, Offline & Individual Training",
  timings: "Daily & Weekend Classes",
  timingsNote: "Batch timings will be shared during registration.",

  // Target Audiences
  targetAudiences: [
    {
      id: "kids",
      title: "Kids",
      ageRange: "Early Learners (Ages 4-10)",
      description: "Building foundational cognitive agility, spatial logic, patience, and playful curiosity through fun chess mechanics."
    },
    {
      id: "students",
      title: "Students",
      ageRange: "School & College (Ages 11-18)",
      description: "Developing sharp analytical thinking, intense focus, tactical pattern recognition, and tournament confidence."
    },
    {
      id: "adults",
      title: "Adults",
      ageRange: "Enthusiasts & Working Professionals",
      description: "Refining strategic calculation, mental clarity, opening repertoire, and mastering deep endgame technique."
    },
    {
      id: "all-ages",
      title: "All Ages",
      ageRange: "Beginners to Advanced",
      description: "Inclusive, supportive coaching tailored to individual learning pace, personal goals, and competitive ambitions."
    }
  ],

  // Why Chess Pillars
  whyChessPillars: [
    {
      id: "strategic-thinking",
      number: "01",
      title: "Strategic Thinking",
      headline: "Think ahead and make calculated decisions.",
      description: "Learn to foresee moves ahead, evaluate multiple scenarios, anticipate opponent plans, and execute long-term strategies under pressure."
    },
    {
      id: "improved-focus",
      number: "02",
      title: "Improved Focus",
      headline: "Develop intense concentration and attention span.",
      description: "Strengthen sustained mental stamina, eliminate distractions, and cultivate rigorous precision required in both academics and life."
    },
    {
      id: "problem-solving",
      number: "03",
      title: "Problem Solving",
      headline: "Analyze complex challenges and discover breakthroughs.",
      description: "Deconstruct tactical puzzles step by step, spot hidden resources, and find creative solutions when trapped in difficult positions."
    },
    {
      id: "confidence-discipline",
      number: "04",
      title: "Confidence & Discipline",
      headline: "Build patience, emotional control, and self-belief.",
      description: "Instill sportsmanship, deliberate decision-making, resilience after setbacks, and the discipline needed to master any craft."
    }
  ],

  // Class Offerings (3-Column Layout with Individual Training Prominently Featured)
  classes: [
    {
      id: "online",
      title: "ONLINE CLASSES",
      subtitle: "Interactive Virtual Classrooms",
      badge: "Worldwide Access",
      isFeatured: false,
      description: "Master chess anywhere in the world through interactive live digital coaching, screen-shared tactical exercises, and recorded game reviews.",
      features: [
        "Live interactive mentor coaching",
        "Screen-shared board & tactical analysis",
        "Weekly virtual tournament practice",
        "Personalized digital game reviews",
        "Flexible morning & evening slots"
      ],
      ctaText: "ENQUIRE NOW",
      messageType: "online"
    },
    {
      id: "offline",
      title: "OFFLINE CLASSES",
      subtitle: "In-Person Board Training",
      badge: "Regional Centers",
      isFeatured: false,
      description: "Immersive over-the-board training sessions in Thoothukudi, Tirunelveli, and Puthiyamputhur with physical tournament equipment and peer sparring.",
      features: [
        "Face-to-face master coaching",
        "Physical tournament board practice",
        "Live match analysis & clock training",
        "Peer sparring & friendly academy cups",
        "Direct tournament registration support"
      ],
      ctaText: "ENQUIRE NOW",
      messageType: "offline"
    },
    {
      id: "individual",
      title: "INDIVIDUAL / PERSONAL TRAINING",
      subtitle: "1-on-1 Elite Mentorship",
      badge: "Most Impactful",
      isFeatured: true,
      description: "Dedicated 1-on-1 private coaching designed for rapid rating gains, opening repertoire customization, and dedicated tournament prep tailored exclusively to you.",
      features: [
        "Exclusive 1-on-1 coach dedication",
        "Custom opening & endgame repertoire",
        "In-depth psychological match preparation",
        "Targeted correction of tactical flaws",
        "Accelerated FIDE rating progression"
      ],
      ctaText: "ENQUIRE NOW",
      messageType: "individual"
    }
  ],

  // Structured Learning Program with Piece Progression
  learningProgression: [
    {
      level: "LEVEL 01",
      title: "FOUNDATIONS",
      piece: "Pawn",
      pieceSymbol: "♟",
      summary: "First steps into board geometry, piece movements, rules, and fundamental principles.",
      topics: [
        "Board & Piece Geometry",
        "Rules & Legal Special Moves",
        "Basic Checkmates & Defense",
        "Golden Rules of the Opening"
      ]
    },
    {
      level: "LEVEL 02",
      title: "TACTICS & STRATEGY",
      piece: "Knight",
      pieceSymbol: "♞",
      summary: "Mastering tactical weaponry, combinations, forks, pins, and positional planning.",
      topics: [
        "Forks, Pins, Skewers & Discoveries",
        "Opening Principles & Pawn Structures",
        "Middlegame Planning & Piece Harmony",
        "Calculation & Visualization Drills"
      ]
    },
    {
      level: "LEVEL 03",
      title: "ADVANCED CHESS",
      piece: "Rook",
      pieceSymbol: "♜",
      summary: "Developing master-level intuition, prophylactic thinking, and endgame technique.",
      topics: [
        "Complex Middlegame Transitions",
        "Essential Rook & Pawn Endgames",
        "Prophylaxis & Counterplay",
        "Deep Game Analysis & Evaluation"
      ]
    },
    {
      level: "LEVEL 04",
      title: "TOURNAMENT PREPARATION",
      piece: "Queen / King",
      pieceSymbol: "♛",
      summary: "Complete competitive readiness, time management, opening repertoire, and rating growth.",
      topics: [
        "Personalized Opening Repertoire",
        "Chess Clock & Time Management",
        "Tournament Psychology & Resilience",
        "FIDE Rating Strategy & Performance"
      ]
    }
  ],

  // Core 8 Benefits
  benefits: [
    { name: "STRATEGIC VISION", desc: "Long-term planning and foresight beyond immediate moves.", icon: "Compass" },
    { name: "RAZOR FOCUS", desc: "Deep sustained concentration without mental fatigue.", icon: "Focus" },
    { name: "CALCULATION", desc: "Accurate multi-step tree search visualization in mind.", icon: "Calculator" },
    { name: "DISCIPLINE", desc: "Patient impulse control and consistent structured practice.", icon: "Shield" },
    { name: "DECISION MAKING", desc: "Objective evaluation and calm execution under timed pressure.", icon: "CheckCircle" },
    { name: "PROBLEM SOLVING", desc: "Breaking intricate positional puzzles into clear actionable steps.", icon: "Puzzle" },
    { name: "PATIENCE", desc: "Deliberate calculation avoiding premature commitments.", icon: "Hourglass" },
    { name: "SELF-CONFIDENCE", desc: "Deep trust in personal intellectual abilities and resilience.", icon: "Sparkles" }
  ],

  // Google Form Registration URL
  formUrl: "https://forms.gle/6A5Z8Us5EcUeDSh37",

  // Rubik's Cube Academy / Cube Partner Website Link
  cubeWebsiteUrl: "https://share.google/nj6a4Ryt2faEkj9NU",

  // Pre-filled WhatsApp message templates
  whatsappMessages: {
    general: "Hello KS Chess Academy, I am interested in joining the chess classes. Please share the details.",
    hero: "Hello KS Chess Academy, I am interested in joining the chess classes. Please share the class details.",
    online: "Hello KS Chess Academy, I am interested in the Online Chess Classes. Please share the details.",
    offline: "Hello KS Chess Academy, I am interested in the Offline Chess Classes. Please share the details.",
    individual: "Hello KS Chess Academy, I am interested in Individual / Personal Training. Please share the details.",
    registration: "Hello KS Chess Academy, I would like to register for chess classes. Please share the admission details.",
    thoothukudi: "Hello KS Chess Academy, I am interested in joining the Thoothukudi offline classes. Please share location & batch details.",
    tirunelveli: "Hello KS Chess Academy, I am interested in joining the Tirunelveli offline classes. Please share location & batch details.",
    puthiyamputhur: "Hello KS Chess Academy, I am interested in joining the Puthiyamputhur offline classes. Please share location & batch details."
  }
};

/**
 * Generate a prefilled WhatsApp link
 */
export const getWhatsAppLink = (messageKey = "general", customText = null) => {
  const number = ACADEMY_DATA.whatsappNumber;
  const message = customText || ACADEMY_DATA.whatsappMessages[messageKey] || ACADEMY_DATA.whatsappMessages.general;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};
