import React, { useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { Link } from 'react-router-dom';
import UserProfile from '../UserProfile';

import {
  Container,
  Content,
  Wrapper,
  Logo,
  ButtonMenu,
  MenuWrapper,
  MenuItem,
  DropdownContainer,
  DropdownItem,
  NotifyContainer,
} from './styles';

interface IHeaderProps {
  logo?: string;
  sigla: string;
  name: string;
}

interface IDropdownProps {
  title: string;
  Icon: React.ComponentType<IconBaseProps>;
  path: string;
  action?: Function;
}

interface IMenuItemsProps {
  title: string;
  Icon: React.ComponentType<IconBaseProps>;
  path: string;
  isAuth?: boolean;
  isPrivate?: boolean;
  isNotify?: boolean;
  isAdmin?: boolean;
  dropdownItems?: IDropdownProps[];
}

interface IMenuProps {
  header: IHeaderProps;
  menuItems: IMenuItemsProps[];
  amountCart?: number;
  itemsAuth?: IMenuItemsProps[];
  itemsPrivate?: IMenuItemsProps[];
  itemsDashboard?: IMenuItemsProps[];
  isLogged?: boolean;
  isAdmin?: boolean;
  toggleTheme?: Function;
}

const Menu: React.FC<IMenuProps> = ({
  isLogged,
  toggleTheme,
  header,
  menuItems,
  amountCart,
  itemsAuth,
  itemsPrivate,
  itemsDashboard,
  isAdmin,
  children,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleOpenMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <Container data-testid="menu-container" isActive={isActive}>
      <Content>
        <Wrapper isActive={isActive}>
          <Logo isActive={isActive}>
            <span>Logo</span>
          </Logo>
          <ButtonMenu
            data-testid="button-menu"
            type="button"
            isActive={isActive}
            onClick={handleOpenMenu}
          >
            <span data-testid="line-button-1" />
            <span data-testid="line-button-2" />
            <span data-testid="line-button-3" />
          </ButtonMenu>
        </Wrapper>
        {isLogged && <UserProfile />}
        <MenuWrapper isActive={isActive}>
          {menuItems.map(item => (
            <>
              <MenuItem key={item.title} isActive={isActive}>
                <Link data-testid="link-menu" to={item.path}>
                  <div>
                    <item.Icon size={20} />
                  </div>
                  <span>{item.title}</span>
                </Link>
                {!isActive &&
                  (item.dropdownItems && item.dropdownItems.length > 0 ? (
                    <DropdownContainer data-testid="tag-menu">
                      {item.dropdownItems.map(dropdownItem => (
                        <DropdownItem key={dropdownItem.title} to="/">
                          {dropdownItem.title}
                        </DropdownItem>
                      ))}
                    </DropdownContainer>
                  ) : (
                    <div data-testid="tag-menu">
                      <span>{item.title}</span>
                    </div>
                  ))}
              </MenuItem>
            </>
          ))}
          {!isLogged &&
            itemsAuth &&
            itemsAuth.length > 0 &&
            itemsAuth.map(item => (
              <>
                <MenuItem key={item.title} isActive={isActive}>
                  <Link data-testid="link-menu" to={item.path}>
                    <div>
                      <item.Icon size={20} />
                    </div>
                    <span>{item.title}</span>
                  </Link>
                  {!isActive &&
                    (item.dropdownItems && item.dropdownItems.length > 0 ? (
                      <DropdownContainer data-testid="tag-menu">
                        {item.dropdownItems.map(dropdownItem => (
                          <DropdownItem key={dropdownItem.title} to="">
                            <span>{dropdownItem.title}</span>
                            <dropdownItem.Icon />
                          </DropdownItem>
                        ))}
                      </DropdownContainer>
                    ) : (
                      <div data-testid="tag-menu">
                        <span>{item.title}</span>
                      </div>
                    ))}
                </MenuItem>
              </>
            ))}
          {isLogged &&
            itemsPrivate &&
            itemsPrivate.length > 0 &&
            itemsPrivate.map(item => (
              <>
                <MenuItem key={item.title} isActive={isActive}>
                  <Link data-testid="link-menu" to={item.path}>
                    <div>
                      <item.Icon size={20} />
                    </div>
                    {item.isNotify && (
                      <NotifyContainer>
                        <span>{amountCart}</span>
                      </NotifyContainer>
                    )}
                    <span>{item.title}</span>
                  </Link>
                  {!isActive &&
                    (item.dropdownItems && item.dropdownItems.length > 0 ? (
                      <DropdownContainer data-testid="tag-menu">
                        {item.dropdownItems.map(dropdownItem => (
                          <DropdownItem key={dropdownItem.title} to="">
                            <span>{dropdownItem.title}</span>
                            <dropdownItem.Icon />
                          </DropdownItem>
                        ))}
                      </DropdownContainer>
                    ) : (
                      <div data-testid="tag-menu">
                        <span>{item.title}</span>
                      </div>
                    ))}
                </MenuItem>
              </>
            ))}
          {isLogged &&
            isAdmin &&
            itemsDashboard &&
            itemsDashboard.length > 0 &&
            itemsDashboard.map(item => (
              <>
                <MenuItem key={item.title} isActive={isActive}>
                  <Link data-testid="link-menu" to={item.path}>
                    <div>
                      <item.Icon size={20} />
                    </div>
                    <span>{item.title}</span>
                  </Link>
                  {!isActive &&
                    (item.dropdownItems && item.dropdownItems.length > 0 ? (
                      <DropdownContainer data-testid="tag-menu">
                        {item.dropdownItems.map(dropdownItem => (
                          <DropdownItem
                            key={dropdownItem.title}
                            to={dropdownItem.path}
                          >
                            <span>{dropdownItem.title}</span>
                            <dropdownItem.Icon />
                          </DropdownItem>
                        ))}
                      </DropdownContainer>
                    ) : (
                      <div data-testid="tag-menu">
                        <span>{item.title}</span>
                      </div>
                    ))}
                </MenuItem>
              </>
            ))}
        </MenuWrapper>
        {children}
      </Content>
    </Container>
  );
};

export default Menu;
