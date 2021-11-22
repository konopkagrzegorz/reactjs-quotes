import { useParams } from "react-router";
import { Fragment, useEffect } from "react";
import { Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../comments/Comments"
import HighLightedQuote from "../quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuoteDetail = () => {

    const match = useRouteMatch();
    const params = useParams();

    const {sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(params.quoteId)
    },[sendRequest,params.quoteId]);

    if (status === 'pending') {
        return <div className='centered'><LoadingSpinner></LoadingSpinner></div>
    }

    if (error) {
        return <p className="centered">{error}</p>
    }

    if (!loadedQuote.text) {
        return <p>No quote found!</p>
    }

    return (
        <Fragment>
        <HighLightedQuote text={loadedQuote.text} author={loadedQuote.author}></HighLightedQuote>
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