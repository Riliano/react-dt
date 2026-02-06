"use client";

import { useState, useEffect } from 'react';

//import { FormData } from '../types/form'; /* For Vercel */
import styles from './page.module.css';

// For Vercel
interface FormData {
  name: string;
  price: number;
  type: string;
  image: File | null; // optional image file
  selected: boolean;
}

function Wardrobe() {
	const [submissions, setSubmissions] = useState<FormData[]>([]);

	const toggleSelect = (index: number) => {
		setSubmissions(prev =>
			prev.map((item, i) =>
				i === index ? { ...item, selected: !item.selected } : item
			)
		);
	};

	const removeSelected = () => {
		const newSub: FormData[] = submissions.filter(item => item.selected === false)
		console.log("Updated submissions:", newSub); // Debugging line
		localStorage.setItem('wardrobe', JSON.stringify(newSub));
		setSubmissions(newSub);
	}

	const logSelected = () => {
	}

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
					    <th>Selected</th>
						<th>Item Name</th>
						<th>Price</th>
						<th>Type</th>
						<th>Image</th>
					  </tr>
					</thead>
					<tbody>
					  {submissions.map((item, index) => (
						<tr key={index}>
							<td>
							<input
							  type="checkbox"
							  checked={!!item.selected}
							  onChange={() => toggleSelect(index)}
							/></td>
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
			<div className={styles.actions}>
			  <button onClick={removeSelected}>Remove from Wardrobe</button>
			  <button onClick={logSelected}>Log Outfit</button>
			</div>
		</>
}

export default Wardrobe;
