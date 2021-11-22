import { useParams } from "react-router";
import { Fragment } from "react";
import { Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../comments/Comments"
import HighLightedQuote from "../quotes/HighlightedQuote";

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Grzegorz Konopka', text: 'Wszystko jest niemożliwe, niemożliwe wymaga po prostu więcej czasu'},
    {id: 'q2', author: 'Martyna Komenda', text: 'Wszystko jest możliwe, niemożliwe wymaga po prostu więcej czasu'}
]

const QuoteDetail = () => {

    const match = useRouteMatch();
    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!quote) {
        return <p>No quote found!</p>
    }

    return (
        <Fragment>
        <HighLightedQuote text={quote.text} author={quote.author}></HighLightedQuote>
        <Route path={match.path} exact>
        <div className='centered'>
            <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
        </div>
        </Route>
        <Route path={`${match.path}/comments`}>
            <Comments></Comments>
        </Route>
        </Fragment>
    );
}

export default QuoteDetail;