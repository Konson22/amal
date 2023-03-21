import { useState } from "react";
import { FaHeartbeat, FaRegComments } from "react-icons/fa";


export default function Blog() {
  return (
    <>
      <div className='flex px-[8%] pt-8'>
        <div className="flex-1">
          <h1 className="lg:text-3xl text-xl">Listen to refugees issues</h1>
          <div className="mt-6">
            {posts.map(post => <PostCard post={post} />)}
          </div>
        </div>
        <div className="lg:block hidden w-[40%]">

        </div>
      </div>
    </>
  )
}

const PostCard = ({ post }) => {

  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className='border shadow-sm mb-8 lg:p-3 p-2'>
      <div className="flex items-center mb-3">
        <img  className='lg:h-[50px] lg:w-[50px] h-[40px] w-[40px] rounded-full' src={post.image} alt='' />
        <div className="ml-3">
          <h5 className="font-bold m-0">{post.user} - <span className="text-sm text-gray-400">{post.country}</span></h5>
          <span className="text-sm text-gray-400">12/02/2023</span>
        </div>
      </div>
      {post.image && <img  className='lg:h-[300px] h-[200px]' src={post.image} alt='' />}
      <div className="py-3">
        <h4 className="text-2xl font-bold mb-2">{post.title}</h4>
        <p className="">{post.body}</p>
        <div className="flex items-center mt-4">
          <div className="flex items-center cursor-pointer bg-gray-200 p-2 mr-3">
            <FaHeartbeat className="text-2xl mr-2" /> ({post.likes})
          </div>
          <div className="flex items-center cursor-pointer bg-gray-200 p-2 mr-3" onClick={() => setIsOpen(!isOpen)}>
            <FaRegComments className="text-2xl mr-2" />
            comments ({post.comments?.length})
          </div>
        </div>
      </div>
      <div className={`mt-4 ${isOpen ? '' : 'hidden'}`}>
        <div className="flex bg-gray-100 mb-4">
          <input type="text" className="h-[4rem] w-full bg-transparent focus:border-none focus:outline-none p-2" placeholder='Write comment...' />
          <button className="px-3 py-2 bg-sky-500 text-white">Save</button>
        </div>
        <h3 className="text-xl my-3">Comments:</h3>
        {post.comments?.length > 0 ? post.comments.map(comment => (
          <div className="bg-gray-100 border p-3 mb-4">
            <p className="">{comment.text}</p>
          </div>
        )) :
        <span className="">Be first the to comment.</span>
        }
      </div>
    </div>
  )
}

const posts = [
  {
    user:'Moses buay',
    country:'S.Sudan',
    title:'Issue facing refugees',
    body:`When you sponsor a child you create a powerfull effect, multiplier effect. you help them see beyond the daily strugles of life in poverty. your support release them from a cycle of a short-tem descission and help them gain the ability to being contributing to thier families and communities.`,
    image:process.env.PUBLIC_URL+'./images/ben-white-83tkHLPgg2Q-unsplash.jpg',
    likes:4,
    comments:[
      {
        user:'James Bol',
        text:'your support release them from a cycle of a short-tem descission and help them gain the ability to being contributing to'
      },
      {
        user:'James Bol',
        text:'your support release them from a cycle of a short-tem descission'
      },
      {
        user:'James Bol',
        text:'your support release them from a cycle of a short-tem descission and help them gain the ability to being contributing to thier families'
      },
    ]
  },
  {
    user:'Kon Akech',
    country:'Uganda',
    title:'Luck of school for refugee children',
    body:`When you sponsor a child you create a powerfull effect, multiplier effect. you help them see beyond the daily strugles of life in poverty. your support release them from a cycle of a short-tem When you sponsor a child you create a powerfull effect, multiplier effect. you help them see beyond the daily strugles of life in poverty. your support release them from a cycle of a short-tem descission and help them gain the ability to being contributing to thier families and communities.`,
    image:null,
    likes:42,
    comments:[
      {
        user:'James Bol',
        text:'your support release them from a cycle of a short-tem descission'
      },
      {
        user:'James Bol',
        text:'your support release them from a cycle of a short-tem descission and help them gain the ability to being contributing to thier families'
      },
    ]
  },
  {
    user:'Moses buay',
    country:'S.Sudan',
    title:'Issue facing refugees',
    body:`When you sponsor a child you create a powerfull effect, multiplier effect. you help them see beyond the daily strugles of life in poverty. your support release them from a cycle of a short-tem descission and help them gain the ability to being contributing to thier families and communities.`,
    image:process.env.PUBLIC_URL+'./images/annie-spratt-cVEOh_JJmEE-unsplash.jpg',
    likes:24,
    comments:[
      {
        user:'James Bol',
        text:'your support release them from a cycle of a short-tem descission and help them gain the ability to being contributing to'
      },
      {
        user:'James Bol',
        text:'your support release them from a cycle of a short-tem descission'
      },
      {
        user:'James Bol',
        text:'your support release them from a cycle of a short-tem descission and help them gain the ability to being contributing to thier families'
      },
      {
        user:'James Bol',
        text:'your support release them from a cycle of a short-tem descission'
      },
      {
        user:'James Bol',
        text:'your support release them from a cycle of a short-tem descission and help them gain the ability to being contributing to thier families'
      },
    ]
  },
  {
    user:'Suzan James',
    country:'S.Sudan',
    title:'Issue facing refugees',
    body:`When you sponsor a child you create a powerfull effect, multiplier effect. you help them see beyond the daily strugles of life in poverty. your support release them from a cycle of a short-tem descission and help them gain the ability to being contributing to thier families and communities.`,
    image:process.env.PUBLIC_URL+'./images/siddhant-soni-CvqCzwVOhCM-unsplash.jpg',
    likes:36,
    comments:[]
  },
]