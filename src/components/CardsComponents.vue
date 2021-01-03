<template>
    <div>
        <div class="my-card">
            <div class="top content">
                <h3>{{ type }}</h3>
                <p class="percentage"><i class="fa fa-arrow-up"></i>{{ percentage }} %</p>
            </div>
            <div class="footer content">
                <i :class="['fa icon', icon ]"></i>
                <p class="qtd">{{ qtd }}</p>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: 'CardsComponents',

        props: {
            type: String,
            percentage: String,
            icon: String,
            qtd: Number
        },


    }
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_main';

    .my-card {
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: $purple;
        padding: 15px;
        border-radius: 7px;
        color: #fff;

        .content {
            display: flex;
            justify-content: space-between;
        }

        .top {

            .percentage {
                color: rgb(76, 211, 76);
                font-weight: 700px;
            }
            
        }

        .footer {
            

            .icon {
                font-size: 40px;
            }
            .qtd {
                font-size: 30px;
                margin: 0;
            }
        }
    }
</style>