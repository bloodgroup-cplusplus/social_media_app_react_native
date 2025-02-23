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
    pronunciation: "nagsuk",
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
    bhutia: "མོ་རྒྱན།དཀར་དན།",
    pronunciation: "mo-gyen/karden",
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
    bhutia: "ཐ་ར།",
    pronunciation: "thara",
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
    bhutia: "ཟི་ལིང་ ། ཀུན་དགའ་ ཞྭ་མོ།",
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
    bhutia: "མུ་ཏེག་ ཕ༹ྱེང་བ་།",
    pronunciation: "mutik phyem-bu",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891469/cultural%20attire/pearl_garland_m0egtx.mp4",
  },
  {
    key: "107",
    english: "Red Coral / Coral ",
    bhutia: "བ༹ྱུར།",
    pronunciation: "bhyur",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891470/cultural%20attire/red_coral_or_coral_lso9rx.mp4",
  },
  {
    key: "108",
    english: "Shirt",
    bhutia: "འོན་དར་ཛི།",
    pronunciation: "hon-dar-tsi",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891472/cultural%20attire/shirt_jhrso3.mp4",
  },
  {
    key: "109",
    english: "Shoes",
    bhutia: "ཞབས་ལྷམ།",
    pronunciation: "shap lham",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735891472/cultural%20attire/shoes_jvtbl3.mp4",
  },
  {
    key: "110",
    english: "White cotton jeans",
    bhutia: "ག་ད།མོ་སྐེད།",
    pronunciation: "ga-da/mo-kyet",
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
  /*
  {
    key: "153",
    english: "Boiled pork meat",
    bhutia: "ཕག་ཤ་ རྒྱ་རི།",
    pronunciation: "phag-sha gya-ri",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735103112/flowers/water_lily_whnr8o.mp4",
  },
  {
    key: "154",
    english: "Boiled beef meat",
    bhutia: "གླང་ཤ་རྒྱ་རི།",
    pronunciation: "lang-sha gya-ri",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735103112/flowers/water_lily_whnr8o.mp4",
  },
  {
    key: "155",
    english: "A butter and cheese mixed dish",
    bhutia: "མར་ཁུ།",
    pronunciation: "mar-khu",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735103112/flowers/water_lily_whnr8o.mp4",
  },
  {
    key: "156",
    english: "Cheese Pickle",
    bhutia: "ཕྱུ་ཨ་ཀར།",
    pronunciation: "chu-akar",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735103112/flowers/water_lily_whnr8o.mp4",
  },
  {
    key: "157",
    english: "Cheese broth",
    bhutia: "ཕྱུ་ལྟོ་ ཁུ།",
    pronunciation: "chu-to-ku",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735103112/flowers/water_lily_whnr8o.mp4",
  },
  {
    key: "158",
    english: "Heads meat",
    bhutia: "མགོ་ཤ།",
    pronunciation: "mgo-sha",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735103112/flowers/water_lily_whnr8o.mp4",
  },
  {
    key: "159",
    english: "Legs Meat",
    bhutia: "རྐང་ཅུང།",
    pronunciation: "kang-chung",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735103112/flowers/water_lily_whnr8o.mp4",
  },
  {
    key: "160",
    english: "Lhopos traditional cookies made of rice floor",
    bhutia: "བཞེས་རོ།",
    pronunciation: "bzae-ro",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735103112/flowers/water_lily_whnr8o.mp4",
  },
  {
    key: "161",
    english: "Lhopos traditional snack made of rice floor",
    bhutia: "ཁ་ཟས།",
    pronunciation: "kha-zae",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735103112/flowers/water_lily_whnr8o.mp4",
  },
  {
    key: "162",
    english: "Veg roll",
    bhutia: "ཁུ་སྒྲིལ།",
    pronunciation: "khu-dri",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735103112/flowers/water_lily_whnr8o.mp4",
  },
  {
    key: "163",
    english: "Mixed Veg rice",
    bhutia: "ཚོད་ཉོག།",
    pronunciation: "tsod-nyog",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735103112/flowers/water_lily_whnr8o.mp4",
  },
  {
    key: "164",
    english: "Millet chapati",
    bhutia: "མིན་ལྕ་ཁུ།",
    pronunciation: "min-chang khu",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735103112/flowers/water_lily_whnr8o.mp4",
  },
  {
    key: "165",
    english: "Nettle Broth",
    bhutia: "ཟོ་ཅག་ཚོདམ་ ཡང་ན་ ཟྭོ་ཚོད།",
    pronunciation: "so-chag",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735103112/flowers/water_lily_whnr8o.mp4",
  },
  */

  {
    key: "166",
    english: "January",
    bhutia: "ཟླ་བོ་ དང་པོ།",
    pronunciation: "dha-o dhang-po",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802892/months/january_rvpoyk.mp4",
  },
  {
    key: "167",
    english: "February",
    bhutia: "ཟླ་བོ་ གཉིས་པོ།",
    pronunciation: "dha-o nyi-po",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802891/months/feburary_u6gifk.mp4",
  },
  {
    key: "168",
    english: "March",
    bhutia: "ཟླ་བོ་ གསུམ་པོ།",
    pronunciation: "dha-o sum-po",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802895/months/march_f7v4rb.mp4",
  },
  {
    key: "169",
    english: "April",
    bhutia: "ཟླ་བོ་ བཞི་པོ།",
    pronunciation: "dha-o zi-po",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802888/months/april_lgywc2.mp4",
  },
  {
    key: "170",
    english: "May",
    bhutia: "ཟླ་བོ་ ལྔ་པོ།",
    pronunciation: "dha-o nga-po",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802896/months/may_f9a79e.mp4",
  },
  {
    key: "171",
    english: "June",
    bhutia: "ཟླ་བོ་ དྲུག་པོ།",
    pronunciation: "dha-o drug-po",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802894/months/june_s0dvv0.mp4",
  },
  {
    key: "172",
    english: "July",
    bhutia: "ཟླ་བོ་ བདུན་པོ།",
    pronunciation: "dha-o dun-po",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802893/months/july_duuggr.mp4",
  },
  {
    key: "173",
    english: "August",
    bhutia: "ཟླ་བོ་ བརྒྱོད་པོ།",
    pronunciation: "dha-o gyad-po",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802889/months/august_dczbiu.mp4",
  },
  {
    key: "174",
    english: "September",
    bhutia: "ཟླ་བོ་ དགུ་པོ།",
    pronunciation: "dha-o gu-po",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802900/months/september_uprhyw.mp4",
  },
  {
    key: "175",
    english: "October",
    bhutia: "ཟླ་བོ་ བཅུ་པོ།",
    pronunciation: "dha-o chu-po",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802899/months/october_rzbndq.mp4",
  },
  {
    key: "176",
    english: "November",
    bhutia: "ཟླ་བོ་ བཅུ་གཅིག་པོ།",
    pronunciation: "dha-o chu-chig-po",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735802898/months/november_laty0t.mp4",
  },

  {
    key: "177",
    english: "December",
    bhutia: "ཟླ་བོ་ བཅུ་གཉིས་པོ།",
    pronunciation: "dha-o chu-nyi-po",
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
  /*
  {
    key: "211",
    english: "Beef",
    bhutia: "གླང་ཤ།",
    pronunciation: "lang-sha",
    audiolink: "",
  },
  {
    key: "212",
    english: "Buffalo Meat",
    bhutia: "མ་ཧེ་ཤ།",
    pronunciation: "ma-he sha",
    audiolink: "",
  },
  {
    key: "213",
    english: "Chicken",
    bhutia: "བྱ༹་ཤ།",
    pronunciation: "bya-sha",
    audiolink: "",
  },
  {
    key: "214",
    english: "Dry Meat",
    bhutia: "ཤ་སྐམ།",
    pronunciation: "sha-kam",
    audiolink: "",
  },
  {
    key: "215",
    english: "Fish",
    bhutia: "ཉ་ཤ།",
    pronunciation: "nya-sha",
    audiolink: "",
  },
  {
    key: "216",
    english: "Grilled Meat",
    bhutia: "ཤ་བསྲེགས་བསྲེགས་ཀོ།",
    pronunciation: "sha-seg-seg-ko",
    audiolink: "",
  },
  {
    key: "217",
    english: "Liver",
    bhutia: "མཆིན་པོ།",
    pronunciation: "chin-po",
    audiolink: "",
  },
  {
    key: "218",
    english: "Mutton",
    bhutia: "ར་ཤ།",
    pronunciation: "ra-sha",
    audiolink: "",
  },
  {
    key: "219",
    english: "Pork",
    bhutia: "ཕག་ཤ།",
    pronunciation: "pag-sha",
    audiolink: "",
  },
  {
    key: "220",
    english: "Sausage",
    bhutia: "རྒྱུ་མ།",
    pronunciation: "gyu-ma",
    audiolink: "",
  },
  {
    key: "221",
    english: "Yak",
    bhutia: "གཡག་ཤ།",
    pronunciation: "yak-sha",
    audiolink: "",
  },
  */

  {
    key: "222",
    english: "Barley",
    pronunciation: "ney",
    bhutia: "ནས།",
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
    bhutia: "མིན་ལྕག།",
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
    pronunciation: "dal",
    bhutia: "རྡྰལ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735894673/grains%20and%20cereals/dal_d8u5kj.mp4",
  },
  /*
  {
    key: "232",
    english: "Head",
    pronunciation: "mgo",
    bhutia: "མགོ།",
    audiolink: "",
  },
  {
    key: "233",
    english: "Hair",
    pronunciation: "kya",
    bhutia: "སྐྱ།",
    audiolink: "",
  },
  {
    key: "234",
    english: "Eye",
    pronunciation: "mig",
    bhutia: "མིག།",
    audiolink: "",
  },
  {
    key: "235",
    english: "Eye-lash",
    pronunciation: "mig-cham pu",
    bhutia: "མིག་ལྕམ་སྤུ།",
    audiolink: "",
  },
  {
    key: "236",
    english: "Eye-brow",
    pronunciation: "mig-po",
    bhutia: "མིག་སྤོ།",
    audiolink: "",
  },
  {
    key: "237",
    english: "Eyelids",
    pronunciation: "mig-pag",
    bhutia: "མིག་ལྤགས།",
    audiolink: "",
  },

  {
    key: "238",
    english: "Ear",
    pronunciation: "nam-chog",
    bhutia: "རྣམ་གཅོག།",
    audiolink: "",
  },
  {
    key: "239",
    english: "Nose",
    pronunciation: "nha-gu",
    bhutia: "སྣ་གུག",
    audiolink: "",
  },
  {
    key: "240",
    english: "Mouth",
    bhutia: "ཁ།",
    pronunciation: "kha",
    audiolink: "",
  },
  {
    key: "241",
    english: "Teeth",
    bhutia: "སྲོ།",
    pronunciation: "so",
    audiolink: "",
  },
  {
    key: "242",
    english: "Tongue",
    bhutia: "ལྕེ།",
    pronunciation: "chae",
    audiolink: "",
  },
  {
    key: "243",
    english: "Face",
    bhutia: "གདོང།",
    pronunciation: "dhong",
    audiolink: "",
  },
  {
    key: "244",
    english: "Neck",
    bhutia: "སྐེ།",
    pronunciation: "ke",
    audiolink: "",
  },
  {
    key: "245",
    english: "Chest",
    bhutia: "བ༹ྱང་ཁོག།",
    pronunciation: "byang khog",
    audiolink: "",
  },
  {
    key: "246",
    english: "Hand",
    bhutia: "ལག་ཀོ།",
    pronunciation: "lag-ko",
    audiolink: "",
  },
  {
    key: "247",
    english: "Shoulder",
    bhutia: "དཔུང་པོ།",
    pronunciation: "pung-po",
    audiolink: "",
  },
  {
    key: "248",
    english: "Armpit",
    bhutia: "མཆན་ཁུང།",
    pronunciation: "chen-khung",
    audiolink: "",
  },
  {
    key: "249",
    english: "Arm",
    bhutia: "ལག་ཉ།",
    pronunciation: "lag-nya",
    audiolink: "",
  },
  {
    key: "250",
    english: "Elbow",
    bhutia: "ཀྱི་ལིང།",
    pronunciation: "kyi-ling",
    audiolink: "",
  },
  {
    key: "251",
    english: "Wrist",
    bhutia: "ལག་ཚིགས།",
    pronunciation: "lag-tshig",
    audiolink: "",
  },
  {
    key: "252",
    english: "Fingers",
    bhutia: "མཛུབ་མོ།",
    pronunciation: "dzub-mu",
    audiolink: "",
  },
  {
    key: "253",
    english: "Nails",
    bhutia: "སེན་མོ།",
    pronunciation: "sen-mo",
    audiolink: "",
  },
  {
    key: "254",
    english: "Backside",
    bhutia: "རྒྱབ།",
    pronunciation: "gyap",
    audiolink: "",
  },
  {
    key: "255",
    english: "Waist",
    bhutia: "སྐེད་པོ།",
    pronunciation: "kyed-po",
    audiolink: "",
  },
  {
    key: "256",
    english: "Leg",
    bhutia: "རྐང་པོ།",
    pronunciation: "khang-po",
    audiolink: "",
  },
  {
    key: "257",
    english: "Thigh",
    bhutia: "བརླེ་དུམ།",
    pronunciation: "lae-dum",
    audiolink: "",
  },
  {
    key: "258",
    english: "Knee",
    bhutia: "པུས་མོ།",
    pronunciation: "pue-mo",
    audiolink: "",
  },
  {
    key: "259",
    english: "Calf",
    bhutia: "བ༹ྱ་ཉ།",
    pronunciation: "bhya-nya",
    audiolink: "",
  },
  {
    key: "260",
    english: "Shin",
    bhutia: "ངར་མདོང།",
    pronunciation: "ngar-dhung",
    audiolink: "",
  },
  {
    key: "261",
    english: "Feet",
    bhutia: "རྐང་མཐིལ།",
    pronunciation: "khang-thil",
    audiolink: "",
  },*/
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
    bhutia:
      "ལྷན་རྒྱས་ཀྱི་ མཚན་ལོ་ གན་ཞུ་བོ་ གནང་བདོ་ ལགས? ཡང་ན་ རང་གི་ མིང་གན་བོ?",
    pronunciation:
      "lhen gya ki tsen lo gan zhu bo nang do la ? / rang-gi ming gan-bo?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892377/conversation/what_is_your_name_chsgvs.mp4",
  },
  {
    key: "461",
    english: "My name is Thupten",
    bhutia: "ངའི་མིང་ ཐུབ་བསྟན་ ཨིན་ལགས།",
    pronunciation: "ngai ming thupten in la.",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892309/conversation/my_name_is_thupten_ju9jj1.mp4",
  },
  {
    key: "462",
    english: "How are you ?",
    pronunciation: "ku-zug zang bo, lhen gya ga tem yod la?",
    bhutia: "སྐུ་གཟུགས་ བཟང་བོ། ལྷན་རྒྱས་ ག་ལྟེམ་ ཡོད་ལགས?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892262/conversation/how_are_you_cean45.mp4",
  },
  {
    key: "463",
    english: "I am fine thank you",
    pronunciation: "la lem yod la thug je che",
    bhutia: "ལ་ ལེགམ་ ཡོད་ ལགས། ཐུགས་རྗེ་ ཆེ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892273/conversation/i_am_fine_thank_you_vwi9fy.mp4",
  },
  {
    key: "464",
    english: "Where are you from ?",
    pronunciation: "ga zug po nang khen bo la?",
    bhutia: "ག་བཞུགས་པོ་ གནང་མཁན་བོ་ ལགས?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892390/conversation/where_are_you_from_htw2sm.mp4",
  },
  {
    key: "465",
    english: "I am from Bhutan",
    pronunciation: "(nga druk lae in la",
    bhutia: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892273/conversation/I_am_from_bhutan_ja4zeq.mp4",
  },
  {
    key: "466",
    english: "How old are you ?",
    pronunciation: "lhen gya gon lo ga tsod zhes po nang do",
    bhutia: "ལྷན་རྒྱས་ དགུང་ལོ་ ག་ཚོད་ བཞེས་པོ་ གནང་བདོ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892268/conversation/how_old_are_you_ku4kvl.mp4",
  },
  {
    key: "467",
    english: "I am sixteen years old",
    pronunciation: "nga lo chu-drug in la",
    bhutia: "ང་ ལོ་བཙུ་དྲུག་ ཨིན་ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892270/conversation/i_am_16_years_old_ptthyw.mp4",
  },
  {
    key: "468",
    english: "What is your job?",
    pronunciation: "lhen gya chag lae gan nang do la ?",
    bhutia: "ལྷན་རྒྱས་ ཕྱག་ལས་ གན་གནང་ བདོ་ ལགས?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892377/conversation/what_is_your_job_flyv4r.mp4",
  },
  {
    key: "469",
    english: "I am a teacher",
    pronunciation: "nga lopen in la",
    bhutia: "ང་ སློབ་དཔོན་ ཨིན་ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892270/conversation/i_am_a_teacher_knsbvh.mp4",
  },
  {
    key: "470",
    english: "What is your phone number",
    pronunciation: "lhen gya ki shal par ang gyang ga tsod bo-la?",
    bhutia: "ལྷན་རྒྱས་ཀྱི་ ཞལ་བར་ ཨང་གྱངས་ ག་ཚད་ འབོ་ལགས?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892378/conversation/what_is_your_phone_number_h6qp91.mp4",
  },
  {
    key: "471",
    english: "It is  900296667",
    pronunciation: "Di gu led kor nyi nyi gu drug gsum dang bdun in",
    bhutia: "འདི་ ༩༠༠༢༩༦༦༦༧ ཨིན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892378/conversation/what_is_your_phone_number_h6qp91.mp4",
  },
  {
    key: "472",
    english: "Where are you now?",
    pronunciation: "Lhen gya da to ga zud dod yod",
    bhutia: "ལྷན་རྒྱས་ ད་ལྟ་ ག་བཞུགས་སྡོད་ཡོད?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892393/conversation/where_are_you_now_yptcr9.mp4",
  },
  {
    key: "473",
    english: "I am in Sikkim",
    pronunciation: "Nga da ta denjong lo yad la ",
    bhutia: "ང་ ད་ལྟ་ འབྲས་ལྫོངས་ལོ་ ཡོད་ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892277/conversation/i_am_in_sikkim_u154cq.mp4",
  },
  {
    key: "474",
    english: "How is your mother",
    pronunciation: "Amla ku zug lem yod ka la ?",
    bhutia: "ཨམ་ལགས་ སྐུ་གཟུགས་ ལེགམ་ ཡོད་ཀ་ ལགས?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892263/conversation/how_is_your_mother_qldnbu.mp4",
  },
  {
    key: "475",
    english: "She is very well, thank you",
    pronunciation: "la leb lem yod thug je che",
    bhutia: "ལགས་ ལེབ་ལེགམ་ ཡོད། ཐུགས་རྗེ་ཆེ།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892325/conversation/she_is_very_well_thank_you_wd9rls.mp4",
  },
  {
    key: "476",
    english: "Where is your school",
    pronunciation: "lhen gys ki lop dra yod-po la?",
    bhutia: "ལྷོན་རྒྱས་ཀྱི་ སློབ་གྲྭ་ ག་ཡོད་པོ་ ལགས?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892399/conversation/where_is_your_school_eg98je.mp4",
  },
  {
    key: "477",
    english: "It's in the centre of the town",
    pronunciation: "ngae ki lop dra di trom gi bu na yod la",
    bhutia: "ངེ་ཀི་ སློབ་གྲྭ་འདི་ ཁྲོམ་གྱི་ དབུས་ན་ ཡོད་ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892304/conversation/it_s_in_centre_of_the_town_zhswgd.mp4",
  },
  {
    key: "478",
    english: "Where do you live?",
    pronunciation: "lehn gya ga zup po nang do ?",
    bhutia: "ལྷན་རྒྱས་ ག་བཞུགས་པོ་ གནང་བདོ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892394/conversation/where_do_you_live_i9eebd.mp4",
  },
  {
    key: "479",
    english: "I live in a rented house",
    pronunciation: "nga khim-lha tab ti dod yod la ",
    bhutia: "ང་ ཁྱིམ་གླ་ བཏབ་ཏི་ སྡོད་ཡོད་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892296/conversation/i_live_in_rented_house_uuggwj.mp4",
  },
  {
    key: "480",
    english: "Where do you work?",
    pronunciation: "lhen gya chag lae ga nang do?",
    bhutia: "ལྷན་རྒྱས་ ཕྱག་ལས་ ག་ན་ གནང་བདོ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892395/conversation/where_do_you_work_kkit19.mp4",
  },
  {
    key: "481",
    english: "I work in a radio station",
    pronunciation: "nga lung trin khang nang yog kyap to in la.",
    bhutia: " ང་ རླུང་འཕྲིན་ཁང་ ནང་ གཡོག་རྐྱབས་ཏོ་ ཨིན་ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892300/conversation/i_work_at_a_radio_station_gpstxh.mp4",
  },
  {
    key: "482",
    english: "What are your names ?",
    pronunciation: "lhen gya tsui taen gan gan in nam ?",
    bhutia: "ལྷན་རྒྱས་ཙུའི་ མཚན་གན་གན་ ཨིན་ནམ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892341/conversation/what_are_your_names_iwivsc.mp4",
  },
  {
    key: "483",
    english: "Our names are Tshering, Sonam and Dorjee",
    pronunciation: "nga chai ming tsu Tshering, Sodnam dang Dorje in la.",
    bhutia: "ང་ཅའི་ མིང་ཙུ་ ཚེ་རིང་ ,བསོད་ནམས་ དང་ རྡོ་རྗེ་ ཨིན་ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892317/conversation/our_names_are_Tshering_sonam_and_dorjee_himo5r.mp4",
  },
  {
    key: "484",
    english: "What sports do you like ?",
    pronunciation: "lhen gya tsedm ga di-lo gaa la ?",
    bhutia: "ལྷན་རྒྱས་ རྩེདམ་ ག་འདི་ལོ་ དགའ་ལགས?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892379/conversation/what_sports_do_you_like_zdtt0n.mp4",
  },
  {
    key: "485",
    english: "I like football and volleyball",
    pronunciation: "nga kang-tsed po-ling dang lag-tsed po-li ga la",
    bhutia: "ང་ རྐང་རྩེད་ པོ་ལོ་ དང་ ལག་རྩེད་ པོ་ལོ་ དགའ་ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892292/conversation/i_like_football_and_volleyball_ydj02y.mp4",
  },
  {
    key: "486",
    english: "What drink do you like ?",
    pronunciation: "lhen gay gan chod gos no la ?",
    bhutia: "ལྷན་རྒྱས་ གན་མཚོད་དགོས་ མནོ་ལགས?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892368/conversation/what_drink_do_you_like_mgnfh3.mp4",
  },
  {
    key: "487",
    english: "I like coffee",
    pronunciation: "nga ko phi (tsig-ja) ga la",
    bhutia: "ང་ ཀོ་ཕི་  ༼   ཚིག་ཇ།༽   དགའ་ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892291/conversation/I_like_coffee_v82hth.mp4",
  },
  {
    key: "488",
    english: "How many languages do you speak ?",
    pronunciation: "lhen gay ki khed rig ga tsod khen bo nang la ",
    bhutia: "ལྷན་རྒྱས་ཀྱིས་ སྐད་རིགས་ ག་ཚོད་ མཁན་བོ་ གནང་ལགས?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892264/conversation/how_many_languages_do_you_speak_hu1mw3.mp4",
  },
  {
    key: "489",
    english: "I can speak three languages : Bhutia English and Nepali",
    pronunciation: "nga khed rig sum she la lho khed dang in ji dang ne pa li",
    bhutia:
      "ངས་ སྐད་རིགས་ གསུམ་ ཤེས་ལགས། ལྷོ་སྐད། དབྱིན་ཇི་ དང ནེ་པ་ལི་ ཡང་ན ཕྱུག་སྐད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892280/conversation/i_can_speak_three_languages_bhutia_English_and_nepali_br9nmw.mp4",
  },
  {
    key: "490",
    english: "Do you speak english?",
    pronunciation: "lhen gay in ji kyapo nang ga la",
    bhutia: "ལྷན་རྒྱས་ དབྱིན་ཇི་ རྐྱབསཔོ་ གནང་ག་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892247/conversation/do_you_speak_english_bsildy.mp4",
  },
  {
    key: "491",
    english: "Yes I do ",
    pronunciation: "la kyap to yin la",
    bhutia: "ལགས་ རྐྱབས་ཏོ་ ཨིན་ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892404/conversation/yes_i_do_b7bfrl.mp4",
  },
  {
    key: "492",
    english: "Do you have a German Car?",
    pronunciation: "lhen gay tsa jor-mon chib khor yod ka la",
    bhutia: "ལྷན་རྒྱས་རྩར་ ཇོར་མོན་ ཆིབས་འཁོར་ ཡོད་ཀ་ ལགས?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892245/conversation/do_you_have_a_german_car_fftllg.mp4",
  },
  {
    key: "493",
    english: "No, I don't . I have an Indian car",
    pronunciation: "med la . nga lo Indian khorlo yod la . ",
    bhutia: "མེད་ལགས། ང་ལོ་ ཨིན་ཌིན་ ༼  རྒ་གར་༽   འཁོར་ལོ་ ཡོད་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892313/conversation/no_i_have_an_Indian_car_xmokyc.mp4",
  },
  {
    key: "494",
    english: "Do you drink Sikkimese beer ?",
    pronunciation: "lhen gay drejong ki chang chod po nang ga ?",
    bhutia: "ལྷན་རྒྱས་ འབྲས་ལྗོངས་ཀྱི་ ཆང་ མཆོད་པོ་ གནང་ག?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892241/conversation/do_you_drink_Sikkimese_beer_cgxud8.mp4",
  },
  {
    key: "495",
    english: "Yes I do ",
    pronunciation: "la kyap to yin la",
    bhutia: "ལགས་ རྐྱབས་ཏོ་ ཨིན་ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892404/conversation/yes_i_do_b7bfrl.mp4",
  },
  {
    key: "496",
    english: "No I don't",
    pronunciation: "men la. thung bo med la",
    bhutia: "མན་ལགས། འཐུང་བོ་ མེད་ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892312/conversation/no_i_don_t_chzyxy.mp4",
  },

  {
    key: "497",
    english: "How much is the Bhutia dictionary",
    pronunciation: "lho yig tsig zod chen mo di rin-gon ga tsod bo la?",
    bhutia: "ལྷན་རྒྱས་ ཚིག་མཛོད་ ཆེན་མོ་ འདི་ རིན་གོང་ ག་ཚོད་བོ་ ལགས?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892266/conversation/how_much_is_the_bhutia_dictionary_aglotu.mp4",
  },
  {
    key: "498",
    english: "It's 100 Rs per book",
    pronunciation: "chig lo gya thampa in la",
    bhutia: "གཅིག་ལོ་ བརྒྱ་ཐམས་པ་ ཨིན་ལགས། ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892303/conversation/it_s_100_rs_per_book_rit2as.mp4",
  },
  {
    key: "499",
    english: "What time is it, please?",
    pronunciation: "chu tsod gat tsod bo la ?",
    bhutia: "ཆུ་ཚོད་ ག་ཚོད་བོ་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892386/conversation/what_time_is_it_please_qsfa4z.mp4",
  },
  {
    key: "500",
    english: "It is nine o' clock",
    pronunciation: "chud tsod gu bay la",
    bhutia: "ཆུ་ཚོད་ དགུ་སྦད་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892302/conversation/its_9_o_clock_bq8jle.mp4",
  },
  {
    key: "501",
    english: "What time do you go to school ?",
    pronunciation: "lhen gay chu tsod ga tsod lo lop dra zon bo nang do la ?",
    bhutia: "ལྷན་རྒྱས་ ཆུ་ཚོད་ ག་ཚོད་ལོ་ སློབ་གྲྭ་ བྱོན་བོ་ གནང་བདོ་  ལགས?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892383/conversation/what_time_do_you_go_to_school_thowus.mp4",
  },
  {
    key: "502",
    english: "I go to school at 8:30",
    pronunciation: "nga chu tsod gyad dang phyad lo gyu do in la",
    bhutia: "ང་ ཆུ་ཚོད་ བརྒྱད་ དང་ ཕྱེ༹ད་ལོ་ རྒྱུ་བདོ་ ཨིན་ལགས?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892286/conversation/i_go_to_school_at_8_30_es5fqm.mp4",
  },
  {
    key: "503",
    english: "What time do you get up",
    pronunciation: "lhen gay chu tsod ga tsod lo ya zhang po nang do la?",
    bhutia: "ལྷན་རྒྱས་ ཆུ་ཚོད་ ག་ཚོད་ལོ་ ཡ་ བཞེངས་པོ་ གནང་བདོ་ ལགས?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892380/conversation/what_time_do_you_get_up_y0m23j.mp4",
  },
  {
    key: "504",
    english: "I get up at six o' clock",
    pronunciation: "nga chu tsod drug lo lang to in la",
    bhutia: "ང་ ཆུ་ཚོད་ དྲུག་ལོ་ ལོང་ཏོ་  ཨིན་ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892283/conversation/i_get_up_at_6_o_clock_ouqlbq.mp4",
  },
  {
    key: "505",
    english: "What time do you have breakfast?",
    pronunciation:
      "lhen gay chu tsod ga tsod lo dro pai dro zha shae po nang do la",
    bhutia:
      "ལྷན་རྒྱས་  ཆུ་ཚོད་ ག་ཚོད་ལོ་ དྲོ་པའི་ དྲོ་ཟ་ བཞེས་པོ་ གནང་དོ་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892384/conversation/what_time_do_you_have_your_breakfast_vvymji.mp4",
  },
  {
    key: "506",
    english: "I have breakfast at seven o' clock",
    pronunciation: "nga chu tsod dun lo dro pai dro zha zha do in la",
    bhutia: "ང་ ཆུ་ཚོད་ བདུན་ ལོ་ དྲོ་པའི་ དྲོ་ཟ་ ཟ་བདོ་ ཨིན་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892289/conversation/i_have_breakfast_at_seven_o_clock_wpll9m.mp4",
  },
  {
    key: "507",
    english: "Do you like tea?",
    pronunciation: "lhen gay sol jag a gaa?",
    bhutia: "ལྷན་རྒྱས་ གསོལ་ཇ་ དགའ་ག།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892245/conversation/do_you_like_tea_upt3yj.mp4",
  },
  {
    key: "508",
    english: "Yes, I do",
    pronunciation: "la,gaa la",
    bhutia: "ལགས། དགའ་ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892403/conversation/yes_i_do_like_tea_kqbqay.mp4",
  },
  {
    key: "509",
    english: "Do you go to school by bus?",
    pronunciation: "lhen gay lop dra lo khor chen na zon do la ?",
    bhutia: "ལྷན་རྒྱས་ སློབ་གྲྭ་ ལོ་ འཁོར་ཆེན་ ན་ བྱོན་དོ་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892243/conversation/do_you_go_to_school_by_bus_o5tgo9.mp4",
  },
  {
    key: "510",
    english: "No, I don't I go by taxi",
    pronunciation: "men la. nga lha khor chung chung na gyu do in la",
    bhutia: "མན་ལགས། ང་ གླ་འཁོར་ ཆུང་ཆུང་ན་ རྒྱུ་བདོ་ ཨིན་ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892310/conversation/no_i_don_t_i_go_by_taxi_puoboq.mp4",
  },
  {
    key: "511",
    english: "Do you hage a dog?",
    pronunciation: "lhen gay lo kyi yod k la?",
    bhutia: "ལྷན་རྒྱས་ལོ་ ཁྱི་ ཡོད་ཀ་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892244/conversation/do_you_have_a_dog_u52fhw.mp4",
  },
  {
    key: "512",
    english: "Yes I do",
    pronunciation: "la.yod la",
    bhutia: "ལགས་ ཡོད་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892404/conversation/yes_i_do_b7bfrl.mp4",
  },
  {
    key: "513",
    english: "Do you get up early?",
    pronunciation: "lhen gay dro pa ma la shang to la ?",
    bhutia: "ལྷན་རྒྱད་ དྲོ་པ་ མ་ལགས་ བཞེངས་ཏོ་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892242/conversation/do_you_get_up_early_ofg0vi.mp4",
  },
  {
    key: "514",
    english: "Yes I do ",
    pronunciation: "la in la",
    bhutia: "ལགས། ཨིན་ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892404/conversation/yes_i_do_b7bfrl.mp4",
  },
  {
    key: "515",
    english: "What day is it today?",
    pronunciation: "da ring za gan bo la ?",
    bhutia: "ད་རིང་ གཟའ་ གན་འབོ་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892342/conversation/what_day_is_it_today_xjnqt0.mp4",
  },
  {
    key: "516",
    english: "Today is Monday",
    pronunciation: "da ring za dha o in la",
    bhutia: "ད་རིང་ གཟའ་ ཟླ་བོ་ ཨིན་ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892336/conversation/today_is_monday_gt51bu.mp4",
  },
  {
    key: "517",
    english: "What day is it tomorrow?",
    pronunciation: "tho rang za gan bo la ?",
    bhutia: "ཐོ་རང་ གཟའ་ གན་བོ་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892343/conversation/what_day_is_tomorrow_o00tws.mp4",
  },
  {
    key: "518",
    english: "Tomorrow is Tuesday",
    pronunciation: "tho rang za mig mar in la",
    bhutia: "ཐོ་རང་ གཟའ་ དམིག་མར་ ཨིན་ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892337/conversation/tomorrow_is_tuesday_tgrhne.mp4",
  },
  {
    key: "519",
    english: "What days do you go to school?",
    pronunciation: "lhen gay lop dra lo za ga di na zon bo nang do la",
    bhutia: "ལྷན་རྒྱས་ སློབ་གྲྭ་ ལོ་ གཟའ་ ག་འདི་ན་ བྱོན་བོ་ གནང་བདོ་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892345/conversation/what_days_do_you_go_to_school_blhgfr.mp4",
  },
  {
    key: "520",
    english: "On Monday, Tuesday, Wednesday, Thursday and Friday",
    pronunciation:
      "nga za dha o mig mar lhag ko phur bu dang pa sang lo gyu do in la",
    bhutia:
      "ང་ གཟའ་ ཟླ་བོ་ དམིག་མར་ ལྷག་ཀོ་ ཕུར་བུ་ དང་ སྤ་སངས་ལོ་  རྒྱུ་བདོ་ ཨིན་ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892316/conversation/on_Monday_Tuesday_Wednesday_thursday_and_Friday_ci2zpf.mp4",
  },
  {
    key: "521",
    english: "What days are the weekends",
    pronunciation: "za ga di di dun thrag gi zug bo la ",
    bhutia: "གཟའ་ ག་འདི་ འདི་ བདུན་ ཕྲག་གི་ མཇུག་བོ་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892344/conversation/what_days_are_the_weekends_os28v6.mp4",
  },
  {
    key: "522",
    english: "It's on Saturday",
    pronunciation: "za pempo in la",
    bhutia: "གཟའ་ སྤེན་པོ་ ཨིན་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892306/conversation/its_on_saturday_zt24aa.mp4",
  },
  {
    key: "523",
    english: "What days do you like?",
    pronunciation: "lhen gay za ga di gaa la?",
    bhutia: "ལྷན་རྒྱས་ གཟའ་ ག་འདི་ དགའ་ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892346/conversation/what_days_do_you_like_r5evq0.mp4",
  },
  {
    key: "524",
    english: "I like Monday and Friday",
    pronunciation: "nga za dha o dang pa sang gaa la",
    bhutia: "ང་ གཟའ་ ཟླ་བོ་ དང་ སྤ་སངས་  དགའ་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892293/conversation/i_like_Monday_and_Friday_mxn6pu.mp4",
  },
  {
    key: "525",
    english: "What days you do not like",
    pronunciation: "lhen gay za ga di min gaa la",
    bhutia: "ལྷན་རྒྱས་ གཟའ་ ག་འདི་ མིན་དགའ་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892367/conversation/what_days_do_you_not_like_qxptyh.mp4",
  },
  {
    key: "526",
    english: "I don't like Wednesday and Saturday",
    pronunciation: "nga za lhag ko dang pen po min gaa la",
    bhutia: "ང་ གཟའ་ ལྷག་ཀོ་ དང་ སྤེན་པོ་ མིན་དགའ་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892282/conversation/i_dont_like_Wednesday_and_saturday_u3bbcy.mp4",
  },
  {
    key: "527",
    english: "When do you have Bhutia Subject",
    pronunciation: "lho yig lop tsen nam yod-po la",
    bhutia: "ལྷོ་ཡིག་ སློབ་ཚན་ ནམ་ཡོད་པོ་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892389/conversation/when_do_you_have_bhutia_subjects_tjewce.mp4",
  },
  {
    key: "528",
    english: "We have Bhutia subject on Tuesday",
    pronunciation: "nga chag lo lho yig lop tsen za mig mar na yod la",
    bhutia: "ང་ཅག་ལོ་ ལྷོ་ཡིག་ སློབ་ཚན་ གཟའ་དམིག་མར་ན་ ཡོད་ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892340/conversation/we_have_bhutia_subjects_on_tuesday_nyikpj.mp4",
  },
  {
    key: "529",
    english: "Where are you going",
    pronunciation: "lhen gay go zon bo nang do la",
    bhutia: "ལྷན་རྒྱས་ ག་ བྱོན་བོ་ གནང་དོ་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892391/conversation/where_are_you_going_fyovr2.mp4",
  },
  {
    key: "530",
    english: "I am going to the market",
    pronunciation: "nga trom lo gyu do in la",
    bhutia: "ང་ ཁྲོམ་ལོ་ རྒྱུ་བདོ་ ཨིན་ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892276/conversation/i_am_going_to_market_oom580.mp4",
  },
  {
    key: "531",
    english: "What is this?",
    pronunciation: "di gan bo la ?",
    bhutia: "འདི་ གན་ འབོ་ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892371/conversation/what_is_this_vqa6fx.mp4",
  },
  {
    key: "532",
    english: "This is a pen",
    pronunciation: "di myu gu in la",
    bhutia: "འདི་ སྨྱུ་གུ་ ཨིན་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892335/conversation/this_is_a_pen_mdpaq7.mp4",
  },
  {
    key: "533",
    english: "Where is Sikkim",
    pronunciation: "drejong ga -nang yod-po la",
    bhutia: "འབྲས་ལྗོངས་ ག་ན་ ཡོད་པོ་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892396/conversation/where_is_sikkim_o44azf.mp4",
  },
  {
    key: "534",
    english: "It's in India",
    pronunciation: "di gya gar nang sha yod la",
    bhutia: "འདི་ རྒྱ་གར་ ནང་ཤ་ ཡོད་ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892305/conversation/its_in_india_xiveqt.mp4",
  },
  {
    key: "535",
    english: "What is your address?",
    pronunciation: "lhen gay ki kha jang gan-bo la ?",
    bhutia: "ལྷན་རྒྱས་ ཀྱི་ ཁ་བྱང་ གན་འབོ་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892372/conversation/what_is_your_address_j98ebn.mp4",
  },
  {
    key: "536",
    english: "Gaylshing in West Sikkim",
    pronunciation: "ngae ki kha jang gyalshing in la",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892251/conversation/gyalshing_in_west_sikkim_k4ftrg.mp4",
    bhutia: "ངེ་ཀི་ ཁ་བྱང་ རྒྱལ་ཞིང་ ཨིན་ལགས།",
  },
  {
    key: "537",
    english: "Do you play football?",
    pronunciation: "len gay khang tsed po lo tsed bo nang ga la?",
    bhutia: "ལྷན་རྒྱས་ རྐང་རྩེད་ པོ་ལོ་ རྩེད་བོ་ གནང་ག་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892246/conversation/do_you_play_football_jikjsn.mp4",
  },
  {
    key: "538",
    english: "Yes I play football",
    pronunciation: "ngae tsed do in la",
    bhutia: "ང་ རྩེད་དོ་ ཨིན་ ལགས",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892405/conversation/yes_i_play_football_tin3x3.mp4",
  },
  {
    key: "539",
    english: "Where is Tshering from?",
    pronunciation: "tshering ga zug po nang khen bo la?",
    bhutia: "ཚེ་རིང་ ག་ བཞུགས་པོ་ གནང་མཁན་འབོ་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892398/conversation/where_is_Tshering_from_dnqjht.mp4",
  },
  {
    key: "540",
    english: "He is from Gangtok in East Sikkim",
    pronunciation: "khong shar drejong gang-tok lae bad la",
    bhutia: "ཁོང་ ཤར་འབྲས་ལྗོངས་ སྒང་ཏོག་ལས་ སྦད་ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892260/conversation/he_s_from_Gangtok_in_Sikkim_bvvzqg.mp4",
  },
  {
    key: "541",
    english: "What time do you have lunch?",
    pronunciation: "lhen gay gung tsig chu tsod ga tsod na zae po nang do bo?",
    bhutia: "ལྷན་རྒྱས་ གུང་ཚིག་ ཆུ་ཚོད་ ག་ཚོད་ན་ བཞེས་པོ་ གནང་བདོ་འབོ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892385/conversation/what_time_do_you_have_your_lunch_uvmqlz.mp4",
  },
  {
    key: "542",
    english: "I have lunch at 3:30",
    pronunciation: "nga chu tsod sum dang phyed lo za do in la",
    bhutia: "ང་ ཆུ་ཚོད་ གསུམ་ དང་ ཕྱེ༹ད་ལོ་ ཟ་བདོ་ ཨིན་ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892290/conversation/i_have_my_lunch_at_3_30_ikvrko.mp4",
  },
  {
    key: "543",
    english: "What time do you get home?",
    pronunciation:
      "lhen gay chu tsod ga tsod ba zim khang lo log zon nang do la ",
    bhutia:
      "ལྷན་རྒྱས་ ཆུ་ཚོད་ ག་ཚོད་ བར་ གཟིམ་ཁང་ལོ་ལོག་བྱོན་བོ་ གནང་བདོ་ ལགས་?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892383/conversation/what_time_do_you_go_to_home_jw7ku2.mp4",
  },
  {
    key: "544",
    english: "I go home at 3:30",
    pronunciation: "nga chu tsod sum dng phyed lo log gyu do in la",
    bhutia: "ང་ ཆུ་ཚོད་ གསུམ་ དང་ ཕྱེ༹ད་ལོ་ ལོག་རྒྱུ་བདོ་ ཨིན་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892285/conversation/i_go_to_home_at_3_30_zdwdc8.mp4",
  },
  {
    key: "545",
    english: "What time do you go to bed",
    pronunciation: "lhen gay chu tsod ba zim par zon do la",
    bhutia: "ལྷོན་རྒྱད་ ཆུ་ཚོད་  ག་ཚོད་བར་ གཟིམ་པར་ བྱོན་བདོ་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892381/conversation/what_time_do_you_go_to_bed_m8tcxv.mp4",
  },
  {
    key: "546",
    english: "I go to bed at 9 'o clock",
    pronunciation: "nga chu tsod gu lo nyl ba byu do in la",
    bhutia: "ང་ ཆུ་ཚོད་ དགུ་ལོ་ ཉལ་བ་  རྒྱུ་བདོ་ ཨིན་ལགས། ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892284/conversation/i_go_to_bed_at_9_o_clock_qqyqs5.mp4",
  },
  {
    key: "547",
    english: "How much money do you have",
    pronunciation: "lhen lo chag ngul ga tsod yo la",
    bhutia: "ལྷན་ རྒྱས་ལོ་ ཕྱགས དངུལ་ ག་ཚོད་ ཡོད་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892267/conversation/how_much_money_do_you_have_z5f9wk.mp4",
  },
  {
    key: "548",
    english: "I have 20 rupees",
    pronunciation: "nga tsar ti rug nyi shu yod la",
    bhutia: "ངའི་རྩར་ ཏི་རུག་ ཉི་ཤུ་ ཡོད་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892287/conversation/i_have_20_rupees_znjqtu.mp4",
  },
  {
    key: "549",
    english: "I did not say anything",
    pronunciation: "nge gan yang ma lab la",
    bhutia: "ངས་གན་ཡང་ མ་ལབ་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892281/conversation/i_did_not_say_anything_y6chpm.mp4",
  },
  {
    key: "550",
    english: "What is that?",
    pronunciation: "o di gan bo",
    bhutia: "ཨོ་འདི་ གན་བོ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892371/conversation/what_is_that_ygrftq.mp4",
  },
  {
    key: "551",
    english: "That is my book",
    pronunciation: "o dig nge deb in la",
    bhutia: "ཨོ་འདི་ ངའི་ དེབ་ ཨིན་ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892331/conversation/that_is_my_book_y3nvvy.mp4",
  },
  {
    key: "552",
    english: "What do you want?",
    pronunciation: "lhen gay lo gan go po la",
    bhutia: "ལྷན་རྒྱས་ལོ་ གན་ དགོས་པོ་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892367/conversation/what_do_you_want_y7ycab.mp4",
  },
  {
    key: "553",
    english: "I want a Bhutia dictionary",
    pronunciation: "nga lo lho yig tsig zod go la",
    bhutia: "ང་ ལོ་ ལྷོ་ཡིག་ ཚིག་མཛོད་ དགོས་ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892299/conversation/i_want_bhutia_dictionary_wdamwi.mp4",
  },
  {
    key: "554",
    english: "When did you come?",
    pronunciation: "lhen gay nam zon bo nang bo la ",
    bhutia: "ལྷན་རྒྱས་ ནམ་བྱོན་བོ་གནང་བོ་ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892388/conversation/when_did_you_come_z24fpl.mp4",
  },
  {
    key: "555",
    english: " I came yesterday",
    pronunciation: "nga dhang hong bo in la",
    bhutia: "ང་ མདང་ འོང་བོ་ ཨིན་ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892279/conversation/i_came_yesterday_arfrcz.mp4",
  },
  {
    key: "556",
    english: "Where are you going",
    pronunciation: "lhen gay ga na zon bo nang do la",
    bhutia: "ལྷན་རྒྱས་ ག་ན་ བྱོན་བོ་ གནང་དོ་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892392/conversation/where_are_you_going__lcb2od.mp4",
  },
  {
    key: "557",
    english: "I am going to the Monastery",
    pronunciation: "nga gon pa gyu-do in la",
    bhutia: "ང་ དགོན་པ་ རྒྱུ་བདོ་ ཨིན་ ལགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892277/conversation/i_am_going_to_the_monastry_lcsifm.mp4",
  },
  {
    key: "558",
    english: "For how long are you going?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892249/conversation/for_how_long_are_you_going_kcbioy.mp4",
    bhutia: "ལྷན་རྒྱས་ ཉིན་ ག་ ཚོད་ ཀྱི་ དོན་ལོ་  བྱོན་བོ་ གནང་བདོ་ ལགས།",
    pronunciation: "lhen gay nying ga tsod ki don lo zon bo nang do la",
  },
  {
    key: "559",
    english: "For two days",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892250/conversation/for_two_days_yrkzlm.mp4",
    bhutia: "ཉིན་ གཉིས་ཀྱི་ དོན་ལོ་ ཨིན ་ལགས།",
    pronunciation: "nyin nyi ki do lo in la",
  },
  {
    key: "560",
    english: "Bye Bye",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1735892240/conversation/bye_bye_ckwym8.mp4",
    bhutia: "ག་ལུས་ཏེ་ བྱོན་བོ་ གནང་ལགས",
    pronunciation: "khali thea chenbo na",
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
    pronunciation: "thrum-zi",
    bhutia: "གྲུམ་ཟི།",
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
    pronunciation: "sha-kam",
    bhutia: "ཤ་སྐམ།",
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
    bhutia: "ཚོད་ཉོག།",
  },
  {
    key: "1234567897",
    english: "Millet chapati",
    pronunciation: "min-chag khu",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1737022199/sikkimese%20dishes/millet_chapati_w6eda2.mp4",
    bhutia: "མིན་ལྕ་ཁུ།",
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
    pronunciation: "ra-ja-ta-ja",
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
    pronunciation: "la-ca-ta-ca",
    bhutia: "ལྕ",
    audiolink: "",
  },
  {
    key: "623",
    english: "lja",
    pronunciation: "la-ja-ta-ja",
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
    pronunciation: "ca-wazur",
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
    english: "hzwa",
    pronunciation: "zha-wazur",
    bhutia: "ཞྭ",
    audiolink: "",
  },
  {
    key: "639",
    english: "zwa",
    pronunciation: "za-wazur",
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
    pronunciation: "sha-wazur",
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
    bhutia: "གྷ",
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
    english: "ca",
    pronunciation: "ca",
    bhutia: "ཅ",
    audiolink: "",
  },
  {
    key: "651",
    english: "cha",
    bhutia: "ཆ",
    pronunciation: "cha",
    audiolink: "",
  },
  {
    key: "652",
    english: "ja",
    bhutia: "ཇ",
    pronunciation: "ja",
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
    bhutia: "ཊ",
    pronunciation: "ta",
    audiolink: "",
  },
  {
    key: "655",
    english: "tha",
    bhutia: "ཋ",
    pronunciation: "tha",
    audiolink: "",
  },
  {
    key: "656",
    english: "da",
    bhutia: "ཌ",
    pronunciation: "da",
    audiolink: "",
  },
  {
    key: "657",
    english: "dha",
    bhutia: "ཌྷ",
    pronunciation: "dha",
    audiolink: "",
  },
  {
    key: "658",
    english: "na",
    bhutia: "ཌ",
    pronunciation: "na",
    audiolink: "",
  },
  {
    key: "659",
    english: "ta",
    bhutia: "ཏ",
    pronunciation: "ta",
    audiolink: "",
  },
  {
    key: "660",
    english: "tha",
    bhutia: "ཐ",
    pronunciation: "tha",
    audiolink: "",
  },
  {
    key: "661",
    english: "na",
    bhutia: "ན",
    pronunciation: "na",
    audiolink: "",
  },
  {
    key: "662",
    english: "pa",
    bhutia: "པ",
    pronunciation: "pa",
    audiolink: "",
  },
  {
    key: "663",
    english: "pha",
    bhutia: "ཕ",
    pronunciation: "pha",
    audiolink: "",
  },
  {
    key: "664",
    english: "ba",
    bhutia: "བ",
    pronunciation: "ba",
    audiolink: "",
  },
  {
    key: "665",
    english: "bha",
    bhutia: "བྷ",
    pronunciation: "bha",
    audiolink: "",
  },
  {
    key: "666",
    english: "ma",
    bhutia: "མ",
    pronunciation: "ma",
    audiolink: "",
  },
  {
    key: "667",
    english: "tsa",
    bhutia: "ཙ",
    pronunciation: "tsa",
    audiolink: "",
  },
  {
    key: "668",
    english: "tsha",
    bhutia: "ཚ",
    pronunciation: "tsha",
    audiolink: "",
  },
  {
    key: "669",
    english: "dza",
    bhutia: "ཛ",
    pronunciation: "dza",
    audiolink: "",
  },
  {
    key: "670",
    english: "",
    bhutia: "",
    pronunciation: "",
    audiolink: "",
  },
  {
    key: "671",
    english: "wa",
    bhutia: "ཝ",
    pronunciation: "wa",
    audiolink: "",
  },
  {
    key: "672",
    english: "zha",
    bhutia: "ཞ",
    pronunciation: "zha",
    audiolink: "",
  },
  {
    key: "673",
    english: "za",
    bhutia: "ཟ",
    pronunciation: "za",
    audiolink: "",
  },
  {
    key: "674",
    english: "haa",
    bhutia: "འ",
    pronunciation: "haa",
    audiolink: "",
  },
  {
    key: "675",
    english: "ya",
    bhutia: "ཡ",
    pronunciation: "ya",
    audiolink: "",
  },
  {
    key: "676",
    english: "ra",
    bhutia: "ཪ",
    pronunciation: "ra",
    audiolink: "",
  },
  {
    key: "677",
    english: "la",
    bhutia: "ལ",
    pronunciation: "la",
    audiolink: "",
  },
  {
    key: "678",
    english: "sha",
    bhutia: "ཤ",
    pronunciation: "sha",
    audiolink: "",
  },
  {
    key: "679",
    english: "ssa",
    bhutia: "ཥ",
    pronunciation: "ssa",
    audiolink: "",
  },
  {
    key: "680",
    english: "sa",
    bhutia: "ས",
    pronunciation: "sa",
    audiolink: "",
  },
  {
    key: "681",
    english: "ha",
    bhutia: "ཧ",
    pronunciation: "ha",
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
    pronunciation: "",
    bhutia: "སོདམ་ འབོས་ཤད",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080096/at%20the%20hospital/sore_throat_emoal0.mp4",
  },
  {
    key: "783",
    english: "Shortness of Breath",
    pronunciation: "",
    bhutia: "དབུ་བསགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080096/at%20the%20hospital/shortness_of_breath_cmdif7.mp4",
  },
  {
    key: "784",
    english: "Fatigue",
    pronunciation: "",
    bhutia: "ཐང་ཆད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079551/at%20the%20hospital/fatigue_dcwr9n.mp4",
  },
  {
    key: "785",
    english: "Dry Cough",
    pronunciation: "",
    bhutia: "སམ་བསགས།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079552/at%20the%20hospital/dry_cough_racikx.mp4",
  },
  {
    key: "786",
    english: "Fever",
    pronunciation: "",
    bhutia: "དྲོད་འབར།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079552/at%20the%20hospital/fever_c45ts1.mp4",
  },
  {
    key: "787",
    english: "Incubation",
    pronunciation: "",
    bhutia: "བག་ཡུན། ནད་རྟགས་ སོན་ཡུན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079553/at%20the%20hospital/incubation_gnjesq.mp4",
  },
  {
    key: "788",
    english: "Lockdown",
    pronunciation: "",
    bhutia: "སོ་བསམས་ ནང་བཞུག",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079553/at%20the%20hospital/lockdown_cjyb3m.mp4",
  },
  {
    key: "789",
    english: "Social Distancing",
    pronunciation: "",
    bhutia: "སྱི་ཚོགས་ རྒྱང་སོད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080096/at%20the%20hospital/social_distancing_zp13vy.mp4",
  },
  {
    key: "790",
    english: "Psychiatrist",
    pronunciation: "",
    bhutia: "སྲེམས་ནད་ གསོ་བའྱི་ སྨན་པ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080096/at%20the%20hospital/psychiatrist_zdd1hk.mp4",
  },
  {
    key: "791",
    english: "Contagious",
    pronunciation: "",
    bhutia: "ཟུན་ནད།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079550/at%20the%20hospital/contagious_wmwceu.mp4",
  },
  {
    key: "792",
    english: "Epidemiologist",
    pronunciation: "",
    bhutia: "ནད་ཡམས་ བརྟག་དཔྱད་ མཁན།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079551/at%20the%20hospital/epidemiolosit_j7lxb4.mp4",
  },
  {
    key: "793",
    english: "Emergency room",
    pronunciation: "",
    bhutia: "ཚབ་ཆྲེན་ བཅོས་ཁང་།",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079550/at%20the%20hospital/emergency_room_u4qrq6.mp4",
  },
  {
    key: "794",
    english: "Sneeze",
    pronunciation: "",
    bhutia: "བྷྱི་པོ་ ཤར་ཤད",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080096/at%20the%20hospital/sneeze_tlg1rc.mp4",
  },
  {
    key: "795",
    english: "Dietician",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079552/at%20the%20hospital/Dietician_pmkjxi.mp4",
    bhutia: "བཅུས་ཟས་ མཁན།",
  },
  {
    key: "796",
    english: "Diagnosis",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079551/at%20the%20hospital/Diagnosis_w99o77.mp4",
    bhutia: "ནད་རྩ་ བཅོད་ཤད།",
  },
  {
    key: "797",
    english: "Pneumonia",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079554/at%20the%20hospital/pneumonia_gemtcd.mp4",
    bhutia: "གོ་ཚད།",
  },
  {
    key: "798",
    english: "Depression",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079551/at%20the%20hospital/depression_hxdrzl.mp4",
    bhutia: "བོ་ཕམ་ ན་རྩ།",
  },
  {
    key: "799",
    english: "Stress",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080097/at%20the%20hospital/stress_nbo1sw.mp4",
    bhutia: "སྲེམས་ནད།",
  },
  {
    key: "800",
    english: "Bacteria",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079550/at%20the%20hospital/bacteria_cadrnm.mp4",
    bhutia: "གཉྱིས་སྲེས་ ཆ་འབུ།",
  },
  {
    key: "801",
    english: "Virus",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080097/at%20the%20hospital/virus_cc1lwq.mp4",
    bhutia: "གསོན་སྲེས་ ཕྲ་འབུ།",
  },
  {
    key: "802",
    english: "Immunization",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079553/at%20the%20hospital/immunization_zedwx6.mp4",
    bhutia: "ནད་བཀག་ སྨན་སྣ།",
  },
  {
    key: "803",
    english: "Immunity",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079552/at%20the%20hospital/immunity_uqil8g.mp4",
    bhutia: "ལུས་ཟུངས།",
  },
  {
    key: "804",
    english: "Immune System",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079552/at%20the%20hospital/immune_system_rmp7nx.mp4",
    bhutia: "ལུས་ཟུངས་ ནུས་པོ།",
  },
  {
    key: "805",
    english: "Preventive medicine",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079605/at%20the%20hospital/preventive_medicine_hvvvij.mp4",
    bhutia: "སོན་འགོག་ སྨན་བཅོས།",
  },
  {
    key: "806",
    english: "Preventive Measures",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079579/at%20the%20hospital/preventive_measures_seleif.mp4",
    bhutia: "སོན་འགོག་ བཀག་ཐབ།",
  },
  {
    key: "807",
    english: "Outpatient",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079554/at%20the%20hospital/outpatient_trq7rc.mp4",
    bhutia: "ཕྱི་འོང་ ནད་པ",
  },
  {
    key: "808",
    english: "Inpatient",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079553/at%20the%20hospital/inpatient_vqylpv.mp4",
    bhutia: "ནང་སོད་ ནད་པོ",
  },
  {
    key: "809",
    english: "Intensive care unit (ICU)",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079553/at%20the%20hospital/intensive_care_unit_rjpffo.mp4",
    bhutia: "གཟབ་བཅོས་ སྲེ་ཚན།",
  },
  {
    key: "810",
    english: "Vaccine",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080097/at%20the%20hospital/vaccine_uuzdlr.mp4",
    bhutia: "སོན་འགོག་ སྨན་སྣ།",
  },
  {
    key: "811",
    english: "Ambulance",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079550/at%20the%20hospital/ambulance_pq508s.mp4",
    bhutia: "ནད་པའྱི་ འགྲུལ་འཁོར།",
  },
  {
    key: "812",
    english: "Outbreak",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079554/at%20the%20hospital/outbreak_pfbazj.mp4",
    bhutia: "ཧང་ཏོག་ དར་ཁྱབ།",
  },
  {
    key: "813",
    english: "Hand Sanitizer",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079552/at%20the%20hospital/handsanitizer_bmrwhh.mp4",
    bhutia: "རྫས་སོར་ ལག་སྲེལ།",
  },
  {
    key: "814",
    english: "Pandemic",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079554/at%20the%20hospital/pandemic_wh5otu.mp4",
    bhutia: "རྒྱ་ཁྱབ་ ནད་ཡམས། རྒྱ་ཁྱབ་ རྱིམས་ནད། རྒྱ་ཁྱབ་ རྱིམས་ར",
  },
  {
    key: "815",
    english: "Epidemic",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079550/at%20the%20hospital/epidemic_eptlk3.mp4",
    bhutia: "ནད་ཡམས། རྱིམས་ནད། རྱིམས་ར",
  },
  {
    key: "816",
    english: "Quarantine",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080096/at%20the%20hospital/quarantine_jgfuht.mp4",
    bhutia: "དབྲེར་ཕ ྲེ་ བཟུར་བཞག",
  },
  {
    key: "817",
    english: "Curfew",
    pronunciation: "",
    audiolink: "",
    bhutia: "བཀའ་འགོག ། བཀའ་རྒྱ་ དམ་བསྒྲགས། སོར་སྲུང་ དམ་དྲག",
  },
  {
    key: "818",
    english: "COVID-19",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079551/at%20the%20hospital/covid19_i6nhjo.mp4",
    bhutia: "ཏོག་དབྱིབས་ ནད་རྱིམས་ ༡༩",
  },
  {
    key: "819",
    english: "Coronavirus",
    pronunciation: "",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739079551/at%20the%20hospital/coronavirus_nb0rbu.mp4",
    bhutia: "ཏོག་ནད་ འབུ་སྱིན།",
  },
  {
    key: "820",
    english: "Are you feeling well?",
    pronunciation: "nhyngzi thangjhay gam",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739083445/at%20the%20hospital/are_you_feeling_well___qvhakp.mp3",
    bhutia: "སྙུང་གཞི་  དྭངས་ཞེ་གམ་?",
  },
  {
    key: "821",
    english: "Slightly recovered",
    pronunciation: "aatsi thrakto",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739083450/at%20the%20hospital/slightly_recovered_npexiu.mp3",
    bhutia: "ཨ་ཙི་ དྲག་ཏོ།",
  },
  {
    key: "822",
    english: "What was the illness ?",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739083825/at%20the%20hospital/what_was_the_illness_ghwyqr.mp3",
    bhutia: "གན་ སྙུང་བོ་ ཨིན་ནམ་?",
    pronunciation: "khan ngyungbo innam",
  },
  {
    key: "823",
    english: "Suffering from headache",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080193/at%20the%20hospital/suffering_from_headache_ydwsin.mp3",
    bhutia: "མགོ་ ན་སྟི།",
    pronunciation: "go nati",
  },
  {
    key: "824",
    english: "Suffering from stomach ache",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080193/at%20the%20hospital/suffering_from_stomachache_wrgyjz.mp3",
    pronunciation: "supo nati",
    bhutia: "གསུསབ་པོ་  ན་སྟི",
  },
  {
    key: "825",
    english: "Suffering from back ache ",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080199/at%20the%20hospital/suffering_from_backache_jlrg9o.mp3",
    pronunciation: "kaypo nati",
    bhutia: "སྐེད་པོ་ ན་སྟི།",
  },
  {
    key: "826",
    english: "Suffering from leg pain",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080193/at%20the%20hospital/suffering_from_leg_pain_bvpf9z.mp3",
    pronunciation: "kangpo nati",
    bhutia: "རྐང་པོ་ ན་སྟི།",
  },
  {
    key: "827",
    english: "Suffering from fever",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080198/at%20the%20hospital/suffering_from_fever_e4c5uf.mp3",
    pronunciation: "dar kyapti",
    bhutia: "འདར་རྐྱབས་སྟི།",
  },
  {
    key: "828",
    english: "Suffering from diarrohea",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080199/at%20the%20hospital/suffering_from_diarrohea_jvu4bj.mp3",
    pronunciation: "supo shyedi",
    bhutia: "གསུས་པོ་ བཤལ་སྡི།",
  },
  {
    key: "829",
    english: "Suffering from diarrohea and vomiting",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739084078/at%20the%20hospital/suffering_from_vomiting_and_dirrohea_nz131b.mp3",
    pronunciation: "shay kyug thendi",
    bhutia: "བཤལ་སྐྱུགས་ ཐོན་སྡི།",
  },
  {
    key: "830",
    english: "Suffering from fever",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080194/at%20the%20hospital/suffering_from_fever__hfzyb8.mp3",
    pronunciation: "droethba kyapti",
    bhutia: "དྲོད་འབར་ རྐྱབས་སྟི།",
  },
  {
    key: "831",
    english: "Having vomiting tendency",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080173/at%20the%20hospital/having_vomiting_tendency_vgpflu.mp3",
    pronunciation: "kyuklog zingdi",
    bhutia: "སྐྱུ་ལོག་ ཟིངས་སྡི",
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
    pronunciation: "zu yati",
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
    pronunciation: "sup ghangti",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080174/at%20the%20hospital/having_gassy_stomach_fdvjzs.mp3",
    bhutia: "གསུསབ་ འགང་སྟི།",
  },
  {
    key: "854",
    english: "Behaving abnormally",
    pronunciation: "chhotsa lohm thyentsha dhug",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080181/at%20the%20hospital/behaving_abnormally_au2ino.mp3",
    bhutia: "འཆོལ་རྩ་ ལོངམ་ ཐོན་ཚར་ འདུག།",
  },
  {
    key: "855",
    english: "Anger issues",
    pronunciation: "klung longpo bhyeth",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739085571/at%20the%20hospital/anger_issues_eh0jre.mp3",
    bhutia: "རླུང་ལོང་པོ་ སྦད།",
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
    english: "Is there an injection",
    pronunciation: "mhen khap yethpo",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739085917/at%20the%20hospital/is_there_an_injection_ssdrmb.mp3",
    bhutia: "སྨན་ གབ་ ཡོད་པོ?",
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
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080187/at%20the%20hospital/these_medicines_are_working_ndadpv.mp3",
    bhutia: "སྨན་འདིས་ ཨ་ཙི་ ཕན་དོ།",
    pronunciation: "mhendi aatsi fendoh",
  },
  {
    key: "861",
    english: "Apetite is improving these days",
    audiolink:
      "https://res.cloudinary.com/dmcov966p/video/upload/v1739080188/at%20the%20hospital/these_days_appetitie_is_imporving_ufukcz.mp3",
    bhutia: "སྨན་འདིས་ ཨ་ཙི་ ཕན་དོ།",
    pronunciation: "tharayto saam achi thanhkha taangdoh",
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
    pronunciation: "yas",
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
    pronunciation: "genkha/gyen",
    bhutia: "སྟེང་ཁ/གྱེན་།",
    audiolink: "",
  },
  {
    key: "881",
    english: "Downward",
    pronunciation: "thukhom/hoglo",
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
    audiolink: "",
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
    audiolink: "",
  },
  {
    key: "996",
    english: "Elder brother in Law",
    pronunciation: "a-chu-gyupo",
    bhutia: "ཨ་ཅུ་གྱོ་པོ།",
    audiolink: "",
  },
  {
    key: "997",
    english: "Grandson",
    pronunciation: "tsho",
    bhutia: "ཚ༹་བོ།",
    audiolink: "",
  },
  {
    key: "998",
    english: "Grand Daughter",
    pronunciation: "tsam",
    bhutia: "ཚམ།",
    audiolink: "",
  },
  {
    key: "999",
    english: "Sisters",
    pronunciation: "a-zhi-num",
    bhutia: "ཨ་ཞི་ ནུམ།",
    audiolink: "",
  },
  {
    key: "1000",
    english: "Brothers",
    pronunciation: "a-chu-puenlo",
    bhutia: "ཨ་ཅུ་ སྤུན།",
    audiolink: "",
  },
  {
    key: "1001",
    english: "Younger Uncle's Wife (Paternal)",
    bhutia: "ཨམ་ཆུང།",
    pronunciation: "am-chung",
    audiolink: "",
  },
  {
    key: "1002",
    english: "Maternal Uncle's Wife",
    pronunciation: "a-ney",
    audiolink: "",
    bhutia: "ཨ་ཉེ།",
  },
  {
    key: "1003",
    english: "Elder Uncle's Wife (Paternal)",
    pronunciation: "am-bom",
    audiolink: "",
    bhutia: "ཨམ་སྦོམ",
  },
  {
    key: "1004",
    english: "Mother's Elder Sister ",
    pronunciation: "am-bom",
    audiolink: "",
    bhutia: "ཨམ་སྦོམ",
  },
  {
    key: "1005",
    english: "Mother's Younger Sister",
    pronunciation: "am-chung",
    audiolink: "",
    bhutia: "ཨམ་ཆུང།",
  },
  {
    key: "1006",
    english: "Great GrandFather",
    pronunciation: "yang-jo",
    audiolink: "",
    bhutia: "ཡང་ཇོ།",
  },
  {
    key: "1007",
    english: "Great Grandmother",
    pronunciation: "yang-nyo",
    audiolink: "",
    bhutia: "ཡང་ཉོ།",
  },
  {
    key: "1008",
    english: "Samdhi",
    pronunciation: "nyen-den-apo",
    audiolink: "",
    bhutia: "གཉེན་མདུན་ ཨ་པོ",
  },
  {
    key: "1009",
    english: "Samdhini",
    pronunciation: "nyen-den-am",
    audiolink: "",
    bhutia: "གཉེན་མདུན་ ཨམ།",
  },
  {
    key: "1010",
    english: "Samdhini Bojyu",
    pronunciation: "nyen-den-anyo",
    audiolink: "",
    bhutia: "གཉེན་མདུན་ ཨ་ཉོ།",
  },
  {
    key: "1011",
    english: "Samdhi Baje",
    pronunciation: "nyen-de-ajo",
    audiolink: "",
    bhutia: "གཉེན་མདུན་ ཨ་ཇོ།",
  },
  {
    key: "1012",
    english: "Jethani/Dewrani",
    pronunciation: "chhasem/chhase",
    audiolink: "",
    bhutia: "ཚགས་སེམ/ཚགས་སེ།",
  },
  {
    key: "1013",
    english: "Saru Daju/ Saru Bhai",
    pronunciation: "chhazen",
    audiolink: "",
    bhutia: "ཚགས་རྒན།",
  },
  {
    key: "1014",
    english: "Phu-phu/Bhadaini",
    pronunciation: "nemchen",
    audiolink: "",
    bhutia: "ནེམ་ཙན།",
  },
  {
    key: "1015",
    english: "Maternal Uncle's Daughter and Paternal Aunt's Daughter",
    audiolink: "",
    bhutia: "ཞོང་ཙན།",
    pronunciation: "shongchen",
  },
  {
    key: "1016",
    english: "Sali/Nanda",
    audiolink: "",
    bhutia: "སྙིདམ།",
    pronunciation: "nethm",
  },
  {
    key: "1017",
    english: "Salo/Dewar",
    audiolink: "",
    bhutia: "ཀུད་པོ།",
    pronunciation: "ke-pu",
  },
  {
    key: "1018",
    english: "Husband",
    audiolink: "",
    bhutia: "ཕོ་རྒྱག།",
    pronunciation: "phu-gya",
  },
  {
    key: "1019",
    english: "Wife",
    audiolink: "",
    bhutia: "མོ་བུད།",
    pronunciation: "mo-bi",
  },
  {
    key: "1020",
    english: "Husband/Wife",
    audiolink: "",
    bhutia: "བཟའ་ཀོ།",
    pronunciation: "zakhu",
  },
  {
    key: "1021",
    english: "Bhawju/Dewar",
    audiolink: "",
    bhutia: "ཡོང་ཀུད།",
    pronunciation: "youngi",
  },
  {
    key: "1024",
    english: "Vena/Salo",
    audiolink: "",
    bhutia: "མག་ཀུད།",
    pronunciation: "go-ki",
  },
  {
    key: "1025",
    english: "Bhawju/Nanda",
    audiolink: "",
    bhutia: "ནེ་སྙེད།",
    pronunciation: "ney-nedh",
  },
  {
    key: "1026",
    english: "Vena/Sali",
    audiolink: "",
    bhutia: "མག་ཀོ་ སྙིདམ།",
    pronunciation: "mako-nhim/mako-nhyien",
  },
  {
    key: "1027",
    english: "Badam",
    audiolink: "ba-dam",
    bhutia: "བ་དམ།",
    pronunciation: "",
  },
];

export default Data;
