import { useState } from "react";
import { genericController } from "./api/generic-api";

export const App = () => {
    const [schema,setSchema] = useState({description:''});
    const {getSchema} = genericController('people');
    getSchema().then(
        valor=>setSchema(valor)
    )
    return(
        <div>{schema.description}</div>
    )
};
