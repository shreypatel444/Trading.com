import React, { useEffect } from "react";
import "../style/Candlestick.css";

import { useNavigate } from "react-router-dom";

const BullishEngulfingCandlestick = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="Heading">Bullish Engulfing Candlestick Pattern</h1>

        <div className="content-section">
          <div className="image-container">
            <img
              src="https://www.investopedia.com/thmb/YszUz-pmG08YJgQyMUFU8H2CAgw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/BullishEngulfingPatternDefinition2-5f046aee5fe24520bfd4e6ad8abaeb74.png"
              alt="Candlestick Pattern"
            />
          </div>
          <div className="content">
            <h3>What Is a Bullish Engulfing Pattern?</h3>
            <p>
              A bullish engulfing pattern is a white candlestick that closes
              higher than the previous day's opening after opening lower than
              the previous day's close. It can be identified when a small black
              candlestick, showing a bearish trend, is followed the next day by
              a large white candlestick, showing a bullish trend, the body of
              which completely overlaps or engulfs the body of the previous
              day’s candlestick.
            </p>
          </div>

          <div className="content">
            <h3>Limitations of Using Engulfing Patterns</h3>
            <p>
              A bullish engulfing pattern can be a powerful signal, especially
              when combined with the current trend; however, they are not
              bullet-proof. Engulfing patterns are most useful following a clean
              downward price move as the pattern clearly shows the shift in
              momentum to the upside. If the price action is choppy, even if the
              price is rising overall, the significance of the engulfing pattern
              is diminished since it is a fairly common signal. The engulfing or
              second candle may also be huge. This can leave a trader with a
              very large stop loss if they opt to trade the pattern. The
              potential reward from the trade may not justify the risk.
              Establishing the potential reward can also be difficult with
              engulfing patterns, as candlesticks don't provide a price target.
              Instead, traders will need to use other methods, such as
              indicators or trend analysis, for selecting a price target or
              determining when to get out of a profitable trade.
            </p>
          </div>

          <div className="content">
            <h3>What Does a Bullish Engulfing Pattern Tell You?</h3>
            <p>
              A bullish engulfing pattern is not to be interpreted as simply a
              white candlestick, representing upward price movement, following a
              black candlestick, representing downward price movement. For a
              bullish engulfing pattern to form, the stock must open at a lower
              price on Day 2 than it closed at on Day 1. If the price did not
              gap down, the body of the white candlestick would not have a
              chance to engulf the body of the previous day’s black candlestick.
            </p>
          </div>
          <div>
            <button
              className="home-btn"
              id="Home"
              onClick={() => navigate("/")}
            >
              Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BullishEngulfingCandlestick;
