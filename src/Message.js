import React from 'react'
import './Message.css'
import { Card, CardContent, Typography } from '@material-ui/core'

const Message = (props) => {
    return (
    
          <Card className='message__card'> 
             <CardContent>
              <Typography
              color='white'
              variant='h5'
              >
               {props.username}:{props.text}
              </Typography>
             </CardContent>
          </Card>
            
    
    )
}

export default Message

