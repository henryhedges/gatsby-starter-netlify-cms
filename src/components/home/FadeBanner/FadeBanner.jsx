import React from 'react'
import {
  ClearFix,
  FadeBannerWrapper,
  FadeBannerTextContainer,
  ServiceTitle,
  Text
} from './FadeBanner.styles'

import { ATagButton1 } from 'components/button/Button.styles'

const FadeBanner = ({ 
  button_text,
  description,
  gradient,
  link,
  image,
  service,
  service_subheading
}) => {
  return (
    <FadeBannerWrapper image={image} gradient={gradient}>
      <FadeBannerTextContainer gradient={gradient}>
        { service_subheading && <div>{service_subheading}</div>}
        <ServiceTitle>{service}</ServiceTitle>
        <Text dangerouslySetInnerHTML={{__html: description}}/>
        <ATagButton1 href={link}>{button_text}</ATagButton1>
      </FadeBannerTextContainer>
      { gradient === 'right' && <ClearFix/> }
    </FadeBannerWrapper>
  )
}

export default FadeBanner
