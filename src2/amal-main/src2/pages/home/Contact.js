
export default function Contact() {
  return (
    <div className="bg-red-300 lg:px-[5%] px-4 lg:py-[8rem] py-[4rem]">
        <div className="lg:flex items-center">
            <div className="flex-1 text-white px-12">
                <p>If you have any question about donation you want to make to us or you already made.
                    our support care team is here to help you 
                </p>
            </div>
            <div className="flex-1 lg:px-12">
                <form>
                    {fields.map(field => (
                        <div className="h-[3.5rem] bg-white mb-4">
                            <input className="bg-transparent w-full h-full px-3 focus:border-none focus:outline-none" {...field} />
                        </div>
                    ))}
                </form>
            </div>
        </div>
    </div>
  )
}


const fields = [
    {name:'name', type:'text', placeholder:'Full name'},
    {name:'name', type:'text', placeholder:'Full name'},
    {name:'name', type:'text', placeholder:'Full name'},
    {name:'name', type:'text', placeholder:'Full name'},
]
