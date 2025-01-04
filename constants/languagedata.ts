const birds = require("@/assets/images/birds.jpg");
const colors = require("@/assets/images/colors_.jpg");
const drinks = require("@/assets/images/drinks_.jpg");
const days = require("@/assets/images/days.jpg");
const family = require("@/assets/images/family_.jpg");
const fruits = require("@/assets/images/fruits.jpg");
const vegetables = require("@/assets/images/vegetables.jpg");
const flowers = require("@/assets/images/flowers.jpg");
const months = require("@/assets/images/months.jpg");
const meat = require("@/assets/images/meat.jpg");
const mountain = require("@/assets/images/mountain.jpg");
const medical = require("@/assets/images/medical terms.jpg");
const fooditems = require("@/assets/images/fooditems.jpg");
const attire = require("@/assets/images/attire.png");
const places = require("@/assets/images/places.jpg");
const festivals = require("@/assets/images/festivals.jpg");
const departments = require("@/assets/images/departments.jpg");
const planets = require("@/assets/images/planets.jpg");

interface DataProps {
  key: string;
  english: string;
  bhutia: string;
  pronunciation: string;
  audiolink: string;
}
interface TopicsProps {
  id: string;
  english: string;
  bhutia: string;
  pronunciation: string;
  imageLink: any;
  data: Array<DataProps>;
}
const LanguageData: Array<TopicsProps> = [
  /*{
    id: "1",
    english: "Customes",
    bhutia: "ཆ་ལུགས་",
    pronunciation: "chya-lug",
    imageLink: attire,
    data: [
      {
        english: "chad",
        bhutia: "leb",
        pronunciation: "bal",
        audiolink: "",
      },
    ],
  },
  {
    id: "2",
    english: "Food",
    bhutia: "ཟན་",
    pronunciation: "zaen",
    imageLink: fooditems,
    data: [
      {
        english: "red",
        bhutia: "lal",
        pronunciation: "lala",
        audiolink: "",
      },
    ],
  },
  {
    id: "3",
    english: "Drinks",
    bhutia: "མཆོད་",
    pronunciation: "chhoth",
    imageLink: drinks,
    data: [
      {
        english: "drinks",
        bhutia: "piyo",
        pronunciation: "bind",
        audiolink: "",
      },
    ],
  },
  {
    id: "4",
    english: "Meat",
    bhutia: "ཤ་",
    pronunciation: "sha",
    imageLink: meat,
    data: [
      {
        english: "fam",
        bhutia: "maf",
        pronunciation: "buoe",
        audiolink: "",
      },
    ],
  },
  {
    id: "5",
    english: "Mountains",
    bhutia: "གངས་ཆེན་",
    pronunciation: "gangchen",
    imageLink: mountain,
    data: [
      {
        english: "fam",
        bhutia: "maf",
        pronunciation: "buoe",
        audiolink: "",
      },
    ],
  },
  {
    id: "6",
    english: "Places",
    bhutia: "ལུང་པོ་",
    pronunciation: "lungpo",
    imageLink: places,
    data: [
      {
        english: "fam",
        bhutia: "maf",
        pronunciation: "buoe",
        audiolink: "",
      },
    ],
  },
  {
    id: "7",
    english: "Festivals",
    bhutia: "དུས་ཆེན་",
    pronunciation: "dhue chen",
    imageLink: festivals,
    data: [
      {
        english: "fam",
        bhutia: "maf",
        pronunciation: "buoe",
        audiolink: "",
      },
    ],
  },
  
  {
    id: "9",
    english: "Fruits",
    bhutia: "འབྲས་བུ་",
    pronunciation: "dresbu",
    imageLink: fruits,
    data: [
      {
        english: "fam",
        bhutia: "maf",
        pronunciation: "buoe",
        audiolink: "",
      },
    ],
  },
  {
    id: "10",
    english: "Departments",
    bhutia: "ལེ་ལག་",
    pronunciation: "lelag",
    imageLink: departments,
    data: [
      {
        english: "fam",
        bhutia: "maf",
        pronunciation: "buoe",
        audiolink: "",
      },
    ],
  },
  {
    id: "11",
    english: "Days",
    bhutia: "བདུན་ཕྲག་",
    pronunciation: "dun-thak",
    imageLink: days,
    data: [
      {
        english: "fam",
        bhutia: "maf",
        pronunciation: "buoe",
        audiolink: "",
      },
    ],
  },
  {
    id: "12",
    english: "Birds",
    bhutia: "བྱ༹་",
    pronunciation: "bya",
    imageLink: birds,
    data: [
      {
        english: "Yellow Bird",
        bhutia: "maf",
        pronunciation: "buoe",
        audiolink:
          "https://res.cloudinary.com/dmcov966p/video/upload/v1734933261/birds/yellow_bird_hearja.mp4",
      },
    ],
  },
  {
    id: "13",
    english: "Vegetables",
    bhutia: "ཚོདམ་",
    pronunciation: "tshom",
    imageLink: vegetables,
    data: [
      {
        english: "fam",
        bhutia: "maf",
        pronunciation: "buoe",
        audiolink: "",
      },
    ],
  },
  {
    id: "14",
    english: "Medical Terms",
    bhutia: "བཤག་བཅོས་ ཐ་སྙད་",
    pronunciation: " shagchos tha-nyath",
    imageLink: medical,
    data: [
      {
        english: "fam",
        bhutia: "maf",
        pronunciation: "buoe",
        audiolink: "",
      },
    ],
  },
  {
    id: "15",
    english: "Planets",
    bhutia: "གཟའ་",
    pronunciation: "zaa",
    imageLink: planets,
    data: [
      {
        english: "fam",
        bhutia: "maf",
        pronunciation: "buoe",
        audiolink: "",
      },
    ],
  },
  {
    id: "16",
    english: "Months",
    bhutia: "ཧོཪ་ཟླ་",
    pronunciation: "horda",
    imageLink: months,
    data: [
      {
        english: "fam",
        bhutia: "maf",
        pronunciation: "buoe",
        audiolink: "",
      },
    ],
  },
  */
  {
    id: "1",
    english: "Color",
    bhutia: "ཧོཪ་ཟླ་",
    pronunciation: "horda",
    imageLink: colors,
    data: [
      {
        key: "1",
        english: "Black",
        bhutia: "ནག་ཀོ།",
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
        bhutia: "ཁ་ནག་ཀོ།",
        pronunciation: "kha nag-ko",
        audiolink:
          "https://res.cloudinary.com/dmcov966p/video/upload/v1735101036/colors/dark_qe22cu.mp4",
      },
      {
        key: "6",
        english: "Dark Blue",
        bhutia: "མཐིང་།",
        pronunciation: "thing",
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
        bhutia: "ལི་ཁྲི།",
        pronunciation: "li-tri",
        audiolink:
          "https://res.cloudinary.com/dmcov966p/video/upload/v1735101038/colors/orange_obczup.mp4",
      },
      {
        key: "11",
        english: "Pink",
        bhutia: "ཟིང་སྐྱ།དམར་ལོབ།",
        pronunciation: "zin-kya/mar-lop",
        audiolink:
          "https://res.cloudinary.com/dmcov966p/video/upload/v1735101039/colors/pink_nj6ume.mp4",
      },
      {
        key: "12",
        english: "Purple",
        bhutia: "མུ་མེན། རྡོ་ལམ་ཀྱག།",
        pronunciation: "mu-men / dolom kyag",
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
    ],
  },
  {
    id: "2",
    english: "Flowers",
    bhutia: "མེ་ཏོག་",
    pronunciation: "me-tog",
    imageLink: flowers,
    data: [
      {
        key: "1",
        english: "Cherry",
        bhutia: "ཁམ་ཀྱིགས་ མེ་ཏོག།",
        pronunciation: "kham-kyig met-tok",
        audiolink:
          "https://res.cloudinary.com/dmcov966p/video/upload/v1735103105/flowers/cherry_flower_ougtah.mp4",
      },
      {
        key: "2",
        english: "Jasmine",
        bhutia: "བ་སྤུ་ མེ་ཏོག།",
        pronunciation: "ba-pu met-tok",
        audiolink:
          "https://res.cloudinary.com/dmcov966p/video/upload/v1735103105/flowers/jasmine_s28fou.mp4",
      },
      {
        key: "3",
        english: "Lily",
        bhutia: "སྟག་གཟིག་ མེ་ཏོག།",
        pronunciation: "tag-zig me-tok",
        audiolink:
          "https://res.cloudinary.com/dmcov966p/video/upload/v1735103104/flowers/lily_z3bfuy.mp4",
      },
      {
        key: "4",
        english: "Lotus",
        bhutia: "པདྨ་ མེ་ཏོག།",
        pronunciation: "pad-ma",
        audiolink:
          "https://res.cloudinary.com/dmcov966p/video/upload/v1735103105/flowers/lotus_nwgj3x.mp4",
      },
      {
        key: "5",
        english: "Marigold",
        bhutia: "མེ་ཏོག་ སེར་ཆེན།",
        pronunciation: "me-tok ser-chen",
        audiolink:
          "https://res.cloudinary.com/dmcov966p/video/upload/v1735103105/flowers/marigold_zan2rs.mp4",
      },
      {
        key: "6",
        english: "Rose",
        bhutia: "རྒྱ་སྲི་  མེ་ཏོག།",
        pronunciation: "gya-se me-tok",
        audiolink:
          "https://res.cloudinary.com/dmcov966p/video/upload/v1735103109/flowers/rose_zoi4t4.mp4",
      },
      {
        key: "7",
        english: "Saffron",
        bhutia: "ཁ་ཆེ་ ཤ་སྐམ།",
        pronunciation: "kha-che sha-kam",
        audiolink:
          "https://res.cloudinary.com/dmcov966p/video/upload/v1735103109/flowers/saffron_ilucxa.mp4",
      },
      {
        key: "8",
        english: "Sunflower",
        bhutia: "ཉི་མའི་ མེ་ཏོག།",
        pronunciation: "nyi-mai me-tok",
        audiolink:
          "https://res.cloudinary.com/dmcov966p/video/upload/v1735103110/flowers/sunflower_kv46ub.mp4",
      },
      {
        key: "9",
        english: "Trumpet",
        bhutia: "རག་དུང་ མེ་ཏོག།",
        pronunciation: "ra-dung me-tok",
        audiolink:
          "https://res.cloudinary.com/dmcov966p/video/upload/v1735103111/flowers/trumpet_flower_vuqrfb.mp4",
      },
      {
        key: "10",
        english: "Water Lily",
        bhutia: "ཀུ་མུད།",
        pronunciation: "ku-mud",
        audiolink:
          "https://res.cloudinary.com/dmcov966p/video/upload/v1735103112/flowers/water_lily_whnr8o.mp4",
      },
    ],
  },
  {
    id: "3",
    english: "Place",
    bhutia: "ལུང་པོ་",
    pronunciation: "lung-po",
    imageLink: places,
    data: [
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
        bhutia: "ལྕགས་གུང་།",
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
        bhutia: "ར་བོང་།",
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
        english: "Rongpo",
        bhutia: "རིང་ཕུ་།",
        pronunciation: "rong-phu",
        audiolink:
          "https://res.cloudinary.com/dmcov966p/video/upload/v1735802429/places/rangpo_lnyzfw.mp4",
      },
      {
        key: "84",
        english: "Singtham",
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
        bhutia: "ཟར་ཡོང་།",
        pronunciation: "zhar-yong",
        audiolink:
          "https://res.cloudinary.com/dmcov966p/video/upload/v1735802435/places/soreng_ajmekr.mp4",
      },
      {
        key: "88",
        english: "Sichey",
        bhutia: "ཚེར་ཅག་སྒང་།",
        pronunciation: "tser-chag gang",
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
    ],
  },
  {
    id: "4",
    english: "Vegetables",
    pronunciation: "tshom",
    bhutia: "ཚོདམ་",
    imageLink: vegetables,
    data: [
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
    ],
  },
  {
    id: "5",
    bhutia: "ཆ་ལུགས་",
    pronunciation: "chya-lug",
    english: "Dress",
    imageLink: attire,
    data: [
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
          "https://res.cloudinary.com/dmcov966p/video/upload/v1735891472/cultural%20attire/shoes_jvtbl3.mp4",
      },
    ],
  },
  {
    id: "6",
    bhutia: "བདུན་ཕྲག་",
    pronunciation: "dun-thak",
    english: "WeekDays",
    imageLink: days,
    data: [
      {
        key: "178",
        english: "Sunday",
        bhutia: "གཟའ་ ཉི་མ།",
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
        bhutia: "གཟའ་ པསངས།",
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
    ],
  },
  {
    id: "7",
    english: "Months",
    pronunciation: "dha-o",
    bhutia: "",
    imageLink: months,
    data: [
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
    ],
  },
];

export default LanguageData;
