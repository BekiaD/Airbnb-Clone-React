

export default function Card(props){
    // console.log(props)
    // console.log(props.openSpots)
    let badgeText
    if (props.item.openSpots === 0){
        badgeText = 'SOLD OUT'
    }else if(props.item.location === 'Online'){
        badgeText = 'ONLINE'
    }

    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}

            <img className="card--image" src={`../assets/${props.item.coverImg}`} alt="swimmer woman" />
            <div className="card--stats">
                <img className="card--star" src="../assets/star.png" alt='star icon'/>
                <span className="gray">{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount})• </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <h2>{props.title}</h2>
            <p><span className='bold'>From ${props.item.price}</span>  / person</p>
        </div>
    )
}
