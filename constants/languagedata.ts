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
    bhutia: "",
    pronunciation: "",
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
    bhutia: "",
    pronunciation: "",
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
    bhutia: "",
    pronunciation: "",
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
    bhutia: "",
    pronunciation: "",
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
    bhutia: "",
    pronunciation: "",
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
    bhutia: "",
    pronunciation: "",
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
    bhutia: "",
    pronunciation: "",
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
    bhutia: "",
    pronunciation: "",
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
    bhutia: "",
    pronunciation: "",
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
    bhutia: "",
    pronunciation: "",
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
    bhutia: "",
    pronunciation: "",
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
];

export default LanguageData;
