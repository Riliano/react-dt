"use client";

import { useState, useEffect } from 'react';

//import {  OutfitData } from '../types/form'; /* For Vercel */
import styles from './page.module.css';

// For Vercel
interface OutfitData {
  date: string;
  composition: string;
  cost: number;
}


function Wardrobe() {
	const [submissions, setSubmissions] = useState<OutfitData[]>([]);

	useEffect(() => {
		// Read stored submissions from localStorage
		const stored: OutfitData[] = JSON.parse(localStorage.getItem('loggedOutfits') || '[]').reverse();
		setSubmissions(stored);
	}, []);

	if (submissions.length === 0) {
		return <p>No outfits logged!</p>;
	}

	return <>
			<div className={styles.tableContainer}>
				<h1> Logged Outfits: </h1>
				<table className={styles.submissionsTable}>
					<thead>
					  <tr>
						<th>Date</th>
						<th>Outfit</th>
						<th>Price</th>
					  </tr>
					</thead>
					<tbody>
					  {submissions.map((item, index) => (
						<tr key={index}>
						  <td>{item.date}</td>
						  <td>{item.composition}</td>
						  <td>${item.cost}</td>
						</tr>
					  ))}
					</tbody>
				  </table>
			</div>
			<div className={styles.actions}>
			</div>
		</>
}

export default Wardrobe;
