import React, { useState,useEffect } from 'react'

let initialForm = {
    search:""
}

const useFetch = () => {
    const [data, setData] = useState([]);
    const [fecha, setFecha] = useState("")
    const [input, setInput] = useState(initialForm);
    const [url, setUrl] = useState("https://api.github.com/users/octocat");

    useEffect(() => {
          const getUser = async () => {
            try {
                let data = await fetch(url);
                let res = await data.json();
                setData(res);
                getFecha(res.created_at)
            } catch (error) {
                console.log(error)
            }
          }
          getUser()
        return () => setData([])
    }, [url])
    
    const getFecha = (fecha) => {
        let laFecha = new Date(fecha);
        setFecha(laFecha.toUTCString().substring(4, 16))
    }

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUrl(`https://api.github.com/users/${input.search}`)
        setInput(initialForm)
    }

    return {
        handleSubmit,
        handleChange,
        input,
        data,
        fecha
    }
}

export default useFetch