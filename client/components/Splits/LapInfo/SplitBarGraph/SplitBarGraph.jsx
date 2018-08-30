import React from 'react'
import {Bar} from 'react-chartjs-2'

const SplitBarGraph = (props) => {
  const lapInfo = props.lapInfo.info
  const keys = Object.keys(lapInfo)
  const labels = keys.filter(key => {
    return key !== 'time' && key !== 'calories' && key !== 'lap' && key !== 'distance'
  }).sort()
  let values = []
  for (let item of labels) {
    if (lapInfo[item].text === 'Water (mL)') {
      const waterInL = lapInfo[item].value / 1000
      values.push(waterInL)
    } else {
      values.push(lapInfo[item].value)
    }
  }
  return (
    <Bar
      data={{labels: labels,
        datasets: [{
          label: 'Fuel Consumes',
          data: values

        }]
      }}
      options={{
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }} width={300} height={100}/>
  )
}

export default SplitBarGraph
