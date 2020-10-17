import React from 'react'
import {
  MainWrapper,
  Logo,
  LogoWrapper,
  AboutWrapper,
  AboutText,
  PageBlock,
  ContactsWrapper,
  ContactsImg,
  ContactsBackImg,
  ContactsText,
  ContactsTextAddres,
  Links,
  StyledLink,
  LinkWrapper,
} from './Main.styles'

import logo from './../../assets/logoMain.svg'
import polina from './../../assets/Polina.png'
import back1 from './../../assets/back1.png'
import back2 from './../../assets/back2.png'
import back3 from './../../assets/back3.png'
import contacts from './../../assets/contacts.svg'
import contactsBack from './../../assets/backImg.png'

import Fade from 'react-reveal/Fade'

const Main = (props) => {
  return (
    <MainWrapper>
      <LogoWrapper>
        <Logo src={`${logo}?${Math.random()}`} alt=""></Logo>
        <Links>
          <LinkWrapper delay={3} duration={4} margin={40}>
            <StyledLink to="?>>><lddsa/posters">Оригиналы</StyledLink>
          </LinkWrapper>
          <LinkWrapper delay={2} duration={3} margin={80}>
            <StyledLink to="/posters">Постеры</StyledLink>
          </LinkWrapper>
          <LinkWrapper delay={1} duration={5} margin={30}>
            <StyledLink to="/posters">Фотокниги</StyledLink>
          </LinkWrapper>
        </Links>
      </LogoWrapper>
      <AboutWrapper>
        <Fade bottom>
          <AboutText>
            <h1>О себе</h1>
            <p>
              Здравствуйте! Меня зовут Полина Шустова. Добро пожаловать на мой
              сайт! По образованию я художник-дизайнер. <br /> В 1991 году
              закончила художественную школу в г. Ангарске и поступила на
              художественно-графический факультет Ростовского Государственного
              Педагогического Университета. <br /> В 2003 году защитила
              кандидатской диссертацию на тему: "Философско-культурологический
              анализ лица человека", занималась в творческой группе "Портрет",
              Павла Александровича Черных, Члена Союза художников РСФСР.
              <br /> Участвовала в нескольких выставках в Ростове на Дону,
              Новочеркасске и по югу России. По Ростову на Дону доставка
              бесплатно, в другие города - почтой на ваш выбор. <br />
              Заказ отправляется только после 100% оплаты. Для заказа пишите на
              почту shustovabooks@yandex.ru или в whatsapp +79185547940
            </p>
          </AboutText>
          <img src={polina} alt="" />
        </Fade>
      </AboutWrapper>
      <Fade bottom cascade>
        <PageBlock back={back1}>
          <h1>Оригиналы</h1>
        </PageBlock>
        <PageBlock back={back2}>
          <h1>Постеры</h1>
        </PageBlock>
        <PageBlock back={back3}>
          <h1>Фотокниги</h1>
        </PageBlock>
      </Fade>
      <ContactsWrapper>
        <Fade bottom cascade>
          <ContactsText>
            <h1>Контакты</h1>
            <p>
              inst: @Polinashustova.ru <br /> Tel: +79185547940
            </p>
            <ContactsTextAddres>
              Ростов на Дону <br />
              Пр. Стачки 171 <br />
              3 этаж <br />
              Фотосалон О. Возлюбленной <br />
            </ContactsTextAddres>
          </ContactsText>
          <ContactsImg src={contacts} alt=""></ContactsImg>
          <ContactsBackImg src={contactsBack} alt=""></ContactsBackImg>
        </Fade>
      </ContactsWrapper>
    </MainWrapper>
  )
}

export default Main
