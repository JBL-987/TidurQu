import {
  Pillow,
  Guling,
  Contour,
  Cushion,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",  
  },
  {
    id: "product",
    title: "Products",
  },
  {
    id: "faq",
    title: "FAQ",
  },
];

const faq = [
  {
    title: "Why it's called TidurQU",
    details: [
      "Indonesian word for sleep is 'Tidur'",
      "Indonesian word for mine is 'ku' but we change it little bit to 'qu'",
      "TidurQU is an Indonesian based startup that aims to provide Indonesian to sleep well products.",
    ],
  },
  {
    title: "Why you should use TidurQU",
    details: [
      "TidurQu used a high quality memory foam material to made a pillow and guling",
      "TidurQu made someone sleep well at night",
      "TidurQu is a trusted product for you to sleep well",
    ],
  },
  {
    title: "why TidurQu made pillow and guling",
    details: [
      "TidurQu made pillow and guling to make you sleep well at night especially in Indonesia",
    ],
  },
  {
    title: "Why TidurQu also made a various type of pillow too",
    details: [
      "TidurQu also want to make various type of pillow for you to sleep well and make you comfortable",
    ],
  },
];

const product = [
  {
    name: "Contour Pillow",
    description:
      "Experience the perfect blend of comfort and support with the OrthoPillow—the ultimate pillow designed to promote healthier sleep posture and alleviate common discomforts. Crafted with precision, OrthoPillow offers unparalleled support for your head, neck, and spine, ensuring that you wake up refreshed and free from pain",
    image: Contour,
  },
  {
    name: "Pillow",
    description:
      "Transform your sleep experience with the Fully Memory Foam Pillow, expertly made to provide unparalleled comfort and support. Designed to adapt to your unique body shape, this pillow ensures that you wake up refreshed and ready to tackle the day.",
    image: Pillow,
  },
  {
    name: "Guling",
    description:
      "Embrace the timeless comfort of the Guling Pillow, a traditional bolster pillow that offers versatile support and cozy relaxation for your everyday needs. Whether you’re looking to enhance your sleep, add support while lounging, or simply enjoy the classic comfort, the Guling Pillow is your perfect companion.",
    image: Guling,
  },
  {
    name: "TidurQu",
    description: "TidurQu is an Indonesian based startup that aims to provide Indonesian to sleep well products.",
    image: Cushion,
  },
];

export { faq, product };

