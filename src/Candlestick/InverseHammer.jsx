import React, { useEffect } from "react";
import "../style/Candlestick.css";
import { useNavigate } from "react-router-dom";

const InverseHammerCandlestick = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="Heading">Inverse Hammer Candlestick Pattern</h1>

        <div className="content-section">
          <div className="image-container">
            <img
              src="https://www.investopedia.com/thmb/VFCNhtUJJ1bTXulif_J0hrbXt8Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/UsingBullishCandlestickPatternsToBuyStocks3_3-121578d9acdd4060b3d0d740f394754e.png"
              alt="Candlestick Pattern"
            />
          </div>
          <div className="content">
            <h3>What Is a Inverted hammer Candlestick?</h3>
            <p>
              The inverted hammer, also known as the reverse hammer, suggests
              that the market might start going up again. It looks like a candle
              with a small body and a long line at the top. This shows that
              buyers raised the price during the trading session, but then
              sellers came in and pushed it back down. In the end, the price
              closed near the lowest point of the day. When a hammer is
              identified after a prolonged downtrend, it may indicate that the
              market has reached a bottom and is likely to reverse to an uptrend
              Similarly, when an inverted hammer pattern is identified after a
              prolonged uptrend, it may indicate that the market has reached a
              top and is likely to reverse to a downtrend.
            </p>
          </div>

          <div className="content">
            <h3>Limitations of Using Inverted hammer Candlesticks</h3>
            <p>
              The **Inverse Hammer** candlestick is a bullish reversal pattern
              that appears after a downtrend, but it has several limitations. It
              requires confirmation from subsequent price action or technical
              indicators to validate the reversal, as it can sometimes produce
              false signals. In volatile or choppy markets, the pattern may not
              be reliable, leading to incorrect trading decisions. Additionally,
              even when a reversal occurs, the price increase may be limited,
              especially if the pattern forms with low trading volume or in a
              weak market environment.
            </p>
          </div>

          <div className="content">
            <h3>Psychology of the Inverted hammer</h3>
            <p>
              The psychology behind the Inverse Hammer candlestick reflects a
              potential shift in market sentiment during a downtrend. Initially,
              sellers continue to push the price lower, but by the end of the
              trading session, buyers step in, driving the price up. This
              creates a long upper shadow and a small real body near the
              session’s low, indicating that while bears initially dominated,
              bulls gained control toward the close. The inability of sellers to
              maintain the downward pressure signals that buyers are gaining
              strength, suggesting a possible reversal. However, the pattern
              alone is not conclusive, and traders often wait for confirmation
              before acting on this signal.
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

export default InverseHammerCandlestick;
