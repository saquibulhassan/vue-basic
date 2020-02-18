<template>
    <div class="row">
        <div class="col-md-6">
            <h4>Dashboard</h4>

            <ul class="nav nav-pills">
                <li class="nav-item">
                    <router-link to="/dashboard/simple" class="nav-link" active-class="active">Simple</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/dashboard/basic" class="nav-link" active-class="active">Basic</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/dashboard/advanced" class="nav-link" active-class="active">Advanced</router-link>
                </li>
            </ul>

            <router-view></router-view>

        </div>
    </div>
</template>

<script>
    export default {}
</script>
