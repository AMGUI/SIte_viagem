import React from 'react'
import './estilo.css'
import logo from '../../assets/img/logo.png'
import brazil from '../../assets/img/brasil.png'
import torre from '../../assets/img/torre.png'
import japn from '../../assets/img/japn.png'
import face from '../../assets/img/face.svg'
import insta from '../../assets/img/Insta.svg'
import twi from '../../assets/img/twi.svg'
import linkd from '../../assets/img/linkd.svg'
import google from '../../assets/img/google.svg'

function Home (){
    return (
        <div className="container">

		<header id="header-aline">
			<div id="header-logo">
				<img src={logo} alt="Logo" /> 
			</div>
			<nav>
				
				<a href="#">Home</a>
				<a href="#">About</a>
				<a href="#">Services</a>
				<a href="#">Portfolio</a>
				<a href="#">Team</a>
				<a href="#">Contact</a>

			</nav>
			
		</header>



		<div className="corpo">	
			<h1 id="titulo">Uma nova aventura a sua espera </h1>

			<div className="corpo-artigos">

				<div className="carde">
					<div className="imagBx">
						<img src={brazil} /> 
					</div>
					<h2 className="plano">Nacional</h2>
					<div className="ps-carde">
						<h2>Rio de Janeiro</h2>
						<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
					</div>
				</div>

				<div className="carde">
					<div className="imagBx">
						<img src={torre} />  
					</div>
					<h2 className="plano">Europa</h2>
					<div className="ps-carde">
						<h2>Paris</h2>
						<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
					</div>
				</div>

				<div className="carde">
					<div className="imagBx">
						<img src={japn} />  
					</div>
					<h2 className="plano">Mercosul</h2>
					<div className="ps-carde">
						<h2>Machu picchu</h2>
						<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
					</div>
				</div>
				
			</div>
		</div>	

		


		<footer>
			<div className="incones">
				<ul>
					<li><a href="+"> 
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<i  aria-hidden="true"> <img className="face" src={face}/> </i>


						</a>
					</li>

					<li><a href="+"> 
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<i className="fa fa-instagram" aria-hidden="true"> <img className="lin" src={insta}/></i>

						</a>
					</li>

					<li><a href="+"> 
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<i className="fa fa-linkedin" aria-hidden="true"><img className="face" src={linkd}/></i>

						</a>
					</li>

					<li><a href="+"> 
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<i className="fa fa-google-plus" aria-hidden="true"><img className="lin" src={google}/></i>

						</a>
					</li>

					<li><a href="+"> 
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<i className="fa fa-twitter" aria-hidden="true"><img className="lin" src={twi}/></i>

						</a>
					</li>
	
				</ul>
			</div>
		</footer>


	

	</div>
    )

}
export default Home