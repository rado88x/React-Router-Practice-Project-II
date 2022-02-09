import { Fragment } from "react";
import QuoteForm from "./../components/quotes/QuoteForm";

const NewQuoute = () => {
    const addQuoteHandler = quoteData => {
        console.log(quoteData);
    }

  return (
    <Fragment>
      <h1>New Quote</h1>
      <QuoteForm onAddQuote = {addQuoteHandler} />
    </Fragment>
  );
};

export default NewQuoute;
