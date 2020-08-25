import React from 'react'
import './estilo.css'
import logo from '../../assets/img/logo.png'
import brazil from '../../assets/img/brasil.png'
import torre from '../../assets/img/torre.png'
import japn from '../../assets/img/japn.png'
import face from '../../assets/img/face.png'

function Home (){
    return (
        <div classname="container">

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



		<div classname="corpo">	
			<h1 id="titulo">Uma nova aventura a sua espera </h1>

			<div classname="corpo-artigos">

				<div classname="carde">
					<div classname="imagBx">
						<img src={brazil} /> 
					</div>
					<h2 classname="plano">Nacional</h2>
					<div classname="ps-carde">
						<h2>Rio de Janeiro</h2>
						<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
					</div>
				</div>

				<div classname="carde">
					<div classname="imagBx">
						<img src={torre} />  
					</div>
					<h2 classname="plano">Europa</h2>
					<div classname="ps-carde">
						<h2>Paris</h2>
						<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
					</div>
				</div>

				<div classname="carde">
					<div classname="imagBx">
						<img src={japn} />  
					</div>
					<h2 classname="plano">Mercosul</h2>
					<div classname="ps-carde">
						<h2>Machu picchu</h2>
						<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
					</div>
				</div>
				
			</div>
		</div>	

		


		<footer>
			<div classname="incones">
				<ul>
					<li><a href="+"> 
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<i  aria-hidden="true"> <img src={face}/> </i>


						</a>
					</li>

					<li><a href="+"> 
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<i classname="fa fa-instagram" aria-hidden="true"> <img src={face}/></i>

						</a>
					</li>

					<li><a href="+"> 
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<i classname="fa fa-linkedin" aria-hidden="true"><img src={face}/></i>

						</a>
					</li>

					<li><a href="+"> 
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<i classname="fa fa-google-plus" aria-hidden="true"><img src={face}/></i>

						</a>
					</li>

					<li><a href="+"> 
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<i classname="fa fa-twitter" aria-hidden="true"><img src={face}/></i>

						</a>
					</li>
	
				</ul>
			</div>
		</footer>


	

	</div>
    )

}
export default Home