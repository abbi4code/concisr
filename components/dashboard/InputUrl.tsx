"use client"
import React, { useState } from 'react'

export default function InputUrl() {
    const [url,setUrl] = useState("")
    const [loading,setLoading] = useState(false)

    const handleSubmit = ()=>{

    }
  return (
    <div className="flex justify-center items-center mt-10 w-full">
    <form onSubmit={handleSubmit} className="relative w-full md:w-[500px]">
      <input
        type="text"
        className="h-12 rounded-lg bg-muted border border-pink-400 border-dashed p-2 w-full md:w-[500px]  outline-none"
        placeholder="Enter your Podcast URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        disabled={loading}
      />
      {/* {loading && (
        <div className="absolute right-2 top-2.5">
          <Loading />
        </div>
      )} */}
    </form>
    {/* <span className="text-red-500">{errors?.url}</span> */}
  </div>
  )
}
