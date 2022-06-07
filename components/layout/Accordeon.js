import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { keyframes } from "styled-components";
import Header from "./Header";
import Wrapper from "./Wrapper";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Accordeon({ data, title, subtitle, desc }) {
  const [open, setOpen] = useState(Array(data.length).fill(false));

  const handleClick = (index) => {
    const arr = [...open];
    arr[index] = !arr[index];
    setOpen(arr);
  };

  gsap.registerPlugin(ScrollTrigger);
  const TitleRef = useRef(null);
  const TextRef = useRef(null);
  const AccordeonRef = useRef(null);
  useEffect(() => {
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
          trigger: TitleRef.current,
          start: "40% bottom",
          end: "bottom 60%",
          //   markers: true,
          scrub: 1,
        },
      }
    );
    gsap.set(TitleRef.current, { y: "0" });
    //TEXT SHOW
    gsap.fromTo(
      TextRef.current,
      {
        x: "-=500",
        opacity: 0,
      },
      {
        x: "0",
        opacity: 1,
        scrollTrigger: {
          trigger: TextRef.current,
          start: "40% bottom",
          end: "bottom 60%",
          //   markers: true,
          scrub: 1,
        },
      }
    );
    gsap.set(TextRef.current, { x: "0" });
        //TEXT SHOW
        gsap.fromTo(
          AccordeonRef.current,
          {
            x: "+=500",
            opacity: 0,
          },
          {
            x: "0",
            opacity: 1,
            scrollTrigger: {
              trigger: TextRef.current,
              start: "40% bottom",
              end: "bottom 60%",
              //   markers: true,
              scrub: 1,
            },
          }
        );
        gsap.set(AccordeonRef.current, { x: "0" });
  }, []);
  return (
    <Wrapper>
      <AccordeonWrapper>
        <div ref={TitleRef}>
          <Header subtitle={subtitle} title={title} />
        </div>
        <p ref={TextRef}>{desc}</p>
        <div ref={AccordeonRef}>
        {data.map((item, index) => (
          <AccordeonItem key={index}>
            <AccordeonItemTop onClick={() => handleClick(index)}>
              <p>{item.title} </p>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={open[index] === true ? "icon active" : "icon"}
              />
            </AccordeonItemTop>
            <AccordeonItemDesc className={open[index] === true ? "active" : ""}>
              {item.desc}
            </AccordeonItemDesc>
          </AccordeonItem>
        ))}
        </div>
      </AccordeonWrapper>
    </Wrapper>
  );
}

const AccordeonWrapper = styled.div`
  & > p {
    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;
const AccordeonItem = styled.div`
  margin-top: 24px;
  border-top: 2px solid ${(props) => props.theme.neutral100};
  *::selection {
    background-color: transparent;
  }
  transition: height 1s;
`;
const AccordeonItemTop = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  p {
    color: ${(props) => props.theme.neutral900};
    font-weight: 600;
    font-size: 18px;
  }
  .icon {
    transition: 0.5s;
    &.active {
      transform: rotate(180deg);
    }
  }
`;

const showItem = keyframes`
from{
    opacity: 0;
    top: -10px;
}
to{
    opacity: 1;
    top: 0;
}
`;
const AccordeonItemDesc = styled.div`
  color: ${(props) => props.theme.neutral500};
  font-size: 16px;
  position: relative;
  transition: 0.5s ease-in-out;
  max-height: 0px;
  opacity: 0;
  &.active {
    opacity: 1;
    animation: ${showItem} 0.25s ease-in-out;
    transform: scaleY(1);
    max-height: 500px;
  }
`;
