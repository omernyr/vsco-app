import styled from "styled-components";

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
        }
    `
    return (

        <Search>
            <Input type="text" placeholder="Search" />
            <SearchFooter>
                <button>People</button>
                <button>Images</button>
                <button>Journal</button>
            </SearchFooter>
        </Search>
    )
}

export default Search