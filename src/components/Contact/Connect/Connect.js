import React from 'react';

const connect = (props) => {
	return (
		<div className = "links">
			<ul className = "others">
				<a href = "https://www.facebook.com/gagandeep.s.ahuja" target = "_blank"><li className = "fb"></li></a>
				<a href = "https://www.linkedin.com/in/gagandeep-singh-ahuja-2500b1125/" target = "_blank"><li className = "linkedin"></li></a>
				<a href = "https://medium.com/@gagandeepsinghahuja" target = "_blank"><li className = "medium"></li></a>
				<a href = "https://github.com/gagaandeepahuja09" target = "_blank"><li className = "github"></li></a>
			</ul>
		</div>
	);
}

export default connect;