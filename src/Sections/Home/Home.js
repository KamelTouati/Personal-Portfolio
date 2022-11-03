import './Home.css'
import Title from '../../Components/Title/Title'
import { MdFacebook } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { AiFillBehanceCircle } from "react-icons/ai";
import personalImg from '../../assets/images/personal\ img.png'

const Home = () => {
	return (
		<>
			<div className='flex flex-col justify-center items-center my-4'>
				<div className='flex flex-col justify-center items-center'>
					<Title>&#9995; Hi !</Title>
					<h1 className='font-extrabold text-white text-[52px]'>Touati Kamel</h1>	
				</div>
				<div className='md:h-[480px] md:w-[480px] h-[280px] w-[280px] flex justify-center items-center'>
					<div className='rounded-full md:h-[450px] md:w-[450px] bg-[var(--color2)] h-[262px] w-[262px]'></div>
					<div className='rounded-full md:h-[480px] md:w-[480px] bg-purple absolute top-[0] left-[0] h-[280px] w-[280px]'></div>
					<img src={personalImg} className='absolute bottom-0 right-0 rounded-full'/>
				</div>
				<div className='mt-6'>
					<p className='text-[var(--color3)] text-[20px] font-light'>Front-end developer · UI designer</p>
					<div className='flex justify-center items-center text-[var(--color3)] md:text-[36px] text-[24px] mt-4'>
						<span className='px-4'><MdFacebook /></span>
						<span className='px-4'><BsInstagram /></span>
						<span className='px-4'><BsGithub /></span>
						<span className='px-4'><BsLinkedin /></span>
						<span className='px-4'><AiFillBehanceCircle /></span>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home