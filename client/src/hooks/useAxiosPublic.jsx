import axios from 'axios'
import React from 'react'


const axiosPublic =  axios.create({
    baseURL: 'https://madad-ni03.onrender.com',
  })

const useAxiosPublic = () => {
  return axiosPublic
}

export default useAxiosPublic;

  