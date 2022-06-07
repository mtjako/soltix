import { Rnd } from "react-rnd";
import styled from "styled-components";
import Wrapper from "../layout/Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Header from "../layout/Header";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function ResponsiveFrame() {
  gsap.registerPlugin(ScrollTrigger);
  const TitleRef = useRef(null);
  const TextRef = useRef(null);
  const ResponsiveFrameRef = useRef(null);
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
    gsap.set(TextRef.current, { x: "0" });
        //TEXT SHOW
        gsap.fromTo(
          ResponsiveFrameRef.current,
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
        gsap.set(ResponsiveFrameRef.current, { x: "0" });
  }, []);

  return (
    <Wrapper>
      <TopText>
        <div ref={TitleRef}>
          <Header subtitle="Platformy" title="Oprogramowanie responsywne" center />
        </div>
        <p ref={TextRef}>
        Tworzymy oprogramowanie responsywne - działające równolegle na platformach stacjonarnych i mobilnych. Dzięki temu możesz czytać, wprowadzać i modyfikować dane z komputera stacjonarnego w firmie, laptopa podczas podróży, tabletu podczas spotkania czy smartfona leżąc na plaży…
        </p>
      </TopText>
      <Measure>
        <Size>mobile</Size>
        <Size>tablet</Size>
        <Size>desktop</Size>
      </Measure>
      <ResponsiveFrameWrapper ref={ResponsiveFrameRef}>
        <Rnd
          default={{
            x: 0,
            y: 0,
            width: 700,
            height: 600,
          }}
          disableDragging={true}
          minWidth={"320px"}
          maxWidth={"100%"}
          enableResizing={{
            top: false,
            right: true,
            bottom: false,
            left: false,
            topRight: false,
            bottomRight: false,
            bottomLeft: false,
            topLeft: false,
          }}
        >
          <FrameContainer id="sss">
            <FrameContainerTopBar>
              <Dots>
                <Dot />
                <Dot />
                <Dot />
              </Dots>
              <AddressBar>soltix.com</AddressBar>
              <NewTab icon={faPlus} />
            </FrameContainerTopBar>
            <ResponsiveIframe src={"/demo"} title="Responsive website"/>
          </FrameContainer>
        </Rnd>
      </ResponsiveFrameWrapper>
    </Wrapper>
  );
}

const TopText = styled.div`
  text-align: center;
  margin-bottom: 32px;
  h6 {
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => props.theme.blue500};
  }
  h1 {
    font-size: 36px;
    font-weight: 600;
    color: ${(props) => props.theme.neutral900};
  }
  p {
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.theme.neutral500};
    max-width: 600px;
    margin: 0 auto;
  }
`;

const Measure = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.neutral300};
  margin-bottom: 8px;
  height: 20px;
  position: relative;
  @media(max-width: 450px){
      display: none;
    }
`;

const Size = styled.div`
  color: ${(props) => props.theme.neutral700};
  text-transform: uppercase;
  font-size: 12px;
  line-height: 20px;
  font-weight: 700;
  position: absolute;
  padding-right: 8px;
  bottom: 0;
  &:nth-child(1) {
    transform: translateX(-100%);
    left: 320px;
    @media(max-width: 450px){
      display: none;
    }
  }
  &:nth-child(2) {
    transform: translateX(-100%);
    @media(max-width: 800px){
      display: none;
    }
    left: 768px;
  }
  &:nth-child(3) {
    left: 1078px;
    @media(max-width: 1178px){
      display: none;
    }
  }
  &::before {
    position: absolute;
    top: 0;
    right: 0;
    content: "";
    display: block;
    width: 1px;
    height: 629px;
    background-color: ${(props) => props.theme.neutral300};
  }
`;

const ResponsiveFrameWrapper = styled.div`
  min-height: 600px;
  position: relative;
  margin-left: -16px;
  @media(min-width: 360px){
    margin-left: 0;
  }
`;
const FrameContainer = styled.div`
  width: 100%;
  height: 600px;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${(props) => props.theme.neutral700};
  border: 1px solid ${(props) => props.theme.neutral200};
  & + div > div {
    background-color: ${(props) => props.theme.neutral300};
    transform: translateY(-50%);
    height: 64px !important;
    width: 8px !important;
    border-radius: 4px !important;
    top: 50% !important;
    right: -12px !important;
  }
`;
const FrameContainerTopBar = styled.div`
  width: 100%;
  padding: 10px 16px;
  display: grid;
  align-items: center;
  grid-template-columns: 52px 1fr 16px;
  column-gap: 16px;
`;
const Dots = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 10px);
  column-gap: 8px;
`;
const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  &:nth-child(1) {
    background-color: #ff5f57;
  }
  &:nth-child(2) {
    background-color: #febc2e;
  }
  &:nth-child(3) {
    background-color: #28c840;
  }
`;
const AddressBar = styled.div`
  background-color: ${(props) => props.theme.neutral600};
  text-align: center;
  border-radius: 8px;
  color: ${(props) => props.theme.neutral200};
  height: 24px;
  font-size: 12px;
  line-height: 24px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const NewTab = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.neutral050};
  font-size: 16px;
`;

const ResponsiveIframe = styled.iframe`
  width: 100%;
  height: 600px;
  background-color: #fff;
  border: none;
`;
