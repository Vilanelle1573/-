<template>
    <div class="scheduleView">
        <h1 class="text-center mb-4">日程</h1>

        <!-- Add Event Form -->
        <form class="addView" @submit.prevent="addEvent">
            <div class="form-group">
                <label for="eventName">日程名称</label>
                <input type="text" class="form-control" id="eventName" v-model="newEvent.name" required>
            </div>
            <div class="form-group">
                <label for="eventDate">日程时间</label>
                <input type="date" class="form-control" id="eventDate" v-model="newEvent.date" required>
            </div>
            <button type="submit" class="btn btn-primary">添加日程</button>
        </form>

        <!-- Display Events -->
        <div class="eventView">
            <h2>事件</h2>
            <ul class="list-group">
                <li class="list-group-item" v-for="(event, index) in events" :key="index">
                    <strong>{{ event.name }}</strong> - {{ event.date }}
                    <button class="btn btn-danger btn-sm float-right" @click="removeEvent(index)">删除</button>
                </li>
                <li class="list-group-item" v-if="events.length === 0">暂无事件</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.scheduleView {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 60px;
}

.addView {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.eventView {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>

<script>
export default {
    data() {
        return {
            newEvent: {
                name: '',
                date: ''
            },
            events: []
        };
    },
    methods: {
        addEvent() {
            this.events.push({
                name: this.newEvent.name,
                date: this.newEvent.date
            });
            this.newEvent.name = '';
            this.newEvent.date = '';
        },
        removeEvent(index) {
            this.events.splice(index, 1);
        }
    }
}
</script>