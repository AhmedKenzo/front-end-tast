import { mount } from "@vue/test-utils";
import FormComponent from "@/components/FormComponent.vue";

describe("FormComponent", () => {
  test("should render category and subcategory select inputs", async () => {
    // Arrange
    const wrapper = mount(FormComponent);

    // Act
    const categorySelect = wrapper.find(".select-style").at(0);
    const subCategorySelect = wrapper.find(".select-style").at(1);

    // Assert
    expect(categorySelect.exists()).toBe(true);
    expect(subCategorySelect.exists()).toBe(true);
  });

  test("should show properties when subcategory is selected", async () => {
    // Arrange
    const wrapper = mount(FormComponent);
    await wrapper.setData({ subCategories: [{ id: 1, name: "Sub Category 1" }] });

    // Act
    const subCategorySelect = wrapper.find(".select-style").it(1);
    await subCategorySelect.setValue(wrapper.vm.subCategories[0]);

    // Assert
    expect(wrapper.vm.properties.length).toBeGreaterThan(0);
  });

  test("should submit form and show table when submit button is clicked", async () => {
    // Arrange
    const wrapper = mount(FormComponent);
    await wrapper.setData({ subCategories: [{ id: 1, name: "Sub Category 1" }] });
    const subCategorySelect = wrapper.find(".select-style").at(1);
    await subCategorySelect.setValue(wrapper.vm.subCategories[0]);
    const submitButton = wrapper.find("button");

    // Act
    await submitButton.trigger("click");

    // Assert
    expect(wrapper.vm.submitLoad).toBe(false);
    expect(wrapper.vm.showTable).toBe(true);
    expect(wrapper.vm.selectedValues.length).toBeGreaterThan(0);
  });
});
