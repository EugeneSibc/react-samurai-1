import React from "react";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", ()=>{
    test("status from props should be in the state", ()=>{
       const component = create(<ProfileStatus status = "it-kamasutra.com"/>);
       const instance = component.getInstance();
       expect(instance.state.status).toBe("it-kemesutra.com");
    });

})