const lists = document.querySelectorAll('.list ul li');
lists.forEach((list) => {
	list.addEventListener('click', (e) => {
		lists.forEach((list) => {
			list.classList.remove('active');
		});
		if (e.target.classList.contains('close')) {
			list.querySelector('.close').addEventListener('click', () => {
				list.classList.remove('active');
			});
		} else {
			list.classList.add('active');
			let buttons = list.querySelector('.buttons');
		}
	});
});
