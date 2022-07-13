import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Header } from "../../src/components"
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider, useSelector, useDispatch } from 'react-redux';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const mockInitialState = {
    auth: {},
    common: {}
}


describe('Header test', () => {
    const props = {}
    it('this is components snapshot rendering test', () => {
        const { container } = render(
            <Provider store={mockStore(mockInitialState)}>
                <Header {...props} />
          </Provider>
        );
        expect(container).toMatchSnapshot();
      });
})
