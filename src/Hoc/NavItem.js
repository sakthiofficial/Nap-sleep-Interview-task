export function NavItem({ icon, name, option, setoption }) {
    return (

        <>
            {option == name ? <div className="nav_items-option">

            </div> : null}
            <div className="nav_items-icon" style={{ backgroundColor: option == name ? "#77469B" : null }}>
                {icon}
            </div>
            <div className="nav_items-text" style={{ color: option == name ? "#77469B" : null }} onClick={() => setoption(name)}>
                <p>{name}</p>
            </div>
        </>
    );
}
