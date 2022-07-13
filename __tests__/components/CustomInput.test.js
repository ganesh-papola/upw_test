import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CustomInput } from "../../src/components"

describe('CustomInput test', () => {
    const props = {
        id: "testId123",
        label: "test",
        name: "test",
        errors: {},
        touched: {},
        handleChange: jest.fn(),
        containerClass: "",
        inputClass: "",
        labelClass: "",
        placeholder: "input",
        type: "text",
        value: "Hii",
    }
    it('this is components snapshot rendering test', () => {
        const { container } = render(
            <CustomInput {...props} />
        );
        expect(container).toMatchSnapshot();
    });
    it('this is components snapshot rendering test with error', () => {
        const newProps = {
            ...props,
            errors : {
                name: "some custom error",
            }
        }
        const { container } = render(
            <CustomInput {...props} />
        );
        expect(container).toMatchSnapshot();
    });
    it('should change the value while input', () => {
        const { queryAllByPlaceholderText } = render(<CustomInput {...props} />);
        const input = queryAllByPlaceholderText("input")[0];
        fireEvent.change(input, {target: {value: 'Test'}})
        expect(input.value).toBe('Hii')
    })
})
