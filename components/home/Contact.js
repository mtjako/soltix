import Link from 'next/link';
import { useEffect,useRef } from 'react';
import styled from 'styled-components';
import Btn from '../layout/Btn';
import Wrapper from '../layout/Wrapper';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from 'next/image';


export default function Contact(){
    gsap.registerPlugin(ScrollTrigger);
    const ImgRef = useRef(null);
    const TitleRef = useRef(null);
    const BtnRef = useRef(null);

    useEffect(() => {
        //IMG SHOW
        gsap.fromTo(
          ImgRef.current,
          {
            y: "200",
            opacity: 0,
          },
          {
            y: "0",
            opacity: 1,
            scrollTrigger: {
              trigger: ImgRef.current,
              start: "top bottom",
              end: "bottom bottom",
                // markers: true,
              scrub: 1,
            },
          }
        );
        gsap.set(ImgRef.current, { y: "0" });
                //TITLE SHOW
                gsap.fromTo(
                    TitleRef.current,
                    {
                      x: "-=500",
                      opacity: 0,
                    },
                    {
                      x: "0",
                      opacity: 1,
                      scrollTrigger: {
                        trigger: TitleRef.current,
                        start: "top bottom",
                        end: "bottom bottom",
                        //   markers: true,
                        scrub: 1,
                      },
                    }
                  );
                  gsap.set(TitleRef.current, { x: "0" });
                          //BTN SHOW
        gsap.fromTo(
            BtnRef.current,
            {
              x: "+=500",
              opacity: 0,
            },
            {
              x: "0",
              opacity: 1,
              scrollTrigger: {
                trigger: BtnRef.current,
                start: "top bottom",
                end: "bottom bottom",
                //   markers: true,
                scrub: 1,
              },
            }
          );
          gsap.set(BtnRef.current, { x: "0" });
      }, []);
    return(
        <Wrapper>
            <ContactWrapper>
                <div ref={ImgRef}>
                  <Image
                    width={456}
                    height={360}
                    objectFit="contain"
                    src="/home/contact/contact.png"
                    alt="contact"
                  />
                </div>
                <h2 ref={TitleRef}>Wypełnij krótki (🕔 3 min) formularz <br/> aby otrzymać wstępną wycenę</h2>
                <div ref={BtnRef}>
                    <Link href="/contact">
                        <div>
                            <Btn>ZAMÓW WYCENĘ</Btn>
                        </div>
                    </Link>
                </div>
            </ContactWrapper>
        </Wrapper>
    );
};

const ContactWrapper = styled.div`
    text-align: center;
    text-transform: uppercase;
    h2{
        font-size: 30px;
    }
    img{
        margin-top: 20px;
        width: 40%;
        @media(max-width: 1000px){
          width: 400px;
        }
        @media(max-width: 450px){
          width: 100%;
        }
    }
`;