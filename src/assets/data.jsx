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
          "Reading at the fastest speed is needed when you want to                            ",
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
          "A listening activity where you listen and link all details to the topic and form your own overall impression is known as             .",
        optionA: "listening for critical evaluation",
        optionB: "listening for general impression",
        optionC: "listening for a specific impression",
        optionD:
          "listening for the overlapping details in the speech of the speaker",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "In order to comprehend you should do all but           ",
        optionA: "Listen attentively",
        optionB: "Show interest in the topic",
        optionC: "Recognise general speech pattern",
        optionD: "Stalk the speaker",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "By              we mean words that are similar, related or familiar to the words that we are trying to determine meaning of.",
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
          "Your reading speed will vary according to\nthe              ",
        optionA: "kind of material you are reading.",
        optionB: "purpose of reading",
        optionC: "environment where you are reading.",
        optionD: "number of materials you have read previously.",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "In order to read for                  you must be able to decide how relevant the information provided is.",
        optionA: "Interpretation",
        optionB: "critical analysis and evaluation",
        optionC: "summary and comprehension",
        optionD: "your semester examination.",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "             involves looking at the merits and demerits of what is heard",
        optionA: "informational listening",
        optionB: "intellectual listening",
        optionC: "critical analysis",
        optionD: "making deductions and observations.",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "To always turn to the dictionary for any meaning of a word, every second is actually                            ",
        optionA: "highly recommended",
        optionB: "a lazy student’s approach to learning the meaning of words",
        optionC: "the best way to develop your vocabulary",
        optionD: "the quickest way to find the meaning of a word",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "In most cases narratives are                           in terms of style",
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
          '"Necessity is the Mother of Invention". The statement can be regarded as             ',
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
          "It has been observed that the language of               is diverse and specific",
        optionA: "expository texts",
        optionB: "narrative texts",
        optionC: "scientific texts",
        optionD: "tables and figures texts",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "              passages can be difficult if you are not familiar with the words used in the passage.",
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
          "When a speaker speaks ‘above your head’ in a listening event, he or she is said to be               ",
        optionA: "encouraging you to think deeply",
        optionB: "encouraging you to think along with him or her",
        optionC: "discussing an uninteresting topic.",
        optionD: "discussing a difficult topic",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "In order to be able to read effectively, you should first              ",
        optionA: "decide what to read",
        optionB: "decide what and where to read.",
        optionC: "decide why you want to read.",
        optionD: "decide when you want to read.",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question:
          "              are representations of information inform of drawings, paintings or sketches.",
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
          "             does not form the major part of a narrative text.",
        optionA: "A sequential order",
        optionB: "A chronological order of events",
        optionC: "Explanation",
        optionD: "Order of importance",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "A text that explains an issue, a theory, a concept or plan is call             text.",
        optionA: "a descriptive",
        optionB: "a narrative",
        optionC: "an expository",
        optionD: "a theoretical",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "Your comprehension rate in a study type reading should be about              ",
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
          "Listening comprehension as an interactive process involves the interpretative and the               of the listener.",
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
          "Coffee tastes better than tea. This statement can be regarded as                    ",
        optionA: "fact",
        optionB: "fable",
        optionC: "opinion",
        optionD: "guess",
        answer: "optionC",
      },
      {
        type: "MCQ",
        question:
          "Christianity is the best religion. This statement can be regarded as                    ",
        optionA: "fable",
        optionB: "fact",
        optionC: "guess",
        optionD: "opinion",
        answer: "optionD",
      },
      {
        type: "MCQ",
        question:
          "Human beings are warm- blooded mammals. The statement can be regarded as                    ",
        optionA: "fact",
        optionB: "fable",
        optionC: "opinion",
        optionD: "guess",
        answer: "optionA",
      },
      {
        type: "MCQ",
        question:
          "The Sun is the star at the center of the Solar System. The statement can be regarded as                    ",
        optionA: "fable",
        optionB: "fact",
        optionC: "guess",
        optionD: "opinion",
        answer: "optionB",
      },
      {
        type: "MCQ",
        question: "Words that cut across all fields are called              ",
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
    faculty: "Science",
    courseCode: "CIT103",
    courseTitle: "Introduction to Computers",
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
    id: 3,
    faculty: "Arts",
    courseCode: "ENG101",
    courseTitle: "Introduction to English Studies",
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
    id: 4,
    faculty: "Management Science",
    courseCode: "PUL101",
    courseTitle: "Introduction to Public Institutions",
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
