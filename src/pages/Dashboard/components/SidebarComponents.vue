<template>
    <div class="sidebar">
        <div class="topo">
            <div class="avatar">
                <span><i class="fa fa-user"></i></span>
            </div>
            <div class="info">
                <p class="name">Iago Oliveira</p>
                <p class="status">Online</p>
            </div>

        </div>
        <div class="menu">
            <ul>
                <li><router-link :to="{name: 'home'}"><i class="fa fa-home"></i> Inicio</router-link></li>
                <li><router-link :to="{name: 'products'}"><i class="fa fa-store"></i> Produtos</router-link></li>
                <li><router-link :to="{name: 'clients'}"><i class="fa fa-store"></i> Clientes</router-link></li>
                <li><router-link :to="{name: 'home'}"><i class="fa fa-box"></i> Vendas</router-link></li>
                <li><router-link :to="{name: 'home'}"><i class="fa fa-chart-bar"></i> Relatórios</router-link></li>
                <li><router-link :to="{name: 'home'}"><i class="fa fa-home"></i> Inicio</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SidebarComponent',
    }
</script>

<style lang="scss" scoped>
    .sidebar {
        .topo {
            width: 100%;           
            display: flex;
            justify-content: center;
            padding: 25px 5px;
            align-items: center;
            margin-top: 60px;

            .avatar {
                display: flex;
                width: 50px;
                height: 50px;
                border-radius: 50px;
                background-color: #ccc;
                justify-content: center;
                align-items: center;
                font-size: 30px;
                color: #666666;
                margin-right: 10px;
            }

            .info {
                p {
                    margin: 0;
                    color: #fff;
                }
                .name {
                    
                }
                .status {
                    font-size: 10px;
                }
            }
        }
        .menu {
            margin-top: 15px;
            padding: 10px 20px;

            ul li {
                margin: 15px 0;
                font-size: 18px;
                list-style: none;
                a {
                    color: #fff;
                    text-decoration: none;
                }
            }
        }
    }
</style>