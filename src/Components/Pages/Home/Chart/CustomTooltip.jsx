const CustomTooltip = ({ active, label, payload }) => {

    if (active && payload && payload.length) {

        return (
            <div className="bg-white shadow-md p-2 rounded-md">
                <p>{`Ano: ${label}`}</p>
                <p>{`Porcentagem: ${payload[0].value}%`}</p>
            </div>
        )
    }
}

export default CustomTooltip