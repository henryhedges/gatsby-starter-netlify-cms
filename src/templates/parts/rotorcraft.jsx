import React from "react"
import Layout from 'components/layout/PageLayout'
import Parts from 'components/parts/Parts'
import { List, ListItem } from 'components/parts/Parts.styles'

const Rotorcraft = ({
  pageContext: {
    edges
  }
}) => {
  return (
    <Layout>
      <Parts bodyTitle='Rotorcraft Models'>
        <List>
          {
            edges.map( (item) => {
              const { id, title } = item.node.frontmatter
              return (
                <ListItem key={id}><a href={`/parts/${id}`}>{title}</a></ListItem>
                )
              })
            }
        </List>
      </Parts>
    </Layout>
  )
}

export default Rotorcraft