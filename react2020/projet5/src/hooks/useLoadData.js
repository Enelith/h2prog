import { useState } from "react";
import axios from "axios";

function useLoadData() {
    const [datas, setDatas] = useState(null);

    const loadDatas = (url) => {
        axios.get(url)
            .then(response => {
                setDatas(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return [datas, loadDatas];
}

export default useLoadData;