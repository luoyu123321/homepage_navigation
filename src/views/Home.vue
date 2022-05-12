<template>
    <div class="home">
        <!--搜索栏-->
        <nav flex="main:center">
            <input type="text" class="search" placeholder="百度一下，你就知道" v-model="keywords">
            <button type="button" @click="search">百度一下</button>
        </nav>

        <!--主体-->
        <main flex="main:justify">
            <section>
                <div v-for="(item,index) in mainNav" :key="index">
                    <h1 :id="'menu'+index">{{item.title}}</h1>
                    <dl v-for="(cItem,cIndex) in item['nav']" :key="'c'+cIndex" flex="cross:top">
                        <dt>{{cItem['navType']}}</dt>
                        <dd>
                            <template v-for="(aItem,aIndex) in cItem['nav']">
                                <a :key="'a'+aIndex" :href="aItem['link']" target="_blank">
                                    <img v-if="aItem['icon']" :src="aItem['icon']"/>
                                    {{aItem['text']}}
                                </a>
                            </template>
                        </dd>
                    </dl>
                </div>
            </section>
            <aside>
                <h1>常用站点</h1>
                <a v-for="(item,index) in asideNav" :key="'y'+index" :href="item['link']" target="_blank">
                    <img v-if="item['icon']" :src="item['icon']"/>
                    {{item['text']}}
                </a>
            </aside>
        </main>

        <!--左侧快速定位导航-->
        <div class="leftMenu">
            <a v-for="(item,index) in mainNav"
               :key="'menu'+index"
               href="javascript:void(0)"
               @click="scrollTo('menu'+index)">
                {{item['title']}}
            </a>
        </div>

        <!--置顶-->
        <div :class="['top',{'hide':!gotop}]" flex="main:center cross:center" @click="toTop">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="#646464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="feather feather-arrow-up-circle">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="16 12 12 8 8 12"></polyline>
                <line x1="12" y1="16" x2="12" y2="8"></line>
            </svg>
        </div>
    </div>
</template>

<style lang="scss">
    @import "./style/Home";
</style>

<script>
    import {vueMenu} from '@/json/childMenu/vueMenu'
    import {mapMenu} from '../json/childMenu/mapMenu'
    import {toolMenu} from '../json/childMenu/toolMenu'
    import {webMenu} from '../json/childMenu/webMenu'
    import {wchart} from '../json/childMenu/wchart'
    import {design} from '../json/childMenu/design'
    import {asideNav} from '../json/asideNav'

    export default {
        name: 'home',
        data() {
            return {
                mainNav: [],//主页面书签
                asideNav: [],//常用书签
                gotop: false,
                keywords: "",//搜索关键字
            }
        },
        methods: {
            scrollTo(id){
                document.getElementById(id).scrollIntoView({behavior:'smooth'});
            },

            search() {
                window.open(this.keywords ? `https://www.baidu.com/s?word=${this.keywords}&ie=utf-8` : "https://www.baidu.com", "_blank");
            },

            handleScroll() {
                let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
                scrolltop > 30 ? (this.gotop = true) : (this.gotop = false);
            },

            toTop() {
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              })
            }
        },
        mounted() {
            // 此处true需要加上，不加滚动事件可能绑定不成功
            window.addEventListener("scroll", this.handleScroll, true);

            //监听页面点击回车事件
            document.addEventListener('keyup', event => {
                event.keyCode === 13 && this.search();
            })
        },
        created() {
            this.mainNav = [].concat(vueMenu, webMenu, mapMenu, wchart, design, toolMenu);
            this.asideNav = asideNav;
        }
    }
</script>
