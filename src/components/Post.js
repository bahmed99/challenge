import React, { useState } from 'react'
import {Toast, Card } from 'react-bootstrap'
import AttachFileIcon from '@material-ui/icons/AttachFile';
function Post() {
    const [com , setCom ] = useState(0)
    const [active,setActive]=useState(false)

    function HandleChange(){
        setActive(true)
        setCom(com+1)
    }

  
    
    return (

        <div>
            <Card className="Cardib">
                <Card.Header >
                    Cyrine
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        Post Goes Here
                </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
                <div className='boutonet'>
                    <div className='round-button primary' >
                            Bien Reçu
                            
                    </div>
                    <div className='round-button primary' onClick={HandleChange}>
                            Comments
                    </div>
                    {active?afficherCom():console.log("")} 
                </div>
            </Card>

        </div>

    )
}
function afficherCom(){
    return(
    <Toast>
        <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
            <strong className="mr-auto">Hakim</strong>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    </Toast>)
     
}


export default Post
