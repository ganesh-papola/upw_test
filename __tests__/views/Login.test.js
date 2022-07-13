import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Login } from "../../src/views"
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

jest.mock('react-chartjs-2', () => 'Chart')
  jest.mock('chart.js', () => ({
    register: () => null
  }));
  const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const mockInitialState = {
    auth: {},
    common: {}
}
const store = mockStore(mockInitialState);

describe('Dashboard test', () => {
    const props = {}
    it('this is components snapshot rendering test', () => {
        const { container } = render(
            <Provider store={store}>
                <Login {...props} />
          </Provider>
        );
        expect(container).toMatchSnapshot();
      });
})
