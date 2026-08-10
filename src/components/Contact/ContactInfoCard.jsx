import contactinfo from '../../data/contactinfo'

function ContactInfoCard() {
    
  return ( 
    <div>
        <h2 className="text-2xl font-bold text-[#3b0133] mb-4 text-center ">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {contactinfo.map((info, index) =>{
                    const Icon = info.icon;
                    return (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center gap-4">
                        <div className="text-[#fb85ea] text-2xl">
                            <Icon className="text-[#fb85ea] text-2xl" />
                        </div>
                        <div className="py-12">
                            <h3 className="text-lg font-semibold text-[#3b0133]">{info.title}</h3>
                            <p className="text-gray-600">{info.value}</p>
                        </div>
                    </div>
                    )
                }
                
                )}
        </div>
    </div>
  )
}

export default ContactInfoCard