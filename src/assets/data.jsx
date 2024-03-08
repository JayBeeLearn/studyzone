const databank = [
  {
    id: 1,
    faculty: "General Studies",
    courseCode: "NOU101",
    courseTitle: "Use of English",
    creditUnit: 2,
    level: "100",
    semester: "1",
    questions: [
      {
        type: "MCQ",
        question:
          "Choose the alternative you think best gives the meaning of the capitalized word and fits into the context: The argument ended in RECRIMINATION",
        optionA: "a bomb attack",
        optionB: "serious fighting",
        optionC: "back biting",
        optionD: "counter charge",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question: "The most intense or exciting part of a story is the ______",
        optionA: "beginning   ",
        optionB: "climax",
        optionC: "suspense",
        optionD: "plot",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "In a listening activity, your ability to connect what was said before with what the speaker is saying now is called______",
        optionA: "connectivism",
        optionB: " connectivity",
        optionC: "Relationship",
        optionD: "full concentration",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "To increase your word power in English is to be______ in the language",
        optionA: "well known",
        optionB: "meticulous",
        optionC: "a renowned scholar",
        optionD: "proficient",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "_____ includes figures, formulae and tables that are read in a comprehension passage.",
        optionA: "verbal forms",
        optionB: "Non-verbal or concrete materials",
        optionC: "arithmetical materials",
        optionD: "programmed reading material",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "The experiences portrayed in narrative texts often help us understand the______ of the novel.",
        optionA: "theme",
        optionB: "plot",
        optionC: "structural development",
        optionD: "narrative technique",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "when you start reading an interesting novel, you find it difficult to stop because______",
        optionA: "the story is captivating",
        optionB: "you want the suspense created to be unfolded.",
        optionC: "of the writer's style of writing",
        optionD: "the novel may be a best seller",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "When reading a book in the library",
        optionA: "take notes",
        optionB: "make notes",
        optionC: "All of the above",
        optionD: "None of the above",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "When in a distinguished annual lecture",
        optionA: "take notes",
        optionB: "make notes",
        optionC: "All of the above",
        optionD: "None of the above",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "The______needs high concentration and particular attention to specific details.",
        optionA: "study reading speed",
        optionB: "average reading speed",
        optionC: "slow reading speed",
        optionD: "very slow reading speed.",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "The______needs high concentration and particular attention to specific details.",
        optionA: "study reading speed",
        optionB: "average reading speed",
        optionC: "slow reading speed",
        optionD: "very slow reading speed.",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question: "Listening is said to be useless if there is no______",
        optionA: "speaker",
        optionB: "comprehension",
        optionC: "listener available",
        optionD:
          "the listener does not understand the language of the speaker.",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Which of the following statements may not be true concerning scientific texts?",
        optionA: "Scientific texts have their own peculiar structure and style",
        optionB:
          "Scientific texts do not integrate verbal and non-verbal forms",
        optionC: "Some scientific texts are more formal than others",
        optionD: "Some scientific texts are more highly technical than others",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Which of these tasks may not help you read and comprehend passages with tables easily?",
        optionA: "Scanning the passage",
        optionB: "Skimming the passage",
        optionC:
          "Being able to relate the table and content of the passage together",
        optionD: "Being familiar with the concept being discussed.",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Finding meaning of words by using the technique of word simply means______",
        optionA:
          "regularly and quickly checking the meaning of every change word you come across.",
        optionB:
          "breaking a seemingly and difficult word into divisible parts and finding the meaning of each component.",
        optionC:
          "breaking a word into two parts and looking for the meaning of the larger part.",
        optionD: "using a word to look for the meaning of another word.",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "To be able to grasp the complexities of reading passages with tables,______",
        optionA:
          "you most learn to avoid the distraction that the table may pose to reading comprehension.",
        optionB:
          "You must be very favourably disposed to the concept being discussed.",
        optionC:
          "You must make sure that the connections between the tables and the passage are clear.",
        optionD: "Your language must be highly developed.",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question: "The slowest type of reading is usually done______",
        optionA: "when you want to locate any information quickly",
        optionB:
          "when you want to gain a general impression of the reading material.",
        optionC: "when you read in a study type manner .",
        optionD: "when you are reading a material that is not so difficult.",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "One important way of increasing your vocabulary is to ____________",
        optionA: "read outwardly",
        optionB: "read intensively",
        optionC: "speak and write more in English",
        optionD: "read intensively and extensively.",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "Choose the alternative you think best gives the meaning of the capitalized word and fits into the context: Many people consider CELIBACY unsuited to African culture",
        optionA: "Profligacy",
        optionB: "Remaining unmarried",
        optionC: "Caligraphy",
        optionD: "Child abuse",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "You read to gain knowledge of what is around you. Indeed, books enlighten you and make you______",
        optionA: "preposterous",
        optionB: "lively",
        optionC: "prosperous",
        optionD: "intelligent",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question: "Which of the following statements do you find unacceptable?",
        optionA:
          "Perhaps the most important thing in listening comprehension is to be able to determine the man idea of a speech event.",
        optionB:
          "You need the main idea to be able to determine the major points to be put down as notes.",
        optionC:
          "If you have the main idea of a lecture or seminar, you can easily develop or flesh it during examination or assignments.",
        optionD:
          "It is very important to learn everything from a speech event, facts and fables, main ideas supporting details that you can provide during examinations.",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "In reading and interpreting ____, you should pay attention to the language and figures presented.",
        optionA: "graphs",
        optionB: "tables",
        optionC: "configurations",
        optionD: "diagrams",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Which of the following skills is important when you are doing study reading?",
        optionA: "note-taking",
        optionB: "note making",
        optionC: "reading between the lines accurately.",
        optionD: "listening",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Which of the following skills is not necessary for tackling expository texts?",
        optionA: "Note-making ability",
        optionB: "Thinking along with the writer as you read.",
        optionC: "Note-taking ability",
        optionD: "Reading speed and accuracy.",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "Technical terms are known to be common features of ____________",
        optionA: "Narrative texts",
        optionB: "expository texts",
        optionC: "scientific texts",
        optionD: "figures and tables texts.",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "In ______texts all points are to be supported with concrete evidences.",
        optionA: "narrative",
        optionB: "descriptive",
        optionC: "expository",
        optionD: "argumentative",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "Listening comprehension as it relates to information retrieval from data, figures, diagrams and tables tend to be______to academic purposes.",
        optionA: "more general",
        optionB: "more unified",
        optionC: "more specific",
        optionD: "more specific and more directed",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "Which of the following words may not be associated with the field of psychology?",
        optionA: "Mental",
        optionB: "manipulated",
        optionC: "Eccentric",
        optionD: "drought",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "Reading at the fastest speed is needed when you want to______________",
        optionA: "locate any information quickly",
        optionB: "read in a study type manner.",
        optionC: "finally revise for your impending examination.",
        optionD:
          "read as many course materials as possible within a limited time frame.",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "A listening activity where you listen and link all details to the topic and form your own overall impression is known as______________    .",
        optionA: "listening for critical evaluation",
        optionB: "listening for general impression",
        optionC: "listening for a specific impression",
        optionD:
          "listening for the overlapping details in the speech of the speaker",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "In order to comprehend you should do all but ______________ ",
        optionA: "Listen attentively",
        optionB: "Show interest in the topic",
        optionC: "Recognise general speech pattern",
        optionD: "Stalk the speaker",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "By______________     we mean words that are similar, related or familiar to the words that we are trying to determine meaning of.",
        optionA: "lexical synonyms",
        optionB: "word relatedness",
        optionC: "lexical familiarization",
        optionD: "semantic familiarization",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "Which of the following may not make your understanding of an expository passage difficult?",
        optionA: "lack of vocabulary of the field",
        optionB: "lack of organization in the passage",
        optionC: "lack of familiarly with the concept being discussed",
        optionD: "Having a well- developed vocabulary",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "Your reading speed will vary according to\nthe______________     ",
        optionA: "kind of material you are reading.",
        optionB: "purpose of reading",
        optionC: "environment where you are reading.",
        optionD: "number of materials you have read previously.",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "In order to read for______________ you must be able to decide how relevant the information provided is.",
        optionA: "Interpretation",
        optionB: "critical analysis and evaluation",
        optionC: "summary and comprehension",
        optionD: "your semester examination.",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "______________    involves looking at the merits and demerits of what is heard",
        optionA: "informational listening",
        optionB: "intellectual listening",
        optionC: "critical analysis",
        optionD: "making deductions and observations.",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "To always turn to the dictionary for any meaning of a word, every second is actually______________",
        optionA: "highly recommended",
        optionB: "a lazy student’s approach to learning the meaning of words",
        optionC: "the best way to develop your vocabulary",
        optionD: "the quickest way to find the meaning of a word",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "In most cases narratives are _____________________ in terms of style",
        optionA: "formal",
        optionB: "semi-formal",
        optionC: "informal",
        optionD: "superimposed",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "For a poor reader to achieve a comprehensive rate of 80 – 90%, the study speed may be as low as",
        optionA: "120 – 180 words per minute.",
        optionB: "60 – 100 words per second",
        optionC: "60 – 125 per minute",
        optionD: "30 - 45 words per minutes",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          '"Necessity is the Mother of Invention". The statement can be regarded as ______________   ',
        optionA: "fact",
        optionB: "fable",
        optionC: "opinion",
        optionD: "guess",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question: "Which of the following may not be true of expository text?",
        optionA: "Expository texts do not tell stories",
        optionB: "Expository texts are organised in logical sequential order.",
        optionC: "Expository texts explain ideas in clear-cut terms.",
        optionD: "Expository texts are not as formal as narrative texts.",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "It has been observed that the language of ______________     is diverse and specific",
        optionA: "expository texts",
        optionB: "narrative texts",
        optionC: "scientific texts",
        optionD: "tables and figures texts",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "______________     passages can be difficult if you are not familiar with the words used in the passage.",
        optionA: "Expository",
        optionB: "Descriptive",
        optionC: "Narrative",
        optionD: "Argumentative",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "To be effective in your academic life, it is recommended that you",
        optionA:
          "evaluate, discuss and draw conclusions from the materials you read.",
        optionB:
          "Interpret, evaluate and critically analyse all reading materials.",
        optionC:
          "technically interpret, write points clearly, scan and skim reading materials",
        optionD:
          "skim, scan, analyse and argue intelligently issues raised in any reading material.",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Which of the following pairs of words may likely not be associated with the field of education?",
        optionA: "equipment/finances",
        optionB: "Reared/ mental",
        optionC: "Secondary/tertiary",
        optionD: "participation/foundation",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "When a speaker speaks ‘above your head’ in a listening event, he or she is said to be ______________     ",
        optionA: "encouraging you to think deeply",
        optionB: "encouraging you to think along with him or her",
        optionC: "discussing an uninteresting topic.",
        optionD: "discussing a difficult topic",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "In order to be able to read effectively, you should first______________     ",
        optionA: "decide what to read",
        optionB: "decide what and where to read.",
        optionC: "decide why you want to read.",
        optionD: "decide when you want to read.",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "______________     are representations of information inform of drawings, paintings or sketches.",
        optionA: "Data",
        optionB: "figures or Scores",
        optionC: "Arts and Crafts",
        optionD: "Concrete Art forms",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Which of the following is NOT the purpose of listening to gather information",
        optionA: "Critical evaluation of what people are saying",
        optionB: "Absorbing academic lectures.",
        optionC: "Telephone conversation",
        optionD: "Working in the office",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "______________    does not form the major part of a narrative text.",
        optionA: "A sequential order",
        optionB: "A chronological order of events",
        optionC: "Explanation",
        optionD: "Order of importance",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "A text that explains an issue, a theory, a concept or plan is call______________    text.",
        optionA: "a descriptive",
        optionB: "a narrative",
        optionC: "an expository",
        optionD: "a theoretical",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "Your comprehension rate in a study type reading should be about______________     ",
        optionA: "80 – 90%",
        optionB: "35 -40%",
        optionC: "90 -110%",
        optionD: "20 -35%",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question: "Which of the following may not be true of narratives?",
        optionA: "All narratives tend to follow a story line.",
        optionB: "Narratives follow a sequential order of narration.",
        optionC: "Explanations often form some major parts of some narratives.",
        optionD: "Some narratives have characters who speak in a formal style.",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "Listening comprehension as an interactive process involves the interpretative and the ______________     of the listener.",
        optionA: "activated intellect",
        optionB: "critical proposition",
        optionC: "Critical mind",
        optionD: "organizational skills",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "One of the high-order skills you need to perform creditably well while listening to a lecturer is the",
        optionA: "ability to interpret a speaker’s viewpoints.",
        optionB: "ability to write as fast as the speaker speaks.",
        optionC: "ability to write your points in a special code.",
        optionD: "ability to listen well and ask reasonable questions.",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "Coffee tastes better than tea. This statement can be regarded as __________________",
        optionA: "fact",
        optionB: "fable",
        optionC: "opinion",
        optionD: "guess",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "Christianity is the best religion. This statement can be regarded as ____________________________ ",
        optionA: "fable",
        optionB: "fact",
        optionC: "guess",
        optionD: "opinion",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "Human beings are warm- blooded mammals. The statement can be regarded as ____________________________ ",
        optionA: "fact",
        optionB: "fable",
        optionC: "opinion",
        optionD: "guess",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "The Sun is the star at the center of the Solar System. The statement can be regarded as ____________________________ ",
        optionA: "fable",
        optionB: "fact",
        optionC: "guess",
        optionD: "opinion",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Words that cut across all fields are called______________     ",
        optionA: "common-core words",
        optionB: "words for specific purposes",
        optionC: "register of the field",
        optionD: "lexical and grammatical units",
        answer: "optionA",
      },
      {
        type: "FBQ",
        question:
          "You need a good knowledge of\n_______ to understand information from your course materials.",
        answer1: "English words",
        answer2: "diction",
      },
      {
        type: "FBQ",
        question:
          "You cannot listen, speak, read or write English effectively without",
        answer1: "words",
        answer2: "diction",
      },
      {
        type: "FBQ",
        question:
          "To increase your word power in English you must cultivate the habit of reading",
        answer1: "extensively",
      },
      {
        type: "FBQ",
        question:
          "When reading, always look for expressions that call attention to an important point in the passage. They make\nless difficult.",
        answer1: "comprehension",
        answer2: "understanding",
      },
      {
        type: "FBQ",
        question:
          "_______ means screening a given passage very rapidly to locate important information within a large chunk of reading materials.",
        answer1: "scanning",
      },
      {
        type: "FBQ",
        question:
          "_______ is the fastest reading speed, and is used when you do not need high level of comprehension.",
        answer1: "skimming",
      },
      {
        type: "FBQ",
        question:
          "_______ reading speed is the ideal speed for reading materials that are important and require intensive reading and comprehension.",
        answer1: "Average",
      },
      {
        type: "FBQ",
        question: "The slowest speed in reading is called\n_______ speed.",
        answer1: "study",
      },
      {
        type: "FBQ",
        question: "_______ in reading is paramount to effective reading.",
        answer1: "flexibility",
      },
      {
        type: "FBQ",
        question:
          "If your purpose is to study a course material thoroughly, then your reading speed will be\n_______ .",
        answer1: "slow",
      },
      {
        type: "FBQ",
        question: "Your ____ will vary according to the purpose of reading.",
        answer1: "reading speed",
      },
      {
        type: "FBQ",
        question:
          "is when you read a text and go back to read the same text again.",
        answer1: "Regression",
      },
      {
        type: "FBQ",
        question:
          "Not being able to read is to be\nof the happenings, events, situations and development around you.",
        answer1: "ignorant",
      },
      {
        type: "FBQ",
        question:
          "Some speeches are to be comprehended\nbecause the points are not too important.",
        answer1: "superficially",
      },
      {
        type: "FBQ",
        question:
          "You can\na seemingly long and difficult word by breaking it into discussible parts such as prefixes, root, and suffixes.",
        answer1: "attack",
      },
      {
        type: "FBQ",
        question:
          "In listening, your ability to relate or connect what was said before with what the speaker is saying now is called",
        answer1: "relationship",
      },
      {
        type: "FBQ",
        question:
          "For active listening ability, you need functioning ears, ability to anticipate and think along with the speaker, noting important signposts and",
        answer1: "concentration",
      },
      {
        type: "FBQ",
        question:
          "Using your dictionary to look for meanings of words while you are reading, actually\nyour reading speed.",
        answer1: "slows down",
      },
      {
        type: "FBQ",
        question:
          "Sometimes, your world\nof the idea that is discussed in a passage can suggest the meaning of new words in the passage.",
        answer1: "experience",
      },
      {
        type: "FBQ",
        question:
          "For a poor reader to achieve a comprehension rate of 80 to 90%, the study speed will be\n_______ words per minute",
        answer1: "60 to 125",
        answer2: "60-125",
      },
      {
        type: "FBQ",
        question:
          "Unlike note taking from lectures,\nfrom books can be revisited.",
        answer1: "note making",
      },
      {
        type: "FBQ",
        question:
          "When trying to make notes from your books, pay attention to the heading and sub heading because they can be very important in determining the",
        answer1: "major points",
      },
      {
        type: "FBQ",
        question:
          "When preparing for examinations, you must read with average or",
        answer1: "low",
        answer2: "slow",
      },
      {
        type: "FBQ",
        question:
          "When reading a newspaper to locate the score of a football match, your reading speed should be",
        answer1: "high",
        answer2: "fast",
      },
      {
        type: "FBQ",
        question:
          "Reading 200 to 300 words per minutes is ideal in a\ntype of reading.",
        answer1: "slow study",
      },
      {
        type: "FBQ",
        question:
          "_______ is usually at different levels during the art of listening.",
        answer1: "comprehension",
      },
      {
        type: "FBQ",
        question: "Your comprehension rate should be about 80 or 90% in a",
        answer1: "reading speed",
      },
      {
        type: "FBQ",
        question:
          "In effective reading, you must always decide not only what to read but also the\nof reading",
        answer1: "purpose",
      },
      {
        type: "FBQ",
        question:
          "Directions are vital information that place you in proper perspective regarding location, situation, time and",
        answer1: "place",
      },
      {
        type: "FBQ",
        question: "is at different levels during the art of listening",
        answer1: "comprehension",
      },
      {
        type: "FBQ",
        question: "The abbreviation ‘abr’ in note taking means",
        answer1: "abbreviation",
      },
      {
        type: "FBQ",
        question: "The abbreviation ‘viz’ in note-taking means",
        answer1: "namely",
      },
      {
        type: "FBQ",
        question:
          "The Listening enabling skill that lets you connect what was said before with what the speaker is saying now is",
        answer1: "relationship",
        answer2: "ability to relate",
      },
      {
        type: "FBQ",
        question:
          "All narratives are usually expected to follow a\nstarting with the background to the story.",
        answer1: "story line",
      },
      {
        type: "FBQ",
        question: "A deaf person can still listen via",
        answer1: "sign language",
      },
      {
        type: "FBQ",
        question:
          "When listening to a tutorial or lecture, you need the\nto be able to determine the major point to be put down as notes.",
        answer1: "main idea",
      },
      {
        type: "FBQ",
        question:
          "The reading speed that is ideal for reading materials that are important and require intensive reading and comprehension is called\nreading speed.",
        answer1: "average",
      },
      {
        type: "FBQ",
        question:
          "A listening comprehension type which is not restricted to instruction, direction or facts is one that focuses on getting the\nof what the speaker says.",
        answer1: "general impression",
      },
      {
        type: "FBQ",
        question:
          "The most difficult task in listening comprehension is to be able to distinguish facts from fables or facts from",
        answer1: "opinions",
      },
      {
        type: "FBQ",
        question:
          "When you hear sentences beginning with verbs such as ‘do’, ‘do not ‘, ‘leave’, 'petition’, know that a useful information in form of\nis about to be given.",
        answer1: "instructions",
      },
      {
        type: "FBQ",
        question:
          "Reading materials are not to be read the same way, the same time, in all",
        answer1: "purposes",
      },
      {
        type: "FBQ",
        question:
          "A collection of information in a computer or a research document is called\n_______ .",
        answer1: "Data",
      },
      {
        type: "FBQ",
        question: "Listening is useless if there is no",
        answer1: "comprehension",
      },
      {
        type: "FBQ",
        question:
          "is the fastest reading speed and is used to get a general overview or gist of the reading materials.",
        answer1: "skimming",
      },
      {
        type: "FBQ",
        question: "A narrative follows a\norder.",
        answer1: "sequential",
      },
      {
        type: "FBQ",
        question:
          "_______ is used to screen a passage very rapidly to locate important information within a large chunk of reading materials.",
        answer1: "scanning",
      },
      {
        type: "FBQ",
        question:
          "It is possible to skim and scan at the same time depending on the\nand the information you are searching for.",
        answer1: "purpose",
      },
      {
        type: "FBQ",
        question:
          "When you listen attentively, it is possible to convert what you hear into\nor figure form.",
        answer1: "pictorial",
      },
      {
        type: "FBQ",
        question:
          "As a student, you need the skill of\naccurately to comprehend what is conveyed to you as information",
        answer1: "listening",
      },
      {
        type: "FBQ",
        question:
          "strategy is often used by the writter to given the reader sufficient words that will lead to sufficient understanding of the meaning of the newly introduced term.",
        answer1: "lexical familiarization",
      },
      {
        type: "FBQ",
        question: "The Language of instruction we listen to for this course is",
        answer1: "English",
        answer2: "English medium",
      },
      {
        type: "FBQ",
        question:
          "in listening involves looking at the merits and demerits of what is heard",
        answer1: "Critical Analysis",
      },
      {
        type: "FBQ",
        question:
          "In terms of the reading comprehension tasks you may perform in all academic contexts, reading for\nwill probably be the most difficult.",
        answer1: "interpretation",
        answer2: "evaluation",
      },
      {
        type: "FBQ",
        question:
          "Figures, formulae, and tables found in a reading comprehension passage are called\nor concrete reading material.",
        answer1: "non-verbal",
      },
      {
        type: "FBQ",
        question:
          "________ texts do not tell stories. They discuss issues, concepts and plans and give reasons to support any viewpoint.",
        answer1: "Expository",
      },
      {
        type: "FBQ",
        question:
          "The is often referred to as the most intense or exciting part of a story.",
        answer1: "climax",
      },
      {
        type: "FBQ",
        question:
          "The reading level where you are expected to have high concentration is the\nspeed level .",
        answer1: "study",
      },
      {
        type: "FBQ",
        question:
          "Choose True or False; Scientific writings are not expected to be precise but should have ambiguities.",
        answer1: "False",
      },
      {
        type: "FBQ",
        question:
          "Choose True or False; Scientific writing is a mixture of verbal and non- verbal forms of writing.",
        answer1: "True",
      },
      {
        type: "FBQ",
        question:
          "Choose True or False; Facts are valid statements, while opinions are beliefs.",
        answer1: "True",
      },
    ],
  },
  {
    id: 2,
    faculty: "General Studies",
    courseCode: "NOU105",
    courseTitle: "History and Philosophy of Science",
    creditUnit: 2,
    level: "100",
    semester: "1",
    questions: [
      {
        type: "MCQ",
        question: "The simple meaning of  Australopithecus is ",
        optionA: "Western ape",
        optionB: "Nothern ape",
        optionC: "Eastern ape",
        optionD: "Southern Ape",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "Which stage of evolution did  the HOMO looked very much  like modern man? ",
        optionA: "Homo Sapien",
        optionB: "Homo Habilis",
        optionC: "Homo Erectus",
        optionD: "Homo Hominid",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "At what stage of evolution did  man began to control fire and  fashion advanced tools  ",
        optionA: "Homo Erectus",
        optionB: "Homo Sapien",
        optionC: "Homo Habilis",
        optionD: "Homo Hominid",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "According to the theory of evolution, man might have evolved from the following except ",
        optionA: "Gorillas",
        optionB: "God",
        optionC: "Chimpanzee",
        optionD: "Apes",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "According to the evolutionist, man originated from ",
        optionA: "Australia",
        optionB: "Africa",
        optionC: "Asia",
        optionD: "Europe",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "Which of the following is a characteristics of evolution. ",
        optionA: "It has a theological component  ",
        optionB: "It was designed by God",
        optionC: "It is restricted to higher animal only",
        optionD: "It involves struggle for survival",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "The principle of Gravitational attraction which answers the questions of earlier scientists was formulated by ____",
        optionA: "Nekton and Kepler",
        optionB: "Kepler and Copernicus",
        optionC: "Lambert Sharul ",
        optionD: "Issac Newton",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "The honour of inventing a scientific instrument called the telescope goes to ______________ ",
        optionA: "Galileo",
        optionB: "Copernicus",
        optionC: "Alexandria",
        optionD: "Beacon",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "According to history, the first great change in scientific outlook after the renaissance was made by a Polish mathematician and astronomers called ",
        optionA: "Neil Armstrong",
        optionB: "Nicolaus Copernicus",
        optionC: "Alexandra Roger",
        optionD: "Thomas Aquinas",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "The Nigerian scientist whose name appear in the history book of internet was ______________  ",
        optionA: "Oviemo Ovadje",
        optionB: "Henrietta Ukwu",
        optionC: "Philip",
        optionD: "Bartholomew",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "The geologist who propounded the idea of gradualism in evolution is called ______________    ",
        optionA: "Gregor Mendel",
        optionB: "James Hutton",
        optionC: "John William",
        optionD: "George –Louis",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "________ is the remains or body impressions of dead organism that lived is the past ",
        optionA: "fussion",
        optionB: "fission",
        optionC: "fossils",
        optionD: "fibrous",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "The belief that each kind of animal and plant had remained unchanged since creation is called ____________________________   ",
        optionA: "doctrine of spontaneous generation",
        optionB: "doctrine of super creation",
        optionC: "doctrine of fixed creationism",
        optionD: "doctrine of non creationism",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "The progressive change of living things through ages and time is called ____ ",
        optionA: "evolution",
        optionB: "revolution",
        optionC: "doctrine",
        optionD: "development",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "The basic type of food needed by man include all the following except ____",
        optionA: "protein",
        optionB: "carbonhydrate",
        optionC: "vitamin",
        optionD: "fat and oil",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "One of the following is given off during photosynthesis. It is",
        optionA: "carbonmonoxide",
        optionB: "carbon (iv)oxide",
        optionC: "oxygen-oxide",
        optionD: "oxygen",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "Among the ancient settlement, Tigris and Euphrates valley is found in  ____ ",
        optionA: "mesopotamia",
        optionB: "babylonia",
        optionC: "andalusia",
        optionD: "mauritania",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Agricultural production depend on all the following except _____",
        optionA: "climate",
        optionB: "weather",
        optionC: "soil",
        optionD: "solar energy",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question: "______ is not part of primitive agriculture",
        optionA: "seasoning",
        optionB: "hunting",
        optionC: "rearing animal",
        optionD: "planting",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "True experiment science, free from philosophy and religion emerged in the _________",
        optionA: "20th and 21st century",
        optionB: "200 BC",
        optionC: "16th and 17th century",
        optionD: "11th to 12th century",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "An Italian monk who taught alongside Albert the great at University of Paris in the 12th century was __________",
        optionA: "Vincent Etnebor",
        optionB: "Gregor Mendel",
        optionC: "Albert Bandura",
        optionD: "Thomas Aquinas",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "Historically rebirth or revival of learning was started in Italy by three scholars called _______, ______and _______",
        optionA: "Mendel, Albert, Schrodinger",
        optionB: "Hook, Brown, Douglas",
        optionC: "Newton, Robert and Beacon",
        optionD: "Dante, Petrarch and Boccaccio",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "The spirit of questioning old beliefs and forming new opinions was described as _________",
        optionA: "renaissance",
        optionB: "dark ageing",
        optionC: "civilization",
        optionD: "transformation",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "What is the difference between the renaissance men and the men of dark of ages in term of attitude. It is __________",
        optionA: "men of dark ages were satisfied and did not ask question",
        optionB: "renaissance men were not asking question",
        optionC: "dark ages men were dark while renaissance men were red",
        optionD: "all of the above",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question: "The food that man eat are derived from __________ ",
        optionA: "flesh and vegetable",
        optionB: "plant and animal",
        optionC: "solar energy and mineral nutrient",
        optionD: "carbohydrates and protein",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "The sun supplies solar energy while the plants provide",
        optionA: "air",
        optionB: "carbondioxide",
        optionC: "oxygen",
        optionD: "water vapou",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "Man's existence is sustained through biological reproduction and _______",
        optionA: "utilization of natural resources from his enviroment",
        optionB: "conflict resolution with his neighbouring countries",
        optionC: "establishment of import and export trade",
        optionD: "peace keeping mission for african union",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "The founder of the Geometric Machine Corporation and a consultant to North Atlantic Treaty Organization is ______________ ",
        optionA: "Mobison Oliver Udemmadu",
        optionB: "Njoku Obi",
        optionC: "Bartholomew Nnaji",
        optionD: "Chike Obi",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question: "Yangte is a river found in ______",
        optionA: "Japan",
        optionB: "Korea",
        optionC: "Taiwan",
        optionD: "China",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "Which of these is most useful to the plant during photosynthesis?",
        optionA: "carbonmonoxide",
        optionB: "carbondioxide",
        optionC: "oxygen",
        optionD: "soil nutrient",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "The interdependence between man and plant in their air consumption is called  ________",
        optionA: "parasitism",
        optionB: "commensalism",
        optionC: "symbiosis",
        optionD: "cooperative existence",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "_______ is a simpler form of sugar which is derived from carbondioxide, water and sunlight",
        optionA: "lactose",
        optionB: "glucose",
        optionC: "sucrose",
        optionD: "milktose",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "Yankari Game Reserve is located in ________ state",
        optionA: "Plateau",
        optionB: "Nasarawa",
        optionC: "Gombe",
        optionD: "Bauchi",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "Which of these sphere is not part of the layers in the atmosphere _______",
        optionA: "xtratosphere",
        optionB: "ionosphere",
        optionC: "stratoshpere",
        optionD: "troposhere",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "In which of these vegetation is farming difficult. __________",
        optionA: "conferous",
        optionB: "decidous",
        optionC: "Tropical rain forest",
        optionD: "tundra",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "Temperate rain forest can be found can be found in _________",
        optionA: "USA and China",
        optionB: "Middle East",
        optionC: "Australia",
        optionD: "Cannada and Russia",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "The theory that state that the earth is the center of the universe and all other heavenly bodies move round it. This theory is called ____________________________ ",
        optionA: "Geocentric",
        optionB: "Heliocentric",
        optionC: "Intrinsic",
        optionD: "Extrinsic",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "A scientist who used his primitive microscopic in 1665 to observe that plant materials have cellular structure was",
        optionA: "John Dalton",
        optionB: "Theodor Schwan",
        optionC: "Matthias Schleiden",
        optionD: "Robert Hooke",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "The combination of two hydrogen atom and one atom of oxygen will produce",
        optionA: "ice",
        optionB: "water",
        optionC: "gas",
        optionD: "liquid",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Who among the following scientists will receive the honour of revolution in chemistry. It goes to ________",
        optionA: "Antoine Laurent Lavoisier",
        optionB: "Isaac Newton",
        optionC: "Michael Angelo",
        optionD: "Dalton John",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question: "Which of these may not constitute environmental pollution?",
        optionA: "noise",
        optionB: "heat",
        optionC: "garbage",
        optionD: "crude oil",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "________ is a substance whose presence in the air is harmful?",
        optionA: "pollution",
        optionB: "pollutant",
        optionC: "deposits",
        optionD: "deposition",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "Which of these gases is an air pollutant?",
        optionA: "carbondioxide",
        optionB: "carbom monoxide",
        optionC: "carbon (iv) oxide",
        optionD: "carbon trioxide",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "_______ refers to the release of substances or energy into the environment in quantities which are harmful to man and other living things",
        optionA: "sanitation",
        optionB: "pollution",
        optionC: "green house effect",
        optionD: "oxidation",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Envoronmental assault such as constant flaring of gas may happen to one of these communities",
        optionA: "Burutai",
        optionB: "Akoko",
        optionC: "Ogoni",
        optionD: "Ogori",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question: "In which year was the cellular phone introduced?",
        optionA: 1989,
        optionB: 1979,
        optionC: 1969,
        optionD: 1959,
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Which of these diseases is not associated with the radioactive particles from atomic bomb",
        optionA: "anaemia",
        optionB: "leukemia",
        optionC: "cancer",
        optionD: "diabetes",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "All the following are facts about atomic bombs except ____________  ",
        optionA: "the radioactive particles released are harmful",
        optionB:
          "the chemical element such as carbon, hydrogen and strontium can contaminate the soil, water and air",
        optionC: "part of the radioactive element can be used to cure cancer",
        optionD:
          "the fallout can damage the central nervous system and cell of the intestine lining and bone marrow",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question: "All these constitute water pollution except ______",
        optionA: "oil spillage from refineries",
        optionB: "leakages from petrol tankers",
        optionC: "industrial waste",
        optionD: "oxygen transformation",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "The bombing of Japanese cities during the second world war in 1945 was carried out by the ",
        optionA: "Russian",
        optionB: "German",
        optionC: "Americans",
        optionD: "British",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question: "Hiroshima was a popular town in  ____________",
        optionA: "Germany",
        optionB: "China",
        optionC: "Russia",
        optionD: "Japan",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "Which of these towns were destroyed by atomic bombs during the 2nd world war",
        optionA: "Tripoli",
        optionB: "Benghazli",
        optionC: "Nagasaki",
        optionD: "Moscow",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question: "Which of the following is not an effect of climate change",
        optionA: "increase rise in sea level",
        optionB: "regional famine",
        optionC: "distruption in photosynthesis",
        optionD: "desertification",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "________ refers to absorbing and returning of heat to the earth's surface due to green house gases",
        optionA: "green house effect",
        optionB: "global warming",
        optionC: "heat transfer",
        optionD: "pollution sage",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "Which of these is not a green house gas?",
        optionA: "methane",
        optionB: "chlorofluorocarbon",
        optionC: "carbondioxide",
        optionD: "neon",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "The threat to climate arises from the retention of a level of ______ in the atmosphere",
        optionA: "carbondioxide",
        optionB: "chlorine",
        optionC: "sulphur",
        optionD: "fluorine",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "________ is a collection of various computer networks linked together and communicating by a common protocol",
        optionA: "computer networking",
        optionB: "intergrated network",
        optionC: "internet",
        optionD: "intranet",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question: "The term ENIAC simply means",
        optionA: "Energy Network International and Allied company",
        optionB: "Electrical Network Intergration and connection",
        optionC: "Electronic Numeral Intergrator and Computer",
        optionD: "Electrical non- integrated Alliance Circuit",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "The first electronic digital computer was assembled in the year ",
        optionA: 1956,
        optionB: 1946,
        optionC: 1936,
        optionD: 1926,
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          'The first communication satelite called "Echos" was launched by the _______ ',
        optionA: "Russia",
        optionB: "Germany",
        optionC: "China",
        optionD: "United state",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "The first step of the Arabs when they came in contact with ancient science was ",
        optionA: "destroyed the ancient science",
        optionB:
          "established a relationship betweeen the greeks science and the egyptian science",
        optionC:
          "searched for the writing of the greeks and translated them into their language",
        optionD: "invent technology from the science",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question: "In which region of the world did Islamic knowledge flourish",
        optionA: "west",
        optionB: "east",
        optionC: "south",
        optionD: "north",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "One significant invention during the dark ages that was not noticed is ______________ ",
        optionA: "the convention of rigid horse collar and iron horse shoes",
        optionB: "invention of dam for agricultural irrigation",
        optionC: "invention of the lunar calendar",
        optionD: "caeseran operation for the removal of cataract",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          'The proposition that "everything that moves is moved by something else" can be credited to ',
        optionA: "Thomas Acquinas",
        optionB: "Plato",
        optionC: "Aristotle",
        optionD: "Socrates",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "From the point of view of early christians, knowledge on nature was valued only as a means of",
        optionA: "sacrifice",
        optionB: "edification",
        optionC: "offering",
        optionD: "baptism",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Why did the father of the church show little interest in knowledge of nature",
        optionA: "there was no supprtive civilization",
        optionB: "knoeledge of nature was not easy to come by",
        optionC:
          "knowledge of nature would not help them in their hope of life to come",
        optionD: "knowledge of nature would make them disbelievers",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "Why was the study of biology lagged far behind chemistry and physics",
        optionA: "scientists were not allowed to handle living things",
        optionB:
          "people at that time believed that organisms were too complex to study",
        optionC:
          "the scientists then lack the know-how to handle living organisms",
        optionD: "There was no specimen to carry out the study.",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "The following facts supported the proposotion that 19th century was considered as the classic scientific age except",
        optionA: "there was a very rapid growth of knowledge",
        optionB: "it was established that science should also be studied",
        optionC:
          "scientific research and industrial development went hand in hand",
        optionD:
          "the usage of scientific method in the field of science was introduced",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "In what century was the role of air and gas in chemical reaction (combustion) discovered",
        optionA: "18th-19th century",
        optionB: "15th-16th century",
        optionC: "10th -11th century",
        optionD: "20th-21st century",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "The first scientist-philosopher who attempted to arrange the steps of scientific method in a logical manner was __________ ",
        optionA: "Roger beacon",
        optionB: "Francis beacon",
        optionC: "Laurent laviosier",
        optionD: "Johannes kepler",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Who among the following is not a proponent of the heliocentric theory of the universe?",
        optionA: "Isaac newton",
        optionB: "Johannes kepler",
        optionC: "Nicolas copernicus",
        optionD: "Leonardo da vinci",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "Which of the following is not a planetary law according to the proponents of heliocentric theory",
        optionA: "all planets travel about the sun in an elliptical path",
        optionB: "a planet moves faster in its orbit as it nears the sun",
        optionC:
          "a relationship exist between its distance from the sun and the time it takes to make an orbit",
        optionD:
          "the rotation and revolution is inversely proportional to their astronomical distance",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "Who among the early scientists searched the heaven with his mind and not the telescope?",
        optionA: "Alexander the great",
        optionB: "Nicolas copernicus",
        optionC: "Johannas kepler",
        optionD: "Isaac newton",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "The most gratest eminent Muslim Physicist was _________",
        optionA: "Al-Jabr",
        optionB: "Ibn-al-Huthaim",
        optionC: "Aladin",
        optionD: "Bin Salim",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Why did the church authorities oppose the heleocentric theory of the universe",
        optionA:
          "the theory implied that humanity is no longer at the centre of the creation",
        optionB:
          "the theory did not account for the attraction between the sun and the planets",
        optionC:
          "it failed to establish a relationship between the sun and the earth",
        optionD: "the theory is anti-christ",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question: "The copernican theory of the universe was _________",
        optionA: "based on experimentation",
        optionB: "based on teleological theory of the universe",
        optionC: "not based on experimentation",
        optionD: "supported by church authorities",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "The view of the universe which posited that the sun is at the centre of universe while the planets revolve round is called",
        optionA: "Ptolemaic system",
        optionB: "geocentric theory",
        optionC: "heliocentric theory",
        optionD: "classical theory of the universe",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "The view of the author of Al- Majest about the earth and other planets is called  ___________",
        optionA: "geocentric theory",
        optionB: "heliocentric theory",
        optionC: "newtonian theory",
        optionD: "copernican theory",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question: "Australopithecus  _______ was found in 1924 in South Africa",
        optionA: "Aferensis",
        optionB: "Robustus",
        optionC: "Africanus",
        optionD: "Boisei",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "Which century marked the true freedom of true experimental science from philosophy and religion",
        optionA: "6th-7th century",
        optionB: "16th-17th century",
        optionC: "19th-20th century",
        optionD: "10-12th century",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Paradigm conservation in philosophy refers to ______________      ",
        optionA: "conflicting explanation",
        optionB: "impractical proposal",
        optionC: "criteria for significance",
        optionD: "shift in hypothesis",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "Semantic in philosophy is about",
        optionA: "ideology",
        optionB: "principles",
        optionC: "language",
        optionD: "method",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "The philosopher that introduced the principle of falsifiability is called _________ ",
        optionA: "Charles Darwin",
        optionB: "Karl Popper",
        optionC: "Roger Beacon",
        optionD: "Quincy Wright",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "Falsifiability simply means",
        optionA:
          "the principle which take care of statement which cannot be verified",
        optionB: "the principle which falsify unscientific position in science",
        optionC:
          "the principle which shows the relationship between science and philosophy",
        optionD:
          "the principle which emphasize experimental verification in science",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "Philosophy with the analysis of concepts and the meaning of words is called  ____________",
        optionA: "semeiotic",
        optionB: "abiotic",
        optionC: "gymnastic",
        optionD: "biotic",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "The branch of philosophy which deals with validity and soundness of an argument is called ",
        optionA: "ethics",
        optionB: "epistemology",
        optionC: "logic",
        optionD: "metaphysics",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "All men are mortal, John is a man, therefore John is a mortal. The conclusion John is Mortal is a  ________ knowledge",
        optionA: "deductive",
        optionB: "seductive",
        optionC: "inductive",
        optionD: "productive",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          'Consider the argument " All men are mortal. Peter is a man. Therefore Peter is Mortal.\nWhich of these statement is a premise?',
        optionA: "peter is mortal",
        optionB: "all men are mortal",
        optionC: "therefore Peter is a man",
        optionD: "therefore peter is mortal",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          " _______ is a branch of philosophy that deals with human and thought",
        optionA: "aesthetics",
        optionB: "logic",
        optionC: "metaphysics",
        optionD: "ethics",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Objectivity in science can be sustained if one does all the following but",
        optionA: "concentrate on the pursuit of truth",
        optionB: "disregard all unpleasant or threats situation",
        optionC: "develop sense of discipline",
        optionD: "be open to your feeling",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "The objectivity in critical thinking can be affected due to all the following except _________",
        optionA: "different ways of seeing the world",
        optionB: "personal point of view",
        optionC: "viewing issues without bias",
        optionD: "exposure to inspiration",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "All the following are forms in which theory can be stated except",
        optionA: "diagram",
        optionB: "equations",
        optionC: "statistical formation",
        optionD: "tentative assertion",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "Which of the following is regarded as the final step in scientific method",
        optionA: "conclusion",
        optionB: "theory formulation",
        optionC: "experimentation",
        optionD: "induction process",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Scientific conclusion has the following characteristics except",
        optionA: "it can be redefined",
        optionB: "it can be modified",
        optionC: "it can be disearded",
        optionD: "it is absolute",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "Philosophy of science is hinged on the ___________ nature of philosophy",
        optionA: "reflective",
        optionB: "rigid",
        optionC: "compromising",
        optionD: "theoretical",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "Which of these statements is false in respect of philosophy and science",
        optionA: "they both lay emphasis on method",
        optionB:
          "deductive method is for philosophy while inductive and deductive method is for science",
        optionC:
          "inductive method is applied in philosophy while deductive method only is for science",
        optionD: "logic is central to both science and philosophy",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "Which of the following may not be considered as the point of convergence between philosophy and science",
        optionA: "they are critical, skeptical and non-dogmatic in attitude",
        optionB: "they exhibit high level of curiosity",
        optionC: "they emphasize irrationality and spirituality",
        optionD: "they are highly objective and universal",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "Which of these questions may not get response in philosophy of science",
        optionA: "what is science?",
        optionB: "what is the nature of scientific knowledge?",
        optionC: "how do we arrive at scientific truth?",
        optionD: "what is the essence of humanity?",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question: "Which of these statements is not true about philosophy",
        optionA: "the term is derived from philos and sophia",
        optionB: "it embraced so many discipline in the past",
        optionC: "science seperated from philosophy",
        optionD: "philosophy as a subject originate from science",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "According to the greeks, a philosopher is simply ______________   ",
        optionA: "lover of knowledge",
        optionB: "lover of wisdom",
        optionC: "lover of reasoning",
        optionD: "lover of understanding",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "All the features below\ndescribes religion except  ________",
        optionA: "it is based on dogma",
        optionB: "it is speculation",
        optionC: "it deals with the worship of supernatural",
        optionD: "it could be authenticated using scientific method",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "All the following are non- science disciplines except _______",
        optionA: "religion",
        optionB: "meta-physics",
        optionC: "mysticism",
        optionD: "anthropology",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question: "Which of the following is not true about science",
        optionA: "it equips man with theoretical knowledge",
        optionB: "it emphasize practical translation of theoretical knowledge",
        optionC: "it contribute to the development of theology",
        optionD: "it is the bedrock of philosophy",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "Which of these does not explain why is man involved in scientific activity",
        optionA: "to understand himself",
        optionB: "to understand the nature that surrounds him",
        optionC:
          "to explain the phenomenon of birth, death, solid earth and restless seas",
        optionD: "to enhance spiritual fulfilment",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "All these disciplines reflect curriculum integration except _________",
        optionA: "physical chemistry",
        optionB: "bio chemistry",
        optionC: "bio physics",
        optionD: "anthropology",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "All the folllowing are example of social science except _________",
        optionA: "psychology",
        optionB: "physiology",
        optionC: "anthropology",
        optionD: "philosophy",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "The disciplines that are concerned with drugs and drug contents of plant can be grouped under ",
        optionA: "medical science",
        optionB: "physical science",
        optionC: "biological science",
        optionD: "pharmaceutical science",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "Anatomy, physiology, surgery can be categorized as ___________ ",
        optionA: "biological sciences",
        optionB: "medical science",
        optionC: "physical science",
        optionD: "pharmaceutical science",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "All these are examples of biological science except __________ ",
        optionA: "zoology",
        optionB: "microbiology",
        optionC: "botany",
        optionD: "chemistry",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "Physics, chemistry and astronomy can also be described as  ________",
        optionA: "biological sciences",
        optionB: "pharmaceutical science",
        optionC: "physical science",
        optionD: "chemical science",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question: "Which of these can be described as non-perception object:",
        optionA: "violin",
        optionB: "virtues",
        optionC: "Vicaroll",
        optionD: "vicks",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Which of the following does not belong to genus Australopithecus?",
        optionA: "Aferensis",
        optionB: "Africanus",
        optionC: "Robustus",
        optionD: "Asianus",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "Sense perception objects are mostly associated with __________",
        optionA: "inductive science",
        optionB: "deductive science",
        optionC: "logical science",
        optionD: "empirical science",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "Physics, chemistry, biology and medical sciences are best described as __________",
        optionA: "empirical science",
        optionB: "formal science",
        optionC: "experimental science",
        optionD: "informal science",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "Religion relies on the principle that the universe is generally governed by _______ laws",
        optionA: "scientific",
        optionB: "prophetic",
        optionC: "spiritual",
        optionD: "civil law",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "Logic, physics and statistics will be best described as ______ ",
        optionA: "empirical science",
        optionB: "formal science",
        optionC: "informal science",
        optionD: "inductive science",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Geometry, algebra, trigonometry and arithmethic are examples of _______",
        optionA: "inductive science",
        optionB: "deductive science",
        optionC: "formal science",
        optionD: "informal science",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "Which of the Australopithecus was discovered in Ethiopia in 1978?",
        optionA: "Aferensis",
        optionB: "Africanus",
        optionC: "Asianus",
        optionD: "Robustus",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "All of these terms are associated with formal science except  ______",
        optionA: "concept",
        optionB: "rules",
        optionC: "theories",
        optionD: "myth",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "Which of these group of science adopt scientific method to acquire knowledge",
        optionA: "empirical and formal science",
        optionB: "inductive and deductive science",
        optionC: "psychological and phisiological science",
        optionD: "philosophy and epistemology",
        answer: "optionA",
      },
    ],
  },
  {
    id: 3,
    faculty: "General Studies",
    courseCode: "NOU107",
    courseTitle: "The Good Study Guide",
    creditUnit: 2,
    level: "100",
    semester: "1",
    questions: [
      {
        type: "MCQ",
        question: "The features of an academic writing include _______",
        optionA: "Argument, Presence, Emotional, Scholarship",
        optionB: "Scholarship, Debate, Argument, Objectivity",
        optionC: "Organised, Analysis, Standard, Objectivity",
        optionD: "Precision, Attentive, Strong, References",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "One of the options is not a pitfall you should avoid while making a presentation.",
        optionA: "making too many points for available time.",
        optionB:
          "addressing your presentation to your tutor instead of the other students",
        optionC: "speaking to fast or quickly because of time constraints",
        optionD:
          "you look at your audience to check that points have been understood",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "At what point of the Experiential Learning Circle are you expected to pause and think about how your study has been going?",
        optionA: "Planning",
        optionB: "Doing",
        optionC: "Reflecting",
        optionD: "Conceptualizing",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "One of the options listed is NOT one of the six sets of key skills identified by government and employers.",
        optionA: "Communication",
        optionB: "Application of number",
        optionC: "Problem analysis",
        optionD: "Working with others",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "Which of these will prove more significant for a student in a class lecture?",
        optionA: "memorizing",
        optionB: "understanding",
        optionC: "focusing",
        optionD: "reviewing",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Which of the options is not an indicator that learning has occurred",
        optionA: "ability to grapple with new things",
        optionB: "ability to think your way through",
        optionC: "ability to create own summary of the topic",
        optionD: "ability to debate in own words",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "A simple but effective way to engage with your work is to ____",
        optionA: "make a sequence",
        optionB: "start the work",
        optionC: "imagine the work",
        optionD: "make a to do list",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "A key part of studying that enables an assessment of one's progress, depth of learning and power of expression is ______",
        optionA: "mapping",
        optionB: "reading",
        optionC: "highlighting",
        optionD: "writing",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question: "Tutorial sessions will involve all of these except _______",
        optionA: "dialogue",
        optionB: "discussion",
        optionC: "monologue",
        optionD: "interaction",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question: "The Good Study guide will __________",
        optionA: "ensure you make better use of your study time",
        optionB: "help you to build up your capacity for independent study",
        optionC: "offer you handy hints and tips for business",
        optionD: "help you get advice from people",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "To excavate the hidden depths in essay titles, one should _______",
        optionA: "highlight words",
        optionB: "look for phrases",
        optionC: "identify process words",
        optionD: "underline words",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "The type of learning associated with the word ‘study’ can be achieved through",
        optionA: "reading, listening, writing, criticizing",
        optionB: "reading, listening, discussing, analyzing",
        optionC: "commenting, listening, discussing, writing",
        optionD: "reading, listening, discussing, writing",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "The term ______, can be used to refer to sessions involving a tutor and a group of students",
        optionA: "conversation",
        optionB: "seminar",
        optionC: "discussion",
        optionD: "walkshop",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "The stress examination brings is powerful yet it helps to draw out ____",
        optionA: "peak performance from students",
        optionB: "great evaluation and assessment result",
        optionC: "partial performance element",
        optionD: "great reading and understanding skills",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "The purpose of examinations at the University level is to test _____",
        optionA: "your ideas in arguing a case",
        optionB: "your reactive memory power",
        optionC: "ability to develop your reading",
        optionD: "understanding and creativity of learning",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "The method of traping thoughts as they come to you help you achieve _________ in writing and speaking",
        optionA: "practicality",
        optionB: "convenience",
        optionC: "originality",
        optionD: "finesse",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "The Good Study Guide can be used by what category of students?",
        optionA: "beginners",
        optionB: "experienced students",
        optionC: "professors",
        optionD: "all students",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "The challenge of unfamiliar words can be tackled by the use of ________",
        optionA: "actual cards",
        optionB: "concept cards",
        optionC: "lexicon cards",
        optionD: "subject cards",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "The best way to invest time in one's self is by _____",
        optionA: "investing in study time",
        optionB: "investing money in self",
        optionC: "investing in bonds and stock",
        optionD: "investing in family",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "The art of reading that helps you get a rough idea of the content of a piece is called _______",
        optionA: "scamming",
        optionB: "scanning",
        optionC: "skating",
        optionD: "skimming",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "The ‘freewriting’ technique is used to develop oneone's ___________",
        optionA: "writing scheme",
        optionB: "writing skill",
        optionC: "writing voice",
        optionD: "writing style",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "Students who failed to get the point because they were not looking for it, adopted the ______ reading technique",
        optionA: "deep approach",
        optionB: "surface approach",
        optionC: "shallow approach",
        optionD: "scamm approach",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Students gain knowledge by reading, asking questions and _____",
        optionA: "designing notes",
        optionB: "devicing own solutions",
        optionC: "paragraphing speeches",
        optionD: "summarizing passages",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Statistics is a branch of science concerned with techniques for ____",
        optionA: "facts mutation",
        optionB: "presentation of ideas",
        optionC: "gathering facts",
        optionD: "presentation of summaries",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "Presentations are said to be excellent ways to ______ group learning experience",
        optionA: "democratise",
        optionB: "baptise",
        optionC: "formalize",
        optionD: "advice",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "Preparing for examinations requires ________ reading of your course materials",
        optionA: "surface",
        optionB: "skim",
        optionC: "partial",
        optionD: "deep",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question: "Precautions to take while working with a computer include",
        optionA: "empty trash and browse",
        optionB: "saving and labelling work",
        optionC: "browse and chat",
        optionD: "virus and scan",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "Planning for studies will encourage ____",
        optionA: "free movement",
        optionB: "strategic thinking",
        optionC: "growing up",
        optionD: "support effort",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Picking up knowledge, ideas and creativity are steps towards ____",
        optionA: "being a mature student",
        optionB: "being a skilful student",
        optionC: "being an independent student",
        optionD: "being a compound student",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Organizing knowledge into categories within other categories is called",
        optionA: "nesting",
        optionB: "pasting",
        optionC: "planning",
        optionD: "grouping",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question: "On-line conferencing makes learning ________",
        optionA: "irritable",
        optionB: "sociable",
        optionC: "formal",
        optionD: "personal",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "A key factor that improves speed in reading and understanding is _______",
        optionA: "skating through the book",
        optionB: "looking out for key words",
        optionC: "summarizing the text",
        optionD: "paraphrazing the text",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "One key factor that improves speed in reading and understanding is",
        optionA: "skating through the book",
        optionB: "looking out for key words",
        optionC: "summarizing the text",
        optionD: "paraphrazing the text",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "One basic assignment you can use a word-processor in doing is ____",
        optionA: "painting",
        optionB: "writing essay",
        optionC: "aeronautics",
        optionD: "photo-copy",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "Note making is valuable towards ______",
        optionA: "capturing & organising knowledge",
        optionB: "supporting & implementing knowledge",
        optionC: "creating & moulding knowledge",
        optionD: "planning & building knowledge",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "To become an independent learner you need to be a __________",
        optionA: "reflective learner",
        optionB: "Highlighted learner",
        optionC: "Illustrated learner",
        optionD: "Experiential learner",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "In answering the question, “what does it take to be a skilful student?”, one of the options WILL NOT apply.",
        optionA: "Taking control of your spiritual life",
        optionB: "Knowing how to keep your spirits up",
        optionC: "Accumulating practical know-how",
        optionD: "Mastering the core study tasks",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "Study skills improve through picking up practical know-how, swapping ideas with other students and by ____________",
        optionA: "magic tricks",
        optionB: "being creative",
        optionC: "applying quick fixes",
        optionD: "swapping brains",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Many students say that studying not only gives them greater knowledge and understanding of the subjects they study, but also more ________",
        optionA: "Confidence in God",
        optionB: "fiction",
        optionC: "coverage",
        optionD: "purpose in life",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question: "_____is very appropriate when listening to a lecture",
        optionA: "Note taking",
        optionB: "Note making",
        optionC: "Memorizing information",
        optionD: "Making and receiving phone calls",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "________ skills, help you to engage purposefully and creatively with the many challenges of learning",
        optionA: "web surfing",
        optionB: "hard listening",
        optionC: "drawn attention",
        optionD: "note making",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "The two types of dictionary available for use by an Open and Distance Learner are ______",
        optionA: "Published and documented dictionary",
        optionB: "Sample and unified dictionary",
        optionC: "Printed and online dictionary",
        optionD: "Online and vertical dictional",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          'The term ‘thinking onscreen" can be used interchangebly with _____',
        optionA: "Note taking",
        optionB: "Note making",
        optionC: "Skimm writing",
        optionD: "Abrupt writing",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "Mention one widely used approach to making lecture notes",
        optionA: "adorno",
        optionB: "pauk notes",
        optionC: "cornell system",
        optionD: "layard style",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "Learning involves our conscious effort to accumulate knowledge and skills as well as ______",
        optionA: "uncounscious sleep activity",
        optionB: "routine adaptation to our surroundings",
        optionC: "invariable study skills",
        optionD: "planned rhetorics",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Learning about history and things past is categorized as ______",
        optionA: "abstract learning",
        optionB: "practical learning",
        optionC: "electronic learning",
        optionD: "compulsory learning",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "You can help to develop your sense of audience by reading your work _________",
        optionA: "aloud",
        optionB: "often",
        optionC: "together",
        optionD: "indepth",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "In the past, education was associated with childhood but now, we are all expected to _________",
        optionA: "be lifelong learners",
        optionB: "leave studying behind",
        optionC: "assume we have finished with learning",
        optionD: "be adapting to change",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "When you face an immediate study challenge you are expected to __________",
        optionA: "take several months to work your way through",
        optionB: "skim through the book to find the advice you need.",
        optionC: "invest time in getting to know your study",
        optionD: "acquire greater force of achievement",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "Which of these would be most valuable during seminars?",
        optionA: "skimming",
        optionB: "browsing",
        optionC: "speaking",
        optionD: "reading",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "The benefits of reading ‘The Good Study Guide” includes all but ______",
        optionA: "It will help you make better use of your study time",
        optionB: "It offers more than handy hints and tips",
        optionC: "It will make you a beginner student",
        optionD:
          "It will help you to build up your capacity for independent study",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "A successful student must approach studying strategically and systematically.",
        optionA: "false",
        optionB: "true",
        optionC: "Undecided",
        optionD: "No idea",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "One of the options listed is an important attribute of successful students.",
        optionA: "They continue to develop and refine their skills.",
        optionB: "They already have their own way of studying",
        optionC: "They need a few hints and tips",
        optionD: "They get advice from people than from books",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question: "The Good Study Guide is helpful to what category of people.",
        optionA: "Those studying full time only",
        optionB: "Those studying part time only",
        optionC: "Students looking to boost their performance",
        optionD: "Distance learning students and lookers",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "The Good Study Guide is a book of practical exercises designed to help the student develop ________ and get the most from their studies.",
        optionA: "Big Achievement",
        optionB: "study skills",
        optionC: "Great Enjoyment",
        optionD: "Employment skills",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "To study efficiently, you might not require materials like _______",
        optionA: "Pen highlighters",
        optionB: "A box of index cards",
        optionC: "A good dictionary",
        optionD: "Filing cabinets",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "Some of the excellent ways a student can use a computer to help with studies are ______",
        optionA: "Word-processing, Grouping, Visualising",
        optionB: "Storing information, Talking online, eLearning",
        optionC: "Writing assignments, Interactive videos, nesting",
        optionD: "Learning experiences, filling, Talking online",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "One benefit of eTuition is _______",
        optionA: "Confusing written messages in conferences",
        optionB: "Instant access to friendly group support",
        optionC: "Expense of attending classroom based tutorials",
        optionD: "Tedious delivery of face-to-face instruction",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "The transformation of the ways in which ideas and information are recorded and communicated is attributed to _______.",
        optionA: "CIT redemption",
        optionB: "LNG reformation",
        optionC: "ICT revolution",
        optionD: "DPR resolution",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "What are the qualities of a successful self-manager that will make you a successful student?",
        optionA:
          "Be active, Manage your morale, Be strategic, Give yourself incentives",
        optionB: "Be drawn up, Be reflective, Develop plans, Be organized",
        optionC: "Be assertive, Be strategic, Be difficult, Maintain things",
        optionD: "Develop plans, Be organized, Recognise powers, Be demanding",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question: "What are the factors that would lift a student’s morale?",
        optionA: "Grade assignment, Disagreeable course, Achievement",
        optionB: "Mid term blues, Creating structure, Sharing",
        optionC: "Achievement, Creating structure, Knowledge",
        optionD: "Exam anxiety, Belonging, Course elements",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question: "Identify the factors that lower morale ______",
        optionA: "Time obsession, Completed tasks, Initial shock",
        optionB: "Exam anomaly, everyday crises, good results",
        optionC: "Tiresome course, dreary group, Achievement plan",
        optionD: "Initial shock, Personal pressures, Everyday crises",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question: "An independent learner needs to be a ____",
        optionA: "good student",
        optionB: "reflective learner",
        optionC: "conservative learner",
        optionD: "free student",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "All the options can be described as attributes of The Good Study Guide except ______",
        optionA: "supports better use of your study time",
        optionB: "offer hints and tips",
        optionC: "build your capacity for independent study",
        optionD: "provide answers to e-questions",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question: "Abbreviations, are used during lectures to help ________",
        optionA: "broaden your understanding",
        optionB: "make your notes neat",
        optionC: "shorten the notes you take",
        optionD: "expand your knowledge",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "A writer weaves a thread of meaning through a piece of writing by _______",
        optionA: "using link words and phrases",
        optionB: "operating signals",
        optionC: "skipping through sentences",
        optionD: "using other devices",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "To take control of your work, you need to begin with the ‘big picture’. The term ‘big picture’ in this context does not relate to ________",
        optionA: "The main components of your course",
        optionB: "The examination to be taken",
        optionC: "The note and assignment to copy",
        optionD: "The key books that the course works with",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "It is vital to take responsibility for your own learning at the University because __________",
        optionA: "You spend a lot of time doing assignments.",
        optionB: "You are responsible for your own day-to-day work schedule.",
        optionC: "The scope of courses tends to be narrow and tough.",
        optionD:
          "You are expected to seek out support when you do not need it.",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Some of the challenges students encounter while taking control of their studies includes all but _______",
        optionA: "Availability of rest time horizons",
        optionB: "Capacity for independent study",
        optionC: "An absence of work schedules",
        optionD: "Responsibility for seeking help",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "According to Marton et al (1997), _________ learning is seen as a much more appropriate strategy for most university level study.",
        optionA: "Deep",
        optionB: "Impulsive",
        optionC: "Numerical",
        optionD: "Spatial",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "Improving own learning and performance as one of the six key skills identified by the UK government and employers sees ______________as its central theme?",
        optionA: "Reflective learning",
        optionB: "Conceptualising",
        optionC: "performance",
        optionD: "improving learning",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "One of the questions you will ask in the Conceptualising process of David Kolb’s experiential learning cycle is __________",
        optionA: "What seems to interfere with your planning?",
        optionB: "When did you strategize and dedicate your work time?",
        optionC:
          "What changes in your approach to study might help you to learn better?",
        optionD: "Did you judge some of the tasks on standby or not?",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "Some of the questions you will ask in the Planning process of David Kolb’s experiential learning cycle include all the options except one: ______",
        optionA: "Which parts of the work present the toughest challenge?",
        optionB: "Which parts are most important to complete?",
        optionC: "What targets will you set for the lecturer?",
        optionD: "In what sequence will you tackle the various tasks?",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "The process of learning through reflection on experience according to David Kolb’s experiential learning cycle involves __________",
        optionA: "Planning, doing, reflecting, continuing",
        optionB: "Planning, reflecting, dating, conceptualizing",
        optionC: "Planning, dating, retaining, conceptualizing",
        optionD: "Planning, doing, reflecting, conceptualizing",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "Your To-Do list is a creative tool, not a straightjacket. This implies that _______",
        optionA: "It tells you to start but not to finish",
        optionB: "It is working out of sequence",
        optionC: "You cannot modify your plans.",
        optionD: "You remain in control even after drafting it.",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question: "In note making, flexibility involves __________",
        optionA: "detailed note with speed and caution",
        optionB: "ability to write non stop",
        optionC: "circumstances of continuity",
        optionD: "making sketched or detailed notes according to need",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "In a class lecture, which of these will prove more significant",
        optionA: "memorizing",
        optionB: "understanding",
        optionC: "focusing",
        optionD: "reviewing",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "If writing is a form of speaking, reading out your essay can help develop your _____",
        optionA: "sense of audience and writing voice",
        optionB: "comments and reaction of audience",
        optionC: "insight into the nature of writing",
        optionD: "ability to see the adequately",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "Studying like climbing mountains, is frustrating and tough but also _________",
        optionA: "very rewarding",
        optionB: "very interrogatory",
        optionC: "very connected",
        optionD: "very understanding",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "Some of the general problems which all students face are __________",
        optionA: "struggling to write, endangering tasks, keeping up morale",
        optionB: "managing time, controlling boredom, developing ideas",
        optionC: "struggling to understand, managing time, completing tasks",
        optionD:
          "approaching their inadequacies, developing distractions, managing time",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "The _________ study time is when you are tired, and there are distractions around.",
        optionA: "high-quality",
        optionB: "low-quality",
        optionC: "intermediate-quality",
        optionD: "evolving-quality",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "Identify two types/classifications of learners",
        optionA: "Serialist vs holist and controlled vs impulsive",
        optionB: "Steady vs cultured and serialist vs monograph",
        optionC: "verbal vs non-verbal and spoken vs non-spoken",
        optionD: "spatial vs foul and cultured vs impulsive",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question: "Group discussions enable you to ________ your ideas",
        optionA: "memorize",
        optionB: "force",
        optionC: "share",
        optionD: "dictate",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "The Good Study Guide is designed to be used in these various ways as listed in the options with the exception of one. Pick the odd option.",
        optionA: "If you want to design a comprehensive index and key points",
        optionB: "If you want to develop skills in a particular study area",
        optionC: "If you want to review a particular skill area",
        optionD: "If you need advice on a specific point",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "The tensions around exams create warped perceptions which are known as ______",
        optionA: "exam myths",
        optionB: "exam legends",
        optionC: "mythical exams",
        optionD: "exam phobia",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "An ___________ brings performance element into your studies.",
        optionA: "assignment",
        optionB: "accreditation",
        optionC: "exam",
        optionD: "experiment",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "Examinations are seen as a period of stock taking because _______",
        optionA: "it enables you bring all new knowledge under control",
        optionB: "it helps you leave behind what you have learned",
        optionC: "it helps you take stock of what you have",
        optionD: "stock taking is an essential part of learning",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "This diagram that depicts the process of learning through reflection on experience is known as ______",
        optionA: "The process learning circle",
        optionB: "The experiential learning cycle",
        optionC: "The independent learning circle",
        optionD: "The experimental learning cycle",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Looking at the Experiential Learning Circle, the stage where you are expected to think strategically about how to manage your work and the sequence to be used to tackle the various tasks and set targets, is the ________",
        optionA: "Planning",
        optionB: "Doing",
        optionC: "Reflecting",
        optionD: "Conceptualizing",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "When you work at your studies, following your plan as best you can, you are practicing ____ stage of the Reflective Learning cycle.",
        optionA: "Planning",
        optionB: "Doing",
        optionC: "Reflecting",
        optionD: "Conceptualizing",
        answer: "optionB",
      },
      {
        type: "FBQ",
        question:
          "When making notes you use grouping,  and mnemonic to recall what you learnt",
        answer1: "nesting",
      },
      {
        type: "FBQ",
        question:
          "The entire set of people in a particular group from which one can collect data is called ______ in statistics",
        answer1: "population",
      },
      {
        type: "FBQ",
        question:
          "The  learners tend to work in a sequential way through study tasks, starting at the beginning and proceeding step by step until they reach the end.",
        answer1: "serialists",
        answer2: "serialist",
      },
      {
        type: "FBQ",
        question:
          "What kind of learner are you if you study in a steady and systematic way? ",
        answer1: "Controlled",
      },
      {
        type: "FBQ",
        question:
          "When everyone is online at the same time in a live web-chat, it is said to be ",
        answer1: "synchronous",
      },
      {
        type: "FBQ",
        question: "Debates and  are features of an academic writing",
        answer1: "arguments",
      },
      {
        type: "FBQ",
        question: "To enjoy studying and achieve success you have to take  _.",
        answer1: "control",
      },
      {
        type: "FBQ",
        question:
          " situations require you to think on your feet and try to get things as right as you can the first time.",
        answer1: "examination",
      },
      {
        type: "FBQ",
        question:
          "The  quality study time represents when you are alert, able to concentrate and can work undisturbed for a decent chunk of time.",
        answer1: "high",
      },
      {
        type: "FBQ",
        question:
          "A To-Do list is a guide to action that turns a shapeless mound of work into a  of tasks you can tackle.",
        answer1: "sequence",
      },
      {
        type: "FBQ",
        question:
          "A key principle in keeping on top of your studies is to break big tasks into  __, bite-sized tasks.",
        answer1: "smaller",
        answer2: "small",
      },
      {
        type: "FBQ",
        question:
          "While you still remain in charge, the strategy for managing your work might include seeking advice and ",
        answer1: "support",
      },
      {
        type: "FBQ",
        question:
          "By putting your markings all over a course information is a way to take ",
        answer1: "ownership",
      },
      {
        type: "FBQ",
        question:
          " is a world of its own, with customs and values you encounter nowhere else, and extraordinary freedom to do, think and speak as you please.",
        answer1: "University",
      },
      {
        type: "FBQ",
        question:
          "Becoming a skilled student also involves developing an understanding of what learning is and how it happens, so that you can plan and monitor your own ",
        answer1: "learning",
      },
      {
        type: "FBQ",
        question: "eLearning materials is the shortened form of ",
        answer1: "Electronic learning materials",
      },
      {
        type: "FBQ",
        question: "Charts are used for presenting  data",
        answer1: "numerical",
      },
      {
        type: "FBQ",
        question:
          "The acronym which stands as a checklist to judge the reliability of web information is  _.",
        answer1: "PROMPT",
      },
      {
        type: "FBQ",
        question:
          "Becoming a skilled student involves taking a reflective approach to your studies, so that you learn from  and continually refine your skills.",
        answer1: "experience",
      },
      {
        type: "FBQ",
        question: "Learning can be practical or ",
        answer1: "abstract",
      },
      {
        type: "FBQ",
        question:
          "Study skills are not a set of  that you learn once and apply forever.",
        answer1: "tricks",
        answer2: "trick",
      },
      {
        type: "FBQ",
        question:
          "Learners who are inclined to put in bursts of intensive study, learning a lot quickly before shifting to something else, are  learners.",
        answer1: "impulsive",
      },
      {
        type: "FBQ",
        question:
          " learners tend to approach a task as a whole and hop about from one part of it to another, trying all the time to keep the overall picture in view.",
        answer1: "holists",
        answer2: "holist",
      },
      {
        type: "FBQ",
        question:
          "An academic ritual that helps you to draw peak performance out of yourself is the ",
        answer1: "exam",
        answer2: "examination",
      },
      {
        type: "FBQ",
        question:
          "Answer TRUE or FALSE; Exams are monstrous ordeals, survived only by superhuman effort. ",
        answer1: false,
      },
      {
        type: "FBQ",
        question:
          "Answer TRUE or FALSE; Strategic and systematic approach to studying are attributes of an unsuccessful student.",
        answer1: false,
      },
      {
        type: "FBQ",
        question:
          "Answer TRUE or FALSE; The stress associated with examinations, can help you to find the will-power and energy to pull your understanding of a course together. ",
        answer1: 1,
        answer2: true,
      },
      {
        type: "FBQ",
        question:
          "Answer TRUE or FALSE; Failing an exam is the end of the world. ",
        answer1: 0,
        answer2: false,
      },
      {
        type: "FBQ",
        question:
          "Answer TRUE or FALSE; Examinations often make extremely valuable contributions to one's learning. ",
        answer1: 1,
        answer2: true,
      },
      {
        type: "FBQ",
        question:
          "Answer TRUE or FALSE; The reality of examination is that although it brings stress, it is just another part of the education process which countless people routinely and successfully cope with. ",
        answer1: 1,
        answer2: true,
      },
    ],
  },
  {
    id: 4,
    faculty: "General Studies",
    courseCode: "NOU203",
    courseTitle: "Introduction to Logic and Philosophy",
    creditUnit: 2,
    level: "200",
    semester: "1",
    questions: [
      {
        type: "MCQ",
        question:
          'In the proposition "As soon as Mrs Ojewale arrives, she tidies the house", what is the premise? ',
        optionA: "as soon as",
        optionB: "Mrs Ojewale arrives",
        optionC: "She tidies the house",
        optionD: "soon as Mrs",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Complete this sentence; An argument can never have more than one ______________ ",
        optionA: "conclusion",
        optionB: "statement",
        optionC: "premise",
        optionD: "proposition",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "Any sentence expressing questions, commands, etc. does not qualify as logical statement. ",
        optionA: "True",
        optionB: "false",
        optionC: "not sure",
        optionD: "none",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "All of these are vocabularies uesd in logic except______________ ",
        optionA: "vicinity",
        optionB: "premise",
        optionC: "inference",
        optionD: "statement",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "The sentence: Africa is a great continent is a logical statement because______________  ",
        optionA: "It leads to cconclusion",
        optionB: "it does not contain premise indicator",
        optionC: "the sentence can be asserted and can be denied",
        optionD: "we can derive the inference from the sentence",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "The process of derivation of a conclusion of an argument from the premise is known as ",
        optionA: "assertion",
        optionB: "inference",
        optionC: "validation",
        optionD: "result",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Words or expressions that indicate a premise or conclusion within an argument is called In any valid argument, ",
        optionA: "demonstrator",
        optionB: "locus",
        optionC: "indicator",
        optionD: "command",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question: "In any valid argument, the conclusion follows from the  ",
        optionA: "premise",
        optionB: "inference",
        optionC: "sentence",
        optionD: "example",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question: "Which of these is not a premise indicator? ",
        optionA: "because",
        optionB: "thus",
        optionC: "since",
        optionD: "as",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "A statement, within an argument, which provides support for asserting the conclusion of that argument is reffered to as ______________",
        optionA: "Proposition",
        optionB: "premise",
        optionC: "sentence",
        optionD: "inference",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "Which of these is a statement?",
        optionA: "The sky is blue",
        optionB: '"stand at attention!"',
        optionC: "what is the price?",
        optionD: "All of these",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question: "A person who studies logic is called",
        optionA: "logicist",
        optionB: "logician",
        optionC: "logicalist",
        optionD: "logicitivist",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "Traditional syllogism or Aristotelian logic deals only with",
        optionA: "declarative proposition",
        optionB: "equivocal proposition",
        optionC: "situational proposition",
        optionD: "cartegorical proposition",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "All of these are importance of logic to an individual except",
        optionA: "it helps an individual to learn strategies for thinking well",
        optionB: "It helps to avoid common errors in reasoning",
        optionC: "It is an effective technique for evaluating argument",
        optionD: "All of these",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question: "In Greek, 'logos' means",
        optionA: "Living things",
        optionB: "correct",
        optionC: "study",
        optionD: "distinguish",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question: "Formal logic is divided into methodology, metalogic and",
        optionA: "Logic measurements",
        optionB: "Logic essential",
        optionC: "Logic propositions",
        optionD: "Logic proper",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question: "Logic is important to other discipline because",
        optionA: "Logic is a part of mathematics",
        optionB: "Logic is abstract and this makes it relevant",
        optionC:
          "other disciplines involve classification and ordering of things as well as reasoning and arguments",
        optionD: "Logic has no practical use",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "There is no way you can determine correct or incorrect reasoning without constructing",
        optionA: "Judgements",
        optionB: "discussions",
        optionC: "arguments",
        optionD: "hypotheses",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "The only discipline that teaches how to formulate different types of arguments is called ____________________________ ",
        optionA: "Epistemology",
        optionB: "logic",
        optionC: "Metaphysics",
        optionD: "physics",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "The act by which the mind affirms or denies something of something else is called ____________________________ ",
        optionA: "evidence",
        optionB: "simple apprehension",
        optionC: "judgement",
        optionD: "argument",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question: "All of these constitute a logical process except",
        optionA: "intuition",
        optionB: "judgement",
        optionC: "simple apprehension",
        optionD: "reasoning and argument",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question: "Logic is the study of",
        optionA: "correct and incorrect reasoning and arguments",
        optionB: "correct reasoning and arguments alone",
        optionC: "Incorrect reasoning and arguments alone",
        optionD: "Incorrect propositions alone",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "___________ are the components of sense experience theory",
        optionA: "idealists",
        optionB: "rationalists",
        optionC: "realists",
        optionD: "empiricists",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question: "We ascribe authority to someone who",
        optionA: "is not a specialist in particular field of knowledge",
        optionB: "whoa has experience about a particular situation",
        optionC: "is a speciaalist ia particular field of knowledge",
        optionD: "reasons well",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "is the theory which believes that human beings can acquire knowledge of reality by the use of our minds alone or pure reason",
        optionA: "Rationalism",
        optionB: "Altruism",
        optionC: "idealism",
        optionD: "None",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question: "is based on inner, personal certainty and conviction",
        optionA: "Knowledge",
        optionB: "belief",
        optionC: "intuition",
        optionD: "confidence",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "Which of thes is based on evidence?",
        optionA: "Knowledge",
        optionB: "Opinion",
        optionC: "belief",
        optionD: "All of the above",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question: "Which of these is not a source of knowledge",
        optionA: "Reason",
        optionB: "Authority",
        optionC: "Revelation and faith",
        optionD: "None of the above",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question: "In what way is philosophy different from religion?",
        optionA:
          "In religion, any known assumption is subject to critical scrutiny while philosophy is purely dogmatic",
        optionB: "A philosopher is always critical while a religionist is not",
        optionC:
          "Philosiphy is based on faith while religion is based on knowledge",
        optionD: "All of the above",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "is the knowledge obtained by observation and testing of facts",
        optionA: "Religion",
        optionB: "technology",
        optionC: "arts",
        optionD: "science",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "All of these are divergences between philosophy and science except",
        optionA: "The philosophers inquiry begins where the scientist stops",
        optionB:
          "An average scientist seeeks for explanation while the philosopher basically seeks for justification",
        optionC: "Both of the above",
        optionD:
          "Both philosophy and science are motivated by sheer curiosity and the satisfaction of having knowledge",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "The part of ethics that deals with the logic and language of ethical concept and trms is reffered to as",
        optionA: "Subjective ethics",
        optionB: "Comparative ethics",
        optionC: "Meta-ethics",
        optionD: "Descriptive ethics",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "______________ethics prescribe what ought to be both for humans",
        optionA: "descriptive",
        optionB: "meta-ethics",
        optionC: "normative",
        optionD: "superlative",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question: "Ethics is interested with\n______________ questions",
        optionA: "ontoligical",
        optionB: "ontic",
        optionC: "artic",
        optionD: "article",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "______________ is a general study of existence and reality",
        optionA: "meta-ethics",
        optionB: "metaphysics",
        optionC: "epistemology",
        optionD: "astrology",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "Episteme' in Greek means ____________________ ",
        optionA: "belief",
        optionB: "love",
        optionC: "knowledge",
        optionD: "truth",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question: "All except one is not a branch of philosophy",
        optionA: "metaphysics",
        optionB: "logic",
        optionC: "epistemology",
        optionD: "Algebraology",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "All of these gave the definitions of logic except ______________",
        optionA: "Copi",
        optionB: "Eboussi",
        optionC: "Nancy",
        optionD: "Kahane",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "The science of good or bad reasoning is called",
        optionA: "logic",
        optionB: "ethics",
        optionC: "epistemology",
        optionD: "metaphysics",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "The branch of philosophy which deals with the morality of human actions in society is referred to as",
        optionA: "logic",
        optionB: "ethics",
        optionC: "diety",
        optionD: "morale",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "____________________________ argument s are those in which the premises do not lead to the conclusion with certainty",
        optionA: "deductive",
        optionB: "suspective",
        optionC: "inductive",
        optionD: "none",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "According to early Greek philosophers, all knowledge begins in",
        optionA: "curiosity",
        optionB: "experiment",
        optionC: "principles",
        optionD: "transition",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "Philosophy was also called the last science because ______________",
        optionA: "we study philosophy at the end of other sciences",
        optionB:
          "in order to under stand philosophy, we must, to some extent, have mastered the other sciences",
        optionC: "It is logically presupported by every other sciences",
        optionD: "It met an established scientific knowledge",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "In Greek, Sophia means ____________________________   ",
        optionA: "understanding",
        optionB: "love",
        optionC: "wisdom",
        optionD: "science",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "______________regarded philosophy as the first and the last science",
        optionA: "Plato",
        optionB: "Pythagoras",
        optionC: "Aristotle",
        optionD: "Newton",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "The birth and settlement of social sciences was hastened by the works of some of these philosophers except ______________",
        optionA: "Epicurus",
        optionB: "Malthus",
        optionC: "Ricardo",
        optionD: "Marx",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "______________period can be considered as the 'take off' of \"delivery\" and settlement",
        optionA: "16th century",
        optionB: "20th century",
        optionC: "15 th century",
        optionD: "18th century",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Which of these best describes the reasons why philosophy is regarded as the parent discipline",
        optionA: "Philosophy depends on all other field of study",
        optionB:
          "philosophy seeks to know and this is the basis for all other disciplines",
        optionC: "Philosophy broke away from all other fields of study",
        optionD: "Philosophy is concerned with logic",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          'One of the reasons why the highest degree in arts and sciences, regardless of the special field of concentration, still bears the title of "Doctor of Philosophy" is ____________________________ ',
        optionA: "Philosophy is still seen as a scientific discipline",
        optionB: "Philosophy is still seen as a commercial discipline",
        optionC: "Philosophy is still seen as a secondary discipline",
        optionD: "Philosophy is still seen as an encyclopedic discipline",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question: "_____________ is the oldest child of philosophy",
        optionA: "Sorcery",
        optionB: "Knowledge",
        optionC: "Science",
        optionD: "Arts",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "The main purpose of Ionian philosopher was to _____________________   ",
        optionA: "know",
        optionB: "experiment",
        optionC: "hypothesize",
        optionD: "enchant",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "One of these philosophers was credited with the eclipse of 585 B.C",
        optionA: "Anaximenes",
        optionB: "Thales",
        optionC: "Anaximander",
        optionD: "Heraclitus",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "According to academic philosophers, philosophy originated around ___________________   ",
        optionA: "late 6th century A.D",
        optionB: "early 5th cemtury A.D",
        optionC: "late 5th century and early century B.C",
        optionD: "early 5th and late 6th century B.C",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question: "All but one of these statements are true",
        optionA: "Philosophy as a discipline have a universal definition",
        optionB:
          "Philosophers do not agree with themselves on what philosophy is",
        optionC:
          "To a Layman, a person's philosophy is the sum total of his fundamentsal beliefs and convictions",
        optionD: "There are two ways to understand philosophy",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "According to academic philosophers, philosophy originated from the ancient",
        optionA: "Roman city state",
        optionB: "Spanish city state",
        optionC: "Asian city state",
        optionD: "Greek City state",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          'Which of these philosophers defined philosophy as the "love of Wisdom"',
        optionA: "Thales",
        optionB: "Mouelle",
        optionC: "Pythagoras",
        optionD: "Bodurn",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question: "Pythagoras was a",
        optionA: "Latinian mysticst",
        optionB: "Asian philosopher",
        optionC: "Greek philosopher",
        optionD: "African mathematician",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question: "All of these are African philosophers except",
        optionA: "Pythagoras",
        optionB: "Marcien Towa",
        optionC: "Njoh Mouelle",
        optionD: "Eboussi Boulaga",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "Which of these defines philosophy beginning from its origin ?",
        optionA: "professional conception",
        optionB: "Laymans's conception",
        optionC: "technical conception",
        optionD: "Gregorian conception",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question: "All but one is the Layman's understanding of philosophy",
        optionA: "a general view of life",
        optionB: "the love of wisdom",
        optionC: "an attitude towards a certain line of action",
        optionD:
          "sustaining a position of argument in a systematic logical and consistent manner",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "It is not easy to define philosophy because of the ____________________________ ",
        optionA: "flexible nature of philosophy",
        optionB: "dual nature of philosophy",
        optionC: "truthful nature of philosophy",
        optionD: "complex nature of philosophy",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question: "Which of these defines philosophy as a discipline?",
        optionA:
          "The study of man and his living and non living thingenviroment",
        optionB: "The study of the culture and tradition of people",
        optionC:
          "To wonder about life and about the fundamental problems of human existence",
        optionD: "The study of anything that has masses and spaces",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "Words or expressions that indicate a premise or conclusion within an argument from the premise is known\nas____________________________      ",
        optionA: "demonstrator",
        optionB: "locus",
        optionC: "indicator",
        optionD: "command",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "The process of derivation of a conclusion of an argument from the premise is known as",
        optionA: "assertion",
        optionB: "inference",
        optionC: "validation",
        optionD: "result",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "The sentence: Africa is a great continent is a logical statement because______________",
        optionA: "It leads to conclusion",
        optionB: "it does not contain premise indicator",
        optionC: "the sentence can be asserted and can be denied",
        optionD: "we can derive the inference from the sentence",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "All of these are vocabularies uesd in logic except______________",
        optionA: "statement",
        optionB: "inference",
        optionC: "quallocation",
        optionD: "premise",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "____________________________ is an argument that contains at least three propositions",
        optionA: "premises",
        optionB: "symbols",
        optionC: "syllogism",
        optionD: "argument",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question: "Which of the these is not a porponent of modern logic?",
        optionA: "Gottlob Frege",
        optionB: "John Venn",
        optionC: "Bertrand Russell",
        optionD: "Aristotle",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "What is the logical realtion that hold between this categorical statement ? Some leaders are followers / Some leaders are not followers",
        optionA: "They are sub- contraries",
        optionB: "They are contradictories",
        optionC: "They are contraries",
        optionD: "They are super - contradictories",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "Sub - alternations, contraries anmd sub contraties are found in",
        optionA: "Modern square of opposition",
        optionB: "Aristotelisn square of opposition",
        optionC: "Pythagorian square of opposition",
        optionD: "gregorian square of opposition",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "In logic, two propositions / statements are contraries if",
        optionA: "they can both be true and they can both be false",
        optionB: "they cannot boht be false but they can both be true",
        optionC: "they cannot boht be true but they can boht be false",
        optionD: "none of these",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "The two types of logic we have are\n____________________________ and",
        optionA: "Aristotelian logic modern logic",
        optionB: "pythagorian logic traditional logic",
        optionC: "Gregarian logic anmd classical logic",
        optionD: "socratic logic modern logic",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question: "What is the symbol of syllogism in question 18",
        optionA: "first figure",
        optionB: "second figure",
        optionC: "Third figure",
        optionD: "Fourth figure",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "All Sadists are mean All art critics are mean .\nSo, allort critics are sadists . What is the mood of the above syllogism?",
        optionA: "AOA",
        optionB: "AAA",
        optionC: "AIA",
        optionD: "AOO",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "In any standard categorical syllogism, the figure is specified by thje position of the",
        optionA: "major term",
        optionB: "middle term",
        optionC: "minor term",
        optionD: "vague term",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "The logical form of a categirical syllogism is determined by its",
        optionA: "standard form",
        optionB: "disposition",
        optionC: "mood and figure",
        optionD: "general verdict",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "We can say thaat a categorical syllogism is in standard form only and only if all of the folllowing conditions are met except ?",
        optionA: "The first prremise contain the major term",
        optionB: "The first premise contian the minor term",
        optionC: "The second premise contai n the minor term",
        optionD: "The conclusion is stated last",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "The middle term of a categorical syllogism is the ____________________________",
        optionA: "subject term of the conclusion",
        optionB: "term that occurs once in each premise",
        optionC: "predicate term of the conclusion",
        optionD: "predicate term of the proposition",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "All of these are important for evaluating categorical syllogisms except ?",
        optionA: "disposition",
        optionB: "Mood",
        optionC: "standard form",
        optionD: "figure",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "In the proposition \" All policemen take bribes \"\n, the adjective 'All' is called a",
        optionA: "rectifier",
        optionB: "modifier",
        optionC: "quantifier",
        optionD: "subject",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          '" Bride price should not be abolished ". What type of categoriacl proposition is this ?',
        optionA: "Particular affirmative proposition",
        optionB: "Particular negative proposition",
        optionC: "universal affirmative proposition",
        optionD: "universal negative proposition",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question: 'The statement " Human beings are mammals " is an example of',
        optionA: "Particular affirmative proposition",
        optionB: "universal affirmative proposition",
        optionC: "Particular negative proposition",
        optionD: "universal negative proposition",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "In truth table\nanalysis______________is false in the situation in which the antecedent is true and the consequent is false",
        optionA: "disjunction",
        optionB: "material bi- conditional",
        optionC: "material conditional",
        optionD: "conjunction",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question: "is a statement that can both be denied or asserted",
        optionA: "argument",
        optionB: "premise",
        optionC: "conclusion",
        optionD: "proposition",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "The golden rule when dealing with disjunction in truth table is that",
        optionA:
          "a disjuction is false if both its disjunct are false, otherwise it is true",
        optionB: "a disjuction is true if both its disjuncts are false",
        optionC: "A disjunction is false if both its disjuncts are true",
        optionD: "whatever the state of disluncts, the outcome will be true",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "All the following can be asserted when treating disjunction in a truth table except",
        optionA: "TT = T",
        optionB: "FF = T",
        optionC: "TF = T",
        optionD: "FT = T",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          '"Time is the greatest container into which we pour our lives". The defect of this definition is',
        optionA: "The definition is figurative",
        optionB: "The definition is circular",
        optionC: "The definition is negative",
        optionD: "The definiton is tooo wide",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question: 'The statement after "and" in logic symbol stands for',
        optionA: "second conjuct",
        optionB: "first disjunct",
        optionC: "second disjunct",
        optionD: "first conjunct",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question: 'In logic symbol before the word "or" is called',
        optionA: "first conjunct",
        optionB: "second disjunct",
        optionC: "first disjunct",
        optionD: "second conjunct",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          'In the definition by Genus and difference, the word " definiendum " stands for the',
        optionA: "word being defined",
        optionB: "word or words that do the defining",
        optionC: "Word that give the ideal meaning",
        optionD: "All of the above",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "Which of these definitions is one of the best way to reduce ambiguity or vagueness\n?",
        optionA: "ideal definitions",
        optionB: "Definition by genius and difference",
        optionC: "Definition by class",
        optionD: "Stipulative definiton",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "When a writer or a speaker gives a word a new meaning or introduces a new word into the language , this definition is called",
        optionA: "Real definition",
        optionB: "Defintion by genius and difference",
        optionC: "Definition by species",
        optionD: "Stipulative definiton",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "The proposition: All men are mortal.\nSocrates is a man. Therefore Socrates is a mortal. This is an example of ______________     ",
        optionA: "indicative syllogism",
        optionB: "declarative syllogism",
        optionC: "cartegorical syllogism",
        optionD: "equivocal syllogism",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "When a fallacy arises as a result of lack of conformity with a type of valid argument, we say it is ______________",
        optionA: "Informal",
        optionB: "purely logical",
        optionC: "semi-logical",
        optionD: "heretic",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "An error in reasoning that tends to be psychologically persuasive is called a",
        optionA: "fallacy",
        optionB: "heresy",
        optionC: "hear-say",
        optionD: "fanatic",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "Practically, before the period of L.A.D,\n______________is used to communicate",
        optionA: "visuals",
        optionB: "sound",
        optionC: "speech",
        optionD: "symbols",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: 'The true meaning of a symbol "double arrow" in logic is',
        optionA: "dysfunction",
        optionB: "disjunction",
        optionC: "bi-conditional",
        optionD: "conditional",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "L.A.D means ______________ in Chomsky's structural Analysis of the Universals of Syntax",
        optionA: "Learning At Distant places",
        optionB: "Learning Automated Directories",
        optionC: "Language Automated Device",
        optionD: "Language Acquisition Device",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "Which of these is a forerunner in the revolution of language in recent times?",
        optionA: "Austin J.L",
        optionB: "Halliday M.A.K",
        optionC: "Chomsky",
        optionD: "Otakpor. N",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "Which function of language is used to evoke or propagate feelings or attitudes in human beings.",
        optionA: "Expressive",
        optionB: "Commisive",
        optionC: "Emotive",
        optionD: "Multiple",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question: 'The symbol named "dot" in logic symbol stands for',
        optionA: "conditional",
        optionB: "conjuction",
        optionC: "bi-conditional",
        optionD: "negation",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "All boys are dressed in trousers. Some girls are dressed in trousers. Therefore some girls are boys. The above argument is said to be a/an ______________",
        optionA: "sound argument",
        optionB: "unsound argument",
        optionC: "invalid argument",
        optionD: "weak argument",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "All Nigerians are Africans. All Africans are whites. Therefore all Nigerians are whites. In the above, the argument is said to be",
        optionA: "sound argument",
        optionB: "unsound argument",
        optionC: "invalid argument",
        optionD: "strong argument",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "An argument is said to be ______________when all the premises are all true while the conclusion is false",
        optionA: "sound",
        optionB: "unsound",
        optionC: "valid",
        optionD: "invalid",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "The words 'sound' or 'unsound' are only used to qualify ______________ arguments",
        optionA: "invalid arguments",
        optionB: "valid arguments",
        optionC: "valid arguments",
        optionD: "semi-valid (inductive) arguments",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "The term major, middle and minor are used to describe ____________________________   ",
        optionA: "cartegorical syllogism",
        optionB: "declarative syllogism",
        optionC: "indicative syllogism",
        optionD: "situational syllogism",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          'When symbolising in logic, the symbol named "title" simply refers to',
        optionA: "negation",
        optionB: "bi-conditional",
        optionC: "conditional",
        optionD: "conjunction",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "Which of these is one of the most appropriate way of proving an argument is valid or invalid ?",
        optionA: "Venn digaram",
        optionB: "modern squrae of opposition",
        optionC: "tradiitional squrae of oppostion",
        optionD: "truth values analysis",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question: "( A→B ) v (C v B) .\nDtermine the truth value",
        optionA: "true",
        optionB: "false",
        optionC: "indifferent",
        optionD: "none",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          '" either Barack Obama or Hilary Clinton was a Democrat ( or both were ) ", true or false',
        optionA: "True",
        optionB: "false",
        optionC: "indiffferent",
        optionD: "none",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "What is the true value of this compound statement ' B→D' if B is true and D is false?",
        optionA: "True",
        optionB: "False",
        optionC: "Indifferent",
        optionD: "none",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "All of these are types of logical compound statment except ?",
        optionA: "interjunction",
        optionB: "conjunctionj",
        optionC: "disjunction",
        optionD: "material conditional",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          'In the definition by Genus and difference, the word " definiendum " stands for the',
        optionA: "word being defined",
        optionB: "word or words that do the defining",
        optionC: "Word that give the ideal meaning",
        optionD: "All of the above",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question: "Which of these is incorrect ?",
        optionA:
          "A conjunction is true if both its conjunctions are true otherwise , it is false",
        optionB:
          "A negation has the opposite truth value of the statement negated",
        optionC:
          "A disjunction is false if both its disjuncts are false , otherwise it is true",
        optionD:
          "The material conditional is said to be false when the antecedent is false and the consequent is true , otherwise it is true",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "In a logical staement , the symbol '→' can also be replaced by the symbol ____________________________      ",
        optionA: "v",
        optionB: "˄",
        optionC: ".",
        optionD: "□",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question: "Which of these is a constant in any logical statement ?",
        optionA: "p",
        optionB: "q",
        optionC: ".",
        optionD: "r",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          'If B represents the statement " David killed the bear " and Q represents the statement " Sodiq is a moralist" The the conjunction of these two statement is',
        optionA: "B V Q",
        optionB: "B . Q",
        optionC: "B → Q",
        optionD: "B ↔Q",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "Technically in logic, a grammatically correct symbolic expression is called a",
        optionA: "correct- symbolic statement (CSS)",
        optionB: "Accurate- foremd statement (AFS)",
        optionC: "Accurate- formed formula (AFF)",
        optionD: "Well-formed formula (WFF)",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question: "The symbol ' double arrow ' implies which of these ?",
        optionA: "If - then",
        optionB: "contecedent",
        optionC: "consequent",
        optionD: "first conjunct",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "An argument or a syllogism with an unstated premise or unstated conclusion is called",
        optionA: "Enthymeme",
        optionB: "Eutymoly",
        optionC: "Enthymenus",
        optionD: "Sorite",
        answer: "optionA",
      },
    ],
  },
  {
    id: 5,
    faculty: "Management Science",
    courseCode: "PUL102",
    courseTitle: "Introduction to Public Institutions II",
    creditUnit: 2,
    level: "100",
    semester: "2",
    questions: [
      {
        type: "MCQ",
        question: "What is the capital of Nigeria?",
        optionA: "Lagos",
        optionB: "Abuja",
        optionC: "Uyo",
        optionD: "Enugu",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "What is the capital of Akwa Ibom?",
        optionA: "Lagos",
        optionB: "Abuja",
        optionC: "Uyo",
        optionD: "Itu",
        answer: "optionC",
      },
      {
        type: "FBQ",
        question: "What is the capital of Cross River?",
        answer1: "Calabar",
        answer2: "Cally",
      },
      {
        type: "MCQ",
        question: "What is the capital of Rivers?",
        optionA: "Ibadan",
        optionB: "Ikwere",
        optionC: "Port Harcourt",
        optionD: "Andoni",
        answer: "optionC",
      },
      {
        type: "FBQ",
        question: "What is the headquaters of Uruan?",
        answer1: "Idu",
        answer2: "idu uruan",
      },
    ],
  },
  {
    id: 6,
    faculty: "Science",
    courseCode: "BIO101",
    courseTitle: "Introduction to Biology",
    creditUnit: 2,
    level: "100",
    semester: "1",
    questions: [
      {
        type: "MCQ",
        question: "What is the capital of Nigeria?",
        optionA: "Lagos",
        optionB: "Abuja",
        optionC: "Uyo",
        optionD: "Enugu",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "What is the capital of Akwa Ibom?",
        optionA: "Lagos",
        optionB: "Abuja",
        optionC: "Uyo",
        optionD: "Itu",
        answer: "optionC",
      },
      {
        type: "FBQ",
        question: "What is the capital of Cross River?",
        answer1: "Calabar",
        answer2: "Cally",
      },
      {
        type: "MCQ",
        question: "What is the capital of Rivers?",
        optionA: "Ibadan",
        optionB: "Ikwere",
        optionC: "Port Harcourt",
        optionD: "Andoni",
        answer: "optionC",
      },
      {
        type: "FBQ",
        question: "What is the headquaters of Uruan?",
        answer1: "Idu",
        answer2: "idu uruan",
      },
    ],
  },
  {
    id: 7,
    faculty: "Science",
    courseCode: "PHY101",
    courseTitle: "Introduction to Physics",
    creditUnit: 2,
    level: "100",
    semester: "1",
    questions: [
      {
        type: "MCQ",
        question: "What is the capital of Nigeria?",
        optionA: "Lagos",
        optionB: "Abuja",
        optionC: "Uyo",
        optionD: "Enugu",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "What is the capital of Akwa Ibom?",
        optionA: "Lagos",
        optionB: "Abuja",
        optionC: "Uyo",
        optionD: "Itu",
        answer: "optionC",
      },
      {
        type: "FBQ",
        question: "What is the capital of Cross River?",
        answer1: "Calabar",
        answer2: "Cally",
      },
      {
        type: "MCQ",
        question: "What is the capital of Rivers?",
        optionA: "Ibadan",
        optionB: "Ikwere",
        optionC: "Port Harcourt",
        optionD: "Andoni",
        answer: "optionC",
      },
      {
        type: "FBQ",
        question: "What is the headquaters of Uruan?",
        answer1: "Idu",
        answer2: "idu uruan",
      },
    ],
  },
  {
    id: 8,
    faculty: "Education",
    courseCode: "EDU114",
    courseTitle: "Education in Nigeria",
    creditUnit: 2,
    level: "100",
    semester: "1",
    questions: [
      {
        type: "MCQ",
        question: "What is the capital of Nigeria?",
        optionA: "Lagos",
        optionB: "Abuja",
        optionC: "Uyo",
        optionD: "Enugu",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "What is the capital of Akwa Ibom?",
        optionA: "Lagos",
        optionB: "Abuja",
        optionC: "Uyo",
        optionD: "Itu",
        answer: "optionC",
      },
      {
        type: "FBQ",
        question: "What is the capital of Cross River?",
        answer1: "Calabar",
        answer2: "Cally",
      },
      {
        type: "MCQ",
        question: "What is the capital of Rivers?",
        optionA: "Ibadan",
        optionB: "Ikwere",
        optionC: "Port Harcourt",
        optionD: "Andoni",
        answer: "optionC",
      },
      {
        type: "FBQ",
        question: "What is the headquaters of Uruan?",
        answer1: "Idu",
        answer2: "idu uruan",
      },
    ],
  },
  {
    id: 9,
    faculty: "Education",
    courseCode: "EDU426",
    courseTitle: "Special Education",
    creditUnit: 2,
    level: "400",
    semester: "2",
    questions: [
      {
        type: "MCQ",
        question: "What is the capital of Nigeria?",
        optionA: "Lagos",
        optionB: "Abuja",
        optionC: "Uyo",
        optionD: "Enugu",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "What is the capital of Akwa Ibom?",
        optionA: "Lagos",
        optionB: "Abuja",
        optionC: "Uyo",
        optionD: "Itu",
        answer: "optionC",
      },
      {
        type: "FBQ",
        question: "What is the capital of Cross River?",
        answer1: "Calabar",
        answer2: "Cally",
      },
      {
        type: "MCQ",
        question: "What is the capital of Rivers?",
        optionA: "Ibadan",
        optionB: "Ikwere",
        optionC: "Port Harcourt",
        optionD: "Andoni",
        answer: "optionC",
      },
      {
        type: "FBQ",
        question: "What is the headquaters of Uruan?",
        answer1: "Idu",
        answer2: "idu uruan",
      },
    ],
  },
  {
    id: 10,
    faculty: "Education",
    courseCode: "EDU336",
    courseTitle: "Teaching Practice Report",
    creditUnit: 2,
    level: "300",
    semester: "2",
    questions: [
      {
        type: "MCQ",
        question: "What is the capital of Nigeria?",
        optionA: "Lagos",
        optionB: "Abuja",
        optionC: "Uyo",
        optionD: "Enugu",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "What is the capital of Akwa Ibom?",
        optionA: "Lagos",
        optionB: "Abuja",
        optionC: "Uyo",
        optionD: "Itu",
        answer: "optionC",
      },
      {
        type: "FBQ",
        question: "What is the capital of Cross River?",
        answer1: "Calabar",
        answer2: "Cally",
      },
      {
        type: "MCQ",
        question: "What is the capital of Rivers?",
        optionA: "Ibadan",
        optionB: "Ikwere",
        optionC: "Port Harcourt",
        optionD: "Andoni",
        answer: "optionC",
      },
      {
        type: "FBQ",
        question: "What is the headquaters of Uruan?",
        answer1: "Idu",
        answer2: "idu uruan",
      },
    ],
  },
];

export default databank;
