export const Header = () => {
  return(
    <>
    <div className= "l-header">
      <div class="l-header-inner">
        <div class="heading">
          <h1 class="title">Todo</h1>
        </div>
      </div>
    </div>

    <style jsx> {`
        .l-header {
          background-color: #def7ff;
          transition: top 0.4s ease;
          box-sizing: content-box;
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          box-shadow: 0 2px 1px rgba(0, 0, 0, 0.1);
          position: relative;
          z-index: 100;
          height: 50px;
          padding: 10px 0;
          display: flex;
        }

        .l-header-inner {
          width: 50%;
          margin-left: 30px;
        }
        
      `}</style>
    </>
  );
};