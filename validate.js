
		function validateForm() {
			var un = document.loginform.usr.value;
			var pw = document.loginform.pword.value;
			var username = "admin";
			var password = "admin";
			if ((un === username) && (pw === password)) {
                alert("FLAG_CMRCET_3{ W3AK_P4SSW0RDS_AR3_D4NG3R }");
				return true;
			}
			else {
				alert ("Login was unsuccessful, please check your username and password");
				return false;
			}
		}

