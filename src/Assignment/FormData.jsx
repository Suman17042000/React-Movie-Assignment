import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useParams,useNavigate} from "react-router-dom";

function FormData({data}) {
    const { id } = useParams();
    const navigate=useNavigate();
    const submit=(e)=>{
        e.preventDefault();
        alert("Your ticket is successfully Booked");
        navigate("/");
    }

    const detail = data.filter(item => (item.score).toString() === id)
  return (
    <Form onSubmit={submit}>
        <div className="container">
           { detail.map((data)=>{
                return(
                    <>
        <Form.Group className="mb-3" controlId="text">
        <Form.Label>MovieName</Form.Label>
        <Form.Control type="Text" value={data.show.name} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="text">
        <Form.Label>Language</Form.Label>
        <Form.Control type="text" value={data.show.language} />
      </Form.Group>
      
                </>
                    
                )

            })}
      

      <Form.Group className="mb-3" controlId="text">
        <Form.Label>Number of ticket to be booked</Form.Label>
        <Form.Control type="number" placeholder="0" />
      </Form.Group>
      <h4 style={{fontSize:14}}>Choose a Slot</h4>
        <select>
            <option value="">7.00 AM</option>
            <option value="">10.00 AM</option>
            <option value="">4.00 PM</option>
            <option value="">8.00 PM</option>
        </select>
        <br/>
        <br />
            
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </div>
      
    </Form>
    
  );
}

export default FormData;