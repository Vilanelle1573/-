<template>
    <nav>
        <ul class="banner">
            <li><router-link to="/timer" class="nav-link">计时</router-link></li>
            <li><router-link to="/schedule" class="nav-link">日程</router-link></li>
            <li><router-link to="/mine" class="nav-link">我的</router-link></li>
            <li><router-link to="/about" class="nav-link">关于</router-link></li>
        </ul>
    </nav>
</template>

<style scoped>
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

.nav-link {
    width: 25%;
    height: 70px;
    border-left: #fff;
    border-right: #fff;
}
</style>

<script>

</script>
