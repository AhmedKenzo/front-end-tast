<template>
  <div>
    <div class="mt-5">
      <b-container>
        <b-card title="Form Task">
          <b-container fluid class="px-1">
            <b-row v-if="!showTable" class="mb-3 py-2 justify-content-center">
              <b-col sm="12">
                <b-form-group>
                  <template v-slot:label>
                    <h5><b>Main Categories</b><i class="text-danger">*</i></h5>
                  </template>
                  <v-select
                    @input="searchSubCategory"
                    class="select-style"
                    :options="categories"
                    v-model="category"
                    placeholder="Search Category"
                  ></v-select>
                </b-form-group>
                <b-form-group>
                  <template v-slot:label>
                    <h5><b>Sub Categories</b><i class="text-danger">*</i></h5>
                  </template>
                  <v-select
                    @input="searchProperty"
                    class="select-style"
                    :options="subCategories"
                    v-model="subCategory"
                    placeholder="Search Sub Category"
                  >
                    <template #no-options="{}">
                      <i style="color: #d20653"
                        >Select main category to show the sub category</i
                      >
                    </template>
                  </v-select>
                </b-form-group>
                <div v-if="propertyLoading" class="text-center">
                  <b-spinner></b-spinner>
                </div>
                <div v-else>
                  <div v-if="properties.length > 0">
                    <div v-for="prop in properties" :key="prop.id">
                      <b-form-group v-if="prop.options.length != 0">
                        <template v-slot:label>
                          <h5>
                            <b>{{ prop.name }}</b>
                          </h5>
                        </template>
                        <v-select
                          @input="searchPropChild(prop)"
                          class="select-style"
                          :options="prop.options"
                          v-model="prop.option"
                          :placeholder="'Select ' + prop.name"
                        ></v-select>
                        <div
                          v-if="prop.option != null && prop.option.id == 'other'"
                          class="mt-2"
                        >
                          <b-form-input
                            v-model="prop.other"
                            placeholder="Type something"
                          ></b-form-input>
                        </div>
                        <div class="mt-2" v-if="prop.optionChilds ">
                          <b-container fluid>
                            <b-row>
                              <b-col
                                sm="4"
                                v-for="child in prop.optionChilds"
                                :key="child.id"
                              >
                                <b-form-group v-if="child.options.length > 0">
                                  <template v-slot:label>
                                    <h6>
                                      <b>{{ child.name }}</b
                                      ><i class="text-danger">*</i>
                                    </h6>
                                  </template>
                                  <div>
                                    <v-select
                                      class="select-style"
                                      @input="searchOptionThirdChild(child , prop)"
                                      :options="child.options"
                                      v-model="child.option"
                                      :placeholder="'Select ' + child.name"
                                    ></v-select>
                                    <div
                                      v-if="
                                        child.option != null &&
                                        child.option.id == 'other'
                                      "
                                      class="mt-2"
                                    >
                                      <b-form-input
                                        v-model="child.other"
                                        placeholder="Type something"
                                      ></b-form-input>
                                    </div>
                                  </div>
                                </b-form-group>
                              </b-col>
                            </b-row>
                          </b-container>
                        </div>
                        <div class="mt-2" v-if="prop.optionThirdChilds">
                          <b-container fluid>
                            <b-row>
                              <b-col
                                sm="4"
                                v-for="c in prop.optionThirdChilds"
                                :key="c.id"
                              >
                                <b-form-group v-if="c.options.length > 0">
                                  <template v-slot:label>
                                    <h6>
                                      <b>{{ c.name }}</b
                                      ><i class="text-danger">*</i>
                                    </h6>
                                  </template>
                                  <div>
                                    <v-select
                                      class="select-style"
                                      :options="c.options"
                                      v-model="c.option"
                                      :placeholder="'Select ' + c.name"
                                    ></v-select>
                                    <div
                                      v-if="
                                        c.option != null &&
                                        c.option.id == 'other'
                                      "
                                      class="mt-2"
                                    >
                                      <b-form-input
                                        v-model="c.other"
                                        placeholder="Type something"
                                      ></b-form-input>
                                    </div>
                                  </div>
                                </b-form-group>
                              </b-col>
                            </b-row>
                          </b-container>
                        </div>
                      </b-form-group>
                    </div>
                    <div class="text-center">
                      <b-button
                        @click="submitForm"
                        style="
                          background-color: #d20653;   
                          color: white;
                          border: none;
                        "
                        >Submit Your Search</b-button
                      >
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
            <b-row v-else class="mb-3">
              <b-col>
                <div v-if="submitLoad" class="text-center">
                  <b-spinner type="grow"></b-spinner>
                </div>
                <div v-else>
                  <b-table striped responsive :items="selectedValues"></b-table>
                  <div class="text-center">
                    <b-button
                      @click="reset"
                      style="
                        background-color: #d20653;
                        color: white;
                        border: none;
                      "
                      >Search Another Category</b-button
                    >
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </b-card>
      </b-container>
    </div>
  </div>
</template>

<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css"
import axios from "axios";
export default {
  data() {
    return {
      category: "",
      categories: [],
      subCategory: "",
      subCategories: [],
      properties: [],
      propertyLoading: false,
      submitLoad: true,
      selectedValues: [],
      showTable: false,
    };
  },
  components: {
    "v-select": vSelect,
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    getCategories() {
      axios
        .get("https://staging.mazaady.com/api/v1/get_all_cats", {
          headers: {
            "private-key": "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16",
          },
        })
        .then((resp) => {
          this.categories = resp.data.data.categories.map((category) => {
            return {
              id: category.id,
              label: category.name,
              subCategories: category.children.map((child) => {
                return {
                  id: child.id,
                  label: child.name,
                };
              }),
            };
          });
          // console.log(this.categories)
        }).catch((err)=>{
          console.log(err)
          alert('Something went wron')
        })
    },
    searchSubCategory() {
      if (this.category) {
        this.subCategories = [];
        this.properties = [];
        this.subCategory = null;
        this.subCategories = this.categories.find(
          (cat) => cat.id === this.category.id
        ).subCategories;
      } else {
        this.subCategories = [];
        this.subCategory = null;
        this.properties = [];
      }
    },
    searchProperty() {
      if (this.subCategory) {
        this.properties = [];
        this.propertyLoading = true;
        axios
          .get(
            "https://staging.mazaady.com/api/v1/properties?cat=" +
              this.subCategory.id,
            {
              headers: {
                "private-key": "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16",
              },
            }
          )
          .then((resp) => {
            this.properties = resp.data.data.map((prop) => {
              // Add a new option to the options array for each property
              const options = prop.options.map((option) => {
                return {
                  id: option.id,
                  label: option.name,
                };
              });
                options.push({
                  id: "other",
                  label: "Other",
                });
              return {
                id: prop.id,
                name: prop.name,
                option: prop.value,
                options: options,
                other: prop.other_value,
                isOther: false,
                optionChilds: '',
                optionThirdChilds : '',
              };
            });
            // console.log(this.properties)
            this.propertyLoading = false;
          })
          .catch((err) => {
            console.log(err);
            alert("Something went wrong");
          });
      } else {
        this.properties = [];
      }
    },
    searchPropChild(data) {
      if (data.option) {
        data.optionChilds = '';
        data.optionThirdChilds = ''
        if (data.option.id != "other") {
          axios
            .get(
              "https://staging.mazaady.com/api/v1/get-options-child/" +
                data.option.id,
              {
                headers: {
                  "private-key": "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16",
                },
              }
            )
            .then((resp) => {
              // console.log(resp.data.data)
              if (resp.data.data.length > 0) {
                data.optionChilds = resp.data.data.map((child) => {
                  const options = child.options.map((option) => {
                    return {
                      id: option.id,
                      label: option.name,
                    };
                  });
                    options.push({
                      id: "other",
                      label: "Other",
                    });
                  return {
                    id: child.id,
                    name: child.name,
                    option: child.value,
                    options: options,
                    other: child.other_value,
                    isOther: false,
                  };
                });
              }
              console.log(data.optionChilds)
            })
            .catch((err)=>{
              console.log(err)
              alert('Something went wron')
            })
        }
      } else {
        data.optionChilds = '';
        data.optionThirdChilds = ''
      }
    },
    searchOptionThirdChild(data , prop) {
      if (data.option) {
        prop.optionThirdChilds = '';
        if (data.option.id != "other") {
          axios
            .get(
              "https://staging.mazaady.com/api/v1/get-options-child/" +
                data.option.id,
              {
                headers: {
                  "private-key": "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16",
                },
              }
            )
            .then((resp) => {
              // console.log(resp.data.data)
              if (resp.data.data.length > 0) {
                prop.optionThirdChilds = resp.data.data.map((child) => {
                  const options = child.options.map((option) => {
                    return {
                      id: option.id,
                      label: option.name,
                    };
                  });
                    options.push({
                      id: "other",
                      label: "Other",
                    });
                  return {
                    id: child.id,
                    name: child.name,
                    option: child.value,
                    options: options,
                    other: child.other_value,
                    isOther: false,
                  };
                });
              }
              console.log(prop.optionThirdChilds)
            })
            .catch((err)=>{
              console.log(err)
              alert('Something went wron')
            })
        } 
      } else {
        prop.optionThirdChilds ='';
      }
    },
    submitForm() {
      setTimeout(() => {
        this.submitLoad = !this.submitLoad;
      }, 3000);
      const selectedValues = [];

      // Add the selected category to the array
      if (this.category) {
        selectedValues.push({
          id: this.category.id,
          label: this.category.label,
          type: "category",
        });
      }

      // Add the selected subcategory to the array
      if (this.subCategory) {
        selectedValues.push({
          id: this.subCategory.id,
          label: this.subCategory.label,
          type: "subcategory",
        });
      }

      // Loop through each selected property and add it to the array
      this.properties.forEach((prop) => {
        if (prop.option) {
          if (prop.option.id != "other") {
            selectedValues.push({
              id: prop.option.id,
              label: prop.option.label,
              type: prop.name,
            });
          } else {
            selectedValues.push({
              id: prop.option.id,
              label: prop.other,
              type: prop.name,
            });
          }
        }
        if (prop.optionChilds.length > 0) {
          prop.optionChilds.forEach((child) => {
            if (child.option) {
              if (child.option.id != "other") {
                selectedValues.push({
                  id: child.option.id,
                  label: child.option.label,
                  type: child.name,
                });
              } else {
                selectedValues.push({
                  id: child.option.id,
                  label: child.other,
                  type: child.name,
                });
              }
            }
          });
        }
        if (prop.optionThirdChilds.length > 0) {
          prop.optionThirdChilds.forEach((child) => {
            if (child.option) {
              if (child.option.id != "other") {
                selectedValues.push({
                  id: child.option.id,
                  label: child.option.label,
                  type: child.name,
                });
              } else {
                selectedValues.push({
                  id: child.option.id,
                  label: child.other,
                  type: child.name,
                });
              }
            }
          });
        }
      });

      this.selectedValues = selectedValues;
      this.showTable = true;
    },
    reset() {
      this.showTable = !this.showTable;
      this.submitLoad = !this.submitLoad;
      this.category = null;
      this.subCategory = null;
      this.properties = [];
    },
  },
};
</script>

<style  scoped>
.select-style {
  font-weight: 800;
  --vs-search-input-color: #d20653;
  --vs-search-input-bg: rgb(255, 255, 255);
  --vs-selected-color: #d20653;
  --vs-search-input-placeholder-color: gray;
  --vs-font-size: 1.2rem;
}
</style>