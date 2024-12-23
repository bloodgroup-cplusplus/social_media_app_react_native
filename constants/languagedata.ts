const birds = require("@/assets/images/birds.jpg");
const colors = require("@/assets/images/colors_.jpg");
const drinks = require("@/assets/images/drinks_.jpg");
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
    english: "Birds",
    bhutia: "",
    pronunciation: "",
    imageLink: birds,
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
    english: "Colors",
    bhutia: "",
    pronunciation: "",
    imageLink: colors,
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
];

export default LanguageData;
