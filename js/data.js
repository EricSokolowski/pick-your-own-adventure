const chapters = [
  {
    chpater: 1,
    story: `Oi, stranger, you here for the bounty?  There's an Owlbear out in the woods thats been terrorizing us you see!  If ye give it a wack i'll get ye whatever drink ye wish!!!`,
    options: [
      {
        option: `Venture out`,
        nextChapter: 100
      },
      {
        option: `Too Dangerous`,
        nextChapter: 2,
      }
    ]
  },
  {
    chpater: 2,
    story: `Back already?  A shame really, I thought you’d be the one to rid us of the beast.`,
    options: 'reset',
    nextChapter: 1,

  }
]

export {chapters}