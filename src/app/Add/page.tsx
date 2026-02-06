"use client";

import styles from './page.module.css'

function Add() {
	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		alert("Item added(not)")
	}

	return <>
			<div className={styles.form} >
				<h1> Screen for adding an item</h1>
				<form className="addItem" onSubmit={onSubmit}>
				<div>
					<label htmlFor="itemName">Item Name:</label>
					<input type="text" id="itemName" name="itemName" required />
				</div>
				<div>
					<p>Item Type:</p>
					<label>
						<input type="radio" name="itemType" value="accessories" required />
						Accessories
					</label>

					<label>
						<input type="radio" name="itemType" value="tops" />
						Tops
					</label>

					<label>
						<input type="radio" name="itemType" value="bottoms" />
						Bottoms
					</label>

					<label>
						<input type="radio" name="itemType" value="shoes" />
						Shoes
					</label>
				</div>
				<div>
					<label htmlFor="price">Price:</label>
					<input type="number" id="price" name="price" step="0.01" required />
				</div>

				<div>
					<label htmlFor="image">Upload Image:</label>
					<input type="file" id="image" name="image" accept="image/*" required />
				</div>

				</form>
			</div>
		</>
}

export default Add;
