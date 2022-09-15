import React from 'react'
import Card, { CardVariant } from '../components/Card'
import EventExapmle from '../components/EventExapmle'

const TrushPage = () => {
  return (
    <div>
      <Card width='200px' height='200px' variant={CardVariant.outlined} onClick={() => {}}>
        <button></button>
      </Card>
      <EventExapmle />
    </div>
  )
}

export default TrushPage
