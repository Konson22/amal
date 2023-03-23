import { Pie } from 'react-chartjs-2';


const state = {
  labels: ['Refugee programs', 'Fundraising Costs', 'Administration Costs', 'Retail Costs'],
  datasets: [
    {
      label: 'Donation Usage',
      backgroundColor: [
        '#003350',
        '#c7b517',
        '#59c738',
        '#9e38c7'
      ],
      hoverBackgroundColor: [
      '#35014F'
      ],
      data: [85, 8, 4, 3]
    }
  ]
}


export default function Chart() {
  return (
    <Pie
        data={state}
        width={300}
        height={300}
        options={{
        title:{
            display:false,
            text:'Average Rainfall per month',
            fontSize:20,
        },
        legend:{
            display:false,
            position:'right'
        }
        }}
    />
  )
}
