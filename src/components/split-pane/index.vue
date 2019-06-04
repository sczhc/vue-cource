<template>
<div class="split-pant-wrapper" ref="outer">
    <div class="pane pane-left" :style="{width: leftOffsetPercent,paddingRight:`${this.triggerWidth / 2}px`}">
        <slot name="left"></slot>
    </div>
    <div class="pane-trigger-con" @mousedown="handleMousedown" :style="{left: triggerLeft,width: `${this.triggerWidth}px`}"></div>
    <div class="pane pane-right" :style="{left: leftOffsetPercent,paddingLeft: `${this.triggerWidth / 2}px`}">
        <slot name="right"></slot>
    </div>
</div>
</template>

<script>
export default {
    name: "splitPane",
    props: {
        value: {
            type: Number,
            default: 0.5
        },
        triggerWidth: {
            type: Number,
            default: 8
        },
        min: {
            type: Number,
            default: 0.1
        },
        max: {
            type: Number,
            default: 0.9
        }
    },
    data() {
        return {
            // leftOffset: 0.3,
            canMove: false,
            initOffset: 0
        };
    },
    computed: {
        leftOffsetPercent() {
            return `${this.value * 100}%`;
        },
        triggerLeft() {
            return `calc(${this.value * 100}% - ${this.triggerWidth / 2}px)`;
        }
    },
    methods: {
        handleMousedown(event) {
            document.addEventListener("mousemove", this.handleMousemove);
            document.addEventListener("mouseup", this.handleMouseup);
            this.initOffset =
                event.pageX - event.srcElement.getBoundingClientRect().left;
            this.canMove = true;
        },
        handleMouseup() {
            this.canMove = false;
        },
        handleMousemove(event) {
            if (!this.canMove) return;
            const outerRect = this.$refs.outer.getBoundingClientRect();
            let offsetPercent =
                (event.pageX -
                    this.initOffset +
                    this.triggerWidth / 2 -
                    outerRect.left) /
                outerRect.width;
            if (offsetPercent < this.min) offsetPercent = this.min;
            if (offsetPercent > this.max) offsetPercent = this.max;
            this.$emit("update:value", offsetPercent);
        }
    }
};
</script>

<style lang="less">
.split-pant-wrapper {
    height: 100%;
    width: 100%;
    position: relative;

    .pane {
        position: absolute;
        height: 100%;
        top: 0;

        &-left {
            background-color: palevioletred;
        }

        &-right {
            right: 0;
            bottom: 0;
            background: paleturquoise;
        }

        &-trigger-con {
            height: 100%;
            background-color: red;
            position: absolute;
            top: 0;
            z-index: 10;
            user-select: none;
            cursor: col-resize;
        }
    }
}
</style>
