import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import './styles.css'

import api from './serveces/api'

function App() {
  const [input, setInput] = useState('')
  const [cep, setcep] = useState({})

  async function handleSearch() {
    //08130050/json
    if (input === '') {
      alert('Preencha algum cep!')
      return
    }

    try {
      const response = await api.get('${input}/json')
      setcep(response.data)
      setInput('')
    } catch {
      alert('Ops erro ao buscar')
      setInput('')
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
      <div className="conatinerInput">
        <input
          type="text"
          placeholder="Digite seu CEP ..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP: {cep.cep} </h2>

          <span>{cep.logradouro}</span>
          <span>Complemento : {cep.complemento}</span>
          <span>{cep.Bairro}</span>
          <span>
            {cep.localidade} - {cep.uf}
          </span>
        </main>
      )}
    </div>
  )
}

export default App
