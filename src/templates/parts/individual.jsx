import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
// import { Carousel } from 'react-responsive-carousel'
import Layout from 'components/layout/PageLayout'
import { ATagButton1 } from 'components/button/Button.styles'
import {
  Availability, 
  AvailabilityButtonWrapper,
  Bold,
  ContactSpan,
  ContentWrapper,
  Description,
  DescriptionWrapper,
  List,
  ListItem,
  Option,
  Options,
  MainHalfWidth,
  MainWrapper,
  PartNumber,
  Specifications,
  Spec,
  StyledCarousel,
  Title,
  TitleWrapper,
  Variations
} from 'components/parts/Part.styles'
import 'pure-react-carousel/dist/react-carousel.es.css';
const Part = ({
  pageContext: {
    part
  }
}) => {
  console.log('Part => ', part)
  const {
    description,
    id,
    images,
    link,
    options,
    specifications,
    title,
    variations
  } = part
  return (
    <Layout>
      <ContentWrapper>
        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
        <MainWrapper>
          <MainHalfWidth>
            <StyledCarousel
              infiniteLoop={true}
              showIndicators={false}
              showStatus={false}
              showThumbs={true}
            >
              {images.map(image => {
                return (
                  <div key={image.label}>
                    <img 
                      alt={image.label}
                      src={image.image}
                    />
                  </div>
                )
              })}
            </StyledCarousel>
          </MainHalfWidth>          
          <MainHalfWidth>
            <div>
              <PartNumber>
                <span>
                  <Bold>Part #:</Bold>
                  <span>{id}</span>
                </span>
                <ContactSpan>Contact For Availability</ContactSpan>
              </PartNumber>
              <AvailabilityButtonWrapper>
                <ATagButton1 href={link}>Check Availability</ATagButton1>
              </AvailabilityButtonWrapper>
            </div>
          { variations && <Variations dangerouslySetInnerHTML={{ __html: variations }}/> }
          </MainHalfWidth>
        </MainWrapper>
        <DescriptionWrapper>
          <Description dangerouslySetInnerHTML={{ __html: description }}/>
          <div>
            <List>
              <h3>Specifications</h3>
              {specifications.map(spec => {
                return <ListItem>{spec}</ListItem>
              })}
            </List>
            <List>
              <h3>Options</h3>
              {options.map(option => {
                return <ListItem>{option}</ListItem>
              })}
            </List>
          </div>
        </DescriptionWrapper>
      </ContentWrapper>
    </Layout>
  )
}

export default Part