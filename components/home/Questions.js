// import Image from "next/image";
// import styled from "styled-components";
// import Wrapper from "../layout/Wrapper";
// import gsap from "gsap";
// import { useRef, useEffect } from "react";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// export default function Questions({ data }) {
//   gsap.registerPlugin(ScrollTrigger);
//   const QuestionWrapRefs = useRef([]);
//   const QuestionLeftRefs = useRef([]);
//   const QuestionRightRefs = useRef([]);
//   QuestionWrapRefs.current = [];
//   QuestionLeftRefs.current = [];
//   QuestionRightRefs.current = [];
//   const addToWrapRefs = (el) => {
//     if (el && !QuestionWrapRefs.current.includes(el)) {
//       QuestionWrapRefs.current.push(el);
//       console.log(1);
//     }
//   };
//   const addToLeftRefs = (el) => {
//     if (el && !QuestionLeftRefs.current.includes(el)) {
//       QuestionLeftRefs.current.push(el);
//       console.log(2);
//     }
//   };
//   const addToRightRefs = (el) => {
//     if (el && !QuestionRightRefs.current.includes(el)) {
//       QuestionRightRefs.current.push(el);
//       console.log(QuestionRightRefs);
//     }
//   };

//   useEffect(() => {
//     QuestionWrapRefs.current.forEach((el, index) => {
//       ScrollTrigger.matchMedia({
//         "(min-width: 769px)": function () {
//       //IMAGE SHOW
//       gsap.fromTo(
//         QuestionLeftRefs.current[index],
//         {
//           x: "-=500",
//           opacity: 0,
//         },
//         {
//           x: "0",
//           opacity: 1,
//           scrollTrigger: {
//             trigger: el,
//             start: "top bottom",
//             end: "bottom bottom",
//             // markers: true,
//             scrub: 1,
//           },
//         }
//       );
//       gsap.set(QuestionLeftRefs.current[index], { x: "0" });
//       //TEXT SHOW
//       gsap.fromTo(
//         QuestionRightRefs.current[index],
//         {
//           x: "500",
//           opacity: 0,
//         },
//         {
//           x: "0",
//           opacity: 1,
//           scrollTrigger: {
//             trigger: el,
//             start: "top bottom",
//             end: "bottom bottom",
//             // markers: true,
//             scrub: 1,
//           },
//         }
//       );
//       gsap.set(QuestionRightRefs.current[index], { x: "0" });
//     }});
//     });
//   }, []);
//   return (
//     <Wrapper>
//       {data.map((item, index) => (
//         <Section key={index} ref={addToWrapRefs} even={index % 2 === 0}>
//           <div ref={index % 2 === 0 ? addToLeftRefs : addToRightRefs}>
//             <Image src={item.image} width={500} height={500} alt="item" />
//           </div>
//           <div ref={!(index % 2 === 0) ? addToLeftRefs : addToRightRefs}>
//             <h2>{item.title}</h2>
//             <p>{item.text}</p>
//           </div>
//         </Section>
//       ))}
//     </Wrapper>
//   );
// }

// const Section = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
//   & > img {
//     width: 100%;
//   }
//   align-items: center;
//   column-gap: 64px;
//   margin-bottom: 40px;
//   & > div:first-child {
//     margin: 0 auto;
//     @media (min-width: 769px) {
//       order: ${(props) => (props.even ? 0 : 1)};
//     }
//   }
//   h2 {
//     font-size: 30px;
//     margin-bottom: 12px;
//   }
//   p {
//     font-size: 18px;
//   }
// `;
