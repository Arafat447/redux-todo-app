import { ADDED, CLEARCOMPLETED, COLORSELECTED, COMPLETEDALL, DELETED, TOGGLED } from "./actionTypes";

export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};
export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};
export const colorSelected = (todoId, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      todoId,
      color
    },
  };
};
export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId
  };
};
export const completedAll = () => {
  return {
    type: COMPLETEDALL
  };
};
export const clearCompleted = () => {
  return {
    type: CLEARCOMPLETED
  };
};
