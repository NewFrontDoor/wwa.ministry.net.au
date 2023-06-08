import React from "react";

export default () => (
	<footer id="footer">
		<div className="container">
			<div className="row credits">
				<div className="col-md-12">
					<div className="row social">
						<div className="col-md-12">
							<a
								href="https://www.facebook.com/WWATasmania/"
								target="_blank"
								rel="noreferrer noopener"
								className="facebook"
							>
								<span className="socialicons ico1"></span>
								<span className="socialicons_h ico1h"></span>
							</a>

							<a
								href="https://open.spotify.com/playlist/03eHthhMbnJz5gn6KuWUxT"
								target="_blank"
								rel="noreferrer noopener"
								className="spotify"
							>
								<i className="fab fa-spotify"></i>
							</a>
							<a href="mailto:admin@wwa.ministry.net.au" target="_blank" rel="noreferrer noopener" className="email">
								<i className="glyphicon glyphicon-envelope"></i>
							</a>
						</div>
					</div>
					<div className="row copyright">
						<div className="col-md-12">
							© 2023 Women's Weekend Away. Website by{" "}
							<a href="https://newfrontdoor.org/" target="_blank" rel="noreferrer noopener" className="footer-link">
								New Front Door
							</a>
							.
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
);
