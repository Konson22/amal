// import { ErrorMessage, useField } from 'formik'



// export default function InputField({label, key='', ...props}){

//     const [field, meta] = useField(props)

//     return(
//         <div className="bg-gray-100" key={key}>
//             <label htmlFor={label}>{label}</label>
//             <input
//                 className={`focus:border-none focus:outline-none bg-transparent w-full border-none ${(meta.touched && meta.error) ? '':''}`}
//                 {...field}
//                 placeholder={field.placeholder}
//                 {...props}
//             />
//             <ErrorMessage component='div' name={field.name} className="error-card small text-danger mt-1" />
//         </div>
//     )
// }





export default function Input({...props}){

    // const [field, meta] = useField(props)

    return(
        <div className="mb-5">
            <label className='block m-1' htmlFor={props.label}>{props.label}</label>
            {(props.type !== 'textarea' && props.type !== 'select') && <input 
                className='lg:h-[3.5rem] h-[3.5rem] bg-gray-100 border focus:border-none focus:outline-none w-full border-none px-3'
                {...props}
            />}
            {props.type === 'select' &&
                <select className="h-12 bg-gray-100 border focus:border-none focus:outline-none w-full border-none px-3 mt-2" name={props.name}>
                    {props.options?.map((opt, index) => (
                        <option value={opt.title} key={index}>{opt.title}</option>
                    ))}
                </select>
            }
            {props.type === 'textarea' && 
                <textarea 
                    className='h-16 bg-gray-100 border focus:border-none focus:outline-none w-full border-none px-3'
                    {...props}
                ></textarea>
            }
        </div>
    )
}
