import { nanoid } from 'nanoid';

export const addTask = text => {
  return {
    type: 'task/addTask',
    payload: {
      id: nanoid(),
      text,
      completed: false,
    },
  };
};

export const deleteTask = taskId => {
  return {
    type: 'task/deleteTask',
    payload: taskId,
  };
};

export const toggleCopleted = taskId => {
  return {
    type: 'task/toggleCopleted',
    payload: taskId,
  };
};

export const setStatusFilter = value => {
  return {
    type: 'filter/setStatusFilter',
    payload: value,
  };
};
