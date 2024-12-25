const birds = require("@/assets/images/birds.jpg");
const colors = require("@/assets/images/colors_.jpg");
const drinks = require("@/assets/images/drinks_.jpg");
const days = require("@/assets/images/days.jpg");
const family = require("@/assets/images/family.jpg");
const fruits = require("@/assets/images/fruits.jpg");
const vegetables = require("@/assets/images/vegetables.jpg");
const flowers = require("@/assets/images/flowers.jpg");
const months = require("@/assets/images/months.jpg");
const meat = require("@/assets/images/meat.jpg");
const mountain = require("@/assets/images/mountain.jpg");
const medical = require("@/assets/images/medical terms.jpg");
const fooditems = require("@/assets/images/fooditems.jpg");
const attire = require("@/assets/images/attire_.jpg");
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
];

export default LanguageData;
