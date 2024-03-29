import QuoteForm from "../quotes/QuoteForm";
import { useHistory } from 'react-router-dom';
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
import { useEffect } from 'react';

const NewQoute = () => {
    
    const {sendRequest, status} = useHttp(addQuote);
    const history = useHistory();

    useEffect(() => {
        if (status === 'completed') {
            history.push('/quotes');
        }
    },[status,history])

    const addQuoteHandler = (quoteData) => {
        sendRequest(quoteData);
        history.push('/quotes');
    }
    return (
        <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}></QuoteForm>
    );
}

export default NewQoute;