import React, { useEffect } from "react";
import "../style/Candlestick.css";
import { useNavigate } from "react-router-dom";

const ShootingStarCandlestick = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="Heading">Shooting star Candlestick Pattern</h1>

        <div className="content-section">
          <div className="image-container">
            <img
              src="https://www.investopedia.com/thmb/lZwuAwI1jsOPKEsNFVIa4BSbYMU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Term-Definitions_shootingstar-f1bfe827e17442b28f465928a5bc9a43.jpg"
              alt="Candlestick Pattern"
            />
          </div>
          <div className="content">
            <h3>What Is a Shooting star Candlestick?</h3>
            <p>
              A Shooting Star candlestick is a bearish reversal pattern that
              typically forms after an uptrend. It consists of a single candle
              with a small real body located near the lower end of the trading
              range, accompanied by a long upper shadow that is at least twice
              the length of the body. The long upper shadow indicates that the
              price reached a high during the session but was subsequently
              pushed back down by sellers, reflecting a failure to maintain
              upward momentum. This pattern suggests that buyers are losing
              control, and sellers may be starting to dominate the market. As a
              result, the Shooting Star is often interpreted as a signal that a
              reversal to the downside may be imminent, prompting traders to
              consider potential selling opportunities.
            </p>
          </div>

          <div className="content">
            <h3>Limitations of Using Shooting star Candlesticks</h3>
            <p>
              The Shooting Star candlestick pattern, while indicating a
              potential bearish reversal, has several limitations. Firstly, it
              requires confirmation from subsequent price action or other
              technical indicators to validate the reversal signal; a Shooting
              Star alone may not be enough to ensure a downturn. In volatile or
              choppy markets, the pattern can produce false signals, leading
              traders to enter positions prematurely. Additionally, if the
              pattern forms after a brief price increase rather than a sustained
              uptrend, its reliability decreases, as it may not represent a
              significant shift in market sentiment. The effectiveness of the
              Shooting Star can also be undermined by strong underlying bullish
              trends or positive market news, which can invalidate the
              anticipated reversal. Relying solely on this pattern without
              considering broader market context or additional analysis methods
              can increase the risk of making poor trading decisions.
            </p>
          </div>

          <div className="content">
            <h3>Psychology of the Shooting star</h3>
            <p>
              The psychology behind the Shooting Star candlestick pattern
              reflects a significant shift in market sentiment from bullish to
              bearish. Initially, during an uptrend, buyers push the price
              higher, leading to a strong advance. However, the formation of the
              Shooting Star indicates that buyers have lost momentum as sellers
              step in to exert downward pressure. The long upper shadow suggests
              that the price reached a peak during the trading session, but the
              inability to maintain those gains signals a potential reversal.
              This indicates that buyers are becoming cautious, and the shift in
              sentiment can create a sense of urgency among traders, prompting
              them to take profits or enter short positions. As more sellers
              enter the market, the Shooting Star reinforces the idea that the
              upward trend may be faltering, creating a bearish outlook and
              leading to increased selling pressure.
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

export default ShootingStarCandlestick;
