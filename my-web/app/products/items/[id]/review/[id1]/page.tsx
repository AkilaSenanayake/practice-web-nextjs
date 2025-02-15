import React from 'react'

interface PageParams {
    id: string
    id1: string
  }
  
  function page(params: PageParams) {
    return (
      <div>Item {params.id} review {params.id1}</div>
    )
  }

export default page