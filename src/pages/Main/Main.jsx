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
  AboutSecondText,
} from './Main.styles'

import logo from './../../assets/logoMain.svg'
import polina from './../../assets/Polina.png'
import back1 from './../../assets/back1.png'
import back2 from './../../assets/back2.png'
import back3 from './../../assets/back3.png'
import back4 from './../../assets/back4.png'
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
            <StyledLink to="/originals">Живопись, графика</StyledLink>
          </LinkWrapper>
          <LinkWrapper delay={2} duration={3} margin={80}>
            <StyledLink to="/posters">Постеры</StyledLink>
          </LinkWrapper>
          <LinkWrapper delay={1} duration={5} margin={30}>
            <StyledLink to="/photos">Фотокниги</StyledLink>
          </LinkWrapper>
          <LinkWrapper delay={4} duration={2} margin={20}>
            <StyledLink to="/accessories">
              Акварельные шелковые аксуссуары
            </StyledLink>
          </LinkWrapper>
        </Links>
      </LogoWrapper>
      <AboutWrapper>
        <AboutText>
          <h1>О себе</h1>
          <p>
            <Fade bottom text>
              Здравствуйте! Меня зовут Полина Шустова. Добро пожаловать на мой
              сайт! По образованию я художник-дизайнер. <br />
              <br /> В 1991 году закончила художественную школу в г. Ангарске и
              поступила на художественно-графический факультет Ростовского
              Государственного Педагогического Университета. <br />
              <br /> В 2003 году защитила кандидатскую диссертацию на тему:
              "Философско-культурологический анализ лица человека", занималась в
              творческой группе "Портрет", Павла Александровича Черных, Члена
              Союза художников РСФСР.
            </Fade>
          </p>
        </AboutText>
        <img src={polina} alt="" />
        <AboutSecondText>
          <p>
            <Fade left text>
              Участвовала в выставках: «Нетрадиционная графика», «Молодые
              художники юга России» и в нескольких выставках в Ростове-на-Дону,
              Москве, Санкт-Петербурге, Лондоне, Люксембурге. <br />
              <br /> Участвовала в конкурсе «Автопортрет» в Ростовской области и
              получила «Специальный приз» организаторов. <br /> <br /> Я ищу
              гармонию в жизни и живописи. Мои работы — это эксперимент с
              цветом, где сочетаются абстрактные формы с природными явлениями и
              созданиями. Полная детализация, контраст цвета и тона, погружение
              в глубь формы рождают ощущение и представление той найденной
              гармонии, которой очень хочется поделиться с миром. <br />
              <br />
              Любимые материалы - акварель, тушь, перо и масляные краски. Мои
              работы висят во многих домах в разных концах мира. С каждой моей
              работы можно заказать постер.  Постер печатается на высококлассной
              художественной бумаге, которая передает все нюансы и фактуру
              акварели или карандаша. Шершавая текстура художественной бумаги
              придаёт постеру благородство классического эстампа. <br /> <br />{' '}
              Для заказа фотокниги мне нужны ваши фотографии и доверие! Все фото
              обрабатываются и собираются в макет книги, у каждой книги дизайн
              индивидуальный. Размер может быть 30х30, 25х25,20х20. Цена зависит
              от размера и количества разворотов.
              <br />
              В 2023 году создала бренд люксовых "акварельных"шелковых
              аксессуаров "Полина Шустова". В коллекции несколько платков и
              шарфов, созданных на основе моих акварельных работ. Для
              изготовления Ваших платков используются только самый
              высококачественный натуральный шелк от ведущих итальянских
              производителей. Применяемые текстильные красители соответствуют
              самым жестким стандартам безопасности и экологии, таким как Ecotex
              100. Напечатанное изображение устойчиво к стирке, однако, для
              сохранения структуры натурального шелка, рекомендуется химчистка.
              <br /> <br /> <br />
              Для оформления заказа <br /> Почта: <b>shustovabooks@yandex.ru</b>
              <br />
              WhatsApp: <b>+7(918)554-79-40</b>
              <br />
              <br />
              Заказ отправляется только после 100% оплаты.
              <br />
              <br />
              По Ростову-на-Дону доставка бесплатно, в другие города - почтой на
              ваш выбор. <br />
              <br />
            </Fade>
          </p>
        </AboutSecondText>
      </AboutWrapper>
      <Fade bottom cascade>
        <StyledLink to="/originals">
          <PageBlock back={back1}>
            <h1>Живопись, графика</h1>
          </PageBlock>
        </StyledLink>
        <StyledLink to="/posters">
          <PageBlock back={back2}>
            <h1>Постеры</h1>
          </PageBlock>
        </StyledLink>
        <StyledLink to="/photos">
          <PageBlock back={back3}>
            <h1>Фотокниги</h1>
          </PageBlock>
        </StyledLink>
        <StyledLink to="/accessories">
          <PageBlock back={back4}>
            <h1>Акварельные шелковые аксуссуары</h1>
          </PageBlock>
        </StyledLink>
      </Fade>
      <ContactsWrapper>
        <Fade bottom cascade>
          <ContactsText>
            <h1>Контакты</h1>
            <p>
              inst: @polinashustovaart <br /> Tel: +79185547940
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
