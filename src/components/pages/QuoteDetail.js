import { useParams } from "react-router";
import { Fragment } from "react/cjs/react.production.min";
import { Route } from "react-router-dom";
import Comments from "../comments/Comments"

const QuoteDetail = () => {

    const params = useParams();

    return (
        <Fragment>
        <h1>QuoteDetail Page</h1>
        <p>{params.quoteId}</p>
        <Route path={`/quotes/${params.quoteId}/comments`}>
            <Comments></Comments>
        </Route>
        </Fragment>
    );
}

export default QuoteDetail;