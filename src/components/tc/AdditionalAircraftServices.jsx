import React from 'react'
import {
  List,
  ListItem,
  Title,
  Wrapper
} from './AdditionalAircraftServices.styles'

const AdditionalAircraftServices = ({
  services
}) => {
  return (
    <Wrapper>
      <Title>Additional Aircraft Services</Title>
      <div>
        { services && (
          <List>
            { services.map(service => (
              <ListItem key={service.service}>{service.service}</ListItem>
            ))}
          </List>
        )}
      </div>
    </Wrapper>
  )
}

export default AdditionalAircraftServices