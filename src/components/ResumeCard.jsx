import React from 'react'
import { Candidates } from '../assets/Candidates';

export default function ResumeCard() {
    
  return (
    <div className='grid sm:grid-cols-3 md:grid-cols-5 gap-4 m-10 '>
        {Candidates.map((item) => (
            <div className='p-6 bg-orange-200 rounded-lg shadow-xl'>
                <p className='text-xl'>{item.name}</p>
                <p className='text-sm'>{item.specialization}</p>
                <p className='text-sm'>{item.college}</p>
            </div>
        ))}
    </div>
  )
}
