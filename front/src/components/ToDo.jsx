import classNames from 'classnames';
import axios from "axios";

export const ToDo = (props) => {

  // stateを作成
  const { todo, onCheck, handleDelete } = props;

  // チェックボックス押下時、ToDoAppクラスの「handleCheck」関数を実行
  const handleChange = () => {
    onCheck(todo);
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
        </label>
        <button onClick={handleDelete}>削除</button>
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
      `}</style>
    </>
  );
}

export default ToDo;
