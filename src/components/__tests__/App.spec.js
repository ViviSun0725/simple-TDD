import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import App from "@/App.vue"
import SimpleAddMinusMachine from "@/components/form/SimpleAddMinusMachine.vue"

describe("App",() => {
    test("畫面上有一組簡單的加減器", async () => {
        const wrapper = mount(App)
        // const machine = wrapper.findComponent(SimpleAddMinusMachine)
        const button = wrapper.findAll("button")[1]
        const result = wrapper.find("span")

        expect(wrapper.text()).toContain("+")

        await button.trigger("click")
        expect(result.text()).toEqual("1")
        // machine.find("button")
    })
})