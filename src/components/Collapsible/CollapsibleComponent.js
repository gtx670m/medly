import React, { Component } from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import './CollapsibleComponent.css';

class CollapsibleComponent extends Component {
    render() {
        return (
            <div>
                {/* defaultActiveKey={0} */}
                <Collapsible accordion        >
                    <CollapsibleItem header='Deliveries' icon='local_shipping'>
                        <a href="">Item 1</a>
                        <a href="">Item 2</a>
                        <a href="">Item 3</a>
                    </CollapsibleItem>
                    <CollapsibleItem header='Micro Merchant' icon='laptop'>
                        <a href="">Item 1</a>
                        <a href="">Item 2</a>
                        <a href="">Item 3</a>
                    </CollapsibleItem>
                    <CollapsibleItem header='Rx Transfer' icon='compare_arrows'>
                        <a href="">Item 1</a>
                        <a href="">Item 2</a>
                        <a href="">Item 3</a>
                    </CollapsibleItem>
                    <CollapsibleItem header='Patients' icon='face'>
                        <a href="">Item 1</a>
                        <a href="">Item 2</a>
                        <a href="">Item 3</a>
                    </CollapsibleItem>
                    <CollapsibleItem header='Medication' icon='local_drink'>
                        <a href="">Item 1</a>
                        <a href="">Item 2</a>
                        <a href="">Item 3</a>
                    </CollapsibleItem>
                    <CollapsibleItem header='Pharmacies' icon='domain'>
                        <a href="">Item 1</a>
                        <a href="">Item 2</a>
                        <a href="">Item 3</a>
                    </CollapsibleItem>
                    <CollapsibleItem header='Sig Codes' icon='storage'>
                        <a href="">Item 1</a>
                        <a href="">Item 2</a>
                        <a href="">Item 3</a>
                    </CollapsibleItem>
                    <CollapsibleItem header='Alerts' icon='notification_important'>
                        <a href="">Item 1</a>
                        <a href="">Item 2</a>
                        <a href="">Item 3</a>
                    </CollapsibleItem>
                    <CollapsibleItem header='Prior Authorization' icon='place'>
                        <a href="">Item 1</a>
                        <a href="">Item 2</a>
                        <a href="">Item 3</a>
                    </CollapsibleItem>
                    <CollapsibleItem header='User Signups' icon='people'>
                        <a href="">Item 1</a>
                        <a href="">Item 2</a>
                        <a href="">Item 3</a>
                    </CollapsibleItem>
                    <CollapsibleItem header='Users and Roles' icon='people_outline'>
                        <a href="">Item 1</a>
                        <a href="/">Item 2</a>
                        <a href="/">Item 3</a>
                    </CollapsibleItem>
                    <CollapsibleItem header='Settings' icon='settings'>
                        <a href="/">Item 1</a>
                        <a href="/">Item 2</a>
                        <a href="/">Item 3</a>
                    </CollapsibleItem>
                </Collapsible>
            </div>
        );
    }
}

export default CollapsibleComponent;
