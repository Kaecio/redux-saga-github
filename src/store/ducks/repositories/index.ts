import { Reducer } from 'redux';
import { RepositoriesState, RepositoriesTypes } from './types';

const INITIAL_STATE: RepositoriesState= {
  data: [],
  loading: false,
  error: false
}

// o state inicializa com os dados setados
const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RepositoriesTypes.LOAD_REQUEST:
      // requisição, copia todo o estado e o loading vai ser chamado
      return { ...state, loading: true }; 
    case RepositoriesTypes.LOAD_SUCCESS:
      // sucesso, copia todo o estado e o loading nao será chamado, não dará erro e vai atualizar a data
      return { ...state, loading: false, error: false, data: action.payload.data };
    case RepositoriesTypes.LOAD_ERROR: 
      // erro, copia todo o estado e o loading nao será chamado, dará erro e o data nao receberá dados
      return { ...state, loading: false, error: true, data: [] }
    default: 
      return state;
  }
} 

export default reducer;