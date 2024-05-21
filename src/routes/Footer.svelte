<style>
	.container {
		background-color: #164270;
		height: fit-content;
		display: flex;
		flex: 0 1;
		flex-direction: row;
		padding-left: 15%;
		padding-right: 15%;
		justify-content: space-between;
		align-items: center;
		min-height: 15vh;
		box-shadow: 0px 0px 20px black;
	}

	.section{
		display: flex;
		flex-direction: column;
		width: 40%;
	}

	@media (max-width: 800px) {
	.container {
		flex-direction: column;
	}

	.section{
		width: 80%;
	}
}

	h1{
		font-size: 16px;
		font-weight: 600;
		color: #EAF1DB;
	}

	p{
		font-size: 16px;
		color: #EAF1DB;
	}

</style>

<div class="container">
	<div class="section">
		<h1>Saziņai</h1>
		<div>
			<p>📧   epasts@epasts</p>
			<p>📞   29222222</p>
		</div>
	</div>

	<div class="section">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus  
			velit mauris, eu dapibus mauris lobortis a. Nulla luctus justo diam, vel  
			cursus purus tempor id. Etiam efficitur risus quis odio consectetur, et  
			malesuada tellus condimentum.</p>
	</div>
</div>