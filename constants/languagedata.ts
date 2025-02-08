const birds = require("@/assets/images/birds.jpg");
const colors = require("@/assets/images/colors_.jpg");
const grains = require("@/assets/images/grains.jpg");
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
const attire = require("@/assets/images/attire.jpg");
const places = require("@/assets/images/places.jpg");
const festivals = require("@/assets/images/festivals.jpg");
const departments = require("@/assets/images/departments.jpg");
const planets = require("@/assets/images/planets.jpg");
const digits = require("@/assets/images/bhutia_digits.jpg");
const designation = require("@/assets/images/designation.jpg");
const conversations = require("@/assets/images/conversation_again.jpg");
const tones = require("@/assets/images/tones.jpg");
const military = require("@/assets/images/military.jpg");

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
  {
    id: "0",
    english: "Tones",
    bhutia: "ཚིག་གདངས་",
    pronunciation: "tsiggangs",
    imageLink: tones,
    data: [
      {
        key: "1",
        pronunciation:
          "Plosives- sound that 'pop' out of mouth like 'p' in 'pop'",
        english: "p",
        bhutia: "པ",
        audiolink: "",
      },
      {
        key: "2",
        pronunciation: "'t' as in stop ",
        english: "t",
        bhutia: "ཏ",
        audiolink: "",
      },
      {
        key: "3",
        pronunciation: "'k' as in skill",
        english: "k",
        bhutia: "ཀ",
        audiolink: "",
      },
      {
        key: "4",
        pronunciation: "'pʰ' as in pin",
        english: "pʰ",
        bhutia: "ཕ",
        audiolink: "",
      },
      {
        key: "5",
        pronunciation: "'tʰ' as in top",
        english: "tʰ",
        bhutia: "ཐ",
        audiolink: "",
      },
      {
        key: "6",
        pronunciation: "'kʰ' as in kite",
        english: "kʰ",
        bhutia: "ཁ",
        audiolink: "",
      },
      {
        key: "7",
        pronunciation: "'b' as in bat",
        english: "b",
        bhutia: "བ",
        audiolink: "",
      },
      {
        key: "8",
        pronunciation: " 'd' as in dog",
        english: "d",
        bhutia: "ད",
        audiolink: "",
      },
      {
        key: "9",
        pronunciation: "'g' as in go",
        english: "g",
        bhutia: "ག",
        audiolink: "",
      },
      {
        key: "10",
        pronunciation:
          "Affricates - like plosive but end like a hiss 'ts' as in cats",
        english: "ts",
        bhutia: "ཙ",
        audiolink: "",
      },
      {
        key: "11",
        pronunciation: "'tɕ' as in cheese",
        english: "tɕ",
        bhutia: "ཅ",
        audiolink: "",
      },
      {
        key: "12",
        pronunciation: "'tsʰ' as in hats off",
        english: "tsʰ",
        bhutia: "ཚ",
        audiolink: "",
      },
      {
        key: "13",
        pronunciation: "'tɕʰ' as in choose",
        english: "tɕʰ",
        bhutia: "ཆ",
        audiolink: "",
      },
      {
        key: "14",
        pronunciation: "'dz' as in kids",
        english: "dz",
        bhutia: "ཛ",
        audiolink: "",
      },
      {
        key: "15",
        pronunciation: "'dʑ' as in jeep",
        english: "dʑ",
        bhutia: "ཇ",
        audiolink: "",
      },
      {
        key: "16",
        pronunciation:
          "fricatives- don't stop airflow completely but seqeeze it through mouth like s in 'snake'",
        english: "s",
        bhutia: "ས",
        audiolink: "",
      },
      {
        key: "17",
        pronunciation: "'ɕ' as in she",
        english: "ɕ",
        bhutia: "ཤ",
        audiolink: "",
      },
      {
        key: "18",
        pronunciation: "'z' as in zebra",
        english: "z",
        bhutia: "ཟ",
        audiolink: "",
      },
      {
        key: "19",
        pronunciation: "'ʑ' as in genre",
        english: "ʑ",
        bhutia: "ཞ",
        audiolink: "",
      },
      {
        key: "20",
        pronunciation:
          "Nasals- these sounds come out through nose instead of mouth like 'm' in moon",
        english: "m",
        bhutia: "མ",
        audiolink: "",
      },
      {
        key: "21",
        pronunciation: "'n' as in net",
        english: "n",
        bhutia: "ན",
        audiolink: "",
      },
      {
        key: "22",
        pronunciation: "'ɲ' as in onion",
        english: "ɲ",
        bhutia: "ཉ",
        audiolink: "",
      },
      {
        key: "23",
        pronunciation: "'ŋ' as in sing",
        english: "ŋ",
        bhutia: "ང",
        audiolink: "",
      },
      {
        key: "24",
        pronunciation: "laterals - like 'l' in light",
        english: "l",
        bhutia: "ལ",
        audiolink: "",
      },
      {
        key: "25",
        pronunciation: "rhotics - like  'r' in red",
        english: "r",
        bhutia: "ར",
        audiolink: "",
      },
      {
        key: "26",
        pronunciation: "central approximants gliding sounds like 'y' in yes",
        english: "y",
        bhutia: "ཡ",
        audiolink: "",
      },
      {
        key: "27",
        pronunciation: "Vowels- 'i' like bee",
        english: "i",
        bhutia: "ཨི",
        audiolink: "",
      },
      {
        key: "28",
        pronunciation: "like 'e' in bet",
        english: "e",
        bhutia: "ཨེ",
        audiolink: "",
      },
      {
        key: "29",
        pronunciation: " like 'ɛ' like bear",
        audiolink: "",
        bhutia: "ཨེའི",
        english: "ɛ",
      },
      {
        key: "30",
        pronunciation: " like 'a' like car",
        audiolink: "",
        bhutia: "ཨ",
        english: "a",
      },
      {
        key: "31",
        pronunciation: "like 'o' like go",
        audiolink: "",
        bhutia: "ཨོ",
        english: "o",
      },
      {
        key: "32",
        pronunciation: "like 'u' in blue",
        audiolink: "",
        bhutia: "ཨུ",
        english: "u",
      },
      {
        key: "33",
        pronunciation: "like bird (British)",
        audiolink: "",
        bhutia: "ཨོའི",
        english: "ø",
      },
      {
        key: "34",
        pronunciation: "like about",
        bhutia: "ཨའི",
        english: "ɐ",
        audiolink: "",
      },
    ],
  },
  {
    id: "1",
    english: "Colors",
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
    english: "Places",
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
    bhutia: "ཧོཪ་ཟླ་",
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
  {
    id: "8",
    bhutia: "ཁྱིམ་ཚང",
    pronunciation: "khyim-chang",
    english: "Family",
    imageLink: family,
    data: [
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
    ],
  },
  {
    id: "10",
    bhutia: "འབྲས་བུ་",
    pronunciation: "dresbu",
    english: "Fruits",
    imageLink: fruits,
    data: [
      {
        key: "126",
        english: "Apple",
        bhutia: "ཀུ་ཤུ།",
        pronunciation: "kushu",
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
        bhutia: "སཀྱེས་སྡོང།",
        pronunciation: "kae-dhong",
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
        bhutia: "སྐྱེ་ལྡང་རྡོང་མ།",
        pronunciation: "kae-dhang dhog-ma",
        audiolink:
          "https://res.cloudinary.com/dmcov966p/video/upload/v1735891933/fruits/fig_rwzgmb.mp4",
      },
      {
        key: "134",
        english: "Guava",
        bhutia: "བེབས་སི།",
        pronunciation: "bheb-sa / bal-si / am-ba",
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
        bhutia: "འབེས་པེ།",
        pronunciation: "bis-pae",
        audiolink:
          "https://res.cloudinary.com/dmcov966p/video/upload/v1735891938/fruits/lemon_ficirn.mp4",
      },
      {
        key: "142",
        english: "Mango",
        bhutia: "ཨམྲ་བི།",
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
        bhutia: "སྦར།",
        pronunciation: "bar",
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
        bhutia: "འབྲི་ཏ་ས་འཛིན།",
        pronunciation: "drita sa-zin",
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
    ],
  },
  {
    id: "11",
    bhutia: "དུས་ཆེན་",
    pronunciation: "dhue-chen",
    english: "Festivals",
    imageLink: festivals,
    data: [
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
        bhutia: "གུ་རུ་ དྲག་དམར།",
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
        bhutia: "འདེབས་ར་གླིང་།",
        pronunciation: "band-da",
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
    ],
  },
  {
    id: "12",
    english: "Grains",
    pronunciation: "dru",
    bhutia: "འབྲུ་",
    imageLink: grains,
    data: [
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
    ],
  },
  {
    id: "13",
    bhutia: "གྲངས་ཁ་",
    pronunciation: "drang-kha",
    english: "Numbers",
    imageLink: digits,
    data: [
      {
        key: "263",
        english: "0",
        pronunciation: "lekhar",
        bhutia: "ལེས་ཁོར།",
        audiolink: "",
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
    ],
  },
  {
    id: "14",
    english: "Birds",
    pronunciation: "bya",
    bhutia: "བྱ༹་",
    imageLink: birds,
    data: [
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
    ],
  },
  {
    id: "15",
    bhutia: "ལེ་ལག་",
    pronunciation: "le lag",
    english: "Departments",
    imageLink: departments,
    data: [
      {
        key: "343",
        english: "Women and Child Development Department",
        bhutia: "བུམ་ དང་ བོ་ཙོའི་ ཡར་སྲེད་ ལྲེ་ལག ",
        pronunciation: "phum to phormi yargay le lag",
        audiolink:
          "https://res.cloudinary.com/dmcov966p/video/upload/v1736249131/Departments/women_and_child_development_department_nkjco8.mp4",
      },
    ],
  },
  {
    id: "16",
    english: "Drinks",
    bhutia: "མཆོད་",
    pronunciation: "chhoth",
    imageLink: drinks,
    data: [
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
    ],
  },
  {
    id: "17",
    bhutia: "ཤ།",
    pronunciation: "sha",
    english: "meat",
    imageLink: meat,
    data: [
      {
        key: "561",
        english: "Beef",
        bhutia: "གླང་ཤ།",
        pronunciation: "lang-sha",
        audiolink:
          "https://res.cloudinary.com/dmcov966p/video/upload/v1737021101/meat%20items/beef_dprzbh.mp3",
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
    ],
  },
  {
    id: "18",
    bhutia: "ལས་ཁུངས་ ལས་ཚན་",
    pronunciation: "lea-khungs lea-tshen",
    english: " Office Designation",
    imageLink: designation,
    data: [
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
    ],
  },
  {
    id: "19",
    bhutia: "need to write this",
    pronunciation: "write this",
    english: "Military Terms",
    imageLink: military,
    data: [
      {
        key: "573",
        english: "General",
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
        english: "Major",
        pronunciation: "gyá -pön",
        bhutia: "རྒྱ་པོ།",
        audiolink:
          "https://res.cloudinary.com/dmcov966p/video/upload/v1737020472/military/major_sulljf.mp3",
      },
      {
        key: "576",
        english: "Captain ",
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
        english: "Company",
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
        english: "An engagement",
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
        english: "To fire",
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
    ],
  },
  {
    id: "31",
    bhutia: "གཏམ་",
    pronunciation: "tam",
    english: "Conversation",
    imageLink: conversations,
    data: [
      {
        key: "460",
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
        pronunciation: "nga druk lae in la",
        bhutia: "ང་ འབྲུག་ལས་ ཨིན་ལགས།",
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
        pronunciation:
          "nga khed rig sum she la lho khed dang in ji dang ne pa li",
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
      /*
      {
        key: "497",
        english: "How much is the Bhutia dictionary",
        pronunciation: "lho yig tsig zod chen mo di rin-gon ga tsod bo la?",
        bhutia: "ལྷན་རྒྱས་ ཚིག་མཛོད་ ཆེན་མོ་ འདི་ རིན་གོང་ ག་ཚོད་བོ་ ལགས?",
        audiolink: "",
      },
      {
        key: "498",
        english: "It's 100 Rs per book",
        pronunciation: "chig lo gya thampa in la",
        bhutia: "གཅིག་ལོ་ བརྒྱ་ཐམས་པ་ ཨིན་ལགས། ",
        audiolink: "",
      },
      {
        key: "499",
        english: "What time is it, please?",
        pronunciation: "chu tsod gat tsod bo la ?",
        bhutia: "ཆུ་ཚོད་ ག་ཚོད་བོ་ ལགས།",
        audiolink: "",
      },
      {
        key: "500",
        english: "Its nine o' clock",
        pronunciation: "chud tsod gu bay la",
        bhutia: "ཆུ་ཚོད་ དགུ་སྦད་ ལགས།",
        audiolink: "",
      },
      {
        key: "501",
        english: "What time do you go to school ?",
        pronunciation:
          "lhen gay chu tsod ga tsod lo lop dra zon bo nang do la ?",
        bhutia: "ལྷན་རྒྱས་ ཆུ་ཚོད་ ག་ཚོད་ལོ་ སློབ་གྲྭ་ བྱོན་བོ་ གནང་བདོ་  ལགས?",
        audiolink: "",
      },
      {
        key: "502",
        english: "I go to school at 8:30",
        pronunciation: "nga chu tsod gyad dang phyad lo gyu do in la",
        bhutia: "ང་ ཆུ་ཚོད་ བརྒྱད་ དང་ ཕྱེ༹ད་ལོ་ རྒྱུ་བདོ་ ཨིན་ལགས?",
        audiolink: "",
      },
      {
        key: "503",
        english: "What time do you get up",
        pronunciation: "lhen gay chu tsod ga tsod lo ya zhang po nang do la?",
        bhutia: "ལྷན་རྒྱས་ ཆུ་ཚོད་ ག་ཚོད་ལོ་ ཡ་ བཞེངས་པོ་ གནང་བདོ་ ལགས?",
        audiolink: "",
      },
      {
        key: "504",
        english: "I get up at six o' clock",
        pronunciation: "nga chu tsod drug lo lang to in la",
        bhutia: "ང་ ཆུ་ཚོད་ དྲུག་ལོ་ ལོང་ཏོ་  ཨིན་ལགས།",
        audiolink: "",
      },
      {
        key: "505",
        english: "What time do you have breakfast?",
        pronunciation:
          "lhen gay chu tsod ga tsod lo dro pai dro zha shae po nang do la",
        bhutia:
          "ལྷན་རྒྱས་  ཆུ་ཚོད་ ག་ཚོད་ལོ་ དྲོ་པའི་ དྲོ་ཟ་ བཞེས་པོ་ གནང་དོ་ ལགས།",
        audiolink: "",
      },
      {
        key: "506",
        english: "I have breakfast at seven o' clock",
        pronunciation: "nga chu tsod dun lo dro pai dro zha zha do in la",
        bhutia: "ང་ ཆུ་ཚོད་ བདུན་ ལོ་ དྲོ་པའི་ དྲོ་ཟ་ ཟ་བདོ་ ཨིན་ ལགས།",
        audiolink: "",
      },
      {
        key: "507",
        english: "Do you like tea?",
        pronunciation: "lhen gay sol jag a gaa?",
        bhutia: "ལྷན་རྒྱས་ གསོལ་ཇ་ དགའ་ག།",
        audiolink: "",
      },
      {
        key: "508",
        english: "Yes, I do",
        pronunciation: "la,gaa la",
        bhutia: "ལགས། དགའ་ལགས།",
        audiolink: "",
      },
      {
        key: "509",
        english: "Do you go to school by bus?",
        pronunciation: "lhen gay lop dra lo khor chen na zon do la ?",
        bhutia: "ལྷན་རྒྱས་ སློབ་གྲྭ་ ལོ་ འཁོར་ཆེན་ ན་ བྱོན་དོ་ ལགས།",
        audiolink: "",
      },
      {
        key: "510",
        english: "No, I don't I go by taxi",
        pronunciation: "men la. nga lha khor chung chung na gyu do in la",
        bhutia: "མན་ལགས། ང་ གླ་འཁོར་ ཆུང་ཆུང་ན་ རྒྱུ་བདོ་ ཨིན་ལགས།",
        audiolink: "",
      },
      {
        key: "511",
        english: "Do you hage a dog?",
        pronunciation: "lhen gay lo kyi yod k la?",
        bhutia: "ལྷན་རྒྱས་ལོ་ ཁྱི་ ཡོད་ཀ་ ལགས།",
        audiolink: "",
      },
      {
        key: "512",
        english: "Yes I do",
        pronunciation: "la.yod la",
        bhutia: "ལགས་ ཡོད་ ལགས།",
        audiolink: "",
      },
      {
        key: "513",
        english: "Do you get up early?",
        pronunciation: "lhen gay dro pa ma la shang to la ?",
        bhutia: "ལྷན་རྒྱད་ དྲོ་པ་ མ་ལགས་ བཞེངས་ཏོ་ ལགས།",
        audiolink: "",
      },
      {
        key: "514",
        english: "Yes I do ",
        pronunciation: "la in la",
        bhutia: "ལགས། ཨིན་ལགས།",
        audiolink: "",
      },*/
      {
        key: "515",
        english: "What day is it today?",
        pronunciation: "da ring za gan bo la ?",
        bhutia: "ད་རིང་ གཟའ་ གན་འབོ་ ལགས།",
        audiolink: "",
      },
      {
        key: "516",
        english: "Today is Monday",
        pronunciation: "da ring za dha o in la",
        bhutia: "ད་རིང་ གཟའ་ ཟླ་བོ་ ཨིན་ལགས།",
        audiolink: "",
      },
      {
        key: "517",
        english: "What day is it tomorrow?",
        pronunciation: "tho rang za gan bo la ?",
        bhutia: "ཐོ་རང་ གཟའ་ གན་བོ་ ལགས།",
        audiolink: "",
      },
      {
        key: "518",
        english: "Tomorrow is Tuesday",
        pronunciation: "tho rang za mig mar in la",
        bhutia: "ཐོ་རང་ གཟའ་ དམིག་མར་ ཨིན་ལགས།",
        audiolink: "",
      },
      {
        key: "519",
        english: "What days do you go to school?",
        pronunciation: "lhen gay lop dra lo za ga di na zon bo nang do la",
        bhutia: "ལྷན་རྒྱས་ སློབ་གྲྭ་ ལོ་ གཟའ་ ག་འདི་ན་ བྱོན་བོ་ གནང་བདོ་ ལགས།",
        audiolink: "",
      },
      {
        key: "520",
        english: "On Monday, Tuesday, Wednesday, Thursday and Friday",
        pronunciation:
          "nga za dha o mig mar lhag ko phur bu dang pa sang lo gyu do in la",
        bhutia:
          "ང་ གཟའ་ ཟླ་བོ་ དམིག་མར་ ལྷག་ཀོ་ ཕུར་བུ་ དང་ སྤ་སངས་ལོ་  རྒྱུ་བདོ་ ཨིན་ལགས།",
        audiolink: "",
      },
      {
        key: "521",
        english: "What days are the weekends",
        pronunciation: "za ga di di dun thrag gi zug bo la ",
        bhutia: "གཟའ་ ག་འདི་ འདི་ བདུན་ ཕྲག་གི་ མཇུག་བོ་ ལགས།",
        audiolink: "",
      },
      {
        key: "522",
        english: "It's on Saturday",
        pronunciation: "za pempo in la",
        bhutia: "གཟའ་ སྤེན་པོ་ ཨིན་ ལགས།",
        audiolink: "",
      },
      {
        key: "523",
        english: "What days do you like?",
        pronunciation: "lhen gay za ga di gaa la?",
        bhutia: "ལྷན་རྒྱས་ གཟའ་ ག་འདི་ དགའ་ལགས།",
        audiolink: "",
      },
      {
        key: "524",
        english: "I like Monday and Friday",
        pronunciation: "nga za dha o dang pa sang gaa la",
        bhutia: "ང་ གཟའ་ ཟླ་བོ་ དང་ སྤ་སངས་  དགའ་ ལགས།",
        audiolink: "",
      },
      {
        key: "525",
        english: "What days you do not like",
        pronunciation: "lhen gay za ga di min gaa la",
        bhutia: "ལྷན་རྒྱས་ གཟའ་ ག་འདི་ མིན་དགའ་ ལགས།",
        audiolink: "",
      },
      {
        key: "526",
        english: "I don't like Wednesday and Saturday",
        pronunciation: "nga za lhag ko dang pen po min gaa la",
        bhutia: "ང་ གཟའ་ ལྷག་ཀོ་ དང་ སྤེན་པོ་ མིན་དགའ་ ལགས།",
        audiolink: "",
      },
    ],
  },
];

export default LanguageData;
