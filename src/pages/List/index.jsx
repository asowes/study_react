import React, { useEffect, useState } from "react";
import Detail from "./Detail";

function List() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      await sleep(500);
      setData([{ id: "001", name: "a001" }]);
      setLoading(false);
    }
    fetchData();
  }, []);

  const onAddItem = () => {
    setLoading(true);
    sleep(200)
      .then((e) => {
        setData([
          ...data,
          { id: `00${data.length + 1}`, name: `a00${data.length + 1}` },
        ]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onDeleteItem = (id) => {
    setLoading(true);
    sleep(100)
      .then(() => {
        const newData = data.filter((item) => item.id !== id);
        setData([...newData]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div>
        <button type="button" onClick={onAddItem}>
          添加一个
        </button>
      </div>
      <div>展示的内容：</div>
      <div>
        {loading
          ? "loading..."
          : data.map((i) => {
              return (
                <div key={i.id}>
                  <Detail item={i} onDeleteItem={onDeleteItem} />
                </div>
              );
            })}
      </div>
    </>
  );
}

export default List;
