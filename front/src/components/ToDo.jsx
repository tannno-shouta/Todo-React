import classNames from 'classnames';

export const ToDo = (props) => {
 
  // stateを作成
  const { todo, onCheck } = props;
 
  // チェックボックス押下時、ToDoAppクラスの「handleCheck」関数を実行
  const handleChange = () => {
    onCheck(todo);
  };
 
  return (
    <>
      <label className="panel-block">
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

      <style jsx> {`
        .panel-block {
          width: 100%; 
          padding: 30px 50px;
          font-size: 20px;
          border-radius: 3px; 
          border: 2px solid #ddd;
        }
      `}</style>
    </>
  );
}
 
export default ToDo;