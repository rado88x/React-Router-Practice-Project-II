import { useParams, Route, Link } from "react-router-dom";
import Comments from "./../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Rado", text: "Some quote" },
  { id: "q2", author: "Vlado", text: "No imagination" },
  { id: "q3", author: "Ivan", text: "React ..." },
];

const QuouteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  console.log(quote);

  if (!quote) {
    console.log("SS")
    return <p>No quote found</p>;
    
  }

  return (
    <section>
      <h1>Quote Detail Page</h1>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${params.quoteId}/comments`} exact>
        <Comments />
      </Route>
    </section>
  );
};

export default QuouteDetail;
