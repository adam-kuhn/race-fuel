import React from 'react'
import {Bar} from 'react-chartjs-2'

const SplitBarGraph = (props) => {
  const lapInfo = props.lapInfo.info
  let lapItems = []
  for (let item in lapInfo) {
    let itemText = lapInfo[item].text
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

  let graphLabels = []
  let graphValues = []
  for (let item of lapItems) {
    if (item[0] === 'Peanut Butter and Jelly Sandwiches') {
      item[0] = [['PB & J'], ['Sandwhich']]
    }
    graphLabels.push(item[0])
    graphValues.push(item[1])
  }

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
