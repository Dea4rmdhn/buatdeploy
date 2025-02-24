const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "0908", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Enter Passcode", // Title displayed on the passcode entry page
  successMessage: "Yayy!! :)", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Incorrect passcode, hint: our anniversary date!", // Message shown for incorrect passcode
  cancelButtonText: "Cancel", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches", // Title for the trending searches section
  trendingSearches: [
    "Why is my bf so cute?", // Example trending search query
    "Kenapa Dea sayang cowoknya?", // Another example query
    "Tutor dicintai secara ugal ugalan",
    `Azab cowo yang suka tantrum?`, // A personalized trending search
  ],
  proTip: 'Pro tip: try searching "Berapa lama kita telah bersama?" ;)', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2024-8-9", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "We've been together for:", // Title displayed on the timer page
  timerMessage: "... and still counting <3", // Message shown alongside the timer
  timeUnits: { 
    days: "Days", // Label for days in the timer
    hours: "Hours", // Label for hours in the timer
    minutes: "Minutes", // Label for minutes in the timer
    seconds: "Seconds", // Label for seconds in the timer
  },


  // 📸 Recap Page
  recapTitle: "Let's recap our time together", // Title for the recap page
  clickMeText: "Click me!", // Text prompting users to interact
  recapAudio: [
  { audioUrl:'/assets/music/about you.mp3'}
  ],

  recapSections: [
    { label: "Messages", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Songs that remind me of you", // Title for the music page
  musicGallery: [
    
    {
      title: "Cleared", // Title of the song
      artist: "Lilithzplug", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
      audioUrl:'/assets/music/cleared.mp3',
    },
    {
      title: "Duvet",
      artist: "Boa",
      left: "40%",
      top: "15%",
      audioUrl: '/assets/music/Duvet.mp3',
    },
    {
      title: "Sailor Song",
      artist: "Gigi Perez",
      left: "15%",
      top: "40%",
      audioUrl: '/assets/music/Sailor Song.mp3',
    },
    {
      title: "Broken",
      artist: "Isak Danielson",
      left: "30%",
      top: "75%",
      audioUrl: '/assets/music/Broken.mp3',
    },
    {
      title: "Endless Travel",
      artist: "Tiko Tiko",
      left: "5%",
      top: "65%",
      audioUrl:'/assets/music/Endless Travel.mp3',
    },
    {
      title: "Teeth",
      artist: "Diggy Graves & WesGhost",
      left: "25%",
      top: "90%",
      audioUrl: '/assets/music/teeth.mp3',
      // Add this line
    },
    {
      title: "Flawed Mangoes",
      artist: "KillSwitch Lullaby",
      left: "35%",
      top: "50%",
      audioUrl:'/assets/music/Flawed Mangoes.mp3',
    },
    {
      title: "Be Happy",
      artist: "FRND",
      left: "10%",
      top: "25%",
      audioUrl: '/assets/music/Be Happy.mp3',
    },
  ],

    // 📝 Message Recap Page
    messageTitle: "Messages for you", // Title for the messages recap page
    messageGallery: [
      { title: "20 Februari, 2025", description: "Halo amass, tau gak sihh edek tu kangen weee, kita dah setaun gak ketemu gk sieee wkwk canda 🤣. Edek berharap amas happy terus... gabole sedih-sedih dan harus semangat terus yakk... edek bangga sama amas. Edek juga mau ingetin, jangan sampai lupa jaga kesehatan, ya. Istirahat yang cukup, makan yang teratur, kurangin ngambeknya dan kurang-kurangin ngerokoknya. Ingat ya, Amas itu berharga banget buat edek. Jadi, tolong jaga diri baik-baik, ya. Kalau ada apa-apa, jangan sungkan cerita sama edek. Edek selalu ada buat amas, no matter what . Oiyaaaaa edek ngerasa belakangan ini kita agak kurang komunikasi karena punya kesibukan masing-masing. tapi edek harap kita bisa sama-sama luangin waktu walaupun bentar buat ngobrol kaya dulu lagi. Thank you for making my life a little crazier and a lot more fun! You’re the best!💖 oiyaaa maaf klo kemaren sempet bikin kesel gara-gara web-nya gabisa dibuka, tapi edek dah usahain biar amas bisa liat, semoga amas suka 🥹. Dah itu aja, bingung mo ngomong apa lagi. I Love You dah pokoknya 💖" }, 
      
      
    ],
  
    // 📸 Picture Recap Page
    pictureTitle: "Our Pictures", // Title for the pictures recap page
    pictureGallery: [
      { title: "Agustus 5, 2024", description: "A beautiful day to remember. Inget ngga pas pertama kali jalan bareng? lucu banget taukk.. suka senyum senyum sendiri kalo keinget. Pertama kali ketemu tapi dah berasa bestfriend dari lahir wkkwk ❤️ " }, // Picture entry
      { title: "September 6, 2024", description: "pap after LDR 😎 masih malu-malu babi, tapi kiyowoo bangett weee.. gemesss dahhh" },
      { title: "Desember 21, 2024", description: "akhirnya ketemuu setelah LDR lama yeayyyyy, luka dikit g ngaruh yeee. Niatnya mo maen maen bareng di malang malah gajadi😭 Tapi gapapa, semua ada hikmahnya jadi gaperlu disesali" },
      { title: "Desember 23, 2024", description: "First time naik kereta bareng.. uhuyyy, biasannya sendiri mulu kek orang ilang. Happy dah pokoknya ❤️" },
      { title: "Desember 23, 2024", description: "senyumnyaaaaaa behhhh cakep banget cowo guwehhh wkwk" },
      { title: "Desember 27, 2024", description: "Dianter berobat 😘 , Thank youuu sayanggg. Gapernah diperhatiin segininya 🥹 makasihhh" },
      { title: "Januari 4, 2025", description: "Nonton film dirumah, mam bareng dirumah, maen kocheng, banyak lah pokoknyaa ehehe dan selalu suka asal bareng amas " },
      { title: "Januari 21, 2025", description: "beli nasi goreng sebelum hujan dan sebelum huru hara rumah tangga wkwkw 🤣, gara-gara pulang telat jadinya harus mendengarkan ceramah bapak" },
      { title: "Januari 31, 2025", description: "lucu, gemes, gaada tandingan dahhh. the only one pokoknya 🤩" },
      { title: "Januari 31, 2025", description: " kenangan pas malem sebelum amas balik. aing ditinggalll 😭" },
      { title: "Februari 14, 2025", description: "mang bowleh selucu ini haaa? jangan lucu lucu siii nanti banyak yang suka" },
      { title: "Januari 12, 2025", description: "peluk jauhhhhhh...You stole my heart, but I’ll let you keep it forever" },
      { title: "Januari 1, 2025", description :"anjayyyyy kedua kalinya kesini baru kesampean foto pas dah jadi pasangan wkwk" },
      { title: "Desember 28, 2024", description : "Tahun baru-an bareng keluarga. soo exciteddd. semoga tahun depan bisa kaya gini lagii" },
      { title: "Januari 31, 2025", description: "ke alun-alun untuk ketiga kalinyaaa. Makasih bunganyaa ❤️" },
      { title: "Februari 1, 2025", description: " foto bareng mbah kong yeayyyy...h-1 amas balik. Jujur sedih pas ditinggal tapi gapapa kita ketemu lagi secepatnya ya sayanggg. Thank you for always being there for me. I appreciate you more than words can say ❤️" },
      
    ],

  // 💌 Love Letter Page
  loveLetterMessage: "Cowokku yang paling ganteng, Bahagia terus yaakkk. I love u so much orang paling kiyowoooo 💖 ", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: "Every love story is beautiful, but ours is my favorite! 💖 Wishing us many more wonderful years together.", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "Berapa lama kita telah bersama?", // Example of a correct search query
    "berapa lama kita telah bersama",
    "Berapa lama kita telah bersama",
    "berapa lama kita telah bersama?", // Another example of a correct search query
  ],
};

export default config;
