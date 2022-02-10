import { Fragment, useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import { getAllQuotes } from "../lib/api";
import useHttp from "../hooks/use-http";

let DUMMY_QUOTES = [
  { id: "q1", author: "Rado", text: "Some quote" },
  { id: "q2", author: "Vlado", text: "No imagination" },
  { id: "q3", author: "Ivan", text: "React ..." },
];

const response = getAllQuotes();
console.log(response);
// DUMMY_QUOTES = response;

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div className="centered focused">{error}</div>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }

  return (
    <Fragment>
      <h1>All Quotes</h1>
      <QuoteList quotes={loadedQuotes} />
    </Fragment>
  );
};

export default AllQuotes;
