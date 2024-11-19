import React, { useEffect } from "react";
import "../style/Candlestick.css";
import { useNavigate } from "react-router-dom";

const EveningStarCandlestick = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="Heading">Evening star Candlestick Pattern</h1>

        <div className="content-section">
          <div className="image-container">
            <img
              src="https://cdn.litemarkets.com/cache/uploads/blog_post/blog_posts/evening-star-pattern/new/1-evening-star-pattern.jpg?q=75&s=2f6e35dc8ef3f3b7785e63a2c57932ef"
              alt="Candlestick Pattern"
            />
          </div>
          <div className="content">
            <h3>What Is a Evening star Candlestick?</h3>
            <p>
              The Evening Star candlestick pattern is a bearish reversal signal
              that typically forms after an uptrend. It consists of three
              candles: the first is a long bullish candle that confirms the
              existing uptrend, followed by a small-bodied candle (which can be
              bullish or bearish) that indicates indecision or consolidation,
              and finally, a long bearish candle that opens below the midpoint
              of the first candle and closes lower. This formation signifies
              that buyers are losing control and that sellers are beginning to
              dominate the market. The Evening Star suggests a shift in market
              sentiment from bullish to bearish, indicating that a reversal may
              be imminent and prompting traders to consider potential selling
              opportunities.
            </p>
          </div>

          <div className="content">
            <h3>Limitations of Using Evening star Candlesticks</h3>
            <p>
              The Evening Star candlestick pattern, while a useful indicator of
              a potential bearish reversal, has several limitations. First, it
              requires confirmation from subsequent price action or other
              technical indicators to validate the reversal signal; the pattern
              alone may not guarantee a downturn. In volatile or choppy markets,
              the Evening Star can produce false signals, misleading traders
              into premature sell positions. Additionally, if the pattern forms
              after a brief price increase rather than a sustained uptrend, its
              reliability decreases, as it may not represent a significant shift
              in market sentiment. The effectiveness of the Evening Star can
              also be diminished by underlying bullish trends or positive news
              that may counteract the reversal signal. Relying solely on this
              pattern without considering broader market context or additional
              analysis methods can increase the risk of making poor trading
              decisions.
            </p>
          </div>

          <div className="content">
            <h3>Psychology of the Evening star</h3>
            <p>
              The psychology behind the Evening Star candlestick pattern
              reflects a significant shift in market sentiment from bullish to
              bearish. Initially, the first candle represents strong buying
              activity, confirming the uptrend and instilling confidence among
              buyers. However, the second candle, which is small, indicates
              indecision in the market, suggesting that buyers are losing
              momentum. This uncertainty creates a sense of vulnerability, as
              traders begin to question the sustainability of the upward trend.
              The appearance of the third candle, a long bearish candle, signals
              a decisive shift in control, where sellers step in aggressively
              and push prices lower. This shift can create a psychological
              impact, prompting traders to sell positions or enter short trades,
              reinforcing the bearish sentiment. As the market recognizes this
              shift, the Evening Star becomes a powerful indicator of potential
              reversal, leading to increased selling pressure and a further
              decline in prices.
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

export default EveningStarCandlestick;
