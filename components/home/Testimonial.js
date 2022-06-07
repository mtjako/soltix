import gsap from "gsap";
import styled from "styled-components";
import React, { useRef, useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Header from "../layout/Header";

export default function Testimonial() {
  const [counter, setCounter] = useState(0);

  const opinionsdata = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu ipsum eget sem tempus aliquet. Phasellus tempor rutrum mauris vel elementum. Morbi euismod nibh quis congue fermentum. Etiam augue turpis, interdum commodo tellus eget, vulputate venenatis nisi. Nulla vel orci non tellus auctor accumsan.",
      avatar: "/home/testimonial/avatar.jpg",
      name: "Jan Kowalski",
      job: "Web Developer",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu ipsum eget sem tempus aliquet. Phasellus tempor rutrum mauris vel elementum. Morbi euismod nibh quis congue fermentum. Etiam augue turpis, interdum commodo tellus eget, vulputate venenatis nisi. Nulla vel orci non tellus auctor accumsan.",
      avatar: "/home/testimonial/avatar.jpg",
      name: "Jan Kowalski",
      job: "Web Developer",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu ipsum eget sem tempus aliquet. Phasellus tempor rutrum mauris vel elementum. Morbi euismod nibh quis congue fermentum. Etiam augue turpis, interdum commodo tellus eget, vulputate venenatis nisi. Nulla vel orci non tellus auctor accumsan.",
      avatar: "/home/testimonial/avatar.jpg",
      name: "Jan Kowalski",
      job: "Web Developer",
    },
  ];
  gsap.registerPlugin(ScrollTrigger);
  const TestimonialRef = useRef();
  const TestimonialImgRef = useRef();
  const OpinionsBox = useRef(null);
  const TitleRef = useRef(null);

  const changeItem = (index) => {
    OpinionsBox.current.scrollTo({
      top: 0,
      left: OpinionsBox.current.clientWidth * index,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    //IMAGE SHOW
    gsap.fromTo(
      TestimonialImgRef.current,
      {
        x: "-=500",
        opacity: 0,
      },
      {
        x: "0",
        opacity: 1,
        scrollTrigger: {
          trigger: TestimonialRef.current,
          start: "top bottom",
          end: "bottom bottom",
          // markers: true,
          scrub: 1,
        },
      }
    );
    gsap.set(TestimonialImgRef.current, { x: "0" });
    //OPINIONS SHOW
    gsap.fromTo(
      OpinionsBox.current,
      {
        x: "500",
        opacity: 0,
      },
      {
        x: "0",
        opacity: 1,
        scrollTrigger: {
          trigger: TestimonialRef.current,
          start: "top bottom",
          end: "bottom bottom",
          // markers: true,
          scrub: 1,
        },
      }
    );
    gsap.set(OpinionsBox.current, { x: "0" });
    //TITLE SHOW
    gsap.fromTo(
      TitleRef.current,
      {
        y: "100",
        opacity: 0,
      },
      {
        y: "0",
        opacity: 1,
        scrollTrigger: {
          trigger: TestimonialRef.current,
          start: "40% bottom",
          end: "bottom bottom",
          //   markers: true,
          scrub: 1,
        },
      }
    );
    gsap.set(TitleRef.current, { y: "0" });

    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1 < opinionsdata.length ? prevCounter + 1 : 0);
    }, 8000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    changeItem(counter);
  }, [counter]);

  return (
    <TestimonialWrap ref={TestimonialRef}>
      <div ref={TestimonialImgRef}>
        <Image
          width={550}
          height={550}
          objectFit="contain"
          src="/home/testimonial/testimonialimg.png"
          alt="testimonial"
        />
      </div>
      <TestimonialText>
        <div ref={TitleRef}>
          <Header
            subtitle="Testimonial"
            title="What Client Say About Our Company?"
          />
        </div>
        <OpinionsWrap>
          <Opinions ref={OpinionsBox}>
            {opinionsdata.map((item, index) => (
              <Opinion key={index}>
                <p className="opinion__text">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent eu ipsum eget sem tempus aliquet. Phasellus tempor
                  rutrum mauris vel elementum. Morbi euismod nibh quis congue
                  fermentum. Etiam augue turpis, interdum commodo tellus eget,
                  vulputate venenatis nisi. Nulla vel orci non tellus auctor
                  accumsan."
                </p>
                <div className="opinion__about">
                  <Image
                    width={72}
                    height={72}
                    className="opinion__avatar"
                    src={item.avatar}
                    alt="s"
                  />
                  <div className="opinion__tag">
                    <p className="opinion__name">Jan Kowalski</p>
                    <p className="opinion__job">Web Developer</p>
                  </div>
                </div>
              </Opinion>
            ))}
          </Opinions>
          <Dots>
            {opinionsdata.map((item, index) => (
              <Dot
                key={index}
                onClick={() => setCounter(index)}
                className={counter == index ? "active" : ""}
              />
            ))}
          </Dots>
        </OpinionsWrap>
      </TestimonialText>
    </TestimonialWrap>
  );
}

const TestimonialWrap = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1172px) {
    padding: 16px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 64px;
  }
  @media (max-width: 568px) {
    padding: 32px;
  }
  @media (max-width: 468px) {
    padding: 16px;
  }
  align-items: center;
  column-gap: 64px;
  & > img {
    width: 100%;
  }
`;

const TestimonialText = styled.div`
  @media (max-width: 768px) {
    margin-top: 24px;
  }
`;
const OpinionsWrap = styled.div`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Opinions = styled.div`
  max-width: 100%;
  display: flex;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Opinion = styled.div`
  min-width: 100%;
  .opinion {
    &__text {
      font-size: 16px;
      font-weight: 400;
      font-style: italic;
      color: ${(props) => props.theme.neutral500};
      @media (max-width: 768px) {
        text-align: center;
      }
    }
    &__about {
      margin-top: 16px;
      display: flex;
    }
    &__avatar {
      width: 72px;
      height: 72px;
      border-radius: 50%;
    }
    &__tag {
      margin-left: 16px;
    }
    &__name {
      font-size: 18px;
      font-weight: 600;
      padding: 8px 0 4px;
      color: ${(props) => props.theme.neutral900};
    }
    &__job {
      font-size: 14px;
      font-weight: 500;
      color: ${(props) => props.theme.neutral800};
    }
  }
`;

const Dots = styled.div`
  position: absolute;
  right: 0;
  bottom: 31px;
  display: flex;
  z-index: 3;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.neutral500};
  margin: 0 4px;
  cursor: pointer;
  &.active {
    background-color: ${(props) => props.theme.blue700};
  }
`;
