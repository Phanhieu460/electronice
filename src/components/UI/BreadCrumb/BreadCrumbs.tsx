import React from 'react'
import { Breadcrumb } from 'antd'

interface BreadCrumbProps {
  title: string
  href: string
}

const BreadCrumbs = (props: BreadCrumbProps) => {
  return (
    <div className="breadcrumb-container">
      <Breadcrumb
        items={[
          {
            title: 'HOME'
          },
          {
            title: `${props.title.toUpperCase()}`
          }
        ]}
      />
    </div>
  )
}

export default BreadCrumbs
