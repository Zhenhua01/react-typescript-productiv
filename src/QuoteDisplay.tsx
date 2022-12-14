import "./QuoteDisplay.css";
import { IQuoteDisplay } from "./interfaces";


/** QuoteDisplay component that shows a quote
 * and a button that will retrieve a new quote
 *
 * Props:
 * - getQuote: fn() that retrieves a random quote from API
 * - quote: state of current quote
 *
 * State: None
 *
 * App -> QuoteApp -> QuoteDisplay
 */

function QuoteDisplay({ getQuote, quote }: IQuoteDisplay) {

  function firstQuote() {
    return <div className="QuoteDisplay">
      <button
        className="btn-sm QuoteDisplay-button"
        onClick={getQuote}>Click here for an inspirational quøte!
      </button>
    </div>;
  }

  if (quote) {
    return <div className="QuoteDisplay">
      <p><i>{quote.text} - {quote.author}</i></p>
      <button
        className="btn-sm QuoteDisplay-button"
        onClick={getQuote}>Nü quøte
      </button>
    </div>;
  } else {
    return firstQuote();
  }

};

export default QuoteDisplay;