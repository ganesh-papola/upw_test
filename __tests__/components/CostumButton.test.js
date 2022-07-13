import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CustomButton } from "../../src/components"

describe('CustomButton test', () => {
    const props = {
        title : "Test Button",
        type : "button",
        onClick : jest.fn(),
        buttonClass : "",
    }
    it('this is components snapshot rendering test', () => {
        const { container } = render(
          <CustomButton {...props} />
        );
        expect(container).toMatchSnapshot();
      });
      it('should add click the button', () => {
        const { getByText } = render(<CustomButton {...props} />)
        const click = getByText("Test Button")
        fireEvent.click(click)
        expect(props.onClick).toHaveBeenCalledTimes(1)
    })
})
