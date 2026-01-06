import { useState } from 'react'


const Content = ({part, exercises}) => {
    return(
        <div>
            {part.map(part => 
                <p key={part.id}>{part.name} {part.exercises}</p>
            )}
        </div>
  )
}
export default Content;