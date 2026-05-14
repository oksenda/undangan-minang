import { weddingQuote } from '../data/weddingV2';
import './QuoteSection.css';

export function QuoteSection() {
  return (
    <section className="quote-section">
      <div className="quote-container">
        <div className="quote-pattern quote-pattern-left"></div>
        <div className="quote-content">
          <blockquote className="quote-text">
            "{weddingQuote.text}"
          </blockquote>
          <cite className="quote-source">{weddingQuote.source}</cite>
        </div>
        <div className="quote-pattern quote-pattern-right"></div>
      </div>
    </section>
  );
}
