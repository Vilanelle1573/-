<template>
    <div class="banner">
        <div class="tabbox">
            <h3>计时</h3>
        </div>

        <div class="tabbox">
            <h3>日程</h3>
        </div>

        <div class="tabbox">
            <h3>我的</h3>
        </div>
    </div>
</template>

<style>
.banner {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: red;
    color: #fff;
    /*文本颜色 */
    padding: 10px 0;
    text-align: center;
    z-index: 1000;
    /* 可选：控制横幅在其他元素之上 */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

.tabbox {
    width: 33.33%;
    height: 70px;
    border-left: #fff;
    border-right: #fff;
}
</style>

<script>

</script>
