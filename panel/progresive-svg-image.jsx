import React from 'react'
import './progresive-svg-image.css'

export default class ProgressiveSVGImg extends React.Component {
  state = {
    loaded: false,
    xlinkHref: this.props.url,
    classNames: ['lazy-image']
  }

  replaceForHDImage = () => this.setState(this.state.loaded
    ? { classNames: this.state.classNames.concat('fadeIn') }
    : { loaded: true, xlinkHref: this.props.urlHD }
  )


  render = () => (
    <image
      className={this.state.classNames.join(' ')}
      xlinkHref={this.state.xlinkHref}
      onLoad={() => setTimeout(this.replaceForHDImage, 2000)}
      preserveAspectRatio="none"
      x="0"
      y="0"
      width="100%"
      height="100%"
    />
  )
}