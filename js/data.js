const chapters = [
  {
    chapter: 1,
    story: `In a world full of great kingdoms and legions of monsters, how can one man make a difference?

    The world as you know it has changed in the past few years.  King Garner, ‘The Beast’, as he's affectionately known,  has an iron grip on the kingdom at large.  Laws have been harshened to the deathly extreme and resources for the lesser fortunate are stiffened.  Patrol outside the city walls has been limited due to a defunded Nights Guard.  That money was allocated to monthly tourney’s by order of the King himself.  The people who are forced to live outside of the city are rewarded with bandit raids and attacks from foul beasts.  You are one of these less fortunates.  The air has been thinning around you, life tightens its grasp on your neighbors and people begin to become desperate for help.  You yourself would have been damned if not for your father,  His name is Lambard and as ex-kingsguard he has the tools to protect you.  But he's getting old, 65 maybe even 70 he wishes to keep it a secret to not reveal how little time he actually has left.  Today is its own, however, and there is work to do…  Your father has tasked you with collecting firewood from the Bloom Marsh, a wooded swamp about a mile west  from the homestead, or, fishing for tonight's dinner in the lake behind the kingdom.  The only question now is what to get done first.`,
      options: [
      {
        option: `To the Swamp`,
        nextChapter: 'To the Swamp',
      },
      {
        option: `To the Lake`,
        nextChapter: `To the Lake`,
      },
    ],
    images : [
      `../assets/music-man.png`,
    ],
  },

  {
    chapter: 100,
    story: `The trek to the swamp is one that you’ve taken every time your father has asked but the sum is one you can't begin to count.  You’ve got your rusty ax and a wheelbarrow to cart off your spoils.  You do have to be careful in this swamp,  treants can adeptly blend into the background but you’ve got an eye for them.  The tell is that the shade of the leaves are always different from the average tree.  Thankfully, they’re rather passive if left to their own devices.  Otherwise you’d be in trouble because at a quick glance you’d see 2 to 3 of them in your immediate area.  You come across what seems like a worthy tree. you give it a knock and it seems to sound hollow.  The knock sends a squirrel from up the tree berserk.  The squirrel lands on you and after a brief tussle with the miniature devil it runs off into a small cave.  All these times you’ve been in the swamp and you’ve never seen this cave before.  It draws your intrigue…`,
    options: [
      {
        option: `Cut the Tree Down`,
        nextChapter: `Cut the Tree Down`,
      },
      {
        option: `Follow the Squirrel`,
        nextChapter: `Follow the Squirrel`,
      },
    ],
    images : [

    ],
  },

  {
    chapter: `Cut the Tree Down`,
    story: `There’s no way this tree can be this hollow can it?  You’ve double checked and it's no Treant.  At this point the prospect of firewood is a lesser thought than simply cracking open the tree and taking a peak.  You swing your ax with as much force as you can muster.  The tree is oldy firm, firmer than you’d think for a tree of this density.  It takes more swings than anticipated but one ‘timber’ later it’s fallen.  You’re shocked to look it over and see nothing but deep blackness inside of the tree.  There’s a hole in the center of this tree.  Leading down however far you can imagine.  Reason tells you to cut down another tree and leave.  The adventurous spark in you desires to descend down this hole and find whatevers at the bottom.`,
    options: [
      {
        option: `Delve in the hole`,
        nextChapter: `Delve in the hole`,
      },
      {
        option: `Retrieve Firewood and Go Fishing`,
        nextChapter: `Retrieve Firewood and Go Fishing`,
      }
    ] 
  },
]

export {chapters}