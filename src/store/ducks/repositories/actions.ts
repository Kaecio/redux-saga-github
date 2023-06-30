/**
 * Actions
 */
// São funçoes que disparam os types

import { action } from 'typesafe-actions';
import { RepositoriesTypes, Repository } from './types';

// funcao action, o primeiro parametro é o type que vai ser disparado
// o segundo parametro é dado para enviar como payload dessa informacao
export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST);
export const loadSuccess = (data: Repository[]) => action(RepositoriesTypes.LOAD_SUCCESS,{data} );
export const loadError = () => action(RepositoriesTypes.LOAD_ERROR);

