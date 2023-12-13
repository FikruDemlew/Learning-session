export const List = () => {
    const names = ["Daniel", "Ermiyas", "Etsub", "Eyob", "Fikru", "Hanan", "Habtemariam", "Hayat", "Hayou","Helina"]
    
    return <div> {names.map((x) => <div> <ul class="list-group">
    <li class="list-group-item">{x}</li>
</ul> </div>)}</div>
}



