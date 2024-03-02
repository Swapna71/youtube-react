import React from 'react'
import Button from './Button'

const BtnList = () => {
  return (
    <div className='flex overflow-hidden ml-8'>
      <Button name={'All'}/>
      <Button name={'Movies'}/>
      <Button name={'Sports'}/>
      <Button name={'Gaming'}/>
      <Button name={'Vlogs'}/>
      <Button name={'Music'}/>
      <Button name={'Cricket'}/>
      <Button name={'News'}/>
      <Button name={'Romantic'}/>
      <Button name={'Story'}/>
      <Button name={'Cooking'}/>

   
    </div>
  )
}

export default BtnList
