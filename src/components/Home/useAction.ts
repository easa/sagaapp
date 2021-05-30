import { useDispatch } from 'react-redux';

function useAction() {
  const dispatch = useDispatch();

  const onActionClick = function actionClickHandler() {
    dispatch({ type: 'ADD_USER' });
  };

  return {
    onActionClick,
  };
}

export default useAction;
