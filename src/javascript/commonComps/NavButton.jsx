import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

class NavButton extends Component {
  render() {
    const { url, label, styles, iconType } = this.props;
    return (
      <React.Fragment>
        <div className={styles}>
          <Link to={url}>
            {label}
            {iconType && iconType !== '' && <Icon type={iconType} />}
          </Link>
          <div className="nav-hover" />
        </div>
      </React.Fragment>
    );
  }
}

export default NavButton;
