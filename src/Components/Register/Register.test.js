import React from "react"
import { shallow } from "enzyme";
import Register from "./Register"


describe("Register component", () => {
    const component = shallow(<Register />);

    it("changes state when onInputChange is called", () => {
        expect(component.state().email).toEqual(""); //expect default to be ""
        component.instance().onInputChange({ target: { name: "email", value: "mock value" } })
        expect(component.state().email).toEqual("mock value"); //expect new state to be equal to new value (mock value)

    })

    //     it("", () => {
    //         component.find("input").at(0).simulate("change")
    //         expect(component.instance().onInputchange()).toBeCalled()
    //     })



    // this is testing functions. 
    // it("sum return 7 if given parameters are 3 and 4", () => {
    //     expect(sum(3, 4)).toEqual(7);
    //   });
})