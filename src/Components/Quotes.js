import Axios from 'axios';
import React,{Component} from 'react'
import './Style/toggleButton.css'
import './Style/list.css'

class Quotes extends Component {
    constructor(props){
        super(props);
        this.state = {
            quotes:[],
            author:props.props,
            visible:false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        this.setState(prevState=>({
            visible: !prevState.visible
        }))
    }

    componentDidMount(){
        var name = this.state.author;
        var author = name.split(" ").join("+");
        var path = "https://www.breakingbadapi.com/api/quote?author="+author; 
        Axios.get(path)
        .then(res=>{
            this.setState({
                quotes:res.data
            });
        })
        .catch(err=>{console.log("Error: "+err)});
    }


    render() {
        let quotesRender;
        if(this.state.visible===true)
        {
            quotesRender =  
                <div class="X">
                    <ul class="SG">
                    <li class="sgLi">
                        <div class="box">
                            <h3>Quotes</h3>
                                <ul class="df">
                                    {this.state.quotes.map(quote =><li key={quote.quote_id}>{quote.quote}</li>)}
                                </ul> 
                            </div>
                        </li>    
                    </ul>
                </div>
        }
            
        return (
            <div>
                <div class="divClass">
                    
                <button onClick={this.handleClick} class="button">Toggle Quotes</button>
                {quotesRender}
                </div>
            </div>
        )
    }
}

export default Quotes;