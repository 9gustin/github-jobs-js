import { SET_LOCATION, SET_SEARCH, SET_FULLTIME } from './JobFiltersActions';

interface Action {
    type: typeof SET_LOCATION | typeof SET_SEARCH | typeof SET_FULLTIME,
    payload: string | boolean
}

const JobFiltersReducer = (state:any, action:Action) => {
    switch (action.type) {
        case SET_LOCATION:
            return { ...state, location: action.payload };
        case SET_SEARCH:
            return { ...state, search: action.payload };
        case SET_FULLTIME:
            return { ...state, fullTime: action.payload };
    }
}

export default JobFiltersReducer;