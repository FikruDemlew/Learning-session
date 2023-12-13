export const Greeting = () => {
    const names = ["x", "y", "z"]
    return <div> {names.map((x) => <li>{x}</li>)}</div>
}


