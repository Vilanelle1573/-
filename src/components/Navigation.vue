<template>
    <nav>
        <ul class="banner">
            <li><router-link to="/timer" class="nav-link" active-class="active-link">计时</router-link></li>
            <li><router-link to="/schedule" class="nav-link" active-class="active-link">日程</router-link></li>
            <li><router-link to="/mine" class="nav-link" active-class="active-link">我的</router-link></li>
            <li><router-link to="/about" class="nav-link" active-class="active-link">关于</router-link></li>
        </ul>
    </nav>
</template>

<style scoped>
.banner {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 45px;
    background-color: rgb(241, 171, 171);
    color: #fff;
    padding: 10px 0;
    text-align: center;
    z-index: 1000;
    display: flex;
    justify-content: space-between; /* 平均分布子元素 */
}

.nav-link {
    width: 20%;
    height: 70px;
    border:2px solid black;
    border-color: aqua;
    border-style:inset;
}

</style>
