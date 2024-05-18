"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  {
    id: 1,
    src: "/imgHome/img1.jpeg",
    title: "Black Coffee",
    desc: "Black coffee is a beverage made from roasted coffee beans. The beans are ground and soaked in water, which releases their flavor, color, caffeine content, and nutrients. ",
  },
  {
    id: 2,
    src: "/imgHome/img2.jpeg",
    title: "Cappuccino",
    desc: "A cappuccino is an espresso-based coffee drink that is traditionally prepared with steamed milk foam (microfoam). Cappuccino. Type, Hot.",
  },
  {
    id: 3,
    src: "/imgHome/img3.jpeg",
    title: "Espresso",
    desc: "Espresso is a concentrated form of coffee, served in shots. It's made of two ingredients - finely ground, 100% coffee, and hot water.",
  },
  {
    id: 4,
    src: "/imgHome/img4.jpeg",
    title: "Espresso",
    desc: "Espresso is a concentrated form of coffee, served in shots. It's made of two ingredients - finely ground, 100% coffee, and hot water.",
  },
  {
    id: 5,
    src: "/imgHome/img5.jpeg",
    title: "Espresso",
    desc: "Espresso is a concentrated form of coffee, served in shots. It's made of two ingredients - finely ground, 100% coffee, and hot water.",
  },
  {
    id: 6,
    src: "/imgHome/img6.jpeg",
    title: "Espresso",
    desc: "Espresso is a concentrated form of coffee, served in shots. It's made of two ingredients - finely ground, 100% coffee, and hot water.",
  },
  {
    id: 7,
    src: "/imgHome/img7.jpeg",
    title: "Espresso",
    desc: "Espresso is a concentrated form of coffee, served in shots. It's made of two ingredients - finely ground, 100% coffee, and hot water.",
  },
  {
    id: 8,
    src: "/imgHome/img8.jpeg",
    title: "Espresso",
    desc: "Espresso is a concentrated form of coffee, served in shots. It's made of two ingredients - finely ground, 100% coffee, and hot water.",
  },
  {
    id: 9,
    src: "/imgHome/img9.jpeg",
    title: "Espresso",
    desc: "Espresso is a concentrated form of coffee, served in shots. It's made of two ingredients - finely ground, 100% coffee, and hot water.",
  },
  {
    id: 10,
    src: "/imgHome/img10.jpeg",
    title: "Espresso",
    desc: "Espresso is a concentrated form of coffee, served in shots. It's made of two ingredients - finely ground, 100% coffee, and hot water.",
  },
  {
    id: 11,
    src: "/imgHome/img11.jpeg",
    title: "Black Coffee",
    desc: "Black coffee is a beverage made from roasted coffee beans. The beans are ground and soaked in water, which releases their flavor, color, caffeine content, and nutrients. ",
  },
  {
    id: 12,
    src: "/imgHome/img12.jpeg",
    title: "Cappuccino",
    desc: "A cappuccino is an espresso-based coffee drink that is traditionally prepared with steamed milk foam (microfoam). Cappuccino. Type, Hot.",
  },
  {
    id: 13,
    src: "/imgHome/img13.jpeg",
    title: "Espresso",
    desc: "Espresso is a concentrated form of coffee, served in shots. It's made of two ingredients - finely ground, 100% coffee, and hot water.",
  },
  {
    id: 14,
    src: "/imgHome/img14.jpeg",
    title: "Espresso",
    desc: "Espresso is a concentrated form of coffee, served in shots. It's made of two ingredients - finely ground, 100% coffee, and hot water.",
  },
  {
    id: 15,
    src: "/imgHome/img15.jpeg",
    title: "Espresso",
    desc: "Espresso is a concentrated form of coffee, served in shots. It's made of two ingredients - finely ground, 100% coffee, and hot water.",
  },
  {
    id: 16,
    src: "/imgHome/img16.jpeg",
    title: "Espresso",
    desc: "Espresso is a concentrated form of coffee, served in shots. It's made of two ingredients - finely ground, 100% coffee, and hot water.",
  },
  {
    id: 17,
    src: "/imgHome/img17.jpeg",
    title: "Espresso",
    desc: "Espresso is a concentrated form of coffee, served in shots. It's made of two ingredients - finely ground, 100% coffee, and hot water.",
  },
  {
    id: 18,
    src: "/imgHome/img18.jpeg",
    title: "Espresso",
    desc: "Espresso is a concentrated form of coffee, served in shots. It's made of two ingredients - finely ground, 100% coffee, and hot water.",
  },
  {
    id: 19,
    src: "/imgHome/img19.jpeg",
    title: "Espresso",
    desc: "Espresso is a concentrated form of coffee, served in shots. It's made of two ingredients - finely ground, 100% coffee, and hot water.",
  },
];

const Carousel = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);
  return (
    <div className=" max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "flex w-full h-64 object-cover transition-all duration-500 ease-in-out"
              : "hidden"
          }`}
        >
          <Image
            src={elem.src}
            alt=""
            width={800}
            height={300}
            layout="responsive"
            className="relative z-10 object-cover w-full rounded-md h-64"
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
