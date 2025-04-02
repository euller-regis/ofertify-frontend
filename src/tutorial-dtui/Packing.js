


function Item ( { name, isPacked}) {
    retrun (
        <li className="item">
            {isPacked ? (
                <del>
                    {name + " ✅"}
                </del>
            ) : (
                name
            )}
        </li>
    )
}


export default function Packing () {
    return(
        <div>
            <h1>Packing List</h1>
            <ul>
                <Item
                    isPacked={true}
                    name={"Toothbrush"}
                />
                <Item
                    isPacked={false}
                    name={"towels"}
                />
                <Item
                    isPacked={true}
                    name={"sweatshirt"}
                />
            </ul>
        </div>

    );
}

const items = [
    'Towels',
    'Toothbrush',
    'Sweatshirt',
    'Socks',
    'underwear'
]

const people  =[{
    id: 0,
    name: 'Katherine',
    profession: 'mathematician'
}, {
    id: 1,
    name: 'Mario',
    profession: 'chemist'
}, {
    id: 2,
    name: 'Percy',
    profession: 'chemist'    
}];

const chemists = people.filter(person =>
    person.profession === 'chemist'
);