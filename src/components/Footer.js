import React, { Component } from 'react';

class Footer extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }

    return (
      <footer>
        <div className="col-md-12">
          <div className="social-links">
            {networks}
            <a
              href="https://drive.google.com/file/d/1WzDN9Lx8CV2aAPurFD7YgBB0zQ4sbigR/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </div>
          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                Copyright &copy;{' '}
                {this.props.sharedBasicInfo
                  ? this.props.sharedBasicInfo.name
                  : '???'}
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
