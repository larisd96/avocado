const FormImc = ({CalcularImc}) => {
    
    const peso = () => {
        return (
            <div>
                <label>
                    Peso
                    <input type="text" value={p} onChange={(e)=>{sp(e.target.value)}} />
                </label>
            </div>
        )
    }
}