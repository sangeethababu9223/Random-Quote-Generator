import { Component } from "react";

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            quote: '',
        }
    }
    componentDidMount(){
        let quotes= this.props.fetchQuote();
        let max =  (quotes.length)-1;
        let key = Math.floor(Math.random() * (max + 1));
        let quoteItem = quotes[key];
        console.log("quote:",quoteItem);
        this.setState({
            quote: quoteItem['quote'],
        })
    }
    render(){
        return(
            <div>
                <h1>Main Content Here</h1>
                {
                    this.state.quote ? 
                    <div>
                    {this.state.quote }
                    </div>
                    :  
                    ''
                }
            </div>
        )
    }
}
export default Main;