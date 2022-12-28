import { useEffect, useState } from "react";
import axios from "axios";
import { DataModel, trans } from "./Model";

const DataList = () => {
  const [data, setData] = useState<DataModel>({
    data1: '',
    data2: ''
  });

  const fetch1 = async () => {
    const res = await axios.get("/test1");
    const model = trans(JSON.stringify(res.data));
    setData(model);
  };

  useEffect(() => {
    fetch1();
  }, []);


  return (
    <div>
      <div>{data.data1}</div>
      <div>{data.data2}</div>
    </div>
  );
};

export default DataList;
