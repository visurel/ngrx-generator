import * as from{{ properCase name }} from './{{ lowerCase name }}.actions';

export interface State {
  loading: boolean;
  entities: { [id: string]: any };
  result: string[];
}

export const initialState: State = {
  loading: false,
  entities: {},
  result: []
};

export function reducer(state = initialState, action: from{{ properCase name }}.Actions): State {
  switch (action.type) {
    case from{{ properCase name }}.LOAD: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case from{{ properCase name }}.LOAD_SUCCESS: {
      return Object.assign({}, state, {
        loading: false
      });
    }

     case from{{ properCase name }}.LOAD_FAIL: {
      return Object.assign({}, state, {
        loading: false
      });
    }

    default: {
      return state;
    }
  }
}