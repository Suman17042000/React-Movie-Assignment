import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import { useParams, Link,useNavigate} from "react-router-dom";
import './index1.css';
const Details=({data})=>{

    const { id } = useParams();
    const detail = data.filter(item => (item.score).toString() === id);
    console.log(detail);

    
    return(
        <>
        
            {detail.map((data)=>{
                return(
                    <>
                    <h1 >{data.show.name}</h1>

                    <div className="showinfo">
                    <h4>Show Info</h4>
                    <strong>Network: </strong>{data.show.network && <span>{data.show.network.name}</span>}
                    <br />
                    {/* <h4><span>Schedule:</span>{data.show.schedule}</h4> */}
                    <strong>Status:</strong><span>{data.show.status}</span>
                    <br />
                    <strong>Show-Type: </strong><span>{data.show.type}</span>
                    <br />
                    <strong>Genres: </strong>
                    <span>{data.show.genres[0]} {data.show.genres[1]} {data.show.genres[2]}</span>
                    <br />
                    <strong>Premiered: </strong>
                    <span>{data.show.premiered}</span><br />
                    <strong>Url:<span> <a href={data.show.url}>{data.show.url}</a></span></strong>
                    <br />
                    <Link to={`/book-now/${data.score}`}> 
                    <Button variant="primary" 
                  >Book Now</Button></Link>
                   </div>

                   <div className="para">
                    {data.show.image && (
              <div>
                <img src={data.show.image.medium} alt="My photos" className="card_img1" />
              </div>
            )}

                    <div className="p">
                  {data.show.summary}
                  </div>
            </div>

                   
                        
                     
                    </>
                )
            })} 
        </>

    );

}
export default Details;