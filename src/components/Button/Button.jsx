
const Button = ({label='Clique aqui', showLabel}) => {
    return(
    <>  
        <button className="btn" onClick={()=>showLabel()}>
            {label}
        </button>
    </>
    )}

export default Button;