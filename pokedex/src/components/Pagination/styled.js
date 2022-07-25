import styled from 'styled-components'

export const Container = styled.ul`
   display: flex;
  padding: 20px;
  margin-bottom: 30px;
  justify-content: center;
  gap: 20px;
  list-style-type: none;
    @media (max-width: 640px) {
    }
`
export const Item = styled.li`
     cursor: pointer;
  display: flex;
  font-family: "Pokemon Solid";
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  align-items: center;
  font-size: 20px;
  :hover {
    background-color: lightcoral;
    box-shadow: 4px 3px 6px 2px lightcoral;
  }
`

export const ItemSelected = styled(Item)`
`

export const Dots = styled.li`
    :hover {
        background-color: transparent;
        cursor: default;
    }
`

export const Arrow = styled.div`
    ::before {
        position: relative;
        content: '';
        display: inline-block;
        width: 0.4em;
        height: 0.4em;
        border-right: 0.12em solid rgba(0, 0, 0, 0.87);
        border-top: 0.12em solid rgba(0, 0, 0, 0.87);
    }
`

export const ArrowLeft = styled(Arrow)`
    transform: rotate(-135deg);
`

export const ArrowRight = styled(Arrow)`
    transform: rotate(45deg);
`

export const DisabledLeft = styled(Arrow)`
    pointer-events: none;
    transform: rotate(-135deg);
    ::before {
        border-right: 0.12em solid rgba(0, 0, 0, 0.43);
        border-top: 0.12em solid rgba(0, 0, 0, 0.43);
    }
    &:hover {
        background-color: transparent;
        cursor: default;
    }
`

export const DisabledRight = styled(Arrow)`
    pointer-events: none;
    transform: rotate(45deg);
    ::before {
        border-right: 0.12em solid rgba(0, 0, 0, 0.43);
        border-top: 0.12em solid rgba(0, 0, 0, 0.43);
    }
    &:hover {
        background-color: transparent;
        cursor: default;
    }
`