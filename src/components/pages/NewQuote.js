import QuoteForm from "../quotes/QuoteForm";
import { useHistory } from 'react-router-dom';
const NewQoute = () => {
    
    const history = useHistory();

    const addQuoteHandler = (quoteData) => {
        console.log(quoteData);
        history.push('/quotes');
    }
    return (
        <QuoteForm onAddQuote={addQuoteHandler}></QuoteForm>
    );
}

export default NewQoute;