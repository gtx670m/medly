import React, { Component } from 'react';
import { SideNav, SideNavItem, Icon } from 'react-materialize';
import './SidenavComponent.css';
import CollapsibleComponent from '../Collapsible/CollapsibleComponent'
class SidenavComponent extends Component {
    render() {
        return (
            <div>
                <SideNav
                    trigger={<a class="button-collapse" href="" data-activates="sidenav_0">
                        <i class="material-icons">view_headline</i>
                    </a>}
                    options={{ closeOnClick: false }}
                >
                    {/* <SideNavItem userView
                        user={{
                            background: '',
                            image: './img/medly.jpg',
                            name: 'John Doe',
                            email: 'jdandturk@gmail.com'
                        }}
                    /> */}
                    
                        <div className="user">
                            <div className="medly_img">
                                <img src="/medly.png" alt="??" width="64px" height="64px" />
                            </div>
                            <div>
                                <p><b>Le Ho Quang</b></p>
                                <p>quang.le@terralogic.com</p>
                                <p>(admin)</p>
                            </div>
                        </div>
                    
                    <SideNavItem><Icon>view_quilt</Icon>Dashboard</SideNavItem>
                    <SideNavItem><CollapsibleComponent /></SideNavItem>

                    {/* <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
                    <SideNavItem href='#!second'>Second Link</SideNavItem>
                    <SideNavItem divider />
                    <SideNavItem subheader>Subheader</SideNavItem>
                    <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem> */}
                </SideNav>
            </div>
        );
    }
}

export default SidenavComponent;
