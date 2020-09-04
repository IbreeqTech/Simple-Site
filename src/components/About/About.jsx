import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';
import ProgramImg from '../../images/undraw_programming_2svr.png';

const AboutImg = styled.img`
  width: 100%;
`;

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About ITG" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" src={ProgramImg} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <h2 className="about-wrapper__info-text">
                  {paragraphOne ||
                    'THE ITG TEAM IS COMPRISED OF DEDICATED DESIGNERS, DEVELOPERS, AND ON-DEMAND SPECIALISTS.'}
                </h2>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'At ITG we are critical thinkers that put all our energy into solving your problems for you! Leave the hard stuff to us.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    'We like to make you as comfortable as possible, whether you like to be with us through every step of the process, or a more a hands off approach, we do it all.'}
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
