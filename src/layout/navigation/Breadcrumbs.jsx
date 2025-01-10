import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const Breadcrumbs = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  return (
    <Breadcrumb>
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
        Home
      </Breadcrumb.Item>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`
        const isLast = index === pathnames.length - 1
        return isLast ? (
          <Breadcrumb.Item active key={to}>
            {decodeURIComponent(value)}
          </Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item linkAs={Link} linkProps={{ to }} key={to}>
            {decodeURIComponent(value)}
          </Breadcrumb.Item>
        )
      })}
    </Breadcrumb>
  )
}

export default Breadcrumbs
