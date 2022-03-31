import React, { useState } from 'react'
import './Navbar.scss'
import { image } from '../../constant'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import {motion} from 'framer-motion'

const Navbar = () => {
	const [toggle, setToggle] = useState(false)
	return (
	<nav className='app__navbar'>
		<div className='app__navbar-logo'>
			<img src={image.logo} alt="logo" />
		</div>
		<ul className='app__navbar-links'>
		{['home','about','contact','work','skill'].map((item) => (
		<li className='app__flex p-text ' key={`link=${item}`}>
			<div />
			<a href={`#{item}`}>{item}</a>
		</li>
		))}
		</ul>
		<div className='app__navbar-menu'>
			<HiMenuAlt4 onClick={() => setToggle(true) } />
			{
				toggle && (
					<motion.div 
						whileInView={ {x :[300,0]}} 
						transition={{duratoin: 0.85, ease: 'easeOut'}}
					>
							<HiX onClick={() => setToggle(false)} />
							<ul>
								{['home','about','contact','work','skill'].map((item) => (
									<li key={item}>
										<a href={`#{item}`} onClick={() => setToggle(false)} >{item}</a>
									</li> 
								))}
							</ul>
					</motion.div>
				)}
		</div>
	</nav>
	)
}
export default Navbar