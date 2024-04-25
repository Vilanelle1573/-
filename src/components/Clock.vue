<template>
    <div class="container">
        <h2 class="stage">专注中</h2>

        <transition name="fade">
            <h2 class="countdown" v-if="countdownSeconds > 0">{{ countdown }}</h2>
            <h2 class="countdown" v-else>倒计时结束</h2>
        </transition>

        <div class="control">
            <button class="start" @click="startCountdown">开始倒计时</button>
            <button class="reset" @click="resetCountdown">结束倒计时</button>
        </div>
    </div>
</template>

<style>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 60px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
    {
    opacity: 0;
}

.control {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 50%;
    height: 32px;
}

.start {
    width: 100px;
    height: 30px;
    margin-right: 10px;
}

.reset {
    width: 100px;
    height: 30px;
    margin-left: 10px;
}
</style>

<script>
export default {
    data() {
        return {
            initialCountdownSeconds: 25 * 60,
            countdownSeconds: 0,
            countdownInterval: null
        };
    },

    computed: {
        countdown() {
            const minutes = Math.floor(this.countdownSeconds / 60);
            const seconds = this.countdownSeconds % 60;
            return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
    },

    methods: {
        startCountdown() {
            this.countdownSeconds = this.initialCountdownSeconds;
            clearInterval(this.countdownInterval); // 避免多次点击重复开始倒计时
            this.countdownInterval = setInterval(() => {
                if (this.countdownSeconds > 0) {
                    this.countdownSeconds--;
                } else {
                    clearInterval(this.countdownInterval);
                }
            }, 1000);
        },

        resetCountdown() {
            this.countdownSeconds = 0;
            clearInterval(this.countdownInterval);
        }
    }
};
</script>
