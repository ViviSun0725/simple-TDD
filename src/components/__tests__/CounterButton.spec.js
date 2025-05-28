import { describe, expect, it } from "vitest";
import  CounterButton  from "@/components/ui/CounterButton.vue";
import { mount } from "@vue/test-utils";

describe("計數器按鈕", () => {
    it("有一顆按鈕，它的初始值為 0", () => {
        const wrapper = mount(CounterButton);
        expect(wrapper.text()).toEqual("0");
    })

    it ("點擊這顆按鈕，按鈕上的數字會加 1", async () => {
        const btn = mount(CounterButton);
        await btn.trigger("click");
        expect(btn.text()).toEqual("1");
    })

    it ("可透過 prop 設定初始值",  () => {
        const btn = mount(CounterButton, { props :{
            initCount: 100
        }});
        expect(btn.text()).toEqual("100");
    })
})