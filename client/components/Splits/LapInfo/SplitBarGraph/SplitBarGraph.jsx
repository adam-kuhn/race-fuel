import React from 'react'
import {Bar} from 'react-chartjs-2'

const SplitBarGraph = (props) => {
  const lapInfo = props.lapInfo.info
  console.log('lapinfo', lapInfo)
  // const keys = Object.keys(lapInfo)
  let lapItems = []
  for (let item in lapInfo) {
    let itemText = lapInfo[item].text
    console.log(itemText)
    if (itemText !== 'Calories' && itemText !== 'Distance (Km)' &&
  itemText !== 'Distanc (Mi)' && itemText) {
      let lapItem = []
      if (lapInfo[item].text === 'Water (mL)') {
        lapItem[0] = 'Water (L)'
        lapItem[1] = lapInfo[item].value / 1000
      } else {
        lapItem[0] = lapInfo[item].text
        lapItem[1] = lapInfo[item].value
      }
      lapItems.push(lapItem)
    }
  }

  lapItems.sort()

  // const graphItems = lapItems.filter(item => {
  //   return item[0] !== 'time' && item[0] !== 'calories' && item[0] !== 'lap' && item[0] !== 'distance'
  // }).sort()

  console.log('graph items', lapItems)
  // const labels = lapItems.filter(item => {
  //   return item !== 'time' && item !== 'calories' && item !== 'lap' && item !== 'distance'
  // }).sort()
  let graphLabels = []
  let graphValues = []
  for (let item of lapItems) {
    if (item[0] === 'Peanut Butter and Jelly Sandwiches') {
      item[0] = [['PB & J'], ['Sandwhich']]
    }
    graphLabels.push(item[0])
    graphValues.push(item[1])
  }
  // for (let item of labels) {
  //   if (lapInfo[item] === 'Water (L)') {
  //     const waterInL = lapInfo[item].value / 1000
  //     values.push(waterInL)
  //   } else {
  //     values.push(lapInfo[item].value)
  //   }
  // }
  return (
    <Bar
      data={{labels: graphLabels,
        datasets: [{
          label: 'Fuel Consumes',
          data: graphValues

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
