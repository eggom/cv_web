const emaildecode = (e) => {
	let email = atob(e.dataset.email);
	e.href = 'mailto:'+email;
	e.innerHTML = email;
}