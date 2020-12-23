import React from 'react'
import ApperanceAndOccupation from './ApperanceAndOccupation';
import Quotes from './Quotes';
import './Style/card.css'
const Cards = ({props}) => {
        const {name,img,birthday,occupation,status,nickname,portrayed,appearance} = props;
        const multipleProp = {appearance,occupation};
        return (
            <div>
                <div class="card-container">
                    <span class="pro">{status}</span>
                    <span class="dob">{birthday}</span>
                    <img class="round" src={img} alt={name} width="150" height="150" />
                    <h3>{name} ({nickname})</h3>
                    <h6>{portrayed}</h6>
                    <ApperanceAndOccupation props={multipleProp}/>
                    <Quotes props={name}/>
                    
                </div>
                
            </div>
        )
    }
export default Cards;