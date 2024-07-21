"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  {
    id: 1,
    src: "/imgHome/img1.webp",
    title: "Black Coffee",
    desc: "",
  },
  /* {
    id: 2,
    src: "/imgHome/img2.webp",
    title: "Cappuccino",
    desc: "",
  },
  {
    id: 3,
    src: "/imgHome/img3.webp",
    title: "Espresso",
    desc: "",
  },
  {
    id: 4,
    src: "/imgHome/img4.webp",
    title: "Espresso",
    desc: "",
  },
  {
    id: 5,
    src: "/imgHome/img5.webp",
    title: "Espresso",
    desc: "",
  },
  {
    id: 6,
    src: "/imgHome/img6.webp",
    title: "Espresso",
    desc: "",
  },
  {
    id: 7,
    src: "/imgHome/img7.webp",
    title: "Espresso",
    desc: "",
  },
  {
    id: 8,
    src: "/imgHome/img8.webp",
    title: "Espresso",
    desc: "",
  },
  {
    id: 9,
    src: "/imgHome/img9.webp",
    title: "Espresso",
    desc: "",
  },
  {
    id: 10,
    src: "/imgHome/img10.webp",
    title: "Espresso",
    desc: "",
  }, */
  {
    id: 2,
    src: "/imgHome/img11.webp",
    title: "Black Coffee",
    desc: "",
  },
  {
    id: 3,
    src: "/imgHome/img12.webp",
    title: "Cappuccino",
    desc: "",
  },
  {
    id: 4,
    src: "/imgHome/img13.webp",
    title: "Espresso",
    desc: "",
  },
  {
    id: 5,
    src: "/imgHome/img14.webp",
    title: "Espresso",
    desc: "",
  },
  {
    id: 6,
    src: "/imgHome/img15.webp",
    title: "Espresso",
    desc: "",
  },
  {
    id: 7,
    src: "/imgHome/img16.webp",
    title: "Espresso",
    desc: "",
  },
  {
    id: 8,
    src: "/imgHome/img17.webp",
    title: "Espresso",
    desc: "",
  },
  {
    id: 9,
    src: "/imgHome/img18.webp",
    title: "Espresso",
    desc: "",
  },
  {
    id: 10,
    src: "/imgHome/img19.webp",
    title: "Espresso",
    desc: "",
  },
];

const Carrusel = () => {
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
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);
  return (
    <>
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
              className="relative z-10 object-cover w-full rounded-md h-64"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Carrusel;
