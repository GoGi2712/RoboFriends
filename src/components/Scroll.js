import React from 'react';

const Scroll = (props) => {
	return (
			<div style={{ overflow: 'Scroll', border:'10px solid black', height: '600px' }}>
				{props.children}
			</div>
		);
};

export default Scroll;