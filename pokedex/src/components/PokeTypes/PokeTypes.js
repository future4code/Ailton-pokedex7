import bug from '../../assets/types/bug.png'
import dark from '../../assets/types/dark.png'
import dragon from '../../assets/types/dragon.png'
import electric from '../../assets/types/electric.png'
import fairy from '../../assets/types/fairy.png'
import fighting from '../../assets/types/fighting.png'
import fire from '../../assets/types/fire.png'
import flying from '../../assets/types/flying.png'
import ghost from '../../assets/types/ghost.png'
import grass from '../../assets/types/grass.png'
import ground from '../../assets/types/ground.png'
import ice from '../../assets/types/ice.png'
import normal from '../../assets/types/normal.png'
import poison from '../../assets/types/poison.png'
import psychic from '../../assets/types/psychic.png'
import rock from '../../assets/types/rock.png'
import steel from '../../assets/types/steel.png'
import water from '../../assets/types/water.png'
import styled from 'styled-components'

const TypeImg = styled.div`
    width: 10px;
    height: 10px;
`
const PokemonTypes = (props) => {
    let pokemonType = props.pokemon && props.pokemon.data && props.pokemon.data.types.length > 0 && 
    props.pokemon.data.types.map((type) => {
        switch(type.type.name) {
            case 'bug':
            return <TypeImg src={bug}/>
            case 'dark':
            return <TypeImg src={dark}/>
            case 'dragon':
            return <TypeImg src={dragon}/>
            case 'electric':
            return <TypeImg src={electric}/>
            case 'fairy':
            return <TypeImg src={fairy}/>
            case 'fighting':
            return <TypeImg src={fighting}/>
            case 'fire':
            return <TypeImg src={fire}/>
            case 'flying':
            return <TypeImg src={flying}/>
            case 'ghost':
            return <TypeImg src={ghost}/>
            case 'grass': 
            return <TypeImg src={grass}/>
            case 'ground':
            return <TypeImg src={ground}/>
            case 'ice':
            return <TypeImg src={ice}/>
            case 'normal':
            return <TypeImg src={normal}/>
            case 'poison':
            return <TypeImg src={poison}/>
            case 'psychic':
            return <TypeImg src={psychic}/>
            case 'rock':
            return <TypeImg src={rock}/>
            case 'steel':
            return <TypeImg src={steel}/>
            case 'water':
            return <TypeImg src={water}/>
            default: <TypeImg src={normal}/>
        }
        return pokemonType
    })
        }
        export default PokemonTypes