import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const certificationData = [
  {
    Icon: RxCrop,
    title: "Advanced React",
    description:
      "Completed certification focused on advanced React concepts, hooks, and performance optimization.",
    link: "https://www.coursera.org/account/accomplishments/verify/T0HVI58WK713",
  },
  {
    Icon: RxDesktop,
    title: "Django Web Framework",
    description:
      "Completed certification focused on Django web framework, ORM, and best practices.",
    link: "https://www.coursera.org/account/accomplishments/verify/MQWWRNCVDEF9",
  },
  {
    Icon: RxReader,
    title: "React Basics",
    description:
      "Completed certification covering fundamental React concepts, components, and state management.",
    link: "https://www.coursera.org/account/accomplishments/verify/8WW9UE2PHOHG",
  },
  {
    Icon: RxRocket,
    title: "Programming in Python",
    description:
      "Completed certification covering Python programming fundamentals and advanced concepts.",
    link: "https://www.coursera.org/account/accomplishments/verify/O80RDB82MTNR",
  },
  {
    Icon: RxRocket,
    title: "Introduction to Databases for Back-End Development",
    description:
      "Completed certification covering database and  back-end development concepts.",
    link: "https://www.coursera.org/account/accomplishments/verify/3DE5F7LSSUTP",
  },
  {
    Icon: RxCrop,
    title: "HTML and CSS in depth",
    description:
      "Completed certification covering responsive layout using HTML5 and CSS and UI using Bootstrap .",
    link: "https://www.coursera.org/account/accomplishments/verify/YOJUDNN454FC",
  },
  {
    Icon: RxDesktop,
    title: "Version Control",
    description:
      "Completed Certification covering Version Control systems and Manage code revisions.",
    link: "https://www.coursera.org/account/accomplishments/verify/0LYNH6VMGSDQ",
  },
  {
    Icon: RxReader,
    title: "Programming with JavaScript",
    description:
      "Completed Cerification Covering JavaScript codes, manipulating objects and arrays.",
    link: "https://www.coursera.org/account/accomplishments/verify/BT4H12VK539Q",
  },
  {
    Icon: RxRocket,
    title: "Introduction to Front-End Development",
    description:
      "Completed Cerification Covering front-end, back-end, and full-stack. and UI frameworks",
    link: "https://www.coursera.org/account/accomplishments/verify/RNHS0Y1P6SPY",
  },
  {
    Icon: RxPencil2,
    title: "API",
    description:
      "Completed Certification covering Understanding of API Lifecycle.",
    link: "#",
  },
];

const CertificationSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {certificationData.map((item, i) => (
        <SwiperSlide key={i}>
          <a href={item.link}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">
                <item.Icon aria-hidden />
              </div>

              {/* title & description */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>

              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight
                  className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                  aria-hidden
                />
              </div>
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CertificationSlider;
