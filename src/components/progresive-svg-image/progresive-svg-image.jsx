import React, { useState } from "react";
import "./progresive-svg-image.css";

function ProgressiveSVGImg({ url, urlHD }) {
  const _state = {
    loaded: false,
    xlinkHref: url,
    classNames: ["lazy-image"]
  };
  const [state, setState] = useState(_state);
  const { loaded, xlinkHref, classNames} = state
  const replaceForHDImage = () =>
    !loaded
      ? setState({ ...state, loaded: true, xlinkHref: urlHD })
      : setState({ ...state, classNames: state.classNames.concat("fadeIn") });
  return (
    <image
      className={classNames.join(" ")}
      xlinkHref={xlinkHref}
      onLoad={replaceForHDImage}
      x="0"
      y="0"
      width="100%"
      height="100%"
    />
  );
}

export default ProgressiveSVGImg;
