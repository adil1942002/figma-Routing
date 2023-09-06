type propsType = {
    row: any[],
    col: any[]
}
export default function Table(props: propsType) {
    const { row, col } = props
    return <>
        <table className="mx-auto  w-75 my-5 display-5 " border={2}>
            <thead>
                <tr>
                    {
                        row.map((x, i) => <th  key={i}>{x.key}</th>)
                    }
                </tr>
            </thead>
            <tbody>
                {
                    col.map((x, i) => 
                    <tr key={i}>{row.map((j,k)=> <td key={k}>{x[j.key]}</td>)
                            
                            }</tr>
                    )
                }
            </tbody>
        </table>
    </>
}