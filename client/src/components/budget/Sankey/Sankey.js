import React, { useEffect, useState } from 'react';
import './Sankey.css';
import { Chart } from "react-google-charts"; 

function Sankey(props) {


  // Data that the Sankey diagram uses
  const[data, setData] = useState([
    ["From", "To", "Weight"]
  ]);

  // Optional inputs for the Sankey diagram
  const options = {};

  useEffect(() => {
    let array = [["From", "To", "Weight"]];

    props.incomeDataProp.map((incomeDataItem, index) => {
      let array2 = [incomeDataItem.category, "Total Income", parseInt(incomeDataItem.amount)];
      array.push(array2);
    })

    props.expenseDataProp.map((expenseDataItem, index) => {
      let array2 = ["Total Income", expenseDataItem.category, parseInt(expenseDataItem.amount)];
      array.push(array2);
    })

    setData(array);
    console.log(data)

  }, [props.incomeDataProp, props.expenseDataProp])

  // useEffect(() => {
  //   let array = [["From", "To", "Weight"]];

  //   props.expenseDataProp.map((expenseDataItem, index) => {
  //     let array2 = ["Total Income", expenseDataItem.category, parseInt(expenseDataItem.amount)];
  //     array.push(array2);
  //   })
  //   setData(array);
  //   console.log(data)

  // }, [props.expenseDataProp])


  return (
    <div className="Sankey">
      <Chart
          chartType="Sankey"
          width="100%"
          height="200px"
          data={data}
          options={options}
        />
    </div>
  );
}

export default Sankey;