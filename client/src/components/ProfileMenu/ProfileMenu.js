import { Image, Dropdown, Icon } from 'semantic-ui-react'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProfileMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props)
    return (
      <div className='profile-menu'>
        <Image src='https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-128.png' size='tiny' />
      <Dropdown text={this.props.username}>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Icon name='user' />
            <Link to='/cabinet/user'>Профиль</Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Icon name='setting' />
            <Link to='/cabinet/settings'>Настройки</Link>
          </Dropdown.Item>

          <Dropdown.Divider />

          <Dropdown.Item>
            <Icon name='sign out' />
            <span onClick={() => this.props.userLogout()} to='/login'>Выход</span>
          </Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
    </div>
    );
  }
}

// const ProfileMenu = props => (
//   <Dropdown text={props.username}>
//     <Dropdown.Menu>
//       <Dropdown.Item icon='user' text='Профиль' />
//       <Dropdown.Item icon='setting' text='Настройки' />
//       <Dropdown.Divider />
//       <Dropdown.Item icon='sign out' text='Выход' />
//     </Dropdown.Menu>
//   </Dropdown>
// )

export default ProfileMenu
