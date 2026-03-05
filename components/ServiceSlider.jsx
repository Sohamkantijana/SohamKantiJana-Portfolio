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

const serviceData = [
  {
    Icon: RxCrop,
    title: "Laravel Development",
    description:
      "Building secure and scalable backend systems using Laravel with MVC architecture, authentication, and REST APIs.",
    link: "https://laravel.com/",
  },
  {
    Icon: RxDesktop,
    title: "Full Stack Development",
    description:
      "Developing complete web applications including frontend, backend and deployment.",
    link: "https://www.coursera.org/specializations/meta-full-stack-developer",
  },
  {
    Icon: RxReader,
    title: "REST API Integration",
    description:
      "Designing and consuming RESTful APIs for smooth communication between frontend and backend systems.",
    link: "https://www.geeksforgeeks.org/node-js/rest-api-introduction/",
  },
  {
    Icon: RxRocket,
    title: "Database Management",
    description:
      "Working with MySQL databases, migrations, relationships, and performance optimization.",
    link: "https://www.geeksforgeeks.org/dbms/introduction-of-dbms-database-management-system-set-1/",
  },
  {
    Icon: RxPencil2,
    title: "XAMPP & Local Setup",
    description:
      "Configuring Apache, MySQL, and PHP environments using XAMPP for efficient local development and database integration.",
    link: "https://www.apachefriends.org/faq_windows.html",
  },
];

const ServiceSlider = () => {
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
      {serviceData.map((item, i) => (
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

export default ServiceSlider;
