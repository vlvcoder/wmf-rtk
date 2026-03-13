import { bindActionCreators, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const initialState = {
    value: 0,
    status: 'remoteState',
    data: null,
    loading: false,
    error: null
};

export const remoteSlice = createSlice({
    name: 'remoteSlice',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        setData: (state, action) => {
            state.data = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        resetState: (state) => {
            return initialState;
        }
    },
});

// Экспорт действий (actions)
export const useActionsRemote = () => {
    const dispatch = useDispatch();
    return bindActionCreators(remoteSlice.actions, dispatch);
}
