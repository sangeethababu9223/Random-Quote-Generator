import { Component } from "react";
import Quote from './Quote';
class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            quote: '',
        }
    }
    pickQuote = () => {
        let quotes = this.props.quotes;
        let max =  (quotes.length)-1;
        let key = Math.floor(Math.random() * (max + 1));
        let quoteItem = quotes[key];
        this.setState({
            quote: quoteItem['quote'],
        });
    }
    componentDidMount(){
        this.pickQuote();
    }
    render(){
        return(
            <div>
                <h1>Main Content Here</h1>
                {
                    this.state.quote ? 
                    <Quote quote={this.state.quote} />
                    :  
                    ''
                }
                <button onClick={this.pickQuote}>Get Quote</button>
            </div>
        )
    }
}
export default Main;