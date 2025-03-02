const questionsData = [
  {
    id: 1,
    question: "Welcome! Welcome! Welcome! To a wierd 'Tumhebhi pata hein isse tum nhi bnoge crorepati'",
    answers: [
      {
        text: "Its my pleasure Monsieur",
        correct: true,
      },
      {
        text: "Ayo! WTF IS THIS NOW",
        correct: true,
      },
      {
        text: "Kaha fass gyi mein",
        correct: true,
      },
      {
        text: "Absolutely No words",
        correct: true,
      },
    ],
  },
  {
    id: 2,
    question: "How have been Madame ji from past a fucking Month! DAMN😶",
    answers: [
      {
        text: "Pretty, Cute as usual",
        correct: true,
      },
      {
        text: "IDK",
        correct: true,
      },
      {
        text: "Lil sad",
        correct: true,
      },
      {
        text: "Angry🤬, Bhadwe mujhe ghost kaise kiya?",
        correct: true,
      },
    ],
  },
  {
    id: 3,
    question: "How did your exams go?",
    answers: [
      {
        text: "Mastttt",
        correct: true,
      },
      {
        text: "As usual stressful but finally over",
        correct: true,
      },
      {
        text: "Tujhe kya im still angry",
        correct: true,
      },
      {
        text: "Chup",
        correct: true,
      },
    ],
  },
  {
    id: 4,
    question: "Thoda sa hi sahi pr miss kiya kya ji inn kathin dino mein👀",
    answers: [
      {
        text: "👀",
        correct: true,
      },
      {
        text: "Bilkul Nahi",
        correct: true,
      },
      {
        text: "Sirf Thoda sa",
        correct: true,
      },
      {
        text: "Chup",
        correct: true,
      },
    ],
  },
  {
    id: 5,
    question: "Yeh Ice konsi company ki thi jo 1 pure mahine se break hi nhi horh ji",
    answers: [
      {
        text: "Pata nhi",
        correct: true,
      },
      {
        text: "Bilseri",
        correct: true,
      },
      {
        text: "Gucci",
        correct: true,
      },
      {
        text: "Bisleri",
        correct: true,
      },
    ],
  },
  {
    id: 6,
    question: "Yeh Baraf ka jo chhotu sa pahaad bn gya ab, kya aap isse todna chahengi?",
    answers: [
      {
        text: "Chup",
        correct: true,
      },
      {
        text: "Yess! okay! finally! Badi late puchha huhh!",
        correct: true,
      },
      {
        text: "Mujhe thand pasand hein",
        correct: true,
      },
      {
        text: "Nhi Aise hi shanti hein meri life mein (wrong answer hein ji already)",
        correct: true,
      },
    ],
  },
  {
    id: 7,
    question: "Yeh Bar-affff Kaise tutegi?",
    answers: [
      {
        text: "Yeh long lasting bakchodi se?",
        correct: true,
      },
      {
        text: "Mein tera sr maar maar kr tod dungi",
        correct: true,
      },
      {
        text: "Ab garmiya waise hi aagyi",
        correct: true,
      },
      {
        text: "Mein ek baar baraf ke saamne aau, woh kya tu bhi pighal jayga👀",
        correct: true,
      },
    ],
  },
  {
    id: 8,
    question: "Aapko kya laga tha mein kaisa hunga inn dino🤔",
    answers: [
      {
        text: "Devdas",
        correct: true,
      },
      {
        text: "IAS ki Coaching leni start krdi hogi",
        correct: true,
      },
      {
        text: "Batman Mode ON",
        correct: true,
      },
      {
        text: "Stalker Alchoholic(appy)",
        correct: true,
      },
    ],
  },
  {
    id: 9,
    question: "For Clearing your thoughts and stuffs, YOU ARE:-",
    answers: [
      {
        text: "Princess",
        correct: true,
      },
      {
        text: "Cutie",
        correct: true,
      },
      {
        text: "Swarg se utri hui Kokil Kanthi Apsaraa",
        correct: true,
      },
      {
        text: "Hottie toh mein hu hi",
        correct: true,
      },
    ],
  },
  {
    id: 10,
    question: "Do i want to clear apart the rift from this bhadwi baraf da silla?",
    answers: [
      {
        text: "YESS",
        correct: true,
      },
      {
        text: "FUCK YESSS",
        correct: true,
      },
      {
        text: "HELL YEAH",
        correct: true,
      },
      {
        text: "Yeh question tha hi nhi lol",
        correct: true,
      },
    ],
  },
  {
    id: 11,
    question: "Madame ji is important indeed, and not just bound by any outcome.",
    answers: [
      {
        text: "Just",
        correct: true,
      },
      {
        text: "Facts",
        correct: true,
      },
      {
        text: "Not a Question",
        correct: true,
      },
      {
        text: "lol",
        correct: true,
      },
    ],
  },
  {
    id: 12,
    question: "What Corruption material i have to give",
    answers: [
      {
        text: "Latent di controversy wala full episode",
        correct: true,
      },
      {
        text: "Spotify da naya mod apk",
        correct: true,
      },
      {
        text: "Iss thode se cute chutiyaape se kaam chl jayga",
        correct: true,
      },
      {
        text: "CHUPPPPPP",
        correct: true,
      },
    ],
  },
  {
    id: 13,
    question: "Why did i took so long?",
    answers: [
      {
        text: "Awkward horh tha ji",
        correct: true,
      },
      {
        text: "Pehle sad baad mein 3am philosopher jagga",
        correct: true,
      },
      {
        text: "I am batman mode on hogya tha",
        correct: true,
      },
      {
        text: "ALL of these",
        correct: true,
      },
    ],
  },
  {
    id: 14,
    question: "If 1% this works, and we become Pre historically Normal, like My priness-your cutie stuff, so madam ji will break her ice by",
    answers: [
      {
        text: "Ek cute si hasti pic mein kaam bn jayga",
        correct: true,
      },
      {
        text: "VTH (TH),VTC ETC",
        correct: true,
      },
      {
        text: "16 Gaali pehle, itni der kaise lagai?",
        correct: true,
      },
      {
        text: "ALL Correct👀",
        correct: true,
      },
    ],
  },
  {
    id: 15,
    question: "Hehe the quiz is over here, but this is last question not least bakchodi🤭",
    answers: [
      {
        text: "Hashhhhhh!",
        correct: true,
      },
      {
        text: "Ab Aage Kya fir?",
        correct: true,
      },
      {
        text: "Bs ji dekhte jaiye",
        correct: true,
      },
      {
        text: "Click kro ji D for mere naam pr🤭",
        correct: true,
      },
    ],
  },
];

export default questionsData;
