// ### 練習二：動態字數顯示

// 需求：

// 1. 使用者可輸入文字
// 2. 即時顯示「你輸入了 N 個字」

import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import  InputCountField  from "@/components/ui/InputCountField.vue";

describe("動態字數顯示", () => {
    test("沒有輸入的時候，顯示「你輸入了0個字」", () => {
        const wrapper = mount(InputCountField)
        expect(wrapper.text()).toContain("你輸入了 0 個字")
    })

    test("使用者可輸入文字", async () => {
        const wrapper = mount(InputCountField)
        const input = wrapper.find("input")

        await input.setValue("abc")
        expect(wrapper.text()).toContain("你輸入了 3 個字")

        await input.setValue("abcdefg")
        expect(wrapper.text()).toContain("你輸入了 7 個字")
    })
})