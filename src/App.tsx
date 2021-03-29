import { useEffect, useState } from "react";
import { genericController, PageData } from "./api/generic-api";
import { People } from "./api/schemas/people";

export const App = () => {
  const { getAll } = genericController<People>("people");
  const [people, setPeople] = useState<People[]>();
  const [page, setPage] = useState<PageData>();
  useEffect(() => {
    getAll(3).then((valor) => {
      setPeople(valor.dados);
      setPage(valor.page);
    });
  }, []);

  if (people) {
    return (
      <>
      <div>Paginação Anterior: {page?.anterior} - Próximo: {page?.proximo}</div>
        {people.map((person) => (
          <div>
            {person.name}-{person.gender}
          </div>
        ))}
      </>
    );
  } else {
    return <div></div>;
  }
};
