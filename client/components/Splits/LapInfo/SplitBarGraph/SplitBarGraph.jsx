import React from 'react'
import {Bar} from 'react-chartjs-2'

const SplitBarGraph = (props) => {
  const keys =  Object.keys(props.lapInfo.info)
  const labels = keys.filter(key => {
    return key !== 'time'
  })
  console.log(labels)
  let values = []
  for (let item of labels) {
    console.log(item)
    console.log(props.lapInfo)
    values.push(props.lapInfo.info[item].value)
  }
  // console.log(props.lapInfo)
  return (
    <Bar data={{labels: labels,
      datasets: [{
        label: 'Fuel Consumes',
        data: values
      }]
    }} width={100} height={50}/>
  )
}

export default SplitBarGraph
