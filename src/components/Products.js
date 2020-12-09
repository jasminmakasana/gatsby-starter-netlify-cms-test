import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const ProductGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-4">
        <article className="tile is-child">
          <PreviewCompatibleImage imageInfo={item.image} />
        </article>
        <h3 className="has-text-weight-semibold is-size-3">
          {item.heading}
        </h3>
        <p className="description">{item.description}</p>
      </div>
    ))}
  </div>
)

ProductGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      heading: PropTypes.string,
      description: PropTypes.string,
    })
  ),
}

export default ProductGrid
