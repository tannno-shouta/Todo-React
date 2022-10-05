import classNames from 'classnames';
 
export const Filter = (props) => {
 
  // propsを定義
  const { value, onChange } = props;
 
  // フィルターの切り替え
  const handleClick = (key, event) => {
    event.preventDefault();
    onChange(key);
  };
 
  return (
    <>
      <div className="panel-block">
        <a
          href="#"
          onClick={handleClick.bind(null, 'ALL')}
          className={classNames({ 'is-active': value === 'ALL' })}
        >All</a>
        <a
          href="#"
          onClick={handleClick.bind(null, 'TODO')}
          className={classNames({ 'is-active': value === 'TODO' })}
        >ToDo</a>
        <a
          href="#"
          onClick={handleClick.bind(null, 'DONE')}
          className={classNames({ 'is-active': value === 'DONE' })}
        >Done</a>
      </div>

      <style jsx> {`
          .panel-block {
            width: 100%; 
            padding: 30px 50px;
            font-size: 20px;
            border-radius: 3px; 
            border: 2px solid #ddd; 
            box-sizing: border-box; 
          }
      `}</style>
    </>
  );
};
 
export default Filter;