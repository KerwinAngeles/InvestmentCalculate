
const TableResult = ({children}) => {
    return (
        <section className='flex justify-center items-center py-10'>
            <table className='table-auto'>
                <thead className='bg-green-950 text-white'>
                    <tr>
                        <th className='px-4 py-2'>Year</th>
                        <th className='px-4 py-2'>Investment Value</th>
                        <th className='px-4 py-2'>Interest (Year)</th>
                        <th className='px-4 py-2'>Total Interest</th>
                        <th className='px-4 py-2'>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                   {children}
                </tbody>
            </table>
        </section>
    )
}

export default TableResult