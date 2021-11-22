import QuoteList from "../../components/quotes/QuoteList"

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Grzegorz Konopka', text: 'Wszystko jest niemożliwe, niemożliwe wymaga po prostu więcej czasu'},
    {id: 'q2', author: 'Martyna Komenda', text: 'Wszystko jest możliwe, niemożliwe wymaga po prostu więcej czasu'}
]

const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES}></QuoteList>
    );
}

export default AllQuotes;