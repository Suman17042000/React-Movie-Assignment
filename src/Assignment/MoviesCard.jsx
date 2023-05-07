import React from "react";
import {Link} from 'react-router-dom';
import './index.css';
function MoviesCard({data}){
    return (
        <>
        <div className="cards">
            <div >
            {data.map((data, key) => {
        return (
          <div key={key} className="card">

            {data.show.image && (
              <div>
                <img src={data.show.image.medium} alt="My photos" className="card_img" />
              </div>
            )}

                <div className="card_info">
                <span className="card_category">{data.show.genres[0]} {data.show.genres[1]} {data.show.genres[2]}</span>
                    <h3 className="cardtitle">{data.show.name}</h3>
                    <Link to={`/details/${data.score}`}> <button 
                  >Know More</button></Link>
                    
            </div>
          </div>
        );
      })}
        </div>
        </div>
        </>
    );
}
export default MoviesCard;