

export default function Cause() {
  return (
    <>
      <div className='causes-header h-[25vh] flex items-center justify-center text-white'>
        <h1 className="text-6xl font-bold">Causes</h1>
      </div>
      <div className="px-[8%] mt-4">
        <div className="grid grid-cols-3 gap-6">
          {[...new Array(3)].map(context => (
            <div className="border p-6">
              <p className="text-base">
                Children in poverty are more likely to be exposed to the stress of violence, gangs and drugs. This can negatively affect brain development and long-term well-being. Your support during this vulnerable time.
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
