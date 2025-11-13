import React, { use, useEffect, useState } from 'react'
import { Authcontext } from '../contextapi/Authcontext'
import { Link } from 'react-router';


const Favorites = () => {
  const { user } = use(Authcontext)
  const[del, setdel]=useState(false)
  const [mine, setmine] = useState([])
  const[loading, setloading]=useState(false)
  useEffect(() => {
    if (!user?.email) { return }
    setloading(true)
    const datas = fetch(`https://assignment-10-server-eta-eight.vercel.app/favorites/single?email=${user?.email}`).then(res => res.json())
      .then(ans => {
        setmine(ans)
        setloading(false)
      })
  }, [user, del])
  const handleunfav=(id)=>{
    setloading(true)
    fetch(`https://assignment-10-server-eta-eight.vercel.app/favorites/${id}`,{
      method:'DELETE'
    }).then(()=>{
      setdel(!del)
      setloading(false)
    })
  }
  if(loading){
    return <span className="loading loading-spinner text-success"></span>
  }
  return (
    <div>
      <div className="grid mb-25 mt-5 lg:grid-cols-3 sm:grid-cols-2 p-3.5 grid-cols-1 gap-5">
        {
          mine.map(single =>
            <div className=" bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img src={single.imageurl} className="w-full h-52 object-cover rounded-t-2xl" alt={single.title} />
              <div className="p-4 space-y-2">
                <h2 className="text-lg font-semibold text-gray-800">{single.title}</h2>
                <p className="text-sm text-gray-500">By: {single.artist}</p>
                <p className="text-sm text-green-600 font-medium">{single.category}</p>

                <div className="flex items-center justify-between mt-3">

                  <Link to={`/details/${single.favartid}`}>
                  <button className="btn bg-green-600 border-0 p-4">View Details</button>
                  </Link>
                  <button onClick={()=>handleunfav(single._id)} className="btn btn-dash text-red-600 btn-error">Unfavorite</button>
                </div>
              </div>
            </div>

          )
        }
      </div>
    </div>
  )
}

export default Favorites