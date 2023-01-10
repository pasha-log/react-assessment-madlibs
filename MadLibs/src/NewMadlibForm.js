import React, {useState} from "react"; 

const NewMadlibForm = ({addMadlib}) => {
    const INITIAL_STATE = {
        noun: "", 
        secondNoun: "",
        adjective: "",
        color: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData, 
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addMadlib({...formData})
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                id="noun"
                type="text"
                name="noun"
                placeholder="noun"
                value={formData.noun}
                onChange={handleChange}
            />
            <input 
                id="second-noun"
                type="text" 
                name="secondNoun"
                placeholder="noun 2"
                value={formData.secondNoun}
                onChange={handleChange}
            />
            <input 
                id="adjective"
                type="text" 
                name="adjective"
                placeholder="adjective"
                value={formData.adjective}
                onChange={handleChange}
            />
            <input 
                id="color"
                type="text" 
                name="color"
                placeholder="color"
                value={formData.color}
                onChange={handleChange}
            />
           <button onClick={handleSubmit}>Create Story</button>
        </form>
    )
}

export default NewMadlibForm;