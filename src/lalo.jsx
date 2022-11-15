import React, { useState } from 'react';

const Lalo = () => {

    const [changeUser, setChangeUser] = useState(null);
    
    return (
        <div>
            loakofksdfo

            <input type="text" placeholder='search' value={changeUser} onChange={(e) => setChangeUser(e.target.value)} />
        </div>
    )
}

export default Lalo;