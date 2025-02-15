import React from 'react'

function page({ params }: { params: { id: string } }) {
    return (
      <div>Item {params.id}</div>
    )
  }

export default page