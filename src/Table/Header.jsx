import React from 'react'

export function Header({onMarkAll, onNewTodo}) {
  const [newTodo, setNewTodo] = React.useState('')

  return (
    <div>
      {onMarkAll && <button onClick={onMarkAll}>v</button>}
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(e) => {
          if (e.key !== 'Enter' || !newTodo) return
          onNewTodo(newTodo)
          setNewTodo('')
        }}
      />
    </div>
  )
}
