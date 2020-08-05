import React, {useState} from 'react'

export default props => {
    const [value, setValue] = useState('')
    const valueChangeHandler = e => {
        setValue(e.target.value)
      }

    return (
      <>
        <div className="input-group mb-3 mt-3">
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-secondary"
              onClick={() => props.onSearch(value)}
            >
              Search
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            onChange={valueChangeHandler}
            value={value}
          />
        </div>

        <p className="text-center">
            Поиск покажет любые совпадающие значения.
        </p>
        <p className="text-center">
            Для сортировки щелкните на заголовок.</p>
        <p className="text-center">Щелкните каждую строку чтобы увидеть подробности</p>
      </>
    );
}