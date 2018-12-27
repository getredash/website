import React from 'react'
import Link from 'components/Link'

const IntegrationsCard = ({ name, logo, link }) => {
  const cardContent = (
    <div className="card__item-content">
      <div className="card__item-brand">
        <img src={logo} className="card__item-brand_img" alt={name} />
      </div>
      <p className="card__item-title">{name}</p>
    </div>
  )

  if (link) {
    const url = `/data_sources/${name.toLowerCase().replace(/\s+/g, '-')}`
    return (
      <Link to={url} className="card__item">
        {cardContent}
      </Link>
    )
  } else {
    return <div className="card__item">{cardContent}</div>
  }
}

export default IntegrationsCard
