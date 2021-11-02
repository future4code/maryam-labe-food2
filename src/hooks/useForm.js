import { useState } from "react"


const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)
    
    const [errors, setErrors] = useState({})
    const [span, setSpan] = useState('')

    const handleInputChange = (event) => {
        const { value, name } = event.target
        setForm({ ...form, [name]: value })
    }

    const clear = () => {
        setForm(initialState)
    }
    

    return [form, handleInputChange, clear, errors, setErrors, span, setSpan]
}

export default useForm

