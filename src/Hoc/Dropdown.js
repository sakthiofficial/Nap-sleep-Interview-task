import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export function Dropdown({ name, list }) {
    let [menus, setmenus] = useState(false);
    return (
        <div className="dropdown">
            <div className="dropdown_title">
                <p>{name}</p>
            </div>
            <div className="dropdown_list">
                <h4>{list[0]}</h4>
                {menus ? <div className="dropdown_list_menus">

                </div> : null}
                <div className="dropdown_list_icon">
                    <ExpandMoreIcon className='icon' />
                </div>
            </div>
        </div>
    );
}
