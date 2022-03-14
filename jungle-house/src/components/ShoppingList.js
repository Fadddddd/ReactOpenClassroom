import { plantList } from "../datas/plantList"
import '../styles/shoppingList.css'

/* const plantList = [
    'Monstera', 
    'Ficus Lyrata',
    'Silver Pothos', 
    'Yucca',
    'Palm'
] */

function ShoppingList() {
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )
    
    return (
        <div>
            <ul>
                {categories.map((cat) => ( // method that creates a list of React components
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='jh-plant-list'>
                {plantList.map((plant) => (
                    <li key={plant.id} className='jh-plant-item'>
                        {plant.name}
                        {plant.isSpecialOffer && <div className='jh-sales'>Sales</div>}
                        </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList