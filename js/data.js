const chapters = [
  {
    chapter: 1,
    story: `In a world full of great kingdoms and legions of monsters, how can one man make a difference? 
    
    The world as you know it has changed in the past few years.  King Garner, ‘The Beast’, as he's affectionately known,  has an iron grip on the kingdom at large.  Laws have been harshened to the deathly extreme and resources for the lesser fortunate are stiffened.  Patrol outside the city walls has been limited due to a defunded Nights Guard.  That money was allocated to monthly tourney’s by order of the King himself.  The people who are forced to live outside of the city are rewarded with bandit raids and attacks from foul beasts.  You are one of these less fortunates.  The air has been thinning around you, life tightens its grasp on your neighbors and people begin to become desperate for help.  You yourself would have been damned if not for your father,  His name is Lambard and as ex-kingsguard he has the tools to protect you.  But he's getting old, 65 maybe even 70 he wishes to keep it a secret to not reveal how little time he actually has left.  Today is its own, however, and there is work to do…  Your father has tasked you with collecting firewood from the Bloom Marsh, a wooded swamp about a mile west  from the homestead, or, fishing for tonight's dinner in the lake behind the kingdom.  The only question now is what to get done first.`,
    
    options: [
      {
        option: `To the Swamp`,
        nextChapter: `To the Swamp`
      },
      {
        option: `To the Lake`,
        nextChapter: '3',
      }
    ],
    images: [
      '../assets/download-4.png',
  ]
  },
  {
    chapter: `To the Swamp`,
    story: `The trek to the swamp is one that you’ve taken every time your father has asked but the sum is one you can't begin to count.  You’ve got your rusty ax and a wheelbarrow to cart off your spoils.  You do have to be careful in this swamp.  Treants blend into the background but you’ve got an eye for them.  The leaves on the creatures are always a different shade than the normal trees.  It’s a good thing they are rather passive if left to their own devices because a quick glance around and you’d see 5 to 10 of them in your immediate area.  You come across what seems like a worthy tree.  You give it a knock and it seems to sound hollow.  The knock seems to send a squirrel berserk.  The squirrel lands on you and after a brief tussle with the miniature devil it runs off into a small cave.  All these times you’ve been in the swamp and you’ve never seen this cave before.  It draws your intrigue…`,
    options: [
      {
        option: 'Cut Down the Tree',
        nextChapter: `Cut Down the Tree`
      },
      {
        option: 'Follow the Squirrel',
        nextChapter: `Follow the Squirrel`,
      }
    ],
    images: [
      '../assets/download-1.png'
    ]

  },
  {
    chapter: `Cut Down the Tree`,
    story: `There’s no way this tree can be this hollow can it?  You’ve double checked and it's no Treant.  At this point the prospect of firewood is a lesser thought than simply cracking open the tree and taking a peak.  You swing your ax with as much force as you can muster.  The tree is oldy firm, firmer than you’d think for a tree of this density.  It takes more swings than anticipated but one ‘timber’ later it’s fallen.  You’re shocked to look it over and see nothing but deep blackness inside of the tree.  There’s a hole in the center of this tree.  Leading down however far you can imagine.  Reason tells you to cut down another tree and leave.  The adventurous spark in you desires to descend down this hole and find whatevers at the bottom. `,
    options: [
      {
        option: 'Delve in the Hole',
        nextChapter: `Delve in the Hole`,
      },
      {
        option: `Get Firewood and Go Fishihng`,
        nextChapter: `Get Firewood and Go Fishing`
      },
      {
        option: `Check the Cave`,
        nextChapter: `Check the Cave`
      },
    ]
  },
  {
    chapter: `Delve in the Hole`,
    story: `A quick dive into a hollow tree never hurt anyone right?  If anything goes wrong you do have your ax at least.  That’s what you tell yourself to retrieve the courge out from the bottom of your stomach.  You know deep down that felling a tree and a beast are two mightily different tasks.  Climbing down a tree seems no more difficult than climbing up one but you quickly lose the light.  As the sunlight gives up on you this trip is seeming more and more ludacris but there's no point going back up now.  You find the bottom with more ease than you were hoping for but less than you were anticipating.  Strangely, The floor feels not of wood but of stone and you can see, from what is appearing to be a corner of a tunnel you are now in, a glimmer of blue ethereal light.  You feel your way around and to your confusion it is a tunnel.  There's fine wooden supports engraved with some sort of design you could see only if you were a blind.  You make your way to the end of this hall and peak around the corner.  The light fades to a meer glow off of a bow, arrows, and a set of armor.  The bow is light and fluid, vestiges of stags and wild beasts cover it from one end to another.  The arrows are thin and bendy but impossible to break.  The armor looks fluid and breathable but there’s not a scratch on it.  The equipment is spotless but this hideaway looks abandoned.  Nothing in here but dead air and the occasional bug.`,

  }
]

export {chapters}