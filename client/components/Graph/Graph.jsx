import React from 'react'
import {Doughnut} from 'react-chartjs-2'

const Graph = () => {
  return (
    <Doughnut data={{labels: ['choc', 'van', 'pln'],
      datasets: [{
        label: 'doughnut label',
        data: [1, 2, 3, 4, 5, 4, 3, 2, 1, 20]
      }]
    }} width={100} height={50}/>
  )
}

export default Graph
