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
    id: "8",
    english: "Flowers",
    bhutia: "མེ་ཏོག་",
    pronunciation: "me-tog",
    imageLink: flowers,
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
];

export default LanguageData;
