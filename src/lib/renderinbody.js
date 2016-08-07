import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class RenderInBody extends Component
{

  componentDidMount() {
    const me = this.refs.me, 
      rect = me.parentNode.getBoundingClientRect(),
      scrollTop = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop,
      scrollLeft = document.documentElement && document.documentElement.scrollLeft || document.body.scrollLeft;

    this.popup = document.createElement('div');
    this.popup.style.position = 'absolute';
    this.popup.style.left = `${scrollLeft + rect.left}px`;
    this.popup.style.top = `${scrollTop + rect.top + rect.height}px`;

    document.body.appendChild(this.popup);
    this._renderLayer();
  }

  componentDidUpdate() {
    this._renderLayer();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.popup);
    document.body.removeChild(this.popup);
  }

  _renderLayer() {
    ReactDOM.render(this.props.children, this.popup);
  }

  render() {
    return <span {...this.props} ref="me"><span /></span>;
  }

}