import './PatternBorder.css';

export function PatternBorder() {
  return (
    <>
      <div className="pattern-border pattern-border-left">
        <div className="pattern-container"></div>
      </div>
      <div className="pattern-border pattern-border-right">
        <div className="pattern-container"></div>
      </div>
    </>
  );
}
