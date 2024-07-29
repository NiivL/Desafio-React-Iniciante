

const ColoredText = ({text='texto colorido', color='aqua'}) =>{
    return (
        <>
        <p style={{color: color }}>
            {text.toUpperCase()}
            </p>
        </>
    )
}

export default ColoredText;