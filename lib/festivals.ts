export interface Section {
  id: string;
  title: string;
}

export interface Festival {
  slug: string;
  title: string;
  chineseName: string;
  pinyin: string;
  emoji: string;
  category: "Traditional" | "Folk" | "Modern";
  description: string;
  date2026: string;
  duration: string;
  observedIn: string;
  alsoKnownAs: string;
  keySymbols: string;
  intro: string;
  sections: {
    overview: string[];
    traditions: string[];
    food: string[];
    dosAndDonts: { do: string[]; dont: string[] };
    giftGuide: string[];
  };
  relatedSlugs: string[];
}

export const festivals: Festival[] = [
  {
    slug: "dragon-boat-festival",
    title: "Dragon Boat Festival",
    chineseName: "端午节",
    pinyin: "Duānwǔ Jié",
    emoji: "🐉",
    category: "Traditional",
    description: "Racing dragons and eating zongzi",
    date2026: "June 19, 2026",
    duration: "3 days",
    observedIn: "China, Taiwan, Hong Kong, and Chinese communities worldwide",
    alsoKnownAs: "Duanwu Festival, Double Fifth Festival",
    keySymbols: "Dragon boats, Zongzi, Realgar wine, Moxa",
    intro:
      "The Dragon Boat Festival is one of China's most vibrant and action-packed holidays, celebrated on the 5th day of the 5th lunar month. It honors the memory of the patriot poet Qu Yuan and features thrilling dragon boat races and the eating of sticky rice dumplings called zongzi.",
    sections: {
      overview: [
        "The Dragon Boat Festival, or Duanwu Jie, dates back over 2,000 years to the Warring States period of ancient China. Its most famous origin story revolves around Qu Yuan (c. 340–278 BC), a beloved poet and minister of the Chu state. When Chu fell to the Qin state, Qu Yuan, in despair over his kingdom's collapse, drowned himself in the Miluo River on the 5th day of the 5th lunar month.",
        "According to legend, local villagers rushed out in their boats to retrieve his body, beating drums and splashing water to scare away fish and evil spirits. They also threw sticky rice dumplings into the river as offerings to Qu Yuan's spirit — and to distract the fish from consuming his body. These two acts — racing boats and eating rice dumplings — became the festival's enduring traditions.",
        "The day is also associated with warding off disease and evil spirits. In Chinese culture, the 5th day of the 5th month was historically considered an 'unlucky' day when summer heat brought pests and illness. Over time, the festival absorbed protective customs such as hanging medicinal herbs and drinking realgar wine, blending Qu Yuan's tragic story with seasonal health practices.",
      ],
      traditions: [
        "Dragon boat racing is the festival's most spectacular tradition. Teams of paddlers sit in long, narrow boats painted and carved to resemble dragons, with a drummer at the front setting the pace and a steersperson at the rear. Races range from small community events on local rivers to international competitions drawing thousands of spectators. If you're visiting China in June, attending a dragon boat race is an exhilarating way to experience the festival firsthand.",
        "Hanging aromatic herbs is another widespread custom. Families hang bundles of mugwort (ai cao) and calamus (changpu) on their front doors. In traditional Chinese medicine, these herbs are believed to repel insects, purify the air, and ward off illness — a practical practice born from the ancient concern about summer diseases. You'll see these bundles tied with red string at doorways throughout Chinese neighborhoods.",
        "Wearing fragrant sachets (xiangbao) is a beloved tradition, especially for children. These small silk pouches are filled with aromatic herbs like wormwood, mint, and cinnamon, then embroidered with colorful patterns. Children wear them around their necks or on their clothing as decorative amulets to bring good luck and protect against evil spirits. Adults often carry them too, appreciating both the pleasant scent and the link to heritage.",
      ],
      food: [
        "Zongzi — also called sticky rice dumplings — are the essential food of the Dragon Boat Festival. These pyramid-shaped bundles consist of glutinous rice wrapped in bamboo or reed leaves, then steamed or boiled for hours until the rice absorbs the leaf's fragrant aroma. The outer leaves are not eaten; you unwrap them to reveal the sticky rice inside, much like unwrapping a present.",
        "Zongzi come in countless regional variations. In northern China, they tend to be sweet, filled with red bean paste, dates, or candied fruit. In the south, savory versions dominate, stuffed with pork belly, salted duck egg yolk, mushrooms, and dried shrimp. Some regions even make both. The fillings often reflect local tastes: Cantonese zongzi are rich and indulgent, while Jiangnan styles are more delicate. No matter the filling, zongzi are a labor of love — families often gather to wrap them together in the days before the festival.",
        "Realgar wine (xionghuangjiu) is a traditional beverage associated with the festival, though its consumption has declined significantly due to health concerns about realgar (a toxic arsenic compound). Today, many families simply sprinkle a bit of realgar wine on children's foreheads or throughout the house as a symbolic protective gesture rather than drinking it. A safer modern alternative is to enjoy a glass of huangjiu (yellow wine) or simply toast with tea while still honoring the tradition.",
      ],
      dosAndDonts: {
        do: [
          "Attend a dragon boat race if you can — it is the heart of the festival and a thrilling cultural experience. Arrive early for a good viewing spot.",
          "Try different regional styles of zongzi. Sweet and savory varieties are both delicious, and sampling both gives you a fuller appreciation of the festival's culinary diversity.",
          "Learn the story of Qu Yuan before the festival. Understanding the history makes every tradition — from the boat races to the zongzi — far more meaningful.",
          "Wear red or bright colors during the festival. Red symbolizes good luck and celebration, fitting for this energetic holiday.",
          "Give small gifts to friends and family when visiting, especially traditional festival foods or decorative sachets.",
        ],
        dont: [
          "Do not refuse zongzi if offered by a friend or host — it is a gesture of goodwill and sharing. Even one bite is gracious if you cannot finish a whole one.",
          "Avoid wearing black or white clothing during festivities. In Chinese culture, these colors are traditionally associated with mourning and are considered inappropriate for joyful occasions.",
          "Do not say 'Happy Duanwu Jie' (端午节快乐) as casually as you might say 'Happy New Year.' The festival has somber origins — it commemorates a death. Some people prefer the greeting 'Duanwu安康' (peace and health for Duanwu) instead.",
          "Do not throw zongzi wrappers on the ground. While eating zongzi is encouraged, littering the leaves after unwrapping them is considered disrespectful, especially during a public festival where streets and waterways are meant to be kept clean.",
        ],
      },
      giftGuide: [
        "Zongzi gift boxes are the quintessential Duanwu present. Many bakeries and restaurants sell beautifully packaged assortments with both sweet and savory varieties. A well-chosen box shows thoughtfulness and knowledge of the festival. For a premium option, look for gift sets from famous brands like Wufangzhai or Xinghuacun.",
        "Fragrant sachets (xiangbao) make charming, low-cost gifts. They come in a vast range of designs — from traditional silk pouches with intricate embroidery to modern, minimalist styles. Children especially love receiving them, but adults appreciate them too as decorative items or natural air fresheners.",
        "Health tonics and herbal teas are thoughtful gifts aligned with the festival's original purpose of warding off summer illness. High-quality goji berries, dried jujubes, or gift boxes of premium Chinese tea are all well-received and culturally appropriate.",
        "Dragon boat memorabilia — small model boats, festival-themed art prints, or calligraphy scrolls featuring poems by Qu Yuan — make meaningful gifts for friends who are interested in Chinese culture. These items carry the festival's spirit far beyond the holiday itself.",
      ],
    },
    relatedSlugs: ["chinese-new-year", "mid-autumn-festival", "lantern-festival"],
  },
  {
    slug: "chinese-new-year",
    title: "Chinese New Year",
    chineseName: "春节",
    pinyin: "Chūnjié",
    emoji: "🧧",
    category: "Traditional",
    description: "The biggest celebration in Chinese culture",
    date2026: "January 29, 2026",
    duration: "15 days",
    observedIn: "China, Taiwan, Hong Kong, and Chinese communities worldwide",
    alsoKnownAs: "Spring Festival, Lunar New Year",
    keySymbols: "Red envelopes, Firecrackers, Lanterns, Couplets",
    intro:
      "Chinese New Year, also known as the Spring Festival, is the most important and grandest celebration in Chinese culture, marking the beginning of the lunar new year.",
    sections: {
      overview: [
        "Chinese New Year, or Chunje, is a 15-day festival that begins with the new moon and ends with the full moon. Its origins trace back over 3,000 years to the Shang Dynasty, when people held ceremonies to honor ancestors and gods at the turn of the year.",
        "The festival is deeply tied to the legend of Nian, a mythical beast that would emerge on New Year's Eve to terrorize villages. People discovered that Nian feared loud noises, bright lights, and the color red — hence the traditions of fireworks, lanterns, and red decorations that define the holiday.",
      ],
      traditions: [
        "The reunion dinner on New Year's Eve is the centerpiece of the holiday. Families travel from far and wide to gather around a table of auspicious foods — whole fish for abundance, dumplings shaped like ancient silver ingots for wealth, and sticky rice cake (niangao) for upward progress in the new year.",
        "Red envelopes (hongbao) containing money are given to children and unmarried adults as blessings for good fortune. The amount should be an even number (odd numbers are associated with funerals), and crisp new bills are preferred.",
      ],
      food: [
        "Dumplings (jiaozi) are the quintessential New Year food in northern China. Shaped like ancient Chinese silver ingots, they symbolize wealth and prosperity. Families often hide a coin in one dumpling — whoever finds it is said to have extra good luck.",
        "Niangao (sticky rice cake) is popular in southern China. Its name sounds like 'year higher,' symbolizing growth and advancement. It's sliced and pan-fried, sometimes with red bean paste.",
      ],
      dosAndDonts: {
        do: [
          "Wear red clothing — it symbolizes luck and joy.",
          "Give red envelopes with crisp, new bills in even amounts.",
          "Say auspicious greetings like 'Xin nian kuai le' or 'Gong xi fa cai.'",
          "Clean your house thoroughly before New Year's Eve to sweep away bad luck.",
        ],
        dont: [
          "Do not sweep or take out trash on New Year's Day — you might sweep away good fortune.",
          "Avoid using sharp objects like scissors or knives, as they are said to 'cut off' luck.",
          "Do not wash or cut your hair on New Year's Day — the word for hair (fa) sounds like the word for wealth.",
          "Avoid breaking dishes or ceramics — it's considered an omen of broken relationships.",
        ],
      },
      giftGuide: [
        "Red envelopes with money are the most traditional gift, especially for children.",
        "Premium tea, dried fruit, and health tonics make excellent host gifts.",
        "Fruit baskets — especially with oranges and tangerines (symbolizing luck) — are safe and appreciated.",
      ],
    },
    relatedSlugs: ["lantern-festival", "dragon-boat-festival", "mid-autumn-festival"],
  },
  {
    slug: "lantern-festival",
    title: "Lantern Festival",
    chineseName: "元宵节",
    pinyin: "Yuánxiāo Jié",
    emoji: "🏮",
    category: "Traditional",
    description: "Glowing lanterns light the night",
    date2026: "February 12, 2026",
    duration: "1 day",
    observedIn: "China, Taiwan, Hong Kong, and diaspora communities",
    alsoKnownAs: "Yuanxiao Festival, Shangyuan Festival",
    keySymbols: "Lanterns, Tangyuan, Riddles",
    intro:
      "The Lantern Festival marks the final day of the Chinese New Year celebrations, a night when the full moon shines bright and thousands of lanterns illuminate the sky.",
    sections: {
      overview: [
        "The Lantern Festival falls on the 15th day of the first lunar month, the first full moon of the new year. Its origins date back to the Han Dynasty over 2,000 years ago, when Emperor Mingdi, a Buddhist, ordered that lanterns be lit in palaces and temples to honor the Buddha.",
        "Today, the festival blends Buddhist origins with folk traditions. It is both a celebration of unity (the full moon symbolizes family reunion) and a romantic holiday — in ancient China, it was one of the few nights young women could go out freely to admire the lanterns.",
      ],
      traditions: [
        "Lantern displays transform parks, streets, and waterways into seas of light. Traditional lanterns are made of silk or paper in shapes of animals, flowers, and mythical figures. Modern displays incorporate LED lights and elaborate mechanical designs.",
        "Solving lantern riddles (cai dengmi) is a beloved intellectual pastime. Riddles are written on slips of paper attached to lanterns, and visitors who solve them win small prizes. The riddles range from simple wordplay to complex literary puzzles.",
      ],
      food: [
        "Tangyuan — sweet glutinous rice balls served in warm syrup — are the essential food of the Lantern Festival. Their round shape symbolizes family togetherness and completeness.",
        "Common fillings include black sesame paste, peanut butter, red bean paste, and sweet osmanthus. In northern China, a similar dish called yuanxiao is made by rolling the filling in dry rice flour, giving it a slightly different texture.",
      ],
      dosAndDonts: {
        do: [
          "Attend a lantern display or parade if one is nearby.",
          "Try solving lantern riddles — it's a fun and brain-teasing tradition.",
          "Eat tangyuan with family to symbolize togetherness.",
          "Light and release a floating lantern (where permitted).",
        ],
        dont: [
          "Do not stay home alone — the Lantern Festival is meant to be enjoyed in the company of others.",
          "Avoid wearing dark or somber clothing to evening events.",
          "Do not refuse a tangyuan offering — it's a gesture of friendship.",
          "Be mindful of fire safety around paper lanterns and candles.",
        ],
      },
      giftGuide: [
        "A small decorative lantern makes a charming and thematic gift.",
        "Boxes of premium tangyuan are thoughtful for friends or hosts.",
        "Hand-painted lantern ornaments are beautiful keepsakes.",
      ],
    },
    relatedSlugs: ["chinese-new-year", "mid-autumn-festival", "qixi-festival"],
  },
  {
    slug: "qingming-festival",
    title: "Qingming Festival",
    chineseName: "清明节",
    pinyin: "Qīngmíng Jié",
    emoji: "🌿",
    category: "Traditional",
    description: "Honoring ancestors with respect",
    date2026: "April 4, 2026",
    duration: "1 day (3-day public holiday)",
    observedIn: "China, Taiwan, Hong Kong, and diaspora communities",
    alsoKnownAs: "Tomb Sweeping Day, Clear Bright Festival",
    keySymbols: "Tomb sweeping, Green rice balls, Qingming scrolls",
    intro:
      "Qingming Festival is a day of remembrance and renewal — a time when Chinese families honor their ancestors by tending to graves while also celebrating the arrival of spring.",
    sections: {
      overview: [
        "Qingming, meaning 'clear and bright,' is both a solar term and a festival. As a solar term, it marks the start of spring plowing. As a festival, it has been observed for over 2,500 years, originating from Cold Food Day (Hanshi Jie), a day when no fires were lit and only cold food was eaten.",
        "The festival's most famous literary connection is Du Mu's Tang Dynasty poem Qingming, which captures the melancholic yet hopeful atmosphere of the day: 'A drizzling rain falls like tears on the Mourning Day; The mourner's heart is going to break on his way.'",
      ],
      traditions: [
        "Tomb sweeping (shangfen) is the solemn heart of the festival. Families visit ancestral graves to clean away weeds, burn incense and paper offerings (joss paper), and present food and tea to the spirits of the deceased. It is both a duty and an act of love.",
        "Flying kites is a joyful spring tradition during Qingming. Unlike everyday kite flying, people sometimes cut the strings to let the kite drift away — a symbolic way of sending away bad luck and illness.",
      ],
      food: [
        "Qingtuan — bright green glutinous rice balls — are the iconic Qingming food. They are colored with mugwort or barley grass juice and filled with sweet red bean paste. The green color represents spring and renewal.",
        "Cold dishes are also traditional, a nod to the festival's origin as Cold Food Day. Popular options include cold noodles, spring rolls, and various cold vegetable salads.",
      ],
      dosAndDonts: {
        do: [
          "Participate in tomb sweeping with your family if invited — it is a profound cultural experience.",
          "Dress in subdued, respectful colors. Qingming is a somber occasion.",
          "Bring flowers or incense to honor ancestors at a grave site.",
          "Take a spring walk afterward to appreciate nature's renewal.",
        ],
        dont: [
          "Avoid loud celebrations or brightly colored clothing — the mood is respectful and reflective.",
          "Do not take photographs at grave sites unless explicitly welcomed by the family.",
          "Do not touch offerings placed at graves — they are meant for the ancestors.",
          "Never step on or over graves — it is deeply disrespectful.",
        ],
      },
      giftGuide: [
        "Flowers, especially chrysanthemums (white or yellow), are the most appropriate and common Qingming offering.",
        "Incense and joss paper packs are practical gifts for families preparing for tomb sweeping.",
        "Green tea from spring's first harvest makes a thoughtful, seasonal gift.",
      ],
    },
    relatedSlugs: ["dragon-boat-festival", "mid-autumn-festival", "chinese-new-year"],
  },
  {
    slug: "qixi-festival",
    title: "Qixi Festival",
    chineseName: "七夕节",
    pinyin: "Qīxī Jié",
    emoji: "💞",
    category: "Folk",
    description: "China's romantic Valentine's Day",
    date2026: "August 22, 2026",
    duration: "1 day",
    observedIn: "China, Taiwan, and Chinese communities worldwide",
    alsoKnownAs: "Double Seventh Festival, Qiqiao Festival, Chinese Valentine's Day",
    keySymbols: "Magpies, Weaving loom, Needles and thread, Stars",
    intro:
      "The Qixi Festival, celebrated on the 7th day of the 7th lunar month, is China's most romantic holiday — a night of star-crossed love, ancient poetry, and wishes made under the summer sky.",
    sections: {
      overview: [
        "Qixi originates from the beloved folk tale of Zhinu the weaver girl (a star in the Lyra constellation) and Niulang the cowherd (a star in Aquila). According to legend, they fell in love and married, but Zhinu's mother, the Goddess of Heaven, separated them by creating the Milky Way — a river of stars between them.",
        "Once a year, on the 7th night of the 7th lunar month, magpies form a bridge across the Milky Way so the lovers can reunite. It is said that if you look up at the sky on Qixi night, you might see the magpie bridge and hear the lovers' whispers.",
      ],
      traditions: [
        "Girls traditionally prayed to Zhinu for skill in needlework — Qixi was originally a festival for women to demonstrate their sewing talents. Young women would thread needles by moonlight, competing to see who could thread the most needles, proving their dexterity and patience.",
        "In modern China, Qixi has been rebranded as Chinese Valentine's Day, with couples exchanging gifts, going on dates, and celebrating romance much like in the West. However, the traditional atmosphere is more subtle than the commercial frenzy of Western Valentine's Day.",
      ],
      food: [
        "Qiaoguo — cleverness fruits — are the traditional snack of Qixi. These are small, intricately shaped fried pastries made from flour, sugar, and sesame. Their delicate patterns (flowers, fish, butterflies) showcase the skill of the maker.",
        "In some regions, women prepare a special seven-ingredient soup or porridge, symbolizing the seventh day of the seventh month. Fresh fruits, especially melons and peaches, are also popular as seasonal offerings.",
      ],
      dosAndDonts: {
        do: [
          "Spend the evening stargazing with your partner — finding Vega (Zhinu) and Altair (Niulang) is part of the magic.",
          "Write down a wish and tie it to a bamboo branch or tree.",
          "Give a romantic gift: flowers, jewelry, or a handwritten letter.",
          "Visit a temple dedicated to the Weaver Girl if you're in China.",
        ],
        dont: [
          "Do not stay indoors all evening — Qixi is about the night sky and romance under the stars.",
          "Avoid overly flashy or expensive gifts — Qixi is more about heartfelt gestures than spending.",
          "Do not argue or speak harshly — the festival is about harmony and love.",
          "Do not forget to tell someone you love them — it's the whole point of the night.",
        ],
      },
      giftGuide: [
        "Jewelry with star or magpie motifs ties directly into the Qixi legend.",
        "A handwritten love letter or poem is deeply romantic and culturally resonant.",
        "Matching couple items (bracelets, phone cases, clothing) are popular modern Qixi gifts.",
      ],
    },
    relatedSlugs: ["lantern-festival", "mid-autumn-festival", "chinese-new-year"],
  },
  {
    slug: "mid-autumn-festival",
    title: "Mid-Autumn Festival",
    chineseName: "中秋节",
    pinyin: "Zhōngqiū Jié",
    emoji: "🌕",
    category: "Traditional",
    description: "Mooncakes under the full moon",
    date2026: "September 25, 2026",
    duration: "3 days",
    observedIn: "China, Taiwan, Hong Kong, and Chinese communities worldwide",
    alsoKnownAs: "Moon Festival, Mooncake Festival, Zhongqiu Festival",
    keySymbols: "Mooncakes, Full moon, Osmanthus flowers, Rabbit",
    intro:
      "The Mid-Autumn Festival is a celebration of reunion and gratitude, held under the brightest full moon of the year. Families gather to share mooncakes, sip tea, and gaze at the moon.",
    sections: {
      overview: [
        "The Mid-Autumn Festival has been celebrated for over 3,000 years, with its origins in moon worship during the Shang Dynasty. It became a fixed festival during the Tang Dynasty and remains one of China's most beloved holidays.",
        "The festival is inseparable from the legend of Chang'e, the Moon Goddess. According to the story, Chang'e drank an elixir of immortality and floated to the moon, where she lives with the jade rabbit who pounds medicine beneath a cassia tree.",
      ],
      traditions: [
        "Moon gazing is the heart of the festival. Families gather outdoors, often in parks or on balconies, to admire the full moon while sharing mooncakes and tea. The roundness of the moon symbolizes family reunion and wholeness.",
        "Lantern displays are popular, especially for children. Unlike the Lantern Festival, Mid-Autumn lanterns are often carried in parades or floated on rivers. In southern China and Hong Kong, spectacular fire dragon dances are performed.",
      ],
      food: [
        "Mooncakes are the undisputed star of the festival. These dense, round pastries have a thin crust and a rich filling — traditionally lotus seed paste with salted duck egg yolk (the yolk represents the full moon). Modern variations include ice cream, chocolate, and fruit flavors.",
        "Pomelos are a seasonal fruit associated with the festival. The Chinese word for pomelo (youzi) sounds like 'to have' and 'to protect,' and its round shape echoes the full moon. Grapefruit and persimmons are also enjoyed.",
      ],
      dosAndDonts: {
        do: [
          "Share mooncakes with family, friends, and colleagues — it is the essential gesture of the festival.",
          "Gaze at the moon and appreciate its beauty — it's a moment of calm and connection.",
          "Send mooncake gift boxes to business associates and friends before the festival.",
          "Make a wish under the full moon — tradition says it has special power on this night.",
        ],
        dont: [
          "Do not eat an entire mooncake alone — they are dense and rich. Traditionally they are cut into quarters and shared.",
          "Avoid pointing at the moon — folk belief says it is disrespectful to the Moon Goddess.",
          "Do not give mooncakes after the festival date — they are meant to be enjoyed before or on the night of the full moon.",
          "Avoid giving single mooncakes in odd numbers — gifts in pairs are more auspicious.",
        ],
      },
      giftGuide: [
        "A beautifully boxed set of mooncakes with assorted flavors is the gold standard of Mid-Autumn gifting.",
        "Premium Chinese tea (oolong, jasmine, or pu'er) pairs perfectly with mooncakes and is a thoughtful accompaniment.",
        "Osmanthus syrup or osmanthus wine is a seasonal delicacy that captures the festival's fragrant spirit.",
      ],
    },
    relatedSlugs: ["chinese-new-year", "lantern-festival", "dragon-boat-festival"],
  },
];

export const sections: Section[] = [
  { id: "overview", title: "Overview & History" },
  { id: "traditions", title: "Traditions & Customs" },
  { id: "food", title: "Traditional Food" },
  { id: "dos-and-donts", title: "Do's and Don'ts" },
  { id: "gift-guide", title: "Gift Guide" },
];

export function getFestival(slug: string): Festival | undefined {
  return festivals.find((f) => f.slug === slug);
}

export function getRelatedFestivals(slugs: string[]): Festival[] {
  return festivals.filter((f) => slugs.includes(f.slug));
}

export function getAllFestivals(): Festival[] {
  return festivals;
}

export function getCategories(): string[] {
  return Array.from(new Set(festivals.map((f) => f.category)));
}
