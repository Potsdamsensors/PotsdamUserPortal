import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './components/Login.vue'
import Dashboard from './components/Dashboard.vue'
import Edituser from './components/Edituser.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	
	routes :[
		{
			path:"/login",
			component:Login,
			meta: {
				forvisitors: true
			}
		},
		{
			path:"/dashboard",
			component:Dashboard,
			meta: {
				forAuth: true
			}
		},
		{
			path:"/edituser/:customerid/edit",
			component:Edituser,
			meta: {
				forAuth: true
			}
		},
		{
			path:"/logout",
			meta: {
				forAuth: true
			},
			beforeEnter: (to, from, next) => {
				localStorage.clear();
				router.push("/login");
				next();
			}
		},
		{
			path:"/",
			component:Login
		}
	]
})

export default router