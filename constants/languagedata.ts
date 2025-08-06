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
const body = require("@/assets/images/bodyparts.jpg");
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
const gods = require("@/assets/images/god_s.jpeg");

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
    english: "Letters",
    bhutia: "",
    pronunciation: "",
    imageLink: "",
    data: [
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
        english: "aa (The letters from here on are vowels)",
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
    ],
  },
  {
    id: "1",
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
    id: "2",
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
    id: "3",
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
    id: "4",
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
    id: "5",
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
    id: "6",
    bhutia: "གྱོན་ཆས་/རྒྱན་ཆ།",
    pronunciation: "gen-che/gen-cha",
    english: "Dress and Ornaments",
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
    id: "7",
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
        pronunciation: "lhen gay lop dra za khadi na chenbo nang-do la? ",
        bhutia: "ལྷན་རྒྱས་ སློབ་གྲྭ་ལོ་ གཟའ་ ག་ འདི་ན་ བྱོན་བོ་ གནང་དོ་ལགས?",
        audiolink:
          "https://res.cloudinary.com/dmcov966p/video/upload/v1735892345/conversation/what_days_do_you_go_to_school_blhgfr.mp4",
      },
      {
        key: "520",
        english:
          " I go to school on Monday, Tuesday, Wednesday, Thursday and Friday",
        pronunciation:
          "nga lopdra  za dha o mig mar lhag ko phur bu dang pa sang lo gyu do in la",
        bhutia:
          "ང་ སློབ་གྲྭ་ གཟའ་ཟླ་བོ་ དམིག མར་ ལྷག་ཀོ་ ཕུར་པོ་ དང་ པ་སངས་ལོ་ རྒྱུ་དོ་ ཨིན་ལགས།",
        audiolink:
          "https://res.cloudinary.com/dmcov966p/video/upload/v1735892316/conversation/on_Monday_Tuesday_Wednesday_thursday_and_Friday_ci2zpf.mp4",
      },
      {
        key: "521",
        english: "What days are the weekends",
        pronunciation: "za ga di di dun thrag gi zug in la ",
        bhutia: "གཟའ་ ག་འདི་ འདི་ བདུན་ཕྲག་གི་ མཇུག་ ཨིན་ནམ?",
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
        english: "I like Saturday and Sunday",
        pronunciation: "nga za penpo dang za nim ga la",
        bhutia: "ང་ གཟའ་ སྤན་པོ་ དང་ གཟའ་ ཉིམ་ དགའ་ ལགས།",
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
    ],
  },
  {
    id: "8",
    english: "Name of Twelve Months",
    pronunciation: "dha-o chu-ni-ki-ming",
    bhutia: "ཟླ་བ་ བཅུ་གཉིས་ཀྱི་ མིང་།",
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
    id: "9",
    bhutia: "བཟའ་མི་/ནང་མི།",
    pronunciation: "zami/nangmi",
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
        pronunciation: "ke-pu",
      },
      {
        key: "1018",
        english: "Husband",
        audiolink:
          "https://res.cloudinary.com/dmcov966p/video/upload/v1742140765/correction/husband_kqgqgp.mp3",
        bhutia: "ཕོ་རྒྱག།",
        pronunciation: "phu-gya",
      },
      {
        key: "1019",
        english: "Wife",
        audiolink:
          "https://res.cloudinary.com/dmcov966p/video/upload/v1742140765/correction/wife_u6rmxh.mp3",
        bhutia: "མོ་བུད།",
        pronunciation: "mo-bi",
      },
      {
        key: "1020",
        english: "Husband/Wife",
        audiolink:
          "https://res.cloudinary.com/dmcov966p/video/upload/v1742140766/correction/husband_wife_zt6lmv.mp3",
        bhutia: "བཟའ་ཀོ།",
        pronunciation: "zakhu",
      },
      {
        key: "1021",
        english: "Bhawju/Dewar",
        audiolink:
          "https://res.cloudinary.com/dmcov966p/video/upload/v1742140766/correction/bhauju_dewar_vx6xhl.mp3",
        bhutia: "ཡོང་ཀུད།",
        pronunciation: "youngi",
      },
      {
        key: "1024",
        english: "Vena/Salo",
        audiolink:
          "https://res.cloudinary.com/dmcov966p/video/upload/v1742140765/correction/vena_salo_nqdr09.mp3",
        bhutia: "མག་ཀུད།",
        pronunciation: "go-ki",
      },
      {
        key: "1025",
        english: "Bhawju/Nanda",
        audiolink:
          "https://res.cloudinary.com/dmcov966p/video/upload/v1742140766/correction/bhawju_nanda_j6ymqh.mp3",
        bhutia: "ནེ་སྙེད།",
        pronunciation: "ney-nedh",
      },
      {
        key: "1026",
        english: "Vena/Sali",
        audiolink:
          "https://res.cloudinary.com/dmcov966p/video/upload/v1742140765/correction/vena_sali_m2yusf.mp3",
        bhutia: "མག་ཀོ་ སྙིདམ།",
        pronunciation: "mako-nhyim",
      },
    ],
  },
  {
    id: "10",
    bhutia: "འབྲས་བུ་",
    pronunciation: "drebu",
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

      {
        key: "344",
        english: "Agriculture Department",
        bhutia: "སོ་ནམ་ གཡོག་ལས་ ལྲེ་ལག ",
        pronunciation: "",
        audiolink:
          "https://res.cloudinary.com/dmcov966p/video/upload/v1736249123/Departments/agricultural_department_ybrk0z.mp4",
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
        bhutia:
          "མི་དམངས་ཟ་ཆས་ འགོ་བཀྲམ་ ལྲེ་ལག /མི་དམངས་ཟས་འབྲུ བགོ་བཀྲམ་ ལྲེ་ལག",
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
        bhutia:
          "རི་ཚོད་ དང་ ཚོང་སྒྱུར་ ལོ་ཐོག་ ལྲེ་ལག/ རི་ཚོད་ དང་ ལོ་ཐོག་ ལྲེ་ལག",
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
        bhutia:
          "བརྡ་ལན་ དང་ འཁྲུལ་ཆས་ ལྲེ་ལག / སྙན་གསྲེས་ཟོས་ཆས་ རིག་རལ་ ལྲེ་ལག",
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
        pronunciation: "",
        audiolink:
          "https://res.cloudinary.com/dmcov966p/video/upload/v1736249127/Departments/irrigation_department_wtpk79.mp4",
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
        bhutia:
          "མངའ་སྲེའི་ བཙོག་སིབ་ ཚོད་འཛིན་ སྲེ། མངའ་སྲེ་ བཙོག་སིབ་ བཀག་སྲེ།",
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
        english:
          "A dish prepared from beef entrails that are hanged on a stick",
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
        audiolink: "",
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
    id: "20",
    bhutia: "Traditional Sikkimese food",
    pronunciation: "need to write this ",
    english: "bhutia",
    imageLink: fooditems,
    data: [
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
        audiolink: "",
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
        audiolink: "",
      },
      {
        key: "12345678998",
        english: "Traditional snack made from wheat flour",
        pronunciation: "lhem",
        bhutia: "ལྷེམ།",
        audiolink: "",
      },

      {
        key: "12345678999",
        english: "Traditional cookies made of maize",
        pronunciation: "cha-dung",
        bhutia: "བཅག་རྡུང།",
        audiolink: "",
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
    ],
  },
  {
    id: "21",
    english: "Religion and Mythology",
    pronunciation: "",
    bhutia: "",
    imageLink: gods,
    data: [
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
    ],
  },
  {
    id: "22",
    bhutia: "",
    pronunciation: "",
    english: "Body Parts",
    imageLink: body,
    data: [
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
        audiolink: "",
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
    ],
  },
  {
    id: "23",
    bhutia: "",
    pronunciation: "",
    english: "Medical Terms",
    imageLink: medical,
    data: [],
  },

  {
    id: "27",
    bhutia: "",
    pronunciation: "",
    english: "Times",
    imageLink: "",
    data: [
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
    ],
  },
  {
    id: "40",
    bhutia: "",
    pronunciation: "",
    english: "Noun",
    imageLink: "",
    data: [],
  },
  {
    id: "24",
    bhutia: "",
    pronunciation: "",
    english: "Pronouns",
    imageLink: "",
    data: [],
  },
  {
    id: "41",
    bhutia: "",
    pronunciation: "",
    english: "Adjectives",
    imageLink: "",
    data: [],
  },
  {
    id: "42",
    bhutia: "",
    pronunciation: "",
    english: "Verb",
    imageLink: "",
    data: [],
  },
  {
    id: "43",
    bhutia: "",
    pronunciation: "",
    english: "Preposition",
    imageLink: "",
    data: [],
  },
  {
    id: "44",
    english: "Singular/Plural",
    pronunciation: "",
    bhutia: "",
    imageLink: "",
    data: [],
  },
  {
    id: "28",
    bhutia: "",
    pronunciation: "",
    english: "School Subjects",
    imageLink: "",
    data: [],
  },
  {
    id: "29",
    bhutia: "",
    pronunciation: "",
    english: "College Terminology",
    imageLink: "",
    data: [],
  },
  {
    id: "30",
    bhutia: "",
    pronunciation: "",
    english: "At home",
    imageLink: "",
    data: [],
  },

  {
    id: "32",
    bhutia: "",
    pronunciation: "",
    english: "Sentences for all grammatical forms",
    imageLink: "",
    data: [],
  },

  {
    id: "33",
    bhutia: "གཏམ་",
    pronunciation: "tam",
    english: "Conversation(basic)",
    imageLink: conversations,
    data: [],
  },
  {
    id: "34",
    bhutia: "",
    pronunciation: "",
    english: "Converstaion(intermediate)",
    imageLink: conversations,
    data: [],
  },
  {
    id: "35",
    bhutia: "",
    pronunciation: "",
    english: "On the phone",
    imageLink: "",
    data: [],
  },
  {
    id: "36",
    bhutia: "",
    pronunciation: "",
    english: "At the taxi stand",
    imageLink: "",
    data: [],
  },
  {
    id: "37",
    bhutia: "",
    pronunciation: "",
    english: "After work",
    imageLink: "",
    data: [],
  },
  {
    id: "38",
    bhutia: "",
    pronunciation: "",
    english: "At the vegetable market",
    imageLink: "",
    data: [],
  },
  {
    id: "39",
    bhutia: "",
    pronunciation: "",
    english: "Rural interviews",
    imageLink: "",
    data: [],
  },
];

export default LanguageData;
