import Chart from "../../components/Chart";


export default function MoneyUtilization() {
  return (
    <div className='lg:flex items-center lg:px-[15%] px-5 py-[3rem]'>
      <div className='flex-1 lg:mr-28 lg:mb-0 mb-4'>
        <h2 className="lg:text-4xl text-2xl mb-4 font-semibold">WHERE DOES YOU DONATION GO</h2>
        {/* <p>
          Our inspiration for Amal came from these programs specifically. Our goal is to connect the refugees to supporters who can offer a helping hand to address their problems so they may meet their basic requirements, including
        </p> */}
        <ul className="list-decimal">
          <li className="m-2">
            Access to emergency medical care.
          </li>
          <li className="m-2">
            place to eat, drink, and sleep.
          </li>
          <li className="m-2">
            Sanitation and hygiene kits to assist stop the spread of disease
          </li>
          <li className="m-2">
            Secure environments where young refugee kids may learn and play
          </li>
          <li className="m-2">
            Access to education
          </li>
          <li className="m-2">
            Psychosocial support to aid traumatized people in their recovery
          </li>
          <li className="m-2">
            Giving families in need financial grants so they can buy what they need
          </li>
        </ul>
      </div>
      <div className='h-[370px] lg:w-[370px] '>
        <Chart />
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