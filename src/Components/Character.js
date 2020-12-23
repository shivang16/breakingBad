import React,{Component} from 'react'
import axios from 'axios'
import Card from './Cards'
import './Style/pagination.css'
import './Style/dropdown.css'

class Character extends Component {

    constructor(props){
        super(props);

        this.state = {
            character:[],
            currentPage:1,
            charactersPerPage:5,
            totalPage:0
        };
        this.goToPage = this.goToPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.changeNumberOfCharacterPerpage = this.changeNumberOfCharacterPerpage.bind(this);
    }

    goToPage(event){
        // console.log("Clicked!!");
        this.setState({
            currentPage:Number(event.target.id)
        });
    }

    changeNumberOfCharacterPerpage(event){
        this.setState(prevState=>({
            charactersPerPage:Number(event.target.id),
            totalPage:prevState.character.length/Number(event.target.id)

        }))

    }

    prevPage(event){
        if(this.state.currentPage>1)
        {    
            this.setState(prevState =>({
                currentPage:Number(prevState.currentPage-1)
            }));
        }
    }

    
    nextPage(event){
        if(this.state.currentPage<this.state.totalPage)
        {
            this.setState(prevState =>({
                currentPage:Number(prevState.currentPage+1)
            }));
        }
    }


    componentDidMount(){
        axios.get("https://www.breakingbadapi.com/api/characters")
        .then(res=>{
            this.setState(prevState=>({
                character:res.data,
                totalPage:res.data.length/prevState.charactersPerPage
            }))
        })
        .catch(err => { console.log("Error: "+ err) })
    }

    render() {
        const {character,currentPage,charactersPerPage} = this.state;
    
        // Logic for displaying current todos
        const indexOfLastCharacter = currentPage * charactersPerPage;
        const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
        const currentCharacter = character.slice(indexOfFirstCharacter, indexOfLastCharacter);

        const renderCharacter = currentCharacter.map((character,index)=>{
            return <Card key={index+indexOfFirstCharacter} props={character}/>;
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i=1; i <= Math.ceil(character.length / charactersPerPage); i++) {
        pageNumbers.push(i);
        }
        
        
        const renderPageNumbers = pageNumbers.map(number => { return (<a key={number} id={number} onClick={this.goToPage} href="!#">{number}</a>);});

        return (
            <div>
            <div class="center">

                <div class="navbar">
                    <div class="dropdown">
                        <button class="dropbtn">Number of Characters per page 
                            <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                            <a id="5" onClick={this.changeNumberOfCharacterPerpage} href="!#">5</a>
                            <a id="10" onClick={this.changeNumberOfCharacterPerpage} href="!#">10</a>
                            <a id="15" onClick={this.changeNumberOfCharacterPerpage} href="!#">15</a>
                            <a id="20" onClick={this.changeNumberOfCharacterPerpage} href="!#">20</a>
                            <a id="25" onClick={this.changeNumberOfCharacterPerpage} href="!#">25</a>
                        </div>
                    </div> 
                </div>


                <div class="pagination">
                    <a id="prevPage" onClick={this.prevPage} href="!#">&laquo;</a> 
                        {renderPageNumbers}   
                    <a id="nextPage" onClick={this.nextPage} href="!#">&raquo;</a>
                </div>    
            </div>
              <ul>
                {renderCharacter}
              </ul>
            <div class="center">
                <div class="pagination">
                    <a id="prevPage" onClick={this.prevPage} href="!#">&laquo;</a> 
                        {renderPageNumbers}   
                    <a id="nextPage" onClick={this.nextPage} href="!#">&raquo;</a>
                </div>    
            </div>
            </div>
          );

    }
}

export default Character;
