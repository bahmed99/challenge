import React from 'react'
import { Form, Button, Card } from 'react-bootstrap'
function CreatePost() {
    return (
        <div>
            <Card className='Cardib'>
                <Form>
                    <div>
                        <h1 className="title">Your Post</h1>
                    </div>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder='Que voulez-vous dire, Cyrine'/>;
                    </Form.Group>
                    <Form.Group>
                        <input id="exampleFormControlFile1"  type='file' className='file-input' />
                        <label for='exampleFormControlFile1' className='round-button primary'>

                        </label>
                    </Form.Group>
                    <div className='round-button primary' >
                        Submit
                    </div>
                </Form>
            </Card>
        </div>
        
    )
}

export default CreatePost