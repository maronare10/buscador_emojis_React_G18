import React, { useState } from 'react'
import data from './emojis.json'

const App = () => {
  const [inputValue, setInputValue] = useState('')
  const [emojis, setEmojis] = useState(data)

  const handleChange = (event) => {
    const value = event.target.value

    console.log(value);
    setInputValue(value)

    const emojiFiltered = data.filter(emoji => {
      const filterByName = emoji.unicodeName.includes(value)
      return filterByName
    })

    setEmojis(emojiFiltered)
  }

  return (
    <div>
      <input
        className='border'
        type="text"
        onChange={handleChange}
      />

      {emojis.map((emoji) => {
        return (
          <article key={emoji.slug} >
            {emoji.character} {emoji.unicodeName}
          </article>
        )
      })}
      {inputValue}
    </div>

  )
}

export default App