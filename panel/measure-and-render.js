/**
 * Measure's the element's bounding box and then renders children
 */
import React from "react";
import debounce from "debounce";

const stretchStyles = {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

class MeasureAndRender extends React.Component {
  state = { measurement: null };

  onWindowResize = debounce(
    () => this.setState({ measurement: this.el.getBoundingClientRect() }),
    this.props.debounce || 100
  );

  componentDidMount = () =>
    this.setState({ measurement: this.el.getBoundingClientRect() }, () =>
      window.addEventListener("resize", this.onWindowResize)
    );

  componentWillUnmount = () =>
    // stop listening to window resize
    window.removeEventListener("resize", this.onWindowResize);

  render = () => (
    <div
      style={this.props.stretch ? stretchStyles : {}}
      ref={(node) => (this.el = node)}
    >
      {!!this.state.measurement && this.props.children(this.state.measurement)}
    </div>
  );
}

export default MeasureAndRender;
