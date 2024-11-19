import React,{useEffect} from "react";
import "../style/Candlestick.css";
import { useNavigate } from "react-router-dom";

const HammerCandlestick = () => {

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="Heading">Hammer Candlestick Pattern</h1>

        <div className="content-section">
          <div className="image-container">
            <img
              src="https://www.investopedia.com/thmb/d3f7dGCVjhhXg8gTs36-lEx44_k=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/UsingBullishCandlestickPatternsToBuyStocks2_3-cbd93ad3a09d4e7db21b7d490f1743b3.png"
              alt="Candlestick Pattern"
            />
          </div>
          <div className="content">
            <h3>What Is a Hammer Candlestick?</h3>
            <p>
              A hammer is a price pattern in candlestick charting that occurs
              when a security trades significantly lower than its opening, but
              rallies within the period to close near the opening price. This
              pattern forms a hammer-shaped candlestick, in which the lower
              shadow is at least twice the size of the real body. The body of
              the candlestick represents the difference between the opening and
              closing prices, while the shadow shows the high and low prices for
              the period.
            </p>
          </div>

          <div className="content">
            <h3>Limitations of Using Hammer Candlesticks</h3>
            <p>
              A hammer is a price pattern in candlestick charting that occurs
              when a security trades significantly lower than its opening, but
              rallies within the period to close near the opening price. This
              pattern forms a hammer-shaped candlestick, in which the lower
              shadow is at least twice the size of the real body. The body of
              the candlestick represents the difference between the opening and
              closing prices, while the shadow shows the high and low prices for
              the period.
            </p>
          </div>

          <div className="content">
            <h3>Psychology of the Hammer</h3>
            <p>
              As we have seen, an actionable hammer pattern generally emerges in
              the context of a downtrend, or when the chart is showing a
              sequence of lower highs and lower lows. The appearance of the
              hammer suggests that more bullish investors are taking positions
              in the stock and that a reversal in the downward price movement
              may be imminent. The long lower shadow on the hammer candlestick
              indicates an effort to continue the price’s downward trajectory,
              but the higher close represented by the real body indicates that
              the sellers were ultimately unsuccessful in holding the price at
              its intraday low. The price’s ascent from its session low to a
              higher close suggests that a more bullish outlook won the day,
              setting the stage for a potential reversal to the upside.
            </p>
          </div>
          <div>
        <button className="home-btn" id="Home" onClick={() => navigate("/")}>
          Home
        </button>
      </div>
        </div>
      </div>
    </>
  );
};

export default HammerCandlestick;
