/** 
 * Action types
 */

export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCESS = '@repositories/LOAD_SUCCESS',
  LOAD_ERROR = '@repositories/LOAD_ERROR'
}

/**
 * Data types
 */
// formato do repository
export interface Repository {
  id: number
  name: string
  visibility: string
}

/** 
 * State types
 */
// como vai ser o formato do estado que vai ser armazenado no reducer
// readonly deixar o stado imutavel
export interface RepositoriesState {
  readonly data: Repository[]
  readonly loading: boolean
  readonly error: boolean
}