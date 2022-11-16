import styled from "styled-components";
import { usePhoto } from "../context/MainContext";

const SearchBar = styled.div`
margin-top: 2em;
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
const Search = () => {

    const { user, setUser, setPhotos, MY_API_KEY } = usePhoto();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api.unsplash.com/users/${user}/photos/?client_id=${MY_API_KEY}`)
            .then(resp => resp.json())
            .then(resp => {
                resp.length && setPhotos(resp);
            })
    }
    return (
        <SearchBar>
            <form onSubmit={handleSubmit}>
                <Input type="text" placeholder="Search" value={user} onChange={(e) => setUser(e.target.value)} />
            </form>
            <SearchFooter>
                <button>People</button>
                <button>Images</button>
                <button>Journal</button>
            </SearchFooter>
        </SearchBar>
    )
}
export default Search