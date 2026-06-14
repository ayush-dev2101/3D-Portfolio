import { abilities } from '@/constants'
import { div } from 'framer-motion/client'
import React from 'react'

const FeatureCard = () => {
  return (
    <div className='w-full padding-x-lg'>
      <div className='mx-auto grid-3-col'>
        {abilities.map(({imgPath, title, desc})=>(
          <div>
            <h3>{title}</h3>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default FeatureCard