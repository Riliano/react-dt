"use client";

import { useState } from 'react';
// import { FormData } from '@types/form'; For Vervel 

import styles from './page.module.css'

interface FormData {
  name: string;
  price: number;
  type: string;
  image: File | null; // Image can either be a file or null if no image is selected
}

function Add() {
	const [name, setName] = useState<string>('');
	const [price, setPrice] = useState<number>(0);
	const [type, setType] = useState<string>(''); // Store the selected type
	const [image, setImage] = useState<File | null>(null); // For the image input

	async function onSubmit(event: any /*Rect.FormEvent<HTMLFormEvent>*/) {
		event.preventDefault();

		 const newSubmission: FormData = {name, price, type, image};

		// Get current submissions from localStorage, or initialize as an empty array
		const existingSubmissions: FormData[] = JSON.parse(localStorage.getItem('wardrobe') || '[]');

		// Add the new submission to the array
		existingSubmissions.push(newSubmission);

		// Save updated submissions array to localStorage
		localStorage.setItem('wardrobe', JSON.stringify(existingSubmissions));

		// Optionally, reset the form
		setName('');
		setPrice(0);
		setType('');
		setImage(null);

		alert("Item added")
	}

	return <>
			<div className={styles.form} >
				<h1> Add new item to the wardrobe </h1>
				<form className="addItem" onSubmit={onSubmit}>
				<div>
					<label htmlFor="itemName">Item Name:</label>
					<input type="text" id="itemName" name="itemName" required 
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div>
					<p>Item Type:</p>
					<label>
						<input type="radio" name="itemType" value="accessories" required 
							onChange={(e) => setType(e.target.value)}
						/>
						Accessories
					</label>

					<label>
						<input type="radio" name="itemType" value="tops" 
							onChange={(e) => setType(e.target.value)}
						/>
						Tops
					</label>

					<label>
						<input type="radio" name="itemType" value="bottoms"
							onChange={(e) => setType(e.target.value)}
						/>
						Bottoms
					</label>

					<label>
						<input type="radio" name="itemType" value="shoes"
							onChange={(e) => setType(e.target.value)}
						/>
						Shoes
					</label>
				</div>
				<div>
					<label htmlFor="price">Price:</label>
					<input type="number" id="price" name="price" step="0.01" required
						onChange={(e) => setPrice(e.target.value)}
					/>
				</div>

				<div>
					<label htmlFor="image">Upload Image:</label>
					<input type="file" id="image" name="image" accept="image/*"
						onChange={(e) => e.target.files && setImage(e.target.files[0] || null)}
					/>
				</div>

				<div>
					<button type="submit" >Add</button>
				</div>

				</form>
			</div>
		</>
}

export default Add;
