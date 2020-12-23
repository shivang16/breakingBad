import React from 'react'
import './Style/list.css'
const ApperanceAndOccupation = ({props}) => {
        let {appearance,occupation} = props;
        // console.log(props);
        if(appearance==null)
        {
            appearance = ['Unknown']
        }   
        if(occupation==null)
        {
            occupation = ['Unknown']
        }   
        return (
            <div>
                <div class="X">
                    <ul class="SG">
                        <li class="sgLi">
                            <div class="box">
                                <h3>Appearance</h3>
                                <ul class="df">
                                    {appearance.map(name => <li>{name}</li>)}
                                </ul> 
                            </div>
                        </li>
                         
                        <li class="sgLi">
                            <div class="box">
                            <h3>Occupation</h3>
                                <ul class="df">
                                    {occupation.map(name => <li>{name}</li>)}
                                </ul>
                            </div>
                        </li>    
                    </ul>
                </div>
            </div>
        )
    }
export default ApperanceAndOccupation;