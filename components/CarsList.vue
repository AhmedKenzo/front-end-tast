<template>
  <div style="background-color: #cfcfcf39">
    <b-container fluid>
      <b-row>
        <b-col sm="4">
          <div class="d-block left-cards">
            <b-card style="margin-top: 5px" class="mb-2">
              <div class="live-date d-flex justify-content-between">
                <b class="p-3">22-01-2022</b>
                <b class="p-3">تاريخ البث</b>
              </div>
              <div class="d-flex justify-content-between mt-2">
                <div class="currrent text-center d-block py-3">
                  <b style="font-size: 12px">القيمة الحالية بعد الضريبة</b
                  ><br />
                  <b style="font-size: 12px">5000 $</b>
                </div>
                <div class="after-tax text-white text-center d-block py-3">
                  <b style="font-size: 12px">القيمة الحالية بعد الضريبة</b
                  ><br />
                  <b style="font-size: 12px">5000 $</b>
                </div>
                <div class="bidder text-right px-1">
                  <b style="color: #44215d">أحمد الرائد</b>
                  <b-avatar size="sm"></b-avatar>
                </div>
              </div>
            </b-card>
            <b-card>
              <b-card-title class="text-right">
                <b style="font-size: 16px">المتنافسون</b>
              </b-card-title>
              <b-card-body>
                <div class="d-block">
                  <div class="d-flex justify-content-between">
                    <div
                      class="text-center py-2"
                      style="
                        width: 50px;
                        height: 50px;
                        background-color: #fdbe0115;
                      "
                    >
                      <h4><b style="color: #fdbc01">+20</b></h4>
                    </div>
                    <div class="d-flex text-center">
                      <p class="mr-2">
                        <b style="font-size: 14px" class="text-dark"
                          >أحمد الرائد</b
                        ><br />
                        <b style="font-size: 14px" class="text-muted"
                          >13:59:00</b
                        >
                      </p>
                      <b-avatar
                        class="my-1"
                        src="~/assets/img/avatar.png"
                      ></b-avatar>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between">
                    <div
                      class="text-center py-2"
                      style="
                        width: 50px;
                        height: 50px;
                        background-color: #fdbe0115;
                      "
                    >
                      <h4><b style="color: #fdbc01">+20</b></h4>
                    </div>
                    <div class="d-flex text-center">
                      <p class="mr-2">
                        <b style="font-size: 14px" class="text-dark"
                          >أحمد الرائد</b
                        ><br />
                        <b style="font-size: 14px" class="text-muted"
                          >13:59:00</b
                        >
                      </p>
                      <b-avatar
                        class="my-1"
                        src="~/assets/img/avatar.png"
                      ></b-avatar>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between">
                    <div
                      class="text-center py-2"
                      style="
                        width: 50px;
                        height: 50px;
                        background-color: #fdbe0115;
                      "
                    >
                      <h4><b style="color: #fdbc01">+20</b></h4>
                    </div>
                    <div class="d-flex text-center">
                      <p class="mr-2">
                        <b style="font-size: 14px" class="text-dark"
                          >أحمد الرائد</b
                        ><br />
                        <b style="font-size: 14px" class="text-muted"
                          >13:59:00</b
                        >
                      </p>
                      <b-avatar
                        class="my-1"
                        src="~/assets/img/avatar.png"
                      ></b-avatar>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between">
                    <div
                      class="text-center py-2"
                      style="
                        width: 50px;
                        height: 50px;
                        background-color: #fdbe0115;
                      "
                    >
                      <h4><b style="color: #fdbc01">+20</b></h4>
                    </div>
                    <div class="d-flex text-center">
                      <p class="mr-2">
                        <b style="font-size: 14px" class="text-dark"
                          >أحمد الرائد</b
                        ><br />
                        <b style="font-size: 14px" class="text-muted"
                          >13:59:00</b
                        >
                      </p>
                      <b-avatar
                        class="my-1"
                        src="~/assets/img/avatar.png"
                      ></b-avatar>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between">
                    <div
                      class="text-center py-2"
                      style="
                        width: 50px;
                        height: 50px;
                        background-color: #fdbe0115;
                      "
                    >
                      <h4><b style="color: #fdbc01">+20</b></h4>
                    </div>
                    <div class="d-flex text-center">
                      <p class="mr-2">
                        <b style="font-size: 14px" class="text-dark"
                          >أحمد الرائد</b
                        ><br />
                        <b style="font-size: 14px" class="text-muted"
                          >13:59:00</b
                        >
                      </p>
                      <b-avatar
                        class="my-1"
                        src="~/assets/img/avatar.png"
                      ></b-avatar>
                    </div>
                  </div>
                </div>
              </b-card-body>
            </b-card>
          </div>
        </b-col>
        <b-col sm="8">
          <div class="d-block">
            <div class="d-flex">
              <div class="auction-container">
                <div class="background-auction"></div>
                <b-card class="mb-2">
                  <div class="text-right mt-2 d-flex justify-content-end">
                    <b-form-rating
                      style="border: none; background: transparent"
                      variant="warning"
                      id="rating-inline"
                      inline
                      value="4"
                    ></b-form-rating>
                    <p class="mx-2">
                      <b style="font-size: 14px" class="text-dark">اسم البائع</b
                      ><br />
                      <b style="font-size: 14px" class="text-muted"
                        >+966 54 9009019</b
                      >
                    </p>
                    <img src="~/assets/img/seller.png" alt="" />
                  </div>
                  <div class="text-right">
                    <h5><b>شراء مجموعة من السيارات من موديلات 1990</b></h5>
                    <p style="font-size: 12" class="text-muted">Code 1234</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <div>
                      <b-input-group>
                        <b-button class="submit-btn">تأكيد</b-button>
                        <b-form-input
                          class="text-right"
                          placeholder="اكتب المبلغ"
                        ></b-form-input>
                      </b-input-group>
                    </div>
                    <div class="my-1">
                      <span class="badge-bid">+10000</span>
                      <span class="badge-bid">+100010</span>
                      <span class="badge-bid">+100020</span>
                    </div>
                  </div>
                </b-card>
              </div>
              <div class="image-list">
                <div class="arrow up-arrow" @click="scrollUp"></div>
                <div class="d-flex flex-column">
                  <img
                    width="100"
                    class="mb-2"
                    src="~/assets/img/car1.png"
                    alt=""
                  />
                  <img
                    width="100"
                    class="mb-2"
                    src="~/assets/img/car2.png"
                    alt=""
                  />
                  <img
                    width="100"
                    class="mb-2"
                    src="~/assets/img/car3.png"
                    alt=""
                  />
                  <img
                    width="100"
                    class="mb-2"
                    src="~/assets/img/car4.png"
                    alt=""
                  />
                </div>
                <div class="arrow down-arrow" @click="scrollDown"></div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col sm="2"> </b-col>
      </b-row>
      <b-row>
        <b-col sm="4">
          <div class="d-block left-cards">
            <b-card class="mt-2">
              <b-card-body>
                <div class="d-block">
                  <div
                    class="my-2 d-flex justify-content-between"
                    style="background-color: #cfcfcf; height: 40px"
                  >
                    <h5 class="p-2"><b>5000</b></h5>
                    <h5 class="p-2">القيمة الإبتدائية</h5>
                  </div>
                  <div
                    class="my-2 d-flex justify-content-between"
                    style="background-color: #cfcfcf; height: 40px"
                  >
                    <h5 class="p-2"><b>5000</b></h5>
                    <h5 class="p-2">القيمة التقريبية</h5>
                  </div>
                  <div
                    class="my-2 d-flex justify-content-between"
                    style="background-color: #cfcfcf; height: 40px"
                  >
                    <h5 class="p-2"><b>5000</b></h5>
                    <h5 class="p-2">العربون</h5>
                  </div>
                  <div
                    class="my-2 d-flex justify-content-between"
                    style="background-color: #cfcfcf; height: 40px"
                  >
                    <h5 class="p-2"><b>5000</b></h5>
                    <h5 class="p-2">سعر الشراء الفوري</h5>
                  </div>
                  <div
                    class="my-2 d-flex justify-content-between"
                    style="background-color: #cfcfcf; height: 40px"
                  >
                    <h5 class="p-2"><b>5000</b></h5>
                    <h5 class="p-2">العربون</h5>
                  </div>
                </div>
              </b-card-body>
            </b-card>
            <b-card class="mt-2">
              <div class="text-right mb-2">
                <h5><b>المزادات المفضلة</b></h5>
              </div>
              <div class="d-flex justify-content-between">
                <div class="text-right mx-3">
                  <p>
                    سيارة سريعة بى ام دابليو تصنيع 2021 حالته جديدة سيارة سريعة
                    بى ام دابليو تصنيع 2021 حالته جديدة
                  </p>
                  <div class="d-flex justify-content-between">
                    <div>
                      <p style="color: #44215d; font-size: 18px">
                        <b>$ 500</b>
                      </p>
                    </div>
                    <div>
                      أعلى سعر <img src="~/assets/img/coins.png" alt="" />
                    </div>
                  </div>
                </div>
                <div>
                  <img src="~/assets/img/fav.png" alt="" />
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <div class="text-right mx-3">
                  <p>
                    سيارة سريعة بى ام دابليو تصنيع 2021 حالته جديدة سيارة سريعة
                    بى ام دابليو تصنيع 2021 حالته جديدة
                  </p>
                  <div class="d-flex justify-content-between">
                    <div>
                      <p style="color: #44215d; font-size: 18px">
                        <b>$ 500</b>
                      </p>
                    </div>
                    <div>
                      أعلى سعر <img src="~/assets/img/coins.png" alt="" />
                    </div>
                  </div>
                </div>
                <div>
                  <img src="~/assets/img/fav.png" alt="" />
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <div class="text-right mx-3">
                  <p>
                    سيارة سريعة بى ام دابليو تصنيع 2021 حالته جديدة سيارة سريعة
                    بى ام دابليو تصنيع 2021 حالته جديدة
                  </p>
                  <div class="d-flex justify-content-between">
                    <div>
                      <p style="color: #44215d; font-size: 18px">
                        <b>$ 500</b>
                      </p>
                    </div>
                    <div>
                      أعلى سعر <img src="~/assets/img/coins.png" alt="" />
                    </div>
                  </div>
                </div>
                <div>
                  <img src="~/assets/img/fav.png" alt="" />
                </div>
              </div>
              <div style="height: 126px"></div>
            </b-card>
          </div>
        </b-col>
        <b-col sm="8">
          <div class="d-block">
            <div class="d-flex">
              <div class="auction-container">
                <b-card class="mb-2">
                  <b-card-body class="text-right">
                    <div>
                      <h5><b>أرسل رسالة إلى البائع</b></h5>
                      <p style="font-size: 12" class="text-muted">
                        يمكنك في وقت البث المباشر إرسال رسالة إلى البائع
                        للإستفسار
                      </p>
                    </div>
                    <div>
                      <b-input-group>
                        <b-button variant="text">
                          <b-avatar src="~/assets/img/arrow-btn.png"></b-avatar>
                        </b-button>
                        <b-form-input
                          class="text-right mt-2"
                          placeholder="اكتب سؤالك"
                        ></b-form-input>
                      </b-input-group>
                    </div>
                  </b-card-body>
                </b-card>
                <b-card class="mt-2">
                  <b-card-body class="text-right">
                    <h5 class="mb-3"><b> تفاصيل المزاد</b></h5>
                    <div class="d-block">
                      <div class="d-flex justify-content-between mb-3">
                        <h6>200 قطعة</h6>
                        <div>
                          <b>Egypt, Masoura</b>
                          <img width="30" src="~/assets/img/map.svg" alt="" />
                        </div>
                      </div>
                      <div class="d-flex justify-content-between mb-3">
                        <div>
                          <b style="color: #fdbc01">صوت</b>
                          <img width="30" src="~/assets/img/mic.png" alt="" />
                        </div>
                        <div>
                          <b class="text-muted">البيع لأعلى سعر</b>
                          <img width="30" src="~/assets/img/money.svg" alt="" />
                        </div>
                      </div>
                      <div class="d-flex justify-content-between mb-3">
                        <div></div>
                        <div>
                          <b class="text-muted">منتجات متعددة</b>
                          <img width="30" src="~/assets/img/group.svg" alt="" />
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <h5 class="mb-3"><b> تفاصيل المزاد</b></h5>
                      <p>
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد
                        تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد
                        مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة
                        عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد
                        أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
                        الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء
                        لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه
                        الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على
                        صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع
                        نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور
                        مولد النص العربى أن يوفر على المصمم عناء البحث عن نص
                        بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر
                        بشكل لا يليق.
                      </p>
                    </div>
                    <hr />
                    <div>
                      <h5 class="mb-3"><b>سياسة الإسترجاع والاستبدال</b></h5>
                      <p>
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد
                        تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد
                        مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة
                        عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد
                        أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
                        الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء
                        لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه
                        الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على
                        صورة حقيقية لتصميم الموقع. ومن هنا وجب على المصمم أن يضع
                        نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور
                        مولد النص العربى أن يوفر على المصمم عناء البحث عن نص
                        بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر
                        بشكل لا يليق.
                      </p>
                    </div>
                  </b-card-body>
                </b-card>
              </div>
              <div class="image-list" style="width: 110px"></div>
            </div>
          </div>
        </b-col>
        <b-col sm="2"> </b-col>
      </b-row>
      <b-row> </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { id: 1, src: "~/assets/img/car1.png" },
        { id: 2, src: "~/assets/img/car2.png" },
        { id: 3, src: "~/assets/img/car3.png" },
        { id: 4, src: "~/assets/img/car4.png" },
      ],
      currentIndex: 0,
    };
  },
  methods: {
    scrollUp() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    scrollDown() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
      }
    },
  },
};
</script>

<style >
</style>
