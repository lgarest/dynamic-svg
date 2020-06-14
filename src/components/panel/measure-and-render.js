/**
 * Measure's the element's bounding box and then renders children
 */
import React, { useEffect, useRef, useState } from "react";
import debounce from "debounce";

const stretchStyles = {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};

function MeasureAndRender(props) {
  const [measurement, setMeasurement] = useState(null);
  const el = useRef(null);

  const onWindowResize = debounce(
    () => setMeasurement(el.current.getBoundingClientRect()),
    props.debounce || 100
  );

  useEffect(() => {
    setMeasurement(el.current.getBoundingClientRect());
    window.addEventListener("resize", onWindowResize);
    return () => window.removeEventListener("resize", onWindowResize);
  }, []);

  return (
    <div style={props.stretch ? stretchStyles : {}} ref={el}>
      {!!measurement && props.children(measurement)}
    </div>
  );
}

export default MeasureAndRender;
