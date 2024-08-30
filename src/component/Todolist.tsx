import { useState } from "react";
const Todolist = () => {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState<string[]>([]);
  function addActivity() {
    // setListData([...listData, activity]);
    // console.log(listData);
    if (activity !== "") {
      setListData((listData) => {
        const updateListData = [...listData, activity];
        console.log(updateListData);
        setActivity("");
        return updateListData;
      });
    } else {
      alert("plese provide a todo item");
    }
  }
  function removeActivity(i: number | string) {
    const updateListData = listData.filter((_elem: string, id) => {
      return i != id;
    });
    setListData(updateListData);
  }
  function removeAll() {
    setListData([]);
  }
  return (
    <div className="container bg-slate-100">
      <div className="header text-3xl font-semibold">TODO LIST</div>
      <input
        className="bg-transparent mt-3 p-2 rounded-lg border outline-none"
        type="text"
        placeholder="Add Activity"
        required
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />
      <button
        className="text-white font-semibold bg-green-400 p-2 rounded-lg ml-2 w-20"
        onClick={addActivity}
      >
        Add
      </button>
      <p className="list-heading font-medium text-2xl">
        Here is your list : {")"}
      </p>
      {listData.map((data, i) => {
        return (
          <div key={i}>
            <div className="flex gap-3 items-center justify-between px-6 py-1 text-white  bg-gray-500 mt-2">
              <div className="listData">
                {i + 1}.&nbsp; {data}{" "}
              </div>
              <button
                className="bg-red-400 p-1 font-normal rounded-md hover:bg-red-500"
                onClick={() => removeActivity(i)}
              >
                remove
              </button>
              <p>Abdullah</p>
            </div>
          </div>
        );
      })}
      {listData.length >= 1 && (
        <button
          className="bg-red-500 text-white font-medium p-1 mt-2 flex w-full items-center justify-center"
          onClick={removeAll}
        >
          Remove All
        </button>
      )}
    </div>
  );
};
export default Todolist;
