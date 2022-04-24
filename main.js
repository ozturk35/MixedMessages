/* A Node.js console app that generates random messages each time user runs the program */
/* This is a part of Codecademy's Full-Stack Web Development Career Path Portfolio Project */

/* LANA DEL REY LYRIC GENERATOR v0.0.1 */

/* LDR lyric patterns */
/*
    <verb1> <adj1>, I can almost <verb2> it <time1>.
    I'm your / you're mine <adj1> <role1>.
    <verb1-ing> like <noun1>, <adj1> and <adj2>.
    <time1> <subject1> just want to <verb1>.
    <verb1> a <noun1> and <verb2> the <noun2>.
    There are <noun1-s> in your eyes, there are <noun2-s> that <verb1> around you.
    Every <day> <time1> I <verb1> to <verb2> for you, baby.
*/
let verb1, verb2, adj1, adj2, time1, role1, verb1ing, noun1, noun2, day1 = "";

const MIXM_ADJ = [
    "fast",
    "young",
    "wild",
    "awesome",
    "beautiful",
    "brave",
    "cold",
    "blue",
    "purple",
    "white",
    "wide",
    "older",
    "pretty",
    "happy",
    "dark",
    "real",
    "cold",
    "alive",
    "sad",
    "enough",
    "tough",
    "god damn",
    "crazy",
    "serious"
];

const MIXM_ROLE = [
    "singer",
    "dancer",
    "rider",
    "driver",
    "bartender",
    "girl",
    "mistress",
    "boss",
    "leader",
    "secretary"
];

const MIXM_ADV = [
    "honestly",
    "early",
    "slowly",
    "naturally",
    "wisely"
];

const MIXM_TIME = [
    "sometimes",
    "no longer",
    "forever",
    "in the morning",
    "friday nights"
];

const MIXM_NOUN = [
    "party",
    "war",
    "mind",
    "snow",
    "money",
    "anthem",
    "paradise",
    "sadness",
    "sky",
    "sun",
    "star",
    "cherry",
    "cola",
    "all the world",
    "love",
    "stranger",
    "fear",
    "touch",
    "ocean",
    "hydrengea",
    "cash",
    "happiness"
];

const MIXM_VERB = [
    "live",
    "die",
    "lose",
    "confess",
    "honor",
    "put",
    "miss",
    "taste",
    "pretend",
    "rule",
    "happen",
    "feel",
    "cry",
    "picture",
    "swing"
];

const MIXM_DAY = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
];

const MIXM_PLA = [
    "backyard",
    "on your chest",
    "fancy cars"
];

const getRandomWord = (wordList) => {
    if (wordList.length > 0) {
        let randPos = Math.floor(Math.random() * wordList.length);
        return wordList[randPos];
    }
    else {
        return "Word list is empty!";
    }
};

function capitalize(word) {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
};

function generateLyrics () {
    const mixmPatternPos = Math.floor(Math.random() * 6);

    switch (mixmPatternPos) {
        case 0:
            verb1 = capitalize(getRandomWord(MIXM_VERB));
            verb2 = getRandomWord(MIXM_VERB.filter(word => word != verb1.toLowerCase()));
            adj1  = getRandomWord(MIXM_ADJ);
            time1 = getRandomWord(MIXM_TIME);
            break;
        
        case 1:
            adj1  = getRandomWord(MIXM_ADJ);
            role1 = getRandomWord(MIXM_ROLE);
            break;

        case 2:
            verb1ing = capitalize(getRandomWord(MIXM_VERB)) + "ing";
            noun1    = getRandomWord(MIXM_NOUN);
            adj1     = getRandomWord(MIXM_ADJ);
            adj2     = getRandomWord(MIXM_ADJ.filter(word => word != adj1));
            break;

        case 3:
            time1 = capitalize(getRandomWord(MIXM_TIME));
            verb1 = getRandomWord(MIXM_VERB);
            break;

        case 4:
            verb1 = capitalize(getRandomWord(MIXM_VERB));
            noun1 = getRandomWord(MIXM_NOUN);
            verb2 = getRandomWord(MIXM_VERB.filter(word => word != verb1.toLowerCase()));
            noun2 = getRandomWord(MIXM_NOUN.filter(word => word != noun1));
            break;

        case 5:
            noun1 = getRandomWord(MIXM_NOUN);
            noun2 = getRandomWord(MIXM_NOUN.filter(word => word != noun1));
            verb1 = getRandomWord(MIXM_VERB);
            break;

        case 6:
            day1  = getRandomWord(MIXM_DAY);
            time1 = getRandomWord(MIXM_TIME);
            verb1 = getRandomWord(MIXM_VERB);
            verb2 = getRandomWord(MIXM_VERB.filter(word => word != verb1));
            break;
    }

    const MIXM_PATTERN = [
        `${verb1} ${adj1}, I can almost ${verb2} it ${time1}`,
        `I'm your ${adj1} ${role1}`,
        `${verb1ing} like ${noun1}, ${adj1} and ${adj2}`,
        `${time1} I just want to ${verb1}`,
        `${verb1} a ${noun1} and ${verb2} the ${noun2}`,
        `There are ${noun1} in your eyes, there are ${noun2} that ${verb1} around you`,
        `Every ${day1} ${time1} I ${verb1} to ${verb2} for you, baby`
    ];
    const mixmPattern = MIXM_PATTERN[mixmPatternPos];

    console.log(mixmPattern);
};

generateLyrics();
