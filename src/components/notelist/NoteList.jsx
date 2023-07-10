import styled from 'styled-components'
import Notes from '../cards/Notes'
import H3 from '../typography/H3'

const StyledList = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
    margin-top: 0.5rem;
`

function NoteList({ notes, emptyHeading }) {
    const count = notes.length
    let heading = emptyHeading
    if(count > 0) {
        const noun = count > 1 ? 'notas' : 'nota'
        heading = `${count} ${noun}`
    }

    return (
        <>
            <H3>{heading}</H3>
            <StyledList >
                { notes.map((notas) => <Notes id={notas.id} key={notas.id} /> )}
            </StyledList>
        </>
    );
}

export default NoteList;
