import { useEffect, useState } from "react";
import styled from "styled-components";
import { usePhoto } from "../context/MainContext";

const Search = () => {

    const Search = styled.div`
        width: 560px;
        height: 75px;
    `
    const Input = styled.input`
        width: 100%;
        height: 42.5px;
        border: none;
        display: flex;
        border-bottom: 1px solid #ddd;
        align-items: center;
        outline: none;
        padding: 1px 2px 6px 0;
        font-size: 24px;
    `
    const SearchFooter = styled.div`
        display: flex;
        margin-top: 15px;
        button {
            font-size: 14px;
            color: #737373;
            cursor: pointer;
            border: none;
            background: transparent;
            &:hover {
                color: #000;
            }
        }
    `

    const [user, setUser] = useState(null);

    // const handleSubmit = () => {

    //     const MY_API_KEY = 'H0YlBtF4AuBfe-kLYV_2o0ZdYfJySCvaX9F-b6UpMvs';
    //     fetch(`https://api.unsplash.com/users/${user}/photos/?client_id=${MY_API_KEY}`)
    //         .then(resp => resp.json())
    //         .then(resp => console.log(resp))

    // }

    useEffect(() => {
        console.log(user);
    }, [user])

    return (
        <Search>
            <Input type="text" placeholder="Search" value={user} onChange={(e) => setUser(e.target.value)} />
            {/* <button onClick={handleSubmit}>Click</button>  */}
            <SearchFooter>
                <button>People</button>
                <button>Images</button>
                <button>Journal</button>
            </SearchFooter>
        </Search>
    )
}

export default Search