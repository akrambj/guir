import about from "../../../assets/imgs/about/about.jpg";
import AnimatedNumber from "./AnimatedNumber";
import ImageComponent from "../../UI/ImageComponent";
import { useEffect, useRef, useState } from "react";

const Aboutus = () => {
  const [scrolledToAbout, setScrolledToAbout] = useState(false);
  const aboutRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const aboutSectionTop = aboutRef.current.offsetTop;
        const aboutSectionHeight = aboutRef.current.offsetHeight;
        const isScrolled =
          window.scrollY >= aboutSectionTop - 300 &&
          window.scrollY <= aboutSectionTop + aboutSectionHeight;

        setScrolledToAbout(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [aboutRef]);

  return (
    <section
      id="about"
      ref={aboutRef}
      className={`w-full   relative  ${
        scrolledToAbout ? "opacity-100" : "opacity-0"
      } duration-300`}
    >
      <div className="w-full h-full flex flex-col gap-10 justify-center lg:py-10">
        <div className="w-full  flex flex-col py-10 md:py-0 gap-7 md:flex-row md:justify-between md:items-start ">
          <div className="relative md:w-[45%]" id="aboutimg">
            <div
              className={`${
                scrolledToAbout ? "about-img yellow" : ""
              }   w-[70%] lg:w-[70%] h-[300px] lg:h-[450px] md:w-[90%] xs:h-[350px] 2xs:h-[400px] bg-yellow-primary rounded-tr-[30px] rounded-br-[30px]`}
            >
              <div
                className={`w-[80%] ${
                  scrolledToAbout ? "image" : ""
                } md:w-full lg:w-[80%] h-[240px] lg:h-[400px] xs:h-[300px] 2xs:h-[350px] absolute top-8 lg:top-5 lg:left-40 left-10 rounded-[20px] drop-shadow-xl`}
              >
                <img
                  src={about}
                  className=" w-full h-full object-cover rounded-[20px] drop-shadow-xl"
                />
              </div>
            </div>
          </div>

          <div
            className={`text-center flex flex-col gap-3 md:w-[45%] md:text-left lg:items-start  ${
              scrolledToAbout ? "animate-fade-in-up" : ""
            }`}
            id="aboutText"
          >
            <h3 className="text-green-primary uppercase font-black text-3xl lg:text-4xl lg:w-[70%] lg:leading-[40px] ">
              qualifiés, passionnés et professionnels
            </h3>
            <p className="lg:text-sm w-[90%] mx-auto lg:mx-0">
              Fondée avec une passion durable pour l'art de bâtir, notre société
              s'engage à fournir des solutions de construction innovantes et de
              qualité. Chez GUIRRI-BAT, nous comprenons que chaque projet est
              unique, c'est pourquoi nous mettons l'accent sur une approche
              personnalisée. Notre équipe expérimentée, basée à Cannes, allie
              expertise technique et créativité pour donner vie à vos idées. Que
              vous envisagiez une nouvelle construction, une rénovation ou une
              extension, nous sommes là pour concrétiser vos rêves. Notre
              engagement envers l'excellence se reflète dans chaque étape de
              notre travail, de la conception à la réalisation. Nous sommes
              fiers de notre réputation en tant que constructeur fiable, offrant
              des résultats exceptionnels et respectant les délais. Nous croyons
              en la construction de relations solides avec nos clients. La
              transparence, l'intégrité et la communication ouverte sont au cœur
              de notre approche
            </p>
          </div>
        </div>
        <div
          className={`${
            scrolledToAbout ? "aboutnumbers" : ""
          } w-[90%] aboutNumber md:h-[120px] md:rounded-[50px] py-2 rounded-lg h-[300px] bg-white drop-shadow-2xl justify-center gap-2 mx-auto flex items-center flex-wrap`}
        >
          <div
            className={`cursor-pointer  text-green-primary hover:bg-green-primary duration-300 hover:text-white w-[45%] h-[45%] md:h-full bg-[#F7F7F7] md:w-[24%] md:text-sm md:rounded-l-[50px] flex items-center justify-center  flex-col gap-2 text-center rounded-tl-[40px] drop-shadow-md `}
          >
            <h4 className="text-2xl font-bold">
              <AnimatedNumber finalValue={15} />
            </h4>
            <h6>ANS D’EXPERIENCE</h6>
          </div>
          <div
            className={`cursor-pointer text-green-primary hover:bg-green-primary duration-300 hover:text-white w-[45%] h-[45%] md:h-full bg-[#F7F7F7] md:w-[24%] md:text-sm md:rounded-md flex items-center justify-center  flex-col gap-2 text-center rounded-tr-[40px] drop-shadow-md `}
          >
            <h4 className="text-2xl font-bold">
              <AnimatedNumber finalValue={500} />
            </h4>
            <h6>CLIENTS SATISFAIT</h6>
          </div>
          <div
            className={`cursor-pointer text-green-primary hover:bg-green-primary duration-300 hover:text-white w-[45%] h-[45%] md:h-full bg-[#F7F7F7] md:w-[24%] md:text-sm md:rounded-md flex items-center justify-center  flex-col gap-2 text-center rounded-bl-[40px] drop-shadow-md `}
          >
            <h4 className="text-2xl font-bold">
              <AnimatedNumber finalValue={"1M"} />
            </h4>
            <h6>tonne de gravats traité</h6>
          </div>
          <div
            className={`cursor-pointer text-green-primary hover:bg-green-primary duration-300 hover:text-white w-[45%] h-[45%] md:h-full bg-[#F7F7F7] md:w-[24%] md:text-sm md:rounded-r-[50px] md:rounded-l-none flex items-center justify-center  flex-col gap-2 text-center rounded-br-[40px] drop-shadow-md `}
          >
            <h4 className="text-2xl font-bold">
              <AnimatedNumber finalValue={1000} />
            </h4>
            <h6>collaborateurs</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
