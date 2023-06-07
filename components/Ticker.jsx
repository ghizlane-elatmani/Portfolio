"use client";

import { useAnimate, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const noop = () => {};

const Ticker = ({
  children,
  duration = 10,
  onMouseEnter = noop,
  onMouseLeave = noop,
  isPlaying = true,
}) => {
  const tickerRef = useRef(null);
  const [tickerUUID, setTickerUUID] = useState("");
  const [tickerContentWidth, setTickerContentWidth] = useState(2);
  const [numDupes, setNumDupes] = useState(1);
  const [scope, animate] = useAnimate();
  const [animationControls, setAnimationControls] = useState(undefined);
  const isInView = useInView(scope);

  useEffect(() => {
    setTickerUUID(uuidv4());
  }, []);

  useEffect(() => {
    let contentWidth = 0;

    for (let i = 0; i < children.length; i++) {
      const element = document.getElementById(
        tickerUUID + "_" + i
      )?.clientWidth;
      if (element) {
        contentWidth += element;
      }
    }

    setTickerContentWidth(contentWidth);
  });

  useEffect(() => {
    if (tickerRef.current && tickerContentWidth) {
      setNumDupes(
        Math.max(
          Math.ceil((2 * tickerRef.current.clientWidth) / tickerContentWidth),
          1
        )
      );
    }
  }, [tickerRef.current, tickerContentWidth]);

  useEffect(() => {
    if (isInView && !animationControls) {
      const controls = animate(
        scope.current,
        { x: -tickerContentWidth },
        { ease: "linear", duration, repeat: Infinity }
      );
      controls.play();
      setAnimationControls(controls);
    }
  }, [isInView]);

  useEffect(() => {
    if (animationControls) {
      if (!isInView || !isPlaying) {
        animationControls.pause();
      } else {
        animationControls.play();
      }
    }
  }, [isInView, isPlaying]);

  return (
    <div
      ref={tickerRef}
      style={{ width: "100%", height: "100%", overflow: "hidden" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div ref={scope} style={{ display: "flex" }}>
        {children.map((item, index) => (
          <div key={index} id={`${tickerUUID}_${index}`}>
            {item}
          </div>
        ))}
        {[...Array(numDupes)].map((_) =>
          children.map((item, index) => <div key={index}>{item}</div>)
        )}
      </div>
    </div>
  );
};

export default Ticker;
