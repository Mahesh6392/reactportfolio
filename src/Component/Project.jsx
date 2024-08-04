import React from 'react'
import 'remixicon/fonts/remixicon.css'

function Project() {

  const data = [{src:'https://padmakumar-rp.vercel.app/static/media/projectseven.496cdaf08a2fa3bf7b4a.png',h:'TRUTHGUARD', a:'#', i:'ri-github-fill' , p:`TruthGuard is a cutting-edge web app empowering users against misinformation in today's digital era. Leveraging AI and NLP, TruthGuard helps users assess online content credibility for informed decision-making`},
    {src:'https://padmakumar-rp.vercel.app/static/media/projecttwo.c9665348d34ea2cb38d6.png',h:'Waste Mgmt', a:'#', i:'ri-github-fill' , p:'A Web App that encourages eco-friendly actions through blockchain integration, while AI automation enhances waste sorting and analysis efficiency.Using this model we can easliy connect with the industry and we can despose the waste'},
    {src:'https://padmakumar-rp.vercel.app/static/media/projectone.16a8456c4b8566d90297.png',h:'Farm2Home', a:'#', i:'ri-github-fill' , p:'It is a website which is designed to bring vegitables and fruits directly from the farmers to the customer in this we store the vegitable in a place owned by us and delevery charge will be based on the distance and the amount of delevery'},
    {src:'./public/images/pint.png',h:'Pintrest clone', a:'#', i:'ri-github-fill' , p:'This is a website which is a full stack project , it is a clone of of pintrest it has all the important features of the pintrest including user authentication and nearly all the features it is not the exact replica  in this all the datas are stored in the mongodb database'},
    {src:'./public/images/ap.png',h:'AppleVisionpro', a:'#', i:'ri-github-fill' , p:'It is a website which is a frontend based website , it is the replica of apple vision pro in this website i have used canvas which makes this website unique note this website is of before the launnch of the apple vision pro device . it has all the cool stuffs of the original website Lorem ipsum dolor sit amet.'},
    {src:'./public/images/ob.png',h:'Obys Clone', a:'#', i:'ri-github-fill' , p:'This is a clone website of obys Agency , i have replicated the hole website maily frontend part  this has all the cool effect of the actual website it has poinnter, guvy effect and all kind off effect which is actually present in the original  website Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, velit.'},
    
  ]  
  return (
    <div className='h-screen w-full ' id="project">
        <div>


            <h1 className='text-white font-bold text-5xl flex justify-center'>Projects</h1>
        <div className='flex flex-wrap relative left-10'>
            {data.map((value,index)=>(
                <div className="first w-[25%] h-[70%] bg-blue-700 rounded-md m-8">
                <img src={value.src} alt="" className='w-full flex  p-5 rounded' />
                <div className="head flex space-x-24 px-4">
                    <h1 className='text-xl font-bold'>{value.h}</h1>
                    <a href={value.a} className='text-2xl bg-gray-900 rounded-full text-white'><i class={value.i}></i></a>
                </div>
                <p className='p-4'>{value.p}</p>
            </div>
            ))}


            
        </div>

        </div>
      
    </div>
  )
}

export default Project
