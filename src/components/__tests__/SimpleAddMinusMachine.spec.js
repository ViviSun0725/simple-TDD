// ### 練習三：**簡單加減器**

// 有兩個按鈕 `+` `-`，中間顯示數字。

// 需求：

// 1. 中間的預設數字 `0`
// 2. 按 `+` 按鈕數字加 `1`，`-` 按鈕數字減 `1`
// 3. 數字不能是負的值

import { describe, expect, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SimpleAddMinusMachine from "@/components/form/SimpleAddMinusMachine.vue"

describe("簡單加減器",  () => {
    test("中間的預設數字 0", () => {
        const wrapper = mount(SimpleAddMinusMachine)
        const input = wrapper.find("span")
        expect(input.text()).toEqual("0")
        //
    })

    test("按 + 數字 +1, 按 - 數字-1", async () => {
        const wrapper = mount(SimpleAddMinusMachine)
        const input = wrapper.find("span")
        const plusBtn = wrapper.find("[data-testid='plusBtn']")
        const minusBtn = wrapper.find("[data-testid='minusBtn']")

        expect(input.text()).toEqual("0")

        await plusBtn.trigger("click")
        await plusBtn.trigger("click")
        expect(input.text()).toEqual("2")

        
        await minusBtn.trigger("click")
        expect(input.text()).toEqual("1")
    })

    test("數字不能為負的值", async () => {
        const wrapper = mount(SimpleAddMinusMachine)
        const input = wrapper.find("span")
        const minusBtn = wrapper.find("[data-testid='minusBtn']")

        expect(input.text()).toEqual("0")

        await minusBtn.trigger("click")
        await minusBtn.trigger("click")
        await minusBtn.trigger("click")
        expect(input.text()).toEqual("0")
    })
})