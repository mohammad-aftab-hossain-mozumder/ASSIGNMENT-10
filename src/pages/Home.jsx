import Banner from '../components/Banner'
import JoinCommunity from '../components/JoinCommunity'
import TopArtists from '../components/TopArtists'
import { Link, useLoaderData, useNavigation } from 'react-router'
import { Zoom } from 'react-awesome-reveal'
import { useEffect, useState } from 'react'

const Home = () => {
  const[datas,setdatas]=useState([])
  const [loader, setloader] = useState(false)
  useEffect(()=>{
    setloader(true)
    fetch("https://assignment-10-server-eta-eight.vercel.app/posts/recent")
    .then(res=>res.json())
    .then(ans=>{
      setdatas(ans)
      setloader(false)
    })
  },[])
  console.log("datas",datas)
  return (
    <div>
      <Banner></Banner>
      <h1 className='text-4xl mt-15 mb-8 font-black text-center text-green-600'>Featured Artworks</h1>
      <div className="grid  lg:grid-cols-3 sm:grid-cols-2 p-3.5 grid-cols-1 gap-5">
        {
          loader?<span className="loading loading-spinner text-success"></span>:
          datas.map(data =>
            <Zoom>
              <div className=" bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <img src={data.imageurl} className="w-full h-52 object-cover rounded-t-2xl" alt={data.title} />
                <div className="p-4 space-y-2">
                  <h2 className="text-lg font-semibold text-gray-800">{data.title}</h2>
                  <p className="text-sm text-gray-500">By: {data.artist}</p>
                  <p className="text-sm text-green-600 font-medium">{data.category}</p>
                  <Link to={`/details/${data._id}`}><button className="btn w-full bg-green-600 border-0 p-4">
                    View Details
                  </button></Link>

                </div>
              </div>
            </Zoom>
          )
        }
      </div>
      <JoinCommunity></JoinCommunity>
      <TopArtists></TopArtists>
    </div>
  )
}

export default Home