import { createAction, props } from '@ngrx/store';
import { IPersonalData } from '../../models/personal-data.model';
import { IExperience } from '../../models/experience.model';
import { IEducation } from '../../models/education.model';

const GET_PERSONAL_DATA_FROM_LOCAL_STORAGE = '[CV data] Get personal data from Local Storage';
const GET_PERSONAL_DATA_SUCCESS = '[CV data] Get personal data success';

const GET_EXPERIENCES_FROM_LOCAL_STORAGE = '[CV data] Get experiences from Local Storage';
const GET_EXPERIENCES_SUCCESS = '[CV data] Get experiences success';

const GET_EDUCATIONS_FROM_LOCAL_STORAGE = '[CV data] Get educations from Local Storage';
const GET_EDUCATIONS_SUCCESS = '[CV data] Get educations success';

const GET_THEME_FROM_LOCAL_STORAGE = '[CV data] Get theme from Local Storage';
const GET_THEME_SUCCESS = '[CV data] Get theme success';

const ADD_PERSONAL_DATA_TO_LOCAL_STORAGE = '[CV data] Add personal data to Local Storage';
const ADD_EXPERIENCES_TO_LOCAL_STORAGE = '[CV data] Add experiences to Local Storage';
const ADD_EDUCATIONS_TO_LOCAL_STORAGE = '[CV data] Add educations to Local Storage';

const ADD_THEME_TO_LOCAL_STORAGE = '[CV data] Add theme to Local Storage';

const DELETE_EXPERIENCES_FROM_LOCAL_STORAGE = '[CV data] Delete experiences from Local Storage';
const DELETE_EDUCATIONS_FROM_LOCAL_STORAGE = '[CV data] Delete educations from Local Storage';

const RESET_FORMS = '[CV data] Reset forms';

export const getPersonalDataFromLocalStorage = createAction(
	GET_PERSONAL_DATA_FROM_LOCAL_STORAGE,
	props<{ key: string }>(),
);

export const getPersonalDataSuccess = createAction(
	GET_PERSONAL_DATA_SUCCESS,
	props<{ payload: IPersonalData }>(),
);

export const getExperiencesFromLocalStorage = createAction(
	GET_EXPERIENCES_FROM_LOCAL_STORAGE,
	props<{ key: string }>(),
);

export const getExperiencesSuccess = createAction(
	GET_EXPERIENCES_SUCCESS,
	props<{ payload: IExperience[] }>(),
);

export const getEducationsFromLocalStorage = createAction(
	GET_EDUCATIONS_FROM_LOCAL_STORAGE,
	props<{ key: string }>(),
);

export const getEducationsSuccess = createAction(
	GET_EDUCATIONS_SUCCESS,
	props<{ payload: IEducation[] }>(),
);

export const getThemeFromLocalStorage = createAction(
	GET_THEME_FROM_LOCAL_STORAGE,
	props<{ key: string }>(),
);

export const getThemeSuccess = createAction(GET_THEME_SUCCESS, props<{ payload: string }>());

export const addPersonalDataToLocalStorage = createAction(
	ADD_PERSONAL_DATA_TO_LOCAL_STORAGE,
	props<{ payload: IPersonalData }>(),
);

export const addExperiencesToLocalStorage = createAction(
	ADD_EXPERIENCES_TO_LOCAL_STORAGE,
	props<{ payload: IExperience[] }>(),
);

export const addEducationsToLocalStorage = createAction(
	ADD_EDUCATIONS_TO_LOCAL_STORAGE,
	props<{ payload: IEducation[] }>(),
);

export const addThemeToLocalStorage = createAction(
	ADD_THEME_TO_LOCAL_STORAGE,
	props<{ payload: string }>(),
);

export const deleteExperiencesFromLocalStorage = createAction(
	DELETE_EXPERIENCES_FROM_LOCAL_STORAGE,
	props<{ key: string }>(),
);

export const deleteEducationsFromLocalStorage = createAction(
	DELETE_EDUCATIONS_FROM_LOCAL_STORAGE,
	props<{ key: string }>(),
);

export const resetForms = createAction(RESET_FORMS);
