<template>
  <div class="lg:BM-grid lg:BM-grid-cols-[300px_1fr] BM--min-h-[100vh] BM-bg-1f BM-select-none dark:BM-bg-dark1f">
    <aside class="BM-pl-2em BM-bg-white BM-text-666 BM-relative dark:BM-bg-darkwhite lg:BM-rounded-[0_20px_0_0]">
      <!--logo-->
      <div
          class="BM-h-80 BM-flex BM-items-center BM-rounded-[0_20px_0_0] BM-justify-center lg:BM-justify-start BM-sticky BM-top-0 BM-pb-10">
        <img :src="logo" class="BM-w-30 BM-mr-10"/>
        <span class="BM-text-26 BM-text-333">
					<b class="BM-text-main BM-font-bold BM-align-bottom DIN">BM</b>
					<span class="BM-font-thin dark:BM-text-white BM-align-middle">快捷导航</span>
					<sub class="BM-text-main BM-text-18 BM-ml-[0.5em] DIN">v{{ packageJson.version }}</sub>
				</span>
        <div class="BM-absolute BM-left-5 BM-top-2/4 BM-translate-y-[-50%] lg:BM-hidden" @click="showSide = true">
          <svg t="1652664295306" class="BM-fill-999 BM-cursor-pointer dark:BM-fill-darktextwhite"
               viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5076" width="32"
               height="32">
            <path
                d="M120.259456 512.001023m-117.92376 0a115.238 115.238 0 1 0 235.847519 0 115.238 115.238 0 1 0-235.847519 0Z"
                p-id="5077"></path>
            <path
                d="M511.999488 512.001023m-117.921713 0a115.236 115.236 0 1 0 235.843426 0 115.236 115.236 0 1 0-235.843426 0Z"
                p-id="5078"></path>
            <path
                d="M903.739521 512.001023m-117.92376 0a115.238 115.238 0 1 0 235.847519 0 115.238 115.238 0 1 0-235.847519 0Z"
                p-id="5079"></path>
          </svg>
        </div>
      </div>

      <!--aside(lg)-->
      <ul>
        <template v-for="(item, index) in slide" :key="item">
          <!--<li :class="['', { 'BM-text-main active': aside_active === index }]" @click="onCheckType(index)">-->
          <li class="BM-mb-[0.5em]" @click="onCheckType(index)">
            <span class="BM-relative BM-z-10 BM-flex BM-items-center BM-h-full">
                   <img :src="item.icon" class="BM-w-32 BM-h-32 BM-mr-[1em] BM-object-cover"/>
            {{ item.label }}
            </span>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" version="1.1" width="268" height="132" viewBox="0 0 268 132" v-show="aside_active === index">
              <path d="M250.756,26.1818Q251.179,26.1818,251.602,26.1503Q252.025,26.1187,252.446,26.0557Q252.867,25.9927,253.286,25.8984Q253.705,25.8041,254.12,25.6787Q254.535,25.5533,254.946,25.3972Q255.357,25.241,255.762,25.0544Q256.167,24.8679,256.565,24.6513Q256.964,24.4348,257.355,24.1888Q257.746,23.9429,258.129,23.6681Q258.511,23.3933,258.885,23.0903Q259.258,22.7873,259.621,22.4569Q259.984,22.1265,260.336,21.7694Q260.688,21.4123,261.028,21.0294Q261.368,20.6466,261.695,20.2388Q262.023,19.8311,262.336,19.3994Q262.65,18.9678,262.949,18.5133Q263.249,18.0589,263.533,17.5826Q263.817,17.1064,264.086,16.6096Q264.354,16.1127,264.606,15.5965Q264.859,15.0802,265.094,14.5458Q265.329,14.0114,265.547,13.4601Q265.764,12.9089,265.964,12.342Q266.163,11.7752,266.344,11.1942Q266.525,10.6131,266.687,10.0193Q266.849,9.42554,266.992,8.82038Q267.135,8.21523,267.257,7.60018Q267.38,6.98512,267.483,6.36166Q267.586,5.73819,267.669,5.10782Q267.751,4.47744,267.813,3.84167Q267.875,3.2059,267.917,2.56626Q267.958,1.92663,267.979,1.28468Q268,0.642724,268,-0.0000038147L268,132Q268,131.374,267.98,130.749Q267.961,130.124,267.921,129.502Q267.882,128.879,267.823,128.26Q267.764,127.64,267.686,127.026Q267.608,126.412,267.51,125.804Q267.413,125.196,267.296,124.596Q267.18,123.996,267.044,123.405Q266.909,122.814,266.755,122.233Q266.602,121.653,266.43,121.084Q266.258,120.515,266.068,119.96Q265.879,119.404,265.672,118.863Q265.465,118.322,265.242,117.796Q265.018,117.271,264.778,116.762Q264.539,116.253,264.283,115.762Q264.027,115.271,263.757,114.8Q263.486,114.328,263.201,113.876Q262.916,113.425,262.616,112.995Q262.317,112.564,262.005,112.156Q261.693,111.748,261.368,111.363Q261.043,110.978,260.706,110.617Q260.37,110.256,260.022,109.92Q259.675,109.583,259.317,109.273Q258.959,108.962,258.592,108.678Q258.225,108.394,257.85,108.136Q257.474,107.879,257.091,107.649Q256.708,107.419,256.317,107.217Q255.927,107.015,255.531,106.842Q255.136,106.669,254.735,106.525Q254.334,106.38,253.929,106.265Q253.524,106.15,253.115,106.064Q252.707,105.979,252.297,105.923Q251.886,105.867,251.475,105.841L251.475,105.818L39.8182,105.818C17.8272,105.818,0,87.991,0,66C0,44.009,17.8272,26.1818,39.8182,26.1818L250.756,26.1818L250.756,26.1818Z" class="BM-fill-1f dark:BM-fill-dark1f"/>
            </svg>
          </li>
        </template>
      </ul>

      <!--aside(md)-->
      <div
          class="BM-fixed BM-left-0 BM-right-0 BM-top-0 BM-bottom-0 BM-z-10 BM-bg-[rgba(0,0,0,.3)] BM-backdrop-blur-sm dark:BM-bg-[rgba(255,255,255,0.3)] lg:!BM-hidden"
          v-show="showSide">
        <ul class="BM-text-18 BM-h-full BM-list-none dark:BM-text-darktextwhite dark:BM-bg-darkwhite BM-w-[300px] BM-bg-white BM-pl-20 BM-pt-50">
          <template v-for="(item, index) in slide" :key="item">
            <li class="BM-h-60 BM-cursor-pointer hover:BM-text-main BM-pl-20 BM-mb-[0.5em] BM-relative" @click="onCheckType(index)">
              <div class="BM-flex BM-items-center BM-h-full BM-relative BM-z-10">
                <img :src="item.icon" class="BM-w-32 BM-h-32 BM-mr-[1em] BM-object-cover"/>
                {{ item.label }}
              </div>

              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="268" height="132" viewBox="0 0 268 132" class="BM-w-full BM-absolute BM-left-0 BM-right-[-10px] BM-top-2/4 BM-z-[1]" v-show="aside_active === index" style="transform: translate(6px,-50%)">
                <path d="M250.756,26.1818Q251.179,26.1818,251.602,26.1503Q252.025,26.1187,252.446,26.0557Q252.867,25.9927,253.286,25.8984Q253.705,25.8041,254.12,25.6787Q254.535,25.5533,254.946,25.3972Q255.357,25.241,255.762,25.0544Q256.167,24.8679,256.565,24.6513Q256.964,24.4348,257.355,24.1888Q257.746,23.9429,258.129,23.6681Q258.511,23.3933,258.885,23.0903Q259.258,22.7873,259.621,22.4569Q259.984,22.1265,260.336,21.7694Q260.688,21.4123,261.028,21.0294Q261.368,20.6466,261.695,20.2388Q262.023,19.8311,262.336,19.3994Q262.65,18.9678,262.949,18.5133Q263.249,18.0589,263.533,17.5826Q263.817,17.1064,264.086,16.6096Q264.354,16.1127,264.606,15.5965Q264.859,15.0802,265.094,14.5458Q265.329,14.0114,265.547,13.4601Q265.764,12.9089,265.964,12.342Q266.163,11.7752,266.344,11.1942Q266.525,10.6131,266.687,10.0193Q266.849,9.42554,266.992,8.82038Q267.135,8.21523,267.257,7.60018Q267.38,6.98512,267.483,6.36166Q267.586,5.73819,267.669,5.10782Q267.751,4.47744,267.813,3.84167Q267.875,3.2059,267.917,2.56626Q267.958,1.92663,267.979,1.28468Q268,0.642724,268,-0.0000038147L268,132Q268,131.374,267.98,130.749Q267.961,130.124,267.921,129.502Q267.882,128.879,267.823,128.26Q267.764,127.64,267.686,127.026Q267.608,126.412,267.51,125.804Q267.413,125.196,267.296,124.596Q267.18,123.996,267.044,123.405Q266.909,122.814,266.755,122.233Q266.602,121.653,266.43,121.084Q266.258,120.515,266.068,119.96Q265.879,119.404,265.672,118.863Q265.465,118.322,265.242,117.796Q265.018,117.271,264.778,116.762Q264.539,116.253,264.283,115.762Q264.027,115.271,263.757,114.8Q263.486,114.328,263.201,113.876Q262.916,113.425,262.616,112.995Q262.317,112.564,262.005,112.156Q261.693,111.748,261.368,111.363Q261.043,110.978,260.706,110.617Q260.37,110.256,260.022,109.92Q259.675,109.583,259.317,109.273Q258.959,108.962,258.592,108.678Q258.225,108.394,257.85,108.136Q257.474,107.879,257.091,107.649Q256.708,107.419,256.317,107.217Q255.927,107.015,255.531,106.842Q255.136,106.669,254.735,106.525Q254.334,106.38,253.929,106.265Q253.524,106.15,253.115,106.064Q252.707,105.979,252.297,105.923Q251.886,105.867,251.475,105.841L251.475,105.818L39.8182,105.818C17.8272,105.818,0,87.991,0,66C0,44.009,17.8272,26.1818,39.8182,26.1818L250.756,26.1818L250.756,26.1818Z" class="BM-fill-1f dark:BM-fill-dark1f"/>
              </svg>
            </li>
          </template>
        </ul>
        <a href="javascript:void(0)" class="BM-absolute BM-right-20 BM-top-20" @click="showSide = false">
          <svg t="1652664975828" class="BM-fill-white" viewBox="0 0 1024 1024" version="1.1"
               xmlns="http://www.w3.org/2000/svg" p-id="5889" width="26" height="26">
            <path
                d="M925.468404 822.294069 622.19831 512.00614l303.311027-310.331931c34.682917-27.842115 38.299281-75.80243 8.121981-107.216907-30.135344-31.369452-82.733283-34.259268-117.408013-6.463202L512.000512 399.25724 207.776695 87.993077c-34.675754-27.796066-87.272669-24.90625-117.408013 6.463202-30.178323 31.414477-26.560936 79.375815 8.121981 107.216907l303.311027 310.331931L98.531596 822.294069c-34.724873 27.820626-38.341237 75.846432-8.117888 107.195418 30.135344 31.43699 82.72919 34.326806 117.408013 6.485715l304.178791-311.219137 304.177767 311.219137c34.678824 27.841092 87.271646 24.951275 117.408013-6.485715C963.808618 898.140501 960.146205 850.113671 925.468404 822.294069z"
                p-id="5890"></path>
          </svg>
        </a>
      </div>

      <a class="BM-absolute BM-bottom-20 BM-left-20 BM-right-20 BM-h-60 BM-bg-1f BM-rounded-full BM-items-center BM-px-30 BM-text-666 dark:BM-bg-dark1f dark:BM-text-darktextwhite BM-hidden lg:BM-flex"
         href="mailto:303278055@qq.com">
        <img :src="connect"/>
        <div class="BM-ml-[0.5em]">
          <span class="BM-text-16">联系作者</span>
          <p class="BM-text-18 BM-mt-5 BM-tracking-wide DIN">303278055@qq.com</p>
        </div>
      </a>
    </aside>
    <div class="BM-px-10 BM-flex BM-flex-col BM-gap-30 BM-pt-30 md:BM-px-20 lg:BM-px-30 xl:BM-px-30 2xl:BM-px-30">
      <header class="BM-flex BM-justify-center">
        <div
            class="BM-h-60 BM-bg-white BM-relative BM-rounded-full BM-flex BM-items-center BM-justify-center BM-flex-1 BM-p-[0.5em] dark:BM-bg-darkwhite">
          <svg t="1652344224036" class="BM-px-[1em] BM-hidden md:BM-block" viewBox="0 0 1024 1024" version="1.1"
               xmlns="http://www.w3.org/2000/svg" p-id="5693" width="25" height="25">
            <path
                d="M474.453333 884.053333c-225.28 0-409.6-184.32-409.6-409.6s184.32-409.6 409.6-409.6 409.6 184.32 409.6 409.6-184.32 409.6-409.6 409.6z m0-68.266666c187.733333 0 341.333333-153.6 341.333334-341.333334s-153.6-341.333333-341.333334-341.333333-341.333333 153.6-341.333333 341.333333 153.6 341.333333 341.333333 341.333334z m252.586667 54.613333c-13.653333-13.653333-10.24-37.546667 3.413333-47.786667s37.546667-10.24 47.786667 3.413334l64.853333 78.506666c13.653333 13.653333 10.24 37.546667-3.413333 47.786667s-37.546667 10.24-47.786667-3.413333l-64.853333-78.506667z"
                p-id="5694" fill="#666666" class="dark:BM-fill-darktextwhite"></path>
          </svg>
          <input type="text" placeholder="百度一下"
                 class="BM-pl-[1em] BM-bg-transparent BM-flex-1 BM-h-full dark:BM-caret-main dark:BM-text-darktextwhite dark:placeholder:BM-text-darktextwhite"
                 ref="searchInput"
                 v-model="searchKey" @keyup.enter="onSearch" @focus="showHistory = true" @click.stop/>
          <button
              class="BM-h-full BM-rounded-full BM-w-[5em] BM-bg-main BM-text-white BM-cursor-pointer hover:BM-bg-mhover"
              @click="onSearch">搜索
          </button>
          <!-- 历史记录 -->
          <dl class="BM-absolute BM-left-0 BM-top-[120%] BM-rounded-20 BM-bg-white BM-w-full BM-z-10 BM-shadow-lg BM-p-20 dark:BM-bg-darkwhite"
              v-show="showHistory && history.length">
            <dt class="BM-text-999 dark:BM-text-darktextwhite dark:BM-border-dark1f BM-text-14 BM-mb-10 BM-pb-10 BM-border-[1px] BM-border-solid BM-border-gray-200 BM-border-r-0 BM-border-t-0 BM-border-l-0 BM-flex BM-justify-between BM-items-center">
              最近搜索
              <svg t="1653035289085" class="BM-fill-999 BM-cursor-pointer dark:BM-fill-darktextwhite"
                   viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9549" width="20"
                   height="20" @click.stop="onChearHistory">
                <path
                    d="M896 196.923077H649.846154V118.153846c0-43.323077-35.446154-78.769231-78.769231-78.769231h-118.153846c-43.323077 0-78.769231 35.446154-78.769231 78.769231v78.769231H128c-15.753846 0-29.538462 13.784615-29.538462 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538462 29.538461h768c15.753846 0 29.538462-13.784615 29.538462-29.538461v-59.076924c0-15.753846-13.784615-29.538462-29.538462-29.538461zM452.923077 137.846154c0-11.815385 7.876923-19.692308 19.692308-19.692308h78.76923c11.815385 0 19.692308 7.876923 19.692308 19.692308v59.076923h-118.153846V137.846154z m364.307692 256h-610.461538c-15.753846 0-29.538462 13.784615-29.538462 29.538461V886.153846c0 55.138462 43.323077 98.461538 98.461539 98.461539h472.615384c55.138462 0 98.461538-43.323077 98.461539-98.461539V423.384615c0-15.753846-13.784615-29.538462-29.538462-29.538461zM452.923077 827.076923c0 11.815385-7.876923 19.692308-19.692308 19.692308h-39.384615c-11.815385 0-19.692308-7.876923-19.692308-19.692308V551.384615c0-11.815385 7.876923-19.692308 19.692308-19.692307h39.384615c11.815385 0 19.692308 7.876923 19.692308 19.692307v275.692308z m196.923077 0c0 11.815385-7.876923 19.692308-19.692308 19.692308h-39.384615c-11.815385 0-19.692308-7.876923-19.692308-19.692308V551.384615c0-11.815385 7.876923-19.692308 19.692308-19.692307h39.384615c11.815385 0 19.692308 7.876923 19.692308 19.692307v275.692308z"></path>
              </svg>
            </dt>
            <dd class="BM-text-666 BM-flex BM-flex-wrap BM-text-16 BM-gap-10 BM-max-h-[400px] BM-overflow-y-auto beautyScroll">
              <template v-for="(item, index) in history" :key="index">
                <el-tag round closable @click.stop="onSearchByHistory(item)" @close="onRemoveHistory(item)"
                        class="BM-cursor-pointer">{{ item }}
                </el-tag>
              </template>
            </dd>
          </dl>
        </div>
        <div
            class="BM-w-60 BM-h-60 BM-bg-white BM-mx-[1em] BM-rounded-full BM-flex BM-items-center BM-justify-center BM-cursor-pointer BM-shrink-0 dark:BM-bg-darkwhite"
            @click="toggleDark()">
          <template v-if="isDark">
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
              <path
                  d="M611.370667 167.082667a445.013333 445.013333 0 0 1-38.4 161.834666 477.824 477.824 0 0 1-244.736 244.394667 445.141333 445.141333 0 0 1-161.109334 38.058667 85.077333 85.077333 0 0 0-65.066666 135.722666A462.08 462.08 0 1 0 747.093333 102.058667a85.077333 85.077333 0 0 0-135.722666 65.024z"
                  fill="#FFB531"></path>
              <path
                  d="M329.728 274.133333l35.157333-35.157333a21.333333 21.333333 0 1 0-30.165333-30.165333l-35.157333 35.157333-35.114667-35.157333a21.333333 21.333333 0 0 0-30.165333 30.165333l35.114666 35.157333-35.114666 35.157334a21.333333 21.333333 0 1 0 30.165333 30.165333l35.114667-35.157333 35.157333 35.157333a21.333333 21.333333 0 1 0 30.165333-30.165333z"
                  fill="#030835" class="dark:BM-fill-darktextwhite"></path>
            </svg>
          </template>
          <template v-else>
            <svg viewBox="0 0 1028 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
              <path d="M514.133333 509.866667m-256 0a256 256 0 1 0 512 0 256 256 0 1 0-512 0Z" fill="#FFC445"></path>
              <path
                  d="M514.133333 170.666667c-19.2 0-32-14.933333-32-32V29.866667c0-17.066667 12.8-29.866667 29.866667-29.866667h2.133333c17.066667 0 32 14.933333 32 32v108.8c0 14.933333-14.933333 29.866667-32 29.866667zM514.133333 1024c-19.2 0-32-14.933333-32-32v-108.8c0-17.066667 14.933333-32 32-32h2.133334c17.066667 0 32 14.933333 32 32v108.8c-2.133333 17.066667-17.066667 32-34.133334 32zM853.333333 509.866667c0-19.2 14.933333-32 32-32h108.8c17.066667 0 32 14.933333 32 32v2.133333c0 17.066667-14.933333 32-32 32h-108.8c-17.066667-2.133333-32-17.066667-32-34.133333zM0 509.866667c0-19.2 14.933333-32 32-32h108.8c17.066667 0 32 14.933333 32 32v2.133333c0 17.066667-14.933333 32-32 32H32c-17.066667-2.133333-32-17.066667-32-34.133333zM742.4 247.466667c-12.8-12.8-12.8-32-2.133333-44.8l76.8-76.8c12.8-12.8 32-12.8 44.8 0V128c12.8 12.8 12.8 32 0 44.8l-76.8 76.8c-10.666667 10.666667-32 10.666667-42.666667-2.133333zM138.666667 851.2c-12.8-12.8-12.8-34.133333-2.133334-44.8l76.8-76.8c12.8-12.8 32-12.8 44.8 0l2.133334 2.133333c12.8 12.8 12.8 32 0 44.8L183.466667 853.333333c-12.8 10.666667-32 10.666667-44.8-2.133333zM740.266667 727.466667c12.8-12.8 34.133333-12.8 44.8-2.133334l76.8 76.8c12.8 12.8 12.8 32 0 44.8l-2.133334 2.133334c-12.8 12.8-32 12.8-44.8 0l-76.8-76.8c-10.666667-12.8-10.666667-32 2.133334-44.8zM136.533333 123.733333c12.8-12.8 34.133333-12.8 44.8-2.133333l76.8 76.8c12.8 12.8 12.8 32 0 44.8l-2.133333 2.133333c-12.8 12.8-32 12.8-44.8 0L136.533333 168.533333c-10.666667-12.8-10.666667-32 0-44.8z"
                  fill="#FFC445"></path>
            </svg>
          </template>
        </div>
      </header>
      <main
          class="BM-bg-white BM-rounded-[20px_20px_0_0] BM-grid BM-gap-20 BM-grid-rows-auto BM-p-20 BM-auto-rows-[176px] BM-grid-cols-[repeat(auto-fill,minmax(160px,1fr))] BM-overflow-y-auto beautyScroll BM-overflow-x-hidden dark:BM-bg-darkwhite"
          style="height: calc(100vh - 160px)">
        <transition-group @enter="enter" @before-enter="beforeEnter">
          <a target="_blank" :href="item.link"
             class="item hover:BM-drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)] dark:hover:BM-drop-shadow-[0_10px_10px_rgba(15,23,42,0.8)]"
             v-for="(item, index) in list" :key="index" :data-index="index">
            <el-image :src="item.icon" fit="cover" class="BM-h-40 BM-rounded-10">
              <template #error>
                <img :src="logo" class="BM-w-40"/>
              </template>
              <template #placeholder>
                <img :src="img_loading" class="BM-h-40 BM-object-cover"/>
              </template>
            </el-image>

            <h1 class="BM-text-333 BM-py-[1em] BM-text-20 dark:BM-text-white">{{ item.text }}</h1>
            <p class="BM-text-12 BM-text-999 BM-px-[1em] BM-leading-[1.2em] dark:BM-text-darktextwhite"
               :style="{'height':item.desc ? 'auto' : '1em'}">{{ item.desc }}</p>
          </a>
        </transition-group>
      </main>
    </div>
  </div>
</template>

<script setup>
import logo from '@/assets/logo.svg'
import img_loading from '@/assets/img/img-loading.svg'
import connect from '@/assets/img/connect.svg'
import gsap from 'gsap'
import nav from '@/assets/json/childMenu'
import {useDark, useToggle} from '@vueuse/core'
import random from 'lodash.random'
import icon3ds from '@/assets/img'
import packageJson from '/package.json'
import {ElImage, ElTag} from 'element-plus'

const isDark = useDark({valueDark: 'BM-dark'})
const toggleDark = useToggle(isDark)
const aside_active = ref(0)
const slide = ref([])
const list = ref([])
const searchKey = ref('')
const showSide = ref(false)
const showHistory = ref(false)
const history = ref([])
const searchInput = ref()

onMounted(() => {
  const slide_item = []
  const clone_icons = JSON.parse(JSON.stringify(icon3ds))

  nav.forEach(item => {
    const rd = clone_icons.splice(random(0, clone_icons.length - 1), 1)
    slide_item.push({
      label: item.title,
      icon: rd[0]
    })
  })
  slide.value = slide_item
  list.value = nav[aside_active.value].nav

  history.value = JSON.parse(localStorage.getItem('BM-history')) || []

  document.addEventListener('click', () => (showHistory.value = false))
  document.addEventListener('visibilitychange',() =>  {
    searchInput.value?.blur()
    showHistory.value = false
  })
})

function onCheckType(idx) {
  showSide.value = false
  aside_active.value = idx
  list.value = []
  setTimeout(() => {
    list.value = nav[idx].nav
  }, 200)
}

function beforeEnter(el) {
  el.style.opacity = 0
  el.style.transform = 'translateY(10px)'
}

function enter(el, done) {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    delay: el.dataset.index * 0.02,
    ease: 'elastic.out(1, 0.3)',
    onComplete: done
  })
}

function onSearch() {
  if (history.value) {
    const setItem = new Set([searchKey.value.trim(),...history.value])
    history.value = [...setItem]
    localStorage.setItem('BM-history', JSON.stringify(history.value))
  }

  window.open(`https://www.baidu.com/s?wd=${searchKey.value}`, '_blank')
  nextTick(() => (searchKey.value = ''))
}

function onSearchByHistory(keyword) {
  window.open(`https://www.baidu.com/s?wd=${keyword}`, '_blank')
}

function onChearHistory() {
  localStorage.removeItem('BM-history')
  history.value = []
}

function onRemoveHistory(item) {
  const valIndex = history.value.findIndex(val => val === item)
  if (valIndex !== -1) {
    history.value.splice(valIndex, 1)
    localStorage.setItem('BM-history', JSON.stringify(history.value))
  }
}
</script>

<style lang="scss">
a {
  @apply BM-no-underline BM-text-inherit;
}

.item {
  @apply BM-h-full BM-bg-1f BM-rounded-20 BM-cursor-pointer BM-flex BM-items-center BM-justify-center BM-flex-col BM-overflow-hidden BM-no-underline dark:BM-bg-darkitem;
}

aside > ul {
  @apply BM-text-18 BM-list-none dark:BM-text-darktextwhite BM-hidden lg:BM-block;
  > li {
    @apply BM-h-60 BM-cursor-pointer hover:BM-text-main BM-pl-20 BM-relative;
    svg{
      @apply BM-fill-1f BM-absolute BM-left-0 BM-right-0 BM-top-2/4;
      transform: translate(2px,-50%);
    }
  }
}
</style>
