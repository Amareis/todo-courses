import React from 'react'
import S from './styles.module.css'
import Todo from './Todo'
import {Header} from './Header'
import {Footer} from './Footer'

function getLocal(key, obj) {
  const t = localStorage.getItem(key)
  if (!t) return obj
  try {
    return JSON.parse(t)
  } catch (e) {
    return obj
  }
}

const key = 'todos'

export default class Table extends React.Component {
  state = {
    todos: getLocal(key, []),
    filter: null,
  }

  get undone() {
    return this.state.todos.filter((t) => !t.done)
  }

  markAll = () => {
    const isAllDone = this.undone.length === 0
    for (const t of this.state.todos) {
      t.done = !isAllDone
    }
    this.forceUpdate()
  }

  setTodos = (todos) => {
    this.setState({todos})
    localStorage.setItem(key, JSON.stringify(todos))
  }

  newTodo = (newTodo) => {
    this.setTodos([
      ...this.state.todos,
      {
        id: Math.random(),
        text: newTodo,
        done: false,
      },
    ])
  }

  setFilter = (filter) => this.setState({filter})

  deleteDone = () => this.setTodos(this.undone)

  render() {
    const {todos, filter} = this.state

    const undone = this.undone

    return (
      <div className={S.root}>
        <Header
          onMarkAll={!todos.length ? null : this.markAll}
          onNewTodo={this.newTodo}
        />
        {todos
          .filter((t) => t.done !== filter)
          .map((t) => (
            <Todo
              key={t.id}
              text={t.text}
              done={t.done}
              onDelete={() =>
                this.setTodos(
                  todos.filter((todo) => todo !== t),
                )
              }
              onDone={() => {
                t.done = true
                this.forceUpdate()
              }}
              onUndone={() => {
                t.done = false
                this.forceUpdate()
              }}
              onEdit={(text) => {
                t.text = text
                this.forceUpdate()
              }}
            />
          ))}
        {todos.length > 0 && (
          <Footer
            itemsLeft={undone.length}
            onFilter={this.setFilter}
            onDeleteAll={
              todos.length === undone.length
                ? null
                : this.deleteDone
            }
          />
        )}
      </div>
    )
  }
}
