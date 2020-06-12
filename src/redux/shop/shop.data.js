const SHOP_DATA = {
  guitars: {
    id: 1,
    title: "Guitars",
    routeName: "guitars",
    items: [
      {
        id: 1,
        name: "Fender Custom Shop '60s Relic Stratocaster",
        imageUrl:
          "https://media.musiciansfriend.com/is/image/MMGS7/Masterbuilt-Dennis-Galuszka-60s-Relic-Stratocaster-Brazilian-Rosewood-Neck-Electric-Guitar-Sea-Foam-Green-over-Aztec-Gold/L46988000007000-00-1600x1600.jpg",
        price: 7640,
      },
      {
        id: 2,
        name: "Gibson Historic '58 Les Paul Washed Cherry Sunburst",
        imageUrl:
          "https://media.musiciansfriend.com/is/image/MMGS7/Historic-58-Les-Paul-Standard-VOS-Electric-Guitar-Vintage-Cherry-Sunburst/L20744000003000-00-500x500.jpg",
        price: 4999,
      },
      {
        id: 3,
        name: "Fender American QMT Telecaster Pale Moon",
        imageUrl:
          "https://media.guitarcenter.com/is/image/MMGS7/American-QMT-Stratocaster-HSS-Pale-Moon-Ebony-Fingerboard-Limited-Edition-Electric-Guitar-Transparent-Black/L59798000001000-00-500x500.jpg",
        price: 2499,
      },
      {
        id: 4,
        name: "Ibanez AS200 Prestige Artstar Vintage",
        imageUrl:
          "https://media.musiciansfriend.com/is/image/MMGS7/AS200-Prestige-Artstar-Series-Semi-Hollowbody-Electric-Guitar-Vintage-Yellow-Sunburst/J05409000001000-00-1600x1600.jpg",
        price: 2399,
      },
      {
        id: 5,
        name: "Gretsch Custom Shop G6136T-CSTRR Magpie ",
        imageUrl:
          "https://media.musiciansfriend.com/is/image/MMGS7/Custom-Shop-G6136T-CSTRR-Rich-Robinson-Magpie-Electric-Guitar-with-Bigsby-Ravens-Breast-Blue-Relic/L71457000001000-00-500x500.jpg",
        price: 8749,
      },
      {
        id: 6,
        name: "Fender Custom Shop '63 Heavy Relic Telecaster",
        imageUrl:
          "https://media.musiciansfriend.com/is/image/MMGS7/1963-Heavy-Relic-Telecaster-Custom-Built-Electric-Guitar-Super-Faded-Aged-3-Color-Sunburst-Sparkle/L18759000001000-00-500x500.jpg",
        price: 4150,
      },
      {
        id: 7,
        name: "Guild F-55 Maple Jumbo Acoustic Guitar  Antique Burst",
        imageUrl:
          "https://media.musiciansfriend.com/is/image/MMGS7/F-55E-Maple-Jumbo-Acoustic-Electric-Guitar-Antique-Burst/L48724000002000-00-500x500.jpg",
        price: 3699,
      },
      {
        id: 8,
        name: "Fender American Stratocaster Maple Sienna Sunburst",
        imageUrl:
          "http://media.musiciansfriend.com/is/image/MMGS7/American-Professional-Stratocaster-Maple-Fingerboard-Sienna-Sunburst/J46217000004000-00-500x500.jpg",
        price: 1549,
      },
      {
        id: 9,
        name: "Fender American Ultra Stratocaster Maple Fingerboard",
        imageUrl:
          "https://media.guitarcenter.com/is/image/MMGS7/American-Ultra-Stratocaster-Maple-Fingerboard-Electric-Guitar-Aged-Natural/L69991000003000-00-500x500.jpg",
        price: 1999,
      },
    ],
  },
  basses: {
    id: 2,
    title: "Basses",
    routeName: "basses",
    items: [
      {
        id: 10,
        name: "Fender American Ultra Jazz Bass",
        imageUrl:
          "https://media.guitarcenter.com/is/image/MMGS7/American-Ultra-Jazz-Bass-V-5-String-Maple-Fingerboard-Arctic-Pearl/L69931000003000-00-1200x1200.jpg",
        price: 2099,
      },
      {
        id: 11,
        name: "Ernie Ball Music Man StingRay5 Special",
        imageUrl:
          "https://media.guitarcenter.com/is/image/MMGS7/StingRay5-Special-H-Maple-Fingerboard-Electric-Bass-Burnt-Apple/L20239000003000-00-500x500.jpg",
        price: 2299,
      },
      {
        id: 12,
        name: "Warwick German Pro Series Corvette ",
        imageUrl:
          "https://media.guitarcenter.com/is/image/MMGS7/German-Pro-Series-Corvette-4-String-Electric-Bass-Guitar-Natural-Satin/K36144000001000-00-1200x1200.jpg",
        price: 2099,
      },
      {
        id: 13,
        name: "Markbass Kilimanjaro 5-String Bass Natural",
        imageUrl:
          "https://media.music123.com/is/image/MMGS7/Kilimanjaro-5-Richard-Bona-Signature-5-String-Bass-Natural/L53275000001000-00-750x750.jpg",
        price: 3899,
      },
      {
        id: 14,
        name: "Nike Red High Tops",
        imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
        price: 160,
      },
      {
        id: 15,
        name: "Nike Brown High Tops",
        imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
        price: 160,
      },
      {
        id: 16,
        name: "Air Jordan Limited",
        imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
        price: 190,
      },
      {
        id: 17,
        name: "Timberlands",
        imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
        price: 200,
      },
    ],
  },
  keyboards: {
    id: 3,
    title: "Keyboards",
    routeName: "keyboards",
    items: [
      {
        id: 18,
        name: "Roland JUPITER-X Synthesizer",
        imageUrl:
          "https://www.bhphotovideo.com/images/images2500x2500/Roland_JP_80_JP_80_Jupiter_80_Synthesizer_767433.jpg",
        price: 2499,
      },
      {
        id: 19,
        name: "Yamaha PSR-SX900 61-Key",
        imageUrl:
          "https://media.musiciansfriend.com/is/image/MMGS7/PSR-SX900-61-Key-High-Level-Arranger-Keyboard/L66434000000000-00-500x500.jpg",
        price: 2199,
      },
      {
        id: 20,
        name: "Korg KRONOS LS 88-Key Synthesizer",
        imageUrl:
          "https://www.pmtonline.co.uk/media/catalog/product/cache/1/image/450x450/9df78eab33525d08d6e5fb8d27136e95/4/3/43285-kronos-88ls_top.jpg",
        price: 3699,
      },
      {
        id: 21,
        name: "Nord Stage 3 88 Red",
        imageUrl:
          "https://media.music123.com/is/image/MMGS7/Stage-3-88-Red/J53156000001000-00-750x750.jpg",
        price: 4499,
      },
      {
        id: 22,
        name: "Tan Trench",
        imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
        price: 185,
      },
    ],
  },
  recording: {
    id: 4,
    title: "Recording",
    routeName: "recording",
    items: [
      {
        id: 23,
        name: "Universal Audio Apollo x8p",
        imageUrl:
          "https://www.bhphotovideo.com/images/images1500x1500/universal_audio_apx8p_apollo_x8p_thunderbolt_3_1427352.jpg",
        price: 3299,
      },
      {
        id: 24,
        name: "Apogee Symphony I/O Mk II 16x16",
        imageUrl:
          "https://media.musiciansfriend.com/is/image/MMGS7/Symphony-I-O-MK-II-Thunderbolt-Chassis--Module-Not-Included/J32435000000000-00-1600x1600.jpg",
        price: 4595,
      },
      {
        id: 25,
        name: "Behringer Digital Mixer X32",
        imageUrl: "https://studiospares.s3.amazonaws.com/p/l/382820.jpg",
        price: 2498,
      },
      {
        id: 26,
        name: "Presonus StudioLive 64S 64-Channel Mixer",
        imageUrl:
          "https://media.music123.com/is/image/MMGS7/StudioLive-64S-64-Channel-Mixer-with-43-Mix-Busses-33-Motorized-Faders-and-64x64-USB-Interface/L51826000000000-00-750x750.jpg",
        price: 3999,
      },
      {
        id: 27,
        name: "Striped Sweater",
        imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
        price: 45,
      },
      {
        id: 28,
        name: "Yellow Track Suit",
        imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
        price: 135,
      },
      {
        id: 29,
        name: "White Blouse",
        imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
        price: 20,
      },
    ],
  },
  microphones: {
    id: 5,
    title: "Microphones",
    routeName: "mens",
    items: [
      {
        id: 30,
        name: "Neumann U67 Tube Condenser Mic Reissue ",
        imageUrl:
          "https://www.kmraudio.com/pub/media/catalog/product/cache/fe0021b38343ea882ec5d381a7a2a2ef/n/e/neumann-u67reissue-kmr.jpg",
        price: 6995,
      },
      {
        id: 31,
        name: "Royer R-122 MKIIL-MP Live Matched Pair",
        imageUrl:
          "https://media.music123.com/is/image/MMGS7/R-122-MKIIL-MP-Live-Matched-Pair/J24714000000000-00-750x750.jpg",
        price: 3665,
      },
      {
        id: 32,
        name: "SE Electronics RNT Tube Microphone",
        imageUrl:
          "https://smhttp-ssl-50970.nexcesscdn.net/media/catalog/product/cache/1/image/1500x/9df78eab33525d08d6e5fb8d27136e95/s/e/se-electronics-rupert-neve-designs-rnt_97356_4a.jpg",
        price: 2499,
      },
      {
        id: 33,
        name: "Blue Bottle Mic Locker Nickel",
        imageUrl:
          "https://media.musiciansfriend.com/is/image/MMGS7/BRS1-Bottle-Rocket-Mic-Locker/J24868000000000-00-1600x1600.jpg",
        price: 5999,
      },
      {
        id: 34,
        name: "Jean Long Sleeve",
        imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
        price: 40,
      },
      {
        id: 35,
        name: "Burgundy T-shirt",
        imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
        price: 25,
      },
    ],
  },
};

export default SHOP_DATA;
