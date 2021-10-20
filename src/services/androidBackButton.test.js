const androidBackButton = require("./androidBackButton")
// @ponicode
describe("androidBackButton.handleAndroidBackButton", () => {
    test("0", () => {
        let callFunction = () => {
            androidBackButton.handleAndroidBackButton(() => "return callback value")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            androidBackButton.handleAndroidBackButton(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("androidBackButton.removeAndroidBackButtonHandler", () => {
    test("0", () => {
        let callFunction = () => {
            androidBackButton.removeAndroidBackButtonHandler()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("androidBackButton.exitAlert", () => {
    test("0", () => {
        let callFunction = () => {
            androidBackButton.exitAlert()
        }
    
        expect(callFunction).not.toThrow()
    })
})
