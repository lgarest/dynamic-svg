import React from "react";
import MeasureAndRender from "./measure-and-render";
import SVGPanel from "./panel";

const gridStyles = {
  position: "relative",
  display: "grid",
  gridTemplateColumns: "90vw",
  gridTemplateRows: "90vh",
};

const svgPathDefaults = { factor: 0.5, offset: 0, stroke: 1 };

const svgPath = ({ factor, offset, stroke } = svgPathDefaults) => ({
  width,
  height,
}) => `
  M${width - stroke},${stroke}
  L${stroke},${stroke}
  L${stroke},${height - stroke}
  L${width * factor - 17 + offset},${height - stroke}
  L${width * factor + 27 + offset},${height - 30}
  L${width - stroke},${height - 30}
  Z`;

const renderPanel = (boundingRectangle) => (
  <SVGPanel bounds={boundingRectangle} path={svgPath()(boundingRectangle)} />
);

export default () => (
  <div style={gridStyles}>
    <div style={{ position: "relative" }}>
      <MeasureAndRender stretch={true} debounce={1}>
        {renderPanel}
      </MeasureAndRender>
    </div>
  </div>
);
