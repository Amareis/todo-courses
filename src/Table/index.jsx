import React from 'react'
import S from './styles.module.css'
import Todo from './Todo'
import {Header} from './Header'
import {useForceUpdate, useLocalStorage} from '../hooks'
import {Footer} from './Footer'

export default function Table() {
  const forceUpdate = useForceUpdate()
  const [todos, setTodos] = useLocalStorage('todos', [])
  const [filter, setFilter] = React.useState(null)

  const undone = todos.filter((t) => !t.done)
  const isAllDone = undone.length === 0

  return (
    <div className={S.root}>
      <Header
        onMarkAll={
          !todos.length
            ? null
            : () => {
                todos.forEach((t) => (t.done = !isAllDone))
                forceUpdate()
              }
        }
        onNewTodo={(newTodo) =>
          setTodos([
            ...todos,
            {id: Math.random(), text: newTodo, done: false},
          ])
        }
      />
      {todos
        .filter((t) => t.done !== filter)
        .map((t) => (
          <Todo
            key={t.id}
            text={t.text}
            done={t.done}
            onDelete={() =>
              setTodos(todos.filter((todo) => todo !== t))
            }
            onDone={() => {
              t.done = true
              forceUpdate()
            }}
            onUndone={() => {
              t.done = false
              forceUpdate()
            }}
            onEdit={(text) => {
              t.text = text
              forceUpdate()
            }}
          />
        ))}
      {todos.length > 0 && (
        <Footer
          itemsLeft={undone.length}
          onFilter={setFilter}
          onDeleteAll={
            todos.length === undone.length
              ? null
              : () => setTodos(undone)
          }
        />
      )}
    </div>
  )
}
