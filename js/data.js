const chapters = [
  {
    chapter: 1,
    story: `In a world full of great kingdoms and legions of monsters, how can one man make a difference?  The world as you know it has changed in the past few years.  King Garner, ‘The Beast’, as he's affectionately known,  has an iron grip on the kingdom at large.  Laws have been harshened to the deathly extreme and resources for the lesser fortunate are stiffened.  Patrol outside the city walls has been limited due to a defunded Nights Guard.  That money was allocated to monthly tourney’s by order of the King himself.  The people who are forced to live outside of the city are rewarded with bandit raids and attacks from beasts most foul.  You are one of these less fortunates.  The air has been thinning around you, life tightens its grasp on your neighbors and people begin to become desperate for help.  You yourself would have been damned if not for your father,  His name is Lambard and as Ex-Kingsguard he has the tools to protect you.  But he's getting old, 65 maybe even 70 he wishes to keep his age a secret to not reveal how little time he actually has left.  Today is its own, however, and there is work to do…  Your father has tasked you with collecting firewood from the Bloom Marsh, a wooded swamp about a mile west  from the homestead or fishing for tonight's dinner in the lake behind the kingdom.  The only question now is what to get done first.`,
    options: [
      {
        option: `To the Swamp`,
        nextChapter: 100,
      },
      {
        option: `To the Lake`,
        nextChapter: 'a',
      }
    ],
    images: [
      '../assets/download-2.png',
  ]
  },
  {
    chapter: 'a',
    story: `Back already?  A shame really, I thought you’d be the one to rid us of the beast.`,
    options: [
      {
        option: 'return to the inn',
        nextChapter: 1
      }
    ],
    images: [
      '../assets/download-1.png'
    ]

  }
]

export {chapters}