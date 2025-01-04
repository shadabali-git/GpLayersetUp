import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from "../utils/AxiosInstance.ts";

interface Todo {
    id: number;
    title: string;
    description:string;
    completed: boolean;
}

interface TodosState {
    todos: Todo[];
    loading: boolean;
    error: string | null;
}

const initialState: TodosState = {
    todos: [],
    loading: false,
    error: null,
};

// Fetch Todos
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await axiosInstance.get('/todos');
    return response.data;
});

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.todos = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to fetch todos';
            });
    },
});

export const selectTodos = (state: { todos: TodosState }) => state.todos;

export default todosSlice.reducer;
