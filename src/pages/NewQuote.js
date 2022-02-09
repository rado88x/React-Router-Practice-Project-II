import { useHistory } from "react-router-dom";
import { Fragment } from "react";
import QuoteForm from "./../components/quotes/QuoteForm";

const NewQuoute = () => {
const history = useHistory();

    const addQuoteHandler = quoteData => {
        console.log(quoteData);

        history.push("/quotes")
    }

  return (
    <Fragment>
      <h1>New Quote</h1>
      <QuoteForm onAddQuote = {addQuoteHandler} />
    </Fragment>
  );
};

export default NewQuoute;
