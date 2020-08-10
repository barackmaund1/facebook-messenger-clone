import React from 'react'
import './Message.css'
import { Card, CardContent, Typography } from '@material-ui/core'

const Message = ({username,message}) => {
    const isUser =username ===message.username;

    return (
          <div className={`message ${isUser && 'message__user' }`}>
            <Card className={isUser ? 'message__userCard':'message__guestCard'} > 
                <CardContent>
                    <Typography
                    color='white'
                    variant='h5'
                    >
                        {message.username}:{message.text}
                    </Typography>
                </CardContent>
            </Card>
            
 
          </div>
         
    )
}

export default Message

