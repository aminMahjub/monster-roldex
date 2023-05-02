import Card from '../card-component/card-component';
import './card-list-component.css';

function CardList({ monsters }) {
    return (<div className='monster-container'>
        {monsters.map(monster => {
            return <Card monster={monster} />
        })}

    </div>)
}

export default CardList;