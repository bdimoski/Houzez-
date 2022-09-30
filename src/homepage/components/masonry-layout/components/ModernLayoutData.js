import apartmantImg from "../../../../assets/apartmant.jpg";
import officeImg from "../../../../assets/office.jpg";
import studioImg from "../../../../assets/studio.jpg";
import familyHomeImg from "../../../../assets/family-home.jpg";
import shopImg from "../../../../assets/shop.jpg";
import villaImg from "../../../../assets/villa.jpg";

import { GrCaretNext } from "react-icons/gr";

export const ModernLayoutData = [
  {
    cardType: "no-background",
    subtitle:
      "Grids are the backbone of all layouts, infographics and presentations",
    title: "You Can Design Clean And Modern Grid Layouts",
  },
  {
    cardType: "square",
    image: apartmantImg,
    subtitle: "17 Properties",
    title: "Apartment",
    textLink: "MORE DETAILS",
    icon: <GrCaretNext />,
  },
  {
    cardType: "vertical",
    image: officeImg,
    subtitle: "3 Properties",
    title: "Office",
    textLink: "MORE DETAILS",
    icon: <GrCaretNext />,
  },
  {
    cardType: "vertical",
    image: studioImg,
    subtitle: "7 Properties",
    title: "Studio",
    textLink: "MORE DETAILS",
    icon: <GrCaretNext />,
  },
  {
    cardType: "horizontal",
    image: familyHomeImg,
    subtitle: "10 Properties",
    title: "Single Family Home",
    textLink: "MORE DETAILS",
    icon: <GrCaretNext />,
  },
  {
    cardType: "square",
    image: shopImg,
    subtitle: "3 Properties",
    title: "Shop",
    textLink: "MORE DETAILS",
    icon: <GrCaretNext />,
  },
  {
    cardType: "horizontal",
    image: villaImg,
    subtitle: "10 Properties",
    title: "Villa",
    textLink: "MORE DETAILS",
    icon: <GrCaretNext />,
  },
];
