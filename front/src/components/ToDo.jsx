import classNames from 'classnames';

export const ToDo = (props) => {

  // stateを作成
  const { todo, onCheck, onClick} = props;

  // チェックボックス押下時、ToDoAppクラスの「handleCheck」関数を実行
  const handleChange = () => {
    onCheck(todo);
  };
// deleteボタン押下時、ToDoAppクラスの「handleDelete」関数を実行
  const onClickDelete = () => {
    onClick(todo.id)
  };

  return (
    <>
      <div className="panel-block">
        <label className="todo-content">
          <input
            type="checkbox"
            checked={todo.done}
            onChange={handleChange}
          />
          <span
            className={classNames({
              'has-text-grey-light': todo.done
            })}
         >
            {todo.text}
          </span>

          <button onClick={onClickDelete} class="btn btn--delete btn--radius">delete</button>
        </label>
      </div>

      <style jsx> {`
        .panel-block {
          width: 100%;
          padding: 30px 50px;
          font-size: 20px;
          border-radius: 3px;
          border: 2px solid #ddd;
          box-sizing: border-box;
          display: flex
        }
        .todo-content{
          margin:auto
        }
        .btn--delete,
         a.btn--delete {
          color: #fff;
          background-color: #F44336;
        }
         .btn--delete:hover,
         a.btn--delete:hover {
          color: #fff;
          background: #f56500;
        }
      `}</style>
    </>
  );
}

export default ToDo;