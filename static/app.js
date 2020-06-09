{
	/* <form method="POST" action="/users/add_like/{{ msg.id }}" id="messages-form">
    {% if msg.user_id == g.user.id %}
    {% elif msg.id in liked_messages %}
        <button class="btn btn-sm btn-primary">
        <i class="far fa-thumbs-up"></i>
    {% else %}
        <button class="btn btn-sm btn-secondary">
        <i class="far fa-thumbs-up"></i>
    {% endif %} 
</form> */
}

$('.like').on('click', async function(evt) {
	evt.preventDefault();

	let $msg = $(evt.target).closest('form');
	let msgId = $msg.attr('data-msg-id');
	// console.log($msg);
	// console.log(msgId);

	await axios.post(`/users/add_like/${msgId}`);
});
