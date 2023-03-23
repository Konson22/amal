import Chart from "../components/Chart";

export default function HowWeSpendMoney() {
  return (
    <div className='lg:px-[17%] px-3 lg:py-[3rem] py-[1rem]'>
        {/* <div className='causes-header lg:py-[4.5rem] py-[2.5rem] lg:px-[24%] px-3 text-white'>
            <h1 className="lg:text-6xl text-3xl lg:font-bold">
                WHERE DOES YOU DONATION GO?
            </h1>
            <p className='text-xl'>
                It makes sense to want to know how charities spend their money when you donate to them so you can see where your money is going.
            </p>
        </div> */}
        <div className='lg:flex'>
            <div className="flex-1 lg:mr-20">
                <h1 className="lg:text-4xl text-2xl lg:font-bold">
                    WHERE DOES YOU DONATION GO?
                </h1>
                <p>
                    It makes sense to want to know how charities spend their money when you donate to them so you can see where your money is going. What happens to your money then?
                    One thing we consider is being truthful and transparent about our donations and how we utilize the money so that people can choose to support our causes in an informed way.
                </p>
                <ul className="mt-8 list-decimal">
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
                <div className="mt-8">
                    <h3 className="text-2xl">Programs for Refugees</h3>
                    <p>
                        Our inspiration for Amal came from these programs specifically. Our goal is to connect the refugees to supporters who can offer a helping hand to address their problems so they may meet their basic requirements
                    </p>
                </div>
                <div className="mt-8">
                    <h3 className="text-2xl">Fundraising expenses</h3>
                    <p>
                        This covers advertising, transaction fees, and fundraising activities
                    </p>
                </div>
                <div className="mt-8">
                    <h3 className="text-2xl">Retail Costs</h3>
                    <p>
                        This involves helping the refugees advertise their products on the platform
                    </p>
                </div>
            </div>
            <div className="lg:w-[40%] border lg:mt-0 mt-5 p-4">
                <Chart />
            </div>
        </div>
    </div>
  )
}
