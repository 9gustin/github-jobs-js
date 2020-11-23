import SearchFilters from '../../models/SearchFilters';
import { SET_LOCATION, SET_TEXT, SET_FULLTIME } from './JobFiltersActions';

interface Action {
    type: typeof SET_LOCATION | typeof SET_TEXT | typeof SET_FULLTIME,
    payload: string | boolean
}

const JobFiltersReducer = (state:any, action:Action) => {
    switch (action.type) {
        case SET_LOCATION:
            return { ...state, location: action.payload };
        case SET_TEXT:
            return { ...state, text: action.payload };
        case SET_FULLTIME:
            return { ...state, fullTime: action.payload };
    }
}

export default JobFiltersReducer;