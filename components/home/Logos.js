import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
const logos = ["", "", "", "", "", "", "", "", "", ""];
export const Logos = () => {
  const logsDiv = useRef(null);
  const [atEnd, setAtEnd] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition(logsDiv.current.scrollLeft);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        scrollPosition + logsDiv.current.offsetWidth >=
        logsDiv.current.scrollWidth
      ) {
        logsDiv.current.scrollLeft = -logsDiv.current.offsetWidth;
      } else {
        logsDiv.current.scrollLeft = scrollPosition + 1;
      }
    }, 50);
    return () => clearInterval(interval);
  }, [scrollPosition]);

  return (
    <XD>
      <div className={"logos"}>
        <h2>Zaufali nam:</h2>
        <div className={"tilesWrap"}>
          <div className={"tiles"} ref={logsDiv}>
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className={"tilesTile"}>
                <Image
                  src={`/../public/logos/logo${
                    index + 1 <= 10 ? index + 1 : index + 1 - 10
                  }.png`}
                  width={200}
                  height={96}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </XD>
  );
};

const XD = styled.div`
  .logos {
    padding: 80px 0;
  }
  .logos h2 {
    font-weight: 700;
    font-size: 28px;
    @media (max-width: 750px) {
      font-size:26px;
  }
    text-align: center;
    margin: 0 0 48px;
  }
  .tiles {
    display: flex;
    overflow-x: hidden;
  }
  .tiles::-moz-scrollbar {
    display: none;
  }
  .tiles::-webkit-scrollbar {
    display: none;
  }
  .tilesTile {
    min-width: 200px;
    width: 200px;
    height: 96px;

    margin-right: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 32px;
  }
  .tilesTitle:last-child {
    margin-right: 0;
  }
  .tilesWrap {
    position: relative;
  }
  .tilesWrap::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background: linear-gradient(
      90deg,
      rgba(250, 250, 249, 1) 0%,
      rgba(250, 250, 249, 0) 25%,
      rgba(250, 250, 249, 0) 75%,
      rgba(250, 250, 249, 1) 100%
    );
  }
`;