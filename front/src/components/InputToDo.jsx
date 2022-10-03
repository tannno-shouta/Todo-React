import {useState} from "react";

export const InputToDo = (props) => {
  
  // stateを作成
  const [text, setText] = useState('');

  //入力値をtextに反映
  const handleChange = e => setText(e.target.value);

  // Enter押下時、ToDoに追加
  const handleEnter = e => {
    if (e.key === 'Enter') {
      // 入力値が空白文字の場合終了
      if (!text.match(/\S/g) ) return;
      // ToDoAppクラスの「handleAdd」関数を実行
      props.onAdd(text);
      setText('');
    }
  };

  return (
    <>
      <div className="panel-block">
        <input
          class="input"
          type="text"
          placeholder="Enter your todo"
          value={text}
          onChange={handleChange}
          onKeyPress={handleEnter}
        />
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

        #panel-block :focus {
          border: 2px solid #ff9900; 
          z-index: 10;
          outline: 0;
      `}</style>
    </>
  );
};

export default InputToDo;