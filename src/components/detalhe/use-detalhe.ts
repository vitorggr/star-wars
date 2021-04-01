import { useMemo } from "react";
import { genericController, SWAPIEndpoint } from "../../api/generic-api";
import { useAsync } from "../../comum/hooks/use-async";
import { AsyncResultType } from "../../comum/hooks/use-async"


export const useDetalhe = <T>(id: number, controllerName: SWAPIEndpoint): AsyncResultType<T> => {
    const controller = useMemo(
        () => genericController<T>(controllerName).getById(id),
        [controllerName, id]);
    const { error, isLoading, result } = useAsync<T>(controller);
    return { error, isLoading, result };
}