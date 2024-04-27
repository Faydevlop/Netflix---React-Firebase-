import React, { useEffect, useState } from 'react'
import requests from '../Requests'
import axios from 'axios'

function Main() {
    const [movies,setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(()=>{
        axios.get(requests.requestPopular).then((response)=>{
            setMovies(response.data.results)
        })

    },[]) 
    console.log(movie);

    const truncatString = (str , num) =>{
        if(str?.length > num){
            return str.slice(0,num) + '...'
        }else{
            return str
        }
    }


    
  return (
    <div className='w-full h-[550px] text-white' >
        <div className='w-full h-full'  >
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black' ></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie ? movie.title : ''} />

            <div className='absolute w-full top-[20%] p-4 md:p-8 '>
                <h1 className='text-3xl md:text-5xl font-bold' >{movie?.title}</h1>
            <div className='my-4 ' >
                
                <button className='border bg-gray-300 text-black rounded-sm border-gray-300 py-2 px-5 hover:opacity-70  ' >Play</button>
                <button className='border ml-2 text-white rounded-sm border-gray-300 py-2 px-5 hover:bg-red-600 hover:border-red-600 hover:text-black hover:opacity-100' >Watch Later</button>
            </div>
            < p className='text-gray-400 text-sm' >Released : {movie?.release_date}</p>
            <p className='w-full md:max-w-[70-%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 mt-2 '  >{truncatString(movie?.overview,150)}</p>
            </div>
            
        </div>

    </div>
  )
}

export default Main