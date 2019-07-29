import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates2/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  console.log('Entry => ', entry)
  console.log('DATA => ', data)
  console.log('Get Asset => ', getAsset)

  return <div>IDX preview</div>
  // if (data) {
  //   return (
  //     <IndexPageTemplate
  //       image={data.image}
  //       title={data.title}
  //       heading={data.heading}
  //       subheading={data.subheading}
  //       description={data.description}
  //       intro={data.intro || { blurbs: [] }}
  //       mainpitch={data.mainpitch || {}}
  //     />
  //   )
  // } else {
  //   return (<div>Loading...</div>)
  // }
}

export default IndexPagePreview
