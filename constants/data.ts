interface DataProps {
  key: string;
  english: string;
  bhutia: string;
  pronunciation: string;
  audiolink: string;
}

const Data: Array<DataProps> = [
  {
    key: "1",
    english: "Black",
    bhutia: "ནག་ཀོ",
    pronunciation: "nag-ko",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735101040/colors/black_hxpwvt.mp4",
  },
  {
    key: "2",
    english: "Blue",
    bhutia: "སྔོན་པོ།",
    pronunciation: "snon-po",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735101040/colors/blue_t4iroy.mp4",
  },
  {
    key: "3",
    english: "Brown",
    bhutia: "རྒྱ་སྨུག།",
    pronunciation: "gya-mug",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735101038/colors/brown_gmhzdl.mp4",
  },
  {
    key: "4",
    english: "Creamy",
    bhutia: "སྐྱ་སེར།",
    pronunciation: "kya-ser",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735101038/colors/creamy_gwjbul.mp4",
  },
  {
    key: "5",
    english: "Dark",
    bhutia: "ནག་སུག།",
    pronunciation: "nag-sug",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735101036/colors/dark_qe22cu.mp4",
  },
  {
    key: "6",
    english: "Dark Blue",
    bhutia: "མཐིང་ནག།",
    pronunciation: "thin-nag",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735101036/colors/dark_blue_luqcrz.mp4",
  },
  {
    key: "7",
    english: "Green",
    bhutia: "ལྗང་ཁུ། སྔོམ་པོ།",
    pronunciation: "jang-khu / ngom-po",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735101040/colors/green_hsv5hv.mp4",
  },
  {
    key: "8",
    english: "Golden",
    bhutia: "གསེར་སྐྱ།",
    pronunciation: "ser-kya",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735101039/colors/golden_asl80w.mp4",
  },
  {
    key: "9",
    english: "Grey",
    bhutia: "ཐལ་སྐྱ།",
    pronunciation: "thal-kya",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735101036/colors/thal_kya_u1dlxv.mp4",
  },
  {
    key: "10",
    english: "Orange",
    bhutia: "ལི་ཁྲི།/ཚ་ལུམ་སྐྱག/ཚ་ལུམ་ མདོག།",
    pronunciation: "li-tri/tsa-lumkya/tsa-lumdhog",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735101038/colors/orange_obczup.mp4",
  },
  {
    key: "11",
    english: "Pink",
    bhutia: "ཟིང་སྐྱ།/དམར་ལོབ",
    pronunciation: "zin-kya/mar-lop",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735101039/colors/pink_nj6ume.mp4",
  },
  {
    key: "12",
    english: "Purple",
    bhutia: "རྡོ་ལམ་ཀྱག།/དམར་མུག།",
    pronunciation: "mar-muk / dolom kyag",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735101039/colors/purple_vf2g6i.mp4",
  },
  {
    key: "13",
    english: "Red",
    bhutia: "དམར་པོ།",
    pronunciation: "mar-po",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735101037/colors/red_rrimzj.mp4",
  },
  {
    key: "14",
    english: "Silver",
    bhutia: "དངིལ་མདོག།",
    pronunciation: "ngul-dog",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735101036/colors/silver_rlupzo.mp4",
  },
  {
    key: "15",
    english: "White",
    bhutia: "དཀར་པོ།",
    pronunciation: "khar-po",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735101036/colors/white_jd1k9v.mp4",
  },
  {
    key: "16",
    english: "Yellow",
    bhutia: "སེར་པོ།",
    pronunciation: "ser-po",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735101036/colors/yellow_q4ymgr.mp4",
  },
  {
    key: "17",
    english: "Cherry",
    bhutia: "ཁམ་ཀྱིགས་ མེ་ཏོག།",
    pronunciation: "kham-kyig met-tok",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735103105/flowers/cherry_flower_ougtah.mp4",
  },
  {
    key: "18",
    english: "Jasmine",
    bhutia: "བ་སྤུ་ མེ་ཏོག།",
    pronunciation: "ba-pu met-tok",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735103105/flowers/jasmine_s28fou.mp4",
  },
  {
    key: "19",
    english: "Lily",
    bhutia: "སྟག་གཟིག་ མེ་ཏོག།",
    pronunciation: "tag-zig me-tok",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735103104/flowers/lily_z3bfuy.mp4",
  },
  {
    key: "20",
    english: "Lotus",
    bhutia: "པདྨ་ མེ་ཏོག།/མེ་ཏོག་ པདྨ།",
    pronunciation: "pad-ma/ me-tok",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735103105/flowers/lotus_nwgj3x.mp4",
  },
  {
    key: "21",
    english: "Marigold",
    bhutia: "སེར་ཆེན མེ་ཏོག་ ",
    pronunciation: "ser-chen me-tok",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735103105/flowers/marigold_zan2rs.mp4",
  },
  {
    key: "22",
    english: "Rose",
    bhutia: "རྒྱ་སེ་ མེ་ཏོག།",
    pronunciation: "gya-se me-tok",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735103109/flowers/rose_zoi4t4.mp4",
  },
  {
    key: "23",
    english: "Saffron",
    bhutia: "ཁ་ཆེ་ ཤ་སྐམ། མེ་ཏོག/གེ་སར་/གུར་གུམ་",
    pronunciation: "kha-che sha-kam me-tok",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735103109/flowers/saffron_ilucxa.mp4",
  },
  {
    key: "24",
    english: "Sunflower",
    bhutia: "ཉི་མའི་ མེ་ཏོག།",
    pronunciation: "nyi-mai me-tok",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735103110/flowers/sunflower_kv46ub.mp4",
  },
  {
    key: "25",
    english: "Trumpet",
    bhutia: "རག་དུང་ མེ་ཏོག།",
    pronunciation: "ra-dung me-tok",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735103111/flowers/trumpet_flower_vuqrfb.mp4",
  },
  {
    key: "26",
    english: "Water Lily",
    bhutia: "ཀུ་མུད།",
    pronunciation: "ku-mud",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735103112/flowers/water_lily_whnr8o.mp4",
  },
  {
    key: "27",
    english: "Bean",
    bhutia: "ཏིག་བི།",
    pronunciation: "ti-bi",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802352/vegetables/bean_yabmba.mp4",
  },
  {
    key: "28",
    english: "Brinjal",
    bhutia: "རྡོ་ལོམ།",
    pronunciation: "dho-lom",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802351/vegetables/brinjal_ou2i8p.mp4",
  },
  {
    key: "29",
    english: "Cabbage",
    bhutia: "need to rewrite this",
    pronunciation: "dab-tsod",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802351/vegetables/cabbage_u2ca4r.mp4",
  },
  {
    key: "30",
    english: "Carrot",
    bhutia: "ལ་ཕུག་ གསེརབ།",
    pronunciation: "la-phug serb",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802351/vegetables/carrot_gawttm.mp4",
  },
  {
    key: "31",
    english: "Cauliflower",
    bhutia: "མེ་ཏོག་ ཚོདམ།",
    pronunciation: "me-tok tsom",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802350/vegetables/cauliflower_kecoiq.mp4",
  },
  {
    key: "32",
    english: "Chilli",
    bhutia: "ཨ་ཀར།",
    pronunciation: "a-kar",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802350/vegetables/chillie_tpc0zt.mp4",
  },
  {
    key: "33",
    english: "Coriander",
    bhutia: "འུ་ཟི།",
    pronunciation: "hud-zi",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802350/vegetables/coriander_nwvqit.mp4",
  },
  {
    key: "34",
    english: "Cucumber",
    bhutia: "ཀུ་མུད།",
    pronunciation: "ku-mud",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802350/vegetables/cucumbers_dk9vxr.mp4",
  },
  {
    key: "35",
    english: "Lady Finger",
    bhutia: "མཛུབ་ཚོད།",
    pronunciation: "dzub-tsod",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802349/vegetables/dzub-tsod_a9gnsc.mp4",
  },
  {
    key: "36",
    english: "Fern",
    bhutia: "དཀྱིས་ ཚོད།",
    pronunciation: "ke-tsod",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802349/vegetables/fern_wnfep6.mp4",
  },

  {
    key: "37",
    english: "Ginger",
    bhutia: "སྒ།",
    pronunciation: "ga",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802349/vegetables/ginger_rafiwz.mp4",
  },
  {
    key: "38",
    english: "Garlic",
    bhutia: "སྒོག་ཀོ།",
    pronunciation: "ku-mud",
    audiolink: "",
  },
  {
    key: "39",
    english: "Spices",
    bhutia: "སྨན་ སྣ།",
    pronunciation: "men-na",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802348/vegetables/men-na_fpgh2p.mp4",
  },
  {
    key: "40",
    english: "Mushroom",
    bhutia: "ཤ་མོ།",
    pronunciation: "sha-mo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802348/vegetables/mushroom_qgomom.mp4",
  },
  {
    key: "41",
    english: "Mustard",
    bhutia: "གཡུང་དཀར།",
    pronunciation: "yung-kar",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802346/vegetables/mustard_mzfij0.mp4",
  },
  {
    key: "42",
    english: "Nettle",
    bhutia: "ཟོ་ཅག།",
    pronunciation: "sho-chag",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802346/vegetables/nettle_iomgmb.mp4",
  },
  {
    key: "43",
    english: "Onion",
    bhutia: "ཨོ་ཙོང་།",
    pronunciation: "o tsong",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802345/vegetables/onion_c1mdge.mp4",
  },
  {
    key: "44",
    english: "Potato",
    bhutia: "སྐྱེའུ། ཨ་ལུས་ ཀེ་བོ།",
    pronunciation: "kyu",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802346/vegetables/potato_p6wdne.mp4",
  },
  {
    key: "45",
    english: "Pumpkin",
    bhutia: "ཡང་གུད།",
    pronunciation: "yang-gud",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802345/vegetables/pumpkin_zvels2.mp4",
  },
  {
    key: "46",
    english: "Radish",
    bhutia: "ལ་ཕུག།",
    pronunciation: "la-phug",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802345/vegetables/radish_jwhvus.mp4",
  },
  {
    key: "47",
    english: "Shoot",
    bhutia: "གདོང།",
    pronunciation: "dhong",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802344/vegetables/shoot_snd9xt.mp4",
  },
  {
    key: "48",
    english: "Soyabean",
    bhutia: "རྡོ་སྲནམ།",
    pronunciation: "dho-sem",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802345/vegetables/soyabean_q8agal.mp4",
  },
  {
    key: "49",
    english: "Spinach",
    bhutia: "གཡུང་ཚོད།",
    pronunciation: "yung-tsod",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802345/vegetables/spinach_en8vww.mp4",
  },
  {
    key: "50",
    english: "Squash",
    bhutia: "ག་དུ།",
    pronunciation: "ga-du",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802345/vegetables/squash_fpb1iy.mp4",
  },
  {
    key: "51",
    english: "Tomato",
    bhutia: "འབེན་རྡ།",
    pronunciation: "band-da",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802344/vegetables/tomato_oqkiy1.mp4",
  },
  {
    key: "52",
    english: "Ben",
    bhutia: "འབེན།",
    pronunciation: "ben",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802408/places/ben_qqylhx.mp4",
  },
  {
    key: "53",
    english: "Chungthang",
    bhutia: "བཙུན་ཐང།",
    pronunciation: "tsun-thang",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802410/places/chungthang_ol1pyv.mp4",
  },
  {
    key: "54",
    english: "Chomgo",
    bhutia: "མཚོ་མགོ།",
    pronunciation: "tso-mgo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802410/places/chomgo_qgjxfu.mp4",
  },
  {
    key: "55",
    english: "Dechenling",
    bhutia: "བདེ་ཆེན་གླིང",
    pronunciation: "dechen ling",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802411/places/dechenling_w4eh6u.mp4",
  },
  {
    key: "56",
    english: "Deorali",
    bhutia: "འདེབས་ར་གླིང་།",
    pronunciation: "deb-ra ling",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802411/places/deorali_haycb5.mp4",
  },
  {
    key: "57",
    english: "Doling",
    bhutia: "རྡོ་གླིང་།",
    pronunciation: "do-ling",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802413/places/doling_adcx5v.mp4",
  },
  {
    key: "58",
    english: "Dzongu",
    bhutia: "རྗོང་མགོ།",
    pronunciation: "dzong-mgo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802414/places/dzongu_n8k40n.mp4",
  },
  {
    key: "59",
    english: "Dikchu",
    bhutia: "སྒྲིག་ཆུ།",
    pronunciation: "sdrig-chu",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802412/places/dikchu_rns5it.mp4",
  },
  {
    key: "60",
    english: "Dolung",
    bhutia: "དོ་ལུང།",
    pronunciation: "do-lung",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802414/places/dolung_rt3rzh.mp4",
  },
  {
    key: "61",
    english: "Enchey",
    bhutia: "དབེན་ཅན།",
    pronunciation: "onen-chen",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802415/places/enchey_pmljsx.mp4",
  },
  {
    key: "62",
    english: "Guru dogmar",
    bhutia: "གུ་རུ་གདོང་དམར།",
    pronunciation: "guru-dong-mar",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802417/places/gurudogmar_xrxn28.mp4",
  },
  {
    key: "63",
    english: "Gangtok",
    bhutia: "སྒང་ཏོག་ ཡང་ན་ སྒང་ཐོག།",
    pronunciation: "gang-tog / gang-thog",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802416/places/gangtok_bos5xt.mp4",
  },
  {
    key: "64",
    english: "Gyalshing",
    bhutia: "རྒྱལ་ཞིང་།",
    pronunciation: "gyal-shing",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802417/places/gyalshing_ldexpw.mp4",
  },
  {
    key: "65",
    english: "Jorethang",
    bhutia: "འབྱོར་ཐང་།",
    pronunciation: "jor-thang",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802418/places/jorethang_tyrocc.mp4",
  },
  {
    key: "66",
    english: "Kewsing",
    bhutia: "གྱོ་ཞིང།",
    pronunciation: "gyo-shing",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802419/places/kewsing_qhpclu.mp4",
  },
  {
    key: "67",
    english: "Khachodpalri",
    bhutia: "མཁའ་སྤྱོད་དཔལ་རི།",
    pronunciation: "kha-chod-palri",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802421/places/khachodpalri_pxpxmd.mp4",
  },
  {
    key: "68",
    english: "Kabi",
    bhutia: "ག་བི།",
    pronunciation: "ga-bhi",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802419/places/kabi_e0hfp2.mp4",
  },
  {
    key: "69",
    english: "Lachen",
    bhutia: "ལ་ཆེན།",
    pronunciation: "la-chen",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802421/places/lachen_l6ijeu.mp4",
  },
  {
    key: "70",
    english: "Lachung",
    bhutia: "ལ་ཆུང་།",
    pronunciation: "la-chung",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802422/places/lachung_xob03f.mp4",
  },
  {
    key: "71",
    english: "Machang",
    bhutia: "མོ་མཚོ།",
    pronunciation: "mo-cho",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802423/places/machang_wvcpok.mp4",
  },
  {
    key: "72",
    english: "Mangan",
    bhutia: "མ་མགོན།",
    pronunciation: "ma-mgon",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802424/places/mangan_ax7kn2.mp4",
  },
  {
    key: "73",
    english: "Martam",
    bhutia: "མར་གཏམ་།",
    pronunciation: "mar-tam",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802424/places/martam_kfzfbu.mp4",
  },
  {
    key: "74",
    english: "Namchi",
    bhutia: "རྣམ་རྩེ་།",
    pronunciation: "nam-tse",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802425/places/namchi_dfxspo.mp4",
  },
  {
    key: "75",
    english: "Nathula",
    bhutia: "སྣ་ཐོས་ལ་།",
    pronunciation: "na-thos la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802426/places/nathula_dsyqir.mp4",
  },
  {
    key: "76",
    english: "Phensang",
    bhutia: "ཕན་བཟང་།",
    pronunciation: "phen-sang",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802428/places/phensang_i5yyvn.mp4",
  },
  {
    key: "77",
    english: "Phodong",
    bhutia: "ཕོ་གདོང་།",
    pronunciation: "pho-dong",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802428/places/pho-dong_fxxou6.mp4",
  },
  {
    key: "78",
    english: "Pakyong",
    bhutia: "དཔའ་སྐྱོངས།",
    pronunciation: "pa-kyong",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802427/places/pakyong_hfudnf.mp4",
  },
  {
    key: "79",
    english: "Pelling",
    bhutia: "པད་གླིང་།",
    pronunciation: "ped-ling",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802427/places/pelling_cg8ere.mp4",
  },
  {
    key: "80",
    english: "Rinchengpong",
    bhutia: "རིན་ཆེན་སྤུངས་།",
    pronunciation: "rin-chen-pong",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802431/places/rin-chen-pong_awqxz2.mp4",
  },
  {
    key: "81",
    english: "Ravong",
    bhutia: "ར་སྦོང།",
    pronunciation: "ravong",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802430/places/ravong_g016tz.mp4",
  },
  {
    key: "82",
    english: "Rigon",
    bhutia: "རི་མགོན་།",
    pronunciation: "ri-mgon",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802431/places/rigon_isus0v.mp4",
  },
  {
    key: "83",
    english: "Rangpo",
    bhutia: "རིང་ཕུ་།",
    pronunciation: "rong-phu",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802429/places/rangpo_lnyzfw.mp4",
  },
  {
    key: "84",
    english: "Singtam",
    bhutia: "ཤིང་གཏམ་།",
    pronunciation: "shing-tam",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802434/places/singtham_evwgqa.mp4",
  },
  {
    key: "85",
    english: "Sangmo",
    bhutia: "བསང་མོ་།",
    pronunciation: "sang-mo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802433/places/sangmo_p1ngb2.mp4",
  },
  {
    key: "86",
    english: "Sang",
    bhutia: "བསང་།",
    pronunciation: "sang",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802432/places/sang_dxrnyy.mp4",
  },
  {
    key: "87",
    english: "Soreng",
    bhutia: "ཟར་ཡོང་།/ཟོ་རེང།",
    pronunciation: "zhar-yong",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802435/places/soreng_ajmekr.mp4",
  },
  {
    key: "88",
    english: "Sichey",
    bhutia: "ཟོ་ཅག་སྒང་།",
    pronunciation: "sochag-gang",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802433/places/sichey_c8grqh.mp4",
  },
  {
    key: "89",
    english: "Tashiding",
    bhutia: "བཀྲ་ཤིས་སྡིངས་།",
    pronunciation: "tashi-ding",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802437/places/tashiding_r2uuqv.mp4",
  },
  {
    key: "90",
    english: "Tadong",
    bhutia: "རྟ་གདོང་།",
    pronunciation: "ta-dong",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802435/places/tadong_b2phnk.mp4",
  },
  {
    key: "91",
    english: "Tathangchen",
    bhutia: "རྟ་ཐང་ཅན་།",
    pronunciation: "ta-thang chen",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802438/places/tathangchen_yazpvd.mp4",
  },
  {
    key: "92",
    english: "Tsuglagkhang",
    bhutia: "གཙུག་ལག་ཁང་།",
    pronunciation: "tsug-lag khang",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802439/places/tsuglagkhang_nwdlws.mp4",
  },
  {
    key: "93",
    english: "Tarku",
    bhutia: "དར་ཁུ་།",
    pronunciation: "dar-khu",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802436/places/tarku_cep7mv.mp4",
  },
  {
    key: "94",
    english: "Yangang",
    bhutia: "གཡང་སྒང་།",
    pronunciation: "yang-gang",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802439/places/yangang_xuygyu.mp4",
  },
  {
    key: "95",
    english: "Yuksam",
    bhutia: "ཡུག་བསམ་།",
    pronunciation: "yug-sam",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802440/places/yuksam_kqspwo.mp4",
  },
  {
    key: "96",
    english: "Amulet",
    bhutia: "གའུ།",
    pronunciation: "gau",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891465/cultural%20attire/amulet_be220i.mp4",
  },
  {
    key: "97",
    english: "Bhutia woman dress",
    bhutia: "མོ་རྒྱན/དཀར་དན།/མོ་གོས།",
    pronunciation: "mo-gyen/karden/mo-kho",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891467/cultural%20attire/bhutia_woman_dress_wavp2s.mp4",
  },
  {
    key: "98",
    english: "Bhutia Traditional Apron Used By Woman",
    bhutia: "པང་གདན།",
    pronunciation: "pangden",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891466/cultural%20attire/bhutia_traditional_apron_used_by_woman_tt9neb.mp4",
  },
  {
    key: "99",
    english: "Bhutia Male Dress",
    bhutia: "ཐ་ར།/ཕོ་གོས།",
    pronunciation: "thara/pho-gu",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891465/cultural%20attire/bhutia_male_dress_rajrmz.mp4",
  },
  {
    key: "100",
    english: "Bhutia Male Hat",
    bhutia: "ཐོ་རིལ་ ཞྭ་མོ།སྤོབ་རི་ ཞྭ་མོ།",
    pronunciation: "thuri shampo / popri shamo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891466/cultural%20attire/bhutia_male_hat_cyyyb9.mp4",
  },
  {
    key: "101",
    english: "Bhutia Female Hat",
    bhutia: "ཟི་ལིང་ ཞ་མོ/ཚེ་རིང་ ཀུན་དགའ།",
    pronunciation: "zi-ling shamo / kunga shamo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891465/cultural%20attire/bhutia_female_hat_smpkpe.mp4",
  },
  {
    key: "102",
    english: "Bhutia Traditional Dress",
    bhutia: "གོས།",
    pronunciation: "gkos",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891466/cultural%20attire/bhutia_traditional_dress_ghfyet.mp4",
  },
  {
    key: "103",
    english: "Female Scarf used during marriages",
    bhutia: "ཁ་ཊི།",
    pronunciation: "khati",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891468/cultural%20attire/female_scarf_used_during_marraiges_n3e7zu.mp4",
  },
  {
    key: "104",
    english: "Male ceremonial scarf",
    bhutia: "ཁ་མ།",
    pronunciation: "khama",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891469/cultural%20attire/male_ceremonial_scarf_eq6c6d.mp4",
  },
  {
    key: "105",
    english: "Pyjama / Pant",
    bhutia: "རྒྱ་དོར།",
    pronunciation: "gyador",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891470/cultural%20attire/pyjama_or_pant_c7gzyl.mp4",
  },
  {
    key: "106",
    english: "Pearl Garland",
    bhutia: "མུ་ཏིག་ འཕྱེ༹ང་བུ།",
    pronunciation: "mutik pheng-bu",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891469/cultural%20attire/pearl_garland_m0egtx.mp4",
  },
  {
    key: "107",
    english: "Red Coral / Coral ",
    bhutia: "བྱུ༹་རུ།",
    pronunciation: "byu-ru",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891470/cultural%20attire/red_coral_or_coral_lso9rx.mp4",
  },
  {
    key: "108",
    english: "Shirt",
    bhutia: "སྟོད་གོས།",
    pronunciation: "te-go",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891472/cultural%20attire/shirt_jhrso3.mp4",
  },
  {
    key: "109",
    english: "Shoes",
    bhutia: "ཞབས་ལྷམ།",
    pronunciation: "shyab lham/sob-lham",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891472/cultural%20attire/shoes_jvtbl3.mp4",
  },
  {
    key: "110",
    english: "White cotton jeans",
    bhutia: "གྱ་དོ",
    pronunciation: "gya-doh/mo-kyet",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891473/cultural%20attire/white_cotton_jeans_dnferc.mp4",
  },
  {
    key: "111",
    english: "Bhutia new year or harvest festival of the sikkimese bhutias",
    bhutia: "ལོ་སྲུང།",
    pronunciation: "losoong",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735972676/festivals/bhutia_or_lhopos_new_year_or_harvest_festival_of_the_Sikkimesebhutias_yt3bvn.mp4",
  },
  {
    key: "112",
    english: "Great Miraculous Prayer Festival",
    bhutia: "ཆོ་འཕྲུལ་ དུས་ཆེན།",
    pronunciation: "cho trul duechen",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735972677/festivals/great_miraculous_prayer_festival_zzrapu.mp4",
  },
  {
    key: "113",
    english: "General Healing Ceremony",
    bhutia: "སྤྱི་རིམ།",
    pronunciation: "chi-rim",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735972677/festivals/general_healing_ceremony_fpsjpv.mp4",
  },
  {
    key: "114",
    english: "Guru Drakmar Ceremony",
    bhutia: "གུ་རུ་ བྲག་དམར།",
    pronunciation: "guru drak-mar",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735972677/festivals/guru_drakmar_ceremony_jx5bja.mp4",
  },
  {
    key: "115",
    english:
      "Month of Vaisakha. A triple blessed occassion of birth, enlightenment and pari nirvana of buddha shakyamuni",
    bhutia: "ས་ག་ཟླ་བོ།",
    pronunciation: "sa-ga do-wo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736136309/festivals/month_of_vaisakha_a_triple_blessed_occasion_of_birth_enlightenment_and_pari_nirvana_of_buddha_shakyamuni_eykntk.mp4",
  },
  {
    key: "116",
    english: "Offering of the 8th Lunar Date or Taras Day",
    bhutia: "ཚེ་བརྒྱད།",
    pronunciation: "tse-gyed",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735972677/festivals/offering_of_the_8th_lunar_date_or_taras_day_jwaluh.mp4",
  },
  {
    key: "117",
    english: "Offering of the tenth lunar date or guru Rinpoche's birthday",
    bhutia: "ཚེས་བཅུ།",
    pronunciation: "tse-chu",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735972678/festivals/offering_of_the_tenth_lunar_date_or_guru_rinpoches_birthday_ehtapt.mp4",
  },

  {
    key: "118",
    english:
      "Offering of the 15th Lunar Date or Green Tara's and Medicine Buddha's Day  ",
    bhutia: "ཚེས་པ་བཅུ་ལྔ།",
    pronunciation: "tsepa cho nga",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735972679/festivals/offerings_of_the_15th_lunar_date_or_green_taras_and_medicine_buddhas_day_pbxrt0.mp4",
  },
  {
    key: "119",
    english: "Offering of the 25th Lunar Date or Dakini's Day",
    bhutia: "ཉེར་ལྔ།",
    pronunciation: "nyer-nga",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735972677/festivals/offering_of_25th_lunar_date_or_dakinis_day_goxrqb.mp4",
  },
  {
    key: "120",
    english: "Offering of 29th Lunar Date",
    bhutia: "ཉེར་དགུ།",
    pronunciation: "nyer-ga",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735972677/festivals/offering_of_29th_lunar_date_ixuwwl.mp4",
  },
  {
    key: "121",
    english: "Offering of the 30th Lunar Date or Buddha Shakyamuni's Day",
    bhutia: "གནམ་གང།",
    pronunciation: "nyer-gu",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735972677/festivals/offering_of_30th_lunar_date_or_buddh_shakyamunis_day_zm2edo.mp4",
  },

  {
    key: "122",
    english: "Tibetan New Year",
    bhutia: "ལོ་གསར།",
    pronunciation: "losar",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735972681/festivals/Tibetan_new_year_cn7qen.mp4",
  },
  {
    key: "123",
    english:
      "The fourth of the sixth month on which Lord Buddha delivered his first sermon at Sarnath",
    bhutia: "དྲུག་པོ་ཚེས་ བཞི། ཆོས་འཁོར་ དུས་ཆེན།",
    pronunciation: "drugpa tsezhi",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735972681/festivals/the_fourth_of_the_sixth_month_on_which_lord_buddha_delivered_his_first_sermon_at_sarnath_kg5zpl.mp4",
  },
  {
    key: "124",
    english: "The Buddha's Descent from heaven",
    bhutia: "ལྷ་འབབས་ དུས་ཆེན།",
    pronunciation: "lha-bab duechen",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735972681/festivals/the_buddhas_descent_from_heaven_yqu81v.mp4",
  },
  {
    key: "125",
    english: "Worship of the witness deities",
    bhutia: "དཔང་ལྷ་གསོལ།",
    pronunciation: "khang-chen dzod-nga",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735972681/festivals/worship_of_the_witness_deities_ekxcvc.mp4",
  },
  {
    key: "126",
    english: "Apple",
    bhutia: "གླི/ཀུ་ཤུ།",
    pronunciation: "li/kushu",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891931/fruits/apple_szlrld.mp4",
  },
  {
    key: "127",
    english: "Apricot",
    bhutia: "མངའ་རིས་ཁམ་བུ།།",
    pronunciation: "nga-ri kham-bu",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891931/fruits/apricot_uwpmww.mp4",
  },
  {
    key: "128",
    english: "Avocado",
    bhutia: "སྤོམ་སི།",
    pronunciation: "phom-si",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891932/fruits/avocado_fvha2z.mp4",
  },
  {
    key: "129",
    english: "Banana",
    bhutia: "སྐྱེད་སྡོང།",
    pronunciation: "key-dhong",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891931/fruits/banana_jhbh53.mp4",
  },
  {
    key: "130",
    english: "Balsam Pear",
    bhutia: "ཁག་ཏིག།",
    pronunciation: "khag-tig",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802352/vegetables/balsam_pear_zgn5kp.mp4",
  },
  {
    key: "131",
    english: "Coconut",
    bhutia: "ཀོ་ཀོ་འཇམ།",
    pronunciation: "ko-ko jam",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891932/fruits/coconut_ysu5qo.mp4",
  },
  {
    key: "132",
    english: "Local Cherry",
    bhutia: "ཁམ་སྐྱིད་ རྡོག་མ།",
    pronunciation: "kham-ki dhog-ma",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891939/fruits/local_cherry_bzz4za.mp4",
  },
  {
    key: "133",
    english: "Fig",
    bhutia: "ཀས་ལྡོང་ རྡོག་མ།",
    pronunciation: "kae-dhang dhok-ma",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891933/fruits/fig_rwzgmb.mp4",
  },
  {
    key: "134",
    english: "Guava",
    bhutia: "བལ་སའི་/ཨམ་སྦ།",
    pronunciation: "/be-si/bheb-sa / bal-si / am-ba",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891935/fruits/guava_rxaoel.mp4",
  },
  {
    key: "135",
    english: "Grapes",
    bhutia: "རྒུན་འབྲུམ།",
    pronunciation: "gyun-drumm",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891934/fruits/grapes_jdxlyy.mp4",
  },
  {
    key: "136",
    english: "Groundnut",
    bhutia: "སོ་སྐྱེས།",
    pronunciation: "so-kay",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891934/fruits/groundnut_and_chestnut_kkdd2j.mp4",
  },
  {
    key: "137",
    english: "Chesnut",
    bhutia: "སོ་སྐྱེས།།",
    pronunciation: "so-kay",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891934/fruits/groundnut_and_chestnut_kkdd2j.mp4",
  },
  {
    key: "138",
    english: "Haw",
    bhutia: "སྐྱུ་རུ་ར།",
    pronunciation: "kyu-ru-ra",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891936/fruits/haw_npkx3s.mp4",
  },
  {
    key: "139",
    english: "Jackfruit",
    bhutia: "མར་ཤེ།",
    pronunciation: "mar-she",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891937/fruits/jackfruit_dvovwk.mp4",
  },
  {
    key: "140",
    english: "Lime",
    bhutia: "སྐྱུར་འབྲས།",
    pronunciation: "kyur-drae",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891938/fruits/lime_fa6caz.mp4",
  },
  {
    key: "141",
    english: "Lemon",
    bhutia: "འབིས་སི།",
    pronunciation: "bis-si",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891938/fruits/lemon_ficirn.mp4",
  },
  {
    key: "142",
    english: "Mango",
    bhutia: "ཨམ་བི།",
    pronunciation: "amm-bhi",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891939/fruits/mango_xyrm3w.mp4",
  },
  {
    key: "143",
    english: "Orange",
    bhutia: "ཚ་ལུམ།",
    pronunciation: "tsa-lhum",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891940/fruits/orangefruit_w5jbnb.mp4",
  },
  {
    key: "144",
    english: "Pomegranate",
    bhutia: "སེའུ་འབྲས།",
    pronunciation: "sewu-drae",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891942/fruits/pomegrante_w7ycqb.mp4",
  },
  {
    key: "145",
    english: "Peach",
    bhutia: "ཁམ་བུ།",
    pronunciation: "kham-bu",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891940/fruits/peach_ki3dwt.mp4",
  },
  {
    key: "146",
    english: "Pear",
    bhutia: "ལི།",
    pronunciation: "li",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891941/fruits/pear_yogfsx.mp4",
  },
  {
    key: "147",
    english: "Pineapple",
    bhutia: "བྷར།",
    pronunciation: "bhar",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891941/fruits/pineapple_mvra5u.mp4",
  },
  {
    key: "148",
    english: "Rasberry",
    bhutia: "ཚེར་ལུམ།",
    pronunciation: "tser-lum",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891943/fruits/rasberry_qbmsln.mp4",
  },
  {
    key: "149",
    english: "Strawberry",
    bhutia: "དམར་ལུམ།",
    pronunciation: "marlum",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891943/fruits/strawberry_j2uurb.mp4",
  },
  {
    key: "150",
    english: "Sugarcane",
    bhutia: "གུར་ཤིང་།",
    pronunciation: "gur-shing",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891944/fruits/sugarcane_ywkkz6.mp4",
  },
  {
    key: "151",
    english: "Walnut",
    bhutia: "སྟར་ཁ།",
    pronunciation: "thar-ka",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891944/fruits/walnut_wf2zhn.mp4",
  },
  {
    key: "152",
    english: "Watermelon",
    bhutia: "བསིལ་འབྲས།",
    pronunciation: "sil-drae",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891945/fruits/watermelon_ft6y9h.mp4",
  },

  {
    key: "166",
    english: "January",
    bhutia: "ཟླ་བོ་ དང་པོ།/མཆུ་ཟླ་བོ་།",
    pronunciation: "dha-o dhang-po / chu-daw",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802892/months/january_rvpoyk.mp4",
  },
  {
    key: "167",
    english: "February",
    bhutia: "ཟླ་བོ་ གཉིས་པོ། /དབོ་ཟླ་བོ་། ",
    pronunciation: "dha-o nyi-po/va-daw",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802891/months/feburary_u6gifk.mp4",
  },
  {
    key: "168",
    english: "March",
    bhutia: "ཟླ་བོ་ གསུམ་པོ།/ནག་ཟླ་བོ།  ",
    pronunciation: "dha-o sum-po/nag-daw",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802895/months/march_f7v4rb.mp4",
  },
  {
    key: "169",
    english: "April",
    bhutia: "ཟླ་བོ་ བཞི་པོ།/ས་ག་ ཟླ་བོ།",
    pronunciation: "dha-o zi-po/sa-ka-daw",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802888/months/april_lgywc2.mp4",
  },
  {
    key: "170",
    english: "May",
    bhutia: "ཟླ་བོ་ ལྔ་པོ།/སྣོན་ ཟླ་བོ།",
    pronunciation: "dha-o nga-po/nen-daw",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802896/months/may_f9a79e.mp4",
  },
  {
    key: "171",
    english: "June",
    bhutia: "ཟླ་བོ་ དྲུག་པོ།/ཆུ་སྟོད་ ཟླ་བོ།",
    pronunciation: "dha-o drug-po/chu-te-daw",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802894/months/june_s0dvv0.mp4",
  },
  {
    key: "172",
    english: "July",
    bhutia: "ཟླ་བོ་ བདུན་པོ།/གྲོ་བཞིན་ ཟླ་བོ།",
    pronunciation: "dha-o dun-po/do-zin-daw",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802893/months/july_duuggr.mp4",
  },
  {
    key: "173",
    english: "August",
    bhutia: "ཟླ་བོ་ བརྒྱོད་པོ།/ཁྲུམས་ཟླ་བོ།",
    pronunciation: "dha-o gyad-po/thrum-daw",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802889/months/august_dczbiu.mp4",
  },
  {
    key: "174",
    english: "September",
    bhutia: "ཟླ་བོ་ དགུ་པོ།/དབྱུག་ཟླ་བོ།",
    pronunciation: "dha-o gu-po/yug-daw",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802900/months/september_uprhyw.mp4",
  },
  {
    key: "175",
    english: "October",
    bhutia: "ཟླ་བོ་ བཅུ་པོ།/སྨིན་ཟླ་བོ།",
    pronunciation: "dha-o chu-po / min-daw",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802899/months/october_rzbndq.mp4",
  },
  {
    key: "176",
    english: "November",
    bhutia: "ཟླ་བོ་ བཅུ་གཅིག་པོ། /མགོ་ཟླ་བོ། ",
    pronunciation: "dha-o chu-chig-po/ gho-daw",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802898/months/november_laty0t.mp4",
  },

  {
    key: "177",
    english: "December",
    bhutia: "ཟླ་བོ་ བཅུ་གཉིས་པོ། /རྒྱལ་ ཟླ་བོ། ",
    pronunciation: "dha-o chu-nyi-po/gyal-daw",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802890/months/december_x8um0j.mp4",
  },
  {
    key: "178",
    english: "Sunday",
    bhutia: "གཟའ་ཉིམ།",
    pronunciation: "za-ni-ma",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802815/Days/sunday_e32cpk.mp4",
  },
  {
    key: "179",
    english: "Monday",
    bhutia: "གཟའ་ ཟླ་བོ།",
    pronunciation: "za-da-o",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802813/Days/monday_ogjphw.mp4",
  },
  {
    key: "180",
    english: "Tuesday",
    bhutia: "གཟའ་ མིག་དམར།",
    pronunciation: "za-mig-mar",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802817/Days/tuesday_fede1n.mp4",
  },
  {
    key: "181",
    english: "Wednesday",
    bhutia: "གཟའ་ ལྷག་ཀོ།",
    pronunciation: "za-lhag-ko",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802819/Days/wednesday_b2vfns.mp4",
  },
  {
    key: "182",
    english: "Thursday",
    bhutia: "གཟའ་ ཕུར་པོ།",
    pronunciation: "za-phur-po",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802816/Days/thursday_qtj4z7.mp4",
  },
  {
    key: "183",
    english: "Friday",
    bhutia: "གཟའ་པ་སངས།",
    pronunciation: "za-pha-sang",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802812/Days/friday_io5uma.mp4",
  },
  {
    key: "184",
    english: "Saturday",
    bhutia: "གཟའ་ སྤེན་པོ།",
    pronunciation: "za-pen-po",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802814/Days/saturday_ujqhdt.mp4",
  },
  {
    key: "185",
    english: "Grandfather",
    bhutia: "ཨ་ཇོ།",
    pronunciation: "ajo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735804825/family/grandfather_kg6jde.mp4",
  },
  {
    key: "186",
    english: "Grandmother",
    bhutia: "ཨ་ཉོ།",
    pronunciation: "anyo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735804820/family/grandmother_hu89gy.mp4",
  },
  {
    key: "187",
    english: "Father",
    bhutia: "ཨ་པོ།",
    pronunciation: "apo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735804800/family/father_py5a04.mp4",
  },
  {
    key: "188",
    english: "Mother",
    bhutia: "ཨ་མ།",
    pronunciation: "ama",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735804814/family/mother_bqkkiu.mp4",
  },
  {
    key: "189",
    english: "Father in law",
    bhutia: "གྱོ་པོ།",
    pronunciation: "gyob-po",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735804791/family/father_in_law_pxonp6.mp4",
  },
  {
    key: "190",
    english: "Mother in law",
    bhutia: "གྱོ་མོ།",
    pronunciation: "gyob-mo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735804829/family/mother_in_law_irksdo.mp4",
  },
  {
    key: "191",
    english: "Son",
    bhutia: "བུ།",
    pronunciation: "bhu",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735804836/family/son_dqlcyp.mp4",
  },
  {
    key: "192",
    english: "Daughter",
    bhutia: "བུ་མོ།",
    pronunciation: "bhu-mo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735804758/family/daughter_hsioz5.mp4",
  },
  {
    key: "193",
    english: "Uncle (paternal)",
    bhutia: "ཨ་ཁུ།",
    pronunciation: "akhu",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735804839/family/paternal_uncle_efyvud.mp4",
  },
  {
    key: "194",
    english: "Uncle (maternal)",
    bhutia: "ཨ་ཞང།",
    pronunciation: "azang",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735804799/family/maternal_uncle_nb0vpm.mp4",
  },
  {
    key: "195",
    english: "Aunt (maternal)",
    bhutia: "ཨམ་ཆུང།",
    pronunciation: "am-chung",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735804762/family/aunty_maternal_qwcevb.mp4",
  },

  {
    key: "196",
    english: "Elder brother",
    bhutia: "ཨ་ཅུ།",
    pronunciation: "a-chu",
    audiolink: "",
  },
  {
    key: "197",
    english: "Elder sister",
    bhutia: "ཨ་ཞི།",
    pronunciation: "a-zhi",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735804855/family/elder_sister_s8nsj6.mp4",
  },
  {
    key: "198",
    english: "Younger brother",
    bhutia: "སྤུན་ལོ།",
    pronunciation: "pun-lo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735804851/family/younger-brother_qvn07i.mp4",
  },
  {
    key: "199",
    english: "Aunt (paternal)",
    bhutia: "ཨ་ཉེ།",
    pronunciation: "aney",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735804759/family/aunty_e0wusx.mp4",
  },
  {
    key: "200",
    english: "Younger sister ",
    bhutia: "བུ་སྲིངམ།",
    pronunciation: "bhu-srim",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735804857/family/younger-sister_k6vehm.mp4",
  },
  {
    key: "201",
    english: "Son in law",
    bhutia: "མག་ཀོ།",
    pronunciation: "mag-ko",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735804839/family/son_in_law_jd4cep.mp4",
  },

  {
    key: "202",
    english: "Daughter in law",
    bhutia: "ནམ་མོ།",
    pronunciation: "nam-mo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735804783/family/daughter_in_law_msfxoz.mp4",
  },
  {
    key: "203",
    english: "Sister in law",
    bhutia: "སྙིདམ།",
    pronunciation: "nyidm",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735804835/family/sister_in_law_r0xbxt.mp4",
  },
  {
    key: "204",
    english: "Brother in law",
    bhutia: "སྐིད་པོ།",
    pronunciation: "kyid-po",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735804759/family/kyid-po_apin0d.mp4",
  },
  {
    key: "205",
    english: "Younger brother",
    bhutia: "ཕ་མིང།",
    pronunciation: "pha-ming",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735804855/family/younger_brother_xj0ymn.mp4",
  },
  {
    key: "206",
    english: "Step-brother",
    bhutia: "བུ་ཡཱ།",
    pronunciation: "bu-ya",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735804839/family/step_brother_xmfomq.mp4",
  },
  {
    key: "207",
    english: "Step-sister",
    bhutia: "བུམ་ཡཱ།",
    pronunciation: "bum-ya",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735804850/family/step_sister_fl8qak.mp4",
  },
  {
    key: "208",
    english: "Nephew",
    bhutia: "ཚ་ཕྱུག།",
    pronunciation: "tsa-phyug",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735804830/family/nephew_sgrzsj.mp4",
  },
  {
    key: "209",
    english: "Niece",
    bhutia: "ཚམ།",
    pronunciation: "tsam",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735804829/family/neice_prxlmr.mp4",
  },
  {
    key: "210",
    english: "Great grandson and daugther",
    bhutia: "ཡང་ཕྱུག།",
    pronunciation: "yang-phyug",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735804829/family/great_grand_son_and_daughter_tafkcx.mp4",
  },

  {
    key: "222",
    english: "Barley",
    pronunciation: "na",
    bhutia: "ནཱ་།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735894673/grains%20and%20cereals/barley_dbgb66.mp4",
  },
  {
    key: "223",
    english: "Lentils",
    pronunciation: "sen-chung",
    bhutia: "སྲན་ཆུང།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735894673/grains%20and%20cereals/lentils_fk9yxu.mp4",
  },
  {
    key: "224",
    english: "Millet",
    pronunciation: "min-chag",
    bhutia: "མིན་ཅག",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735894674/grains%20and%20cereals/millet_csqu6o.mp4",
  },
  {
    key: "225",
    english: "Maize",
    pronunciation: "ken-tsong",
    bhutia: "ཀེན་ཙོང།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735894673/grains%20and%20cereals/maize_pfzssn.mp4",
  },
  {
    key: "226",
    english: "Paddy",
    pronunciation: "rad / bya",
    bhutia: "རད། སྦྱ༹ག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735894673/grains%20and%20cereals/paddy_xzkpdo.mp4",
  },
  {
    key: "227",
    english: "Rice",
    pronunciation: "chum",
    bhutia: "ཆུམ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735894673/grains%20and%20cereals/rice_jxk2dr.mp4",
  },
  {
    key: "228",
    english: "Sesame",
    pronunciation: "til",
    bhutia: "ཏིལ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735894674/grains%20and%20cereals/sesame_h6tvfz.mp4",
  },
  {
    key: "229",
    english: "Soyabean",
    pronunciation: "do-sem",
    bhutia: "རྡོ་སྲནམ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735894674/grains%20and%20cereals/soya-bean_d0qc25.mp4",
  },
  {
    key: "230",
    english: "Wheat",
    pronunciation: "gyo",
    bhutia: "གྱོ།འབྱཱའོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735894674/grains%20and%20cereals/wheat_jjruvt.mp4",
  },
  {
    key: "231",
    english: "Dal",
    pronunciation: "dali",
    bhutia: "རྡལ་ལི།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735894673/grains%20and%20cereals/dal_d8u5kj.mp4",
  },

  {
    key: "262",
    english: "0",
    pronunciation: "",
    bhutia: "",
    audiolink: "",
  },
  {
    key: "263",
    english: "0",
    pronunciation: "lekhar",
    bhutia: "ལེས་ཁོར།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802641/numbers/one_w38ajt.mp4",
  },
  {
    key: "264",
    english: "1",
    pronunciation: "chig",
    bhutia: "གཅིག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802641/numbers/one_w38ajt.mp4",
  },
  {
    key: "265",
    english: "2",
    pronunciation: "nyi",
    bhutia: "གཉིས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802643/numbers/two_bdvadv.mp4",
  },
  {
    key: "266",
    english: "3",
    pronunciation: "sum",
    bhutia: "གསུམ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802642/numbers/three_wrimcq.mp4",
  },
  {
    key: "267",
    english: "4",
    pronunciation: "zi",
    bhutia: "བཞི།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802639/numbers/four_ovlwzv.mp4",
  },
  {
    key: "268",
    english: "5",
    pronunciation: "nga",
    bhutia: "ལྔ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802637/numbers/five_urzevh.mp4",
  },
  {
    key: "269",
    english: "6",
    pronunciation: "drug",
    bhutia: "དྲུག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802609/numbers/6_wtwvdr.mp4",
  },
  {
    key: "270",
    english: "7",
    pronunciation: "dun",
    bhutia: "བདུན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802610/numbers/7_nwtqug.mp4",
  },

  {
    key: "271",
    english: "8",
    pronunciation: "gyad",
    bhutia: "བརྒྱད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802610/numbers/8_uhbrru.mp4",
  },

  {
    key: "272",
    english: "9",
    pronunciation: "gu",
    bhutia: "དགུ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802640/numbers/nine_dtryks.mp4",
  },
  {
    key: "273",
    english: "10",
    pronunciation: "chu",
    bhutia: "བཅུ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802611/numbers/10_eg4ncy.mp4",
  },

  {
    key: "274",
    english: "11",
    pronunciation: "chug-chig",
    bhutia: "བཅུ་གཅིག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802615/numbers/11_napoct.mp4",
  },

  {
    key: "275",
    english: "20",
    pronunciation: "nyi-shu",
    bhutia: "ཉི་ཤུ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802616/numbers/20_uxzenr.mp4",
  },
  {
    key: "276",
    english: "21",
    pronunciation: "nyi-shu tsa-chig",
    bhutia: "ཉི་ཤུ་ རྩ་གཅིག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802616/numbers/21_p0jbjo.mp4",
  },
  {
    key: "277",
    english: "30",
    pronunciation: "sum-chu",
    bhutia: "སུམ་བཅུ།།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802617/numbers/30_ikejmx.mp4",
  },
  {
    key: "278",
    english: "31",
    pronunciation: "sum-chu so-chig",
    bhutia: "སུམ་ཅུ་སོ་གཅིག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802618/numbers/31_yrkpt5.mp4",
  },
  {
    key: "279",
    english: "40",
    pronunciation: "zi-chu",
    bhutia: "བཞི་བཅུ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802619/numbers/40_ofmekg.mp4",
  },
  {
    key: "280",
    english: "41",
    pronunciation: "zi-chu ze-chig",
    bhutia: "བཞི་བཅུ་ཞེ་ གཅིག",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802620/numbers/41_sm6dzc.mp4",
  },

  {
    key: "281",
    english: "50",
    pronunciation: "nga-chu",
    bhutia: "ལྔ་བཅུ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802621/numbers/50_j6n05v.mp4",
  },
  {
    key: "282",
    english: "51",
    pronunciation: "nga-chu nga-chig",
    bhutia: "ལྔ་བཅུ་ལྔ་གཅིག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802622/numbers/51_c1ijot.mp4",
  },
  {
    key: "283",
    english: "60",
    pronunciation: "drug-chu",
    bhutia: "དྲུག་བཅུ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802623/numbers/60_wlypy7.mp4",
  },
  {
    key: "284",
    english: "61",
    pronunciation: "drug-chu re-chig",
    bhutia: "དྲུག་བཅུ་རེ་གཅིག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802624/numbers/61_oa2gvw.mp4",
  },
  {
    key: "285",
    english: "70",
    pronunciation: "dun-chu",
    bhutia: "བདུན་བཅུ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802625/numbers/70_mjsqkv.mp4",
  },
  {
    key: "286",
    english: "71",
    pronunciation: "dun-chu don-chig",
    bhutia: "བདུན་བཅུ་ དོན་ གཅིག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802626/numbers/71_idsgeg.mp4",
  },
  {
    key: "287",
    english: "80",
    pronunciation: "gyad-chu",
    bhutia: "བརྒྱད་བཅུ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802627/numbers/80_k02t6o.mp4",
  },
  {
    key: "288",
    english: "81",
    pronunciation: "gyad-chu gya-chig",
    bhutia: "བརྒྱད་བཅུ་གྱ་གཅིག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802628/numbers/81_ix7rjx.mp4",
  },
  {
    key: "289",
    english: "90",
    pronunciation: "gu-chu",
    bhutia: "དགུ་བཅུ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802629/numbers/90_bpiv6a.mp4",
  },
  {
    key: "290",
    english: "91",
    pronunciation: "gu-chu go-chig",
    bhutia: "དགུ་བཅུ་གོ་གཅིག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802630/numbers/91_ol5znm.mp4",
  },
  {
    key: "291",
    english: "100",
    pronunciation: "gya",
    bhutia: "བརྒྱ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802632/numbers/100_w5zror.mp4",
  },
  {
    key: "292",
    english: "1000",
    pronunciation: "tong",
    bhutia: "སྟོང།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802636/numbers/1000_osmldj.mp4",
  },
  {
    key: "293",
    english: "10000",
    pronunciation: "tri-chig",
    bhutia: "ཁྲི་གཅིག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802613/numbers/10k_uuq6ed.mp4",
  },
  {
    key: "294",
    english: "Lakh",
    pronunciation: "bum",
    bhutia: "འབུམ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802633/numbers/100k_yxztvc.mp4",
  },
  {
    key: "295",
    english: "Million",
    pronunciation: "bum-chu",
    bhutia: "འབུམ་བཅུ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802608/numbers/1M_pttlda.mp4",
  },
  {
    key: "296",
    english: "Ten Million",
    pronunciation: "ze-wa",
    bhutia: "བྱི་བ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802614/numbers/10m_drfuw9.mp4",
  },
  {
    key: "297",
    english: "Billion",
    pronunciation: "sa-ya",
    bhutia: "ས་ཡ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802608/numbers/1B_alzh6g.mp4",
  },
  {
    key: "298",
    english: "A kind of laughing thrush ",
    pronunciation: "nag-bom",
    bhutia: "ནགས་འབོམ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933227/birds/a_kind_of_laughing_thrush_hinpjf.mp4",
  },
  {
    key: "299",
    english: "Blackheaded Sibia ",
    pronunciation: "sisi mgo-nag / sisi dro-tem",
    bhutia: "སི་སི་ མགོ་ནག/སི་སི་ བྲོ་ཏེམ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933230/birds/blackheaded_sibia_jdj8is.mp4",
  },
  {
    key: "300",
    english: "Barred Cuckoo Dove ",
    pronunciation: "gur-pedm",
    bhutia: "གུར་པདམ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933228/birds/barred_cuckoo_dove_p3c2xl.mp4",
  },
  {
    key: "301",
    english: "Blood Pheasant",
    pronunciation: "zhem",
    bhutia: "ཟེསམ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933230/birds/blood_pheasant_h1zqfm.mp4",
  },
  {
    key: "302",
    english: "Black Drongo",
    pronunciation: "jae-chum",
    bhutia: "ཇེ་ཅུམ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933229/birds/black_drongo_fkygvp.mp4",
  },
  {
    key: "303",
    english: "The Crimson Horned Pheasant",
    pronunciation: "omo-bap",
    bhutia: "ཨོ་མོ་སྦས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933255/birds/the_crimson_horned_pheasant_j1tdn0.mp4",
  },
  {
    key: "304",
    english: "Cock",
    pronunciation: "bhya-fo",
    bhutia: "བྱ༹་ཕོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933231/birds/cock_m8kgve.mp4",
  },
  {
    key: "305",
    english: "Crane",
    pronunciation: "trung-trung/gimo ting-ting",
    bhutia: "ཁྲུང་ཁྲུང།སྒི་མོ་ ཏིང་ཏིང།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933233/birds/crane_fxlo70.mp4",
  },
  {
    key: "306",
    english: "Crow",
    pronunciation: "o-lag",
    bhutia: "ཨོ་ལག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933233/birds/crow_huve0s.mp4",
  },
  {
    key: "307",
    english: "Cuckoo",
    pronunciation: "khyu-zug",
    bhutia: "ཁྱུ་བྱུག",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933234/birds/cuckoo_vuodse.mp4",
  },
  {
    key: "308",
    english: "Dove",
    pronunciation: "byab-tu-lhu",
    bhutia: "བྱ༹བ་ཏུ་ལུ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933235/birds/dove_xp926k.mp4",
  },
  {
    key: "309",
    english: "Duck",
    pronunciation: "ba-tag",
    bhutia: "བ་ཏག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933236/birds/duck_bgu5zf.mp4",
  },
  {
    key: "310",
    english: "Eagle",
    pronunciation: "hos/heu",
    bhutia: "ཡོས།ཧེའུ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933236/birds/eagle_rd8agv.mp4",
  },
  {
    key: "311",
    english: "Fork tailed bird",
    pronunciation: "chu-bya leg-kar",
    bhutia: "ཆུ་བྱ༹་ལེགས་དཀར།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933237/birds/fork_tailed_bird_ihdx6m.mp4",
  },
  {
    key: "312",
    english: "Goose/swan",
    pronunciation: "nang-po",
    bhutia: "ངང་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933238/birds/goose_swan_qyxggn.mp4",
  },
  {
    key: "313",
    english: "Green Billed Malkohad",
    pronunciation: "sang-kum",
    bhutia: "གསང་ཀུམ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933252/birds/sang-kum_c4tvv0.mp4",
  },
  {
    key: "314",
    english: "Great Barbet",
    pronunciation: "hu-nyum",
    bhutia: "ཧུ་ཉུམ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933239/birds/great_barbet_kznl6h.mp4",
  },
  {
    key: "315",
    english: "Himalayan Whitercrested Laughing Thrush",
    pronunciation: "ga-rem mgo-kar",
    bhutia: "ག་རེམ་མགོ་དཀར།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933241/birds/Himalayan_whitercrested_laughing_thrush_quzvqj.mp4",
  },
  {
    key: "316",
    english: "Hen",
    pronunciation: "byam",
    bhutia: "བྱ༹མ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933240/birds/hen_y96s7k.mp4",
  },
  {
    key: "317",
    english: "Khasia Hills Cuckoo",
    pronunciation: "bya akku",
    bhutia: "བྱ༹་ཨ་ཁུ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933243/birds/khasia_hills_cuckoo_qdzh3f.mp4",
  },
  {
    key: "320",
    english: "Kingfisher",
    pronunciation: "ny-zin gyal-mo",
    bhutia: "ཉ་འཛིན་ རྒྱལ་མོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933243/birds/kingfisher_vw4bnh.mp4",
  },
  {
    key: "321",
    english: "Kiwi",
    pronunciation: "chen-bya",
    bhutia: "བྱ༹་ཀའི་ཝི།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933245/birds/kiwi_mxgl0o.mp4",
  },
  {
    key: "322",
    english: "Kaliz Pheasant",
    pronunciation: "gi-ris",
    bhutia: "གི་རིས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933242/birds/kaliz_pheasant_biuvgl.mp4",
  },
  {
    key: "323",
    english: "The Moonal Pheasant",
    pronunciation: "cham-dong/bye-dang",
    bhutia: "ཆམས་གདོང།བྱེ༹་མདངས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933256/birds/the_moonal_pheasant_j4wmsx.mp4",
  },
  {
    key: "324",
    english: "Treepie",
    pronunciation: "ko-le",
    bhutia: "ཀོ་ལེ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933258/birds/treepie_fbmwvf.mp4",
  },
  {
    key: "325",
    english: "Nightingale",
    pronunciation: "ka-la pin-ka",
    bhutia: "ཀ་ལ་པིང་ཀ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933246/birds/nightingale_tfrgte.mp4",
  },
  {
    key: "326",
    english: "Necklaced Laughing Thrush",
    pronunciation: "byang-karm",
    bhutia: "བྱ༹ང་དཀརམ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933245/birds/necklaced_laughing_thrush_mcpzx7.mp4",
  },
  {
    key: "327",
    english: "Ostrich",
    pronunciation: "nga-mong",
    bhutia: "རྔ་ མོང།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933246/birds/ostrich_ckckfy.mp4",
  },
  {
    key: "328",
    english: "Owl",
    pronunciation: "din-pom",
    bhutia: "དིང་པོམ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933247/birds/owl_abmqpo.mp4",
  },
  {
    key: "329",
    english: "Penguin",
    pronunciation: "khyag-rom bya",
    bhutia: "ཁྱག་རུམ་ བྱ༹།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933249/birds/penguin_p3orof.mp4",
  },
  {
    key: "330",
    english: "Parrot",
    pronunciation: "ne-tso",
    bhutia: "ནེ་ཙོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933248/birds/parrot_hficdm.mp4",
  },
  {
    key: "331",
    english: "Plumbeous Redstart",
    pronunciation: "chu-bya nag-gi",
    bhutia: "ཆུ་བྱ༹་ ནག་གི།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933251/birds/plumbeous_redstart_pqbleg.mp4",
  },
  {
    key: "332",
    english: "Pigeon",
    pronunciation: "pug-ron",
    bhutia: "ཕུག་རིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933250/birds/pigeon_wsjx7t.mp4",
  },
  {
    key: "333",
    english: "Satyr Tragopan",
    pronunciation: "bhab",
    bhutia: "རྦབ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933253/birds/satyr_trgopan_vdjbtr.mp4",
  },
  {
    key: "334",
    english: "Peacock",
    pronunciation: "ma-jya",
    bhutia: "རྨ་བྱ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933249/birds/peacock_dsr7ly.mp4",
  },
  {
    key: "335",
    english: "Red Jungle Fowl",
    pronunciation: "k-len bya",
    bhutia: "ཀེས་ལེན་བྱ༹།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933252/birds/red_jungle_fowl_kieyec.mp4",
  },
  {
    key: "336",
    english: "Sparrow",
    pronunciation: "chag-jesm/chag-bya",
    bhutia: "ལྕགས་མཛེམས།ལྕགས་བྱ༹།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933254/birds/sparrow_bh1c8e.mp4",
  },
  {
    key: "337",
    english: "The Snow Partridge",
    pronunciation: "lerwa",
    bhutia: "ལེར་ཝ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933257/birds/the_snow_partridge_myn9yp.mp4",
  },
  {
    key: "338",
    english: "The Sikkimese SnowCock",
    pronunciation: "hrak-pa/gong-mo",
    bhutia: "ཧྲག་པ་།གོང་མོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933256/birds/the_Sikkimese_snow_cock_lxhlyy.mp4",
  },
  {
    key: "339",
    english: "Vulture",
    pronunciation: "bya-rgod",
    bhutia: "བྱ༹་རྒོད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933259/birds/vulture_iqjomr.mp4",
  },
  {
    key: "340",
    english: "Woodpecker",
    pronunciation: "shing-trom",
    bhutia: "ཤིང་ཀྲོགམ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933260/birds/woodpecker_zee7oj.mp4",
  },
  {
    key: "341",
    english: "Woodcock",
    pronunciation: "lab-ri bya-pho",
    bhutia: "ལབ་རི་ བྱ༹་ཕོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933260/birds/woodcock_xdlqjk.mp4",
  },
  {
    key: "342",
    english: "Yellow Bird",
    pronunciation: "bya-serb",
    bhutia: "བྱ༹་སེརབ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1734933261/birds/yellow_bird_hearja.mp4",
  },

  {
    key: "343",
    english: "Women and Child Development Department",
    bhutia: "བུམ་ དང་ བོ་ཙོའི་ ཡར་སྲེད་ ལྲེ་ལག ",
    pronunciation: "phum to phormi yargay le lag",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249131/Departments/women_and_child_development_department_nkjco8.mp4",
  },
  {
    key: "344",
    english: "Agriculture Department",
    bhutia: "སོ་ནམ་ གཡོག་ལས་ ལྲེ་ལག ",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "345",
    english: "Animal Husbandary and Livestock Department",
    bhutia: "སྲེམས་ཅན་ གསོ་སོངས་ ལྲེ་ལག",
    pronunciation: "simchen shok kyong le lag",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249123/Departments/animal_husbandary_and_livestock_department_qvrg0x.mp4",
  },
  {
    key: "346",
    english: "Building and Housing Department",
    bhutia: "ཁིམ་མའི་ ལྲེ་ལག ",
    pronunciation: "khim may le lag",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249124/Departments/building_and_housing_department_uwr0lr.mp4",
  },
  {
    key: "347",
    english: "Civil Supplies and Consumer Affairs Department",
    bhutia:
      "ཟོག་རིགས་ བགོ་བཀྲམ་ དང་ ཉྲེར་སོད་ གཟིགས་ཞིབ་ ལྲེ་ལག / མི་སྲེར་ ཉོ་ཚོང་ དང་ བགོ་བཀྲམ་ ལྲེ་ལག ",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249124/Departments/civil_supplies_and_consumer_affair_department_qixkhe.mp4",
  },
  {
    key: "348",
    english: "Cooperative Department",
    bhutia: "མཉམ་འབྲེལ་ ལྲེ་ལག",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249125/Departments/cooperative_department_ye8rso.mp4",
  },
  {
    key: "349",
    english: "Commerce and Industries",
    bhutia: "ཚོང་ དང་ བཟོ་གྲྭ་ ལྲེ་ལག ",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249124/Departments/commerce_and_industry_department_u4mgpy.mp4",
  },
  {
    key: "350",
    english: "Cultural Affair and Heritage Department",
    bhutia: "རིག་གཞུང་ དང་ རིང་ཤུལ་ ལྲེ་ལག",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249125/Departments/cultural_affairs_and_heritage_department_ggkyg3.mp4",
  },
  {
    key: "351",
    english: "Development Planning Department",
    bhutia: "འཆར་བཀོད་ ཡར་རྒྱས་ ལྲེ་ལག",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249125/Departments/development_planning_department_trwctn.mp4",
  },
  {
    key: "352",
    english: "Ecclesiastical Department",
    bhutia: "དགོན་གནས་ ལྲེ་ལག",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249125/Departments/eccelesietical_department_nuggcs.mp4",
  },
  {
    key: "353",
    english: "Education Department",
    bhutia: "ཤྲེས་རིག་ ལྲེ་ལག",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249123/Departments/education_department_p6wgyu.mp4",
  },
  {
    key: "354",
    english: "Election Department",
    bhutia: "འོས་ཤོག་ ལྲེ་ལག",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249123/Departments/election_department_jyxasl.mp4",
  },
  {
    key: "355",
    english: "Excise Department",
    bhutia: "ཐོན་ཟོག་ ནང་ཁལ་ ལྲེ་ལག / ཆང་རག་ ལྲེ་ལག",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249124/Departments/excise_department_kzy5st.mp4",
  },
  {
    key: "356",
    english: "Finance Department",
    bhutia: "དཔལ་འབོར་ ལྲེ་ལག དངུལ་རིས་ ལྲེ་ལག",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249124/Departments/finance_department_jw1vqp.mp4",
  },
  {
    key: "357",
    english: "Food and Civil Supplies Department",
    pronunciation: "",
    bhutia: "མི་དམངས་ཟ་ཆས་ འགོ་བཀྲམ་ ལྲེ་ལག /མི་དམངས་ཟས་འབྲུ བགོ་བཀྲམ་ ལྲེ་ལག",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249125/Departments/food_and_civil_supply_department_n6gspa.mp4",
  },
  {
    key: "358",
    english: "Food Security and Agricultural Department",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249125/Departments/food_security_and_agricultural_department_muzx3h.mp4",
    bhutia: "ཟས་ཆ་ཟོན་སོར་ དང་ ཞིང་གཡོག་ ལྲེ་ལག ",
  },
  {
    key: "359",
    english: "Forest Environment and Wildlife Management Department",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249126/Departments/forest_environment_and_wildlife_management_department_c8lfwx.mp4",
    bhutia: "སོང་རྒན་ མཐའ་འཁོར་ དང་ རི་དྭགས་ བལྟ་ལྟོས་ ལྲེ་ལག",
  },
  {
    key: "360",
    english: "Mines and Geology Department",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249127/Departments/mines_and_geology_department_xlqgvt.mp4",
    bhutia: "ས་གཏྲེར་ དང་ ས་གཤིས་ ལྲེ་ལག /ས་གཏྲེར་ ལྲེ་ལག",
  },
  {
    key: "361",
    english: "Health and Family welfare Department",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249126/Departments/health_and_family_walfare_department_uft5yz.mp4",
    bhutia: "འཕོས་བསྲེན་ དང་ བཟའ་ཚང་ བདྲེ་དོན་ ལྲེ་ལག",
  },
  {
    key: "362",
    english: "Horticulture and cash crops Department",
    pronunciation: "",
    audiolink: "",
    bhutia: "རི་ཚོད་ དང་ ཚོང་སྒྱུར་ ལོ་ཐོག་ ལྲེ་ལག/ རི་ཚོད་ དང་ ལོ་ཐོག་ ལྲེ་ལག",
  },
  {
    key: "363",
    english: "Home Department",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249126/Departments/home_department_zdo2r7.mp4",
    bhutia: "ནང་སིད་ ལྲེ་ལག",
  },
  {
    key: "364",
    english: "Information and Public Relation Department",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249126/Departments/ipr_department_q5eo4u.mp4",
    bhutia:
      "བརྡ་ལན་ དང་ མི་སྲེར་ འབྲེལ་ལམ་ ལྲེ་ལག/ སྙན་གསྲེས་ དང་ མི་སྲེར་ འབྲེལ་བ་ ལྲེ་ལག",
  },
  {
    key: "365",
    english: "Information Technology Department",
    pronunciation: "",
    audiolink: "",
    bhutia: "བརྡ་ལན་ དང་ འཁྲུལ་ཆས་ ལྲེ་ལག / སྙན་གསྲེས་ཟོས་ཆས་ རིག་རལ་ ལྲེ་ལག",
  },
  {
    key: "366",
    english: "Irrigation Department",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249127/Departments/irrigation_department_wtpk79.mp4",
    bhutia: "ཞིང་ཆུ་ འདྲན་གཡོག་ ལྲེ་ལག",
  },
  {
    key: "367",
    english: "Irrigation and Flood Control Department",
    pronunciation:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249127/Departments/irrigation_department_wtpk79.mp4",
    audiolink: "",
    bhutia: "ཞིང་ཆུ་ དང་ ཆུ་རུད་ བཀག་ཐབས་ ལྲེ་ལག",
  },
  {
    key: "368",
    english: "Labour Department",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249127/Departments/labour_department_dembog.mp4",
    bhutia: "ངལ་རོལ་ ལྲེ་ལག / གླ་གཡོག་ ལྲེ་ལག",
  },
  {
    key: "369",
    english: "Land Revenue and Disaster Management Department",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249127/Departments/land_revenue_and_disaster_management_l9otlt.mp4",
    bhutia:
      "ས་ཁལ་ དང་ རྲེན་ངན་ བལྟ་ལྟོག་ ལྲེ་ལག / ས་ཁལ་ དང་ རྲེན་ངན་ འཛིན་སོང་ ལྲེ་ལག",
  },
  {
    key: "370",
    english: "Law Department",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249127/Departments/law_department_dplvlw.mp4",
    bhutia: "ཁིམས་ལུགས་ ལྲེ་ལག",
  },
  {
    key: "371",
    english: "Mines, Mineral and Geology Department",
    pronunciation: "",
    audiolink: "",
    bhutia: "གཏྲེར་རྫས་ དང་ ས་གཤིས་ ལྲེ་ལག",
  },
  {
    key: "372",
    english: "Motor Vehicle Department",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739011085/Departments/motor_vehicle_department_nrb2gf.mp4",
    bhutia: "འཕྲུལ་འཁོར་ ལྲེ་ལག",
  },
  {
    key: "373",
    english: "Planning and Development Department",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249128/Departments/planning_and_development_department_mgoiqu.mp4",
    bhutia: "འཆར་བཀོད་ དང་ ཡར་སྲེད་ ལྲེ་ལག ཡར་རྒྱས",
  },
  {
    key: "374",
    english: "Police Department / Sikkim Police",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249128/Departments/police_department_cihhg3.mp4",
    bhutia: "ཁིམས་སྲུང་ ལྲེ་ལག པུ་ལི་སི་ ལྲེ་ལག",
  },
  {
    key: "375",
    english: "Power and Energy Department",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249128/Departments/power_and_energy_department_cinc9y.mp4",
    bhutia: "གློག་ཤུགས་ ལྲེ་ལག",
  },
  {
    key: "376",
    english: "Printing and Stationary Department",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249129/Departments/printing_and_stationary_department_pyucbk.mp4",
    bhutia: "ཚག་སྤར་ དང་ ཡིག་ཆས་ ལྲེ་ལག",
  },
  {
    key: "377",
    english: "Public Health Engineering and Water Security",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739280620/Departments/public_health_engineering_department_jtamgd.mp3",
    bhutia: "མི་སྲེར་ འཕོས་བསྲེན་ དང་ འཐུང་ཆུ་ བཟོ་སོབས་ ལྲེ་ལག ",
  },
  {
    key: "378",
    english: "Public Work Department",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249129/Departments/pwd_a2yfqz.mp4",
    bhutia: "མི་སྲེར་ གཡོག་འགན་ ལྲེ་ལག",
  },
  {
    key: "379",
    english: "Revenue and Expenditure Department",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249129/Departments/revenue_and_expenditure_department_guoukt.mp4",
    bhutia: "བབས་ཡོངས་ དང་ཟས་སོང་ ལྲེ་ལག / ཡོངས་བབས་ དང་ཟས་སོང་ ལྲེ་ལག",
  },
  {
    key: "380",
    english: "Roads and Bridges Department",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249129/Departments/road_and_bridges_department_fx0wsd.mp4",
    bhutia: "ལམ་ དང་ཟམ་པའི་ ལྲེ་ལག",
  },
  {
    key: "381",
    english: "Rural Management and Development Department",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249129/Departments/rmdd_wxdnpb.mp4",
    bhutia:
      "གོང་གསྲེབ་ འཛིན་སོང་ ཡར་རྒྱས་ ལྲེ་ལག / གོང་གསྲེབ་ ལྟ་ལྟོག་ ཡར་རྒྱས་ ལྲེ་ལག",
  },
  {
    key: "382",
    english: "Science and Technology Department",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249129/Departments/science_and_technology_department_l45k9r.mp4",
    bhutia: "ཚན་རིག་ དང་ འཁྲུལ་ཆས་ ལྲེ་ལག",
  },
  {
    key: "383",
    english: "Social Welfare Department",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249130/Departments/social_walfare_department_dytvyp.mp4",
    bhutia: "སི་ཚོགས་ བདྲེ་དོན་ ལྲེ་ལག",
  },
  {
    key: "384",
    english: "Sports and Youths Affairs",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249130/Departments/sports_and_youth_affairs_p5da6e.mp4",
    bhutia: "རྲེདམ་ དང་ གཞོན་འབྲེལ་ ལྲེ་ལག",
  },
  {
    key: "385",
    english: "Tourism and Civil Aviation Department",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249130/Departments/tourism_and_civil_aviation_department_r8gfac.mp4",
    bhutia: "འགྲུལ་བསོར་ དང་ མི་སྲེར་ སྲེལ་ལྲེན་ གནམ་གྲུའི་ ལྲེ་ལག",
  },
  {
    key: "386",
    english: "Transport Department",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249130/Departments/transport_department_d1whvq.mp4",
    bhutia: "སྲེལ་ལྲེན་ ལྲེ་ལག",
  },
  {
    key: "387",
    english: "Urban Development and Housing Department",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249130/Departments/udhd_ju110q.mp4",
    bhutia: "ཚོང་འདུས་ ཡར་རྒྱས་ དང་ ཁིམ་མའི་ ལྲེ་ལག",
  },
  {
    key: "388",
    english: "Vigilance Department",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249131/Departments/vigilance_department_eyunjb.mp4",
    bhutia: "ལོག་ཆད་ ལྲེ་ལག",
  },
  {
    key: "389",
    english: "Women and Child Development Department",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249131/Departments/women_and_child_development_department_nkjco8.mp4",
    bhutia: "བུམ་ དང་ བོ་ཙོའི་ ཡར་སྲེད་ ལྲེ་ལག",
  },
  {
    key: "390",
    english: "State Pollution Control Board",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249130/Departments/state_pollution_control_board_sw816i.mp4",
    bhutia: "མངའ་སྲེའི་ བཙོག་སིབ་ ཚོད་འཛིན་ སྲེ། མངའ་སྲེ་ བཙོག་སིབ་ བཀག་སྲེ།",
    pronunciation: "",
  },
  {
    key: "391",
    english: "Bio-medical Waste Management",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249123/Departments/biomedical_waste_management_ifoyjy.mp4",
    bhutia:
      "ཁོ་མྲེད་ སྨན་བཅོས་ གད་སྙིག་ བཏང་སྲེ། / སྨན་ཆས་ མཁོ་མྲེད་ འགྱུར་བཅོས་ བཏང་སྲེ།",
    pronunciation: "",
  },
  {
    key: "392",
    english: "Central Bureau of Investigation",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249124/Departments/cbi_nro31z.mp4",
    bhutia: "དབུས་ ཞིབ་དཔྱད་ ལྲེ་ལག",
    pronunciation: "",
  },
  {
    key: "393",
    english: "Parliamentary Affairs",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736249128/Departments/parliamentary_affairs_wmcg67.mp4",
    bhutia: "ཁིམས་དོན་ གོས་ཚོགས།",
    pronunciation: "",
  },

  {
    key: "400",
    english: "Drink/Alcholic Beverages",
    pronunciation: "chang a-rag",
    bhutia: "ཆང་ ཨ་རག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736395782/drinks/drink_or_alcholic_beverages_omj89t.mp4",
  },
  {
    key: "401",
    english: "Beer",
    pronunciation: "bi-yer",
    bhutia: "སྦི་ཡར།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736395782/drinks/beer_dbcdxx.mp4",
  },
  {
    key: "402",
    english: "Black Tea / Plain Tea",
    pronunciation: "ja-dang",
    bhutia: "ཇ་ཐང།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736395782/drinks/black_and_plain_tea_b42nns.mp4",
  },
  {
    key: "403",
    english: "Coffee",
    pronunciation: "tsig-ja",
    bhutia: "ཚིག་ཇ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736395782/drinks/coffee_lxnsfo.mp4",
  },
  {
    key: "404",
    english: "Juice",
    pronunciation: "thog kha / dras-khu",
    bhutia: "འབྲས་ཁུ་  ཐོག་ཁག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736395782/drinks/juice_mq5hds.mp4",
  },
  {
    key: "405",
    english: "Mineral Water",
    pronunciation: "smen-chu",
    bhutia: "སྨན་ཆུ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736395783/drinks/mineral_water_jams8g.mp4",
  },
  {
    key: "406",
    english: "Milk Tea",
    pronunciation: "om-ja",
    bhutia: "འོ་ཇ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736395783/drinks/milk_tea_ltyy8l.mp4",
  },
  {
    key: "407",
    english: "Tea Leaves",
    pronunciation: "ja-fi/ja-ril",
    bhutia: "ཇ་རིལ་།ཇ་ཕི།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736395783/drinks/tea_leaves_jshz4y.mp4",
  },
  {
    key: "408",
    english: "Butter Tea / Tibetan Tea",
    pronunciation: "su-ja",
    bhutia: "སྲུབ་ཇ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1736395782/drinks/butter_tea_Tibetan_tea_x7vlg5.mp4",
  },
  {
    key: "409",
    english: "Agriculture Minister",
    pronunciation: "shing-lae lon-po",
    bhutia: "ཞིང་ལས་ བློན་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016538/designation/agriculture_minister_j0b47r.mp3",
  },
  {
    key: "410",
    english: "Additional Secretary",
    pronunciation: "nen-tab drung-che",
    bhutia: "སྣམ་བཏབ་ དྲུང་ཆེ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016539/designation/additional_secretary_krc1xa.mp3",
  },
  {
    key: "411",
    english: "Additional Director",
    pronunciation: "nen-tab kod-pon",
    bhutia: "སྣམ་བཏབ་ བཀོད་དཔོན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016539/designation/additional_director_zx91xz.mp3",
  },
  {
    key: "412",
    english: "Assistant Director",
    pronunciation: "lae-drog kod-pon",
    bhutia: "ལས་གྲོགས་ བཀོད་དཔོན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016537/designation/assistant_director_dsua7q.mp3",
  },
  {
    key: "413",
    english: "Assistant Education Officer",
    bhutia: "ལས་དྲོགས་ ཤེས་རིག་ ལས་དཔོན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016538/designation/aeo_lcnjuf.mp3",
    pronunciation: "lae-drog she-rig lae-pon",
  },
  {
    key: "414",
    english: "Advocate",
    pronunciation: "zhu-tsab po",
    bhutia: "ཞུ་ཚབ་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016538/designation/advocate_ifpxsa.mp3",
  },
  {
    key: "415",
    english: "Chief judge",
    pronunciation: "trim-pon tso-o",
    bhutia: "ཁྲིམས་དཔོན་ གཙོ་བོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016537/designation/chief_judge_sjnwti.mp3",
  },
  {
    key: "416",
    english: "Chief Minister",
    pronunciation: "tso-chi lon-po",
    bhutia: "ཁྲིམས་དཔོན་ གཙོ་བོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016537/designation/chief_minister_wzjjdl.mp3",
  },
  {
    key: "417",
    english: "Chief Secretary",
    pronunciation: "drung-che tso-o",
    bhutia: "དྲུང་ཆེ་ གཙོ་བོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016536/designation/chief_secretary_tf3ewl.mp3",
  },
  {
    key: "418",
    english: "Culture Minister",
    pronunciation: "rig-zung lon-po",
    bhutia: "རིགས་གཞུང་  བློན་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016535/designation/culture_minister_fy2xwk.mp3",
  },

  {
    key: "419",
    english: "Chairman",
    pronunciation: "tri-dag",
    bhutia: "ཁྲི་བདག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016537/designation/chairman_crcjy7.mp3",
  },
  {
    key: "420",
    english: "Councillor",
    pronunciation: "trom-dag",
    bhutia: "ཁྲོམ་བདག་།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016535/designation/councillor_zwp9gq.mp3",
  },
  {
    key: "421",
    english: "Defence and Foreign Minister",
    pronunciation: "phi dang drag poi de-srung lon-po",
    bhutia: "ཕྱི༹་ དང་ དྲག་པོའི་ བདེ་སྲུང་ བླེན་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016535/designation/defence_and_foreign_minister_jvph4f.mp3",
  },
  {
    key: "422",
    english: "Deputy Secretary",
    pronunciation: "tsab-kod rung-che",
    bhutia: "ཚབ་བསྐོས་ དྲུང་ཆེ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016534/designation/deputy_secretary_j3v4ow.mp3",
  },
  {
    key: "423",
    english: "Director",
    pronunciation: "kod-pon",
    bhutia: "བཀད་དཔོན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016534/designation/director_dxdfrv.mp3",
  },
  {
    key: "424",
    english: "Education Secretary",
    pronunciation: "she-rig drung-che",
    bhutia: "ཤེས་རིག་ དྲུང་ཆེ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016533/designation/education_secretary_onsmde.mp3",
  },
  {
    key: "425",
    english: "Education Minister",
    pronunciation: "she-rig lon-po",
    bhutia: "ཤེས་རིག་ བླེན་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016534/designation/education_minister_xbiqn2.mp3",
  },
  {
    key: "426",
    english: "Finance Minister",
    pronunciation: "pal-jor lon-po",
    bhutia: "དཔལ་འབྱོར་ བླེན་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016533/designation/finance_minister_ezabci.mp3",
  },
  {
    key: "427",
    english: "Forest and Wildlife Minister",
    pronunciation: "dong-gyn dang ri-dag sem-chen srung-kyop lon-po",
    bhutia: "སྡོང་རྒྱན་ དང་ རི་དྭགས་ སེམས་ཅན་  སྲུང་སྐྱོབས་ བློན་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016532/designation/forest_and_wildlife_minister_eyhocv.mp3",
  },
  {
    key: "428",
    english: "Finance Secretary",
    pronunciation: "pal-jor drung-che",
    bhutia: "དཔལ་འབྱོར་ དྲུང་ཆེ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016532/designation/finance_secretary_ebicfl.mp3",
  },
  {
    key: "429",
    english: "Governor",
    pronunciation: "srid-kyong chen-po",
    bhutia: "སྲིད་སྐྱོང་ ཆེན་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016532/designation/governor_okoplh.mp3",
  },
  {
    key: "430",
    english: "Home Minister",
    pronunciation: "nang-srid long-po",
    bhutia: "ནང་སྲིད་ བློན་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016530/designation/home_minister_oep4gr.mp3",
  },
  {
    key: "431",
    english: "Health Minister",
    pronunciation: "throt-ten lon-po",
    bhutia: "འཕྲོད་བརྟེན་ བློན་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016531/designation/health_minister_qtjpos.mp3",
  },
  {
    key: "432",
    english: "Health Secretary",
    pronunciation: "throt-tren drung-che",
    bhutia: "འཕྲོད་རྟེན་ དྲུང་ཆེ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016530/designation/health_secretary_pgayrv.mp3",
  },
  {
    key: "433",
    english: "Justice",
    pronunciation: "trim/drang-den",
    bhutia: "ཁྲིམས། དྲང་བདེན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016529/designation/justice_x7xju1.mp3",
  },
  {
    key: "434",
    english: "Joint Secretary",
    pronunciation: "zung-dral drung-che",
    bhutia: "ཟུང་འབྲེལ་ དྲུང་ཆེ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016529/designation/joint_secretary_jg2ckv.mp3",
  },
  {
    key: "435",
    english: "Joint Director",
    pronunciation: "zung-drel kod-pon",
    bhutia: "ཟུང་འབྲེལ་ བཀོད་དཔོན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016530/designation/joint_director_hblxxk.mp3",
  },

  {
    key: "436",
    english: "Judge",
    pronunciation: "trim-pon",
    bhutia: "ཁྲིམས་དཔོན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016529/designation/judge_sonvlm.mp3",
  },
  {
    key: "437",
    english: "Monarchy",
    pronunciation: "gyal-po ring-lug",
    bhutia: "རྒྱལ་པོའི་ རིང་ལུགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016526/designation/monarchy_ttibge.mp3",
  },
  {
    key: "438",
    english: "Member of Parliament",
    pronunciation: "gos-tsog thu-mi",
    bhutia: "གྱོས་ཚོགས་ འཐུས་མི།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016527/designation/member_of_parliament_d8hw1c.mp3",
  },
  {
    key: "439",
    english: "Minister",
    pronunciation: "lon-po",
    bhutia: "བློན་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016526/designation/minister_by1dg1.mp3",
  },
  {
    key: "440",
    english: "Member of Legislative Assembly",
    pronunciation: "thue-mi",
    bhutia: "འཐུས་མི།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016527/designation/mla_zkdplq.mp3",
  },
  {
    key: "441",
    english: "Mayor",
    pronunciation: "trom-pon",
    bhutia: "ཁྲོམ་དཔོན། ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016528/designation/mayor_puilq1.mp3",
  },
  {
    key: "442",
    english: "Deputy Mayor",
    pronunciation: "tsab-kod trom-pon",
    bhutia: "ཚབ་བཀོད་ ཁྲོམ་དཔོན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016535/designation/deputy_mayor_l9eqob.mp3",
  },
  {
    key: "443",
    english: "Office Superintendent",
    pronunciation: "lae-khung dodam-po",
    bhutia: "ལས་ཁུང་ དོ་དམ་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016526/designation/office_superintendent_s8oncp.mp3",
  },
  {
    key: "444",
    english: "President",
    pronunciation: "srid-zin",
    bhutia: "སྲིད་འཛིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016523/designation/president_kluvqi.mp3",
  },
  {
    key: "445",
    english: "Prime Minister",
    pronunciation: "srid-kyong lon-po",
    bhutia: "སྲིད་སྐྱོང་ བློན་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016522/designation/prime_minister_qn1d9p.mp3",
  },
  {
    key: "446",
    english: "Politician",
    pronunciation: "srid-jyus po",
    bhutia: "སྲིད་བྱུས་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016523/designation/politician_rvsd0n.mp3",
  },
  {
    key: "447",
    english: "Power Minister",
    pronunciation: "log-shug lon-po",
    bhutia: "གློག་ཤུགས་ བློན་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016524/designation/power_minister_nj6stb.mp3",
  },
  {
    key: "448",
    english: "Panchayat",
    pronunciation: "pang-mi",
    bhutia: "དཔང་མི།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016525/designation/panchayat_y8mceo.mp3",
  },
  {
    key: "449",
    english: "Principal Director",
    pronunciation: "gong-chi kod-pon",
    bhutia: "གོང་སྤྱི་ བཀོད་དཔོན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016520/designation/principal_director_oeavpr.mp3",
  },
  {
    key: "450",
    english: "Railway Minister",
    pronunciation: "me-khor lon-po",
    bhutia: "མེ་འཁོར་ བློན་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016519/designation/railway_minister_hzif3z.mp3",
  },
  {
    key: "451",
    english: "Sports Minister",
    pronunciation: "tsed-rigs lon-po",
    bhutia: "རྩེད་རིགས་ བློན་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016542/designation/sports_minister_yyko4p.mp3",
  },
  {
    key: "452",
    english: "Speaker",
    pronunciation: "gyo-tsog lon-po",
    bhutia: "གྱོས་ཚོགས་ བློན་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016527/designation/speaker_d1spcb.mp3",
  },
  {
    key: "453",
    english: "Secretary",
    pronunciation: "drung-che",
    bhutia: "དྲུང་ཆེ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016518/designation/secretary_nfkmgp.mp3",
  },
  {
    key: "454",
    english: "Special Secretary",
    pronunciation: "mig-sal drung-che",
    bhutia: "དམིགས་བསལ་ དྲུང་ཆེན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016533/designation/special_secretary_bu2eby.mp3",
  },
  {
    key: "455",
    english: "Sovereign",
    pronunciation: "nga-wang",
    bhutia: "མངའ་དབང་།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016517/designation/sovereign_wtcqqh.mp3",
  },
  {
    key: "456",
    english: "Vice President",
    pronunciation: "srid-zin zhon-bo",
    bhutia: "སྲིད་འཛིན་ གཞོན་བོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016516/designation/vice_president_auyg9b.mp3",
  },
  {
    key: "457",
    english: "Under Secretary",
    pronunciation: "nga-hog drung-che",
    bhutia: "མངའ་འོག་ དྲུང་ཆེ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016731/designation/under_secretary_mrrpqc.mp3",
  },
  {
    key: "458",
    english: "Writer",
    bhutia: "དྲུང་ཡིག།",
    pronunciation: "drung-yig",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016474/designation/writer_or_clerk_nsbns3.mp3",
  },
  {
    key: "459",
    english: "Clerk",
    bhutia: "དྲུང་ཡིག།",
    pronunciation: "drung-yig",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016474/designation/writer_or_clerk_nsbns3.mp3",
  },
  {
    key: "460",
    english: "Zilla Adakshya",
    bhutia: "རྫོང་བདག།",
    pronunciation: "dzong-dag",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737016731/designation/zilla_adkashya_dwg6xh.mp3",
  },
  {
    key: "461",
    english: "What is your name?",
    bhutia: "རང་ གི་ མིང་ གན་ བོ?",
    pronunciation: "rang-ki ming ghan-bo?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892377/conversation/what_is_your_name_chsgvs.mp4",
  },
  {
    key: "462",
    english: "What is your name?",
    bhutia: "རང་གི་ མཚན་ གན་བོ?",
    pronunciation: "rang-ki chen ghan-bo?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140497/correction/what_is_your_name_second_one_wthdrn.mp3",
  },
  {
    key: "463",
    english: "What is your name? (honorific)",
    bhutia: "ལྷན་རྒྱས་ཀྱི་ མཚན་ གན་ཞུ་དོ?",
    pronunciation: "lhengye-kyi chen ghan-tsu do?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140456/correction/what_is_your_name_with_respect_1_kxrkzh.mp3",
  },
  {
    key: "464",
    english: "My name is Thupten",
    bhutia: "ངའི་མིང་ ཐུབ་བསྟན་ ཨིན།",
    pronunciation: "ngai ming thupten en",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892309/conversation/my_name_is_thupten_ju9jj1.mp4",
  },
  {
    key: "465",
    english: "How are you ?",
    pronunciation: "rang gha-tem yea?",
    bhutia: "རང་ ག་ལྟེམ་ ཡོད?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892262/conversation/how_are_you_cean45.mp4",
  },
  {
    key: "466",
    english: "How are you (honorific) ?",
    pronunciation: "lhengye tha-to gha-tem yea?",
    bhutia: "ལྷན་རྒྱས་ ད་ལྟོ་ ག་ལྟེམ་ ཡོད?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140489/correction/how_are_you_with_respect_vldoyx.mp3",
  },
  {
    key: "467",
    english: "How are you (honorific) ?",
    pronunciation: "lhengye gha-tem yea la",
    bhutia: "སྐུ་གཟུགས་ བཟང་བོ? ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892262/conversation/how_are_you_cean45.mp4",
  },
  {
    key: "468",
    english: "I am fine, thank you",
    pronunciation: "nga lem-ra yea la ",
    bhutia: "ང་ལེགམ་ར་  ཡོད་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140480/correction/i_am_fine_thank_you_xwb0vq.mp3",
  },
  {
    key: "469",
    english: "Where are you from?",
    pronunciation: "rang gha-na led-bo?",
    bhutia: "རང་ ག་ན་ ལས་ བོ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140452/correction/where_are_you_from_ixvifj.mp3",
  },
  {
    key: "470",
    english: "Where are you from? (honorific)",
    pronunciation: "rang gha-na tsu-ghen bo?",
    bhutia: "རང་ ག་ན་ བཞུགས་ མགན་ བོ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140455/correction/where_are_you_from_with_respect_dupv6c.mp3",
  },
  {
    key: "471",
    english: "I am from Bhutan",
    pronunciation: "nga Druk-le en",
    bhutia: "ང་འབྲུག་ ལས་ ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140479/correction/i_am_from_Bhutan_1_jfkfdt.mp3",
  },
  {
    key: "472",
    english: "I am from Bhutan (honorific)",
    pronunciation: "nga Druk lo de-kin en",
    bhutia: " ང་ འབྲུག་ ལོ་ སྡོད་མཁན་ ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140479/correction/I_am_from_bhutan_pi6qrj.mp3",
  },
  {
    key: "473",
    english: "How old are you?",
    pronunciation: "rang-lo gha-je bu?",
    bhutia: "རང་ ལོ་ ག་ཚོད་བོ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140480/correction/how_old_are_you_xyzp3l.mp3",
  },
  {
    key: "474",
    english: "How old are you? (honorific)",
    pronunciation: "lhengye gung-lo ghaje jed-po enam?",
    bhutia: "ལྷན་རྒྱས་ དགུང་ལོ་ ག་ཚོད་ བཞེས་པོ་ ཨིནམ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140480/correction/how_old_are_you_with_respect_k9jcgr.mp3",
  },
  {
    key: "475",
    english: "I am 16 years old",
    pronunciation: "nga-lo chu-druk en",
    bhutia: "ང་ལོ་ བཅུ་དྲུག་ ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140480/correction/i_am_16_years_old_i3dx5j.mp3",
  },
  {
    key: "476",
    english: "I am 16 years old (honorific)",
    pronunciation: "nga-lo chu-druk lang-char ",
    bhutia: "ང་ལོ་ བཅུ་དྲོག་ ལངས་ཚར།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140480/correction/i_am_16_years_old_with_respect_zgjw1z.mp3",
  },
  {
    key: "477",
    english: "What is your job?",
    pronunciation: "rang-ki yog ghan-bo?",
    bhutia: "རང་གི་ གཡོག་ གན་ བོ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140456/correction/what_is_your_job_s4cbdv.mp3",
  },
  {
    key: "478",
    english: "What is your job? (honorific)",
    pronunciation: "lhengye-kyi cha-lay ghan-bo la?",
    bhutia: "ལྷན་རྒྱས་ ཀྱི་ ཕྱག་ལས་ གན་བོ་ལགས?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140457/correction/what_is_your_job_with_respect_zovhht.mp3",
  },
  {
    key: "479",
    english: "I am a teacher",
    pronunciation: "nga loben chig-en",
    bhutia: "ང་ སློབ་དཔོན་ ཅིག་ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140480/correction/i_am_a_teacher_1_vgpm2r.mp3",
  },
  {
    key: "480",
    english: "What is your phone number",
    pronunciation: "rang-ki khapar ang ghan bo?/ghaje-bo?",
    bhutia: "རང་ གི་ ཁ་པར་ ཨང་ གན་བོ/ག་ཚོད་བོ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140456/correction/what_is_your_phone_number_a43x0p.mp3",
  },
  {
    key: "481",
    english: "It is 9002966670",
    pronunciation:
      "nga ei khapar-ang-ang-di gu lekar lekar ni gu druk druk druk din lekar in",
    bhutia: "ངའི་ ཁ་པར་ ཨང་ འདི་༩༠༠༢༩༦༦༦༧༠ ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140472/correction/my_phone_number_is_pzxdkg.mp3",
  },
  {
    key: "482",
    english: "Where are you now?",
    pronunciation: "dhato rang ghana yea?",
    bhutia: "ད་ལྟོ་ རང་ ག་ན་ ཡོད?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140464/correction/where_are_you_now_l4xwgp.mp3",
  },
  {
    key: "483",
    english: "Where are you now? (honorific)",
    pronunciation: "dhatho lhengye ghana juu-yed la?",
    bhutia: "ད་ལྟོ་ ལྷན་རྒྱས་ ག་ན་ བཞུགས་ ཡོད་ལ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140464/correction/where_are_you_now_with_respect_ytg7es.mp3",
  },
  {
    key: "484",
    english: "I am in Sikkim",
    pronunciation: "nga denjong na yea",
    bhutia: "ང་ འབྲས་ལྗོངས་ ན་ ཡོད",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140479/correction/i_am_in_Sikkim_jceifp.mp3",
  },
  {
    key: "485",
    english: "How is your mother?",
    pronunciation: "rang-ki am ghatem yea?",
    bhutia: "རང་གི་ ཨ་མ་ ག་ལྟེམ་ ཡོད?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140489/correction/how_is_your_mom_qvujah.mp3",
  },
  {
    key: "486",
    english: "How is your mother (honorific)",
    pronunciation: "lhengye-kyi yumla dhato khuzu ghatem yea?",
    bhutia: "ལྷན་རྒྱས་ཀྱི་ ཡུམ་ལགས་ ད་ལྟ་ སྐུ་གཟུགས་ ག་ལྟེམ་ ཡོད?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140489/correction/how_is_your_mother_with_respect_jep8uq.mp3",
  },
  {
    key: "487",
    english: "She is very well! thank you",
    pronunciation: "mu lem-ra yea thugje-che",
    bhutia: "མོ་ ལེགམ་ ར་ ཡོད ཐུགས་རྗེ་ཆེ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140464/correction/she_is_very_well_thank_you_e2kqf0.mp3",
  },
  {
    key: "488",
    english: "She's is very well! thank you (honorific)",
    pronunciation: "khong lemra juu-yed la",
    bhutia: "ཁོང་ ལེགམ་ར་ བཞུགས་ཡོད་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140464/correction/she_is_very_well_thank_you_with_respect_hgvjgr.mp3",
  },
  {
    key: "489",
    english: "Where is your school ?",
    pronunciation: "rang-ki lob-dra ghana yed-po?",
    bhutia: "རང་གི་ སློབ་གྲྭ་ ག་ན་ ཡོད་པོ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140443/correction/where_is_your_schol_tinzcl.mp3",
  },
  {
    key: "490",
    english: "Where is your school (honorific)?",
    pronunciation: "lhengye kyi lob-dra gha-na yed-po la?",
    bhutia: "ལྷན་རྒྱས་ཀྱི་ སློབ་གྲྭ་ ག་ན་ ཡོད་པོ་ ལགས?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140463/correction/where_is_your_school_with_respect_r80jia.mp3",
  },
  {
    key: "491",
    english: "It's in the centre of the town",
    pronunciation: "ངའི་ སློབ་གྲྭ་ འདི་ ཁྲོམ་གྱི་ སྦུ་ན་ ཡོད།",
    bhutia: "ni lobdra di thom-ki buna yea",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140472/correction/its_in_the_centre_of_the_town_kezqd7.mp3",
  },
  {
    key: "492",
    english: "Where do you live?",
    pronunciation: "rang ghana de to?",
    bhutia: "རང་ ག་ན་ སྡོད་ཏོ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140448/correction/where_do_you_live_zpzbed.mp3",
  },
  {
    key: "493",
    english: "Where do you live (honorific)",
    pronunciation: "lhengye ghana zudpo nang-do la?",
    bhutia: "ལྷན་རྒྱས་ ག་ན་ བཞུགས་པོ་ གནང་དོ་ ལགས?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140451/correction/where_do_you_live_with_respect_k1rvl7.mp3",
  },
  {
    key: "494",
    english: "I live in a rented house",
    pronunciation: "nga lachi khim-me chig-na deto en",
    bhutia: "ང་ གླ་ཅའི་ ཁྱིམ་མིག་ ཅིག་ན་ སྡོད་ཏོ་ ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140472/correction/i_live_in_a_rented_house_jpwvhd.mp3",
  },
  {
    key: "495",
    english: "Where do you work?",
    pronunciation: "rang ghana yog kyab to?",
    bhutia: "རང་ ག་ན་ གཡོག་རྐྱབས་ ཏོ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140443/correction/where_do_you_work_bxzwxi.mp3",
  },
  {
    key: "496",
    english: "Where do you work (honorific)?",
    pronunciation: "lhengye chalay ghana nang-do enam la?",
    bhutia: "ལྷན་རྒྱས་ ཕྱག་ལས་ ག་ན་ གནང་དོ་ ཨིན་ནམ་ ལགས?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140444/correction/where_do_you_work_with_respect_uqbsfp.mp3",
  },
  {
    key: "497",
    english: "I work in a radio station .",
    pronunciation: "lhengye  drejong ki chang chod po nang ga ?",
    bhutia: "ང་ རླུང་འཕྲིན་ ཁང་ནང་ ལོ་ གཡོག་ རྐྱབས་ཏོ་ ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140472/correction/i_work_at_a_radio_station_p9gwjk.mp3",
  },
  {
    key: "498",
    english: "What are your names? ",
    pronunciation: "rong chui min ghan enam?",
    bhutia: "རང་ཙུའི་ མིང་ གན་ ཨིན་ནམ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140463/correction/what_are_your_names_lqqr4c.mp3",
  },
  {
    key: "499",
    english: "What are your names? (honorific)",
    pronunciation: "lhengye chui-chen ghan enam? la",
    bhutia: " ལྷན་རྒྱས་ ཙུའི་ མཚན་ གན་ ཨིན་ནམ? ལགས!",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140463/correction/what_are_your_names_with_respect_yqrs7v.mp3",
  },

  {
    key: "500",
    english: "Our names are Tshering,Sonam and Dorjee",
    pronunciation: "ngachi min-di: Tshering,Sonam Dorjee en",
    bhutia: "ང་ཅའི་ མིང་ འདི༔ ཚི་རིང་། བསོད་ནམས། རྡོར་རྗེ། ཙུ་ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140471/correction/our_names_are_tshering_sonam_dorjee_wn6ww3.mp3",
  },
  {
    key: "501",
    english: "What sports do you like?",
    pronunciation: "rang-lo chim ghadi ga-cho yed-po?",
    bhutia: "རང་ལོ་ རྩེདམ་ ག་འདི་ དགའ་འཚོར་ ཡོད་ པོ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140456/correction/what_sports_do_you_like_zrw4cy.mp3",
  },
  {
    key: "502",
    english: "What sports do you like?(honorific)",
    pronunciation: "lhengye lod-chem ghadi neyta yea la?",
    bhutia: "ལྷན་རྒྱས་ ལོ་ རྩེདམ་ ག་འདི་ མཉེས་དྲགས་ ཡོད་ལགས?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140456/correction/what_sports_do_you_like_with_respect_lihr2a.mp3",
  },
  {
    key: "503",
    english: "I like football and volleyball",
    pronunciation: "nga-lo kanchoed-poli dang lakchoed-poli cho gad-cho yea",
    bhutia: "ང་ལོ་ རྐང་རྩེད་པོལི་ དང་ ལག་རྩེདཔོལི་ ཙུ་ དགའ་ཚོར་ ཡོད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140472/correction/i_like_football_and_volleyball_x613rf.mp3",
  },
  {
    key: "504",
    english: "What drink do you like ? (honorific)",
    pronunciation: "lhengye lo sekum na ghan jedey yed-po la?",
    bhutia: "ལྷན་རྒྱས་ལོ་ ཞལ་སྐོམ་ན་ གན་བཞེས་ འདོད་ ཡོད་པོ་ ལགས?",
    audiolink: "",
  },
  {
    key: "505",
    english: "What drink do you like?",
    pronunciation: "rang lo ghakom na ghan thung-dey yed-po?",
    bhutia: "རང་ལོ་ ཁ་སྐོམ་ ན་ གན་ འཐུང་འདོད་ ཡོད་པོ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892286/conversation/i_go_to_school_at_8_30_es5fqm.mp4",
  },
  {
    key: "506",
    english: "I like coffee",
    pronunciation: "nga lo coffee/chigzya gacho yea",
    bhutia: "ང་ལོ་ ཀོ་ཕི/ ཚིག་ཇ་ དགའ་ཚོར་ ཡོད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892380/conversation/what_time_do_you_get_up_y0m23j.mp4",
  },
  {
    key: "507",
    english: "How many languages do you speak?",
    pronunciation: "rang-ki kerig ghaje kyab-shu ?",
    bhutia: "རང་གི་ སྐད་རིགས་ ག་ཚོད་ རྐྱབས་ ཚུགས?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892283/conversation/i_get_up_at_6_o_clock_ouqlbq.mp4",
  },
  {
    key: "508",
    english: "How many languages do you speak (honorific)?",
    pronunciation: "lhengye kyi kerig ghaje kyapo nang-chu? la",
    bhutia: "ལྷན་ རྒྱས་ ཀྱིས་ སྐད་རིགས་ ག་ཚོད་ རྐྱབས་པོ་ གནང་ཚུགས་?ལགས།", 
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892384/conversation/what_time_do_you_have_your_breakfast_vvymji.mp4",
  },
  {
    key: "509",
    english: "I can speak three languages Bhutia English and Nepali",
    pronunciation: "nga ki kerig sum kyapchu, dichu: lhoke, enzi dhang nepali ",
    bhutia:
      "ང་ཀིས་ སྐད་རིགས་ གསུམ་རྐྱབས་ཚུགས། འདི་ཙུ༔ ལྷོ་སྐད་,དབྱིན་ཇི་ དང་ ནེ་པ་ལི།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892289/conversation/i_have_breakfast_at_seven_o_clock_wpll9m.mp4",
  },
  {
    key: "510",
    english: "Do you speak English?",
    pronunciation: "rang ki enzi kyab-chu ka?",
    bhutia: "རང་གིས་ དབྱིན་ཇི་ རྐྱབས་ ཚུགས་ཀ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892245/conversation/do_you_like_tea_upt3yj.mp4",
  },
  {
    key: "511",
    english: "Do you speak English? (honorific)",
    pronunciation: "lhengye kyi enzi kyapo nang-chu ka la?",
    bhutia: "ལྷན་རྒྱས་ཀྱིས་ དབྱིན་ཇི་རྐྱབས་པོ་ གནང་ཚུགས་ ཀ་ ལགས?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892403/conversation/yes_i_do_like_tea_kqbqay.mp4",
  },
  {
    key: "512",
    english: "Yes I do ",
    pronunciation: "ah! nga ki kyapchu",
    bhutia: "ཨཾ! ང་ཀིས་རྐྱབས་ཚུགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892243/conversation/do_you_go_to_school_by_bus_o5tgo9.mp4",
  },
  {
    key: "513",
    english: "Do you have a German Car?",
    pronunciation: "rang lo german ki khorlo ye ka?",
    bhutia: "རང ་ལོ་ ཇོར་མན་གྱི་ འཁོར་ལོ་ ཡོད་ཀ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892310/conversation/no_i_don_t_i_go_by_taxi_puoboq.mp4",
  },
  {
    key: "514",
    english: "Do you have a German Car (honorific)?",
    pronunciation: "lhengye lo germen ki khorlo ye ka la?",
    bhutia: "ལྷན་རྒྱས་ལོ་ ཇོར་མན་ གྱི་ འཁོར་ལོ་ ཡོད་ཀ་ལགས?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892244/conversation/do_you_have_a_dog_u52fhw.mp4",
  },
  {
    key: "515",
    english: "No I don't . I have an Indian Car",
    pronunciation: "meh ! nga lo me. nga lo gyagar ki khorlo yea",
    bhutia: "མེད! ང་ལོ་ མེད་ ! ང་ལོ་ རྒྱ་གར་ གྱི་ འགོར་ལོ་ ཡོད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892404/conversation/yes_i_do_b7bfrl.mp4",
  },
  {
    key: "516",
    english: "Do you drink Sikkimese beer?",
    pronunciation: "rang-ki denzong ki beer thung-do?",
    bhutia: "རང་གིས་ འབྲས་ལྗོངས་ཀྱི་ བྷི་ཡེར་ འཐུང་དོ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892242/conversation/do_you_get_up_early_ofg0vi.mp4",
  },
  {
    key: "517",
    english: "Do you drink Sikkimese beer? (honorific) ",
    pronunciation: "lhengye kyi denzong ki beer zepo nangdo la?",
    bhutia: "ལྷན་རྒྱས་ ཀྱིས་ འབྲས་ལྗོངས་ཀྱི་ བྷི་ཡེར་ བཞེས་པོ་ གནང་དོ་ ?ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892404/conversation/yes_i_do_b7bfrl.mp4",
  },
  {
    key: "518",
    english: "Yes I do ",
    pronunciation: "en ! nga ki thungdo /la en nga ki thungdo ",
    bhutia: "ཨིན! ང་ཀིས་ འཐུང་དོ།/ལགས་ ཨིན་ ང་ཀིས་ འཐུང་དོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892342/conversation/what_day_is_it_today_xjnqt0.mp4",
  },
  {
    key: "519",
    english: "No I don't",
    pronunciation: "men! nga ki thungbo me",
    bhutia: "མན!ང་ཀིས་ འཐུང་བོ་ མེད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892336/conversation/today_is_monday_gt51bu.mp4",
  },
  {
    key: "520",
    english: "How much is the Bhutia dictionary?",
    pronunciation: "lope chigzey kyi rin-gong ghaje bo?",
    bhutia: "ལྷོ་པའི་ ཚིག་མཛོད་ཀྱི་ རིག་གོང་ ག་ཚོད་ བོ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892343/conversation/what_day_is_tomorrow_o00tws.mp4",
  },
  {
    key: "521",
    english: "It is 100 rs per book",
    pronunciation: "theb-ri-lo ti-rug gyaray (100 rs)",
    bhutia: "དེབ་རེ་ལོ་ ཏི་རུག་ བརྒྱ་རེ་ ༡༠༠/-",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892337/conversation/tomorrow_is_tuesday_tgrhne.mp4",
  },
  {
    key: "522",
    english: "What time is it please?",
    pronunciation: "ཆུ་ཚོད་ ག་ཚོད་བོ་ ལགས?",
    bhutia: "chu-ched ghaje bo la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892345/conversation/what_days_do_you_go_to_school_blhgfr.mp4",
  },
  {
    key: "523",
    english: "It is 9 'o clock",
    pronunciation: "chu-ched gu be la",
    bhutia: "ཆུ་ཚོད་ དགུ་ སྦད་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892316/conversation/on_Monday_Tuesday_Wednesday_thursday_and_Friday_ci2zpf.mp4",
  },
  {
    key: "524",
    english: "What time do you go to school?",
    pronunciation: "rang chu-ched ga-choed-lo lobdra lo gyu-do?",
    bhutia: "རང་ཆུ་ཚེད་ ག་ཚོད་ལོ་ སློབ་གྲྭ་ལོ་ འགྱུ་དོ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892344/conversation/what_days_are_the_weekends_os28v6.mp4",
  },
  {
    key: "525",
    english: "What time do you go to school? (honorific)",
    pronunciation: "lhengye chu-ched ga-choed-lo lobrda lo chenbo nangdoh la?",
    bhutia: "ལྷན་རྒྱས་ ཆུ་ཚོད་ ག་ཚོད་ལོ་ སློབ་གྲྭ་ ལོ་ བྱོན་བོ་ གནང་དོ་ ལགས།?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892306/conversation/its_on_saturday_zt24aa.mp4",
  },
  {
    key: "526",
    english: "I go to school at 8:30 am",
    pronunciation: "nga chu-choed gay thang phey-lo lobdra-lo gyud-o en",
    bhutia: "ང་ཆུ་ཚོད་ བརྒྱད་དང་ ཕྱེ༹ད་ལོ་ སློབ་གྲྭ་ལོ་ འགྱུ་དོ་ ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892346/conversation/what_days_do_you_like_r5evq0.mp4",
  },
  {
    key: "527",
    english: "What time do you get up?",
    pronunciation: "rang chu-choed gha-choed-lo long-to en-nam? ",
    bhutia: "རང་ ཆུ་ཚོད་  ག་ཚོད་ལོ་ ལོང་ཏོ་ ཨིན་ནམ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892293/conversation/i_like_Monday_and_Friday_mxn6pu.mp4",
  },
  {
    key: "528",
    english: "What time do you get up? (honorific)",
    bhutia: "ལྷན་རྒྱས་ ཆུ་ཚོད་ ག་ཚོད་ལོ་ བཞེངས་པོ་ གནང་དོ་ལགས?",
    pronunciation: "lhengye chu-choed gha-choed-lo zengpo nang-do la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892367/conversation/what_days_do_you_not_like_qxptyh.mp4",
  },
  {
    key: "529",
    english: "I get up at 6 o clock",
    pronunciation: "nga chu-choed drug lo long-to en",
    bhutia: "ང་ ཆུ་ཚོད་ དྲུག་ ལོ་ ལངས་ཏོ་ ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892282/conversation/i_dont_like_Wednesday_and_saturday_u3bbcy.mp4",
  },
  {
    key: "530",
    english: "What time do you have breakfast?",
    pronunciation: "rangi chu-choed gha-choed lo thro-za sado?",
    bhutia: "རང་ ཆུ་ཚོད་ ག་ཚོད་ ལོ་ གྲོ་ཟས་ཟ་དོ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892389/conversation/when_do_you_have_bhutia_subjects_tjewce.mp4",
  },
  {
    key: "531",
    english: "What  time do you have breakfast (honorific)",
    pronunciation: "lhengye chu-choed gha-choed lo thro-za ze-po nang-do la?",
    bhutia: "ལྷན་རྒྱས་ ཆུ་ཚོད་ ག་ཚོད་ལོ་ གྲོ་ཟས་ ཞེས་པོ་ གནང་དོ་ལགས?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892340/conversation/we_have_bhutia_subjects_on_tuesday_nyikpj.mp4",
  },
  {
    key: "532",
    english: "I have breakfast at seven o clock",
    pronunciation: "nga chu-choed dun-lo thro-za sado en ",
    bhutia: "ང་ ཆུ་ཚོད་ བདུན་ལོ་ གྲོ་ཟས་ཟ་དོ་ ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892391/conversation/where_are_you_going_fyovr2.mp4",
  },
  {
    key: "533",
    english: "Do you like tea?",
    pronunciation: "rang lo chhya gacho yed-kam?",
    bhutia: "རང་ལོ་ ཇ་ དགའ་ཚར་ ཡོད་ཀམ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892276/conversation/i_am_going_to_market_oom580.mp4",
  },
  {
    key: "534",
    english: "Do you like tea? (honorific)",
    pronunciation: "lhengye lo seja thug-de ye ka la ?",
    bhutia: "ལྷན་རྒྱས་ལོ་ གསོལ་ཇ་  ཐུགས་འདོད་ཡོད་ཀ་ལགས?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892371/conversation/what_is_this_vqa6fx.mp4",
  },
  {
    key: "535",
    english: "Yes, I do",
    pronunciation: "la en nga ga",
    bhutia: "ལགས་ཨིན་ང་ དགའ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892335/conversation/this_is_a_pen_mdpaq7.mp4",
  },
  {
    key: "536",
    english: "Do you go to school by bus?",
    pronunciation: "rang lobdra lo khor-chen (bus) na gyudo?",
    bhutia: "རང་ སློབ་གྲྭ་ ལོ་ འཁོར་ཆེན་(བྷོས)ན་ འགྱུ་དོ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892396/conversation/where_is_sikkim_o44azf.mp4",
  },
  {
    key: "537",
    english: "Do you go to school by bus (honorific)",
    pronunciation: "lhengye lobdra-lo khor-chen (bus) na chenbo nang-do la? ",
    bhutia: "ལྷན་རྒྱས་ སློབ་གྲྭ་ལོ་ འཁོར་ཆེན་ (བྷོས)ན་ བྱོན་བོ་ གནང་དོ་ ལགས?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892305/conversation/its_in_india_xiveqt.mp4",
  },
  {
    key: "538",
    english: "No, I don't I go by taxi",
    pronunciation: "men na, lokhor chung chung na gyudo en",
    bhutia: "མན་ ང་ གློ་འཁོར་ ཆུང་ཆུང་ན་ འགྱུ་དོ་ ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892372/conversation/what_is_your_address_j98ebn.mp4",
  },
  {
    key: "539",
    english: "Do you have a dog?",
    pronunciation: "rang lo khi yed-po?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892251/conversation/gyalshing_in_west_sikkim_k4ftrg.mp4",
    bhutia: "རང་ལོ་ ཁྱི་ ཡོད་པོ?",
  },
  {
    key: "540",
    english: "Do you have a dog? (honorific)",
    pronunciation: "lhengye lo khi yed-po la?",
    bhutia: "ལྷན་རྒྱས་ལོ་ ཁྱི་ ཡོད་པོ་ ལགས?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892246/conversation/do_you_play_football_jikjsn.mp4",
  },
  {
    key: "541",
    english: "Yes! I have",
    pronunciation: "la! yea la",
    bhutia: "ལགས! ཡོད་ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892405/conversation/yes_i_play_football_tin3x3.mp4",
  },
  {
    key: "542",
    english: "When do you have Bhutia Subject?",
    pronunciation: "rang ke loyek lob-chen nam yed-po enam?",
    bhutia: "རང་གི་ ལྷོ་ཡིག་ སློབ་ཚན་ ནམ་ ཡོད་པོ་ ཨིན་ནམ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892398/conversation/where_is_Tshering_from_dnqjht.mp4",
  },
  {
    key: "543",
    english: "When do you have Bhutia Subject? (honorific)",
    pronunciation: "lhengye kyi loyek lobchen nam yed-po la?",
    bhutia: "ལྷན་རྒྱས་ཀྱི་  ལྷོ་ཡིག་ སློབ་ཚན་ ནམ་ ཡོད་པོ་ ལགས",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892260/conversation/he_s_from_Gangtok_in_Sikkim_bvvzqg.mp4",
  },
  {
    key: "544",
    english: "We have Bhutia Subject on Tuesday",
    pronunciation: "ngachi loyek lob-chen di za-migmarlo yed ",
    bhutia: "ང་ཅའི་ ལྷོ་ཡིག་ སློབ་ཚན་འདི་ གཟའ་ མིག་ དམར་ལོ་ ཡོད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892385/conversation/what_time_do_you_have_your_lunch_uvmqlz.mp4",
  },
  {
    key: "545",
    english: "Where are you going",
    pronunciation: "rang ghana gyudo ?",
    bhutia: "རང་ ག་ན་ འརྒྱུ་དོ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892290/conversation/i_have_my_lunch_at_3_30_ikvrko.mp4",
  },
  {
    key: "546",
    english: "Where are you going (honorific)?",
    pronunciation: "lhengye ghana joen-bo nangdo la ?",
    bhutia: "ལྷན་རྒྱས་ ག་ན་ བྱོན་བོ་ གནང་དོ་ ལགས?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892383/conversation/what_time_do_you_go_to_home_jw7ku2.mp4",
  },
  {
    key: "547",
    english: "I am going to the market",
    pronunciation: "nga heyd-loh gyu-do en ",
    bhutia: "ང་ ཧད་ལོ་ འགྱུ་དོ་ ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892285/conversation/i_go_to_home_at_3_30_zdwdc8.mp4",
  },
  {
    key: "548",
    english: "What is this ?",
    pronunciation: "di ghanbo?",
    bhutia: "འདི་ གན་བོ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892381/conversation/what_time_do_you_go_to_bed_m8tcxv.mp4",
  },
  {
    key: "549",
    english: "This is a pen",
    pronunciation: "di myuko en",
    bhutia: "འདི་ སྨྱུ་གུ་ ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892284/conversation/i_go_to_bed_at_9_o_clock_qqyqs5.mp4",
  },
  {
    key: "550",
    english: "Where is Sikkim?",
    pronunciation: "denzong di ghana yed-po enam?",
    bhutia: "འབྲས་ལྗོངས་ འདི་ ག་ན་ ཡོད་པོ་ ཨིན་ནམ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892267/conversation/how_much_money_do_you_have_z5f9wk.mp4",
  },
  {
    key: "551",
    english: "It's in India",
    pronunciation: "di gyagar na ye",
    bhutia: "འདི་ རྒྱ་གར་ན་ ཡོད",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892287/conversation/i_have_20_rupees_znjqtu.mp4",
  },
  {
    key: "552",
    english: "What is your address?",
    pronunciation: "rang ki khab-yang ghanbo?",
    bhutia: "རང་གི་ ཁ་བྱང་ གན་བོ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892281/conversation/i_did_not_say_anything_y6chpm.mp4",
  },
  {
    key: "553",
    english: "Gyalshing in West Sikkim",
    pronunciation: "gyalshing nub denzong lo en",
    bhutia: "རྒྱལ་ཞིང་ ནུབ་ འབྲས་ལྗོངས་ལོ་ ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892371/conversation/what_is_that_ygrftq.mp4",
  },
  {
    key: "554",
    english: "Do you play football?",
    pronunciation: "rang kangched-poli ched-do nya?",
    bhutia: "རང་ རྐང་རྩེད་པོལི་ རྩེད་དོ་ ཉ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892331/conversation/that_is_my_book_y3nvvy.mp4",
  },
  {
    key: "555",
    english: "Do you play football? (honorific)",
    pronunciation: "lhengye kangched-poli ched-bo nang-do nya la?",
    bhutia: "ལྷན་རྒྱས་ རྐང་རྩེད་པོ་ལི་ རྩེད་བོ་ གནང་དོ་ ཉ་ ལགས?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892367/conversation/what_do_you_want_y7ycab.mp4",
  },
  {
    key: "556",
    english: "Yes I play football",
    pronunciation: "la en nga kangched-poli che-do en ",
    bhutia: "ལགས་ཨིན་ ང་ རྐང་རྩེད་པོ་ལི་ རྩེད་དོ་ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892299/conversation/i_want_bhutia_dictionary_wdamwi.mp4",
  },
  {
    key: "557",
    english: "Where is Tshering from?",
    pronunciation: "tshering ghana le bo?",
    bhutia: "ཚེ་རིང་ ག་ན་ ལས་ བོ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892388/conversation/when_did_you_come_z24fpl.mp4",
  },
  {
    key: "558",
    english: "He is from Gangtok in East Sikkim",
    pronunciation: "khong shyar denzong gatok le en",
    bhutia: "ཁོང་ ཤར་ འབྲས་ལྗོངས་ སྒང་ཏོག་ལས་ ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892279/conversation/i_came_yesterday_arfrcz.mp4",
  },
  {
    key: "559",
    english: "What time do you have lunch?",
    pronunciation: "rang sam chuche ghaje lo sado enam?",
    bhutia: "རང་ ཟམ་ ཆུ་ཚོད་ ག་ཚོད་ལོ་ ཟ་དོ་ ཨིན་ནམ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892392/conversation/where_are_you_going__lcb2od.mp4",
  },
  {
    key: "560",
    english: "What time do you have lunch? (honorific)",
    pronunciation: "lhengye songja chuche ghaje lo zed-po nang-do la?",
    bhutia: "ལྷན་རྒྱས་ གསོང་ཛ་ ཆུ་ཚོད་  ག་ཚོད་ ལོ་ ཞེས་པོ་ གནང་དོ་ ལགས།?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892277/conversation/i_am_going_to_the_monastry_lcsifm.mp4",
  },
  {
    key: "561",
    english: "I have lunch at 3:30 pm",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892249/conversation/for_how_long_are_you_going_kcbioy.mp4",
    bhutia: "ང་  ཆུ་ཚོད་ གསུམ་ དང་ ཕྱེ༹ད་ལོ་ ཛ་བོ་ ཟ་དོ་ ཨིན།",
    pronunciation: "nga chuche sum-thang pheylo zou sado en ",
  },
  {
    key: "562",
    english: "What time do you go home?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892250/conversation/for_two_days_yrkzlm.mp4",
    bhutia: "རང་ ཆུ་ཚོད་ ག་ཚོད་ལོ་ ཁྱིམ་ན་ ལོག་ འགྱུ་དོ?",
    pronunciation: "nyin nyi ki do lo en la?",
  },
  {
    key: "563",
    english: "What time do you go home ? (honorific)",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892240/conversation/bye_bye_ckwym8.mp4",
    bhutia: "ལྷན་རྒྱས་ ཆུ་ཚོད་ ག་ཚོད་ལོ་ གཟིམ་ཁང་ན་ ལོག་ བྱོན་བོ་ གནང་དོ་ ལགས?",
    pronunciation: "lhengye chu-je ghaje lo zimkhang na log-chenbo nang-do la?",
  },

  {
    key: "561",
    english: "Beef",
    bhutia: "གླང་ཤ།",
    pronunciation: "lang-sha",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737021101/meat%20items/beef_dprzbh.mp3",
  },
  {
    key: "123451",
    english: "Boiled beef meat",
    bhutia: "གླང་ཤ་རྒྱ་རི།",
    pronunciation: "lang-sha gya-ri",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737021101/meat%20items/boiled_beef_meat_vzqrwx.mp3",
  },
  {
    key: "123452",
    english: "Boiled pork meat",
    bhutia: "ཕག་ཤ་ རྒྱ་རི།",
    pronunciation: "phag-sha gya-ri",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737021099/meat%20items/boiled_pork_meat_a4ilj8.mp3",
  },
  {
    key: "123453",
    english: "Heads meat",
    bhutia: "མགོ་ཤ།",
    pronunciation: "mgo-sha",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737021080/meat%20items/heads_meat_nxlbfh.mp3",
  },
  {
    key: "123454",
    english: "Legs meat",
    bhutia: "རྐང་ཅུང།",
    pronunciation: "kang-chung",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737021075/meat%20items/legs_meat_affmsv.mp3",
  },
  {
    key: "123455",
    english: "A dish prepared of animal entrails",
    bhutia: "ནང་ཐུག།",
    pronunciation: "nang-thug",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737022165/sikkimese%20dishes/a_dish_prepared_of_animal_entrails_tci4x8.mp3",
  },
  {
    key: "123456",
    english: "A dish prepared from beef entrails that are hanged on a stick",
    bhutia: "རྩང་རྒྱུ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737022166/sikkimese%20dishes/a_dish_prepared_from_beef_entrails_that_are_hanged_in_a_stick_kr7wgp.mp3",
    pronunciation: "tsang-gyu",
  },
  {
    key: "123457",
    english: "A traditional boiled snack prepared from beef's stomatch ",
    pronunciation: "thrum-zi/go-rak shya",
    bhutia: "གྲུམ་ཟི།/གོ་རག་ཤ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739868410/sikkimese%20dishes/a_traditional_boiled_snack_prepared_from_beef_stomach_ge3jd5.mp3",
  },

  {
    key: "562",
    english: "Buffalo Meat",
    bhutia: "མ་ཧེ་ཤ།",
    pronunciation: "ma-he sha",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737021082/meat%20items/buffalo_meat_bgf3jt.mp3",
  },
  {
    key: "563",
    english: "Chicken",
    pronunciation: "bya-sha",
    bhutia: "བྱ༹་ཤ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737021083/meat%20items/chicken_milssc.mp3",
  },
  {
    key: "564",
    english: "Dry Meat",
    pronunciation: "shya-kam/shya-chu",
    bhutia: "ཤ་སྐམ།/ཤ་བཅུད་།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737021084/meat%20items/dry_meat_cmzq9m.mp3",
  },
  {
    key: "565",
    english: "Fish",
    pronunciation: "nya-sha",
    bhutia: "ཉ་ཤ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737021080/meat%20items/fish_meat_hzvouw.mp3",
  },
  {
    key: "567",
    english: "Grilled Meat",
    pronunciation: "sha-seg-seg ko",
    bhutia: "ཤ་བསྲེགས་བསྲེགས་ཀོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737021081/meat%20items/grilled_meat_gvfbst.mp3",
  },
  {
    key: "568",
    english: "Liver (meat)",
    pronunciation: "chin-po",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737021081/meat%20items/liver_irnvo0.mp3",
    bhutia: "མཆིན་པོ།",
  },
  {
    key: "569",
    english: "Mutton",
    pronunciation: "ra-sha",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737021074/meat%20items/mutton_visuar.mp3",
    bhutia: "ར་ཤ།",
  },
  {
    key: "570",
    english: "Pork",
    pronunciation: "pag-sha",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737021075/meat%20items/pork_czgvod.mp3",
    bhutia: "ཕག་ཤ།",
  },
  {
    key: "571",
    english: "Sausage",
    pronunciation: "gyu-ma",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737021074/meat%20items/sausage_qnjire.mp3",
    bhutia: "རྒྱུ་མ།",
  },
  {
    key: "572",
    english: "Yak (meat)",
    pronunciation: "yak-sha",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737021073/meat%20items/yak_hjvht0.mp3",
    bhutia: "གཡག་ཤ།",
  },
  {
    key: "123456780",
    english: "A butter and cheese mixed dish",
    pronunciation: "mar-khu",
    bhutia: "མར་ཁུ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737022168/sikkimese%20dishes/a_butter_and_cheese_mixed_dish_sdatwk.mp3",
  },
  {
    key: "123456781",
    english: "Cheese pickle",
    pronunciation: "chu-akar",
    bhutia: "ཕྱུ་ཨ་ཀར།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737022195/sikkimese%20dishes/cheese_pickle_tn23vp.mp4",
  },
  {
    key: "123456782",
    english: "Cheese broth",
    pronunciation: "chu-to-ku",
    bhutia: "ཕྱུ་ལྟོ་ ཁུ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737022160/sikkimese%20dishes/cheese_broth_os6s7q.mp3",
  },
  {
    key: "1234567893",
    english: " Lhopos traditional cookies made of rice floor",
    pronunciation: "bzae-ro",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737022196/sikkimese%20dishes/Lhopos_traditional_cookies_made_of_rice_flour_ei6s2b.mp4",
    bhutia: "བཞེས་རོ།",
  },
  {
    key: "1234567894",
    english: "Lhopos traditional snack made of rice floor",
    pronunciation: "kha-zae",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737022197/sikkimese%20dishes/lhopos_traditional_snack_made_of_rice_floor_k4uvip.mp4",
    bhutia: "ཁ་ཟས།",
  },
  {
    key: "1234567895",
    english: "Lhopos veg roll",
    pronunciation: "khu-dri",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737022198/sikkimese%20dishes/lhopos_veg_roll_xyzc9f.mp4",
    bhutia: "ཁུ་སྒྲིལ།",
  },
  {
    key: "1234567896",
    english: "Mixed Veg rice",
    pronunciation: "tsod-nyog",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737022201/sikkimese%20dishes/mixed_veg_rice_dlnuou.mp4",
    bhutia: "ཚོད་ཉོག་ལྟོ།",
  },
  {
    key: "1234567897",
    english: "Millet chapati",
    pronunciation: "min-chya khu / min chya khu-lep",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737022199/sikkimese%20dishes/millet_chapati_w6eda2.mp4",
    bhutia: "མིན་ཅག་ཁུ/མིན་ཅག་ཁུ་ལེབ།",
  },
  {
    key: "1234567898",
    english: "Nettle broth",
    pronunciation: "so-chag",
    bhutia: "ཟོ་ཅག་ཚོདམ་ ཡང་ན་ ཟྭོ་ཚོད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737022203/sikkimese%20dishes/nettle_broth_osjfvx.mp4",
  },
  {
    key: "1234567899",
    english: "Rice thukpa or gruel made from rice",
    bhutia: "ཕྱི་ཐུག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737022203/sikkimese%20dishes/rice_thukpa_or_gruel_made_from_rice_zlzrs9.mp4",
    pronunciation: "phi-thug",
  },
  {
    key: "12345678990",
    english: "Wheat porridge ",
    pronunciation: "gu-thug",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739868411/sikkimese%20dishes/wheat_porridge_j0mgnn.mp3",
    bhutia: "དགུ་ཐུག།",
  },
  {
    key: "12345678991",
    english: "Rotten Cheese",
    pronunciation: "chu-rul",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737022209/sikkimese%20dishes/rotten_cheese_tif4cm.mp4",
    bhutia: "ཕྱུ་རིལ།",
  },
  {
    key: "12345678992",
    english: "Rice",
    pronunciation: "so-wo/shal-lag/tho/zam",
    bhutia: "གསོལ་བོ་ ཞལ་ལག་ ལྟོ།ཟམ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737022206/sikkimese%20dishes/rice_gyiqrx.mp4",
  },
  {
    key: "12345678993",
    english: "Fermented soya-bean used as broth",
    pronunciation: "bang-rul",
    bhutia: "བང་རུལ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737022164/sikkimese%20dishes/fermented_soya-bean_used_as_broth_hmrhaq.mp3",
  },
  {
    key: "12345678994",
    english: "Roasted barley flour",
    pronunciation: "tsampo",
    bhutia: "ཕྱི༹་རྩམ།རྩམ་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737022207/sikkimese%20dishes/roasted_barley_flour_t3c0qj.mp4",
  },
  {
    key: "12345678995",
    english: "Shoots of bamboo",
    pronunciation: "dong",
    bhutia: "གདོང།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737022209/sikkimese%20dishes/shoots_of_bamboo_n1sdjb.mp4",
  },
  {
    key: "12345678996",
    english: "A fermented bamboo shoot eaten with rice",
    pronunciation: "rog kyu",
    bhutia: "རོག་སྐྱུ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737022164/sikkimese%20dishes/a_fermented_bamboo_shoots_eaten_with_rice_aujjid.mp3",
  },
  {
    key: "12345678997",
    english: "Tsampa Rice",
    pronunciation: "drem-to",
    bhutia: "བྲེམ་ལྟོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739868411/sikkimese%20dishes/tsampa_rice_aq47qb.mp3",
  },
  {
    key: "12345678998",
    english: "Traditional snack made from wheat flour",
    pronunciation: "lhem",
    bhutia: "ལྷེམ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739868413/sikkimese%20dishes/traditional_snack_made_from_wheat_genxag.mp3",
  },

  {
    key: "12345678999",
    english: "Traditional cookies made of maize",
    pronunciation: "cha-dung",
    bhutia: "བཅག་རྡུང།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739868415/sikkimese%20dishes/traditional_cookies_made_of_maize_x2yfrn.mp3",
  },
  {
    key: "123456789990",
    english: "A large cookie made of wheat",
    pronunciation: "bong-boi nam-chogg",
    bhutia: "བོང་བུའི་ རྣམ་ཅོག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737022163/sikkimese%20dishes/a_large_cooke_made_of_wheat_kg9nh4.mp3",
  },
  {
    key: "123456789991",
    english: "Chapati made of buck wheat",
    pronunciation: "byo khu",
    bhutia: "བྱྰོའོ་ཁུ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737022161/sikkimese%20dishes/chapati_made_of_buck_wheat_l0xwuh.mp3",
  },
  {
    key: "573",
    english: "General (military general)",
    pronunciation: "dà-pön",
    bhutia: "ད་པོན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737020473/military/general_vcxilv.mp3",
  },
  {
    key: "574",
    english: "Colonel",
    pronunciation: "ru-pön",
    bhutia: "རུ་དཔོན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737020477/military/colonel_ddw9ls.mp3",
  },
  {
    key: "575",
    english: "Major (army major)",
    pronunciation: "gyá -pön",
    bhutia: "རྒྱ་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737020472/military/major_sulljf.mp3",
  },
  {
    key: "576",
    english: "Captain (army captain)",
    pronunciation: "ding-pön",
    bhutia: "དིང་པོན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737020478/military/captain_qqsjql.mp3",
  },
  {
    key: "577",
    english: "A soldier ",
    pronunciation: "mák-mi",
    bhutia: "དམག་མི",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737020492/military/a_soldier_ulyxir.mp3",
  },
  {
    key: "578",
    english: "Army",
    pronunciation: "mák-pung",
    bhutia: "དམག་དཔུང་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737020490/military/army_gqojsz.mp3",
  },
  {
    key: "579",
    english: "Regiment",
    pronunciation: "mák-ts'o",
    bhutia: "དམག་ཙོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737020471/military/regiment_jcbilh.mp3",
  },
  {
    key: "580",
    english: "Battalion",
    pronunciation: "ru-ná",
    bhutia: "རུ་ན",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737020486/military/battalion_sphefo.wav",
  },
  {
    key: "581",
    english: "Company (military term)",
    pronunciation: "ding-ts'o",
    bhutia: "དིང་ཚོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737020476/military/company_qxy9kf.mp3",
  },
  {
    key: "582",
    english: "War",
    pronunciation: "mák-t'áb",
    bhutia: "དམག",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737020469/military/war_ehn6db.mp3",
  },
  {
    key: "583",
    english: "The enemy",
    pronunciation: "kyá-pung",
    bhutia: "ཀྱ་པུང༌།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737020470/military/the_enemy_e38tg6.mp3",
  },
  {
    key: "584",
    english: "An engagement (military term)",
    bhutia: "ཐབ་མོ།",
    pronunciation: "táb-mo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737020490/military/an_engagement_yrwtwt.mp3",
  },
  {
    key: "585",
    english: "Re-inforcements",
    bhutia: "པུང་ནོན།",
    pronunciation: "pung-nön",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737020470/military/reinforcements_uumbzc.mp3",
  },
  {
    key: "586",
    english: "Ditto",
    bhutia: "མཀ་ཙོ་ནོན་མ།",
    pronunciation: "mák-ts'o nön-ma",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737020475/military/ditto_i8zpoo.mp3",
  },
  {
    key: "587",
    english: "Earthworks",
    bhutia: "ཏ་བ་ར།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737020474/military/earthworks_or_intrenchments_usyj0a.mp3",
    pronunciation: "t'áb-rá",
  },
  {
    key: "588",
    english: "Intrenchments",
    bhutia: "ཏ་བ་ར།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737020474/military/earthworks_or_intrenchments_usyj0a.mp3",
    pronunciation: "t'áb-rá",
  },
  {
    key: "589",
    english: "To fight",
    bhutia: "འཐབ་འཛིང་།",
    pronunciation: "mák t'áb-she",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737020469/military/to_fight_naknsk.mp3",
  },
  {
    key: "590",
    english: "To retreat",
    bhutia: "སྐྱབས་ལོག་པྱ་ཤེ།",
    pronunciation: "kyáp-lok p'yá-she",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737020469/military/to_retreat_sgezwh.mp3",
  },
  {
    key: "591",
    english: "A cannon ",
    bhutia: "ཙམ་ཕུར་ཡང་ན་གཡོག།",
    pronunciation: "ts'ámpur or gyok",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737020495/military/a_cannon_jcxyqu.mp3",
  },
  {
    key: "592",
    english: "A rifle",
    bhutia: "མེ་མདའ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737020493/military/a_rifle_bvjq77.mp3",
    pronunciation: "mindá",
  },
  {
    key: "593",
    english: "To fire (military term)",
    bhutia: "སྐྱབས་ཤེ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737020468/military/to_fire_fp7lqy.mp3",
    pronunciation: "kyap-she",
  },
  {
    key: "594",
    english: "Are firing",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737020490/military/are_firing_iwh0gg.mp3",
    pronunciation: "kyáp-du' yin",
    bhutia: "སྐྱབས་དུ་ཡིན།",
  },
  {
    key: "595",
    english: "Will fire",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737020469/military/will_fire_mlcrjl.mp3",
    pronunciation: "kyáp-she 'in",
    bhutia: "སྐྱབས་ཤེ་ཡིན།",
  },
  {
    key: "596",
    english:
      "rka (The next 12 letters from here on are known as 'rago consonants')",
    audiolink: "",
    pronunciation: "ra-ka-ta-ka",
    bhutia: "རྐ",
  },
  {
    key: "597",
    english: "rga",
    audiolink: "",
    pronunciation: "ra-ga-ta-ga",
    bhutia: "རྒ",
  },
  {
    key: "598",
    english: "rng",
    audiolink: "",
    pronunciation: "ra-nga-ta-nga",
    bhutia: "རྔ",
  },
  {
    key: "599",
    english: "rja",
    audiolink: "",
    pronunciation: "ra-jza-ta-jza",
    bhutia: "རྗ",
  },
  {
    key: "600",
    english: "rny",
    audiolink: "",
    pronunciation: "ra-nya-ta-nya",
    bhutia: "རྙ",
  },
  {
    key: "601",
    english: "rta",
    audiolink: "",
    pronunciation: "ra-ta-ta-ta",
    bhutia: "རྟ",
  },
  {
    key: "602",
    english: "rda",
    bhutia: "རྡ",
    pronunciation: "ra-da-ta-da",
    audiolink: "",
  },
  {
    key: "603",
    english: "rna",
    audiolink: "",
    bhutia: "རྣ",
    pronunciation: "ra-na-ta-na",
  },
  {
    key: "604",
    english: "rba",
    audiolink: "",
    bhutia: "རྦ",
    pronunciation: "ra-ba-ta-ba",
  },
  {
    key: "605",
    english: "rma",
    audiolink: "",
    bhutia: "རྨ",
    pronunciation: "ra-ma-ta-ma",
  },
  {
    key: "606",
    english: "rtsa",
    audiolink: "",
    bhutia: "རྩ",
    pronunciation: "ra-tsa-ta-tsa",
  },
  {
    key: "607",
    english: "rdza",
    audiolink: "",
    bhutia: "རྫ",
    pronunciation: "ra-dza-ta-dza",
  },
  {
    key: "608",
    english:
      "ska (The next 11 letters from here on are known as 'sa-go consonants'",
    audiolink: "",
    bhutia: "སྐ",
    pronunciation: "sa-ka-ta-ka",
  },
  {
    key: "609",
    english: "sga",
    audiolink: "",
    bhutia: "སྒ",
    pronunciation: "sa-ga-ta-ga",
  },
  {
    key: "610",
    english: "sng",
    audiolink: "",
    bhutia: "སྔ",
    pronunciation: "sa-nga-ta-nga",
  },
  {
    key: "611",
    english: "sny",
    audiolink: "",
    bhutia: "སྙ",
    pronunciation: "sa-nya-ta-nya",
  },
  {
    key: "612",
    english: "sta",
    audiolink: "",
    bhutia: "སྟ",
    pronunciation: "sa-ta-ta-ta",
  },
  {
    key: "613",
    english: "sda",
    audiolink: "",
    bhutia: "སྡ",
    pronunciation: "sa-da-ta-da",
  },
  {
    key: "614",
    english: "sna",
    pronunciation: "sa-na-ta-na",
    bhutia: "སྣ",
    audiolink: "",
  },
  {
    key: "615",
    english: "spa",
    pronunciation: "sa-pa-ta-pa",
    bhutia: "སྤ",
    audiolink: "",
  },
  {
    key: "616",
    english: "sba",
    pronunciation: "sa-ba-ta-ba",
    bhutia: "སྦ",
    audiolink: "",
  },
  {
    key: "617",
    english: "sma",
    pronunciation: "sa-ma-ta-ma",
    bhutia: "སྨ",
    audiolink: "",
  },
  {
    key: "618",
    english: "stsa",
    pronunciation: "sa-tsa-ta-tsa",
    bhutia: "སྩ",
    audiolink: "",
  },
  {
    key: "619",
    english:
      "lka (The next 10 letters from here are known as 'la-go consonants'",
    audiolink: "",
    pronunciation: "la-ka-ta-ka",
    bhutia: "ལྐ",
  },
  {
    key: "620",
    english: "lga",
    pronunciation: "la-ga-ta-ga",
    bhutia: "ལྒ",
    audiolink: "",
  },
  {
    key: "621",
    english: "lng",
    pronunciation: "la-nga-ta-nga",
    bhutia: "ལྔ",
    audiolink: "",
  },
  {
    key: "622",
    english: "lca",
    pronunciation: "la-cha-ta-cha",
    bhutia: "ལྕ",
    audiolink: "",
  },
  {
    key: "623",
    english: "lja",
    pronunciation: "la-zha-ta-zha",
    bhutia: "ལྗ",
    audiolink: "",
  },
  {
    key: "624",
    english: "lta",
    pronunciation: "la-ta-ta-ta",
    bhutia: "ལྟ",
    audiolink: "",
  },
  {
    key: "625",
    english: "lda",
    pronunciation: "la-da-ta-da",
    bhutia: "ལྡ",
    audiolink: "",
  },
  {
    key: "626",
    english: "lpa",
    pronunciation: "la-pa-ta-pa",
    bhutia: "ལྤ",
    audiolink: "",
  },
  {
    key: "627",
    english: "lba",
    pronunciation: "la-ba-ta-ba",
    bhutia: "ལྦ",
    audiolink: "",
  },
  {
    key: "628",
    english: "lha",
    pronunciation: "la-ha-ta-ha",
    bhutia: "ལྷ",
    audiolink: "",
  },
  {
    key: "629",
    english: "kwa (The next 15 letters are known as 'wazur consonants')",
    pronunciation: "ka-wazur",
    bhutia: "ཀྭ",
    audiolink: "",
  },
  {
    key: "630",
    english: "khwa",
    pronunciation: "kha-wazur",
    bhutia: "ཁྭ",
    audiolink: "",
  },
  {
    key: "631",
    english: "gwa",
    pronunciation: "ga-wazur",
    bhutia: "གྭ",
    audiolink: "",
  },
  {
    key: "632",
    english: "cwa",
    pronunciation: "cha-wazur",
    bhutia: "ཅྭ",
    audiolink: "",
  },
  {
    key: "633",
    english: "nwa",
    pronunciation: "nya-wazur",
    bhutia: "ཉྭ",
    audiolink: "",
  },
  {
    key: "634",
    english: "twa",
    pronunciation: "ta-wazur",
    bhutia: "ཏྭ",
    audiolink: "",
  },
  {
    key: "635",
    english: "dwa",
    pronunciation: "da-wazur",
    bhutia: "དྭ",
    audiolink: "",
  },
  {
    key: "636",
    english: "tswa",
    pronunciation: "tsa-wazur",
    bhutia: "ཙྭ",
    audiolink: "",
  },
  {
    key: "637",
    english: "tshwa",
    pronunciation: "tsha-wazur",
    bhutia: "ཚྭ",
    audiolink: "",
  },
  {
    key: "638",
    english: "shaa",
    pronunciation: "shaa-wazur",
    bhutia: "ཞྭ",
    audiolink: "",
  },
  {
    key: "639",
    english: "sha",
    pronunciation: "sha-wazur",
    bhutia: "ཟྭ",
    audiolink: "",
  },
  {
    key: "640",
    english: "rwa",
    pronunciation: "ra-wazur",
    bhutia: "རྭ",
    audiolink: "",
  },
  {
    key: "641",
    english: "lwa",
    pronunciation: "la-wazur",
    bhutia: "ལྭ",
    audiolink: "",
  },
  {
    key: "642",
    english: "shwa",
    bhutia: "ཤྭ",
    pronunciation: "shya-wazur",
    audiolink: "",
  },
  {
    key: "643",
    english: "swa",
    bhutia: "སྭ",
    pronunciation: "sa-wazur",
    audiolink: "",
  },
  {
    key: "644",
    english: "hwa",
    pronunciation: "ha-wazur",
    audiolink: "",
    bhutia: "ཧྭ",
  },
  {
    key: "645",
    english: "ka (The letters from here on are consonants)",
    pronunciation: "ka",
    audiolink: "",
    bhutia: "ཀ",
  },
  {
    key: "646",
    english: "kha",
    pronunciation: "kha",
    audiolink: "",
    bhutia: "ཁ",
  },
  {
    key: "647",
    english: "ga",
    pronunciation: "ga",
    audiolink: "",
    bhutia: "ག",
  },
  {
    key: "648",
    english: "gha",
    pronunciation: "gha",
    bhutia: "ག",
    audiolink: "",
  },
  {
    key: "649",
    english: "nga",
    pronunciation: "nga",
    bhutia: "ང",
    audiolink: "",
  },
  {
    key: "650",
    english: "cha",
    pronunciation: "cha",
    bhutia: "ཅ",
    audiolink: "",
  },
  {
    key: "651",
    english: "chaa",
    bhutia: "ཆ",
    pronunciation: "chaa",
    audiolink: "",
  },
  {
    key: "652",
    english: "zhya",
    bhutia: "ཇ",
    pronunciation: "zhya",
    audiolink: "",
  },
  {
    key: "653",
    english: "nya",
    bhutia: "ཉ",
    pronunciation: "nya",
    audiolink: "",
  },
  {
    key: "654",
    english: "ta",
    bhutia: "ཏ",
    pronunciation: "ta",
    audiolink: "",
  },
  {
    key: "655",
    english: "tha",
    bhutia: "ཐ",
    pronunciation: "tha",
    audiolink: "",
  },
  {
    key: "656",
    english: "da",
    bhutia: "ད",
    pronunciation: "da",
    audiolink: "",
  },
  {
    key: "657",
    english: "na",
    bhutia: "ན",
    pronunciation: "na",
    audiolink: "",
  },
  {
    key: "658",
    english: "pa",
    bhutia: "པ",
    pronunciation: "pa",
    audiolink: "",
  },
  {
    key: "659",
    english: "pha",
    bhutia: "ཕ",
    pronunciation: "pha",
    audiolink: "",
  },
  {
    key: "660",
    english: "ba",
    bhutia: "བ",
    pronunciation: "ba",
    audiolink: "",
  },
  {
    key: "661",
    english: "ma",
    bhutia: "མ",
    pronunciation: "ma",
    audiolink: "",
  },
  {
    key: "662",
    english: "tsa",
    bhutia: "ཙ",
    pronunciation: "tsa",
    audiolink: "",
  },
  {
    key: "663",
    english: "tsha",
    bhutia: "ཚ",
    pronunciation: "tsha",
    audiolink: "",
  },
  {
    key: "664",
    english: "dza",
    bhutia: "ཛ",
    pronunciation: "dza",
    audiolink: "",
  },
  {
    key: "665",
    english: "wa",
    bhutia: "ཝ",
    pronunciation: "wa",
    audiolink: "",
  },
  {
    key: "666",
    english: "zha",
    bhutia: "ཞ",
    pronunciation: "zha",
    audiolink: "",
  },
  {
    key: "667",
    english: "za",
    bhutia: "ཟ",
    pronunciation: "za",
    audiolink: "",
  },
  {
    key: "668",
    english: "ha",
    bhutia: "འ",
    pronunciation: "ha",
    audiolink: "",
  },
  {
    key: "669",
    english: "ya",
    bhutia: "ཡ",
    pronunciation: "ya",
    audiolink: "",
  },
  {
    key: "670",
    english: "ra",
    bhutia: "ར",
    pronunciation: "ra",
    audiolink: "",
  },
  {
    key: "671",
    english: "la",
    bhutia: "ལ",
    pronunciation: "la",
    audiolink: "",
  },
  {
    key: "672",
    english: "shya",
    bhutia: "ཤ",
    pronunciation: "shya",
    audiolink: "",
  },
  {
    key: "673",
    english: "saa",
    bhutia: "ས",
    pronunciation: "saa",
    audiolink: "",
  },
  {
    key: "674",
    english: "haa",
    bhutia: "ཧ",
    pronunciation: "haa",
    audiolink: "",
  },
  {
    key: "675",
    english: "aa (The next five letters from here on are vowels)",
    bhutia: "ཨ",
    pronunciation: "aa",
    audiolink: "",
  },
  {
    key: "676",
    english: "",
    bhutia: "ཨི",
    pronunciation: "akhiku e",
    audiolink: "",
  },
  {
    key: "677",
    english: "",
    bhutia: "ཨུ",
    pronunciation: "ashyapchu uh",
    audiolink: "",
  },
  {
    key: "678",
    english: "",
    bhutia: "ཨེ",
    pronunciation: "adengbo a",
    audiolink: "",
  },
  {
    key: "679",
    english: "",
    bhutia: "ཨོ",
    pronunciation: "anaro o",
    audiolink: "",
  },
  {
    key: "680",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "681",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "682",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "683",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "684",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "685",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "750",
    english: "Buddha",
    pronunciation: "sangay",
    bhutia: "སངས་རྒྱས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739030648/Mythology/buddha_ejujyf.mp3",
  },
  {
    key: "751",
    english: "Dharma",
    pronunciation: "chhoe",
    bhutia: "ཆོས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739030652/Mythology/dharma_swydv9.mp3",
  },
  {
    key: "752",
    english: "Sangha",
    pronunciation: "gayduen",
    bhutia: "དགོ་འདུན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739030891/Mythology/sangha_iowuim.mp3",
  },
  {
    key: "753",
    english: "Avalokitesvara",
    pronunciation: "chenrayzig",
    bhutia: "སྤྱན་རས་གཟིགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739030647/Mythology/avalokitesvara_fjsypr.mp3",
  },
  {
    key: "754",
    english: "Monjushri",
    pronunciation: "jampalyang/jampayang/jamyang",
    bhutia: "འཇམ་དཔལ་དབྱངས།/འཇམ་པའི་དབྱངས།/འཇམ་དབྱངས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739030890/Mythology/monjushri_kufb9s.mp3",
  },
  {
    key: "755",
    english: "Vajra Pani",
    pronunciation: "chhagnag dorjee/chhagdor",
    bhutia: "ཕྱག་ནག་རྡོར་ཇེ།/ཕྱག་རྡོར།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739030646/Mythology/vajra_pani_fvhqfn.mp3",
  },
  {
    key: "756",
    english: "Tara",
    pronunciation: "dolma",
    bhutia: "སྒྲོལ་མ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739030897/Mythology/tara_qvxdxa.mp3",
  },
  {
    key: "757",
    english: "Aparimitav",
    pronunciation: "tsipameth",
    bhutia: "ཚེ་དཔག་མེད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739030646/Mythology/aparimitav_bfffov.mp3",
  },
  {
    key: "758",
    english: "Dev",
    pronunciation: "lha",
    bhutia: "ལྷ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739030652/Mythology/dev_lqwxvu.mp3",
  },
  {
    key: "759",
    english: "Asura",
    pronunciation: "lhamain",
    bhutia: "ལྷ་མ་ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739030647/Mythology/asura_wq3egd.mp3",
  },
  {
    key: "760",
    english: "Demon",
    pronunciation: "lhamin",
    bhutia: "ལྷ་མིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739030648/Mythology/demon_bsvtn9.mp3",
  },
  {
    key: "761",
    english: "Hell",
    pronunciation: "ngyalwa",
    bhutia: "དམྱལ་བ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739030653/Mythology/hell_ptvhws.mp3",
  },
  {
    key: "762",
    english: "Spirit",
    pronunciation: "hidhaag",
    bhutia: "ཡི་དྭགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739030896/Mythology/spirit_ykfqud.mp3",
  },
  {
    key: "763",
    english: "Preth",
    pronunciation: "hidhaag",
    bhutia: "ཡི་དྭགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739030896/Mythology/spirit_ykfqud.mp3",
  },
  {
    key: "764",
    english: "Poshu",
    pronunciation: "dhuedro",
    bhutia: "དུད་འགྲོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739030646/Mythology/animals__v6eh8q.mp3",
  },
  {
    key: "765",
    english: "Demon",
    pronunciation: "sinpo",
    bhutia: "སྲིན་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739030648/Mythology/demon_bsvtn9.mp3",
  },
  {
    key: "767",
    english: "Yaksha",
    pronunciation: "gnoejin",
    bhutia: "གནོད་སྤྱོན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739030646/Mythology/yaksha_or_demi_qzmd8h.mp3",
  },
  {
    key: "768",
    english: "Demi",
    pronunciation: "gnoejin",
    bhutia: "གནོད་སྤྱོན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739030646/Mythology/yaksha_or_demi_qzmd8h.mp3",
  },
  {
    key: "769",
    english: "Vidyadhara",
    pronunciation: "rigzin",
    bhutia: "རིག་འཛིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739030646/Mythology/vidhyadhara_tkrcy3.mp3",
  },
  {
    key: "770",
    english: "Rudra",
    pronunciation: "dragpo",
    bhutia: "དྲག་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739030891/Mythology/Rudra_shiva_d8dezf.mp3",
  },
  {
    key: "771",
    english: "Shiva",
    pronunciation: "dragpo",
    bhutia: "དྲག་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739030891/Mythology/Rudra_shiva_d8dezf.mp3",
  },
  {
    key: "772",
    english: "Mahadev",
    pronunciation: "lhachhen",
    bhutia: "ལྷ་ཆེན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739030890/Mythology/mahadev_mcnhus.mp3",
  },
  {
    key: "773",
    english: "Brahma",
    pronunciation: "tshangpa",
    bhutia: "ཚངས་པ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739030647/Mythology/brahma_rmqlqc.mp3",
  },
  {
    key: "774",
    english: "Vishnu",
    pronunciation: "khyabju",
    bhutia: "ཁྱབ་འཇུག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739030646/Mythology/vishnu_z0d796.mp3",
  },
  {
    key: "775",
    english: "Shiva",
    pronunciation: "wangchhuk",
    bhutia: "དབང་ཕྱུག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739030892/Mythology/shiva__ggnnxs.mp3",
  },

  {
    key: "776",
    english: "Indra",
    pronunciation: "gyajin",
    bhutia: "བརྒྱ་བྱིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739030653/Mythology/indra_b8g6jl.mp3",
  },
  {
    key: "777",
    english: "Basundara",
    pronunciation: "norgyenmo",
    bhutia: "ནོར་རྒྱུན་མོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739030647/Mythology/basundara_hnjmh4.mp3",
  },
  {
    key: "778",
    english: "Kuvera",
    pronunciation: "zambalha",
    bhutia: "ཛམ་བྷ་ལྷ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739030697/Mythology/kuvera__dpsjpp.mp3",
  },
  {
    key: "779",
    english: "Kuvera",
    pronunciation: "zamlha",
    bhutia: "ཛམ་ལྷ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739030654/Mythology/kuvera_iwts6b.mp3",
  },
  {
    key: "780",
    english: "Ganapati or Ganesh",
    pronunciation: "tshgdaag",
    bhutia: "ཚོགས་བདག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739030652/Mythology/dharmapal_mfqmqm.mp3",
  },
  {
    key: "781",
    english: "Dharmapal",
    pronunciation: "chhoekyong",
    bhutia: "ཆོས་སྐྱོང།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739030652/Mythology/dharmapal_mfqmqm.mp3",
  },
  {
    key: "782",
    english: "Sore throat",
    pronunciation: "ke-na-ma/kim-na-ma-then",
    bhutia: "རྐན་ན་རྨ།/ སྐོདམ་ན་ རྨ་འཐོན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080096/at%20the%20hospital/sore_throat_emoal0.mp4",
  },
  {
    key: "783",
    english: "Shortness of Breath",
    pronunciation: "ushak",
    bhutia: "དབུགས་བསག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080096/at%20the%20hospital/shortness_of_breath_cmdif7.mp4",
  },
  {
    key: "784",
    english: "Fatigue",
    pronunciation: "thang-che/udhuk/ngal-shey",
    bhutia: "ཐང་ཆད་/འུ་སྡུག་/ངལ་ཤད",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079551/at%20the%20hospital/fatigue_dcwr9n.mp4",
  },
  {
    key: "785",
    english: "Dry Cough",
    pronunciation: "kam-shah/lossah/lepo-mepo-mepay-lossah-kyapshey",
    bhutia: "སྐམ་སག་/གློ་སག/ལུད་པོ་ མེད་པའི་ གློ་སག་ རྐྱབས་ཤད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079552/at%20the%20hospital/dry_cough_racikx.mp4",
  },
  {
    key: "786",
    english: "Fever",
    pronunciation: "thiba/darkhyong-sho",
    bhutia: "དྲོད་འབར་/བརྡར་གྱོང་ཞུན་།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079552/at%20the%20hospital/fever_c45ts1.mp4",
  },
  {
    key: "787",
    english: "Intubation",
    pronunciation:
      "ke-khi-dung-chung/mendung/ne-pe-khatang-nale-khekey-thungcho chukti menchu physay",
    bhutia:
      "གྱིག་གི་ དུང་ཅུང་།/ སྨན་དུང་། /ནད་པོའི་ ཁ་ དང་ སྣ་ལས་ གྱིག་གི་ དུང་ཅུང་ བཙུག་སྟི་ སྨན་བཅོས་ བྱ༹ས་ཤད",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079553/at%20the%20hospital/incubation_gnjesq.mp4",
  },
  {
    key: "788",
    english: "Lockdown",
    pronunciation: "gotambo/gochepo/khatub-gyumathopey thimche tangbo",
    bhutia:
      "སྒོ་སྡམ་བོ།/ སྒོ་བཅད་པོ་།/ ག་ཐོབ་ འགྱུ་ མ་ ཐོབ་ པའི་ ཁྲིམས་བཅད་ བཏང་བོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079553/at%20the%20hospital/lockdown_cjyb3m.mp4",
  },
  {
    key: "789",
    english: "Social Distancing",
    pronunciation: "chichok-kyangche/mithang mi-phar kyangche",
    bhutia: "སྤྱི་ཚོགས་ རྒྱང་ ཚད།/ མི་ དང་ མིའི་ བར་ རྒྱང་ཚད་།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080096/at%20the%20hospital/social_distancing_zp13vy.mp4",
  },
  {
    key: "790",
    english: "Psychiatrist",
    pronunciation: "semney-menpo/semkham-chepey-mepo/semkham-mepo",
    bhutia: "སེམས་ནད་ སྨན་པོ་།/ སེམས་ཁམས་བཅོས་པའི་ སྨན་པོ། /སེམས་ཁམས་ སྨན་པོ་།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080096/at%20the%20hospital/psychiatrist_zdd1hk.mp4",
  },
  {
    key: "791",
    english: "Contagious",
    pronunciation: "sen-ney/nin-chenkine/phenchen-semdi-kyungpe-neloh-lap",
    bhutia: "ཟུན་ནད་། /ཉེན་ཅན་གྱི་ ནད་།/ ཕན་ཚུན་ ཟུན་སྡི་ འགྱུ་བའི་ ནད་ལོ་ ལབ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079550/at%20the%20hospital/contagious_wmwceu.mp4",
  },
  {
    key: "792",
    english: "Epidemiologist",
    pronunciation: "neyem taktsepo",
    bhutia: "ནད་ཡམས་ བརྟག་དཔྱད་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079551/at%20the%20hospital/epidemiolosit_j7lxb4.mp4",
  },
  {
    key: "793",
    english: "Emergency room",
    pronunciation: "chapche-menga/malam-chekang",
    bhutia: "ཚབ་ཆེན་ སྨན་ཁང་/མ་ལག་ བཅོས་ཁང།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079550/at%20the%20hospital/emergency_room_u4qrq6.mp4",
  },
  {
    key: "794",
    english: "Sneeze",
    pronunciation: "bhipo-shyarsey",
    bhutia: "བི་པོ་ ཤར་ཤད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080096/at%20the%20hospital/sneeze_tlg1rc.mp4",
  },
  {
    key: "795",
    english: "Dietician",
    pronunciation: "samki-theten-kheypo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079552/at%20the%20hospital/Dietician_pmkjxi.mp4",
    bhutia: "ཟམ་གྱི་ འཕྲོད་རྟེན་ མཁས་པོ།",
  },
  {
    key: "796",
    english: "Diagnosis",
    pronunciation: "necha-tsheychey/nelo-che-phyasey",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079551/at%20the%20hospital/Diagnosis_w99o77.mp4",
    bhutia: "ནད་རྩ་དཔྱད་ཤད་།/ ནད་ལོ་ རྩད་ དཔྱད་ བྱ༹ས་ཤད་།",
  },
  {
    key: "797",
    english: "Pneumonia",
    pronunciation: "nang-che/lok-che/lokpo-ke-cheney",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079554/at%20the%20hospital/pneumonia_gemtcd.mp4",
    bhutia: "ནང་ཚད་།/ གློ་ཚད་།/ གློ་བོ་གི་ ཚད་ནད།",
  },
  {
    key: "798",
    english: "Depression",
    pronunciation: "semney-nacha/lophem-nacha",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079551/at%20the%20hospital/depression_hxdrzl.mp4",
    bhutia: "སེམས་ནད་ན་ཚ།/ བློ་ཕམ་ན་ཚ།",
  },
  {
    key: "799",
    english: "Stress",
    pronunciation: "semney/sem-ne-nacha",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080097/at%20the%20hospital/stress_nbo1sw.mp4",
    bhutia: "སེམས་ནད་།/ སེམས་རྣོན་ན་ཚ།",
  },
  {
    key: "800",
    english: "Bacteria",
    pronunciation: "tha-pe-buk-sin",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079550/at%20the%20hospital/bacteria_cadrnm.mp4",
    bhutia: "ཕྲ་བའི་ འབུ་ སྲིན།",
  },
  {
    key: "801",
    english: "Virus",
    pronunciation: "thuk-sem/nebu-thasen",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080097/at%20the%20hospital/virus_cc1lwq.mp4",
    bhutia: "དུག་སྲིན་། /ནད་ འབུ་ཕྲ་སྲིན།",
  },
  {
    key: "802",
    english: "Immunization",
    pronunciation: "nesung-menkhap",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079553/at%20the%20hospital/immunization_zedwx6.mp4",
    bhutia: "ནད་སྲུང་སྨན་ཁབ་།",
  },
  {
    key: "803",
    english: "Immunity",
    pronunciation: "nikham-nesuk (lezhenlo khakchukpe ni shuk yepo)",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079552/at%20the%20hospital/immunity_uqil8g.mp4",
    bhutia: "ལུས་ཁམས་ ནུས་ཤུགས་།(ནད་གཞན་ལོ་ བཀག་ཚུགས་པའི་ ནུས་ ཤུགས་ ཡོད་པོ།)",
  },
  {
    key: "804",
    english: "Immune System",
    pronunciation: "zukham-lamlok",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079552/at%20the%20hospital/immune_system_rmp7nx.mp4",
    bhutia: "གཟུགས་ཁམས་ ལམ་ ལུགས་།",
  },
  {
    key: "805",
    english: "Preventive medicine",
    pronunciation: "yen-goki men",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079605/at%20the%20hospital/preventive_medicine_hvvvij.mp4",
    bhutia: "སྔོན་ འགོག་གི་ སྨན་།",
  },
  {
    key: "806",
    english: "Preventive Measures",
    pronunciation: "yen-go thaplam",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079579/at%20the%20hospital/preventive_measures_seleif.mp4",
    bhutia: "",
  },
  {
    key: "807",
    english: "Outpatient",
    pronunciation: "philoki-nepo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079554/at%20the%20hospital/outpatient_trq7rc.mp4",
    bhutia: "ཕྱི༹་ལོག་གི་ ནད་པོ།",
  },
  {
    key: "808",
    english: "Inpatient",
    pronunciation: "nangdey-nepo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079553/at%20the%20hospital/inpatient_vqylpv.mp4",
    bhutia: "ནང་སྡོད་ ནད་པོ།",
  },
  {
    key: "809",
    english: "Intensive care unit (ICU)",
    pronunciation: "sapche-thechen-khang",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079553/at%20the%20hospital/intensive_care_unit_rjpffo.mp4",
    bhutia: "ཟབ་བཅོས་ སྡེ་ཚན་ཁང།",
  },
  {
    key: "810",
    english: "Vaccine",
    pronunciation: "gomen (nemasin neyenlo kakthop menkhap chig)",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080097/at%20the%20hospital/vaccine_uuzdlr.mp4",
    bhutia: "འགོག་སྨན་། (ནད་མ་ཟུན་ སྔོན་ལོ་བཀག་ཐབས་སྨན་ཁབ་ཅིཁ)",
  },
  {
    key: "811",
    english: "Ambulance",
    pronunciation: "nepe-khorlo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079550/at%20the%20hospital/ambulance_pq508s.mp4",
    bhutia: "ནད་པའི་ འཁོར་ལོ།",
  },
  {
    key: "812",
    english: "Outbreak",
    pronunciation: "hato khama gepo (neshok hato kama tharkyap thenbo)",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079554/at%20the%20hospital/outbreak_pfbazj.mp4",
    bhutia: "ཧང་ཏོག་མ་ འགས་པོ།(ནད་སོགས་ཧང་ཏོག་ ཁ་མ་ དར་ ཁྱབ་འཐོན་བོ)",
  },
  {
    key: "813",
    english: "Hand Sanitizer",
    pronunciation: "jejor lakhyu",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079552/at%20the%20hospital/handsanitizer_bmrwhh.mp4",
    bhutia: "རྗས་སྦྱོར་ ལག་འཁྱུར།",
  },
  {
    key: "814",
    english: "Pandemic",
    pronunciation: "yongkhyap neyam",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079554/at%20the%20hospital/pandemic_wh5otu.mp4",
    bhutia: "ཡོངས་ཁྱབ ་ནད་ཡམས།",
  },
  {
    key: "815",
    english: "Epidemic",
    pronunciation: "rigne/neyom/kyapdolcheve neyam",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079550/at%20the%20hospital/epidemic_eptlk3.mp4",
    bhutia: "རིམས་ནད་།/ ནད་ཡམས་།/ ཁྱབ་རྡལ་ཚེ་བའི་ ནད་ཡམས་།",
  },
  {
    key: "816",
    english: "Quarantine",
    pronunciation: "nedo zurzhyok theyen",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080096/at%20the%20hospital/quarantine_jgfuht.mp4",
    bhutia: "ནད་ དྭོགས་ཟུར་ འཇོག་དུས་ཡོན།",
  },
  {
    key: "817",
    english: "Curfew",
    pronunciation: "thempang kagya",
    audiolink: "",
    bhutia: "ཐེམ་སྤང་ བཀའ་རྒྱ།",
  },
  {
    key: "818",
    english: "COVID-19",
    pronunciation: "tokchep nerim chugo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079551/at%20the%20hospital/covid19_i6nhjo.mp4",
    bhutia: "ཏོག་དབྱིབས་ ནད་རིམས༡༩",
  },
  {
    key: "819",
    english: "Coronavirus",
    pronunciation: "tokchep nebu thasin",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079551/at%20the%20hospital/coronavirus_nb0rbu.mp4",
    bhutia: "ཏོག་དབྱིབས་ ནད་ འབུ་ ཕྲ་སྲིན།",
  },
  {
    key: "820",
    english: "Are you feeling well?",
    pronunciation: "rangtzu lhem thenzi ga?/rangyuiemze lhem thangjay ga",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739083445/at%20the%20hospital/are_you_feeling_well___qvhakp.mp3",
    bhutia: "རང་གཟུགས་ལེགམ་ འཐོན་ཞེ་ག?/རང་སྨྱུང་གཞི་ལེགམ་ དྭངས་ཞེ་ག?",
  },
  {
    key: "821",
    english: "Slightly recovered",
    pronunciation: "aatshim aucheje",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739083450/at%20the%20hospital/slightly_recovered_npexiu.mp3",
    bhutia: "ཨ་ཙིམ་ ཨའོ་ ཙི་ཞེ།",
  },
  {
    key: "822",
    english: "What was the illness ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739083825/at%20the%20hospital/what_was_the_illness_ghwyqr.mp3",
    bhutia: "ན་ཚ་འདི་ གན་ འབོ?",
    pronunciation: "ngacha di khanbo?",
  },
  {
    key: "823",
    english: "Suffering from headache",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080193/at%20the%20hospital/suffering_from_headache_ydwsin.mp3",
    bhutia: "མགོ་ ན་བའི་ ན་ཚ་ སྦད།",
    pronunciation: "go nabey ngacha beh ",
  },
  {
    key: "824",
    english: "Suffering from stomach ache",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080193/at%20the%20hospital/suffering_from_stomachache_wrgyjz.mp3",
    pronunciation: "supo/pho nabo in",
    bhutia: "བསུ་པོ/ཕོའོ་ན་ བོ་ཨིན།",
  },
  {
    key: "825",
    english: "Suffering from back ache ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080199/at%20the%20hospital/suffering_from_backache_jlrg9o.mp3",
    pronunciation: "gyap nabo en",
    bhutia: "རྒྱབ་ ན་བོ་ ཨིན།",
  },
  {
    key: "826",
    english: "Suffering from leg pain",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080193/at%20the%20hospital/suffering_from_leg_pain_bvpf9z.mp3",
    pronunciation: "kangpo nabo en",
    bhutia: "རྐང་པོ་ ན་བོ་ ཨིན།",
  },
  {
    key: "827",
    english: "Suffering from fever",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080198/at%20the%20hospital/suffering_from_fever_e4c5uf.mp3",
    pronunciation: "darkyong  kyab-ti",
    bhutia: "བརྡར་གྱོང་  རྐྱབས་སྟི།",
  },
  {
    key: "828",
    english: "Suffering from diarrohea",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080199/at%20the%20hospital/suffering_from_diarrohea_jvu4bj.mp3",
    pronunciation: "nga supo shedi",
    bhutia: "ང་བསུ་པོ་ བཤལ་སྡི།",
  },
  {
    key: "829",
    english: "Suffering from diarrohea and vomiting",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739084078/at%20the%20hospital/suffering_from_vomiting_and_dirrohea_nz131b.mp3",
    pronunciation: "nga shay kyu thopo en",
    bhutia: "ང་ལོ་ བཤལ་ སྐྱུག་ འཐབ་པོ་ ཨིན།",
  },

  {
    key: "831",
    english: "Having vomiting tendency",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080173/at%20the%20hospital/having_vomiting_tendency_vgpflu.mp3",
    pronunciation: "kyuklogh kyapti",
    bhutia: "སྐྱུག་ལོག་ རྐྱབས་སྟི།",
  },
  {
    key: "832",
    english: "Suffering from dizziness",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080198/at%20the%20hospital/suffering_from_dizziness_hm3og2.mp3",
    pronunciation: "goyung khodi",
    bhutia: "མགོ་ཡུང་ འཁོར་སྡི།",
  },
  {
    key: "833",
    english: "Having gall vesicle",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080173/at%20the%20hospital/having_vesicle_of_gall_gkh1l9.mp3",
    pronunciation: "thrip longpo bhyeth",
    bhutia: "མཁྲིསབ་ ལོང་པོ་ སྦད།",
  },
  {
    key: "834",
    english: "Suffering from chest burn",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080199/at%20the%20hospital/suffering_from_chest_burn_bczs38.mp3",
    pronunciation: "phyang tsha longti",
    bhutia: "བྱང་ཚ་ ལོང་སྟི།",
  },
  {
    key: "835",
    english: "Suffering from asthma",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080200/at%20the%20hospital/suffering_from_asthama_sbe8qe.mp3",
    pronunciation: "ugsag longti",
    bhutia: "དབུགས་ བསགས་ ལོང་སྟི།",
  },
  {
    key: "836",
    english: "Caught flu",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080181/at%20the%20hospital/caught_flu_o9knny.mp3",
    pronunciation: "lochyam suendi",
    bhutia: "གློ་ཅམ་ ཟུན་སྡི།",
  },
  {
    key: "837",
    english: "Suffering for heartache",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080193/at%20the%20hospital/suffering_from_heartache_s7gz8d.mp3",
    pronunciation: "dhunhi nati",
    bhutia: "དུ་སྙིང་ ན་སྟི།",
  },
  {
    key: "838",
    english: "Shooting pain in half portion of body",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080174/at%20the%20hospital/having_shooting_pain_in_half_portion_of_body_nssdf3.mp3",
    pronunciation: "zu phyeth zedi",
    bhutia: "གཟུགས་ཕྱེད་ གཟེར་སྡི།",
  },
  {
    key: "839",
    english: "Shooting pain in half portion of head",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080173/at%20the%20hospital/having_shooting_pain_in_half_portion_of_head_wokngx.mp3",
    pronunciation: "go phyeth zedi",
    bhutia: "མགོ་ ཕྱེད་ གཟེར་དི།",
  },
  {
    key: "840",
    english: "Lost appetitie",
    pronunciation: "thangkha chhyethti",
    audiolink: "",
    bhutia: "དྭངས་ཁ་ ཆད་སྟི།",
  },
  {
    key: "841",
    english: "Shooting in limbs",
    pronunciation: "kaang laag zedi",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080174/at%20the%20hospital/having_shooting_in_limbs_ntgil6.mp3",
    bhutia: "རྐང་ལག་ གཟེར་སྡི།",
  },
  {
    key: "842",
    english: "Eye pain",
    pronunciation: "mikdho nati",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080198/at%20the%20hospital/suffering_from_eye_pain_phn9h4.mp3",
    bhutia: "མིག་རྡོག་ ན་སྟི།",
  },
  {
    key: "843",
    english: "Suffering from toothache",
    pronunciation: "so suk kyapti",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080192/at%20the%20hospital/suffering_from_toothache_fqhe0a.mp3",
    bhutia: "སོ་ཟུག་ རྐྱབས་སྟི།",
  },
  {
    key: "844",
    english: "Having dry throat",
    pronunciation: "kyom khomti",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080179/at%20the%20hospital/having_dry_throat_nqyaa5.mp3",
    bhutia: "རྐོདམ་ ཁོམ་སྟི།",
  },
  {
    key: "845",
    english: "Body itch",
    pronunciation: "zug yati",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739085211/at%20the%20hospital/body_itch_gvedfw.mp3",
    bhutia: "གཟུཁས་ གཡའ་སྟི།",
  },
  {
    key: "846",
    english: "Half portion of the body is paralyzed",
    pronunciation: "zu phyeth pashyrth meth",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739085317/at%20the%20hospital/half_portion_of_body_paralyzed_vlspzk.mp3",
    bhutia: "གཟུགས་ཕྱེད་ སྤ་ཤད་ མེད།",
  },
  {
    key: "847",
    english: "Having ear pain",
    pronunciation: "naamcho nati",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080179/at%20the%20hospital/earache_lkytgm.mp3",
    bhutia: "རྣམ་ཅོག་ ན་སྟི།",
  },
  {
    key: "848",
    english: "Body slimmed down",
    pronunciation: "zu khomti",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080180/at%20the%20hospital/body_slimmed_down_fkyoxi.mp3",
    bhutia: "གཟུགས་ ཁོམ་སྟི།",
  },
  {
    key: "849",
    english: "This is a liver problem",
    pronunciation: "chhinpoi natsha bhyeth",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080187/at%20the%20hospital/this_is_liver_problem_ft6two.mp3",
    bhutia: "མཆིན་པོའི་ ན་ཚ་ སྦད།",
  },
  {
    key: "850",
    english: "This is tuberculosis",
    pronunciation: "glo neth bhyeth",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080186/at%20the%20hospital/this_is_tuberculosis_qchma6.mp3",
    bhutia: "གློ་ནད་ སྦད།",
  },
  {
    key: "851",
    english: "This says it is cancer",
    pronunciation: "ten neth bhyeth labzin dhug",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080180/at%20the%20hospital/cancer_disease_ditizr.mp3",
    bhutia: "སྤྲན་ནད་ ཨིན་ ལབ་བཞིན་ འདུག།",
  },
  {
    key: "852",
    english: "Getting feverish",
    pronunciation: "khyang chhuen kyapti",
    audiolink: "",
    bhutia: "གྱངས་ཆུན་ ལོང་སྟི།",
  },
  {
    key: "853",
    english: "Having gassy stomach",
    pronunciation: "supo ghangti",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080174/at%20the%20hospital/having_gassy_stomach_fdvjzs.mp3",
    bhutia: "བསུ་པོ་ གང་སྡི",
  },
  {
    key: "854",
    english: "Behaving abnormally",
    pronunciation: "chholtsa long long thyen dhug",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080181/at%20the%20hospital/behaving_abnormally_au2ino.mp3",
    bhutia: "འཆོལ་རྩ་ ལོང་ལོང་ འཐོན་འདུག།",
  },
  {
    key: "855",
    english: "Anger issues",
    pronunciation: "khong-tog long-po",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739085571/at%20the%20hospital/anger_issues_eh0jre.mp3",
    bhutia: "ཁོང་ཁྲོ་ ལོང་པོ་།",
  },
  {
    key: "856",
    english: "Have you shown the doctor",
    pronunciation: "menpolo tyenjay gaam",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739085666/at%20the%20hospital/have_you_shown_the_doctor_1_mxfmwm.mp3",
    bhutia: "སྨན་པོ་ལོ་ སྟོན་ཞེ་ གམ?",
  },
  {
    key: "857",
    english: "Taking medicine after treatment ",
    pronunciation: "mhenpolo tyendi mhen sadoh in ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080205/at%20the%20hospital/taking_medicine_after_treatment_fclykh.mp3",
    bhutia: "སྨན་པོ་ལོ་ སྟོན་ སྡི་ སྨན་ཟ་དོ་ ཨིན།",
  },
  {
    key: "858",
    english: "Is there an injection?",
    pronunciation: "mhen khap yethpo?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739085917/at%20the%20hospital/is_there_an_injection_ssdrmb.mp3",
    bhutia: "སྨན་ཁབ་ ཡོད་པོ།?",
  },
  {
    key: "859",
    english: "Took four injections before yesterday",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080205/at%20the%20hospital/taken_four_injection_before_yesterday_xec7wb.mp3",
    bhutia: "སྨན་ཁབ་ དི་ཚེ་ བཞི་ རྐྱབས་ཚར།",
    pronunciation: "mhen khap thitsi kyaptsha",
  },
  {
    key: "860",
    english: "These medicines are slightly benefiting",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742144195/correction/these_medicines_are_slightly_benefitting_po38gd.mp3",
    bhutia: "སྨན་འདིས་ ཨ་ཙི་ ཕན་དོ།",
    pronunciation: "mhendi aatsi fendoh",
  },
  {
    key: "861",
    english: "Apetite is improving these days",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140818/correction/apetite_is_imporivng_these_days_final_tzbdfl.mp3",
    bhutia: "ད་རེ་ ཟམ་མའི་ དྭངས་ཁ་ ཨ་ཙི་ འཐོན་དོ།",
    pronunciation: "tharay samme thangka achi thendo",
  },

  {
    key: "862",
    english: "Direction",
    pronunciation: "chhog",
    bhutia: "མཆོས་།",
    audiolink: "",
  },
  {
    key: "863",
    english: "East",
    pronunciation: "shar",
    bhutia: "ཤར་།",
    audiolink: "",
  },
  {
    key: "864",
    english: "South",
    pronunciation: "lho",
    bhutia: "ལྷོ་།",
    audiolink: "",
  },
  {
    key: "865",
    english: "West",
    pronunciation: "nub",
    bhutia: "ནུབ་།",
    audiolink: "",
  },
  {
    key: "866",
    english: "North",
    pronunciation: "chhang",
    bhutia: "བྱང་།",
    audiolink: "",
  },
  {
    key: "867",
    english: "South-East",
    pronunciation: "lho-shar",
    bhutia: "ལྷོ་ཤར་།",
    audiolink: "",
  },
  {
    key: "868",
    english: "South-West",
    pronunciation: "lho-nub",
    bhutia: "ལྷོ་ནུབ་།",
    audiolink: "",
  },
  {
    key: "869",
    english: "North-West",
    pronunciation: "chhang-nub",
    bhutia: "བྱངས་ནུབ་།",
    audiolink: "",
  },
  {
    key: "870",
    english: "North-East",
    pronunciation: "chhang-shar",
    bhutia: "བྱང་ཤར་།",
    audiolink: "",
  },
  {
    key: "871",
    english: "Up",
    pronunciation: "teng",
    bhutia: "སྟེང་།",
    audiolink: "",
  },
  {
    key: "872",
    english: "Down",
    pronunciation: "hog",
    bhutia: "འོག་།",
    audiolink: "",
  },
  {
    key: "873",
    english: "Middle",
    pronunciation: "bhar",
    bhutia: "བར་།",
    audiolink: "",
  },
  {
    key: "874",
    english: "Side",
    pronunciation: "sur",
    bhutia: "ཟུར་།",
    audiolink: "",
  },
  {
    key: "875",
    english: "Centre",
    pronunciation: "bhu",
    bhutia: "སྦུ་།",
    audiolink: "",
  },
  {
    key: "876",
    english: "Up",
    pronunciation: "ya",
    bhutia: "ཡར་།",
    audiolink: "",
  },
  {
    key: "877",
    english: "Left side",
    pronunciation: "yoen",
    bhutia: "གཡོན་",
    audiolink: "",
  },
  {
    key: "878",
    english: "Right side",
    pronunciation: "ye",
    bhutia: "གཡས་",
    audiolink: "",
  },
  {
    key: "879",
    english: "Corner",
    pronunciation: "su",
    bhutia: "ཟུ་།",
    audiolink: "",
  },
  {
    key: "880",
    english: "Upward",
    pronunciation: "tengkha/gyen",
    bhutia: "སྟེང་ཁ/གྱེན་།",
    audiolink: "",
  },
  {
    key: "881",
    english: "Downward",
    pronunciation: "thukhom/hogtoh",
    bhutia: "འོག་ཐོ་།",
    audiolink: "",
  },
  {
    key: "882",
    english: "That",
    pronunciation: "fidi",
    bhutia: "ཕྱི་འདི་།",
    audiolink: "",
  },
  {
    key: "883",
    english: "Here",
    pronunciation: "dikha/dina",
    bhutia: "འདི་ཁ་ /འདི་ན་།",
    audiolink: "",
  },
  {
    key: "884",
    english: "There",
    pronunciation: "okha",
    bhutia: "ཨོ་ཁ་།",
    audiolink: "",
  },
  {
    key: "885",
    english: "Above",
    pronunciation: "ya",
    bhutia: "ཡར་།",
    audiolink: "",
  },
  {
    key: "886",
    english: "Upper",
    pronunciation: "yagi",
    bhutia: "ཡ་་གི།",
    audiolink: "",
  },
  {
    key: "887",
    english: "Down",
    pronunciation: "thukom",
    bhutia: "ཐུར་ཀུམ།",
    audiolink: "",
  },

  {
    key: "888",
    english: "Top",
    pronunciation: "tokha",
    bhutia: "ཐོག་ཁ་།",
    audiolink: "",
  },
  {
    key: "889",
    english: "Up and Down",
    pronunciation: "yahog",
    bhutia: "ཡར་འོག་།",
    audiolink: "",
  },
  {
    key: "890",
    english: "Bone",
    pronunciation: "kurue",
    bhutia: "རིས་ཏོག།/སྐུ་རུས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739583430/body_parts/bone_qhelbr.mp3",
  },
  {
    key: "891",
    english: "Anus",
    pronunciation: "aangbu",
    bhutia: "ཨང་བུག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739583429/body_parts/anus_pd75gk.mp3",
  },
  {
    key: "892",
    english: "Male Organ (Penis)",
    pronunciation: "fotsen",
    bhutia: "ཕོ་མཚན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739583429/body_parts/male_organ_wpcc23.mp3",
  },
  {
    key: "893",
    english: "Female Organ (Vagina)",
    pronunciation: "motsen",
    bhutia: "མོ་མཚན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739583429/body_parts/female_organ_ktthxw.mp3",
  },
  {
    key: "894",
    english: "Tail",
    pronunciation: "bhapu",
    bhutia: "བར་སྦུ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739583418/body_parts/tail_clvypv.mp3",
  },
  {
    key: "895",
    english: "Foot Print",
    pronunciation: "kang jhye",
    bhutia: "རྐང་རྫེས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739583417/body_parts/foot_print__hadsgj.mp3",
  },
  {
    key: "896",
    english: "Joint",
    pronunciation: "kangtshig",
    bhutia: "རྐང་ཚིག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739583417/body_parts/joint_uurdrk.mp3",
  },
  {
    key: "897",
    english: "Heel",
    pronunciation: "tingpo",
    bhutia: "རྟིང་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739583417/body_parts/heel_ndl4ej.mp3",
  },
  {
    key: "898",
    english: "Sole",
    pronunciation: "kangti",
    bhutia: "རྐང་མཐིལ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739583416/body_parts/sole__i6ge64.mp3",
  },
  {
    key: "899",
    english: "Chest",
    pronunciation: "phyangok",
    bhutia: "བྱང་གོག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739583416/body_parts/chest_xofjyy.mp3",
  },
  {
    key: "900",
    english: "Rib",
    pronunciation: "tsilo",
    bhutia: "རྩིབ་ལོག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739583415/body_parts/rib_i9si3w.mp3",
  },
  {
    key: "901",
    english: "Skin",
    pronunciation: "shyapak",
    bhutia: "ཤ་པག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739583414/body_parts/skin_afhrgy.mp3",
  },
  {
    key: "902",
    english: "Stomach",
    pronunciation: "jhyafo/sup",
    bhutia: "འཇག་ཕོ/གསུས་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739583414/body_parts/stomach_sszsxu.mp3",
  },
  {
    key: "903",
    english: "Naval",
    pronunciation: "ti ti",
    bhutia: "ལྟི་ལྟི།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739583416/body_parts/naval_y5lsvp.mp3",
  },
  {
    key: "904",
    english: "Thigh",
    pronunciation: "kledhum",
    bhutia: "རླད་ཟླུམ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739583416/body_parts/thigh_x576h5.mp3",
  },
  {
    key: "905",
    english: "Fingers",
    pronunciation: "zupmo",
    bhutia: "མཛུབ་མོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739583415/body_parts/finger_ksmm3i.mp3",
  },
  {
    key: "906",
    english: "Thumb",
    pronunciation: "Thepchen",
    bhutia: "མཐེབ་ཆེན",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739583415/body_parts/thumb_y4w8dl.mp3",
  },
  {
    key: "907",
    english: "Fore Finger",
    pronunciation: "dhid zup",
    bhutia: "སྡིག་ཛུབ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739583415/body_parts/fore_finger_vpyivx.mp3",
  },
  {
    key: "908",
    english: "Middle Finger",
    pronunciation: "sin zup",
    bhutia: "སྲིན་ཛུབ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739583415/body_parts/middle_finger_q6zsvk.mp3",
  },
  {
    key: "909",
    english: "Fourth Finger",
    pronunciation: "thepchung",
    bhutia: "མཐེབ་ཅུང",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739583414/body_parts/fourth_finger_hpcopx.mp3",
  },
  {
    key: "910",
    english: "Little Finger",
    pronunciation: "zupchung",
    bhutia: "མཛུབ་ཅུང",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739583414/body_parts/little_finger_fkkq43.mp3",
  },
  {
    key: "911",
    english: "Nail",
    pronunciation: "simu",
    bhutia: "སིན་མོ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739583414/body_parts/nail_nfjw7o.mp3",
  },
  {
    key: "912",
    english: "Clench",
    pronunciation: "paar",
    bhutia: "པཱར",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739583414/body_parts/clench_lwv9dk.mp3",
  },

  {
    key: "913",
    english: "Head",
    pronunciation: "mgo",
    bhutia: "མགོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737013088/body_parts/head_gms2to.mp3",
  },
  {
    key: "914",
    english: "Hair",
    pronunciation: "kya",
    bhutia: "སྐྱ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737012876/body_parts/hair_avewt4.mp3",
  },
  {
    key: "915",
    english: "Eye",
    pronunciation: "mig",
    bhutia: "མིག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737012987/body_parts/eye_d22mvs.mp3",
  },
  {
    key: "916",
    english: "Eyelash",
    pronunciation: "mig-cham pu",
    bhutia: "མིག་ལྕམ་སྤུ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737012913/body_parts/eyelash_vosluc.mp3",
  },
  {
    key: "917",
    english: "Eye-brow",
    pronunciation: "mig-po",
    bhutia: "མིག་སྤོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737012990/body_parts/eye-brow_u4zhj5.mp3",
  },
  {
    key: "918",
    english: "Eyelids",
    pronunciation: "mig-pag",
    bhutia: "མིག་ལྤགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737013041/body_parts/eyelids_xxlnbb.mp3",
  },
  {
    key: "919",
    english: "Ear",
    pronunciation: "nam-chog",
    bhutia: "རྣམ་གཅོག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737013005/body_parts/ear_sj8rwr.mp3",
  },
  {
    key: "920",
    english: "Nose",
    pronunciation: "nha-gu",
    bhutia: "སྣ་གུག",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737013723/body_parts/nose_gp6tmo.mp3",
  },
  {
    key: "921",
    english: "Mouth",
    pronunciation: "kha",
    bhutia: "ཁ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737012902/body_parts/mouth_o4h4ek.mp3",
  },
  {
    key: "922",
    english: "Teeth",
    pronunciation: "so",
    bhutia: "སྲོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737013709/body_parts/teeth_uzopat.mp3",
  },
  {
    key: "923",
    english: "Tongue",
    pronunciation: "chae",
    bhutia: "ལྕེ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737013724/body_parts/tongue_zfhef0.mp3",
  },
  {
    key: "924",
    english: "Face",
    pronunciation: "dhong",
    bhutia: "གདོང།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737012957/body_parts/face_hffdrb.mp3",
  },
  {
    key: "925",
    english: "Neck",
    pronunciation: "ke",
    bhutia: "སྐེ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737013055/body_parts/neck_ks4vmk.mp3",
  },
  {
    key: "926",
    english: "Stomach",
    pronunciation: "suu-po",
    bhutia: "སུས་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737013685/body_parts/stomach_brxizy.mp3",
  },
  {
    key: "927",
    english: "Chest",
    pronunciation: "byangkhog",
    bhutia: "བ༹ྱང་ཁོག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739583416/body_parts/chest_xofjyy.mp3",
  },
  {
    key: "928",
    english: "Hand",
    pronunciation: "lag-ko",
    bhutia: "ལག་ཀོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737013081/body_parts/hand_vwmraj.mp3",
  },
  {
    key: "929",
    english: "Shoulder",
    pronunciation: "pung-po",
    bhutia: "དཔུང་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737013680/body_parts/shoulder_ygk0qn.mp3",
  },
  {
    key: "930",
    english: "Armpit",
    pronunciation: "chen-khung",
    bhutia: "མཆན་ཁུང།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739868211/body_parts/armpit_tkacfn.mp3",
  },
  {
    key: "931",
    english: "Arm",
    pronunciation: "lag-nya",
    bhutia: "ལག་ཉ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737011253/body_parts/arm_dhbtny.mp3",
  },
  {
    key: "932",
    english: "Elbow",
    pronunciation: "kyi-ling",
    bhutia: "ཀྱི་ལིང།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737012925/body_parts/elbow_jy2nyu.mp3",
  },
  {
    key: "933",
    english: "Wrist",
    pronunciation: "lag-tshig",
    bhutia: "ལག་ཚིགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737013723/body_parts/wrist_qt17xy.mp3",
  },
  {
    key: "934",
    english: "Backside",
    pronunciation: "gyap",
    bhutia: "རྒྱབ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737012959/body_parts/backside_ul2mm5.mp3",
  },
  {
    key: "935",
    english: "Waist",
    pronunciation: "kyed-po",
    bhutia: "སྐེད་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737013671/body_parts/waist_aacxeq.mp3",
  },
  {
    key: "936",
    english: "Leg",
    pronunciation: "khang-po",
    bhutia: "སྐེད་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737012846/body_parts/leg_pftgip.mp3",
  },
  {
    key: "937",
    english: "Thigh",
    pronunciation: "lae-dum",
    bhutia: "བརླེ་དུམ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737013725/body_parts/thigh_ozbadv.mp3",
  },
  {
    key: "938",
    english: "Knee",
    pronunciation: "pue-mo",
    bhutia: "པུས་མོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737013074/body_parts/knee_tinfe9.mp3",
  },
  {
    key: "939",
    english: "Calf (body part)",
    pronunciation: "bhya-nya",
    bhutia: "བ༹ྱ་ཉ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737012934/body_parts/calf_yupy06.mp3",
  },
  {
    key: "940",
    english: "Shin",
    pronunciation: "ngar-dhung",
    bhutia: "ངར་མདོང།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737013686/body_parts/shin_gu70rs.mp3",
  },
  {
    key: "941",
    english: "Feet",
    pronunciation: "khang-thil",
    bhutia: "རྐང་མཐིལ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737012921/body_parts/feet_xj9q65.mp3",
  },
  {
    key: "942",
    english: "Time",
    pronunciation: "chhu tshoeth",
    bhutia: "ཆུ་ཚོད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595302/Times/time__pgscib.mp3",
  },
  {
    key: "943",
    english: "Minute",
    pronunciation: "karma",
    bhutia: "སྐར་མོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595302/Times/minute_aphlxk.mp3",
  },
  {
    key: "944",
    english: "Second",
    pronunciation: "karchha",
    bhutia: "སྐར་ཆ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595301/Times/second_gw4xwf.mp3",
  },
  {
    key: "945",
    english: "A day/one day",
    pronunciation: "ngin chi",
    bhutia: "ཉིན་གཅིག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595301/Times/a_day_or_one_day_jdqrpk.mp3",
  },
  {
    key: "946",
    english: "Two days",
    pronunciation: "ngin ngi",
    bhutia: "ཉིན་གཉིས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595297/Times/two_days_uhdjpp.mp3",
  },
  {
    key: "947",
    english: "Three days",
    pronunciation: "ngin sum",
    bhutia: "ཉིན་གསུམ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595297/Times/three_days_b4txjf.mp3",
  },
  {
    key: "948",
    english: "Four days",
    pronunciation: "ngin nga",
    bhutia: "ཉིན་ བཞི།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595297/Times/four_days_qtfguk.mp3",
  },
  {
    key: "949",
    english: "Five days",
    pronunciation: "ngin nga",
    bhutia: "ཉིན་ ལྔ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595296/Times/five_days_i87ava.mp3",
  },
  {
    key: "950",
    english: "Six days",
    pronunciation: "ngin thruk",
    bhutia: "ཉིན་དྲུག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595296/Times/six_days_nlzinq.mp3",
  },
  {
    key: "951",
    english: "Seven days",
    pronunciation: "ngin dhuen",
    bhutia: "ཉིན་ བདུན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595296/Times/seven_days_okxofi.mp3",
  },
  {
    key: "952",
    english: "Eight days",
    pronunciation: "ngin gyath",
    bhutia: "ཉིན་བརྒྱད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595296/Times/eight_days_dmpfew.mp3",
  },
  {
    key: "953",
    english: "Nine days",
    pronunciation: "ngin ghu",
    bhutia: "ཉིན་ དགུ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595291/Times/nine_days_edbl6v.mp3",
  },
  {
    key: "954",
    english: "Ten days",
    pronunciation: "ngin chu thamba",
    bhutia: "ཉིན་ བཅུ་ཐམ་བ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595291/Times/ten_days_oxmroy.mp3",
  },
  {
    key: "955",
    english: "One night",
    pronunciation: "shyak chi",
    bhutia: "ཉིན་ བཅུ་ཐམ་བ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595290/Times/one_night_p7pced.mp3",
  },
  {
    key: "956",
    english: "Two nights",
    pronunciation: "shyak ngi",
    bhutia: "ཞག་ གཉིས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595290/Times/two_nights_upfiv1.mp3",
  },
  {
    key: "957",
    english: "Three nights",
    pronunciation: "shyak sum",
    bhutia: "ཞག་ གསུམ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595290/Times/three_nights_ehukdt.mp3",
  },
  {
    key: "958",
    english: "Four nights",
    pronunciation: "shyak zi",
    bhutia: "ཞག་ བཞི།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595290/Times/four_nights_rmbznx.mp3",
  },
  {
    key: "959",
    english: "Five nights",
    pronunciation: "shyak nga",
    bhutia: "ཞག་ལྔ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595290/Times/five_nights_zxmoye.mp3",
  },
  {
    key: "960",
    english: "Six nights",
    pronunciation: "shyak thruk",
    bhutia: "ཞག་ དྲུག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595289/Times/six_nights_x4hkaf.mp3",
  },
  {
    key: "961",
    english: "Seven nights",
    pronunciation: "shyak dhuen",
    bhutia: "ཞག་ བདུན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595284/Times/seven_nights_cfml2r.mp3",
  },
  {
    key: "962",
    english: "Eight nights",
    pronunciation: "shyak gyeth",
    bhutia: "ཞག་ བརྒྱད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595284/Times/eight_nights_c5vxmw.mp3",
  },
  {
    key: "963",
    english: "Nine nights",
    pronunciation: "shyak ghu",
    bhutia: "ཞག་ དགུ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595284/Times/nine_nights_zh1eyi.mp3",
  },
  {
    key: "964",
    english: "A year or one year",
    pronunciation: "lo",
    bhutia: "ལོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595284/Times/a_year_cqsxbx.mp3",
  },
  {
    key: "965",
    english: "Century",
    pronunciation: "thuerab",
    bhutia: "དུས་རབས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595284/Times/century_vktesp.mp3",
  },
  {
    key: "966",
    english: "Week",
    pronunciation: "dhuen thraag",
    bhutia: "བདུན་ཕྲག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595283/Times/week_wyjvbt.mp3",
  },
  {
    key: "967",
    english: "Day",
    pronunciation: "zakaar",
    bhutia: "གཟའ་སྐར།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595283/Times/day_qvpehk.mp3",
  },
  {
    key: "968",
    english: "Period",
    pronunciation: "dhuetsham",
    bhutia: "དུས་མཚམས་།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595283/Times/time_period_p4u0en.mp3",
  },
  {
    key: "969",
    english: "Tense",
    pronunciation: "dhue",
    bhutia: "དུས་།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595279/Times/tense_audbj9.mp3",
  },
  {
    key: "970",
    english: "Past",
    pronunciation: "dhepo",
    bhutia: "འདས་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595278/Times/past_cdbfyd.mp3",
  },
  {
    key: "971",
    english: "Future",
    pronunciation: "mahongpo",
    bhutia: "མ་འོངས་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595278/Times/past_cdbfyd.mp3",
  },
  {
    key: "972",
    english: "Present (time)",
    pronunciation: "dhatawa",
    bhutia: "ད་ལྟ་བ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595277/Times/present_fswhtg.mp3",
  },
  {
    key: "973",
    english: "Quickly",
    pronunciation: "malaag malaag",
    bhutia: "མ་ལག་ མ་ལག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595277/Times/quickly_gvkm5z.mp3",
  },
  {
    key: "974",
    english: "Occasionally",
    pronunciation: "dhue dhuelo",
    bhutia: "དུས་དུས་ལོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595277/Times/occassionally_cjfbci.mp3",
  },
  {
    key: "975",
    english: "Time to Time",
    pronunciation: "dhue dhuelo",
    bhutia: "དུས་དུས་ལོ་།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595272/Times/time_to_time_obhhrt.mp3",
  },
  {
    key: "976",
    english: "Continuous",
    pronunciation: "dhueguen",
    bhutia: "དུས་རྒྱུན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595272/Times/continuous_cs8mip.mp3",
  },
  {
    key: "977",
    english: "Continuously",
    pronunciation: "dhuetaagpar",
    bhutia: "དུས་རྒྱུན་ མེད་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595272/Times/continuously_yaugfe.mp3",
  },
  {
    key: "978",
    english: "Yearly",
    pronunciation: "lo tar",
    bhutia: "ལོ་ལྟར།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595271/Times/yearly_fbc2xn.mp3",
  },
  {
    key: "979",
    english: "Yearly",
    pronunciation: "loma chha",
    bhutia: "ལོ་མ་ཆག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595271/Times/yearly__lbfhnn.mp3",
  },
  {
    key: "980",
    english: "Daily",
    pronunciation: "ngin machha",
    bhutia: "ཉིན་ མ་ཆག་།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595271/Times/daily_oadh01.mp3",
  },
  {
    key: "981",
    english: "Monthly",
    pronunciation: "daw machha",
    bhutia: "ཟླ་བོ་ མ་ཆག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595266/Times/monthly_rnfvws.mp3",
  },
  {
    key: "982",
    english: "Every night",
    pronunciation: "shyag machha",
    bhutia: "ཞག་ མ་ཆག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595265/Times/every_night_iugegc.mp3",
  },
  {
    key: "983",
    english: "Now",
    pronunciation: "dhato",
    bhutia: "ད་ལྟ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595265/Times/now_e8zih8.mp3",
  },
  {
    key: "984",
    english: "Just now",
    pronunciation: "dhato rang",
    bhutia: "ད་ལྟ་རང།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595265/Times/just_now_eyrlhj.mp3",
  },
  {
    key: "985",
    english: "Suddenly",
    pronunciation: "hethki",
    bhutia: "ཧད་ཀྱིས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595265/Times/suddenly_pydh3r.mp3",
  },
  {
    key: "986",
    english: "Quickly",
    pronunciation: "hangtoh khama",
    bhutia: "ཧད་ཏོ་ཁ་མ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595277/Times/quickly__pkvkjj.mp3",
  },
  {
    key: "987",
    english: "Immediately",
    pronunciation: "lamsang",
    bhutia: "ལམ་སངས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595264/Times/immediately_zwub2x.mp3",
  },
  {
    key: "988",
    english: "In advance",
    pronunciation: "thamglay",
    bhutia: "ཐང་ལས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595260/Times/in_advance_exivu4.mp3",
  },
  {
    key: "989",
    english: "Next year",
    pronunciation: "saang foeth",
    bhutia: "སང་ཕོད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742529631/correction/next_year_jmdxkr.mp3",
  },
  {
    key: "990",
    english: "Year before next",
    pronunciation: "zhi foeth",
    bhutia: "གཞི་ཕོད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595260/Times/year_before_next_1_ztbupl.mp3",
  },
  {
    key: "991",
    english: "Last year",
    pronunciation: "naning",
    bhutia: "ན་ནིང།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595259/Times/last_year_qgcka6.mp3",
  },
  {
    key: "992",
    english: "Before last year",
    pronunciation: "jhyo ning",
    bhutia: "གཞོ་ནིང།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595259/Times/before_last_year_pqxtrs.mp3",
  },
  {
    key: "993",
    english: "This year",
    pronunciation: "thuchi",
    bhutia: "དུ་ཅིག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595259/Times/this_year_gnjg6w.mp3",
  },
  {
    key: "994",
    english: "Always",
    pronunciation: "aatang machhako",
    bhutia: "ཨ་ཏང་མ་ཆག་ཀོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739595259/Times/always_dubqwh.mp3",
  },
  {
    key: "995",
    english: "Elder Sister in Law",
    pronunciation: "a-zhi-gyumo",
    bhutia: "ཨ་ཞི་གྱོ་མོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140747/correction/elder_sister_in_law_axfbuk.mp3",
  },
  {
    key: "996",
    english: "Elder brother in Law",
    pronunciation: "a-chu-gyupo",
    bhutia: "ཨ་ཅུ་གྱོ་པོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140747/correction/elder_brother_in_law_uwuxc5.mp3",
  },
  {
    key: "997",
    english: "Grandson",
    pronunciation: "tsho",
    bhutia: "ཚ༹་བོ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140747/correction/grandson_wxcn3z.mp3",
  },
  {
    key: "998",
    english: "Grand Daughter",
    pronunciation: "tsam",
    bhutia: "ཚམ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140747/correction/grand_daughter_o6s3ol.mp3",
  },
  {
    key: "999",
    english: "Sisters",
    pronunciation: "a-zhi-num",
    bhutia: "ཨ་ཞི་ ནུམ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140747/correction/sisters_bvkjbe.mp3",
  },
  {
    key: "1000",
    english: "Brothers",
    pronunciation: "a-chu-puenlo",
    bhutia: "ཨ་ཅུ་ སྤུན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140747/correction/brothers_dgueac.mp3",
  },
  {
    key: "1001",
    english: "Younger Uncle's Wife (Paternal)",
    bhutia: "ཨམ་ཆུང།",
    pronunciation: "am-chung",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140754/correction/paternal_uncles_wife_smaller_one_rejt8u.mp3",
  },
  {
    key: "1002",
    english: "Maternal Uncle's Wife",
    pronunciation: "a-ney",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140755/correction/father_s_sisters_or_maternal_uncle_s_wife_yjbdqb.mp3",
    bhutia: "ཨ་ཉེ།",
  },
  {
    key: "1003",
    english: "Elder Uncle's Wife (Paternal)",
    pronunciation: "am-bom",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742354642/conversation/paternal_elder_uncle_s_wife_rmtjek.mp3",
    bhutia: "ཨམ་སྦོམ",
  },
  {
    key: "1004",
    english: "Mother's Elder Sister ",
    pronunciation: "am-bom",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742354642/conversation/paternal_elder_uncle_s_wife_rmtjek.mp3",
    bhutia: "ཨམ་སྦོམ",
  },
  {
    key: "1005",
    english: "Mother's Younger Sister",
    pronunciation: "am-chung",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140754/correction/paternal_uncles_wife_smaller_one_rejt8u.mp3",
    bhutia: "ཨམ་ཆུང།",
  },
  {
    key: "1006",
    english: "Great GrandFather",
    pronunciation: "yang-jo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140755/correction/great_grandfather_xt3c7k.mp3",
    bhutia: "ཡང་ཇོ།",
  },
  {
    key: "1007",
    english: "Great Grandmother",
    pronunciation: "yang-nyo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140755/correction/great_grandmother_ixp8mo.mp3",
    bhutia: "ཡང་ཉོ།",
  },
  {
    key: "1008",
    english: "Samdhi",
    pronunciation: "nyen-den-apo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140755/correction/samdhi_knawev.mp3",
    bhutia: "གཉེན་མདུན་ ཨ་པོ",
  },
  {
    key: "1009",
    english: "Samdhini",
    pronunciation: "nyen-den-am",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140754/correction/samdhini_qyfilr.mp3",
    bhutia: "གཉེན་མདུན་ ཨམ།",
  },
  {
    key: "1010",
    english: "Samdhini Bojyu",
    pronunciation: "nyen-den-anyo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140754/correction/samdhini_boju_rppfmm.mp3",
    bhutia: "གཉེན་མདུན་ ཨ་ཉོ།",
  },
  {
    key: "1011",
    english: "Samdhi Baje",
    pronunciation: "nyen-de-ajo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140755/correction/samdhi_baje_qmqxfb.mp3",
    bhutia: "གཉེན་མདུན་ ཨ་ཇོ།",
  },
  {
    key: "1012",
    english: "Jethani/Dewrani",
    pronunciation: "chhasem/chhase",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140756/correction/jethani_dewrani_v9ep73.mp3",
    bhutia: "ཚགས་སེམ/ཚགས་སེ།",
  },
  {
    key: "1013",
    english: "Saru Daju/ Saru Bhai",
    pronunciation: "chhazen",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140756/correction/saru_daju_saru_bhai_c5pobn.mp3",
    bhutia: "ཚགས་རྒན།",
  },
  {
    key: "1014",
    english: "Phu-phu/Bhadaini",
    pronunciation: "nemchen",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140764/correction/phupu_bhadaini_cm0cmq.mp3",
    bhutia: "ནེམ་ཙན།",
  },
  {
    key: "1015",
    english: "Maternal Uncle's Daughter and Paternal Aunt's Daughter  ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140765/correction/maternal_uncles_daughter_and_paternal_aunts_daughter_wefxq5.mp3",
    bhutia: "ཞོང་ཙན།",
    pronunciation: "shongchen",
  },
  {
    key: "1016",
    english: "Sali/Nanda (soltini)",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140764/correction/sali_nanda_soltini_udsq48.mp3",
    bhutia: "སྙིདམ།",
    pronunciation: "nethm",
  },
  {
    key: "1017",
    english: "Salo/Dewar (solti)",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140757/correction/solti_salo_dewar_ivllh8.mp3",
    bhutia: "ཀུད་པོ།",
    pronunciation: "ked-po",
  },
  {
    key: "1018",
    english: "Husband",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140765/correction/husband_kqgqgp.mp3",
    bhutia: "ཕོ་རྒྱག།",
    pronunciation: "phu-gyag",
  },
  {
    key: "1019",
    english: "Wife",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140765/correction/wife_u6rmxh.mp3",
    bhutia: "མོ་བུད།",
    pronunciation: "mo-bui",
  },
  {
    key: "1020",
    english: "Husband/Wife",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140766/correction/husband_wife_zt6lmv.mp3",
    bhutia: "བཟའ་ཀོ།",
    pronunciation: "za-kho",
  },
  {
    key: "1021",
    english: "Bhawju/Dewar",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140766/correction/bhauju_dewar_vx6xhl.mp3",
    bhutia: "ཡོང་ཀུད།",
    pronunciation: "young-kud",
  },
  {
    key: "1024",
    english: "Vena/Salo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140765/correction/vena_salo_nqdr09.mp3",
    bhutia: "མག་ཀུད།",
    pronunciation: "go-kid",
  },
  {
    key: "1025",
    english: "Bhawju/Nanda",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140766/correction/bhawju_nanda_j6ymqh.mp3",
    bhutia: "ནེ་སྙེད།",
    pronunciation: "ney-ned",
  },
  {
    key: "1026",
    english: "Vena/Sali",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140765/correction/vena_sali_m2yusf.mp3",
    bhutia: "མག་ཀོ་ སྙིདམ།",
    pronunciation: "mako-nhyim",
  },
  {
    key: "1027",
    english: "Badam",
    audiolink: "ba-dam",
    bhutia: "བ་དམ།",
    pronunciation:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742529631/correction/badam_v6bopo.mp3",
  },
  {
    key: "1028",
    english: "Traditional Half-Coat Of Male",
    pronunciation: "jya-za",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742529619/correction/traditional_half_coat_of_man_axzwre.mp3",
    bhutia: "འཇའ་རྫ།",
  },
  {
    key: "1029",
    english: "Traditional Belt of Male/Female",
    pronunciation: "ke-rag",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742529619/correction/traditional_belt_of_male_female_vbeigy.mp3",
    bhutia: "སྐེད་རག།",
  },
  {
    key: "1030",
    english: "Small knife carried by male",
    pronunciation: "dozong/chenki/ke-cung/ke-chung",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742529619/correction/small_knife_carried_by_male_tqn9sl.mp3",
    bhutia: "འགྲོ་གཟུངས་། / མཆན་གྱི།/ གྱི་ཅུང/གྱི་ཆུང།            ",
  },
  {
    key: "1031",
    english: "Protector Amulet",
    pronunciation: "kyed-sung",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742529618/correction/protector_amulet_cy5qnh.mp3",
    bhutia: "སྐད་བསྲུང།",
  },
  {
    key: "1032",
    english: "Traditional shirt of female",
    pronunciation: "hon-jo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742529618/correction/honjo_aesnph.mp3",
    bhutia: "འོན་ཇོ།",
  },
  {
    key: "1033",
    english: "Traditional Jacket of Female",
    pronunciation: "kushen",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742529618/correction/traditional_jacket_of_female_gqvcmh.mp3",
    bhutia: "སྐུ་ཤོན།",
  },
  {
    key: "1034",
    english: "Necklace",
    pronunciation: "ga-chung",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742529618/correction/necklace_rxcoo3.mp3",
    bhutia: "ག་ཅུང་།",
  },
  {
    key: "1035",
    english: "Ring",
    pronunciation: "zub-ku",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742529618/correction/ring_k5cg6h.mp3",
    bhutia: "མཛུབ་ཀུ།",
  },
  {
    key: "1036",
    english: "Golden Bangle",
    pronunciation: "se-diu",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742529617/correction/golden_bangle_cesfdk.mp3",
    bhutia: "གསེར་ ལྡིའུ།",
  },
  {
    key: "1037",
    english: "Ribbon",
    pronunciation: "kya-thui",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742529618/correction/ribbon_fgwmkk.mp3",
    bhutia: "སྐྱ་ཐུད།",
  },
  {
    key: "1038",
    english: "Bitter buckwheat",
    pronunciation: "byo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742529595/correction/bitter_buckwheat_sknnvv.mp3",
    bhutia: "བྱོ༹།",
  },
  {
    key: "1039",
    english: "Sweet buckwheat",
    pronunciation: "ghera/gheray",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742529596/correction/sweet_buckwheat_qjcsu6.mp3",
    bhutia: "རྒེ་རག།/རྒེ་རེ།",
  },
  {
    key: "1040",
    english: "Black mustard",
    pronunciation: "pe-gong",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742529596/correction/black_mustard_zn2thw.mp3",
    bhutia: "པད་སྒོང།",
  },
  {
    key: "1041",
    english: "White mustard",
    pronunciation: "yung kar",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742529596/correction/white_mustard_j6nx8d.mp3",
    bhutia: "གཡུང་དཀར།",
  },
  {
    key: "1042",
    english: "White sesame",
    pronunciation: "til-kar",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742529617/correction/white_sesame_mdrst5.mp3",
    bhutia: "ཏིལ་དཀར།",
  },
  {
    key: "1043",
    english: "Black sesame",
    pronunciation: "tilna",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742529596/correction/black_sesame_jk9cvo.mp3",
    bhutia: "ཏིལ་ནག།",
  },
  {
    key: "1044",
    english: "Chest meat",
    pronunciation: "phyang-shya",
    audiolink: "",
    bhutia: "བྱོ༹ང་ཤ།",
  },
  {
    key: "1045",
    english: "Ribs meat",
    pronunciation: "chib-shya",
    audiolink: "",
    bhutia: "བྱོ༹ང་ཤ།",
  },
  {
    key: "1046",
    english: "Rice Porridge",
    pronunciation: "phi-thuk/chum-thuk/jam",
    audiolink: "",
    bhutia: "ཕྱི༹་ཐུག་/ཆུམ་ཐུག་/འཇམ།",
  },

  {
    key: "1047",
    english: "Rotten Cheese",
    pronunciation: "chu-re/se-den",
    bhutia: "ཕྱུ་རུལ/ཟོས་ལྡན་(ཕྱུ་རྙིང་ཀུ་ ལོ་ ཟོས་ལྡན་ ལབ་སྲོལ་ ཡོད།)",
    audiolink: "",
  },
  {
    key: "1048",
    english: "Rice",
    pronunciation: "toh",
    bhutia: "ལྟོ།",
    audiolink: "",
  },
  {
    key: "1049",
    english: "Fermented Soyabean",
    pronunciation: "bang-rul",
    bhutia: "སྦང་རུལ།",
    audiolink: "",
  },
  {
    key: "1050",
    english: "Roasted Barley Flour",
    pronunciation: "na-phyi",
    bhutia: "ནཱ་ཕྱི༹།",
    audiolink: "",
  },
  {
    key: "1051",
    english: "Millet Flour",
    bhutia: "མོན་ཅག་ ཕྱི༹།",
    pronunciation: "min-chyag phyi",
    audiolink: "",
  },
  {
    key: "1052",
    english: "Wheat Flour",
    bhutia: "གྱོ་ཕྱི༹།",
    pronunciation: "gyo-phyi",
    audiolink: "",
  },
  {
    key: "1053",
    english: "Sweet Buck Wheat Flour",
    bhutia: "རྒེ་རག་/རྒེ་རེ།",
    pronunciation: "gere-phyi/gera-phyi",
    audiolink: "",
  },
  {
    key: "1054",
    english: "Bitter Buck Wheat Flour",
    bhutia: "བྱོ༹འོ་།/བྱོ༹འོ་ཁག།",
    pronunciation: "phyo/phyokha",
    audiolink: "",
  },
  {
    key: "1055",
    english: "Corn Flour",
    bhutia: "ཀན་ཙོང་ཕྱི༹་།",
    pronunciation: "ken-tsong phyi",
    audiolink: "",
  },
  {
    key: "1056",
    english: "Rice Flour",
    bhutia: "འབྱ༹་ཕྱེ༹།",
    pronunciation: "bya-phyi",
    audiolink: "",
  },
  {
    key: "1057",
    english: "Rice/Dhero",
    bhutia: "བྲེམ།",
    pronunciation: "dhem",
    audiolink: "",
  },
  {
    key: "1058",
    english: "Corn Rice",
    bhutia: "ཀན་ཙོང་ལྟོ།",
    pronunciation: "ken-tsong toh",
    audiolink: "",
  },
  {
    key: "1059",
    english: "Wheat Rice",
    bhutia: "འགྲེ་ལྟོ།",
    pronunciation: "dre-toh",
    audiolink: "",
  },
  {
    key: "1060",
    english: "Yam Rice",
    bhutia: "ནགས་སྐྱེའུ་ལྟོ།",
    pronunciation: "nak-kyu toh",
    audiolink: "",
  },
  {
    key: "1061",
    english: "Bread/Chappati",
    bhutia: "ཁུ།/ ཁུ་ལེབ།",
    pronunciation: "khu/khu-lep",
    audiolink: "",
  },
  {
    key: "1062",
    english: "Yam (Simbal Tarul)",
    bhutia: "ལོ་སྐྱེའུ།/ལོ་ཤིང་སྐྱེའུ།གདུང་ལུ་ སྐྱེའུ།",
    pronunciation: "lo-be-kyu/dung-lo-kyu/lo-shing-kyu",
    audiolink: "",
  },
  {
    key: "1063",
    english: "Yam (Pindalu)",
    bhutia: "དོ་སྐྱེའུ།",
    pronunciation: "do-kyu",
    audiolink: "",
  },
  {
    key: "1064",
    english: "Yam (Ban Tarul)",
    bhutia: "ནགས་སྐྱེའུ།",
    pronunciation: "nag-kyu",
    audiolink: "",
  },
  {
    key: "1065",
    english: "Yam (Ghar Tarul both purple and white color",
    bhutia: "བདག་སྐྱེའུ།/པེན་སྐྱེའུ།",
    pronunciation: "dag-kyu/pen-kyu",
    audiolink: "",
  },
  {
    key: "1066",
    english: "Red Sweet Potato ",
    audiolink: "",
    pronunciation: "kyu-ngarmap",
    bhutia: "སྐེའུ་མངརམ་དམརབ་།",
  },
  {
    key: "1067",
    english: "White Sweet Potato ",
    audiolink: "",
    pronunciation: "kyu ngarm kap",
    bhutia: "སྐེའུ་མངརམ་དཀརབ།",
  },
  {
    key: "1068",
    english: "Yum (pustakari)",
    audiolink: "",
    pronunciation: "shyokey kyu/metok kyu",
    bhutia: "ཤོསྐྱི་ སྐེའུ/ མེ་ཏོག་ སྐེའུ།",
  },
  {
    key: "1069",
    english: "Squash Yam",
    pronunciation: "kha-du kyu/bis-ku kyu",
    audiolink: "",
    bhutia: "ག་དུ་སྐེའུ་ /བིས་ཀུ་ སྐེའུ།",
  },
  {
    key: "1070",
    english: "Potato",
    pronunciation: "aa-le-kyu",
    audiolink: "",
    bhutia: "ཨཱ་ལུས་ སྐེའུ།",
  },
  {
    key: "1071",
    english: "Beaten Rice",
    pronunciation: "bya bya-su",
    audiolink: "",
    bhutia: "འབྱ༹་འབྱ༹་སུ།",
  },
  {
    key: "1072",
    english: "Beaten Maize",
    pronunciation: "ken-tsong bya-su",
    audiolink: "",
    bhutia: "ཀེན་ཙོང་ འབྱ༹་སུ།",
  },
  {
    key: "1073",
    english: "Beaten Barley",
    pronunciation: "na bya-su/nasu",
    audiolink: "",
    bhutia: "ནཱ་ འབྱ༹་ སུ་ /ནཱ་སུ།",
  },
  {
    key: "1074",
    english: "Beaten Wheat",
    pronunciation: "gyo bya-su/khyosu",
    audiolink: "",
    bhutia: "གྱོ་འབྱ༹་ སུ/་ གྱོ་སུ།",
  },

  {
    key: "1086",
    english: "IGP",
    pronunciation: "kor-sung chyi khyab/shib-yuk po",
    bhutia: "སྐོར་ སྲུང་ སྤྱི་ཁྱབ་ ཞིབ་འཇུག་པོ།",
    audiolink: "",
  },
  {
    key: "1087",
    english: "SP",
    pronunciation: "kor-sung de-zin",
    bhutia: "སྐོར་སྲུང་ སྡེ་འཛིན་།",
    audiolink: "",
  },
  {
    key: "1088",
    english: "DSP",
    pronunciation: "kor-sung de zin ku-tsab",
    bhutia: "སྐོར་སྲུང་ སྡེ་འཛིན་ སྐུ་ཚབ།",
    audiolink: "",
  },
  {
    key: "1089",
    english: "SHO",
    pronunciation: "thana-go-dzin",
    bhutia: "ཐཱ་ན་  འགོ་འཛིན།",
    audiolink: "",
  },
  {
    key: "1090",
    english: "ASP",
    pronunciation: "kha-nyen kor-sung de-zin",
    bhutia: "ཁ་སྣོན་ སྐོར་སྲུང་ སྡེ་འཛིན",
    audiolink: "",
  },
  {
    key: "1091",
    english: "SI",
    pronunciation: "kor-sung ku-zen shib juk-po",
    bhutia: "སྐོར སྲུང་ སྐུ་ གཞོན་ ཞིབ་ འཇུག་པོ།",
    audiolink: "",
  },
  {
    key: "1092",
    english: "Police Constable",
    bhutia: "སྐོར་སྲུང་ གོ་གནས་ དམའ་ཤོས།",
    audiolink: "",
    pronunciation: "kor-sung ku-zen shib juk-po",
  },
  {
    key: "1093",
    english: "Police Writer",
    bhutia: "དྲུང་ཡིག་ སྐོར་སྲུང་བོ",
    audiolink: "",
    pronunciation: "",
  },
  /*{
    key: "1094",
    english: "ASI Police",
    bhutia: "ལས་རོགས་ སྐོར་སྲུང་བོ།",
    audiolink: "",
    pronunciation: "le-rog kor-sungbo",
  },*/
  {
    key: "1095",
    english: "Psychiatry",
    bhutia: "སེམས་བཅོས་ཐབས། /སྲོག་རླུང་ བཅོས་ཐབས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140776/correction/psychiatry_kwmocn.mp3",
    pronunciation: "semche-thap/soklung-chetap",
  },
  {
    key: "1096",
    english: "I",
    bhutia: "ང་",
    pronunciation: "nga",

    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140828/correction/I_1_p7an0t.mp3",
  },
  {
    key: "1097",
    english: "You",
    bhutia: "ཆོང་",
    pronunciation: "chu",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140818/correction/you_ufhiqa.mp3",
  },
  {
    key: "1098",
    english: "He",
    bhutia: "ཁོ་",
    pronunciation: "khu",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140829/correction/he_gflzly.mp3",
  },
  {
    key: "1099",
    english: "She",
    bhutia: "མོ་",
    pronunciation: "mu",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140819/correction/she_ybflqv.mp3",
  },
  {
    key: "1100",
    english: "It",
    bhutia: "ཨོ་འདི་",
    pronunciation: "o-di",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140827/correction/it_pr87or.mp3",
  },
  {
    key: "1101",
    english: "We",
    bhutia: "ང་ཅག་",
    pronunciation: "nang-chag",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140818/correction/we_dos0wk.mp3",
  },
  {
    key: "1102",
    english: "They",
    bhutia: "ཁོང་ཅུ༹་",
    pronunciation: "khon-tsu",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140819/correction/they_zrpejb.mp3",
  },
  {
    key: "1103",
    english: "Me",
    bhutia: "ང་ལོ་",
    pronunciation: "nga-lo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140827/correction/me_cp3eyr.mp3",
  },
  {
    key: "1104",
    english: "Him",
    bhutia: "ཁོ་ལོ་",
    pronunciation: "kho-lo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140828/correction/him_qtezrz.mp3",
  },
  {
    key: "1105",
    english: "Her",
    pronunciation: "mu-lo",
    bhutia: "མོ་ལོ་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140828/correction/her_h0vvb9.mp3",
  },
  {
    key: "1106",
    english: "Us",
    pronunciation: "nga-cha-lo",
    bhutia: "ང་ཅག་ལོ་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140818/correction/us_1_azlayn.mp3",
  },
  {
    key: "1107",
    english: "Them",
    pronunciation: "khon-tsu",
    bhutia: "ཁོང་ཅུ༹་ལོ་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140819/correction/them_final_n8wgmh.mp3",
  },
  {
    key: "1108",
    english: "Mine",
    bhutia: "ངའི་",
    pronunciation: "nye",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140827/correction/mine_final_wkifz0.mp3",
  },
  {
    key: "1109",
    english: "Yours",
    pronunciation: "khu-chi",
    bhutia: "གུ་ཅའི་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140818/correction/yours_vhcalq.mp3",
  },
  {
    key: "1110",
    english: "His",
    pronunciation: "khui",
    bhutia: "ཁོའི་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140828/correction/his_mohnih.mp3",
  },
  {
    key: "1111",
    english: "Hers",
    pronunciation: "mui",
    bhutia: "མོའི་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140828/correction/hers_i2se0g.mp3",
  },
  {
    key: "1112",
    english: "Its",
    pronunciation: "o-di-tsu",
    bhutia: "ཨོ་འདི་ཅུ༹་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140827/correction/its_xqta3f.mp3",
  },
  {
    key: "1113",
    english: "Ours",
    pronunciation: "nga-chi",
    bhutia: "ང་ཅའི་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140819/correction/ours_j7g3vn.mp3",
  },
  {
    key: "1114",
    english: "Theirs",
    pronunciation: "khon-ri",
    bhutia: "ཁོང་རའི་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140819/correction/theirs_cegwfb.mp3",
  },
  {
    key: "1115",
    english: "Myself",
    pronunciation: "nga-ri",
    bhutia: "ང་རའི་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140837/correction/myself_ulnndg.mp3",
  },
  {
    key: "1116",
    english: "Yourself",
    pronunciation: "cho-ri",
    bhutia: "ཆོང་རའི་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140829/correction/yourself_w7hi4j.mp3",
  },
  {
    key: "1117",
    english: "Himself",
    pronunciation: "khu-ri",
    bhutia: "ཁོ་རའི་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140838/correction/himself_dwhdxe.mp3",
  },
  {
    key: "1118",
    english: "Herself",
    pronunciation: "mu-ri",
    bhutia: "མོ་རའི་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140838/correction/herself_fdgl53.mp3",
  },
  {
    key: "1119",
    english: "Itself",
    pronunciation: "o-di-rang",
    bhutia: "ཨོ་འདི་རང་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140837/correction/itself_bissdg.mp3",
  },
  {
    key: "1120",
    english: "Ourselves",
    pronunciation: "nga-cha-rang",
    bhutia: "ང་ཅག་རང་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140837/correction/ourselves_zpgajb.mp3",
  },
  {
    key: "1121",
    english: "Yourselves",
    pronunciation: "khu-cha-rang",
    bhutia: "ཁུ་ཅག་རང་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140829/correction/yourselves_oeaobt.mp3",
  },
  {
    key: "1122",
    english: "Themselves",
    pronunciation: "khon-tsu-ra",
    bhutia: "ཁོང་ཅུ༹་རའི་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140847/correction/themselves_ern6ms.mp3",
  },
  {
    key: "1123",
    english: "This",
    pronunciation: "di",
    bhutia: "འདི་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140847/correction/this_final_vpmwxk.mp3",
  },
  {
    key: "1124",
    english: "That",
    pronunciation: "phi-di",
    bhutia: "ཕི་འདི་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742142136/correction/that_xvmnog.mp3",
  },
  {
    key: "1125",
    english: "These",
    pronunciation: "di-tsu",
    bhutia: "འདི་ཅུ༹་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140847/correction/these_cqtp4n.mp3",
  },
  {
    key: "1126",
    english: "Those",
    pronunciation: "phi-di-chu",
    bhutia: "ཕི་འདི་ཅུ༹་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140839/correction/those_wbltmb.mp3",
  },
  {
    key: "1127",
    english: "Who",
    pronunciation: "ka-bo",
    bhutia: "ཀ་འབོ་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140838/correction/who_shvhe3.mp3",
  },
  {
    key: "1128",
    english: "Whom",
    pronunciation: "ka-lho",
    bhutia: "ཀའལོ་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140838/correction/whom_cimdi9.mp3",
  },
  {
    key: "1129",
    english: "Whose",
    pronunciation: "kay",
    bhutia: "ཀའི་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140838/correction/whose_tltqbo.mp3",
  },
  {
    key: "1130",
    english: "Which",
    pronunciation: "ga-dhi",
    bhutia: "ག་འདི་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140839/correction/which_ajfwet.mp3",
  },
  {
    key: "1131",
    english: "What",
    pronunciation: "ghon",
    bhutia: "གར་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140839/correction/what_hspkzq.mp3",
  },
  {
    key: "1132",
    english: "All",
    pronunciation: "tham-chay",
    bhutia: "ཐམས་ཅང་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140942/correction/all_af6kmb.mp3",
  },
  {
    key: "1133",
    english: "Some",
    pronunciation: "re-nyi",
    bhutia: "རེགཉིས",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140847/correction/some_fpxyoh.mp3",
  },
  {
    key: "1134",
    english: "Any",
    pronunciation: "gha-dhi-in-rung",
    bhutia: "ག་འདི་ ཨིན་ རུང་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140941/correction/any_cstegn.mp3",
  },
  {
    key: "1135",
    english: "None",
    pronunciation: "gha-dhi-yang-mae",
    bhutia: "ག་འདི་ ཡང་མན་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140848/correction/none_nom0ry.mp3",
  },
  {
    key: "1136",
    english: "Many",
    pronunciation: "key-po",
    bhutia: "ཀེས་པོ་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140880/correction/many_fomaoe.mp3",
  },
  {
    key: "1137",
    english: "Few",
    pronunciation: "a-tsim",
    bhutia: "ཨ་ཅིམ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140913/correction/few_u5hwx2.mp3",
  },
  {
    key: "1138",
    english: "Several",
    pronunciation: "keb-chi",
    bhutia: "ཀེསབ་ཅིག་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140848/correction/several_adss1b.mp3",
  },
  {
    key: "1139",
    english: "Everyone",
    pronunciation: "tham-chay-ghang-po",
    bhutia: "ཐམས་ཅང་ གང་པོ་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140941/correction/everyone_r5ljco.mp3",
  },
  {
    key: "1140",
    english: "Somebody",
    pronunciation: "mig-chig-nyi",
    bhutia: "མི་གཅིག་གཉིས་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140847/correction/somebody_bn4c2a.mp3",
  },
  {
    key: "1141",
    english: "Nobody",
    pronunciation: "ka-yang-meng",
    bhutia: "ཀ་ཡང་མིང་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140850/correction/nobody_jklpgr.mp3",
  },
  {
    key: "1142",
    english: "Someone",
    pronunciation: "re-nyi",
    bhutia: "རེ་ གཉིས་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140847/correction/someone_uik1w7.mp3",
  },
  {
    key: "1143",
    english: "Each",
    pronunciation: "re-re",
    bhutia: "རེ་རེ་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140943/correction/each_qwf7mt.mp3",
  },
  {
    key: "1144",
    english: "Either",
    pronunciation: "chi-men-chi",
    bhutia: "གཅིག་མར་ གཅིག་",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140942/correction/either_lnu9tk.mp3",
  },
  {
    key: "1145",
    english: "Neither",
    pronunciation: "nyi-ka-mea",
    bhutia: "གཉིས་ག་ མན",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140942/correction/neither_kc57im.mp3",
  },
  {
    key: "1146",
    english: "Or",
    pronunciation: "yang-na",
    bhutia: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140942/correction/or_dk2qbk.mp3",
  },
  {
    key: "1147",
    english: "Nor",
    pronunciation: "",
    bhutia: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140943/correction/nor_x8u3c2.mp3",
  },
  {
    key: "1148",
    english: "I go to home at 3:30pm",
    pronunciation: "nga chu-choed sum-thang phed-lo log gyu-du en",
    bhutia: "ང་ ཆུ་ཚོད་ གསུམ་ དང་ ཕྱེ༹ད་ལོ་ ལོག་ འགྱུ་དོ་ ཨིན",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140711/correction/i_go_home_at_3_30_pm_hf99ch.mp3",
  },
  {
    key: "1149",
    english: "What time do you go to bed?",
    pronunciation: "ra chu-choed gha-choed-lo nyl-do en?",
    bhutia: "རང་ ཆུ་ཚོད་ ག་ཚོད་ལོ་ ཉལ་དོ་ ཨིན",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892381/conversation/what_time_do_you_go_to_bed_m8tcxv.mp4",
  },
  {
    key: "1150",
    english: "What time do you go to bed (honorific)",
    pronunciation: "lhengye chu-choed ghaje lo zimpo nang-do la?",
    bhutia: "ལྷན་རྒྱས་ ཆུ་ཚོད་ ག་ཚོད་ལོ་ གཟིམ་པོ་ གནང་དོ་ ལགས?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140710/correction/what_time_do_you_go_to_bed_with_respect_lmklum.mp3",
  },
  {
    key: "1151",
    english: "I go to bed at 9'0 clock",
    pronunciation: "nga chu-choed gu-lo nyl-do en",
    bhutia: "ང་ ཆུ་ཚོད་ དགུ་ལོ་ ཉལ་དོ་ ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140711/correction/i_go_to_bed_at_9_o_clock_fmlm0p.mp3",
  },
  {
    key: "1152",
    english: "How much money do you have?",
    pronunciation: "rang-lo tirug gha-choed yed-po la?",
    bhutia: "རང་ལོ་ ཏི་རུག་ ག་ཚོད་ ཡོད་པོ་ ལགས?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140711/correction/how_much_money_do_you_have_pm3rir.mp3",
  },

  {
    key: "1154",
    english: "I have 20 rupees",
    pronunciation: "ngaye char tirug nyi-shu tham-pa yod.",
    bhutia: "ངའི་ རྩར་ ཏི་རུག་ ཉི་ཤུ་ ཐམས་པ་ ཡོད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140711/correction/i_have_20_rs_btdv6h.mp3",
  },
  {
    key: "1155",
    english: "I did not say anything",
    pronunciation: "nga ghan dre lab-shey med",
    bhutia: "ངས་ གན་ འདྲེ་ ལབ་ཤུལ་ མེད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140720/correction/i_did_not_say_anything_v1hcri.mp3",
  },
  {
    key: "1156",
    english: "What is that?",
    pronunciation: "odi ghan bo?",
    bhutia: "ཨོ་འདི་ གན་བོ་?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140719/correction/what_is_that_xoxkk7.mp3",
  },
  {
    key: "1157",
    english: "What is that? (honorific)",
    pronunciation: "phidi ghan-bo?",
    bhutia: "ཕི་འདི་ གན་བོ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140719/correction/what_is_that_xoxkk7.mp3",
  },
  {
    key: "1158",
    english: "That is my book",
    pronunciation: "odi ngai theb en",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140720/correction/that_is_my_book_v6ghnz.mp3",
    bhutia: "ཨོ་འདི་ ངའི་ དེབ་ ཨིན།",
  },
  {
    key: "1159",
    english: "What do you want?",
    pronunciation: "rang lo ghan go po?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140720/correction/what_do_you_want_daywby.mp3",
    bhutia: "རང་ལོ་ གན་ དགོས་པོ?",
  },
  {
    key: "1160",
    english: "What do you want? (honorific)",
    pronunciation: "lhengye lo ghan thug-kho yed-po la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140720/correction/what_do_you_want_with_respect_zrtcej.mp3",
    bhutia: "ལྷན་རྒྱས་ལོ་ གན་ ཐུགས་ཁོ་ ཡོད་པོ་ ལགས?",
  },
  {
    key: "1161",
    english: "I want a Bhutia dictionary",
    pronunciation: "nga-lo lokhye tsig-ze go-ped",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140720/correction/i_want_a_bhutia_dictionary_kqs5z0.mp3",
    bhutia: "ང་ལོ་ ལྷོ་ཡིག་ ཚིག་ མཛད་ དགོས་པད།",
  },
  {
    key: "1162",
    english: "When did you come?",
    pronunciation: "rang-nam ong-bo?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140719/correction/when_did_you_come_plzwbf.mp3",
    bhutia: "རང་ནམ་ འོང་བོ?",
  },
  {
    key: "1163",
    english: "When did you come? (honorific)",
    pronunciation: "lhengye  nam-chen-bo nang-bo la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140719/correction/when_did_you_come_with_respect_ndjivc.mp3",
    bhutia: "ལྷན་རྒྱས་ ནམ་བྱོན་བོ་ གནང་བོ་ ལགས?",
  },
  {
    key: "1164",
    english: "I came Yesterday",
    pronunciation: "nga-dang hong-bo en",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140728/correction/i_came_yesterday_kofcqv.mp3",
    bhutia: "ང་གདངས་ འོང་བོ་ ཨིན།",
  },
  {
    key: "1165",
    english: "Where are you going",
    pronunciation: "rang ghana gyu-do?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892391/conversation/where_are_you_going_fyovr2.mp4",
    bhutia: "རང་ ག་ན་ འགྱུ་དོ?",
  },
  {
    key: "1166",
    english: "Where are you going (honorific)",
    pronunciation: "lhengye ghana pyon-bo nang-do la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140719/correction/where_are_you_going_with_respect_tmqfyh.mp3",
    bhutia: "ལྷན་རྒྱས་ ག་ན་ བྱོན་བོ་ གནང་དོ་ ལགས?",
  },
  {
    key: "1167",
    english: "I am going to the monastry ",
    pronunciation: "nga gyon-pa gyu-doh en ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140728/correction/i_am_going_to_the_monastry_fn2kez.mp3",
    bhutia: "ང་ དགོན་པ་ འགྱུ་དོ་ ཨིན",
  },
  {
    key: "1168",
    english: "For how long are you going?",
    pronunciation: "rang-nyin gha-choed kyi dhen-lo gyu-do en-nam?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892249/conversation/for_how_long_are_you_going_kcbioy.mp4",
    bhutia: "རང་ཉིན་ ག་ཚོད་ ཀྱི་ དོན་ལོ་ འགྱུ་དོ་ ཨིན་ནམ?",
  },
  {
    key: "1169",
    english: "For how long are you going? (honorific)",
    pronunciation: "lhengye nyin gha-choed kyi phen-lo chen-bo en-nam la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140729/correction/for_how_long_are_you_going_with_respect_mgasro.mp3",
    bhutia: "ལྷན་རྒྱས་ ཉིན་ ག་ཚོད་ཀྱི་ དོན་ལོ་ བྱོན་དོ་ ཨིན་ནམ་ལགས?",
  },
  {
    key: "1170",
    english: "For two days",
    pronunciation: "nyin nyi-kyi den-lo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140728/correction/for_two_days_gmprj0.mp3",
    bhutia: "ཉིན་ གཉིས་ཀྱི་ དོན་ ལོ།",
  },
  {
    key: "1171",
    english: "She quickly finished her homework (adverbs)",
    pronunciation: "mo khim-yog malag myung-char dug",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742185235/correction/she_quickly_finished_her_homework_oubx8h.mp3",
    bhutia: "མོས་ ཁྱིམ་གཡོག་མ་ལག་ མྱོ༹ང་ཚར་ འདུག།",
  },
  {
    key: "1172",
    english: "He speaks softly to the baby",
    pronunciation: "kho  ao-nyi nyim-chig kha-zamdrag lab-che",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742185535/correction/he_speaks_softly_to_the_baby_ksmokb.mp3",
    bhutia: "ཁོས་ ཨོ་ཉེ་ མཉམ་ཅིག་ ཁ་འཇམ་ དྲགས་ ལབ་ ཅེ།",
  },
  {
    key: "1173",
    english: "They happily played in the park",
    pronunciation: "khong-chu lingkhe na gata phya chimchi je",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742185760/correction/they_happily_played_in_the_park_t5xmac.mp3",
    bhutia: "ཁོང་ཙུ་ གླིང་གའི་ན་ དགས་དྲགས་བྱ༹ས་ རྩེདམ་རྩེད་ཞེ།",
  },
  {
    key: "1174",
    english: "She answered the question correctly",
    pronunciation: "mo dri-be len den-tra gyap-choe",
    audiolink: 
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742185973/correction/she_answered_the_question_correctly_wsyozf.mp3",
    bhutia: "མོས་ དྲི་བའི་ ལན་ བདེན་དྲགས་རྐྱབས་ཅེ།",
  },
  {
    key: "1175",
    english: "She writes a letter (verb)",
    pronunciation: "mo yi-ge thri-bo bed",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742186234/correction/she_writes_a_letter_brdniw.mp3",
    bhutia: "མོས་ ཡི་གེ་ བྲིས་བོ་ སྦད།",
  },
  {
    key: "1176",
    english: "He runs every morning",
    pronunciation: "kho tro ma-chag gyug-to",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742186563/correction/he_runs_every_morning_fs2qch.mp3",
    bhutia: "ཁོ་ དྲོ་མ་ཆག་ འགྱུག་ཏོ།",
  },
  {
    key: "1177",
    english: "I read a book",
    pronunciation: "nga-theb dog-ko en",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742530161/correction/I_read_a_book_nkq8yz.mp3",
    bhutia: "ངས་དོབ་ སྒྲོགསཀོ་ ཨིན།",
  },
  {
    key: "1178",
    english: "We cook dinner together (bhutia correction)",
    pronunciation: "nga-chag phi-khe sam nyam-chi zobo en",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742529631/correction/we_cook_dinner_together_tzrdee.mp3",
    bhutia: "ང་ཅག་ ཕྱི༹ས་ཁའི་ ཟམ་མཉམ་ཅིག་ བཟོ་བོ་ ཨིན།",
  },
  {
    key: "1179",
    english: "The big dog barked (adjectives)",
    pronunciation: "khi bom-po hab-che",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742529631/correction/the_big_dog_barked_qnw6ju.mp3",
    bhutia: "ཁྱི་ སྦོམ་པོ་ ཧབ་ཅེ།",
  },
  {
    key: "1180",
    english: "She has blue eyes",
    pronunciation: "mo-ri mig dog nyenpo dug",
    bhutia: "མོའི་ མིག་ དོག་ སྔོན་པོ་འདུག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742529631/correction/she_has_blue_eyes_wsm3pq.mp3",
  },
  {
    key: "1181",
    english: "This is a cold drink",
    pronunciation: "di thung-che khyoem-choeg en / di thung-che khyam-choeg en",
    bhutia: "འདི་ འཐུང་ཆས་ འཁྱོལམ་ཅིག་ ཨིན།/འདི་ འཐུང་ཆས་ གྱངམ་ཅིག་ ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742529631/correction/this_is_a_cold_drink_tsahr6.mp3",
  },
  {
    key: "1182",
    english: "He wore a red shirt",
    pronunciation: "kho tego marpo/marp gyond dug",
    bhutia: "ཁོས་སྟོད་གོས་ དམར་པོ་/དམརབ་ གྱོནད་ འདུག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742529632/correction/he_wore_a_red_shirt_erlsvb.mp3",
  },
  {
    key: "1183",
    english: "The test was easy",
    pronunciation: "thri-gyug di zam-po dug",
    bhutia: "བྲི་རྒྱུགས་ འདི་ འཇམ་པོ་ འདུག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742529632/correction/the_test_was_easy_foablm.mp3",
  },
  {
    key: "1184",
    english: "He said 'I am Happy' (direct speech)",
    pronunciation: "kho lab-che 'nga ga-drag yed'",
    bhutia: "ཁོས་ ལབ་ཅེ་,'ང་ དགའ་ དྲགས་ ཡོད།'",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140427/correction/he_said_i_am_happy_cgfioj.mp3",
  },
  {
    key: "1185",
    english: "She asked 'are you okay?'",
    pronunciation: "mu dri-zhi 'rang-lhem yed-ka?'",
    bhutia: "མོས་ དྲི་ཞེ་ 'རང་ལེགམ་ ཡོད་ཀ?'",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140417/correction/she_asked_are_you_okay_y3co6x.mp3",
  },
  {
    key: "1186",
    english: "He shouted 'stop running' (needs correction in bhutia)",
    pronunciation: "kho ke 'sojay mang-yu'",
    bhutia: "ཁོས་ སྐད་ཤོར་ཞེ་ ,མན་ འགྱུགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140426/correction/he_shouted_stop_running_blm0b3.mp3",
  },
  {
    key: "1187",
    english: "She said 'I love chocolate'",
    pronunciation: "mo lab-che 'nga byi-ril-lo dgag'",
    bhutia: "མོས་ ལབ་ཅེ་,'ང་ བྱི་རིལ་ལོ་ དགའ།'",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140325/correction/she_said_i_love_chocolates_xgwxpr.mp3",
  },
  {
    key: "1188",
    english: "They replied 'We are coming soon'",
    pronunciation: "khong-chu 'len log-che nga-chag malag hong-do'",
    bhutia: "ཁོང་ཙུ་ ལན་ ལོག་ཅེ་,'ང་ཅག་ མ་ལག་ འོང་དོ།'",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140252/correction/they_replied_we_are_coming_soon_zel1lw.mp3",
  },
  {
    key: "1189",
    english: "He said he was happy (indirect speech)",
    pronunciation: "kho ghaa-trag ye-shey kho ki lab-ce",
    bhutia: "ཁོ་ དགའ་དྲགས་ཡེས་སེ་ ཁོ་ ཀིས་ ལབ་ཅེ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140427/correction/he_said_he_was_happy_eyyoli.mp3",
  },
  {
    key: "1190",
    english: "She asked if I was okay",
    pronunciation: "nga lemra yed-kam-se lab-ti mo-ki thri-zhi",
    bhutia: "ང་ ལེགམ་ར་ ཡོད་ཀམ་སེ་ ལབ་སྟི་ མོ་ཀིས་དྲི་ཞེ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140417/correction/she_asked_if_i_was_okay_sufkaz.mp3",
  },
  {
    key: "1191",
    english: "He shouted for them to stop running",
    pronunciation: "kong-chu-lo men-gyug lapti kho ked-shyor-zhi",
    bhutia: "ཁོང་ཙུ༹་ལོ་ མན་འགྱུགས་ ལབ་སྟི་ ཁོ་ སྐད་ཤོར་ཞེ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140426/correction/he_shouted_for_them_to_stop_running_que8so.mp3",
  },
  {
    key: "1192",
    english: "She said she loved chocolate",
    pronunciation: "mu loh byi-ril gha-trag yed-she mo-ki lab-che",
    bhutia: "མོ་ལོ་ བྱི་རིལ་ དགའ་དྲགས་ ཡོད་སེ་ མོ་ཀིས་ ལབ་ཅེ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140325/correction/she_said_she_loved_chocolates_wmo4bu.mp3",
  },
  {
    key: "1193",
    english: "Eaten by deer beaten to the goat (idiomatic/metaphorical use)",
    pronunciation: "zha-bo khasa za, dung-bo ralo-dumg",
    bhutia: "ཟ་བོ་ ཁ་ཤ་ ཟ། རྡུང་བོ་ ར་ལོ་ རྡུང་།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140435/correction/eaten_by_deer_beaten_by_goat_denz9s.mp3",
  },
  {
    key: "1194",
    english: "",
    pronunciation: "",
    bhutia: "",
    audiolink: "",
  },
  {
    key: "1195",
    english: "",
    pronunciation: "",
    bhutia: "",
    audiolink: "",
  },
  {
    key: "1196",
    english: "",
    pronunciation: "",
    bhutia: "",
    audiolink: "",
  },
  {
    key: "1197",
    english: "",
    pronunciation: "",
    bhutia: "",
    audiolink: "",
  },
  {
    key: "1198",
    english: "The test was too difficult (negative context)",
    pronunciation: "thi-gyug di lep-ti khak-trag dug",
    bhutia: "བྲི་རྒྱུགས་ འདི་ ལེབ་སྟེ་ གག་དྲགས་ འདུག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140244/correction/the_text_was_too_difficult_j6hqps.mp3",
  },
  {
    key: "1199",
    english: "He made a big mistake",
    pronunciation: "kho nor-phrul bhom-po chig phya dug",
    bhutia: "ཁོས་ནོར་འཕྲུལ་ སྦོམ་པོ་ ཅིག་ བྱ༹ས་ འདུག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140427/correction/he_made_a_big_mistake_d2kqp3.mp3",
  },
  {
    key: "1200",
    english: "It was a bad idea",
    pronunciation: "samlo di lhem chig min-dug/ samlo di maleg-po chig-dug",
    bhutia:
      "བསམ་བློ་ འདི་ ལེགམ་ ཅིག་ མིན་འདུག།/བསམ་བློ་ འདི་ མ་ལེགས་པོ་ ཅིག་ འདུག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140417/correction/it_was_a_bad_idea_bpquau.mp3",
  },
  {
    key: "1201",
    english: "The law must be followed (legal/official context)",
    pronunciation: "cha-thrim-lo khye len phya go",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140234/correction/the_law_must_be_followed_xejyfv.mp3",
    bhutia: "རྩ་ཁྲིམས་ལོ་ ཁས་ ལེན་ བྱ༹ས་ དགོས།",
  },
  {
    key: "1202",
    english: "The contract was signed yesterday",
    pronunciation: "thang ghan-gyan yig kyab-po en",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140234/correction/the_contract_was_signed_yesterday_qh4txl.mp3",
    bhutia: "མདང་གན་རྒྱ་ན་ ས་ཡིག་ རྐྱབས་པོ་ ཨིན།",
  },
  {
    key: "1203",
    english: "This book is good (positive degree of comparison)",
    pronunciation: "theb di lem yed",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140259/correction/this_book_is_good_i9xdat.mp3",
    bhutia: "དེབ་ འདི་ ལེགམ་ ཡོད།",
  },
  {
    key: "1204",
    english: "She is tall",
    pronunciation: "mo ring-ku yed",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140326/correction/she_is_tall_ongnqa.mp3",
    bhutia: "མོ་ རིང་ཀུ་ ཡོད།",
  },
  {
    key: "1205",
    english: "This task is simple",
    pronunciation: "yog di le lapo yed/yog di zampo yed",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140259/correction/this_task_is_simple_e1kpoc.mp3",
    bhutia: "གཡོག་ འདི་ ལས་ སླ་པོ་ ཡོད།/གཡོག་ འདི་ འཇམ་པོ་ ཡོད།",
  },
  {
    key: "1206",
    english:
      "This book is better than that one (comparative degree of comparison)",
    pronunciation: "theb di o di-le leg-trag yed",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140259/correction/this_book_is_better_than_other_rduwco.mp3",
    bhutia: "དེབ་ འདི་ ཨོ་ འདིས་ལས་ ལེགས་དྲགས་ ཡོད།",
  },
  {
    key: "1207",
    english: "She is taller than her sister",
    pronunciation: "mo di muye azi-le ring-trag yed",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140326/correction/she_is_taller_than_her_sister_fr8w5m.mp3",
    bhutia: "མོ་ འདིས་ མོའི་ ཨ་ཞི་ལས་ རིང་ དྲགས་ ཡོད།",
  },
  {
    key: "1208",
    english: "The task is simpler than I thought",
    pronunciation: "yog de neano-khen di-le zam-trag yed",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140243/correction/the_task_is_simpler_than_i_thought_e7lzlp.mp3",
    bhutia: "གཡོག་ འདི་ ངས་མནོ་མཁན་ འདི་ལས་ འཇམ་དྲགས་ ཡོད།",
  },
  {
    key: "1209",
    english: "This is the best book",
    pronunciation: "theb di leg-sho en",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140259/correction/this_is_the_best_book_nd9c39.mp3",
    bhutia: "དེབ་ འདི་ ལེགས་ཤོས་ ཨིན།",
  },
  {
    key: "1210",
    english: "She is the tallest in her class",
    pronunciation: "mo-di muye zyengyal-na ringsho en",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140326/correction/she_is_the_tallest_in_her_class_qu4awt.mp3",
    bhutia: "མོ་འདི་ མོའི་ འཛིན་གྱལ་ན་ རིང་ཤོས་ ཨིན།",
  },
  {
    key: "1211",
    english: "That was the most interesting movie",
    pronunciation: "lok-nyen odi lep-di gha-shou dug",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140234/correction/that_was_the_most_interesting_movie_isymhp.mp3",
    bhutia: "གློག་བརྙན་ ཨོ་འདི་ ལེབ་སྟི་ དགའ་ཤོས་ འདུག།",
  },
  {
    key: "1212",
    english: "A cat is sleeping (singular use)",
    pronunciation: "ali-chig nel-drig dug",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140443/correction/a_cat_is_sleeping_rtvql1.mp3",
    bhutia: "ཨ་ལུས་ཅིག་ ཉལ་སྡོད་ འདུག།",
  },
  {
    key: "1213",
    english: "The teacher is nice",
    pronunciation: "lob-poen di lhem dug",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140244/correction/the_teacher_is_nice_urwpxw.mp3",
    bhutia: "སློབ་དཔོན་ འདི་ ལེགམ་ འདུག།",
  },
  {
    key: "1214",
    english: "A house was built",
    pronunciation: "khim chig zo-char",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140443/correction/a_house_was_built_hcvf2w.mp3",
    bhutia: "ཁྱིམ་ཅིག་ བཟོ་ཚར་།",
  },
  {
    key: "1215",
    english: "The car is new",
    pronunciation: "zhoen-gor di sar-po dug ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140234/correction/the_car_is_new_esjzbh.mp3",
    bhutia: "ཞོན་འགོར་ འདི་ གསར་པོ་ འདུག།",
  },
  {
    key: "1216",
    english: "A dog is barking",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140443/correction/a_dog_is_barking_ylqh98.mp3",
    bhutia: " ཁྱི་ཅིག་  ཧབ་བཞིན་ འདུག།",
    pronunciation: "khyi-chig khab-zin dug",
  },
  {
    key: "1217",
    english: "Cats are sleeping (plural form)",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140442/correction/cats_are_sleeping_qle2xw.mp3",
    bhutia: "ཨ་ལུས་ཙུ་ ཉལ་སྡོད་ འདུག།",
    pronunciation: "ali-chu nyil-de dug",
  },
  {
    key: "1218",
    english: "Teachers are nice",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140233/correction/teachers_are_nice_rmvttv.mp3",
    bhutia: "སློབ་དཔོན་ཙུ་ ལོགམ་ འདུག།",
    pronunciation: "lob-pen-chu lem dug",
  },
  {
    key: "1219",
    english: "Houses were built",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140417/correction/houses_were_built_r38y8w.mp3",
    bhutia: "ཁྱིམ་ཙུ་ བཟོ་ཚར་ འདུག།",
    pronunciation: "khim-chu zo-char dug",
  },
  {
    key: "1220",
    english: "Cars are new",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140442/correction/cars_are_new_mkmdcl.mp3",
    bhutia: "ཞོན་འཁོར་ཙུ་ གསར་པོ་ འདུག།",
    pronunciation: "zhoenkor-chu sapo-dug",
  },
  {
    key: "1221",
    english: "Dogs are barking",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140436/correction/dogs_are_barking_daga1z.mp3",
    bhutia: "ཁྱི་ཙུ་ ཧབ་བཞིན་ འདུག།",
    pronunciation: "khyi-chu habzin dug",
  },
  {
    key: "1222",
    english: "She wants to sing (infinitive verb)",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140233/correction/she_wants_to_sing_libkio.mp3",
    bhutia: "མོ་ གླུ་ རྐྱབས་འདོད་ འདུག།",
    pronunciation: "mo lo kyab-dod dug",
  },
  {
    key: "1223",
    english: "They decided to leave",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140244/correction/they_decided_to_leave_iw5we7.mp3",
    bhutia: "ཁོང་ཙུ་ཀིས་ བཏང་ཤད་ ཐག་ཅད་པོ་ སྦད།",
    pronunciation: "khong-chu-ki tang-shed thag-ched-po sbed",
  },
  {
    key: "1224",
    english: "He loves to play soccer",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140427/correction/he_loves_to_play_football_ujnphw.mp3",
    bhutia: "ཁོ་ལོ་རྐང་རྩེད་ པོ་ལི་ རྩེད་ཤད་ དགའ།",
    pronunciation: "kho-lo kangched-poli rtseng-shed ga",
  },
  {
    key: "1225",
    english: "I need to buy milk",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140417/correction/i_need_to_buy_milk_yxfhcj.mp3",
    bhutia: "ང་ལོ་ ཨོམ་ ཉོ་དགོས་པོ་ ཡོད།",
    pronunciation: "nga-lo om nyon-go-po yed",
  },
  {
    key: "1226",
    english: "We hope to win",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140303/correction/we_hope_to_win_jdidsc.mp3",
    bhutia: "ང་ཅག་ རྒྱལ་བའི་ རེ་བ་ ཡོད།",
    pronunciation: "ngacha gyal-bare reba yed",
  },
  {
    key: "1227",
    english: "Running water is clean (as a participle)",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140417/correction/running_water_is_clean_zb4mcy.mp3",
    bhutia: "རྒྱུགས་ཆུ་ འདི་ གཙང་མོ་ ཡོད།",
    pronunciation: "gyug-chu di chang-mo yed",
  },
  {
    key: "1228",
    english: "He found the broken glass",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140435/correction/he_found_the_broken_glass_ksc8ba.mp3",
    bhutia: "ཁོ་ཀི ཤེལ་ ཆག་ཆག་ཀོ་པོ་ སྦད། ",
    pronunciation: "kho-ki sherl chag-chag-ko-kapo bed",
  },
  {
    key: "1229",
    english: "The smiling girl is my friend",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140243/correction/the_smiling_girl_is_my_friend_id3r1e.mp3",
    bhutia: "འཛུམ་སྟོན་མཁན་ བུམ་འདི་ རོགས་ ཨིན།",
    pronunciation: "zumten-khen phum-di ngai rog en",
  },
  {
    key: "1230",
    english: "We heard the barking dogs",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140270/correction/we_heard_the_barking_dogs_tam9on.mp3",
    bhutia: "ང་ཅག་ གིས་ ཁྱི་ཧབ་པོ་ ཐོས་ཅེ།",
    pronunciation: "ngachag-gi khi hapo thuche",
  },
  {
    key: "1231",
    english: "She saw the falling leaves",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140325/correction/she_saw_the_falling_leaves_lrkg5t.mp3",
    bhutia: "མོ་ཀིས་ བྱུ༹ས་བཞིན་ ཡོད་པའི་ འདབ་མ་ཙུ་ མཐོང་ཅེ། ",
    pronunciation: "mo-ki phyu-zin yed-pe dam-chu thong-che",
  },
  {
    key: "1232",
    english: "He writes every day (present simple tense)",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140418/correction/he_writes_every_day_d6kwun.mp3",
    bhutia: "ཁོ་ ཉིམ་ མ་ཆག་ བྲིས་དོ།", 
    pronunciation: "kho nyim ma-cha thri-do",
  },
  {
    key: "1233",
    english: "She reads books",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140325/correction/she_reads_a_book_wn2ckt.mp3",
    bhutia: "མོ་ དེབ་ཙུ་ སྒྲོགས་ཏོ།",
    pronunciation: "mo theb-chu dok-to",
  },
  {
    key: "1234",
    english: "They play football",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140252/correction/they_play_football_rrw5db.mp3",
    bhutia: "ཁོང་ཙུ་ རྐང་རྕེད་ པོ་ལི་ རྩེད་དོ།",
    pronunciation: "khong-chu kangched-poli chued-do",
  },
  {
    key: "1235",
    english: "We cook on weekends",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140259/correction/we_cook_on_weekends_qd2jdy.mp3",
    bhutia: "ང་ཅག་ བདུན་ཕྲག་གི་ མཐའ་འཇུག་ཙུ་ན་ ཟམ་ བཟོ་དོ།",
    pronunciation: "nga-chag dun-phrag-gi thazug-chuna zam zo-do",
  },
  {
    key: "1236",
    english: "He drives to work",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140435/correction/he_drives_to_work_iisdx4.mp3",
    bhutia: "ཁོ་ མ་ཊོར་ བསྐུལ་སྡི་ གཡོག་ལོ་ འགྱུ་དོ།",
    pronunciation: "kho motor kyil-di yog-lo gyu-do ",
  },
  {
    key: "1237",
    english: "She is reading a book (present continuous tense)",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140341/correction/she_is_reading_a_book_w8nhqu.mp3",
    bhutia: "མོ་ དེབ་ སྒོགས་བཞིན་ ཡོད།",
    pronunciation: "mo theb dog-zin yed",
  },
  {
    key: "1238",
    english: "He is running fast",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140427/correction/he_is_running_fast_sqeuhw.mp3",
    bhutia: "ཁོ་ མ་ལགས་ རྒྱུགས་བཞིན་འདུག།",
    pronunciation: "kho malag gyug-zin dug",
  },
  {
    key: "1239",
    english: "They are playing soccer",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140244/correction/they_are_playing_soccer_uo6she.mp3",
    bhutia: "ཁོང་ཙུ་ རྐང་ཙེད་ པོ་ལི་ རྩེད་བཞིན་ འདུག།",
    pronunciation: "khong-chu kangchoed-poli tsi-zing dug",
  },
  {
    key: "1240",
    english: "We are cooking dinner",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140259/correction/we_are_cooking_dinner_vatago.mp3",
    bhutia: "ང་ཅག་ ཕྱི༹ས་ཁའི་ ཟམ་བཟོ་བཞིན་ ཡོད།",
    pronunciation: "nga0chag phi-key samjo-zin yed",
  },
  {
    key: "1241",
    english: "He is driving home",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140434/correction/he_is_driving_home_iypj5f.mp3",
    bhutia: "ཁོ་ མོ་ཊོར་ བསྐུལ་བཞིན་ ཁྱིམ་ན་ ལོག་ཏོ།",
    pronunciation: "kho motor kul-zin khim na log-to",
  },
  {
    key: "1242",
    english: "She has finished her work (present perfect tense)",
    pronunciation: "moki mure yog myung-char dug",
    bhutia: "མོ་ཀིས་ མོ་རེའི་ གཡོག་ མྱོ༹ང་ཚར་ འདུག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140374/correction/she_has_finished_her_work_wzewg3.mp3",
  },
  {
    key: "1243",
    english: "He has eaten lunch",
    pronunciation: "kho-ki za-bo za-char",
    bhutia: "ཁོ་ཀིས་ ཛ་བོ་ ཟ་ཚར།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140434/correction/he_has_eaten_lunch_xfepca.mp3",
  },
  {
    key: "1244",
    english: "They have travelled to Paris",
    pronunciation: "khong-chu paris-lo song-zhe",
    bhutia: "ཁོང་ཙུ་ པེ་རིས་ལོ་ སོང་ཞེ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140251/correction/they_have_travelled_to_paris_syxibt.mp3",
  },
  {
    key: "1245",
    english: "We have seen that movie",
    pronunciation: "ngacha-gi lognyin odi ta-zhe",
    bhutia: "ང་ཅག་གིས་ གློག་བརྙན་ ཨོ་འདི་ ལྟ་ཞེ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140260/correction/we_have_seen_that_movie_vn48ew.mp3",
  },
  {
    key: "1246",
    english:
      "He has been running since morning (present perfect continuous tense)",
    pronunciation: "kho throp-pa le kyub-zin dug",
    bhutia: "ཁོ་ དྲོ་པ་ལས་ རྒྱུགས་བཞིན་ འདུག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140435/correction/he_has_been_running_since_morning_btprqe.mp3",
  },
  {
    key: "1247",
    english: "They have been playing soccer all day",
    bhutia: "ཁོང་ཙུ་ ཉིན་ཐུབ་ རྐང་རྕེད་པོ་ལི་ རྕེད་བཞིན་ ཡོད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140251/correction/they_have_been_playing_football_all_day_or0h27.mp3",
    pronunciation: "khong-chu nyin-thup kang-choed-poli chezin yed",
  },

  {
    key: "1248",
    english: "He has been studying for the exam",
    bhutia: "ཁོ་ ཆོས་རྒྱུགས་ཀྱིས་ དོན་ལོ་ སྒྲོགས་བཞིན་ ཡོད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140434/correction/he_has_been_studying_for_the_exam_jhwq1y.mp3",
    pronunciation: "kho chog-kyi then-lo dog-zin yed",
  },
  {
    key: "1249",
    english: "She read a book (past simple tense)",
    bhutia: "མོ་ཀིས་ དེབ་སྒྲོགས་ཀོ་ ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140326/correction/she_read_a_book_vlsycu.mp3",
    pronunciation: "mo-ki theb-droko en",
  },
  {
    key: "1250",
    english: "He ran fast",
    bhutia: "ཁོ་ མ་ལག་ རྒྱུགས་ཀོ་ ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140427/correction/he_ran_fast_ezzz5d.mp3",
    pronunciation: "kho malag gyu-ko en",
  },
  {
    key: "1251",
    english: "They played soccer",
    bhutia: "ཁོང་ཙུ་ རྐང་རྩེད་པོ་ལི་ རྩེད་བོ་ ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140252/correction/they_played_soccer_qcglvw.mp3",
    pronunciation: "khong-chu kang-choed-poli ched-bo en",
  },
  {
    key: "1252",
    english: "We cooked dinner",
    bhutia: "ང་ཅག་གིས་ ཕྱི༹་ཁའི་ ཟམ་ བཟོ་བོ་ ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140260/correction/we_cooked_dinner_jylfrw.mp3",
    pronunciation: "nga-chag-ki phyi-ke zam zobo en",
  },
  {
    key: "1253",
    english: "She was reading a book (past continuous tense)",
    bhutia: "མོ་ དེབ་སྒྲོགས་བཞིན་ འདུག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140233/correction/she_was_reading_a_book_ataurd.mp3",
    pronunciation: "mo theb-drog-zin dug",
  },
  {
    key: "1254",
    english: "He was running fast",
    bhutia: "ཁོ་ མ་ལག་ རྒྱུགས་བཞིན་ འདུག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140426/correction/he_was_running_fast_uk2mn7.mp3",
    pronunciation: "kho malag gyug-zyin dug",
  },
  {
    key: "1255",
    english: "They were playing soccer",
    bhutia: "ཁོང་ཙུ་ རྐང་རྩེད་ པོ་ལི་ རྩེད་བཞིན་ འདུག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140252/correction/they_were_playing_soccer_au9prr.mp3",
    pronunciation: "khong-chu kang-choed-poli ched-zin dug",
  },
  {
    key: "1256",
    english: "He was driving home",
    bhutia: "ཁོ་ མོ་ཊོར་ བསྐུལ་བཞིན་ ཁྱིམ་ན་ ལོག་ཀོ་ ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140426/correction/he_was_driving_home_qkecaq.mp3",
    pronunciation: "kho motor skul-zin khim-na log-ko en",
  },
  {
    key: "1257",
    english: "She had finished her homework",
    bhutia: "མོ་ཀིས་ མོ་རེའི་ གཡོག་ མྱོང་ཚར་ འདུག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140416/correction/she_had_finished_her_homework_oy8iag.mp3",
    pronunciation: "mo-ki mo-ri yog myung-char dug",
  },
  {
    key: "1258",
    english: "He had eaten lunch",
    bhutia: "ཁོ་ཀིས་ ཛ་བོ་ ཟ་ཚར་ འདུག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140435/correction/he_had_eaten_lunch_qj5uam.mp3",
    pronunciation: "kho-ki zou-bo za-char dug",
  },
  {
    key: "1259",
    english: "They had travelled to Paris",
    bhutia: "ཁོང་ཙུ་ པེ་རིས་ལོ་ སོང་བོ་ སྦད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140251/correction/they_had_travelled_to_paris_fm4zub.mp3",
    pronunciation: "khong-chu paris-lo sung-bo bed",
  },
  {
    key: "1260",
    english: "We had seen that movie",
    bhutia: "ང་ཅག་གིས་ གློག་བརྙན་ ཨོ་འདི་ ལྟ་བོ་ ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140260/correction/we_had_seen_that_movie_xahz6f.mp3",
    pronunciation: "ngachag-ki log-nyin odi ta-bo en",
  },
  {
    key: "1261",
    english:
      "He had been running since morning (past perfect continuous tense)",
    bhutia: "ཁོ་ དྲོ་པ་ལས་ རྒྱུགས་བཞིན་ ཡོད་པོ་ སྦད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140435/correction/he_had_been_running_since_morning_bjesss.mp3",
    pronunciation: "kho thrupa-le gyug-zyin yed-po bed",
  },
  {
    key: "1262",
    english: "They had been playing soccer all day",
    bhutia: "ཁོང་ཙུ་ ཉིན་ཐུབ་ རྐང་རྩེད་ པོ་ལི་ རྩེད་བཞིན་ ཡོད་པོ་ སྦད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140244/correction/they_had_been_playing_soccer_all_day_gb4i0z.mp3",
    pronunciation: "khong-chu nying-thub kangched-poli ched-zyin yed-po bed",
  },
  {
    key: "1263",
    english: "He had been studying for the exam",
    bhutia: "ཁོ་ ཆོས་ རྒྱུགས་ཀྱིས་ དོན་ལོ་ སྒྲོགས་བཞིན་ ཡོད་པོ་ སྦད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742357786/he_had_been_studying_for_exam_r9dtxt.mp3",
    pronunciation: "kho choyuki threnlo dogzin yed-po bed",
  },
  {
    key: "1264",
    english: "She will read a book (future simple tense)",
    bhutia: "མོ་ཀིས་ དེབ་ཅིག་ སྒྲོགས་ཤད་ ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742637305/correction/she_will_read_a_book_1_ks64ve.mp3",
    pronunciation: "moki theb-chig drog-shed en",
  },
  {
    key: "1265",
    english: "He will run fast",
    bhutia: "ཁོ་ མ་ལག་ རྒྱུགས་ཤད་ ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742637195/correction/he_will_run_fast_ghqpxq.mp4",
    pronunciation: "kho malag gyug-shed en",
  },
  {
    key: "1266",
    english: "They will play soccer",
    bhutia: "ཁོང་ཙུ་ རྐང་རྩིས་ པོ་ལི་ རྩེད་ཤད་ ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742637350/correction/they_will_play_soccer_tckkjh.mp3",
    pronunciation: "khong-chu kangched-poli tsed-shed en",
  },
  {
    key: "1267",
    english: "We will cook dinner",
    bhutia: "ང་ཅག་ ཕྱི༹ས་ཁའི་ ཟམ་ བཟོ་ཤད་ ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742637399/correction/we_will_cook_dinner_zzpnpy.mp3",
    pronunciation: "nga-chag phi-key zam zoshe en",
  },
  {
    key: "1268",
    english: "She will be reading a book (future continuous tense)",
    bhutia: "མོ་ དེབ་ སྒྲོགས་ཤད་ ཨིན་བོ་ སྦད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140233/correction/she_will_be_reading_a_book_izyhdk.mp3",
    pronunciation: "mo theb drog-shed en-bo bed",
  },
  {
    key: "1269",
    english: "He will be running in the park",
    bhutia: "ཁོ་ གླིང་ ག་ན་ རྒྱུགས་ཤད་ ཨིན་བོ་ སྦད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140418/correction/he_will_be_running_in_the_park_iev117.mp3",
    pronunciation: "kho ling ghana gyug-shed en-bo bed",
  },
  {
    key: "1270",
    english: "They will be playing soccer tomorrow",
    bhutia: "ཁོང་ཙུ་ ཐོ་རང་ རྐང་རྕེད་པོ་ལི་ རྩེད་ཤད་ ཨིན་བོ་ སྦད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140252/correction/they_will_be_playing_soccer_wqyy4s.mp3",
    pronunciation: "khong-chu thorang kang-chepd-oli tsi-chey enbo-be",
  },
  {
    key: "1271",
    english: "She will have finished her homework",
    bhutia: "མོ་ཀིས་ མོ་རེའི་ ཁྱིམ་གཡོག་ ཐམས་ཅད་ མྱོ༹ང་ཤད་ སྦད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140233/correction/she_will_have_finished_her_homework_hxaak1.mp3",
    pronunciation: "mo-ki mo-ray khim-yog tham-ched myung-shed bed",
  },
  {
    key: "1272",
    english: "He will have eaten by 9 pm",
    bhutia: "ཁོ་ ཕྱི༹ས་རུ་ ཆུ་ ཚོད་ དགུ་ཟང་ ཟམ་ཟ་ མྱོ༹ང་ཤད་ སྦད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140418/correction/he_will_have_eaten_by_9_pm_to5g24.mp3",
    pronunciation: "kho phiru chuchey gusa samsa myungshey bey ",
  },
  {
    key: "1273",
    english: "They will have completed the project",
    bhutia: "ཁོང་ཙུ་ ཆར་གཞི་ ཐམས་ཅད་ མྱོ༹ང་ཤད་ སྦད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140034/correction/they_will_have_completed_the_project_edu4zr.mp3",
    pronunciation: "khongtsu charg-zyi tham-ched myung-shed bed",
  },
  {
    key: "1274",
    english:
      "He will have been running for 30 minutes (future perfect continuous tense)",
    bhutia: "ཁོ་ སྐར་མོ་ སུམ་ཅུ་ ལས་ རྒྱུགས་བཞིན་ ཡོད་ཤད་ ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742278265/he_will_have_been_running_for_30_minutes_uovzzw.mp3",
    pronunciation: "ko karma sumchu le yog-zin yes-she en",
  },
  {
    key: "1275",
    english: "We will have been cooking since morning",
    bhutia: "ང་ཅག་ དྲོ་པ་ལས་ ཟམ་བཟོ་བཞིན་ ཡོད་ཤད་ ཨིན།",
    audiolink: "",
    pronunciation: "ngacha tupaley samzozin yeshe in",
  },
  {
    key: "1276",
    english: "He will have been studying for a week",
    bhutia: "ཁོང་གིས་ བདུན་ཕྲག་ ཅིག་གིས་ དོན་ལོ་ སྒྲོགས་བཞིན་ ཡོད་ཤད་ ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140044/correction/he_will_have_been_studying_for_a_week_j6oz1w.mp3",
    pronunciation: "khon ki dintha chigke thenlo dogzin yeshe in",
  },
  {
    key: "1277",
    english: "We appreciate your cooperation in this matter (formal context)",
    bhutia:
      "རང་གིས་ གཡོག་འདི་ལོ་ རོགས་རམ་ བྱ༹ས་བྱི༹ན་བོ་ལོ་ ང་ཅག་ དགའ་སུ་ ཡོག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140035/correction/we_appreciate_your_cooperation_in_this_matter_miiemu.mp3",
    pronunciation: "rangkhe yudilo roram phya phinbolo ngacha gasu yea",
  },
  {
    key: "1278",
    english: "The company is pleased to announce a new policy",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140044/correction/the_company_is_pleased_to_announce_the_new_policy_r1w5is.mp3",
    pronunciation: "chongden lelagki phyotap phyathopay nga gata thenze",
    bhutia: "ཚོང་དོན་ ལས་ལག་གིས་ བྱུས་ཐབས་ བྱ༹ས་ཐོབ་པོའི་ན་ དགའ་དྲགས་ ཐོན་ཞེ།",
  },
  {
    key: "1279",
    english: "Hey, let's hang out tonight (informal context)",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140044/correction/hey_let_s_hang_out_tonight_c90py8.mp3",
    pronunciation: "oye tharing phiru nyangka thangay",
    bhutia: "ཨོ་ཡེ! ད་རིང་ ཕྱི༹ས་རུག་ ཉང་དགའ་ གཏང་གེ།",
  },
  {
    key: "1280",
    english: "I don't feel like working today",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140044/correction/i_don_t_feel_like_working_today_l3v3jf.mp3",
    pronunciation: "tharing nga yeu phyaseki semme",
    bhutia: "ད་རིང་ ང་ གཡོག་ བྱ༹ས་ཤད་ཀྱིས་ སེམས་མེད།",
  },
  {
    key: "1281",
    english: "That movie was super cool !",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140044/correction/that_movie_was_super_cool_gc9zsp.mp3",
    pronunciation: "loknin odi lepti lem dukay",
    bhutia: "གློག་བརྙན་ ཨོ་འདི་ ལེབ་སྟི་ ལེགམ་ འདུག་ཀེ།",
  },
  {
    key: "1282",
    english: "Heavy rain is expected today (common collocations)",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140044/correction/heavy_rain_is_expected_today_si15in.mp3",
    pronunciation: "tharing chapo lep kyap nin tem doh",
    bhutia: "ད་རིང་ ཆར་པོ་ ལེབ་ རྐྱབས་ཉེ་ འདེམས་ འདུག།",
  },
  {
    key: "1283",
    english: "He made a quick decision ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140045/correction/he_made_a_quick_decision_kwoaw8.mp3",
    pronunciation: "khuki gyop tagchepo in",
    bhutia: "ཁོ་ཀིས་ རྒྱོབས་ ཐག་ཅད་པོ་ ཨིན།",
  },
  {
    key: "1284",
    english:
      "The report was submitted on time (business and professional context)",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140045/correction/the_report_was_submitted_on_time_nkxchy.mp3",
    pronunciation: "suba di thuchena kebo in",
    bhutia: "ཞུ་བ་ འདི་ དུས་ཚོད་ན་ སྐྱེལ་བོ་ ཨིན།",
  },
  {
    key: "1285",
    english: "We are looking forward to your response",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140045/correction/we_are_looking_forward_to_your_response_qig8ox.mp3",
    pronunciation: "ngacha rangki lenloh kugdenshe in",
    bhutia: "ང་ཅག་ རང་གི་ ལན་ལོ་ གུག་སྡོད་ཤད་ ཨིན།",
  },
  {
    key: "1286",
    english: "Her heart sang with joy (literary and poetic context)",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140045/correction/her_heart_sang_with_joy_xzennp.mp3",
    pronunciation: "mo sem gata phya lukyapo be",
    bhutia: "མོ་ སེམས་ དགའ་དྲགས་ བྱ༹ས་ གླུ་རྐྱབས་པོ་ སྦད།",
  },

  {
    key: "1289",
    english: "How old are you? What is your age?",
    bhutia: "ལྷན་རྒྱས་ དགུང་ལོ་ག་ཚོད་ འབོ་ལགས།",
    pronunciation: "lhengye gunglo gha-choed bo la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140480/correction/how_old_are_you_xyzp3l.mp3",
  },
  {
    key: "1290",
    english: "I am 30 years old.",
    bhutia: "ང་ ལོ་ ༣༠ ཨིན་ ལགས།",
    pronunciation: "nga lo sumchu en la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140046/correction/i_am_30_years_old_nrhxnk.mp3",
  },
  {
    key: "1291",
    english: "Where do you study?",
    bhutia: "ལྷན་རྒྱས་  སློབ་སྦྱོངས་  ག་ན་  གནང་བདོ།",
    pronunciation: "lhengye lobzang ghana nangdo?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140045/correction/where_do_you_study_mfwoni.mp3",
  },
  {
    key: "1292",
    english: "I study in Delhi",
    bhutia: "ང་ དྷེལ་ལི་ན་ སློབ་སྦྱོངས་ བྱ༹ས་བདོ་ ཨིན།",
    pronunciation: "nga delhi na lobzang phyado en",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140046/correction/i_study_in_delhi_lzdkkx.mp3",
  },
  {
    key: "1293",
    english: "What are your hobbies?",
    bhutia: "ལྷན་རྒྱས་ཀྱི་ དང་འདོད་  གན་  ཡོད་པོ་ ལགས།",
    pronunciation: "lhengye kyi thangday ghang yed-po la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140055/correction/what_are_your_hobbies_yxwaiw.mp3",
  },
  {
    key: "1294",
    english: "To read books.",
    bhutia: "དཔེ་ཆ་ སྒྲོགས་ཤད་ དགའ་ཚོར་ ཡོད་ལགས།",
    pronunciation: "pecha drog-shed gachor yed la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140055/correction/to_read_books_ao1oci.mp3",
  },
  {
    key: "1295",
    english: "What are your future plans?",
    bhutia: "ལྷན་རྒྱས་ཀྱི་ མ་འོངས་པོ་ན་ འཆར་གཞི་ གན་གན་ ཡོད་པོ།",
    pronunciation: "lhengye kyi maong pona char-gzhi ghan ghan yedpo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140055/correction/what_are_your_future_plans_vxi9cs.mp3",
  },
  {
    key: "1296",
    english: "I don't have any future plan.",
    bhutia: "ང་ལོ་ མ་འོངས་པོའི་ འཆར་གཞི་ གན་ཡང་ མེད་ལགས།",
    pronunciation: "nga lo mahong pena char-gzhi ghan-yang med-lag",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140055/correction/i_dont_have_any_future_plans_svnles.mp3",
  },
  {
    key: "1297",
    english: "Where do you live?",
    bhutia: "ལྷན་རྒྱས་ ག་ན་ བཞུགས་པོ་ གནང་བདོ།",
    pronunciation: "lhengye ghana zud-po nang do?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140448/correction/where_do_you_live_zpzbed.mp3",
  },
  {
    key: "1298",
    english: "I live in Gangtok.",
    bhutia: "ང་ སྒང་ཏོག་ན་ སྡོད་ཏོ་ ཨིན་ལགས།",
    pronunciation: "nga gatok na deto en la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140055/correction/i_live_in_gangtok_rjijcj.mp3",
  },
  {
    key: "1299",
    english: "Did you finish your college?",
    bhutia: "ལྷན་རྒྱས་ཀྱི་ མཐོ་རིམ་ སློབ་གྲྭ་ མྱོ༹ང་པོ་ ལགས།",
    pronunciation: "lhengye kyi thorim lobdra myungpo la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140056/correction/did_you_finish_your_college_bujtz0.mp3",
  },
  {
    key: "1300",
    english: "Yes, I did recently.",
    bhutia: "ལགས་ ད་རེ་རང་ རྫོགས་པོ་ ཨིན།",
    pronunciation: "la,dhare rang zog-po en",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140056/correction/yes_i_did_recently_kn0weh.mp3",
  },
  {
    key: "1301",
    english: "How are you?",
    bhutia: "སྐུ་གཟུགས་ བཟང་པོ།",
    pronunciation: "kuzu zangpo?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140056/correction/how_are_you_aisvbf.mp3",
  },
  {
    key: "1302",
    english: "I am fine, thanks.",
    bhutia: "ལེགམ་རང་ ཡོད་ལགས།,ཐུགས་རྗེ་ཆེ།",
    pronunciation: "lemra ye la, thugzi-che",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140480/correction/i_am_fine_thank_you_xwb0vq.mp3",
  },
  {
    key: "1303",
    english: "Where are you from?",
    bhutia: "ལྷན་རྒྱས་ ག་བཞུགས་པོ་ གནང་མཁན་ འབོ་ལགས།",
    pronunciation: "lhengye kha zupo nangken bo la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140452/correction/where_are_you_from_ixvifj.mp3",
  },
  {
    key: "1304",
    english: "I am from Kabi.",
    bhutia: "ང་ ག་འབི་ སྡོད་མཁན་ ཨིན་ལགས།",
    pronunciation: "nga kabi deken en la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140056/correction/i_am_from_kabi_spktsq.mp3",
  },

  {
    key: "1307",
    english: "At what time do you go to office?",
    bhutia: "ལྷན་རྒྱས་ ཆུ་ཚོད་ ག་ཚོད་ལོ་ ལས་ཁུངས་ བྱོན་བདོ།",
    pronunciation: "lhengye chuche gha-choed lo lekhung chaendo?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140057/correction/at_what_time_do_you_go_to_office_pxrmuy.mp3",
  },
  {
    key: "1308",
    english: "I go to office at ten o'clock.",
    bhutia: "ང་ ལས་ཁུངས་ ཆུ་ཚོད་ བཅུ་ན་ རྒྱུ་བདོ་ ཨིན་ལགས།",
    pronunciation: "nga lekung chuchey chu na gyudo en la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140057/correction/i_go_to_office_at_ten_o_clock_azy1zp.mp3",
  },
  {
    key: "1309",
    english: "What are your plans now?",
    bhutia: "ད་ ལྷན་རྒྱས་ཀྱི་ འཆར་གཞི་ གན་ ཡོད་པོ་ ལགས།",
    pronunciation: "tha lhengye kyi chazi ghan yepo la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140066/correction/what_are_your_plans_now_gj7fbb.mp3",
  },
  {
    key: "1310",
    english: "I'm thinking to submit application for govt. job.",
    bhutia: "གཞུང་གཡོག་གི་ དོན་ལོ་ ཞུ་ཡིག་ ཕུལ་ཤད་ མནོ་བསམ་ ཡོད་ལགས།",
    pronunciation: "zyungyo-ki thenlo suik phisay nosam ye la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140067/correction/i_am_thinking_to_submit_an_application_for_governement_job_kugxvn.mp3",
  },
  {
    key: "1311",
    english: "Do you have interest to do job in Sikkim?",
    bhutia: "རང་ལོ་ འབྲས་ལྗོངས་ན་ གཡོག་རྐྱབས་ཤད་ཀྱི་ འདོད་པོ་ ཡོད་ཀ?",
    pronunciation: "rang lo den-zong na yog kyap-shed ki dod-po yea ka?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220480/correction_again/1311_lu3vyh.mp3",
  },
  {
    key: "1312",
    english: "Yes, I do.",
    bhutia: "ལ་ ཡོད་ལགས།",
    pronunciation: "la, ye la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140116/correction/yes_i_do_qkcu9f.mp3",
  },
  {
    key: "1313",
    english: "What is your job?",
    bhutia: "ལྷན་རྒྱས་ ཕྱག་ལས་ གན་ གནང་བདོ་ ལགས།",
    pronunciation: "lhengye chaley ghan nang-do la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140456/correction/what_is_your_job_s4cbdv.mp3",
  },
  {
    key: "1314",
    english: "I'm a Doctor.",
    bhutia: "ང་ སྨན་པོ་ ཨིན་ལགས།་",
    pronunciation: "nga sman-po en la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140067/correction/i_am_a_doctor_t1rq2i.mp3",
  },
  {
    key: "1315",
    english: "Where are you these days?",
    bhutia: "ལྷན་རྒྱས་ ད་རེ་ ག་ན་ བཞུགས་ཡོད།",
    pronunciation: "lhengye tharay khana ju yea?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140067/correction/where_are_you_these_days_pifmrr.mp3",
  },
  {
    key: "1316",
    english: "I am in London these days.",
    bhutia: "ང་ ད་རེ་ ལོན་ཌོན་ལོ་ ཡོད་ ལགས།",
    pronunciation: "nga tharay london lo yea la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220480/correction_again/1316_ekja7a.mp3",
  },
  {
    key: "1317",
    english: "Where is your school?",
    bhutia: "ལྷན་རྒྱས་ཀྱི་ སློབ་གྲྭ་ ག་ན་ ཡོད་པོ་ ལགས།",
    pronunciation: "lhengye kyi lobdra khana yepo la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140443/correction/where_is_your_schol_tinzcl.mp3",
  },
  {
    key: "1318",
    english: "At Kalimpong",
    bhutia: "བཀའ་བློན་སྤུངས་ ལོ།",
    pronunciation: "kalenpong lo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220470/correction_again/1318_s8uizi.mp3",
  },
  {
    key: "1319",
    english: "Love your dress. Where did you buy it? (honorific) ",
    bhutia: "ལྷན་རྒྱས་ཀྱི་ ནམ་བཟའ་ ལྕང་སྦད ག་ན་ལས་ བཞེས་པོ་ གནང་བོ་ ལགས།",
    pronunciation: "lhengye kyi namza chang beh khana le zepo nangbo la?  ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220470/correction_again/1319_avmzvz.mp3",
  },
  {
    key: "1320",
    english: "I brought from Gangtok.",
    bhutia: "ངས་ སྒང་ཏོག་ལས་ ཉོ་བོ་ ཨིན།",
    pronunciation: "nga gatok (gangtok) ley nyo en",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220469/correction_again/1320_faihld.mp3",
  },
  {
    key: "1321",
    english: "Did you colour your hair?",
    bhutia: "ལྷན་རྒྱས་ཀྱི་ དབུ་སྐྱ་ན་ ཚོན་ཕྱུགས་ཀོ་ གནང་བོ་ ལགས།",
    pronunciation: "lhengye ki ukyana chenphyuko nangbo la ? ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220469/correction_again/1321_ab0pks.mp3",
  },
  {
    key: "1322",
    english: "Yes, I did.",
    bhutia: "ལ་ ཨིན་ ལགས།",
    pronunciation: "la , en la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140068/correction/yes_i_did_teojjp.mp3",
  },
  {
    key: "1323",
    english: "I didn't know about your father so sorry. (honorific)",
    bhutia: "ངས་ ལྷན་རྒྱས་ཀྱི་ ཡབ་ཀྱི་ སྐོར་ལོ་ ཧ་མ་གོ་ ཐུགས་ སྡུག་ཀོ་ མ་གནང་།",
    pronunciation: "nga lhengye ki yap kyi korlo ha ma go  thu duko mana",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220469/correction_again/1323_kzfmen.mp3",
  },
  {
    key: "1324",
    english: "It is OK.",
    bhutia: "ཁྱད་ མེད་ལགས།",
    pronunciation: "khye med la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140068/correction/it_is_ok_nntdlv.mp3",
  },
  {
    key: "1325",
    english: "Where do you want to go? (honorific)",
    bhutia: "ལྷན་རྒྱས་ ག་ན་ བྱོན་འདོད་ ཡོད་ལགས།",
    pronunciation: "lhengye khana joen doe yea la? ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140077/correction/where_do_you_want_to_go_zl4gey.mp3",
  },
  {
    key: "1326",
    english: "I want to go to Pangthang.",
    bhutia: "ང་ སྤང་ཐང་ རྒྱུ་འདོད་ ཡོད་ ལགས།",
    pronunciation: "nga pangthang gyu doe yea la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220468/correction_again/1326_dq50vc.mp3",
  },
  {
    key: "1327",
    english: "Your clothes are so dirty. Where are you coming from?",
    bhutia:
      "ལྷན་རྒྱས་ཀྱི་ ནམ་བཟའ་ བཙོག་དྲགས་ འདུག་ ག་ན་ལས་ བྱོན་བོ་ གནང་བོ་ ལགས།",
    pronunciation: "lhengye kyi namza chokta du.khana ley joen bo na bo la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220468/correction_again/1327_x6pj51.mp3",
  },
  {
    key: "1328",
    english: "Yes, I had gone to work in the field",
    bhutia: "ལ་ ཨིན་! ང ཞིང་ན་ གཡོག་ རྐྱབས་པ་ སོང་བོ་ ཨིན།",
    pronunciation: "laen nga shing na yog kyapa song bo en",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220458/correction_again/1328_hsbs8u.mp3",
  },
  {
    key: "1329",
    english: "Should I cook today's lunch?",
    bhutia: "ངས་ ད་རིང་ ཉི་མའི་ ཛོའུ་ བཟོ་ག་ ལགས།",
    pronunciation: "nga tharing nye-mey zou joga la ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220458/correction_again/1329_cwpmrt.mp3",
  },
  {
    key: "1330",
    english: "No, I have already cooked.",
    bhutia: "མན་! ངས་ བཟོ་ཚར།",
    pronunciation: "men nga zho tshar",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220458/correction_again/1330_ssinqz.mp3",
  },
  {
    key: "1331",
    english: "Please forgive me for my mistake.",
    bhutia: "ངའི་ ནོར་འཁྲུལ་ལོ་ བཟོད་གསོལ་ གནང་ན།",
    pronunciation: "naye nortul loh zesol nangna  ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140078/correction/please_forgive_me_for_my_mistake_xny13i.mp3",
  },
  {
    key: "1332",
    english: "Let me know if I can be of any help.",
    bhutia: "ང་ལོ་ གསུང་བོ་ གནང་ལགས་ ང་ཀིས་ རོགས་རམ་ ཕུལ་ཚུགས་ ཀམ།",
    pronunciation: "nga lo sung bo na la nga ki roram phul tshu kam",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140078/correction/let_me_know_if_i_can_be_of_any_help_x3k4ab.mp3",
  },
  {
    key: "1333",
    english: "I wish we could go back in time.",
    bhutia:
      "ང་ཅག་ དུས་ཚོད་ ན་ ལོག་ ཚུགས་བཅུག་ ལབ་སྟི་ ངས་ སྨོན་ལམ་ བཏབ་ཤད་ ཨིན། ",
    pronunciation:
      "nga-cha du-tshoed na log-tshu chu lapti nga monlam tapshed en ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220458/correction_again/1333_oq8j45.mp3",
  },
  {
    key: "1334",
    english: "Education is so expensive these days.",
    bhutia: "དེང་སང་ ཆོས་ ཡོན་ཏན་ སྦྱང་ཤད་ལོ་ འགྲོ་སོང་ ཆེ་དྲགས་ ཡོད་ལགས།",
    pronunciation: "thengsa cho yonten zangshed lo drosang chhita yea la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140079/correction/education_is_so_expensive_these_days_dizp5w.mp3",
  },
  {
    key: "1335",
    english: "Your son has grown so big.",
    bhutia: "ལྷན་རྒྱས་ཀྱི་ སྲས་ ལེབ་ སྦོམ་ཚར་ འདུག",
    pronunciation: "lhengye kyi se leb bomchar du",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220457/correction_again/1335_irxqwa.mp3",
  },
  {
    key: "1336",
    english: "It's so nice to see you after a long time.",
    bhutia:
      "ལྷན་རྒྱས་ལོ་ ཀེས་པོའི་ རྒྱབ་ལས་  མཇལ་སྡི་ སེམས་ ལེབ་སྟི་ ར་ དགའ་ཞེ།",
    pronunciation: "lhengye lo kepoe gyapley  zeldi sem lep ti ra gazey",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220457/correction_again/1336_jugnpw.mp3",
  },
  {
    key: "1337",
    english: "Going to sleep?",
    bhutia: "གཟིམ་པ་ བྱོན་ཤད་ ལགས?",
    pronunciation: "zimpa joen-shed la ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140090/correction/going_to_sleep_ewuw6f.mp3",
  },
  {
    key: "1338",
    english: "Your phone is ringing.",
    bhutia: "ལྷན་རྒྱས་ཀྱི་ ཞལ་པར་ འདི་ སྐད་ རྐྱབས་ཅན་ འདུག།",
    pronunciation: "lhengye kyi shel-par di ked kyap-chen du",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220457/correction_again/1338_izertc.mp3",
  },
  {
    key: "1339",
    english: "I don't know who you are.",
    bhutia: "ངས་ ལྷན་རྒྱས་ལོ་ ངོ་ མ་ཤེས་ ལགས་ རང་ ཀ་མོ་།",
    pronunciation: "ngaa lhengye lo ngo ma-shey-la rang kamo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140090/correction/i_don_t_know_who_you_are_l8igj8.mp3",
  },
  {
    key: "1340",
    english: "Switch off the TV.",
    bhutia: "གློག་བརྙན་ འདི་ གསད་པོ་ གནང་།",
    pronunciation: "lok-nyen di sepo nang ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220449/correction_again/1340_yaotm5.mp3",
  },
  {
    key: "1341",
    english: "Let's meet.",
    bhutia: "ང་ཅག་ འཕྱ༹ད་ཀེ།",
    pronunciation: "nga chag phey-ke",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140090/correction/lets_meet_fpqpzz.mp3",
  },
  {
    key: "1342",
    english: "Study well and get good marks.",
    bhutia: "བཀའ་ཆོས་ ལེགམ་ སྦྱངས་སྡེ་ ཨང་གྱངས་ ལེགམ་ ལེན་བོ་ གནང་།",
    pronunciation: "ka-chhoe lem zyangdi ang-gyang lem lenbo nang",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140090/correction/study_well_and_get_good_marks_iyeqz1.mp3",
  },
  {
    key: "1343",
    english: "Can you please wait for a while?",
    bhutia: "ལྷན་རྒྱས་ ཤུལ་ཅིག་ དགུག་པོ་ གནང་ཚུགས་ ཀ་ ལགས?",
    pronunciation: "lhengye shue-chi gupo nang-chu ka la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140091/correction/can_you_please_wait_for_a_while_rasjtm.mp3",
  },
  {
    key: "1344",
    english: "Let's go for lunch.",
    bhutia: "ང་ཅག་ ཛོའུ་ བཞེས་པ་ བྱོན་གེ།",
    pronunciation: "nga-cha zou dze-pa joen-gey.",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140090/correction/lets_go_for_lunch_rutinm.mp3",
  },
  {
    key: "1345",
    english: "Pema! did you check the file?",
    bhutia: "པདྨ་! ལྷན་རྒྱས་ཀྱིས་ ཡིག་སྣོད་༼ཕ་ཡེལ་༽གཟིགས་པོ་ གནང་བོ་ ལགས།",
    pronunciation: "Pema! lhengye kyi yig-noed (pha-yel) zig-po nang-bo la?  ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220449/correction_again/1345_mnnlay.mp3",
  },
  {
    key: "1346",
    english: "Can I be excused?  as I have work today",
    bhutia: "ད་རིང་ ང་ལོ་ གཡོག་ གཅིག་ ཡོད་,དགོངས་ཡངས་ གནང་ ཚུགས་ཀ་ ལགས? ",
    pronunciation: "tharing nga lo yog chig yea , gong-yang nang-chuk ka la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220449/correction_again/1346_eln8uw.mp3",
  },
  {
    key: "1347",
    english: "Finish this work by today.",
    bhutia: "ད་རིང་ར་ གཡོག་ འདི་ མྱོ༹ང་པོ་ གནང་།",
    pronunciation: "tharing ra yog-di myong-po nang",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140091/correction/finish_this_work_by_today_nq5qt6.mp3",
  },
  {
    key: "1348",
    english: "I won't be able to take class today.",
    bhutia: "ད་རིང་ ང་ འཛིན་གྱལ་ ལེན་ མི་ ཐོབ་པད་ ལགས།",
    pronunciation: "tha-ring nga zin-gyel len mi tho-ped la.",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140091/correction/i_wont_be_able_to_take_class_today_brygam.mp3",
  },
  {
    key: "1349",
    english: "Class will start from Monday.",
    bhutia: "འཛིན་གྱལ་ འདི་ གཟའ་ ཟླ་བོ་ལས་ འགོ་ བཙུག་ཤད་ ཨིན།",
    pronunciation: "zin-gyel di za dow ley go chuk-shed en.",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140091/correction/class_will_start_from_moinday_ct0ujy.mp3",
  },
  {
    key: "1350",
    english: "Sir is calling you.",
    bhutia: "སློབ་དཔོན་ གྱིས་ ལྷན་རྒྱས་ལོ་ འབོ་པོ་ གནང་དོ་ ལགས།",
    pronunciation: "lob-poen gyi lhengye lo pho-po nang-do la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220448/correction_again/1350_losqzu.mp3",
  },
  {
    key: "1351",
    english: "We should plan for outing/picnic someday.",
    bhutia:
      "ང་ཅག་ ཉིམ་གཅིག་ སྤང་ཁ/གླིང་ཁ་ གཏང་བ་ བྱོན་ཤད་ཀྱི་ གྲ་སྒྲིག་ གནང་ དགོས་ཤད་ སྦད་ ལགས།",
    pronunciation:
      "ngacha nyim-chi pang-kha/ling-kha tang-ba joen-shed kyi tha-drik nang-go shed-bed la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140103/correction/we_should_plan_for_picnic_or_outigng_someday_jio7ze.mp3",
  },
  {
    key: "1352",
    english: "May I help you?",
    bhutia: "ངས་ རོགས་རམ་ ཞུ་ ཚུགས་ ཀམ?",
    pronunciation: "ngaa roram shu-tshug kam?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220448/correction_again/1352_al67d3.mp3",
  },
  {
    key: "1353",
    english: "No thanks. I am just looking through.",
    bhutia: "མིན་དགོས་ ལགས། ང་ ཅམ་ ལྟ་དོ་ ཨིན་",
    pronunciation: "min-go la. nga cham ta-do en ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220448/correction_again/1353_znipa0.mp3",
  },
  {
    key: "1354",
    english: "Please sit down.",
    bhutia: "བཞུགས་པོ་ གནང་ལགས།",
    pronunciation: "zug-po nang-la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140103/correction/pleaase_sit_down_iiu4rh.mp3",
  },
  {
    key: "1355",
    english: "It's a pleasure to see you again.",
    bhutia: "ལྷན་རྒྱས་ལོ་ ལོག་ཅན་ མཇལ་སྡི་ དགའ་དྲགས་ བྱུང་ཞེ།",
    pronunciation: "lhengye lo lok-chen zel-di ga-tag zung-jhe. ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220439/correction_again/1355_xhigbu.mp3",
  },
  {
    key: "1356",
    english: "Will I see you again?",
    bhutia: "ལྷན་རྒྱས་ལོ་ ལོག་ཅན་ མཇལ་ཚུགས་ ཀ་ ལགས?",
    pronunciation: "lhengye lo log-chen zel-chu ka la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140104/correction/will_i_see_you_again__mlagyv.mp3",
  },
  {
    key: "1357",
    english: "Let's meet again next week.",
    bhutia: "བདུན་ཕྲག་ རྒྱབ་མ་ ལོག་ཅན་ མཇལ་གེ་ ལགས།",
    pronunciation: "duen-thrag gyab-ma lok-chen zel-gey la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220439/correction_again/1357_crgksc.mp3",
  },
  {
    key: "1358",
    english: "Give my regards to Mr. Pema.",
    bhutia: "སྐུ་ཞབས་ པདྨ་ལོ་ ངས་ སྐུ་གཟུགས་ བཟང་བོ་ ཞུ་དོ་ སེ་ ཞུ་གནང་།",
    pronunciation: "ku-shyab Pema lo ngaa  kuzu-zangbo shu-do se shu-nang.",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220438/correction_again/1358_jazykj.mp3",
  },
  {
    key: "1359",
    english: "Thanks for coming here.",
    bhutia: "འདི་ཁ་ བྱོན་བོ་ གནང་བོ་ན་ ཐུགས་རྗེ་ཆེ།",
    pronunciation: "di-kha joen-bo nang-bo na thug-je chhe",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220438/correction_again/1359_yisphe.mp3",
  },
  {
    key: "1360",
    english: "How many members are there in your family?",
    bhutia: "ལྷན་རྒྱས་ཀྱི་ གཟིམ་ཁང་ལོ་ མི་ལག་ ག་ཚོད་ ཡོད་པོ་ ལགས།",
    pronunciation: "lengey ki zimkhaloh mila khaze yepo la? ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220438/correction_again/1360_fxhqtd.mp3",
  },
  {
    key: "1361",
    english: "Do you believe in yourself?",
    bhutia: "ལྷན་རྒྱས་ རང་གི་ རང་ལོ་ ཡིད་ཆེས་ བྱ༹ས་ག་ ལགས།",
    pronunciation: "lhengye rang gi rang lo yid-chhe phya-ga la ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140104/correction/do_you_believe_in_yourself_icwrnd.mp3",
  },
  {
    key: "1362",
    english: "Can you give me an idea about this place?",
    bhutia:
      "ལྷན་རྒྱས་ ཡུལ་ འདི་ཀི་ སྐོར་ལོ་ ང་ལོ་ གསུང་ བྱི༹ན་བོ་ གནང་ཤད་ ལགས།",
    pronunciation: "lhengye yul di-ki korlo ngalo sung-phin-bo nang-shed la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220437/correction_again/1362_nqr2u2.mp3",
  },

  {
    key: "1386",
    english: "I want water.",
    bhutia: "ང་ལོ་ ཆུ་ དགོས་པད་ ལགས།",
    pronunciation: "nga lo chhu go-ped la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220437/correction_again/1386_d0ymxk.mp3",
  },

  {
    key: "1391",
    english: "How can I get in touch with you?",
    bhutia: "ང་ ལྷན་རྒྱས་ མཉམ་པུ་ འབྲེལ་བ་ ག་ལྟེ་ བྱ༹ས་ དགོས་ཤད་ འབོ།",
    pronunciation: "nga lhengye nyam-po delwa khatey phya go-shed bo?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140116/correction/how_can_i_get_in_touch_with_you_ttc4ga.mp3",
  },
  {
    key: "1392",
    english: "What is the weather like today?/How is  the weather today?",
    bhutia: "ད་རིང་ གནམ་གཤིས་ ག་ལྟེམ་ འདུག།/ད་རིང་ གནམ་ལ་ ག་ལྟེམ་ འདུག།  ",
    pronunciation: "tharing nam-shi ga-tem dug?/ tharing namla ga-tem dug?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140116/correction/what_is_the_weather_like_fqk92c.mp3",
  },

  {
    key: "1400",
    english: "Do you speak Bhutia?",
    bhutia: "ལྷན་རྒྱས་ ལྷོ་སྐད་ རྐྱབས་པོ་ གནང་ག་ ལགས།",
    pronunciation: "lhengye lho-ked kyapo nang-ga la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140116/correction/do_you_speak_bhutia_tudpdr.mp3",
  },
  {
    key: "1401",
    english: "Yes, I do.",
    bhutia: "ལ་ རྐྱབས་ཏོ་ ཨིན་ལགས།",
    pronunciation: "la kyap-to en la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140116/correction/yes_i_do_qkcu9f.mp3",
  },

  {
    key: "1406",
    english: "Where does the sun rise?",
    bhutia: "ཉིམ་ འདི་ ག་ན་ ལས་ ཤར་དོ་ ཨིན་ནམ།",
    pronunciation: "nyim di gha-na ley shyar-do enam?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140117/correction/where_does_the_sun_rise_from_xe1qpw.mp3",
  },
  {
    key: "1407",
    english: "Sun rises from the east.",
    bhutia: "ཉིམ་ ཤར་ ལས་ ཤར་དོ་ ཨིན་ ལགས།",
    pronunciation: "nyim shyar ley shar-do en la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220428/correction_again/1407_cryhhy.mp3",
  },
  {
    key: "1408",
    english: "Where does the sun set?",
    bhutia: "ཉིམ་ འདི་ ག་ན་ ནུབ་ཏོ་ ཨིན་ནམ?",
    pronunciation: "nyim di gha-na nub-to enam?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220428/correction_again/1408_ndzunb.mp3",
  },

  {
    key: "1409",
    english: "Sun sets in the west.",
    bhutia: "ཉིམ་ ནུབ་ ལོ་ ནུབ་ཏོ་ ཨིན་ ལགས།",
    pronunciation: "nyim nub lo nub-to en la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220428/correction_again/1409_kjf3kn.mp3",
  },
  {
    key: "1410",
    english: "How long do I have to take the medicine?",
    bhutia: "ངས་ སྨན་འདི་ ནམ་ཟང་ ཟ་དགོས་ཤད་ ཉམ།",
    pronunciation: "ngaa sman-di nam-zang za-go shed nyam?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220428/correction_again/1410_zosc1h.mp3",
  },
  {
    key: "1411",
    english: "For ten days.",
    bhutia: "ཉིམ་ བཅུ་ ཟང་སྟེ།",
    pronunciation: "nyim chu zang-te ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220427/correction_again/1411_jctssh.mp3",
  },
  {
    key: "1412",
    english: "Where can I buy these medicines?",
    bhutia: " ངས་ སྨན་འདི་ཙུ་  ག་ན་ལས་ ཉོས་དགོས་ ཀམ?",
    pronunciation: "ngaa sman-di-chu gha-na ley nyo-go kam? ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220427/correction_again/1412_dqmy2i.mp3",
  },
  {
    key: "1413",
    english: "You can buy it from every medical store.",
    bhutia:
      "ལྷན་རྒྱས་ཀྱིས་ སྨན་ འདི་ སྨན་མཛོད་ཁང་ ག་འདིའི་ ནང་ལས་ ཡང་ ཉོས་ཚུགས་ ལགས།",
    pronunciation:
      "lhengye kyi sman-di sman-joed-khang ga-dhi nang-ley yang nyo-chu la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220427/correction_again/1413_c3bpu2.mp3",
  },
  {
    key: "1414",
    english: "When should I take the pills?",
    bhutia: " ངས་ རིལ་བུ་ འདི་ ནམ་ ཟ་ དགོས་ཤད་ འབོ།",
    pronunciation: "ngaa rilbu di nam za-go shed bo? ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220419/correction_again/1414_mblupc.mp3",
  },
  {
    key: "1415",
    english: "One pill each after meal.",
    bhutia: "ཞལ་ལག་ རྒྱབ་ལས་ རིལ་བུ་ རེ་རེ་ བཞེས་དགོས།",
    pronunciation: "shey-lag gyab-ley rilbu re-re zhey-go",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742139661/correction/one_pill_after_meal_zph9qf.mp3",
  },
  {
    key: "1416",
    english: "How much is this?",
    bhutia: "འདི་ ག་ཚོད་ ཀྱི་ འབོ་ ལགས།",
    pronunciation: "di gha-choed kyi bo la ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220418/correction_again/1416_n0uozj.mp3",
  },
  {
    key: "1417",
    english: "This book's price is five hundred.",
    bhutia: "ཕྱག་དེབ་ འདིའི་ རིན་གོང་ འདི་ ལྔ་བརྒྱ་ ཐམ་པ་ ཨིན་ ལགས།",
    pronunciation: "chyag-dep di-hye rin-gong di ngab-gya thamba en la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220418/correction_again/1417_g5jw4p.mp3",
  },
  {
    key: "1418",
    english: "What is the news?",
    bhutia: "གནས་ཚུལ་ གན་འདུག་ ལགས?",
    pronunciation: "ney-chul ghan-du la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742139662/correction/what_is_the_news_rffpym.mp3",
  },
  {
    key: "1419",
    english: "There is nothing new.",
    bhutia: "གསར་པོ་ ག་རེ་ མིན་འདུག་ ལགས།",
    pronunciation: "sar-po gha-rey min-du la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220418/correction_again/1419_diqpgv.mp3",
  },
  {
    key: "1420",
    english: "Can I visit this holy place?",
    bhutia: "ངས་ གནས་ འདི་ མཇལ་ ཚུགས་ ཀམ་ ལགས?",
    pronunciation: "ngaa ney di jel-chu kam la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220418/correction_again/1420_wattjw.mp3",
  },
  {
    key: "1421",
    english: "Yes, you can visit at any time.",
    bhutia: "ལྷན་རྒྱས་ ནམ་ མཇལ་རུང་ མཇལ་ ཚུགས།",
    pronunciation: "lhengye nam jel-rung jel-chu ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742139662/correction/yes_you_can_visit_anytime_jaweg6.mp3",
  },
  {
    key: "1422",
    english: "Where is the tourism office?",
    bhutia: "ཡུལ་སྐོར་ སྤྲོ་འཆམ་ ལས་ཁུངས་ འདི་ ག་ན་ ཡོད་པོ་ ལགས?",
    pronunciation: "yul-kor tro-chham ley-khung di gha-na yea-po la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742139662/correction/where_is_the_tourism_office_xjbfqw.mp3",
  },
  {
    key: "1423",
    english: "It is in Gangtok.",
    bhutia: "འདི་ སྒང་ཏོག་ ལོ་ ཡོད་ ལགས།",
    pronunciation: "di gan-tok (gangtok) yea la ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220417/correction_again/1423_vytfbb.mp3",
  },
  {
    key: "1424",
    english: "How long does it take to reach the monastery?",
    bhutia: "དགོན་པ་ སླེབས་པ་ལོ་ དུས་ཚོད་ ག་ཚོད་ འགོར་ཤད་ ལགས?",
    pronunciation: "goen-pa lhe-pa lo du-choed gha-choed gor-shed la? ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220409/correction_again/1424_i775pl.mp3",
  },
  {
    key: "1425",
    english: "It will take nearly ten minutes.",
    bhutia: "སྐར་མ་ བཅུ་ འདེ་ཅིག་ འགོར་ ལགས།",
    pronunciation: "kar-ma chu de-chig gor la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220409/correction_again/1425_e3nve6.mp3",
  },
  {
    key: "1426",
    english: "Is this the shortest way?",
    bhutia: " ལམ་ ཐུང་ཤོས་ འདི་ར་ ཉ?",
    pronunciation: "lam thung-sho di ra nya?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220409/correction_again/1426_zifnex.mp3",
  },
  {
    key: "1427",
    english: "Yes, this is the shortest way.",
    bhutia: "ལགས་ཨིན!ལམ་ ཐུང་ཤོས་ འདི་ར་ ཨིན།་  ",
    pronunciation: "la-en! lam-thung-sho di ra en la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220409/correction_again/1427_cld8qx.mp3",
  },

  {
    key: "1430",
    english: "Are you going?",
    bhutia: "ལྷན་རྒྱས་ བྱོན་བོ་ གནང་དོ?",
    pronunciation: "lhengye joen-bo nang-do ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742139709/correction/are_you_going_c0oy6w.mp3",
  },
  {
    key: "1431",
    english: "What is your opinion?",
    bhutia: "ལྷན་རྒྱས་ཀྱི་ ཐུགས་བསམ་ གན་ ཡོད?",
    pronunciation: "lhengye ki thug-sam ghan yea?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742139709/correction/what_is_your_opinion_wcnt54.mp3",
  },
  {
    key: "1432",
    english: "When will you take a bath?",
    bhutia: "ལྷན་རྒྱས་ ནམ་ སྐུ་ བསིལ་བོ་ གནང་ཤད་ ལགས།",
    pronunciation: "lhengye nam ku sil-bo nang-shed la? ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220408/correction_again/1432_t5hbr9.mp3",
  },
  {
    key: "1433",
    english: "Aren't you feeling hungry?",
    bhutia: "ལྷན་རྒྱས་ ཞལ་ སྐྱེམས་པོ་ མེད་ཀ་ ལགས?",
    pronunciation: "lhengye shel kyem-po med-ka la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742139719/correction/arent_you_feeling_hungry_r3ddj3.mp3",
  },
  {
    key: "1434",
    english: "Do you have school tomorrow?",
    bhutia: "ལྷན་རྒྱས་ཀྱི་ ཐོ་རངས་ སློབ་གྲྭ་ ཡོད་ཀ་ ལགས།",
    pronunciation: "lhengye-kyi tho-rang lob-dra yea ka la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220408/correction_again/1434_xc1sfr.mp3",
  },
  {
    key: "1435",
    english: "Why are you late?",
    bhutia: "ལྷན་རྒྱས་ གན་ བྱ༹ས་ ཕྱི༹ས་པོ་ ལགས?",
    pronunciation: "lhengye ghan phya phi-po la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742139710/correction/why_are_you_late_sleyu0.mp3",
  },
  {
    key: "1436",
    english: "What did you dream about?",
    bhutia: "ལྷན་རྒྱས་ཀྱི་ གཉིད་ལམ་ གན་ གཟིགས་པོ་ ལགས?",
    pronunciation: "lhengye kyi nyid-lam ghan zig-po la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742139710/correction/what_did_you_deam_about_opbmda.mp3",
  },
  {
    key: "1437",
    english: "When did you change your dress?",
    bhutia: "ལྷན་རྒྱས་ཀྱི་ ནམ་བཟའ་ ནམ་ སྤོ་བོ་ ལགས།",
    pronunciation: "lhengye kyi nam-za nam po-bo la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220399/correction_again/1437_bvnemz.mp3",
  },
  {
    key: "1438",
    english: "What did your father bring from the market?",
    bhutia: "ལྷན་རྒྱས་ཀྱི་ ཡབ་ཀྱིས་ ཁྲོམ་ན་ལས་ གན་ བསྣམས་བྱོན་ འབོ?",
    pronunciation: "lhengye-kyi yap-kyi throm-na-ley ghan nam joen-bo?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742139719/correction/what_did_your_father_bring_from_the_market_dmelmt.mp3",
  },
  {
    key: "1439",
    english: "Did you see my book?",
    bhutia: "ལྷན་རྒྱས་ཀྱིས་ ངའི་ དེབ་ གཟིགས་པོ་ གནང་བོ?",
    pronunciation: "lhengye-kyi ngai dep  zig-po nang-bo?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220399/correction_again/1439_cap0vh.mp3",
  },
  {
    key: "1440",
    english: "Do you think  it will rain today?",
    bhutia: "ལྷན་རྒྱས་! ད་རིང་ ཆརབ་ རྐྱབས་ཉེ་ འདེམ་ འདུག་ཀ་ ལགས?",
    pronunciation: "lhengye  tha-ring chhap kyap-nyi dhem du-ka la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220399/correction_again/1440_owswh9.mp3",
  },
  {
    key: "1441",
    english: "Could you please bring water for me?",
    bhutia: " ལྷན་རྒྱས་ ང་ལོ་ ཆུ་ཅིག་ བསྣམས་བྱོན་ ཚུགས་ ཀ་ ལགས?",
    pronunciation: "lhengye nga lo chhu-chi nam-joen chu ka la ? ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220398/correction_again/1441_hgchnz.mp3",
  },
  {
    key: "1442",
    english: "What is your favourite flower?",
    bhutia: "ལྷན་རྒྱས་ཀྱི་ མེ་ཏོག དགའ་ཤོས་ ་འདི་ ག་འདི་ འབོ་ལགས།",
    pronunciation: "lhengye kyi me-tok ga-sho di  gha-di bo la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220398/correction_again/1442_ac9ivr.mp3",
  },
  {
    key: "1443",
    english: "For whom did you make food?",
    bhutia: "ལྷན་རྒྱས་ཀྱིས་ ཀའི་ དོན་ལོ་ ཞལ་ལག་ བཟོ་བོ་ གནང་འབོ?",
    pronunciation: "lhengye-kyi kae then-lo zhe-lag zo-bo nang-bo? ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220398/correction_again/1443_fpwf3v.mp3",
  },
  {
    key: "1444",
    english: "How was your day?",
    bhutia: "ལྷན་རྒྱས་ཀྱི་ ཉིམ་ ག་ལྟེམ་ འབྱུང་ ཞེ?",
    pronunciation: "lhengye kyi nyim gha-tem zung ze ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220398/correction_again/1444_njjh7a.mp3",
  },
  {
    key: "1445",
    english: "When did you come from Delhi? (honorific)",
    bhutia: "ལྷན་རྒྱས་ ལྡི་ལི་ལས་ ནམ་ བྱོན་བོ་ གནང་འབོ།",
    pronunciation: "lhengye Delhi le nam  joen-bo nang-bo?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220388/correction_again/1445_tsi60j.mp3",
  },
  {
    key: "1446",
    english: "How was your journey? (honorific)",
    bhutia: "ལྷན་རྒྱས་ཀྱི་ འགྲུལ་ ག་འདེམ་ འབྱུང་འབོ་ ལགས?",
    pronunciation: "lhengye kyi drul gha-tem jung-bo la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742139721/correction/how_was_your_journey_grnkgr.mp3",
  },
  {
    key: "1447",
    english: "Are you interested in singing? (honorific)",
    bhutia: "ལྷན་རྒྱས་ལོ་ གསུང་གླུ་ བཀྱོན་ཤད་ ཐུགས་སྤྲོ་ ཡོད་ཀ་ ལགས།",
    pronunciation: "lhengye lo sung-lu kyon-shed thug-tro yea ka la ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220388/correction_again/1447_ohl1zl.mp3",
  },
  {
    key: "1448",
    english: "Do you get up early in the morning? (honorific)",
    bhutia: "ལྷན་རྒྱས་ སྔ་རུ་ དྲོ་ལས་ བཞངས་པོ་ གནང་དོ་ ལགས?",
    pronunciation: "lhengye nga-ru thro-ley zhang-po nang do la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220388/correction_again/1448_ddtusv.mp3",
  },
  {
    key: "1449",
    english: "Where did you go yesterday? (honorific)",
    bhutia: "ལྷན་རྒྱས་ མདང་ ག་ན་ བྱོན་བོ་ ལགས།",
    pronunciation: "lhengye dang gha-na joen-bo la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742139758/correction/where_did_you_go_yesterday_kcygog.mp3",
  },
  {
    key: "1450",
    english: "What are you doing right now? (honorific)",
    bhutia: "ལྷན་རྒྱས་ ད་ལྟ་ གན་ གནང་དོ་ ལགས།",
    pronunciation: "lhengey tha-ta ghan nang-do la ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742139781/correction/what_are_you_doing_right_now_kmcrz3.mp3",
  },
  {
    key: "1451",
    english: "How are you feeling now? (honorific)",
    bhutia: "ལྷན་རྒྱས་ ད་ལྟ་ ག་ལྟེམ་ ཡོད་ ལགས།",
    pronunciation: "lhengye tha-ta gha-tem yea la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220388/correction_again/1451_k2b8xk.mp3",
  },
  {
    key: "1452",
    english: "How is your mom?",
    bhutia: "ལྷན་རྒྱས་ཀྱི་ ཡུམ་ ག་ལྟེམ་ ཡོད་ ལགས།",
    pronunciation: "lhengye-kyi yum gha-tem yea la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220387/correction_again/1452_saf5nd.mp3",
  },
  {
    key: "1453",
    english: "Do you want to eat noodles? (honorific)",
    bhutia: "ལྷན་རྒྱས་ བཞེསཐུགས་ བཞེས་འདོད་ ཡོད་ཀ་ ལགས?",
    pronunciation: "lhengye zhe-thug zhe-doed yea ka la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220387/correction_again/1453_jopirj.mp3",
  },
  {
    key: "1454",
    english: "What should we order?",
    bhutia: "ང་ཅག་ གན་ མངགས་ དགོས་ཤད་ འབོ?",
    pronunciation: "nga-cha ghan mngag go-shed bo?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220387/correction_again/1454_aaad8y.mp3",
  },
  {
    key: "1455",
    english: "Does this place sell burgers?",
    bhutia: "ས་ཆ་ འདི་ན་ ཕྱི་རྒྱལ་གྱི་ བག་ལེབ་ བཙོང་ག་ ལགས?",
    pronunciation: "sa-chha di-na chhi-gyal gyi phak-lep chong-ga la ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220379/correction_again/1455_l55yjz.mp3",
  },
  {
    key: "1456",
    english: "How is your work going on?",
    bhutia: "ལྷན་རྒྱས་ཀྱི་ ཕྱག་ལས་ ག་འདེམ་ བྱུང་དོ?",
    pronunciation: "lhengye kyi chhag-ley gha-tem jung-do?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140010/correction/how_is_your_work_going_on_wvty3c.mp3",
  },
  {
    key: "1457",
    english: "Is everything alright?",
    bhutia: "ཁེ་ལེ་ ལེགམ་ ཡོད་ཀ?",
    pronunciation: "khe-le lem yea-ka?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220379/correction_again/1457_eyr7q3.mp3",
  },
  {
    key: "1458",
    english: "Are you free today?",
    bhutia: "ལྷན་རྒྱས་ ད་རིང་ ཐུགས་ དལ་ག་ ལགས?",
    pronunciation: "lhengye dha-ring thug dhel-ga la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220378/correction_again/1458_xnuita.mp3",
  },
  {
    key: "1459",
    english: "Can we meet today?",
    bhutia: "ད་རིང་ ང་ཅག་ འཕྱ༹ད་ཚུགས་ ཀ་ ལགས?",
    pronunciation: "dha-ring nga-cha phed-tshug ka la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140011/correction/can_we_meet_today_hposdw.mp3",
  },
  {
    key: "1460",
    english: "Which places have you visited?",
    bhutia: "ལྷན་རྒྱས་ ཡུལ་ཙུ་ ག་འདི་ ག་འདི་ བསྐོར་བོ་ གནང་བོ?",
    pronunciation: "lhengye  yue-chu gha-di gha-di  kor-bo  nang-bo?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220378/correction_again/1460_ua6xce.mp3",
  },
  {
    key: "1461",
    english: "Which one is better?",
    bhutia: "ག་འདི་ ལེགས་པད་ ལགས?",
    pronunciation: "gha-di  ley-ped la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220378/correction_again/1461_zdfqc8.mp3",
  },
  {
    key: "1462",
    english: "Should I get this?",
    bhutia: "འདི་ ངས་ ཐོབ་ ཚུགས་ ཀ་?",
    pronunciation: "di ngaa thob-chu ka?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220378/correction_again/1462_wmq1yx.mp3",
  },
  {
    key: "1463",
    english: "Isn't it too expensive?",
    bhutia: "འདི་ ལེབ་ གོང་ མ་ཆེ་ ག?",
    pronunciation: "di leb gong ma-chey ga?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220370/correction_again/1463_kcgbq2.mp3",
  },
  {
    key: "1464",
    english: "Do you know about the food in Assam?",
    bhutia: "ལྷན་རྒྱས་ཀྱིས་ ཨ་སཱམ་གྱི་ ཟ་མའི་ སྐོར་ལོ་ མཁྱེན་ག་ ལགས།",
    pronunciation: "lhengye-kyi Assam gyi za-mea kor-lo khyen-ga la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220369/correction_again/1464_ykibqz.mp3",
  },
  {
    key: "1465",
    english: "When will the rain stop!",
    bhutia: "ཆརབ་ འདི་ ནམ་ ཆད་ཤད་ ཉམ!",
    pronunciation: "chaab di nam tshed-shed nyam !",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140023/correction/when_will_the_rain_stop_pzh7ji.mp3",
  },
  {
    key: "1466",
    english: "When are you coming  home?",
    bhutia: "ལྷན་རྒྱས་ གཟིམ་ཁང་ན་ ནམ་ བྱོན་ཤད་ ལགས།",
    pronunciation: "lhengye zhim-khang-na nam joen-shed la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220369/correction_again/1466_njeulf.mp3",
  },
  {
    key: "1467",
    english: "Did you clean the utensils?",
    bhutia: "ལྷན་རྒྱས་ཀྱིས་ སྣོད་ཙུ་ ཁྱུས་བོ་ གནང་བོ་ ལགས།",
    pronunciation: "lhengye kyi noed-chu khyu-bo nangbo la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140023/correction/did_you_clean_the_utensils_wnm8s9.mp3",
  },
  {
    key: "1468",
    english: "What is your dog name?",
    bhutia: "ལྷན་རྒྱས་ཀྱི་ ཁྱིའི་ མིང་ གན་འབོ།",
    pronunciation: "lhengye kyi khyi-ye ming ghan-bo ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140023/correction/what_is_your_dogs_name_tqwsnx.mp3",
  },
  {
    key: "1469",
    english: "Are you planning for further studies?",
    bhutia:
      "ལྷན་རྒྱས་ འདི་ལས་ ཡར་ལྟེ་ སློབ་སྦྱོང་ གནང་ཤད་ཀྱི་ འཆར་གཞི་ གནང་དོ་ ལགས?",
    pronunciation:
      "lhengye di-ley  ya-tey lob-zang nang-shed kyi chhar-zhi nang-do la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220369/correction_again/1469_vayhzz.mp3",
  },
  {
    key: "1470",
    english: "How is your work going on?",
    bhutia: "ལྷན་རྒྱས་ཀྱི་ ཕྱག་ལས་ ག་་ལྟེམ་ ཐོན་དོ་ ལགས?",
    pronunciation: "lhengye kyi chyag-ley  gha-tem thoen-do la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220369/correction_again/1470_ralkhn.mp3",
  },
  {
    key: "1471",
    english: "You look so tired. Is everything alright?",
    bhutia:
      "ལྷན་རྒྱས་ ལེབ་སྟི་ར་ སྐུ་ཐང་ ཆད་པོ་ འདེམ་ འདུག་ཤོ། ཁེ་ལེ་ ལེགམ་ར་ ཡོད་ཀ་ ལགས?",
    pronunciation:
      "lhengye lep-ti-ra ku-thang ched-po dem du-sho.khey-ley lem-ra yea ka la? ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220368/correction_again/1471_cnycbl.mp3",
  },
  {
    key: "1472",
    english: "It's a sunny day. Shall we go for swimming?",
    bhutia:
      "ད་རིང་ ཉིམ་ ཚ་དྲགས་ འདུག། ང་ཅག་  བྱེ་/སྤྱེ་ རྐྱབས་པ་ བྱོན་ཤད་ མན་ན?",
    pronunciation:
      "tha-ring nyim tsha-ta du. nga-cha je/che kya-pa joen-shed men-na?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220359/correction_again/1472_io4uv6.mp3",
  },
  {
    key: "1473",
    english: "Can you please drop me to my office? I'm late!",
    bhutia:
      "ལྷན་རྒྱས་ ང་ལོ་ ལས་ཁུངས་ ཟང་སྟེ་ བསྐྱེལ་བོ་ གནང་ ཚུགས་ཀ་? ང་ ཕྱི༹ས་ཚར་ ལགས།",
    pronunciation:
      "lhengye nga-lo ley-khung zang-tey kyel-bo  nang-tshu ka ? nga phi tshar la !",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220359/correction_again/1473_ixakla.mp3",
  },
  {
    key: "1474",
    english: "Did you understand this chapter?",
    bhutia: "ལྷན་རྒྱས་ཀྱིས་ ལེའུ་ཚན་ འདི་ མཁྱེན་བོ་ གནང་ཞེ་ ག་ ལགས?",
    pronunciation: "lhengye-kyi leu-tshen di khyen-bo nang-ze ga la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220359/correction_again/1474_lzw6dh.mp3",
  },
  {
    key: "1475",
    english: "When are you going to your village?",
    bhutia: "ལྷན་རྒྱས་ རང་གི་ ཡུལ་ཁ་ ནམ་ བྱོན་བོ་ གནང་ཤད ལགས?",
    pronunciation: "lhengye rang-gi yul-kha nam joen-bo nang-shed la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220358/correction_again/1475_hqrp2q.mp3",
  },
  {
    key: "1476",
    english: "What time will your meeting get over?",
    bhutia: "ལྷན་རྒྱས་ཀྱི་ ཚོགས་འདུ་ ཆུ་ཚོད་ ག་ཚོད་ ལོ་ མྱོ༹ང་ཤད་ ལགས?",
    pronunciation:
      "lhengye kyi tshog-du chhu-choed gha-choed lo myong-shed la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140032/correction/what_time_will_your_meeting_get_over_nsnb0l.mp3",
  },
  {
    key: "1477",
    english: "What should I get for lunch tomorrow?",
    bhutia: "ངས་ ཐོ་རངས་ ཛ་བོ་ གན་ འབག་ འོང་ཤད་ ལགས?",
    pronunciation: " ngaa tho-rang zou ghan bak hong-shed la? ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220358/correction_again/1477_hl15iz.mp3",
  },
  {
    key: "1478",
    english: "Are you taking your medicine?",
    bhutia: "ལྷན་རྒྱས་ གསོལ་སྨན་ བཞེས་པོ་ གནང་དོ་ ལགས།",
    pronunciation: "lhengye sol-sman zhe-po nang-do la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220358/correction_again/1478_p4nluj.mp3",
  },
  {
    key: "1479",
    english: "Aren't you going to your friends place?",
    bhutia: "ལྷན་རྒྱས་ རོགས་ཙུ་ སྡོད་ས་ མི་བྱོན་ ག་ ལགས?",
    pronunciation: "lhengye rog-chu doed-sa mi-joen ga la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220357/correction_again/1479_olo1a2.mp3",
  },
  {
    key: "1480",
    english: "How was your vacation at Bali?",
    bhutia: "བྷ་ལི་ལོ་ ལྷན་རྒྱས་ཀྱི་ ངལ་འཚོ་ ག་ལྟེམ་ བྱུང་བོ་ལགས?",
    pronunciation: " Bali lo lhengye kyi ngal-tsho gha-tem zung-bo la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220349/correction_again/1480_nirylh.mp3",
  },
  {
    key: "1481",
    english: "How much did the vegetable cost?",
    bhutia: "ཚོདམ་གྱི་ གོང་འདི་ ག་ཚོད་ གནང་བོ་ ལགས?",
    pronunciation: "Tshoem-gyi gong-di gha-choed nang-bo la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140033/correction/how_much_did_the_vegetable_cost_adns9h.mp3",
  },
  {
    key: "1482",
    english: "How do I know where she went.",
    bhutia: "ཁོང་ ག་ན་ བྱོན་བོ་ ལབ་སྟི་ ངས་ཀྱི་ ག་ལྟེ་ ཧ་གོ་ ཤད།",
    pronunciation: "khong gha-na joen-bo lap-ti ngaa kyi gha-te haa-gho shed ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220348/correction_again/1482_bhza2x.mp3",
  },
  {
    key: "1483",
    english: "How was your interview?",
    bhutia: "ལྷན་རྒྱས་ཀྱི་ བཅར་འདྲི་ ༼ཨིན་ཊོར་བིའུ༽ ག་ལྟེམ་ བྱུང་ཞེ་ ལགས?",
    pronunciation: "lhengye-kyi char-dri (interview) gha-tem jung-zhe la? ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220348/correction_again/1483_zc9xew.mp3",
  },
  {
    key: "1484",
    english: "Did you pay the vendor?",
    bhutia: "ལྷན་རྒྱས་ཀྱིས་ ཡིག་ བྲིས་བོ་ ལོ་ དངུལ་ བཏབ་པོ་ གནང་བོ་ ལགས?",
    pronunciation: "lhengye-kyi yig dri-bo lo ngul tab-po nang-bo la? ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220348/correction_again/1484_zemt7v.mp3",
  },
  {
    key: "1485",
    english: "Can I also go with you people?",
    bhutia: "ང་ཡང་ ལྷན་རྒྱས་ཙུ་ མཉམ་པོ་ འགྱུ་ཚུགས་ ཀ?",
    pronunciation: "nga yang lhengye-chu nyam-po gyu-tshu ka ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220348/correction_again/1485_hjttyc.mp3",
  },
  {
    key: "1486",
    english: "What is there for dinner today?",
    bhutia: "ད་རིང་ ཕྱི་རུ་ཀི་ ཞལ་ལག་ན་ གན་ ཡོད་པོ་ ལགས?",
    pronunciation: "tha-ring phiru-ki shay-la-na ghan yed-po la ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742275572/correction/are_you_starting_a_business_nnv8cs.mp3",
  },
  {
    key: "1487",
    english: "Are you starting a business?",
    bhutia: "ལྷན་རྒྱས་ ཚོང་ སྒོ་བཙུག་ཀོ་ གནང་དོ་ ལགས?",
    pronunciation: "lhengye tshong go-chu-ko nang-do la ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742275572/correction/are_you_starting_a_business_nnv8cs.mp3",
  },
  {
    key: "1488",
    english: "Are you interested in painting?",
    bhutia: "ལྷན་རྒྱས་ ཚོན་ བཏང་ཤད་ལོ་ ཐུགས་སྤྲོ་ ཡོད་པོ་ ལགས།",
    pronunciation: "lhengye tshoen tang-shed lo thug-tro yed-po la? ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220347/correction_again/1488_qiqqej.mp3",
  },
  {
    key: "1489",
    english: "Did you find any mistake?",
    bhutia: "ལྷན་རྒྱས་ཀྱིས་ ནོར་འཁྲུལ་ གན་ཡང་ ཐོབ་པོ་ གནང་བོ་?",
    pronunciation: "lhengye-kyi nor-thrul ghan-yang thob-po nang-bo?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220347/correction_again/1489_xqwy6r.mp3",
  },
  {
    key: "1490",
    english: "How much did you complete?",
    bhutia: "ལྷན་རྒྱས་ཀྱིས་ ག་ཚོད་ མྱོ༹ང་པོ་ གནང་བོ་ ལགས།",
    pronunciation: "lhengye-kyi gha-choed myong-po nang-bo la ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742275395/correction/how_much_did_you_complete_rwvfci.mp3",
  },
  {
    key: "1491",
    english: "Do you like travelling?",
    bhutia: "ལྷན་རྒྱས་ འགྲུལ་སྐོར་ གནང་ཤད་ ཐུགས་འདོད་ ཡོད་ ཀ་ ལགས?",
    pronunciation: "lhengye drul-kor nang-shed thug-doed yea ka la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220338/correction_again/1491_bknvsi.mp3",
  },
  {
    key: "1492",
    english: "Have you studied Bhutia in school?",
    bhutia: "ལྷན་རྒྱས་ སློབ་གྲྭ་ན་ ལྷོ་སྐད་ སྦྱང་ ཞེ་ ག?",
    pronunciation: "lhengye lob-dra-na lho-ked jang-zhe ga?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742275248/correction/have_you_studied_bhutia_in_school_hefmss.mp3",
  },
  {
    key: "1493",
    english: "Where have you been?",
    bhutia: "ལྷན་རྒྱས་ ག་ན་ ཡོད་མཁན་ ལགས?",
    pronunciation: "lhengye gha-na yea-khen la? ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742275159/correction/where_have_you_been_zplyft.mp3",
  },
  {
    key: "1494",
    english: "Do you like gardening?",
    bhutia: "ལྷན་རྒྱས་ མེ་ཏོག་ བཙུག་ཤད་ ཐུགས་འདོད་ ཡོད་ཀ་ ལགས?",
    pronunciation: "lhengye me-tog chug-shed thug-doed yea ka la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220338/correction_again/1494_hh3x6a.mp3",
  },
  {
    key: "1495",
    english: "What date is it today?",
    bhutia: "ད་རིང་ ཚེས་ ག་ཚོད་ འབོ་ ལགས?",
    pronunciation: "tharing tshe gha-choed bo la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140105/correction/what_day_is_it_today_fpavfy.mp3",
  },
  {
    key: "1496",
    english: "Do you want to go for show?",
    bhutia: "ལྷན་རྒྱས་ གཟིགམ་ གཟིགས་པ་ བྱོན་འདོད་ ཡོད་པོ་ ལགས?",
    pronunciation: "lhengye zeim zig-pa joen-doed yea-po la? ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220338/correction_again/1496_m9ip09.mp3",
  },
  {
    key: "1497",
    english: "Should we go for a drive today?",
    bhutia: "ད་རིང་ ང་ཅག་ འགྲུལ་སྐོར་ལོ་ རྒྱུ་ཤད་ མེན་ན?",
    pronunciation: "tha-ring nga-cha drul-kor lo gyu-shed men-na?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220337/correction_again/1497_xlercd.mp3",
  },
  {
    key: "1498",
    english: "For how many days is your trip?",
    bhutia: "ལྷན་རྒྱས་ཀྱི་ འགྲུལ་སྐོར་ ཉིམ་ ག་ཚོད་ཀྱི་ འབོ?",
    pronunciation: "lhengye-kyi drul-kor nyim gha-choed kyi bo?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742139627/correction/for_how_many_days_is_your_trip_hh3rrf.mp3",
  },
  {
    key: "1499",
    english: "Can I travel on Monday?",
    bhutia: " ང་ གཟའ་ ཟླ་བོ་ ལོ་ འགྲུལརྐྱབས་ ཚུགས་ ཀ་ ལགས?",
    pronunciation: " nga za-dou lo drul kyab-chu ka la? ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220337/correction_again/1499_ijhybk.mp3",
  },
  {
    key: "1500",
    english: "What is the name of this place?",
    bhutia: "ས་ཆ་ འདིའི་ མིང་ གན་འབོ་ ལགས?",
    pronunciation: "sa-chha diyi ming ghan-bo la ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742139627/correction/what_is_the_name_of_this_place_btykf3.mp3",
  },
  {
    key: "1501",
    english: "Are there important holy places around here?",
    bhutia: "འདི་ཁར་ གནས་ རྩ་ཆེན་ཅུ༹་ ཡོད་པོ་ ལགས?",
    pronunciation: "di-khar ney cha-chen-chu yea-po la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220337/correction_again/1501_abocuz.mp3",
  },

  {
    key: "1514",
    english: "At what time does the bank open?",
    bhutia: "དངུལ་ཁང་ འདི་ ཆུ་ཚོད་ ག་ཚོད་ལོ་ ཕྱི༹་བོ་ གནང་དོ?",
    pronunciation: "ngul-khang di chhu-choed gha-choed lo phi-bo nang-do?  ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742139628/correction/at_what_time_does_the_bank_open_mssj3a.mp3",
  },
  {
    key: "1515",
    english: "What do you do in your free time?",
    bhutia: "ལྷན་རྒྱས་ དལ་བའི་ སྒང་  གན་ གནང་དོ་ ལགས?",
    pronunciation: "lhengye thel-boe gang  ghan nang-do la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220337/correction_again/1515_qnjwnv.mp3",
  },
  {
    key: "1516",
    english: "What is the time now, please?",
    bhutia: "ད་ལྟ་ ཆུ་ཚོད་ ག་ཚོད་ འབོ་ ལགས?",
    pronunciation: "tha-ta chhu-choed gha-choed bo la? ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742139629/correction/what_is_the_time_now_yporeb.mp3",
  },
  {
    key: "1517",
    english: "It's ten o'clock.",
    bhutia: "ད་ལྟ་ ཆུ་ཚོད་ བཅུ་སྦད་ ལགས།",
    pronunciation: "tha-ta chhu-choed chu-bed la.",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742139629/correction/it_is_ten_o_clock_vifpol.mp3",
  },
  {
    key: "1518",
    english: "If you have any difficulty then come to me.",
    bhutia: "ལྷན་རྒྱས་ ལོ་ དཀའ་ལས་ གན་ཡང་ ཐོན་ན་ ངའི་ཅ༹ར་ བྱོན།",
    pronunciation: " lhengye-lo  ka-ley ghan yang  thoen-na ngayi char joen",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220328/correction_again/1518_izt8zg.mp3",
  },
  {
    key: "1519",
    english: "Success can't be achieved without hard work.",
    bhutia: "འབད་བརྩོན་ མ་བྱ༹ས་ན་ གྲུབ་འབྲས་ ཐོབ་ མི་སྲིད།",
    pronunciation: "bed-choen ma-phya-na drub-dre thob mi-sid",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220328/correction_again/1519_u0cu3p.mp3",
  },
  {
    key: "1520",
    english: "Write your name here.",
    bhutia: "ལྷན་རྒྱས་ཀྱི་ མཚན་ འདི་ཁ་ བྲིས་བོ་ གནང་།",
    pronunciation: "lhengye-kyi tshen di kha dri-bo nang",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742139629/correction/write_your_name_here_spvxmu.mp3",
  },
  {
    key: "1521",
    english: "Show me your book.",
    bhutia: " ང་ལོ་ རང་གི་ དེབ་ སྟོན་བོ་ གནང་ཅིག།",
    pronunciation: "nga lo rang-gi dep toen-bo nang-chi.",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220328/correction_again/1521_bfdovo.mp3",
  },
  {
    key: "1522",
    english: "Wash your face.",
    bhutia: "ལྷན་རྒྱས་ ཞལ་ བསིལ་བོ་ གནང་",
    pronunciation: "lhengye zhel sil-bo nang ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220327/correction_again/1522_om7epb.mp3",
  },
  {
    key: "1523",
    english: "Make tea for me.",
    bhutia: " ང་ལོ་ ཇ་ བཟོ།་",
    pronunciation: "nga-lo ja zo ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220327/correction_again/1523_pcanet.mp3",
  },
  {
    key: "1524",
    english: "Let's go.",
    bhutia: "བྱོན་གེ།",
    pronunciation: "joen-gey",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220327/correction_again/1524_gwfkdq.mp3",
  },
  {
    key: "1525",
    english: "Pass the salt.",
    bhutia: " ཚྭ་ བཏང་ ཅིག།",
    pronunciation: "tsha tang-chi",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220309/correction_again/1525_ci9l3i.mp3",
  },
  {
    key: "1526",
    english: "Don't be upset.",
    bhutia: "སེམས་ མ་ ཕམ་།",
    pronunciation: "sem ma pham.",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220309/correction_again/1526_vvwq9c.mp3",
  },
  {
    key: "1527",
    english: "Bring your children to school.",
    bhutia: "་རང་གི་ བོ་ཙོ་ཙུ་  སློབ་གྲྭ་ལོ་ ཁྱིག་ཤོག།",
    pronunciation: "rang-gi bho-cho-chu lob-dra lo khyig-shog ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220308/correction_again/1527_y4j1xu.mp3",
  },

  {
    key: "1531",
    english: "This is not nice. Let's look in another shop.",
    bhutia: "འདི་ ལེགམ་ མིན་འདུག ཚོང་ཁང་ གཞན་ན ལྟ་གེ།",
    pronunciation: "di lem min-du  tshong-khang zhen-na ta-gey",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220308/correction_again/1531_phuzai.mp3",
  },
  {
    key: "1532",
    english: "Ask for discount.",
    bhutia: "གོང་ ཨ་ཙི་ བཅག་གནང་ ལབ་།",
    pronunciation: "gong a-chi chag-nang lab.",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220308/correction_again/1532_watttn.mp3",
  },
  {
    key: "1533",
    english: "Improve your handwriting.",
    bhutia: "རང་གི་ ཡིག་གཟུགས་ ཨ་ཙི་ བཅོས་ ་དགོས་པད།",
    pronunciation: "rang-gi yig-zug a-chi choe go-ped. ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220308/correction_again/1533_pwyii8.mp3",
  },
  {
    key: "1534",
    english: "You are so gorgeous.",
    bhutia: "རང་ ག་འདེམ་ ལྕང་དྲགས་ འདུག།",
    pronunciation: "rang gha-tem chang-tag du",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220307/correction_again/1534_xqncgg.mp3",
  },
  {
    key: "1535",
    english: "Your hair is black and long.",
    bhutia: "རང་གི་ སྐྱ་འདི་ ནག་ཀོ་ དང་ རིང་ཀོ་ འདུག།",
    pronunciation: "rang-kyi kya di nag-ko dang ring-ko du",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220308/correction_again/1535_z08862.mp3",
  },
  {
    key: "1536",
    english: "The food is delicious.",
    bhutia: "ཟམ་ འདི་ ཞིམ་པོ་ ཡོད་",
    pronunciation: "zam di zhim-pu yea",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220307/correction_again/1536_jirahi.mp3",
  },
  {
    key: "1537",
    english: "You are so restless.",
    bhutia: "རང་ ལེབ་སྟི་རང་ ཚབས་ཚུབ་ འདུག་།",
    pronunciation: "rang lep-ti rang chhab-chhub du ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220307/correction_again/1537_tgvxdn.mp3",
  },
  {
    key: "1538",
    english: "You look exhausted.",
    bhutia: "རང་ ཐང་ ཆད་པོ་ འདེམ་ མཐོང་པད།",
    pronunciation: "rang  thang chhed-po deam thong-ped",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220307/correction_again/1538_fmr9eh.mp3",
  },
  {
    key: "1539",
    english: "Congratulations!",
    bhutia: "བཀྲ་ཤིས་ བདེ་ལེགས།",
    pronunciation: "tashi delek",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742139631/correction/congratulations_agcjxv.mp3",
  },
  {
    key: "1540",
    english: "Happy birthday!",
    bhutia: "འཁྲུངས་སྐར་ བཀྲ་ཤིས་ བདེ་ལེགས་!",
    pronunciation: "thrung-kar tashi delek! ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220306/correction_again/1540_nd9rfm.mp3",
  },
  {
    key: "1541",
    english: "Have a good day.",
    bhutia: " ཉིམ་ ལེགམ་ འབྱུང་ བཅུག་ཅིག",
    pronunciation: " nyim lhem jung chug-chi",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220306/correction_again/1541_lqghgp.mp3",
  },
  {
    key: "1542",
    english: "She is so rude.",
    bhutia: "མོ་ ལེབ་སྟི་རང་ རྩུབ་དྲགས་ ཡོད་",
    pronunciation: "mu leb-ti rang chub-tag yea",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220306/correction_again/1542_l5pbal.mp3",
  },
  {
    key: "1543",
    english: "The food was delicious!",
    bhutia: "ཟམ་འདི་ ཞིམ་པོ་ འདུག!",
    pronunciation: "zam-di zhim-pu du",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220294/correction_again/1543_e2jpzw.mp3",
  },
  {
    key: "1544",
    english: "Which restaurant is good?",
    bhutia: "ཟ་ཁང་ ག་འདི་ ལེགས་པད་?",
    pronunciation: "za-khang gha-di ley-ped?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220294/correction_again/1544_asllag.mp3",
  },
  {
    key: "1545",
    english: "This place has yummy food.",
    bhutia: "ཡུལ་ འདི་ན་ ཟམ་ ཞིམ་དྲགས་ ཐོབ་པད་།",
    pronunciation: "yul di-na zam zhim-tag thob-ped",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742139632/correction/this_place_has_yummy_food_lpyhrd.mp3",
  },

  {
    key: "1547",
    english: "What should we order?",
    bhutia: "ང་ཅག་ གན་ མངགས་ཤད་ ལགས?",
    pronunciation: "nga-cha ghan ngaag-shed la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140010/correction/what_should_we_order_bdecmd.mp3",
  },
  {
    key: "1548",
    english: "Does this place sell burgers?",
    bhutia: "ཡུལ་ འདི་ན་ ཕྱི་རྒྱལ་གྱི་ བག་ལེབ་ བཙོང་ག།",
    pronunciation: "yul di-na chhi-gyal gyi phag-leb chong-ga?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742140010/correction/does_this_place_sell_burgers_rrtns3.mp3",
  },
  {
    key: "1549",
    english: "Hello! Who is speaking?",
    bhutia: "ཧེ་ལོ! ཀ་ གསུང་བོ་ གནང་དོ་ ལགས?",
    pronunciation: "hello! ka sung-bo nang-do la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220294/correction_again/1549_nckz3z.mp3",
  },
  {
    key: "1550",
    english: "This is  Choden speaking.",
    bhutia: "འདི་ ཆོས་སྒྲོན་ ཁ་ ལབ་ཏོ་ ཨིན་ལགས།",
    pronunciation: " di choden kha lab-to en la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220294/correction_again/1550_qidc1n.mp3",
  },
  {
    key: "1551",
    english: "I am not hearing you clearly.",
    bhutia: "ངས་ ལྷན་རྒྱས་ལོ་ སྙིང་ སངས་སངས་ མི་ཐོས་པད་ ལགས།",
    pronunciation: "ngaa lhengye lo nying sang-sang mi-tho-ped la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742139633/correction/i_am_not_hearning_you_clearly_zd1j8b.mp3",
  },
  {
    key: "1552",
    english: "To whom do you want to speak?",
    bhutia: "ལྷན་རྒྱས་ ཀ་ མཉམ་པོ་ ཞལ་ གསུང་བོ་ གནང་ཤད་ ལགས?",
    pronunciation: "lhengye ka nyam-po zhe sung-bo nang-shed la? ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742139633/correction/to_whom_do_you_want_to_talk_n7np1d.mp3",
  },
  {
    key: "1553",
    english: "I want to talk with Nima.",
    bhutia: "ང་ ཉི་མ་ མཉམ་པོ་ གྱོས་ རྐྱབས་འདོད་ ཡོད་ ལགས།",
    pronunciation: "nga nima  nyam-po ghyo kyab-doed yea la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220293/correction_again/1553_ijsfx9.mp3",
  },
  {
    key: "1554",
    english: "Please hold on the line.",
    bhutia: "ཤུལ་ཅིག་ དགུག་པོ་ གནང་ ལགས།",
    pronunciation: "shue-chi gu-po nang la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742139650/correction/please_hold_on_the_line_qw3jdq.mp3",
  },
  {
    key: "1555",
    english: "I will go and call Penpa.",
    bhutia: "ང་ རྒྱུ་སྟི་ སྤེན་པ་ ལོ་ བོས་ ཤད་ ཨིན།",
    pronunciation: "nga gyu-ti penpa lo bho-shed en",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220293/correction_again/1555_hdnfsn.mp3",
  },
  {
    key: "1556",
    english: "Please call him to the phone.",
    bhutia: "ཁོང་ལོ་ ཞལ་པར་ན་ བོས་པོ་ གནང་།",
    pronunciation: "khong lo zhel-par-na bho-po nang",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220293/correction_again/1556_gqbnpr.mp3",
  },
  {
    key: "1557",
    english: "He is not here now.",
    bhutia: "ཁོང་ ད་ལྟ་ ན་ མིན་འདུག་ ལགས།",
    pronunciation: "khong dha-ta na min-du la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742139651/correction/he_is_not_here_now_fx0i9y.mp3",
  },
  {
    key: "1558",
    english: "He will be back in an hour.",
    bhutia: "ཁོང་ ཆུ་ཚོད་ གཅིག་ རྒྱབ་ལས་ ལོག་ བྱོན་བོ་ གནང་ཤད་ ཨིན་ ལགས།",
    pronunciation: "khong chhu-choed chi gyab-ley log joen-bo nang-shed en la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220293/correction_again/1558_b3m9y3.mp3",
  },
  {
    key: "1559",
    english: "Please give him a message.",
    bhutia: "ཁོང་ལོ་ སྙན་གསེས་ གཅིག་ གནང་བོ་ གནང་ ལགས།",
    pronunciation: "khong-lo nyen-sey chi nang-bo nang la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1742139651/correction/please_give_him_a_message_k2erdl.mp3",
  },
  {
    key: "1560",
    english: "Yes! what is the message?",
    bhutia: "ལགས! སྙན་གསེས་  གན་ ཡོད་པོ་ ལགས?",
    pronunciation: "la! nyen-sey  ghan yed-po la?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220284/correction_again/1560_qorapw.mp3",
  },
  {
    key: "1561",
    english: "Please tell him to call me.",
    bhutia: "ཁོང་ལོ་ ང་ལོ་ ཁ་པར་ བཏང་ཟེ་ གསུང་ གནང་",
    pronunciation: "khong-lo nga-lo kha-par tang-ze sung-nang",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220284/correction_again/1561_fodoc7.mp3",
  },
  {
    key: "1562",
    english: "Pardon,the network is not good ",
    bhutia: "དགོངས་ ཁྲེལ་ མ་གནང་, དྲ་རྒྱ་ ལེགམ་ མེད་།",
    pronunciation: "gong-threl ma-nang dra-gya lem med",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220284/correction_again/1562_f26nok.mp3",
  },
  {
    key: "1563",
    english: "Can you give me his number?",
    bhutia: "ང་ལོ་ ཁོའི་ ཨང་ བྱི༹ན་ཆུ༹གས་ ཀ་?",
    pronunciation: "nga lo khoi ang phin-tshug ka",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220284/correction_again/1563_tvu8ja.mp3",
  },
  {
    key: "1564",
    english: "Can you give me her number?",
    bhutia: "ང་ལོ་ མོའི་ ཨང་ བྱི༹ན་ཆུ༹གས་ ཀ་?",
    pronunciation: "nga lo moi  ang phin-tshug ka?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220283/correction_again/1564_aap1kt.mp3",
  },
  {
    key: "1565",
    english: "Are these vegetables fresh?",
    bhutia: "ཆོ༹དམ་ འདི་ཙུ་ གསར་པོ་ ཉ?",
    pronunciation: " chhoem di-chu sar-po nya?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748234738/correction_again/1565_aulodj.mp3",
  },
  {
    key: "1566",
    english: "How much is this per kilo?",
    bhutia: "འདི་ ཤེར་ལོ ག་ཆོ༹ད་ འབོ?",
    pronunciation: " di sher-lo gha-choed bo?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220283/correction_again/1566_fd56m5.mp3",
  },
  {
    key: "1567",
    english: "Are these local?",
    bhutia: "འདི་ཙུ་ གྱོང་གི་ ཨིན་ག?",
    pronunciation: "di-chu ghyong-gi en ga? ? ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220275/correction_again/1567_mxjxt6.mp3",
  },
  {
    key: "1568",
    english: "Is there a discount if I purchase in bulk?",
    bhutia: "ངས་ ཨ་ཅི༹་ མང་དྲགས་ ཉོ་ན་ གོང་བཅག་ ཀ?",
    pronunciation: " ngaa a-chi mang-ta nyo-ney gong chhag ka?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220274/correction_again/1568_oxw9d3.mp3",
  },
  {
    key: "1569",
    english: "Are these fresh tomatoes?",
    bhutia: "བླམ་ བན་ད་ འདི་ཅུ༹་ གསར་པོ་ ཨིན་ག?",
    pronunciation: "lam ven-da di-chu sar-po en ga?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220273/correction_again/1569_ne1mxl.mp3",
  },
  {
    key: "1570",
    english: "What are the new vegetables?",
    bhutia: "ཆོ༹དམ་ གསར་པོ་ཙུ་ གན་གན་ ཡོད་པོ?",
    pronunciation: "chhoem sar-po chu ghan ghan yea-po?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220273/correction_again/1570_tv7uzg.mp3",
  },
  {
    key: "1571",
    english: "Do you have change for Rs 500?",
    bhutia: "རང་ཙ་ ཏི་རུག་ ལྔ་བརྒྱ་ བཅག་ཤད་ ཡོད་ ཀ?",
    pronunciation: "rang cha ti-rug ngab-gya chag-shed yea ka ? ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220273/correction_again/1571_kerb9o.mp3",
  },
  {
    key: "1572",
    english: "Can you give me a carry bag ?",
    bhutia: "ང་ལོ་ ཆ་ཀ་ བླུག་ཤད་ཀྱི་ འགྱེབ་ བྱི༹ན་ཆུ༹གས་ ཀ?",
    pronunciation: "nga lo chha-ka lug-shed-kyi gyep phin-tshug ka?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220273/correction_again/1572_werrjj.mp3",
  },
  {
    key: "1573",
    english: "These items are very expensive",
    bhutia: "ཆ་ཀ་ འདི་ཙུ་ ལེབ་ གོང་ཆེན་ སྦད་།",
    pronunciation: "chha-ka di-chu leb gong-chhen bed",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220272/correction_again/1573_j7yixx.mp3",
  },
  {
    key: "1574",
    english: "Mom, I'm home !",
    bhutia: "ཨམ་ལགས་ ང་ ཁྱིམ་ ལོག་ དོལ་ ཆ༹ར་!",
    pronunciation: "amla nga khim log thoe-tsha!",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220264/correction_again/1574_c6zlem.mp3",
  },
  {
    key: "1575",
    english: "Good evening, How was your day ?",
    bhutia: "ཕྱི༹་མཆ༹མས་ བདེ་ལེགས་, ད་རི་ང་ ཉིམ་ ག་ལྟེམ་ བྱུང་ཞེ་?",
    pronunciation: "phid-tsham de-lek, dha-ring nyim gha-tem jung-zhe? ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220264/correction_again/1575_hnglqu.mp3",
  },
  {
    key: "1576",
    english: "I am very tired today !",
    bhutia: "ང་ ད་རིང་ ལེབ་ ཐང་ ཆད་ ཙར་!",
    pronunciation: "nga tha-ring leb thang-chhed tshar",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220263/correction_again/1576_t9efz4.mp3",
  },
  {
    key: "1577",
    english: "I feel happy to be home !",
    bhutia: "ང་ ཁྱིམ་ འོང་སྡི་ དགའ་དྲགས་ ཐོན་ཞེ་!",
    pronunciation: "nga khim hong-di ga-tak thoen-zhe!",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220263/correction_again/1577_hll2o2.mp3",
  },
  {
    key: "1578",
    english: "I missed home-cooked food all day !",
    bhutia: "ང་ ཉིམ་ ཅིག་ཀུ་ ཁྱིམ་གྱི་ ཟམ་ དྲན་ ཞེ་!",
    pronunciation: "nga nyim-chi-ku khim-gyi zam dren-zhe! ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220263/correction_again/1578_s1opoi.mp3",
  },
  {
    key: "1579",
    english: "Work was hectic today",
    bhutia: "ད་རིང་ གཡོག་ འདི་ བྱེ༹ལ་འཆུ༹བ་ ཆེ་དྲགས་ ཐོན་ཞེ་། ",
    pronunciation: "tha-ring yog-di phel-tshub chhe-tag thoen-zhe. ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220262/correction_again/1579_std1f4.mp3",
  },
  {
    key: "1580",
    english: "There were a lot of  meetings today",
    bhutia: "ད་རིང་ ཆོ༹གས་འདུ་ ཀེས་པོ་ ཐོན་ཞེ།",
    pronunciation: "tha-ring tshog-du ke-po thoen-zhe ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220254/correction_again/1580_bbtdj0.mp3",
  },
  {
    key: "1581",
    english: "I had lunch late, I am not hungry now",
    bhutia: "ངས་ ཇ༹འུ་ ཕྱི༹་དྲགས་ ཟ་ཤད་ འདིས་ ང་ ད་ལྟ་ གྱོདབ་ ལྟོགས་པོ་ མེད་།",
    pronunciation: "ngaa zou phi-tag za-shed di nga tha-ta khyob tog-po med ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220254/correction_again/1581_a1seje.mp3",
  },
  {
    key: "1582",
    english: "I finished all my work today!",
    bhutia: "ང་ ད་རིང་གི་ གཡོག་ ཁེ་ལེ་ མྱོ༹ང་ ཆ༹ར་།",
    pronunciation: "nga tha-ring gi yog  khe-ley myong-tshar",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220254/correction_again/1582_fbfyxc.mp3",
  },
  {
    key: "1583",
    english: "I was given more work again",
    bhutia: "ང་ལོ་ ལོག་སྟི་ར་ གཡོག་ མང་དྲགས་ བྱི༹་ན་ཞེ།",
    pronunciation: "nga lo log-te ra yog mang-tag phin-zhe  ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220253/correction_again/1583_kxydjz.mp3",
  },

  {
    key: "1585",
    english: "Did anything happen at home?",
    pronunciation: "khim na ghan-chi thoen-bo?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220253/correction_again/1585_bpwbhr.mp3",
    bhutia: "ཁིམ་ ན་ གན་ཅིག་ ཐོན་བོ་?",
  },

  {
    key: "1586",
    english: "Where did you go today?",
    pronunciation: "rang tha-ring gha-na joen-bo?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220253/correction_again/1586_wxgw1e.mp3",
    bhutia: "རང་ ད་རིང་ ག་ན་ བྱོན་བོ?",
  },
  {
    key: "1587",
    english: "What did you do all day?",
    pronunciation: "rang tha-ring nyim chi-ku ghan phya-bo? ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220246/correction_again/1587_rfroaf.mp3",
    bhutia: "རང་ ད་རིང་ ཉིམ་ ཅིག་ཀུ་ གན་ བྱ༹ས་བོ་?",
  },
  {
    key: "1588",
    english: "Did anyone visit today?",
    pronunciation: "tha-ring ka yang joen-bo?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220246/correction_again/1588_r56qtq.mp3",
    bhutia: "ད་རིང་ ཀ་ཡང་ བྱོན་བོ?",
  },
  {
    key: "1589",
    english: "What is for dinner?",
    pronunciation: "phi-ru zam  ghan bo?  ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220245/correction_again/1589_dtxyqk.mp3",
    bhutia: "ཕྱི༹རུ་ ཟམ་ གན་ འབོ?",
  },
  {
    key: "1590",
    english: "Can I please get a cup of  tea first?",
    pronunciation: " nga lo ngoen-ley ja mak khang nang-chhu ka?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220245/correction_again/1590_ugg7nf.mp3",
    bhutia: "ང་ལོ་ སྔོན་ལས་ ཇ་ མག་ གང་ གནང་ ཆུ༹གས་ ཀ?   ",
  },

  {
    key: "1592",
    english: "My back hurts so much",
    pronunciation: "ngae gyab leb zug kyab tshar",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220245/correction_again/1592_d6ueng.mp3",
    bhutia: "ངའི་ རྒྱབ་ ལེབ་ ཟུག་ རྐྱབས་ ཆ༹ར ",
  },
  {
    key: "1593",
    english: "I'll take a shower first",
    pronunciation: "nga ngoen ley chhu-shey kyab-shed en",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220238/correction_again/1593_lxzn7v.mp3",
    bhutia: "ང་ སྔོན་ལས་ ཆུ་བཤལ་ རྐྱབས་ཤད་ ཨིན་",
  },
  {
    key: "1594",
    english: "Let's drink tea",
    pronunciation: "ja thun-gey",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220237/correction_again/1594_bagiis.mp3",
    bhutia: "ཇ་ འཐུང་ གེ་",
  },
  {
    key: "1595",
    english: "I need to wake up early tomorrow",
    pronunciation: "nga tho-rang thro-ley long go",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220237/correction_again/1595_pmsgn1.mp3",
    bhutia: "ང་ ཐོ་རངས་ དྲོ་ལས་ ལོངས་ དགོས་།",
  },
  {
    key: "1596",
    english: "Is this the taxi stand?",
    pronunciation: "di la-khor (taxi) kag-sa nya?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220237/correction_again/1596_tvfc5f.mp3",
    bhutia: "འདི་ གླ་འཁོར་ བཀག་ས་ ཉ་?",
  },
  {
    key: "1597",
    english: "Yes it is , where would you like to go?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220237/correction_again/1597_v3wsoq.mp3",
    bhutia: "ལགས་ ཨིན་, རང་ ག་ན་ བྱོན་བོ་ གནང་ ཤད་?",
    pronunciation: "la en , rang ghana joen-bo nang shed?",
  },
  {
    key: "1598",
    english: "I want to go to tadong",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220224/correction_again/1598_cmzfas.mp3",
    bhutia: "ང་ རྟ་གདོང་ འགྱུ་ཤད་ ཨིན་",
    pronunciation: "nga tadong gyu-shed en ",
  },
  {
    key: "1599",
    english: "How many people?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220224/correction_again/1599_v3seii.mp3",
    bhutia: "མི་ ག་ཆོ༹ད་?",
    pronunciation: "mi gha-choed?",
  },
  {
    key: "1600",
    english: "Two people",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220223/correction_again/1600_gd4bxt.mp3",
    bhutia: "མི་ གཉིས་",
    pronunciation: "mi nyi",
  },
  {
    key: "1601",
    english: "What is the fare till tadong?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220223/correction_again/1601_k3kkpx.mp3",
    bhutia: "རྟ་གདོང་ ཟང་ཏེ་ གླ་ ག་ཆོ༹ད་ འབོ་?",
    pronunciation: "tadong zang-te lah gha-choed bo?",
  },
  {
    key: "1602",
    english: "It is 40 rs per person",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220223/correction_again/1602_ktvvzx.mp3",
    bhutia: "མི་ རེ་ལོ་ ཏི་རུག་ བཞི་བཅུ་ རེ་ ཨིན་།",
    pronunciation: "mi-re lo ti-rug zhi-chu re en",
  },
  {
    key: "1603",
    english: "Ok! lets go then",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220223/correction_again/1603_vbgx5r.mp3",
    bhutia: "སྒྲིགས་ཀེ་! དེ་ནེ་ འགྱུ་གེ་",
    pronunciation: "dri-key! the-ne gyu-gey ",
  },
  {
    key: "1604",
    english: "Do you have qr code? i want to pay",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220223/correction_again/1604_dbx971.mp3",
    bhutia: "རང་ཙ་ qr ཨང་རྟགས་ ཡོད་ཀ་? ང་ དངུལ་ བཏབ་ དགོས་པད། ",
    pronunciation: "rang cha qr ang-tag yea-ka? nga ngul tab go-ped",
  },
  {
    key: "1605",
    english: "I'll get down ahead",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220222/correction_again/1605_xhubow.mp3",
    bhutia: "ང་ ཨ་ཙི་ སྔོན་ལས་ བབས་ཤད་ ཨིན་།",
    pronunciation: "nga a-chi ngoen-ley bhab-shed en",
  },
  {
    key: "1606",
    english: "We have arrived",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220222/correction_again/1606_orijtu.mp3",
    bhutia: "ང་ཅག་ དོལ་ ཆ༹ར་།",
    pronunciation: "nga-chag thoe tshar",
  },
  {
    key: "1607",
    english: "Thank you! i've paid 40 rs online",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220222/correction_again/1607_iw0hfz.mp3",
    bhutia: "ཐུགས་རྗེ་ཆེ་! ངས་དྲ་ཐོག་ ལས་ ཏི་རུག་ བཞི་བཅུ་ བཏབ་ ཆ༹ར་།",
    pronunciation: "thugje-chhe! ngaa dra-thog ley ti-rug zhi-chu tab-tshar ",
  },
  {
    key: "1608",
    english: "How many members are there in your family?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220222/correction_again/1608_qxceml.mp3",
    bhutia: "རང་གི་ བཟའ་མི་ ནང་ མི་ ག་ཆོ༹ད་ ཡོད་པོ་?",
    pronunciation: "rang-gi  za-mi nang mi gha-choed yea-po? ",
  },
  {
    key: "1609",
    english:
      "There are seven members in my family  grandpa, grandma,father,mother,elder sister and younger brother",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220223/correction_again/1609_ft9rl2.mp3",
    bhutia:
      "ངའི་ བཟའ་མི་ ནང་ མི་ བདུན་ ཡོད་ ཨ་ཇོ་,ཨ་ཉོ་,ཨ་པོ་,ཨ་མ་,ཨ་ཡི་ དང་ ཕ་མིང་།",
    pronunciation:
      "ngae za-mi nang mi duen yea ajo, anyo,apo,ama, aie thang phaming",
  },
  {
    key: "1610",
    english: "How many children do you have?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220212/correction_again/1610_wdulcz.mp3",
    bhutia: "རང་ལོ་ བོ་ཅོ༹་ ག་ཆོ༹ད་ ཡོད་པོ?",
    pronunciation: "rang-lo bho-cho gha-choed yea-po? ",
  },
  {
    key: "1611",
    english: "Are all your children going to school ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220212/correction_again/1611_q6oma3.mp3",
    bhutia: "རང་ གི་ བོ་ཅོ༹་ ཁེ་ལེ་ སློབ་གྲྭ་ འགྱུ་དོ་ ག?",
    pronunciation: "rang gi bho-cho khe-le lob-dra gyu-do ga?",
  },
  {
    key: "1612",
    english: "How far is the school here?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220212/correction_again/1612_sml0xo.mp3",
    bhutia: "ན་ཁའི་ སློབ་གྲྭ་ ག་ཏེ་ ཆོ༹ད་ ཐག་རིང་ ཡོད?",
    pronunciation: "na-khae lob-dra gha-te choed tha-ring yea?",
  },
  {
    key: "1613",
    english: "Do your children go to school via car or do they walk to school?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220213/correction_again/1613_zqb3of.mp3",
    bhutia:
      "རང་གི་ བོ་ཅོ༹་ སློབ་གྲྭ་ལོ་ རླངས་འཁོར་ བརྒྱུད་སྟི་ འགྱུ་དོ་ འབོ་, མན་བ་ རྐང་སྟོང་ འགྱུ་དོ་ འབོ་? ",
    pronunciation:
      "rang-gi pho-cho lob-dra lo lang-khor gyued-te gyu-do bo, men-ba kang-tang gyu-do bo? ",
  },
  {
    key: "1614",
    english: "Have any of your children dropped out of school?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220212/correction_again/1614_oafvox.mp3",
    bhutia: "རང་གི་ བོ་ཅོ༹་ ག་འདི་ ཡང་ སློབ་གྲྭ་ སྟོངས་སྟོངས་བོ་ ཡོད་པོ་? ",
    pronunciation: "rang-gi bho-cho gha-di yang lob-dra tang tang-bo yea-po? ",
  },
  {
    key: "1615",
    english: "What does your husband do for work ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220212/correction_again/1615_djajvy.mp3",
    bhutia: "རང་གི་ བཟའ་ཟླ་༼ཕོ་རྒྱགས་༽ཕྱག་ལས་ གན་ གནང་དོ?",
    pronunciation: "rang-gi za-dah (pho-gya) chag-ley ghan nang-do ?",
  },
  {
    key: "1616",
    english: "Where does your husband work?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220211/correction_again/1616_gnpmea.mp3",
    bhutia: "རང་གི་ བཟའ་ཟླ་༼ཕོ་རྒྱགས་༽ཕྱག་ལས་ ག་ན་ གནང་དོ? ",
    pronunciation: "rang-gi za-dah (pho-gya) chag-ley gha-na nang-do? ",
  },
  {
    key: "1617",
    english: "Do you have farmland?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220211/correction_again/1617_auagea.mp3",
    bhutia: "རང་ལོ་ ས་ཞིང་ ཡོད་པོ?",
    pronunciation: "rang-lo sa-zhing yea-po?",
  },
  {
    key: "1618",
    english: "What do you grow in your farmland?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220210/correction_again/1618_s1av9j.mp3",
    bhutia: "རང་གི་ ས་ཞིང་ ན་ གན་ བཏབ་པོ་ གནང་དོ?",
    pronunciation: "rang-gi sa-zhing na ghan ta-po nang-do?",
  },
  {
    key: "1619",
    english: "We grow paddy and millet in our farmland",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220211/correction_again/1619_qb1tnn.mp3",
    bhutia: "ང་ཅག་ཀིས་ ང་ཅའི་ ས་ཞིང་ན་ འབྱ༹་ དང་ མིན་ཅག་ བཅུ༹ག་ཏོ་ ཨིན།་",
    pronunciation:
      "nga-chag ki nga-chi sa-zhing na bya thang min-chag chug-to en.",
  },
  {
    key: "1620",
    english: "Do you raise livestock?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220211/correction_again/1620_bdhxfs.mp3",
    bhutia: "རང་གིས་ ནོ་ སེམས་ཅན་ གསོ་བོ་ གནང་ དོ? ",
    pronunciation: "rang-gi noh sem-chen so-bo nang do? ",
  },
  {
    key: "1621",
    english: "Do you sell your vegetables or keep them for yourself?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220209/correction_again/1621_dag5sv.mp3",
    bhutia:
      "རང་གི་ ཆོ༹དམ་ཅུ༹་ བཙོང་བོ་ གནང་དོ་ འབོ་ མན་བ་ རང་གི་ དོན་ལོ་ བཞག་ཀོ་ གནང་དོ?",
    pronunciation:
      "rang gi chhoem-chu chong-bo nang-do bo men-ba rang gi thoen-lo zhag-ko nang-do?",
  },
  {
    key: "1622",
    english: "Do your children help in farm work?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220209/correction_again/1622_souiml.mp3",
    bhutia: "རང་གི་ བོ་ཅོ༹་ཅུ༹་ ཀིས་ ཞིང་གཡོག་ ན་ རོགས་རམ་ བྱ༹ས་ག?",
    pronunciation: "rang gi bho-cho-chu ki zhing yog na rog-ram phya-ga? ",
  },
  {
    key: "1623",
    english: "Who manages household chores?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220210/correction_again/1623_rnqgwn.mp3",
    bhutia:
      "གཟིམ་ཁང་ ནང་གི་ ཕྱག་ལས་ཅུ༹་ ཀ་ཀིས་ གཟིགས་རྟོགས་ གནང་ དོ?(honorific) ",
    pronunciation: "zhim-khang nang gi chag-le-chu ka-ki zig-tog nang do? ",
  },
  {
    key: "1624",
    english: "Do men at home also help with housework?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220210/correction_again/1624_j1kwuw.mp3",
    bhutia:
      "ཁྱིམ་ ནང་གི་ བུ་ བོ་ཅོ༹་ཅུ༹་ ཀིས་ ཡང་ ཁྱིམ་གཡོག་ ན་ རོགས་རམ་ བྱ༹ས་ག?",
    pronunciation:
      "khim nang-gi bhu bho-cho-chu ki yang khim-yog na rog-ram phya-ga?",
  },
  {
    key: "1625",
    english: "Who takes care of the children?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220210/correction_again/1625_osfivw.mp3",
    bhutia: "བོ་ཅོ༹་ཅུ༹ ཀ་ཀིས་ ལོག་ལྟ་ དོ་?",
    pronunciation: "bho-cho-chu ka-ki log-ta do?",
  },
  {
    key: "1626",
    english: "Does your child get mid day meal at school?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220209/correction_again/1626_r37wce.mp3",
    bhutia: "རང་གི་ བོ་ཅ༹་ཀིས་ སློབ་གྲྭ་ ན་ ཉི་མའི་ ཇ༹འུ་ ཐོབ་ ཀ?",
    pronunciation: "rang gi bho cha ki lob-dra na nyi-mey zou thob ka?",
  },
  {
    key: "1627",
    english: "Does your girl child get sanitary pad at school?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220209/correction_again/1627_yocuvv.mp3",
    bhutia:
      "རང་གི་ བུ་མོ་ ཀིས་ སློབ་གྲྭ་ ན་ གཙང་སྦྲའི་སྟེགས་བུ་ (sanitary pad) ཐོབ་ ཀ?",
    pronunciation:
      "rang gi bhu-mo ki lob-dra na chang-draye tek-bu (sanitary pad) thob ka?",
  },
  {
    key: "1628",
    english: "How far is the hospital here?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220208/correction_again/1628_l2cirg.mp3",
    bhutia: "ན་ཁའི་ སྨན་ཁང་ འདི་ ག་ཏེ་ཆོ༹ད་ ཐག་རིང་ ཡོད? ",
    pronunciation: "na-khae sman-khang di gha-te choed thag-ring yea?  ",
  },
  {
    key: "1629",
    english: "What are the frequent health issues faced by people?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1748220209/correction_again/1629_ppsvi1.mp3",
    bhutia:
      "མི་ཅུ༹་ ཀིས་ ལོག་ཅན་ ལོག་ཅན་ གདོང་ལེན་  བྱ༹ས་ དགོས་པའི་ འཕྲོད་བསྟེན་གྱི་ གནད་དོན་ཅུ༹་ གན་ གན་ ཨིན་ནམ?",
    pronunciation:
      "mi-chu ki log-chen log-chen dhong-len phya-go-pey throe-ten gi ney-doen cho ghan ghan en-nam?",
  },
  {
    key: "1630",
    english: "Do health attendents come to vaccinate your children?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1631",
    english:
      "Are pregnant women taken to hospital or are they looked after at home?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1632",
    english: "Are elder peopel given proper medical treatment?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1633",
    english: "Do boys and girls both attend school?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1634",
    english: "What do most children do after completing school?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1635",
    english: "Do children go outside village for educational reasons?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1636",
    english: "Do you know about facebook instagram?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1637",
    english: "How much do your children use cell phones?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1638",
    english: "Do you know about amazon, myntra, flipkart?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1639",
    english: "Have you ever used gpay, paytm to send or receive money?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1640",
    english: "You should not share your upi pin with anyone",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1641",
    english: "This butter is home made",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1642",
    english: "I'll help to churn the curd",
    audiolink: "",
    bhutia: "",
    pronunciation: "nga om kyokse ro phyashe en",
  },
  {
    key: "1643",
    english: "Grandma, can you teach me how to make momo?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1644",
    english: "",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1645",
    english: "Excuse me, where is the main road?",
    audiolink: "",
    bhutia: "",
    pronunciation: "Gom mathe, zunglam di khana yepo moh?",
  },
  {
    key: "1646",
    english: "Is there a jeep to Lachen?",
    audiolink: "",
    bhutia: "",
    pronunciation: "Lachen gyukhen jipkhor yepo nya ?",
  },
  {
    key: "1647",
    english: "Where does this road go?",
    audiolink: "",
    bhutia: "",
    pronunciation: "Lam di khana gyushe ki moh?",
  },
  {
    key: "1648",
    english: "The road ahead is rough",
    audiolink: "",
    bhutia: "",
    pronunciation: "Na leh phatey ki lam chuktak yea.",
  },
  {
    key: "1649",
    english: "How many members are there in my family?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1650",
    english: "We are family of six - my parents, my spouse and two children",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1651",
    english: "Do all your children go to school?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1652",
    english: "How far is the nearest school from your house?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1653",
    english: "Do all your children go to school?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1654",
    english: "What crops do you grow?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1655",
    english: "We grow rice, millet, yam, potatoes, maize, ginger",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1656",
    english: "Do you have any livestock?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1657",
    english: "Yes we have cows, goats, and chickens",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1658",
    english: "Do the children help with farm work?",
    audiolink: "",
    bhutia: "",
    pronunciation: "Bhocho-chuke shing-yog phya-shed na rog phya-ga?   ",
  },

  {
    key: "1659",
    english: "Yes they help after school and during harvest season",
    audiolink: "",
    bhutia: "",
    pronunciation:
      "Laen khong-chu lobda chardi thang loh dubey kaap-lo rog phya-do en",
  },
  {
    key: "1660",
    english: "Who handles the household works?",
    audiolink: "",
    bhutia: "",
    pronunciation: "Khim nangey yog-chu ka-ke ta-tok phya-do en-nam?",
  },
  {
    key: "1661",
    english: "The wife and daughters handle house works",
    audiolink: "",
    bhutia: "",
    pronunciation: "Khim nangey yog-chu mobi thang phum-chu ta-tok phya-do en ",
  },
  {
    key: "1662",
    english: "Do men also help with house works?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1663",
    english: "Yes the husband helps with cooking and cleaning.",
    audiolink: "",
    bhutia: "",
    pronunciation:
      "Laen saam jo-shed, khyu-shed thang phyag-shed chu khim-apa ki ru phya-do en",
  },
  {
    key: "1664",
    english: "Do you have access to health centre or clinic nearby?",
    audiolink: "",
    bhutia: "",
    pronunciation:
      "Rang ge thak-nye-na throe-ten-khang yang-na sman-khang chu yepo nya? ",
  },
  {
    key: "1665",
    english: "Yes there is a health centre nearby",
    audiolink: "",
    bhutia: "",
    pronunciation: "Laen o-kha throe-ten-khang chiku thak-nye yea.",
  },
  {
    key: "1666",
    english: "Do you have a doctor or nurse in village",
    audiolink: "",
    bhutia: "",
    pronunciation: "Rang gi khyong-na sman-po yang-na ned-yogm yea-ka?",
  },
  {
    key: "1667",
    english: "We have a nurse who visits once a week",
    audiolink: "",
    bhutia: "",
    pronunciation:
      "Nga-chi cha ned-yogm chi yea di duen-thrak re-na theng-re hong-do en",
  },
  {
    key: "1668",
    english: "What are the common health problem faced by people here?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1669",
    english: "Are there cases of diseases like malaria and tuberculosis?",
    audiolink: "",
    bhutia: "",
    pronunciation: "o-kha che-ned thang loh-ned dem na-tsha chu thon-do nya?  ",
  },
  {
    key: "1670",
    english: "Do pregnant women receive proper medical care?",
    audiolink: "",
    bhutia: "",
    pronunciation: "phum phu-chem chu-ke sman-choed lem thop-to ga?",
  },
  {
    key: "1671",
    english: "Are there  vaccination for kids?",
    audiolink: "",
    bhutia: "",
    pronunciation: "o-kha onye-chui thoen-lo sman-khap ye ka?",
  },
  {
    key: "1672",
    english: "Are medicines available in the village?",
    audiolink: "",
    bhutia: "",
    pronunciation: "khyong-na sman chu thop ka ?",
  },
  {
    key: "1673",
    english: "Do you face issues related to mental health or stress?",
    audiolink: "",
    bhutia: "",
    pronunciation:
      "rang-gi sem-kham throe-toen yang-na sem-kham thang del-wae ned chui dhong-len phya yea-po en-nam? ",
  },
  {
    key: "1674",
    english: "Do elders encourage children to talk about their mental health?",
    audiolink: "",
    bhutia: "",
    pronunciation:
      "gen-bo chu ki pho-cho chui  sem-kham throe-toen gi kor-lo loh-tob kye chuk-shed kyi tam chu kyap-to nya?",
  },
  {
    key: "1675",
    english: "Do elderly people receive medical aid?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1676",
    english: "Is there ICDS for small kids?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1677",
    english: "What do you expect the government to provide for village?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1678",
    english: "Do you face any issues while raising livestock?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1679",
    english: "Do you have local dairy for milk delivery ",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1680",
    english: "Do you sell  all the dairy products in the market",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1681",
    english: "On what day is the local market? ",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1683",
    english: "It is on Thursday",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1684",
    english: "Do elderly family members recive pension or support?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1685",
    english: "Are there any case of domestic violence in the village?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1686",
    english: "Do all families have access to clean drinking water?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1687",
    english: "Do the children have access to textbooks and learning materials?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1688",
    english: "How is the internet here?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1689",
    english: "Do girls and boys get equal access to education?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1690",
    english: "Do children get mid-day-meal at school?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1691",
    english: "Do all the students in school attend school?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1692",
    english: "Do children pursue higher education after school?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1693",
    english: "Do poeple receive governement employment support?",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1694",
    english: "Together we bloom we bloom as one ",
    audiolink: "",
    bhutia: "ང་ཅག་ མཉམ་ཅིག་ ཤར་ཤད། གཅིག་སྒྲིལ་ ནང་ལོ་ ཤར་ཤད།",
    pronunciation: "ngacha nyemchi syarshe, chigdel nangloh syarshe",
  },

  {
    key: "1740",
    english: "Anesthesia",
    audiolink: "",
    bhutia: "ཟུག་ བཅག་སྨན་ བཏང་སྡི་ ཚོར་བ་ མེད་པོ་ བཟོ་བོ། ཞྡི་སྨན།",
    pronunciation: "",
  },

  {
    key: "1741",
    english: "Avitaminosis",
    audiolink: "",
    bhutia: "སོབས་སེད་ ཟད་ནད། ",
    pronunciation: "",
  },
  {
    key: "1742",
    english: "Artery",
    audiolink: "",
    bhutia: "འཕར་རྩ།",
    pronunciation: "",
  },
  {
    key: "1743",
    english: "Antibiotic",
    audiolink: "",
    bhutia: "སེ་ནད་ འགོག་སྨན། ",
    pronunciation: "",
  },
  {
    key: "1744",
    english: "AV Graft",
    audiolink: "",
    bhutia:
      "སོད་རྩ་ དང་ འཕར་རྩ་ གཉྡིས་ འབེལ་ བཅུག་མཁན་ རྫས་སོར་ གྡིས་ བཟོ་བཟོ་བའྡི་ ཡུར་བ་ འདེམ་མོའི་ ཆ་ཀ",
    pronunciation: "",
  },
  {
    key: "1745",
    english: "Blood Clot",
    audiolink: "",
    bhutia: "ཁྱག་འཁྱེགས། ཁྱག་ལྡིང་།",
    pronunciation: "",
  },
  {
    key: "1746",
    english: "Blood Filter",
    audiolink: "",
    bhutia: "ཁྱག་ཚགས།",
    pronunciation: "",
  },
  {
    key: "1747",
    english: "Blood Vessels",
    audiolink: "",
    bhutia: "ཁྱག་རྩ།",
    pronunciation: "",
  },
  {
    key: "1748",
    english: "Balance",
    audiolink: "",
    bhutia: "ཆ་སོམས་པོ།/ཚོད་སོམས།",
    pronunciation: "",
  },
  {
    key: "1749",
    english: "Central Venous Catheter",
    audiolink: "",
    bhutia: "སྦུ་ནང་གྡི་ སོད་རྩ་ ནང་ཤ་ བླུགས་མཁན་ སྦུགས་ (Tube)",
    pronunciation: "",
  },
  {
    key: "1750",
    english: "Chronic Kidney Disease",
    audiolink: "",
    bhutia: "ཚབས་ཆེན་ མཁལ་རོག་གྡི་ ནད།",
    pronunciation: "",
  },
  {
    key: "1751",
    english: "Cholesterol",
    audiolink: "",
    bhutia: "མཁྡིས་ཞག ཁྱག་ཞག ཁྱག་ཚིལ།",
    pronunciation: "",
  },
  {
    key: "1752",
    english: "Complication",
    audiolink: "",
    bhutia: "མགོ་རོག  དཀའ་ལས། རོག་འཛིང་། ",
    pronunciation: "",
  },
  {
    key: "1753",
    english: "Calcium",
    audiolink: "",
    bhutia: "དཀར་ཤམ། ",
    pronunciation: "",
  },
  {
    key: "1754",
    english: "Challenges",
    audiolink: "",
    bhutia: "ཚོད་ལྟ/གདོང་ལེན།",
    pronunciation: "",
  },
  {
    key: "1755",
    english: "Care",
    audiolink: "",
    bhutia: "བདག་ཀུ/ལྟ་རོག",
    pronunciation: "",
  },
  {
    key: "1756",
    english: "Diet",
    audiolink: "",
    bhutia: "ཟས་སོད།",
    pronunciation: "",
  },
  {
    key: "1757",
    english: "Dialysis",
    audiolink: "",
    bhutia: "ཁྱག་གཤེར",
    pronunciation: "",
  },
  {
    key: "1758",
    english: "Emergency",
    audiolink: "",
    bhutia: "ཧང་ཏོག་ ལོང་ཐོན།",
    pronunciation: "",
  },
  {
    key: "1759",
    english: "Fistula",
    audiolink: "",
    bhutia: "མཚན་བར་ རོལ་བ/ ཧྡིལ་བུ།",
    pronunciation: "",
  },
  {
    key: "1760",
    english: "Fluid",
    audiolink: "",
    bhutia: "ཆུ་སེར།",
    pronunciation: "",
  },
  {
    key: "1761",
    english: "Glomerulonephritis",
    audiolink: "",
    bhutia: "མཁལ་་རོག་གྡི་ ཚགས་རླུང་།",
    pronunciation: "",
  },
  {
    key: "1762",
    english: "Hypertension",
    audiolink: "",
    bhutia: "ཁྱག་ཤེད་ མཐོ་དྲགས་ཀྡི་ ནད།",
    pronunciation: "",
  },
  {
    key: "1763",
    english: "High Blood Sugar",
    audiolink: "",
    bhutia: "ཁྱག་རྩྡི་ མཐོ་དྲགས།",
    pronunciation: "",
  },
  {
    key: "1764",
    english: "Hemoglobin",
    audiolink: "",
    bhutia: "ཁྱག་རྡིལ།",
    pronunciation: "",
  },
  {
    key: "1765",
    english: "Infection",
    audiolink: "",
    bhutia: "གཉན་སྡིན་ ཉེན་ཁ།",
    pronunciation: "",
  },
  {
    key: "1766",
    english: "Itchy Skin",
    audiolink: "",
    bhutia: "གཟུགས་ གཡའ་ཤད",
    pronunciation: "",
  },
  {
    key: "1767",
    english: "Kidney",
    audiolink: "",
    bhutia: "མཁལ་རོག",
    pronunciation: "",
  },
  {
    key: "1768",
    english: "Multi Vitamin",
    audiolink: "",
    bhutia: "སྣ་འཛོམས་ བཅུད་སྨན།",
    pronunciation: "",
  },
  {
    key: "1769",
    english: "Mineral",
    audiolink: "",
    bhutia: "གཏེར་རྫས།",
    pronunciation: "",
  },
  {
    key: "1770",
    english: "Nephrologist",
    audiolink: "",
    bhutia: "མཁལ་རོག་ སྨན་པོ།",
    pronunciation: "",
  },
  {
    key: "1771",
    english: "Option",
    audiolink: "",
    bhutia: "གདམ་ཁ།",
    pronunciation: "",
  },
  {
    key: "1772",
    english: "Procedure",
    audiolink: "",
    bhutia: "དཔྱད་བཅོས་ཀྡི་ རྡིམ་པོ། ",
    pronunciation: "",
  },
  {
    key: "1773",
    english: "Potassium",
    audiolink: "",
    bhutia: "ཟེ་ཚྭ། དུག་སེལ་ དཀར་པོ། ",
    pronunciation: "",
  },
  {
    key: "1774",
    english: "Polycystic Kidney Disease",
    audiolink: "",
    bhutia: "མཁལ་ནད་ ཀེས་པོའི སེབ།",
    pronunciation: "",
  },
  {
    key: "1775",
    english: "Protein",
    audiolink: "",
    bhutia: "སྡི་དཀར།",
    pronunciation: "",
  },
  {
    key: "1776",
    english: "Prostate",
    audiolink: "",
    bhutia: "ལྒང་བུ།",
    pronunciation: "",
  },
  {
    key: "1777",
    english: "Regular",
    audiolink: "",
    bhutia: "ཨ་བཏང་/ཆག་མེད།",
    pronunciation: "",
  },
  {
    key: "1778",
    english: "Sedation",
    audiolink: "",
    bhutia: "ཞྡི་སྨན།",
    pronunciation: "",
  },
  {
    key: "1779",
    english: "Sodium",
    audiolink: "",
    bhutia: "ཚ་རླུང་/ཚྭ་རྫས། ",
    pronunciation: "",
  },
  {
    key: "1780",
    english: "Symptom",
    audiolink: "",
    bhutia: "ནད་རགས/རགས་མཚན། ",
    pronunciation: "",
  },
  {
    key: "1781",
    english: "Surgery",
    audiolink: "",
    bhutia: "གཤག་བཅོས།",
    pronunciation: "",
  },
  {
    key: "1782",
    english: "Steal Phenomena",
    audiolink: "",
    bhutia: "བསྡིལ་གཤྡིས་ཀྡི་ གནད་དོན།",
    pronunciation: "",
  },
  {
    key: "1783",
    english: "Tissue",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1784",
    english: "Toxin",
    audiolink: "",
    bhutia: "སེ་ལྡན་ དུག་རྫས།",
    pronunciation: "",
  },
  {
    key: "1785",
    english: "Transplant",
    audiolink: "",
    bhutia: "༼Kindney མཁལ་རོག་༽༼Organ དབང་པོ་༽ སོ་བཙུགས།",
    pronunciation: "",
  },
  {
    key: "1786",
    english: "Towel",
    audiolink: "",
    bhutia: "ལྟོ་རས།",
    pronunciation: "",
  },
  {
    key: "1787",
    english: "Tube",
    audiolink: "",
    bhutia: "སྦུགས།",
    pronunciation: "",
  },
  {
    key: "1788",
    english: "Urine",
    audiolink: "",
    bhutia: "གཤེབ།",
    pronunciation: "",
  },
  {
    key: "1789",
    english: "Vein",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1790",
    english: "Vascular",
    audiolink: "",
    bhutia: "སོག་རྩ་ ནག་ཀུ།",
    pronunciation: "",
  },
  {
    key: "1791",
    english: "Vitamin",
    audiolink: "",
    bhutia: "བཅུད་སྨན/ སོབས་སེད། ",
    pronunciation: "",
  },
  {
    key: "1792",
    english: "Water",
    audiolink: "",
    bhutia: "ཆུ།",
    pronunciation: "chu",
  },
  {
    key: "1793",
    english: "Sugar",
    audiolink: "",
    bhutia: "མངརམ།",
    pronunciation: "ngam",
  },

  {
    key: "1794",
    english: "Milk",
    audiolink: "",
    bhutia: "ཨོམ།",
    pronunciation: "om",
  },
  {
    key: "1795",
    english: "Information",
    audiolink: "",
    bhutia: "གནས་ཚུལ/ལན་བརྡ།",
    pronunciation: "nyed-chul/len-da",
  },
  {
    key: "1796",
    english: "Air",
    audiolink: "",
    bhutia: "རླུང།",
    pronunciation: "lung",
  },
  {
    key: "1797",
    english: "Toothpaste",
    audiolink: "",
    bhutia: "གསོ་སྨན",
    pronunciation: "so-men",
  },
  {
    key: "1798",
    english: "Mother in Law",
    audiolink: "",
    bhutia: "ཨམ་སྒྱུགམ།",
    pronunciation: "am-gyum",
  },
  {
    key: "1799",
    english: "Volleyball",
    audiolink: "",
    bhutia: "ལག་རྩེ་པོ་ལི།",
    pronunciation: "lag ched-poli",
  },
  {
    key: "1800",
    english: "Swimming Pool",
    audiolink: "",
    bhutia: "པྱེ་རྫེང/བྱེ་རྫིང་།",
    pronunciation: "che-zeng/chey-zeng",
  },
  {
    key: "1801",
    english: "Car Stop/ Taxi Stop",
    audiolink: "",
    bhutia: "འཁོར་ལོ་ བཀབ་གནས་།",
    pronunciation: "khorlo kabney",
  },
  {
    key: "1802",
    english: "John's",
    audiolink: "",
    bhutia: "ཛོཧ་ནན་གྱི་།",
    pronunciation: "John-gyi",
  },
  {
    key: "1803",
    english: "Cat's",
    audiolink: "",
    bhutia: "ཨ་ལིས་ཀྱི་།",
    pronunciation: "ali-kyi",
  },
  {
    key: "1804",
    english: "Teaher's",
    audiolink: "",
    bhutia: "སློབ་དཔོན་གྱི་།",
    pronunciation: "loben-kyi",
  },
  {
    key: "1805",
    english: "Children's",
    audiolink: "",
    bhutia: "བོ་ཙོ་འི་།",
    pronunciation: "phocho-hi",
  },
  {
    key: "1806",
    english: "Country's",
    audiolink: "",
    bhutia: "རྒྱལ་ཁབ་ཀྱི།",
    pronunciation: "gayl-khab-kyi",
  },
  {
    key: "1807",
    english: "Reading",
    audiolink: "",
    bhutia: "སྒྲོགས་བཞིན།",
    pronunciation: "dug-jin",
  },
  {
    key: "1808",
    english: "Dancing",
    audiolink: "",
    bhutia: "འཆམ་བཞིན་།",
    pronunciation: "cham-jin",
  },
  {
    key: "1809",
    english: "Cooking",
    audiolink: "",
    bhutia: "-བཙོ་བཞིན་།",
    pronunciation: "tso-jin",
  },
  {
    key: "1810",
    english: "Painting",
    audiolink: "",
    bhutia: "རི་མོ་ བྲི་བཞིན་།/ཚན་བྲིས་",
    pronunciation: "remo trijin/ chen-tri",
  },
  {
    key: "1811",
    english: "Apple",
    audiolink: "",
    bhutia: "གླི་",
    pronunciation: "li",
  },
  {
    key: "1812",
    english: "Chair",
    audiolink: "",
    bhutia: "རྐང་ཁྲི་།",
    pronunciation: "kang-ti",
  },
  {
    key: "1813",
    english: "Music",
    audiolink: "",
    bhutia: "སྒྲ་དབྱངས་།/སྙན་ཆ་།/རོལ་དབྱངས་།",
    pronunciation: "da-yang/nyen-cha/ryal-yang",
  },
  {
    key: "1814",
    english: "Flower",
    audiolink: "",
    bhutia: "མེ་ཏོག་།",
    pronunciation: "metok",
  },
  {
    key: "1815",
    english: "Perfume",
    audiolink: "",
    bhutia: "དྲི་ཞིམ་ སྨན་ཚུ་།",
    pronunciation: "trim-shim menchu",
  },
  {
    key: "1816",
    english: "Love",
    audiolink: "",
    bhutia: "བྱམས་པོ་།/དགའ་ཚོར་།",
    pronunciation: "chyam-po/dga-chor",
  },
  {
    key: "1817",
    english: "Freedom",
    audiolink: "",
    bhutia: "རང་དབང་ཅན་།",
    pronunciation: "rang-wong-chen",
  },
  {
    key: "1818",
    english: "Courage",
    audiolink: "",
    bhutia: "སྙིང་སྟོབས་/དཔའ་སྙིང་།/བློ་ཁོག་",
    pronunciation: "ning-tob/pa-nying/lo-kgok",
  },
  {
    key: "1819",
    english: "Honesty",
    audiolink: "",
    bhutia: "དྲང་པོ་།",
    pronunciation: "thrang-po",
  },
  {
    key: "1820",
    english: "Anger",
    audiolink: "",
    bhutia: "ཁོངཁྲོ་།/ཞེ་དངས་།/ཁྲོངས་པོ་།",
    pronunciation: "",
  },
  {
    key: "1821",
    english: "Team",
    audiolink: "",
    bhutia: "རུ་ཁག་།/སྡེ་ཚན་།",
    pronunciation: "ri-gak/sdey-chen",
  },
  {
    key: "1822",
    english: "Family",
    audiolink: "",
    bhutia: "ནང་མི་།",
    pronunciation: "nang-mi",
  },
  {
    key: "1823",
    english: "Flock",
    audiolink: "",
    bhutia: "ཁྱུ་།",
    pronunciation: "khyug",
  },
  {
    key: "1824",
    english: "Bunch",
    audiolink: "",
    bhutia: "ཆག་ཁག་།",
    pronunciation: "chag-khag",
  },
  {
    key: "1825",
    english: "Committee",
    audiolink: "",
    bhutia: "ཚོགས་ཚུང་།/ལྷན་ཚོགས་།",
    pronunciation: "tshog-tshung/len-chod",
  },
  {
    key: "1826",
    english: "Car",
    audiolink: "",
    bhutia: "འཁོར་ལོ་/སྣུམ་འཁོར་",
    pronunciation: "khorlo/snum-khor",
  },
  {
    key: "1827",
    english: "Pencil",
    audiolink: "",
    bhutia: "སོལ་སྨྱུག་།",
    pronunciation: "sel-myug",
  },
  {
    key: "1828",
    english: "Apple",
    audiolink: "",
    bhutia: "གླི",
    pronunciation: "li",
  },
  {
    key: "1829",
    english: "Chair",
    audiolink: "",
    bhutia: "རྐང་ཁྲི་།",
    pronunciation: "kangthi",
  },
  {
    key: "1830",
    english: "Bird",
    audiolink: "",
    bhutia: "བྱི་ཅུང་",
    pronunciation: "phyi-cung",
  },
  {
    key: "1831",
    english: "Biggest",
    audiolink: "",
    bhutia: "སྦོམ་ཤོས་།",
    pronunciation: "bom-shoed",
  },
  {
    key: "1832",
    english: "Fastest",
    audiolink: "",
    bhutia: "མ་ལག་ དེ་ཤོས་།/མགྱོགས་ཤོས་།",
    pronunciation: "malag dey-shed/ mgyuk-shed",
  },
  {
    key: "1833",
    english: "Strongest",
    audiolink: "",
    bhutia: "-ལྟོབས་ཆེ་ཤོས་།",
    pronunciation: "ltob-che shyo",
  },
  {
    key: "1834",
    english: "Tallest",
    audiolink: "",
    bhutia: "རིང་ཤོས་།",
    pronunciation: "ring-shyo",
  },
  {
    key: "1835",
    english: "Smartest",
    audiolink: "",
    bhutia: "མཁས་ཤོས་།",
    pronunciation: "mkhed-shyo",
  },
  {
    key: "1836",
    english: "Coldest",
    audiolink: "",
    bhutia: "ཁོལ་ཤོས་།",
    pronunciation: "khyi-shyo",
  },
  {
    key: "1837",
    english: "Warmest",
    audiolink: "",
    bhutia: "དྲོ་ཤོས་།/ཚྭ་ཤོས་།",
    pronunciation: "",
  },
  {
    key: "1838",
    english: "Darkest",
    audiolink: "",
    bhutia: "ནག་ཤོས་།",
    pronunciation: "",
  },
  {
    key: "1839",
    english: "Brightest",
    audiolink: "",
    bhutia: "དཀར་ཤོས་།",
    pronunciation: "",
  },
  {
    key: "1840",
    english: "Quietest",
    audiolink: "",
    bhutia: "ཁུ་སེམ་ཤོས་།",
    pronunciation: "",
  },
  {
    key: "1841",
    english: "Boy",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1842",
    english: "City",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1843",
    english: "Book",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1844",
    english: "River",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1845",
    english: "Dog",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1846",
    english: "London",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1847",
    english: "Maria",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1848",
    english: "Amazon",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1849",
    english: "Mount Everest",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1850",
    english: "Small",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1851",
    english: "Dark",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1852",
    english: "Bright",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1853",
    english: "Soft",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1854",
    english: "Wide",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1855",
    english: "Narrow",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1856",
    english: "Deep",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1857",
    english: "Shallow",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1858",
    english: "Loud",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1859",
    english: "Quiet",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1860",
    english: "Bigger",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1861",
    english: "Faster",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1862",
    english: "Stronger",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1863",
    english: "Taller",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1864",
    english: "Smarter",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1865",
    english: "colder",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1866",
    english: "Warmer",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1867",
    english: "Brighter",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1868",
    english: "Darker",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1869",
    english: "Quieter",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1870",
    english: "Inspired",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1871",
    english: "Confused",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1872",
    english: "Surprised",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1873",
    english: "Disappointed",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1874",
    english: "Annoyed",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1875",
    english: "Perfect",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1876",
    english: "Dead",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1877",
    english: "Unique",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1878",
    english: "Complete",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1879",
    english: "Empty",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1880",
    english: "Full",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1881",
    english: "Round",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1882",
    english: "Supreme",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1883",
    english: "Whole",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1884",
    english: "Happy",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1885",
    english: "Tired",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1886",
    english: "Anger",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1887",
    english: "Curious",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1888",
    english: "Funny",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1889",
    english: "Hungry",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1890",
    english: "Sick",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1891",
    english: "Sleepy",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1892",
    english: "Thirsty",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1893",
    english: "Guilty",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1894",
    english: "Well-known",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1895",
    english: "High-Speed",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1896",
    english: "Full-Time",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1897",
    english: "Long-Lasting",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1898",
    english: "Man-Made",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1899",
    english: "Sun-Dried",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1900",
    english: "Heavy-Duty",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1896",
    english: "User-Friendly",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1897",
    english: "Exciting",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1898",
    english: "Amazing",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1899",
    english: "Boring",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1900",
    english: "Interesting",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1901",
    english: "Challenging",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1902",
    english: "Confusing",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1903",
    english: "Surprising",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1904",
    english: "Disappointing",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1905",
    english: "Annoying",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1906",
    english: "Any",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1907",
    english: "Some",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1908",
    english: "Many",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1909",
    english: "Few",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1910",
    english: "Several",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1911",
    english: "All",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1912",
    english: "None",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1913",
    english: "Certain",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1914",
    english: "Either",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1915",
    english: "Every",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1916",
    english: "American",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1917",
    english: "British",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1918",
    english: "Indian",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1919",
    english: "Japanese",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1920",
    english: "French",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1921",
    english: "Italian",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1922",
    english: "German",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1923",
    english: "Russian",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1924",
    english: "Chinese",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1925",
    english: "Spanish",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1926",
    english: "My",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1927",
    english: "Your",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1928",
    english: "His",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1929",
    english: "Her",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1930",
    english: "Their",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1931",
    english: "Our",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1932",
    english: "Its",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1933",
    english: "Whose",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1934",
    english: "One's",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1935",
    english: "Whosoever",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1936",
    english: "Which",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1937",
    english: "What",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1938",
    english: "Whose",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1939",
    english: "How",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1940",
    english: "Why",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1941",
    english: "When",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1942",
    english: "Where",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1943",
    english: "Whom",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1944",
    english: "Whichever",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1945",
    english: "Whatever",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1946",
    english: "This",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1947",
    english: "That",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1948",
    english: "These",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1949",
    english: "Those",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1950",
    english: "Such",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1951",
    english: "Certain",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1952",
    english: "Another",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1953",
    english: "Other",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1954",
    english: "Same",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1955",
    english: "Each",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1956",
    english: "Many",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1957",
    english: "Few",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1958",
    english: "Several",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1959",
    english: "All",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1960",
    english: "Some",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1961",
    english: "Numerous",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1962",
    english: "Both",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1963",
    english: "Much",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1964",
    english: "Enough",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1965",
    english: "Little",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1966",
    english: "Beautiful",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1967",
    english: "Tall",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1968",
    english: "Round",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1969",
    english: "Shiny",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1970",
    english: "Blue",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1971",
    english: "Soft",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1972",
    english: "Loud",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1973",
    english: "Cold",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1974",
    english: "Bright",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1975",
    english: "Smooth",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1976",
    english: "Above",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1977",
    english: "About",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1978",
    english: "After",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1979",
    english: "Along",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1980",
    english: "Among",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1981",
    english: "Around",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1982",
    english: "As",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1983",
    english: "At",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1984",
    english: "Atop",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1985",
    english: "Before",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1986",
    english: "Behind",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1987",
    english: "Beneath",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1988",
    english: "",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1989",
    english: "",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1990",
    english: "",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1991",
    english: "",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1992",
    english: "",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1993",
    english: "",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1994",
    english: "",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1995",
    english: "",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1996",
    english: "",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1997",
    english: "",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1998",
    english: "",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "1999",
    english: "",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "2000",
    english: "",
    audiolink: "",
    bhutia: "",
    pronunciation: "",
  },
  {
    key: "2147",
    english: "London (proper nouns)",
    bhutia: "ལོན་ཌོན་།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2148",
    english: "Maria",
    bhutia: "མ་རི་ཡ་།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2149",
    english: "Amazon",
    bhutia: "ཨེ་མ་ཇོན་།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2150",
    english: "Mount Everest",
    bhutia: "གངས་ཇོ་མོ་ གླང་མ་",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2151",
    english: "Boy (common nouns)",
    bhutia: "བུ་།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2152",
    english: "City",
    bhutia: "ཁྲོམ་སྡེ་།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2153",
    english: "Book",
    bhutia: "དེབ་།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2154",
    english: "River",
    bhutia: "གཙང་ཆུ་།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2155",
    english: "Dog",
    bhutia: "ཁྱི་།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2156",
    english: "Water (uncountable nouns)",
    bhutia: "ཆུ།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2157",
    english: "Sugar",
    bhutia: "མངརམ།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2158",
    english: "Milk",
    bhutia: "ཨོམ།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2159",
    english: "Information",
    bhutia: "གནས་ཚུལ/ལན་བརྡ།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2160",
    english: "Air",
    bhutia: "རླུང།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2161",
    english: "John's (possessive nouns)",
    bhutia: "ཛོཧ་ནན་གྱི་།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2162",
    english: "Cat's",
    bhutia: "ཨ་ལིས་ཀྱི་",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2163",
    english: "Teacher's",
    bhutia: "སློབ་དཔོན་གྱི་།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2164",
    english: "Children's",
    bhutia: "བོ་ཙོ་འི་།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2165",
    english: "Swimming (gerund nouns)",
    bhutia: "པྱེ་རྐྱབས་བཞིན་/བྱེ་རྐྱབས་བཞིན།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2166",
    english: "Reading",
    bhutia: "སྒྲོགས་བཞིན།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2167",
    english: "Cooking",
    bhutia: "བཙོ་བཞིན་།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2168",
    english: "Dancing",
    bhutia: "འཆམ་བཞིན་",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2169",
    english: "Painting",
    bhutia: "རི་མོ་ བྲི་བཞིན་།/ཚན་བྲིས་།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2170",
    english: "Love (abstract nouns)",
    bhutia: "བྱམས་པོ་།/དགའ་ཚོར་།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2171",
    english: "Freedom",
    bhutia: "རང་དབང་ཅན་།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2172",
    english: "Courage",
    bhutia: "སྙིང་སྟོབས་/དཔའ་སྙིང་།/བློ་ཁོག་།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2173",
    english: "Honesty",
    bhutia: "དྲང་པོ་།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2174",
    english: "Anger",
    bhutia: "ཁོངཁྲོ་།/ཞེ་དངས་།/ཁྲོངས་པོ་།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2175",
    english: "Team (collective nouns)",
    bhutia: "རུ་ཁག་།/སྡེ་ཚན་།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2176",
    english: "Family",
    bhutia: "ནང་མི་།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2177",
    english: "Flock",
    bhutia: "ཁྱུ་།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2178",
    english: "Bunch",
    bhutia: "ཆག་ཁག་།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2179",
    english: "Committee",
    bhutia: "ཚོགས་ཚུང་།/ལྷན་ཚོགས་།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2180",
    english: "Car (countable nouns)",
    bhutia: "འཁོར་ལོ་/སྣུམའཁོར་།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2181",
    english: "Pencil",
    bhutia: "སོལ་སྨྱུག་།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2182",
    english: "Apple",
    bhutia: "གླི་",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2183",
    english: "Chair",
    bhutia: "རྐང་ཁྲི་།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2184",
    english: "Bird",
    bhutia: "བྱི་ཅུང་།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2185",
    english: "Toothpaste (compound nouns)",
    bhutia: "གསོ་སྨན",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2186",
    english: "Swimming Pool",
    bhutia: "པྱེ་རྫེང/བྱེ་རྫིང་།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2187",
    english: "Volley Ball",
    bhutia: "ལག་རྩེ་པོ་ལི།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2188",
    english: "Mother in Law",
    bhutia: "ཨམ་སྒྱུགམ།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2189",
    english: "Car stop/ Taxi stop",
    bhutia: "འཁོར་ལོ་ བཀབ་གནས་།",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2190",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2191",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2192",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2193",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2194",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2195",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2196",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2197",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2198",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2199",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2200",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2201",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2202",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2203",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2204",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2205",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2206",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2207",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2208",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2209",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2210",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2211",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2212",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2213",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2214",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2215",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2216",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2217",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2218",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2219",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2220",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2221",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2222",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2223",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2224",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2225",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2226",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2227",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2228",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2229",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "2230",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  
  {
    "key": "2231",
    "english": "Abstract",
    "bhutia": "སྙིང་དོན།",
    "pronunciation": "ningden",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960318/college_terms/abstract_tw7lrk.mp3"
  },
  {
    "key": "2232",
    "english": "Introduction",
    "bhutia": "ངོ་སྤྲོད།",
    "pronunciation": "ngoti",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960320/college_terms/introduction_whtamx.mp3"
  },
  {
    "key": "2233",
    "english": "Literature Review",
    "bhutia": "རྕོམ་རིག་ཡང་ཞིབ།",
    "pronunciation": "chomrik yangship",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960321/college_terms/literature_review_taovja.mp3"
  },
  {
    "key": "2234",
    "english": "Theoretical framework",
    "bhutia": "བཤད་པའི་བཟོ་བཀོད།",
    "pronunciation": "shepay shokey",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960335/college_terms/theoretical_framework_tnh1cd.mp3"
  },
  {
    "key": "2235",
    "english": "Conceptual framework",
    "bhutia": "བསམ་ཚུལ་བཟོ་བཀོད།",
    "pronunciation": "samchul shokey",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960318/college_terms/conceptual_framework_fybl0y.mp3"
  },
  {
    "key": "2236",
    "english": "Method",
    "bhutia": "ཐབས་ལམ།",
    "pronunciation": "thaplam",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960326/college_terms/method_hs0wwg.mp3"
  },
  {
    "key": "2237",
    "english": "Methodology",
    "bhutia": "ཐབས་ལམ་གྱི་གཞུང་ལུགས།",
    "pronunciation": "thaplam khi sunglu",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960327/college_terms/methodology_wlk5gi.mp3"
  },
  {
    "key": "2238",
    "english": "Hypothesis",
    "bhutia": "ཚོད་དཔག།",
    "pronunciation": "chepak",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960319/college_terms/hypothesis_w3yri8.mp3"
  },
  {
    "key": "2239",
    "english": "Research Proposal",
    "bhutia": "ཉམས་ཞིབ་ཀྱི་འཆར་གཞི།",
    "pronunciation": "nyamzipkhi charze",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960334/college_terms/research_proposal_i1x5pk.mp3"
  },
  {
    "key": "2240",
    "english": "Project Proposal",
    "bhutia": "གཡོག་གཞིའི་འཆར་གཞི།",
    "pronunciation": "yojie charze",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960327/college_terms/project_proposal_lck56b.mp3"
  },
  {
    "key": "2241",
    "english": "Research Paper",
    "bhutia": "ཉམས་ཞིབ་རྩོམ་ཤོག།",
    "pronunciation": "nyamzip chomshyok",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960328/college_terms/research_paper_dmmrxa.mp3"
  },
  {
    "key": "2242",
    "english": "Research Result",
    "bhutia": "ཉམས་ཞིབ་གྲུབ་འབྲས།",
    "pronunciation": "nymzip dupdi",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960334/college_terms/research_result_jo1fzf.mp3"
  },
  {
    "key": "2243",
    "english": "Discussion",
    "bhutia": "གོ་བསྡུར།",
    "pronunciation": "godur",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960319/college_terms/discussion_trnzy4.mp3"
  },
  {
    "key": "2244",
    "english": "Conclusion",
    "bhutia": "འཇུག་བསྡོམ།",
    "pronunciation": "jugdom",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960319/college_terms/conclusion_woyq8m.mp3"
  },
  {
    "key": "2245",
    "english": "Recommendation",
    "bhutia": "སློབ་སྟོན།",
    "pronunciation": "lobten",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960328/college_terms/recommendation_tjwmpx.mp3"
  },
  {
    "key": "2246",
    "english": "Appendix",
    "bhutia": "ལྷན་ཐབས།",
    "pronunciation": "lenthap",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1754386873/college_terms/appendix_sdfw3l.mp3"
  },
  {
    "key": "2247",
    "english": "Bibliography",
    "bhutia": "རྩོམ་རིག་དེབ་ཐོ།",
    "pronunciation": "chomrik thepdoh",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1754387005/college_terms/bibliography_ahjfsm.mp3"
  },
  {
    "key": "2248",
    "english": "Documentation",
    "bhutia": "ཡིག་ཆ་ཕྱོགས་སྒྲིགས།",
    "pronunciation": "hikcha chugdik",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960319/college_terms/documentation_eto94l.mp3"
  },
  {
    "key": "2249",
    "english": "Proofreading",
    "bhutia": "ཞུས་དག།",
    "pronunciation": "chuda",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960328/college_terms/proofreading_f5fqmp.mp3"
  },
  {
    "key": "2250",
    "english": "Plagiarism",
    "bhutia": "རྐུམ་བཤུས།",
    "pronunciation": "kungshu",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960327/college_terms/plagarism_hsi66a.mp3"
  },
  {
    "key": "2251",
    "english": "Paraphrasing",
    "bhutia": "ལུང་འགྲེལ།",
    "pronunciation": "lungdel",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960327/college_terms/paraphrasing_cdit0s.mp3"
  },
  {
    "key": "2252",
    "english": "Citation",
    "bhutia": "ལུང་འདྲེན།",
    "pronunciation": "lungdin",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1754387150/college_terms/citation_mlfifl.mp3"
  },
  {
    "key": "2253",
    "english": "Background",
    "bhutia": "རྒྱབ་ལྗོངས།",
    "pronunciation": "gyapzong",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1754387418/college_terms/background_zshf9v.mp3"
  },
  {
    "key": "2254",
    "english": "Data analysis and finding",
    "bhutia": "གཡོག་གཞིའི་དཔྱད་གྲུབ།",
    "pronunciation": "yujey chedup",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1754387496/college_terms/data_analysis_and_finding_rasqpw.mp3"
  },
  {
    "key": "2255",
    "english": "Copyright",
    "bhutia": "པར་དབང།",
    "pronunciation": "parwang",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1754387549/college_terms/copyright_juq39d.mp3"
  },
  {
    "key": "2256",
    "english": "Dissertation",
    "bhutia": "དཔྱད་རྩོམ།",
    "pronunciation": "chechom",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960299/college_terms/dissertation_ibr5vo.mp3"
  },
  {
    "key": "2257",
    "english": "Thesis",
    "bhutia": "ཉམས་ཞིབ་རྩོམ་དེབ།",
    "pronunciation": "nyamzip chomthep",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960311/college_terms/thesis_ybedc7.mp3"
  },
  {
    "key": "2258",
    "english": "Term Paper",
    "bhutia": "སློབ་ཚད་རྩོམ་ཤོག།",
    "pronunciation": "lokche chomshok",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1754387717/college_terms/term_paper_stmtt5.mp3"
  },
  {
    "key": "2259",
    "english": "Data",
    "bhutia": "གཞི་ཐོ།",
    "pronunciation": "shitoh",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960299/college_terms/data_lt9ont.mp3"
  },
  {
    "key": "2260",
    "english": "Data Analysis",
    "bhutia": "གཡོག་གཞིའི་དཔྱད་པོ།",
    "pronunciation": "yuzeye chepoh",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960298/college_terms/data_analysis_b1q3ei.mp3"
  },
  {
    "key": "2261",
    "english": "Data Mining",
    "bhutia": "གཞི་ཐོའི་མཛོད་སྟོན།",
    "pronunciation": "sithuye zethem",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960298/college_terms/data_mining_cfluhx.mp3"
  },
  {
    "key": "2262",
    "english": "Primary Data/Source",
    "bhutia": "གཞི་ཐོའི་མ་དཔེ།",
    "pronunciation": "sithuye mapay",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1754387847/college_terms/primary_data_source_fd4y4n.mp3"
  },
  {
    "key": "2263",
    "english": "Secondary Data/Source",
    "bhutia": "གཞི་ཐོའི་བུ་དཔེ།",
    "pronunciation": "sithuye phupay",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1754387898/college_terms/secondary_data_source_rpsszi.mp3"
  },
  {
    "key": "2264",
    "english": "Keywords",
    "bhutia": "གནད་ཚིག།",
    "pronunciation": "nechig",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1754387973/college_terms/keywords_ye8gsn.mp3"
  },
  {
    "key": "2265",
    "english": "Footnote",
    "bhutia": "ཞམ་མཆན།",
    "pronunciation": "syemchen",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960304/college_terms/footnote_xahcfk.mp3"
  },
  {
    "key": "2266",
    "english": "Endnote",
    "bhutia": "མཇུག་མཆན།",
    "pronunciation": "zugchen",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960300/college_terms/endnote_sdexxr.mp3"
  },
  {
    "key": "2267",
    "english": "Archive",
    "bhutia": "ཡིག་མཛོད།",
    "pronunciation": "yugche",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960297/college_terms/archive_ga5zlp.mp3"
  },
  {
    "key": "2268",
    "english": "Article",
    "bhutia": "རྩམ་ཡིག།",
    "pronunciation": "chomik",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960298/college_terms/article_loalwr.mp3"
  },
  {
    "key": "2269",
    "english": "Classification",
    "bhutia": "སྡེ་ཚན་དབྱེ་བ།",
    "pronunciation": "dechen chepa",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960297/college_terms/classificaiton_mv0c5u.mp3"
  },
  {
    "key": "2270",
    "english": "Confidentiality",
    "bhutia": "གསང་རྒྱ།",
    "pronunciation": "sangya",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960298/college_terms/confidentiality_sv1kdf.mp3"
  },
  {
    "key": "2271",
    "english": "Credibility",
    "bhutia": "ཆ་བཞག་འོས་པོ།",
    "pronunciation": "chaza yepo",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1754388121/college_terms/credibility_jivwx0.mp3"
  },
  {
    "key": "2272",
    "english": "Field Studies",
    "bhutia": "ཕྱི་སྦྱོང།",
    "pronunciation": "phichong",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960303/college_terms/field_studies_tfbscg.mp3"
  },
  {
    "key": "2273",
    "english": "Quantitative",
    "bhutia": "གྱངས་འབོར་ཚད་ལྡན།",
    "pronunciation": "khyongpar cheden",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960304/college_terms/quantitative_f01jvk.mp3"
  },
  {
    "key": "2274",
    "english": "Qualitative",
    "bhutia": "སྤུས་ལྡན། or སྤུས་དག་ལྡན་བོ།",
    "pronunciation": "phuden or phudadenbo",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960305/college_terms/qualitative_ymr4lb.mp3"
  },
  {
    "key": "2275",
    "english": "Pre-Review",
    "bhutia": "ཆ་ཛ�ྐྱེན་ཡང་ཞིབ།",
    "pronunciation": "chakyang yangzip",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1754388506/college_terms/pre-review_dkaw1r.mp3"
  },
  {
    "key": "2276",
    "english": "Principal Investigator",
    "bhutia": "དཔྱད་ཞིབ་འགོ་དཔོན།",
    "pronunciation": "chezip gophen",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960304/college_terms/principal_investigator_ky9s1a.mp3"
  },
  {
    "key": "2277",
    "english": "Questionaire",
    "bhutia": "དྲི་བའི་རེའུ་མིག།",
    "pronunciation": "thiway ruimik",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960305/college_terms/questionaire_zwh90n.mp3"
  },
  {
    "key": "2278",
    "english": "Random Sampling",
    "bhutia": "ཐོབ་ཚད་ཚོད་ལྟ།",
    "pronunciation": "thopchey cheta",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960306/college_terms/random_sampling_w35vbr.mp3"
  },
  {
    "key": "2279",
    "english": "Reference",
    "bhutia": "ཁུངས་འདྲེན་ཡིག་ཆ།",
    "pronunciation": "khungden yigcha",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960311/college_terms/reference_ggf0rg.mp3"
  },
  {
    "key": "2280",
    "english": "Summary",
    "bhutia": "སྙིང་བསྡུས།",
    "pronunciation": "ningdi",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1754388683/college_terms/summary_dm0zhq.mp3"
  },
  {
    "key": "2281",
    "english": "Synopsis",
    "bhutia": "དཔྱད་རྩོམ་དོན་སྙིང།",
    "pronunciation": "chechom thening",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1754388838/college_terms/synopsis_hrheyr.mp3"
  },
  {
    "key": "2282",
    "english": "Compilation",
    "bhutia": "ཕྱོགས་སྒྲིག།",
    "pronunciation": "chokdig",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960298/college_terms/compilation_rzlo1b.mp3"
    
  },
  {
    "key": "2283",
    "english": "Assignment",
    "bhutia": "ནང་སྦྱོང་གཡོག་འགན།",
    "pronunciation": "nanzung yogen",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960298/college_terms/assignment_kpns9s.mp3"
  },
  {
    "key": "2284",
    "english": "Title",
    "bhutia": "མཚན་བརྗོད།",
    "pronunciation": "chenzey",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960312/college_terms/title_recypv.mp3"
  },
  {
    "key": "2285",
    "english": "Topic",
    "bhutia": "འགོ་བརྗོད།",
    "pronunciation": "gozey",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960312/college_terms/topic_iw2ves.mp3"
  },
  {
    "key": "2286",
    "english": "Acknowledgment",
    "bhutia": "ཐུགས་རྗེ་ལེགས་གསོ།",
    "pronunciation": "thuje leksoh",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1754389016/college_terms/acknowledgement_s3mvf4.mp3"
  },
  {
    "key": "2287",
    "english": "Content",
    "bhutia": "དཀར་ཆག།",
    "pronunciation": "karcha",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1754389080/college_terms/content_urdlzb.mp3https://res.cloudinary.com/dmcov966p/video/upload/v1754389080/college_terms/content_urdlzb.mp3https://res.cloudinary.com/dmcov966p/video/upload/v1754389080/college_terms/content_urdlzb.mp3"
  },
  {
    "key": "2288",
    "english": "Theme",
    "bhutia": "བརྫོད་གཞི།",
    "pronunciation": "jezi",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960311/college_terms/theme_pjihj0.mp3"
  },
  {
    "key": "2289",
    "english": "Writeup",
    "bhutia": "རྩོམ་བསྡུས།",
    "pronunciation": "chomdi",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960312/college_terms/writeup_gukfrj.mp3"
  },
  {
    "key": "2290",
    "english": "Tools and Technique",
    "bhutia": "ཡོས་ཆས་དང་ཇུས་ལམ།",
    "pronunciation": "yuche thang jilam",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960312/college_terms/tools_and_techniques_rlz1pk.mp3"
  },
  {
    "key": "2291",
    "english": "Glossary",
    "bhutia": "དཀའ་ཚིག་རིའུ་མིག།",
    "pronunciation": "kachik rumik",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1754389221/college_terms/glossary_bfituf.mp3"
  },
  {
    "key": "2292",
    "english": "Format",
    "bhutia": "བཟོ་བཀོད།",
    "pronunciation": "zokay",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960297/college_terms/format_wjtetj.mp3"
  },
  {
    "key": "2293",
    "english": "Index",
    "bhutia": "བརྡ་སྟོན་རིའུ་མིག།",
    "pronunciation": "daten ryumik",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960297/college_terms/index_iej49q.mp3"
  },
  {
    "key": "2294",
    "english": "Progress Report",
    "bhutia": "གོང་སྐེད་ཞུ་ཡིག།",
    "pronunciation": "khongkey shuik",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960304/college_terms/progress_report_zv0lah.mp3"
  },
  {
    "key": "2295",
    "english": "Course works",
    "bhutia": "ཉམས་ཞིབ་སྔོན་འགྲོ།",
    "pronunciation": "nyamship nyendoh",
    "audiolink": "https://res.cloudinary.com/dmcov966p/video/upload/v1742960297/college_terms/coursework_pjqn7c.mp3"
  }

];

export default Data;
