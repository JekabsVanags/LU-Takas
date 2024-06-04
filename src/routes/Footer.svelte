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
		z-index: 1;
	}

	.section{
		display: flex;
		flex-direction: column;
		width: 40%;
	}
	.section p{
		padding: 0px;
		margin: 0px;
	}

	@media (max-width: 800px) {
	.container {
		flex-direction: column;
		justify-content: center;
		padding-left: 10%;
		padding-right: 10%;
		z-index: 2;
	}

	.section{
		width: 80%;
		margin-top: 20px;
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
			<p>📧   jekabs.vanags2001@gmail.com</p>
			<p>📞   29226470</p>
		</div>
	</div>

	<div class="section">
		<p>Mājaslapa izstrādāta studiju kursa "Tīmekļa dizaina pamati" ietvaros. Visi izmantotie attēli ir no studenta personīgajiem arhīviem.</p>
		<p>Darba izstrādātājs, datorzinātņu kursu aprakstu autors: Jēkabs Vanags.</p>
		<p>Ģeogrāfijas kursu apraksti: Kārlis Plostnieks, Una Ozola.</p>
	</div>
</div>