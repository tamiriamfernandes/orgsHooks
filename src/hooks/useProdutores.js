import { useEffect, useState } from "react";
import { loadingProdutores } from "../services/loadingData";

export default function useProdutores(){
    const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const response = loadingProdutores();
    setTitulo(response.titulo);
    setLista(response.lista);
  }, []);

  return [titulo, lista];
}