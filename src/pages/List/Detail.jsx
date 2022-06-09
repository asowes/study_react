import React from "react";

function Detail({ item, onDeleteItem }) {
  const _onDeleteItem = (id) => {
    onDeleteItem && onDeleteItem(id);
  };

  return (
    <>
      <div style={{ margin: "8px 0" }}>
        name: {item?.name}
        <button
          style={{ margin: "0 16px" }}
          onClick={() => _onDeleteItem(item?.id)}
        >
          删除
        </button>
      </div>
    </>
  );
}

export default Detail;
