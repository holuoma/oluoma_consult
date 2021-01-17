import React from 'react';
import Styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
	return (
		<FooterContainer className="main-footer">
			<div className="footer-middle">
				<div className="container">
					<div className="row">
						{/* Colummn 1 */}

						<div className="col-md-3 col-sm-6">
							<h5>About Oluoma Consult</h5>
							<ul className="list-unstyled">
								<li>Henry Oluoma</li>
								<li>Görlitzerstr. 11</li>
								<li>D - 34123 Kassel</li>
								<li>Tel.: +49 176 32703981</li>
							</ul>
						</div>
						{/* Colummn 2 */}
						<div className="col-md-3 col-sm-6">
							<h4>Help</h4>
							<ul className="list-unstyled">
								<li><a href="/">Title1</a></li>
								<li><a href="/">Title1</a></li>
								<li><a href="/">Title1</a></li>
								<li><a href="/">Title1</a></li>
							</ul>
						</div>
						{/* Colummn 3 */}
						<div className="col-md-3 col-sm-6">
							<h4>Categories</h4>
							<ul className="list-unstyled">
								<li><a href="/">Title1</a></li>
								<li><a href="/">Title1</a></li>
								<li><a href="/">Title1</a></li>
								<li><a href="/">Title1</a></li>
							</ul>
						</div>
						
						{/* <div className="col-md-3 col-sm-6">
							<h4>About Transporex</h4>
							<ul className="list-unstyled">
								<li><a href="/">Title1</a></li>
								<li><a href="/">Title1</a></li>
								<li><a href="/">Title1</a></li>
								<li><a href="/">Title1</a></li>
							</ul>
						</div> */}
					</div>

					{/*Footer Bottom*/}
					<div className="footer-bottom">
						<p className="text-xs-center">
							&copy;{new Date().getFullYear()} Oluoma Consult - All Rights Reserved
						</p>
					</div>
				</div>
			</div>
		</FooterContainer>
	);
}

export default Footer;

const FooterContainer = Styled.footer`
    .footer-middle {
     	background: #1b1642;
        padding-top: 3rem;
        color: var(--mainWhite);
    }

    .footer-bottom {
        padding-top: 2rem;
		padding-bottom: 2rem;
		justify-content: center;
		
    }

    .ul li a {
        color: var(--mainGrey);
    }

    .ul li a:hover {
        color: var(---mainLightGrey);
    }
`;
