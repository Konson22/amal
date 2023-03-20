import { useState } from "react"
import { FiUser } from "react-icons/fi"
import axiosInstance from '../../helpers/axiosInstance'
import countries from '../../assets/countries'
import { useChildren } from "../../contexts/ChildrenContextProvider";
import {storage} from '../../config'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

export default function AddChild() {
    const { setChildren } = useChildren();
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [image, setImage] = useState(null)
    const [uploadPercentage, setUploadPercentage] = useState(0)


    const handleSubmit = async ev => {
        ev.preventDefault()
        const formData = new FormData(ev.target)
        const imageRef = ref(storage, `images/${image.name}`)
        uploadBytes(imageRef, image).then((snapshut) => {
            getDownloadURL(snapshut.ref).then(url => {
                console.log(url)
            })
        })
        setLoading(true)
        try {
            const result = await axiosInstance.post('/children/register', formData, postOptions).then(res => res);
            setChildren(prev => {
                return [...prev, result.data]
            })
           console.log(result)
        } catch (error) {
            setMessage(error?.response?.data)
        }finally{
            setLoading(false)
        }
    }
    
    //AXIOS HEADER OPTIONS
    const postOptions = {
        widthCredentials:true, 
        withCredentials:'include',
        onUploadProgress:percentageLoaded => {
        const {total, loaded} = percentageLoaded
        const percent = Math.floor((loaded / total) * 100)
        percent <= 100 && setUploadPercentage(percent)
        }
    }
  return (
    <div className='lg:w-[50%] bg-gray-200 shadow-lg lg:p-[2rem] p-4 mx-auto lg:my-[2rem]'>
        <div className="mb-6">
            <h2 className="text-3xl font-bold">Share child story</h2>
            {loading && 'Loading...'}
            {message && message}
            {uploadPercentage === 100 && 'Uploaded successfully!' }
        </div>
        {loading && <FormLoader uploadPercentage={uploadPercentage} />}
        <form onSubmit={handleSubmit}>
            <div className="lg:grid grid-cols-2 gap-4">
                {formFields.map(field => (
                    <div className="mb-6 colspan-3">
                        <label className="block mx-1 mb-2" htmlFor={field.name}>{field.label}</label>
                        {(field.type === 'text' || field.type === 'number') && 
                            <input className="h-[3.5rem] bg-white w-full focus:border-none focus:outline-none px-3" {...field} />
                        }
                        {field.type === 'select' &&
                            <select className="h-[3.5rem] bg-white w-full focus:border-none focus:outline-none px-3" name={field.name}>
                                {field.options?.map((option, index) => (
                                    <option value={option.name} key={index}>{option.name ? option.name : option}</option>
                                ))}
                            </select>
                        }
                    </div>
                ))}
            </div>
            <div className="mb-6 colspan-3">
                <label className="block mx-1 mb-2" htmlFor='about'>About</label>
                <textarea className="h-[6.5rem] bg-white w-full focus:border-none focus:outline-none p-3" name='about'>
                </textarea>
            </div>
            <label className='flex items-center cursor-pointer' htmlFor="avatar">
                <span className="bg-teal-500 text-white p-3 rounded-full mr-3">
                    <FiUser className='lg:text-7xl text-4xl' />
                </span>
                <span> Upload Image</span>
            </label>
            <input className='hiddend' name='avatar' id='avatar' type="file" onChange={e => setImage(e.target.files[0])} />
            <button className="px-3 py-2 bg-teal-600 text-white mt-6" type="submit">Submit</button>
        </form>
    </div>
  )
}


function FormLoader({uploadPercentage}){
    return(
        <div className='h-screen backdrop-blur-sm w-full fixed inset-0 z-50 flex items-center justify-center'>
            <div className="lg:w-[50%] w-fuimd:p-8 p-4 rounded md:m-0 mx-4 bg-white">
                <h2 className="text-xl text-center">uploading...</h2>
                <img className='h-[6rem] w-[6rem] mx-auto my-6' src={process.env.PUBLIC_URL+'./images/loader.gif'} alt='Loading...' />
                <h2 className="text-3xl text-center font-bold">{uploadPercentage}%</h2>
                <span className="block text-center mt-4">Complete</span>
            </div>
        </div>
    )
}
const formFields = [
    {name:'name', placeholder:'Full name', label:'Name', type:'text'},
    {name:'gender', placeholder:'', label:'Gender', type:'select', options:['Male', 'Fe-male']},
    {name:'age', placeholder:'Age', label:'Age', type:'number'},
    {name:'country', placeholder:'', label:'Country', type:'select', options:countries},
    {name:'state', placeholder:'State', label:'State', type:'text'},
    {name:'area', placeholder:'Area address', label:'Area', type:'text'},
]