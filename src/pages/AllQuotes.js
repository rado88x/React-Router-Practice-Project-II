import { Fragment } from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Rado", text: "Some quote" },
  { id: "q2", author: "Vlado", text: "No imagination" },
  { id: "q3", author: "Ivan", text: "React ..." },
];

const AllQuotes = () => {
  return (
    <Fragment>
      <h1>All Quotes</h1>
      <QuoteList quotes={DUMMY_QUOTES} />
    </Fragment>
  );
};

export default AllQuotes;
