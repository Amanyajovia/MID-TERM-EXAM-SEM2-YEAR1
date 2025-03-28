// Section D: CRUD Project - "Bucket List" (10 Marks)
// Develop a simple JavaScript application named "Bucket List" that can do the following:
// 1. Add an item to the bucket list (Create).
// 2. Display the list of items (Read/List).
// 3. Remove an item from the bucket list (Delete).
// • Use simple HTML, CSS for the interface and vanilla JavaScript for functionality.
// • Demonstrate adding, listing, and deleting items with buttons.
const itemInput = document.getElementById('Input');
const addButton = document.getElementById('add_button');
const bucketList = document.getElementById('bucketList');

addButton.addEventListener('click', function() {
    const newItemText = itemInput.value.trim();
    if (newItemText) {
        const newItem = document.createElement('li');
        newItem.textContent = newItemText;
        bucketList.appendChild(newItem);
        itemInput.value = ''; // Clears the input field
    }
});

bucketList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        bucketList.removeChild(event.target); // Removes the clicked item
}
});
