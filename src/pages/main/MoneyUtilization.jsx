import { Pie } from 'react-chartjs-2';
// import { FaHandHoldingHeart } from 'react-icons/fa'


const state = {
  labels: ['Camp', 'Education', 'Expense'],
  datasets: [
    {
      label: 'Donation Usage',
      backgroundColor: [
        '#B21F00',
        '#2FDE00',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [20, 65, 15]
    }
  ]
}


export default function MoneyUtilization() {
  return (
    <div className='lg:flex items-center lg:px-[8%] px-5 bg-gray-200 py-[3rem]'>
        <div className='flex-1 lg:mr-28'>
            <h2 className="lg:text-5xl text-3xl font-semibold">How we utilize donations</h2>
            {[...new Array(3)].map(() => (
                <div className="mt-6">
                    <h3 className="text-2xl">Donation</h3>
                    <p>
                        Children in poverty are more likely to be exposed to the stress of violence, gangs and drugs. This can negatively affect brain development and long-term well-being. Your support during this vulnerable time.
                    </p>
                </div>
            ))}
        </div>
        <div className='h-[450px] lg:w-[450px] '>
            <Pie
                data={state}
                width={400}
                height={400}
                options={{
                    title:{
                        display:true,
                        text:'Average Rainfall per month',
                        fontSize:20,
                    },
                    legend:{
                        display:true,
                        position:'right'
                    }
                }}
            />
        </div>
    </div>
  )
}



// export default class Skills extends React.Component {
//   render() {
//     return (
//       <div className='text-white'>
        
//       </div>
//     );
//   }
// }