import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LoaderHoc } from "../../src/components/Hoc"
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider, useSelector, useDispatch } from 'react-redux';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const mockInitialState = {
    auth: {},
    common: { loading : true}
}


describe('LoaderHoc test', () => {
    const props = {}
    it('this is components snapshot rendering test', () => {
        const { container } = render(
            <Provider store={mockStore(mockInitialState)}>
                <LoaderHoc {...props} />
          </Provider>
        );
        expect(container).toMatchSnapshot();
      });
      it('this is components snapshot rendering test when loading is false', () => {
        mockInitialState.common.loading = false
        const { container } = render(
            <Provider store={mockStore(mockInitialState)}>
                <LoaderHoc {...props} />
          </Provider>
        );
        expect(container).toMatchSnapshot();
      });
})
