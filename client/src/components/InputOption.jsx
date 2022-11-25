import React from 'react'

export default function InputOption({title,Icon,color="gray"}) {
  return (
    <div className='inputOption'>
        <Icon style={{color:color}} />
        <h4>{title}</h4>
    </div>
  )
}
