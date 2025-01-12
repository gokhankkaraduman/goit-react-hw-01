import style from './TransactionHistory.module.css';
function TransactionList ({items}){
    return (
        <table className={style.container}>
            <thead className={style.tableHead}>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
            </thead>
            <tbody className={style.tableBody}>
            {items.map((item) => (
                <tr key={item.id}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
export default TransactionList;