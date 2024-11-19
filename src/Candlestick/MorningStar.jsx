import React, { useEffect } from "react";
import "../style/Candlestick.css";
import { useNavigate } from "react-router-dom";

const MorningStarCandlestick = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="Heading">Morning Star Candlestick Pattern</h1>

        <div className="content-section">
          <div className="image-container">
            <img
              src="https://www.investopedia.com/thmb/8KQSb2sZk4al--Mc0qimA_x_Wo0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/UsingBullishCandlestickPatternsToBuyStocks6_2-787c3c20c6a84edba7a515f57682a520.png"
              alt="Candlestick Pattern"
            />
          </div>
          <div className="content">
            <h3>What Is a Morning Star Candlestick?</h3>
            <p>
              A Morning Star candlestick is a bullish reversal pattern that
              typically forms at the bottom of a downtrend. It consists of three
              candles: a long bearish candle followed by a small-bodied candle
              (indicating indecision or a pause in selling pressure), and
              finally a long bullish candle that signals a potential reversal.
              The pattern suggests that the selling momentum has weakened, and
              buyers are stepping in, pushing the price higher. This shift in
              sentiment indicates that a reversal to the upside may be imminent,
              making it a key signal for traders looking for buying
              opportunities.
            </p>
          </div>

          <div className="content">
            <h3>Limitations of Using Morning Star Candlesticks</h3>
            <p>
              The Morning Star candlestick pattern has limitations despite
              being a bullish reversal indicator. It often requires confirmation
              from other technical tools, such as volume or trend indicators, as
              the pattern alone may not always signal a reliable reversal. In
              volatile or choppy markets, it can produce false signals, leading
              to incorrect trading decisions. The pattern’s effectiveness also
              depends on the overall market conditions; if there’s no strong
              bullish sentiment, the reversal may not sustain for long.
              Additionally, the pattern works best over longer time frames, and
              in shorter periods, it might not hold much predictive value.
            </p>
          </div>

          <div className="content">
            <h3>Psychology of the Morning Star</h3>
            <p>
              The psychology behind the Morning Star candlestick pattern
              reflects a shift in market sentiment from bearish to bullish.
              Initially, the first candle represents strong selling pressure,
              confirming the ongoing downtrend. However, the second candle,
              which is small and may be a doji, indicates indecision among
              traders, as the selling momentum starts to wane. This pause
              signifies that sellers are losing control. The third candle, a
              long bullish candle, demonstrates a surge in buying interest,
              signaling that buyers have finally taken charge. This pattern
              suggests that bullish sentiment is emerging, and traders may start
              to anticipate a reversal, leading to potential upward price
              movement.
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

export default MorningStarCandlestick;
