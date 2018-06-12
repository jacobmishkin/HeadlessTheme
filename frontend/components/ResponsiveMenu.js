import React, {Component} from 'react';

const MenuIcon = ({onClick, icon}) => (
  <div role="button" className="menu_icon" onClick={onClick}>
    {icon}
  </div>
);

class ResponsiveMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
  }

  handleClick = () => {
    this.setState({showMenu: !this.state.showMenu});
  };

  render() {
    const {
      menu,
      primaryNavigationClassName,
      mobileNavigationClassName,
      primary_menuClassName,
      mobile_menuClassName,
      changeMenuOn,
      menuOpenButton,
      menuCloseButton,
    } = this.props;
    return (
      <div className="nav_container">
        <nav className={primaryNavigationClassName}>
          <ul className={primary_menuClassName}>{menu}</ul>
        </nav>
        <nav className={mobileNavigationClassName}>
          {!this.state.showMenu ? (
            <MenuIcon onClick={this.handleClick} icon={menuOpenButton} />
          ) : (
            <MenuIcon onClick={this.handleClick} icon={menuCloseButton} />
          )}
          {this.state.showMenu ? (
            <ul className={mobile_menuClassName}>{menu}</ul>
          ) : null}
        </nav>
      </div>
    );
  }
}

ResponsiveMenu.defaultProps = {
  primaryNavigationClassName: '',
  mobileNavigationClassName: '',
  primary_menuClassName: '',
  mobile_menuClassName: '',
};
export default ResponsiveMenu;
