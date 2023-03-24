import Input from "./forms/Input"

export default function Donate() {
  return (
    <>
        <div className='causes-header lg:py-[4.5rem] py-[2.5rem] lg:px-[24%] px-3 text-white'>
            <h1 className="lg:text-6xl text-3xl lg:font-bold">
                Donations are easy and secure
            </h1>
            <p className='lg:text-3xl mt-2'>
                Every contribution makes a real difference in the lives of vulnerable Refugees and displace families, will you be the answer to their prayers today?
            </p>
        </div>
        <div className="lg:flex lg:px-[8%] px-3 lg:py-[5rem] py-[2.5rem]">
            <div className="flex-1 bg-gray-200 lg:p-8 p-4">
                <h1 className="text-3xl font-bold">Make donation</h1>
                <p className="text-xl">If you have feedback, questions or would like to get involved, we’d love to hear from you.</p>
                <form className='mt-6'>
                    {donationFields.map(field => (
                        <Input field={field.name} label={field.label} type={field.type} placeholder={field.placeholder} />
                    ))}
                    <button className="w-full px-3 py-2 bg-orange text-white rounded mt-5">Send</button>
                </form>
            </div>
            <div className="flex-1 text-centerr lg:p-8 p-4 lg:mt-0 mt-6">
                <div className="text-3xl font-bold mb-3">
                    Why would you donate
                </div>
                <ul className="list-decimal">
                    {[...new Array(4)].map((item) => (
                        <li className="my-3">
                            Acknowledging our shared humanity is a powerful act. With your help, we offer refugees material support and priceless solidarity.
                            Acknowledging our shared humanity is a powerful act. With your help, we offer refugees material support and priceless solidarity.
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </>
  )
}



const donationFields = [
    {name:'name', type:'text', placeholder:'Your name', label:'Name'},
    {name:'coutry', type:'text', placeholder:'Your Country', label:'Country'},
    {name:'address', type:'text', placeholder:'Your Address', label:'Address'},
    {name:'email', type:'text', placeholder:'example@gmail.com', label:'E-mail'},
    {name:'name', type:'text', placeholder:'Your name', label:'Name'},
]