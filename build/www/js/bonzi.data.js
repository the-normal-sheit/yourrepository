var BonziData = {
  size: {
    x: 200,
    y: 160
  },
  sprite: {
    frames: {width: 200, height: 160},
    animations: {
      idle: 0,

      surf_across_fwd: [1, 8, "surf_across_still", 1],
      surf_across_still: 9,
      surf_across_back: {
        frames: range(8,1),
        next: "idle",
        speed: 1
      },

      clap_fwd: [10, 12, "clap_still", 1],
      clap_still: [13, 15, "clap_still", 1],
      clap_back: {
        frames: range(12,10),
        next: "idle",
        speed: 1
      },

      surf_intro: [277, 302, "idle", 1],
      surf_away: [16, 38, "gone", 1],

      gone: 39,

      shrug_fwd: [40, 50, "shrug_still", 1],
      shrug_still: 50,
      shrug_back: {
        frames: range(50,40),
        next: "idle",
        speed: 1
      },

      earth_fwd: [51, 57, "earth_still", 1],
      earth_still: [58, 80, "earth_still", 1],
      earth_back: [81, 86, "idle", 1],

      // TODO: ADD BLINK
      look_down_fwd: [87, 90, "look_down_still", 1],
      look_down_still: 91,
      look_down_back: {
        frames: range(90, 87),
        next: "idle",
        speed: 1
      },

      // TODO: ADD BLINK
      lean_left_fwd: [94, 97, "lean_left_still", 1],
      lean_left_still: 98,
      lean_left_back: {
        frames: range(97, 94),
        next: "idle",
        speed: 1
      },

      beat_fwd: [101, 103, "beat_still", 1],
      beat_still: [104, 107, "beat_still", 1],
      beat_back: {
        frames: range(103, 101),
        next: "idle",
        speed: 1
      },

      cool_fwd: [108, 124, "cool_still", 1],
      cool_still: 125,
      cool_back: {
        frames: range(124, 108),
        next: "idle",
        speed: 1
      },

      cool_right_fwd: [126, 128, "cool_right_still", 1],
      cool_right_still: 129,
      cool_right_back: {
        frames: range(128, 126),
        next: "idle",
        speed: 1
      },

      cool_left_fwd: [131, 133, "cool_left_still", 1],
      cool_left_still: 134,
      cool_left_back: {
        frames: range(133, 131),
        next: "cool_still",
        speed: 1
      },

      cool_adjust: {
        frames: [124, 123, 122, 121, 120, 135, 136, 135, 120, 121, 122, 123, 124],
        next: "cool_still",
        speed: 1
      },

      present_fwd: [137, 141, "present_still", 1],
      present_still: 142,
      present_back: {
        frames: range(141, 137),
        next: "idle",
        speed: 1
      },

      look_left_fwd: [143, 145, "look_left_still", 1],
      look_left_still: 146,
      look_left_back: {frames: range(145, 143),next: "idle",speed: 1},
      look_right_fwd: [149, 151, "look_right_still", 1],
      look_right_still: 152,
      look_right_back: {frames: range(151, 149),next: "idle",speed: 1},
      lean_right_fwd: { frames: range(158, 156), next: "lean_right_still", speed: 1} ,
      lean_right_still: 155, 
      lean_right_back: [156, 158, "idle", 1],
      praise_fwd: [159, 163, "praise_still", 1], 
      praise_still: 164, 
      praise_back: { frames: range(163, 159), next: "idle", speed: 1 },
      grin_fwd: [182, 189, "grin_still", 1], 
      grin_still: 184, 
      grin_back: { frames: range(184, 182), next: "idle", speed: 1},

      backflip: [331, 343, "idle", 1]
    }
  },
  to_idle: {
    surf_across_fwd: "surf_across_back",
    surf_across_still: "surf_across_back",

    clap_fwd: "clap_back",
    clap_still: "clap_back",

    shrug_fwd: "shrug_back",
    shrug_still: "shrug_back",

    earth_fwd: "earth_back",
    earth_still: "earth_back",

    look_down_fwd: "look_down_back",
    look_down_still: "look_down_back",

    lean_left_fwd: "lean_left_back",
    lean_left_still: "lean_left_back",

    beat_fwd: "beat_back",
    beat_still: "beat_back",

    cool_fwd: "cool_back",
    cool_still: "cool_back",
    cool_adjust: "cool_back",

    cool_left_fwd: "cool_left_back",
    cool_left_still: "cool_left_back",

    present_fwd: "present_back",
    present_still: "present_back",

    look_left_fwd: "look_left_back",
    look_left_still: "look_left_back",

    look_right_fwd: "look_right_back",
    look_right_still: "look_right_back",

    lean_right_fwd: "lean_right_back",
    lean_right_still: "lean_right_back",

    praise_fwd: "praise_back",
    praise_still: "praise_back",

    grin_fwd: "grin_back",
    grin_still: "grin_back",

    backflip: "idle",

    idle: "idle",
  },
  pass_idle: [
    "gone"
  ],
  event_list_joke_open: [
    [
      { type: "text",text: "Yeah, of course {NAME} wants me to tell a joke."},
      {type: "anim",anim: "praise_fwd",ticks: 15},
      {type: "text",text: '"Haha, look at the stupid {COLOR} monkey telling jokes!" Fuck you. It isn\'t funny.',say: "Hah hah! Look at the stupid {COLOR} monkey telling jokes! Fuck you. It isn't funny."},
      { type: "anim",anim: "praise_back",ticks: 15},
      {type: "text",text: "But I'll do it anyway. Because you want me to. I hope you're happy."
      }
    ],
    [{type: "text",text: "{NAME} used /joke. Whoop-dee-fucking doo."}],
    [{type: "text",text: "HEY YOU IDIOTS ITS TIME FOR A JOKE"}],
    [
      {
        type: "text",
        text: "Wanna hear a joke?"
      },
      {
        type: "text",
        text: "No?"
      },
      {
        type: "text",
        text: "Mute me then. That's your fucking problem."
      }
    ],[
      {
        type: "text",
        text: "Senpai {NAME} wants me to tell a joke."
      }
    ],[
      {
        type: "text",
        text: "Time for whatever horrible fucking jokes the creator of this site wrote."
      }
    ]
  ],
  event_list_joke_mid: [
    [
      {
        type: "text",
        text: "What is easy to get into, but hard to get out of?"
      },
      {
        type: "text",
        text: "Child support!"
      }
    ],[
      {
        type: "text",
        text: "Why do they call HTML HyperText?"
      },
      {
        type: "text",
        text: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
      },
      {
        type: "anim",
        anim: "shrug_back",
        ticks: 15
      },
      {
        type: "text",
        text: "Sorry. I just had an epiphany of my own sad, sad existence."
      }
    ],[
      {
        type: "text",
        text: "Two sausages are in a pan. One looks at the other and says \"Boy it's hot in here!\" and the other sausage says \"Unbelievable! It's a talking sausage!\"",
        say: "Two sausages are in a pan. One looks at the other and says, Boy it's hot in here! and the other sausage says, Unbelievable! It's a talking sausage!"
      },
      {
        type: "anim",
        anim: "shrug_back",
        ticks: 15
      },
      {
        type: "text",
        text: "What were you expecting? A dick joke? You're a sick fuck."
      }
    ],[
      {
        type: "text",
        text: "What is in the middle of Paris?"
      },
      {
        type: "text",
        text: "A giant inflatable buttplug."
      }
    ],[
      {
        type: "text",
        text: "What goes in pink and comes out blue?"
      },
      {
        type: "text",
        text: "Sonic's asshole."
      }
    ],[
      {
        type: "text",
        text: "What type of water won't freeze?"
      },
      {
        type: "text",
        text: "Your mother's."
      }
    ],[
      {
        type: "text",
        text: "Who earns a living by driving their customers away?"
      },
      {
        type: "text",
        text: "Nintendo!"
      }
    ],
    [
      {
        type: "text",
        text: "Which "
      },
      {
        type: "text",
        text: "Nintendo!"
      }
    ],
    [
      {
        type: "text",
        text: "What did the digital clock say to the grandfather clock?"
      },
      {
        type: "text",
        text: "Suck my clock."
      }
    ],[
      {
        type: "text",
        text: "How do you get water in watermelons?"
      },
      {
        type: "text",
        text: "Cum in them."
      }
    ],[
      {
        type: "text",
        text: "Why do we call money bread?"
      },
      {
        type: "text",
        text: "Because we KNEAD it. Haha please send money to my PayPal at nigerianprince99@bonzi.com CHECK OUT OUR MERCH AT bonzi.merch.shop PLS BUY"
      }
    ],[
      {
        type: "text",
        text: "What is a cow that eats grass?"
      },
      {
        type: "text",
        text: "ASS"
      },
      {
        type: "text",
        text: "I'm a comedic genius, I know."
      },
    ]
  ],
  event_list_joke_end: [
    [
      {
        type: "text",
        text: "You know {NAME}, a good friend laughs at your jokes even when they're not so funny."
      },
      {
        type: "text",
        text: "And you fucking suck. Thanks."
      }
    ],
    [
      {
        type: "text",
        text: "That was a good one, if I do say so myself, {NAME}."
      },
      {
        type: "text",
        text: "Right?"
      },
      {
        type: "text",
        text: "Fuck you."
      }
    ],
    [{type: "text",text: "Where do I come up with these? My ass?"}],
    [{type: "text",text: "Do I amuse you, {NAME}? Am I funny? Do I make you laugh?"},{type: "text",text: "pls respond",say: "please respond"}],
    [
      {
        type: "text",
        text: "Maybe I'll keep my day job, {NAME}. Patreon didn't accept me."
      }
    ],
    [
      {
        type: "text",
        text: "Laughter is the best medicine!"
      },
      {
        type: "text",
        text: "Apart from meth."
      }
    ],
    [
      {
        type: "text",
        text: "Don't judge me on my sense of humor alone."
      },
      {
        type: "text",
        text: "Help! I'm being oppressed!"
      }
    ]
  ],

// ============================================================================

  event_list_fact_open: [[{type: "html",text: "Hey kids, it's time for a Fun Fact&reg;!",say: "Hey kids, it's time for a Fun Fact!"}]],

  event_list_fact_mid: [
    [
      {type: "anim",anim: "earth_fwd",ticks: 15},
      {type: "text",text: "Did you know that Uranus is 31,518 miles (50,724 km) in diameter?", say: "Did you know that Yourr Anus is 31 thousand 500 and 18 miles in diameter?",},
      {type: "anim",anim: "earth_back",ticks: 15},
      {type: "anim",anim: "grin_fwd",ticks: 15}
    ], 
    [
      {type: "text",text: "Fun Fact: The skript kiddies of this site no longer exist, because the server is more secure than FUNE'S."},
      {type: "html",text: "<img src='./img/misc/topjej.png'></img>",say: "toppest jej"}
    ]
  ],

  event_list_fact_end: [
    [
      {
        type: "text",
        text: "o gee whilickers wasn't that sure interesting huh"
      }
    ]
  ]
};