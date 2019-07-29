import React from "react"
import Layout from 'components/layout/PageLayout'
import Parts from 'components/parts/Parts'
import { ImageWrapper, List, PartListItem, PartId, PartLink, PartTitle } from 'components/parts/Parts.styles'

const PartsList = ({
  pageContext: {
    parts,
    title,
    id
  }
}) => {
  return (
    <Layout>
      <Parts bodyTitle={`${title} Parts`}>
        <List>
          {
            parts.map( (part) => {
              const { id: partId, images, title: partTitle } = part.node.frontmatter
              const firstImage = images && images.length && images[0].image
              return (
                <PartListItem>
                  {firstImage && <ImageWrapper url={firstImage}/>}
                  <PartLink href={`/parts/${id}/${partId}`}>
                    <PartTitle>{partTitle}</PartTitle>
                    <PartId>{partId}</PartId>
                  </PartLink>
                </PartListItem>
                )
              })
            }
        </List>          
      </Parts>
    </Layout>
  )
}

export default PartsList