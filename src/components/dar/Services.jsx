import React from 'react'
import {
  ServicesList,
  ServicesListItem,
  Title,
  Wrapper
} from './Services.styles.jsx'

const Services = ({
  services
}) => {
  return (
    <Wrapper>
      <Title>Services</Title>
      <ServicesList>
        { services.map(service => <ServicesListItem key={service.service}>{service.service}</ServicesListItem>)}
      </ServicesList>
    </Wrapper>
  )
}

export default Services