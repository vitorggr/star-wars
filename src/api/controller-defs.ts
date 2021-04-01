import { SWAPIEndpoint } from "./generic-api";

interface ControllerDefs {
    detailData: string[]
}

const controllerData : Map<string,ControllerDefs> = new Map();

controllerData.set('people',{
    detailData:['name','mass','hair_color','skin_color','gender']
})

controllerData.set('films',{
    detailData:['title','director','producer']
})

export const getDetailData = (controller:SWAPIEndpoint) : string[] | null =>{
    const coluna = controllerData.get(controller);
    if (!coluna) return null;
    return coluna.detailData;
}
