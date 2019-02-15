import React from "react"
import { shallow } from "enzyme"; //shallow test without children
import PostCard from "./PostCard"
import toJson from "enzyme-to-json"


describe("PostCard component", () => { //describe what we are testing and second is a function
    const component = shallow(<PostCard />) //define component that must be tested
    it("renders properly", () => {
        // expect(component.length).toBe(1); //we expect there to be one component 
        expect(toJson(component)).toMatchSnapshot() //created when you run first time and second time it will compare first snapshot with second one
    })

})