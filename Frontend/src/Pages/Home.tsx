import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { fetchTodos } from '../store/todosSlice';
import TaskTable from '../components/TaskTable';

const Home: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    return (
        <div>
            <TaskTable />
        </div>
    );
};

export default Home;
