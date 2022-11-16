import styled from 'styled-components'
import { usePhoto } from '../context/MainContext'

const Image = styled.img`
max-width: 239px;
max-height: 317px;
padding: 1.4em;
object-fit: cover;
display: block;
`
const Photos = styled.div`
margin-top: 2em;
overflow: scroll;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
flex-wrap: wrap;
`

const Photo = () => {

    const { photos } = usePhoto();

    return (
        <Photos>
            {photos.map((photo, id) => (
                <Image key={id} src={`${photo.urls.small}`} alt="" />
            )
            )}
        </Photos>
    )
}
export default Photo