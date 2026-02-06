"use client";

import { useState, useEffect } from 'react';

import { FormData } from '../types/form';
import styles from './page.module.css';

function Wardrobe() {
	const [submissions, setSubmissions] = useState<FormData[]>([]);

	useEffect(() => {
		// Read stored submissions from localStorage
		const stored: FormData[] = JSON.parse(localStorage.getItem('wardrobe') || '[]');
		setSubmissions(stored);
	}, []);

	if (submissions.length === 0) {
		return <p>Your wardrobe is empty!</p>;
	}

	return <>
			<div className={styles.tableContainer}>
				<h1> Your wardrobe: </h1>
				<table className={styles.submissionsTable}>
					<thead>
					  <tr>
						<th>Item Name</th>
						<th>Price</th>
						<th>Type</th>
						<th>Image</th>
					  </tr>
					</thead>
					<tbody>
					  {submissions.map((item, index) => (
						<tr key={index}>
						  <td>{item.name}</td>
						  <td>${item.price}</td>
						  <td>{item.type}</td>
						  <td>
							{item.image && (
							  <img
								src={URL.createObjectURL(item.image)}
								alt={item.name}
								width={50}
								height={50}
							  />
							)}
						  </td>
						</tr>
					  ))}
					</tbody>
				  </table>
			</div>
		</>
}

export default Wardrobe;
