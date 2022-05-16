<template>
	<div class="lg:BM-grid lg:BM-grid-cols-[300px_1fr] BM--min-h-[100vh] BM-bg-1f BM-select-none dark:BM-bg-dark1f">
		<aside class="BM-pl-2em BM-bg-white BM-text-666 BM-relative dark:BM-bg-darkwhite lg:BM-rounded-[0_20px_0_0]">
			<!--logo-->
			<div class="BM-h-60 BM-flex BM-items-center BM-rounded-[0_20px_0_0] BM-justify-center lg:BM-justify-start BM-relative">
				<img :src="logo" class="BM-w-30 BM-mr-10" />
				<span class="BM-text-26 BM-text-333">
					<b class="BM-text-main BM-font-bold">BM</b>
					<span class="BM-font-thin dark:BM-text-white">快捷导航</span>
					<sub class="BM-text-main BM-text-12 BM-ml-[0.5em]">v{{ packageJson.version }}</sub>
				</span>
				<div class="BM-absolute BM-left-20 BM-top-2/4 BM-translate-y-[-50%] lg:BM-hidden" @click="showSide = true">
					<svg t="1652664295306" class="BM-fill-999 BM-cursor-pointer dark:BM-fill-darktextwhite" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5076" width="32" height="32">
						<path d="M120.259456 512.001023m-117.92376 0a115.238 115.238 0 1 0 235.847519 0 115.238 115.238 0 1 0-235.847519 0Z" p-id="5077"></path>
						<path d="M511.999488 512.001023m-117.921713 0a115.236 115.236 0 1 0 235.843426 0 115.236 115.236 0 1 0-235.843426 0Z" p-id="5078"></path>
						<path d="M903.739521 512.001023m-117.92376 0a115.238 115.238 0 1 0 235.847519 0 115.238 115.238 0 1 0-235.847519 0Z" p-id="5079"></path>
					</svg>
				</div>
			</div>

			<!--aside(lg)-->
			<ul class="BM-text-18 BM-list-none dark:BM-text-darktextwhite BM-hidden lg:BM-block">
				<template v-for="(item, index) in slide" :key="item">
					<li :class="['BM-h-60 BM-cursor-pointer hover:BM-bg-1f hover:BM-text-main hover:dark:BM-bg-dark1f BM-flex BM-items-center BM-pl-20 BM-rounded-[30px_0_0_30px] BM-mb-[0.5em]', { 'BM-text-main BM-bg-1f dark:BM-bg-dark1f': aside_active === index }]" @click="onCheckType(index)">
						<img :src="item.icon" class="BM-w-32 BM-h-32 BM-mr-[1em] BM-object-cover" />
						{{ item.label }}
					</li>
				</template>
			</ul>

			<!--aside(md)-->
			<div class="BM-fixed BM-left-0 BM-right-0 BM-top-0 BM-bottom-0 BM-z-10 BM-bg-[rgba(0,0,0,.3)] BM-backdrop-blur-sm dark:BM-bg-[rgba(255,255,255,0.3)] lg:!BM-hidden" v-show="showSide">
				<ul class="BM-text-18 BM-h-full BM-list-none dark:BM-text-darktextwhite dark:BM-bg-darkwhite BM-w-[300px] BM-bg-white BM-pl-20 BM-pt-50">
					<template v-for="(item, index) in slide" :key="item">
						<li :class="['BM-h-60 BM-cursor-pointer hover:BM-bg-1f hover:BM-text-main hover:dark:BM-bg-dark1f BM-flex BM-items-center BM-pl-20 BM-rounded-[30px_0_0_30px] BM-mb-[0.5em]', { 'BM-text-main BM-bg-1f dark:BM-bg-dark1f': aside_active === index }]" @click="onCheckType(index)">
							<img :src="item.icon" class="BM-w-32 BM-h-32 BM-mr-[1em] BM-object-cover" />
							{{ item.label }}
						</li>
					</template>
				</ul>
				<a href="javascript:void(0)" class="BM-absolute BM-right-20 BM-top-20" @click="showSide = false">
					<svg t="1652664975828" class="BM-fill-white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5889" width="26" height="26"><path d="M925.468404 822.294069 622.19831 512.00614l303.311027-310.331931c34.682917-27.842115 38.299281-75.80243 8.121981-107.216907-30.135344-31.369452-82.733283-34.259268-117.408013-6.463202L512.000512 399.25724 207.776695 87.993077c-34.675754-27.796066-87.272669-24.90625-117.408013 6.463202-30.178323 31.414477-26.560936 79.375815 8.121981 107.216907l303.311027 310.331931L98.531596 822.294069c-34.724873 27.820626-38.341237 75.846432-8.117888 107.195418 30.135344 31.43699 82.72919 34.326806 117.408013 6.485715l304.178791-311.219137 304.177767 311.219137c34.678824 27.841092 87.271646 24.951275 117.408013-6.485715C963.808618 898.140501 960.146205 850.113671 925.468404 822.294069z" p-id="5890"></path></svg>
				</a>
			</div>

			<a class="BM-absolute BM-bottom-20 BM-left-20 BM-right-20 BM-h-60 BM-bg-1f BM-rounded-full BM-items-center BM-px-30 BM-no-underline BM-text-666 dark:BM-bg-dark1f dark:BM-text-darktextwhite BM-hidden lg:BM-flex" href="mailto:303278055@qq.com">
				<svg t="1652424922581" class="icon" viewBox="0 0 1040 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17150" width="40" height="40">
					<path d="M472.55082 10.911475C459.960656-0.839344 440.655738 0 428.065574 10.911475 352.52459 73.862295 7.554098 362.596721 7.554098 362.596721v506.963935c0 11.75082 10.072131 21.822951 21.822951 21.822951h842.70164c11.75082 0 21.822951-10.072131 21.82295-21.822951V362.596721C882.15082 352.52459 468.354098 6.714754 472.55082 10.911475z" fill="#2767F4" p-id="17151"></path>
					<path d="M719.318033 108.27541c29.377049 0 52.878689 23.501639 52.878688 52.878688v277.822951L440.655738 637.062295 129.259016 441.495082V161.154098c0-29.377049 23.501639-52.878689 52.878689-52.878688h537.180328z" fill="#DFECFD" p-id="17152"></path>
					<path d="M657.206557 249.285246H228.301639c-6.714754 0-12.590164-5.87541-12.590164-12.590164s5.87541-12.590164 12.590164-12.590164h428.904918c6.714754 0 12.590164 5.87541 12.590164 12.590164s-5.036066 12.590164-12.590164 12.590164zM471.711475 363.436066h-243.409836c-6.714754 0-12.590164-5.87541-12.590164-12.590164s5.87541-12.590164 12.590164-12.590164h243.409836c6.714754 0 12.590164 5.87541 12.590164 12.590164s-5.87541 12.590164-12.590164 12.590164z" fill="#4988FD" p-id="17153"></path>
					<path d="M893.062295 362.596721V872.918033c0 9.232787-5.87541 16.786885-13.429508 19.304918-2.518033 0.839344-5.036066 1.678689-7.554098 1.678688H27.698361c-11.75082 0-20.983607-9.232787-20.983607-20.983606V363.436066l370.15082 231.659016c36.931148 23.501639 83.934426 23.501639 121.704918 1.678688l394.491803-234.177049z" fill="#4988FD" p-id="17154"></path>
					<path d="M876.27541 662.242623v228.301639c-2.518033 0.839344-5.036066 1.678689-7.554099 1.678689H612.721311c-5.036066-16.786885-7.554098-34.413115-7.554098-52.878689 0-106.596721 86.452459-193.04918 193.04918-193.04918 28.537705 0 54.557377 5.036066 78.059017 15.947541z" fill="#2767F4" p-id="17155"></path>
					<path d="M679.868852 936.708197c-20.144262-30.216393-31.895082-67.147541-31.895082-105.757377 0-106.596721 86.452459-193.04918 193.049181-193.049181s193.04918 86.452459 193.04918 193.049181-86.452459 193.04918-193.04918 193.04918c-67.147541 0-126.740984-35.252459-161.154099-87.291803" fill="#21D3AC" p-id="17156"></path>
					<path d="M937.547541 817.521311l-57.07541-57.075409c-6.714754-6.714754-18.465574-6.714754-26.019672 0-6.714754 6.714754-6.714754 18.465574 0 26.019672l26.019672 26.019672H757.088525c-10.072131 0-18.465574 8.393443-18.465574 18.465574 0 10.072131 8.393443 18.465574 18.465574 18.465573h123.383606l-26.019672 26.019673c-6.714754 6.714754-6.714754 18.465574 0 26.019672 3.357377 3.357377 8.393443 5.036066 12.590164 5.036065 5.036066 0 9.232787-1.678689 12.590164-5.036065l57.07541-57.07541c3.357377-3.357377 5.036066-8.393443 5.036065-12.590164s-0.839344-10.911475-4.196721-14.268853z" fill="#FFFFFF" p-id="17157"></path>
				</svg>
				<div class="BM-ml-[0.5em]">
					<span class="BM-text-16">联系作者</span>
					<p class="BM-text-14 BM-mt-5">303278055@qq.com</p>
				</div>
			</a>
		</aside>
		<div class="BM-px-30 BM-pt-30 BM-flex BM-flex-col">
			<header class="BM-flex BM-justify-center BM-mb-30">
				<div class="BM-h-60 BM-bg-white BM-rounded-full BM-flex BM-items-center BM-justify-center BM-flex-1 BM-p-[0.5em] dark:BM-bg-darkwhite">
					<svg t="1652344224036" class="BM-px-[1em]" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5693" width="25" height="25">
						<path d="M474.453333 884.053333c-225.28 0-409.6-184.32-409.6-409.6s184.32-409.6 409.6-409.6 409.6 184.32 409.6 409.6-184.32 409.6-409.6 409.6z m0-68.266666c187.733333 0 341.333333-153.6 341.333334-341.333334s-153.6-341.333333-341.333334-341.333333-341.333333 153.6-341.333333 341.333333 153.6 341.333333 341.333333 341.333334z m252.586667 54.613333c-13.653333-13.653333-10.24-37.546667 3.413333-47.786667s37.546667-10.24 47.786667 3.413334l64.853333 78.506666c13.653333 13.653333 10.24 37.546667-3.413333 47.786667s-37.546667 10.24-47.786667-3.413333l-64.853333-78.506667z" p-id="5694" fill="#666666" class="dark:BM-fill-darktextwhite"></path>
					</svg>
					<input type="text" placeholder="百度一下" class="BM-bg-transparent BM-flex-1 BM-h-full dark:BM-caret-main dark:BM-text-darktextwhite dark:placeholder:BM-text-darktextwhite" v-model="searchKey" @keyup.enter="onSearch" />
					<button class="BM-h-full BM-rounded-full BM-w-[100px] BM-bg-main BM-text-white BM-cursor-pointer hover:BM-bg-mhover" @click="onSearch">搜索</button>
				</div>
				<div class="BM-w-60 BM-h-60 BM-bg-white BM-mx-[1em] BM-rounded-full BM-flex BM-items-center BM-justify-center BM-cursor-pointer BM-shrink-0 dark:BM-bg-darkwhite" @click="toggleDark()">
					<template v-if="isDark">
						<svg t="1652423018246" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4811" width="40" height="40">
							<path d="M611.370667 167.082667a445.013333 445.013333 0 0 1-38.4 161.834666 477.824 477.824 0 0 1-244.736 244.394667 445.141333 445.141333 0 0 1-161.109334 38.058667 85.077333 85.077333 0 0 0-65.066666 135.722666A462.08 462.08 0 1 0 747.093333 102.058667a85.077333 85.077333 0 0 0-135.722666 65.024z" fill="#FFB531" p-id="4812"></path>
							<path d="M329.728 274.133333l35.157333-35.157333a21.333333 21.333333 0 1 0-30.165333-30.165333l-35.157333 35.157333-35.114667-35.157333a21.333333 21.333333 0 0 0-30.165333 30.165333l35.114666 35.157333-35.114666 35.157334a21.333333 21.333333 0 1 0 30.165333 30.165333l35.114667-35.157333 35.157333 35.157333a21.333333 21.333333 0 1 0 30.165333-30.165333z" fill="#030835" p-id="4813" class="dark:BM-fill-darktextwhite"></path>
						</svg>
					</template>
					<template v-else>
						<svg t="1652423090302" class="icon" viewBox="0 0 1028 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6306" width="40" height="40">
							<path d="M514.133333 509.866667m-256 0a256 256 0 1 0 512 0 256 256 0 1 0-512 0Z" fill="#FFC445" p-id="6307"></path>
							<path
								d="M514.133333 170.666667c-19.2 0-32-14.933333-32-32V29.866667c0-17.066667 12.8-29.866667 29.866667-29.866667h2.133333c17.066667 0 32 14.933333 32 32v108.8c0 14.933333-14.933333 29.866667-32 29.866667zM514.133333 1024c-19.2 0-32-14.933333-32-32v-108.8c0-17.066667 14.933333-32 32-32h2.133334c17.066667 0 32 14.933333 32 32v108.8c-2.133333 17.066667-17.066667 32-34.133334 32zM853.333333 509.866667c0-19.2 14.933333-32 32-32h108.8c17.066667 0 32 14.933333 32 32v2.133333c0 17.066667-14.933333 32-32 32h-108.8c-17.066667-2.133333-32-17.066667-32-34.133333zM0 509.866667c0-19.2 14.933333-32 32-32h108.8c17.066667 0 32 14.933333 32 32v2.133333c0 17.066667-14.933333 32-32 32H32c-17.066667-2.133333-32-17.066667-32-34.133333zM742.4 247.466667c-12.8-12.8-12.8-32-2.133333-44.8l76.8-76.8c12.8-12.8 32-12.8 44.8 0V128c12.8 12.8 12.8 32 0 44.8l-76.8 76.8c-10.666667 10.666667-32 10.666667-42.666667-2.133333zM138.666667 851.2c-12.8-12.8-12.8-34.133333-2.133334-44.8l76.8-76.8c12.8-12.8 32-12.8 44.8 0l2.133334 2.133333c12.8 12.8 12.8 32 0 44.8L183.466667 853.333333c-12.8 10.666667-32 10.666667-44.8-2.133333zM740.266667 727.466667c12.8-12.8 34.133333-12.8 44.8-2.133334l76.8 76.8c12.8 12.8 12.8 32 0 44.8l-2.133334 2.133334c-12.8 12.8-32 12.8-44.8 0l-76.8-76.8c-10.666667-12.8-10.666667-32 2.133334-44.8zM136.533333 123.733333c12.8-12.8 34.133333-12.8 44.8-2.133333l76.8 76.8c12.8 12.8 12.8 32 0 44.8l-2.133333 2.133333c-12.8 12.8-32 12.8-44.8 0L136.533333 168.533333c-10.666667-12.8-10.666667-32 0-44.8z"
								fill="#FFC445"
								p-id="6308"
							></path>
						</svg>
					</template>
				</div>
			</header>
			<main class="BM-bg-white BM-rounded-[20px_20px_0_0] BM-grid BM-gap-20 BM-grid-rows-auto BM-p-20 BM-auto-rows-[176px] BM-overflow-y-auto beautyScroll BM-overflow-x-hidden dark:BM-bg-darkwhite 2xl:BM-grid-cols-8 xl:BM-grid-cols-7 lg:BM-grid-cols-5 md:BM-grid-cols-4 sm:BM-grid-cols-2" style="height: calc(100vh - 160px)">
				<transition-group @enter="enter" @before-enter="beforeEnter">
					<a target="_blank" :href="item.link" class="poptip BM-h-full BM-bg-1f BM-rounded-20 BM-cursor-pointer BM-flex BM-items-center BM-justify-center BM-flex-col BM-overflow-hidden hover:BM-drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)] BM-no-underline dark:BM-bg-darkitem dark:hover:BM-drop-shadow-[0_10px_10px_rgba(15,23,42,0.8)]" v-for="(item, index) in list" :key="index" :data-index="index">
						<img :src="item.icon" v-if="item.icon" class="BM-h-40 BM-rounded-10 BM-object-cover" />
						<template v-else>
							<svg t="1652408473354" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3814" width="40" height="40">
								<path d="M123.648 178.346667C361.642667-98.602667 802.986667-43.946667 967.936 279.68h-396.501333c-71.424 0-117.546667-1.621333-167.509334 24.661333-58.709333 30.933333-102.997333 88.234667-118.485333 155.52L123.648 178.389333z" fill="#EA4335" p-id="3815"></path>
								<path d="M341.674667 512c0 93.866667 76.330667 170.24 170.154666 170.24 93.866667 0 170.154667-76.373333 170.154667-170.24s-76.330667-170.24-170.154667-170.24c-93.866667 0-170.154667 76.373333-170.154666 170.24z" fill="#4285F4" p-id="3816"></path>
								<path d="M577.877333 734.848c-95.530667 28.373333-207.274667-3.114667-268.501333-108.8-46.762667-80.64-170.24-295.765333-226.346667-393.557333-196.565333 301.226667-27.136 711.808 329.685334 781.866666l165.12-279.509333z" fill="#34A853" p-id="3817"></path>
								<path d="M669.866667 341.76a233.130667 233.130667 0 0 1 43.008 286.634667c-40.576 69.973333-170.154667 288.682667-232.96 394.581333 367.658667 22.656 635.733333-337.664 514.645333-681.258667H669.866667z" fill="#FBBC05" p-id="3818"></path>
							</svg>
						</template>

						<h1 class="BM-text-333 BM-pt-[1em] BM-text-20 dark:BM-text-darktextwhite">{{ item.text }}</h1>
					</a>
				</transition-group>
			</main>
		</div>
	</div>
</template>

<script setup>
import logo from '@/assets/logo.svg'
import gsap from 'gsap'
import nav from '@/assets/json/childMenu'
import { useDark, useToggle } from '@vueuse/core'
import random from 'lodash.random'
import icon3ds from '@/assets/img'
import packageJson from '/package.json'
const isDark = useDark({ valueDark: 'BM-dark' })
const toggleDark = useToggle(isDark)
const aside_active = ref(0)
const slide = ref([])
const list = ref([])
const searchKey = ref('')
const showSide = ref(false)

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
	list.value = nav[0].nav
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
	window.open(`https://www.baidu.com/s?wd=${searchKey.value}`, '_blank')
}
</script>
