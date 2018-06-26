export default function (Vue) {

	Vue.auth = {
		//Settoken
		setToken (token,expire,customer_id,customer_name)  {
			
				localStorage.setItem("token",token);
				localStorage.setItem("expire",expire);
				localStorage.setItem("customer_id",customer_id);
				localStorage.setItem("customer_name",customer_name);
				
		},
		//Get token
		getToken ()  {
				var token = localStorage.getItem("token");
				var expire = localStorage.getItem("expire");

				if(! token || ! expire)
					return null

				if(Date.now() > parseInt(expire)) {
					this.destroyToken()
					return null
				} else 
				return token
		},
		destroyToken ()  {
			localStorage.removeItem("token");
			localStorage.removeItem("expire");
			localStorage.removeItem("customer_id");
			localStorage.removeItem("customer_name");
		},
		//destory token

		isAuthenticated () {
			if(this.getToken()) {
				return true;
			}
			else{
				return false;
			}
		}
		
	}

	Object.defineProperties(Vue.prototype,{
		$auth: {
			get: () => {
				return Vue.auth;
			}
		}
	})
}