import React, {Component} from 'react';
import BurgerIcon from './BurgerIcon.js';
import CloseButton from './CloseButton.js';

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
      largeMenuClassName,
      smallMenuClassName,
      changeMenuOn,
      menuOpenButton,
      menuCloseButton,
    } = this.props;
    return (
      <div className="nav_container">
        <nav className={largeMenuClassName}>{menu}</nav>
        <nav className={smallMenuClassName}>
          {!this.state.showMenu ? (
            <MenuIcon onClick={this.handleClick} icon={menuOpenButton} />
          ) : (
            <MenuIcon onClick={this.handleClick} icon={menuCloseButton} />
          )}
          {this.state.showMenu ? <ul>{menu}</ul> : null}
        </nav>
      </div>
    );
  }
}

ResponsiveMenu.defaultProps = {
  largeMenuClassName: '',
  smallMenuClassName: '',
};
export default ResponsiveMenu;
