import Image from 'next/image';
import styled from 'styled-components';
import Btn from '../layout/Btn';

export default function ContactEnd(){
    return(
        <ContactEndWrapper>
            <div>
                  <Image
                    width={456}
                    height={360}
                    objectFit="contain"
                    src="/home/contact/contact.png"
                    alt="contact"
                  />
            </div>
            <p>Dziękuję za przesłanie informacji.<br/> Skontaktujemy się z Tobą wkrótce.</p>
            <Btn link="/">STRONA GŁÓWNA</Btn>
        </ContactEndWrapper>
    );
};

const ContactEndWrapper = styled.div`
  text-align: center;
  p {
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    font-size: 20px;
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