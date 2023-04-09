<template>
    <div class="mt-4 ">
        <!-- Desktop menu -->
        <b-container fluid class="d-none d-md-block " style="padding:0 150px">
            <b-row class="justify-content-end">
                <b-col cols="4">
                    <img src="~/assets/img/logo.png"  class="logo" alt="">
                </b-col>
                <b-col cols="8" class="text-right">
                   <b-form>
                     <b-form-group>
                        <b-input-group>
                            <template #prepend>
                            <b-input-group-text style="background:#D20653" >
                                <b-icon variant="light" icon="search"></b-icon>
                            </b-input-group-text>
                            </template>
                            <b-form-input placeholder="ابحث هنا" class="search-bar"></b-form-input>
                            <template #append>
                            <b-form-select class="search-bar" v-model="selected" placeholder="" >
                                <b-form-select-option class="search-bar" :value="selected">مزاد مباشر متعدد</b-form-select-option>
                                <b-form-select-option class="search-bar" v-for="item in options" :key="item" :value="item">
                                    {{ item }}
                                </b-form-select-option>
                            </b-form-select>
                            </template>
                        </b-input-group>
                    </b-form-group>
                   </b-form>
                </b-col>
            </b-row>
        </b-container>
        <div class="nav-bar">
            <b-container class="d-none d-md-block" fluid>
                <b-row>
                    <b-col lg="4" md="4">
                        <ul class="icons-container">
                            <li>
                                <b-button class="lang-btn">العربية</b-button>
                            </li>
                            <li><img src="~/assets/img/heart.png" alt=""></li>
                            <li><img src="~/assets/img/ring.png" alt=""></li>
                            <li><img src="~/assets/img/money.png" alt=""></li>
                        </ul>
                    </b-col>
                    <b-col lg="8" md="8" class="text-right">
                     <ul class="nav-container">
                        <li style="margin-right: 100px;"><a href="#home">الرئيسية</a></li>
                        <li><a href="#categories">التصنيفات</a></li>
                        <li><a href="#my-purchases">مشترياتي</a></li>
                        <li><a href="#my-account">حسابي</a></li>
                    </ul>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    <!-- end desktop menu -->
    <!-- responsive menu -->
    <div class="navigation-mobile">
        <b-container>
            <b-row>
                <b-col>
                    <img src="~/assets/img/logo.png"  class="logo" alt="">
                </b-col>
                <b-col class="text-right">
                    <b-button variant="text" class="hamburger" v-b-toggle.sidebar-variant>&#9776;</b-button>
                    <b-sidebar id="sidebar-variant" no-header  right body-class="sideBar" backdrop backdrop-variant="dark" text-variant="dark" shadow>
                    <div class="px-3 py-2 ">
                        <ul class="mob-nav-container ">
                            <li>
                                <a href="#my-account">حسابي</a>
                                <b-avatar variant="warning"></b-avatar>
                            </li>
                            <hr>
                            <div class="text-right">
                                <li><a href="#home"> الرئيسية </a><b-icon variant="light" icon="house-fill"></b-icon></li>
                                <li><a href="#categories">التصنيفات </a><b-icon variant="light" icon="border-all"></b-icon></li>
                                <li><a href="#my-purchases">مشترياتي </a><b-icon variant="light" icon="cart2"></b-icon></li>
                            </div>
                        </ul>
                    </div>
                    <div class="px-3 py-2">
                        <ul class="icons-container">
                            <li>
                                <b-button class="lang-btn">العربية</b-button>
                            </li>
                            <li><img src="~/assets/img/heart.png" alt=""></li>
                            <li><img src="~/assets/img/ring.png" alt=""></li>
                            <li><img src="~/assets/img/money.png" alt=""></li>
                        </ul>
                    </div>
                    </b-sidebar>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12">
                    <b-form>
                     <b-form-group>
                        <b-input-group>
                            <template #prepend>
                            <b-input-group-text style="background:#D20653" >
                                <b-icon variant="light" icon="search"></b-icon>
                            </b-input-group-text>
                            </template>
                            <b-form-input placeholder="ابحث هنا" class="search-bar"></b-form-input>
                            <template #append>
                            <b-form-select class="search-bar" v-model="selected" placeholder="" >
                                <b-form-select-option class="search-bar" :value="selected">مزاد مباشر متعدد</b-form-select-option>
                                <b-form-select-option class="search-bar" v-for="item in options" :key="item" :value="item">
                                    {{ item }}
                                </b-form-select-option>
                            </b-form-select>
                            </template>
                        </b-input-group>
                    </b-form-group>
                   </b-form>
                </b-col>
            </b-row>
        </b-container>
    </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                selected:null,
                options:['مزاد1 ','مزاد2','مزاد3']
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>