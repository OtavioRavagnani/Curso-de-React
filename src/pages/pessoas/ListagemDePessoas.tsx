/* eslint-disable react/no-children-prop */
import { useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { FerramentasDaListagem } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";
import { PessoasService } from "../../shared/services/api/pessoas/PessoasService";

export const ListagemDePessoas: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const busca = useMemo(() => {
    return searchParams.get("busca") || "";
  }, [searchParams]);

  useEffect(() => {
    PessoasService.getAll(1, busca).then((result) => {
      if (result instanceof Error) {
        alert(result.message);
        return;
      }
    });
  }, [busca]);

  return (
    <LayoutBaseDePagina
      titulo="Listagem de pessoas"
      barraDeFerramentas={
        <FerramentasDaListagem
          mostrarInputBusca
          textoDaBusca={busca}
          textoBotaoNovo="Novaaaaaaa"
          aoMudarTextoDeBusca={(texto) =>
            setSearchParams({ busca: texto }, { replace: true })
          }
        />
      }
      children={undefined}
    ></LayoutBaseDePagina>
  );
};