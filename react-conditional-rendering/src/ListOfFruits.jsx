import PropTypes from 'prop-types';

export default function ListOfFruits(props){
    //crafting a list of of mappings from  my original props
    const listItems = props.items.map(item => 
    <li key = {item.id}><strong>{item.name}</strong>: &nbsp; 
    {item.color}</li>)
    //rendering my list into jsx components
    
    return(
        <>
            <h3 className="list-category">{props.category}</h3>
            <ol className="list">{listItems}</ol>
        </>
    )
}
ListOfFruits.defaultPorps = {
    category: "I do not like Fruits!",
    items: []
}