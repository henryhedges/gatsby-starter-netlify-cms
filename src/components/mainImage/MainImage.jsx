import React from 'react'
import { MainImageSection, BackgroundImage, Title, Text } from './MainImage.styles'
import { ATagButton1 } from 'components/button/Button.styles'

const MainImage = ({ 
  button_text,
  height,
  image,
  imageOnly = false,
  imageUrl,
  link,
  text,
  titleSize = 'normal',
  titleIsAllCaps = false,
  title,
}) => {
  const isSansTextButtonText = !text && !button_text
  const isImageStyleQualified = isSansTextButtonText && image
  const isTitleAndImage = title && isImageStyleQualified && !text
  const isImageOnly = imageOnly || (!title && isImageStyleQualified)

  return (
    <MainImageSection 
      titleAndImage={isTitleAndImage}
      imageOnly={isImageOnly} 
      imageUrl={image} 
      height={height}
    >
      { title && <Title titleSize={titleSize}>{title}</Title>}
      { text && <Text>{text}</Text> }
      { button_text && link && <ATagButton1 href={link}>{button_text}</ATagButton1> }
    </MainImageSection>
  )
}

export default MainImage
