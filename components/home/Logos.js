// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
// // import styles from "../styles/components/Logos.module.scss";
// const logos = ["", "", "", "", "", "", "", "", "", ""];
// export const Logos = () => {
//   const logsDiv = useRef<any>(null);
//   const [atEnd, setAtEnd] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState<any>(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setScrollPosition(logsDiv.current.scrollLeft);
//     }, 50);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (
//         scrollPosition + logsDiv.current.offsetWidth >=
//         logsDiv.current.scrollWidth
//       ) {
//         logsDiv.current.scrollLeft = -logsDiv.current.offsetWidth;
//       } else {
//         logsDiv.current.scrollLeft = scrollPosition + 1;
//       }
//     }, 50);
//     return () => clearInterval(interval);
//   }, [scrollPosition]);

//   return (
//     <div className={styles.logos}>
//       <h2>Naprawiamy sprzęt marek</h2>
//       <div className={styles.tilesWrap}>
//         <div className={styles.tiles} ref={logsDiv}>
//           {[...logos, ...logos].map((logo, index) => (
//             <div key={index} className={styles.tilesTile}>
//               <Image
//                 src={`/brands/logo${
//                   index + 1 <= 9 ? index + 1 : index + 1 - 9
//                 }.png`}
//                 width={200}
//                 height={56}
//                 alt=""
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };