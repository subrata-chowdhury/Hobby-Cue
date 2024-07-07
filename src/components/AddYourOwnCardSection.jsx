import React from 'react';
import { Card } from './Card';

const AddYourOwnCardSection = () => {
	return (
		<div className='container-fluid py-5' style={{ backgroundColor: '#F7FDFF' }}>
			<div className="container my-5">
				<Card 
					iconSrc="Add (Landing Page).svg"
					name="Add your own"
					text="Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page"
					btn="Add new" />
			</div>
		</div>
	);
};

export default AddYourOwnCardSection;