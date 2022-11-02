import React, {useState} from 'react'

function ColorForm(props) {
    let [input, setInput] = useState('')

    const isColor = (strColor) => {
        const s = new Option().style
        s.color = strColor
        return s.color
    }

    const handleSubmit = (e) => {
        let validColor = isColor(input)
        if(validColor != ''){
        props.addColor(input)
        }
        e.preventDefault()
        setInput('')
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={ (e) => setInput(e.target.value)} value={input}/>
                <button type='submit'>Submit!</button>
            </form>
        </div>
    )
}

export default ColorForm