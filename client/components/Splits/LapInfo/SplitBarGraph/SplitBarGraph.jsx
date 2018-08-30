import React from 'react'
import {Bar} from 'react-chartjs-2'

const SplitBarGraph = (props) => {
  const keys = Object.keys(props.lapInfo.info)
  const labels = keys.filter(key => {
    return key !== 'time' && key !== 'calories' && key !== 'lap' && key !== 'distance'
  }).sort()
  console.log(labels)
  let values = []
  for (let item of labels) {
    console.log(item)
    console.log(props.lapInfo)
    values.push(props.lapInfo.info[item].value)
  }
  // console.log(props.lapInfo)
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
