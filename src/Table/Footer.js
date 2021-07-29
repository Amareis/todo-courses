import S from './styles.module.css'

export function Footer({onFilter, itemsLeft, onDeleteAll}) {
  return (
    <div className={S.footer}>
      {itemsLeft} items left
      <button onClick={() => onFilter(null)}>All</button>
      <button onClick={() => onFilter(true)}>Active</button>
      <button onClick={() => onFilter(false)}>
        Completed
      </button>
      {onDeleteAll && (
        <button onClick={onDeleteAll}>
          Delete all done
        </button>
      )}
    </div>
  )
}
